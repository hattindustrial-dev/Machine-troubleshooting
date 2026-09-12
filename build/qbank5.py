Q5 = {}
Q5['builtwright_fans_v1.html'] = {
 'overview': [
  ('Most fan bearing failures trace to?', ['Bad bearings','Unbalance from buildup on the wheel','Wrong grease','Motor faults'], 1, 'Most balance failures are dirt.'),
  ('On a backward-inclined fan, opening the outlet fully does what to motor amps?', ['Nothing','Raises them, up to the curve peak','Lowers them','Trips instantly'], 1, 'Know the curve before opening a damper.'),
 ],
 'types': [
  ('Which fan type has an overloading power curve?', ['Backward-inclined','Airfoil','Forward-curved','Vane-axial'], 2, 'Power rises with flow; open the system and it trips.'),
  ('A Roots blower against a closed discharge?', ['Runs fine','Overheats and seizes within minutes without a relief valve','Stalls','Slows down'], 1, 'It is a positive displacement machine.'),
  ('Which fan types stall to the left of peak pressure?', ['Forward-curved','Radial','Backward-inclined and axial','Regenerative'], 2, 'Throttling below the peak separates the flow.'),
 ],
 'laws': [
  ('A fan sped up 10% draws how much more power?', ['10%','21%','33%','50%'], 2, 'Power is proportional to speed cubed.'),
  ('A hot gas fan started on cold air?', ['Draws less power','Draws more power because the air is denser','Draws the same','Stalls'], 1, 'Pressure and power scale with density.'),
  ('A low pulsing roar with swinging pressure gauges is?', ['Bearing failure','Stall or surge','Belt slip','Normal'], 1, 'Open the system or reduce speed.'),
 ],
 'wheel': [
  ('First step before balancing a fan wheel?', ['Add trial weight','Clean it','Change bearings','Tighten belts'], 1, 'Balancing a dirty wheel balances the dirt.'),
  ('Wheel-to-inlet cone clearance matters because?', ['Noise only','It sets efficiency and pressure; an open gap recirculates air','It does not','Balance'], 1, 'Check after any wheel or bearing work.'),
  ('A centrifugal wheel run backward?', ['Reverses the airflow','Moves about half the air at high power','Works normally','Stops'], 1, 'The arrow on the housing.'),
 ],
 'drives': [
  ('On an overhung wheel arrangement, which bearing fails first?', ['Outboard','Inboard, carrying the wheel load plus belt pull','Motor NDE','Neither'], 1, 'Bending load and belt tension.'),
  ('A fan in a duct with the motor off?', ['Is stationary','Can windmill from draft and must be blocked','Is safe to reach into','Cannot turn'], 1, 'It is also a generator on the motor terminals.'),
 ],
 'troubleshoot': [
  ('Fan vibration, wheel has product on one side. Fix?', ['Balance','Clean the whole wheel, then read the vibration','New bearings','Tighten belts'], 1, 'Most of the time it is gone.'),
  ('Airflow dropped, nothing on the fan changed. First check?', ['Wheel','Filters, dampers, and ducts: the system','Motor','Belts'], 1, 'The operating point moved.'),
 ],
 'safety': [
  ('Before opening a fan housing?', ['Stop the motor','Lock out, wait for coast-down, block against windmilling','Close the damper','Nothing'], 1, 'A big light wheel stores more energy than it looks.'),
  ('A fan wheel with a cracked blade weld?', ['Run it to see','Do not run it: it will throw the next one','Balance it','Weld it and run'], 1, 'Replace or manufacturer repair and rebalance.'),
 ],
}
Q5['builtwright_compressors_v1.html'] = {
 'overview': [
  ('Compressed air costs roughly how much more than electricity per unit of energy at the tool?', ['The same','2 times','7 to 8 times','20 times'], 2, 'Most of the energy in goes out as heat.'),
  ('A compressor with 30% loaded hours is?', ['Correctly sized','Oversized and wasting power running unloaded','Undersized','Efficient'], 1, 'Unloaded still draws 25 to 40% of full power.'),
 ],
 'types': [
  ('Small reciprocating compressors are typically rated for?', ['100% duty','50 to 60% duty cycle','10% duty','Continuous'], 1, 'Run continuously they overheat and carbon the valves.'),
  ('Which type is the industrial standard for continuous duty?', ['Reciprocating','Oil-flooded rotary screw','Scroll','Vane'], 1, '5 to 500 kW, 100% duty.'),
  ('The failure mode of a centrifugal compressor is?', ['Valves','Surge','Vanes','Rings'], 1, 'The surge controller and blow-off valve are the protection.'),
 ],
 'recip': [
  ('A hot cylinder head with low output on a piston compressor?', ['Inlet filter','Leaking discharge valve','Low oil','Belt slip'], 1, 'Compressed air leaks back into the cylinder.'),
  ('Discharge temperature limit on a lubricated reciprocating unit matters because?', ['Efficiency','Above it the oil carbonises and a discharge fire becomes possible','Noise','It does not'], 1, 'A fire limit, not just a wear limit.'),
 ],
 'screw': [
  ('Most common screw compressor fault?', ['Airend','Dirty cooler and a temperature trip','Rotor wear','Wrong oil'], 1, 'Blow it out from the clean side.'),
  ('The minimum pressure valve does what?', ['Limits maximum pressure','Holds the separator tank at minimum pressure so the separator works, and checks flow back','Unloads the compressor','Drains condensate'], 1, 'Failed open: oil carryover at low plant pressure.'),
  ('Thermostatic valve stuck open?', ['Oil runs hot','Oil runs cold and emulsifies (milky oil)','Nothing','Trip'], 1, 'It bypasses the cooler until the oil is warm.'),
  ('A separator element is replaced on?', ['Colour','Differential pressure or hours, whichever first','Never','Oil level'], 1, 'A collapsed separator sends oil down the line.'),
 ],
 'controls': [
  ('Every extra bar of discharge pressure costs about?', ['1% power','7% power','20% power','Nothing'], 1, 'And raises the leak rate.'),
  ('Typical load-unload pressure band?', ['0.1 bar','0.7 to 1 bar','3 bar','5 bar'], 1, 'Too narrow short-cycles.'),
 ],
 'cooling': [
  ('A 50 kW compressor puts how much heat into the room?', ['5 kW','About 50 kW','Nothing','500 kW'], 1, 'It is a 50 kW heater.'),
  ('Compressor condensate goes?', ['Down the drain','Through an oil-water separator; it is a regulated waste','On the floor','Into the receiver'], 1, 'Oily on lubricated units.'),
  ('The aftercooler outlet should be within about?', ['50°C of ambient','10°C of ambient','1°C of ambient','It does not matter'], 1, 'That is where the water drops out.'),
 ],
 'troubleshoot': [
  ('First thing to read on a compressor fault?', ['The oil','The controller fault log','The belts','The receiver gauge'], 1, 'The fault code is usually the diagnosis.'),
  ('Compressor loads, output is normal, plant pressure still low?', ['Airend','Leaks and demand: downstream','Oil','Cooler'], 1, 'Leak survey first.'),
 ],
 'safety': [
  ('The separator tank after shutdown?', ['Is at zero','Holds pressure; vent it and check its own gauge before opening','Is safe','Drains itself'], 1, 'The minimum pressure valve keeps it there.'),
  ('The controller stop button is an isolation. True or false?', ['True','False: the disconnect is; the controller restarts on pressure','True for screws','True if locked'], 1, 'A compressor starts by itself.'),
  ('The separator element grounding strap is?', ['Optional','A safety component: static ignition of oil mist has burned compressors','Decorative','For noise'], 1, 'Fit it every time.'),
 ],
}
