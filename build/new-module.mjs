// Scaffolds a new module straight into the data, with no HTML to write by hand.
//
//   node build/new-module.mjs --key welding --num 22 --name "Welding Fundamentals" \
//     --tabs "overview:Overview,process:Processes,troubleshoot:Troubleshoot,selfcheck:Self-Check,safety:Safety"
//
// It writes app/data/modules/<key>.js with an empty but valid module: the tabs you named,
// a placeholder panel in each, a diagnostic tree with a start node, and an empty self-check.
// Fill the panels and the tree with the content, then:
//
//   node build/cutover.mjs --write   generates the page
//   node build/sw.mjs                adds it to the precache
//   node build/validate.mjs          checks it
//
// The index entry is added here too, because validate.mjs holds the published totals to
// what the data actually contains.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { wrap } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const DATA = join(APP, 'data');

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name);
  return i === -1 ? fallback : process.argv[i + 1];
}

const key = arg('key');
const num = arg('num');
const name = arg('name');
const tabsSpec = arg('tabs', 'overview:Overview,troubleshoot:Troubleshoot,selfcheck:Self-Check,safety:Safety');
if (!key || !num || !name) {
  console.log('need --key, --num and --name. See the top of this file.');
  process.exit(1);
}

const file = `builtwright_${key}_v1.html`;
const target = join(DATA, 'modules', `${key}.js`);
if (existsSync(target)) { console.log(`${key} already exists at ${target}`); process.exit(1); }

const tabs = tabsSpec.split(',').map((pair, i) => {
  const [id, label] = pair.split(':');
  return { id: id.trim(), label: (label || id).trim(), active: i === 0, style: id.trim() === 'safety' ? 'border-color:#A32D2D; color:#F09595;' : '' };
});

const panels = {};
for (const tab of tabs) {
  panels[tab.id] = `  <div class="bw-section-label">${tab.label}</div>\n` +
    `  <div class="comp-detail"><div class="comp-detail-body">To be written.</div></div>`;
}

const treeTab = tabs.some((t) => t.id === 'troubleshoot') ? 'troubleshoot'
  : tabs.some((t) => t.id === 'diagnose') ? 'diagnose' : null;

const mod = {
  key,
  num: String(num),
  name,
  source: file,
  tabs,
  render: {
    title: name,
    badge: `Module ${num}`,
    tree: treeTab ? { progress: `${key}-progress`, container: `${key}-tree` } : null,
    treeTab,
    groups: {},
    reveals: {},
    toggles: [],
    bespoke: [],
    helpers: [],
    init: null,
  },
  cards: {},
  trees: treeTab ? {
    diagNodes: {
      start: {
        q: 'What is the symptom?',
        hint: 'Lock out and verify zero energy before opening anything.',
        options: [{ label: 'To be written', next: 'placeholder', cls: '' }],
      },
      placeholder: {
        type: 'result',
        cls: 'action',
        label: 'to be written',
        text: 'This branch has not been written yet.',
        sub: 'Replace this node with the real diagnosis.',
        prevent: 'Replace this line: it is what the PM task library is built from.',
      },
    },
  } : {},
  selfcheck: tabs.some((t) => t.id === 'selfcheck') ? { [tabs[0].id]: [] } : null,
  panels,
  title: `BuiltWright: ${name}: Module ${num}`,
  preamble: null,
  related: `<div class="related"><div class="related-label">Related modules</div><a href="builtwright_diagnose_hub_v1.html">Diagnose hub</a></div>`,
  footer: `<div class="bw-footer">builtwrightapp.com &nbsp;&middot;&nbsp; module ${num} of series &nbsp;&middot;&nbsp; ${name.toLowerCase()}</div>`,
  css: [],
  cssShared: 1,
  components: [],
};

// The tree container the renderer writes into has to exist in the panel it belongs to.
if (treeTab) {
  panels[treeTab] = `  <div class="bw-section-label">${name} fault diagnosis</div>\n` +
    `  <div class="progress-bar"><div class="progress-fill" id="${key}-progress" style="width:8%"></div></div>\n` +
    `  <div id="${key}-tree"></div>`;
}

writeFileSync(target, wrap(key, mod));

// The published index has to know about it, or the totals stop matching.
const indexPath = join(APP, 'builtwright_index.json');
const index = JSON.parse(readFileSync(indexPath, 'utf8'));
index.modules.push({
  key, num: String(num), name, file,
  tabs: Object.fromEntries(tabs.map((t) => [t.id, t.label])),
  diagnostic_results: treeTab ? 1 : 0,
  self_check_questions: 0,
  field_tips: 0,
  has_safety_tab: tabs.some((t) => t.id === 'safety'),
});
index.totals.modules = index.modules.length;
index.totals.diagnostic_results = index.modules.reduce((a, m) => a + m.diagnostic_results, 0);
writeFileSync(indexPath, JSON.stringify(index, null, 1) + '\n');

console.log(`wrote ${target}`);
console.log(`added ${key} to builtwright_index.json`);
console.log('\nnext:');
console.log('  node build/cutover.mjs --write   generate the page');
console.log('  node build/sw.mjs                add it to the precache');
console.log('  node build/validate.mjs          check it');
