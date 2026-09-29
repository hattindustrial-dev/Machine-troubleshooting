// Spreads the correct answers of the self-check questions evenly across the four positions.
//
//   node build/rebalance-selfcheck.mjs          report what it would do
//   node build/rebalance-selfcheck.mjs --write  do it
//
// The question banks were written with the correct answer second in 385 of 423 questions,
// 91%, and the renderer does not shuffle, so picking B every time scored about 91%. The fix
// is made in the data, and by a fixed rule, so a reviewer reads the same order the learner
// sees and a rerun gives the same answer.
//
// The correct option is moved to the next position in a rotation (first, second, third,
// fourth, first, ...) and the wrong options keep their relative order. A question whose
// options refer to each other ("None", "Neither", "Both", "All of them") is left where it is,
// because moving "None" out of last place changes what the question means.
//
// Refuses to run on questions that are already balanced, so it cannot reshuffle twice.

import { writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModules, wrap } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'app', 'data', 'modules');
const write = process.argv.includes('--write');

const POSITIONAL = /^(neither|none|both|all of|all the|all)\b|\b(above|below)\b|\bof (these|them)\b/i;

const mods = readModules(DIR).filter((m) => m.selfcheck).sort((a, b) => a.key.localeCompare(b.key));

const share = () => {
  const c = [0, 0, 0, 0];
  let n = 0;
  for (const m of mods) for (const list of Object.values(m.selfcheck)) for (const q of list) { c[q[2]]++; n++; }
  return { c, n, max: Math.max(...c) / n };
};

const before = share();
if (before.max < 0.4 && !process.argv.includes('--force')) {
  console.log(`already balanced (the busiest position holds ${(before.max * 100).toFixed(0)}%), nothing to do`);
  process.exit(0);
}

let moved = 0, kept = 0, turn = 0;
for (const m of mods) {
  for (const list of Object.values(m.selfcheck)) {
    list.forEach((q, i) => {
      const [stem, options, correct, why] = q;
      if (options.some((o) => POSITIONAL.test(o.trim()))) { kept++; return; }
      const target = turn++ % options.length;
      const right = options[correct];
      const wrong = options.filter((_, j) => j !== correct);
      wrong.splice(target, 0, right);
      // Never trust a rearrangement that has not been checked: the same options, and the
      // marked answer is the same text as before.
      if (wrong[target] !== right || [...wrong].sort().join('\u0000') !== [...options].sort().join('\u0000')) {
        throw new Error(`rearranging ${m.key} question ${i} changed its options or its answer`);
      }
      list[i] = [stem, wrong, target, why];
      moved++;
    });
  }
}

const after = share();
const pct = (s) => s.c.map((x) => `${Math.round((100 * x) / s.n)}%`).join(' ');
console.log(`questions: ${before.n}, rearranged ${moved}, left alone because their options refer to each other ${kept}`);
console.log(`correct answer at position 1..4, before: ${before.c.join(' ')}  (${pct(before)})`);
console.log(`                               after : ${after.c.join(' ')}  (${pct(after)})`);

// every question must still have the same set of options and a correct index that points at the same text
if (write) {
  for (const m of mods) writeFileSync(join(DIR, `${m.key}.js`), wrap(m.key, m));
  console.log(`wrote ${mods.length} module data files`);
} else {
  console.log('nothing written; pass --write to apply');
}
