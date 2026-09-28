import { writeFileSync } from 'node:fs';
import { mkdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModules, readData } from '../lib/modules.mjs';

// Prepares the inputs the tagging agents read: one file per module holding its results with
// the questions that lead to each, and a vocabulary file saying what each component means.
//
//   node build/tagging/prep.mjs [outdir]      default: .tagging/ at the repository root
//
// Then build/tagging/build.mjs generates the workflow script that points at that directory.

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const OUT = resolve(process.argv[2] || join(ROOT, '.tagging'));
mkdirSync(OUT, { recursive: true });
const DATA = join(ROOT, 'app', 'data');
const vocab = readData(DATA, 'components').components;

// What each component type means, in the words the taggers should use. The field lists in
// the vocabulary say what a plant records; this says what an issue has to be about.
const MEANING = {
  pump: 'The pump itself: casing, impeller, wear rings, suction and discharge conditions, priming, NPSH, flow and head, deadheading, cavitation, recirculation.',
  bearing: 'Rolling element and sleeve bearings and their housings: fits, clearance, preload, bearing failure modes and the damage patterns that identify them.',
  seal: 'Sealing: mechanical seals, packing, lip seals, gaskets, O-rings, flush plans, leaks at joints and rod or shaft seals, elastomer compatibility.',
  alignment: 'Shaft couplings and alignment: angular and parallel misalignment, soft foot, pipe strain, coupling wear, thermal growth, coupling element failure.',
  lube: 'Lubricants and lubrication: grease and oil selection, quantity, intervals, overgreasing, contamination, oil analysis, centralized lube systems, wrong or mixed lubricant.',
  motor: 'The electric motor as a machine: mounting, cooling and heat, the nameplate, amps as a symptom, motor bearings and fans, the handoff between mechanical and electrical.',
  gearbox: 'Gear reducers: gear tooth wear patterns, backlash, gearbox oil, gearbox bearings and seals, breathers, shaft and housing issues.',
  powertrans: 'Belt and chain drives: V-belts, synchronous belts, chains, sprockets and sheaves, tension, slip, drive alignment, wear and failure analysis.',
  pneu: 'Pneumatic systems: air preparation and quality, water in air, valves, cylinders and actuators, leaks, tubing, flow controls, sensors and logic on air circuits.',
  hydraulics: 'Hydraulic systems: power unit, pumps, valves, actuators, fluid condition, filtration, pressure, heat, and pressure injection injury.',
  valve: 'Process valves and their actuators: stem packing, seats, positioners, stroking, sticking, leaking past a seat, installation and service.',
  fan: 'Fans and blowers: wheel, balance and buildup, clearances, fan laws, system effects, fan bearings and drives.',
  compressor: 'Air compressors: screw and reciprocating airends, valves, controls and capacity, cooling, oil separation, condensate, high temperature trips.',
  conveyor: 'Belt conveyors: belt tracking, tension and take-up, splices, idlers and pulleys, belt damage, spillage, slip.',
  brake: 'Clutches and brakes: friction material and wear, air gap, adjustment, holding brakes, backstops, dragging or slipping.',
  guard: 'Machine safeguarding: fixed guards, interlocks, light curtains and devices, defeated safeguards, distances and openings, PSR.',
};
for (const k of Object.keys(vocab)) if (!MEANING[k]) throw new Error('no meaning written for ' + k);

writeFileSync(`${OUT}/vocab.json`, JSON.stringify(Object.fromEntries(Object.entries(vocab).map(([k, v]) => [k, {
  label: v.label, primaryModule: v.module, meaning: MEANING[k], plantFields: v.fields.map((f) => f.label),
}])), null, 2));

let total = 0;
const manifest = [];
for (const mod of readModules(join(DATA, 'modules'))) {
  const treeName = Object.keys(mod.trees)[0];
  if (!treeName) continue;
  const tree = mod.trees[treeName];

  // How each node is reached: the shortest chain of questions and answers from the start.
  const via = { start: [] };
  const queue = ['start'];
  while (queue.length) {
    const id = queue.shift();
    const node = tree[id];
    for (const o of (node && node.options) || []) {
      if (!(o.next in via) && tree[o.next]) {
        via[o.next] = via[id].concat([{ asked: node.q, answered: o.label }]);
        queue.push(o.next);
      }
    }
  }

  const results = Object.entries(tree)
    .filter(([, n]) => n && n.type === 'result')
    .map(([id, n]) => ({ id, cls: n.cls, label: n.label, text: n.text, sub: n.sub, prevent: n.prevent || '', reachedBy: via[id] || [] }));

  total += results.length;
  manifest.push({ key: mod.key, name: mod.name, count: results.length });
  writeFileSync(`${OUT}/${mod.key}.json`, JSON.stringify({
    module: mod.key, name: mod.name, tab: mod.render.treeTab, tree: treeName,
    primaryComponents: Object.entries(vocab).filter(([, v]) => v.module === mod.key).map(([k]) => k),
    results,
  }, null, 2));
}
writeFileSync(`${OUT}/manifest.json`, JSON.stringify(manifest, null, 2));
console.log(`${OUT}\nwrote ${manifest.length} module files, ${total} results, vocab of ${Object.keys(vocab).length}`);
console.log(manifest.map((m) => `${m.key}:${m.count}`).join(' '));
