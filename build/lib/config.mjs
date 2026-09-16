// Derives the per module render config from the hand written modules. The renderer needs
// to know which element ids each module's diagnostic tree writes to, which tab starts the
// tree, and how each card group wires its cards to its detail pane. All of that is already
// expressed in the module's own functions, so it is read back out rather than hand listed.

// Pull one named function's full source out of a script.
export function functionSource(src, name) {
  const re = new RegExp(`function\\s+${name.replace(/[$]/g, '\\$')}\\s*\\(`, 'g');
  const m = re.exec(src);
  if (!m) return null;
  const open = src.indexOf('{', m.index + m[0].length - 1);
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') { depth--; if (depth === 0) return src.slice(m.index, i + 1); }
  }
  return null;
}

export function functionNames(src) {
  return [...src.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].map((m) => m[1]);
}

// renderDiag writes a percentage into a progress bar and HTML into a container.
export function treeIds(src) {
  const body = functionSource(src, 'renderDiag');
  if (!body) return null;
  const ids = [...body.matchAll(/getElementById\('([^']+)'\)/g)].map((m) => m[1]);
  const progress = ids.find((id) => /prog/.test(id));
  const container = ids.find((id) => !/prog/.test(id));
  return progress && container ? { progress, container } : null;
}

// switchTab kicks the tree off when its own tab is opened. Two spellings are in use:
//   if(tab==='troubleshoot')renderDiag('start')
//   if(tab==='troubleshoot'){ setTimeout(()=>renderDiag('start'),0); }
export function treeTab(src) {
  const body = functionSource(src, 'switchTab');
  if (!body) return null;
  const m = body.match(/tab\s*===\s*'([a-z0-9]+)'\s*\)\s*\{?[^{}]{0,60}?renderDiag/);
  return m ? m[1] : null;
}

// A card group: clicking a card in `scope` marks it selected and renders card(data[id])
// into `display`. Two spellings exist. The later modules call a shared sel() helper,
// the earlier ones inline the same thing.
export function cardGroups(src) {
  const groups = {};
  const hasHelper = /function\s+sel\s*\(\s*panel\s*,/.test(src);

  for (const name of functionNames(src)) {
    if (!/^select[A-Z]/.test(name)) continue;
    const body = functionSource(src, name);
    if (!body) continue;

    // form 1: selectDrive(id){sel('overview','dcard-',id,driveData,'drive-display');}
    const viaHelper = body.match(/sel\(\s*'([^']+)'\s*,\s*'([^']*)'\s*,\s*id\s*,\s*([A-Za-z_$][\w$]*)\s*,\s*'([^']+)'\s*\)/);
    if (hasHelper && viaHelper) {
      groups[name] = {
        scope: `#panel-${viaHelper[1]}`,
        cardClass: '.type-card',
        prefix: viaHelper[2],
        data: viaHelper[3],
        display: viaHelper[4],
      };
      continue;
    }

    // form 2: the inline spelling
    const selector = body.match(/querySelectorAll\('([^']+)'\)/);
    const prefix = body.match(/getElementById\(\s*'([^']*)'\s*\+\s*id\s*\)/);
    const data = body.match(/([A-Za-z_$][\w$]*)\[id\]/);
    const display = [...body.matchAll(/getElementById\('([^']+)'\)/g)].map((m) => m[1]);
    if (!selector || !prefix || !data || !display.length) continue;

    // "#panel-types .type-card" splits into a scope and a class; ".bearing-card" is class only
    const parts = selector[1].trim().split(/\s+/);
    groups[name] = {
      scope: parts.length > 1 ? parts[0] : null,
      cardClass: parts[parts.length - 1],
      prefix: prefix[1],
      data: data[1],
      display: display[0],
    };
  }
  return groups;
}

// Header text: the module title and the "Module 17" badge.
export function header(html) {
  const title = html.match(/<div class="bw-title">([^<]*)<\/div>/);
  const badge = html.match(/<div class="bw-badge">([^<]*)<\/div>/);
  return { title: title ? title[1].trim() : '', badge: badge ? badge[1].trim() : '' };
}

// The tab bar, so the renderer can reproduce per tab styling such as the red Safety tab.
export function tabBar(html) {
  const bar = html.match(/<div class="bw-tabs">([\s\S]*?)<\/div>\s*\n/);
  if (!bar) return [];
  return [...bar[1].matchAll(/<button class="bw-tab([^"]*)"\s*onclick="switchTab\('([a-z0-9]+)'\)"([^>]*)>([^<]*)<\/button>/g)].map((m) => ({
    id: m[2],
    label: m[4].trim(),
    active: /\bactive\b/.test(m[1]),
    style: (m[3].match(/style="([^"]*)"/) || [, ''])[1],
  }));
}

// Top level CSS blocks in source order, comments stripped.
//
// At-rules are kept whole. Splitting on a plain rule pattern would lift the contents of
// `@media print { ... }` into the normal cascade, which silently applies print styling to
// the screen, so the scan tracks brace depth instead.
export function cssRules(html) {
  const css = [...html.matchAll(/<style>([\s\S]*?)<\/style>/g)]
    .map((m) => m[1])
    .join('\n')
    .replace(/\/\*[\s\S]*?\*\//g, '');

  const out = [];
  let start = 0, depth = 0, quote = null;
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (quote) {
      if (c === '\\') i++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'") { quote = c; continue; }
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) {
        const block = css.slice(start, i + 1).replace(/\s+/g, ' ').trim();
        if (block) out.push(block);
        start = i + 1;
      }
    }
  }
  return out;
}

// A reveal group: mark a card selected and activate a matching detail block. Same idea as
// a card group but it switches a second element instead of rendering card() output.
export function revealGroups(src) {
  const out = {};
  for (const name of functionNames(src)) {
    if (!/^select[A-Z]/.test(name)) continue;
    const body = functionSource(src, name);
    if (!body) continue;
    const selectors = [...body.matchAll(/querySelectorAll\('([^']+)'\)/g)].map((m) => m[1]);
    const prefixes = [...body.matchAll(/getElementById\(\s*'([^']*)'\s*\+\s*id\s*\)/g)].map((m) => m[1]);
    if (selectors.length !== 2 || prefixes.length !== 2) continue;
    if (!/classList\.add\('active'\)/.test(body)) continue;
    out[name] = {
      cardClass: selectors[0], detailClass: selectors[1],
      cardPrefix: prefixes[0], detailPrefix: prefixes[1],
    };
  }
  return out;
}

// Toggles come in two spellings: one takes an element id, the other the element.
export function toggleFunctions(src) {
  const out = [];
  for (const name of functionNames(src)) {
    if (!/^toggle/i.test(name)) continue;
    const body = functionSource(src, name);
    if (!body) continue;
    const byId = /getElementById\(\s*\w+\s*\)\.classList\.toggle\('open'\)/.test(body);
    const byEl = /^function\s+\w+\s*\(\s*(\w+)\s*\)\s*\{\s*\1\.classList\.toggle\('open'\);?\s*\}$/.test(body.trim());
    if (byId || byEl) out.push({ name, byId });
  }
  return out;
}

// Functions the renderer does not cover. They stay in the module's own page so the code
// remains where a reader expects it, rather than being evaluated out of a data file.
const RENDERER_PROVIDES = new Set([
  'switchTab', 'renderDiag', 'diagTo', 'diagBack', 'scRender', 'scAnswer', 'scReset',
  'toggleAdv', 'card', 'go', 'sel',
]);

export function bespokeFunctions(src, covered) {
  const names = functionNames(src).filter((n) => !RENDERER_PROVIDES.has(n) && !covered.has(n));
  return names.map((n) => functionSource(src, n)).filter(Boolean);
}
