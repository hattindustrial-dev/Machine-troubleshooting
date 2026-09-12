import re, glob
OUT='/mnt/user-data/outputs/'
def rd(f): return open(OUT+f).read()
def wr(f,s): open(OUT+f,'w').write(s)
log=[]

# 1. Lubrication: "not calendar, but" construction
f='builtwright_lubrication_v1.html'; s=rd(f)
s2=s.replace("Oil changed on analysis, not calendar, but not later than the manufacturer interval.","Oil changed on analysis rather than on the calendar, and never later than the manufacturer interval.")
if s2!=s: wr(f,s2); log.append('lube: reworded not/but')

# 2. Safeguarding: ISO 13855 K rule
f='builtwright_safeguarding_v1.html'; s=rd(f)
s2=s.replace("K = approach speed, 1600 mm/s for hand and arm approach (2000 mm/s for whole-body walking approach in some standards)",
 "K = approach speed. ISO 13855 rule for a vertical curtain: calculate first with K = 2000 mm/s; if the result is over 500 mm, recalculate with K = 1600 mm/s and use that (minimum 500 mm). If the first result is 500 mm or less, use it (minimum 100 mm)")
s2=s2.replace("Example: 30 mm resolution curtain, total stop time 0.35 s<br>C = 8 × (30 minus 14) = 128 mm<br>S = 1600 × 0.35 + 128 = 688 mm",
 "Example: 30 mm resolution curtain, total stop time 0.35 s<br>C = 8 × (30 minus 14) = 128 mm<br>First pass: S = 2000 × 0.35 + 128 = 828 mm, which is over 500<br>Second pass: S = 1600 × 0.35 + 128 = 688 mm. Mount the curtain at least 688 mm from the hazard")
if s2!=s: wr(f,s2); log.append('safeguarding: ISO 13855 two-pass K rule')

# 3. Seals: PTFE wording
f='builtwright_seals_gaskets_v1.html'; s=rd(f)
s2=s.replace("PTFE above about 260°C releases toxic fumes.","PTFE begins to degrade above about 260°C and releases toxic fumes at welding and burning temperatures.")
if s2!=s: wr(f,s2); log.append('seals: PTFE wording')

# 4. Pumps: NPSH block at end of system chain panel
f='builtwright_pumps_combined_v1.html'; s=rd(f)
if 'NPSH available' not in s:
    npsh='''    <div class="info-block">
      <div class="info-block-title"><i class="ti ti-arrow-down-circle"></i> NPSH: the number behind every cavitation call</div>
      <div class="info-block-body">Net positive suction head is the pressure margin at the pump inlet above the liquid's vapour pressure. NPSH available (NPSHa) is what the system provides: atmospheric pressure, plus the static height of liquid above the pump (or minus the lift below it), minus the friction loss in the suction line, minus the vapour pressure of the liquid at its temperature. NPSH required (NPSHr) is what the pump needs at that flow, from its curve. When NPSHa falls below NPSHr the liquid flashes at the impeller eye and the pump cavitates. Nothing on the discharge side changes NPSHa.</div>
      <ul class="info-block-tips">
        <li>Raise NPSHa by raising the suction level, lowering the pump, shortening or enlarging the suction line, cleaning the strainer, or cooling the liquid. Lower it by any of the opposites, which is what happens when a tank runs low, a strainer loads, or the process runs hotter.</li>
        <li>A margin of about 1 metre (3 ft) of NPSHa over NPSHr is the usual minimum; hot liquids and hydrocarbons want more.</li>
        <li>Suction piping design sets most of it: a straight run into the suction of five to ten pipe diameters, an eccentric reducer flat side up, no elbows on the suction flange, and a suction line at least one size larger than the pump inlet.</li>
        <li>A suction pressure gauge is the field measurement. Log it with the flow; when it drops toward the vapour pressure at the running temperature, cavitation is minutes away.</li>
      </ul>
    </div>
'''
    i=s.find('<!-- INDEPENDENT ROTATION CHECK TAB -->'); j=s.rfind('</div>',0,i)
    s=s[:j]+npsh+'  '+s[j:]; wr(f,s); log.append('pumps: NPSH block added to system chain')

# 5. Bearings: reading a bearing number
f='builtwright_bearing_module_v1.html'; s=rd(f)
if 'Reading a bearing number' not in s:
    blk='''    <div class="info-block">
      <div class="info-block-title"><i class="ti ti-hash"></i> Reading a bearing number</div>
      <div class="info-block-body">A standard bearing designation says what it is and how big it is. The first digit or digits are the type, the next the size series, and the last two are the bore code: multiply by five for the bore in millimetres from 04 upward (00 is 10 mm, 01 is 12, 02 is 15, 03 is 17). Suffixes carry the details that matter for replacement.</div>
      <table class="ref-table">
        <tr><th>Example</th><th>Meaning</th></tr>
        <tr><td>6205</td><td>6 = deep groove ball; 2 = light series; 05 = 25 mm bore. Common on small motors and pumps.</td></tr>
        <tr><td>6309 C3</td><td>Deep groove ball, medium series, 45 mm bore, C3 (extra) internal clearance. The motor bearing.</td></tr>
        <tr><td>NU 210</td><td>N = cylindrical roller; U = no ribs on the inner ring (free axial float); 2 = light series; 10 = 50 mm bore.</td></tr>
        <tr><td>22220 E</td><td>2 = spherical roller; 22 = width series; 20 = 100 mm bore; E = high capacity design. Pillow blocks and fans.</td></tr>
        <tr><td>7208 B</td><td>7 = angular contact ball; 2 = light; 08 = 40 mm bore; B = 40 degree contact angle. Thrust capacity.</td></tr>
        <tr><td>32210</td><td>3 = tapered roller (metric series); 22 = width and angle series; 10 = 50 mm bore. Set in pairs with preload or endplay.</td></tr>
        <tr><td>Suffixes: 2RS, 2Z, ZZ</td><td>Two rubber seals; two metal shields; two shields (maker dependent). Sealed for life, no regreasing.</td></tr>
        <tr><td>Suffixes: C3, C4, CN</td><td>Internal clearance greater than normal, much greater, normal. Reference module has the values.</td></tr>
        <tr><td>Suffixes: J, M, TN</td><td>Cage material: pressed steel, machined brass, polyamide. Brass for heat and shock; polyamide for speed and quiet; note polyamide has a temperature limit.</td></tr>
        <tr><td>Prefixes and inch bearings</td><td>Inch tapered rollers use cone and cup numbers (for example LM11949 and LM11910) that do not encode size; look them up. Pillow block inserts (UC, SA) encode the shaft size in the last two digits the same way.</td></tr>
      </table>
      <ul class="info-block-tips">
        <li>Order by the full number including suffixes. A 6309 and a 6309 C3 are the same size and different bearings.</li>
        <li>The number is stamped on the ring face. Read it before the bearing is cleaned and, if it is worn off, measure bore, OD, and width and match all three.</li>
        <li>Interchange between makers is by the ISO designation; suffix letters differ by maker for the same feature.</li>
      </ul>
    </div>
'''
    i=s.find('<div id="panel-diagnose"'); k=s.rfind('<!--',0,i); k=k if k>0 else i; j=s.rfind('</div>',0,k)
    s=s[:j]+blk+'  '+s[j:]; wr(f,s); log.append('bearings: bearing number table added to types')

# 6. Related modules strip on every module
REL={
 'builtwright_pumps_combined_v1.html':[('seals_gaskets','failure','Seals and Gaskets: read the failed seal'),('coupling_alignment','procedure','Couplings and Alignment: soft foot and pipe strain'),('installation','piping','Installation: strain-free piping and NPSH-friendly suction'),('bearing_module','diagnose','Bearing Failure'),('motors','amps','Motors: amps as a load symptom'),('vibration','spectrum','Vibration: vane pass and cavitation signatures')],
 'builtwright_bearing_module_v1.html':[('lubrication','application','Lubrication: quantity and interval'),('vibration','bearings','Vibration: defect frequencies and the four stages'),('coupling_alignment','why','Alignment: the load that fails bearings quietly'),('motors','bearings','Motors: fluting and over-greasing'),('precision_measurement','instruments','Measurement: seats and bores before the new bearing'),('reference','fits','Reference: fits and clearances')],
 'builtwright_coupling_alignment_v1.html':[('installation','overview','Installation: the base the alignment sits on'),('reference','align','Reference: tolerances by rpm and the correction math'),('precision_measurement','indicators','Measurement: indicators, sag, and the validity check'),('vibration','spectrum','Vibration: 1x and 2x signatures'),('motors','mounting','Motors: soft foot and the air gap'),('power_transmission','alignment','Belt drives: sheave and sprocket alignment')],
 'builtwright_seals_gaskets_v1.html':[('pumps_combined','leaks','Pumps: seal versus packing'),('process_valves','packing','Valves: stem packing and seats'),('reference','pipe','Reference: flange bolting and sequence'),('hydraulics','fluid','Hydraulics: seal compatibility with the fluid'),('root_cause','examples','Root Cause: the third seal in a year')],
 'builtwright_lubrication_v1.html':[('bearing_module','lube','Bearings: grease and overgreasing'),('gearboxes','lube','Gearboxes: gear oil, level, and the sight glass'),('hydraulics','fluid','Hydraulics: cleanliness codes and filtration'),('compressors','screw','Compressors: compressor oil and the separator'),('reference','lube','Reference: viscosity crosswalk and temperature limits')],
 'builtwright_pneumatics_v1.html':[('compressors','overview','Compressors: the machine that fills the receiver'),('hydraulics','overview','Hydraulics: the same logic at higher stakes'),('process_valves','actuators','Valves: pneumatic actuators and positioners'),('clutches_brakes','types','Clutches and Brakes: air clutch-brake units'),('safeguarding','devices','Safeguarding: pneumatic safety valves and stop time')],
 'builtwright_hydraulics_v1.html':[('pneumatics','troubleshoot','Pneumatics: the bracketing method'),('lubrication','contam','Lubrication: contamination and oil analysis'),('seals_gaskets','materials','Seals: material against the fluid'),('process_valves','types','Valves: relief and check valves'),('clutches_brakes','types','Clutches and Brakes: wet clutches and caliper brakes'),('reference','units','Reference: pressure and flow conversions')],
 'builtwright_power_transmission_v1.html':[('bearing_module','diagnose','Bearings: over-tension kills them'),('motors','bearings','Motors: shaft load ratings'),('fans','drives','Fans: the belt drive most likely to be found unguarded'),('conveyors','anatomy','Conveyors: head pulley drives and shaft mounts'),('safeguarding','guards','Safeguarding: nip point guards'),('reference','calc','Reference: ratio and deflection calculator')],
 'builtwright_gearboxes_v1.html':[('lubrication','types','Lubrication: gear oil and bronze'),('bearing_module','install','Bearings: preload and endplay'),('coupling_alignment','why','Alignment: the input bearing eats misalignment'),('clutches_brakes','holding','Clutches and Brakes: backstops'),('conveyors','anatomy','Conveyors: shaft mount reducers and torque arms'),('root_cause','examples','Root Cause: the output seal that leaked after rebuild')],
 'builtwright_motors_v1.html':[('bearing_module','diagnose','Bearings: the motor failure'),('coupling_alignment','procedure','Alignment: soft foot first'),('power_transmission','tension','Belt drives: tension by gauge'),('vibration','spectrum','Vibration: electrical signatures and the instant-off test'),('clutches_brakes','types','Clutches and Brakes: motor brakes'),('reference','electrical','Reference: frames, speeds, and amps')],
 'builtwright_vibration_v1.html':[('bearing_module','diagnose','Bearings: what the frequencies mean physically'),('coupling_alignment','misalign','Alignment: 1x and 2x'),('gearboxes','wear','Gearboxes: mesh frequency and the teeth'),('fans','wheel','Fans: unbalance and buildup'),('installation','foundation','Installation: resonance starts at the base'),('reference','calc','Reference: bearing frequency calculator')],
 'builtwright_reference_v1.html':[('precision_measurement','micrometer','Measurement: how to take the readings these tables need'),('coupling_alignment','procedure','Alignment procedure'),('bearing_module','install','Bearing installation'),('seals_gaskets','install','Flange bolting'),('lubrication','application','Grease and oil application')],
 'builtwright_installation_v1.html':[('coupling_alignment','procedure','Alignment: after the grout has cured'),('vibration','resonance','Vibration: resonance and the bump test'),('pumps_combined','chain','Pumps: suction piping and NPSH'),('precision_measurement','instruments','Measurement: the machinist level'),('safeguarding','psr','Safeguarding: a new installation may need a PSR')],
 'builtwright_safeguarding_v1.html':[('power_transmission','safety','Belt and chain nip points'),('conveyors','safety','Conveyor nip points and pull cords'),('pneumatics','safety','Compressed air stored energy'),('hydraulics','safety','Hydraulic injection injury'),('clutches_brakes','holding','Holding brakes as safety devices'),('root_cause','examples','Root Cause: the guard found off')],
 'builtwright_conveyors_v1.html':[('power_transmission','chains','Chains and sprockets'),('gearboxes','overview','Gearboxes: shaft mount reducers'),('clutches_brakes','holding','Backstops'),('bearing_module','diagnose','Pulley and idler bearings'),('safeguarding','hazards','Nip points')],
 'builtwright_root_cause_v1.html':[('bearing_module','diagnose','Bearings: reading the failed bearing'),('gearboxes','wear','Gearboxes: reading the teeth'),('seals_gaskets','failure','Seals: reading the failure'),('power_transmission','failure','Belts and chains: reading the failure'),('vibration','trend','Vibration: the trend is the evidence')],
 'builtwright_fans_v1.html':[('pumps_combined','compare','Pumps: the same curve logic'),('power_transmission','tension','Belt drives on fans'),('bearing_module','diagnose','Fan bearings'),('vibration','spectrum','Unbalance and blade pass'),('motors','cooling','Motors: the fan on the motor')],
 'builtwright_compressors_v1.html':[('pneumatics','airquality','Pneumatics: dryers, drains, and leaks'),('lubrication','contam','Lubrication: oil condition'),('bearing_module','diagnose','Airend and motor bearings'),('process_valves','types','Relief valves'),('fans','types','Blowers and the fan laws')],
 'builtwright_clutches_brakes_v1.html':[('motors','bearings','Motors: the brake on the motor'),('gearboxes','overview','Gearboxes: backstops and held loads'),('conveyors','tension','Conveyors: inclines and runback'),('pneumatics','valves','Pneumatics: air clutch-brake valves'),('safeguarding','devices','Safeguarding: press clutch-brake monitoring')],
 'builtwright_process_valves_v1.html':[('pneumatics','actuators','Pneumatic actuators'),('hydraulics','valves','Hydraulic valves: the same functions'),('seals_gaskets','install','Flange and packing practice'),('pumps_combined','chain','Pumps: valves in the system chain'),('compressors','safety','Relief valves on compressors')],
 'builtwright_precision_measurement_v1.html':[('reference','fits','Reference: the fits these tools measure'),('coupling_alignment','methods','Alignment: dial indicator methods'),('bearing_module','install','Bearing seats and bores'),('gearboxes','setup','Gearboxes: backlash and contact pattern'),('installation','baseplate','Installation: the machinist level')],
}
hub=rd('builtwright_diagnose_hub_v1.html')
reg=dict(re.findall(r"file:'(builtwright_([a-z_]+)_v1\.html)'",hub))  # file -> short
short2file={v:k for k,v in reg.items()}
names=dict(re.findall(r"num:'([A-Z0-9]+)', name:\"?'?([^'\",]+)",hub))
css=""" .related { margin-top:1.25rem; border-top:0.5px solid #3a3a36; padding-top:0.9rem; }
  .related-label { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#5F5E5A; margin-bottom:6px; }
  .related a { display:inline-block; font-size:12px; color:#e8e6df; background:#242420; border:0.5px solid #3a3a36; border-radius:4px; padding:5px 9px; margin:0 6px 6px 0; text-decoration:none; }
  .related a:hover { border-color:#BA7517; color:#EF9F27; }
"""
n=0
for f,rels in REL.items():
    s=rd(f)
    if 'class="related"' in s: continue
    links=[]
    for short,tab,label in rels:
        tf=short2file.get(short)
        if not tf: log.append('MISSING module in registry: '+short); continue
        if f'id="panel-{tab}"' not in rd(tf): log.append(f'MISSING tab {tf}#{tab}'); continue
        links.append(f'<a href="{tf}#{tab}">{label}</a>')
    strip='  <div class="related"><div class="related-label">Related modules</div>'+''.join(links)+'</div>\n'
    s=s.replace('</style>',css+'</style>',1)
    i=s.find('<div class="bw-footer">'); s=s[:i]+strip+'  '+s[i:]
    wr(f,s); n+=1
log.append(f'related strips added to {n} modules')
print('\n'.join(log))
