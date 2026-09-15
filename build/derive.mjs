// Rebuilds the PM task library and the search index from the module JSON, and checks the
// result against the generated files the app ships.
//
//   node build/derive.mjs          compare only
//   node build/derive.mjs --write  also write app/data/pm.derived.json and search.derived.json
//
// Step three of the brief turns the PM library, search, hub and pocket cards into views
// over the module data instead of separately generated files. Before anything can be
// rebuilt on top of the data, the data has to be shown to contain it. This is that check:
// the derivation rules are ported from build_tools.py, but they read app/data/modules
// rather than pattern matching the HTML.

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');
const DATA = join(APP, 'data');

// Module order and component grouping, from the MODS table in build_tools.py. The grouping
// is authored (Power Transmission files its tasks under "Belts and Chains"), so it is not
// derivable from the modules and is kept here as data.
const MODS = [
  ['pumps', 'Pumps'], ['bearing', 'Bearings'], ['alignment', 'Couplings and Alignment'],
  ['seals', 'Seals and Gaskets'], ['lube', 'Lubrication'], ['pneu', 'Pneumatics'],
  ['hydraulics', 'Hydraulics'], ['powertrans', 'Belts and Chains'], ['gearbox', 'Gearboxes'],
  ['motors', 'Motors'], ['vibration', 'Vibration Route'], ['installation', 'Installation'],
  ['safeguarding', 'Safeguarding'], ['conveyors', 'Conveyors'], ['rootcause', 'Root Cause'],
  ['fans', 'Fans'], ['compressors', 'Compressors'], ['clutches', 'Clutches and Brakes'],
  ['valves', 'Valves'], ['measurement', 'Measurement'],
];

const DROP_START = ['whatever', 'nothing', 'depends', 'the root cause', 'whichever', 'none', 'no mechanical'];

// Interval heuristic, ported verbatim. Order matters: the first match wins.
function interval(text) {
  const x = text.toLowerCase();
  const any = (...ks) => ks.some((k) => x.includes(k));
  if (any('daily', 'every shift', 'each shift')) return 'Daily';
  if (any('weekly', 'week')) return 'Weekly';
  if (x.includes('quarter')) return 'Quarterly';
  if (any('annual', 'yearly', 'a year')) return 'Annual';
  if (any('monthly', 'route', 'trend')) return 'Monthly';
  if (any('on every', 'every', 'after any', 'after every', 'on installation', 'at overhaul',
          'on reassembly', 'on any', 'before', 'on the commissioning', 'replacement',
          'rebuild', 'installation', 'commission')) return 'On event';
  if (x.includes('on the pm') || x.includes('on the pm sheet')) return 'Each PM';
  if (any('on condition', 'analysis', 'trended', 'logged', 'recorded', 'monitor')) return 'On condition';
  return 'Each PM';
}

const load = (key) => JSON.parse(readFileSync(join(DATA, 'modules', `${key}.json`), 'utf8'));

// ---- PM task library -------------------------------------------------------------
function derivePmTasks() {
  const tasks = [];
  const seen = new Map();
  for (const [key, comp] of MODS) {
    const mod = load(key);
    const tab = mod.render.treeTab;
    if (!tab) continue;
    for (const tree of Object.values(mod.trees)) {
      for (const node of Object.values(tree)) {
        if (!node || node.type !== 'result' || !node.prevent) continue;
        const source = { num: mod.num, mod: mod.name, label: node.label, file: mod.source, tab };
        for (const raw of node.prevent.split(/(?<=\.)\s+/)) {
          const sent = raw.trim();
          if (sent.length < 16) continue;
          if (DROP_START.some((d) => sent.toLowerCase().startsWith(d))) continue;
          const dedupeKey = sent.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ');
          if (seen.has(dedupeKey)) { seen.get(dedupeKey).src.push(source); continue; }
          const task = { comp, text: sent, interval: interval(sent), src: [source] };
          seen.set(dedupeKey, task);
          tasks.push(task);
        }
      }
    }
  }
  return tasks.map((t, i) => ({ id: i, comp: t.comp, text: t.text, interval: t.interval, src: t.src }));
}

// ---- search index: the diagnosis entries -------------------------------------------
// Every result node in a module's tree should be findable in global search. The generator
// picked these up with a regex that needed label: and text: adjacent on one line, so a
// module formatted across lines contributed nothing.
function deriveDiagnosisEntries() {
  const out = [];
  for (const [key] of MODS) {
    const mod = load(key);
    const tab = mod.render.treeTab;
    if (!tab) continue;
    const tabName = (mod.tabs.find((t) => t.id === tab) || {}).label || tab;
    for (const tree of Object.values(mod.trees)) {
      for (const node of Object.values(tree)) {
        if (!node || node.type !== 'result') continue;
        out.push({ m: mod.num, n: mod.name, f: mod.source, t: tab, tn: tabName,
                   k: 'diagnosis', x: node.label, d: (node.text || '').slice(0, 140) });
      }
    }
  }
  return out;
}

// ---- compare ----------------------------------------------------------------------
function compare(label, derived, shipped, keyOf) {
  const dMap = new Map(derived.map((x) => [keyOf(x), x]));
  const sMap = new Map(shipped.map((x) => [keyOf(x), x]));
  const missing = [...sMap.keys()].filter((k) => !dMap.has(k));
  const extra = [...dMap.keys()].filter((k) => !sMap.has(k));
  const changed = [];
  for (const [k, s] of sMap) {
    const d = dMap.get(k);
    if (!d) continue;
    if (JSON.stringify({ ...d, id: 0 }) !== JSON.stringify({ ...s, id: 0 })) changed.push({ k, d, s });
  }
  console.log(`${label}: derived ${derived.length}, shipped ${shipped.length}, ` +
    `missing ${missing.length}, extra ${extra.length}, differing ${changed.length}`);
  return { missing, extra, changed, dMap, sMap };
}

const shippedPm = JSON.parse(readFileSync(join(DATA, 'pm.json'), 'utf8'));
const derivedTasks = derivePmTasks();
const pm = compare('PM tasks', derivedTasks, shippedPm.TASKS, (t) => t.text);

for (const k of pm.missing.slice(0, 6)) console.log(`  only in shipped: ${k.slice(0, 90)}`);
for (const k of pm.extra.slice(0, 6)) console.log(`  only in derived: ${k.slice(0, 90)}`);
for (const c of pm.changed.slice(0, 6)) {
  const diffs = [];
  if (c.d.comp !== c.s.comp) diffs.push(`comp ${c.s.comp} -> ${c.d.comp}`);
  if (c.d.interval !== c.s.interval) diffs.push(`interval ${c.s.interval} -> ${c.d.interval}`);
  if (c.d.src.length !== c.s.src.length) diffs.push(`sources ${c.s.src.length} -> ${c.d.src.length}`);
  console.log(`  differs (${diffs.join('; ') || 'src detail'}): ${c.k.slice(0, 70)}`);
}

// ---- search index ------------------------------------------------------------------
const shippedSearch = JSON.parse(readFileSync(join(DATA, 'search.json'), 'utf8'));
const shippedDiag = shippedSearch.IDX.filter((e) => e.k === 'diagnosis');
const derivedDiag = deriveDiagnosisEntries();

// The generated index dedupes on file, tab and lowercased text.
const shippedKeys = new Set(shippedDiag.map((e) => `${e.f}|${e.t}|${e.x.toLowerCase()}`));
const missingDiag = [];
const seenNew = new Set();
for (const e of derivedDiag) {
  const k = `${e.f}|${e.t}|${e.x.toLowerCase()}`;
  if (shippedKeys.has(k) || seenNew.has(k)) continue;
  seenNew.add(k);
  missingDiag.push(e);
}
console.log(`\nsearch diagnosis entries: derived ${derivedDiag.length}, shipped ${shippedDiag.length}, missing from search ${missingDiag.length}`);
const byModule = {};
for (const e of missingDiag) byModule[e.n] = (byModule[e.n] || 0) + 1;
for (const [n, c] of Object.entries(byModule)) console.log(`  ${n}: ${c} result(s) not findable in search`);

if (process.argv.includes('--fix-search') && missingDiag.length) {
  // Splice the missing entries into the inline index, immediately after that module's
  // existing entries, so module ordering is preserved. Everything else stays byte for byte.
  const page = join(APP, 'builtwright_search_v1.html');
  let html = readFileSync(page, 'utf8');
  for (const [file, entries] of Object.entries(
      missingDiag.reduce((a, e) => { (a[e.f] = a[e.f] || []).push(e); return a; }, {}))) {
    const marker = `"f": ${JSON.stringify(file)}`;
    const last = html.lastIndexOf(marker);
    if (last === -1) { console.log(`  could not place entries for ${file}`); continue; }
    const close = html.indexOf('}', last);
    const text = entries.map((e) => ', ' + JSON.stringify(e).replace(/","/g, '", "').replace(/":"/g, '": "')).join('');
    html = html.slice(0, close + 1) + text + html.slice(close + 1);
    console.log(`  inserted ${entries.length} entries for ${file}`);
  }
  writeFileSync(page, html);
  console.log('patched app/builtwright_search_v1.html; re-run build/extract.mjs');
}

if (process.argv.includes('--write')) {
  writeFileSync(join(DATA, 'pm.derived.json'),
    JSON.stringify({ TASKS: derivedTasks, COMP: shippedPm.COMP, INTERVALS: shippedPm.INTERVALS }, null, 2) + '\n');
  console.log('wrote app/data/pm.derived.json');
}

const clean = pm.missing.length === 0 && pm.extra.length === 0 && pm.changed.length === 0;
console.log(clean ? '\nPM library reproduces exactly from the module data' : '\nPM library does not yet reproduce exactly');
