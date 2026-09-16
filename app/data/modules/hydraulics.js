BW.register("hydraulics", {
  "key": "hydraulics",
  "num": "07",
  "name": "Hydraulics",
  "source": "builtwright_hydraulics_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "System Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "pumps",
      "label": "Pumps",
      "active": false,
      "style": ""
    },
    {
      "id": "valves",
      "label": "Valves",
      "active": false,
      "style": ""
    },
    {
      "id": "actuators",
      "label": "Actuators",
      "active": false,
      "style": ""
    },
    {
      "id": "fluid",
      "label": "Fluid and Contamination",
      "active": false,
      "style": ""
    },
    {
      "id": "symbols",
      "label": "Circuit Symbols",
      "active": false,
      "style": ""
    },
    {
      "id": "troubleshoot",
      "label": "Troubleshoot",
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
    "title": "Hydraulics",
    "badge": "Module 07",
    "tree": {
      "progress": "hyd-progress",
      "container": "hyd-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectChain": {
        "scope": null,
        "cardClass": ".chain-box",
        "prefix": "cnode-",
        "data": "chainData",
        "display": "chain-display"
      },
      "selectPump": {
        "scope": "#panel-pumps",
        "cardClass": ".type-card",
        "prefix": "pcard-",
        "data": "pumpData",
        "display": "pump-display"
      },
      "selectValve": {
        "scope": "#panel-valves",
        "cardClass": ".type-card",
        "prefix": "vcard-",
        "data": "valveData",
        "display": "valve-display"
      },
      "selectAct": {
        "scope": "#panel-actuators",
        "cardClass": ".type-card",
        "prefix": "acard-",
        "data": "actData",
        "display": "act-display"
      },
      "selectSym": {
        "scope": null,
        "cardClass": ".sym-card",
        "prefix": "sym-",
        "data": "symData",
        "display": "sym-display"
      }
    },
    "reveals": {},
    "toggles": [
      {
        "name": "toggleAdv",
        "byId": true
      }
    ],
    "bespoke": []
  },
  "cards": {
    "chainData": {
      "reservoir": {
        "icon": "ti-bucket",
        "name": "Reservoir",
        "role": "Stores fluid, sheds heat, settles contaminants, releases air",
        "body": "The reservoir is not a tank. It is a component that does four jobs: holds enough fluid to supply the pump under all conditions, gives the fluid time to cool, lets particles and water settle, and lets entrained air escape before the fluid goes around again. A reservoir sized at two to three times the pump flow per minute does all four. A reservoir sized smaller runs hot and aerated.",
        "tips": [
          "Baffles separate the return side from the suction side so fluid takes the long way round and has time to cool and settle. A missing or damaged baffle short-circuits the reservoir.",
          "The suction pipe must stay submerged at the lowest operating level, and the return pipe must discharge below the surface to avoid aeration.",
          "The breather is a filter. Replace a plain open breather with a desiccant particulate breather and watch the water and particle counts fall.",
          "Level and temperature indicators are the first things to look at on any hydraulic call. Low level uncovers the suction. High temperature means energy is being wasted somewhere.",
          "Drain plugs at the lowest point, magnetic plugs for wear monitoring, and a clean-out cover large enough to actually get in and clean."
        ]
      },
      "pump": {
        "icon": "ti-engine",
        "name": "Pump",
        "role": "Converts shaft power to flow. Does not create pressure.",
        "body": "The pump moves fluid. That is all. Pressure appears when something resists the flow. A pump at full flow into an open line reads near zero on the gauge. The same pump into a blocked line reads whatever the relief valve allows. Understanding this is the difference between reading a hydraulic gauge and guessing.",
        "tips": [
          "Inlet condition is everything. A pump starved at the inlet cavitates: vapour bubbles form at the low pressure side and collapse violently at the high pressure side, eroding the internals.",
          "Case drain on piston pumps carries internal leakage back to tank. Case drain flow rising over time is the pump wearing. Measure it.",
          "Pump shaft seals see reservoir pressure on the inside. A pump case that is pressurised (blocked case drain) blows the shaft seal.",
          "A pump coupling must be aligned like any other coupling. Pump shafts are short and pump bearings are small; misalignment kills them fast.",
          "Noise is the pump talking. Cavitation whines steadily. Aeration rattles. Wear knocks."
        ]
      },
      "relief": {
        "icon": "ti-gauge",
        "name": "Relief Valve",
        "role": "Sets the maximum system pressure by dumping flow to tank",
        "body": "The relief valve is the safety valve of the circuit. When pressure reaches its setting it opens and passes flow to tank, holding pressure at the setting. Every hydraulic system has one. On a fixed displacement pump with a closed centre valve, the relief valve is where all the flow goes whenever the actuators are not moving, and all that flow becomes heat.",
        "tips": [
          "Direct acting relief valves are fast and simple but have a wide difference between cracking and full-flow pressure. Pilot operated relief valves hold a tighter setting at high flow.",
          "A relief valve that chatters is unstable: usually contamination on the seat, or the setting too close to the pump compensator.",
          "A relief valve that is hot when the system is idle is passing oil. Either the setting has drifted down, the seat is damaged, or the system pressure is higher than the setting because of a compensator mismatch.",
          "Relief valve setting is checked by deadheading the system safely and reading the gauge. Adjust in small increments, and lock the adjuster.",
          "The relief valve is not a pressure control for normal operation. A system that runs on the relief all day is a badly designed or badly adjusted system."
        ]
      },
      "filter": {
        "icon": "ti-filter",
        "name": "Filter",
        "role": "Removes the particles that cause most hydraulic failures",
        "body": "Filters are placed on the pressure line to protect sensitive downstream components, on the return line to clean the fluid before it reaches the reservoir, and offline in a kidney loop to hold a cleanliness target continuously. Every filter has a rating (beta ratio at a micron size) and a bypass valve that opens when the element loads up. A filter in bypass is filtering nothing.",
        "tips": [
          "Change elements on the indicator, not on the calendar. An indicator that has never tripped may mean the fluid is clean or the indicator is broken.",
          "Check indicators at operating temperature. Cold oil loads the filter and trips the indicator falsely.",
          "Fine filtration on the suction side starves the pump. Suction strainers are coarse and are there for large debris only.",
          "New oil is dirty oil. Filter it into the reservoir through a transfer cart. The drum has been sitting in a warehouse.",
          "A filter element cut open tells you what is in the system. Metal flakes, rubber crumbs, and fibres each point somewhere."
        ]
      },
      "dcv": {
        "icon": "ti-switch-3",
        "name": "Directional Control Valve",
        "role": "Routes flow to the actuator, and back",
        "body": "The directional valve connects pump flow to one actuator port and the other port to tank. The spool position is set by solenoids, pilot pressure, a lever, or a cam. What the valve does in its centre position determines how the whole circuit behaves at rest. Hydraulic DCVs are spool valves with a close metal-to-metal clearance and will always leak a little; they are not load holding devices.",
        "tips": [
          "Solenoid DC coils are quieter and more tolerant of a sticking spool than AC coils. AC coils burn out fast when the spool sticks.",
          "A spool that sticks on contamination or varnish is the most common DCV fault. Manual override pins on the solenoid ends let you shift the spool by hand to prove whether the fault is electrical or mechanical.",
          "Pilot operated DCVs need pilot pressure to shift. Internal pilot takes it from the P port, which means a system with no pressure cannot shift the valve. External pilot uses a separate supply.",
          "Spool type matters. A closed centre spool on a fixed pump with no unloading sends the pump over relief at rest.",
          "A DCV that shifts one way but not the other has a bad coil, a bad connector, or contamination on one end of the spool bore."
        ]
      },
      "actuator": {
        "icon": "ti-arrow-bar-right",
        "name": "Actuator",
        "role": "Converts pressure and flow into force and motion",
        "body": "Cylinders convert pressure to linear force and flow to linear speed. Motors convert pressure to torque and flow to rotational speed. Both are simple, and both fail from the same causes: contamination scoring the sealing surfaces, misalignment side-loading the rod or shaft, and heat hardening the seals.",
        "tips": [
          "The rod and its seals are the most vulnerable part of a cylinder. A scored, pitted, or bent rod destroys seals.",
          "Internal leakage past the piston seal shows as drift under load, slow movement, and heat at the cylinder.",
          "Pressure intensification on the rod side of a cylinder can exceed relief pressure when an overrunning load pulls the rod. Counterbalance or pilot operated check valves control this.",
          "Hydraulic motors have case drains like piston pumps. A blocked case drain blows the shaft seal.",
          "Cylinder mounting must allow the rod to move along its own axis. A misaligned mount bends the rod and side-loads the gland."
        ]
      },
      "return": {
        "icon": "ti-arrow-back-up",
        "name": "Return Line",
        "role": "Filter, cool, and deliver fluid back to the reservoir below the surface",
        "body": "Everything that leaves the actuators comes back through the return line, usually through a return filter and often a cooler. Return line back-pressure affects actuator behaviour: a restricted return filter or a small return line raises pressure on the return side of every actuator and can cause pilot operated valves to misbehave. The return must discharge below the fluid surface.",
        "tips": [
          "Return line back-pressure should be low, typically under 2 to 3 bar. A gauge on the return line is worth having.",
          "A return line discharging above the surface aerates the reservoir. Foam means air, and air means erratic actuators.",
          "The cooler is usually on the return side. A cooler fouled on the water side or blocked on the air side runs the whole system hot.",
          "Case drain lines from piston pumps and motors should return to tank separately, not into a pressurised return manifold.",
          "Return filter bypass indicators are the most commonly ignored indicator in the plant."
        ]
      }
    },
    "pumpData": {
      "gear": {
        "icon": "ti-settings",
        "name": "External Gear Pump",
        "role": "Fixed displacement. Simple, robust, inexpensive, noisy.",
        "body": "Two meshing gears carry fluid around the outside of the housing from inlet to outlet. Fixed displacement, so flow depends only on speed. Tolerant of contamination, tolerant of poor inlet conditions, and cheap to replace. Used everywhere on mobile equipment and on industrial systems up to about 250 bar. Internal gear and gerotor pumps are quieter variants used for charge pumps and low pressure duty.",
        "tips": [
          "Wear plates and the housing bore wear from contamination and cavitation. Volumetric efficiency falls as clearances open, showing as slow actuators at operating temperature.",
          "Rotation is set by the housing porting on most gear pumps. Running one backward blows the shaft seal on the first start. Check the arrow.",
          "A gear pump cannot destroke. On a closed centre circuit it needs an unloading valve or it lives on the relief.",
          "Noise is inherent. A gear pump that has become noisier than it was is cavitating or worn.",
          "Shaft seal failure usually means the inlet is restricted (pulling a vacuum on the seal) or the case pressure is high."
        ]
      },
      "vane": {
        "icon": "ti-aperture",
        "name": "Vane Pump",
        "role": "Fixed or variable. Quiet, smooth, cartridge replaceable, dislikes dirt.",
        "body": "A slotted rotor turns inside a cam ring, and vanes slide in and out of the slots to sweep fluid from inlet to outlet. Balanced (double lobe) vane pumps are fixed displacement and have no radial bearing load. Unbalanced (single lobe) designs can be made variable by moving the cam ring. Vane pumps are quiet and give smooth flow, and the cartridge (rotor, vanes, ring, port plates) replaces as a unit without pulling the pump.",
        "tips": [
          "Vanes wear at the tips and the cam ring wears in a pattern. A worn cartridge is a straightforward swap.",
          "Vane pumps need a minimum operating pressure to keep the vanes pushed out against the ring at startup. Some designs have small springs or pin assist for this.",
          "More sensitive to contamination than gear pumps. Particles between vane and slot cause the vane to stick and the pump to lose flow suddenly.",
          "Cartridge orientation sets the rotation. Installing a cartridge backward destroys it on the first start.",
          "Cavitation on a vane pump is loud and destructive; the vane tips hammer the ring."
        ]
      },
      "axial": {
        "icon": "ti-circle-dotted",
        "name": "Axial Piston Pump (Swashplate)",
        "role": "High pressure, high efficiency, and the standard variable pump",
        "body": "Pistons in a rotating barrel ride on an angled swashplate. The angle sets the stroke, so changing the angle changes the displacement. With a compensator or load sense control the pump adjusts its own output to match what the system needs. This is the workhorse of modern industrial and mobile hydraulics from 200 to 400 bar.",
        "tips": [
          "Case drain flow is the health check. Measure it against the manufacturer limit. Rising case drain means the pistons, slippers, or valve plate are wearing.",
          "The pump case must be full of oil before first start. Fill through the highest case port. A dry start destroys the pump.",
          "Contamination sensitive. The slipper faces and valve plate run on a film that particles score.",
          "A compensator spool sticking on dirt makes the pump hunt or fail to destroke. The compensator is a small valve on the pump and is usually serviceable.",
          "Inlet conditions matter more as speed and pressure rise. Boost pumps or pressurised reservoirs are used on demanding applications."
        ]
      },
      "bentaxis": {
        "icon": "ti-angle",
        "name": "Bent Axis Piston Pump",
        "role": "Highest pressure and speed capability, common on mobile and marine",
        "body": "The piston barrel is angled relative to the drive shaft and the pistons connect to the shaft flange through ball joints. Fixed displacement versions are compact and tolerate high speed. Variable versions change the barrel angle. Used as pumps and as motors on cranes, excavators, winches, and ship deck machinery.",
        "tips": [
          "Very high starting torque as a motor, which is why they drive winches and slew rings.",
          "Same case drain and contamination rules as swashplate units.",
          "Repair is specialist work. The ball joints and barrel bearings are precision components."
        ]
      },
      "radial": {
        "icon": "ti-sun",
        "name": "Radial Piston Pump",
        "role": "Very high pressure, low speed, presses and test rigs",
        "body": "Pistons arranged radially around an eccentric cam. Each piston has its own inlet and outlet check valves. Radial piston pumps go to very high pressures (700 bar and above) at modest flows and are used on presses, clamping systems, and test equipment.",
        "tips": [
          "Check valves on each piston are wear items. A single stuck check shows as a drop in flow and a rhythmic pulse.",
          "Very tolerant of long deadhead periods at full pressure.",
          "Low speed and small flow, so they are often paired with a low pressure high flow pump for rapid advance."
        ]
      },
      "screw": {
        "icon": "ti-ruler-2",
        "name": "Screw Pump",
        "role": "Silent, pulse-free, used where noise matters and pressure does not",
        "body": "Two or three meshing screws move fluid axially along the housing. Essentially silent, no pulsation, and tolerant of viscous fluids. Used for lubrication systems, elevators, and applications where noise is a design constraint. Limited to moderate pressures.",
        "tips": [
          "Ideal for high viscosity fluids that would cavitate a gear or vane pump.",
          "Rarely a troubleshooting subject; when a screw pump fails it is usually contamination or dry running."
        ]
      }
    },
    "valveData": {
      "dcv43": {
        "icon": "ti-switch-3",
        "name": "4/3 Directional Control Valve",
        "role": "Four ports (P, T, A, B), three positions, centre condition sets the circuit behaviour",
        "body": "The standard hydraulic directional valve. Position one sends P to A and B to T. Position three sends P to B and A to T. The centre position is chosen from several spool types: closed, tandem, float, open, or regenerative. The centre condition determines what the actuator does at rest and whether the pump is loaded or unloaded when nothing is moving. See the centre conditions table below.",
        "tips": [
          "Closed centre on a fixed pump with no unloading valve: the pump lives on the relief and the system overheats. This is a design error that gets built anyway, and the fix is a pressure compensated pump or an unloading circuit.",
          "Hydraulic spools leak. A closed centre spool holding a load will drift. Load holding is done with pilot operated checks or counterbalance valves.",
          "Manual override pins on solenoid valves let you shift the spool without power. If the actuator moves on manual override but not on the solenoid, the fault is electrical.",
          "Spool response can be too fast for the load, causing shock. Solenoid valves with adjustable spool travel or orificed pilots soften the shift.",
          "Read the valve nameplate and the drawing. Two valves that look identical can have opposite centre conditions."
        ]
      },
      "pilotdcv": {
        "icon": "ti-arrows-split-2",
        "name": "Pilot Operated Directional Valve",
        "role": "A small solenoid pilot valve shifts a large main spool with hydraulic pressure",
        "body": "Above a certain flow rate the force needed to shift a spool exceeds what a solenoid can produce. Two-stage valves use a small solenoid pilot valve to direct pilot pressure to one end of the main spool. Standard for flows above roughly 100 litres per minute. The main spool needs pilot pressure to move, and it needs a drain path from the other end.",
        "tips": [
          "Minimum pilot pressure is a real number, often 5 to 10 bar. Internal pilot from the P port means the valve cannot shift until the system builds pressure. A closed centre main spool with internal pilot and a compensated pump at zero flow is a chicken-and-egg problem solved with a check valve or external pilot.",
          "Internal versus external pilot and drain are set by small plugs in the valve body. A valve rebuilt with the plugs in the wrong places will not shift, or will shift and not return.",
          "Pilot chokes (small orifices in the pilot line) adjust shift speed to reduce shock.",
          "A two-stage valve that shifts slowly or partially usually has low pilot pressure or a contaminated pilot stage."
        ]
      },
      "relief": {
        "icon": "ti-gauge",
        "name": "Relief Valve",
        "role": "Normally closed. Opens at the set pressure to protect the system.",
        "body": "A spring holds a poppet or spool on its seat. When inlet pressure overcomes the spring the valve opens and passes flow to tank. Direct acting reliefs are simple, fast, and have a wide pressure override (the difference between cracking and full flow). Pilot operated reliefs use a small pilot poppet to control a large main poppet, giving a much tighter setting across the flow range and the option of a remote vent for unloading.",
        "tips": [
          "Setting is adjusted by the spring screw. Adjust with the system safely deadheaded and a gauge on the pressure line. Small increments. Lock the adjuster.",
          "A pilot operated relief with its vent port connected to a small solenoid valve becomes an unloading valve: open the vent and the pump goes to tank at near zero pressure.",
          "Chatter comes from contamination on the seat, from the setting being too close to a compensator setting, or from a direct acting relief handling more flow than it is sized for.",
          "A relief valve is a safety device and a heat generator. It should almost never be open during normal operation.",
          "Relief valves on cylinder lines (port reliefs) protect against intensification and shock loads and are set higher than the main relief."
        ]
      },
      "reducing": {
        "icon": "ti-arrow-down-circle",
        "name": "Pressure Reducing Valve",
        "role": "Normally open. Limits pressure in a branch to below the main system pressure.",
        "body": "A reducing valve senses its own outlet pressure and throttles closed as the outlet approaches the setting. It is the only common pressure valve that is normally open. Used to run a clamp circuit at a lower pressure than the main system, or to protect a component with a lower rating. Most designs have a drain port that must go to tank unrestricted.",
        "tips": [
          "A reducing valve with a blocked drain will not regulate. Check the drain line first.",
          "Relieving type reducing valves can vent excess outlet pressure to tank (for instance from thermal expansion). Non-relieving types cannot, and outlet pressure can rise above the setting when the branch is blocked.",
          "Outlet pressure that creeps up toward supply pressure means the valve is worn or contaminated and not closing fully.",
          "The reducing valve setting is checked with a gauge on the outlet under flow, not at deadhead."
        ]
      },
      "sequence": {
        "icon": "ti-list-numbers",
        "name": "Sequence Valve",
        "role": "Normally closed. Opens a second circuit only when the first reaches pressure.",
        "body": "A sequence valve looks like a relief valve but its outlet goes to a second actuator rather than to tank, and it has an external drain. It holds the second actuator off until the first has completed its work and pressure has risen to the sequence setting. Clamp, then drill. Extend, then rotate. The sequence happens on pressure, not on time or position.",
        "tips": [
          "The drain must be piped separately to tank. A sequence valve with its drain teed into the outlet will not open.",
          "Sequence setting must be above the pressure needed to complete the first operation but below the relief setting.",
          "Sequence valves usually include a reverse free-flow check so the second actuator can return without going through the sequence poppet.",
          "A sequence that fires early means the first actuator is stalling before it finishes (binding, undersized) or the setting has drifted down."
        ]
      },
      "counterbalance": {
        "icon": "ti-scale",
        "name": "Counterbalance Valve",
        "role": "Holds a load against gravity and controls its descent without runaway",
        "body": "A counterbalance valve is a normally closed pressure valve with a pilot from the opposite side of the actuator. It holds a suspended load by blocking the return flow until pilot pressure from the supply side opens it. The load can then descend at a controlled rate, and if the supply pressure drops (a hose fails) the valve closes and the load stops. Pilot ratio (often 3:1 or 4:1) sets how much supply pressure is needed relative to load pressure to open it.",
        "tips": [
          "Setting is typically 1.3 times the load-induced pressure. Too low and the load creeps. Too high and it takes excessive pressure to lower, and the circuit runs hot and jerky.",
          "Counterbalance valves are the load holding device. The DCV is not.",
          "A load that lurches or chatters on descent has an unstable counterbalance: setting too low, wrong pilot ratio for the application, or air in the pilot line.",
          "Never remove or adjust a counterbalance valve with a load on the cylinder. Support the load first.",
          "Externally vented counterbalance valves are used where back-pressure on the return line would otherwise affect the setting."
        ]
      },
      "flow": {
        "icon": "ti-adjustments-horizontal",
        "name": "Flow Control Valve",
        "role": "Sets actuator speed. Non-compensated or pressure compensated.",
        "body": "A needle valve is a non-compensated flow control: the flow through it depends on the pressure drop across it, so actuator speed changes with load. A pressure compensated flow control holds a constant pressure drop across the orifice with an internal compensator spool, so flow stays constant as load changes. Temperature compensated versions also correct for viscosity change. Placement is meter-in (supply side), meter-out (return side), or bleed-off (a bypass to tank).",
        "tips": [
          "Meter-out is standard for cylinders with overrunning loads: the restriction on the return side stops the load from running ahead of the supply. It also intensifies rod-side pressure. Port reliefs may be needed.",
          "Meter-in works for resistive loads and gives smoother starts, but cannot control an overrunning load.",
          "Bleed-off is efficient (the pump does not go over relief) but speed varies with load.",
          "A flow control that drifts open with vibration needs its locknut tightened and its setting recorded.",
          "A pressure compensated flow control with a sticking compensator gives erratic speed. Contamination is the cause."
        ]
      },
      "check": {
        "icon": "ti-arrow-right-circle",
        "name": "Check Valve and Pilot Operated Check",
        "role": "Free flow one way, blocked the other. Pilot operated: blocked until a pilot signal opens it.",
        "body": "A check valve is a ball or poppet on a seat with a light spring. Flow one way lifts it; flow the other way seats it. A pilot operated check adds a pilot piston that pushes the poppet off its seat when pilot pressure is applied, allowing reverse flow on command. Pilot operated checks are the common load holding device for cylinders: the load side is locked until the DCV supplies pressure to the opposite port, which pilots the check open.",
        "tips": [
          "Pilot operated checks hold loads with a poppet on a seat, which is leak-tight in a way a spool never is. Drift on a PO check circuit means the seat is damaged or the pilot is not releasing.",
          "Pilot ratio matters. A 3:1 ratio needs one third of the load pressure at the pilot to open. A high load with a low pilot ratio may need more pressure than the pump can give.",
          "Decompression: opening a PO check under a high trapped pressure releases it as a shock. Decompression checks open a small poppet first.",
          "A PO check can hold intensified pressure on the load side after the system is shut down. Crack fittings slowly, from the side, after the load is supported.",
          "Check valves in the wrong orientation are a common cause of a circuit that will not work after a rebuild. The arrow is the flow direction."
        ]
      }
    },
    "actData": {
      "single": {
        "icon": "ti-arrow-bar-right",
        "name": "Single Acting Cylinder",
        "role": "Pressure extends, gravity or a spring retracts",
        "body": "One port. Pressure pushes the piston out; the load, gravity, or an internal spring brings it back. Common in lifting applications where the load itself does the retracting: jacks, lifts, dump bodies. The retract speed depends on how fast the return flow is allowed to leave, which is where a counterbalance or flow control comes in.",
        "tips": [
          "Ram type single acting cylinders (plunger with no piston) are used for jacks and presses. The rod is the piston.",
          "A single acting cylinder that will not retract has a blocked return path or a return flow control set too tight.",
          "Gravity return with no counterbalance is a runaway load waiting to happen if a line fails."
        ]
      },
      "double": {
        "icon": "ti-arrows-horizontal",
        "name": "Double Acting Cylinder",
        "role": "The standard differential cylinder: pressure both ways, unequal areas",
        "body": "Two ports. The cap end has full piston area; the rod end has piston area minus rod area. So extend is stronger and slower, retract is weaker and faster, for the same pressure and flow. The area ratio (often 2:1 on industrial cylinders) matters for regenerative circuits, intensification, and flow calculations. Cushions at either end decelerate the piston before it strikes the end cap.",
        "tips": [
          "Rod seal, wiper, piston seal, and wear rings are the seal kit. Replace the kit as a set, and inspect the rod and bore before fitting it.",
          "Cushion adjustment: the needle on each end cap. Adjust with the cylinder running under normal load and speed.",
          "Rod-side intensification: with a load pulling the rod out and the rod port blocked or restricted, cap-end pressure can exceed system pressure by the area ratio. A port relief or counterbalance handles it.",
          "Cylinder mounting (clevis, trunnion, flange, foot) determines what side loads the rod sees. Foot mounts on long strokes bend rods.",
          "Stroke and bore are on the nameplate. The rod diameter often is not. Measure it before doing force calculations."
        ]
      },
      "doublerod": {
        "icon": "ti-arrows-left-right",
        "name": "Double Rod Cylinder",
        "role": "Rod out both ends, equal areas, equal force and speed in both directions",
        "body": "A rod on both sides of the piston makes the two areas equal. Extend and retract are identical in force and speed for the same pressure and flow. Used where symmetric motion matters: steering, positioning tables, and any servo application where equal gain in both directions simplifies the control loop. The second rod can carry a position feedback device or a cam.",
        "tips": [
          "Twice the rod seal count means twice the rod seal leak potential.",
          "Longer overall length than a single rod cylinder of the same stroke.",
          "Ideal for servo and proportional position control because the control gains are symmetric."
        ]
      },
      "telescopic": {
        "icon": "ti-arrows-maximize",
        "name": "Telescopic Cylinder",
        "role": "Long stroke from a short collapsed length. Dump bodies, cranes, lifts.",
        "body": "Nested stages extend in sequence from largest to smallest. Most are single acting (gravity return) and used on dump trucks and trailers. Double acting versions exist for applications where the load cannot do the retracting. Force falls with each stage as the area gets smaller, and the last stage sees the highest pressure.",
        "tips": [
          "Stage seals wear from side load. A telescopic cylinder must be mounted so the load stays on axis, and dump bodies must be raised on level ground.",
          "Stages should extend and retract in order. Out of sequence means a stage seal is bypassing or a stage is binding.",
          "Pressure intensification between stages can occur on double acting units. Follow the manufacturer bleed and test procedures.",
          "Chrome on the stages pits from weather when left extended. Retract when not in use."
        ]
      },
      "gearmotor": {
        "icon": "ti-settings",
        "name": "Gear and Vane Motors",
        "role": "High speed, modest torque, simple and inexpensive",
        "body": "A gear pump run backward is a gear motor, more or less. Gear and vane motors are fixed displacement, run at high speeds, and produce modest torque. Used for fans, conveyors, auger drives, and anything that needs continuous rotation without much starting torque. Vane motors need springs or pressure to hold the vanes out, which limits their low speed behaviour.",
        "tips": [
          "Speed is flow divided by displacement. Torque is pressure times displacement. Both fixed, so control is by flow control and relief.",
          "Bidirectional motors need a case drain or an external drain so the shaft seal is not pressurised when the motor reverses.",
          "Low starting torque means gear and vane motors stall under heavy starting loads. Piston or orbital motors are used instead.",
          "Motor slip (internal leakage) rises with wear and shows as speed falling under load."
        ]
      },
      "pistonmotor": {
        "icon": "ti-circle-dotted",
        "name": "Piston Motors",
        "role": "High pressure, high efficiency, fixed or variable, good starting torque",
        "body": "Axial and bent axis piston motors are the high performance option. Variable displacement piston motors change their displacement to trade speed for torque, which is how a hydrostatic transmission gets both a high top speed and a high starting torque from one motor. Case drain, contamination sensitivity, and fill-before-start rules are the same as for piston pumps.",
        "tips": [
          "Fill the case before first start. Every time.",
          "Case drain flow is the health check, same as a pump.",
          "Variable motors have a minimum displacement stop. Below it the motor overspeeds. Never adjust the minimum displacement stop without the manual.",
          "Hydrostatic transmissions (variable pump driving a variable or fixed motor in a closed loop) have a charge pump, a charge relief, and flushing valves. Troubleshooting a hydrostatic loop starts with charge pressure."
        ]
      },
      "orbital": {
        "icon": "ti-rotate-360",
        "name": "Orbital (Gerotor) Motors",
        "role": "Low speed, high torque, compact. Wheel motors, augers, winches.",
        "body": "An inner rotor orbits inside a stationary outer ring with one more lobe than the rotor, and a commutating valve directs flow to the chambers. Each shaft revolution takes several orbits, which gives a large displacement in a small package: low speed, high torque, no gearbox needed. Standard on skid steer wheel drives, sweeper brushes, augers, and small winches.",
        "tips": [
          "Commutator (valve) wear shows as speed loss and pulsing at low speed.",
          "Shaft seal pressure rating is low. A blocked case drain or high return back-pressure blows the seal.",
          "Bidirectional and reversible, but check whether the unit has a drain port; some rely on internal drain and have a return pressure limit.",
          "Very tolerant of contamination compared to piston motors, which is why they are on mobile equipment."
        ]
      },
      "rotaryact": {
        "icon": "ti-rotate-clockwise",
        "name": "Rotary Actuator",
        "role": "Limited rotation, very high torque. Rack and pinion, vane, or helical.",
        "body": "Converts linear piston motion into rotation through a rack and pinion, uses a vane in a housing, or uses a helical spline to turn a cylinder stroke into rotation. Limited to a fixed arc (90, 180, 360 degrees or more on helical types). Produces very high torque in a compact package. Used for valve actuators, indexing, tilting, and clamping.",
        "tips": [
          "End stops set the arc. Adjust under no load first.",
          "Vane type rotary actuators have internal leakage past the vane and will drift under load. Rack and pinion types hold better but are larger.",
          "Output shaft loading must be within the bearing rating. The shaft is not a support."
        ]
      }
    },
    "symData": {
      "reservoir": {
        "name": "Reservoir",
        "body": "An open rectangle with no top is a vented reservoir at atmospheric pressure. A line that ends below the bottom of the rectangle is a return or suction line submerged below the fluid surface. A line ending above the fluid level is drawn stopping short. A closed rectangle is a pressurised reservoir.",
        "tips": [
          "Every line that goes to tank on a drawing ends in this symbol. Count them: it tells you every path fluid can take home.",
          "Multiple reservoir symbols on a drawing usually mean one physical reservoir drawn several times for clarity.",
          "A pressurised (closed) reservoir symbol tells you the suction side is boosted, and that the reservoir has a relief and inspection requirements."
        ]
      },
      "fixedpump": {
        "name": "Fixed Displacement Pump",
        "body": "A circle with a solid triangle pointing outward toward the pressure line. Solid triangle means hydraulic. The shaft is drawn as a line from the side. Flow is fixed by speed; nothing on the pump can change it.",
        "tips": [
          "Two triangles pointing outward means a bidirectional pump, used in closed loop hydrostatic circuits.",
          "A fixed pump with a closed centre DCV needs an unloading valve or it lives on the relief.",
          "The pump symbol tells you nothing about the pump type (gear, vane, piston). The nameplate does."
        ]
      },
      "varpump": {
        "name": "Variable Displacement Pump",
        "body": "Same as the fixed pump symbol with a diagonal arrow through it. The arrow means displacement can be changed. The control that changes it (pressure compensator, load sense, electrical) is often drawn as a small box attached to the pump with its own pilot lines.",
        "tips": [
          "A compensator is usually drawn as a small relief-like symbol on the pump with a pilot line from the outlet.",
          "A load sense pump has an extra pilot port, usually marked LS or X, with a line coming from the load side of the DCV.",
          "If the drawing shows a variable pump and the system runs hot, check that the relief is set above the compensator."
        ]
      },
      "hydmotor": {
        "name": "Hydraulic Motor",
        "body": "A circle with solid triangles pointing inward. One triangle is a unidirectional motor; two is bidirectional. A diagonal arrow makes it variable displacement. A small line to tank from the case is the case drain, and its presence tells you the motor has one and it must be connected.",
        "tips": [
          "Case drain must return to tank separately. A case drain teed into a pressurised return blows the shaft seal.",
          "A motor drawn with a diagonal arrow is variable and has a minimum displacement stop. Do not touch that stop without the manual.",
          "Motors on the drawing often have a crossover relief pair to protect against shock when the DCV centres."
        ]
      },
      "reliefsym": {
        "name": "Relief Valve",
        "body": "A single box with an arrow drawn offset from the flow path (the valve is normally closed) and a spring on one side. The pilot line (dashed) comes from the inlet and pushes against the spring. When inlet pressure beats the spring, the arrow moves into line and flow goes to tank. A pilot operated relief is drawn as a box within a box, or with an additional small pilot relief symbol.",
        "tips": [
          "Arrow offset from the ports means normally closed. Arrow in line with the ports means normally open. This is the single most useful rule for reading pressure valves.",
          "A dashed line from the spring chamber to a separate port is a vent connection: this relief can be unloaded remotely.",
          "The adjustable spring is drawn with a diagonal arrow through it."
        ]
      },
      "reducingsym": {
        "name": "Pressure Reducing Valve",
        "body": "A single box with the arrow drawn in line with the flow path (normally open) and a spring on one side. The pilot line comes from the outlet side and pushes the arrow out of line as outlet pressure rises. The external drain is drawn as a small dashed line from the spring chamber to tank.",
        "tips": [
          "Pilot from the outlet is what distinguishes it from a relief (pilot from the inlet).",
          "If the drain line is missing on the drawing, check the valve; a reducing valve with no drain path does not work.",
          "A reducing-relieving valve has a second arrow position that connects the outlet to tank."
        ]
      },
      "checksym": {
        "name": "Check Valve",
        "body": "A ball resting in a V-shaped seat. Flow from the seat side lifts the ball and passes. Flow from the ball side pushes the ball into the seat and is blocked. A spring drawn behind the ball indicates a spring-loaded check with a cracking pressure.",
        "tips": [
          "The open side of the V is the free-flow inlet. Get this right on reassembly.",
          "A check with a spring drawn and a pressure noted beside it is being used as a low pressure back-pressure valve, often to maintain pilot pressure.",
          "Check valves inside a dashed enclosure with a flow control are a flow control with free reverse flow."
        ]
      },
      "pocheck": {
        "name": "Pilot Operated Check Valve",
        "body": "The check valve symbol inside a dashed enclosure with a pilot line entering from the side and pushing on the ball. Pilot pressure lifts the ball off the seat and allows reverse flow. Without pilot, it is a check valve. Used in pairs (a dual PO check block) to lock a cylinder in both directions.",
        "tips": [
          "The pilot line usually comes from the opposite cylinder port, so the DCV opens it when it pressurises the other side.",
          "A PO check with a drain line drawn is an externally drained type; the drain must go to tank at low pressure or the valve will not open reliably.",
          "Decompression type PO checks are drawn with a second, smaller ball. They open the small one first to release trapped pressure gently."
        ]
      },
      "pcflow": {
        "name": "Pressure Compensated Flow Control",
        "body": "A dashed enclosure containing a variable orifice (the two curved lines with a diagonal arrow) and a compensator (a small arrow or box that senses the pressure drop across the orifice). The compensator keeps the pressure drop constant so flow does not change with load. Often includes a reverse free-flow check.",
        "tips": [
          "A non-compensated flow control is just the variable orifice without the dashed enclosure. Speed will vary with load.",
          "A temperature compensated version has a small thermometer symbol or a T in the enclosure.",
          "If a compensated flow control gives erratic speed, the compensator spool is sticking on contamination."
        ]
      },
      "accumulator": {
        "name": "Accumulator",
        "body": "A vertical oblong with a line across it dividing the gas side (top, with a triangle or the letter N2) from the fluid side (bottom, with the port). Bladder, piston, and diaphragm types are distinguished by how the divider is drawn. If this symbol is on the drawing, the system stores energy after shutdown.",
        "tips": [
          "Find the bleed-down valve on the drawing. It is part of the lockout.",
          "A gas bottle symbol beside the accumulator means a remote gas backup: even more stored energy.",
          "Accumulators are pressure vessels with statutory inspection requirements."
        ]
      },
      "cooler": {
        "name": "Cooler (Heat Exchanger)",
        "body": "A diamond with the fluid line passing through and two arrows pointing outward, meaning heat is being removed. Arrows pointing inward would be a heater. A second fluid line through the diamond indicates a water cooled unit; a fan symbol indicates air cooled.",
        "tips": [
          "A cooler on the drawing tells you the system is designed to generate heat that must be removed. If the system runs hot, check the cooler first: fouled water side, blocked air side, failed fan, closed water valve.",
          "Coolers usually have a bypass check valve so cold thick oil does not overpressure the cooler core.",
          "A cooler leaking internally raises the reservoir level and turns the oil milky."
        ]
      },
      "gauge": {
        "name": "Pressure Gauge and Test Points",
        "body": "A circle with an arrow inside, connected by a line to the point being measured. Test points (quick disconnect gauge ports) are drawn as a small circle with a cross or a specific test coupling symbol. A drawing with many test points is a drawing made by someone who expected the system to be troubleshot.",
        "tips": [
          "Note every test point on the drawing before starting a diagnosis. They are where you will put your gauges.",
          "A gauge with a snubber or isolation valve drawn is a gauge that has been protected from pulsation.",
          "Gauges should be read under load, while the fault is occurring, not at rest."
        ]
      },
      "dcv43sym": {
        "name": "4/3 Directional Control Valve",
        "body": "Three boxes for three positions. Solenoid symbols on each end, springs on each end meaning spring centred. The centre box shows the centre condition: this one has all four ports blocked (closed centre). Read the outer boxes for what each solenoid does. Ports are labelled P (pressure), T (tank), A and B (work ports).",
        "tips": [
          "The centre box is the whole story for how the circuit behaves at rest.",
          "Solenoid with a spring on the same side: single solenoid, spring return. Solenoid both ends with springs: double solenoid spring centred. Solenoid both ends with no spring and a detent: bistable.",
          "A small box attached to the main valve with its own solenoid is the pilot stage of a two-stage valve."
        ]
      },
      "cylcush": {
        "name": "Cylinder with Adjustable Cushions",
        "body": "The double acting cylinder symbol with rectangles on the piston representing the cushion spears, and small diagonal arrows near each end indicating the cushion needles are adjustable. Cushions slow the piston in the last part of the stroke by trapping fluid and metering it through the needle.",
        "tips": [
          "Cushions decelerate; they do not set position. End stops or external stops set position.",
          "A cylinder without cushions on a fast application hammers its end caps and eventually cracks them.",
          "Adjust cushions under normal load and speed. Recheck after any change to flow control settings."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is the primary symptom?",
        "hint": "Lock out and support loads before opening anything. See the Safety tab.",
        "options": [
          {
            "label": "Actuator will not move, or moves very slowly",
            "next": "nomove1"
          },
          {
            "label": "System runs hot",
            "next": "heat1"
          },
          {
            "label": "Pump is noisy",
            "next": "noise1"
          },
          {
            "label": "Erratic, jerky, or spongy motion",
            "next": "erratic1"
          },
          {
            "label": "Cylinder drifts or load creeps",
            "next": "drift1"
          },
          {
            "label": "Cannot build pressure",
            "next": "lowp1"
          },
          {
            "label": "Pressure too high or relief lifting constantly",
            "next": "highp1"
          },
          {
            "label": "External leak",
            "next": "leak1"
          }
        ]
      },
      "nomove1": {
        "q": "Is the pump running and is the reservoir level correct?",
        "hint": "Low level uncovers the suction. The most embarrassing hydraulic fault is an empty tank.",
        "options": [
          {
            "label": "Pump not running",
            "next": "r_pump_off",
            "cls": "no"
          },
          {
            "label": "Level low",
            "next": "r_level_low",
            "cls": "no"
          },
          {
            "label": "Pump running, level correct",
            "next": "nomove2",
            "cls": "yes"
          }
        ]
      },
      "r_pump_off": {
        "type": "result",
        "cls": "action",
        "label": "motor, coupling, or drive",
        "text": "No pump, no flow.",
        "sub": "Motor starter, overload, and disconnect. Then lock out and check the pump coupling: a sheared spider or key means the motor runs and the pump does not. A seized pump will trip the motor overload immediately on start.",
        "prevent": "Add pump coupling inspection to the PM. Log motor amps at each PM; rising amps show a pump beginning to seize."
      },
      "r_level_low": {
        "type": "result",
        "cls": "action",
        "label": "low reservoir level",
        "text": "The suction is uncovered or nearly so. The pump is cavitating or has lost prime.",
        "sub": "Stop the pump. Find where the oil went: a cylinder that was extended and drained the tank (normal on large cylinders, and the reason the reservoir must be sized for it), an external leak, or a cooler leak. Fill with filtered oil of the correct grade. Bleed the pump inlet before restart.",
        "prevent": "Fit a low level switch that stops the pump. Check level with all cylinders extended when setting the minimum mark."
      },
      "nomove2": {
        "q": "Deadhead the system safely and read the pump outlet gauge. Does pressure rise to the relief or compensator setting?",
        "hint": "Shift to a closed centre, or block the actuator with the DCV shifted, with the gauge on the pressure line.",
        "options": [
          {
            "label": "No, pressure stays low",
            "next": "lowp2",
            "cls": "no"
          },
          {
            "label": "Yes, full pressure available",
            "next": "nomove3",
            "cls": "yes"
          }
        ]
      },
      "nomove3": {
        "q": "Does the DCV shift when commanded?",
        "hint": "Listen and feel for the spool. Try the manual override pin. Check the solenoid LED.",
        "options": [
          {
            "label": "Does not shift on the solenoid or the override",
            "next": "r_spool_stuck",
            "cls": "no"
          },
          {
            "label": "Shifts on override but not on the solenoid",
            "next": "r_electrical",
            "cls": "no"
          },
          {
            "label": "Shifts correctly",
            "next": "nomove4",
            "cls": "yes"
          }
        ]
      },
      "r_spool_stuck": {
        "type": "result",
        "cls": "action",
        "label": "spool stuck: contamination or varnish",
        "text": "The spool will not move even by hand. It is seized on particles, varnish, or a burr.",
        "sub": "Pull the valve. Push the spool out and inspect it and the bore under good light. Silt and varnish clean off with solvent. Scoring means the spool and body are a matched set and the valve is replaced. Check the fluid: a spool sticking on dirt means the fluid is dirty, and cleaning one valve fixes one valve.",
        "prevent": "Particle count the oil. Fit a desiccant breather and upgrade return filtration to hold the target code. Varnish means the oil is oxidised: it is running too hot or is past its life."
      },
      "r_electrical": {
        "type": "result",
        "cls": "fix",
        "label": "electrical: coil, connector, or signal",
        "text": "Spool moves freely on the manual override. The valve is fine. The signal is not reaching it or the coil is dead.",
        "sub": "Voltage at the coil connector when commanded. No voltage: work back to the PLC output. Voltage present: check coil resistance against the nameplate; open circuit is a burnt coil. An AC coil that has been buzzing on a slightly sticky spool burns out; if the coil is burnt, check that the spool is actually free.",
        "prevent": "Use DC coils where possible. Check connector seals and cable strain relief on the PM; most coil failures are water in the connector."
      },
      "nomove4": {
        "q": "Gauge at the actuator port with the DCV shifted. Is there pressure at the actuator?",
        "hint": "Use the test point nearest the actuator, or tee a gauge into the line.",
        "options": [
          {
            "label": "Low or no pressure at the actuator",
            "next": "r_between",
            "cls": "no"
          },
          {
            "label": "Full pressure at the actuator, no movement",
            "next": "nomove5",
            "cls": "yes"
          }
        ]
      },
      "r_between": {
        "type": "result",
        "cls": "action",
        "label": "restriction or bypass between DCV and actuator",
        "text": "Pressure is correct at the pump and low at the actuator. Something between them is dumping or blocking.",
        "sub": "A flow control closed down, a pilot operated check with a blocked pilot line, a counterbalance set too high, a kinked hose, or a port relief that has failed open and is passing to tank. Temperature survey every component on that line: the one passing fluid is warm.",
        "prevent": "Record flow control and counterbalance settings on the drawing. Vibration drifts them; a recorded setting is a five-minute fix."
      },
      "nomove5": {
        "q": "Is the actuator hot compared to its neighbours, or does it move when unloaded?",
        "hint": "Full pressure and no motion means the pressure is going somewhere or the load is beyond the actuator.",
        "options": [
          {
            "label": "Actuator is hot: internal bypass",
            "next": "r_bypass",
            "cls": "no"
          },
          {
            "label": "Moves fine unloaded, stalls loaded",
            "next": "r_overloaded"
          },
          {
            "label": "Will not move even unloaded, not hot",
            "next": "r_mechanical"
          }
        ]
      },
      "r_bypass": {
        "type": "result",
        "cls": "escalate",
        "label": "internal leakage: piston seal or motor wear",
        "text": "Pressure is going straight past the piston seal (or through the motor internals) to the other port and back to tank. Full pressure, no motion, heat.",
        "sub": "Confirm with the piston seal bypass test on the Actuators tab, or a case drain flow test on a motor. Reseal the cylinder (after checking the bore and rod) or replace the motor. Before installing the rebuilt unit, find out what scored the seals: contamination, side load, or heat.",
        "prevent": "Oil analysis after the rebuild to catch wear early. Check cylinder alignment and mounting. If the seals hardened from heat, fix the heat."
      },
      "r_overloaded": {
        "type": "result",
        "cls": "action",
        "label": "load exceeds available force",
        "text": "The actuator is sound. The load is more than it can move at the available pressure.",
        "sub": "Check the relief or compensator setting has not been turned down. Check the load: has something jammed, seized, or been added. Calculate force at the available pressure against the load. If the system was designed marginal, the fix is pressure (if the components allow) or a larger actuator.",
        "prevent": "Log the relief setting. Check for load changes after any process change."
      },
      "r_mechanical": {
        "type": "result",
        "cls": "action",
        "label": "mechanical bind or wrong load holding valve",
        "text": "Full pressure, no heat, no motion, even unloaded. The actuator is physically prevented from moving, or a load holding valve is not releasing.",
        "sub": "Lock out, support the load, disconnect the actuator from the machine, and try it. If it moves free, the bind is in the machine. If it still will not move, check the pilot operated check or counterbalance on the return side: a PO check with no pilot signal, or a counterbalance with a blocked pilot, holds the actuator solid. A bent rod binds in the gland.",
        "prevent": "Confirm pilot lines are connected and unrestricted after any valve work. Cylinder alignment on installation."
      },
      "heat1": {
        "q": "Is the relief valve hot, or is the pressure gauge sitting at the relief setting while nothing is moving?",
        "hint": "Infrared on the relief valve body versus the pressure line beside it.",
        "options": [
          {
            "label": "Yes, the relief is hot or lifting",
            "next": "heat2",
            "cls": "yes"
          },
          {
            "label": "No, the relief is cool",
            "next": "heat3",
            "cls": "no"
          }
        ]
      },
      "heat2": {
        "q": "What kind of pump and DCV centre?",
        "options": [
          {
            "label": "Fixed pump, closed centre DCV, no unloading valve",
            "next": "r_heat_design"
          },
          {
            "label": "Pressure compensated pump",
            "next": "r_heat_compensator"
          },
          {
            "label": "Fixed pump with an unloading valve or tandem centre",
            "next": "r_heat_unload"
          }
        ]
      },
      "r_heat_design": {
        "type": "result",
        "cls": "escalate",
        "label": "circuit design: pump lives on the relief",
        "text": "A fixed displacement pump into a closed centre valve has nowhere to go but the relief whenever the actuators are stopped. All the pump power becomes heat.",
        "sub": "This is a design condition, not a fault. Options: change the DCV to a tandem centre if the load holding allows, add an unloading valve, or replace the pump with a pressure compensated unit. In the short term, a bigger cooler is treating the symptom.",
        "prevent": "Review the drawing on any system that runs hot from new. The problem is on paper."
      },
      "r_heat_compensator": {
        "type": "result",
        "cls": "fix",
        "label": "relief set below the compensator",
        "text": "The pump never destrokes because the relief opens first. Full flow over the relief, all day.",
        "sub": "Read both settings. The relief must be above the compensator by 10 to 15 percent. Someone turned the relief down or the compensator up. Reset the compensator first, then the relief above it, with a gauge, under safe deadhead. If the compensator will not destroke the pump at any setting, the compensator spool is sticking.",
        "prevent": "Record both settings on the drawing and on a tag at the pump. Adjusters get locked."
      },
      "r_heat_unload": {
        "type": "result",
        "cls": "action",
        "label": "unloading valve not unloading",
        "text": "The circuit should unload the pump at rest and is not.",
        "sub": "Unloading valve: check the pilot signal (accumulator pressure or remote), the vent solenoid on a pilot operated relief, and the valve spool for contamination. Tandem centre: check the DCV is actually centring; a spool not returning fully to centre blocks the P to T path.",
        "prevent": "Check unloading function on the PM: at idle, the pressure gauge should read low. If it reads relief pressure at idle, the unload has failed."
      },
      "heat3": {
        "q": "Temperature survey the actuators, valves, pump, and cooler. What is hottest?",
        "options": [
          {
            "label": "One actuator hotter than the rest",
            "next": "r_heat_actuator"
          },
          {
            "label": "Pump case well above reservoir temperature",
            "next": "r_heat_pump"
          },
          {
            "label": "Cooler outlet not much cooler than inlet",
            "next": "r_heat_cooler"
          },
          {
            "label": "Everything uniformly hot",
            "next": "r_heat_system"
          }
        ]
      },
      "r_heat_actuator": {
        "type": "result",
        "cls": "action",
        "label": "actuator internal leakage",
        "text": "One actuator is bypassing internally. The leakage across the piston or through the motor is heat.",
        "sub": "Piston seal bypass test or case drain flow test. Reseal or replace. Also check for a port relief on that actuator that has failed open, which shows as the same local heat.",
        "prevent": "Trend actuator temperatures on the PM with an infrared gun. A cylinder warming up over months is a seal wearing."
      },
      "r_heat_pump": {
        "type": "result",
        "cls": "escalate",
        "label": "pump wear",
        "text": "A pump case running hot is a pump leaking internally. Case drain flow test confirms it.",
        "sub": "Compare case drain flow to the manufacturer limit. Rising internal leakage also shows as slow actuators at operating temperature. Plan the replacement, and find out what wore it: contamination, cavitation, or running above rated pressure.",
        "prevent": "Case drain flow test on the PM. Oil analysis for iron and chrome. Fix inlet conditions if cavitation was the cause."
      },
      "r_heat_cooler": {
        "type": "result",
        "cls": "fix",
        "label": "cooler not removing heat",
        "text": "The cooler is fouled, bypassed, or its cooling medium is not flowing.",
        "sub": "Air cooled: fan running, fins clean, airflow not blocked. Water cooled: water valve open, water flow, tube side fouling. Check the cooler bypass check valve is not stuck open. A thermostatic bypass valve stuck in bypass sends all oil around the cooler.",
        "prevent": "Cooler cleaning on the PM. Delta T across the cooler logged at each PM; a falling delta T is fouling."
      },
      "r_heat_system": {
        "type": "result",
        "cls": "action",
        "label": "system-wide: viscosity, level, or ambient",
        "text": "No single hot spot. The whole system is running above its design temperature.",
        "sub": "Wrong viscosity (too thin, internal leakage everywhere), reservoir level low (less thermal mass and less cooling surface), reservoir sized too small for the duty, ambient temperature up, or a duty cycle heavier than the design. Check the oil grade against the spec first.",
        "prevent": "Confirm oil grade on every top-up. Reservoir level at the correct mark. Consider an offline cooler if the duty has permanently increased."
      },
      "noise1": {
        "q": "What does the pump sound like?",
        "hint": "Screwdriver to the case. Cavitation is a steady scream; aeration is a rattle with foam in the tank.",
        "options": [
          {
            "label": "Steady high-pitched whine or scream, worst cold",
            "next": "r_cavitation"
          },
          {
            "label": "Rattling, erratic, foam on the reservoir surface",
            "next": "r_aeration"
          },
          {
            "label": "Knocking or grinding",
            "next": "r_pump_damage"
          }
        ]
      },
      "r_cavitation": {
        "type": "result",
        "cls": "action",
        "label": "cavitation: inlet starvation",
        "text": "The pump cannot fill. Vapour forms at the inlet and collapses at the outlet, eroding the pump.",
        "sub": "Suction strainer plugged, suction valve partly closed, suction line too small or too long or kinked, oil too cold and thick, pump running too fast for the inlet, or reservoir level low. Also check the breather: a blocked breather pulls a vacuum on the reservoir as the level drops.",
        "prevent": "Clean the suction strainer on the PM. Reservoir heater for cold starts. Never fit a fine filter on the suction."
      },
      "r_aeration": {
        "type": "result",
        "cls": "action",
        "label": "aeration: air entering the suction side",
        "text": "Air is getting into the oil before the pump. Compressible air makes the pump rattle and the actuators spongy.",
        "sub": "Suction fitting loose or its seal failed (a suction leak admits air rather than leaking oil), reservoir level below the suction pipe, return line discharging above the surface and splashing, or the pump shaft seal drawing air on a pump with a vacuum at the inlet. Foam in the tank is the confirmation.",
        "prevent": "Suction fittings torqued and sealed. Return line extended below the surface. Level maintained. Anti-foam additive is a symptom fix."
      },
      "r_pump_damage": {
        "type": "result",
        "cls": "escalate",
        "label": "internal pump damage",
        "text": "Knocking or grinding is a mechanical failure inside the pump. Stop it before the debris goes through the system.",
        "sub": "Shut down. Drain the pump case and look for metal. Check the magnetic plug and the pressure filter element. If there is debris, the system must be flushed before the replacement pump is installed or the new pump will fail on the debris from the old one.",
        "prevent": "Whatever destroyed the pump is still in the system: contamination, cavitation, or misalignment. Find it before restart. Oil analysis after commissioning the replacement."
      },
      "erratic1": {
        "q": "Is the motion spongy (soft, delayed, bouncy) or jerky (stick-slip, chatter, lurching)?",
        "options": [
          {
            "label": "Spongy, bouncy, delayed",
            "next": "r_air_in_system"
          },
          {
            "label": "Jerky, stick-slip, chatter",
            "next": "erratic2"
          }
        ]
      },
      "r_air_in_system": {
        "type": "result",
        "cls": "fix",
        "label": "air in the system",
        "text": "Air is compressible. Air in the fluid turns a rigid hydraulic system into a spongy one.",
        "sub": "Bleed the actuators at the highest points with the system running at low pressure. Cycle to the stops several times. Then find where the air came in: suction leak, low level, a line opened for maintenance and not bled, or a cylinder rod seal pulling air on the retract stroke.",
        "prevent": "Bleed procedure after every maintenance that opens a line. Check suction side for leaks (aeration route above)."
      },
      "erratic2": {
        "q": "Which component is jerky?",
        "options": [
          {
            "label": "A cylinder under load",
            "next": "r_stickslip"
          },
          {
            "label": "A load descending on a counterbalance",
            "next": "r_cb_unstable"
          },
          {
            "label": "A proportional or servo valve",
            "next": "r_prop_erratic"
          },
          {
            "label": "Pressure oscillating at the pump",
            "next": "r_comp_hunt"
          }
        ]
      },
      "r_stickslip": {
        "type": "result",
        "cls": "action",
        "label": "stick-slip: seals, rod, or flow control",
        "text": "The piston or rod is grabbing and releasing. Common on slow cylinders with worn seals, a scored rod, or a non-compensated flow control at low speed.",
        "sub": "Rod condition and gland lubrication. Seals hardened by heat grab. A meter-in non-compensated flow control at low speed gives poor control; change to pressure compensated meter-out. Check for side load on the rod from misalignment.",
        "prevent": "Replace flow controls with pressure compensated types on slow, precise applications. Fix mounting alignment."
      },
      "r_cb_unstable": {
        "type": "result",
        "cls": "action",
        "label": "counterbalance instability",
        "text": "The counterbalance is opening and closing as the load descends: setting too low, wrong pilot ratio, or air in the pilot line.",
        "sub": "Support the load. Reset the counterbalance to roughly 1.3 times load-induced pressure per the manual. Bleed the pilot line. If the application has a high load-to-pilot pressure ratio, the valve may need a different pilot ratio. Back-pressure on the return line affects non-vented counterbalance valves.",
        "prevent": "Record the setting and the load it was set for. Any load change means a recheck."
      },
      "r_prop_erratic": {
        "type": "result",
        "cls": "action",
        "label": "proportional valve: dither, null, or contamination",
        "text": "A sticky spool, no dither, or a null setting that has drifted.",
        "sub": "Check the amplifier card: dither on, gain and ramp per the setup sheet. Check null with zero command. Particle count the oil; proportional valves need 16/14/11 or better. If the spool is sticky on dirt, cleaning it is temporary until the fluid is cleaned.",
        "prevent": "Offline filtration to hold the cleanliness target. Record amplifier settings on the drawing."
      },
      "r_comp_hunt": {
        "type": "result",
        "cls": "action",
        "label": "compensator hunting",
        "text": "The pump compensator is oscillating, usually because the relief and compensator settings are too close, or the compensator spool is sticking.",
        "sub": "Separate the settings: compensator at working pressure, relief 10 to 15 percent above. Clean or replace the compensator spool if it sticks. Check for air in the compensator pilot line.",
        "prevent": "Settings recorded and locked."
      },
      "drift1": {
        "q": "Isolate the cylinder (close both port valves or cap both lines) with the load safely supported. Does it still drift?",
        "hint": "Drift test procedure is on the Actuators tab. Support the load first.",
        "options": [
          {
            "label": "Still drifts with both ports blocked",
            "next": "r_drift_piston",
            "cls": "no"
          },
          {
            "label": "Stops drifting when isolated",
            "next": "drift2",
            "cls": "yes"
          }
        ]
      },
      "r_drift_piston": {
        "type": "result",
        "cls": "escalate",
        "label": "piston seal bypass",
        "text": "Fluid is moving from one side of the piston to the other inside the cylinder. Only the cylinder can do that.",
        "sub": "Confirm with the bypass test. Reseal after inspecting the bore for scoring and the rod for damage. On a single acting or gravity-loaded cylinder, also check the rod seal: external leakage past the rod seal drops the load too.",
        "prevent": "Find what damaged the seal: contamination (particle count), heat (system temperature), or side load (mounting). A new seal in the old conditions fails the same way."
      },
      "drift2": {
        "q": "What holds the load in this circuit?",
        "hint": "Read the drawing. The DCV alone does not hold loads.",
        "options": [
          {
            "label": "Pilot operated check valve",
            "next": "r_drift_pocheck"
          },
          {
            "label": "Counterbalance valve",
            "next": "r_drift_cb"
          },
          {
            "label": "Only the DCV spool",
            "next": "r_drift_spool"
          }
        ]
      },
      "r_drift_pocheck": {
        "type": "result",
        "cls": "action",
        "label": "PO check not seating",
        "text": "A poppet on a seat should be leak-tight. It is not: contamination on the seat, seat damage, or a pilot signal that is not fully releasing.",
        "sub": "Pull the check and inspect the poppet and seat. A scored seat is replaced. Confirm the pilot line drains fully when the DCV centres; residual pilot pressure holds the check partly open. Check for back-pressure on the pilot drain.",
        "prevent": "Fluid cleanliness. A PO check seat is one particle away from leaking."
      },
      "r_drift_cb": {
        "type": "result",
        "cls": "action",
        "label": "counterbalance setting or seat",
        "text": "The counterbalance is set below the load-induced pressure, or its seat is leaking.",
        "sub": "Support the load. Read the load-induced pressure at the cylinder port. Set the counterbalance to about 1.3 times that. If it still creeps, the poppet or seat is damaged.",
        "prevent": "Record the setting. Recheck after any load change."
      },
      "r_drift_spool": {
        "type": "result",
        "cls": "escalate",
        "label": "no load holding valve: this circuit will always drift",
        "text": "A DCV spool holds a load with a running clearance. It leaks by design. Some drift is inherent.",
        "sub": "If the drift is new or worse than it was, the spool and body are worn and the valve is replaced. If the load must not move, the circuit needs a pilot operated check or counterbalance added. This is a circuit design limitation.",
        "prevent": "Any load that must hold position gets a poppet-type holding valve. Put it on the drawing."
      },
      "lowp1": {
        "q": "Deadhead the system safely with a gauge on the pump outlet. What does it read?",
        "hint": "Block the actuator or shift to a closed centre. Do not stand in line with any fitting.",
        "options": [
          {
            "label": "Near zero",
            "next": "lowp2"
          },
          {
            "label": "Rises but not to the relief setting",
            "next": "lowp3"
          },
          {
            "label": "Full pressure at the pump, low at the actuator",
            "next": "r_between"
          }
        ]
      },
      "lowp2": {
        "q": "Is the pump turning the right way and is flow leaving the outlet?",
        "hint": "Check the rotation arrow on the pump. Crack the outlet fitting at low speed if there is no flow meter.",
        "options": [
          {
            "label": "Wrong rotation or no flow",
            "next": "r_rotation",
            "cls": "no"
          },
          {
            "label": "Flow is present, pressure still near zero",
            "next": "r_open_to_tank",
            "cls": "yes"
          }
        ]
      },
      "r_rotation": {
        "type": "result",
        "cls": "fix",
        "label": "pump rotation or no flow",
        "text": "A pump turning backward pumps nothing and blows its shaft seal. A pump with no flow is not primed, is cavitating badly, or has failed.",
        "sub": "Rotation arrow versus motor rotation. If the motor was replaced or rewired, this is the cause. If rotation is correct: prime the pump by filling the inlet and case, check the suction valve, and listen for cavitation.",
        "prevent": "Mark rotation on the motor and pump. Verify rotation on every motor change before coupling."
      },
      "r_open_to_tank": {
        "type": "result",
        "cls": "action",
        "label": "flow going straight to tank",
        "text": "The pump is producing flow and something is dumping it to tank before it can build pressure.",
        "sub": "Relief valve stuck open or set to zero: it will be warm. Unloading valve stuck in the unload position. Pilot operated relief with its vent open (vent solenoid failed or wired wrong). DCV with an open or tandem centre when a closed centre was expected. A port relief failed open. Temperature survey: the component passing full flow is warm.",
        "prevent": "Record relief settings. Check vent solenoid function on the PM."
      },
      "lowp3": {
        "type": "result",
        "cls": "action",
        "label": "partial pressure: worn pump or relief leaking",
        "text": "The pump builds some pressure but internal leakage somewhere is limiting it.",
        "sub": "Case drain flow test on the pump: high case drain means the pump cannot build full pressure. Relief valve seat damaged: the relief is passing before its setting, and it is warm. On a compensated pump, the compensator may be set low or sticking. On a load sense pump, a blocked or leaking LS line makes the pump think there is no load.",
        "prevent": "Case drain trending. Relief seat inspection if it has been chattering. LS line included in any pilot line inspection."
      },
      "highp1": {
        "q": "Is the pressure high while an actuator is stalled against a load, or high at rest with nothing moving?",
        "options": [
          {
            "label": "High with an actuator stalled",
            "next": "r_highp_stall"
          },
          {
            "label": "High at rest",
            "next": "r_highp_rest"
          }
        ]
      },
      "r_highp_stall": {
        "type": "result",
        "cls": "action",
        "label": "stalled load: this is what the relief is for",
        "text": "An actuator that reaches the end of stroke or meets an immovable load sends the system to relief pressure. The relief is doing its job.",
        "sub": "The question is why the actuator stalled. Mechanical stop reached (normal if it is the design), jammed load, undersized actuator, or a sequence valve waiting for pressure. If the system spends a lot of its cycle at relief, it is generating heat and wearing the relief seat.",
        "prevent": "Pressure switch or position feedback to shift the DCV when the stroke completes rather than sitting on the relief."
      },
      "r_highp_rest": {
        "type": "result",
        "cls": "fix",
        "label": "system not unloading at rest",
        "text": "Pressure at rest should be low on any circuit designed to unload, and at the compensator setting on a compensated system.",
        "sub": "Fixed pump: unloading valve or tandem centre not working (see heat branch). Compensated pump: this is normal if the gauge reads the compensator setting, but the pump should be quiet and cool. If the relief is lifting at rest on a compensated system, the relief is below the compensator.",
        "prevent": "Idle pressure logged on the PM."
      },
      "leak1": {
        "q": "Where is the leak?",
        "hint": "Never feel for a leak. Cardboard held in the suspected area. Depressurise before touching any fitting.",
        "options": [
          {
            "label": "At a fitting",
            "next": "r_leak_fitting"
          },
          {
            "label": "Hose body",
            "next": "r_leak_hose"
          },
          {
            "label": "Cylinder rod",
            "next": "r_leak_rod"
          },
          {
            "label": "Pump or motor shaft seal",
            "next": "r_leak_shaftseal"
          },
          {
            "label": "Reservoir level rising, oil milky",
            "next": "r_leak_cooler"
          }
        ]
      },
      "r_leak_fitting": {
        "type": "result",
        "cls": "fix",
        "label": "fitting: identify the type before touching it",
        "text": "Depressurise, lock out, verify zero. Then identify the fitting. Different fitting types seal in different ways and are ruined by the wrong fix.",
        "sub": "JIC 37 degree flare: metal to metal on the cone. Overtightening cracks the flare; a leaking JIC usually has a damaged flare and the tube end is replaced. ORFS (O-ring face seal): the o-ring is the seal; replace it, check the face is flat. NPT tapered thread: sealant on the threads, tighten a turn past hand tight, and it can only be reused a couple of times. BSPP with bonded seal: the seal washer is the seal; replace it. SAE straight thread o-ring boss: the o-ring is the seal; do not overtighten.",
        "prevent": "Standardise fitting types on the machine and stock the seals. Torque to spec rather than to feel."
      },
      "r_leak_hose": {
        "type": "result",
        "cls": "escalate",
        "label": "hose failure: replace, do not repair",
        "text": "A leaking hose body is a failed hose. Pinhole leaks in hoses at pressure are injection hazards.",
        "sub": "Depressurise and lock out. Replace with a matched assembly of the correct rating, length, and end fittings. Route it with the correct bend radius, no twist, and clear of heat and abrasion. Then look at why it failed: abrasion (add a sleeve or reroute), heat (reroute or upgrade), age (replace its neighbours of the same age), or pressure spikes (check for shock and add an accumulator or slower shift).",
        "prevent": "Hose inspection on the PM. Replace hoses on age, not just on failure."
      },
      "r_leak_rod": {
        "type": "result",
        "cls": "action",
        "label": "rod seal: check the rod first",
        "text": "Oil on the rod is a rod seal or wiper leak. The seal failed for a reason, and the reason is usually the rod.",
        "sub": "Rod scoring, pitting, or bending. A damaged rod is polished or replaced before new seals go in. Then check cylinder mounting alignment (side load) and system temperature (hardened seals). A rod that pulls a film of oil out and does not bring it back is a wiper problem.",
        "prevent": "Rod protection (boots or covers) on outdoor or dirty applications. Alignment check on mounting."
      },
      "r_leak_shaftseal": {
        "type": "result",
        "cls": "action",
        "label": "shaft seal: case pressure or inlet vacuum",
        "text": "A pump or motor shaft seal leaking usually has a cause upstream of the seal.",
        "sub": "Blocked or restricted case drain pressurises the case and blows the seal. High return back-pressure on a motor without a case drain does the same. A pump with a restricted inlet pulls a vacuum on the seal and draws air (aeration) before it leaks oil. Wrong rotation blows the seal on the first start. Replace the seal after fixing the cause.",
        "prevent": "Case drain routed separately to tank. Return back-pressure gauge."
      },
      "r_leak_cooler": {
        "type": "result",
        "cls": "action",
        "label": "cooler leaking water into the oil",
        "text": "Rising reservoir level and milky oil means the water side of the cooler is leaking into the oil side.",
        "sub": "Isolate the cooler and pressure test it. Replace or repair the core. The oil is contaminated with water and needs to be changed or dehydrated. Check every component for corrosion damage if it has been running on wet oil for long.",
        "prevent": "Cooler water pressure should be kept below oil pressure where the design allows so a leak goes oil-to-water, not water-to-oil. Water content on the oil analysis."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "What creates pressure in a hydraulic system?",
        [
          "The pump",
          "Resistance to flow (the load)",
          "The reservoir",
          "The relief valve"
        ],
        1,
        "Pumps create flow; the load creates pressure."
      ],
      [
        "Pressure drop that is not doing work becomes?",
        [
          "Flow",
          "Heat",
          "Noise",
          "Pressure elsewhere"
        ],
        1,
        "A hot system is wasting energy somewhere."
      ],
      [
        "Roughly what share of hydraulic failures trace to contamination?",
        [
          "10%",
          "25%",
          "About three quarters",
          "None"
        ],
        2,
        "Fluid cleanliness is the primary maintenance activity."
      ]
    ],
    "pumps": [
      [
        "The relief valve on a pressure compensated pump system should be set?",
        [
          "Below the compensator",
          "10 to 15% above the compensator",
          "Equal to the compensator",
          "As high as possible"
        ],
        1,
        "Relief below the compensator means the pump never destrokes and the system overheats."
      ],
      [
        "The definitive field test of piston pump condition?",
        [
          "Listen to it",
          "Case drain flow against the manufacturer limit",
          "Outlet pressure",
          "Oil colour"
        ],
        1,
        "Rising case drain flow is internal wear."
      ],
      [
        "Cavitation sounds like?",
        [
          "A rattle with foam in the tank",
          "A steady high whine, worst cold",
          "A knock",
          "Silence"
        ],
        1,
        "Aeration rattles; cavitation whines."
      ],
      [
        "A load sensing pump will not build pressure. First check?",
        [
          "Replace the pump",
          "The load sense line for blockage or leak",
          "The reservoir",
          "The relief"
        ],
        1,
        "A blocked LS line tells the pump there is no load."
      ]
    ],
    "valves": [
      [
        "A closed centre 4/3 valve on a fixed displacement pump with no unloading valve will?",
        [
          "Unload the pump",
          "Send the pump over the relief at rest and overheat",
          "Float the cylinder",
          "Stop the pump"
        ],
        1,
        "This is a design error that gets built."
      ],
      [
        "Which valve is normally open?",
        [
          "Relief",
          "Sequence",
          "Pressure reducing",
          "Counterbalance"
        ],
        2,
        "Reducing valves throttle closed as outlet pressure rises; the others are normally closed."
      ],
      [
        "What holds a suspended load: the DCV spool or a counterbalance valve?",
        [
          "The DCV spool",
          "The counterbalance valve",
          "Either",
          "The pump"
        ],
        1,
        "A spool leaks by design; a poppet-type holding valve holds."
      ],
      [
        "A counterbalance valve is set to about?",
        [
          "0.5 times load pressure",
          "1.3 times load pressure",
          "3 times load pressure",
          "Relief pressure"
        ],
        1,
        "Too low creeps; too high runs hot and jerky."
      ]
    ],
    "actuators": [
      [
        "A cylinder drifts with both ports blocked. The leak is?",
        [
          "In the DCV",
          "In the piston seal",
          "In the pump",
          "In the relief"
        ],
        1,
        "Isolated cylinder still drifting means fluid is crossing the piston."
      ],
      [
        "Extend force of a 100 mm bore at 200 bar?",
        [
          "15.7 kN",
          "157 kN",
          "1570 kN",
          "57 kN"
        ],
        1,
        "0.00785 m² × 20,000,000 Pa = 157 kN."
      ],
      [
        "Before a seal job, run a fingernail along the rod because?",
        [
          "To clean it",
          "Any score you can catch will cut the new seal",
          "To check temperature",
          "It is tradition"
        ],
        1,
        "A damaged rod destroys new seals in days."
      ]
    ],
    "fluid": [
      [
        "Target cleanliness code for proportional valves?",
        [
          "22/20/17",
          "16/14/11",
          "19/17/14",
          "Not needed"
        ],
        1,
        "Fine spool clearances need cleaner oil than on-off valves."
      ],
      [
        "A fine filter on the pump suction will?",
        [
          "Protect the pump",
          "Starve the pump and cause cavitation",
          "Improve cleanliness",
          "Reduce noise"
        ],
        1,
        "Suction strainers are coarse for a reason."
      ],
      [
        "Reservoir volume rule of thumb?",
        [
          "Equal to pump flow per minute",
          "2 to 3 times pump flow per minute",
          "10 times",
          "Half"
        ],
        1,
        "Time to cool, settle, and release air."
      ],
      [
        "Free water in mineral oil appears above about?",
        [
          "10 ppm",
          "200 to 400 ppm",
          "5%",
          "It never appears"
        ],
        1,
        "Above saturation the oil turns cloudy and water does damage."
      ]
    ],
    "symbols": [
      [
        "A solid triangle in a pump or motor symbol means?",
        [
          "Pneumatic",
          "Hydraulic",
          "Variable",
          "Bidirectional"
        ],
        1,
        "Open triangle is pneumatic; solid is hydraulic."
      ],
      [
        "In a pressure valve symbol, an arrow drawn offset from the flow path means?",
        [
          "Normally open",
          "Normally closed",
          "Variable",
          "Pilot operated"
        ],
        1,
        "Offset is normally closed (relief); in line is normally open (reducing)."
      ],
      [
        "An accumulator symbol on a drawing tells you?",
        [
          "The system is low pressure",
          "There is stored energy after shutdown",
          "The pump is variable",
          "Nothing important"
        ],
        1,
        "Find the bleed-down valve; it is part of the lockout."
      ]
    ],
    "troubleshoot": [
      [
        "Relief valve hotter than the lines around it means?",
        [
          "Normal",
          "It is passing oil",
          "It is closed",
          "Low oil"
        ],
        1,
        "A hot relief is lifting."
      ],
      [
        "The three questions that answer most hydraulic faults?",
        [
          "Pump, valve, cylinder",
          "Is there flow, is there pressure, where is the heat",
          "Level, colour, smell",
          "Volts, amps, ohms"
        ],
        1,
        "Gauge, temperature gun, and method."
      ],
      [
        "A pump that runs but cannot build pressure with the discharge blocked has?",
        [
          "A downstream leak",
          "An internal fault or a stuck relief",
          "Low level",
          "Wrong oil"
        ],
        1,
        "Blocking the discharge isolates the pump from downstream leaks."
      ]
    ],
    "safety": [
      [
        "What do you tell emergency staff after a hydraulic pinhole hits your hand?",
        [
          "It is a scratch",
          "\"High pressure fluid injection injury\" and the fluid type",
          "Nothing",
          "Ask for a bandage"
        ],
        1,
        "It looks like nothing and needs surgery within hours."
      ],
      [
        "How do you locate a hydraulic leak?",
        [
          "By hand",
          "With cardboard held in the area",
          "With a rag",
          "Visually only"
        ],
        1,
        "Never search for a leak with your hands."
      ],
      [
        "Bleeding the hydraulic side of an accumulator releases the nitrogen precharge. True or false?",
        [
          "True",
          "False",
          "Only on bladder types",
          "Only when hot"
        ],
        1,
        "The gas side is separate; never loosen the gas valve or the shell."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Read the Safety tab before working on any hydraulic system</div></div>\n      <div class=\"callout-box-body\">Hydraulic fluid at working pressure passes through skin. A pinhole leak you cannot see will inject oil into your hand and it will not look like much. <strong>Never search for a leak with your hands. Never tighten a fitting under pressure.</strong> The Safety tab covers injection injury, accumulator stored energy, and suspended loads.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Hydraulic system chain: tap a component</div>\n    <div class=\"chain-wrap\">\n      <div class=\"chain\">\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('reservoir')\" id=\"cnode-reservoir\"><i class=\"ti ti-bucket chain-icon\"></i><div class=\"chain-label\">Reservoir</div><div class=\"chain-sub\">store, cool, settle</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('pump')\" id=\"cnode-pump\"><i class=\"ti ti-engine chain-icon\"></i><div class=\"chain-label\">Pump</div><div class=\"chain-sub\">creates flow</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('relief')\" id=\"cnode-relief\"><i class=\"ti ti-gauge chain-icon\"></i><div class=\"chain-label\">Relief</div><div class=\"chain-sub\">limits pressure</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('filter')\" id=\"cnode-filter\"><i class=\"ti ti-filter chain-icon\"></i><div class=\"chain-label\">Filter</div><div class=\"chain-sub\">cleanliness</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('dcv')\" id=\"cnode-dcv\"><i class=\"ti ti-switch-3 chain-icon\"></i><div class=\"chain-label\">DCV</div><div class=\"chain-sub\">direction</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('actuator')\" id=\"cnode-actuator\"><i class=\"ti ti-arrow-bar-right chain-icon\"></i><div class=\"chain-label\">Actuator</div><div class=\"chain-sub\">does the work</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('return')\" id=\"cnode-return\"><i class=\"ti ti-arrow-back-up chain-icon\"></i><div class=\"chain-label\">Return</div><div class=\"chain-sub\">filter, cool, back</div></div></div>\n      </div>\n    </div>\n    <div id=\"chain-display\"><div class=\"comp-placeholder\">select a component above</div></div>\n\n    <div class=\"callout-box blue\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">The three ideas that explain every hydraulic fault</div></div>\n      <div class=\"callout-box-body\"><strong>Pumps create flow. Resistance to flow creates pressure.</strong> A pump does not make pressure. The load does. A gauge reading is a measurement of how hard the system is pushing against whatever is resisting the flow. If pressure is low, either flow is escaping somewhere (internal or external leak) or nothing is resisting it.<br><br><strong>Every bit of pressure drop that is not doing work becomes heat.</strong> Oil going over a relief valve, squeezing past worn pump clearances, or bypassing a piston seal converts hydraulic energy directly to heat. A hot system is a system wasting energy somewhere, and heat is the most useful symptom in hydraulics.<br><br><strong>Contamination causes most failures.</strong> Roughly three quarters of hydraulic component failures trace back to dirty fluid. Particles score valve spools, erode relief seats, and wear pump clearances open. Fluid cleanliness is not housekeeping. It is the primary maintenance activity.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Hydraulics versus pneumatics</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">Both are fluid power, and the bracketing method from the pneumatics module applies directly. The differences matter in the field.</div>\n      <table class=\"ref-table\">\n        <tr><th>Property</th><th>Hydraulic</th><th>Pneumatic</th></tr>\n        <tr><td>Loop</td><td>Closed. Fluid returns to the reservoir. A leak loses fluid and admits air.</td><td>Open. Air exhausts to atmosphere.</td></tr>\n        <tr><td>Compressibility</td><td>Nearly incompressible. Rigid, precise, holds position under load.</td><td>Compressible. Spongy, cannot hold position accurately under changing load.</td></tr>\n        <tr><td>Working pressure</td><td>70 to 350 bar typical. Higher in mobile and press applications.</td><td>6 to 10 bar typical.</td></tr>\n        <tr><td>Force density</td><td>Very high. Small actuators move very large loads.</td><td>Low. Large bores for modest force.</td></tr>\n        <tr><td>Heat</td><td>Generated and must be removed. Reservoir and cooler are part of the design.</td><td>Minor at the point of use. Compressor is the heat source.</td></tr>\n        <tr><td>Primary enemy</td><td>Particle contamination, then water and air.</td><td>Water.</td></tr>\n        <tr><td>Primary hazard</td><td>Injection injury. Stored energy in accumulators. Suspended loads.</td><td>Stored energy. Tube whip. Air injection.</td></tr>\n        <tr><td>Speed control</td><td>Flow control, often pressure compensated. Meter-out for overrunning loads.</td><td>Flow control, meter-out.</td></tr>\n      </table>\n    </div>\n\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip</strong>An infrared thermometer is the single most useful hydraulic troubleshooting tool you can carry. A relief valve hotter than the lines around it is passing oil. A cylinder with one end hotter than the other is bypassing. A pump case hotter than the reservoir by more than about 10°C is wearing. Heat tells the story before the gauge does.</div></div>",
    "pumps": "<div class=\"bw-section-label\">Hydraulic pump types: tap a type to learn more</div>\n    <div class=\"family-label\">Fixed displacement</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectPump('gear')\" id=\"pcard-gear\"><div class=\"type-card-icon\"><i class=\"ti ti-settings\"></i></div><div class=\"type-card-name\">External Gear Pump</div><div class=\"type-card-sub\">Simple, tough, noisy, fixed</div></div>\n      <div class=\"type-card\" onclick=\"selectPump('vane')\" id=\"pcard-vane\"><div class=\"type-card-icon\"><i class=\"ti ti-aperture\"></i></div><div class=\"type-card-name\">Vane Pump</div><div class=\"type-card-sub\">Quiet, cartridge, contamination sensitive</div></div>\n    </div>\n    <div class=\"family-label\">Piston pumps: fixed or variable</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectPump('axial')\" id=\"pcard-axial\"><div class=\"type-card-icon\"><i class=\"ti ti-circle-dotted\"></i></div><div class=\"type-card-name\">Axial Piston (Swashplate)</div><div class=\"type-card-sub\">High pressure, variable, efficient</div></div>\n      <div class=\"type-card\" onclick=\"selectPump('bentaxis')\" id=\"pcard-bentaxis\"><div class=\"type-card-icon\"><i class=\"ti ti-angle\"></i></div><div class=\"type-card-name\">Bent Axis Piston</div><div class=\"type-card-sub\">Highest speed and pressure, mobile</div></div>\n      <div class=\"type-card\" onclick=\"selectPump('radial')\" id=\"pcard-radial\"><div class=\"type-card-icon\"><i class=\"ti ti-sun\"></i></div><div class=\"type-card-name\">Radial Piston</div><div class=\"type-card-sub\">Very high pressure, low speed</div></div>\n      <div class=\"type-card\" onclick=\"selectPump('screw')\" id=\"pcard-screw\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-2\"></i></div><div class=\"type-card-name\">Screw Pump</div><div class=\"type-card-sub\">Silent, smooth, low pressure</div></div>\n    </div>\n    <div id=\"pump-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a pump type above</div></div>\n\n    <div class=\"bw-section-label\">Pump control: how a variable pump decides what to do</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-adjustments\"></i> Pressure compensated</div>\n      <div class=\"info-block-body\">A pressure compensator senses outlet pressure and reduces the swashplate angle as pressure approaches the compensator setting. At the setting, the pump destrokes to near zero displacement and produces only enough flow to make up internal leakage. The system holds full pressure with the pump drawing very little power and generating very little heat. This is why a pressure compensated pump can sit at deadhead all day and a fixed pump cannot.</div>\n      <ul class=\"info-block-tips\">\n        <li>The relief valve must be set above the compensator, typically 10 to 15 percent higher. If the relief is set below the compensator, the pump never destrokes: it runs at full flow over the relief and the system overheats. This is the most common hydraulic heat fault on compensated systems.</li>\n        <li>A compensated pump that hunts (pressure oscillates) has a compensator spool sticking on contamination or an unstable setting relative to the relief.</li>\n        <li>Case drain flow rises as a piston pump wears. Measuring case drain flow against the manufacturer limit is the definitive pump condition test and does not require removing the pump.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-target\"></i> Load sensing</div>\n      <div class=\"info-block-body\">A load sensing pump receives a pilot signal from the highest load in the circuit and sets its outlet pressure a fixed margin above that load, typically 15 to 25 bar. Flow matches demand and pressure matches load. This is the most efficient control scheme and is standard on modern mobile equipment and many industrial systems.</div>\n      <ul class=\"info-block-tips\">\n        <li>The load sense line is a small pilot line. A blocked, leaking, or plugged load sense line makes the pump behave as though there is no load: it will not build pressure. Check the LS line before condemning the pump.</li>\n        <li>Margin pressure is set at the pump. Low margin makes actuators slow under load. High margin wastes energy as heat.</li>\n        <li>Load sensing pumps still need a relief valve or pressure cutoff as the maximum pressure limit.</li>\n      </ul>\n    </div>\n\n    <div class=\"field-tip\"><i class=\"ti ti-ear\"></i><div><strong>Field tip: two pump noises</strong>Cavitation is a steady high-pitched whine or scream, worst at startup with cold oil, and comes from starved inlet. Aeration is a rattling, erratic, crackling noise with foam in the reservoir, and comes from air getting in on the suction side. They sound different and they have different causes. Screwdriver to the pump case if the room is loud.</div></div>",
    "valves": "<div class=\"bw-section-label\">Hydraulic valves: tap a type to learn more</div>\n    <div class=\"family-label\">Directional control</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectValve('dcv43')\" id=\"vcard-dcv43\"><div class=\"type-card-icon\"><i class=\"ti ti-switch-3\"></i></div><div class=\"type-card-name\">4/3 Directional Valve</div><div class=\"type-card-sub\">The centre condition decides everything</div></div>\n      <div class=\"type-card\" onclick=\"selectValve('pilotdcv')\" id=\"vcard-pilotdcv\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-split-2\"></i></div><div class=\"type-card-name\">Pilot Operated DCV</div><div class=\"type-card-sub\">Two-stage, high flow, needs pilot pressure</div></div>\n    </div>\n    <div class=\"family-label\">Pressure control</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectValve('relief')\" id=\"vcard-relief\"><div class=\"type-card-icon\"><i class=\"ti ti-gauge\"></i></div><div class=\"type-card-name\">Relief Valve</div><div class=\"type-card-sub\">Normally closed, sets maximum</div></div>\n      <div class=\"type-card\" onclick=\"selectValve('reducing')\" id=\"vcard-reducing\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-down-circle\"></i></div><div class=\"type-card-name\">Pressure Reducing</div><div class=\"type-card-sub\">Normally open, lowers a branch</div></div>\n      <div class=\"type-card\" onclick=\"selectValve('sequence')\" id=\"vcard-sequence\"><div class=\"type-card-icon\"><i class=\"ti ti-list-numbers\"></i></div><div class=\"type-card-name\">Sequence Valve</div><div class=\"type-card-sub\">This happens, then that</div></div>\n      <div class=\"type-card\" onclick=\"selectValve('counterbalance')\" id=\"vcard-counterbalance\"><div class=\"type-card-icon\"><i class=\"ti ti-scale\"></i></div><div class=\"type-card-name\">Counterbalance Valve</div><div class=\"type-card-sub\">Holds a load against gravity</div></div>\n    </div>\n    <div class=\"family-label\">Flow and check</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectValve('flow')\" id=\"vcard-flow\"><div class=\"type-card-icon\"><i class=\"ti ti-adjustments-horizontal\"></i></div><div class=\"type-card-name\">Flow Control</div><div class=\"type-card-sub\">Needle vs pressure compensated</div></div>\n      <div class=\"type-card\" onclick=\"selectValve('check')\" id=\"vcard-check\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-right-circle\"></i></div><div class=\"type-card-name\">Check and Pilot Operated Check</div><div class=\"type-card-sub\">One way, and one way until told otherwise</div></div>\n    </div>\n    <div id=\"valve-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a valve type above</div></div>\n\n    <div class=\"bw-section-label\">4/3 centre conditions: the reference</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">When both solenoids are de-energised the spool sits in the centre. What the centre does determines what the machine does at rest, and whether a fixed displacement pump goes over the relief or unloads.</div>\n      <table class=\"ref-table\">\n        <tr><th>Centre</th><th>Ports</th><th>Actuator at rest</th><th>Pump at rest</th><th>Use</th></tr>\n        <tr><td>Closed</td><td>P, A, B, T all blocked</td><td>Locked (until it leaks)</td><td>Deadheaded. Fixed pump goes over relief: heat. Needs compensated pump or unloading.</td><td>Multiple actuators on one pump, load holding with a compensated pump</td></tr>\n        <tr><td>Tandem</td><td>P to T, A and B blocked</td><td>Locked</td><td>Unloaded to tank at low pressure</td><td>Single actuator on a fixed pump, holds position</td></tr>\n        <tr><td>Float</td><td>P blocked, A and B to T</td><td>Free to move</td><td>Deadheaded</td><td>Actuator must follow an external force at rest</td></tr>\n        <tr><td>Open</td><td>All connected</td><td>Free to move</td><td>Unloaded</td><td>Single actuator, no holding required, fixed pump</td></tr>\n        <tr><td>Regenerative</td><td>P to A and B, T blocked</td><td>Extends fast at reduced force</td><td>Loaded</td><td>Rapid advance circuits</td></tr>\n      </table>\n      <div class=\"info-block-body\">A spool that holds a load in the closed centre is holding it with a metal-to-metal clearance. It will drift. If the load must not move, a pilot operated check valve or counterbalance valve holds it, not the DCV.</div>\n    </div>\n\n    <div class=\"adv-wrap\" id=\"adv-valves\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-valves')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-adjustments adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Advanced: proportional and servo valves, cartridge valves, unloading valves</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p><strong>Proportional valves</strong> position the spool in proportion to an electrical command, giving variable flow and direction from one valve. They need cleaner fluid than on-off valves (ISO 4406 16/14/11 or better) because the spool clearances are fine and the spool is always partially open. Most have an amplifier card with gain, ramp, and dither settings. Dither is a small high-frequency signal that keeps the spool moving to prevent stiction; if a proportional valve is sticky and jerky, dither is one of the first things to check. Null adjustment sets the centre; a valve that drifts a load with zero command is out of null or has a worn spool.</p>\n        <p><strong>Servo valves</strong> are proportional valves with an internal feedback loop and a flapper-nozzle or jet pipe pilot stage. They are fast, precise, and intolerant of contamination (ISO 15/13/10 or better). They are used in closed-loop position and force control: test rigs, injection moulding, steel mill controls. A servo valve fault in the field is almost always contamination in the pilot stage, and the fix is a clean replacement and fixing whatever let the dirt in.</p>\n        <p><strong>Cartridge valves</strong> screw into a manifold cavity rather than mounting on a subplate. Most modern valve functions (relief, check, counterbalance, flow control, solenoid directional) are available as cartridges. The manifold is the circuit. Troubleshooting a cartridge manifold means reading the manifold drawing to know which cavity holds what, then pulling and inspecting individual cartridges. Never mix cartridges between cavities: a relief cartridge in a check valve cavity will look like it fits.</p>\n        <p><strong>Unloading valves</strong> vent a fixed displacement pump to tank when a remote pilot pressure is reached, typically from an accumulator. The pump runs unloaded until the accumulator drops to the reset pressure, then reloads. This is how a fixed pump serves a closed centre system without constantly going over relief. An unloading valve that will not unload runs the pump hot; one that will not reload leaves the system with no pressure.</p>\n        <p><strong>Logic elements</strong> (slip-in cartridge valves) are large two-way poppets controlled by a pilot section on a cover. They handle very high flows and are used in presses and large industrial systems. Function is set by the cover, so reading the cover drawing is the whole troubleshooting exercise.</p>\n      </div>\n    </div>",
    "actuators": "<div class=\"bw-section-label\">Hydraulic actuators: tap a type to learn more</div>\n    <div class=\"family-label\">Cylinders</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectAct('single')\" id=\"acard-single\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-bar-right\"></i></div><div class=\"type-card-name\">Single Acting</div><div class=\"type-card-sub\">Pressure one way, gravity or spring back</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('double')\" id=\"acard-double\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-horizontal\"></i></div><div class=\"type-card-name\">Double Acting</div><div class=\"type-card-sub\">The standard differential cylinder</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('doublerod')\" id=\"acard-doublerod\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-left-right\"></i></div><div class=\"type-card-name\">Double Rod</div><div class=\"type-card-sub\">Equal area, equal speed both ways</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('telescopic')\" id=\"acard-telescopic\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-maximize\"></i></div><div class=\"type-card-name\">Telescopic</div><div class=\"type-card-sub\">Dump bodies, long stroke</div></div>\n    </div>\n    <div class=\"family-label\">Rotary</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectAct('gearmotor')\" id=\"acard-gearmotor\"><div class=\"type-card-icon\"><i class=\"ti ti-settings\"></i></div><div class=\"type-card-name\">Gear and Vane Motors</div><div class=\"type-card-sub\">High speed, low torque</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('pistonmotor')\" id=\"acard-pistonmotor\"><div class=\"type-card-icon\"><i class=\"ti ti-circle-dotted\"></i></div><div class=\"type-card-name\">Piston Motors</div><div class=\"type-card-sub\">High pressure, variable displacement</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('orbital')\" id=\"acard-orbital\"><div class=\"type-card-icon\"><i class=\"ti ti-rotate-360\"></i></div><div class=\"type-card-name\">Orbital (Gerotor) Motors</div><div class=\"type-card-sub\">Low speed high torque, wheel drives</div></div>\n      <div class=\"type-card\" onclick=\"selectAct('rotaryact')\" id=\"acard-rotaryact\"><div class=\"type-card-icon\"><i class=\"ti ti-rotate-clockwise\"></i></div><div class=\"type-card-name\">Rotary Actuator</div><div class=\"type-card-sub\">Limited rotation, huge torque</div></div>\n    </div>\n    <div id=\"act-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select an actuator type above</div></div>\n\n    <div class=\"bw-section-label\">Cylinder force and speed</div>\n    <div class=\"info-block\">\n      <div style=\"background:#111110; border:0.5px solid #3a3a36; border-radius:6px; padding:0.75rem 1rem; margin:0.4rem 0 0.8rem 0; font-family:'Share Tech Mono',monospace; font-size:12px; color:#EF9F27; line-height:1.9;\">\n        Force (N) = Pressure (Pa) × Area (m²)<br>\n        Extend area = (π/4) × D²<br>\n        Retract area = (π/4) × (D² - d²)<br>\n        Speed (m/s) = Flow (m³/s) ÷ Area (m²)<br><br>\n        Example: 100mm bore, 56mm rod, 200 bar, 40 L/min<br>\n        Extend force: 0.00785 m² × 20,000,000 Pa = 157 kN ≈ 16 tonnes<br>\n        Retract force: 0.00539 m² × 20,000,000 Pa = 108 kN ≈ 11 tonnes<br>\n        Extend speed: 0.000667 m³/s ÷ 0.00785 m² = 0.085 m/s\n      </div>\n      <div class=\"info-block-body\">The rod-side area is smaller, so the same flow retracts the cylinder faster than it extends it, and the same pressure retracts it with less force. On a 2:1 area ratio cylinder the retract speed is double the extend speed. This is also why the rod end sees pressure intensification when the cylinder is pulled on: a load pulling the rod out with the rod port blocked can generate cap-end pressure well above relief. That is what pilot operated checks and counterbalance valves are for.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Two cylinder tests every millwright should know</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-arrow-down\"></i> Drift test: is it the cylinder or the valve?</div>\n      <div class=\"info-block-body\">A cylinder that creeps under load has a leak somewhere. This test tells you whether the leak is inside the cylinder (piston seal) or outside it (DCV spool, pilot operated check, counterbalance). Load must be safely supported first: see the Safety tab.</div>\n      <ul class=\"info-block-tips\">\n        <li>Position the cylinder mid-stroke with the load on it. Lock out.</li>\n        <li>Close isolation valves at both cylinder ports, or cap both lines at the cylinder. The cylinder is now hydraulically isolated from the rest of the circuit.</li>\n        <li>Watch it. If it still drifts with both ports blocked, the piston seal is bypassing (fluid moves from one side of the piston to the other). If it stops drifting, the cylinder is sound and the leak is in the valve stack upstream.</li>\n        <li>A single acting or gravity-loaded cylinder that drifts with the port blocked can also have a rod seal leak. Look for oil at the rod.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-droplet\"></i> Piston seal bypass test</div>\n      <div class=\"info-block-body\">Confirms an internal leak directly. With the load removed or safely supported and the system locked out except for the test:</div>\n      <ul class=\"info-block-tips\">\n        <li>Fully extend the cylinder to its mechanical stop.</li>\n        <li>Disconnect the rod-end line at the cylinder and cap the line (not the port).</li>\n        <li>Apply pressure to the cap end with the cylinder at full extension. The piston cannot move. Any fluid that comes out of the open rod port is passing the piston seal.</li>\n        <li>Manufacturers publish an allowable bypass rate. A steady stream is a failed seal. A few drops per minute on a large old cylinder may be within spec.</li>\n        <li>Pull the rod end of the cylinder toward you when doing this, never stand in line with the rod port. Fluid can exit with force.</li>\n      </ul>\n    </div>\n\n    <div class=\"field-tip\"><i class=\"ti ti-ruler-measure\"></i><div><strong>Field tip: rod condition decides seal life</strong>Run a fingernail along the rod. Any score you can catch a nail in will cut the new rod seal within days. Check the rod for pitting from corrosion too, especially on outdoor equipment that sits extended. A rod that is straight, polished, and unpitted is the first requirement for a seal job that lasts. If the rod is bad, the seal kit is wasted money.</div></div>",
    "fluid": "<div class=\"bw-section-label\">Fluid: the most important component in the system</div>\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-hexagon callout-box-icon\"></i><div class=\"callout-box-title\">Contamination is the root cause of most hydraulic failures</div></div>\n      <div class=\"callout-box-body\">Particles smaller than you can see score spools, erode valve seats, and open up pump clearances. Water breaks down additives, corrodes, and reduces lubricity. Air causes cavitation damage, erratic motion, and oxidation. <strong>Most hydraulic components do not wear out. They are worn out by the fluid.</strong> A system kept at its target cleanliness code will run for decades on the original pump.</div>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-test-pipe\"></i> Viscosity and temperature</div>\n      <div class=\"info-block-body\">Viscosity is the property that matters most. Too thick: the pump cavitates at startup, filters go into bypass, everything is sluggish. Too thin: internal leakage rises, pump volumetric efficiency falls, the film breaks down and wear accelerates. The ISO viscosity grade (VG 32, 46, 68 are the common hydraulic grades) is chosen for the pump's viscosity window across the operating temperature range.</div>\n      <ul class=\"info-block-tips\">\n        <li>Operating temperature target for most industrial systems: 40 to 60°C at the reservoir. Above 80°C, oxidation rate doubles for every 10°C and seals begin to harden.</li>\n        <li>Most pump manufacturers specify a minimum viscosity at operating temperature (often around 13 to 16 cSt) and a maximum at cold start (often 800 to 1000 cSt). Check both ends against the fluid data sheet for your climate.</li>\n        <li>Cold start in an unheated plant in January: the oil may be above the pump's maximum. Jog the pump or use a reservoir heater. Running a pump at full speed on oil like molasses cavitates it.</li>\n        <li>Viscosity index (VI) describes how much viscosity changes with temperature. High VI fluids stay usable across a wider range. Mobile equipment uses high VI fluids for this reason.</li>\n        <li>Never top up with a different fluid type without checking compatibility. Mineral oil, phosphate ester, water glycol, and polyol ester fluids are incompatible with each other and with each other's seals.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-microscope\"></i> ISO 4406 cleanliness codes</div>\n      <div class=\"info-block-body\">A cleanliness code has three numbers, for particles larger than 4, 6, and 14 microns per millilitre. Each step up in a number is roughly double the particle count. The target depends on the most sensitive component in the system.</div>\n      <table class=\"ref-table\">\n        <tr><th>System</th><th>Target code</th><th>Why</th></tr>\n        <tr><td>Servo valves</td><td>15/13/10 or cleaner</td><td>Pilot stage orifices and flapper clearances</td></tr>\n        <tr><td>Proportional valves, piston pumps over 200 bar</td><td>16/14/11</td><td>Fine spool clearances, high pressure loading</td></tr>\n        <tr><td>Vane pumps, on-off valves, industrial general</td><td>18/16/13</td><td>Standard industrial target</td></tr>\n        <tr><td>Gear pumps, low pressure mobile</td><td>19/17/14</td><td>Tolerant components</td></tr>\n        <tr><td>New oil from the drum</td><td>Often 20/18/15 or worse</td><td>New oil is not clean oil. Filter it in.</td></tr>\n      </table>\n      <ul class=\"info-block-tips\">\n        <li>Filter beta ratio describes filter efficiency: β10 = 200 means 200 particles at 10 microns go in for every one that gets through. Higher beta at the target micron size is better. A nominal rating means very little; ask for the beta ratio.</li>\n        <li>Pressure filters protect the component immediately downstream. Return filters clean the fluid before it goes back to the tank. Offline (kidney loop) filters run continuously regardless of the main pump and are the best way to reach and hold a tight target.</li>\n        <li>Suction strainers are coarse (typically 100 to 150 micron) and exist to protect the pump from large debris, not to clean the fluid. A fine filter on the suction side starves the pump and causes cavitation. If a suction strainer is plugged, the pump screams.</li>\n        <li>The reservoir breather is a filter. A standard open breather admits airborne dirt and humid air every time the fluid level changes. A desiccant breather with a particulate element is one of the cheapest upgrades in hydraulics.</li>\n        <li>Filter bypass indicators tell you when the element is loaded and fluid is going around it unfiltered. A filter in bypass is not a filter. Check indicators with the system at operating temperature, since cold oil loads a filter falsely.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-droplet-half\"></i> Water and air</div>\n      <div class=\"info-block-body\">Water enters through breathers, seals, coolers, and condensation. Dissolved water is invisible; free water makes the oil cloudy or milky. Above the saturation point (typically 200 to 400 ppm for mineral oil) water is free and does damage: corrosion, additive dropout, microbial growth, and loss of lubricity. Air enters through suction leaks, low reservoir level, return lines discharging above the fluid level, and pump shaft seals. Air in the fluid compresses, which makes hydraulics behave like pneumatics: spongy, erratic, and noisy.</div>\n      <ul class=\"info-block-tips\">\n        <li>Crackle test: a drop of oil on a hot plate. Crackling means free water.</li>\n        <li>A cooler leaking water into the oil shows up as a rising oil level and milky fluid. Pressure test the cooler.</li>\n        <li>Foam on the reservoir surface is aeration. Look for the source on the suction side: a loose suction fitting, a low level uncovering the suction pipe, a return line splashing.</li>\n        <li>Bleed air from cylinders at the highest point after any work that opened the circuit. Cycle to the stops with no load several times.</li>\n        <li>Reservoir sizing rule of thumb: two to three times the pump flow per minute in litres. This gives the fluid time to cool, settle, and release air before it goes around again. A reservoir that is too small runs hot and aerated.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-flask\"></i> Oil sampling and analysis for hydraulics</div>\n      <div class=\"info-block-body\">The lubrication module covers sampling method and parameters in full. For hydraulics, the parameters that matter most are particle count (ISO 4406), water content, viscosity against the grade, and wear metals. Sample from a live pressure or return line using a sampling valve, never from the drain plug where sediment collects.</div>\n      <ul class=\"info-block-tips\">\n        <li>Trend against the previous sample, not against a generic limit. A doubling of particle count between samples is an alarm even if the code is still within target.</li>\n        <li>Iron and chrome rising: pump or cylinder wear. Copper: bushings, thrust plates, cooler tubes. Silicon: dirt getting in.</li>\n        <li>After any catastrophic component failure, flush the system before installing the replacement. Debris from a failed pump destroys the new one within hours.</li>\n      </ul>\n    </div>\n\n    <div class=\"field-tip\"><i class=\"ti ti-eye\"></i><div><strong>Field tip: the reservoir tells you the system's history</strong>Pull the cover on a system you have never seen before. Sludge in the corners is old oxidised oil and poor filtration. Rust on the walls above the fluid line is water and a bad breather. Foam is air. A magnetic plug with fuzz is normal wear; with chips is a component coming apart. Five minutes with a flashlight tells you how this system has been treated.</div></div>",
    "symbols": "<div class=\"bw-section-label\">ISO 1219 hydraulic symbols: tap a symbol to learn more</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">The pneumatics module covers lines, junctions, directional valve boxes, check valves, and basic cylinders. The same rules apply here. These are the symbols that are specific to or more common in hydraulic circuits. A triangle filled in solid means hydraulic; an open triangle means pneumatic. That one detail lets you tell the two circuit types apart at a glance.</div></div>\n    <div class=\"family-label\">Supply and return</div>\n    <div class=\"sym-grid\">\n      <div class=\"sym-card\" onclick=\"selectSym('reservoir')\" id=\"sym-reservoir\">\n        <svg width=\"90\" height=\"60\" viewBox=\"0 0 90 60\"><path d=\"M25,15 L25,45 L65,45 L65,15\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"45\" y1=\"5\" x2=\"45\" y2=\"38\" stroke=\"#BA7517\" stroke-width=\"1.5\"/></svg>\n        <div class=\"sym-card-label\">Reservoir (vented)</div><div class=\"sym-card-sub\">Open top, line ends below surface</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('fixedpump')\" id=\"sym-fixedpump\">\n        <svg width=\"90\" height=\"70\" viewBox=\"0 0 90 70\"><circle cx=\"45\" cy=\"35\" r=\"22\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"45,13 38,25 52,25\" fill=\"#BA7517\"/><line x1=\"45\" y1=\"57\" x2=\"45\" y2=\"67\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"45\" y1=\"13\" x2=\"45\" y2=\"3\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"23\" y1=\"35\" x2=\"10\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/></svg>\n        <div class=\"sym-card-label\">Fixed Displacement Pump</div><div class=\"sym-card-sub\">Solid triangle points out</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('varpump')\" id=\"sym-varpump\">\n        <svg width=\"90\" height=\"70\" viewBox=\"0 0 90 70\"><circle cx=\"45\" cy=\"35\" r=\"22\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"45,13 38,25 52,25\" fill=\"#BA7517\"/><line x1=\"45\" y1=\"57\" x2=\"45\" y2=\"67\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"45\" y1=\"13\" x2=\"45\" y2=\"3\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"23\" y1=\"35\" x2=\"10\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"20\" y1=\"60\" x2=\"70\" y2=\"10\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"70,10 62,12 68,18\" fill=\"#BA7517\"/></svg>\n        <div class=\"sym-card-label\">Variable Displacement Pump</div><div class=\"sym-card-sub\">Diagonal arrow = variable</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('hydmotor')\" id=\"sym-hydmotor\">\n        <svg width=\"90\" height=\"70\" viewBox=\"0 0 90 70\"><circle cx=\"45\" cy=\"35\" r=\"22\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"45,25 38,13 52,13\" fill=\"#BA7517\"/><polygon points=\"45,45 38,57 52,57\" fill=\"#BA7517\"/><line x1=\"45\" y1=\"57\" x2=\"45\" y2=\"67\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"45\" y1=\"13\" x2=\"45\" y2=\"3\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"67\" y1=\"35\" x2=\"80\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/></svg>\n        <div class=\"sym-card-label\">Hydraulic Motor (bidirectional)</div><div class=\"sym-card-sub\">Triangles point in</div></div>\n    </div>\n    <div class=\"family-label\">Pressure control</div>\n    <div class=\"sym-grid\">\n      <div class=\"sym-card\" onclick=\"selectSym('reliefsym')\" id=\"sym-reliefsym\">\n        <svg width=\"110\" height=\"70\" viewBox=\"0 0 110 70\"><rect x=\"35\" y=\"20\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"28\" stroke=\"#BA7517\" stroke-width=\"1.5\" transform=\"translate(-6,0)\"/><polygon points=\"44,22 40,30 48,30\" fill=\"#BA7517\"/><line x1=\"10\" y1=\"35\" x2=\"35\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"10\" y1=\"35\" x2=\"10\" y2=\"60\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><line x1=\"10\" y1=\"60\" x2=\"40\" y2=\"60\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><line x1=\"40\" y1=\"60\" x2=\"40\" y2=\"50\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><path d=\"M65,30 L70,27 L75,33 L80,27 L85,33 L90,30\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\"/><line x1=\"65\" y1=\"35\" x2=\"65\" y2=\"25\" stroke=\"#BA7517\" stroke-width=\"1\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"65\" stroke=\"#BA7517\" stroke-width=\"2\" transform=\"translate(-6,0)\"/><text x=\"44\" y=\"12\" fill=\"#5F5E5A\" font-family=\"Share Tech Mono\" font-size=\"8\" text-anchor=\"middle\">P in, T out</text></svg>\n        <div class=\"sym-card-label\">Relief Valve</div><div class=\"sym-card-sub\">Arrow offset from ports = normally closed</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('reducingsym')\" id=\"sym-reducingsym\">\n        <svg width=\"110\" height=\"70\" viewBox=\"0 0 110 70\"><rect x=\"35\" y=\"20\" width=\"30\" height=\"30\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"28\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"50,22 46,30 54,30\" fill=\"#BA7517\"/><line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"65\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"5\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"50\" y1=\"8\" x2=\"80\" y2=\"8\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"8\" x2=\"80\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><line x1=\"80\" y1=\"35\" x2=\"65\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><path d=\"M10,30 L15,27 L20,33 L25,27 L30,33 L35,30\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\"/><text x=\"50\" y=\"12\" fill=\"#5F5E5A\" font-family=\"Share Tech Mono\" font-size=\"8\" text-anchor=\"end\">out</text></svg>\n        <div class=\"sym-card-label\">Pressure Reducing Valve</div><div class=\"sym-card-sub\">Arrow in line = normally open, senses outlet</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('checksym')\" id=\"sym-checksym\">\n        <svg width=\"110\" height=\"55\" viewBox=\"0 0 110 55\"><line x1=\"5\" y1=\"27\" x2=\"35\" y2=\"27\" stroke=\"#BA7517\" stroke-width=\"2\"/><circle cx=\"46\" cy=\"27\" r=\"8\" fill=\"#2e2e2a\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><path d=\"M38,15 L54,27 L38,39\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"54\" y1=\"27\" x2=\"105\" y2=\"27\" stroke=\"#BA7517\" stroke-width=\"2\"/></svg>\n        <div class=\"sym-card-label\">Check Valve (ball in seat)</div><div class=\"sym-card-sub\">Ball moves away from the V to open</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('pocheck')\" id=\"sym-pocheck\">\n        <svg width=\"110\" height=\"65\" viewBox=\"0 0 110 65\"><line x1=\"5\" y1=\"35\" x2=\"35\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><circle cx=\"46\" cy=\"35\" r=\"8\" fill=\"#2e2e2a\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><path d=\"M38,23 L54,35 L38,47\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"54\" y1=\"35\" x2=\"105\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><rect x=\"25\" y=\"5\" width=\"55\" height=\"45\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/><line x1=\"46\" y1=\"5\" x2=\"46\" y2=\"27\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/><polygon points=\"46,27 42,20 50,20\" fill=\"#BA7517\"/><line x1=\"46\" y1=\"5\" x2=\"20\" y2=\"5\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"4,3\"/></svg>\n        <div class=\"sym-card-label\">Pilot Operated Check</div><div class=\"sym-card-sub\">Pilot line pushes ball off seat</div></div>\n    </div>\n    <div class=\"family-label\">Flow and conditioning</div>\n    <div class=\"sym-grid\">\n      <div class=\"sym-card\" onclick=\"selectSym('pcflow')\" id=\"sym-pcflow\">\n        <svg width=\"110\" height=\"65\" viewBox=\"0 0 110 65\"><rect x=\"28\" y=\"12\" width=\"54\" height=\"40\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\" stroke-dasharray=\"3,2\"/><line x1=\"5\" y1=\"32\" x2=\"40\" y2=\"32\" stroke=\"#BA7517\" stroke-width=\"2\"/><path d=\"M40,22 Q48,32 40,42\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><path d=\"M70,22 Q62,32 70,42\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"70\" y1=\"32\" x2=\"105\" y2=\"32\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"35\" y1=\"48\" x2=\"75\" y2=\"16\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"75,16 67,18 72,24\" fill=\"#BA7517\"/><line x1=\"55\" y1=\"52\" x2=\"55\" y2=\"60\" stroke=\"#BA7517\" stroke-width=\"1\"/><polygon points=\"55,60 51,55 59,55\" fill=\"#BA7517\"/></svg>\n        <div class=\"sym-card-label\">Pressure Compensated Flow Control</div><div class=\"sym-card-sub\">Dashed enclosure, compensator arrow</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('accumulator')\" id=\"sym-accumulator\">\n        <svg width=\"80\" height=\"75\" viewBox=\"0 0 80 75\"><path d=\"M28,20 A12,12 0 0,1 52,20 L52,55 A12,12 0 0,1 28,55 Z\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"28\" y1=\"37\" x2=\"52\" y2=\"37\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"34,30 46,30 40,22\" fill=\"#BA7517\"/><line x1=\"40\" y1=\"67\" x2=\"40\" y2=\"75\" stroke=\"#BA7517\" stroke-width=\"2\"/><text x=\"40\" y=\"52\" fill=\"#BA7517\" font-family=\"Share Tech Mono\" font-size=\"8\" text-anchor=\"middle\">N2</text></svg>\n        <div class=\"sym-card-label\">Accumulator (bladder)</div><div class=\"sym-card-sub\">Stored energy. Bleed before work.</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('cooler')\" id=\"sym-cooler\">\n        <svg width=\"90\" height=\"70\" viewBox=\"0 0 90 70\"><polygon points=\"45,13 67,35 45,57 23,35\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"5\" y1=\"35\" x2=\"23\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"67\" y1=\"35\" x2=\"85\" y2=\"35\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"45\" y1=\"22\" x2=\"45\" y2=\"48\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"45,22 41,29 49,29\" fill=\"#BA7517\"/><polygon points=\"45,48 41,41 49,41\" fill=\"#BA7517\"/></svg>\n        <div class=\"sym-card-label\">Cooler (heat exchanger)</div><div class=\"sym-card-sub\">Diamond, arrows out = heat removed</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('gauge')\" id=\"sym-gauge\">\n        <svg width=\"80\" height=\"65\" viewBox=\"0 0 80 65\"><circle cx=\"40\" cy=\"28\" r=\"18\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"28\" x2=\"52\" y2=\"16\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"52,16 45,18 50,23\" fill=\"#BA7517\"/><line x1=\"40\" y1=\"46\" x2=\"40\" y2=\"62\" stroke=\"#BA7517\" stroke-width=\"2\"/></svg>\n        <div class=\"sym-card-label\">Pressure Gauge</div><div class=\"sym-card-sub\">Test points are your friends</div></div>\n    </div>\n    <div class=\"family-label\">Directional and actuator</div>\n    <div class=\"sym-grid\">\n      <div class=\"sym-card\" onclick=\"selectSym('dcv43sym')\" id=\"sym-dcv43sym\">\n        <svg width=\"150\" height=\"70\" viewBox=\"0 0 150 70\"><rect x=\"15\" y=\"15\" width=\"35\" height=\"35\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><rect x=\"50\" y=\"15\" width=\"35\" height=\"35\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><rect x=\"85\" y=\"15\" width=\"35\" height=\"35\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"25\" y1=\"50\" x2=\"25\" y2=\"37\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"25,28 21,37 29,37\" fill=\"#BA7517\"/><line x1=\"40\" y1=\"28\" x2=\"40\" y2=\"41\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"40,50 36,41 44,41\" fill=\"#BA7517\"/><line x1=\"60\" y1=\"15\" x2=\"60\" y2=\"22\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"56\" y1=\"22\" x2=\"64\" y2=\"22\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"75\" y1=\"15\" x2=\"75\" y2=\"22\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"71\" y1=\"22\" x2=\"79\" y2=\"22\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"50\" x2=\"60\" y2=\"43\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"56\" y1=\"43\" x2=\"64\" y2=\"43\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"75\" y1=\"50\" x2=\"75\" y2=\"43\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"71\" y1=\"43\" x2=\"79\" y2=\"43\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"95\" y1=\"28\" x2=\"110\" y2=\"41\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"110,50 103,44 112,40\" fill=\"#BA7517\"/><line x1=\"110\" y1=\"28\" x2=\"95\" y2=\"41\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><polygon points=\"95,50 93,40 102,44\" fill=\"#BA7517\"/><rect x=\"120\" y=\"22\" width=\"10\" height=\"21\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\"/><rect x=\"5\" y=\"22\" width=\"10\" height=\"21\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\"/><path d=\"M50,55 L54,58 L58,55 M77,55 L81,58 L85,55\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1\"/><text x=\"67\" y=\"66\" fill=\"#5F5E5A\" font-family=\"Share Tech Mono\" font-size=\"8\" text-anchor=\"middle\">A B / P T</text></svg>\n        <div class=\"sym-card-label\">4/3 DCV, closed centre</div><div class=\"sym-card-sub\">Spring centred, double solenoid</div></div>\n      <div class=\"sym-card\" onclick=\"selectSym('cylcush')\" id=\"sym-cylcush\">\n        <svg width=\"130\" height=\"60\" viewBox=\"0 0 130 60\"><rect x=\"18\" y=\"14\" width=\"72\" height=\"28\" fill=\"none\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"55\" y1=\"14\" x2=\"55\" y2=\"42\" stroke=\"#BA7517\" stroke-width=\"3\"/><rect x=\"48\" y=\"17\" width=\"5\" height=\"22\" fill=\"#BA7517\"/><rect x=\"57\" y=\"17\" width=\"5\" height=\"22\" fill=\"#BA7517\"/><line x1=\"55\" y1=\"28\" x2=\"118\" y2=\"28\" stroke=\"#BA7517\" stroke-width=\"2\"/><line x1=\"18\" y1=\"9\" x2=\"18\" y2=\"51\" stroke=\"#BA7517\" stroke-width=\"2.5\"/><line x1=\"32\" y1=\"14\" x2=\"32\" y2=\"4\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"76\" y1=\"14\" x2=\"76\" y2=\"4\" stroke=\"#BA7517\" stroke-width=\"1.5\"/><line x1=\"40\" y1=\"46\" x2=\"52\" y2=\"54\" stroke=\"#BA7517\" stroke-width=\"1\"/><polygon points=\"52,54 45,54 49,49\" fill=\"#BA7517\"/><line x1=\"70\" y1=\"46\" x2=\"58\" y2=\"54\" stroke=\"#BA7517\" stroke-width=\"1\"/><polygon points=\"58,54 65,54 61,49\" fill=\"#BA7517\"/></svg>\n        <div class=\"sym-card-label\">Cylinder, adjustable cushions both ends</div><div class=\"sym-card-sub\">Cushion blocks on the piston, arrows = adjustable</div></div>\n    </div>\n    <div id=\"sym-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a symbol above to see explanation</div></div>",
    "troubleshoot": "<div class=\"bw-section-label\">Hydraulic system fault diagnosis</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology: gauge, temperature gun, and the three questions</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p><strong>Three questions answer most hydraulic faults.</strong> Is there flow? Is there pressure? Where is the heat? Flow you confirm with a flow meter or by timing an actuator against its rated speed. Pressure you read at test points, under load, while the fault is happening. Heat you find with an infrared thermometer by surveying every component.</p>\n        <p><strong>Step 1: reproduce the fault safely.</strong> Watch the machine do the wrong thing. Note which actuator, which direction, and whether it happens cold, hot, loaded, or unloaded. Intermittent faults that only happen hot are almost always internal leakage or viscosity. Faults that only happen cold are viscosity or cavitation.</p>\n        <p><strong>Step 2: read the circuit drawing.</strong> Find the relief valve, any pressure compensator, every load holding valve on the actuator in question, and every test point. Know what the DCV centre condition is supposed to do. Hydraulic troubleshooting without the drawing is guessing.</p>\n        <p><strong>Step 3: gauge the pump outlet.</strong> Deadhead the system safely (block the actuator or shift to a closed centre) and read the pressure. It should rise to the relief or compensator setting. If it does not, the pump is worn, the relief is stuck open, or something is bypassing to tank upstream of the DCV. If it does, the supply side is sound and the fault is downstream.</p>\n        <p><strong>Step 4: gauge at the actuator port.</strong> Pressure present and correct at the actuator, actuator not moving or slow: internal leak in the actuator or a load holding valve not opening. Pressure low at the actuator but correct at the pump: something between them is restricting or bypassing.</p>\n        <p><strong>Step 5: temperature survey.</strong> Every valve, every actuator, the pump, the reservoir. Anything hotter than its neighbours is passing fluid it should not be. A relief valve hotter than the pressure line is lifting. One cylinder hotter than the identical one beside it is bypassing.</p>\n        <p><strong>Step 6: case drain and bypass tests before condemning a pump or cylinder.</strong> Both tests are on the Pumps and Actuators tabs. Both are done without removing the component.</p>\n        <p><strong>Field tip: screwdriver stethoscope.</strong> Press the tip to a valve body and the handle to the bone behind your ear. A relief valve chattering, a check valve fluttering, a solenoid buzzing on a stuck spool, and a pump cavitating all have distinct sounds that a screwdriver carries through plant noise.</p>\n      </div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"hyd-progress\" style=\"width:8%\"></div></div>\n    <div id=\"hyd-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Hydraulic safety: the hazards that put people in hospital</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-first-aid-kit callout-box-icon\"></i><div class=\"callout-box-title\">Fluid injection injury: what it is and what to do</div></div>\n      <div class=\"callout-box-body\">Hydraulic fluid at as little as 7 bar can penetrate skin. At working pressure it passes through gloves and skin like a needle. The entry wound looks like a small puncture or a bruise. Within hours the fluid spreads along tendon sheaths, the tissue begins to die, and without surgery the outcome is amputation of fingers or the hand. <strong>Every injection injury is a surgical emergency, no matter how minor it looks and no matter how the person feels.</strong></div>\n      <ul class=\"callout-tips\">\n        <li>If it happens: go to emergency immediately. Do not wait to see how it develops. Tell the triage staff the words <strong>\"high pressure fluid injection injury\"</strong> and what the fluid was. Many emergency staff have never seen one and will treat it as a minor puncture unless told.</li>\n        <li>Never search for a leak with your hand. Use a piece of cardboard or wood held in the suspected area; the spray will mark it.</li>\n        <li>Never tighten, loosen, or adjust a fitting, hose, or valve while the system is pressurised. Depressurise, lock out, verify zero.</li>\n        <li>Pinhole leaks in hoses produce a nearly invisible mist at pressure. If you can hear a hiss and see a damp patch but cannot see a stream, treat it as an injection hazard.</li>\n        <li>Wear safety glasses around any hydraulic system. Face shield when breaking any connection that could have residual pressure.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-battery-charging\" style=\"color:#F09595;\"></i> Accumulators: stored energy after everything is off</div>\n      <div class=\"info-block-body\">An accumulator stores pressurised fluid against a nitrogen charge. It holds that pressure after the pump stops, the power is off, and the lockout is on. Opening any connection downstream of a charged accumulator releases that energy through the opening. Systems with accumulators must have a bleed-down valve, and using it is part of the lockout procedure.</div>\n      <ul class=\"info-block-tips\">\n        <li>Locate every accumulator on the drawing before starting work. Some are not obvious: piston accumulators look like small cylinders, and some are mounted inside manifolds.</li>\n        <li>Bleed down through the designated bleed valve and verify zero on a gauge downstream of the accumulator. Some systems have an automatic dump valve that opens on shutdown; confirm it actually opened.</li>\n        <li>The nitrogen precharge is separate from the hydraulic pressure and is not released by bleeding the hydraulic side. Never loosen the gas valve or the accumulator shell. Precharge checks are done with a dedicated charging kit by someone trained on it.</li>\n        <li>Only nitrogen is used for precharging. Never air, never oxygen. Oxygen and hydraulic oil under pressure are a diesel-effect explosion.</li>\n        <li>Accumulators are pressure vessels and fall under the same statutory inspection requirements as any other. In Ontario that is TSSA.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-arrow-big-down\" style=\"color:#F09595;\"></i> Suspended and gravity loads</div>\n      <div class=\"info-block-body\">A hydraulic cylinder holding a load up is holding it with fluid trapped behind a valve. Open a line, pull a valve, or lose a seal and the load comes down at whatever speed the escaping fluid allows. The counterbalance valve or pilot operated check that holds the load is exactly the component you are most likely to be working on when it fails.</div>\n      <ul class=\"info-block-tips\">\n        <li>Lower the load to its mechanical rest position before working on the circuit. If it cannot be lowered, support it mechanically: cribbing, stands, safety pins, or the machine's own maintenance locks. Never rely on hydraulic pressure as a support.</li>\n        <li>Drift test and bypass test procedures on the Actuators tab require the load to be safely supported first.</li>\n        <li>A cylinder that has been sitting extended with a load and no counterbalance can have intensified pressure trapped on the cap side. Crack the fitting slowly, from the side, with the face shield on.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-flame\"></i> Hot oil, fire, and hoses</div>\n      <ul class=\"info-block-tips\">\n        <li>Hydraulic oil at 60 to 80°C causes burns on contact. A system that has been running hot can be well over that. Let it cool before opening.</li>\n        <li>A mist of hydraulic oil from a pinhole leak is flammable and can ignite on a hot surface (exhaust manifold, heater, welding). A fine spray of mineral oil has a lower ignition temperature than the bulk fluid. Fire-resistant fluids exist for this reason in foundries, steel mills, and near furnaces.</li>\n        <li>Hoses have a service life. Abrasion, kinking, heat, UV, and age all degrade the reinforcement. A hose that is stiff, cracked, blistered, or has exposed wire braid is due for replacement before it fails. Failed hoses whip.</li>\n        <li>Hose routing matters: no twisting during installation (follow the lay line), adequate bend radius, clamped away from moving parts and hot surfaces, and not used as a handhold or step.</li>\n        <li>Hose assemblies are rated as an assembly. Field-crimped hoses must use matched hose and fittings from the same system; mixing brands changes the rating.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-lock\"></i> Lockout for hydraulic systems</div>\n      <div class=\"info-block-body\">The electrical lockout stops the pump. It does not remove pressure, drain accumulators, or lower loads. Hydraulic lockout is a sequence, and every step gets verified.</div>\n      <ul class=\"info-block-tips\">\n        <li>Lower or support all loads.</li>\n        <li>Lock out the pump motor and any electric heaters.</li>\n        <li>Bleed down accumulators through the designated valve.</li>\n        <li>Cycle the directional valves (manual override or by hand on the solenoids if the design allows) to release trapped pressure in actuator lines. Some systems need lines cracked at the actuator to release intensified pressure.</li>\n        <li>Verify zero at every accessible gauge and test point on the part of the circuit you are opening. A gauge on the pump outlet says nothing about pressure trapped in a cylinder line behind a pilot operated check.</li>\n        <li>Ontario Regulation 851 sections 75 and 76 cover control of hazardous energy in industrial establishments. Written procedure, posted, followed, verified.</li>\n      </ul>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-hand-stop\"></i> Cleanliness is a safety practice</div>\n      <div class=\"info-block-body\">A valve that sticks from contamination can hold a load when it should release it, or release a load when it should hold it. Clean assembly, capped ports and hoses, filtered new oil, and a desiccant breather are not just reliability practices. They are what keeps the load holding valve working the day someone is under the load.</div>\n    </div>"
  },
  "title": "BuiltWright: Hydraulics: Module 07",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_pneumatics_v1.html#troubleshoot\">Pneumatics: the bracketing method</a><a href=\"builtwright_lubrication_v1.html#contam\">Lubrication: contamination and oil analysis</a><a href=\"builtwright_seals_gaskets_v1.html#materials\">Seals: material against the fluid</a><a href=\"builtwright_process_valves_v1.html#types\">Valves: relief and check valves</a><a href=\"builtwright_clutches_brakes_v1.html#types\">Clutches and Brakes: wet clutches and caliper brakes</a><a href=\"builtwright_reference_v1.html#units\">Reference: pressure and flow conversions</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 07 of series &nbsp;·&nbsp; hydraulics</div>",
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
    ".callout-box.blue { border-color: #185FA5; background: #0c1f33; }",
    ".callout-box.blue .callout-box-icon, .callout-box.blue .callout-box-title, .callout-box.blue strong { color: #85B7EB; }",
    ".callout-tips { list-style: none; margin-top: 0.6rem; }",
    ".callout-tips li { font-size: 13px; color: #888780; padding: 3px 0 3px 16px; position: relative; line-height: 1.5; }",
    ".callout-tips li::before { content: '→'; position: absolute; left: 0; color: #EF9F27; }",
    ".adv-wrap { border-radius: 8px; overflow: hidden; border: 0.5px solid #3a3a36; margin-bottom: 1.25rem; }",
    ".adv-toggle { width: 100%; background: #242420; border: none; padding: 0.75rem 1.1rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer; gap: 10px; }",
    ".adv-toggle-left { display: flex; align-items: center; gap: 8px; }",
    ".adv-toggle-icon { font-size: 15px; color: #BA7517; }",
    ".adv-toggle-label { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #BA7517; font-weight: 600; text-align: left; }",
    ".adv-chevron { font-size: 13px; color: #BA7517; transition: transform 0.2s; }",
    ".adv-wrap.open .adv-chevron { transform: rotate(180deg); }",
    ".adv-body { display: none; background: #1e1e1c; padding: 1rem 1.1rem; border-top: 0.5px solid #3a3a36; }",
    ".adv-wrap.open .adv-body { display: block; }",
    ".adv-body p { font-size: 13px; color: #c8c6bf; line-height: 1.6; margin-bottom: 0.75rem; }",
    ".adv-body strong { color: #e8e6df; font-weight: 600; }",
    ".chain-wrap { background: #242420; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; overflow-x: auto; }",
    ".chain { display: flex; align-items: center; flex-wrap: nowrap; gap: 0; }",
    ".chain-node { flex-shrink: 0; }",
    ".chain-box { background: #2e2e2a; border: 1px solid #3a3a36; border-radius: 6px; padding: 7px 9px; text-align: center; cursor: pointer; transition: all 0.15s; min-width: 70px; }",
    ".chain-box:hover, .chain-box.selected { border-color: #BA7517; background: #2a1f08; box-shadow: 0 0 0 2px #BA7517; }",
    ".chain-icon { font-size: 18px; color: #BA7517; display: block; margin-bottom: 2px; }",
    ".chain-label { font-size: 11px; font-weight: 600; color: #e8e6df; }",
    ".chain-sub { font-size: 9px; color: #888780; }",
    ".chain-arrow { font-size: 14px; color: #5F5E5A; padding: 0 3px; flex-shrink: 0; }",
    ".sym-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 1.25rem; }",
    ".sym-card { background: #2e2e2a; border: 1px solid #3a3a36; border-radius: 8px; padding: 0.9rem; cursor: pointer; transition: all 0.15s; display: flex; flex-direction: column; align-items: center; gap: 8px; }",
    ".sym-card:hover, .sym-card.selected { border-color: #BA7517; background: #2a1f08; box-shadow: 0 0 0 2px #BA7517; }",
    ".sym-card-label { font-size: 12px; font-weight: 600; color: #f0ede4; text-align: center; }",
    ".sym-card-sub { font-size: 10px; color: #888780; text-align: center; }",
    ".sym-detail { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; }",
    ".sym-detail-body { font-size: 13px; color: #c8c6bf; line-height: 1.6; margin-top: 0.75rem; }",
    ".sym-detail-tips { list-style: none; margin-top: 0.6rem; }",
    ".sym-detail-tips li { font-size: 12px; color: #888780; padding: 2px 0 2px 16px; position: relative; line-height: 1.5; }",
    ".sym-detail-tips li::before { content: '→'; position: absolute; left: 0; color: #BA7517; font-size: 11px; }",
    ".ref-table { width: 100%; border-collapse: collapse; margin: 0.5rem 0 1rem 0; font-size: 12px; }",
    ".ref-table th { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1px; text-transform: uppercase; color: #BA7517; text-align: left; padding: 6px 8px; border-bottom: 1px solid #3a3a36; }",
    ".ref-table td { padding: 6px 8px; border-bottom: 0.5px solid #2e2e2a; color: #c8c6bf; vertical-align: top; line-height: 1.4; }",
    ".ref-table td:first-child { color: #f0ede4; font-weight: 600; white-space: nowrap; }",
    ".progress-bar { height: 3px; background: #242420; border-radius: 2px; margin-bottom: 1rem; overflow: hidden; }",
    ".tree-q-hint { font-size: 12px; color: #888780; margin-bottom: 0.75rem; font-style: italic; line-height: 1.45; }",
    ".tree-btn { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; padding: 7px 16px; border-radius: 5px; border: 0.5px solid #3a3a36; background: #242420; color: #e8e6df; cursor: pointer; transition: all 0.12s; text-align: left; }",
    "@media print { body { background:#fff; color:#000; padding:0; } .bw-tabs, .ref-search, .tree-back, .sc-score, .adv-chevron, .bw-badge { display:none !important; } .bw-panel { display:none; } .bw-panel.active { display:block; } .bw-wrap { max-width:100%; } .bw-title, .comp-detail-name, .info-block-title, .type-card-name, .sym-card-label, .tree-q-text, .tree-result-text, .route-title, .sc-stem, .callout-box-title, .field-tip strong, .tree-prevent strong, .bw-section-label, .family-label, .ref-table th { color:#000 !important; } .comp-detail-body, .info-block-body, .callout-box-body, .tree-result-sub, .tree-prevent, .field-tip div, .sc-why, .ref-table td, .comp-detail-tips li, .info-block-tips li, .callout-tips li, .sym-detail-body, .adv-body p, .route-text, .type-card-sub, .sym-card-sub, .tree-q-hint, .ref-note, .chain-label, .chain-sub { color:#222 !important; } .comp-detail, .info-block, .callout-box, .type-card, .sym-card, .tree-q, .tree-result, .field-tip, .adv-wrap, .adv-body, .adv-toggle, .chain-wrap, .chain-box, .sc-q, .sym-detail, .calc, .route, .dir-row, .safety-strip { background:#fff !important; border-color:#999 !important; box-shadow:none !important; } .adv-body { display:block !important; } .tree-btn, .sc-opt, .pm-btn { border:0.5px solid #999; background:#fff; color:#000; } .progress-bar { display:none; } a { color:#000; text-decoration:none; } .bw-logo a::after { content:\" builtwrightapp.com\"; color:#666; } .bw-header { border-bottom:1px solid #000; } .comp-detail, .info-block, .callout-box, .tree-q, .sc-q { page-break-inside: avoid; } }"
  ],
  "cssShared": 86
});
