Q4 = {}
Q4['builtwright_conveyors_v1.html'] = {
 'overview': [
  ('What is done on a running conveyor?', ['Clearing jams','Looking, listening, and idler frame adjustments from outside the guard','Cleaning with a shovel','Replacing idlers'], 1, 'Hands never touch a moving belt.'),
  ('Where do tracking problems usually start?', ['Where the belt runs off','Upstream of where it runs off','At the drive','At the splice only'], 1, 'The belt carries the error to where you can see it.'),
 ],
 'anatomy': [
  ('Which conveyor bearing is the heaviest loaded?', ['Tail pulley','Head (drive) pulley','Return idler','Snub pulley'], 1, 'Drive load plus belt tension. Infrared on the PM.'),
  ('A seized idler does what to the belt?', ['Nothing','Skids, heats, grooves the bottom cover, steers the belt, and eventually cuts it','Improves tracking','Reduces tension'], 1, 'Walk and spin on every PM.'),
  ('What carries the load in a conveyor belt?', ['The top cover','The carcass','The bottom cover','The splice'], 1, 'Covers protect; the carcass is the tension member.'),
 ],
 'tracking': [
  ('To steer the belt away from one side, the idler end on that side is?', ['Moved backward','Advanced in the direction of belt travel','Raised','Removed'], 1, 'The belt moves away from the advanced end.'),
  ('Before adjusting idlers, what is checked?', ['Nothing','Structure, pulley squareness, buildup, seized idlers, loading, and the belt itself','Only tension','Only the head pulley'], 1, 'Idler adjustment is steering, not a cure.'),
  ('A screw take-up moved on one side only produces?', ['Correct tension','A skewed tail pulley and mistracking at the tail','Better grip','Nothing'], 1, 'Move both sides equally and record both readings.'),
  ('Idler adjustments start where?', ['At the head','At the tail, working in the direction of belt travel','In the middle','On the return side first'], 1, 'Fix upstream first.'),
 ],
 'tension': [
  ('Belt sag between carry idlers should be about?', ['Zero','1.5 to 3% of idler spacing','10%','Whatever it is'], 1, 'More spills and flexes; less is excess tension.'),
  ('A gravity take-up counterweight is?', ['Harmless with the motor off','Stored energy that must be blocked before belt work','Only a tensioner','A guard'], 1, 'A belt cut with the take-up live snaps back.'),
  ('A gravity take-up at the top of its travel means?', ['Perfect','The belt has stretched past its design; cut a section out or the setting was wrong','Too little belt','Nothing'], 1, 'Mark and date the position on the PM.'),
 ],
 'splices': [
  ('Strongest splice type?', ['Hinged mechanical','Plate mechanical','Hot vulcanised','Cold vulcanised'], 2, '85 to 100 percent of belt rating.'),
  ('A splice cut one degree off square?', ['Is fine','Mistracks the belt at every revolution and cannot be tracked out','Runs smoother','Lasts longer'], 1, 'Use a square and check the diagonals.'),
 ],
 'damage': [
  ('A belt that runs off at the same spot on itself every revolution has?', ['A structure problem','A belt fault at that spot: splice, camber, or damage','A drive problem','A loading problem'], 1, 'Mark it and find the spot locked out.'),
  ('Glazed bottom cover over the drive pulley width?', ['Normal','Slip at the drive','Product abrasion','Cupping'], 1, 'Lagging, tension, wrap, and a speed switch.'),
  ('Cover swollen and blistered?', ['Heat','Oil or chemical attack','Impact','Age'], 1, 'Wrong compound for the product.'),
 ],
 'troubleshoot': [
  ('Belt stops while the drive pulley keeps turning?', ['Overload trip','Drive slip','Control stop','Splice failure'], 1, 'A speed switch should have caught it.'),
  ('Carryback on the return side is fixed with?', ['More tension','Belt cleaners adjusted and with usable blade','A new belt','Faster speed'], 1, 'Primary and secondary cleaners at the head.'),
 ],
 'safety': [
  ('Clearing a jam is?', ['A quick reach','A lockout task','Fine with gloves','The operator\'s call'], 1, 'The reason people reach in is a management problem with a fatality attached.'),
  ('Before working on a belt with a gravity take-up?', ['Nothing extra','Block, pin, or chain the take-up carriage','Add weight','Remove the belt'], 1, 'The counterweight stays loaded with the motor off.'),
 ],
}
Q4['builtwright_root_cause_v1.html'] = {
 'overview': [
  ('Which level of cause, when fixed, stops the failure from returning?', ['Physical','Human','Latent (system)','None'], 2, 'Fix the physical cause and it fails again in six months.'),
  ('Which failures get a full root cause analysis?', ['All of them','Repeat, expensive, and safety failures','None','Only bearings'], 1, 'The rest get read and logged.'),
 ],
 'method': [
  ('The first step of the method?', ['Define the problem','Preserve the evidence','Ask why','Replace the part'], 1, 'Before anyone cleans or throws anything away.'),
  ('A corrective action without an owner and a date is?', ['Complete','A wish','Verified','A root cause'], 1, 'Every action gets a name and a date.'),
  ('The analysis is closed when?', ['The report is written','The evidence shows the failure stopped','The part is replaced','The meeting ends'], 1, 'Set a date, check, then close.'),
 ],
 'evidence': [
  ('A fracture face should be?', ['Wire brushed clean','Left uncleaned, and the halves never fitted back together','Degreased','Filed smooth'], 1, 'Rubbing the halves destroys the origin marks.'),
  ('What happens to a failed part that came off a machine?', ['Scrap bin','Boxed with the work order number and date, kept a month','Cleaned and returned to stores','Thrown out immediately'], 1, 'The shoebox is the cheapest reliability program in the plant.'),
 ],
 'reading': [
  ('Beach marks on a fracture face indicate?', ['Overload','Fatigue','Corrosion','Installation damage'], 1, 'Follow them back to the origin.'),
  ('A fine red powder at a bearing housing fit is?', ['Grease','Fretting: the fit was loose or the joint moved','Paint','Rust from water'], 1, 'The ring or hub was moving microscopically.'),
  ('Steel that has turned blue got to about?', ['100°C','300°C','600°C','It does not indicate temperature'], 1, 'Straw at about 200; blue at about 300.'),
  ('Dents in a bearing race at ball spacing were caused by?', ['Fatigue','A hammer or a press through the rolling elements','Corrosion','Overload in service'], 1, 'Installed into failure.'),
 ],
 'whys': [
  ('A why chain that ends at a person?', ['Is complete','Has not found the root cause','Names the operator','Is the standard'], 1, 'Ask what made that action normal.'),
  ('Each answer in a Five Whys must be?', ['An opinion','A fact you can check','A guess','Blame'], 1, '"Because the sheet gave no quantity" is on a piece of paper.'),
  ('The fishbone category for "no commissioning baseline existed"?', ['Machine','Measurement','Material','Environment'], 1, 'Instruments, readings, baselines, alarms.'),
 ],
 'traps': [
  ('"Bad bearing" as a root cause is?', ['Correct','A trap: bearings are installed, lubricated, and loaded into failing','Common and fine','A material cause'], 1, 'Read it.'),
  ('Vibration is a?', ['Cause','Symptom','Contributing factor','Root'], 1, 'Misalignment is a cause; a worn coupling absorbing it is a contributing factor.'),
 ],
 'examples': [
  ('In the seal example, the root cause was?', ['A bad seal','A pipe hanger removed during a modification with no change review, and no pipe strain step in the procedure','Misalignment','Operator error'], 1, 'The pump flange had become the pipe support.'),
  ('In the guard example, why was the guard off?', ['Laziness','The weekly tension check needed it off and it took twenty minutes to refit','It was broken','Nobody knows'], 1, 'Designed without regard to the PM task.'),
 ],
 'report': [
  ('The root cause on the report is written as?', ['A phrase like "lubrication issue"','A sentence a stranger could check','A part number','A name'], 1, 'If it cannot be written that way, it has not been found.'),
 ],
 'troubleshoot': [
  ('Second failure, the first part was just replaced without reading it. First action?', ['Replace again','Preserve and read this one before the new part goes in','Order two spares','Blame the supplier'], 1, 'A second failure without a mechanism is a coin flip on the third.'),
  ('Action taken, failure returned. Most likely?', ['Bad luck','The cause was a contributing factor, not the root, or there were two causes','The part is defective','The action was too slow'], 1, 'Reopen with the new evidence and test the alternatives.'),
 ],
 'safety': [
  ('A failed machine is?', ['Safe because it stopped','In an unknown state: isolate before evidence collection','Ready to restart for a test','Harmless'], 1, 'Never restart to see what happens.'),
 ],
}
