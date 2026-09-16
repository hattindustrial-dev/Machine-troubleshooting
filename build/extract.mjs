// Extracts the BuiltWright modules into JSON: card data, diagnostic trees, self-check
// banks, tab structure and panel HTML. Reads app/, writes data/. Idempotent.
//
//   node build/extract.mjs
//
// The HTML stays the source of truth until the renderer lands; this script is how the
// data gets out of it without hand transcription.

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { scriptBlocks, topLevelLiterals, matchDelimiter } from './lib/scan.mjs';
import { treeIds, treeTab, cardGroups, revealGroups, toggleFunctions, bespokeFunctions, header, tabBar, cssRules } from './lib/config.mjs';
import { wrap, readModule } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
// Lives inside app/ so the JSON ships with the application and the renderer can fetch it
// at a path that survives being copied to a static host.
const DATA = join(APP, 'data');

// Variables that hold runtime state rather than content. They are reassigned as the user
// clicks, so their literal value is just an empty starting point.
const RUNTIME_STATE = new Set(['scAnswered', 'diagHistory', 'history', 'state', 'answered', 'picked']);

const read = (f) => readFileSync(join(APP, f), 'utf8');

// Evaluate one literal in an isolated context. Data literals are pure, so a bare context
// is enough; anything that reaches for the DOM is not content and is meant to fail here.
function evalLiteral(source) {
  try {
    const value = vm.runInNewContext(`(${source})`, Object.create(null), { timeout: 2000 });
    JSON.stringify(value); // reject functions, cycles, undefined-only objects
    return { ok: true, value };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

function extractLiterals(html) {
  const data = {};
  const skipped = [];
  for (const block of scriptBlocks(html)) {
    for (const { name, source } of topLevelLiterals(block.code)) {
      if (RUNTIME_STATE.has(name)) { skipped.push({ name, reason: 'runtime state' }); continue; }
      const r = evalLiteral(source);
      if (!r.ok) { skipped.push({ name, reason: r.error }); continue; }
      const empty = r.value && typeof r.value === 'object' && Object.keys(r.value).length === 0;
      if (empty) { skipped.push({ name, reason: 'empty literal' }); continue; }
      data[name] = r.value;
    }
  }
  return { data, skipped };
}

// Panel HTML, kept as fragments. The brief keeps prose panels as HTML rather than
// forcing everything into a card shape.
function extractPanels(html) {
  const panels = {};
  const re = /<div id="panel-([a-z0-9]+)"[^>]*>/g;
  let m;
  while ((m = re.exec(html))) {
    const open = html.lastIndexOf('<', m.index + m[0].length - 1);
    const end = matchTag(html, m.index);
    if (end === -1) continue;
    panels[m[1]] = html.slice(m.index + m[0].length, end).trim();
  }
  return panels;
}

// Balance <div> tags from an opening div to its matching close.
function matchTag(html, start) {
  const re = /<(\/?)div\b[^>]*?(\/?)>/g;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    if (m[2] === '/') continue; // self closing
    depth += m[1] ? -1 : 1;
    if (depth === 0) return m.index;
  }
  return -1;
}

// Grab a complete <div class="x"> ... </div> block, braces balanced by tag depth.
function blockByClass(html, cls) {
  const m = html.match(new RegExp(`<div class="${cls}"[^>]*>`));
  if (!m) return null;
  const start = html.indexOf(m[0]);
  const end = matchTag(html, start);
  return end === -1 ? null : html.slice(start, end) + '</div>';
}

// One row of the extract report, from a module however it was obtained.
function summarise(mod, skipped) {
  return {
    key: mod.key,
    cardSets: Object.keys(mod.cards).length,
    results: Object.values(mod.trees).reduce((a, t) => a + countResults(t), 0),
    questions: countQuestions(mod.selfcheck),
    panels: Object.keys(mod.panels).length,
    tabs: mod.tabs.length,
    skipped,
  };
}

function countResults(tree) {
  let n = 0;
  for (const node of Object.values(tree || {})) if (node && node.type === 'result') n++;
  return n;
}

function countQuestions(bank) {
  let n = 0;
  for (const entries of Object.values(bank || {})) if (Array.isArray(entries)) n += entries.length;
  return n;
}

const index = JSON.parse(read('builtwright_index.json'));

mkdirSync(join(DATA, 'modules'), { recursive: true });

const report = [];
const outputs = [];
// Once a module has been cut over its page is a shell and the content lives in
// app/data/modules. Re-reading a shell would produce an empty module and overwrite the
// real data, so the existing data is carried through untouched instead.
const isShell = (html) => html.includes('bw-renderer.js');
let carried = 0;

for (const mod of index.modules) {
  const html = read(mod.file);
  if (isShell(html)) {
    const carriedMod = readModule(join(DATA, 'modules'), mod.key);
    outputs.push(carriedMod);
    report.push(summarise(carriedMod, [{ name: '-', reason: 'page is a shell, data carried through' }]));
    carried++;
    continue;
  }
  const { data, skipped } = extractLiterals(html);
  const panels = extractPanels(html);

  const trees = {};
  const cards = {};
  let selfcheck = null;
  for (const [name, value] of Object.entries(data)) {
    if (/diagNodes/i.test(name)) trees[name] = value;
    else if (name === 'SELFCHECK') selfcheck = value;
    else cards[name] = value;
  }

  const scripts = scriptBlocks(html).map((b) => b.code).join('\n');
  const bar = tabBar(html);
  const out = {
    key: mod.key,
    num: mod.num,
    name: mod.name,
    source: mod.file,
    // The tab bar as rendered, falling back to the index when a file has no bar to read.
    tabs: bar.length ? bar : Object.entries(mod.tabs).map(([id, label]) => ({ id, label, active: false, style: '' })),
    render: (() => {
      const groups = cardGroups(scripts);
      const reveals = revealGroups(scripts);
      const toggles = toggleFunctions(scripts);
      // A function matched as both a card group and a reveal is a reveal: it switches a
      // detail block rather than rendering a card.
      for (const name of Object.keys(reveals)) delete groups[name];
      const covered = new Set([...Object.keys(groups), ...Object.keys(reveals), ...toggles.map((t) => t.name)]);
      return {
        ...header(html),
        tree: treeIds(scripts),
        treeTab: treeTab(scripts),
        groups,
        reveals,
        toggles,
        bespoke: bespokeFunctions(scripts, covered),
      };
    })(),
    cards,
    trees,
    selfcheck,
    panels,
    // Everything the page carries outside the panels: the document title, the Related
    // strip every module ends on, and the footer.
    title: (html.match(/<title>([^<]*)<\/title>/) || [, ''])[1],
    related: blockByClass(html, 'related'),
    footer: blockByClass(html, 'bw-footer'),
    css: cssRules(html),
  };
  outputs.push(out);

  report.push(summarise(out, skipped));
}

// ---- Shared stylesheet ----------------------------------------------------------
// The content modules were each built from the same head block, so most of their CSS is
// identical. Rules every content module carries move to app/bw.css; what is left stays
// with the module. Together they are the same rule set the module had before.
const contentModules = outputs.filter((m) => Object.keys(m.trees).length > 0 && !m.cssShared);
const sharedRules = contentModules.length
  ? contentModules.map((m) => new Set(m.css)).reduce((a, b) => new Set([...a].filter((r) => b.has(r))))
  : new Set();

// Emit in the order the widest module lists them so the cascade stays recognisable.
const order = contentModules.length ? contentModules.reduce((a, b) => (a.css.length >= b.css.length ? a : b)).css : [];
// Nothing left to compute the shared sheet from once every module is a shell; keep the
// one already written rather than emptying it.
const sharedCss = contentModules.length
  ? order.filter((r) => sharedRules.has(r))
  : cssRules('<style>' + readFileSync(join(APP, 'bw.css'), 'utf8') + '</style>');
if (contentModules.length) writeFileSync(join(APP, 'bw.css'), `/* BuiltWright shared module styles. Generated by build/extract.mjs, do not edit. */\n${sharedCss.join('\n')}\n`);

for (const mod of outputs) {
  if (!mod.cssShared) {
    mod.cssShared = sharedCss.length;
    mod.css = mod.css.filter((r) => !sharedRules.has(r)); // what this module adds on top
  }
  writeFileSync(join(DATA, 'modules', `${mod.key}.js`), wrap(mod.key, mod));
}

// The shared views. These are generated files today, so their data is extracted the same
// way and becomes the input the renderer will rebuild them from.
const shared = {};
for (const [name, file, wanted] of [
  ['hub', 'builtwright_diagnose_hub_v1.html', ['modules', 'nodes', 'symptoms']],
  ['pm', 'builtwright_pm_library_v1.html', ['TASKS', 'COMP', 'INTERVALS']],
  ['search', 'builtwright_search_v1.html', ['IDX', 'RANK']],
]) {
  const { data } = extractLiterals(read(file));
  const picked = {};
  for (const key of wanted) if (data[key] !== undefined) picked[key] = data[key];
  shared[name] = picked;
  writeFileSync(join(DATA, `${name}.json`), JSON.stringify(picked, null, 2) + '\n');
}

// ---- Pocket cards ----------------------------------------------------------------
// These ten cards are authored content, not derived from the modules: they were written
// as a Python list inside pass3.py and rendered straight to HTML. Lifting them into JSON
// puts them on the same footing as everything else, so a renderer can produce the page.
const pocketHtml = read('builtwright_pocket_cards_v1.html');
const pocketCards = [...pocketHtml.matchAll(
  /<div class="card ([a-z]+)"><div class="card-title">([^<]*)<\/div><ol>([\s\S]*?)<\/ol><div class="src">Full version: <a href="([^"#]+)#([^"]+)">([^<]*)<\/a><\/div><\/div>/g
)].map((m) => ({
  cls: m[1],
  title: m[2],
  steps: [...m[3].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((s) => s[1]),
  file: m[4],
  tab: m[5],
  linkText: m[6],
}));
writeFileSync(join(DATA, 'pocket-cards.json'), JSON.stringify(pocketCards, null, 2) + '\n');

writeFileSync(join(DATA, 'extract-report.json'), JSON.stringify({
  generated_from: index.version,
  modules: report,
  shared: Object.fromEntries(Object.entries(shared).map(([k, v]) => [k, Object.keys(v)])),
}, null, 2) + '\n');

const totals = report.reduce((a, r) => ({
  results: a.results + r.results,
  questions: a.questions + r.questions,
}), { results: 0, questions: 0 });

console.log(`modules written : ${report.length}${carried ? ` (${carried} carried through from data, page is a shell)` : ''}`);
console.log(`diagnostic results: ${totals.results} (index says ${index.totals.diagnostic_results})`);
console.log(`self-check questions: ${totals.questions} (index says ${index.totals.self_check_questions})`);
for (const [k, v] of Object.entries(shared)) console.log(`shared/${k}: ${Object.keys(v).join(', ') || 'nothing extracted'}`);
