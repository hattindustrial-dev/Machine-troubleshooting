// Replaces each content module's page with a shell that mounts the renderer.
//
//   node build/cutover.mjs --check   report what would change
//   node build/cutover.mjs --write   rewrite the pages
//
// This is a one way step and the point of the migration. Until now each module carried its
// own copy of the same nine functions and the same stylesheet, with the content inline.
// Afterwards the page is a shell, app/data/modules/<key>.js is the content, and
// app/bw-renderer.js is the only implementation.
//
// The URLs do not change, which is what keeps the 162 links, the search index, the PM task
// back-references, the pocket cards and anyone's bookmarks working. Module data loads by
// script tag rather than fetch, so the app still opens from a folder with no server.
//
// After this, app/data is the source of truth. build/extract.mjs will not re-read a shell,
// so the data cannot be silently emptied by running it again.

import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readModules } from './lib/modules.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APP = join(ROOT, 'app');

export const isShell = (html) => html.includes('bw-renderer.js');

function shell(mod) {
  const bespoke = (mod.render.bespoke || []).join('\n');
  // Helpers and data objects are needed if either the page's own functions or its startup
  // code refers to them.
  const referenced = bespoke + '\n' + (mod.render.init || '');
  // A module specific function can lean on one of the module's own data objects, the way
  // the root cause form walks its FIELDS list. Those objects were extracted into the data,
  // so the ones actually referenced are declared back into scope here.
  // Code helpers first: a bespoke function may call one.
  const helpers = (mod.render.helpers || [])
    .filter((h) => new RegExp(`\\b${h.name}\\b`).test(referenced))
    .map((h) => h.source)
    .join('\n');
  const deps = Object.keys(mod.cards)
    .filter((name) => new RegExp(`\\b${name}\\b`).test(referenced))
    .map((name) => `const ${name} = ${JSON.stringify(mod.cards[name])};`)
    .join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${mod.title}</title>
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#1a1a18">
<link rel="apple-touch-icon" href="builtwright_icon_192.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css">
<link rel="stylesheet" href="bw.css">
</head>
<body>
<div class="bw-wrap" id="bw-root"></div>
<script src="bw-renderer.js"></script>
<script src="data/modules/${mod.key}.js"></script>
${bespoke ? `<script>\n// Specific to this page. The renderer covers the tabs, cards, tree and self-check.\n${helpers ? helpers + '\n' : ''}${deps ? deps + '\n' : ''}${bespoke}\n</script>\n` : ''}${mod.render.afterSwitch ? `<script>BW.afterSwitch = function (tab) { ${mod.render.afterSwitch} };</script>\n` : ''}<script>BW.mountRegistered(${JSON.stringify(mod.key)}, document.getElementById('bw-root'));</script>
${mod.render.init ? `<script>\n// What this page runs once its markup is in place.\n${mod.render.init}\n</script>\n` : ''}
<script>if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));}</script>
</body>
</html>
`;
}

const write = process.argv.includes('--write');
// Content modules and the three documents alike. A document has no tree and no Related
// strip; everything else about the shell is the same.
const modules = readModules(join(APP, 'data', 'modules'));

let converted = 0, already = 0, saved = 0;
for (const mod of modules) {
  const path = join(APP, mod.source);
  const current = readFileSync(path, 'utf8');
  if (isShell(current)) { already++; continue; }

  // Refuse to convert anything whose content is not fully in the data.
  const emptyTabs = mod.tabs.filter((t) => !mod.panels[t.id]);
  if (emptyTabs.length) {
    console.log(`  SKIP ${mod.key}: ${emptyTabs.length} tab(s) have no panel in the data`);
    continue;
  }
  if (!mod.title || !mod.footer) {
    console.log(`  SKIP ${mod.key}: missing title or footer in the data`);
    continue;
  }
  if (Object.keys(mod.trees).length && !mod.related) {
    console.log(`  SKIP ${mod.key}: content module with no Related strip in the data`);
    continue;
  }

  const next = shell(mod);
  saved += current.length - next.length;
  converted++;
  console.log(`  ${write ? 'wrote' : 'would write'} ${mod.source}: ${(current.length / 1024).toFixed(0)}k -> ${(next.length / 1024).toFixed(1)}k` +
    ((mod.render.bespoke || []).length ? `, keeping ${mod.render.bespoke.length} module specific function(s)` : ''));
  if (write) writeFileSync(path, next);
}

console.log(`\n${write ? 'converted' : 'would convert'} ${converted}, already shells ${already}, ${(saved / 1024).toFixed(0)}k of duplicated markup and script removed`);
if (!write) console.log('nothing written; pass --write to apply');
