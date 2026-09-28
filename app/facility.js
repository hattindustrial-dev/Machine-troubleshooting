/* BuiltWright facility layer.
 *
 * A machine is an equipment number plus a list of component types, each carrying the
 * plant's own numbers: bearing numbers, seal plan, lubricant, tolerances, set pressures.
 * The component keys are the same tags the hub routes carry, which is what lets a machine
 * filter the symptom routes down to the ones that can apply to it.
 *
 * Plant numbers live here and only here. The modules stay universal, as the brief
 * requires, and this layer overlays on top of them.
 *
 * Storage is localStorage, on the device, same as the PM ticks and the root cause form.
 * Nothing leaves the browser.
 */
(function (global) {
  'use strict';

  var KEY = 'bw.facility';
  var BWF = { version: 1 };

  // ---- storage -------------------------------------------------------------------
  function blank() { return { version: 2, machines: [], activeId: null, logs: [] }; }

  // A machine was once a set of component types, one of each. It is a chain of parts now,
  // in order, so a train can carry a drive end and a non drive end bearing, three valves,
  // or two gearboxes, each with its own numbers. Machines stored under the old shape are
  // converted on read: one component becomes one part, keeping its values.
  function migrate(machine) {
    if (Array.isArray(machine.parts)) return machine;
    var parts = [];
    Object.keys(machine.components || {}).forEach(function (type) {
      var fields = machine.components[type] || {};
      // A bearing used to carry a drive end and a non drive end in one entry, because a
      // machine could only have one of each type. Those are two parts now.
      if (type === 'bearing' && (fields.de || fields.nde)) {
        if (fields.de) parts.push(part('bearing', 'Drive end bearing', rest(fields, { number: fields.de })));
        if (fields.nde) parts.push(part('bearing', 'Non drive end bearing', rest(fields, { number: fields.nde })));
        return;
      }
      parts.push(part(type, '', fields));
    });
    machine.parts = parts;
    delete machine.components;
    return machine;
  }

  function part(type, label, fields) {
    return { id: BWF.newId('p'), type: type, label: label, fields: fields };
  }

  // Everything except the two retired bearing keys, plus whatever replaces them.
  function rest(fields, extra) {
    var out = {};
    Object.keys(fields).forEach(function (k) { if (k !== 'de' && k !== 'nde') out[k] = fields[k]; });
    Object.keys(extra).forEach(function (k) { out[k] = extra[k]; });
    return out;
  }

  BWF.load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var data = JSON.parse(raw);
      if (!data || !Array.isArray(data.machines)) return blank();
      if (!Array.isArray(data.logs)) data.logs = []; // added after the first machines were stored
      data.machines = data.machines.map(migrate);
      data.version = 2;
      return data;
    } catch (e) {
      return blank(); // private mode, cleared storage, or something else wrote the key
    }
  };

  BWF.save = function (data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
    catch (e) { return false; }
  };

  BWF.newId = function (prefix) {
    return (prefix || 'm') + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  };

  BWF.machine = function (data, id) {
    return data.machines.filter(function (m) { return m.id === id; })[0] || null;
  };

  BWF.upsert = function (data, machine) {
    var i = data.machines.map(function (m) { return m.id; }).indexOf(machine.id);
    if (i === -1) data.machines.push(machine); else data.machines[i] = machine;
    return data;
  };

  BWF.remove = function (data, id) {
    data.machines = data.machines.filter(function (m) { return m.id !== id; });
    // Its history goes with it, rather than being left orphaned in storage.
    data.logs = (data.logs || []).filter(function (l) { return l.machineId !== id; });
    if (data.activeId === id) data.activeId = null;
    return data;
  };

  // ---- the diagnosis log ---------------------------------------------------------
  // What the hub's Facility mode note calls capturing what happened: a route taken against
  // a machine, with whatever the technician read off it. Over time a machine accumulates
  // its own history, and a route that keeps coming back is pointing at a root cause.
  BWF.addLog = function (data, entry) {
    entry.id = entry.id || ('l' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6));
    entry.at = entry.at || new Date().toISOString();
    data.logs.unshift(entry);
    return data;
  };

  BWF.removeLog = function (data, id) {
    data.logs = data.logs.filter(function (l) { return l.id !== id; });
    return data;
  };

  BWF.logsFor = function (data, machineId) {
    return (data.logs || []).filter(function (l) { return l.machineId === machineId; });
  };

  // Routes this machine has reached more than once, most repeated first.
  BWF.recurring = function (data, machineId) {
    var counts = {};
    BWF.logsFor(data, machineId).forEach(function (l) {
      if (!l.routeId) return;
      var c = counts[l.routeId] || { routeId: l.routeId, title: l.title, module: l.module, tab: l.tab, count: 0, last: l.at };
      c.count++;
      if (l.at > c.last) c.last = l.at;
      counts[l.routeId] = c;
    });
    return Object.keys(counts)
      .map(function (k) { return counts[k]; })
      .filter(function (c) { return c.count > 1; })
      .sort(function (a, b) { return b.count - a.count; });
  };

  // ---- the parts a machine is made of -------------------------------------------------
  BWF.partsOf = function (machine) {
    return (machine && machine.parts) || [];
  };

  // The component types present, which is what the hub filters on.
  BWF.tagsOf = function (machine) {
    var seen = {};
    BWF.partsOf(machine).forEach(function (p) { seen[p.type] = true; });
    return Object.keys(seen);
  };

  // A part's display name: what it was called, or the component's own label.
  BWF.partLabel = function (vocabulary, part) {
    if (part.label) return part.label;
    var spec = vocabulary && vocabulary[part.type];
    return (spec && spec.label) || part.type;
  };

  BWF.addPart = function (machine, type) {
    machine.parts = machine.parts || [];
    machine.parts.push({ id: BWF.newId('p'), type: type, label: '', fields: {} });
    return machine;
  };

  BWF.removePart = function (machine, partId) {
    machine.parts = BWF.partsOf(machine).filter(function (p) { return p.id !== partId; });
    return machine;
  };

  // Moving a part is how the chain gets its order: supply to discharge, driver to driven.
  BWF.movePart = function (machine, partId, delta) {
    var parts = BWF.partsOf(machine);
    var i = parts.map(function (p) { return p.id; }).indexOf(partId);
    var j = i + delta;
    if (i === -1 || j < 0 || j >= parts.length) return machine;
    var moved = parts.splice(i, 1)[0];
    parts.splice(j, 0, moved);
    return machine;
  };

  // ---- routes ------------------------------------------------------------------------
  // Every hub route carries component tags. A route applies to a machine when they share
  // at least one tag, which is the filter the brief describes.
  BWF.allRoutes = function (hub) {
    return Object.keys(hub.nodes)
      .filter(function (id) { return hub.nodes[id] && hub.nodes[id].type === 'route'; })
      .map(function (id) {
        var r = hub.nodes[id];
        return { id: id, module: r.module, tab: r.tab, components: r.components || [], title: r.title, text: r.text };
      });
  };

  BWF.routesFor = function (hub, machine) {
    var tags = BWF.tagsOf(machine);
    return BWF.allRoutes(hub).filter(function (r) {
      return r.components.some(function (c) { return tags.indexOf(c) !== -1; });
    });
  };

  // Which symptom each route sits under, so a filtered list can be grouped the way the
  // hub groups it. Walks the question tree from each symptom.
  BWF.symptomOf = function (hub) {
    var owner = {};
    hub.symptoms.forEach(function (s) {
      var queue = [s.id];
      var seen = {};
      while (queue.length) {
        var id = queue.pop();
        if (seen[id]) continue;
        seen[id] = true;
        var node = hub.nodes[id];
        if (!node) continue;
        if (node.type === 'route' && owner[id] === undefined) owner[id] = s;
        (node.options || []).forEach(function (o) { if (hub.nodes[o.next]) queue.push(o.next); });
      }
    });
    return owner;
  };

  // ---- module overlay ------------------------------------------------------------------
  // Which component tags belong to a module, taken from the routes that point at it, plus
  // the tag of the same name when there is one. Used to decide which of a machine's
  // numbers to show beside a module's content.
  BWF.componentsOfModule = function (hub, moduleKey, vocabulary) {
    var tags = {};
    if (vocabulary && vocabulary[moduleKey]) tags[moduleKey] = true;
    BWF.allRoutes(hub).forEach(function (r) {
      if (r.module !== moduleKey) return;
      r.components.forEach(function (c) { tags[c] = true; });
    });
    return Object.keys(tags);
  };

  // The machine's filled-in numbers for a set of component tags, one group per part, in
  // chain order. Two bearings give two groups, each under its own name.
  BWF.numbersFor = function (vocabulary, machine, tags) {
    if (!machine) return [];
    var want = tags || [];
    var out = [];
    BWF.partsOf(machine).forEach(function (part) {
      if (want.indexOf(part.type) === -1) return;
      var spec = vocabulary[part.type];
      if (!spec) return;
      var values = part.fields || {};
      var filled = spec.fields
        .filter(function (f) { return values[f.key]; })
        .map(function (f) { return { label: f.label, value: values[f.key], unit: f.unit || '' }; });
      if (filled.length) out.push({ tag: part.type, label: BWF.partLabel(vocabulary, part), icon: spec.icon, fields: filled });
    });
    return out;
  };

  // Same thing for a module, working the tags out from the hub.
  BWF.overlayFor = function (hub, vocabulary, machine, moduleKey) {
    return BWF.numbersFor(vocabulary, machine, BWF.componentsOfModule(hub, moduleKey, vocabulary));
  };

  BWF.activeMachine = function () {
    var data = BWF.load();
    return data.activeId ? BWF.machine(data, data.activeId) : null;
  };

  global.BWF = BWF;
})(window);
