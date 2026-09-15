/* BuiltWright renderer.
 *
 * One implementation of the behaviour that every module used to carry its own copy of:
 * tabs, card groups, the diagnostic tree and the self-check. It renders a module from the
 * JSON in app/data/modules and produces the same markup the hand written files produce,
 * so the existing stylesheet applies unchanged.
 *
 * Plain script, no build step and no dependencies, so the app still runs from a folder.
 *
 * The panel fragments are injected verbatim and their inline handlers call module
 * specific names (selectType, selectBearing and so on). mount() installs those names on
 * window from the module's config, which is what lets the fragments keep working.
 */
(function (global) {
  'use strict';

  var BW = { version: 1 };

  // ---- card -------------------------------------------------------------------
  // Byte for byte the markup the modules' own card() produced.
  BW.card = function (d) {
    return '<div class="comp-detail"><div class="comp-detail-header"><i class="ti ' + d.icon +
      ' comp-detail-icon"></i><div><div class="comp-detail-name">' + d.name +
      '</div><div class="comp-detail-role">' + d.role + '</div></div></div><div class="comp-detail-body">' +
      d.body + '</div><ul class="comp-detail-tips">' +
      d.tips.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>';
  };

  // ---- tabs -------------------------------------------------------------------
  BW.switchTab = function (tab) {
    var m = BW.current;
    if (m && tab === 'selfcheck') setTimeout(BW.scRender, 0);
    if (m && tab === m.render.treeTab) setTimeout(function () { BW.renderDiag('start'); }, 0);
    each(document.querySelectorAll('.bw-tab'), function (t) { t.classList.remove('active'); });
    each(document.querySelectorAll('.bw-panel'), function (p) { p.classList.remove('active'); });
    var b = document.querySelector('[onclick="switchTab(\'' + tab + '\')"]');
    if (b) b.classList.add('active');
    var p = document.getElementById('panel-' + tab);
    if (p) p.classList.add('active');
  };

  // Deep link: file.html#tab
  BW.go = function () {
    var h = location.hash.replace('#', '');
    if (h && document.getElementById('panel-' + h)) BW.switchTab(h);
  };

  BW.toggleAdv = function (id) {
    var el = document.getElementById(id);
    if (el) el.classList.toggle('open');
  };

  // ---- card groups --------------------------------------------------------------
  // One card group: clicking a card marks it selected and renders its detail pane.
  BW.select = function (groupName, id) {
    var g = BW.current.render.groups[groupName];
    if (!g) return;
    var scope = g.scope ? document.querySelector(g.scope) : document;
    if (scope) each(scope.querySelectorAll(g.cardClass), function (c) { c.classList.remove('selected'); });
    var chosen = document.getElementById(g.prefix + id);
    if (chosen) chosen.classList.add('selected');
    var display = document.getElementById(g.display);
    var data = BW.current.cards[g.data];
    if (display && data && data[id]) display.innerHTML = BW.card(data[id]);
  };

  // ---- diagnostic tree -----------------------------------------------------------
  BW.diagHistory = [];
  BW.currentDiagNode = null;

  BW.renderDiag = function (id) {
    var m = BW.current;
    if (!m || !m.render.tree) return;
    var nodes = BW.treeNodes();
    var n = nodes[id];
    if (!n) return;
    BW.currentDiagNode = id;

    var progress = document.getElementById(m.render.tree.progress);
    var container = document.getElementById(m.render.tree.container);
    if (!container) return;

    var pct = Math.min(8 + (BW.diagHistory.length / 5) * 88, 96);
    if (progress) progress.style.width = pct + '%';

    var h = '';
    if (BW.diagHistory.length > 0) {
      h += '<button class="tree-back" onclick="diagBack()"><i class="ti ti-arrow-left"></i> back</button><br><br>';
    }
    if (n.type === 'result') {
      if (progress) progress.style.width = '100%';
      h += '<div class="tree-result ' + n.cls + '"><div class="tree-result-label">' + n.label +
        '</div><div class="tree-result-text">' + n.text + '</div><div class="tree-result-sub">' + n.sub + '</div>' +
        (n.prevent ? '<div class="tree-prevent"><strong>Prevent recurrence</strong>' + n.prevent + '</div>' : '') +
        '</div><br><button class="tree-btn" onclick="diagHistory.length=0;renderDiag(\'start\');">Start over</button>';
    } else {
      h += '<div class="tree-q"><div class="tree-q-text">' + n.q + '</div>' +
        (n.hint ? '<div class="tree-q-hint">' + n.hint + '</div>' : '') +
        '<div class="tree-btns">' + n.options.map(function (o) {
          return '<button class="tree-btn ' + (o.cls || '') + '" onclick="diagTo(\'' + o.next + '\')">' + o.label + '</button>';
        }).join('') + '</div></div>';
    }
    container.innerHTML = h;
  };

  BW.treeNodes = function () {
    var trees = BW.current.trees;
    return trees[Object.keys(trees)[0]] || {};
  };

  BW.diagTo = function (id) { BW.diagHistory.push(BW.currentDiagNode); BW.renderDiag(id); };
  BW.diagBack = function () { if (BW.diagHistory.length > 0) BW.renderDiag(BW.diagHistory.pop()); };

  // ---- self-check -----------------------------------------------------------------
  BW.scAnswered = {};
  BW.scCorrect = 0;

  BW.scRender = function () {
    var el = document.getElementById('sc-body');
    if (!el || !BW.current.selfcheck) return;
    var total = 0, html = '';
    var bank = BW.current.selfcheck;
    Object.keys(bank).forEach(function (tab) {
      var qs = bank[tab];
      var btn = document.querySelector('[onclick="switchTab(\'' + tab + '\')"]');
      var tabName = btn ? btn.textContent : tab;
      html += '<div class="sc-section"><div class="family-label">' + tabName +
        ' <a class="sc-jump" href="#' + tab + '" onclick="switchTab(\'' + tab + '\')">open tab</a></div>';
      qs.forEach(function (q, i) {
        var id = tab + '_' + i;
        total++;
        html += '<div class="sc-q" id="scq-' + id + '"><div class="sc-stem">' + q[0] + '</div><div class="sc-opts">' +
          q[1].map(function (o, j) {
            return '<button class="sc-opt" onclick="scAnswer(\'' + id + '\',' + j + ',' + q[2] + ')">' + o + '</button>';
          }).join('') + '</div><div class="sc-why" id="scw-' + id + '"><strong>Why</strong>' + q[3] + '</div></div>';
      });
      html += '</div>';
    });
    html += '<div class="sc-score"><div class="sc-score-text">Score <b id="sc-n">0</b> / ' + total +
      ' &nbsp; answered <b id="sc-a">0</b></div><div class="sc-bar"><div id="sc-fill"></div></div>' +
      '<button class="tree-btn" onclick="scReset()">Reset</button></div>';
    el.innerHTML = html;
    global._scTotal = total;
  };

  BW.scAnswer = function (id, j, correct) {
    if (BW.scAnswered[id] !== undefined) return;
    BW.scAnswered[id] = j;
    if (j === correct) BW.scCorrect++;
    each(document.querySelectorAll('#scq-' + id + ' .sc-opt'), function (b, k) {
      b.disabled = true;
      if (k === correct) b.classList.add('correct');
      else if (k === j) b.classList.add('wrong');
    });
    document.getElementById('scw-' + id).classList.add('show');
    document.getElementById('sc-n').textContent = BW.scCorrect;
    document.getElementById('sc-a').textContent = Object.keys(BW.scAnswered).length;
    document.getElementById('sc-fill').style.width = (100 * BW.scCorrect / global._scTotal) + '%';
  };

  BW.scReset = function () { BW.scAnswered = {}; BW.scCorrect = 0; BW.scRender(); };

  // ---- mount -------------------------------------------------------------------------
  BW.mount = function (mod, root) {
    BW.current = mod;
    document.title = 'BuiltWright: ' + mod.render.title;

    // Module specific CSS on top of bw.css.
    if (mod.css && mod.css.length) {
      var style = document.createElement('style');
      style.textContent = mod.css.join('\n');
      document.head.appendChild(style);
    }

    root.innerHTML =
      '<div class="bw-header"><div><div class="bw-logo">' +
        '<a href="builtwright_diagnose_hub_v1.html">BuiltWright</a></div>' +
        '<div class="bw-title">' + mod.render.title + '</div></div>' +
        '<div class="bw-badge">' + mod.render.badge + '</div></div>' +
      '<div class="bw-tabs">' + mod.tabs.map(function (t) {
        return '<button class="bw-tab' + (t.active ? ' active' : '') + '" onclick="switchTab(\'' + t.id + '\')"' +
          (t.style ? ' style="' + t.style + '"' : '') + '>' + t.label + '</button>';
      }).join('') + '</div>' +
      mod.tabs.map(function (t) {
        var frag = mod.panels[t.id] || '';
        return '<div id="panel-' + t.id + '" class="bw-panel' + (t.active ? ' active' : '') + '">' + frag + '</div>';
      }).join('');

    // The injected fragments call these by bare name.
    global.switchTab = BW.switchTab;
    global.toggleAdv = BW.toggleAdv;
    global.renderDiag = BW.renderDiag;
    global.diagTo = BW.diagTo;
    global.diagBack = BW.diagBack;
    global.diagHistory = BW.diagHistory;
    global.scAnswer = BW.scAnswer;
    global.scReset = BW.scReset;
    global.scRender = BW.scRender;
    Object.keys(mod.render.groups).forEach(function (name) {
      global[name] = function (id) { BW.select(name, id); };
    });

    BW.go();
    global.addEventListener('hashchange', BW.go);
    var activeTab = mod.tabs.filter(function (t) { return t.active; })[0];
    if (activeTab && activeTab.id === mod.render.treeTab) BW.renderDiag('start');
  };

  BW.load = function (key, root) {
    return fetch('data/modules/' + key + '.json')
      .then(function (r) {
        if (!r.ok) throw new Error('module "' + key + '" not found (' + r.status + ')');
        return r.json();
      })
      .then(function (mod) { BW.mount(mod, root); return mod; });
  };

  function each(list, fn) { Array.prototype.forEach.call(list, fn); }

  global.BW = BW;
})(window);
