BW.register("pumps", {
  "key": "pumps",
  "num": "01",
  "name": "Pump Systems",
  "source": "builtwright_pumps_combined_v1.html",
  "tabs": [
    {
      "id": "types",
      "label": "Pump Types",
      "active": true,
      "style": ""
    },
    {
      "id": "compare",
      "label": "Cent vs PD",
      "active": false,
      "style": ""
    },
    {
      "id": "chain",
      "label": "System Chain",
      "active": false,
      "style": ""
    },
    {
      "id": "rotate",
      "label": "Rotation Check",
      "active": false,
      "style": ""
    },
    {
      "id": "diagnose",
      "label": "Diagnose",
      "active": false,
      "style": ""
    },
    {
      "id": "leaks",
      "label": "Leak Detection",
      "active": false,
      "style": ""
    },
    {
      "id": "selfcheck",
      "label": "Self-Check",
      "active": false,
      "style": ""
    },
    {
      "id": "safety",
      "label": "Safety",
      "active": false,
      "style": "border-color:#A32D2D; color:#F09595;"
    }
  ],
  "render": {
    "title": "Pump Systems",
    "badge": "Module 01",
    "tree": {
      "progress": "diag-progress",
      "container": "diag-container"
    },
    "treeTab": "diagnose",
    "groups": {
      "selectPump": {
        "scope": null,
        "cardClass": ".type-card",
        "prefix": "pcard-",
        "data": "pumpData",
        "display": "pump-display"
      },
      "selectComp": {
        "scope": null,
        "cardClass": ".chain-box",
        "prefix": "node-",
        "data": "compData",
        "display": "comp-display"
      }
    },
    "reveals": {},
    "toggles": [
      {
        "name": "toggleDisc",
        "byId": true
      }
    ],
    "bespoke": []
  },
  "cards": {
    "pumpData": {
      "centrifugal": {
        "icon": "ti-propeller",
        "name": "Centrifugal Pump",
        "role": "Dynamic pump: variable flow that responds to system conditions",
        "body": "A centrifugal pump uses a rotating impeller to add velocity to fluid, creating flow. That flow meets system resistance, and the resulting back-pressure is what registers on a gauge. The pump does not build pressure: it moves fluid, and pressure is a consequence of what the system does with that flow. Flow rate depends on the relationship between the pump curve and the system resistance curve. When those curves intersect, that is the operating point. Move either curve (change system resistance, change speed) and the operating point shifts.",
        "tips": [
          "Flow varies with system resistance. A centrifugal pump cannot hold constant flow if resistance changes.",
          "Cannot run against a closed discharge indefinitely without damage, but will not immediately catastrophically fail the way a PD pump will.",
          "Not self-priming in most configurations. Must be flooded or primed before startup.",
          "Cavitation is the most common and damaging abnormal condition. Address suction system issues before the impeller is destroyed.",
          "Efficiency peaks at the best efficiency point (BEP) on the pump curve. Running far from BEP causes heat, vibration, and accelerated wear."
        ]
      },
      "axial": {
        "icon": "ti-arrow-right-circle",
        "name": "Axial Flow Pump",
        "role": "High volume, low head: propeller-type impeller",
        "body": "An axial flow pump (propeller pump) moves fluid parallel to the shaft axis rather than radially. It produces very high flow rates at low system resistance and is best suited to high-volume, low-resistance applications. Common in irrigation, flood control, and large cooling water systems. The operating principle is dynamic (not positive displacement) but the impeller geometry is entirely different from a centrifugal pump.",
        "tips": [
          "Very sensitive to running off the design point. Axial flow pumps can experience severe internal recirculation at low flow.",
          "Impeller pitch is sometimes adjustable (variable pitch axial pumps) to allow operating point optimization.",
          "Not suitable for high-pressure applications. They are volume movers, not pressure builders.",
          "Suction submergence requirements are critical. Insufficient submergence causes vortexing and air ingestion.",
          "Bearing loads are predominantly axial on vertical installations. Thrust bearing condition is the primary maintenance focus."
        ]
      },
      "gear": {
        "icon": "ti-settings-2",
        "name": "Gear Pump",
        "role": "Positive displacement: external or internal gear mesh",
        "body": "A gear pump uses two meshing gears (external type) or a gear within a ring gear (internal/gerotor type) to trap fluid in the spaces between gear teeth and carry it from suction to discharge. It is a true positive displacement pump: flow is proportional to speed and does not vary with discharge pressure within its operating range. Common for lubrication systems, hydraulic circuits, fuel transfer, and viscous fluid handling.",
        "tips": [
          "Internal gear clearances determine efficiency. Worn gears allow fluid to slip back from discharge to suction, reducing flow.",
          "Never run against a closed discharge. A pressure relief valve is mandatory.",
          "Sensitive to contamination. Abrasive particles in the fluid accelerate gear wear and score the pump body.",
          "Handles viscous fluids well. Performance actually improves slightly with moderate viscosity as internal leakage decreases.",
          "Low flow or dropping flow at constant speed indicates internal wear. Measure flow against baseline to trend wear rate."
        ]
      },
      "lobe": {
        "icon": "ti-leaf",
        "name": "Lobe Pump",
        "role": "Positive displacement: counter-rotating lobes, sanitary design",
        "body": "A lobe pump uses two counter-rotating lobed rotors that do not contact each other. Fluid is carried in the cavities between the lobes and the pump casing. Because the rotors do not touch, lobe pumps are gentle on the product and easy to clean in place (CIP). They are the standard pump type in food and beverage, pharmaceutical, and cosmetic manufacturing where product integrity and sanitation are critical.",
        "tips": [
          "The rotors do not contact each other or the casing. Internal clearances are tight but non-contacting. Any contact indicates wear or a foreign object.",
          "CIP compatible when properly designed and installed. Verify that all elastomers and seals are rated for the CIP chemicals used.",
          "Flow pulsation is present but lower than piston pumps. Pulsation increases as the pump wears and clearances grow.",
          "Never run dry. Lobe pumps require fluid for lubrication of the timing gears and rotor shafts. Dry running destroys the pump rapidly.",
          "Timing gears synchronize the rotors. Worn or damaged timing gears cause the rotors to contact, resulting in sudden loud failure."
        ]
      },
      "vane": {
        "icon": "ti-pinwheel",
        "name": "Vane Pump",
        "role": "Positive displacement: sliding vanes, hydraulic and lubrication service",
        "body": "A vane pump uses a slotted rotor with sliding vanes that extend outward by centrifugal force or spring pressure to maintain contact with the casing wall. Fluid is trapped between adjacent vanes and carried from suction to discharge. Used extensively in hydraulic power units, power steering systems, and industrial lubrication circuits.",
        "tips": [
          "Vane condition is the primary wear item. Vanes wear at the tips where they contact the casing ring. Measure vane length at inspection and compare to manufacturer minimum.",
          "Vane pumps are sensitive to fluid cleanliness. Contaminated hydraulic oil accelerates vane and casing wear significantly.",
          "Some vane pump designs require the fluid for vane lubrication. These must not be run dry or on incompatible fluids.",
          "Pressure limitations are lower than gear or piston pumps. Not suitable for very high-pressure hydraulic circuits.",
          "Noise increase in a vane pump usually means worn vanes, worn casing ring, or cavitation on the suction side."
        ]
      },
      "screw": {
        "icon": "ti-screw",
        "name": "Screw Pump",
        "role": "Positive displacement: helical screws, quiet high-viscosity service",
        "body": "A screw pump uses one, two, or three helical screw rotors to trap and move fluid axially along the screw thread. The fluid moves in a continuous plug rather than discrete pulses, producing very smooth, low-pulsation flow. Screw pumps handle high-viscosity fluids extremely well and run very quietly. Common in fuel oil systems, crude oil transfer, lubrication systems, and some food applications.",
        "tips": [
          "Nearly pulse-free flow makes screw pumps suitable for systems sensitive to pressure pulsation.",
          "Internal clearances between screws and casing are the key wear parameter. As clearances grow, internal leakage (slip) increases and flow drops at a given speed.",
          "Very sensitive to running dry. The fluid provides lubrication between the rotors and casing.",
          "Multi-screw designs require the timing of the screw threads to be maintained. Worn bearings that allow axial or radial displacement cause screw contact and rapid failure.",
          "Suction conditions are important. High-viscosity fluids at low temperature may not flow into the pump fast enough, causing cavitation-like conditions even with no vapour present."
        ]
      },
      "piston": {
        "icon": "ti-engine",
        "name": "Piston / Plunger Pump",
        "role": "Positive displacement: reciprocating, capable of high flow against high system resistance",
        "body": "A piston or plunger pump uses a reciprocating piston or plunger driven by a crankshaft or eccentric to draw fluid in through a suction check valve and push it out through a discharge check valve. Like all pumps, they create flow, but because the displacement is positive and fixed per stroke, they can maintain that flow against very high system resistance. They are used in high-pressure cleaning, hydraulic systems, metering applications, and process injection where the system demands high resistance to flow. Flow is pulsating by nature, with one pulse per cylinder per revolution.",
        "tips": [
          "Check valves are critical components with no equivalent in rotary pumps. A leaking or stuck check valve causes loss of flow on that cylinder and can cause backflow damage.",
          "Pulsation dampeners on the discharge side are standard practice. A failed or waterlogged dampener allows full shock loads into the piping.",
          "Packing and plunger condition go together. A worn plunger scores the packing. Replace both together.",
          "High-pressure fluid jets from a packing failure are a serious injection injury hazard. Never use your hand to check for leaks on a high-pressure reciprocating pump.",
          "Crankshaft bearing condition affects the entire pump. Worn main bearings allow plunger misalignment, which destroys packing and valve seats rapidly."
        ]
      },
      "diaphragm": {
        "icon": "ti-wave-square",
        "name": "Diaphragm Pump",
        "role": "Positive displacement: sealless design for chemical, slurry, and hazardous fluids",
        "body": "A diaphragm pump uses a flexible diaphragm driven by hydraulic pressure, a mechanical actuator, or compressed air (AODD pumps) to create the pumping action. The diaphragm completely isolates the process fluid from the drive mechanism, eliminating shaft seals entirely. This makes diaphragm pumps the choice for hazardous chemicals, corrosive fluids, abrasive slurries, and any application where a seal leak is unacceptable.",
        "tips": [
          "The diaphragm is the seal and the pumping element simultaneously. Any crack or pinhole in the diaphragm is a failure.",
          "On air-operated double diaphragm (AODD) pumps, process fluid in the air exhaust indicates a diaphragm failure. Shut down immediately.",
          "Check valve condition is equally critical on diaphragm pumps as on piston pumps. Ball check valves in slurry service wear rapidly.",
          "Diaphragm material must be compatible with the process fluid. Consult the manufacturer chemical resistance chart. A diaphragm swollen or hardened by the process fluid is a sign of material incompatibility.",
          "AODD pumps can stall against a closed discharge without catastrophic failure (unlike other PD pumps) because the air pressure is the driving force and is self-limiting. However, the discharge should still never be blocked routinely."
        ]
      }
    },
    "compData": {
      "supply": {
        "icon": "ti-valve",
        "name": "Supply line and suction valve",
        "role": "Delivers fluid to the pump inlet",
        "body": "The suction side is where most pump problems originate. Low flow, cavitation, and premature seal wear are frequently caused by suction issues misdiagnosed as pump failures. The supply valve must be fully open. Even a partially closed gate valve creates turbulence that the pump curve does not account for.",
        "tips": [
          "Confirm suction valve is fully open, not just cracked",
          "Check for air leaks at flanges and unions. Air ingestion causes cavitation noise.",
          "Suction strainer may be blocked. Check differential pressure across it if instrumented.",
          "NPSH margin: the pump must have adequate net positive suction head or it will cavitate regardless of pump condition.",
          "Suction line should be as short and straight as possible with no high points that trap air."
        ]
      },
      "motor": {
        "icon": "ti-engine",
        "name": "Drive motor",
        "role": "Prime mover: starting point of the system chain",
        "body": "The motor is the starting point of the system chain. Start with what you can observe mechanically and by smell. Any electrical diagnosis beyond these observational checks must be handled by a competent electrical tradesperson.",
        "tips": [
          "Does the motor attempt to start? A hum with no rotation suggests a mechanical bind. Pass to your electrical contact.",
          "Burnt or acrid smell indicates insulation or winding damage.",
          "Check rotation direction against the arrow on the pump casing.",
          "If the motor trips its overload regularly, do not keep resetting without finding the cause.",
          "Regular skip or slip at intervals is almost always mechanical, not electrical."
        ]
      },
      "coupling": {
        "icon": "ti-link",
        "name": "Coupling",
        "role": "Transfers torque from motor shaft to pump shaft",
        "body": "The coupling is the mechanical bridge between driver and driven equipment. A burned or cracked coupling element is almost always a misalignment message, not just wear. See Module 03 for full coupling and alignment coverage.",
        "tips": [
          "Inspect the flexible element for cracking, chunking, or compression set.",
          "Black rubber dust inside the coupling guard means the element has been failing under load.",
          "Check hub bores for fretting or black powder: indicates shaft movement from a loose fit or worn keyway.",
          "Angular and parallel misalignment both cause premature coupling and bearing failure.",
          "Never operate without the coupling guard in place."
        ]
      },
      "gearbox": {
        "icon": "ti-settings",
        "name": "Gearbox",
        "role": "Modifies speed and torque between motor and pump",
        "body": "Not all pump systems include a gearbox, but when they do it adds complexity to fault isolation. Always verify lube level and condition before condemning gear components.",
        "tips": [
          "Check oil level and condition. Milky oil means water ingress. Black oil means overheating or oxidation.",
          "Isolate the gearbox by disconnecting both sides and rotating by hand to feel for roughness or binding.",
          "Output shaft seal weeps progress quickly under heat. Do not ignore small leaks.",
          "Confirm the input and output speed ratio matches the process requirements."
        ]
      },
      "pump": {
        "icon": "ti-propeller",
        "name": "Pump: impeller and casing",
        "role": "Converts shaft rotation to fluid velocity, producing flow that the system resists",
        "body": "The pump itself is often the last thing to blame. If the system chain checks out and fluid supply is good, then look inside. Impeller wear, wear ring clearance, and mechanical seal condition are the main internal failure modes. Cavitation damage is a symptom of a system problem, not a pump defect.",
        "tips": [
          "No flow but motor running: check rotation direction first, then suction valve.",
          "Low flow or pressure: impeller wear, increased wear ring clearance, or higher system resistance than designed.",
          "Cavitation sounds like pumping gravel, a crackling or rattling from within the casing.",
          "Mechanical seal leaks: a steady drip or spray means the seal faces are damaged.",
          "Stuffing box packing should weep 40 to 60 drops per minute for cooling."
        ]
      },
      "discharge": {
        "icon": "ti-arrow-right",
        "name": "Discharge line and valve",
        "role": "Carries flow to the process: system resistance here determines gauge reading",
        "body": "The discharge side determines the resistance the pump works against. On a centrifugal pump, increasing resistance reduces flow and raises the gauge reading: the pump shifts left on its curve. On a PD pump, increasing resistance does not reduce flow. The pump continues to displace the same volume per cycle, and gauge pressure climbs without limit until the relief valve lifts or something fails. Always confirm the discharge path is open before starting either pump type.",
        "tips": [
          "Discharge valve position sets the operating point on the centrifugal pump curve.",
          "Deadheading a centrifugal pump: fluid heats fast. Open discharge immediately.",
          "On a PD pump, a closed discharge is a safety emergency. Do not run a PD pump against a closed discharge under any circumstances.",
          "Check valve stuck open means backflow when pump stops, causing reverse rotation on restart.",
          "High discharge pressure: look for blockage, a closed valve downstream, or a process change."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What type of pump are you working on?",
        "hint": "This determines which diagnostic logic applies.",
        "options": [
          {
            "label": "Centrifugal pump",
            "next": "cent_symptom"
          },
          {
            "label": "Rotary PD pump (gear, lobe, vane, screw)",
            "next": "pd_rot_symptom"
          },
          {
            "label": "Reciprocating PD pump (piston, plunger, diaphragm)",
            "next": "pd_rec_symptom"
          }
        ]
      },
      "cent_symptom": {
        "q": "What is the primary symptom on the centrifugal pump?",
        "hint": "Choose the most prominent symptom.",
        "options": [
          {
            "label": "No flow",
            "next": "c_noflow1"
          },
          {
            "label": "Low flow or low pressure",
            "next": "c_lowflow1"
          },
          {
            "label": "Noise: rattling, grinding, or squealing",
            "next": "c_noise1"
          },
          {
            "label": "Overheating",
            "next": "c_heat1"
          },
          {
            "label": "Vibration",
            "next": "c_vibe"
          },
          {
            "label": "Seal or packing leaking",
            "next": "c_seal1"
          },
          {
            "label": "Regular skip or slip at intervals",
            "next": "interval1"
          }
        ]
      },
      "c_noflow1": {
        "q": "Is the motor running?",
        "hint": "Check for shaft rotation or feel for vibration at the motor housing.",
        "options": [
          {
            "label": "No, motor stopped or will not start",
            "next": "c_motor_stopped",
            "cls": "no"
          },
          {
            "label": "Yes, motor running",
            "next": "c_noflow2",
            "cls": "yes"
          }
        ]
      },
      "c_motor_stopped": {
        "type": "result",
        "cls": "action",
        "label": "mechanical check first, then electrical contact",
        "text": "Motor is not running. Start with what you can safely observe.",
        "sub": "Check: is there a burnt or acrid smell? Does the motor attempt to start and hum without turning? Is the shaft free to rotate by hand after locking out? Document observations and pass to a competent electrical tradesperson for further diagnosis.",
        "prevent": "Motor amps and bearing condition logged on the PM. A motor that stops on overload has usually been drawing high current for weeks first."
      },
      "c_noflow2": {
        "q": "Is the suction valve fully open?",
        "hint": "Gate valves can appear open but be partially closed.",
        "options": [
          {
            "label": "No, partially or fully closed",
            "next": "c_open_suction",
            "cls": "no"
          },
          {
            "label": "Yes, confirmed fully open",
            "next": "c_noflow3",
            "cls": "yes"
          }
        ]
      },
      "c_open_suction": {
        "type": "result",
        "cls": "fix",
        "label": "simple fix",
        "text": "Open the suction valve fully.",
        "sub": "After opening, allow the pump to prime and confirm flow develops within 30 to 60 seconds. If flow does not develop, continue troubleshooting.",
        "prevent": "Suction valve position on the startup checklist. Lock or tag valves that must stay open."
      },
      "c_noflow3": {
        "q": "Is the discharge valve open and path clear?",
        "hint": "Check all isolation valves in the downstream path.",
        "options": [
          {
            "label": "No, discharge restricted or closed",
            "next": "c_open_discharge",
            "cls": "no"
          },
          {
            "label": "Yes, discharge path open",
            "next": "c_noflow4",
            "cls": "yes"
          }
        ]
      },
      "c_open_discharge": {
        "type": "result",
        "cls": "action",
        "label": "open discharge: use caution",
        "text": "Open the discharge valve carefully and verify flow develops.",
        "sub": "If the pump has been deadheading, check fluid temperature before opening as it may be very hot. Verify seal condition after restoring flow.",
        "prevent": "Startup procedure written down: which valve opens when, and why a PD pump never starts against a closed discharge."
      },
      "c_noflow4": {
        "q": "Is the pump rotating in the correct direction?",
        "hint": "Check the rotation arrow on the pump casing.",
        "options": [
          {
            "label": "Rotating backwards",
            "next": "c_reverse",
            "cls": "no"
          },
          {
            "label": "Correct rotation confirmed",
            "next": "c_noflow5",
            "cls": "yes"
          }
        ]
      },
      "c_reverse": {
        "type": "result",
        "cls": "action",
        "label": "correct rotation: electrical contact required",
        "text": "Reverse rotation requires swapping two motor leads. This is electrical work.",
        "sub": "Note the issue and pass to a competent electrical tradesperson. On a VFD-driven motor the rotation direction can often be changed in drive parameters.",
        "prevent": "Rotation verified on every motor change, wiring change, or VFD swap before the coupling goes on. Mark the correct direction on the casing."
      },
      "c_noflow5": {
        "type": "result",
        "cls": "escalate",
        "label": "internal inspection likely needed",
        "text": "Power on, valves correct, rotation correct. Suspect internal pump fault.",
        "sub": "Disconnect the pump from the coupling and rotate the shaft by hand. If rough, tight, or seized, the problem is internal. Likely causes: worn impeller or wear rings, cavitation damage, or a failed bearing. Check wear ring clearance against manufacturer specification, typically 0.010 to 0.015 inches for cast iron.",
        "prevent": "Find what caused the internal failure: cavitation, dry run, foreign material, or wear. A rebuilt pump in the same conditions fails again."
      },
      "c_lowflow1": {
        "q": "Has anything in the system changed recently?",
        "hint": "Process changes, valve positions, new equipment upstream or downstream.",
        "options": [
          {
            "label": "Yes, recent system change",
            "next": "c_system_change",
            "cls": "yes"
          },
          {
            "label": "No, system unchanged",
            "next": "c_lowflow2",
            "cls": "no"
          }
        ]
      },
      "c_system_change": {
        "type": "result",
        "cls": "action",
        "label": "review system change first",
        "text": "Investigate the change before assuming a pump fault.",
        "sub": "A centrifugal pump operates on a curve. Higher resistance means less flow. Review the pump curve against the new system conditions before pulling the pump.",
        "prevent": "Any process or piping change gets checked against the pump curve before it is commissioned. Log the operating point."
      },
      "c_lowflow2": {
        "q": "Is the suction strainer clean?",
        "hint": "Check differential pressure across the strainer if instrumented.",
        "options": [
          {
            "label": "No, strainer dirty or blocked",
            "next": "c_strainer",
            "cls": "no"
          },
          {
            "label": "Yes, strainer clean",
            "next": "c_lowflow3",
            "cls": "yes"
          }
        ]
      },
      "c_strainer": {
        "type": "result",
        "cls": "fix",
        "label": "clean suction strainer",
        "text": "Isolate and clean the suction strainer, then restore flow and verify performance.",
        "sub": "Establish a cleaning interval based on how quickly it blocked. Chronic fouling may indicate a process contamination issue upstream.",
        "prevent": "Strainer cleaning interval on the PM, with a differential pressure gauge across it so the interval is data, not guesswork."
      },
      "c_lowflow3": {
        "type": "result",
        "cls": "escalate",
        "label": "internal wear suspected",
        "text": "Low flow with clean strainer and correct system conditions points to internal wear.",
        "sub": "Increased wear ring clearance is the most common cause. Pull the pump and measure wear ring clearance. Cavitation damage may also be present if cavitation has been occurring over time.",
        "prevent": "Wear ring clearance measured and recorded at every overhaul. Trend flow against head at a fixed valve position to catch wear early."
      },
      "c_noise1": {
        "q": "Describe the noise:",
        "hint": "Location and character help isolate the source.",
        "options": [
          {
            "label": "Crackling or rattling from casing",
            "next": "c_cavitation"
          },
          {
            "label": "Grinding or roughness from bearings",
            "next": "c_bearing"
          },
          {
            "label": "Squealing from motor or coupling area",
            "next": "c_squeal"
          }
        ]
      },
      "c_cavitation": {
        "type": "result",
        "cls": "action",
        "label": "cavitation indicated",
        "text": "Crackling or gravel-like sound from within the casing is the classic cavitation signature.",
        "sub": "Cavitation means vapour bubbles are forming and collapsing inside the impeller. Address the suction system first: check NPSH, suction valve position, strainer condition, and fluid temperature. Prolonged cavitation pits the impeller and casing.",
        "prevent": "NPSH margin checked on any suction-side change: level, temperature, strainer, piping. Suction pressure gauge on the PM route."
      },
      "c_bearing": {
        "type": "result",
        "cls": "escalate",
        "label": "bearing inspection required",
        "text": "Grinding or rumbling from bearing housings indicates bearing damage or inadequate lubrication.",
        "sub": "Check lubrication before condemning the bearing. Do not overgrease, especially on motor bearings. See Module 02 for full bearing failure diagnosis.",
        "prevent": "Grease quantity and interval on the PM. Alignment after any work. Read the failed bearing before ordering the next one."
      },
      "c_squeal": {
        "type": "result",
        "cls": "action",
        "label": "check coupling element and packing",
        "text": "Squealing typically comes from a deteriorating coupling element, a dry bearing, or overtightened packing.",
        "sub": "Coupling: inspect flexible element and check alignment. Packing: overtightened packing will squeal and smoke. Back off gland bolts until you have 40 to 60 drops per minute.",
        "prevent": "Coupling element and packing on the PM inspection list. Alignment readings recorded so a shift is visible."
      },
      "c_heat1": {
        "q": "Where is the heat originating?",
        "hint": "Use a thermal gun to locate the hot zone.",
        "options": [
          {
            "label": "Motor overheating",
            "next": "c_motor_heat"
          },
          {
            "label": "Bearing housing hot",
            "next": "c_bearing_heat"
          },
          {
            "label": "Pump casing or fluid hot",
            "next": "c_fluid_heat"
          }
        ]
      },
      "c_motor_heat": {
        "type": "result",
        "cls": "action",
        "label": "motor thermal issue: notify electrical contact",
        "text": "Observe what you can safely: cooling fan clear, burning smell, uniformly hot or one spot?",
        "sub": "Document observations and pass to a competent electrical tradesperson. Likely causes: overloading, voltage imbalance, or blocked ventilation.",
        "prevent": "Motor cooling fins and shroud cleaned on the PM. Amps trended. Motors module for the mechanical checks before the handoff."
      },
      "c_bearing_heat": {
        "type": "result",
        "cls": "action",
        "label": "check for overlubrication first",
        "text": "Hot bearing housings are often caused by too much grease, not too little.",
        "sub": "Purge excess grease by removing the relief plug and running briefly. If temperature does not drop, the bearing may be failing. Normal operating temperature is up to approximately 70 degrees Celsius above ambient. See Module 02.",
        "prevent": "Relief plug out during greasing. Quantity by formula. Ultrasonic-assisted greasing on critical pumps."
      },
      "c_fluid_heat": {
        "type": "result",
        "cls": "action",
        "label": "check for deadheading or loss of flush",
        "text": "Fluid heating in the casing with no flow almost always means the pump is deadheading.",
        "sub": "Confirm discharge valve is open. Verify seal flush line is flowing on hot process fluids. A flush failure causes rapid heat buildup at the stuffing box.",
        "prevent": "Minimum flow protection on centrifugal pumps that can be throttled. Flush plan flow verified on the PM."
      },
      "c_vibe": {
        "type": "result",
        "cls": "action",
        "label": "vibration: systematic isolation approach",
        "text": "Start with the most common causes and work outward.",
        "sub": "Most common in order: (1) misalignment, check coupling with dial indicators or laser tool; (2) imbalance from impeller fouling; (3) resonance from loose base bolts or pipe strain; (4) cavitation; (5) bearing wear. See Module 03 for full alignment guidance.",
        "prevent": "Baseline vibration reading after every rebuild and alignment. Monthly route with the same points. Vibration Fundamentals module."
      },
      "c_seal1": {
        "q": "What type of shaft seal?",
        "hint": "Check the pump nameplate or maintenance record.",
        "options": [
          {
            "label": "Mechanical seal",
            "next": "c_mech_seal"
          },
          {
            "label": "Packing or stuffing box",
            "next": "c_packing"
          }
        ]
      },
      "c_mech_seal": {
        "type": "result",
        "cls": "escalate",
        "label": "mechanical seal replacement required",
        "text": "A leaking mechanical seal will not self-correct. The faces are damaged.",
        "sub": "Common causes: running dry, shaft misalignment, excessive runout, thermal shock, or cavitation. Pull and replace the seal. Measure shaft runout first, maximum 0.002 inches TIR. See Leak Detection tab for seal-specific detection methods.",
        "prevent": "Read the failed seal faces before installing the new one. Check shaft runout, flush plan, and alignment. Never run it dry, even briefly."
      },
      "c_packing": {
        "type": "result",
        "cls": "fix",
        "label": "adjust packing gland",
        "text": "Packing should weep 40 to 60 drops per minute. This is intentional, not a defect.",
        "sub": "Zero leakage means it is overtightened. Adjust gland bolts evenly, a quarter turn at a time. If packing is failing completely, replace all rings at once. Never add a single new ring on top of old packing.",
        "prevent": "Packing leakage rate (40 to 60 drops per minute) on the PM sheet, so the gland is adjusted on data and not overtightened."
      },
      "interval1": {
        "q": "Does the skip or jolt happen at a consistent, repeating interval?",
        "hint": "Try timing the interval with a watch.",
        "options": [
          {
            "label": "Yes, consistent and repeating",
            "next": "interval_yes",
            "cls": "yes"
          },
          {
            "label": "No, irregular or random",
            "next": "interval_no",
            "cls": "no"
          }
        ]
      },
      "interval_yes": {
        "type": "result",
        "cls": "action",
        "label": "mechanical slip or contact: isolate by shaft",
        "text": "A consistent interval means something is happening once per revolution of a specific shaft.",
        "sub": "Estimate rotation speed of each shaft and compare to the interval. Common causes: loose or worn coupling element, keyway or set screw that has backed off, or coupling spider chunked on one side. Use the Independent Rotation Check tab. Do not assume electrical cause when the interval is consistent.",
        "prevent": "Independent rotation check after any work on the drive train. Coupling and gearbox on the PM inspection."
      },
      "interval_no": {
        "type": "result",
        "cls": "action",
        "label": "inspect for debris or intermittent obstruction",
        "text": "Irregular jolts may indicate passing debris, an intermittent obstruction, or a loose component.",
        "sub": "Check suction strainer for partial blockage. Inspect impeller for foreign material. Confirm all fasteners are tight. If events correlate with process demand changes, suspect intermittent cavitation or water hammer.",
        "prevent": "Suction strainer and any upstream screen on the PM. Look for the source of the debris, not just the debris."
      },
      "pd_rot_symptom": {
        "q": "What is the primary symptom on the rotary PD pump?",
        "hint": "Flow loss is the most common presenting symptom on rotary PD pumps.",
        "options": [
          {
            "label": "No flow or severely reduced flow",
            "next": "pdr_noflow1"
          },
          {
            "label": "Abnormal noise: grinding, knocking, squealing",
            "next": "pdr_noise1"
          },
          {
            "label": "Overheating",
            "next": "pdr_heat1"
          },
          {
            "label": "Pressure relief valve lifting frequently",
            "next": "pdr_relief"
          },
          {
            "label": "Seal or lip seal leaking",
            "next": "pdr_seal"
          }
        ]
      },
      "pdr_noflow1": {
        "q": "Is the motor running and rotating in the correct direction?",
        "hint": "Rotary PD pumps are directional. Reverse rotation on a gear pump reverses flow direction.",
        "options": [
          {
            "label": "Motor not running",
            "next": "c_motor_stopped"
          },
          {
            "label": "Running but may be reversed",
            "next": "pdr_reverse",
            "cls": "no"
          },
          {
            "label": "Running, correct direction confirmed",
            "next": "pdr_noflow2",
            "cls": "yes"
          }
        ]
      },
      "pdr_reverse": {
        "type": "result",
        "cls": "action",
        "label": "check rotation: electrical contact required",
        "text": "Reverse rotation on a rotary PD pump reverses the flow direction. Suction and discharge sides swap.",
        "sub": "Confirm rotation direction against the arrow on the pump casing or the equipment manual. Correcting motor rotation is electrical work. Pass to a competent electrical tradesperson.",
        "prevent": "Rotation verified before coupling on every motor or wiring change. PD pumps are less forgiving than centrifugal of a wrong-direction start."
      },
      "pdr_noflow2": {
        "q": "Is the discharge path open and the relief valve not bypassing?",
        "hint": "A relief valve stuck open or set too low bypasses all flow back to suction.",
        "options": [
          {
            "label": "Discharge blocked or relief valve lifting continuously",
            "next": "pdr_discharge_issue",
            "cls": "no"
          },
          {
            "label": "Discharge open, relief valve closed",
            "next": "pdr_noflow3",
            "cls": "yes"
          }
        ]
      },
      "pdr_discharge_issue": {
        "type": "result",
        "cls": "escalate",
        "label": "discharge blockage or relief valve fault",
        "text": "A blocked discharge on a PD pump is a safety emergency. A relief valve continuously lifting means it is doing its job but the cause must be found.",
        "sub": "If discharge is blocked: identify and clear the blockage before restarting. If the relief valve is lifting continuously: the system pressure is at or above the set point. Do not raise the relief valve setting without investigating the cause. Check for a closed valve downstream, a blocked filter, or a process condition change.",
        "prevent": "Relief valve tested and its setting recorded on the PM. Discharge valve interlocked or tagged so it cannot be closed with the pump running."
      },
      "pdr_noflow3": {
        "q": "Has flow dropped gradually over time or suddenly?",
        "hint": "Gradual loss points to wear. Sudden loss points to a blockage or component failure.",
        "options": [
          {
            "label": "Gradually over time",
            "next": "pdr_gradual",
            "cls": "no"
          },
          {
            "label": "Suddenly",
            "next": "pdr_sudden",
            "cls": "yes"
          }
        ]
      },
      "pdr_gradual": {
        "type": "result",
        "cls": "escalate",
        "label": "internal wear: clearances have grown",
        "text": "Gradual flow loss at constant speed in a rotary PD pump is the signature of increasing internal clearances from wear.",
        "sub": "As the gear teeth, lobes, or vane tips wear, the gap between the rotating element and the pump casing grows. More fluid slips back from discharge to suction on each revolution. Measure flow against the original baseline. Pull the pump for inspection and measure internal clearances against manufacturer specification.",
        "prevent": "Clearances measured at overhaul and trended. Fluid cleanliness and viscosity against the pump specification."
      },
      "pdr_sudden": {
        "type": "result",
        "cls": "escalate",
        "label": "inspect for foreign object or component failure",
        "text": "Sudden flow loss on a rotary PD pump that was running normally suggests a component failure or obstruction.",
        "sub": "Possible causes: foreign object lodged in the pump (rotary PD pumps do not tolerate solids well), sheared shaft or key, timing gear failure on a lobe pump, or a collapsed vane on a vane pump. Disconnect the pump from the coupling and attempt to rotate by hand. If the pump will not turn or has severe rough spots, internal damage has occurred.",
        "prevent": "Strainer on the suction. Find the source of the foreign object. Check upstream equipment for missing parts."
      },
      "pdr_noise1": {
        "q": "Describe the noise:",
        "hint": "Character helps identify the source.",
        "options": [
          {
            "label": "Metallic grinding or knocking",
            "next": "pdr_grinding"
          },
          {
            "label": "High-pitched squeal or whine",
            "next": "pdr_squeal"
          },
          {
            "label": "Cavitation-like rattling on suction side",
            "next": "pdr_cavitation"
          }
        ]
      },
      "pdr_grinding": {
        "type": "result",
        "cls": "escalate",
        "label": "internal contact: shutdown and inspect",
        "text": "Metallic grinding or knocking in a rotary PD pump indicates contact between rotating and stationary components.",
        "sub": "On a lobe pump, this means the timing gears have failed or the rotors are contacting. On a gear pump, it may mean a gear is contacting the casing or end plates. On a vane pump, a broken vane may be circulating. Shut down and inspect before proceeding. Continued operation will destroy the pump rapidly.",
        "prevent": "Fluid lubricity and viscosity against the pump rating. Never run a PD pump dry. Suction conditions verified."
      },
      "pdr_squeal": {
        "type": "result",
        "cls": "action",
        "label": "check shaft seals and bearing lubrication",
        "text": "Squealing on a rotary PD pump is often a shaft seal or a dry bearing.",
        "sub": "Check lip seal or mechanical seal condition at the shaft. A dry or damaged seal will squeal and leak progressively. Check bearing lubrication if the pump has grease-lubricated bearings. On gear pumps, the fluid being pumped often serves as the bearing lubricant, meaning a dry-running condition starves the bearings as well.",
        "prevent": "Seal and bearing lubrication on the PM. Alignment recorded."
      },
      "pdr_cavitation": {
        "type": "result",
        "cls": "action",
        "label": "suction condition issue",
        "text": "Cavitation is possible in rotary PD pumps, though less common than in centrifugal pumps.",
        "sub": "Causes include: suction valve not fully open, blocked strainer, fluid viscosity too high for the suction line size (fluid cannot flow in fast enough), pump speed too high for the fluid viscosity, or suction lift too great. Address suction conditions before assuming pump fault.",
        "prevent": "Suction line sizing and NPSH margin reviewed. Viscosity at the actual fluid temperature against the pump limit."
      },
      "pdr_heat1": {
        "type": "result",
        "cls": "action",
        "label": "check fluid lubrication and internal clearances",
        "text": "Overheating in a rotary PD pump usually means inadequate fluid lubrication of internal surfaces or excessive bypass due to worn clearances.",
        "sub": "Many rotary PD pumps rely on the pumped fluid to lubricate the internal surfaces and bearings. Running dry even briefly causes rapid heat buildup and surface damage. Check that fluid is present and flowing. If the pump has been running hot for some time, check internal clearances for wear. Worn clearances increase bypass flow, which generates heat.",
        "prevent": "Fluid temperature and viscosity logged. Internal clearances measured at overhaul."
      },
      "pdr_relief": {
        "type": "result",
        "cls": "action",
        "label": "investigate cause before adjusting relief valve",
        "text": "A relief valve that lifts frequently is telling you that system pressure is regularly reaching the set point.",
        "sub": "Do not raise the set pressure as the first response. Investigate: is there a closed or partially closed valve downstream? Has system resistance increased? Is the pump overspeeding? Is the fluid viscosity higher than designed (cold startup, wrong fluid)? Only raise the set pressure after confirming the system MAWP and all downstream components are rated for the higher pressure.",
        "prevent": "Relief valve setting recorded and locked. Any change to the discharge system reviewed against the relief setting first."
      },
      "pdr_seal": {
        "type": "result",
        "cls": "action",
        "label": "inspect seal type and condition",
        "text": "Seal leakage on a rotary PD pump follows similar principles to centrifugal pumps but with some differences.",
        "sub": "Mechanical seals: same rules as centrifugal pumps: a leaking mechanical seal will not self-correct, replace it. Lip seals: a light film is acceptable, a spray or steady drip is not. Check shaft runout at the seal location before installing a replacement. On pumps that use the process fluid for internal lubrication, a leaking seal may indicate the pump has been running dry, which damages the seal faces from the inside.",
        "prevent": "Seal type matched to the fluid and pressure. Read every failed seal."
      },
      "pd_rec_symptom": {
        "q": "What is the primary symptom on the reciprocating PD pump?",
        "hint": "Reciprocating pumps have unique components, check valves and diaphragms, that have no equivalent in other pump types.",
        "options": [
          {
            "label": "No flow or severely reduced flow",
            "next": "pdrec_noflow1"
          },
          {
            "label": "Erratic or pulsating flow worse than normal",
            "next": "pdrec_pulsation"
          },
          {
            "label": "Knocking or banging noise",
            "next": "pdrec_knock"
          },
          {
            "label": "Packing or diaphragm leaking",
            "next": "pdrec_seal"
          },
          {
            "label": "Pressure relief valve lifting",
            "next": "pdr_relief"
          }
        ]
      },
      "pdrec_noflow1": {
        "q": "Is the motor running?",
        "hint": "Check for shaft rotation.",
        "options": [
          {
            "label": "No, motor stopped",
            "next": "c_motor_stopped",
            "cls": "no"
          },
          {
            "label": "Yes, motor running",
            "next": "pdrec_noflow2",
            "cls": "yes"
          }
        ]
      },
      "pdrec_noflow2": {
        "q": "Does the pump stroke but produce no flow?",
        "hint": "You can often hear or feel the pump stroking even with no discharge flow.",
        "options": [
          {
            "label": "Pump is stroking but no flow at discharge",
            "next": "pdrec_checkvalve",
            "cls": "yes"
          },
          {
            "label": "Pump does not appear to be stroking",
            "next": "pdrec_nostroke",
            "cls": "no"
          }
        ]
      },
      "pdrec_checkvalve": {
        "type": "result",
        "cls": "escalate",
        "label": "check valve failure suspected",
        "text": "A pump that strokes but produces no flow almost always has a check valve problem.",
        "sub": "On a reciprocating pump, the suction check valve must open to allow fluid in on the intake stroke, and the discharge check valve must open to allow fluid out on the pressure stroke. If either valve is stuck open, closed, or leaking, flow is lost. Inspect both suction and discharge check valves. Look for: debris on the valve seat, worn or cracked valve balls or discs, damaged valve seats, or springs that have broken or lost tension.",
        "prevent": "Check valves inspected on the PM interval. Fluid filtration to keep debris off the seats."
      },
      "pdrec_nostroke": {
        "type": "result",
        "cls": "escalate",
        "label": "mechanical drive issue",
        "text": "A reciprocating pump that is not stroking has a mechanical drive failure.",
        "sub": "Check the crankshaft, eccentric, or connecting rod mechanism. On diaphragm metering pumps, check that the stroke length adjustment is not set to zero. On hydraulically actuated diaphragm pumps, check hydraulic oil level and hydraulic pressure to the diaphragm. Disconnect the pump from the driver and attempt to rotate by hand through a full crankshaft revolution to locate binding or breakage.",
        "prevent": "Drive train inspection on the PM: coupling, crank, crosshead. Lubrication schedule for the power end."
      },
      "pdrec_pulsation": {
        "type": "result",
        "cls": "action",
        "label": "check pulsation dampener and check valves",
        "text": "Worse than normal pulsation on a reciprocating pump usually means a failed pulsation dampener or a leaking check valve.",
        "sub": "Pulsation dampener: check pre-charge pressure against specification (these are gas-charged accumulators that must be maintained). A waterlogged dampener provides no pulse damping. Check valves: a leaking check valve allows partial backflow on each stroke, increasing net pulsation and reducing flow. Inspect and replace worn check valves.",
        "prevent": "Dampener precharge checked and recorded on the PM. Check valves on a replacement interval."
      },
      "pdrec_knock": {
        "type": "result",
        "cls": "action",
        "label": "inspect check valves, crosshead, and crankshaft bearings",
        "text": "Knocking in a reciprocating pump is often a loose or failed check valve, a worn crosshead, or a worn crankshaft bearing.",
        "sub": "Check valve knock: a valve disc or ball that is bouncing rather than seating cleanly produces a sharp knock at each stroke. Crosshead knock: worn crosshead guides allow side-to-side movement, producing a knock that changes with load. Crankshaft bearing knock: similar to a worn engine bearing, a deep knock at crankshaft frequency that worsens under load. Differentiate by location and frequency.",
        "prevent": "Power end oil analysis. Check valve inspection interval. Crosshead and crank bearing clearances at overhaul."
      },
      "pdrec_seal": {
        "q": "Is this a piston/plunger pump or a diaphragm pump?",
        "hint": "The failure modes are completely different.",
        "options": [
          {
            "label": "Piston or plunger pump, packing is leaking",
            "next": "pdrec_packing"
          },
          {
            "label": "Diaphragm pump, diaphragm may have failed",
            "next": "pdrec_diaphragm"
          }
        ]
      },
      "pdrec_packing": {
        "type": "result",
        "cls": "action",
        "label": "inspect packing and plunger condition",
        "text": "Packing leakage on a high-pressure reciprocating pump is a safety concern, not just a maintenance item.",
        "sub": "A weep from the packing gland is normal and expected. A spray or steady stream under pressure means the packing has failed and must be replaced before operation continues. Always replace the plunger or sleeve at the same time as the packing. A worn plunger scores new packing immediately. On high-pressure pumps, never use your hand to locate a leak. Use a piece of cardboard or a leak detection spray.",
        "prevent": "Plunger surface inspected at every packing change. Packing lubrication maintained. Gland adjusted on leak rate, not feel."
      },
      "pdrec_diaphragm": {
        "type": "result",
        "cls": "escalate",
        "label": "diaphragm failure: shutdown immediately",
        "text": "A failed diaphragm is not an operational condition. Shut down immediately.",
        "sub": "On AODD pumps: process fluid in the air exhaust confirms diaphragm failure. On hydraulically actuated metering pumps: process fluid in the hydraulic oil or hydraulic oil in the process confirms diaphragm failure. In either case, cross-contamination between the process fluid and the drive mechanism has occurred. Inspect the second diaphragm if the pump has a duplex arrangement. Replace the diaphragm with the correct material for the process fluid. Purge the hydraulic oil if contamination occurred.",
        "prevent": "Diaphragm on a replacement interval based on cycles, not calendar. Leak detection between diaphragms if the pump has it."
      }
    }
  },
  "selfcheck": {
    "types": [
      [
        "Which family does a centrifugal pump belong to?",
        [
          "Positive displacement, rotary",
          "Positive displacement, reciprocating",
          "Dynamic",
          "Diaphragm"
        ],
        2,
        "Centrifugal and axial flow pumps are dynamic pumps: they add velocity to the fluid, and the flow depends on the system resistance."
      ],
      [
        "A gear pump is which type?",
        [
          "Dynamic",
          "Rotary positive displacement",
          "Reciprocating positive displacement",
          "Axial flow"
        ],
        1,
        "Gear, lobe, vane, and screw pumps are rotary PD pumps: a fixed volume per revolution."
      ],
      [
        "Which pump type moves a fixed volume per stroke with check valves controlling direction?",
        [
          "Centrifugal",
          "Screw",
          "Piston or plunger",
          "Lobe"
        ],
        2,
        "Reciprocating PD pumps rely on inlet and discharge check valves every stroke."
      ]
    ],
    "compare": [
      [
        "What does a pump create?",
        [
          "Pressure",
          "Flow",
          "Both equally",
          "Head only"
        ],
        1,
        "Pumps create flow. The system resists that flow, and the resistance registers as pressure."
      ],
      [
        "What happens to a centrifugal pump when the discharge valve is closed while running?",
        [
          "Pressure rises until the casing fails",
          "Flow drops toward zero and the pump heats the fluid",
          "It stops",
          "It reverses"
        ],
        1,
        "A centrifugal pump at shutoff moves to the left of its curve, flow goes to near zero, and the trapped fluid heats."
      ],
      [
        "What is mandatory on the discharge of a positive displacement pump?",
        [
          "A flow meter",
          "A check valve",
          "A relief valve",
          "A strainer"
        ],
        2,
        "A PD pump against a closed discharge raises pressure until something fails. The relief valve is the protection."
      ],
      [
        "Which pump type is self-priming by nature?",
        [
          "Centrifugal",
          "Most positive displacement pumps",
          "Axial flow",
          "None"
        ],
        1,
        "PD pumps can generally pull a vacuum and prime themselves; standard centrifugal pumps need to be primed."
      ]
    ],
    "chain": [
      [
        "Troubleshooting a pump system, where does the system chain start?",
        [
          "At the pump",
          "At the discharge",
          "At the electrical supply and motor",
          "At the seal"
        ],
        2,
        "Walk the chain from supply through motor, coupling, gearbox, pump, to discharge. A fault upstream shows up downstream."
      ],
      [
        "A gauge on the discharge reads high after a downstream valve is throttled. What moved?",
        [
          "The pump slowed",
          "The pump shifted left on its curve",
          "The pump curve changed",
          "The fluid got heavier"
        ],
        1,
        "Throttling adds system resistance, which reduces flow and raises the gauge reading: the pump moves left on its curve."
      ]
    ],
    "rotate": [
      [
        "What is the first step of the independent rotation check?",
        [
          "Rotate the pump shaft",
          "Motor free-spin, mechanical check only, locked out",
          "Check the coupling",
          "Open the gearbox"
        ],
        1,
        "Start at the motor with the coupling disconnected, locked out and verified, and work down the chain."
      ],
      [
        "Why is the term \"isolation procedure\" avoided for this check?",
        [
          "It is too long",
          "It could be confused with energy isolation and lockout",
          "It is trademarked",
          "It applies to hydraulics only"
        ],
        1,
        "Independent Rotation Check is used so nobody mistakes a rotation check for lockout/tagout."
      ],
      [
        "What does the OHSA definition of a competent person require?",
        [
          "A Red Seal ticket",
          "Knowledge, training, and experience; familiarity with the Act and regulations; knowledge of the hazards",
          "Five years in the trade",
          "A supervisor present"
        ],
        1,
        "Three parts: qualified by knowledge, training, and experience; familiar with the applicable law; knowledge of actual or potential hazards."
      ]
    ],
    "diagnose": [
      [
        "A centrifugal pump sounds like it is pumping gravel. What is the first suspect?",
        [
          "Bearing failure",
          "Cavitation from suction-side conditions",
          "Coupling wear",
          "Motor bearing"
        ],
        1,
        "Gravel noise is cavitation: vapour bubbles collapsing at the impeller. Look at the suction side."
      ],
      [
        "A PD pump relief valve is lifting continuously. What is the right first action?",
        [
          "Turn the relief setting up",
          "Investigate the discharge restriction before touching the relief",
          "Replace the relief valve",
          "Reduce pump speed"
        ],
        1,
        "The relief is telling you system pressure is at or above its setting. Find out why before adjusting anything."
      ],
      [
        "A reciprocating pump has lost flow but the drive is stroking normally. Most likely?",
        [
          "Motor fault",
          "Check valve failure",
          "Coupling slip",
          "Wrong rotation"
        ],
        1,
        "A reciprocating pump that strokes without moving fluid has a check valve held open or worn."
      ]
    ],
    "leaks": [
      [
        "What leakage rate is correct for compression packing?",
        [
          "Zero",
          "40 to 60 drops per minute",
          "A steady stream",
          "Two drops per hour"
        ],
        1,
        "Packing is meant to leak: the leakage lubricates and cools it. Zero leakage means the gland is too tight."
      ],
      [
        "Which leak detection method works with the pump running and is the most sensitive for small leaks?",
        [
          "Pressure decay",
          "UV dye",
          "Ultrasonic",
          "Dry wipe"
        ],
        2,
        "Ultrasonic detection finds the turbulence of a leak in a running system; dye and pressure decay are shutdown methods."
      ]
    ],
    "safety": [
      [
        "Locking out the motor is sufficient isolation for pump work. True or false?",
        [
          "True",
          "False: process isolation and verification are also required",
          "True if the pump is small",
          "True for water service"
        ],
        1,
        "The casing holds the process. Suction and discharge isolated, drained, vented, and verified."
      ],
      [
        "Before removing the casing drain plug, what should be opened first?",
        [
          "The discharge valve",
          "The vent at the top of the casing",
          "The suction strainer",
          "The seal flush"
        ],
        1,
        "The vent tells you whether there is trapped pressure, at a safer location than the drain plug."
      ]
    ]
  },
  "panels": {
    "types": "<div class=\"bw-section-label\">Pump types: tap a type to learn more</div>\n\n    <div class=\"family-label\">Dynamic pumps: variable flow, impeller-driven</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectPump('centrifugal')\" id=\"pcard-centrifugal\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-propeller\"></i></div>\n        <div class=\"type-card-name\">Centrifugal</div>\n        <div class=\"type-card-sub\">Most common industrial pump</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectPump('axial')\" id=\"pcard-axial\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-arrow-right-circle\"></i></div>\n        <div class=\"type-card-name\">Axial Flow</div>\n        <div class=\"type-card-sub\">High flow, low pressure</div>\n      </div>\n    </div>\n\n    <div class=\"family-label\">Positive displacement: rotary family</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectPump('gear')\" id=\"pcard-gear\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-settings-2\"></i></div>\n        <div class=\"type-card-name\">Gear Pump</div>\n        <div class=\"type-card-sub\">External or internal gear</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectPump('lobe')\" id=\"pcard-lobe\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-leaf\"></i></div>\n        <div class=\"type-card-name\">Lobe Pump</div>\n        <div class=\"type-card-sub\">Sanitary, food and beverage</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectPump('vane')\" id=\"pcard-vane\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-pinwheel\"></i></div>\n        <div class=\"type-card-name\">Vane Pump</div>\n        <div class=\"type-card-sub\">Hydraulic, lubrication systems</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectPump('screw')\" id=\"pcard-screw\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-screw\"></i></div>\n        <div class=\"type-card-name\">Screw Pump</div>\n        <div class=\"type-card-sub\">High viscosity, quiet operation</div>\n      </div>\n    </div>\n\n    <div class=\"family-label\">Positive displacement: reciprocating family</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectPump('piston')\" id=\"pcard-piston\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-engine\"></i></div>\n        <div class=\"type-card-name\">Piston / Plunger</div>\n        <div class=\"type-card-sub\">High pressure, metering</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectPump('diaphragm')\" id=\"pcard-diaphragm\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-wave-square\"></i></div>\n        <div class=\"type-card-name\">Diaphragm</div>\n        <div class=\"type-card-sub\">No seal, chemical and slurry</div>\n      </div>\n    </div>\n\n    <div id=\"pump-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a pump type above</div></div>",
    "compare": "<div class=\"bw-section-label\">Centrifugal vs positive displacement: key distinctions</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">These two pump families operate on fundamentally different principles. Mixing up the rules between them is one of the most common and damaging mistakes in pump maintenance. A centrifugal pump creates flow by adding velocity to fluid. The system resists that flow, and that resistance is what registers as pressure on a gauge. The pump does not build pressure: it moves fluid, and pressure is a consequence of the system. A positive displacement pump physically traps and moves a fixed volume of fluid on every cycle, delivering that volume regardless of system resistance up to its mechanical limits. That difference in principle drives almost every difference in how they behave, how they fail, and how you troubleshoot them.</div>\n    </div>\n\n    <div class=\"callout-box\" style=\"border-color:#378ADD; background:#0c1f33;\">\n      <div class=\"callout-box-header\">\n        <i class=\"ti ti-bulb callout-box-icon\" style=\"color:#378ADD;\"></i>\n        <div class=\"callout-box-title\" style=\"color:#378ADD;\">Pumps create flow, not pressure</div>\n      </div>\n      <div class=\"callout-box-body\" style=\"color:#c8c6bf;\">This is one of the most important and most misunderstood principles in fluid systems. <strong style=\"color:#85B7EB;\">Pumps create flow. The system creates pressure.</strong> Pressure is resistance to flow. A pump running against no resistance produces flow at essentially zero gauge reading. The same pump running against a closed valve produces a high gauge reading at essentially zero flow. The pump did not change. The system did. When you see a low pressure reading, the correct question is not \"what is wrong with the pump?\" The correct question is \"what changed in the system?\" This framing prevents a lot of misdiagnosed pump pulls.</div>\n    </div>\n    <div class=\"compare-grid\">\n      <div class=\"compare-col cent\">\n        <div class=\"compare-col-header\">Centrifugal</div>\n        <div class=\"compare-row\"><strong>Operating principle</strong>Impeller adds velocity to fluid, creating flow. The system resists that flow: resistance is what registers as pressure. The pump does not build pressure. It moves fluid.</div>\n        <div class=\"compare-row\"><strong>Flow vs system resistance</strong>Flow varies with system resistance. As resistance increases, flow decreases. The pump curve defines this relationship: the pump does not control pressure, the system does.</div>\n        <div class=\"compare-row\"><strong>Closed discharge (deadhead)</strong>Dangerous but not immediately catastrophic. Fluid recirculates internally, heats up rapidly. Seal and impeller damage follows.</div>\n        <div class=\"compare-row\"><strong>Relief valve required?</strong>Not required but recommended for protection. The pump stalls against system pressure.</div>\n        <div class=\"compare-row\"><strong>Self-priming?</strong>Generally no. Most centrifugal pumps cannot self-prime and must be flooded or primed before startup.</div>\n        <div class=\"compare-row\"><strong>Viscous fluids</strong>Performance drops significantly with high viscosity fluids. Not suitable for most thick fluids.</div>\n        <div class=\"compare-row\"><strong>Pulsation</strong>Smooth, continuous flow with no pulsation under normal conditions.</div>\n        <div class=\"compare-row\"><strong>Shear sensitivity</strong>High shear. Not suitable for shear-sensitive products.</div>\n      </div>\n      <div class=\"compare-col pd\">\n        <div class=\"compare-col-header\">Positive Displacement</div>\n        <div class=\"compare-row\"><strong>Operating principle</strong>Fixed volume of fluid is trapped and displaced on every cycle. Flow is determined by speed and displacement, not by system pressure.</div>\n        <div class=\"compare-row\"><strong>Flow vs system resistance</strong>Essentially constant flow regardless of system resistance, up to the mechanical limits of the pump. The pump delivers its displacement volume on every cycle whether the system resists or not, which is why a blocked discharge is dangerous.</div>\n        <div class=\"compare-row\"><strong>Closed discharge (deadhead)</strong>Extremely dangerous. Pressure builds without limit until something fails: pipe, fitting, casing, or relief valve. Never block the discharge of a running PD pump.</div>\n        <div class=\"compare-row\"><strong>Relief valve required?</strong>Yes, always. A pressure relief valve on the discharge side is not optional on a PD pump. It is a safety device.</div>\n        <div class=\"compare-row\"><strong>Self-priming?</strong>Most PD pumps are self-priming. The displacement action can draw fluid up the suction line.</div>\n        <div class=\"compare-row\"><strong>Viscous fluids</strong>Handles high viscosity fluids well. Many PD pumps are specifically chosen for thick or heavy fluids.</div>\n        <div class=\"compare-row\"><strong>Pulsation</strong>Reciprocating PD pumps produce pulsating flow. Pulsation dampeners are used on sensitive systems.</div>\n        <div class=\"compare-row\"><strong>Shear sensitivity</strong>Lower shear than centrifugal. Lobe and peristaltic pumps are specifically chosen for shear-sensitive products.</div>\n      </div>\n    </div>\n\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\">\n        <i class=\"ti ti-alert-hexagon callout-box-icon\"></i>\n        <div class=\"callout-box-title\">The most important rule in PD pump operation</div>\n      </div>\n      <div class=\"callout-box-body\"><strong>Never run a positive displacement pump against a closed or blocked discharge.</strong> Unlike a centrifugal pump, a PD pump will continue to build pressure until something gives. That something may be a pipe joint, a valve body, a pump casing, or a person standing nearby. Every PD pump installation must have a pressure relief valve set below the maximum allowable working pressure of the weakest component in the system. This valve must be tested and verified functional on a regular PM interval. A relief valve that has never been tested is not a relief valve. It is a false sense of security.</div>\n      <ul class=\"callout-tips\">\n        <li>Verify relief valve set pressure against system MAWP before every startup after any system modification</li>\n        <li>Relief valve discharge must be routed safely, either back to the suction tank or to a safe vent location, never to a dead end</li>\n        <li>A relief valve that lifts frequently is telling you the system is regularly reaching its set pressure. Investigate the cause rather than raising the set pressure.</li>\n        <li>On chemical or hazardous fluid systems, relief valve discharge routing is a safety and environmental compliance issue, not just an operational one</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-chart-line\"></i> Reading the symptoms differently</div>\n      <div class=\"info-block-body\">Because the two pump families behave differently, the same symptom can mean completely different things depending on which type of pump you are working on.</div>\n      <ul class=\"info-block-tips\">\n        <li>Low flow on a centrifugal pump: suspect suction issue, wear ring clearance, or the operating point has shifted due to a change in system resistance. Low flow on a PD pump: suspect bypass through a worn or open relief valve, internal bypass through worn clearances, or a valve issue on a reciprocating pump.</li>\n        <li>High system resistance on a centrifugal pump reduces flow and shows as low flow at the discharge. High system resistance on a PD pump does not reduce flow: the pump keeps pushing the same volume, and the gauge reading climbs until something gives. Act immediately on a rising pressure gauge on a PD system.</li>\n        <li>Noise on a centrifugal pump: cavitation, bearing, or seal. Noise on a PD pump: worn gear mesh, worn lobes, cavitation on suction, or valve chatter on a piston pump.</li>\n        <li>Vibration on a centrifugal pump: usually misalignment, imbalance, or cavitation. Vibration on a PD pump: pulsation is normal to a degree on reciprocating types. Abnormal vibration suggests loose mounting, worn components, or resonance in the piping.</li>\n      </ul>\n    </div>\n      <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the discharge gauge is a load gauge</strong>Watch the discharge pressure when someone throttles a valve downstream. It rises, and the pump did nothing different; the system pushed back harder. When that idea is in your bones, half of pump troubleshooting is done: a pressure that is wrong is a system that is wrong, or a pump that has lost the ability to push against it.</div></div>",
    "chain": "<div class=\"bw-section-label\">System chain: tap a component</div>\n    <div style=\"background:#242420; border:0.5px solid #3a3a36; border-radius:8px; padding:1.25rem; margin-bottom:1.25rem; overflow-x:auto;\">\n      <div class=\"chain\">\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('supply')\" id=\"node-supply\"><i class=\"ti ti-valve chain-icon\"></i><div class=\"chain-label\">Supply</div><div class=\"chain-sub\">valve + line</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('motor')\" id=\"node-motor\"><i class=\"ti ti-engine chain-icon\"></i><div class=\"chain-label\">Motor</div><div class=\"chain-sub\">prime mover</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('coupling')\" id=\"node-coupling\"><i class=\"ti ti-link chain-icon\"></i><div class=\"chain-label\">Coupling</div><div class=\"chain-sub\">drive transfer</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('gearbox')\" id=\"node-gearbox\"><i class=\"ti ti-settings chain-icon\"></i><div class=\"chain-label\">Gearbox</div><div class=\"chain-sub\">speed / torque</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('pump')\" id=\"node-pump\"><i class=\"ti ti-propeller chain-icon\"></i><div class=\"chain-label\">Pump</div><div class=\"chain-sub\">impeller + casing</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectComp('discharge')\" id=\"node-discharge\"><i class=\"ti ti-arrow-right chain-icon\"></i><div class=\"chain-label\">Discharge</div><div class=\"chain-sub\">valve + line</div></div></div>\n      </div>\n    </div>\n    <div id=\"comp-display\"><div class=\"comp-placeholder\">select a component above</div></div>\n\n    <div class=\"bw-section-label\" style=\"margin-top:0.5rem;\">PD pump system chain notes</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">The system chain for a PD pump follows the same driver-to-pump sequence but with important differences at the pump end and discharge side.</div>\n      <ul class=\"comp-detail-tips\">\n        <li>Rotary PD pumps (gear, lobe, vane): the chain is identical in sequence. The pump end replaces the impeller with the displacement element (gear set, lobe rotors, vanes). Internal clearances at the displacement element are the primary wear location.</li>\n        <li>Reciprocating PD pumps (piston, diaphragm): the driver converts rotary motion to reciprocating motion through a crankshaft or eccentric. Suction and discharge check valves are critical components that have no equivalent in centrifugal or rotary PD pumps.</li>\n        <li>Relief valve: present on all PD installations. If the relief valve is lifting, it is part of the active system and must be included in the diagnostic chain.</li>\n        <li>Pulsation dampener: on reciprocating PD installations, a pulsation dampener on the discharge side smooths flow. A failed or waterlogged dampener allows full pulsation into the piping, which can cause fatigue failures at fittings and instruments.</li>\n      </ul>\n    </div>\n\n    <div class=\"bw-section-label\">The first rule: applies to both pump families</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">Before you touch anything, walk the system chain from the energy source to the process fluid. A problem anywhere in that chain can look like a pump problem. Most of the time, it is not the pump. For PD pumps, add the relief valve and check valves to your mental walk-through on every call.</div>\n      <ul class=\"comp-detail-tips\">\n        <li>Is the motor running? Check before anything else.</li>\n        <li>Is the supply valve open? Fully open?</li>\n        <li>Is the discharge valve open? On a PD pump this is not optional to verify: it is a safety check.</li>\n        <li>Is the relief valve set correctly and functioning? When did it last pass a functional test?</li>\n        <li>Has anything changed since it last ran correctly?</li>\n        <li>If the system skips or stutters at regular intervals, suspect a mechanical slip or a recurring obstruction, not an electrical fault.</li>\n      </ul>\n    </div>\n      <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-arrow-down-circle\"></i> NPSH: the number behind every cavitation call</div>\n      <div class=\"info-block-body\">Net positive suction head is the pressure margin at the pump inlet above the liquid's vapour pressure. NPSH available (NPSHa) is what the system provides: atmospheric pressure, plus the static height of liquid above the pump (or minus the lift below it), minus the friction loss in the suction line, minus the vapour pressure of the liquid at its temperature. NPSH required (NPSHr) is what the pump needs at that flow, from its curve. When NPSHa falls below NPSHr the liquid flashes at the impeller eye and the pump cavitates. Nothing on the discharge side changes NPSHa.</div>\n      <ul class=\"info-block-tips\">\n        <li>Raise NPSHa by raising the suction level, lowering the pump, shortening or enlarging the suction line, cleaning the strainer, or cooling the liquid. Lower it by any of the opposites, which is what happens when a tank runs low, a strainer loads, or the process runs hotter.</li>\n        <li>A margin of about 1 metre (3 ft) of NPSHa over NPSHr is the usual minimum; hot liquids and hydrocarbons want more.</li>\n        <li>Suction piping design sets most of it: a straight run into the suction of five to ten pipe diameters, an eccentric reducer flat side up, no elbows on the suction flange, and a suction line at least one size larger than the pump inlet.</li>\n        <li>A suction pressure gauge is the field measurement. Log it with the flow; when it drops toward the vapour pressure at the running temperature, cavitation is minutes away.</li>\n      </ul>\n    </div>",
    "rotate": "<div class=\"bw-section-label\">Independent rotation check: component by component</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">When a system is struggling to turn over, binding, or showing signs of mechanical drag, the most reliable approach is to rotate each component independently by hand and verify that it moves freely on its own. This removes each unit as a potential source of mechanical inhibition before introducing the next one into the chain. This procedure is separate from and must always follow your energy isolation (lockout/tagout) procedure. Never perform this check without first confirming all energy sources are locked out and tagged out.</div>\n    </div>\n\n    <div class=\"disc-wrap\" id=\"disc-ohsa\">\n      <button class=\"disc-toggle\" onclick=\"toggleDisc('disc-ohsa')\">\n        <div class=\"disc-toggle-left\"><i class=\"ti ti-alert-circle disc-toggle-icon\"></i><span class=\"disc-toggle-label\">Competency and electrical safety notice: Ontario OHSA</span></div>\n        <i class=\"ti ti-chevron-down disc-chevron\"></i>\n      </button>\n      <div class=\"disc-body\"><p>Under Ontario's Occupational Health and Safety Act (OHSA), a <strong style=\"color:#85B7EB;\">competent person</strong> is defined as someone who: (1) is qualified by knowledge, training, and experience to organize and perform the work; (2) is familiar with the OHSA and the regulations that apply to the assigned work; and (3) has knowledge of any actual or potential hazards in the workplace. Competence is task-specific and context-specific, not simply a general credential. Any electrical diagnosis beyond the observational checks described in this procedure must be carried out by or under the direct supervision of a person who meets all three criteria for that specific work.</p></div>\n    </div>\n    <div class=\"disc-wrap jx\" id=\"disc-jx\" style=\"margin-bottom:1.25rem;\">\n      <button class=\"disc-toggle\" onclick=\"toggleDisc('disc-jx')\">\n        <div class=\"disc-toggle-left\"><i class=\"ti ti-map-pin disc-toggle-icon\"></i><span class=\"disc-toggle-label\">Outside Ontario? Jurisdiction note</span></div>\n        <i class=\"ti ti-chevron-down disc-chevron\"></i>\n      </button>\n      <div class=\"disc-body\"><p>The competent person definition and energy isolation requirements vary by jurisdiction. If you are working in another Canadian province, a US state, or internationally, consult the applicable occupational health and safety legislation before performing any electrical or energy-related work. The underlying principle is consistent: only a person with the appropriate knowledge, training, and hazard awareness for the specific task should perform or directly supervise that work.</p></div>\n    </div>\n\n    <ol style=\"list-style:none;\">\n      <li class=\"isolation-step\"><div class=\"isolation-num\">01</div><div class=\"isolation-body\"><strong>Motor: mechanical check only</strong><div class=\"isolation-sub\">With the motor fully locked out and disconnected from the coupling, rotate the motor shaft by hand. It should spin smoothly and freely with no roughness, grinding, or tight spots. Note any burnt smell at the motor housing or junction box. If the motor would not start, note whether any sound was made on the attempt and pass that information to your electrical contact.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\">02</div><div class=\"isolation-body\"><strong>Coupling: inspect and rotate freely</strong><div class=\"isolation-sub\">With the motor shaft disconnected, examine the flexible element for cracking, chunking, or compression set. Rotate the driven half by hand. It should move without resistance. Black rubber dust around the coupling guard means the element has been failing under load.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\">03</div><div class=\"isolation-body\"><strong>Gearbox: disconnect both ends, rotate input and output</strong><div class=\"isolation-sub\">If a gearbox is present, disconnect it from both sides. Rotate the input shaft by hand and feel for smoothness through the gear mesh. Then rotate the output shaft. Roughness, tight spots, or clicking suggests gear or bearing damage. Check oil level and condition before rotating.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\">04</div><div class=\"isolation-body\"><strong>Pump shaft: rotate independently</strong><div class=\"isolation-sub\">With all upstream components disconnected, rotate the pump shaft by hand. A centrifugal pump should turn with light, even resistance. A rotary PD pump (gear, lobe, vane) should also rotate smoothly with slightly heavier resistance from the tight internal clearances. A reciprocating PD pump will have a distinctly different feel as the piston or diaphragm moves through its stroke: this is normal, but the resistance should be even and consistent through each cycle with no tight spots or binding.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\">05</div><div class=\"isolation-body\"><strong>Reconnect and verify in sequence</strong><div class=\"isolation-sub\">Once each component checks out individually, reconnect from driven end back to driver. After each connection, rotate by hand to confirm the combined assembly still moves freely before energizing. If binding appears after adding a component, that connection point is where the problem lives.</div></div></li>\n    </ol>\n\n    <div class=\"bw-section-label\">Interval slip note</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">If the system hesitates, skips, or produces a recurring noise or jolt at regular intervals, this is almost always a mechanical issue. Measure the interval and compare it to the rotation speed of each component to identify which shaft the slip is occurring on. On a reciprocating PD pump, a consistent knock or jolt at every stroke may indicate a check valve problem, a loose crosshead, or a worn piston rather than a rotating component issue.</div>\n    </div>",
    "diagnose": "<div class=\"bw-section-label\">Guided fault isolation</div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"diag-progress\" style=\"width:8%\"></div></div>\n    <div id=\"diag-container\"></div>\n      <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the suction side first, always</strong>Nine pump calls out of ten that start with \"the pump is not pumping\" end on the suction side: a strainer, a valve, a level, a leak letting air in, a line that is too small. The pump is the last thing to open up and the first thing to get blamed. Walk from the tank to the suction flange before touching the pump.</div></div>",
    "leaks": "<div class=\"bw-section-label\">Leak detection methods</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">Locating a leak source on a pump system requires working methodically from visible to invisible. Not all leaks are obvious. Some present as staining, efflorescence, or process contamination long before any drip is visible. The method you use depends on the fluid, the system pressure, and whether the system can be taken offline.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Visual and tactile: system running</div>\n    <ol style=\"list-style:none;\">\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-eye\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>Direct visual inspection</strong><div class=\"isolation-sub\">Walk the full system looking for drips, runs, staining, mineral deposits, or corrosion patterns. Leaks that have been present for some time leave a trail. Wet insulation on an insulated line is a commonly missed indicator. Check all flanges, unions, valve stems, and threaded connections as well as the mechanical seal area and packing gland.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-hand-stop\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>Dry wipe method</strong><div class=\"isolation-sub\">Wipe suspected areas dry with a clean rag, then observe for 30 to 60 seconds. This differentiates an active weep from old residue. Mark the wet area with chalk or a paint pen before wiping so you know exactly where to watch.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-wave-sine\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>Ultrasonic detection</strong><div class=\"isolation-sub\">An ultrasonic listening device detects turbulent flow caused by a pressurized leak through a small opening, even through insulation or in noisy environments. Scan slowly along joints and fittings. The signal will intensify as you approach the source. Particularly useful for gas systems, steam lines, and compressed air where the leak may be invisible.</div></div></li>\n    </ol>\n\n    <div class=\"bw-section-label\">Methods requiring shutdown or isolation</div>\n    <ol style=\"list-style:none;\">\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-droplet\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>Pressure test with water or air</strong><div class=\"isolation-sub\">Isolate the section, fill with water (preferred for safety over air at high pressure), and pressurize to the test specification, typically 1.5 times the MAWP for hydrostatic tests. Hold pressure and monitor for drop. For pneumatic testing, apply soapy water or leak detection solution at joints and watch for bubbles. Never exceed the rated test pressure for the weakest component in the isolated section.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-lamp\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>UV dye and black light</strong><div class=\"isolation-sub\">A compatible UV dye introduced to the process fluid will fluoresce at leak paths under a UV lamp. Effective on lubrication systems, hydraulic circuits, and refrigerant lines. Confirm dye compatibility with the fluid and any seals or elastomers in the system before use.</div></div></li>\n      <li class=\"isolation-step\"><div class=\"isolation-num\"><i class=\"ti ti-chart-line\" style=\"font-size:13px\"></i></div><div class=\"isolation-body\"><strong>Pressure decay monitoring</strong><div class=\"isolation-sub\">With the system isolated and pressurized, monitor pressure over a set time interval. Any drop confirms a leak exists in the isolated section. The rate of drop indicates leak size. Use in combination with visual methods to pinpoint the source.</div></div></li>\n    </ol>\n\n    <div class=\"bw-section-label\">Seal and packing: centrifugal vs PD</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">Centrifugal and PD pumps handle shaft sealing differently, and what is considered normal leakage differs between them.</div>\n      <ul class=\"comp-detail-tips\">\n        <li>Centrifugal pump mechanical seal: a small amount of vapour or occasional drip is acceptable on some designs. A steady drip, spray, or accumulation is not normal and requires replacement. The seal will not self-correct.</li>\n        <li>Centrifugal pump packing: should weep 40 to 60 drops per minute intentionally for cooling. Zero leakage means the packing is overtightened and the shaft sleeve will score.</li>\n        <li>Rotary PD pump (gear, lobe): mechanical seals are common and follow the same rules as centrifugal pump seals. Some designs use lip seals, which allow a light film but not a steady drip.</li>\n        <li>Reciprocating PD pump packing: piston and plunger pumps use packing rings or cup seals. A weep is expected and normal at the packing gland. A spray or steady stream under pressure is not. Replace packing before it fails completely as a blown packing on a high-pressure reciprocating pump is a serious safety event.</li>\n        <li>Diaphragm pump: the diaphragm is the seal. Any process fluid appearing outside the pump head indicates a diaphragm failure. Shut down immediately. On metering pumps with a back diaphragm and hydraulic fluid chamber, fluid in the hydraulic oil is the failure indicator.</li>\n      </ul>\n    </div>\n\n    <div class=\"bw-section-label\">Mechanical seal specific</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">A leaking mechanical seal will not self-correct. Common causes are running the pump dry even briefly, shaft misalignment, excessive shaft runout, thermal shock, or cavitation damage. Pull the pump and replace the seal. Measure shaft runout before installing the new seal, maximum 0.002 inches TIR is typical. A seal that leaks immediately after replacement almost always indicates shaft runout, misalignment, or incorrect installation of the seal faces.</div>\n      <ul class=\"comp-detail-tips\">\n        <li>Check that the seal flush line is flowing if the pump uses an external flush arrangement</li>\n        <li>Confirm the correct seal type and elastomer material for the process fluid temperature and chemistry</li>\n        <li>On PD pumps with mechanical seals, also check that the pump is not running dry on startup. PD pumps can generate suction more aggressively than centrifugal pumps, but dry running still destroys seal faces.</li>\n      </ul>\n    </div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Pump safety: process fluid, stored energy, and rotating parts</div>\n    <div class=\"callout-box red\"><div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">A pump is connected to the process on both sides. Isolating the motor isolates nothing.</div></div><div class=\"callout-box-body\">A pump casing holds whatever the process holds: hot, pressurised, caustic, flammable, or all four. The discharge line holds a head of liquid that can spin the pump backward through a leaking check valve. The suction line holds the tank. <strong>Pump lockout is process isolation plus electrical isolation plus verification of both, and the order matters.</strong></div></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-lock\" style=\"color:#F09595;\"></i> Isolation sequence for pump work</div><ul class=\"info-block-tips\"><li>Electrical: disconnect open, locked, tagged, start attempted from every start point.</li><li>Process: suction and discharge valves closed and locked. Double block and bleed where the fluid is hazardous or the valves are not trusted. A single gate valve on a hot or hazardous service is not an isolation.</li><li>Drain and vent: casing drained to a safe place, vent opened. Confirm zero pressure on a gauge. A casing with a closed vent and a trapped head of liquid is under pressure.</li><li>Seal support systems: flush, quench, and barrier fluid lines isolated and depressurised. A pressurised barrier fluid system (API Plan 53) is a separate pressure source.</li><li>Rotation: with everything isolated, confirm the shaft is not turning before the coupling guard comes off. A pump spinning backward on a leaking check valve is not stopped.</li><li>Ontario Regulation 851, section 75: written lockout procedure, followed and verified.</li></ul></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-flask\" style=\"color:#F09595;\"></i> The fluid</div><ul class=\"info-block-tips\"><li>Know what is in it. SDS on hand for anything that is not water. PPE matched to the fluid, not to the job.</li><li>Hot service: the casing, the piping, and the fluid inside are at process temperature long after shutdown. Let it cool, or wear the PPE for hot work.</li><li>Flammable and toxic: ventilation, gas monitoring where required, no ignition sources, and a plan for the drain.</li><li>Slurry and solids: a drained casing is not an empty casing. Settled solids hold liquid.</li><li>Cryogenic and refrigerant service: cold burns and asphyxiation. Different rules, different training.</li></ul></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-alert-hexagon\" style=\"color:#F09595;\"></i> Positive displacement pumps</div><ul class=\"info-block-tips\"><li>A PD pump against a closed discharge builds pressure until something fails. The relief valve is a life-safety device: tested, set, recorded, and never gagged or bypassed.</li><li>Never start a PD pump with the discharge closed. Never close the discharge on a running PD pump. Interlock or tag the discharge valve.</li><li>Reciprocating pumps have crossheads, crankshafts, and plungers. The power end is a machine with its own guards and its own stored energy.</li></ul></div>\n    <div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-rotate\"></i> Rotating parts and guards</div><ul class=\"info-block-tips\"><li>Coupling guards stay on when the pump runs. Regulation 851 sections 24 and 25.</li><li>The independent rotation check is done locked out, verified, with hands on the shaft only when the guard is off and the drive is proven isolated.</li><li>A pump shaft can turn from process flow with the motor locked out. Block or verify before hands go on it.</li><li>Vertical pumps and long-shaft sump pumps: falling shaft assemblies during disassembly, and confined space at the sump.</li></ul></div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the vent tells you</strong>Before the casing drain plug comes out, crack the vent at the top. Air in, no pressure: proceed. Fluid or vapour out under pressure: you have found trapped pressure, and the drain plug would have found it for you at face height.</div></div>"
  },
  "title": "BuiltWright, Pump Systems, Module 01",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_seals_gaskets_v1.html#failure\">Seals and Gaskets: read the failed seal</a><a href=\"builtwright_coupling_alignment_v1.html#procedure\">Couplings and Alignment: soft foot and pipe strain</a><a href=\"builtwright_installation_v1.html#piping\">Installation: strain-free piping and NPSH-friendly suction</a><a href=\"builtwright_bearing_module_v1.html#diagnose\">Bearing Failure</a><a href=\"builtwright_motors_v1.html#amps\">Motors: amps as a load symptom</a><a href=\"builtwright_vibration_v1.html#spectrum\">Vibration: vane pass and cavitation signatures</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 01 of series &nbsp;·&nbsp; pump systems</div>",
  "css": [
    ".bw-title { font-size: 24px; font-weight: 600; color: #f0ede4; }",
    ".bw-tab { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1px; padding: 6px 12px; border-radius: 4px; border: 0.5px solid #3a3a36; background: #242420; color: #888780; cursor: pointer; transition: all 0.15s; text-transform: uppercase; }",
    ".family-label { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 2px; color: #BA7517; text-transform: uppercase; margin: 1rem 0 0.5rem 0; }",
    ".card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 0.5rem; }",
    ".type-card { background: #2e2e2a; border: 1px solid #3a3a36; border-radius: 8px; padding: 0.9rem; cursor: pointer; transition: all 0.15s; }",
    ".type-card:hover, .type-card.selected { border-color: #BA7517; background: #2a1f08; box-shadow: 0 0 0 2px #BA7517; }",
    ".type-card-icon { font-size: 22px; color: #BA7517; margin-bottom: 5px; }",
    ".type-card-name { font-size: 13px; font-weight: 600; color: #f0ede4; margin-bottom: 2px; }",
    ".type-card-sub { font-size: 11px; color: #888780; }",
    ".comp-detail { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; }",
    ".comp-detail-icon { font-size: 22px; color: #BA7517; }",
    ".comp-detail-name { font-size: 16px; font-weight: 600; color: #f0ede4; }",
    ".comp-detail-tips li::before { content: '→'; position: absolute; left: 0; color: #BA7517; }",
    ".compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-bottom: 1.25rem; border: 0.5px solid #3a3a36; border-radius: 8px; overflow: hidden; }",
    ".compare-col { padding: 1rem; }",
    ".compare-col.cent { background: #0e1a2a; border-right: 0.5px solid #3a3a36; }",
    ".compare-col.pd { background: #1a0e0a; }",
    ".compare-col-header { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 0.75rem; font-weight: 600; }",
    ".compare-col.cent .compare-col-header { color: #378ADD; }",
    ".compare-col.pd .compare-col-header { color: #EF9F27; }",
    ".compare-row { font-size: 12px; color: #c8c6bf; line-height: 1.5; padding: 5px 0; border-top: 0.5px solid #2a2a26; }",
    ".compare-row:first-of-type { border-top: none; }",
    ".compare-row strong { font-weight: 600; color: #e8e6df; display: block; font-size: 11px; margin-bottom: 1px; }",
    ".chain { display: flex; align-items: center; flex-wrap: nowrap; gap: 0; overflow-x: auto; }",
    ".chain-node { flex-shrink: 0; }",
    ".chain-box { background: #2e2e2a; border: 1px solid #3a3a36; border-radius: 6px; padding: 7px 9px; text-align: center; cursor: pointer; transition: all 0.15s; min-width: 68px; }",
    ".chain-box:hover, .chain-box.selected { border-color: #BA7517; background: #2a1f08; box-shadow: 0 0 0 2px #BA7517; }",
    ".chain-icon { font-size: 18px; color: #BA7517; display: block; margin-bottom: 2px; }",
    ".chain-label { font-size: 11px; font-weight: 600; color: #e8e6df; }",
    ".chain-sub { font-size: 9px; color: #888780; }",
    ".chain-arrow { font-size: 14px; color: #5F5E5A; padding: 0 3px; flex-shrink: 0; }",
    ".callout-tips { list-style: none; margin-top: 0.6rem; }",
    ".callout-tips li { font-size: 13px; color: #888780; padding: 3px 0 3px 16px; position: relative; line-height: 1.5; }",
    ".callout-tips li::before { content: '→'; position: absolute; left: 0; color: #EF9F27; }",
    ".disc-wrap { margin-bottom: 8px; border-radius: 8px; overflow: hidden; border: 0.5px solid #185FA5; }",
    ".disc-wrap.jx { border-color: #3B6D11; }",
    ".disc-toggle { width: 100%; background: #0c1f33; border: none; padding: 0.7rem 1.1rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer; gap: 10px; }",
    ".disc-wrap.jx .disc-toggle { background: #1a1f0e; }",
    ".disc-toggle-left { display: flex; align-items: center; gap: 8px; }",
    ".disc-toggle-icon { font-size: 15px; color: #378ADD; flex-shrink: 0; }",
    ".disc-wrap.jx .disc-toggle-icon { color: #97C459; }",
    ".disc-toggle-label { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #378ADD; font-weight: 600; }",
    ".disc-wrap.jx .disc-toggle-label { color: #97C459; }",
    ".disc-chevron { font-size: 13px; color: #378ADD; transition: transform 0.2s; flex-shrink: 0; }",
    ".disc-wrap.jx .disc-chevron { color: #97C459; }",
    ".disc-wrap.open .disc-chevron { transform: rotate(180deg); }",
    ".disc-body { display: none; background: #0c1f33; padding: 0 1.1rem 0.9rem 1.1rem; border-top: 0.5px solid #185FA5; }",
    ".disc-wrap.jx .disc-body { background: #1a1f0e; border-top-color: #3B6D11; }",
    ".disc-wrap.open .disc-body { display: block; }",
    ".disc-body p { font-size: 13px; color: #c8c6bf; line-height: 1.6; }",
    ".isolation-step { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 0.9rem 1.1rem; margin-bottom: 8px; display: flex; gap: 12px; align-items: flex-start; }",
    ".isolation-num { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #BA7517; background: #2a1f08; border-radius: 4px; padding: 2px 7px; flex-shrink: 0; font-weight: 600; margin-top: 1px; }",
    ".isolation-body { font-size: 13px; color: #c8c6bf; line-height: 1.55; }",
    ".isolation-body strong { font-weight: 600; color: #e8e6df; }",
    ".isolation-sub { font-size: 12px; color: #888780; margin-top: 3px; line-height: 1.5; }",
    ".progress-bar { height: 3px; background: #242420; border-radius: 2px; margin-bottom: 1rem; overflow: hidden; }",
    ".tree-q-hint { font-size: 12px; color: #888780; margin-bottom: 0.75rem; font-style: italic; }",
    ".tree-btn { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; padding: 7px 16px; border-radius: 5px; border: 0.5px solid #3a3a36; background: #242420; color: #e8e6df; cursor: pointer; transition: all 0.12s; }",
    ".tree-result.info { background: #0c1f33; border: 0.5px solid #185FA5; }",
    ".tree-result.info .tree-result-label { color: #85B7EB; }",
    "@media print { body { background:#fff; color:#000; padding:0; } .bw-tabs, .ref-search, .tree-back, .sc-score, .adv-chevron, .bw-badge { display:none !important; } .bw-panel { display:none; } .bw-panel.active { display:block; } .bw-wrap { max-width:100%; } .bw-title, .comp-detail-name, .info-block-title, .type-card-name, .sym-card-label, .tree-q-text, .tree-result-text, .route-title, .sc-stem, .callout-box-title, .field-tip strong, .tree-prevent strong, .bw-section-label, .family-label, .ref-table th { color:#000 !important; } .comp-detail-body, .info-block-body, .callout-box-body, .tree-result-sub, .tree-prevent, .field-tip div, .sc-why, .ref-table td, .comp-detail-tips li, .info-block-tips li, .callout-tips li, .sym-detail-body, .adv-body p, .route-text, .type-card-sub, .sym-card-sub, .tree-q-hint, .ref-note, .chain-label, .chain-sub { color:#222 !important; } .comp-detail, .info-block, .callout-box, .type-card, .sym-card, .tree-q, .tree-result, .field-tip, .adv-wrap, .adv-body, .adv-toggle, .chain-wrap, .chain-box, .sc-q, .sym-detail, .calc, .route, .dir-row, .safety-strip { background:#fff !important; border-color:#999 !important; box-shadow:none !important; } .adv-body { display:block !important; } .tree-btn, .sc-opt, .pm-btn { border:0.5px solid #999; background:#fff; color:#000; } .progress-bar { display:none; } a { color:#000; text-decoration:none; } .bw-logo a::after { content:\" builtwrightapp.com\"; color:#666; } .bw-header { border-bottom:1px solid #000; } .comp-detail, .info-block, .callout-box, .tree-q, .sc-q { page-break-inside: avoid; } }"
  ],
  "cssShared": 86
});
