// Pixel and structure parity between the hand written modules and the renderer.
//
//   node build/parity.mjs [moduleKey ...]
//
// For every tab of every content module it loads the original page and the renderer page,
// then compares the rendered text, the element counts and a screenshot of the panel. The
// diagnostic tree and the self-check are driven through a few steps so the generated
// markup is compared too, not just the static fragments.
//
// Needs a static server on app/. Start one with:  python3 -m http.server -d app 8765

import { readFileSync, readdirSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'app', 'data', 'modules');
const OUT = process.env.PARITY_OUT || join(ROOT, '.parity');
const BASE = process.env.PARITY_BASE || 'http://localhost:8765';

const only = process.argv.slice(2);
const modules = readdirSync(DATA)
  .filter((f) => f.endsWith('.json'))
  .map((f) => JSON.parse(readFileSync(join(DATA, f), 'utf8')))
  .filter((m) => Object.keys(m.trees).length > 0)
  .filter((m) => !only.length || only.includes(m.key));

mkdirSync(OUT, { recursive: true });

const norm = (s) => s.replace(/\s+/g, ' ').trim();

async function openPage(browser, url) {
  const page = await browser.newPage({ viewport: { width: 1000, height: 1200 } });
  // The CDN font and icon sheets are not reachable from here and are irrelevant to parity,
  // so do not wait on them.
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(700);
  return page;
}

// What a panel looks like right now: its text and a census of its elements.
async function snapshot(page, tabId) {
  return page.evaluate((id) => {
    const p = document.getElementById('panel-' + id);
    if (!p) return null;
    const counts = {};
    p.querySelectorAll('*').forEach((el) => {
      const key = el.tagName.toLowerCase() + '.' + (el.className && el.className.baseVal === undefined ? String(el.className) : '');
      counts[key] = (counts[key] || 0) + 1;
    });
    return { text: p.innerText, counts };
  }, tabId);
}

function diffCounts(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  const out = [];
  for (const k of keys) if ((a[k] || 0) !== (b[k] || 0)) out.push(`${k}: original ${a[k] || 0}, renderer ${b[k] || 0}`);
  return out;
}

const browser = await chromium.launch();
const failures = [];
let compared = 0, shots = 0;

for (const mod of modules) {
  const origin = await openPage(browser, `${BASE}/${mod.source}`);
  const render = await openPage(browser, `${BASE}/module.html?m=${mod.key}`);

  for (const tab of mod.tabs) {
    for (const page of [origin, render]) {
      await page.evaluate((id) => window.switchTab(id), tab.id);
      await page.waitForTimeout(120);
    }
    const a = await snapshot(origin, tab.id);
    const b = await snapshot(render, tab.id);
    compared++;

    if (!a || !b) { failures.push(`${mod.key}/${tab.id}: panel missing (${!a ? 'original' : 'renderer'})`); continue; }
    if (norm(a.text) !== norm(b.text)) {
      const i = [...norm(a.text)].findIndex((c, k) => c !== norm(b.text)[k]);
      failures.push(`${mod.key}/${tab.id}: text differs at ${i}\n      original: ...${norm(a.text).slice(Math.max(0, i - 50), i + 70)}...\n      renderer: ...${norm(b.text).slice(Math.max(0, i - 50), i + 70)}...`);
    }
    const cd = diffCounts(a.counts, b.counts);
    if (cd.length) failures.push(`${mod.key}/${tab.id}: element counts differ\n      ${cd.slice(0, 6).join('\n      ')}`);

    // Screenshot the panel on both sides.
    const shotDir = join(OUT, mod.key);
    mkdirSync(shotDir, { recursive: true });
    for (const [tag, page] of [['original', origin], ['renderer', render]]) {
      const el = page.locator('#panel-' + tab.id);
      if (await el.count()) { await el.screenshot({ path: join(shotDir, `${tab.id}.${tag}.png`) }).catch(() => {}); shots++; }
    }
  }

  // Walk the diagnostic tree: start, then take the first option three times.
  for (const page of [origin, render]) {
    await page.evaluate((t) => window.switchTab(t), mod.render.treeTab);
    await page.waitForTimeout(200);
    await page.evaluate(() => window.renderDiag('start'));
    await page.waitForTimeout(120);
    for (let i = 0; i < 3; i++) {
      const btn = page.locator(`#${mod.render.tree.container} .tree-btn`).first();
      if (await btn.count()) { await btn.click().catch(() => {}); await page.waitForTimeout(120); }
    }
  }
  const ta = await origin.evaluate((id) => document.getElementById(id).innerText, mod.render.tree.container);
  const tb = await render.evaluate((id) => document.getElementById(id).innerText, mod.render.tree.container);
  compared++;
  if (norm(ta) !== norm(tb)) failures.push(`${mod.key}/tree after 3 steps: differs\n      original: ${norm(ta).slice(0, 120)}\n      renderer: ${norm(tb).slice(0, 120)}`);

  // Self-check: render the bank and answer the first question.
  if (mod.selfcheck) {
    for (const page of [origin, render]) {
      await page.evaluate(() => window.switchTab('selfcheck'));
      await page.waitForTimeout(250);
      const opt = page.locator('#sc-body .sc-opt').first();
      if (await opt.count()) { await opt.click().catch(() => {}); await page.waitForTimeout(120); }
    }
    const sa = await origin.evaluate(() => document.getElementById('sc-body').innerText);
    const sb = await render.evaluate(() => document.getElementById('sc-body').innerText);
    compared++;
    if (norm(sa) !== norm(sb)) {
      const i = [...norm(sa)].findIndex((c, k) => c !== norm(sb)[k]);
      failures.push(`${mod.key}/selfcheck after one answer: differs at ${i}\n      original: ...${norm(sa).slice(Math.max(0, i - 40), i + 60)}...\n      renderer: ...${norm(sb).slice(Math.max(0, i - 40), i + 60)}...`);
    }
  }

  await origin.close();
  await render.close();
  process.stdout.write(`${mod.key} `);
}

await browser.close();
console.log(`\n\nmodules ${modules.length}, comparisons ${compared}, screenshots ${shots} in ${OUT}`);
if (failures.length) {
  console.log(`\nDIFFERENCES (${failures.length}):`);
  for (const f of failures.slice(0, 25)) console.log(`  - ${f}`);
  if (failures.length > 25) console.log(`  ... and ${failures.length - 25} more`);
  writeFileSync(join(OUT, 'failures.txt'), failures.join('\n'));
  process.exit(1);
}
console.log('\nparity: identical');
