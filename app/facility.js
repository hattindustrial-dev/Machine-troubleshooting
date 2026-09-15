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
  function blank() { return { version: 1, machines: [], activeId: null }; }

  BWF.load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var data = JSON.parse(raw);
      if (!data || !Array.isArray(data.machines)) return blank();
      return data;
    } catch (e) {
      return blank(); // private mode, cleared storage, or something else wrote the key
    }
  };

  BWF.save = function (data) {
    try { localStorage.setItem(KEY, JSON.stringify(data)); return true; }
    catch (e) { return false; }
  };

  BWF.newId = function () {
    return 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
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
    if (data.activeId === id) data.activeId = null;
    return data;
  };

  // ---- the component tags a machine carries ------------------------------------------
  BWF.tagsOf = function (machine) {
    return Object.keys((machine && machine.components) || {});
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

  // The machine's filled-in numbers for a module, ready to render as an overlay.
  BWF.overlayFor = function (hub, vocabulary, machine, moduleKey) {
    if (!machine) return [];
    var wanted = BWF.componentsOfModule(hub, moduleKey, vocabulary);
    var out = [];
    wanted.forEach(function (tag) {
      var values = (machine.components || {})[tag];
      var spec = vocabulary[tag];
      if (!values || !spec) return;
      var filled = spec.fields
        .filter(function (f) { return values[f.key]; })
        .map(function (f) { return { label: f.label, value: values[f.key], unit: f.unit || '' }; });
      if (filled.length) out.push({ tag: tag, label: spec.label, icon: spec.icon, fields: filled });
    });
    return out;
  };

  global.BWF = BWF;
})(window);
