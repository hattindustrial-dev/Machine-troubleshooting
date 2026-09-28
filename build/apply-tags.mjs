// Applies issue-level component tags to the module data.
//
//   node build/apply-tags.mjs <tags.json>          check what would change
//   node build/apply-tags.mjs <tags.json> --write  write it
//
// The input is { tags: { <module key>: { <result id>: [ [primary types], [contributing types] ] } } },
// which is what the tagging workflow returns. Tags land on the result nodes in
// app/data/modules/<key>.js as
//
//   applies: { primary: ['bearing'], contributing: ['lube', 'seal'] }
//
// primary means the component is what fails or is the subject of the finding; contributing
// means its condition causes the result, or it has to be inspected to confirm or rule it
// out, or it is damaged by it. A result about no plant component carries two empty lists,
// which is a statement that it is generic rather than a result nobody tagged.
//
// It refuses input that does not match the data: an unknown module, an id that is not a
// result, a component outside the vocabulary, one component in both lists. Nothing is
// written unless every check passes.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModule, readModules, readData, wrap } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'app', 'data');
const write = process.argv.includes('--write');
const file = process.argv.slice(2).find((a) => !a.startsWith('--'));
if (!file) { console.log('usage: node build/apply-tags.mjs <tags.json> [--write]'); process.exit(1); }

const input = JSON.parse(readFileSync(file, 'utf8'));
const tags = input.tags || input;
const vocab = new Set(Object.keys(readData(DATA, 'components').components));

const problems = [];
let touched = 0, unchanged = 0, generic = 0;
const outputs = [];

for (const [key, byId] of Object.entries(tags)) {
  let mod;
  try { mod = readModule(join(DATA, 'modules'), key); } catch { problems.push(`unknown module '${key}'`); continue; }
  const treeName = Object.keys(mod.trees)[0];
  const tree = mod.trees[treeName];
  if (!tree) { problems.push(`${key} has no diagnostic tree`); continue; }

  for (const [id, pair] of Object.entries(byId)) {
    const node = tree[id];
    if (!node || node.type !== 'result') { problems.push(`${key}/${id} is not a result node`); continue; }
    if (!Array.isArray(pair) || pair.length !== 2 || !Array.isArray(pair[0]) || !Array.isArray(pair[1])) {
      problems.push(`${key}/${id} is not [primary, contributing]`); continue;
    }
    const [primary, contributing] = pair;
    for (const t of [...primary, ...contributing]) {
      if (!vocab.has(t)) problems.push(`${key}/${id} uses '${t}', which is not a component`);
    }
    const both = primary.filter((t) => contributing.includes(t));
    if (both.length) problems.push(`${key}/${id} lists ${both.join(', ')} as both primary and contributing`);
    if (new Set(primary).size !== primary.length || new Set(contributing).size !== contributing.length) {
      problems.push(`${key}/${id} repeats a component within a list`);
    }
    const next = { primary: [...primary].sort(), contributing: [...contributing].sort() };
    if (!next.primary.length && !next.contributing.length) generic++;
    if (JSON.stringify(node.applies) === JSON.stringify(next)) unchanged++;
    else { node.applies = next; touched++; }
  }

  // every result in the module has to have been covered
  const covered = Object.keys(byId);
  const missing = Object.entries(tree).filter(([id, n]) => n && n.type === 'result' && !covered.includes(id)).map(([id]) => id);
  if (missing.length) problems.push(`${key}: ${missing.length} result(s) have no tags in the input: ${missing.slice(0, 4).join(', ')}`);
  outputs.push(mod);
}

console.log(`modules ${outputs.length}, results changed ${touched}, already as given ${unchanged}, generic ${generic}`);
if (problems.length) {
  console.log(`\nREFUSED, ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 30)) console.log('  - ' + p);
  process.exit(1);
}
if (!write) { console.log('nothing written; pass --write to apply'); process.exit(0); }
for (const mod of outputs) writeFileSync(join(DATA, 'modules', `${mod.key}.js`), wrap(mod.key, mod));
console.log(`wrote ${outputs.length} module data files`);
