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

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const DATA = join(ROOT, 'data');

const failures = [];
const notes = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

const modules = readdirSync(join(DATA, 'modules'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(DATA, 'modules', f), 'utf8')));

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
  const panelIds = new Set([...html.matchAll(/id="panel-([a-z0-9]+)"/g)].map((m) => m[1]));
  for (const tab of mod.tabs) {
    if (!panelIds.has(tab.id)) fail(mod.key, `tab '${tab.id}' has no panel in ${mod.source}`);
    if (!(tab.id in mod.panels)) fail(mod.key, `tab '${tab.id}' has no extracted panel HTML`);
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
const panels = new Map(files.map((f) => [f, new Set([...readFileSync(join(APP, f), 'utf8').matchAll(/id="panel-([a-z0-9]+)"/g)].map((m) => m[1]))]));
let links = 0;
for (const f of files) {
  const html = readFileSync(join(APP, f), 'utf8');
  for (const m of html.matchAll(/href="([^"#]+\.html)(?:#([^"]*))?"/g)) {
    links++;
    if (!existsSync(join(APP, m[1]))) fail(f, `href points at missing file ${m[1]}`);
    else if (m[2] && !panels.get(m[1]).has(m[2])) fail(f, `href points at missing panel ${m[1]}#${m[2]}`);
  }
}

// ---- 5. House style: no em dashes --------------------------------------------
for (const f of files) {
  const n = (readFileSync(join(APP, f), 'utf8').match(/—/g) || []).length;
  if (n) fail(f, `${n} em dash(es)`);
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

// ---- 7. Totals against the published index -------------------------------------
const index = JSON.parse(readFileSync(join(APP, 'builtwright_index.json'), 'utf8'));
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
