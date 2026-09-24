/* The facility overlay on module content.
 *
 * When a machine is selected in the facility layer, its plant numbers appear beside the
 * module content: bearing numbers on the bearing module, the seal plan on the seals
 * module, the alignment tolerance on the coupling module. Which numbers belong to which
 * module comes from the component tags the module carries, which are the same tags the
 * hub routes use.
 *
 * The module content is not touched. This adds a strip above it and nothing else, which is
 * what keeps the modules universal: the plant's numbers live in the facility layer and are
 * laid over the top, never written into the module.
 */
(function (global) {
  'use strict';

  var STYLE_ID = 'bw-facility-overlay-style';
  var CSS = [
    '.bw-fac { background:#242420; border:0.5px solid #BA7517; border-radius:8px; padding:0.75rem 1rem; margin-bottom:1rem; }',
    '.bw-fac-head { display:flex; gap:8px; align-items:baseline; flex-wrap:wrap; margin-bottom:0.5rem; }',
    ".bw-fac-tag { font-family:'Share Tech Mono',monospace; font-size:12px; letter-spacing:1px; color:#EF9F27; }",
    '.bw-fac-name { font-size:13px; color:#888780; }',
    ".bw-fac-switch { margin-left:auto; font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#888780; text-decoration:none; border-bottom:0.5px solid #3a3a36; }",
    '.bw-fac-switch:hover { color:#EF9F27; }',
    '.bw-fac-group { margin-top:0.5rem; }',
    ".bw-fac-group-label { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#5F5E5A; margin-bottom:3px; }",
    '.bw-fac-rows { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:2px 14px; }',
    '.bw-fac-row { font-size:13px; color:#f0ede4; padding:2px 0; }',
    ".bw-fac-row span { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#888780; display:block; }",
    '@media print { .bw-fac { border-color:#000; background:#fff; } .bw-fac-row { color:#000; } .bw-fac-switch { display:none; } }',
  ].join('\n');

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var el = document.createElement('style');
    el.id = STYLE_ID;
    el.textContent = CSS;
    document.head.appendChild(el);
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c];
    });
  }

  // Called by the renderer once a module is mounted.
  function decorate(mod, root) {
    if (!global.BWF || !global.BW_DATA || !global.BW_DATA.components) return;
    if (!mod.components || !mod.components.length) return;

    var machine = global.BWF.activeMachine();
    if (!machine) return;

    var groups = global.BWF.numbersFor(global.BW_DATA.components.components, machine, mod.components);
    if (!groups.length) return;

    injectStyle();
    var html = '<div class="bw-fac"><div class="bw-fac-head">' +
      '<span class="bw-fac-tag">' + esc(machine.tag) + '</span>' +
      '<span class="bw-fac-name">' + esc(machine.name || '') + '</span>' +
      '<a class="bw-fac-switch" href="facility.html">facility</a></div>';
    groups.forEach(function (g) {
      html += '<div class="bw-fac-group"><div class="bw-fac-group-label">' + esc(g.label) + '</div><div class="bw-fac-rows">';
      g.fields.forEach(function (f) {
        html += '<div class="bw-fac-row"><span>' + esc(f.label) + '</span>' + esc(f.value) + (f.unit ? ' ' + esc(f.unit) : '') + '</div>';
      });
      html += '</div></div>';
    });
    html += '</div>';

    // Above the tab bar, so it reads as a layer over the module rather than part of it.
    var strip = document.createElement('div');
    strip.innerHTML = html;
    var tabs = root.querySelector('.bw-tabs');
    if (tabs) root.insertBefore(strip.firstChild, tabs);
    else root.appendChild(strip.firstChild);
  }

  global.BWFacilityOverlay = { decorate: decorate };
})(window);
