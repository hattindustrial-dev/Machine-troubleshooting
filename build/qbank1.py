# Question bank. Each module: {tab_key: [(stem, [options], correct_index, explanation), ...]}
Q = {}

Q['builtwright_pumps_combined_v1.html'] = {
 'types': [
  ('Which family does a centrifugal pump belong to?', ['Positive displacement, rotary','Positive displacement, reciprocating','Dynamic','Diaphragm'], 2, 'Centrifugal and axial flow pumps are dynamic pumps: they add velocity to the fluid, and the flow depends on the system resistance.'),
  ('A gear pump is which type?', ['Dynamic','Rotary positive displacement','Reciprocating positive displacement','Axial flow'], 1, 'Gear, lobe, vane, and screw pumps are rotary PD pumps: a fixed volume per revolution.'),
  ('Which pump type moves a fixed volume per stroke with check valves controlling direction?', ['Centrifugal','Screw','Piston or plunger','Lobe'], 2, 'Reciprocating PD pumps rely on inlet and discharge check valves every stroke.'),
 ],
 'compare': [
  ('What does a pump create?', ['Pressure','Flow','Both equally','Head only'], 1, 'Pumps create flow. The system resists that flow, and the resistance registers as pressure.'),
  ('What happens to a centrifugal pump when the discharge valve is closed while running?', ['Pressure rises until the casing fails','Flow drops toward zero and the pump heats the fluid','It stops','It reverses'], 1, 'A centrifugal pump at shutoff moves to the left of its curve, flow goes to near zero, and the trapped fluid heats.'),
  ('What is mandatory on the discharge of a positive displacement pump?', ['A flow meter','A check valve','A relief valve','A strainer'], 2, 'A PD pump against a closed discharge raises pressure until something fails. The relief valve is the protection.'),
  ('Which pump type is self-priming by nature?', ['Centrifugal','Most positive displacement pumps','Axial flow','None'], 1, 'PD pumps can generally pull a vacuum and prime themselves; standard centrifugal pumps need to be primed.'),
 ],
 'chain': [
  ('Troubleshooting a pump system, where does the system chain start?', ['At the pump','At the discharge','At the electrical supply and motor','At the seal'], 2, 'Walk the chain from supply through motor, coupling, gearbox, pump, to discharge. A fault upstream shows up downstream.'),
  ('A gauge on the discharge reads high after a downstream valve is throttled. What moved?', ['The pump slowed','The pump shifted left on its curve','The pump curve changed','The fluid got heavier'], 1, 'Throttling adds system resistance, which reduces flow and raises the gauge reading: the pump moves left on its curve.'),
 ],
 'rotate': [
  ('What is the first step of the independent rotation check?', ['Rotate the pump shaft','Motor free-spin, mechanical check only, locked out','Check the coupling','Open the gearbox'], 1, 'Start at the motor with the coupling disconnected, locked out and verified, and work down the chain.'),
  ('Why is the term "isolation procedure" avoided for this check?', ['It is too long','It could be confused with energy isolation and lockout','It is trademarked','It applies to hydraulics only'], 1, 'Independent Rotation Check is used so nobody mistakes a rotation check for lockout/tagout.'),
  ('What does the OHSA definition of a competent person require?', ['A Red Seal ticket','Knowledge, training, and experience; familiarity with the Act and regulations; knowledge of the hazards','Five years in the trade','A supervisor present'], 1, 'Three parts: qualified by knowledge, training, and experience; familiar with the applicable law; knowledge of actual or potential hazards.'),
 ],
 'diagnose': [
  ('A centrifugal pump sounds like it is pumping gravel. What is the first suspect?', ['Bearing failure','Cavitation from suction-side conditions','Coupling wear','Motor bearing'], 1, 'Gravel noise is cavitation: vapour bubbles collapsing at the impeller. Look at the suction side.'),
  ('A PD pump relief valve is lifting continuously. What is the right first action?', ['Turn the relief setting up','Investigate the discharge restriction before touching the relief','Replace the relief valve','Reduce pump speed'], 1, 'The relief is telling you system pressure is at or above its setting. Find out why before adjusting anything.'),
  ('A reciprocating pump has lost flow but the drive is stroking normally. Most likely?', ['Motor fault','Check valve failure','Coupling slip','Wrong rotation'], 1, 'A reciprocating pump that strokes without moving fluid has a check valve held open or worn.'),
 ],
 'leaks': [
  ('What leakage rate is correct for compression packing?', ['Zero','40 to 60 drops per minute','A steady stream','Two drops per hour'], 1, 'Packing is meant to leak: the leakage lubricates and cools it. Zero leakage means the gland is too tight.'),
  ('Which leak detection method works with the pump running and is the most sensitive for small leaks?', ['Pressure decay','UV dye','Ultrasonic','Dry wipe'], 2, 'Ultrasonic detection finds the turbulence of a leak in a running system; dye and pressure decay are shutdown methods.'),
 ],
 'safety': [
  ('Locking out the motor is sufficient isolation for pump work. True or false?', ['True','False: process isolation and verification are also required','True if the pump is small','True for water service'], 1, 'The casing holds the process. Suction and discharge isolated, drained, vented, and verified.'),
  ('Before removing the casing drain plug, what should be opened first?', ['The discharge valve','The vent at the top of the casing','The suction strainer','The seal flush'], 1, 'The vent tells you whether there is trapped pressure, at a safer location than the drain plug.'),
 ],
}

Q['builtwright_bearing_module_v1.html'] = {
 'types': [
  ('What supports the shaft in a running sleeve (journal) bearing?', ['The bearing metal','A pressurised oil wedge','Rolling elements','A spring'], 1, 'As the shaft turns it draws oil into a converging gap, building pressure that lifts the shaft clear of the bearing material.'),
  ('Which bearing type carries combined radial and thrust load and is set with preload or endplay?', ['Deep groove ball','Cylindrical roller','Tapered roller','Sleeve'], 2, 'Tapered rollers carry combined loads and are used in adjusted pairs.'),
  ('Which bearing type carries the highest pure radial load for its size?', ['Deep groove ball','Cylindrical roller','Sleeve','Thrust ball'], 1, 'Line contact on a cylindrical roller carries more radial load than point contact on a ball.'),
 ],
 'diagnose': [
  ('A bearing squeals at startup and clears after a few minutes. Most likely?', ['Race damage','Marginal lubrication or cold grease','Misalignment','Brinelling'], 1, 'Squeal that clears is the lubricant reaching operating consistency; persistent squeal is something else.'),
  ('A bearing runs hot within a day of a grease PM. Most likely?', ['Undergreasing','Overgreasing','Misalignment','Contamination'], 1, 'A full cavity churns grease and generates heat. Do not add more; let it purge.'),
  ('A rhythmic click once per revolution from a rolling element bearing suggests?', ['Lubrication starvation','Brinelling or a single race defect','Oil whirl','Overgreasing'], 1, 'A dent in a race or a flat on an element produces a click each time it passes through the load zone.'),
  ('Oil pressure drops on a pressure-fed sleeve bearing machine. Correct response?', ['Watch it for a shift','Shut down immediately','Add oil','Increase speed'], 1, 'Loss of oil supply collapses the wedge and the bearing wipes in seconds.'),
 ],
 'lube': [
  ('Which causes more bearing failures?', ['Undergreasing','Overgreasing','They are equal','Neither, contamination does'], 1, 'Overgreasing is the most misunderstood PM task and causes more failures than undergreasing.'),
  ('What is the formula for grease quantity?', ['G = D × B','G = 0.005 × D × B (grams, mm)','G = 0.5 × D','G = B ÷ D'], 1, 'Bearing outside diameter times width times 0.005 gives grams.'),
 ],
 'install': [
  ('On a pillow block pair, where does the fixing ring go?', ['Both bearings','Drive side only','Non-drive side only','Neither'], 1, 'One bearing locates; the other must float axially for thermal expansion.'),
  ('How should a rolling element bearing be pressed on?', ['Through the outer race onto a shaft','Through the race that is being fitted, never through the rolling elements','With a hammer and drift','Any way that fits'], 1, 'Force through the rolling elements brinells the races.'),
  ('What is the maximum temperature for heating a standard bearing for a shrink fit?', ['80°C','120°C','200°C','As hot as the heater goes'], 1, 'Above about 120°C the steel loses hardness and cages and seals are damaged.'),
 ],
 'safety': [
  ('Why must a bearing be demagnetised after induction heating?', ['To cool it','A magnetised bearing attracts ferrous debris into the raceways','To reset the heater','It does not need to be'], 1, 'Residual magnetism collects wear particles inside the bearing.'),
  ('A hand grease gun can inject grease through skin. True or false?', ['False, only air guns can','True','Only with synthetic grease','Only at the fitting'], 1, 'Hand guns produce pressures well above the injection threshold. Coupler on the fitting before the trigger.'),
 ],
}

Q['builtwright_coupling_alignment_v1.html'] = {
 'types': [
  ('Which coupling type absorbs misalignment with an elastomer element and needs no lubrication?', ['Gear','Grid','Jaw (spider)','Rigid'], 2, 'Jaw couplings use an elastomer spider; gear and grid couplings need lubrication.'),
  ('A fluid coupling is used mainly to?', ['Correct misalignment','Provide a soft start and overload protection','Allow axial float','Replace a gearbox'], 1, 'Fluid couplings transmit torque through oil and let the motor start against a heavy inertia load.'),
 ],
 'why': [
  ('Roughly what share of rotating equipment failures have misalignment as a contributing cause?', ['5%','20%','Over 50%','90%'], 2, 'Misalignment loads bearings, seals, and couplings in directions they were not designed for.'),
  ('What does misalignment do to a mechanical seal?', ['Nothing','The shaft describes an arc through the seal faces and destroys them','It improves flush flow','It reduces face wear'], 1, 'The seal faces see a wobble every revolution.'),
 ],
 'misalign': [
  ('Parallel (offset) misalignment typically shows in vibration as?', ['1x axial','2x radial','Sub-synchronous','Broadband'], 1, 'Offset shafts fight through the coupling twice per revolution.'),
  ('Angular misalignment typically shows in vibration as?', ['1x axial','2x radial only','0.5x','Bearing frequencies'], 0, 'Angular misalignment produces high 1x in the axial direction with phase reversed across the coupling.'),
  ('What is DBSE?', ['Distance between shaft ends','Dial indicator sag error','Deflection at bearing support end','Drive belt speed estimate'], 0, 'DBSE is set at coupling installation and matters for element fit and axial float.'),
 ],
 'methods': [
  ('Which method requires correction for bracket sag?', ['Straightedge','Laser','Dial indicator rim and face','Feeler gauge'], 2, 'Indicator brackets sag under their own weight; measure and correct for it.'),
  ('Which method automatically compensates for sag and thermal growth?', ['Straightedge','Laser alignment','Feeler gauge','Reverse dial without software'], 1, 'Laser systems calculate corrections and accept thermal growth targets.'),
 ],
 'procedure': [
  ('What is always the first step of an alignment?', ['Rough alignment','Take readings','Soft foot check','Torque the feet'], 2, 'Soft foot first, no exceptions. Less than 0.002 in is acceptable.'),
  ('Vertical corrections are made by?', ['Moving the motor sideways','Shimming under the feet','Adjusting the coupling','Loosening the base'], 1, 'Vertical is shims; horizontal is lateral moves with jacking bolts.'),
  ('After the final correction and torque, what should happen?', ['Start the machine','Recheck the readings','Remove the shims','Nothing more'], 1, 'Torquing the feet can move the machine. Verify after torque.'),
 ],
 'install': [
  ('How do you check for pipe strain?', ['Look at the pipe','Take alignment readings before and after connecting the piping','Torque the flange bolts','Run the pump and listen'], 1, 'Any shift over 0.001 to 0.002 in when the piping is connected is pipe strain.'),
  ('When installing a coupling hub, why support the shaft?', ['To keep it clean','To protect the bearings from the pressing force','To measure DBSE','It is not necessary'], 1, 'Pressing a hub on an unsupported shaft loads the bearing through the rolling elements.'),
 ],
 'safety': [
  ('When rotating shafts for readings, where do hands go?', ['In the coupling gap','On the coupling hub or a bar in a designed spot, never between the hubs','On the shims','Anywhere convenient'], 1, 'A hand in the gap when the shaft turns is a crushed hand.'),
  ('Before a hand goes under a motor foot to place a shim, the motor must be?', ['Lifted by crane','Stable on snugged foot bolts, not on jacking bolts alone','Running','Uncoupled'], 1, 'Never leave a machine sitting on jacking bolts alone.'),
 ],
}

Q['builtwright_seals_gaskets_v1.html'] = {
 'sealtypes': [
  ('What is the most common cartridge seal installation error?', ['Wrong material','Removing the setting clips before tightening the set screws','Too much lubricant','Wrong flush plan'], 1, 'Set the screws first, then remove the clips, or the springs unload the sleeve.'),
  ('A double (tandem) mechanical seal needs?', ['No flush','A barrier or buffer fluid system','Packing behind it','Dry gas'], 1, 'The space between the seals is supplied by an API plan such as 53 or 54.'),
  ('Compression packing is designed to?', ['Seal with zero leakage','Leak a controlled amount, 40 to 60 drops per minute','Run dry','Replace a mechanical seal'], 1, 'The leakage lubricates and cools the packing.'),
 ],
 'gaskets': [
  ('A spiral wound gasket needs a flange face finish of roughly?', ['32 AARH','125 to 250 AARH','500 AARH','Polished'], 1, 'Too smooth and it slips; too rough and it does not seal.'),
  ('Can an RTJ ring be reused?', ['Yes, if it looks fine','No','Yes, once','Only on low pressure'], 1, 'The ring deforms to seal and the ring must be softer than the groove. Never reuse.'),
  ('A full face gasket is used on?', ['Raised face flanges','Flat face flanges','RTJ flanges','Threaded connections'], 1, 'Full face gaskets cover the whole flat face including the bolt holes.'),
 ],
 'materials': [
  ('Which elastomer should not be used with mineral oils?', ['Nitrile','Viton','EPDM','Neoprene'], 2, 'EPDM swells in oils; it is for water, steam, and many chemicals.'),
  ('Which material cold flows and is used in filled grades for that reason?', ['Graphite','PTFE','Viton','Nitrile'], 1, 'PTFE creeps under load; filled grades reduce it.'),
  ('Which material is used for high temperature steam gaskets?', ['Nitrile','Silicone','Flexible graphite','EPDM'], 2, 'Graphite handles high temperature and steam service.'),
 ],
 'failure': [
  ('An o-ring with a flat spot on one side was?', ['Chemically attacked','Pinched during assembly','Overheated','Dropped'], 1, 'Flat spot is pinched; spiral cut is twisted; chipped face is dropped.'),
  ('A swollen, soft seal indicates?', ['Heat','Chemical incompatibility','Installation damage','Fretting'], 1, 'Swelling means the fluid is attacking the material.'),
  ('A gasket extruded outward was?', ['Over-torqued','Under-torqued','Reused','The wrong size'], 1, 'Under-torque lets pressure push it out; over-torque crushes it inward.'),
 ],
 'install': [
  ('What is the maximum shaft runout before installing a mechanical seal?', ['0.010 in TIR','0.002 in TIR','0.050 in TIR','Any'], 1, 'Runout above 0.002 in wobbles the faces.'),
  ('Which parts of a mechanical seal get lubricated at installation?', ['The faces','The secondary seals (o-rings), never the faces','Everything','Nothing'], 1, 'Lubricant on the faces is contamination. A fingerprint is contamination.'),
  ('Minimum number of torque passes on a flange?', ['One','Two','Three, in a star pattern','Five'], 2, 'Star pattern, at least three passes, to seat the gasket evenly.'),
 ],
 'compat': [
  ('Nitrile with a ketone solvent?', ['Good','Warn','Fail','Depends on temperature'], 2, 'Ketones attack nitrile and many elastomers; PTFE is the usual choice.'),
  ('What does a "Warn" rating in the compatibility table mean?', ['Never use','Use with caution, verify against concentration and temperature','Good in all cases','Not tested'], 1, 'Warn means conditional: confirm with the manufacturer for the actual service.'),
 ],
 'safety': [
  ('When breaking a flange, which bolts are loosened first?', ['Nearest you','Far side, so trapped pressure sprays away from you','Top','Bottom'], 1, 'Crack the far side with the near side snug.'),
  ('An old compressed sheet gasket in a 1980s plant should be treated as?', ['Safe','Suspect for asbestos: wet removal, no grinding','Graphite','PTFE'], 1, 'Pre-1990s gaskets and packing commonly contained asbestos.'),
 ],
}

Q['builtwright_lubrication_v1.html'] = {
 'types': [
  ('Why is GL-5 gear oil a problem in a bronze worm gearbox?', ['Too thin','Active sulphur EP additives attack yellow metals','Too expensive','It foams'], 1, 'EP additives react with bronze. Use what the manufacturer specifies.'),
  ('What does NLGI grade describe?', ['Grease base oil viscosity','Grease consistency (stiffness)','Additive package','Colour'], 1, 'NLGI 2 is the common general purpose consistency.'),
  ('Which base oil group is PAO?', ['Group I','Group II','Group IV','Group V'], 2, 'PAO is Group IV synthetic; esters and PAGs are Group V.'),
 ],
 'systems': [
  ('In a progressive centralized grease system, one blocked point does what?', ['Nothing to the others','Stops all downstream points','Speeds up the others','Trips the pump'], 1, 'Progressive dividers pass grease in sequence; a blockage stops the chain.'),
  ('In a dual-line system, each injector is?', ['Dependent on the previous one','Independent','Manual','Timed by the last'], 1, 'Dual-line injectors operate independently, so one blockage does not stop the rest.'),
  ('An oil ring lubricated bearing needs?', ['A pump','A minimum shaft speed for pickup','Grease','A cooler'], 1, 'Below a minimum speed the ring does not carry oil up.'),
 ],
 'contam': [
  ('What does milky oil indicate?', ['Oxidation','Water contamination','Air','Varnish'], 1, 'Free water emulsifies and turns oil milky.'),
  ('Oxidation rate roughly doubles for every?', ['5°C','10°C','20°C','50°C'], 1, 'Every 10°C above the design temperature halves oil life.'),
  ('Is new oil from a drum clean enough to use as delivered?', ['Yes','No, filter it in','Only synthetic','Only if sealed'], 1, 'New oil is dirty oil. Filter it into the machine.'),
  ('Lithium complex and polyurea greases are?', ['Fully compatible','Incompatible','The same thing','Compatible above 50°C'], 1, 'Mixing incompatible thickeners softens or hardens the grease.'),
 ],
 'analysis': [
  ('What does TAN doubling from baseline indicate?', ['More additive','Oil degradation, change indicator','Water','Nothing'], 1, 'Rising acid number is oxidation; doubling from baseline is a change trigger.'),
  ('What does ferrography tell you that elemental analysis does not?', ['How much iron','The type of wear from particle morphology','Water content','Viscosity'], 1, 'Particle shape shows the wear mechanism: cutting, sliding, fatigue.'),
  ('Where should an oil sample be drawn?', ['From the drain plug','From the same live point every time, running or within minutes of shutdown','From the fill cap','From a new bottle'], 1, 'The drain plug collects sediment; a consistent live point gives a trend.'),
 ],
 'application': [
  ('Grease quantity formula?', ['G = D × B','G = 0.005 × D × B','G = 0.05 × D','G = B'], 1, 'Grams from bearing OD and width in mm.'),
  ('Oil change intervals should be based on?', ['Calendar','Oil analysis, within the manufacturer maximum','Colour','Hours only'], 1, 'Change on condition, not on the calendar, but not later than the maximum.'),
 ],
 'troubleshoot': [
  ('Foamy oil most often means?', ['Water','Air ingestion or the wrong oil','Oxidation','Metal'], 1, 'Air on the suction side or an incompatible oil.'),
  ('Varnish deposits on a proportional valve spool are caused by?', ['Water','Oxidation products from overheated oil','Dirt','Wrong viscosity'], 1, 'Varnish is oxidised oil depositing on surfaces and sticks fine spools.'),
 ],
 'safety': [
  ('Where do oil-soaked rags go?', ['Any bin','A metal bin with a lid, emptied daily','On the floor','A plastic bag'], 1, 'Oily rags self-heat and ignite.'),
  ('A centralized grease line must be what before it is opened?', ['Warm','Depressurised','Full','Cold'], 1, 'These systems run at 100 to 400 bar; injection risk is real.'),
 ],
}

Q['builtwright_pneumatics_v1.html'] = {
 'overview': [
  ('Pneumatic systems are open-loop because?', ['Air is expensive','Spent air exhausts to atmosphere','They have no valves','The compressor runs continuously'], 1, 'No return line; air is used once.'),
  ('What is the primary enemy of pneumatic components?', ['Heat','Water','Vibration','Oil'], 1, 'Moisture condenses in valves and cylinders and causes corrosion, sticking, and icing.'),
  ('The first three questions in pneumatic troubleshooting?', ['Valve, cylinder, PLC','Is there pressure, is it correct, is the air dry and clean','Motor, belt, coupling','Filter, regulator, lubricator'], 1, 'Supply first eliminates most faults.'),
 ],
 'valves': [
  ('A 5/2 valve has?', ['5 positions, 2 ports','5 ports, 2 positions','5 solenoids','2 exhausts only'], 1, 'Pressure, two work ports, two exhausts; two positions.'),
  ('A double solenoid 5/2 valve on power loss?', ['Returns to spring position','Holds its last position (bistable)','Exhausts both ports','Blocks all ports'], 1, 'No spring, so it stays where it was last commanded.'),
  ('A humming solenoid usually means?', ['Normal operation','A stuck spool preventing the plunger from seating','Low voltage only','A bad PLC'], 1, 'The coil cannot pull in and will burn out.'),
  ('Preferred flow control arrangement for most cylinders?', ['Meter-in','Meter-out','Bleed-off','None'], 1, 'Meter-out gives consistent speed and prevents runaway under a pulling load.'),
 ],
 'actuators': [
  ('Extend force of a 63 mm bore cylinder at 6 bar is about?', ['19 kg','190 kg','1900 kg','63 kg'], 1, '(π/4) × 0.063² × 600,000 ≈ 1868 N ≈ 190 kg.'),
  ('Why is retract force lower than extend force?', ['Friction','The rod reduces the effective piston area','Lower pressure','Spring'], 1, 'Retract area = (π/4)(D² - d²).'),
  ('An air motor speed is controlled by?', ['Pressure','Flow','Voltage','Load only'], 1, 'Pressure sets torque; flow sets speed.'),
 ],
 'symbols': [
  ('A dashed line in a circuit diagram is?', ['Working line','Pilot or control line','Exhaust','Electrical'], 1, 'Solid is working flow; dashed is a pilot signal.'),
  ('Two lines crossing with a dot are?', ['Not connected','Connected','Crossing over','A junction box'], 1, 'The dot means connected; no dot means they just cross.'),
  ('In a directional valve symbol, the box next to the spring shows?', ['The actuated position','The normal (resting) position','Exhaust','Pilot'], 1, 'Read the spring side box for what happens with no signal.'),
 ],
 'airquality': [
  ('A refrigerant dryer achieves a pressure dewpoint of about?', ['-40°C','3°C','20°C','0°C'], 1, 'Refrigerant dryers cool to about 3°C; desiccant dryers go to -20 to -70°C.'),
  ('Correct FRL order?', ['Regulate, filter, lubricate','Filter, regulate, lubricate','Lubricate, filter, regulate','Any order'], 1, 'Filter before regulate before lubricate.'),
  ('Typical leakage on an unmanaged compressed air system?', ['1 to 2%','20 to 30%','50%','Zero'], 1, 'An ultrasonic leak survey is one of the highest-return maintenance activities.'),
  ('Which tubing is better for outdoor UV and heat?', ['Polyurethane','Nylon (PA12)','Vinyl','Rubber'], 1, 'PU degrades in UV and above 50°C; PA12 is the outdoor choice.'),
 ],
 'troubleshoot': [
  ('Cylinder moves but the machine cycle does not advance. First suspect?', ['The valve','The position sensor','The compressor','The PLC'], 1, 'Sensor faults are constantly misdiagnosed as pneumatic faults.'),
  ('A cylinder bangs at end of stroke after a speed increase. Fix?', ['New cylinder','Re-adjust the cushion','Lower pressure','Bigger valve'], 1, 'Cushion setting is tuned for a speed; change the speed, reset the cushion.'),
  ('In a loud plant, how do you listen to a valve shifting?', ['Cup your ear','Screwdriver tip on the component, handle behind the ear (bone conduction)','Stop the machine','Guess'], 1, 'The screwdriver stethoscope carries sound through plant noise.'),
 ],
 'safety': [
  ('A stopped machine with the power off has no compressed air in it. True or false?', ['True','False: lines, cylinders, and receivers hold pressure until released','True if the compressor is off','True after 5 minutes'], 1, 'Isolate, exhaust, verify zero at the point of work.'),
  ('Can compressed air at 1 bar injure through the skin?', ['No','Yes, air embolism','Only above 10 bar','Only with oil'], 1, 'Never use compressed air on skin or clothing.'),
 ],
}
