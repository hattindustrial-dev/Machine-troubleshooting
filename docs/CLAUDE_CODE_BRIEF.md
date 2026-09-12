# BuiltWright: brief for the Claude Code migration

## What this folder is
A complete, working, static web app: 21 content modules, 3 documents, a symptom-first hub, search, PM task library, reference tables, a root cause report form, and pocket cards. Every file is standalone HTML with inline CSS and JS, linked by URL hashes. It runs from a folder with no build step and installs as a PWA over https. Nothing in it needs to be rewritten to work; the migration is about making it maintainable and adding the facility layer.

## Start by reading
1. `README_hosting.txt`: contents, hosting, offline, print.
2. `builtwright_index.json`: machine-readable map of every module, tab, hub route, and component tag. Parse this instead of the HTML.
3. `builtwright_diagnose_hub_v1.html`: the `modules` registry (line ~165) and the `nodes` tree with `type:'route'` entries are the architecture in miniature.
4. One content module end to end, for example `builtwright_bearing_module_v1.html`: tab structure, card data objects, `diagNodes` tree with `prevent:` tails, `SELFCHECK` bank, Safety tab, Related strip.

## Conventions every file follows
- Design tokens: background #1a1a18, surface #242420 and #2e2e2a, border #3a3a36, accent #BA7517 (hover #EF9F27), text #f0ede4 and #888780, red #A32D2D/#F09595, green #3B6D11/#97C459. Fonts Share Tech Mono (labels) and Rajdhani (body). Tabler Icons via CDN.
- Panels: `<div id="panel-{tab}" class="bw-panel">`, tabs via `switchTab('{tab}')`, deep link `file.html#tab`.
- Diagnostic trees: `diagNodes` object; question nodes have `q, hint, options[{label,next,cls}]`; result nodes have `type:'result', cls:(action|fix|escalate), label, text, sub, prevent`. `prevent` is what the PM library is built from.
- Self-check: `SELFCHECK` object keyed by tab, entries `[stem, [options], correctIndex, why]`.
- Cards: `typeData`/`chainData`/etc objects `{icon, name, role, body, tips[]}` rendered by `card()`.
- Safety tab always last, red-bordered. Every module ends with a Related strip and the footer.
- House style: no em dashes anywhere (validated), no "not X but Y", field tips in amber boxes labelled "Field tip:".

## The build pipeline (in /build)
- `build_tools.py`: extracts prevent tails into the PM library, builds the search index from every panel, adds print CSS and PWA tags, generates sw.js with a version bump, runs link and onclick integrity checks. Run after any content change.
- `add_selfcheck.py` + `qbank*.py`: the question banks and the injector that adds the Self-Check tab to a module.
- `review_pass.py`, `older_modules_parity.py`, `pass3.py`: the audit and enrichment scripts from the review passes; useful as examples of safe in-place edits.
- `pt_styles.html`: the canonical `<head>` and CSS block every module was built from.
- Validation that must keep passing: `node --check` on every `<script>` block, every `next:` resolves to a node, every href resolves to a file and a panel id, hub registry tabs exist, zero em dashes.

## Suggested migration
1. Keep the modules as data. Convert each module's cards, tree, and quiz into JSON (the shapes above are already JSON-like). The prose panels can stay as HTML fragments.
2. One renderer (React or plain JS) that takes module JSON and produces the same tabs, cards, trees, and self-check the current files produce. Pixel parity with the current design is the acceptance test.
3. Hub, search, PM library, and pocket cards become views over the same data instead of generated files.
4. Then the facility layer: a machine is a list of component types (the `components` tags on hub routes) with plant-specific fields (bearing numbers, seal plan, lubricant, tolerances, set pressures, equipment number). The hub filters routes to the machine's components and overlays the plant numbers on the module content. `builtwright_index.json` already has the route-to-component tags.
5. Local storage for PM ticks and root cause reports stays local by default; a sync option is a later decision.

## Not yet built (by choice)
Welding fundamentals, rigging (RigIt), fasteners in depth (ButtonUp), drawing reading (TradeLens), engines and turbines, mixers. Jen's field stories go into the field tip boxes. Plant-specific numbers belong in the facility layer, never in the universal modules.
