/* Filtering the PM task library to a machine.
 *
 * The library holds every preventive task the series produced, which is the right thing for
 * building a programme and the wrong thing when you are standing in front of one machine.
 * With a machine selected, a task is shown when one of the modules it came from speaks to a
 * component in that machine's chain.
 *
 * The match runs through the module, not the task text: every task carries the modules whose
 * prevent-recurrence lines produced it, and the hub registry says which components each
 * module covers. Same derivation the hub filter and the issues view use.
 */
(function (global) {
  'use strict';

  var BWPM = { on: true, active: null };

  function hub() { return (global.BW_DATA && global.BW_DATA.hub) || { modules: {} }; }

  BWPM.refresh = function () {
    BWPM.active = (global.BWF && BWPM.on) ? global.BWF.activeMachine() : null;
    return BWPM.active;
  };

  function tags() {
    return BWPM.active ? global.BWF.tagsOf(BWPM.active) : [];
  }

  // A module file back to the components it covers.
  function componentsOfFile(file) {
    var mods = hub().modules;
    for (var key in mods) {
      if (mods[key] && mods[key].file === file) return mods[key].components || [];
    }
    return [];
  }

  // The issue index, keyed by module file and result label, which is exactly what a task's
  // source records. Built once. A label can repeat within a module, so each key holds a list.
  var byFileLabel = null;
  function issueIndex() {
    if (byFileLabel) return byFileLabel;
    var list = (global.BW_DATA && global.BW_DATA.issues) || null;
    if (!list) return null;
    byFileLabel = {};
    list.forEach(function (i) { (byFileLabel[i.file + '|' + i.label] = byFileLabel[i.file + '|' + i.label] || []).push(i); });
    return byFileLabel;
  }

  // A task applies to a machine when the result whose prevent line produced it concerns one
  // of the machine's components. A result tagged to no component is generic, a method or a
  // measurement technique, and applies to every machine. Where the issue index is missing or
  // a result has not been tagged yet, it falls back to the module level match it started with.
  BWPM.applies = function (task) {
    if (!BWPM.active) return true;
    var want = tags();
    if (!want.length) return true;
    var idx = issueIndex();
    return (task.src || []).some(function (s) {
      var found = idx && idx[s.file + '|' + s.label];
      if (found && found.length && found.every(function (i) { return i.tagged; })) {
        return found.some(function (i) {
          var comps = i.primary.concat(i.contributing);
          return !comps.length || comps.some(function (c) { return want.indexOf(c) !== -1; });
        });
      }
      return componentsOfFile(s.file).some(function (c) { return want.indexOf(c) !== -1; });
    });
  };

  BWPM.counts = function (tasks) {
    var hit = 0;
    (tasks || []).forEach(function (t) { if (BWPM.applies(t)) hit++; });
    return { all: (tasks || []).length, hit: hit };
  };

  BWPM.toggle = function () {
    BWPM.on = !BWPM.on;
    BWPM.refresh();
    if (typeof global.render === 'function') global.render();
    BWPM.paint();
  };

  BWPM.banner = function (tasks) {
    var m = (global.BWF && global.BWF.activeMachine()) || null;
    if (!m) return '';
    var c = BWPM.counts(tasks);
    return '<div class="pm-fac">' +
      '<div><span class="pm-fac-tag">' + esc(m.tag) + '</span> <span class="pm-fac-note">' +
      (BWPM.on ? c.hit + ' of ' + c.all + ' tasks apply to its ' + global.BWF.partsOf(m).length + ' parts'
               : 'showing all ' + c.all + ' tasks') + '</span></div>' +
      '<button class="pm-fac-btn" onclick="BWPM.toggle()">' + (BWPM.on ? 'show everything' : 'filter to this machine') + '</button>' +
      '<a class="pm-fac-btn" href="facility.html">facility</a></div>';
  };

  // Put the banner above the tabs, and keep it in step with the toggle.
  BWPM.allTasks = function () {
    return (global.BW_DATA && global.BW_DATA.pm && global.BW_DATA.pm.TASKS) || [];
  };

  BWPM.paint = function () {
    var existing = document.querySelector('.pm-fac');
    if (existing) existing.remove();
    var html = BWPM.banner(BWPM.allTasks());
    if (!html) return;
    var tabs = document.querySelector('.bw-tabs');
    if (tabs) tabs.insertAdjacentHTML('afterend', html);
  };

  BWPM.style = function () {
    if (document.getElementById('bw-pm-filter-style')) return;
    var el = document.createElement('style');
    el.id = 'bw-pm-filter-style';
    el.textContent = [
      '.pm-fac { display:flex; gap:10px; align-items:center; flex-wrap:wrap; background:#242420; border:0.5px solid #BA7517; border-radius:8px; padding:0.6rem 0.9rem; margin-bottom:1rem; }',
      ".pm-fac-tag { font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:1px; color:#EF9F27; }",
      '.pm-fac-note { font-size:13px; color:#888780; }',
      ".pm-fac-btn { margin-left:auto; font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; background:none; color:#888780; border:0.5px solid #3a3a36; border-radius:4px; padding:5px 9px; cursor:pointer; text-decoration:none; }",
      '.pm-fac-btn:hover { color:#EF9F27; border-color:#BA7517; }',
      '@media print { .pm-fac-btn { display:none; } }',
    ].join('\n');
    document.head.appendChild(el);
  };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }

  global.BWPM = BWPM;
})(window);
