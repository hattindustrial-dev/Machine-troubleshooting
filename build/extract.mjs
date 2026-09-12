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

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const DATA = join(ROOT, 'data');

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
for (const mod of index.modules) {
  const html = read(mod.file);
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

  const out = {
    key: mod.key,
    num: mod.num,
    name: mod.name,
    source: mod.file,
    tabs: Object.entries(mod.tabs).map(([id, label]) => ({ id, label })),
    cards,
    trees,
    selfcheck,
    panels,
  };
  writeFileSync(join(DATA, 'modules', `${mod.key}.json`), JSON.stringify(out, null, 2) + '\n');

  report.push({
    key: mod.key,
    cardSets: Object.keys(cards).length,
    results: Object.values(trees).reduce((a, t) => a + countResults(t), 0),
    questions: countQuestions(selfcheck),
    panels: Object.keys(panels).length,
    tabs: out.tabs.length,
    skipped,
  });
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

writeFileSync(join(DATA, 'extract-report.json'), JSON.stringify({
  generated_from: index.version,
  modules: report,
  shared: Object.fromEntries(Object.entries(shared).map(([k, v]) => [k, Object.keys(v)])),
}, null, 2) + '\n');

const totals = report.reduce((a, r) => ({
  results: a.results + r.results,
  questions: a.questions + r.questions,
}), { results: 0, questions: 0 });

console.log(`modules written : ${report.length}`);
console.log(`diagnostic results: ${totals.results} (index says ${index.totals.diagnostic_results})`);
console.log(`self-check questions: ${totals.questions} (index says ${index.totals.self_check_questions})`);
for (const [k, v] of Object.entries(shared)) console.log(`shared/${k}: ${Object.keys(v).join(', ') || 'nothing extracted'}`);
