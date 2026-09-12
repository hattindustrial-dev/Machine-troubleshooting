// Shared scanning helpers for reading data literals out of the BuiltWright HTML files.
// The modules are hand written HTML with inline <script> blocks, so the data objects are
// JavaScript literals rather than JSON. Everything here is string and comment aware: a
// naive brace count breaks on prose like "the { in the label" inside a body string.

const OPEN = { '{': '}', '[': ']' };

// Walk forward from an opening brace or bracket and return the index just past its match.
// Skips over string literals, template literals (including ${} nesting) and comments.
export function matchDelimiter(src, start) {
  const stack = [];
  let i = start;
  while (i < src.length) {
    const c = src[i];
    if (c === '"' || c === "'") {
      i = skipQuoted(src, i);
      continue;
    }
    if (c === '`') {
      i = skipTemplate(src, i);
      continue;
    }
    if (c === '/' && src[i + 1] === '/') {
      i = src.indexOf('\n', i);
      if (i === -1) return -1;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      i = src.indexOf('*/', i + 2);
      if (i === -1) return -1;
      i += 2;
      continue;
    }
    if (OPEN[c]) {
      stack.push(OPEN[c]);
    } else if (c === '}' || c === ']') {
      if (stack.pop() !== c) return -1;
      if (stack.length === 0) return i + 1;
    }
    i++;
  }
  return -1;
}

function skipQuoted(src, i) {
  const quote = src[i];
  i++;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; }
    if (src[i] === quote) return i + 1;
    if (src[i] === '\n') return i; // unterminated, let the caller fail loudly
    i++;
  }
  return i;
}

function skipTemplate(src, i) {
  i++;
  while (i < src.length) {
    if (src[i] === '\\') { i += 2; continue; }
    if (src[i] === '`') return i + 1;
    if (src[i] === '$' && src[i + 1] === '{') {
      const end = matchDelimiter(src, i + 1);
      if (end === -1) return src.length;
      i = end;
      continue;
    }
    i++;
  }
  return i;
}

// Inline <script> blocks only. Blocks with a src attribute are CDN loads, not content.
export function scriptBlocks(html) {
  const out = [];
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) out.push({ code: m[1], index: m.index });
  return out;
}

// Every top level `const NAME = {...}` / `[...]` in a script block, with its source text.
export function topLevelLiterals(code) {
  const out = [];
  const re = /(?:^|\n)[ \t]*(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*(?=[{[])/g;
  let m;
  while ((m = re.exec(code))) {
    const start = m.index + m[0].length;
    const end = matchDelimiter(code, start);
    if (end === -1) continue;
    out.push({ name: m[1], source: code.slice(start, end) });
  }
  return out;
}
