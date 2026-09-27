/* Filtering the hub to a machine.
 *
 * Every hub route carries component tags. When a machine is selected in the facility
 * layer, a branch of the symptom tree is only worth walking if some route it can reach
 * matches one of the machine's components. A conveyor question on a pump train is a dead
 * end, so it is not offered.
 *
 * Nothing is removed from the data. This filters what is shown, and says so, with one
 * click to turn it off. If a filter would leave a question with no answers at all, the
 * question is shown unfiltered instead: narrowing the hub must never dead-end it.
 */
(function (global) {
  'use strict';

  var BWHub = { active: null, on: true };
  var reachable = {}; // node id -> Set of component tags reachable from it

  function nodes() { return (global.BW_DATA && global.BW_DATA.hub && global.BW_DATA.hub.nodes) || {}; }

  // Tags reachable from a node, memoised. Cycles are impossible in this tree, but the
  // guard keeps a malformed one from hanging the page.
  function tagsFrom(id, seen) {
    if (reachable[id]) return reachable[id];
    seen = seen || {};
    if (seen[id]) return new Set();
    seen[id] = true;
    var node = nodes()[id];
    var out = new Set();
    if (!node) return out;
    if (node.type === 'route') {
      (node.components || []).forEach(function (c) { out.add(c); });
    } else {
      (node.options || []).forEach(function (o) {
        tagsFrom(o.next, seen).forEach(function (c) { out.add(c); });
      });
    }
    if (!seen.partial) reachable[id] = out;
    return out;
  }

  BWHub.refresh = function () {
    reachable = {};
    BWHub.active = (global.BWF && BWHub.on) ? global.BWF.activeMachine() : null;
    return BWHub.active;
  };

  BWHub.machineTags = function () {
    return BWHub.active ? global.BWF.tagsOf(BWHub.active) : [];
  };

  // Does anything this branch can reach apply to the machine?
  BWHub.applies = function (id) {
    if (!BWHub.active) return true;
    var tags = BWHub.machineTags();
    if (!tags.length) return true;
    var found = tagsFrom(id);
    return tags.some(function (t) { return found.has(t); });
  };

  BWHub.filter = function (options) {
    if (!BWHub.active || !options) return options;
    var kept = options.filter(function (o) { return BWHub.applies(o.next); });
    return kept.length ? kept : options; // never leave a question unanswerable
  };

  // How many of the routes under a symptom apply, for the banner and the symptom cards.
  BWHub.countFor = function (symptomId) {
    var all = 0, hit = 0;
    var seen = {};
    var queue = [symptomId];
    while (queue.length) {
      var id = queue.pop();
      if (seen[id]) continue;
      seen[id] = true;
      var node = nodes()[id];
      if (!node) continue;
      if (node.type === 'route') {
        all++;
        if (BWHub.applies(id)) hit++;
      } else {
        (node.options || []).forEach(function (o) { queue.push(o.next); });
      }
    }
    return { all: all, hit: hit };
  };

  BWHub.toggle = function () {
    BWHub.on = !BWHub.on;
    BWHub.refresh();
    if (typeof global.init === 'function') global.init();
    if (global.currentSymptom && typeof global.startSymptom === 'function') global.startSymptom(global.currentSymptom);
  };

  BWHub.banner = function () {
    var m = (global.BWF && global.BWF.activeMachine()) || null;
    if (!m) return '';
    var total = 0, applying = 0;
    Object.keys(nodes()).forEach(function (id) {
      var n = nodes()[id];
      if (!n || n.type !== 'route') return;
      total++;
      var tags = (global.BWF.tagsOf(m) || []);
      if (tags.some(function (t) { return (n.components || []).indexOf(t) !== -1; })) applying++;
    });
    return '<div class="hub-fac">' +
      '<div><span class="hub-fac-tag">' + m.tag + '</span> ' +
      '<span class="hub-fac-note">' + (BWHub.on
        ? applying + ' of ' + total + ' routes apply to this machine'
        : 'showing all ' + total + ' routes') + '</span></div>' +
      '<button class="hub-fac-btn" onclick="BWHub.toggle()">' + (BWHub.on ? 'show everything' : 'filter to this machine') + '</button>' +
      '<a class="hub-fac-btn" href="facility.html">facility</a></div>';
  };

  // The plant's own numbers for the components a route touches, to sit on the route card.
  // The hub's note calls for exactly this: the actual grease quantity for that bearing, the
  // actual seal flush plan, the actual set pressure.
  BWHub.routeNumbers = function (route) {
    var m = (global.BWF && global.BWF.activeMachine()) || null;
    var vocab = global.BW_DATA && global.BW_DATA.components && global.BW_DATA.components.components;
    if (!m || !vocab || !route || !route.components) return '';
    var groups = global.BWF.numbersFor(vocab, m, route.components);
    if (!groups.length) return '';
    var html = '<div class="hub-fac-nums"><div class="hub-fac-nums-label">' + esc(m.tag) + '</div>';
    groups.forEach(function (g) {
      g.fields.forEach(function (f) {
        html += '<div class="hub-fac-num"><span>' + esc(g.label) + ': ' + esc(f.label) + '</span>' +
          esc(f.value) + (f.unit ? ' ' + esc(f.unit) : '') + '</div>';
      });
    });
    return html + '</div>';
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }

  // Capturing what happened: the route reached, against the machine, with whatever was
  // read off it. One field, because anything longer does not get filled in on a plant floor.
  BWHub.logForm = function (routeId, route) {
    var m = (global.BWF && global.BWF.activeMachine()) || null;
    if (!m) return '';
    return '<div class="hub-log">' +
      '<input class="hub-log-note" id="hub-log-note" placeholder="what you found, readings, what you did (optional)">' +
      '<button class="hub-log-btn" onclick="BWHub.logRoute(' + JSON.stringify(routeId).replace(/"/g, '&quot;') + ')">' +
      'Log against ' + esc(m.tag) + '</button>' +
      '<span class="hub-log-said" id="hub-log-said"></span></div>';
  };

  BWHub.logRoute = function (routeId) {
    if (!global.BWF) return;
    var data = global.BWF.load();
    if (!data.activeId) return;
    var route = nodes()[routeId];
    if (!route) return;
    var field = document.getElementById('hub-log-note');
    global.BWF.addLog(data, {
      machineId: data.activeId,
      symptom: global.currentSymptom || '',
      routeId: routeId,
      title: route.title,
      module: route.module,
      tab: route.tab,
      note: field ? field.value.trim() : '',
    });
    var said = document.getElementById('hub-log-said');
    if (!global.BWF.save(data)) {
      if (said) said.textContent = 'could not save on this device';
      return;
    }
    if (field) field.value = '';
    if (said) {
      var n = global.BWF.logsFor(data, data.activeId).length;
      said.textContent = 'logged, ' + n + ' on this machine';
    }
  };

  BWHub.style = function () {
    if (document.getElementById('bw-hub-filter-style')) return;
    var el = document.createElement('style');
    el.id = 'bw-hub-filter-style';
    el.textContent = [
      '.hub-fac { display:flex; gap:10px; align-items:center; flex-wrap:wrap; background:#242420; border:0.5px solid #BA7517; border-radius:8px; padding:0.6rem 0.9rem; margin-bottom:1rem; }',
      ".hub-fac-tag { font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:1px; color:#EF9F27; }",
      '.hub-fac-note { font-size:13px; color:#888780; }',
      ".hub-fac-btn { margin-left:auto; font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; background:none; color:#888780; border:0.5px solid #3a3a36; border-radius:4px; padding:5px 9px; cursor:pointer; text-decoration:none; }",
      '.hub-fac-btn:hover { color:#EF9F27; border-color:#BA7517; }',
      '.sym-card.bw-dim { opacity:0.45; }',
      '.hub-fac-nums { border-top:0.5px solid #3a3a36; margin-top:0.75rem; padding-top:0.6rem; }',
      ".hub-fac-nums-label { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#EF9F27; margin-bottom:4px; }",
      '.hub-fac-num { font-size:13px; color:#f0ede4; padding:2px 0; }',
      '.hub-log { display:flex; gap:8px; align-items:center; flex-wrap:wrap; border-top:0.5px solid #3a3a36; margin-top:0.75rem; padding-top:0.6rem; }',
      ".hub-log-note { flex:1; min-width:180px; font-family:'Rajdhani',sans-serif; font-size:13px; background:#1a1a18; border:0.5px solid #3a3a36; border-radius:5px; padding:6px 9px; color:#f0ede4; outline:none; }",
      '.hub-log-note:focus { border-color:#BA7517; }',
      ".hub-log-btn { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; background:none; color:#888780; border:0.5px solid #3a3a36; border-radius:4px; padding:6px 10px; cursor:pointer; }",
      '.hub-log-btn:hover { color:#EF9F27; border-color:#BA7517; }',
      ".hub-log-said { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#97C459; }",
      '@media print { .hub-log { display:none; } }',
      ".hub-fac-num span { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#888780; display:block; }",
    ].join('\n');
    document.head.appendChild(el);
  };

  global.BWHub = BWHub;
})(window);
