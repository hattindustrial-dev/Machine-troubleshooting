(window.BW_DATA=window.BW_DATA||{}).issues = [
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_motor_stopped",
    "cls": "action",
    "label": "mechanical check first, then electrical contact",
    "text": "Motor is not running. Start with what you can safely observe.",
    "prevent": "Motor amps and bearing condition logged on the PM. A motor that stops on overload has usually been drawing high current for weeks first.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_open_suction",
    "cls": "fix",
    "label": "simple fix",
    "text": "Open the suction valve fully.",
    "prevent": "Suction valve position on the startup checklist. Lock or tag valves that must stay open.",
    "primary": [
      "pump",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_open_discharge",
    "cls": "action",
    "label": "open discharge: use caution",
    "text": "Open the discharge valve carefully and verify flow develops.",
    "prevent": "Startup procedure written down: which valve opens when, and why a PD pump never starts against a closed discharge.",
    "primary": [
      "pump",
      "valve"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_reverse",
    "cls": "action",
    "label": "correct rotation: electrical contact required",
    "text": "Reverse rotation requires swapping two motor leads. This is electrical work.",
    "prevent": "Rotation verified on every motor change, wiring change, or VFD swap before the coupling goes on. Mark the correct direction on the casing.",
    "primary": [
      "pump"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_noflow5",
    "cls": "escalate",
    "label": "internal inspection likely needed",
    "text": "Power on, valves correct, rotation correct. Suspect internal pump fault.",
    "prevent": "Find what caused the internal failure: cavitation, dry run, foreign material, or wear. A rebuilt pump in the same conditions fails again.",
    "primary": [
      "pump"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_system_change",
    "cls": "action",
    "label": "review system change first",
    "text": "Investigate the change before assuming a pump fault.",
    "prevent": "Any process or piping change gets checked against the pump curve before it is commissioned. Log the operating point.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_strainer",
    "cls": "fix",
    "label": "clean suction strainer",
    "text": "Isolate and clean the suction strainer, then restore flow and verify performance.",
    "prevent": "Strainer cleaning interval on the PM, with a differential pressure gauge across it so the interval is data, not guesswork.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_lowflow3",
    "cls": "escalate",
    "label": "internal wear suspected",
    "text": "Low flow with clean strainer and correct system conditions points to internal wear.",
    "prevent": "Wear ring clearance measured and recorded at every overhaul. Trend flow against head at a fixed valve position to catch wear early.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_cavitation",
    "cls": "action",
    "label": "cavitation indicated",
    "text": "Crackling or gravel-like sound from within the casing is the classic cavitation signature.",
    "prevent": "NPSH margin checked on any suction-side change: level, temperature, strainer, piping. Suction pressure gauge on the PM route.",
    "primary": [
      "pump"
    ],
    "contributing": [
      "valve"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_bearing",
    "cls": "escalate",
    "label": "bearing inspection required",
    "text": "Grinding or rumbling from bearing housings indicates bearing damage or inadequate lubrication.",
    "prevent": "Grease quantity and interval on the PM. Alignment after any work. Read the failed bearing before ordering the next one.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_squeal",
    "cls": "action",
    "label": "check coupling element and packing",
    "text": "Squealing typically comes from a deteriorating coupling element, a dry bearing, or overtightened packing.",
    "prevent": "Coupling element and packing on the PM inspection list. Alignment readings recorded so a shift is visible.",
    "primary": [
      "alignment",
      "seal"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_motor_heat",
    "cls": "action",
    "label": "motor thermal issue: notify electrical contact",
    "text": "Observe what you can safely: cooling fan clear, burning smell, uniformly hot or one spot?",
    "prevent": "Motor cooling fins and shroud cleaned on the PM. Amps trended. Motors module for the mechanical checks before the handoff.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_bearing_heat",
    "cls": "action",
    "label": "check for overlubrication first",
    "text": "Hot bearing housings are often caused by too much grease, not too little.",
    "prevent": "Relief plug out during greasing. Quantity by formula. Ultrasonic-assisted greasing on critical pumps.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_fluid_heat",
    "cls": "action",
    "label": "check for deadheading or loss of flush",
    "text": "Fluid heating in the casing with no flow almost always means the pump is deadheading.",
    "prevent": "Minimum flow protection on centrifugal pumps that can be throttled. Flush plan flow verified on the PM.",
    "primary": [
      "pump",
      "seal"
    ],
    "contributing": [
      "valve"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_vibe",
    "cls": "action",
    "label": "vibration: systematic isolation approach",
    "text": "Start with the most common causes and work outward.",
    "prevent": "Baseline vibration reading after every rebuild and alignment. Monthly route with the same points. Vibration Fundamentals module.",
    "primary": [
      "alignment",
      "pump"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_mech_seal",
    "cls": "escalate",
    "label": "mechanical seal replacement required",
    "text": "A leaking mechanical seal will not self-correct. The faces are damaged.",
    "prevent": "Read the failed seal faces before installing the new one. Check shaft runout, flush plan, and alignment. Never run it dry, even briefly.",
    "primary": [
      "seal"
    ],
    "contributing": [
      "alignment",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "c_packing",
    "cls": "fix",
    "label": "adjust packing gland",
    "text": "Packing should weep 40 to 60 drops per minute. This is intentional, not a defect.",
    "prevent": "Packing leakage rate (40 to 60 drops per minute) on the PM sheet, so the gland is adjusted on data and not overtightened.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "interval_yes",
    "cls": "action",
    "label": "mechanical slip or contact: isolate by shaft",
    "text": "A consistent interval means something is happening once per revolution of a specific shaft.",
    "prevent": "Independent rotation check after any work on the drive train. Coupling and gearbox on the PM inspection.",
    "primary": [
      "alignment"
    ],
    "contributing": [
      "gearbox"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "interval_no",
    "cls": "action",
    "label": "inspect for debris or intermittent obstruction",
    "text": "Irregular jolts may indicate passing debris, an intermittent obstruction, or a loose component.",
    "prevent": "Suction strainer and any upstream screen on the PM. Look for the source of the debris, not just the debris.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_reverse",
    "cls": "action",
    "label": "check rotation: electrical contact required",
    "text": "Reverse rotation on a rotary PD pump reverses the flow direction. Suction and discharge sides swap.",
    "prevent": "Rotation verified before coupling on every motor or wiring change. PD pumps are less forgiving than centrifugal of a wrong-direction start.",
    "primary": [
      "pump"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_discharge_issue",
    "cls": "escalate",
    "label": "discharge blockage or relief valve fault",
    "text": "A blocked discharge on a PD pump is a safety emergency. A relief valve continuously lifting means it is doing its job but the cause must be found.",
    "prevent": "Relief valve tested and its setting recorded on the PM. Discharge valve interlocked or tagged so it cannot be closed with the pump running.",
    "primary": [
      "pump",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_gradual",
    "cls": "escalate",
    "label": "internal wear: clearances have grown",
    "text": "Gradual flow loss at constant speed in a rotary PD pump is the signature of increasing internal clearances from wear.",
    "prevent": "Clearances measured at overhaul and trended. Fluid cleanliness and viscosity against the pump specification.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_sudden",
    "cls": "escalate",
    "label": "inspect for foreign object or component failure",
    "text": "Sudden flow loss on a rotary PD pump that was running normally suggests a component failure or obstruction.",
    "prevent": "Strainer on the suction. Find the source of the foreign object. Check upstream equipment for missing parts.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_grinding",
    "cls": "escalate",
    "label": "internal contact: shutdown and inspect",
    "text": "Metallic grinding or knocking in a rotary PD pump indicates contact between rotating and stationary components.",
    "prevent": "Fluid lubricity and viscosity against the pump rating. Never run a PD pump dry. Suction conditions verified.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_squeal",
    "cls": "action",
    "label": "check shaft seals and bearing lubrication",
    "text": "Squealing on a rotary PD pump is often a shaft seal or a dry bearing.",
    "prevent": "Seal and bearing lubrication on the PM. Alignment recorded.",
    "primary": [
      "bearing",
      "seal"
    ],
    "contributing": [
      "lube",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_cavitation",
    "cls": "action",
    "label": "suction condition issue",
    "text": "Cavitation is possible in rotary PD pumps, though less common than in centrifugal pumps.",
    "prevent": "Suction line sizing and NPSH margin reviewed. Viscosity at the actual fluid temperature against the pump limit.",
    "primary": [
      "pump"
    ],
    "contributing": [
      "valve"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_heat1",
    "cls": "action",
    "label": "check fluid lubrication and internal clearances",
    "text": "Overheating in a rotary PD pump usually means inadequate fluid lubrication of internal surfaces or excessive bypass due to worn clearances.",
    "prevent": "Fluid temperature and viscosity logged. Internal clearances measured at overhaul.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_relief",
    "cls": "action",
    "label": "investigate cause before adjusting relief valve",
    "text": "A relief valve that lifts frequently is telling you that system pressure is regularly reaching the set point.",
    "prevent": "Relief valve setting recorded and locked. Any change to the discharge system reviewed against the relief setting first.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdr_seal",
    "cls": "action",
    "label": "inspect seal type and condition",
    "text": "Seal leakage on a rotary PD pump follows similar principles to centrifugal pumps but with some differences.",
    "prevent": "Seal type matched to the fluid and pressure. Read every failed seal.",
    "primary": [
      "seal"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_checkvalve",
    "cls": "escalate",
    "label": "check valve failure suspected",
    "text": "A pump that strokes but produces no flow almost always has a check valve problem.",
    "prevent": "Check valves inspected on the PM interval. Fluid filtration to keep debris off the seats.",
    "primary": [
      "pump",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_nostroke",
    "cls": "escalate",
    "label": "mechanical drive issue",
    "text": "A reciprocating pump that is not stroking has a mechanical drive failure.",
    "prevent": "Drive train inspection on the PM: coupling, crank, crosshead. Lubrication schedule for the power end.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_pulsation",
    "cls": "action",
    "label": "check pulsation dampener and check valves",
    "text": "Worse than normal pulsation on a reciprocating pump usually means a failed pulsation dampener or a leaking check valve.",
    "prevent": "Dampener precharge checked and recorded on the PM. Check valves on a replacement interval.",
    "primary": [
      "pump",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_knock",
    "cls": "action",
    "label": "inspect check valves, crosshead, and crankshaft bearings",
    "text": "Knocking in a reciprocating pump is often a loose or failed check valve, a worn crosshead, or a worn crankshaft bearing.",
    "prevent": "Power end oil analysis. Check valve inspection interval. Crosshead and crank bearing clearances at overhaul.",
    "primary": [
      "bearing",
      "pump",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_packing",
    "cls": "action",
    "label": "inspect packing and plunger condition",
    "text": "Packing leakage on a high-pressure reciprocating pump is a safety concern, not just a maintenance item.",
    "prevent": "Plunger surface inspected at every packing change. Packing lubrication maintained. Gland adjusted on leak rate, not feel.",
    "primary": [
      "pump",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pumps",
    "moduleName": "Pump Systems",
    "num": "01",
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "id": "pdrec_diaphragm",
    "cls": "escalate",
    "label": "diaphragm failure: shutdown immediately",
    "text": "A failed diaphragm is not an operational condition. Shut down immediately.",
    "prevent": "Diaphragm on a replacement interval based on cycles, not calendar. Leak detection between diaphragms if the pump has it.",
    "primary": [
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_squeal_clears",
    "cls": "action",
    "label": "likely overgreasing or cold grease",
    "text": "A squeal that clears on warm-up is usually excess grease being displaced or cold grease reaching operating consistency.",
    "prevent": "Grease quantity by formula, interval by the manufacturer chart for speed and temperature. Grease grade suited to the cold start temperature.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_squeal_persists",
    "cls": "escalate",
    "label": "race or rolling element damage",
    "text": "A persistent squeal at operating temperature indicates damaged or dry contact between rolling elements and races.",
    "prevent": "Read the failed bearing: starvation, contamination, or load. Fix that before the new bearing goes in.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_rumble_new",
    "cls": "action",
    "label": "contamination during maintenance likely",
    "text": "Rumbling in a recently serviced or new bearing strongly suggests contamination introduced during installation or regreasing.",
    "prevent": "Clean installation: bearing stays sealed until it goes on, heated by induction or oil bath, pressed by the correct race, housing cleaned. Never through the rolling elements.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_rumble_old",
    "cls": "escalate",
    "label": "wear or spalling: plan replacement",
    "text": "Rumbling in a bearing that has been running normally indicates fatigue wear or spalling of the races or rolling elements.",
    "prevent": "Vibration and temperature trended so replacement is planned. Envelope readings catch the next one at stage 1.",
    "primary": [
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_click",
    "cls": "action",
    "label": "inspect for brinelling or race damage",
    "text": "Rhythmic clicking or knocking that occurs at a consistent interval tied to shaft rotation points to a discrete defect on a race or rolling element.",
    "prevent": "Hubs installed with heat or a puller, never a hammer. Stored spares rotated periodically. Machines shipped with shafts locked.",
    "primary": [
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_heat_postpm",
    "cls": "fix",
    "label": "overgreasing: purge and monitor",
    "text": "Heat after regreasing is the classic overgreasing signature.",
    "prevent": "Relief plug out during greasing. Quantity by G = 0.005 × D × B. Ultrasonic-assisted greasing on critical machines.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_heat_noise",
    "cls": "escalate",
    "label": "bearing failure in progress: plan immediate replacement",
    "text": "Heat combined with increased noise indicates active bearing damage. The failure is progressing.",
    "prevent": "Whatever the failed bearing shows. Alignment, grease quantity, contamination, or a load it was not designed for.",
    "primary": [
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_heat_only",
    "cls": "action",
    "label": "check lubrication and alignment",
    "text": "Heat without significant noise is often an early-stage lubrication or misalignment issue.",
    "prevent": "Alignment after any work, with soft foot corrected. Fixing ring on the drive side only. Grease quantity by formula.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_vibe_new",
    "cls": "escalate",
    "label": "investigate immediately: bearing or alignment",
    "text": "A recent increase in vibration is a significant indicator. Do not normalize it.",
    "prevent": "Baseline reading after every rebuild. Alignment readings recorded. Route readings monthly.",
    "primary": [
      "alignment",
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "re_vibe_old",
    "cls": "info",
    "label": "establish baseline and monitor",
    "text": "Steady-state vibration that has always been present may be acceptable for the machine design, or it may indicate a long-standing alignment or balance issue that has not yet caused a failure.",
    "prevent": "Baseline established and trended. Route with the same points. Vibration Fundamentals module.",
    "primary": [],
    "contributing": [
      "alignment",
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "sj_no_oil",
    "cls": "escalate",
    "label": "shutdown immediately: oil starvation",
    "text": "A journal bearing without adequate oil supply will fail within seconds to minutes under load.",
    "prevent": "Oil pressure low alarm and trip on every pressure-fed sleeve bearing machine. Oil level and ring pickup on the PM for splash systems.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "sj_heat_with_oil",
    "cls": "action",
    "label": "check oil viscosity, clearance, and load",
    "text": "Heat with adequate oil supply points to a film breakdown issue rather than starvation.",
    "prevent": "Oil grade against the bearing specification. Clearance measured at overhaul. Load path checked: alignment and pipe strain.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "sj_oil1",
    "cls": "escalate",
    "label": "investigate oil system before continuing operation",
    "text": "An oil pressure drop is an emergency condition for a journal bearing system.",
    "prevent": "Oil system on the PM: filter, cooler, pump, pressure, level. Oil analysis on the interval.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "sj_vibe1",
    "cls": "action",
    "label": "oil whirl or whip: check clearance and oil supply",
    "text": "Vibration or instability in a journal bearing is often caused by oil whirl, a condition where the oil film drives the shaft into a self-sustaining orbit.",
    "prevent": "Clearance and oil viscosity within specification. Alignment keeps the load where the bearing needs it.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "bearing",
    "moduleName": "Bearing Failure",
    "num": "02",
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "id": "sj_metal",
    "cls": "escalate",
    "label": "bearing surface damage: shutdown and inspect",
    "text": "Metal particles in the oil from a journal bearing system mean the bearing surface is being physically removed.",
    "prevent": "Oil analysis trended. Clearance and alignment at overhaul. Find why the film failed before the new bearing goes in.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_validity",
    "cls": "action",
    "label": "invalid readings: sag, looseness, or float",
    "text": "Rim readings that do not sum are being corrupted by the setup.",
    "prevent": "Sag measured on the bar before every job; validity check on every set of readings before a shim is cut.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_softfoot",
    "cls": "fix",
    "label": "soft foot",
    "text": "A frame that twists when it is bolted down changes the alignment with every torque.",
    "prevent": "Soft foot on both machines before every alignment. No exceptions.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_pipestrain",
    "cls": "action",
    "label": "pipe strain",
    "text": "The piping moves the machine when it is connected. It cannot be aligned out.",
    "prevent": "Pipe strain check recorded on every installation and after any piping work.",
    "primary": [
      "alignment"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_math",
    "cls": "fix",
    "label": "correction arithmetic or sign convention",
    "text": "Valid readings, no soft foot, no strain, and the correction still misses: the arithmetic or the sign is wrong.",
    "prevent": "Sign convention and dimensions written on the job sheet before the first reading.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_repeat",
    "cls": "action",
    "label": "readings not repeating",
    "text": "Two sets of readings that disagree mean the setup or the shaft is moving.",
    "prevent": "Repeat the readings until two sets agree before any correction.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_thermal",
    "cls": "action",
    "label": "thermal growth",
    "text": "Aligned cold, misaligned hot. The machine grew.",
    "prevent": "Thermal offsets recorded with the alignment on any machine that runs warm.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_base",
    "cls": "action",
    "label": "base or foundation moving",
    "text": "An alignment that held and then drifted is a base that moved: grout, anchors, voids, or settlement.",
    "prevent": "Commissioning level and alignment record to compare against; anchor torque rechecked.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_element",
    "cls": "action",
    "label": "coupling absorbing misalignment",
    "text": "A coupling element that wears out early has been doing the alignment's job.",
    "prevent": "Alignment readings recorded so a shift is visible; coupling inspection on the PM.",
    "primary": [
      "alignment"
    ],
    "contributing": [
      "bearing",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_holes",
    "cls": "fix",
    "label": "no lateral clearance",
    "text": "The bolts are hard against the sides of the foot holes.",
    "prevent": "Hole clearance checked before the base is grouted.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "alignment",
    "moduleName": "Couplings and Alignment",
    "num": "03",
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "id": "r_shimroom",
    "cls": "fix",
    "label": "wrong starting shim allowance",
    "text": "One machine sits too high or too low for the shim range.",
    "prevent": "Shaft heights checked against the base design before grout.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_heat",
    "cls": "action",
    "label": "thermal damage: dry running or lost flush",
    "text": "The faces ran without a liquid film.",
    "prevent": "Flush flow verified on the PM; vent and prime on the startup procedure; minimum flow protection.",
    "primary": [
      "seal"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_runout",
    "cls": "action",
    "label": "shaft runout, misalignment, or pipe strain",
    "text": "The shaft is describing an arc through the seal.",
    "prevent": "Runout, alignment, and pipe strain checked before every seal installation and recorded.",
    "primary": [
      "alignment",
      "seal"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_abrasive",
    "cls": "action",
    "label": "abrasive or contaminated process fluid",
    "text": "Solids in the seal chamber are grinding the faces.",
    "prevent": "Seal plan selected for the fluid, and the flush maintained.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_install",
    "cls": "fix",
    "label": "installation damage",
    "text": "The seal was damaged going in.",
    "prevent": "Installation procedure followed with the seal in its packaging until the last moment.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_chem",
    "cls": "action",
    "label": "chemical or temperature incompatibility",
    "text": "The elastomers or the faces were wrong for the fluid or the temperature.",
    "prevent": "Seal materials on the equipment record with every fluid the seal sees.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_ms_secondary",
    "cls": "action",
    "label": "secondary seal or sleeve leakage",
    "text": "The faces are sealing; the o-rings, the sleeve, or the gland gasket are not.",
    "prevent": "Shaft and sleeve inspected under the o-ring positions; keyways covered on assembly.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_fl_torque",
    "cls": "fix",
    "label": "bolt torque",
    "text": "Extruded outward is under-torque; crushed and pushed inward is over-torque.",
    "prevent": "Torque and pattern on the flange procedure; calibrated wrench.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_fl_wrong",
    "cls": "action",
    "label": "wrong gasket for the service, or reused",
    "text": "A gasket that blew out was not rated for the pressure and temperature, or it had been used before.",
    "prevent": "Gasket specification on the piping line list; gaskets issued by spec, not by size alone.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_fl_thermal",
    "cls": "action",
    "label": "thermal cycling and bolt relaxation",
    "text": "The joint moves as it heats and cools, and the bolts relax.",
    "prevent": "Re-torque after the first thermal cycle on joints that run hot, recorded.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_fl_face",
    "cls": "fix",
    "label": "flange face condition",
    "text": "A leak at one spot is a defect at that spot: a scratch across the face, a low spot, corrosion, or old gasket residue.",
    "prevent": "Face inspection on every joint before the gasket goes in; faces protected when open.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_oring",
    "cls": "action",
    "label": "o-ring failure: read the shape",
    "text": "The damage tells you what happened.",
    "prevent": "Chamfers on bores, lubricant on the o-ring (compatible with the fluid), material against the fluid, and a replacement interval on hot service.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_packing",
    "cls": "fix",
    "label": "packing adjustment or condition",
    "text": "Packing is meant to leak 40 to 60 drops per minute. Too much is worn packing or a scored sleeve; a hot gland with no leakage is over-tightened.",
    "prevent": "Leakage rate on the PM sheet; sleeve inspected at every repack.",
    "primary": [
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "seals",
    "moduleName": "Seals and Gaskets",
    "num": "04",
    "file": "builtwright_seals_gaskets_v1.html",
    "tab": "troubleshoot",
    "id": "r_lip",
    "cls": "action",
    "label": "lip seal",
    "text": "A lip seal leaks from a worn or grooved shaft, a nicked lip, a hardened lip, a blocked breather pressurising the housing, or overfill.",
    "prevent": "Breather and level on the PM; wear sleeve on any grooved shaft; lip lubricated and keyway covered on install.",
    "primary": [
      "seal"
    ],
    "contributing": [
      "gearbox"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "overgrease",
    "cls": "action",
    "label": "overgreasing: purge and monitor",
    "text": "Heat appearing within an hour of regreasing is the classic overgreasing signature.",
    "prevent": "Relief plug out during greasing. Quantity by formula on the PM sheet. Ultrasonic monitoring on critical points.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "hot_before",
    "cls": "escalate",
    "label": "investigate root cause: lubrication not the only factor",
    "text": "A bearing that was already hot before relubrication has a problem that lubrication alone will not fix.",
    "prevent": "Alignment, load, and bearing condition on the PM. Temperature trended so a rise is caught before a PM masks it.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "wrong_lube_type",
    "cls": "escalate",
    "label": "wrong lubricant: drain and refill",
    "text": "A change in lubricant type, grade, or brand can cause immediate performance changes.",
    "prevent": "One product per application, labelled at the fill point and on the grease gun. Colour-coded dispensing. Incompatibility chart posted in the lube room.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "oil_level_check",
    "cls": "action",
    "label": "check oil level and cooler function",
    "text": "Same lubricant, heat after a change: check level and heat removal.",
    "prevent": "Level checked stopped and settled, on the PM. Cooler delta T logged.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "grease_purge",
    "cls": "action",
    "label": "overgreasing or seal failure",
    "text": "Grease purging from housing seals is either overgreasing (excess grease finding its way out) or a failed housing seal.",
    "prevent": "Quantity by formula. Seal condition inspected when purge is heavier than usual.",
    "primary": [
      "lube",
      "seal"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "oil_leak",
    "cls": "action",
    "label": "identify leak source: seal, joint, or breather",
    "text": "Oil leaking from an enclosed system needs a source identified before it becomes a serious loss.",
    "prevent": "Breather condition on the PM. Level marks visible. Fix the leak, not just the level.",
    "primary": [
      "seal"
    ],
    "contributing": [
      "gearbox",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "central_leak",
    "cls": "action",
    "label": "inspect fittings and line connections",
    "text": "Grease leaks in centralized system lines are almost always at fittings, injectors, or line terminations.",
    "prevent": "Fittings and lines on the PM walk. Line routing protected from traffic and vibration.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "milky_oil",
    "cls": "escalate",
    "label": "water contamination: change oil and find source",
    "text": "Milky or cloudy oil has water emulsified through it. The lubricant film is severely compromised.",
    "prevent": "Desiccant breather. Cooler pressure tested. Water content on the oil analysis.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "bearing",
      "gearbox",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "dark_oil",
    "cls": "action",
    "label": "oxidation or contamination: sample and analyse",
    "text": "Dark oil indicates oxidation, contamination, or both.",
    "prevent": "Operating temperature trended. Oil changed on analysis rather than on the calendar, and never later than the manufacturer interval.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "foamy_oil",
    "cls": "action",
    "label": "air ingestion or incorrect oil",
    "text": "Foamy oil in a reservoir or gearbox has an air ingestion problem or the wrong oil.",
    "prevent": "Suction side sealed. Return below the surface. Correct oil grade on every top-up.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "gearbox",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "varnish",
    "cls": "escalate",
    "label": "oxidation deposits: flush and investigate root cause",
    "text": "Varnish and sludge deposits indicate the oil has been operating beyond its service life or at excessive temperature.",
    "prevent": "Operating temperature brought down. Oil condition on analysis. Consider a varnish-resistant synthetic if the duty cannot change.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "hydraulics"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "prog_no_flow",
    "cls": "action",
    "label": "find the blockage: check cycle indicator first",
    "text": "On a progressive system, a single blocked injector or line stops all downstream points from receiving lubricant.",
    "prevent": "Cycle indicator on the PM route. Filter on the reservoir fill. Line routing protected.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "dual_no_flow",
    "cls": "action",
    "label": "identify which injectors are not cycling",
    "text": "On a dual-line system each injector is independent, so identify which specific points are not receiving grease.",
    "prevent": "Injector cycling checked on the PM. Reservoir kept clean and filtered.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "recirc_no_flow",
    "cls": "escalate",
    "label": "check pump, filter, and pressure",
    "text": "A recirculating oil system with no flow has a pump failure, severe filter blockage, or a major line failure.",
    "prevent": "Pressure, filter differential, and pump condition on the PM. Low pressure alarm and trip.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "bf_overheat",
    "cls": "escalate",
    "label": "thermal failure: insufficient lubrication or overgreasing",
    "text": "Overheated bearings show blue or brown heat discolouration of the races and rolling elements.",
    "prevent": "Grease quantity and interval on the PM. Read the failed bearing to confirm which.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "bf_abrasive",
    "cls": "action",
    "label": "contamination: improve sealing and filtration",
    "text": "Dull, scratched, or grooved races and rolling elements indicate abrasive particle contamination.",
    "prevent": "Sealing upgraded for the environment. Grease and oil filtered at the point of use. Particle count on analysis.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "bf_corrosion",
    "cls": "action",
    "label": "water ingress: improve sealing and check lubricant",
    "text": "Rust pitting on bearing races indicates water contamination of the lubricant.",
    "prevent": "Desiccant breather. Sealing suited to wash-down. Water content on analysis.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "bf_smear",
    "cls": "action",
    "label": "inadequate film at startup or low speed: review lubricant selection",
    "text": "Smearing (smooth polished flat spots) on rolling elements indicates metal-to-metal contact during low-speed or startup conditions where the lubricant film had not fully formed.",
    "prevent": "Lubricant viscosity and grade suited to the startup temperature and speed. Preload correct on lightly loaded bearings.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "oa_particles",
    "cls": "action",
    "label": "contamination ingression: identify source and filter",
    "text": "A high particle count means contamination is entering faster than the filtration can remove it, or the filtration is not working.",
    "prevent": "Breathers, seals, and fill practices reviewed. Filter carts for top-ups. Target cleanliness code set and trended.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "oa_wear",
    "cls": "escalate",
    "label": "elevated wear: investigate component condition",
    "text": "Rising wear metals indicate accelerated wear of specific components. Identify which component based on the element.",
    "prevent": "Sample interval shortened on the affected machine. Ferrography to identify the wear mechanism. Component inspection planned.",
    "primary": [
      "lube"
    ],
    "contributing": [
      "bearing",
      "gearbox"
    ],
    "tagged": true
  },
  {
    "module": "lube",
    "moduleName": "Lubrication Systems",
    "num": "05",
    "file": "builtwright_lubrication_v1.html",
    "tab": "troubleshoot",
    "id": "oa_condition",
    "cls": "action",
    "label": "oil degradation: plan change interval and investigate cause",
    "text": "Rising TAN or viscosity change indicates the oil is degrading faster than expected.",
    "prevent": "Change interval reset from the analysis. Operating temperature reviewed if oxidation is early.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "comp_no_start",
    "cls": "action",
    "label": "compressor motor or control fault",
    "text": "Compressor motor not starting: check the electrical supply and control circuit before assuming a mechanical fault.",
    "prevent": "Overload trip logged and cause found before reset. Pressure switch settings recorded.",
    "primary": [
      "compressor",
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "comp_no_pressure",
    "cls": "action",
    "label": "compressor runs but cannot build pressure",
    "text": "A compressor that runs but cannot build pressure in the receiver has either a major leak pulling pressure out as fast as it is produced, or an internal compressor fault reducing output capacity.",
    "prevent": "Compressor valve plates and rings on the manufacturer interval. Relief valve tested on the PM.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "pneu"
    ],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "comp_short_cycle",
    "cls": "action",
    "label": "compressor short-cycling: undersized system or significant leak",
    "text": "A compressor that cycles too frequently (cuts in and out rapidly) is either undersized for the demand, has a leak consuming air as fast as it is produced, or has an incorrectly set pressure switch differential.",
    "prevent": "Leak survey quarterly. Pressure switch differential recorded. Receiver sized for the actual demand.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "pneu"
    ],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "supply_fault",
    "cls": "action",
    "label": "distribution or isolation issue",
    "text": "Compressor running and receiver pressurised but no pressure at point of use.",
    "prevent": "Isolation valves tagged. FRL filter differential on the PM.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "blocked_line",
    "cls": "action",
    "label": "blocked line or fitting",
    "text": "Air is leaving the valve but not reaching the actuator port.",
    "prevent": "Tubing routed and clamped away from crush and kink. Push-in fittings inserted to the stop. Flow control settings recorded.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "actuator_fault",
    "cls": "escalate",
    "label": "actuator internal fault",
    "text": "Supply pressure correct, valve shifting, air reaching actuator: fault is internal to the actuator.",
    "prevent": "Air quality: dry, filtered, correct lubrication. Rod alignment and side load checked at installation.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "low_pressure_cause",
    "cls": "action",
    "label": "low supply pressure",
    "text": "Low pressure at point of use with the compressor running usually means demand exceeds supply or a distribution issue.",
    "prevent": "Leak survey. Pressure logged at the point of use during the full cycle. Distribution sized for added machines.",
    "primary": [
      "pneu"
    ],
    "contributing": [
      "compressor"
    ],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "slow_one_dir",
    "cls": "fix",
    "label": "check flow control on that direction exhaust",
    "text": "One-direction slowness points to an over-restricted exhaust or blocked flow control on the slow stroke.",
    "prevent": "Flow control settings recorded on the drawing. Exhaust silencers on the PM.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "slow_both",
    "cls": "action",
    "label": "check supply restriction and actuator condition",
    "text": "Slow in both directions with correct pressure suggests inadequate flow or internal actuator friction.",
    "prevent": "Valve Cv and tubing bore checked against the cylinder volume and cycle rate at design. Air quality maintained.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "slow_drift",
    "cls": "action",
    "label": "internal leakage: valve spool or cylinder seal",
    "text": "Slow gradual drift indicates air leaking past a valve spool or cylinder piston seal.",
    "prevent": "Air quality. Valve and cylinder seals on condition. Load holding valve added where drift is unacceptable.",
    "primary": [
      "pneu"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "directed_drift",
    "cls": "action",
    "label": "valve position or pilot signal fault",
    "text": "Movement to a specific position suggests the valve is shifting to one position without a command signal.",
    "prevent": "Solenoid signals verified after any control change. Pilot lines checked on the PM.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "fitting_leak",
    "cls": "fix",
    "label": "fitting or connection issue",
    "text": "Air leaks at fittings are very common and usually straightforward to resolve.",
    "prevent": "Push-in tubes cut square and inserted to the stop. Fittings replaced on collet wear. Ultrasonic leak survey quarterly.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "valve_exhaust_leak",
    "cls": "action",
    "label": "valve spool leakage or incorrect valve position",
    "text": "Continuous air from a valve exhaust when the actuator should be stationary indicates internal valve leakage or incorrect valve state.",
    "prevent": "Air quality to keep the spool clean. Control signals verified.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "rod_seal_leak",
    "cls": "escalate",
    "label": "rod seal replacement required",
    "text": "Air leaking around the cylinder rod indicates the rod seal is worn or damaged.",
    "prevent": "Rod protection and alignment. Guided cylinder where the load applies a moment.",
    "primary": [
      "pneu",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "leak_find",
    "cls": "action",
    "label": "use ultrasonic detector or soapy water to locate",
    "text": "A leak not located by listening alone requires a systematic search method.",
    "prevent": "Ultrasonic leak survey on a schedule. Leaks tagged and repaired, not just found.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "no_voltage",
    "cls": "action",
    "label": "electrical fault upstream of solenoid",
    "text": "Voltage absent at the solenoid coil means the control signal is not reaching the valve.",
    "prevent": "Connector seals and cable strain relief on the PM. Fuses and interlocks documented.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "stuck_spool",
    "cls": "action",
    "label": "contaminated or stuck valve spool",
    "text": "A humming solenoid that cannot fully attract means the valve spool is stuck and the magnetic plunger cannot fully seat.",
    "prevent": "Dryer dewpoint and FRL filter on the PM. Auto drains cycling.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "pilot_fault",
    "cls": "action",
    "label": "pilot pressure fault or failed solenoid plunger",
    "text": "Solenoid energised and drawing current but the main valve spool is not shifting. On a pilot-operated valve this means insufficient pilot pressure.",
    "prevent": "Pilot pressure verified at the regulator under load. Pilot lines on the PM.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "sensor_power",
    "cls": "action",
    "label": "sensor wiring or power fault",
    "text": "Sensor not powered, check the wiring before assuming the sensor has failed.",
    "prevent": "Sensor cables routed and clamped clear of the load. Connectors sealed.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "sensor_position",
    "cls": "action",
    "label": "sensor position or detection range issue",
    "text": "Sensor is powered but not detecting at the cylinder end position: most likely a positioning or magnet/target issue.",
    "prevent": "Sensor positions marked after setup. Clamp screws torqued.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "sensor4",
    "cls": "action",
    "label": "sensor signal not reaching PLC input, wiring or input card fault",
    "text": "Sensor detects (LED on) but the machine does not advance, the signal is not getting to the control system.",
    "prevent": "I/O documentation kept current. Input card fuses in stock.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "sensor_short",
    "cls": "action",
    "label": "cylinder not reaching detection point: pneumatic or mechanical cause",
    "text": "If the cylinder is not physically reaching the sensor detection point, the problem is pneumatic or mechanical, not a sensor fault.",
    "prevent": "Cushion and flow control settings recorded. Cycle timer set with margin for a cold system.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "overtravel_never_set",
    "cls": "fix",
    "label": "cushion adjustment required",
    "text": "End-of-stroke impact on a cylinder that has never been adjusted means the cushion needles were never set correctly.",
    "prevent": "Cushion adjustment on the commissioning checklist and after any cylinder change.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "overtravel_speed",
    "cls": "fix",
    "label": "re-adjust cushion for new speed",
    "text": "Increased cycle speed changes the kinetic energy the cushion must absorb. The previous cushion setting is no longer correct.",
    "prevent": "Any speed change followed by a cushion recheck. Shock absorber where the cushion cannot cope.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "overtravel_new_cyl",
    "cls": "fix",
    "label": "set cushions on the new cylinder: factory setting is nominal only",
    "text": "Replacement cylinders are shipped with cushion needles at a nominal (often fully open) factory setting that is not tuned for the application.",
    "prevent": "Cushion setting on the cylinder replacement procedure.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "overtravel_wear",
    "cls": "action",
    "label": "cushion seal wear or contaminated cushion orifice",
    "text": "Cushioning that has degraded on a machine where nothing obvious changed usually indicates a worn cushion seal or a blocked cushion orifice.",
    "prevent": "Air quality. Cushion seals in the repair kit.",
    "primary": [
      "pneu"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "erratic1",
    "cls": "action",
    "label": "check air supply consistency and signal logic",
    "text": "Erratic or inconsistent pneumatic cycles have three primary causes: inconsistent air supply pressure, inconsistent control signals, or intermittent mechanical faults.",
    "prevent": "Pressure logged through the cycle. Flow control locknuts tightened and settings recorded. Sensor positions marked.",
    "primary": [
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "pneu",
    "moduleName": "Pneumatics",
    "num": "06",
    "file": "builtwright_pneumatics_v1.html",
    "tab": "troubleshoot",
    "id": "water1",
    "cls": "action",
    "label": "moisture in system: dryer and drain maintenance required",
    "text": "Water or ice in a pneumatic system indicates the dryer is undersized, failed, or automatic drains are not functioning.",
    "prevent": "Dryer dewpoint on the PM. Auto drains checked to cycle. Desiccant dryer where the system sees freezing temperatures.",
    "primary": [
      "pneu"
    ],
    "contributing": [
      "compressor"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_pump_off",
    "cls": "action",
    "label": "motor, coupling, or drive",
    "text": "No pump, no flow.",
    "prevent": "Add pump coupling inspection to the PM. Log motor amps at each PM; rising amps show a pump beginning to seize.",
    "primary": [
      "alignment",
      "motor"
    ],
    "contributing": [
      "hydraulics",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_level_low",
    "cls": "action",
    "label": "low reservoir level",
    "text": "The suction is uncovered or nearly so. The pump is cavitating or has lost prime.",
    "prevent": "Fit a low level switch that stops the pump. Check level with all cylinders extended when setting the minimum mark.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_spool_stuck",
    "cls": "action",
    "label": "spool stuck: contamination or varnish",
    "text": "The spool will not move even by hand. It is seized on particles, varnish, or a burr.",
    "prevent": "Particle count the oil. Fit a desiccant breather and upgrade return filtration to hold the target code. Varnish means the oil is oxidised: it is running too hot or is past its life.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_electrical",
    "cls": "fix",
    "label": "electrical: coil, connector, or signal",
    "text": "Spool moves freely on the manual override. The valve is fine. The signal is not reaching it or the coil is dead.",
    "prevent": "Use DC coils where possible. Check connector seals and cable strain relief on the PM; most coil failures are water in the connector.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_between",
    "cls": "action",
    "label": "restriction or bypass between DCV and actuator",
    "text": "Pressure is correct at the pump and low at the actuator. Something between them is dumping or blocking.",
    "prevent": "Record flow control and counterbalance settings on the drawing. Vibration drifts them; a recorded setting is a five-minute fix.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_bypass",
    "cls": "escalate",
    "label": "internal leakage: piston seal or motor wear",
    "text": "Pressure is going straight past the piston seal (or through the motor internals) to the other port and back to tank. Full pressure, no motion, heat.",
    "prevent": "Oil analysis after the rebuild to catch wear early. Check cylinder alignment and mounting. If the seals hardened from heat, fix the heat.",
    "primary": [
      "hydraulics",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_overloaded",
    "cls": "action",
    "label": "load exceeds available force",
    "text": "The actuator is sound. The load is more than it can move at the available pressure.",
    "prevent": "Log the relief setting. Check for load changes after any process change.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_mechanical",
    "cls": "action",
    "label": "mechanical bind or wrong load holding valve",
    "text": "Full pressure, no heat, no motion, even unloaded. The actuator is physically prevented from moving, or a load holding valve is not releasing.",
    "prevent": "Confirm pilot lines are connected and unrestricted after any valve work. Cylinder alignment on installation.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_design",
    "cls": "escalate",
    "label": "circuit design: pump lives on the relief",
    "text": "A fixed displacement pump into a closed centre valve has nowhere to go but the relief whenever the actuators are stopped. All the pump power becomes heat.",
    "prevent": "Review the drawing on any system that runs hot from new. The problem is on paper.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_compensator",
    "cls": "fix",
    "label": "relief set below the compensator",
    "text": "The pump never destrokes because the relief opens first. Full flow over the relief, all day.",
    "prevent": "Record both settings on the drawing and on a tag at the pump. Adjusters get locked.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_unload",
    "cls": "action",
    "label": "unloading valve not unloading",
    "text": "The circuit should unload the pump at rest and is not.",
    "prevent": "Check unloading function on the PM: at idle, the pressure gauge should read low. If it reads relief pressure at idle, the unload has failed.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_actuator",
    "cls": "action",
    "label": "actuator internal leakage",
    "text": "One actuator is bypassing internally. The leakage across the piston or through the motor is heat.",
    "prevent": "Trend actuator temperatures on the PM with an infrared gun. A cylinder warming up over months is a seal wearing.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_pump",
    "cls": "escalate",
    "label": "pump wear",
    "text": "A pump case running hot is a pump leaking internally. Case drain flow test confirms it.",
    "prevent": "Case drain flow test on the PM. Oil analysis for iron and chrome. Fix inlet conditions if cavitation was the cause.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_cooler",
    "cls": "fix",
    "label": "cooler not removing heat",
    "text": "The cooler is fouled, bypassed, or its cooling medium is not flowing.",
    "prevent": "Cooler cleaning on the PM. Delta T across the cooler logged at each PM; a falling delta T is fouling.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_system",
    "cls": "action",
    "label": "system-wide: viscosity, level, or ambient",
    "text": "No single hot spot. The whole system is running above its design temperature.",
    "prevent": "Confirm oil grade on every top-up. Reservoir level at the correct mark. Consider an offline cooler if the duty has permanently increased.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_cavitation",
    "cls": "action",
    "label": "cavitation: inlet starvation",
    "text": "The pump cannot fill. Vapour forms at the inlet and collapses at the outlet, eroding the pump.",
    "prevent": "Clean the suction strainer on the PM. Reservoir heater for cold starts. Never fit a fine filter on the suction.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_aeration",
    "cls": "action",
    "label": "aeration: air entering the suction side",
    "text": "Air is getting into the oil before the pump. Compressible air makes the pump rattle and the actuators spongy.",
    "prevent": "Suction fittings torqued and sealed. Return line extended below the surface. Level maintained. Anti-foam additive is a symptom fix.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_pump_damage",
    "cls": "escalate",
    "label": "internal pump damage",
    "text": "Knocking or grinding is a mechanical failure inside the pump. Stop it before the debris goes through the system.",
    "prevent": "Whatever destroyed the pump is still in the system: contamination, cavitation, or misalignment. Find it before restart. Oil analysis after commissioning the replacement.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_air_in_system",
    "cls": "fix",
    "label": "air in the system",
    "text": "Air is compressible. Air in the fluid turns a rigid hydraulic system into a spongy one.",
    "prevent": "Bleed procedure after every maintenance that opens a line. Check suction side for leaks (aeration route above).",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_stickslip",
    "cls": "action",
    "label": "stick-slip: seals, rod, or flow control",
    "text": "The piston or rod is grabbing and releasing. Common on slow cylinders with worn seals, a scored rod, or a non-compensated flow control at low speed.",
    "prevent": "Replace flow controls with pressure compensated types on slow, precise applications. Fix mounting alignment.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_cb_unstable",
    "cls": "action",
    "label": "counterbalance instability",
    "text": "The counterbalance is opening and closing as the load descends: setting too low, wrong pilot ratio, or air in the pilot line.",
    "prevent": "Record the setting and the load it was set for. Any load change means a recheck.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_prop_erratic",
    "cls": "action",
    "label": "proportional valve: dither, null, or contamination",
    "text": "A sticky spool, no dither, or a null setting that has drifted.",
    "prevent": "Offline filtration to hold the cleanliness target. Record amplifier settings on the drawing.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_comp_hunt",
    "cls": "action",
    "label": "compensator hunting",
    "text": "The pump compensator is oscillating, usually because the relief and compensator settings are too close, or the compensator spool is sticking.",
    "prevent": "Settings recorded and locked.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_drift_piston",
    "cls": "escalate",
    "label": "piston seal bypass",
    "text": "Fluid is moving from one side of the piston to the other inside the cylinder. Only the cylinder can do that.",
    "prevent": "Find what damaged the seal: contamination (particle count), heat (system temperature), or side load (mounting). A new seal in the old conditions fails the same way.",
    "primary": [
      "hydraulics",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_drift_pocheck",
    "cls": "action",
    "label": "PO check not seating",
    "text": "A poppet on a seat should be leak-tight. It is not: contamination on the seat, seat damage, or a pilot signal that is not fully releasing.",
    "prevent": "Fluid cleanliness. A PO check seat is one particle away from leaking.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_drift_cb",
    "cls": "action",
    "label": "counterbalance setting or seat",
    "text": "The counterbalance is set below the load-induced pressure, or its seat is leaking.",
    "prevent": "Record the setting. Recheck after any load change.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_drift_spool",
    "cls": "escalate",
    "label": "no load holding valve: this circuit will always drift",
    "text": "A DCV spool holds a load with a running clearance. It leaks by design. Some drift is inherent.",
    "prevent": "Any load that must hold position gets a poppet-type holding valve. Put it on the drawing.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_rotation",
    "cls": "fix",
    "label": "pump rotation or no flow",
    "text": "A pump turning backward pumps nothing and blows its shaft seal. A pump with no flow is not primed, is cavitating badly, or has failed.",
    "prevent": "Mark rotation on the motor and pump. Verify rotation on every motor change before coupling.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [
      "motor",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_open_to_tank",
    "cls": "action",
    "label": "flow going straight to tank",
    "text": "The pump is producing flow and something is dumping it to tank before it can build pressure.",
    "prevent": "Record relief settings. Check vent solenoid function on the PM.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "lowp3",
    "cls": "action",
    "label": "partial pressure: worn pump or relief leaking",
    "text": "The pump builds some pressure but internal leakage somewhere is limiting it.",
    "prevent": "Case drain trending. Relief seat inspection if it has been chattering. LS line included in any pilot line inspection.",
    "primary": [
      "hydraulics",
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_highp_stall",
    "cls": "action",
    "label": "stalled load: this is what the relief is for",
    "text": "An actuator that reaches the end of stroke or meets an immovable load sends the system to relief pressure. The relief is doing its job.",
    "prevent": "Pressure switch or position feedback to shift the DCV when the stroke completes rather than sitting on the relief.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_highp_rest",
    "cls": "fix",
    "label": "system not unloading at rest",
    "text": "Pressure at rest should be low on any circuit designed to unload, and at the compensator setting on a compensated system.",
    "prevent": "Idle pressure logged on the PM.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_fitting",
    "cls": "fix",
    "label": "fitting: identify the type before touching it",
    "text": "Depressurise, lock out, verify zero. Then identify the fitting. Different fitting types seal in different ways and are ruined by the wrong fix.",
    "prevent": "Standardise fitting types on the machine and stock the seals. Torque to spec rather than to feel.",
    "primary": [
      "hydraulics",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_hose",
    "cls": "escalate",
    "label": "hose failure: replace, do not repair",
    "text": "A leaking hose body is a failed hose. Pinhole leaks in hoses at pressure are injection hazards.",
    "prevent": "Hose inspection on the PM. Replace hoses on age, not just on failure.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_rod",
    "cls": "action",
    "label": "rod seal: check the rod first",
    "text": "Oil on the rod is a rod seal or wiper leak. The seal failed for a reason, and the reason is usually the rod.",
    "prevent": "Rod protection (boots or covers) on outdoor or dirty applications. Alignment check on mounting.",
    "primary": [
      "hydraulics",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_shaftseal",
    "cls": "action",
    "label": "shaft seal: case pressure or inlet vacuum",
    "text": "A pump or motor shaft seal leaking usually has a cause upstream of the seal.",
    "prevent": "Case drain routed separately to tank. Return back-pressure gauge.",
    "primary": [
      "hydraulics",
      "seal"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "hydraulics",
    "moduleName": "Hydraulics",
    "num": "07",
    "file": "builtwright_hydraulics_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_cooler",
    "cls": "action",
    "label": "cooler leaking water into the oil",
    "text": "Rising reservoir level and milky oil means the water side of the cooler is leaking into the oil side.",
    "prevent": "Cooler water pressure should be kept below oil pressure where the design allows so a leak goes oil-to-water, not water-to-oil. Water content on the oil analysis.",
    "primary": [
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_squeal_start",
    "cls": "fix",
    "label": "startup slip: inertia exceeds grip",
    "text": "The belt slips while accelerating the load, then grips once it is up to speed.",
    "prevent": "Tension to the table, recheck after run-in. Log startup behaviour on the PM so a change is noticed.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_squeal_load",
    "cls": "action",
    "label": "load slip: tension, groove, or overload",
    "text": "The belt grips unloaded and slips when the load comes on.",
    "prevent": "Groove gauge on every belt change. Track motor amps: rising amps with the same belt slip means the load is growing.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_squeal_align",
    "cls": "action",
    "label": "misalignment: the belt is rubbing one groove wall",
    "text": "A continuous squeal from one sheave is the belt being pushed against the groove wall as it enters.",
    "prevent": "Align after tensioning, every time.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_timing_whine",
    "cls": "action",
    "label": "timing belt over-tensioned or misaligned",
    "text": "A timing belt that howls is usually too tight, or it is being pushed against a flange.",
    "prevent": "Tension by meter, alignment by straightedge, both recorded.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_turnover",
    "cls": "action",
    "label": "belt turnover: twist, worn groove, or wrong section",
    "text": "The belt has lost stability in the groove.",
    "prevent": "Alignment in all three planes. Groove gauge. Banded belt where the application cannot be tamed.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_walk",
    "cls": "action",
    "label": "belt walking: misalignment or a loose sheave",
    "text": "The belt is being steered off by an angle between the sheaves.",
    "prevent": "Torque bushing screws and recheck after run-in. Lock the motor base after tensioning.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_flange",
    "cls": "fix",
    "label": "timing belt against the flange: misalignment",
    "text": "Flanges keep the belt on. A belt riding hard against one is being pushed there.",
    "prevent": "Laser alignment on timing belt drives.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_life_glazed",
    "cls": "action",
    "label": "chronic slip",
    "text": "The belt has been slipping for most of its life.",
    "prevent": "Groove gauge on every belt change. Tension recorded.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_life_cracked",
    "cls": "action",
    "label": "small sheave, heat, or age",
    "text": "The underside is fatiguing from bending or from heat.",
    "prevent": "Cogged belts on small sheave drives. Ventilated guards near heat.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_life_oil",
    "cls": "action",
    "label": "contamination",
    "text": "Oil or chemicals have attacked the rubber.",
    "prevent": "Grease quantity on the bearings above the drive. Seal condition on the PM.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "bearing",
      "lube",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_life_overload",
    "cls": "action",
    "label": "drive undersized for the actual duty",
    "text": "The belt is doing what it was designed to do, for a load it was not designed for.",
    "prevent": "Motor amps trended. Re-rate the drive after any process change.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_life_set",
    "cls": "fix",
    "label": "unmatched set",
    "text": "One belt of a multi-belt set is carrying all the load.",
    "prevent": "Never replace one belt of a set. Stock matched sets for critical drives.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_tension",
    "cls": "fix",
    "label": "chain not worn: tension, alignment, or lubrication",
    "text": "The chain is within its wear limit. The noise is coming from something else.",
    "prevent": "Lubrication schedule that actually reaches the pins. Sag checked and recorded on the PM.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "bearing",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_wearing",
    "cls": "action",
    "label": "chain wearing: plan the replacement",
    "text": "The chain is elongating and the pitch no longer matches the sprocket well. It is noisier and riding higher on the teeth.",
    "prevent": "Lubrication. Elongation measured and logged on every PM so the replacement is planned, not emergency.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_replace",
    "cls": "escalate",
    "label": "chain past its wear limit",
    "text": "The chain is riding on the tooth tips and will jump the sprocket or break.",
    "prevent": "Elongation on the PM sheet with the replacement threshold written on it.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_jump",
    "cls": "escalate",
    "label": "chain jumping: elongation, slack, or hooked sprockets",
    "text": "The chain is riding up and over the teeth under load.",
    "prevent": "Elongation and sag on the PM. Replace sprockets with the chain when the teeth are worn.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_stiff",
    "cls": "action",
    "label": "stiff links: corrosion, dirt, or damage",
    "text": "Links that do not articulate freely are corroded, packed with dirt, or have a bent pin.",
    "prevent": "Lubricant that displaces water on wet drives. Stainless or coated chain if the environment cannot be changed.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_chain_broke",
    "cls": "escalate",
    "label": "chain failure: find the link and the load",
    "text": "Chains break at the connecting link, an offset link, a stiff link, or from an overload.",
    "prevent": "Press-fit connecting links on critical drives. Even pitch count to eliminate offset links. Overload protection on shock-loaded drives.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_hotbearing",
    "cls": "action",
    "label": "over-tension or misalignment loading the bearing",
    "text": "A drive-end bearing running hotter than the opposite end on a belt or chain drive is carrying more radial load than it should.",
    "prevent": "Tension to the low end of the table. Sheave as close to the bearing as the guard allows. Infrared reading on both bearing ends after every tensioning.",
    "primary": [
      "bearing",
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_belt",
    "cls": "action",
    "label": "belt defect or splice",
    "text": "A vibration that repeats once per belt revolution (slower than shaft speed) is a defect in the belt: a lump, a thin spot, a bad splice, or a set from being stored bent.",
    "prevent": "Store belts flat or on large diameter hangers. Matched sets.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_sheave",
    "cls": "action",
    "label": "sheave or sprocket run-out, unbalance, or looseness",
    "text": "Vibration at shaft speed on a belt drive is the sheave or sprocket itself.",
    "prevent": "Run-out check on installation. Bushing torque sequence and recheck.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_chordal",
    "cls": "action",
    "label": "chordal action or elongation",
    "text": "A chain drive pulses by nature as each link engages, and a small driver sprocket makes it worse. Elongation makes it much worse.",
    "prevent": "Design drives with 17+ teeth on the driver. Elongation on the PM.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "powertrans",
    "moduleName": "Power Transmission",
    "num": "08",
    "file": "builtwright_power_transmission_v1.html",
    "tab": "troubleshoot",
    "id": "r_slip",
    "cls": "action",
    "label": "slip under load",
    "text": "The driven machine is not getting the speed the ratio says it should, or loses speed when loaded.",
    "prevent": "Log driven shaft speed on the PM. A falling speed is slip starting.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_mesh",
    "cls": "action",
    "label": "gear mesh noise: alignment, wear, or backlash",
    "text": "A whine at mesh frequency is the teeth engaging harder or less smoothly than designed.",
    "prevent": "Contact pattern and backlash checked and recorded on every rebuild. Oil level on the PM. Backlash trended.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_bearing",
    "cls": "escalate",
    "label": "bearing failure",
    "text": "A growl or rumble localised to one bearing housing is that bearing.",
    "prevent": "Bearing setting on reassembly. Oil cleanliness. Input alignment or belt tension if it is the input bearing.",
    "primary": [
      "bearing",
      "gearbox"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_input",
    "cls": "action",
    "label": "high speed pinion or input shaft",
    "text": "Once per input revolution is something on the input shaft: a damaged pinion tooth, a bent shaft, a coupling fault, or a bearing with a single defect.",
    "prevent": "Input alignment. Overload protection if a tooth was broken by a jam.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "alignment",
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_output",
    "cls": "action",
    "label": "low speed gear or output shaft",
    "text": "Once per output revolution is on the output side: a damaged tooth on the low speed gear, output bearing defect, or the driven load itself.",
    "prevent": "Load control and overload protection. Torque arm and bushing check on the PM for shaft mounts.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_backlash",
    "cls": "action",
    "label": "excessive backlash: teeth hammering on reversal",
    "text": "A rattle or clatter each time the load reverses or the drive starts is the teeth crossing the backlash and hitting.",
    "prevent": "Backlash trended on the PM. Oil cleanliness to slow abrasive wear.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_overfill",
    "cls": "fix",
    "label": "churning: overfilled",
    "text": "Oil above the correct level is being churned by the gears, which is friction, which is heat, and it foams and leaks.",
    "prevent": "Level checked stopped and settled. Level mark visible on the sight glass. Mounting position confirmed against the nameplate.",
    "primary": [
      "gearbox",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_low",
    "cls": "action",
    "label": "low oil: gears and upper bearings running dry",
    "text": "Below the correct level, the gears are not dipping deep enough to splash the upper bearings and the mesh is starved.",
    "prevent": "Level on the PM. Fix the leak, not just the level.",
    "primary": [
      "gearbox",
      "lube"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_oil",
    "cls": "action",
    "label": "wrong viscosity or degraded oil",
    "text": "Too thin an oil has a thin film and high internal leakage past the bearings; too thick churns. Old oxidised oil has lost its additives and its viscosity has drifted.",
    "prevent": "Oil grade on the PM sheet and on a tag at the fill plug. Analysis on the interval.",
    "primary": [
      "gearbox",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_load",
    "cls": "action",
    "label": "thermal rating exceeded, or a mechanical fault",
    "text": "Correct oil and level, and still hot. Either the box is above its thermal rating, or something inside is generating heat: a bearing, a misaligned gear pair, or a load beyond the mechanical rating.",
    "prevent": "Cooling fan, shaft fan, or an oil cooler if the thermal rating is the limit. Airflow around the box kept clear.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_bearing",
    "cls": "escalate",
    "label": "bearing running hot",
    "text": "One bearing hotter than its neighbours is failing, over-preloaded, or carrying a load it was not designed for.",
    "prevent": "Bearing setting on reassembly. Input alignment and belt tension by gauge. Overhung load within the nameplate rating.",
    "primary": [
      "bearing",
      "gearbox"
    ],
    "contributing": [
      "alignment",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_worm",
    "cls": "action",
    "label": "worm box running above its normal",
    "text": "Worm boxes are hot by nature. Hotter than usual means efficiency has fallen: the oil film is breaking down or the load is up.",
    "prevent": "Correct oil on the tag at the fill plug. Copper trend on oil analysis. Backlash trend.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing",
      "lube",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_breather",
    "cls": "fix",
    "label": "blocked breather: pressurised case",
    "text": "The case heats up, the air inside expands, and with the breather blocked the pressure pushes oil past every seal.",
    "prevent": "Breather on the PM sheet. Desiccant breather where humidity or dirt is an issue.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "lube",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_seal",
    "cls": "action",
    "label": "seal: check the shaft and the bearing behind it",
    "text": "Breather clear and level right, and the seal still leaks. The seal has worn, the shaft under it has worn, or the bearing behind it has play and the shaft is running eccentric.",
    "prevent": "Wear sleeve on any shaft with a groove. Fix heat before replacing a hardened seal.",
    "primary": [
      "gearbox",
      "seal"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_leak_joint",
    "cls": "fix",
    "label": "gasket or sealant joint",
    "text": "Inspection cover and housing split lines leak from a damaged gasket, a distorted cover, uneven bolt torque, or a pressurised case.",
    "prevent": "Gasket in stock for the box. Torque pattern on the PM sheet.",
    "primary": [
      "gearbox",
      "seal"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_rebuild",
    "cls": "action",
    "label": "rebuild: setting, pattern, or alignment",
    "text": "A box that vibrates after a rebuild has a bearing setting, a contact pattern, or an input alignment that was not checked.",
    "prevent": "Rebuild checklist with the settings recorded. Alignment after the box is bolted down.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "alignment",
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_wear",
    "cls": "action",
    "label": "wear: bearings, teeth, or looseness",
    "text": "Slowly rising vibration is a bearing losing its setting, teeth wearing, or the box working loose on its foundation.",
    "prevent": "Vibration trended on the PM. Backlash trended. Foundation inspected.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_input",
    "cls": "action",
    "label": "input speed: coupling, alignment, or pinion",
    "text": "Vibration at input speed is the coupling, the input alignment, a bent input shaft, or a damaged pinion.",
    "prevent": "Alignment after any input work. Coupling inspection on the PM.",
    "primary": [
      "alignment",
      "gearbox"
    ],
    "contributing": [
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_foundation",
    "cls": "action",
    "label": "mounting, foundation, or torque arm",
    "text": "The box is moving on its mounting.",
    "prevent": "Mounting bolts on the PM. Torque arm bushings replaced on condition.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_metal_normal",
    "cls": "fix",
    "label": "normal wear",
    "text": "A small amount of fine ferrous material on the magnetic plug is the gears and bearings wearing normally.",
    "prevent": "Magnetic plug inspected and the amount noted on every oil check.",
    "primary": [
      "gearbox"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_metal_flakes",
    "cls": "escalate",
    "label": "surface fatigue or breakage",
    "text": "Flakes are pitting or spalling; chips are tooth breakage or a bearing race breaking up. Something is coming apart.",
    "prevent": "Whatever caused it: overload, misalignment, lubrication, or contamination. Wear Patterns tab to read the teeth.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_metal_bronze",
    "cls": "action",
    "label": "bronze: worm wheel or bushing",
    "text": "Copper coloured debris on a worm box is the wheel wearing. On any box it can be a bronze bearing cage, a bushing, or a thrust washer.",
    "prevent": "Correct oil for bronze. Copper trended on analysis.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_metal_cage",
    "cls": "escalate",
    "label": "bearing cage",
    "text": "Non-magnetic silver flakes are usually a bearing cage (brass, bronze, or pressed steel that has been through the mesh).",
    "prevent": "Bearing condition on the PM. Oil cleanliness.",
    "primary": [
      "bearing",
      "gearbox"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_out_stopped",
    "cls": "escalate",
    "label": "broken tooth, sheared key, or stripped gear",
    "text": "Input turning with no output means the drive path is broken inside the box, or the input coupling or key has let go.",
    "prevent": "Overload protection on the drive. Backlash trend would have shown a worm wheel wearing.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_out_speed",
    "cls": "fix",
    "label": "wrong ratio or wrong input speed",
    "text": "The output speed is what the input speed and the ratio make it. If it is wrong, one of those is wrong.",
    "prevent": "Ratio on the PM sheet and on the purchase specification.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_out_stall",
    "cls": "action",
    "label": "load exceeds torque, or a mechanical bind",
    "text": "The box delivers torque up to what the motor gives it times the ratio. If the load is more than that, it stalls. If the box binds, it stalls with the motor pulling high amps.",
    "prevent": "Load sizing with a service factor. Overload protection.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "alignment",
      "bearing",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "gearbox",
    "moduleName": "Gearboxes",
    "num": "09",
    "file": "builtwright_gearboxes_v1.html",
    "tab": "troubleshoot",
    "id": "r_backlash",
    "cls": "action",
    "label": "backlash increasing",
    "text": "Backlash grows as the teeth wear or as a bearing lets a gear move away from its mate.",
    "prevent": "Backlash measured and recorded on the PM. Oil cleanliness slows abrasive wear. Correct oil for bronze.",
    "primary": [
      "gearbox"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_bearing",
    "cls": "action",
    "label": "bearing running hot",
    "text": "A localised hot spot at one end is that bearing.",
    "prevent": "Grease quantity and relief plug on the PM sheet. Tension and alignment by gauge. Grounding ring on VFD motors.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "lube",
      "motor",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_cooling",
    "cls": "fix",
    "label": "cooling blocked",
    "text": "The motor is making normal heat and cannot get rid of it.",
    "prevent": "Fins and shroud on the PM. Ambient temperature logged in summer.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_vfd",
    "cls": "action",
    "label": "shaft fan not moving enough air at low speed",
    "text": "A TEFC motor at 30 percent speed on a VFD has a fan at 30 percent speed and a fraction of the airflow.",
    "prevent": "Blower cooled motors on constant torque VFD applications that run slow.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_electrical",
    "cls": "escalate",
    "label": "mechanically clear: hand off",
    "text": "Normal amps, clear cooling, full speed, and still hot. The heat is coming from the electrical side: voltage unbalance, a winding fault developing, or a supply problem.",
    "prevent": "Amps per phase trended. Voltage balance on the electrician's PM.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_heat_burnt",
    "cls": "escalate",
    "label": "winding failure",
    "text": "The smell of burnt insulation means the windings have overheated to failure.",
    "prevent": "The root cause, whichever it was. A rewind without a root cause is a rewind on a schedule.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_driven",
    "cls": "action",
    "label": "the load is the problem",
    "text": "The motor is drawing high amps because the driven machine is hard to turn.",
    "prevent": "Amps trended so a rising load is caught before it trips. Driven machine bearings on the PM.",
    "primary": [
      "compressor",
      "conveyor",
      "fan",
      "gearbox",
      "pump"
    ],
    "contributing": [
      "bearing",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_motor",
    "cls": "escalate",
    "label": "motor bearing failure or rotor rub",
    "text": "A motor that is stiff, rough, or scraping by hand has a failed bearing or the rotor is touching the stator.",
    "prevent": "Bearing condition on the PM (sound, temperature). Soft foot corrected. Grease quantity.",
    "primary": [
      "bearing",
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_load",
    "cls": "action",
    "label": "load growth",
    "text": "The driven machine is asking for more than it used to.",
    "prevent": "Amps trended against the process so growth is seen before it trips. Service factor is not a design margin.",
    "primary": [
      "conveyor",
      "fan",
      "pump"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_align",
    "cls": "fix",
    "label": "misalignment or belt tension",
    "text": "Misalignment and over-tensioned belts both raise motor current and both heat the DE bearing.",
    "prevent": "Tension and alignment by gauge, recorded. Recheck amps after any drive work.",
    "primary": [
      "alignment",
      "powertrans"
    ],
    "contributing": [
      "bearing",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_ratio",
    "cls": "fix",
    "label": "wrong ratio: driven machine too fast",
    "text": "A larger motor sheave or a smaller driven sheave, or a gearbox with the wrong ratio, runs the driven machine faster than design. Fan and pump power rises with the cube of speed.",
    "prevent": "Ratio on the drawing and the PM sheet. Replacement sheaves by part number.",
    "primary": [
      "gearbox",
      "powertrans"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_electrical",
    "cls": "escalate",
    "label": "high amps uncoupled: electrical",
    "text": "A motor with no load drawing more than its unloaded current has an electrical problem: low voltage, a winding fault, or a wrong connection (delta instead of star, wrong voltage tap).",
    "prevent": "Nameplate connection diagram followed on every reconnect.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_amps_unbalance",
    "cls": "escalate",
    "label": "phase unbalance: electrical",
    "text": "Three phases that do not match is a supply, connection, or winding problem.",
    "prevent": "Electrician's connection check on the PM. Phase monitor on critical motors.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_bearing",
    "cls": "escalate",
    "label": "bearing failing",
    "text": "Grinding or rumbling localised to one housing is that bearing.",
    "prevent": "Whichever cause the failed bearing shows.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_fluting",
    "cls": "action",
    "label": "electrical fluting from VFD bearing currents",
    "text": "A fine gravelly hiss at the NDE on a VFD-driven motor, getting louder over weeks, is fluting.",
    "prevent": "Grounding ring or insulated bearing on every VFD motor above a few kilowatts. Inverter duty motors on new installs.",
    "primary": [
      "bearing",
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_hum",
    "cls": "action",
    "label": "magnetic hum: soft foot or electrical",
    "text": "A hum that vanishes the instant the power is cut is magnetic. The mechanical cause is soft foot distorting the frame and the air gap. The electrical causes are voltage unbalance, single phasing, or a winding fault.",
    "prevent": "Soft foot before every alignment. Phase monitoring on critical motors.",
    "primary": [
      "motor"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_fan",
    "cls": "fix",
    "label": "fan loose, damaged, or hitting the shroud",
    "text": "A rattle at the NDE is the fan.",
    "prevent": "Shroud and fan on the PM.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise_vfd",
    "cls": "action",
    "label": "VFD carrier frequency whine",
    "text": "A whine or tone from the motor that changes with speed on a VFD is the drive's switching frequency exciting the motor laminations. It is normal to a degree.",
    "prevent": "Drive settings documented. Changes logged.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_downstream",
    "cls": "action",
    "label": "coupling, alignment, or the driven machine",
    "text": "The motor is smooth alone. The vibration is coming from the coupling, the alignment, or the driven machine.",
    "prevent": "Alignment after any work on either machine. Coupling on the PM.",
    "primary": [
      "alignment"
    ],
    "contributing": [
      "compressor",
      "conveyor",
      "fan",
      "gearbox",
      "motor",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_softfoot",
    "cls": "fix",
    "label": "soft foot",
    "text": "The frame is twisted by the base.",
    "prevent": "Soft foot before every alignment, no exceptions.",
    "primary": [
      "alignment",
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_unbalance",
    "cls": "action",
    "label": "unbalance: fan, shaft, or coupling hub",
    "text": "Vibration at running speed on a motor running solo is unbalance or a bent shaft.",
    "prevent": "Fan cleaned on the PM. Hubs balanced with the coupling on high speed drives.",
    "primary": [
      "motor"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_vib_loose",
    "cls": "fix",
    "label": "looseness",
    "text": "Foot bolts, base bolts, or the base itself.",
    "prevent": "Fastener torque on the PM. Base condition inspected.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_start_electrical",
    "cls": "escalate",
    "label": "mechanically clear: will not start is electrical",
    "text": "Both shafts turn freely and the motor will not start. Supply, control circuit, overload, contactor, drive fault, or windings.",
    "prevent": "Nothing mechanical to prevent here. A drive fault log is the electrician's first stop.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing_overgrease",
    "cls": "fix",
    "label": "over-greasing",
    "text": "Too much grease, or greased with the relief plug in.",
    "prevent": "Quantity and relief plug on the PM sheet. Ultrasonic-assisted greasing on critical motors.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing_undergrease",
    "cls": "fix",
    "label": "starvation",
    "text": "The bearing ran dry.",
    "prevent": "Interval on the PM. Fittings checked to pass grease.",
    "primary": [
      "bearing",
      "lube"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing_brinell",
    "cls": "fix",
    "label": "brinelling: impact",
    "text": "Dents in the race at the ball spacing are from a hammer blow, usually on the coupling hub or the shaft end, or from the motor being dropped.",
    "prevent": "Hub installation procedure. Rotate stored spare motors periodically.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing_contam",
    "cls": "action",
    "label": "contamination or moisture",
    "text": "Scoring is dirt; rust is water.",
    "prevent": "Correct enclosure for the environment. Bearing seals on regreasable motors.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube",
      "motor",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing_load",
    "cls": "action",
    "label": "overloaded bearing: belt, alignment, or overhung load",
    "text": "A bearing that wore out fast with no other signature was carrying more load than it was rated for.",
    "prevent": "Belt tension and alignment by gauge. Sheave close to the bearing. Motor selected for the load type.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "motor",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "motors",
    "moduleName": "Motors: Mechanical Side",
    "num": "10",
    "file": "builtwright_motors_v1.html",
    "tab": "troubleshoot",
    "id": "r_grease",
    "cls": "action",
    "label": "grease where it should not be",
    "text": "Grease at the shaft, through the shroud, or on the windings has come from an over-greased bearing. Oil at the shaft on a sleeve bearing motor is a seal or a level.",
    "prevent": "Grease quantity and relief plug on the PM sheet.",
    "primary": [
      "lube",
      "motor"
    ],
    "contributing": [
      "bearing",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_overall_bearing",
    "cls": "action",
    "label": "developing fault at that bearing: get a spectrum",
    "text": "A slow rise localised to one bearing is a bearing or a gear on that shaft wearing.",
    "prevent": "Envelope readings on every bearing point on the route, so the next one is caught at stage 1 instead of stage 3.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "gearbox"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_overall_sudden",
    "cls": "action",
    "label": "something changed: find it",
    "text": "A step change in vibration has a step change behind it.",
    "prevent": "Baseline reading after every rebuild, before the machine goes back to production.",
    "primary": [],
    "contributing": [
      "alignment",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_overall_all",
    "cls": "action",
    "label": "whole machine: unbalance, base, or resonance",
    "text": "A rise at every point at once is a force affecting the whole machine, or the whole machine has become easier to shake.",
    "prevent": "Base inspection on the PM. Bump test after any structural change.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_overall_bad",
    "cls": "fix",
    "label": "check the reading before the machine",
    "text": "A bad reading is more common than a bad machine.",
    "prevent": "Paint dots at every point. Load and speed noted with every reading.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_1x",
    "cls": "action",
    "label": "1x dominant: unbalance, bent shaft, eccentricity, or a resonance amplifying any of them",
    "text": "One clean peak at running speed, highest in the radial direction, is unbalance until something says otherwise.",
    "prevent": "Rotor cleaning on the PM for fans and mixers. Balance after any blade or impeller work. Baseline after balancing.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "alignment",
      "powertrans",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_2x",
    "cls": "action",
    "label": "2x radial or 1x axial: misalignment",
    "text": "A 2x greater than 1x, or a 1x that is highest in the axial direction, at the coupling-end bearings of both machines, is misalignment.",
    "prevent": "Alignment after any work on either machine, with soft foot corrected, readings recorded, and a baseline vibration reading after.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_harmonics",
    "cls": "action",
    "label": "harmonic series: looseness or severe misalignment",
    "text": "Many peaks at 1x, 2x, 3x, 4x and beyond mean something is hitting its limits every revolution.",
    "prevent": "Fastener torque on the PM. Bearing fits checked on every replacement.",
    "primary": [
      "alignment",
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_whirl",
    "cls": "escalate",
    "label": "oil whirl",
    "text": "Sub-synchronous at just under half speed on a sleeve bearing is oil whirl. It is unstable and it destroys bearings.",
    "prevent": "Bearing clearance and oil condition on the PM for sleeve bearing machines. Alignment to keep the load where the bearing wants it.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "alignment",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_halforder",
    "cls": "action",
    "label": "half-order harmonics: rotating looseness",
    "text": "Peaks at 0.5x, 1.5x, 2.5x with the integer harmonics mean a rotating part is loose enough to move in two different ways each revolution.",
    "prevent": "Housing and shaft fits measured on every bearing change.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "fan",
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_belt",
    "cls": "action",
    "label": "belt drive problem",
    "text": "Belt frequency (below the speed of either sheave) and its harmonics mean the belt itself is the source.",
    "prevent": "Belt frequency calculated and put in the database. Matched sets. Tension by gauge.",
    "primary": [
      "powertrans"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_cage",
    "cls": "action",
    "label": "cage frequency: bearing cage or advanced wear",
    "text": "A peak at the fundamental train frequency (roughly 0.4x) on a rolling element bearing is the cage.",
    "prevent": "Correct grease quantity. Bearing selected for the load; a lightly loaded large bearing skids.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_nonsync",
    "cls": "action",
    "label": "non-synchronous: rolling element bearing",
    "text": "A peak that is not a whole multiple of running speed, in the 3x to 15x range or higher, is a bearing defect frequency until proven otherwise.",
    "prevent": "Bearing numbers in the database. Envelope readings on the route. Read the failed bearing to find the cause.",
    "primary": [
      "bearing"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_gear",
    "cls": "action",
    "label": "gear problem on the shaft matching the sideband spacing",
    "text": "Gear mesh with sidebands at one shaft's speed points at the gear on that shaft.",
    "prevent": "Tooth counts in the database. GMF band alarm. Oil analysis for iron alongside the vibration trend.",
    "primary": [
      "gearbox"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_polepass",
    "cls": "escalate",
    "label": "rotor bar problem: electrical handoff",
    "text": "Pole pass sidebands (slip times poles, a few Hz apart) on 1x or on 120 Hz are broken or cracked rotor bars, or a rotor with high resistance joints.",
    "prevent": "Starts per hour within the motor rating. Motor current signature analysis on critical motors.",
    "primary": [
      "motor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_broadband",
    "cls": "action",
    "label": "broadband: cavitation, turbulence, rubbing, or a bearing in stage 4",
    "text": "A raised, ragged floor without discrete peaks is random energy.",
    "prevent": "Depends on which: NPSH margin, bearing route, inlet conditions.",
    "primary": [
      "bearing",
      "fan",
      "pump"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "vibration",
    "moduleName": "Vibration Fundamentals",
    "num": "11",
    "file": "builtwright_vibration_v1.html",
    "tab": "troubleshoot",
    "id": "r_120",
    "cls": "action",
    "label": "120 Hz: electrical, or soft foot pretending to be",
    "text": "Twice line frequency is the magnetic force frequency on any AC motor. Some is normal. High, or new, means the air gap is uneven or the supply is unbalanced.",
    "prevent": "Soft foot before every alignment. Phase monitoring on critical motors.",
    "primary": [
      "motor"
    ],
    "contributing": [
      "alignment",
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_pipestrain",
    "cls": "action",
    "label": "pipe strain",
    "text": "The piping is applying a force to the casing through the flange. Every alignment is done against that force and the force wins.",
    "prevent": "Pipe strain check on every installation and every time piping is disturbed, with readings recorded.",
    "primary": [
      "alignment"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_plate_strain",
    "cls": "action",
    "label": "anchor bolts holding a distorted plate",
    "text": "The plate moves when an anchor is loosened: the anchors are pulling the plate down to the foundation against a void, a high spot, or a warp. The plate is spring-loaded, and it flexes under running load.",
    "prevent": "Anchors hand tight until grout cure. Grout before torque, every time.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_thermal",
    "cls": "fix",
    "label": "thermal growth not compensated",
    "text": "A machine aligned cold runs misaligned hot. Every shutdown and restart, it is misaligned twice.",
    "prevent": "Thermal offsets recorded with the alignment for any machine over about 60°C casing temperature.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_foundation_move",
    "cls": "escalate",
    "label": "foundation moving or settling",
    "text": "Piping, plate, and thermal growth cleared, and it still walks. The foundation itself is moving.",
    "prevent": "Foundation designed for the soil and the load. Isolation joint. Commissioning level record to compare against.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_softfoot_recur",
    "cls": "action",
    "label": "soft foot that returns: the base, not the foot",
    "text": "Soft foot that was corrected and came back is a base that moves: a void under the pad, a cracked pad, grout crumbling under one corner, or the plate flexing on an anchor that has loosened.",
    "prevent": "Grout without voids. Anchor torque rechecked after the first week. Shim stacks of four or fewer.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_resonance",
    "cls": "action",
    "label": "foundation or base resonance",
    "text": "A natural frequency of the plate, the block, or the structure is close to a forcing frequency.",
    "prevent": "Grouted or epoxy-filled baseplates on anything variable speed. Bump test at commissioning.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_base_loose",
    "cls": "action",
    "label": "looseness at the base",
    "text": "Vertical higher than horizontal with harmonics is the machine moving on its mounting.",
    "prevent": "Torque recorded and rechecked. Grout sounded at commissioning.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_no_isolation",
    "cls": "escalate",
    "label": "no isolation joint, or foundation undersized",
    "text": "The whole floor is the foundation and the whole floor vibrates.",
    "prevent": "Foundation designed for the machine, with an isolation joint, before the pour.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_grout_fail",
    "cls": "escalate",
    "label": "grout failure",
    "text": "Cracked, crumbling, or oil-soaked grout is no longer holding the plate to the block.",
    "prevent": "Epoxy grout in oily service. Drip trays. Mix ratio and vent sequence followed and recorded.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_anchor_expansion",
    "cls": "fix",
    "label": "wrong anchor type",
    "text": "Expansion anchors work loose under vibration. They were never right for this machine.",
    "prevent": "Adhesive or cast-in anchors under machinery. Expansion anchors for brackets.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_anchor_stretch",
    "cls": "action",
    "label": "no stretch length",
    "text": "A short, stiff anchor loses preload with every thermal cycle and every vibration because there is no elastic length to hold the tension.",
    "prevent": "Sleeved anchors with 10 diameters of stretch on vibrating machinery.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_anchor_concrete",
    "cls": "escalate",
    "label": "concrete failure at the anchor",
    "text": "The anchor is fine; the concrete around it is not. Edge too close, embedment too shallow, or the concrete has cracked from overload or corrosion.",
    "prevent": "Edge distance and embedment per specification at the design stage.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_void",
    "cls": "action",
    "label": "voids under the baseplate",
    "text": "A hollow ring means grout did not reach that spot. The plate flexes there under load.",
    "prevent": "Vent holes at every bay; pour from one side; watch every vent. Sound the plate at commissioning.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_anchor_clearance",
    "cls": "fix",
    "label": "no lateral clearance at the anchor holes",
    "text": "The foot bolts are hard against the sides of the holes; the machine cannot move sideways to align.",
    "prevent": "Hole pattern and clearance checked against the machine before the plate is grouted.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_shim_room",
    "cls": "fix",
    "label": "wrong shaft height allowance",
    "text": "One machine sits too high or too low relative to the other for the shim range.",
    "prevent": "Shaft height difference checked at the plate design and again before grout.",
    "primary": [],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "installation",
    "moduleName": "Installation and Foundations",
    "num": "13",
    "file": "builtwright_installation_v1.html",
    "tab": "troubleshoot",
    "id": "r_softfoot_new",
    "cls": "fix",
    "label": "soft foot on a new machine",
    "text": "Readings that change when the feet are torqued is the definition of soft foot.",
    "prevent": "Soft foot before alignment, no exceptions.",
    "primary": [
      "alignment"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_off_pm",
    "cls": "fix",
    "label": "guard designed without maintenance access",
    "text": "The task is legitimate; the guard made it impossible with the guard on.",
    "prevent": "Guard design reviewed against the PM task list before fabrication. Every guard has a way to do the routine tasks through it.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_off_see",
    "cls": "fix",
    "label": "no visibility",
    "text": "The operator needs to watch the process and the guard blocks the view.",
    "prevent": "Sight lines identified in the hazard walk.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_off_damaged",
    "cls": "action",
    "label": "damaged or obsolete guard",
    "text": "The guard was hit, bent, or no longer fits after a modification, so it was set aside.",
    "prevent": "Machine modifications go through a change review that includes guarding.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_off_unknown",
    "cls": "escalate",
    "label": "unknown reason: treat as a systemic finding",
    "text": "A guard off with no known reason means guards are coming off routinely and nobody is noticing.",
    "prevent": "Guard inspection on every PM and every shift start. Guards painted a single plant colour.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_task_mode",
    "cls": "action",
    "label": "design a mode for the task",
    "text": "A task that needs motion with the guard open needs a designed reduced-risk mode, not a jumper.",
    "prevent": "Every task that needs guard-open motion identified in the risk assessment before the machine is commissioned.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_failed_device",
    "cls": "escalate",
    "label": "safeguard failed, bypassed to keep running",
    "text": "The machine ran unguarded because the safeguard broke and the fix was slower than a jumper.",
    "prevent": "Critical spares for safety devices. A written rule, backed by management, that a failed safeguard stops the machine.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_nuisance_optical",
    "cls": "fix",
    "label": "optical device: alignment, contamination, or field configuration",
    "text": "Curtains and scanners trip on what they see, and they see dust, mist, and a forklift crossing the warning field.",
    "prevent": "Optical safety devices on the PM: clean, aligned, fields reviewed after any layout change.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_nuisance_interlock",
    "cls": "fix",
    "label": "interlock mechanics",
    "text": "A door that vibrates open a millimetre, an actuator that does not fully enter the switch, or a worn hinge switch trips the interlock intermittently.",
    "prevent": "Interlock switch and door mechanics on the PM.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_nuisance_circuit",
    "cls": "escalate",
    "label": "safety circuit fault: diagnose, do not reset",
    "text": "Random trips with no visible cause are the safety relay or safety PLC detecting a fault: a channel disagreement, a feedback fault, a wiring intermittent.",
    "prevent": "Safety circuit diagnostics reviewed on every trip, and logged.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_estop",
    "cls": "escalate",
    "label": "e-stop function fault",
    "text": "An e-stop that does not stop, stops only part of the machine, or restarts the machine on reset is a safety circuit fault.",
    "prevent": "E-stop test on the PM and after any electrical work. Coverage checked in every PSR.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_psr_yes",
    "cls": "action",
    "label": "PSR likely required: circumstance 7 (protective elements)",
    "text": "A new or relocated machine whose guarding is what protects the worker falls under the machine guarding circumstance in the section 7 table.",
    "prevent": "PSR requirement checked at the purchase and planning stage, not the day before startup.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_psr_modified",
    "cls": "action",
    "label": "modification to protective elements triggers a review",
    "text": "Changing the guards, the interlocks, the safety controls, or the process the machine runs can require a new PSR even if one was done originally.",
    "prevent": "Change control on machines includes a PSR trigger check.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_psr_rack",
    "cls": "action",
    "label": "PSR likely required: circumstance 3 (racking)",
    "text": "New rack or a reconfigured rack is a rack or stacking structure under the section 7 table, reviewed against CSA A344.",
    "prevent": "Rack changes (beam levels, uprights, loads) go through the same review as machine changes.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_psr_no",
    "cls": "fix",
    "label": "no change, no new review",
    "text": "An unchanged machine with an existing PSR does not need a new one.",
    "prevent": "PSR reports filed with the equipment record and referenced in the change control process.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "safeguarding",
    "moduleName": "Machine Safeguarding and PSR",
    "num": "14",
    "file": "builtwright_safeguarding_v1.html",
    "tab": "troubleshoot",
    "id": "r_opening",
    "cls": "action",
    "label": "measure the opening and the distance",
    "text": "An opening is compliant if the distance from it to the nearest hazard meets the table for that opening size.",
    "prevent": "Opening and distance measured and recorded on every guard at commissioning.",
    "primary": [
      "guard"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_pulley",
    "cls": "fix",
    "label": "skewed pulley",
    "text": "A pulley out of square steers the belt at that point every revolution.",
    "prevent": "Pulley squareness checked with a tape on the PM. Screw take-up adjusted equally, and the reading recorded on both sides.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_structure",
    "cls": "action",
    "label": "structure or idler frame misalignment",
    "text": "The belt is following the frame, and the frame is not straight.",
    "prevent": "Centreline string check after any structural work or impact. Frames bolted, not wedged.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_idler",
    "cls": "fix",
    "label": "seized idlers or buildup",
    "text": "A seized idler is a skid that steers the belt; buildup on an idler or pulley is a cone that does the same.",
    "prevent": "Walk and spin on every PM. Cleaners and skirts maintained.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_adjust",
    "cls": "fix",
    "label": "track it: idlers, upstream first, small moves",
    "text": "Causes cleared; now steer it.",
    "prevent": "Tracking record kept with the conveyor. Training idlers on runs that wander with load.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_belt",
    "cls": "action",
    "label": "belt fault: splice, camber, or local damage",
    "text": "A belt that runs off at the same spot on itself has the fault in the belt at that spot.",
    "prevent": "Splices cut with a square and checked on the diagonals. New belts checked for camber before installation.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_loading",
    "cls": "fix",
    "label": "off-centre loading",
    "text": "Product landing on one side of the belt pushes it the other way.",
    "prevent": "Loading point checked whenever the product or the upstream equipment changes.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_track_wander",
    "cls": "action",
    "label": "wander: tension, cupped belt, or weather",
    "text": "A belt that wanders both ways is not being steered by one fault; it is not being held by anything.",
    "prevent": "Take-up position trended. Cover wear measured. Windbreaks on exposed runs.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_slip",
    "cls": "action",
    "label": "drive pulley slip",
    "text": "The pulley turns and the belt does not keep up. Heat, squeal, glazed bottom cover, and a fire risk.",
    "prevent": "Lagging on the PM. Speed switch on every drive pulley. Cleaners keeping the pulley face clean.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_damage",
    "cls": "action",
    "label": "read the damage pattern",
    "text": "The Reading Belt Damage tab has six patterns, and each points at a cause.",
    "prevent": "Cover thickness measured at a marked spot on the PM. Damage logged with its location.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_spill_load",
    "cls": "fix",
    "label": "loading zone: skirts, chute, or impact",
    "text": "Product is escaping before it settles on the belt.",
    "prevent": "Skirt seals on the PM. Loading zone reviewed with any product change.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_spill_run",
    "cls": "action",
    "label": "overloaded cross-section, sag, or mistracking",
    "text": "Product falling off along the run means the belt is carrying more than its trough holds, sagging between idlers, or has moved off centre under the load.",
    "prevent": "Feed rate controlled at the source. Idlers complete and turning.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_spill_return",
    "cls": "fix",
    "label": "carryback: cleaners",
    "text": "Product stuck to the top cover is going around the head pulley and dropping off the return side onto everything below.",
    "prevent": "Cleaner blades on the PM. Carryback under the return idlers is the indicator.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_idler",
    "cls": "action",
    "label": "idler or pulley bearing",
    "text": "A noisy or hot idler is a bearing failing; a hot pulley bearing is a bearing failing or a pulley that is slipping.",
    "prevent": "Infrared survey of pulley bearings on the PM. Idler walk and spin.",
    "primary": [
      "bearing",
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_stall_overload",
    "cls": "action",
    "label": "drive overload: jam, overload, or drive train",
    "text": "The motor is pulling more than the overload allows.",
    "prevent": "Chute and transfer point plugged-chute detection. Feed control. Idler walk on the PM.",
    "primary": [
      "conveyor"
    ],
    "contributing": [
      "bearing",
      "gearbox",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_stall_control",
    "cls": "fix",
    "label": "control stop: interlock, pull cord, or sequence",
    "text": "A conveyor that stops without a trip was told to stop.",
    "prevent": "Pull cords and switches tested and adjusted on the PM. Operators trained on what each interlock means.",
    "primary": [
      "conveyor"
    ],
    "contributing": [
      "guard"
    ],
    "tagged": true
  },
  {
    "module": "conveyors",
    "moduleName": "Conveyors",
    "num": "15",
    "file": "builtwright_conveyors_v1.html",
    "tab": "troubleshoot",
    "id": "r_splice",
    "cls": "escalate",
    "label": "splice failure",
    "text": "A splice that is lifting, cracking, or losing fasteners is going to let go, and the belt end goes through the head pulley.",
    "prevent": "Splices located, counted, and inspected on every PM. Belt tension within the design. Pulley diameters at or above the belt minimum.",
    "primary": [
      "conveyor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_read_now",
    "cls": "action",
    "label": "read this one before the new part goes in",
    "text": "A second failure without a mechanism is a coin flip on the third.",
    "prevent": "Every failed part on a repeat machine is read and the mechanism logged in the work order.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_latent_method",
    "cls": "fix",
    "label": "latent cause in method: change the document",
    "text": "The failure is being produced by a written or unwritten procedure that everyone follows.",
    "prevent": "Corrective action logged against the document, not the machine.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_latent_material",
    "cls": "action",
    "label": "latent cause in material or design: change the spec",
    "text": "The wrong part, the wrong fluid, the wrong material pair, or a design that cannot carry the duty.",
    "prevent": "Spare part specifications reviewed against the failure; stores catalogue corrected.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_not_done",
    "cls": "escalate",
    "label": "the chain stopped too early",
    "text": "A why chain that ends at a person has not found the root cause.",
    "prevent": "Root cause reports are reviewed for chains ending at a person, and sent back.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_two_causes",
    "cls": "action",
    "label": "two failures, two causes, or one cause with two faces",
    "text": "A different mechanism the second time means either the first fix worked and something else is wrong, or one underlying condition is producing different symptoms.",
    "prevent": "Failure history by machine reviewed for patterns, not just counts.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_install",
    "cls": "fix",
    "label": "installed into failure",
    "text": "The part was damaged going in.",
    "prevent": "Installation procedure with the tools listed; tools in the kit.",
    "primary": [],
    "contributing": [
      "bearing",
      "gearbox",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_lubecause",
    "cls": "fix",
    "label": "lubrication or contamination",
    "text": "What was in the part when it came out is the cause.",
    "prevent": "Product, quantity, and interval on the PM sheet; lube room controls.",
    "primary": [
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_overload",
    "cls": "action",
    "label": "overload event or wrong part",
    "text": "An overload fracture or a part that failed at normal load.",
    "prevent": "Event logging on the machine; stores catalogue verified against drawings.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_duty",
    "cls": "action",
    "label": "duty exceeds design",
    "text": "A part that wears out early with everything else correct is carrying more than it was sized for.",
    "prevent": "Duty reviewed after every process change.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_full",
    "cls": "escalate",
    "label": "full method, with a team",
    "text": "Expensive failures and injuries get the eight steps, a team, and a report that goes up the chain.",
    "prevent": "Repeat, expensive, and safety failures trigger the full method by rule, not by mood.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_wrong_cause",
    "cls": "action",
    "label": "the cause was wrong or incomplete",
    "text": "The action was taken and the failure came back: the analysis fixed a contributing factor, not the root, or there were two causes.",
    "prevent": "Verification step enforced: the analysis is not closed until the failure interval proves it.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "rootcause",
    "moduleName": "Root Cause",
    "num": "16",
    "file": "builtwright_root_cause_v1.html",
    "tab": "troubleshoot",
    "id": "r_no_action",
    "cls": "fix",
    "label": "action without an owner",
    "text": "The analysis was right and nothing changed because nobody was assigned to change it.",
    "prevent": "Every corrective action has a named owner and a due date in the CMMS.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_buildup",
    "cls": "fix",
    "label": "buildup unbalance",
    "text": "Product on the wheel is the unbalance.",
    "prevent": "Wheel cleaning on the PM, interval set by the product. An access door in the housing.",
    "primary": [
      "fan"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_wheel_damage",
    "cls": "escalate",
    "label": "wheel damage",
    "text": "A cracked or eroded wheel is a wheel that will throw a piece.",
    "prevent": "Dye penetrant on high speed wheels on the PM. Blade thickness on abrasive service. Hub fastening checked.",
    "primary": [
      "fan"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_drive",
    "cls": "fix",
    "label": "belt drive",
    "text": "Over-tension and worn sheaves both vibrate and both load the fan bearing.",
    "prevent": "Tension and sheave gauge on the PM.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "bearing",
      "fan"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_balance",
    "cls": "action",
    "label": "balance or resonance",
    "text": "A clean, sound wheel on good bearings and a correct drive that still vibrates at 1x is out of balance or on a resonance.",
    "prevent": "Balance to G6.3 after any wheel work. Baseline vibration reading recorded.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "bearing",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_system",
    "cls": "fix",
    "label": "system resistance changed",
    "text": "The fan moved on its curve because the system moved.",
    "prevent": "Filter differential pressure on the PM. Damper positions recorded.",
    "primary": [
      "fan"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_backward",
    "cls": "fix",
    "label": "wrong rotation",
    "text": "A centrifugal wheel backward moves about half the air at high power.",
    "prevent": "Rotation verified on every electrical change before the belts go on.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_clearance",
    "cls": "action",
    "label": "wheel to inlet cone clearance",
    "text": "An opened gap or lost overlap lets air recirculate; pressure and efficiency drop.",
    "prevent": "Cone clearance measured after any wheel or bearing work and recorded.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_stall",
    "cls": "action",
    "label": "stall or surge",
    "text": "The fan is being throttled below its peak pressure and the airflow has separated.",
    "prevent": "Operating point kept to the right of peak pressure. Dampers with minimum stops.",
    "primary": [
      "fan"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_overload_fc",
    "cls": "fix",
    "label": "overloading fan curve",
    "text": "Forward-curved and radial fans draw more power the more air they move; open the system and the motor trips.",
    "prevent": "Amps recorded with the damper position. The overloading characteristic noted on the fan record.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_overload_bi",
    "cls": "action",
    "label": "backward-inclined at high amps",
    "text": "A non-overloading fan drawing high amps is past its rated speed, moving denser air than design, or has a drive or bearing problem.",
    "prevent": "Sheave ratio and speed on the fan record.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "bearing",
      "motor",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_overload_axial",
    "cls": "fix",
    "label": "axial fan at low flow",
    "text": "Axial fans draw the most power near shutoff.",
    "prevent": "Startup damper position on the procedure.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_cold_start",
    "cls": "fix",
    "label": "cold dense air",
    "text": "A fan sized for hot gas moving cold air draws power in proportion to the density.",
    "prevent": "Cold start procedure on the fan record.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_ratio",
    "cls": "fix",
    "label": "wrong sheave ratio",
    "text": "A 10 percent speed increase is 33 percent more power.",
    "prevent": "Sheaves by part number on the PM sheet.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "fan",
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_rub",
    "cls": "escalate",
    "label": "wheel rubbing",
    "text": "The wheel is touching the cone or the housing: it has moved, a bearing has play, or the housing has been dented.",
    "prevent": "Cone clearance and shaft play on the PM.",
    "primary": [
      "fan"
    ],
    "contributing": [
      "bearing"
    ],
    "tagged": true
  },
  {
    "module": "fans",
    "moduleName": "Fans and Blowers",
    "num": "17",
    "file": "builtwright_fans_v1.html",
    "tab": "troubleshoot",
    "id": "r_bearing",
    "cls": "escalate",
    "label": "fan bearing",
    "text": "Fan bearings fail from unbalance, belt over-tension, heat, and contamination, in that order.",
    "prevent": "Wheel cleaning, tension by gauge, and vibration route on the PM.",
    "primary": [
      "bearing"
    ],
    "contributing": [
      "fan",
      "lube",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_cooler",
    "cls": "fix",
    "label": "cooling",
    "text": "Nine out of ten temperature trips.",
    "prevent": "Cooler cleaning on the PM, interval by the room. Room temperature logged in summer.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "fan",
      "motor",
      "powertrans"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_thermo",
    "cls": "action",
    "label": "thermostatic valve or oil circuit",
    "text": "Oil coming off the cooler hot means the oil is not being cooled: the thermostatic valve is stuck in bypass, the oil cooler is fouled internally, or the oil flow is restricted.",
    "prevent": "Thermostatic element replaced on the manufacturer interval with the oil filter.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_oillow",
    "cls": "fix",
    "label": "low oil level",
    "text": "Less oil means less heat carried away and less sealing.",
    "prevent": "Level on the PM, with the compressor stopped and depressurised.",
    "primary": [
      "compressor",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_inlet",
    "cls": "fix",
    "label": "inlet restriction",
    "text": "A blocked inlet filter raises the pressure ratio across the airend and heats the discharge.",
    "prevent": "Inlet filter on differential and on hours; shorter interval in a dusty room.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_airend",
    "cls": "escalate",
    "label": "airend bearings",
    "text": "A rumble that rises with load and a temperature that creeps up with clean cooling is the airend.",
    "prevent": "Oil analysis on the interval. Discharge temperature trended. Airend hours against the manufacturer life.",
    "primary": [
      "bearing",
      "compressor"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_noload",
    "cls": "action",
    "label": "not loading: inlet valve, control signal, or controller",
    "text": "The airend is turning but the inlet is closed.",
    "prevent": "Inlet valve and unloader on the PM. Control settings recorded.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_recip_valves",
    "cls": "action",
    "label": "reciprocating: valves or rings",
    "text": "Low output on a piston compressor is leaking valves or worn rings.",
    "prevent": "Valves on the service interval. Output test (pump-up time on the receiver) on the PM.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_screw_output",
    "cls": "action",
    "label": "screw or vane: filter, valve, or wear",
    "text": "Low output on a screw with the inlet open is a restriction, a minimum pressure valve fault, or rotor wear.",
    "prevent": "Differentials on the PM. Output tested annually.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_demand",
    "cls": "fix",
    "label": "demand exceeds supply: leaks first",
    "text": "The compressor is doing its job; the plant is taking it all.",
    "prevent": "Leak survey quarterly. Loaded hours trended.",
    "primary": [
      "pneu"
    ],
    "contributing": [
      "compressor"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_separator",
    "cls": "action",
    "label": "separator element or scavenge line",
    "text": "Oil is getting past the separator.",
    "prevent": "Separator on differential and on hours. Scavenge line orifice cleaned on the PM.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_mpv",
    "cls": "fix",
    "label": "minimum pressure valve",
    "text": "The separator needs pressure to work; below the minimum, oil carries over.",
    "prevent": "Minimum pressure valve checked on the PM.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_controls",
    "cls": "fix",
    "label": "control settings",
    "text": "Short-cycling wears the compressor; running unloaded wastes power.",
    "prevent": "Loaded and total hours logged on the PM. Set points recorded and locked.",
    "primary": [
      "compressor"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_water",
    "cls": "action",
    "label": "water: aftercooler, drains, or dryer",
    "text": "Water in the plant is water that was not removed at the compressor.",
    "prevent": "Auto drains tested on the PM. Aftercooler cleaned with the oil cooler.",
    "primary": [
      "compressor",
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_belt",
    "cls": "fix",
    "label": "belt slip",
    "text": "Tension, sheave wear, or an overloaded compressor.",
    "prevent": "Tension by gauge; unloader function on the PM.",
    "primary": [
      "powertrans"
    ],
    "contributing": [
      "compressor"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_knock",
    "cls": "escalate",
    "label": "reciprocating knock",
    "text": "A knock is a valve plate broken, a piston contacting the head, or a bearing.",
    "prevent": "Valves on interval; crankcase oil on hours and inspected for metal.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "bearing",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_mounts",
    "cls": "fix",
    "label": "mounts and piping",
    "text": "Compressors sit on isolation mounts and the piping is connected with flexible connectors for a reason.",
    "prevent": "Mounts and flex connectors on the PM.",
    "primary": [
      "compressor"
    ],
    "contributing": [
      "alignment"
    ],
    "tagged": true
  },
  {
    "module": "compressors",
    "moduleName": "Compressors",
    "num": "18",
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "id": "r_oilcond",
    "cls": "action",
    "label": "oil condition",
    "text": "Milky oil is water (thermostatic valve stuck open, a water-cooled cooler leaking, or the compressor running too cold to boil the moisture off). Dark oil is oxidation (too hot, too old, or the wrong oil).",
    "prevent": "Oil on hours and on analysis. Operating temperature in the design window.",
    "primary": [
      "compressor",
      "lube"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_worn",
    "cls": "fix",
    "label": "worn: adjust or reline",
    "text": "A gap past maximum means the springs are extended and the clamping force is down.",
    "prevent": "Gap and lining thickness measured and recorded every PM; the trend sets the reline date.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_contam",
    "cls": "fix",
    "label": "contaminated friction surface",
    "text": "Oil on a dry friction surface cuts the friction to a fraction.",
    "prevent": "Seal condition on the adjacent machine on the PM. Grease quantity on the bearings.",
    "primary": [
      "brake"
    ],
    "contributing": [
      "bearing",
      "lube",
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_glaze",
    "cls": "action",
    "label": "glazed lining",
    "text": "A hard shiny surface from overheating or light dragging.",
    "prevent": "Gap at nominal; actuator checked; duty against the rating.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_undersized",
    "cls": "escalate",
    "label": "brake undersized for the load, or a second brake carrying it",
    "text": "Correct gap, good lining, clean, and it still creeps: it is being asked to hold more than it can, or on a dual-brake hoist the other brake has been carrying the load.",
    "prevent": "Holding test on each brake independently on the inspection interval.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_gap_small",
    "cls": "fix",
    "label": "gap too small or uneven",
    "text": "Too little clearance, or a cocked armature, drags on one side.",
    "prevent": "Three-point gap on the PM.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_lever",
    "cls": "fix",
    "label": "manual release partly engaged",
    "text": "A release lever or screw not fully returned holds the brake partly off, or partly on.",
    "prevent": "Manual release position on the return-to-service checklist.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "act2",
    "cls": "action",
    "label": "coil, rectifier, or voltage",
    "text": "A DC brake coil that does not get its voltage does not release; a weak one releases slowly and drags.",
    "prevent": "Coil voltage and rectifier on the electrical PM. Gap within maximum.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_air",
    "cls": "fix",
    "label": "air supply or valve",
    "text": "Pressure, volume, or a valve.",
    "prevent": "Pressure at the unit recorded on the PM; air quality per the Pneumatics module.",
    "primary": [
      "brake",
      "pneu"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_hyd",
    "cls": "action",
    "label": "thruster or hydraulic release",
    "text": "A thruster with low oil or a caliper with a leak does not complete its stroke.",
    "prevent": "Thruster oil and stroke on the PM. Hydraulic system on the Hydraulics module PM.",
    "primary": [
      "brake",
      "hydraulics"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_wet",
    "cls": "action",
    "label": "wet clutch: oil, wear, or pressure",
    "text": "Wet clutches slip on the wrong oil, worn plates, or low apply pressure.",
    "prevent": "Specified oil on the tag. Piston travel recorded.",
    "primary": [
      "brake"
    ],
    "contributing": [
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_noise",
    "cls": "action",
    "label": "chatter, squeal, or bang",
    "text": "Chatter is stick-slip on engagement: contamination, glazing, the wrong oil on a wet clutch, or a loose mounting. Squeal is a dry lining under light drag. A bang is excessive gap or a loose hub or key.",
    "prevent": "Gap and mounting on the PM. Correct oil.",
    "primary": [
      "brake"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "clutches",
    "moduleName": "Clutches and Brakes",
    "num": "19",
    "file": "builtwright_clutches_brakes_v1.html",
    "tab": "troubleshoot",
    "id": "r_backstop",
    "cls": "action",
    "label": "backstop or torque limiter",
    "text": "A backstop that lets the belt run back, or a torque limiter that slips at normal load or never slips at a jam.",
    "prevent": "Backstop runback test and limiter setting on the PM, recorded.",
    "primary": [
      "brake"
    ],
    "contributing": [
      "conveyor",
      "lube"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_stops",
    "cls": "fix",
    "label": "not reaching the seat: stops, bench set, or torque switch",
    "text": "A valve that is not fully closed passes, and the actuator is the reason.",
    "prevent": "Stroke test and stop check after any actuator work; bench set recorded.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_wiredraw",
    "cls": "action",
    "label": "wire drawn seat from throttling",
    "text": "High velocity leakage past a nearly closed gate or ball cut a groove in the seat. It will never seal.",
    "prevent": "Throttling valves identified and tagged; isolation valves on-off only.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_softseat",
    "cls": "action",
    "label": "soft seat damaged",
    "text": "Cut by debris, extruded by pressure, hardened by heat, or swollen by the fluid.",
    "prevent": "Seat material matched to the service on the valve list; strainers upstream where debris is expected.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_metalseat",
    "cls": "action",
    "label": "metal seat scored or fouled",
    "text": "Debris on the seat, or scoring from solids.",
    "prevent": "Strainers; exercise schedule; seat inspection on the interval.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_packing",
    "cls": "fix",
    "label": "stem packing",
    "text": "The most common valve leak.",
    "prevent": "Gland load checked on the PM; live loading on valves that stroke constantly.",
    "primary": [
      "seal",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_pneu_act",
    "cls": "action",
    "label": "pneumatic actuator or air supply",
    "text": "Air pressure, air quality, the positioner, or the actuator itself.",
    "prevent": "Instrument air quality maintained; positioner calibration on the interval.",
    "primary": [
      "pneu",
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_elec_act",
    "cls": "escalate",
    "label": "electric actuator: torque and limit settings, or electrical",
    "text": "Torque switch trips before the valve reaches its seat, a limit switch set short, the hand-auto clutch engaged, or a motor or control fault.",
    "prevent": "Actuator settings recorded; valve exercised so it does not stiffen.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "motor"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_seized",
    "cls": "action",
    "label": "stiff or seized valve",
    "text": "Packing too tight, a stem scored or bent, a gate thermally bound, a ball or plug seized in its seat by deposits or corrosion, or a valve that has not moved in years.",
    "prevent": "Exercise schedule for isolation valves. Correct materials for the service.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_stiction",
    "cls": "fix",
    "label": "stiction: packing or deposits",
    "text": "The stem grabs and releases, so the valve overshoots each small correction and the loop cycles.",
    "prevent": "Packing load set by procedure, not by feel; live loading on control valves.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "seal"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_positioner",
    "cls": "action",
    "label": "positioner or air",
    "text": "The positioner is not driving the stem to the signal promptly.",
    "prevent": "Positioner calibration and linkage on the interval.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "pneu"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_hunt",
    "cls": "escalate",
    "label": "hunting: tuning, sizing, or stiction",
    "text": "A loop that cycles has a valve that cannot make small moves (stiction, oversized valve working near closed) or a controller tuned too aggressively.",
    "prevent": "Valve sized to work in the middle of its range; stiction eliminated before tuning.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_cavitation",
    "cls": "action",
    "label": "cavitation or flashing in the trim",
    "text": "The pressure drop across the trim takes the liquid below its vapour pressure; bubbles form and collapse on the trim and body.",
    "prevent": "Control valve sizing reviewed against actual process conditions.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_hammer",
    "cls": "action",
    "label": "water hammer",
    "text": "A fast closure or a slamming check on a liquid line stops the column and the pressure spikes.",
    "prevent": "Closure times specified; non-slam checks on pump discharges.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_chatter",
    "cls": "action",
    "label": "chatter",
    "text": "A check valve fluttering in low flow, or a relief valve chattering near its set point.",
    "prevent": "Check valves sized for the flow; relief valves set with margin and inlet piping per code.",
    "primary": [
      "valve"
    ],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "valves",
    "moduleName": "Process Valves and Actuators",
    "num": "20",
    "file": "builtwright_process_valves_v1.html",
    "tab": "troubleshoot",
    "id": "r_check",
    "cls": "action",
    "label": "check valve slam or pass",
    "text": "Slam: closes late. Pass: seat or disc damage, or a disc off its arm.",
    "prevent": "Check valves inspected on the interval; non-slam designs where slam is known.",
    "primary": [
      "valve"
    ],
    "contributing": [
      "pump"
    ],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_technique",
    "cls": "fix",
    "label": "technique: force, squareness, cleanliness",
    "text": "Small scatter is the hand, not the tool.",
    "prevent": "Three readings recorded as a habit; the spread is part of the record.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_partshape",
    "cls": "action",
    "label": "the part is not round, not parallel, or not clean",
    "text": "Large scatter that follows position is the part telling you its shape.",
    "prevent": "Seats and bores measured as shapes (positions and angles), not as single numbers.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_disagree",
    "cls": "action",
    "label": "two instruments disagree: check both against a standard",
    "text": "One of them is wrong, and it may be the one you trust.",
    "prevent": "A gauge block in the toolbox; instruments checked before critical jobs.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_misread",
    "cls": "fix",
    "label": "reading error",
    "text": "The commonest wrong measurement is a right tool read wrong.",
    "prevent": "Read twice, the second time out loud, on anything that goes on a record.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_temp",
    "cls": "fix",
    "label": "temperature",
    "text": "Steel grows about 12 µm per metre per °C. A hot shaft measures big; a cold tool on a warm part measures small.",
    "prevent": "Temperature written with every fit measurement.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_rigid",
    "cls": "fix",
    "label": "setup not rigid",
    "text": "The indicator is reading its own mounting.",
    "prevent": "Tap test after every setup.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_cosine",
    "cls": "fix",
    "label": "cosine error",
    "text": "A plunger not square, or a lever at an angle, reads low.",
    "prevent": "Square and parallel on every indicator setup.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_preload",
    "cls": "fix",
    "label": "no pre-load, or wrong range",
    "text": "An indicator zeroed at the end of its travel cannot read one direction; a DTI on a large movement runs out.",
    "prevent": "Pre-load as a habit.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_sag",
    "cls": "action",
    "label": "validity check failed: sag, looseness, or axial float",
    "text": "On rim readings, top plus bottom should equal left plus right. If they do not, the setup is wrong.",
    "prevent": "Validity check on every set of readings before any shim is cut.",
    "primary": [],
    "contributing": [],
    "tagged": true
  },
  {
    "module": "measurement",
    "moduleName": "Precision Measurement",
    "num": "21",
    "file": "builtwright_precision_measurement_v1.html",
    "tab": "troubleshoot",
    "id": "r_mic",
    "cls": "action",
    "label": "micrometer condition",
    "text": "A micrometer that will not zero, feels rough, or reads differently at different points on the standard is damaged or dirty.",
    "prevent": "Stored open, in the case, away from the grinder. Calibrated on the interval and after any drop.",
    "primary": [],
    "contributing": [],
    "tagged": true
  }
];
