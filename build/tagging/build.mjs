import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Generates the workflow script from the template and the prepared inputs.
//
//   node build/tagging/build.mjs [workdir]    default: .tagging/ at the repository root
//
// The script lands in <workdir>/workflow.js. Run it from Claude Code with the Workflow tool
// and {scriptPath: '<workdir>/workflow.js'}; it returns the tags for apply-tags.mjs.

const HERE = dirname(fileURLToPath(import.meta.url));
const WORK = resolve(process.argv[2] || join(HERE, '..', '..', '.tagging'));
const manifest = JSON.parse(readFileSync(join(WORK, 'manifest.json'), 'utf8'));
const mods = manifest.map((m) => {
  const d = JSON.parse(readFileSync(join(WORK, `${m.key}.json`), 'utf8'));
  return { key: m.key, name: m.name, ids: d.results.map((r) => r.id), labels: d.results.map((r) => r.label) };
});
const tpl = readFileSync(join(HERE, 'workflow.template.js'), 'utf8');
writeFileSync(join(WORK, 'workflow.js'), tpl.replace('__SB__', WORK).replace('__DATA__', JSON.stringify(mods)));
console.log(`built ${join(WORK, 'workflow.js')} with ${mods.length} modules, ${mods.reduce((a, m) => a + m.ids.length, 0)} results`);
