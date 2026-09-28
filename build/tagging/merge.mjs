// Merges a tagging run and an adjudication run into one final tag set.
//
//   node build/tagging/merge.mjs <tag-result.json> <adjudication-result.json> <out.json>
//
// The tagging run says what each result concerns. The adjudication run settles the tags
// only one reviewer or critic proposed changing, by three judges with different lenses,
// two votes to land. This applies the accepted decisions over the tagging run's tags and
// writes { tags } for apply-tags.mjs, checking as it goes that every decision refers to a
// tag that exists and starts from the state the decision says it does.

import { readFileSync, writeFileSync } from 'node:fs';

const [, , tagFile, adjFile, outFile] = process.argv;
if (!tagFile || !adjFile || !outFile) {
  console.log('usage: node build/tagging/merge.mjs <tag-result.json> <adjudication-result.json> <out.json>');
  process.exit(1);
}

const load = (f) => { const j = JSON.parse(readFileSync(f, 'utf8')); return j.result || j; };
const base = load(tagFile);
const adj = load(adjFile);
const tags = JSON.parse(JSON.stringify(base.tags));

const stateOf = (pair, type) => (pair[0].includes(type) ? 'primary' : pair[1].includes(type) ? 'contributing' : 'absent');
const problems = [];
let applied = 0;

for (const d of adj.accepted) {
  const pair = tags[d.module] && tags[d.module][d.id];
  if (!pair) { problems.push(`${d.module}/${d.id} is not in the tagging run`); continue; }
  const now = stateOf(pair, d.type);
  if (now !== d.from) { problems.push(`${d.module}/${d.id} ${d.type} is ${now}, the decision expected ${d.from}`); continue; }
  pair[0] = pair[0].filter((t) => t !== d.type);
  pair[1] = pair[1].filter((t) => t !== d.type);
  if (d.to === 'primary') pair[0].push(d.type);
  else if (d.to === 'contributing') pair[1].push(d.type);
  applied++;
}

if (problems.length) {
  console.log(`REFUSED, ${problems.length} problem(s):`);
  problems.slice(0, 20).forEach((p) => console.log('  - ' + p));
  process.exit(1);
}

writeFileSync(outFile, JSON.stringify({ tags }, null, 1));
const results = Object.values(tags).reduce((a, m) => a + Object.keys(m).length, 0);
console.log(`${results} results, ${applied} adjudicated changes applied over the tagging run`);
console.log(`wrote ${outFile}`);
