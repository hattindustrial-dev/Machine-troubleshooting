import re, json, glob
OUT='/mnt/user-data/outputs/'
def rd(f): return open(OUT+f).read()
def wr(f,s): open(OUT+f,'w').write(s)
log=[]

# ---- 1. Pneumatics field tips (it had the CSS but no tips) ----
def tip(label,text): return f'    <div class="field-tip"><i class="ti ti-tool"></i><div><strong>{label}</strong>{text}</div></div>\n'
def add_tip(f,panel,html):
    s=rd(f)
    if html[60:140] in s: return
    i=s.find(f'id="panel-{panel}"'); j=s.find('<div id="panel-',i+10)
    if j<0: j=s.find('<div class="bw-footer">')
    k=s.rfind('<!--',0,j); k=k if (k>i and k>0) else j
    end=s.rfind('</div>',0,k); s=s[:end]+html+'  '+s[end:]; wr(f,s); log.append(f'{f}: tip in {panel}')
f='builtwright_pneumatics_v1.html'
add_tip(f,'overview',tip('Field tip: read the gauge at the machine, not at the compressor','The compressor room gauge says 7 bar. The machine that is misbehaving is 200 metres of undersized pipe and three loaded filters away, and its regulator is seeing 4.5 bar when every cylinder on the line strokes at once. A gauge tee at the machine inlet, read while the machine is running, is the only pressure that matters to that machine.'))
add_tip(f,'valves',tip('Field tip: the manual override is a diagnostic tool','Most solenoid valves have a manual override button or screw. Press it with the power to the coil confirmed off. If the valve shifts and the actuator moves, the pneumatics are fine and the problem is the coil, the wiring, or the PLC output. If nothing moves, it is the valve, the air, or the actuator. One press splits the problem in half. Return the override to its normal position before walking away.'))
add_tip(f,'airquality',tip('Field tip: a drain that never drains is a drain that has failed','Crack the manual drain on every filter bowl and the receiver once a week and watch what comes out. If a bowl that should be collecting water is dry and the next one downstream is full, the first one is bypassing. If the receiver blows a litre of water, the auto drain is not working and every dryer and filter downstream has been fed water for a month.'))
add_tip(f,'troubleshoot',tip('Field tip: the screwdriver stethoscope finds the leak the ear cannot','A long screwdriver with the handle to your ear and the tip on a fitting, a cylinder end cap, or a valve body turns a hiss you cannot locate into one you can. A leaking piston seal hisses at the exhaust port of the valve; a leaking rod seal hisses at the rod end. Ten seconds at each fitting on a manifold beats a bottle of soap water, and it works while the machine is running from outside the guard.'))

# ---- 2. Hub: guard route under "Something looks wrong" ----
p='builtwright_diagnose_hub_v1.html'; s=rd(p)
if 'r_vis_guard' not in s:
    s=s.replace("{label:'Coupling element cracked or shedding',next:'r_vis_coupling'},","{label:'Coupling element cracked or shedding',next:'r_vis_coupling'},{label:'Guard off, interlock jumpered, or a light curtain taped',next:'r_vis_guard'},")
    s=s.replace("  r_vis_metal: { type:'route'","  r_vis_guard: { type:'route', module:'safeguarding', tab:'troubleshoot', components:['guard'], title:'A defeated safeguard is a symptom. Find the task or the nuisance behind it.', text:'Restore it now, and then find out why it was off: a PM task that needs the guard removed, a process that cannot be seen, nuisance trips, or a device that failed. Each has a design fix. Restoring the guard without the fix means it is off again tomorrow.',\n    first:['What task needed it defeated','Is it tripping on nuisance (dust, alignment, a forklift)','Did the device fail and production could not wait'],\n    also:[{module:'safeguarding',tab:'guards',why:'Design the guard for the maintenance that will happen'},{module:'safeguarding',tab:'psr',why:'A modification to protective elements may need a PSR'},{module:'rootcause',tab:'examples',why:'The guard found off: the worked example'}] },\n\n  r_vis_metal: { type:'route'",1)
    wr(p,s); log.append('hub: guard route under looks-wrong')

# ---- 3. Pocket cards ----
styles=open('/home/claude/pt_styles.html').read().replace('BuiltWright: Power Transmission: Module 08','BuiltWright: Pocket Cards')
styles=styles.replace('</style>',"""
  .card { background:#242420; border:0.5px solid #3a3a36; border-radius:10px; padding:1rem 1.25rem; margin-bottom:1rem; }
  .card.red { border-color:#A32D2D; } .card.green { border-color:#3B6D11; } .card.amber { border-color:#BA7517; }
  .card-title { font-family:'Share Tech Mono',monospace; font-size:11px; letter-spacing:2px; text-transform:uppercase; color:#BA7517; margin-bottom:0.5rem; }
  .card.red .card-title { color:#F09595; } .card.green .card-title { color:#97C459; }
  .card ol { margin:0; padding-left:1.2rem; } .card li { font-size:14px; color:#f0ede4; line-height:1.5; margin-bottom:4px; }
  .card .src { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#5F5E5A; margin-top:8px; }
  .card .src a { color:#BA7517; text-decoration:none; }
  @media print { .card { page-break-inside:avoid; page-break-after:always; background:#fff; border:1px solid #000; color:#000; } .card li { color:#000; } .card-title { color:#000 !important; } .bw-tabs, .pm-btn { display:none; } body { background:#fff; } }
  .pm-btn { font-family:'Share Tech Mono',monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase; background:#242420; color:#BA7517; border:0.5px solid #BA7517; border-radius:4px; padding:8px 12px; cursor:pointer; margin-bottom:1rem; }
</style>""")
cards=[
 ('red','Before any guard comes off',['Identify every energy source: electrical, pneumatic, hydraulic, gravity, springs, thermal, chemical, and the machine upstream and downstream.','Isolate each one at its isolation point. A stop button, a VFD keypad, or an HMI is not an isolation.','Lock and tag each point with your own lock. Group lockout if others are working.','Release stored energy: vent air, bleed hydraulics to zero on the gauge, lower or block raised loads, discharge accumulators, block gravity take-ups.','Verify: attempt a start from every start point, check the gauge reads zero, try to move the actuator by hand.','Only then, the guard.','Your lock stays on until your hands are out and the guard is back.'],'safeguarding','safety'),
 ('red','High pressure injection injury',['A pinhole leak at 7 bar (100 psi) or more can inject fluid through skin. Hydraulic systems run at 100 to 300 bar.','Never feel for a leak with a hand. Cardboard or paper on a stick.','If fluid has gone under the skin, even a tiny puncture with little pain: this is a surgical emergency.','Go to hospital immediately and say the words "high pressure injection injury". Bring the fluid SDS.','Do not wait for it to hurt. Damage spreads for hours; delay is how fingers and hands are lost.','Tell the triage nurse it needs a hand surgeon, not a bandage.'],'hydraulics','safety'),
 ('amber','Pump is not pumping: the first ten minutes',['Suction side first. Tank level, suction valve open, strainer clean, no air leak at the suction, line not blocked.','Rotation: arrow on the casing, checked at the coupling with the drive uncoupled.','Primed and vented. A centrifugal pump full of air moves nothing.','Discharge valve open, and the check valve free.','Gauges: suction and discharge. Pressure but no flow is a closed or blocked discharge. Neither is suction or rotation.','If the pump has to be opened after all that, read the impeller: cavitation pitting, wear, clogging.'],'pumps_combined','diagnose'),
 ('amber','Motor tripping: the handoff to the electrician',['Amps on all three phases, at load, and the nameplate FLA.','Temperature at both bearing housings and the frame, by infrared, and the ambient.','Uncoupled run: does it trip with no load. Amps uncoupled.','Instant-off test: switch off and listen. Noise that stops instantly is electrical; noise that coasts down is mechanical.','Soft foot and alignment last checked, and by whom.','Shaft turned by hand: free, rough, or tight.','Write it down. Hand it over. The electrician starts from your numbers, not from zero.'],'motors','handoff'),
 ('green','Grease a bearing by the number',['Quantity in grams = 0.005 × bearing OD (mm) × width (mm).','Know your gun: weigh ten strokes once, divide by ten, paint the grams per stroke on the gun.','Relief plug out before the first stroke.','Pump slowly, the calculated strokes, with the machine running if the procedure allows.','Leave the relief plug out for a shift so excess purges, then replace it.','Same grease as last time. If unknown, purge completely and start clean; never mix thickeners.','Record: date, grease, strokes, temperature after.'],'lubrication','application'),
 ('green','Alignment: before the first shim is cut',['Soft foot on both machines, every foot, under 0.05 mm (0.002 in), clean pads.','Bracket sag measured on a straight bar and written down.','Rim readings valid: top plus bottom equals left plus right within a few hundredths.','Two sets of readings that agree.','Readings taken with piping disconnected, then connected. Any change over 0.05 mm is pipe strain; fix the pipe.','Thermal growth offset written on the sheet if the machine runs warm.','Tolerance for the speed from the reference table. Then correct.'],'coupling_alignment','troubleshoot'),
 ('green','The commissioning baseline',['Vibration at every bearing, three directions, velocity in mm/s, with the reading position marked on the machine.','Temperature at every bearing and the motor frame, and the ambient.','Motor amps, all three phases, at normal load.','Alignment readings, hot and cold.','Level readings on the baseplate.','Lubricant, quantity, and date.','Discharge and suction pressures, or the equivalent for the machine.','Filed with the equipment record. This is the birth certificate of the machine.'],'installation','checklist'),
 ('amber','Reading a failed bearing in two minutes',['Do not clean it. Look at it as it came out.','Fatigue spalling on the load zone: normal end of life, or overload, or misalignment if off centre.','Discoloured (straw, blue): ran hot. Lubrication or overload.','Dents at ball spacing: hammered on. Installation.','Fluting (washboard on the race): electrical current. VFD.','Rust, water marks, pitting: contamination.','Smearing, scuffing: lubrication failure or skidding.','Fretting (red dust) on the OD or bore: loose fit.','Bag it, label it, box it with the work order number. A month on the shelf.'],'bearing_module','diagnose'),
 ('red','Conveyor: before you touch the belt',['Lock out the drive. Verify with a start attempt from every start point, including the sequence from the downstream conveyor.','Gravity take-up blocked, pinned, or chained. It is stored energy with the motor off.','Inclined belt: empty it or block it against runback. The backstop is not a lockout.','Product above the work position cleared.','Hands never on a moving belt. Tracking is done at the idler frame bolts from outside the guard, or not at all.','Jams are cleared locked out. No exceptions.'],'conveyors','safety'),
 ('amber','Screw compressor high temperature trip',['Let it cool. Lock out at the disconnect; the controller restarts on pressure.','Cooler: blow out from the clean side with the fan shielded. Nine times out of ten this is it.','Fan turning, room intake and exhaust clear, hot air not recirculating.','Oil level, with the separator tank vented and at zero on its own gauge.','Thermostatic valve if the oil is hot coming off the cooler.','Inlet filter differential.','If the airend rumbles under load after all that, oil analysis and plan an exchange.'],'compressors','troubleshoot'),
]
body='</head>\n<body>\n<div class="bw-wrap">\n  <div class="bw-header"><div><div class="bw-logo"><a href="builtwright_diagnose_hub_v1.html">BuiltWright</a></div><div class="bw-title">Pocket Cards</div></div><div class="bw-badge">Print</div></div>\n  <div class="ref-note">Ten cards that end up laminated on a toolbox. Each prints on its own page. Every one is a summary of a module tab; the link on each card opens the full version.</div>\n  <button class="pm-btn" onclick="window.print()"><i class="ti ti-printer"></i> Print all cards</button>\n'
for cls,title,steps,mod,tab in cards:
    body+=f'  <div class="card {cls}"><div class="card-title">{title}</div><ol>'+''.join(f'<li>{x}</li>' for x in steps)+f'</ol><div class="src">Full version: <a href="builtwright_{mod}_v1.html#{tab}">module tab</a></div></div>\n'
body+='  <div class="bw-footer">builtwrightapp.com &nbsp;·&nbsp; pocket cards</div>\n</div>\n</body>\n</html>\n'
wr('builtwright_pocket_cards_v1.html',styles+body); log.append('pocket cards: 10 cards')
# link from hub tools strip
s=rd(p)
if 'pocket_cards' not in s:
    s=s.replace('<a class="tool" href="builtwright_curriculum_map_v1.html"><i class="ti ti-school"></i><span>Curriculum map</span></a>','<a class="tool" href="builtwright_curriculum_map_v1.html"><i class="ti ti-school"></i><span>Curriculum map</span></a>\n    <a class="tool" href="builtwright_pocket_cards_v1.html"><i class="ti ti-id"></i><span>Pocket cards</span></a>')
    wr(p,s); log.append('hub: pocket cards tool')

# ---- 4. Series index JSON ----
hub=rd(p)
index={'series':'BuiltWright','version':'2026-09-12','modules':[]}
for m in re.finditer(r"^\s{2}([a-z]+):\s*\{\s*num:'([A-Z0-9]+)',\s*name:(\"[^\"]+\"|'[^']+'),\s*file:'([^']+)',\s*tabs:\{([^}]*)\}",hub,re.M):
    key,num,name,file,tabs=m.groups(); name=name.strip('"\'')
    tabd=dict(re.findall(r"([a-z]+):'([^']+)'",tabs))
    ms=rd(file)
    results=len(re.findall(r"label: ?'((?:[^'\\]|\\.)*)', text: ?'",ms))
    qs=len(re.findall(r"\['[^\n]*?', \[.*?\], \d, '",ms))
    tips=ms.count('class="field-tip"')
    index['modules'].append({'key':key,'num':num,'name':name,'file':file,'tabs':tabd,'diagnostic_results':results,'self_check_questions':qs,'field_tips':tips,'has_safety_tab':'safety' in tabd})
# hub routes with component tags
routes=[]
for m in re.finditer(r"(r_[a-z_0-9]+): \{ type:'route', module:'([a-z]+)', tab:'([a-z]+)', components:\[([^\]]*)\], title:'((?:[^'\\]|\\.)*)'",hub):
    routes.append({'id':m.group(1),'module':m.group(2),'tab':m.group(3),'components':re.findall(r"'([a-z]+)'",m.group(4)),'title':m.group(5).replace("\\'","'")})
index['hub_routes']=routes
index['tools']=['builtwright_search_v1.html','builtwright_pm_library_v1.html','builtwright_reference_v1.html','builtwright_root_cause_v1.html#report','builtwright_pocket_cards_v1.html','builtwright_manager_guide_v1.html','builtwright_curriculum_map_v1.html']
index['totals']={'modules':len(index['modules']),'diagnostic_results':sum(x['diagnostic_results'] for x in index['modules']),'self_check_questions':sum(x['self_check_questions'] for x in index['modules']),'field_tips':sum(x['field_tips'] for x in index['modules']),'hub_routes':len(routes)}
wr('builtwright_index.json',json.dumps(index,indent=1,ensure_ascii=False)); log.append(f"index.json: {index['totals']}")

# ---- 5. README refresh ----
files=sorted(glob.glob(OUT+'builtwright_*_v1.html'))
readme=f"""BuiltWright: hosting and contents ({index['version']})

CONTENTS ({len(files)} HTML files plus support files)
  Front door:   builtwright_diagnose_hub_v1.html
  Modules:      {index['totals']['modules']} entries in the hub registry (21 content modules, 2 documents, plus tools)
  Tools:        search, PM task library, reference, root cause report, pocket cards, manager's guide, curriculum map
  Support:      manifest.json, sw.js, builtwright_icon_192.png, builtwright_icon_512.png, builtwright_index.json
  Totals:       {index['totals']['diagnostic_results']} diagnostic results (each with a prevent-recurrence line), {index['totals']['self_check_questions']} self-check questions, {index['totals']['field_tips']} field tips, {index['totals']['hub_routes']} hub routes

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

ARCHIVED
  builtwright_pump_module_v2.html and v3.html are earlier drafts of the pumps module, excluded from the service worker. Delete before hosting.
"""
wr('README_hosting.txt',readme); log.append('README refreshed')
print('\n'.join(log))
