import re
OUT='/mnt/user-data/outputs/'
def rd(f): return open(OUT+f).read()
def wr(f,s): open(OUT+f,'w').write(s)
log=[]

TREE_CSS="""
  .tree-q { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1rem 1.25rem; }
  .tree-q-text { font-size: 15px; font-weight: 600; color: #f0ede4; margin-bottom: 0.5rem; line-height: 1.4; }
  .tree-q-hint { font-size: 12px; color: #888780; margin-bottom: 0.75rem; font-style: italic; line-height: 1.45; }
  .tree-btns { display: flex; gap: 8px; flex-wrap: wrap; }
  .tree-btn { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; padding: 7px 16px; border-radius: 5px; border: 0.5px solid #3a3a36; background: #242420; color: #e8e6df; cursor: pointer; transition: all 0.12s; text-align: left; }
  .tree-btn:hover { border-color: #BA7517; background: #2a1f08; color: #EF9F27; }
  .tree-btn.yes { border-color: #3B6D11; } .tree-btn.yes:hover { background: #0e1f05; color: #97C459; }
  .tree-btn.no { border-color: #A32D2D; } .tree-btn.no:hover { background: #200d0d; color: #F09595; }
  .tree-result { border-radius: 8px; padding: 1rem 1.25rem; margin-top: 8px; }
  .tree-result.action { background: #2a1f08; border: 0.5px solid #BA7517; }
  .tree-result.fix { background: #0e1f05; border: 0.5px solid #3B6D11; }
  .tree-result.escalate { background: #200d0d; border: 0.5px solid #A32D2D; }
  .tree-result-label { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px; }
  .tree-result.action .tree-result-label { color: #EF9F27; }
  .tree-result.fix .tree-result-label { color: #97C459; }
  .tree-result.escalate .tree-result-label { color: #F09595; }
  .tree-result-text { font-size: 14px; font-weight: 500; color: #f0ede4; line-height: 1.55; }
  .tree-result-sub { font-size: 12px; color: #888780; margin-top: 5px; line-height: 1.5; }
  .tree-back { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1px; color: #888780; background: none; border: none; cursor: pointer; padding: 4px 0; text-transform: uppercase; display: inline-flex; align-items: center; gap: 5px; }
  .tree-back:hover { color: #BA7517; }
  .progress-fill { height: 100%; background: #BA7517; border-radius: 2px; transition: width 0.3s; }
"""

def tree_js(prefix, nodes_js):
    return f"""
const diagNodes = {nodes_js};
let currentDiagNode='start', diagHistory=[];
function renderDiag(id){{currentDiagNode=id;const n=diagNodes[id];if(!n)return;const pct=Math.min(8+(diagHistory.length/5)*88,96);document.getElementById('{prefix}-progress').style.width=pct+'%';let h='';if(diagHistory.length>0)h+=`<button class="tree-back" onclick="diagBack()"><i class="ti ti-arrow-left"></i> back</button><br><br>`;if(n.type==='result'){{document.getElementById('{prefix}-progress').style.width='100%';h+=`<div class="tree-result ${{n.cls}}"><div class="tree-result-label">${{n.label}}</div><div class="tree-result-text">${{n.text}}</div><div class="tree-result-sub">${{n.sub}}</div>${{n.prevent?`<div class="tree-prevent"><strong>Prevent recurrence</strong>${{n.prevent}}</div>`:''}}</div><br><button class="tree-btn" onclick="diagHistory.length=0;renderDiag('start');">Start over</button>`;}}else{{h+=`<div class="tree-q"><div class="tree-q-text">${{n.q}}</div>${{n.hint?`<div class="tree-q-hint">${{n.hint}}</div>`:''}}<div class="tree-btns">${{n.options.map(o=>`<button class="tree-btn ${{o.cls||''}}" onclick="diagTo('${{o.next}}')">${{o.label}}</button>`).join('')}}</div></div>`;}}document.getElementById('{prefix}-tree').innerHTML=h;}}
function diagTo(id){{diagHistory.push(currentDiagNode);renderDiag(id);}}
function diagBack(){{if(diagHistory.length>0)renderDiag(diagHistory.pop());}}
"""

def add_tree(f, prefix, tab_label, section_label, method_html, nodes_js, before_panel_comment):
    s=rd(f)
    if f'id="panel-troubleshoot"' in s: return
    if '.tree-q {' not in s: s=s.replace('</style>',TREE_CSS+'</style>',1)
    # tab button before Self-Check
    s=s.replace('<button class="bw-tab" onclick="switchTab(\'selfcheck\')">Self-Check</button>','<button class="bw-tab" onclick="switchTab(\'troubleshoot\')">'+tab_label+'</button>\n    <button class="bw-tab" onclick="switchTab(\'selfcheck\')">Self-Check</button>',1)
    panel=f'''<!-- TROUBLESHOOT TAB -->
  <div id="panel-troubleshoot" class="bw-panel">
    <div class="bw-section-label">{section_label}</div>
    <div class="adv-wrap" id="adv-method">
      <button class="adv-toggle" onclick="toggleAdv('adv-method')">
        <div class="adv-toggle-left"><i class="ti ti-map-2 adv-toggle-icon"></i><span class="adv-toggle-label">Diagnostic methodology</span></div>
        <i class="ti ti-chevron-down adv-chevron"></i>
      </button>
      <div class="adv-body">{method_html}</div>
    </div>
    <div class="progress-bar"><div class="progress-fill" id="{prefix}-progress" style="width:8%"></div></div>
    <div id="{prefix}-tree"></div>
  </div>

  '''
    i=s.find(before_panel_comment); s=s[:i]+panel+s[i:]
    # hook renderDiag into switchTab and add JS
    s=re.sub(r"(function switchTab\(tab\)\s*\{)", r"\1 if(tab==='troubleshoot'){ setTimeout(()=>renderDiag('start'),0); }", s, count=1)
    if 'function toggleAdv' not in s: s=s.replace('</script>',"function toggleAdv(id){document.getElementById(id).classList.toggle('open');}\n</script>",1)
    i=s.rfind('</script>'); s=s[:i]+tree_js(prefix,nodes_js)+s[i:]
    wr(f,s); log.append(f'{f}: tree added')

# ---------- ALIGNMENT TREE ----------
AL_NODES = """{
  start: { q:'What is happening?', hint:'Both machines locked out and verified before the guard comes off.', options:[
    {label:'Alignment will not come in (corrections overshoot or chase)',next:'chase1'},{label:'Readings do not repeat',next:'r_repeat'},{label:'Aligned, then vibration or heat came back',next:'back1'},{label:'Coupling element wearing out early',next:'r_element'},{label:'Machine will not move for the correction',next:'move1'}] },
  chase1: { q:'Rim readings: does top plus bottom equal left plus right (within a few hundredths)?', hint:'The validity check. If it fails, nothing after it is true.', options:[
    {label:'No, they do not add up',next:'r_validity',cls:'no'},{label:'Yes, valid readings',next:'chase2',cls:'yes'}] },
  chase2: { q:'Was soft foot checked and corrected on both machines before the first reading?', options:[
    {label:'No, or not sure',next:'r_softfoot',cls:'no'},{label:'Yes, under 0.05 mm at every foot',next:'chase3',cls:'yes'}] },
  chase3: { q:'Do the readings change when the foot bolts are torqued, or when the piping is connected?', options:[
    {label:'Change on torque',next:'r_softfoot'},{label:'Change when piping is connected',next:'r_pipestrain'},{label:'Stable, but the correction still overshoots',next:'r_math'}] },
  r_validity: { type:'result', cls:'action', label:'invalid readings: sag, looseness, or float', text:'Rim readings that do not sum are being corrupted by the setup.', sub:'Bracket sag not measured and corrected (Reference module has the method). Bracket or indicator loose. Shaft floating axially between readings: hold it against one end. Coupling hub run-out: rotate both shafts together. Tap the base; it must return to zero. Take the readings again.', prevent:'Sag measured on the bar before every job; validity check on every set of readings before a shim is cut.' },
  r_softfoot: { type:'result', cls:'fix', label:'soft foot', text:'A frame that twists when it is bolted down changes the alignment with every torque.', sub:'Loosen all feet. Indicator on each foot in turn while its bolt is loosened and tightened; any lift over 0.05 mm is shimmed. Clean under every foot to bare metal; remove old shims and burrs. Check for a bent foot or a springy stack. Then torque in a pattern and start the alignment again from rough.', prevent:'Soft foot on both machines before every alignment. No exceptions.' },
  r_pipestrain: { type:'result', cls:'action', label:'pipe strain', text:'The piping moves the machine when it is connected. It cannot be aligned out.', sub:'Readings with the piping disconnected, then connected: any change over 0.05 mm at the coupling is strain. Support the pipe on its hangers, correct the fit-up (Installation module, Piping tab), and recheck. Indicator on the casing while the flange bolts are tightened shows it directly.', prevent:'Pipe strain check recorded on every installation and after any piping work.' },
  r_math: { type:'result', cls:'fix', label:'correction arithmetic or sign convention', text:'Valid readings, no soft foot, no strain, and the correction still misses: the arithmetic or the sign is wrong.', sub:'Write down the convention before starting: which machine moves, which direction is positive, where the indicator is mounted. Redo the foot corrections with the rim and face formulas (Reference module, Alignment tab, and the calculator). On a laser system, check the dimensions entered (coupling to feet distances) against a tape.', prevent:'Sign convention and dimensions written on the job sheet before the first reading.' },
  r_repeat: { type:'result', cls:'action', label:'readings not repeating', text:'Two sets of readings that disagree mean the setup or the shaft is moving.', sub:'Bracket rigid, indicator plunger square, base tapped and returning to zero. Shaft axial float held against one end. Both shafts rotated together in the same direction each time. A worn coupling with backlash lets one shaft lag the other; take readings with the coupling element removed if the bracket allows. Temperature stable (a machine cooling down moves).', prevent:'Repeat the readings until two sets agree before any correction.' },
  back1: { q:'When did it come back?', options:[
    {label:'Within hours, as the machine warmed up',next:'r_thermal'},{label:'Weeks or months later',next:'r_base'},{label:'Immediately, with the guard on and running',next:'r_validity'}] },
  r_thermal: { type:'result', cls:'action', label:'thermal growth', text:'Aligned cold, misaligned hot. The machine grew.', sub:'Thermal growth offsets from the manufacturer or calculated from shaft height and temperature rise (Reference module). Align cold with the offsets so it is aligned hot. Verify with a hot check immediately after shutdown.', prevent:'Thermal offsets recorded with the alignment on any machine that runs warm.' },
  r_base: { type:'result', cls:'action', label:'base or foundation moving', text:'An alignment that held and then drifted is a base that moved: grout, anchors, voids, or settlement.', sub:'Installation module, Troubleshoot tab: sound the baseplate, check anchor torque, look for cracked grout and pulled anchors. A recurring soft foot is the same story.', prevent:'Commissioning level and alignment record to compare against; anchor torque rechecked.' },
  r_element: { type:'result', cls:'action', label:'coupling absorbing misalignment', text:'A coupling element that wears out early has been doing the alignment\\'s job.', sub:'The misalignment is still there and is also loading the bearings and seals. Replace the element, then soft foot, then a full alignment to the tolerance for the speed. Check DBSE and hub fit. Rubber dust or grid debris under the guard is the sign.', prevent:'Alignment readings recorded so a shift is visible; coupling inspection on the PM.' },
  move1: { q:'Which direction will not move?', options:[
    {label:'Horizontal: foot bolts bind on the holes',next:'r_holes'},{label:'Vertical: no shim room, or too many shims already',next:'r_shimroom'}] },
  r_holes: { type:'result', cls:'fix', label:'no lateral clearance', text:'The bolts are hard against the sides of the foot holes.', sub:'Foot holes need 2 to 3 mm of clearance around the bolt. Enlarge the holes in the machine feet, or reposition the base studs. Never bend a bolt.', prevent:'Hole clearance checked before the base is grouted.' },
  r_shimroom: { type:'result', cls:'fix', label:'wrong starting shim allowance', text:'One machine sits too high or too low for the shim range.', sub:'The movable machine starts on about 3 mm (1/8 in) of shim so it can go up or down. Too little: nothing to take out. Too many thin shims: a springy stack that reads as soft foot; replace with one thick shim. Beyond the shim range, the pads are machined or a spacer plate is fitted.', prevent:'Shaft heights checked against the base design before grout.' }
}"""
AL_METHOD="<p><strong>Every alignment that will not come in has one of five causes:</strong> invalid readings (sag, a loose bracket, axial float), soft foot, pipe strain, the arithmetic, or thermal growth. Check them in that order. The validity check on rim readings (top plus bottom equals left plus right) is the first thing, because if it fails nothing after it means anything. Then soft foot on both machines. Then readings with the piping off and on. Then the sign convention and the dimensions. Then whether the machine runs hot.</p><p>A laser system removes the arithmetic and the sag and leaves every other cause in place.</p>"
add_tree('builtwright_coupling_alignment_v1.html','al','Troubleshoot','Alignment fault diagnosis',AL_METHOD,AL_NODES,'<!-- SELF-CHECK TAB -->')

# ---------- SEALS TREE ----------
SE_NODES = """{
  start: { q:'What failed, and how?', hint:'Isolate, depressurise, drain, and verify at the joint before opening it. Keep the failed seal or gasket for reading.', options:[
    {label:'Mechanical seal leaking or failed early',next:'ms1'},{label:'Flange or gasket joint leaking',next:'fl1'},{label:'O-ring or static seal failed',next:'r_oring'},{label:'Packing leaking too much, or gland too hot',next:'r_packing'},{label:'Lip seal leaking',next:'r_lip'}] },
  ms1: { q:'Read the faces. What do they show?', hint:'Failure Analysis tab has the patterns.', options:[
    {label:'Heat checking, blistering, or discolouration',next:'r_ms_heat'},{label:'Uneven wear track, wider on one side',next:'r_ms_runout'},{label:'Grooves, scoring, or embedded particles',next:'r_ms_abrasive'},{label:'Chipped or cracked face, or a flat spot on an o-ring',next:'r_ms_install'},{label:'Swollen, hardened, or degraded elastomers',next:'r_ms_chem'},{label:'Faces look fine; leaking at the secondary seals or the sleeve',next:'r_ms_secondary'}] },
  r_ms_heat: { type:'result', cls:'action', label:'thermal damage: dry running or lost flush', text:'The faces ran without a liquid film.', sub:'Flush or quench line flow (a blocked orifice or filter, a closed valve). The seal plan against the service (API 682). Dry running at startup (pump not vented or primed). Pump run at shutoff (heat in the seal chamber). Never run a mechanical seal dry, even briefly.', prevent:'Flush flow verified on the PM; vent and prime on the startup procedure; minimum flow protection.' },
  r_ms_runout: { type:'result', cls:'action', label:'shaft runout, misalignment, or pipe strain', text:'The shaft is describing an arc through the seal.', sub:'Shaft runout at the seal under 0.05 mm (0.002 in) TIR. Alignment to tolerance with soft foot corrected. Indicator on the casing while the flange bolts are loosened: movement is pipe strain (Installation module). Bearing play letting the shaft wander.', prevent:'Runout, alignment, and pipe strain checked before every seal installation and recorded.' },
  r_ms_abrasive: { type:'result', cls:'action', label:'abrasive or contaminated process fluid', text:'Solids in the seal chamber are grinding the faces.', sub:'A flush plan that keeps clean fluid at the faces (Plan 32 external flush, or a cyclone separator on Plan 31). Harder face materials (silicon carbide against silicon carbide). A seal chamber that lets solids settle away from the faces.', prevent:'Seal plan selected for the fluid, and the flush maintained.' },
  r_ms_install: { type:'result', cls:'fix', label:'installation damage', text:'The seal was damaged going in.', sub:'A chipped face was dropped. A flat spot on an o-ring was pinched. A spiral cut was twisted. Fingerprints or lubricant on the faces. Cartridge set screws not tightened before the clips came off. Setting dimension wrong on a component seal. Installation tab, step by step, and a clean bench.', prevent:'Installation procedure followed with the seal in its packaging until the last moment.' },
  r_ms_chem: { type:'result', cls:'action', label:'chemical or temperature incompatibility', text:'The elastomers or the faces were wrong for the fluid or the temperature.', sub:'Compatibility table against the actual fluid, including cleaning chemicals and temperature excursions. Swelling is chemical attack; hardening and cracking is heat. A seal specified for the design fluid and run on the cleaning cycle fails on the cleaning cycle.', prevent:'Seal materials on the equipment record with every fluid the seal sees.' },
  r_ms_secondary: { type:'result', cls:'action', label:'secondary seal or sleeve leakage', text:'The faces are sealing; the o-rings, the sleeve, or the gland gasket are not.', sub:'Sleeve o-ring cut on a keyway or a shoulder. Shaft or sleeve surface damaged under the o-ring. Gland gasket not seated. Cartridge sleeve not clamped (set screws). Wrong o-ring material.', prevent:'Shaft and sleeve inspected under the o-ring positions; keyways covered on assembly.' },
  fl1: { q:'What does the joint show?', options:[
    {label:'Gasket extruded outward or crushed inward',next:'r_fl_torque'},{label:'Gasket blown out or split',next:'r_fl_wrong'},{label:'Leaks after a thermal cycle or a startup',next:'r_fl_thermal'},{label:'Leaks at one spot only',next:'r_fl_face'}] },
  r_fl_torque: { type:'result', cls:'fix', label:'bolt torque', text:'Extruded outward is under-torque; crushed and pushed inward is over-torque.', sub:'Torque values for the gasket type and bolt size (the gasket manufacturer), lubricated threads, star pattern, three passes minimum, then a final round. Bolt condition: stretched, corroded, or wrong grade bolts do not hold torque.', prevent:'Torque and pattern on the flange procedure; calibrated wrench.' },
  r_fl_wrong: { type:'result', cls:'action', label:'wrong gasket for the service, or reused', text:'A gasket that blew out was not rated for the pressure and temperature, or it had been used before.', sub:'Gasket type against the flange rating and the service (Gasket Types tab). Never reuse a gasket; never reuse an RTJ ring. Spiral wound on raised face; full face on flat face.', prevent:'Gasket specification on the piping line list; gaskets issued by spec, not by size alone.' },
  r_fl_thermal: { type:'result', cls:'action', label:'thermal cycling and bolt relaxation', text:'The joint moves as it heats and cools, and the bolts relax.', sub:'A gasket type that recovers (spiral wound, kammprofile, graphite) rather than a plain sheet. Bolt material that grows with the flange. Live loading (Belleville washers) on joints that cycle. Hot bolting only under a specific procedure.', prevent:'Re-torque after the first thermal cycle on joints that run hot, recorded.' },
  r_fl_face: { type:'result', cls:'fix', label:'flange face condition', text:'A leak at one spot is a defect at that spot: a scratch across the face, a low spot, corrosion, or old gasket residue.', sub:'Face inspection with a straightedge and a light. Radial scratches across a raised face leak; circumferential ones seal. Surface finish for the gasket type (spiral wound wants 125 to 250 AARH). Remachine or replace the flange if the face is beyond a dressing.', prevent:'Face inspection on every joint before the gasket goes in; faces protected when open.' },
  r_oring: { type:'result', cls:'action', label:'o-ring failure: read the shape', text:'The damage tells you what happened.', sub:'Flat spot: pinched on assembly. Spiral cut: twisted going in. Chipped: dropped or dry assembled. Extruded into the gap: pressure too high for the gap or the hardness; a backup ring. Swollen: chemical. Hard and cracked: heat. Compression set (flattened all round): old, or too hot for too long. Installation tab and Compatibility table.', prevent:'Chamfers on bores, lubricant on the o-ring (compatible with the fluid), material against the fluid, and a replacement interval on hot service.' },
  r_packing: { type:'result', cls:'fix', label:'packing adjustment or condition', text:'Packing is meant to leak 40 to 60 drops per minute. Too much is worn packing or a scored sleeve; a hot gland with no leakage is over-tightened.', sub:'Gland nuts in small equal steps, watching the leakage, never to zero. If the leak cannot be controlled, repack with the sleeve inspected. A scored sleeve burns every new set. Lantern ring aligned with the flush port.', prevent:'Leakage rate on the PM sheet; sleeve inspected at every repack.' },
  r_lip: { type:'result', cls:'action', label:'lip seal', text:'A lip seal leaks from a worn or grooved shaft, a nicked lip, a hardened lip, a blocked breather pressurising the housing, or overfill.', sub:'Breather first. Level second. Then the shaft under the lip (a groove needs a wear sleeve). Then the seal: installed dry, cut on a keyway, or cooked by heat. Gearboxes module has the same sequence.', prevent:'Breather and level on the PM; wear sleeve on any grooved shaft; lip lubricated and keyway covered on install.' }
}"""
SE_METHOD="<p><strong>Keep the failed seal.</strong> A mechanical seal's faces, a gasket's shape, and an o-ring's damage pattern each tell you the cause, and the cause is what decides whether the new one lasts. Replacing without reading is how a pump gets its third seal in a year.</p><p><strong>Then the machine:</strong> shaft runout, alignment, pipe strain, flush flow, and the process (dry running, shutoff, temperature, chemistry). The seal is the part that shows the damage; the cause is almost always upstream of it.</p>"
add_tree('builtwright_seals_gaskets_v1.html','se','Troubleshoot','Seal and gasket fault diagnosis',SE_METHOD,SE_NODES,'<!-- SELF-CHECK TAB -->')

# ---------- FIELD TIPS for modules 01 to 05 ----------
def tip(label,text): return f'    <div class="field-tip"><i class="ti ti-tool"></i><div><strong>{label}</strong>{text}</div></div>\n'
def add_tip_to_panel(f, panel_id, html):
    s=rd(f)
    if html[60:140] in s: return
    i=s.find(f'id="panel-{panel_id}"'); j=s.find('<div id="panel-',i+10)
    if j<0: j=s.find('<!-- SELF-CHECK TAB -->')
    k=s.rfind('<!--',0,j); k=k if (k>i and k>0) else j
    end=s.rfind('</div>',0,k)
    s=s[:end]+html+'  '+s[end:]; wr(f,s); log.append(f'{f}: tip in {panel_id}')

f='builtwright_pumps_combined_v1.html'
add_tip_to_panel(f,'compare',tip('Field tip: the discharge gauge is a load gauge','Watch the discharge pressure when someone throttles a valve downstream. It rises, and the pump did nothing different; the system pushed back harder. When that idea is in your bones, half of pump troubleshooting is done: a pressure that is wrong is a system that is wrong, or a pump that has lost the ability to push against it.'))
add_tip_to_panel(f,'diagnose',tip('Field tip: the suction side first, always','Nine pump calls out of ten that start with "the pump is not pumping" end on the suction side: a strainer, a valve, a level, a leak letting air in, a line that is too small. The pump is the last thing to open up and the first thing to get blamed. Walk from the tank to the suction flange before touching the pump.'))
f='builtwright_bearing_module_v1.html'
add_tip_to_panel(f,'diagnose',tip('Field tip: two bearings, same shaft, compare them','Infrared on both bearings of the same shaft, and a screwdriver on each housing. They see the same speed and the same lubricant; the one that is hotter or louder is the one with the problem, and the difference between them is a cleaner signal than either number alone. The same trick works across two identical machines side by side.'))
add_tip_to_panel(f,'install',tip('Field tip: the bearing stays in the box','The bearing comes out of its packaging at the moment it goes onto the shaft, not before. A bearing sitting open on the bench for an hour has collected the grinding dust in the air, and that dust goes into the raceways. The packaging is clean; the shop is not.'))
f='builtwright_coupling_alignment_v1.html'
add_tip_to_panel(f,'procedure',tip('Field tip: rough it in by eye before the indicators go on','A machine that is 2 mm out will run the indicators off their range and waste an hour. Straightedge across the hubs, feeler in the gap, move it until it looks right, then set the indicators. The precision tools are for the last half millimetre.'))
add_tip_to_panel(f,'methods',tip('Field tip: the laser checks the laser','A laser alignment system gives an answer to the micron and it is only as good as the dimensions typed into it and the brackets clamped to the shafts. Measure the coupling-to-feet distances with a tape, not from memory, and tap the brackets. When the laser says something that does not match what your eyes see at the coupling, believe your eyes and find the input error.'))
f='builtwright_seals_gaskets_v1.html'
add_tip_to_panel(f,'install',tip('Field tip: the setting clips come off last','On a cartridge seal, the clips hold the sleeve and the gland in the factory relationship. Set screws tight to the shaft, gland bolts torqued, then and only then the clips off. Pull the clips first and the springs push the sleeve and the seal is set wrong before the pump ever turns. It is the most common cartridge seal installation error in the plant.'))
add_tip_to_panel(f,'gaskets',tip('Field tip: never tighten a flange that is already leaking a little','A joint that weeps after the torque is a gasket that is not seating, and more torque crushes it rather than sealing it. Depressurise, open it, read the gasket, and find out why: face, bolts, gasket type, or a pipe that was pulled in. Then a new gasket, torqued to the number.'))
f='builtwright_lubrication_v1.html'
add_tip_to_panel(f,'application',tip('Field tip: weigh your grease gun once','Pump ten strokes onto a kitchen scale. Divide by ten. Now you know what a stroke of your gun delivers, and the grease quantity formula turns into a stroke count. Write the number on the gun with a paint pen. Every gun is different, and a gun that delivers 1.5 g per stroke at room temperature delivers less in January.'))
add_tip_to_panel(f,'contam',tip('Field tip: the drum is not clean','New oil arrives with a particle count that would fail most hydraulic and gearbox targets. It has been through a refinery, a tank farm, a truck, a drum, and a warehouse. Filter it into the machine through a transfer cart with a filter, and keep the drum sealed with a desiccant breather. Clean oil is made at the fill point.'))

print('\n'.join(log))
