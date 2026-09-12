BuiltWright: hosting and contents (2026-09-12)

CONTENTS (27 HTML files plus support files)
  Front door:   builtwright_diagnose_hub_v1.html
  Modules:      23 entries in the hub registry (21 content modules, 2 documents, plus tools)
  Tools:        search, PM task library, reference, root cause report, pocket cards, manager's guide, curriculum map
  Support:      manifest.json, sw.js, builtwright_icon_192.png, builtwright_icon_512.png, builtwright_index.json
  Totals:       365 diagnostic results (each with a prevent-recurrence line), 423 self-check questions, 77 field tips, 67 hub routes

HOSTING
  All files in one folder on any static web host (GitHub Pages, Netlify, Cloudflare Pages, or a plant intranet server).
  Open builtwright_diagnose_hub_v1.html as the front door. Every module links back to it.

OFFLINE / INSTALL TO PHONE
  sw.js and manifest.json make the set installable and usable offline.
  Service workers only run over https (or localhost). On http intranet hosting the pages still work; they just do not cache offline.
  First load caches every module. After that the app works with no signal. Fonts and icons cache the first time they load online.
  To ship an update, change the CACHE name in sw.js (bump the version) so phones fetch the new files. The build script does this automatically.

LOCAL DATA
  PM Task Library ticks and intervals, and the Root Cause report form, use the browser's localStorage. Nothing leaves the device.

PRINT
  Any tab prints the active panel only, black on white, with collapsibles expanded. Pocket cards print one per page.

INDEX
  builtwright_index.json is a machine-readable map of every module, tab, hub route, and component tag, for building the facility layer or migrating to a framework.

