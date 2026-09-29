// Browser attack test. Plants hostile data in the facility store and in an imported file,
// opens every page that renders it, and fails if anything executes.
//
//   node build/security.mjs            (starts its own static server)
//
// Needs playwright (already present in the Claude Code environment). Two attacks:
//   1. output escaping: safe ids, hostile text in every field
//   2. input hygiene: hostile ids, which end up in attributes and handlers
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

let chromium;
try { ({ chromium } = await import('playwright')); }
catch { ({ chromium } = await import('/opt/node22/lib/node_modules/playwright/index.mjs')); }

const ROOT = fileURLToPath(new URL('../app/', import.meta.url));
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(req.url.split('?')[0])).replace(/^(\.\.[/\\])+/, '');
  try {
    const body = await readFile(join(ROOT, path === '/' ? 'index.html' : path));
    res.writeHead(200, { 'content-type': TYPES[extname(path)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end('not found'); }
});
await new Promise((r) => server.listen(0, r));
const BASE = `http://localhost:${server.address().port}/`;

const X = (n) => `<img src=x onerror="window.__pwned_${n}=1">`;
const H = (n) => `"><img src=x onerror="window.__pwned_${n}=1">`;
const HANDLER = (n) => `x');window.__pwned_${n}=1;('`;
const outputAttack = {
  version: 2, activeId: 'm1',
  machines: [{ id: 'm1', tag: X('tag'), name: X('name'), area: X('area'), criticality: X('crit'), parts: [
    { id: 'p1', type: 'pump', label: X('label'), fields: { model: X('model'), impeller: X('impeller') } },
    { id: 'p2', type: 'bearing', label: X('label2'), fields: { number: X('bnum'), grease: X('grease') } },
    { id: 'p3', type: 'seal', label: 'Seal', fields: { plan: X('plan') } },
  ] }],
  logs: [{ id: 'l1', machineId: 'm1', routeId: 'r_noise_cav', title: X('title'), module: 'pumps', tab: 'diagnose', note: X('note'), at: X('at') }],
};
const inputAttack = {
  version: 2, activeId: H('active'),
  machines: [{ id: H('mid'), tag: 'P-1', name: 'n', parts: [
    { id: H('pid'), type: 'pump', label: 'Pump', fields: {} },
    { id: HANDLER('pidh'), type: 'bearing', label: 'Bearing', fields: {} },
  ] }],
  logs: [{ id: HANDLER('lid'), machineId: H('mid'), title: 't', note: 'n', at: 'a' }],
};

const pages = ['facility.html', 'issues.html', 'builtwright_diagnose_hub_v1.html', 'builtwright_pm_library_v1.html',
  'builtwright_pumps_combined_v1.html', 'builtwright_bearing_module_v1.html', 'builtwright_seals_gaskets_v1.html', 'builtwright_reference_v1.html'];

const browser = await chromium.launch();
let failures = 0;
async function run(name, state) {
  const ctx = await browser.newContext();
  const p = await ctx.newPage();
  p.on('dialog', (d) => d.accept());
  const fired = new Map();
  const grab = async (where) => {
    const keys = await p.evaluate(() => Object.keys(window).filter((k) => k.startsWith('__pwned')));
    keys.forEach((k) => { if (!fired.has(k)) fired.set(k, new Set()); fired.get(k).add(where); });
  };
  const seed = (s) => p.evaluate((v) => localStorage.setItem('bw.facility', JSON.stringify(v)), s);
  await p.goto(BASE + 'facility.html', { waitUntil: 'domcontentloaded' });
  for (const u of pages) {
    await seed(state);
    await p.goto(BASE + u, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(700);
    await grab(u);
    if (u === 'facility.html') {
      for (const sel of ['.fac-machine', 'button:has-text("Edit")', 'button:has-text("Remove")', 'button:has-text("Move")']) {
        await p.locator(sel).first().click({ timeout: 1200 }).catch(() => {});
        await p.waitForTimeout(250);
        await grab(`${u} ${sel}`);
      }
    }
    if (u === 'builtwright_diagnose_hub_v1.html') {
      await p.locator('.sym-card').first().click().catch(() => {});
      for (let i = 0; i < 6 && !(await p.locator('.route').count()); i++) {
        await p.locator('#tree-area .tree-btn').first().click().catch(() => {});
        await p.waitForTimeout(150);
      }
      await grab(`${u} (route card)`);
    }
    if (u === 'issues.html') {
      await p.locator('.iss-part-head').first().click().catch(() => {});
      await p.waitForTimeout(150);
      await grab(`${u} (opened)`);
    }
  }
  // the import path: feed the same hostile file through the real import box
  if (name === 'input') {
    await p.evaluate(() => localStorage.removeItem('bw.facility'));
    await p.goto(BASE + 'facility.html', { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(300);
    await p.locator('button:has-text("Import and export")').click();
    await p.locator('#fac-import').fill(JSON.stringify(state));
    await p.locator('button:has-text("Add to what is here")').click();
    await p.waitForTimeout(600);
    const stored = await p.evaluate(() => JSON.parse(localStorage.getItem('bw.facility') || '{}'));
    const ids = [].concat((stored.machines || []).map((m) => m.id), (stored.machines || []).flatMap((m) => (m.parts || []).map((x) => x.id)), (stored.logs || []).map((l) => l.id));
    const unsafe = ids.filter((id) => !/^[A-Za-z0-9_-]{1,64}$/.test(id));
    if (!stored.machines || !stored.machines.length) { console.log('   the import stored nothing, so it was not exercised'); failures++; }
    if (unsafe.length) { console.log('   unsafe ids stored after import:', unsafe.join(' ')); failures++; }
    await grab('facility.html (after import)');
    await p.locator('.fac-machine').first().click({ timeout: 1200 }).catch(() => {});
    await p.waitForTimeout(250);
    await grab('facility.html (after import, selected)');
  }
  console.log(`${name}: ${fired.size ? 'FAILED' : 'nothing executed'}`);
  for (const [k, where] of fired) console.log(`   ${k} on ${[...where].join(' | ')}`);
  if (fired.size) failures++;
  await ctx.close();
}
await run('output', outputAttack);
await run('input', inputAttack);
await browser.close();
server.close();
process.exit(failures ? 1 : 0);
