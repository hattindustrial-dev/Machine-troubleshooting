// Structural checks over the extracted JSON in data/, plus the integrity checks the
// brief requires on app/. Exits non-zero on any failure.
//
//   node build/validate.mjs

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { scriptBlocks } from './lib/scan.mjs';
import { cssRules } from './lib/config.mjs';
import { readModules, readData } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const DATA = join(APP, 'data');

const failures = [];
const notes = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

const modules = readModules(join(DATA, 'modules'));

// A cut over page mounts the renderer instead of carrying its content inline.
const isShell = (html) => html.includes('bw-renderer.js');

// ---- 1. Diagnostic trees ----------------------------------------------------
let results = 0, transitions = 0, missingPrevent = 0;
for (const mod of modules) {
  for (const [treeName, tree] of Object.entries(mod.trees)) {
    const where = `${mod.key}/${treeName}`;
    for (const [id, node] of Object.entries(tree)) {
      if (node && node.type === 'result') {
        results++;
        for (const field of ['cls', 'label', 'text']) {
          if (!node[field]) fail(where, `result '${id}' has no ${field}`);
        }
        if (!['action', 'fix', 'escalate', 'info'].includes(node.cls)) {
          fail(where, `result '${id}' has unknown cls '${node.cls}'`);
        }
        // prevent tails are what the PM library is generated from
        if (!node.prevent) missingPrevent++;
      } else if (node && node.q) {
        if (!Array.isArray(node.options) || node.options.length === 0) {
          fail(where, `question '${id}' has no options`);
        }
        for (const opt of node.options || []) {
          transitions++;
          if (!opt.label) fail(where, `question '${id}' has an option with no label`);
          if (!(opt.next in tree)) fail(where, `'${id}' option '${opt.label}' points at missing node '${opt.next}'`);
        }
      } else {
        fail(where, `node '${id}' is neither a question nor a result`);
      }
    }
    // every node should be reachable from start
    if (tree.start) {
      const seen = new Set(['start']);
      const queue = ['start'];
      while (queue.length) {
        const node = tree[queue.pop()];
        for (const opt of (node && node.options) || []) {
          if (!seen.has(opt.next) && tree[opt.next]) { seen.add(opt.next); queue.push(opt.next); }
        }
      }
      const orphans = Object.keys(tree).filter((k) => !seen.has(k));
      if (orphans.length) notes.push(`${where}: ${orphans.length} node(s) unreachable from start: ${orphans.slice(0, 5).join(', ')}`);
    } else {
      notes.push(`${where}: no 'start' node`);
    }
  }
}

// ---- 2. Self-check banks ----------------------------------------------------
let questions = 0;
for (const mod of modules) {
  if (!mod.selfcheck) continue;
  for (const [tab, entries] of Object.entries(mod.selfcheck)) {
    const where = `${mod.key}/SELFCHECK/${tab}`;
    if (!Array.isArray(entries)) { fail(where, 'bank is not an array'); continue; }
    entries.forEach((entry, i) => {
      questions++;
      const [stem, options, correct, why] = entry;
      if (typeof stem !== 'string' || !stem) fail(where, `q${i} has no stem`);
      if (!Array.isArray(options) || options.length < 2) fail(where, `q${i} needs at least two options`);
      if (!Number.isInteger(correct) || correct < 0 || correct >= (options || []).length) {
        fail(where, `q${i} correct index ${correct} is out of range`);
      }
      if (typeof why !== 'string' || !why) fail(where, `q${i} has no explanation`);
    });
  }
}

// ---- 3. Tabs and panels agree with the HTML ---------------------------------
for (const mod of modules) {
  const html = readFileSync(join(APP, mod.source), 'utf8');
  const shell = isShell(html);
  const panelIds = shell
    ? new Set(mod.tabs.map((t) => t.id))
    : new Set([...html.matchAll(/id="panel-([a-z0-9]+)"/g)].map((m) => m[1]));
  for (const tab of mod.tabs) {
    if (!panelIds.has(tab.id)) fail(mod.key, `tab '${tab.id}' has no panel in ${mod.source}`);
    if (!mod.panels[tab.id]) fail(mod.key, `tab '${tab.id}' has no panel content in the data`);
  }
  // Once the page is a shell the data is the only copy of the content.
  if (shell) {
    if (!mod.title || !mod.footer) fail(mod.key, 'shell page but the data has no title or footer');
    // Content modules end on a Related strip; the three documents do not have one.
    if (Object.keys(mod.trees).length && !mod.related) fail(mod.key, 'shell page but the data has no Related strip');
    if (!mod.css.length && !mod.cssShared) fail(mod.key, 'shell page but the data carries no CSS');
  }
  // Content modules end on Safety. The three documents (curriculum, manager, reference)
  // have no safety tab by design, so only flag a safety tab that is not last.
  const last = mod.tabs[mod.tabs.length - 1];
  if (mod.tabs.some((t) => t.id === 'safety') && last.id !== 'safety') {
    fail(mod.key, `has a safety tab but it is not last (last is '${last.id}')`);
  }
}

// ---- 4. Links and panel fragments across the app -----------------------------
const files = readdirSync(APP).filter((f) => /^builtwright_.*\.html$/.test(f));
const bySource = new Map(modules.map((m) => [m.source, m]));

// A cut over module has no panels in its HTML: the renderer builds them from the data at
// load. For those files the tab ids in the data are the panels the page will have, which
// is what every link into the page has to resolve against.
const panels = new Map(files.map((f) => {
  const html = readFileSync(join(APP, f), 'utf8');
  if (isShell(html) && bySource.has(f)) return [f, new Set(bySource.get(f).tabs.map((t) => t.id))];
  return [f, new Set([...html.matchAll(/id="panel-([a-z0-9]+)"/g)].map((m) => m[1]))];
}));
let links = 0;
for (const f of files) {
  const html = readFileSync(join(APP, f), 'utf8');
  for (const m of html.matchAll(/href="([^"#]+\.html)(?:#([^"]*))?"/g)) {
    links++;
    if (!existsSync(join(APP, m[1]))) fail(f, `href points at missing file ${m[1]}`);
    else if (m[2] && !panels.get(m[1]).has(m[2])) fail(f, `href points at missing panel ${m[1]}#${m[2]}`);
  }
}

// ---- 4b. Markup balance ------------------------------------------------------
// Two shipped bugs came from unbalanced div markup: browsers silently repair it, so it
// renders as nesting that was never intended. Check the body of each page balances and
// that every panel sits at the same depth, which is what keeps them inside .bw-wrap.
for (const f of files) {
  const html = readFileSync(join(APP, f), 'utf8');
  const body = html.slice(html.indexOf('<body'), html.indexOf('<script') === -1 ? undefined : html.indexOf('<script'));
  let depth = 0;
  const depths = [];
  const re = /<(\/?)div\b[^>]*>|<div id="panel-([a-z0-9]+)"/g;
  for (const m of body.matchAll(/<div id="panel-([a-z0-9]+)"|<div\b[^>]*>|<\/div>/g)) {
    if (m[0].startsWith('</')) { depth--; if (depth < 0) { fail(f, 'more </div> than <div> before offset ' + m.index); break; } }
    else { if (m[1]) depths.push([m[1], depth]); depth++; }
  }
  const levels = new Set(depths.map((d) => d[1]));
  if (levels.size > 1) {
    const odd = depths.filter((d) => d[1] !== depths[0][1]).slice(0, 4).map((d) => `panel-${d[0]} at depth ${d[1]}`);
    fail(f, `panels are not all at the same depth (${odd.join(', ')}); a panel is closing early`);
  }
}

// Links inside the module data. Once a page is a shell its Related strip and every link
// in its panels live here, so checking only the HTML would stop seeing most of them.
for (const mod of modules) {
  const content = [mod.related || '', mod.footer || '', ...Object.values(mod.panels)].join('\n');
  for (const m of content.matchAll(/href="([^"#]+\.html)(?:#([^"]*))?"/g)) {
    links++;
    if (!existsSync(join(APP, m[1]))) fail(mod.key, `data links to missing file ${m[1]}`);
    else if (m[2] && !panels.get(m[1]).has(m[2])) fail(mod.key, `data links to missing panel ${m[1]}#${m[2]}`);
  }
}

// ---- 5. House style: no em dashes --------------------------------------------
// Checked over the pages and over the module data, because the prose moved into the data
// when the pages became shells.
for (const f of files) {
  const n = (readFileSync(join(APP, f), 'utf8').match(/—/g) || []).length;
  if (n) fail(f, `${n} em dash(es)`);
}
for (const mod of modules) {
  const n = (JSON.stringify(mod).match(/—/g) || []).length;
  if (n) fail(mod.key, `${n} em dash(es) in the module data`);
}

// ---- 6. Inline script syntax --------------------------------------------------
const tmp = mkdtempSync(join(tmpdir(), 'bw-'));
let blocks = 0;
for (const f of files) {
  for (const [i, block] of scriptBlocks(readFileSync(join(APP, f), 'utf8')).entries()) {
    blocks++;
    const p = join(tmp, `${f}.${i}.js`);
    writeFileSync(p, block.code);
    try { execFileSync(process.execPath, ['--check', p], { stdio: 'pipe' }); }
    catch (e) { fail(f, `script block ${i} is not valid JS: ${String(e.stderr).split('\n')[0]}`); }
  }
}

// ---- 6b. The CSS split is lossless ---------------------------------------------
// bw.css plus each module's own blocks must be exactly the rule set that module had
// inline. Losing a block here silently changes the rendering, and hoisting one out of an
// @media block silently applies print styling to the screen.
const sharedCssRules = cssRules('<style>' + readFileSync(join(APP, 'bw.css'), 'utf8') + '</style>');
for (const mod of modules) {
  if (!Object.keys(mod.trees).length) continue; // bw.css is built from the content modules
  const source = readFileSync(join(APP, mod.source), 'utf8');
  if (isShell(source)) continue; // nothing inline left to compare against
  const original = cssRules(source);
  const rebuilt = new Set([...sharedCssRules, ...mod.css]);
  const lost = original.filter((r) => !rebuilt.has(r));
  const extra = [...rebuilt].filter((r) => !original.includes(r));
  if (lost.length) fail(mod.key, `${lost.length} CSS block(s) lost in the split, first: ${lost[0].slice(0, 70)}`);
  if (extra.length) fail(mod.key, `${extra.length} CSS block(s) the module never had, first: ${extra[0].slice(0, 70)}`);
}

// ---- 6b2. The shared data files are populated -----------------------------------
// A page that reads its data has nothing left in its markup to extract. Running the
// extractor over one of those pages used to write back what it found, which was nothing.
// An empty data file breaks the page it feeds, so it has to fail here.
for (const [name, keys] of [
  ['hub', ['modules', 'nodes', 'symptoms']],
  ['pm', ['TASKS', 'COMP', 'INTERVALS']],
  ['search', ['IDX', 'RANK']],
  ['components', ['equipment', 'components']],
]) {
  let view;
  try { view = readData(DATA, name); } catch (e) { fail(`data/${name}.js`, `unreadable: ${e.message}`); continue; }
  for (const key of keys) {
    const value = view[key];
    const size = Array.isArray(value) ? value.length : value && typeof value === 'object' ? Object.keys(value).length : 0;
    if (!size) fail(`data/${name}.js`, `${key} is empty`);
  }
}
if (!readData(DATA, 'pocketcards').length) fail('data/pocketcards.js', 'no cards');

// ---- 6c. Every diagnosis is findable in search ---------------------------------
// The search index was generated with a regex that needed label: and text: adjacent on
// one line, so the one module formatted across lines contributed no diagnoses at all.
const searchIdx = readData(DATA, 'search').IDX;
const searchable = new Set(searchIdx.filter((e) => e.k === 'diagnosis').map((e) => `${e.f}|${e.x.toLowerCase()}`));
for (const mod of modules) {
  let absent = 0;
  let firstMissing = '';
  for (const tree of Object.values(mod.trees)) {
    for (const node of Object.values(tree)) {
      if (!node || node.type !== 'result') continue;
      if (!searchable.has(`${mod.source}|${node.label.toLowerCase()}`)) {
        absent++;
        if (!firstMissing) firstMissing = node.label;
      }
    }
  }
  if (absent) fail(mod.key, `${absent} diagnostic result(s) missing from the search index, first: "${firstMissing}"`);
}

const index = JSON.parse(readFileSync(join(APP, 'builtwright_index.json'), 'utf8'));

// ---- 6d. Hub routes ------------------------------------------------------------
// The facility layer is planned on top of the route-to-component tags in the published
// index, so the index has to list every route the hub actually has. The generator matched
// ids beginning with r_ and silently dropped the four that do not.
const hub = readData(DATA, 'hub');
const hubRoutes = Object.entries(hub.nodes).filter(([, n]) => n && n.type === 'route');

for (const [id, route] of hubRoutes) {
  const target = hub.modules[route.module];
  if (!target) fail('hub', `route '${id}' points at unknown module '${route.module}'`);
  else if (!(route.tab in target.tabs)) fail('hub', `route '${id}' points at '${route.module}' tab '${route.tab}', which does not exist`);
  if (!route.components || !route.components.length) fail('hub', `route '${id}' has no component tags`);
}

// Every route has to be reachable by answering questions from a symptom.
const reachable = new Set();
const queue = hub.symptoms.map((s) => s.id).filter((id) => id in hub.nodes);
if (queue.length !== hub.symptoms.length) fail('hub', 'some symptoms have no matching node');
while (queue.length) {
  const id = queue.pop();
  if (reachable.has(id)) continue;
  reachable.add(id);
  for (const opt of (hub.nodes[id] && hub.nodes[id].options) || []) {
    if (opt.next in hub.nodes) queue.push(opt.next);
  }
}
const stranded = hubRoutes.filter(([id]) => !reachable.has(id)).map(([id]) => id);
if (stranded.length) fail('hub', `${stranded.length} route(s) unreachable from any symptom: ${stranded.slice(0, 5).join(', ')}`);

const publishedRoutes = new Set(index.hub_routes.map((r) => r.id));
const unpublished = hubRoutes.filter(([id]) => !publishedRoutes.has(id)).map(([id]) => id);
if (unpublished.length) fail('index', `${unpublished.length} hub route(s) missing from the index: ${unpublished.join(', ')}`);
if (index.totals.hub_routes !== hubRoutes.length) fail('index', `totals.hub_routes is ${index.totals.hub_routes}, hub has ${hubRoutes.length}`);

// ---- 6e. Pocket cards round trip -------------------------------------------------
// The ten cards are authored content that used to live only inside pass3.py. They are
// data now, so the data has to regenerate the shipped page exactly, character for
// character, or the JSON is not really the source.
const pocketCards = readData(DATA, 'pocketcards');
const pocketHtml = readFileSync(join(APP, 'builtwright_pocket_cards_v1.html'), 'utf8');
// The page renders these at load now, so what is checked is that the data is complete and
// that the page still builds the same markup from it.
if (!pocketCards.length) fail('pocket cards', 'no cards in the data');
if (!pocketHtml.includes("BW_DATA.pocketcards.map")) fail('pocket cards', 'the page no longer renders from the data');
for (const card of pocketCards) {
  for (const field of ['cls', 'title', 'file', 'tab', 'linkText']) {
    if (!card[field]) fail('pocket cards', `a card is missing ${field}`);
  }
  if (!Array.isArray(card.steps) || !card.steps.length) fail('pocket cards', `"${card.title}" has no steps`);
  if (!existsSync(join(APP, card.file))) fail('pocket cards', `"${card.title}" links to missing file ${card.file}`);
  else if (!panels.get(card.file) || !panels.get(card.file).has(card.tab)) {
    fail('pocket cards', `"${card.title}" links to ${card.file}#${card.tab}, which has no such panel`);
  }
}

// ---- 6f. Facility vocabulary ------------------------------------------------------
// The facility layer filters hub routes by matching a machine's component types against
// the tags on each route, so the two vocabularies have to stay the same set. A tag with no
// entry silently drops routes from a machine; an entry no route uses is a dead option.
const vocabulary = readData(DATA, 'components');
const routeTags = new Set(hubRoutes.flatMap(([, r]) => r.components || []));
const vocabTags = new Set(Object.keys(vocabulary.components));
for (const tag of routeTags) {
  if (!vocabTags.has(tag)) fail('facility', `hub routes use component '${tag}' with no entry in components.json`);
}
for (const tag of vocabTags) {
  if (!routeTags.has(tag)) fail('facility', `components.json defines '${tag}', which no hub route uses`);
}
for (const [tag, spec] of Object.entries(vocabulary.components)) {
  if (!spec.label || !spec.icon) fail('facility', `component '${tag}' needs a label and an icon`);
  if (!Array.isArray(spec.fields) || !spec.fields.length) fail('facility', `component '${tag}' has no fields`);
  const keys = new Set();
  for (const f of spec.fields || []) {
    if (!f.key || !f.label) fail('facility', `component '${tag}' has a field with no key or label`);
    if (keys.has(f.key)) fail('facility', `component '${tag}' repeats field key '${f.key}'`);
    keys.add(f.key);
  }
}
if (!Array.isArray(vocabulary.equipment) || !vocabulary.equipment.some((f) => f.key === 'tag')) {
  fail('facility', 'equipment fields must include the equipment number under key "tag"');
}

// ---- 6g. Service worker precache ----------------------------------------------
// addAll rejects as a whole if any entry 404s, which fails the install and leaves the app
// with no offline cache at all. Every listed file has to exist.
const swSource = readFileSync(join(APP, 'sw.js'), 'utf8');
const shellMatch = swSource.match(/const SHELL=(\[[\s\S]*?\]);/);
if (!shellMatch) fail('sw.js', 'no SHELL list found');
else {
  const shellList = JSON.parse(shellMatch[1]);
  for (const entry of shellList) {
    if (!existsSync(join(APP, entry))) fail('sw.js', `precache lists ${entry}, which does not exist`);
  }
  // A shell page is useless offline without its data file.
  for (const mod of modules) {
    if (!isShell(readFileSync(join(APP, mod.source), 'utf8'))) continue;
    for (const needed of [mod.source, `data/modules/${mod.key}.js`, 'bw-renderer.js', 'bw.css']) {
      if (!shellList.includes(needed)) fail('sw.js', `${mod.key} is a shell but ${needed} is not precached`);
    }
  }
}

// ---- 7. Totals against the published index -------------------------------------
if (index.totals.diagnostic_results !== results) fail('index', `totals.diagnostic_results is ${index.totals.diagnostic_results}, extracted ${results}`);
if (index.totals.self_check_questions !== questions) fail('index', `totals.self_check_questions is ${index.totals.self_check_questions}, extracted ${questions}`);

console.log(`modules            ${modules.length}`);
console.log(`diagnostic results ${results} (${missingPrevent} without a prevent tail)`);
console.log(`tree transitions   ${transitions}`);
console.log(`self-check qs      ${questions}`);
console.log(`links checked      ${links}`);
console.log(`script blocks      ${blocks}`);
if (notes.length) {
  console.log(`\nnotes (${notes.length}):`);
  for (const n of notes) console.log(`  - ${n}`);
}
if (failures.length) {
  console.log(`\nFAILURES (${failures.length}):`);
  for (const f of failures) console.log(`  - ${f}`);
  process.exit(1);
}
console.log('\nall checks passed');
