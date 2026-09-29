// Unit test for the facility sanitiser (BWF.clean). Imported files and stored data are
// untrusted: ids end up in attributes and event handlers, text ends up in markup. Everything
// that comes out of clean() has to be safe by construction, and honest data has to survive.
//
//   node build/test-facility.mjs
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const file = fileURLToPath(new URL('../app/facility.js', import.meta.url));
const sandbox = { window: {}, localStorage: { getItem: () => null, setItem() {}, removeItem() {} }, console };
sandbox.window.localStorage = sandbox.localStorage;
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);
vm.runInContext(readFileSync(file, 'utf8'), Object.assign(sandbox, { self: sandbox.window }), { filename: file });
const BWF = sandbox.window.BWF || sandbox.BWF;
if (!BWF || typeof BWF.clean !== 'function') { console.error('BWF.clean is not exposed'); process.exit(1); }

let failed = 0, passed = 0;
function ok(cond, msg) { if (cond) passed++; else { failed++; console.error('FAIL: ' + msg); } }
const SAFE = /^[A-Za-z0-9_-]{1,64}$/;
const HOSTILE = `"><img src=x onerror=alert(1)>`;

// 1. Hostile ids everywhere are replaced with safe ones, and relationships survive.
{
  const out = BWF.clean({
    version: 2, activeId: HOSTILE,
    machines: [{ id: HOSTILE, tag: 'P-101', name: 'Feed pump', parts: [
      { id: `p" onclick="x`, type: 'pump', label: 'Pump', fields: { model: 'X' } },
      { id: 'p2', type: 'bearing', label: 'Bearing', fields: { number: '6205' } },
    ] }],
    logs: [{ id: `l'); alert(1);//`, machineId: HOSTILE, title: 'Noise', note: 'n', at: '2026-01-01' }],
  });
  const m = out.machines[0];
  ok(SAFE.test(m.id), 'machine id is safe');
  ok(m.parts.every((p) => SAFE.test(p.id)), 'part ids are safe');
  ok(out.logs.length === 1 && SAFE.test(out.logs[0].id), 'log id is safe');
  ok(out.logs[0] && out.logs[0].machineId === m.id, 'the log stays attached to its renamed machine');
  ok(out.activeId === m.id, 'the active machine follows the rename');
}

// 2. Two machines with the same id do not merge, and logs go to the first.
{
  const out = BWF.clean({ machines: [{ id: 'a', tag: '1', parts: [] }, { id: 'a', tag: '2', parts: [] }], logs: [{ id: 'l', machineId: 'a', title: 't' }] });
  ok(out.machines.length === 2 && out.machines[0].id !== out.machines[1].id, 'repeated machine ids are made unique');
}

// 3. Wrong types are cut down to strings; unsafe keys and types are dropped.
{
  const out = BWF.clean({ machines: [{ id: 'm', tag: { a: 1 }, name: ['x'], parts: [
    { id: 'p', type: 'pump', label: 42, fields: { ok: 'y', 'bad key"': 'z', obj: { a: 1 }, num: 7 } },
    { id: 'q', type: '"><script>', label: 'evil', fields: {} },
    null, 'string', 7,
  ] }] });
  const m = out.machines[0];
  ok(m.tag === '' && m.name === '', 'object and array text becomes empty');
  ok(m.parts.length === 1, 'parts with an unsafe type are dropped, junk entries ignored');
  ok(m.parts[0].label === '42', 'a number label becomes text');
  ok(Object.keys(m.parts[0].fields).sort().join() === 'num,ok', 'unsafe or non-text field keys are dropped');
}

// 4. Length limits.
{
  const out = BWF.clean({ machines: [{ id: 'm', name: 'x'.repeat(5000), parts: [] }] });
  ok(out.machines[0].name.length <= 120, 'long text is cut');
}

// 5. Junk input never throws.
for (const junk of [null, undefined, 0, 'x', [], { machines: 'no' }, { machines: [null] }, { logs: 5, machines: 7 }]) {
  let threw = false;
  try { BWF.clean(junk); } catch { threw = true; }
  ok(!threw, 'clean(' + JSON.stringify(junk) + ') does not throw');
}

// 6. Clean data is left alone, and cleaning twice changes nothing.
{
  const good = { version: 2, machines: [{ id: 'm1', tag: 'P-101', name: 'Feed pump', area: 'Unit 2', criticality: 'high', parts: [
    { id: 'p1', type: 'pump', label: 'Pump', fields: { model: 'ANSI 3x2' } } ] }], activeId: 'm1',
    logs: [{ id: 'l1', machineId: 'm1', symptom: 'noise', routeId: 'r1', title: 'T', module: 'pumps', tab: 'diagnose', note: 'n', at: '2026-01-01' }] };
  const once = BWF.clean(good);
  ok(JSON.stringify(once) === JSON.stringify(good), "honest data passes through unchanged");
  ok(JSON.stringify(BWF.clean(once)) === JSON.stringify(once), 'cleaning is idempotent');
}

console.log(`${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
