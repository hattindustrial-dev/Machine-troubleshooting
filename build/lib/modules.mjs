// Module data ships as app/data/modules/<key>.js so a plain script tag can load it and the
// app keeps working from a folder with no server. The file is one call wrapping pretty
// printed JSON, so it still diffs like JSON. These two helpers are the only places that
// know about the wrapper.

import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

export function wrap(key, data) {
  return `BW.register(${JSON.stringify(key)}, ${JSON.stringify(data, null, 2)});\n`;
}

export function unwrap(source) {
  const open = source.indexOf(',');
  const close = source.lastIndexOf(');');
  if (open === -1 || close === -1) throw new Error('not a module data file');
  return JSON.parse(source.slice(open + 1, close).trim());
}

export function readModule(dir, key) {
  return unwrap(readFileSync(join(dir, `${key}.js`), 'utf8'));
}

export function readModules(dir) {
  return readdirSync(dir)
    .filter((f) => f.endsWith('.js'))
    .map((f) => unwrap(readFileSync(join(dir, f), 'utf8')));
}
