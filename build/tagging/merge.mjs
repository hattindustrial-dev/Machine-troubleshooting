// Merges a tagging run and an adjudication run into one final tag set.
//
//   node build/tagging/merge.mjs <tag-result.json> <adjudication-result.json> <out.json> [--overrides <file>] [--edits <file>]
//
// The tagging run says what each result concerns. The adjudication run settles the tags
// only one reviewer or critic proposed changing, by three judges with different lenses,
// two votes to land. This applies the accepted decisions over the tagging run's tags and
// writes { tags } for apply-tags.mjs, checking as it goes that every decision refers to a
// tag that exists and starts from the state the decision says it does.
//
// A vote is not always the last word. --overrides names a JSON file of decisions a reviewer
// declined to apply, each with the reason, as [{ module, id, type, to, reason }]. They are
// skipped, and listed in the output so the record shows where a person overruled the vote and
// why. An override that matches no accepted decision is an error, so a stale one cannot hide.
//
// --edits is for what no vote produced: a fix a reviewer found by reading, such as a twin
// result tagged differently in two modules. It is [{ module, id, type, from, to, reason }],
// applied after the votes. An edit whose from does not match the current tag is an error.

import { readFileSync, writeFileSync } from 'node:fs';

const argv = process.argv.slice(2);
const oi = argv.indexOf('--overrides');
const overrideFile = oi === -1 ? null : argv[oi + 1];
const ei = argv.indexOf('--edits');
const editFile = ei === -1 ? null : argv[ei + 1];
const positional = argv.filter((a, i) => !a.startsWith('--') && i !== oi + 1 && i !== ei + 1);
const [tagFile, adjFile, outFile] = positional;
if (!tagFile || !adjFile || !outFile) {
  console.log('usage: node build/tagging/merge.mjs <tag-result.json> <adjudication-result.json> <out.json> [--overrides <file>]');
  process.exit(1);
}

const load = (f) => { const j = JSON.parse(readFileSync(f, 'utf8')); return j.result || j; };
const base = load(tagFile);
const adj = load(adjFile);
const tags = JSON.parse(JSON.stringify(base.tags));

const stateOf = (pair, type) => (pair[0].includes(type) ? 'primary' : pair[1].includes(type) ? 'contributing' : 'absent');
const problems = [];
let applied = 0;

const overrides = overrideFile ? JSON.parse(readFileSync(overrideFile, 'utf8')) : [];
const overridden = [];
const isOverridden = (d) => overrides.find((o) => o.module === d.module && o.id === d.id && o.type === d.type && o.to === d.to);
for (const o of overrides) {
  if (!adj.accepted.some((d) => d.module === o.module && d.id === o.id && d.type === o.type && d.to === o.to)) {
    problems.push(`override for ${o.module}/${o.id} ${o.type} -> ${o.to} matches no accepted decision`);
  }
  if (!o.reason) problems.push(`override for ${o.module}/${o.id} ${o.type} gives no reason`);
}

for (const d of adj.accepted) {
  const ov = isOverridden(d);
  if (ov) { overridden.push({ ...d, overriddenBecause: ov.reason }); continue; }
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

const edits = editFile ? JSON.parse(readFileSync(editFile, 'utf8')) : [];
for (const e of edits) {
  if (!e.reason) { problems.push(`edit for ${e.module}/${e.id} ${e.type} gives no reason`); continue; }
  const pair = tags[e.module] && tags[e.module][e.id];
  if (!pair) { problems.push(`edit names ${e.module}/${e.id}, which is not in the tagging run`); continue; }
  const now = stateOf(pair, e.type);
  if (now !== e.from) { problems.push(`edit for ${e.module}/${e.id} ${e.type} expected ${e.from}, found ${now}`); continue; }
  pair[0] = pair[0].filter((t) => t !== e.type);
  pair[1] = pair[1].filter((t) => t !== e.type);
  if (e.to === 'primary') pair[0].push(e.type);
  else if (e.to === 'contributing') pair[1].push(e.type);
  applied++;
}

if (problems.length) {
  console.log(`REFUSED, ${problems.length} problem(s):`);
  problems.slice(0, 20).forEach((p) => console.log('  - ' + p));
  process.exit(1);
}

writeFileSync(outFile, JSON.stringify({ tags }, null, 1));
const results = Object.values(tags).reduce((a, m) => a + Object.keys(m).length, 0);
console.log(`${results} results, ${applied} changes applied over the tagging run (${edits.length} of them reviewer edits), ${overridden.length} accepted by vote and overridden`);
overridden.forEach((d) => console.log(`  overridden: ${d.module}/${d.id} ${d.type} ${d.from} -> ${d.to} (${d.apply} votes)`));
console.log(`wrote ${outFile}`);
