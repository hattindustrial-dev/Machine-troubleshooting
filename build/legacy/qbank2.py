Q2 = {}

Q2['builtwright_hydraulics_v1.html'] = {
 'overview': [
  ('What creates pressure in a hydraulic system?', ['The pump','Resistance to flow (the load)','The reservoir','The relief valve'], 1, 'Pumps create flow; the load creates pressure.'),
  ('Pressure drop that is not doing work becomes?', ['Flow','Heat','Noise','Pressure elsewhere'], 1, 'A hot system is wasting energy somewhere.'),
  ('Roughly what share of hydraulic failures trace to contamination?', ['10%','25%','About three quarters','None'], 2, 'Fluid cleanliness is the primary maintenance activity.'),
 ],
 'pumps': [
  ('The relief valve on a pressure compensated pump system should be set?', ['Below the compensator','10 to 15% above the compensator','Equal to the compensator','As high as possible'], 1, 'Relief below the compensator means the pump never destrokes and the system overheats.'),
  ('The definitive field test of piston pump condition?', ['Listen to it','Case drain flow against the manufacturer limit','Outlet pressure','Oil colour'], 1, 'Rising case drain flow is internal wear.'),
  ('Cavitation sounds like?', ['A rattle with foam in the tank','A steady high whine, worst cold','A knock','Silence'], 1, 'Aeration rattles; cavitation whines.'),
  ('A load sensing pump will not build pressure. First check?', ['Replace the pump','The load sense line for blockage or leak','The reservoir','The relief'], 1, 'A blocked LS line tells the pump there is no load.'),
 ],
 'valves': [
  ('A closed centre 4/3 valve on a fixed displacement pump with no unloading valve will?', ['Unload the pump','Send the pump over the relief at rest and overheat','Float the cylinder','Stop the pump'], 1, 'This is a design error that gets built.'),
  ('Which valve is normally open?', ['Relief','Sequence','Pressure reducing','Counterbalance'], 2, 'Reducing valves throttle closed as outlet pressure rises; the others are normally closed.'),
  ('What holds a suspended load: the DCV spool or a counterbalance valve?', ['The DCV spool','The counterbalance valve','Either','The pump'], 1, 'A spool leaks by design; a poppet-type holding valve holds.'),
  ('A counterbalance valve is set to about?', ['0.5 times load pressure','1.3 times load pressure','3 times load pressure','Relief pressure'], 1, 'Too low creeps; too high runs hot and jerky.'),
 ],
 'actuators': [
  ('A cylinder drifts with both ports blocked. The leak is?', ['In the DCV','In the piston seal','In the pump','In the relief'], 1, 'Isolated cylinder still drifting means fluid is crossing the piston.'),
  ('Extend force of a 100 mm bore at 200 bar?', ['15.7 kN','157 kN','1570 kN','57 kN'], 1, '0.00785 m² × 20,000,000 Pa = 157 kN.'),
  ('Before a seal job, run a fingernail along the rod because?', ['To clean it','Any score you can catch will cut the new seal','To check temperature','It is tradition'], 1, 'A damaged rod destroys new seals in days.'),
 ],
 'fluid': [
  ('Target cleanliness code for proportional valves?', ['22/20/17','16/14/11','19/17/14','Not needed'], 1, 'Fine spool clearances need cleaner oil than on-off valves.'),
  ('A fine filter on the pump suction will?', ['Protect the pump','Starve the pump and cause cavitation','Improve cleanliness','Reduce noise'], 1, 'Suction strainers are coarse for a reason.'),
  ('Reservoir volume rule of thumb?', ['Equal to pump flow per minute','2 to 3 times pump flow per minute','10 times','Half'], 1, 'Time to cool, settle, and release air.'),
  ('Free water in mineral oil appears above about?', ['10 ppm','200 to 400 ppm','5%','It never appears'], 1, 'Above saturation the oil turns cloudy and water does damage.'),
 ],
 'symbols': [
  ('A solid triangle in a pump or motor symbol means?', ['Pneumatic','Hydraulic','Variable','Bidirectional'], 1, 'Open triangle is pneumatic; solid is hydraulic.'),
  ('In a pressure valve symbol, an arrow drawn offset from the flow path means?', ['Normally open','Normally closed','Variable','Pilot operated'], 1, 'Offset is normally closed (relief); in line is normally open (reducing).'),
  ('An accumulator symbol on a drawing tells you?', ['The system is low pressure','There is stored energy after shutdown','The pump is variable','Nothing important'], 1, 'Find the bleed-down valve; it is part of the lockout.'),
 ],
 'troubleshoot': [
  ('Relief valve hotter than the lines around it means?', ['Normal','It is passing oil','It is closed','Low oil'], 1, 'A hot relief is lifting.'),
  ('The three questions that answer most hydraulic faults?', ['Pump, valve, cylinder','Is there flow, is there pressure, where is the heat','Level, colour, smell','Volts, amps, ohms'], 1, 'Gauge, temperature gun, and method.'),
  ('A pump that runs but cannot build pressure with the discharge blocked has?', ['A downstream leak','An internal fault or a stuck relief','Low level','Wrong oil'], 1, 'Blocking the discharge isolates the pump from downstream leaks.'),
 ],
 'safety': [
  ('What do you tell emergency staff after a hydraulic pinhole hits your hand?', ['It is a scratch','"High pressure fluid injection injury" and the fluid type','Nothing','Ask for a bandage'], 1, 'It looks like nothing and needs surgery within hours.'),
  ('How do you locate a hydraulic leak?', ['By hand','With cardboard held in the area','With a rag','Visually only'], 1, 'Never search for a leak with your hands.'),
  ('Bleeding the hydraulic side of an accumulator releases the nitrogen precharge. True or false?', ['True','False','Only on bladder types','Only when hot'], 1, 'The gas side is separate; never loosen the gas valve or the shell.'),
 ],
}

Q2['builtwright_power_transmission_v1.html'] = {
 'overview': [
  ('A 1750 rpm motor with a 150 mm driver sheave and a 400 mm driven sheave gives?', ['4667 rpm','656 rpm','1750 rpm','175 rpm'], 1, '1750 × (150 ÷ 400) = 656.'),
  ('Which drive type slips under overload?', ['Chain','Timing belt','V-belt','Gearbox'], 2, 'Friction drives slip; positive drives do not.'),
  ('Rubber dust under a belt guard indicates?', ['Normal wear','Slip or misalignment','New belts','Too little tension only'], 1, 'The belt is being abraded against the groove.'),
 ],
 'belts': [
  ('A B belt in an A groove will?', ['Fit fine','Ride too high and roll over','Bottom out','Run cooler'], 1, 'Sections are not interchangeable.'),
  ('Replacing one belt of a multi-belt set?', ['Is fine','Puts all the load on the new belt until it stretches','Balances the load','Extends life'], 1, 'Always replace as a matched set.'),
  ('A belt riding low in the groove means?', ['Correct','The groove is worn or the belt is the wrong section','Too tight','Too loose'], 1, 'Top of the belt should sit at or slightly above the sheave OD.'),
  ('A cogged belt is for?', ['Positive drive','Bending around smaller sheaves and running cooler','Higher speed only','Timing'], 1, 'Notches on the underside; same sheave as the plain belt.'),
 ],
 'chains': [
  ('ANSI #60 chain pitch?', ['1/2 in','5/8 in','3/4 in','1 in'], 2, 'First digits ÷ 8: 6 ÷ 8 = 3/4 in.'),
  ('Where does chain lubricant need to reach?', ['The rollers','The pin and bushing joint, via the side plate gap','The sprocket teeth','The outside of the chain'], 1, 'Wear is pin and bushing wear.'),
  ('A spring clip master link is installed with the closed end?', ['Facing backward','Facing the direction of travel','Either way','Up'], 1, 'Backward, it can be stripped off by contact.'),
 ],
 'tension': [
  ('V-belt deflection target?', ['Span ÷ 16','Span ÷ 64','Span ÷ 100','1 inch'], 1, '1/64 in per inch of span, or 1.6 mm per 100 mm.'),
  ('The right belt tension is?', ['As tight as possible','The lowest that does not slip under full load','Hand tight','Manufacturer maximum'], 1, 'Every extra newton loads the bearings.'),
  ('Chain sag on a horizontal drive?', ['Zero','2 to 4% of span','10% of span','Half the span'], 1, 'Vertical drives use 1 to 2%.'),
  ('New belts are rechecked after?', ['A year','24 to 48 hours of operation','Never','One minute'], 1, 'Initial stretch and seating happen in the first day or two.'),
 ],
 'alignment': [
  ('Straightedge across two sheaves should touch at?', ['Two points','Four points','One point','Any number'], 1, 'Two points per sheave, four total.'),
  ('When is sheave alignment checked?', ['Before tensioning','After tensioning','During','Never'], 1, 'Tensioning pulls the motor on its base.'),
  ('Prying a belt onto a sheave?', ['Is the standard method','Breaks the tension cords invisibly','Is fine with a plastic tool','Improves grip'], 1, 'Loosen the motor and slip it on by hand.'),
 ],
 'failure': [
  ('Chain replacement elongation for general drives?', ['1%','3%','10%','Never'], 1, '1.5% for large sprockets.'),
  ('#60 chain, 12 pitches measures 236.5 mm. Elongation?', ['1%','2%','3.5%','7%'], 2, 'Nominal 228.6 mm; (236.5 - 228.6) ÷ 228.6 = 3.5%.'),
  ('Hooked (shark-fin) sprocket teeth mean?', ['New sprocket','End of sprocket life; replace with the chain','Wrong chain','Too much lube'], 1, 'A hooked sprocket wears a new chain fast.'),
  ('Belt glazed and hard on the sidewalls?', ['Age','Slip and heat','Oil','Misalignment'], 1, 'Cannot be recovered by tensioning.'),
 ],
 'troubleshoot': [
  ('Belt squeals on startup then runs quiet?', ['Misalignment','Startup slip on inertia','Worn sheave only','Oil'], 1, 'Tension at the low end, glazed belt, or a marginal drive for the starting load.'),
  ('Motor DE bearing warmer than NDE after tensioning?', ['Normal','Over-tension','Under-tension','Misalignment only'], 1, 'The bearing tells you what the belt table did not.'),
 ],
 'safety': [
  ('The guard comes off?', ['When the drive is running slowly','After lockout is verified, and goes back before the lock comes off','For a quick look','Never'], 1, 'Belts and chains are the nip point hazard in the plant.'),
  ('The driven machine can turn a locked-out drive backward. True or false?', ['False','True: block the driven side','Only conveyors','Only fans'], 1, 'Windmilling fans, loaded inclines, gravity loads.'),
 ],
}

Q2['builtwright_gearboxes_v1.html'] = {
 'overview': [
  ('A gearbox can be within its mechanical rating and still overheat because?', ['The gears are wrong','It is above its thermal rating','The oil is too clean','Ratio is too high'], 1, 'The lower of the two ratings governs.'),
  ('15 kW at 1750 rpm through a 20:1 reducer at 96% efficiency gives output torque of about?', ['82 Nm','1574 Nm','15,740 Nm','8 Nm'], 1, '82 Nm × 20 × 0.96.'),
  ('On a shaft mount reducer, the torque arm should be?', ['Rigid','At about 90° to the line from output centre to anchor, free to swing slightly','Removed','Horizontal always'], 1, 'A rigid or badly angled arm loads the output bearings.'),
 ],
 'gears': [
  ('Which gear type produces axial thrust?', ['Spur','Helical','Herringbone','None'], 1, 'Angled teeth push sideways; the thrust reverses with rotation.'),
  ('Worm gearboxes are reliably self-locking. True or false?', ['True','False','True above 30:1','True when cold'], 1, 'Many let go under vibration. Never rely on one as a brake.'),
  ('Mating gears must share the same?', ['Colour','Module or DP and pressure angle','Tooth count','Shaft size'], 1, 'Different module gears will not mesh.'),
  ('In a planetary stage, which bearings fail first when oil is low?', ['Input','Planet bearings','Output','Ring'], 1, 'They run fast and are splash lubricated.'),
 ],
 'bearings': [
  ('A leaking output seal: what is checked first?', ['The seal','The breather','The oil grade','The coupling'], 1, 'A blocked breather pressurises the case and pushes oil past every seal.'),
  ('Tapered roller bearing setting is done with?', ['Grease','Shims or an adjusting nut, to the drawing','Torque on the cap bolts','Feel'], 1, 'Preload or endplay is specified.'),
  ('Shims from two bearing caps?', ['Are interchangeable','Are not; tape each pack to its cap','Are always the same','Are not needed'], 1, 'The wrong pack moves the pinion.'),
 ],
 'lube': [
  ('Most common industrial gear oil grade?', ['VG 32','VG 220','VG 1000','VG 10'], 1, 'AGMA 5, helical and bevel reducers.'),
  ('Oil level is checked?', ['Running','Stopped and settled, in the actual mounting position','Cold only','From the breather'], 1, 'The running sight glass lies.'),
  ('PAG oil and mineral oil?', ['Mix freely','Are incompatible','Are the same','Mix above 60°C'], 1, 'Do not mix or switch without checking.'),
  ('Normal worm gearbox housing temperature?', ['30°C','80 to 90°C','120°C','Ambient'], 1, 'Worm boxes run hot by nature; the change is the symptom.'),
 ],
 'wear': [
  ('Small pits near the pitch line that appear early and stop growing?', ['Destructive pitting','Initial (corrective) pitting','Scuffing','Spalling'], 1, 'Normal run-in; the early oil change removes the debris.'),
  ('Radial tears in the sliding direction, worst at tip and root?', ['Pitting','Scuffing (oil film failure)','Abrasive wear','Corrosion'], 1, 'Always a lubrication cause.'),
  ('Wear at one end of the tooth face?', ['Overload','Misalignment','Wrong oil','Age'], 1, 'The load is on part of the tooth.'),
  ('Beach marks on a fracture face indicate?', ['Overload','Fatigue','Corrosion','Manufacturing defect'], 1, 'A slow crack; crystalline is overload.'),
 ],
 'setup': [
  ('Bevel gear contact pattern toward the toe means?', ['Correct','Gears too close together','Gears too far apart','Pinion too far out'], 1, 'Move the gear away from the pinion.'),
  ('Order of operations on reassembly?', ['Backlash, then bearing setting','Bearing setting, then backlash, then contact pattern','Pattern first','Any order'], 1, 'Bearing setting positions the shaft; backlash follows.'),
  ('Backlash increasing over time is a direct measure of?', ['Oil level','Tooth wear or bearing movement','Temperature','Load'], 1, 'Trend it on the PM.'),
 ],
 'troubleshoot': [
  ('A knock once per output revolution points at?', ['The input pinion','The low speed gear or output shaft','The oil','The breather'], 1, 'Count the rhythm against the shaft speeds.'),
  ('Whole housing hot, oil level correct, oil correct, amps normal, full speed?', ['Overfilled','Above thermal rating or a mechanical fault','Low oil','Wrong oil'], 1, 'Check thermal rating, ambient, airflow, then bearings and pattern.'),
  ('Non-magnetic silver flakes on the magnetic plug?', ['Normal','Bearing cage','Gear teeth','Worm wheel'], 1, 'A cage breaking up is the last stage of bearing failure.'),
 ],
 'safety': [
  ('A gearbox on an inclined conveyor with the motor locked out is?', ['Locked out','Still holding the load through the gear train; block the load','Safe to open','Free to turn'], 1, 'Control the load before opening the drive train.'),
  ('Before cracking the drain on a hot gearbox?', ['Nothing','Open the breather or fill plug first, from the side','Run it','Cool the oil with water'], 1, 'A blocked breather means a pressurised case.'),
 ],
}

Q2['builtwright_motors_v1.html'] = {
 'overview': [
  ('Vibration that vanishes the instant power is cut is?', ['Mechanical','Electrical','Bearing','Unbalance'], 1, 'Decays with speed: mechanical.'),
  ('A 4-pole motor at 60 Hz has a synchronous speed of?', ['3600','1800','1200','900'], 1, 'Full load speed is 1750-ish because of slip.'),
  ('An unloaded motor draws about?', ['Zero','25 to 40% of FLA','100% FLA','200% FLA'], 1, 'Magnetising current is drawn regardless of load.'),
 ],
 'nameplate': [
  ('Service factor 1.15 means?', ['15% design margin to use','15% overload allowed continuously, at higher temperature and shorter life','15% efficiency loss','Nothing'], 1, 'Not a design margin.'),
  ('Frame 256T shaft diameter?', ['0.875 in','1.625 in','2.125 in','3.375 in'], 1, 'Frame fixes shaft, height, and foot pattern.'),
  ('Design ambient for a standard motor?', ['25°C','40°C','60°C','100°C'], 1, 'Above 40°C the motor is over its rating at nameplate load.'),
 ],
 'bearings': [
  ('Greasing a motor with the relief plug in?', ['Is correct','Pushes grease into the windings','Is faster','Is required'], 1, 'Relief plug out, quantity by formula, let it purge.'),
  ('Washboard lines across a bearing race on a VFD motor?', ['Brinelling','Electrical fluting','Contamination','Overload'], 1, 'Fix: grounding ring or insulated bearing.'),
  ('Standard motor bearing clearance?', ['C2','CN','C3','C5'], 2, 'The rotor heats and expands; C3 gives room.'),
 ],
 'mounting': [
  ('A motor hums hard and the hum changes when one foot bolt is loosened?', ['Winding fault','Soft foot distorting the frame and air gap','Bad bearing','Low voltage'], 1, 'Nothing electrical was wrong.'),
  ('Soft foot limit?', ['0.5 mm','0.05 mm (0.002 in)','1 mm','Any'], 1, 'Shim anything above it.'),
 ],
 'cooling': [
  ('A class F motor frame at 85°C is?', ['Failing','Possibly normal at full load','Cold','Over rating'], 1, 'Hand-on-frame tells you almost nothing; compare to baseline.'),
  ('A TEFC motor on a VFD at 30% speed?', ['Cools normally','Has a fan at 30% speed and needs a derate or a blower','Runs cooler','Does not need cooling'], 1, 'Shaft fan airflow falls with speed.'),
  ('Each start dumps about how much current into the windings?', ['FLA','2x FLA','6 to 8x FLA','20x FLA'], 2, 'Starts per hour are limited for this reason.'),
 ],
 'amps': [
  ('20 HP motor, FLA 24 A, reads 26 A. Load is about?', ['50%','108%','80%','Cannot tell'], 1, 'Valid above about 50% load.'),
  ('Amps fall sharply on a pump motor. Suspect?', ['Overload','Lost prime, dry running','Misalignment','Bad bearing'], 1, 'The motor is not doing the work; the seal is minutes from failure.'),
  ('A fan run 10% fast draws about how much more power?', ['10%','33%','5%','100%'], 1, 'Fan power rises with the cube of speed.'),
 ],
 'handoff': [
  ('Opening the motor terminal box in Ontario is?', ['Millwright scope','Licensed electrician scope','Anyone','Supervisor'], 1, 'Your lock on the disconnect is yours; the peckerhead is not.'),
  ('The most useful thing in a handoff package?', ['A guess','Readings: amps, speed, temperatures, solo run result','The motor manual','A photo of the plant'], 1, 'Turns a hunt into a confirmation.'),
 ],
 'troubleshoot': [
  ('High amps. Uncoupled, both shafts turn freely, solo amps normal. The problem is?', ['The motor','The load, the alignment, or the ratio','Electrical','The fan'], 1, 'The motor is fine.'),
  ('Motor will not start, both shafts turn freely by hand?', ['Seized bearing','Electrical: hand off','Bad coupling','Soft foot'], 1, 'Mechanically clear.'),
 ],
 'safety': [
  ('A VFD keypad in stop is an isolation. True or false?', ['True','False','True after 5 minutes','True if the display is off'], 1, 'Disconnect upstream of the drive, locked, verified.'),
  ('Running a motor solo with the shaft key in place?', ['Is fine','Is a projectile hazard: remove or tape the key','Improves balance','Is required'], 1, 'A loose key at 3600 rpm.'),
 ],
}

Q2['builtwright_vibration_v1.html'] = {
 'overview': [
  ('Which measure is the standard for severity on general machinery?', ['Displacement','Velocity (mm/s RMS)','Acceleration','Phase'], 1, 'Roughly flat across the useful range; ISO charts use it.'),
  ('A medium machine on a rigid base at 3.5 mm/s RMS is in ISO zone?', ['A','B','C','D'], 2, 'Zone C: unsatisfactory long term, plan corrective action.'),
  ('The usual trigger for investigation regardless of absolute level?', ['Any change','2.5 times baseline or a zone step','Only zone D','Noise'], 1, 'The change is the information.'),
 ],
 'measure': [
  ('Points per bearing?', ['One','Three: horizontal, vertical, axial','Two','Five'], 1, 'Same points, marked, every time.'),
  ('Minimum sensor mount for bearing frequencies?', ['Handheld probe','Magnet on clean flat metal','Any','Tape'], 1, 'A handheld probe cannot see above about 1 kHz.'),
  ('Where should a sensor never be placed?', ['Bearing housing','Fan shroud, guard, or thin cover','End bell','Solid frame'], 1, 'They resonate and lie.'),
 ],
 'spectrum': [
  ('A peak at 3.58x running speed is most likely?', ['Misalignment','A rolling element bearing defect','Unbalance','Looseness'], 1, 'Non-synchronous means bearing.'),
  ('Small evenly spaced peaks either side of a large one are?', ['Noise','Sidebands: modulation at the sideband spacing','Harmonics','Resonance'], 1, 'Spacing tells you the source.'),
  ('Dominant 2x radial at the coupling end of both machines?', ['Unbalance','Misalignment','Bearing','Electrical'], 1, 'Offset shafts fight through the coupling twice per revolution.'),
  ('0.45x on a sleeve bearing machine?', ['Belt','Oil whirl','Looseness','Gear'], 1, 'Unstable and destructive.'),
 ],
 'bearings': [
  ('BPFO plus BPFI equals?', ['Running speed','Ball count times running speed','FTF','Nothing'], 1, 'Useful check that two peaks are the same bearing.'),
  ('BPFI comes with sidebands at?', ['FTF','1x','2x line frequency','GMF'], 1, 'The inner race defect moves through the load zone once per revolution.'),
  ('At which stage does the overall velocity usually start to move?', ['1','2','3','4'], 2, 'Envelope finds stages 1 and 2.'),
 ],
 'trend': [
  ('The baseline is taken?', ['At commissioning or after a rebuild, when known good','Any time','At failure','Never'], 0, 'Everything after is compared to it.'),
  ('A reading that doubled in a month versus one that doubled in five years?', ['Equal','The month is urgent; the five years is wear','The five years is urgent','Neither matters'], 1, 'Rate of change matters more than level.'),
 ],
 'resonance': [
  ('A bump test is done?', ['Running','Stopped and locked out','At half speed','On the coupling'], 1, 'Strike the structure and read the natural frequency.'),
  ('Stiffening a structure moves its natural frequency?', ['Down','Up','Nowhere','Sideways'], 1, 'Mass moves it down; damping reduces amplification.'),
  ('Vibration that changes a lot with a small VFD speed change suggests?', ['Unbalance','Resonance','Bearing','Electrical'], 1, 'Skip the speed band on the drive.'),
 ],
 'troubleshoot': [
  ('A harmonic series with vertical higher than horizontal at one foot?', ['Unbalance','Structural looseness at that foot','Bearing','Misalignment'], 1, 'Torque the fasteners first.'),
  ('Gear mesh with sidebands at input speed points at?', ['The gear','The pinion','The bearing','The coupling'], 1, 'Sideband spacing names the shaft.'),
 ],
 'safety': [
  ('A reading point is inside a guard. You?', ['Reach through','Fit a stud or access port during a lockout','Skip it','Remove the guard'], 1, 'Never reach through a guard on a running machine.'),
  ('The sensor cable near a running shaft?', ['Can drape over it','Stays short and in hand','Is fine on the floor','Does not matter'], 1, 'A cable on a shaft takes the analyser and your hand.'),
 ],
}
