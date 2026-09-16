BW.register("compressors", {
  "key": "compressors",
  "num": "18",
  "name": "Compressors",
  "source": "builtwright_compressors_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "types",
      "label": "Compressor Types",
      "active": false,
      "style": ""
    },
    {
      "id": "recip",
      "label": "Reciprocating",
      "active": false,
      "style": ""
    },
    {
      "id": "screw",
      "label": "Rotary Screw",
      "active": false,
      "style": ""
    },
    {
      "id": "controls",
      "label": "Controls and Capacity",
      "active": false,
      "style": ""
    },
    {
      "id": "cooling",
      "label": "Cooling and Condensate",
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
    "title": "Compressors",
    "badge": "Module 18",
    "tree": {
      "progress": "cp-progress",
      "container": "cp-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectType": {
        "scope": "#panel-types",
        "cardClass": ".type-card",
        "prefix": "tcard-",
        "data": "typeData",
        "display": "type-display"
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
    "typeData": {
      "recip": {
        "icon": "ti-engine",
        "name": "Reciprocating (piston)",
        "role": "Pistons, valves, and a crankcase. Simple, high pressure capable, and rated for intermittent duty.",
        "body": "Single or two stage, single or double acting, lubricated or oil-free. Small units on every shop floor; large double-acting units in process plants and for high pressure. Efficient at full load, tolerant of dirty air, and rebuildable in the field (valves, rings, packing). Pulsating output, noisy, and most small units are rated for 50 to 60 percent duty cycle: run continuously, they overheat and the valves carbon up.",
        "tips": [
          "Duty cycle on the nameplate; a shop compressor running all day needs a bigger receiver or a screw.",
          "Valves are the wear item. Replace as sets.",
          "Discharge temperature limit is a fire limit on lubricated units.",
          "Belts, flywheel, and pulsation fatigue on the discharge line."
        ]
      },
      "screwfl": {
        "icon": "ti-ruler-2",
        "name": "Oil-flooded rotary screw",
        "role": "Continuous duty, quiet, compact, the industrial default from 5 to 500 kW.",
        "body": "Two helical rotors compress the air continuously with oil injected to seal, lubricate, and cool. The airend is a sealed precision unit; the oil circuit, separator, coolers, and controls around it are the maintenance. Rated for 100 percent duty, and the controls (load-unload or VFD) match it to demand. Oil carryover of a few ppm is inherent and is removed downstream by filters where the application needs it.",
        "tips": [
          "The cooler, the separator, the thermostatic valve, and the oil are the four things that go wrong.",
          "Discharge temperature trip protects everything; find the cause before resetting.",
          "Airend life is bearing life; oil analysis for iron.",
          "Loaded hours ratio on the PM."
        ]
      },
      "screwdry": {
        "icon": "ti-droplet-off",
        "name": "Oil-free rotary screw",
        "role": "Rotors run without touching and without oil in the compression chamber. Two stages, intercooled, and the discharge is hot.",
        "body": "Timing gears keep the rotors apart; no oil enters the air. Two stages with an intercooler because without oil to carry heat away each stage can only compress so far before the discharge is too hot. Used where oil in the air is unacceptable: food, pharmaceutical, electronics, breathing air. More expensive, more sensitive to inlet air quality, and the rotor coatings and seals are the wear items.",
        "tips": [
          "Intercooler and aftercooler fouling is the usual fault; discharge temperatures are higher than a flooded screw.",
          "Rotor coating wear shows as falling output; not field repairable.",
          "Timing gear oil and bearing oil are separate from the air and are on the PM.",
          "Inlet filtration matters more: nothing in the air is washed out by oil."
        ]
      },
      "vane": {
        "icon": "ti-aperture",
        "name": "Rotary vane",
        "role": "A slotted rotor with sliding vanes in an eccentric housing. Oil-flooded, simple, quiet, smaller sizes.",
        "body": "The vanes slide out against the housing and sweep air around from inlet to outlet, with oil sealing and lubricating them. Fewer parts than a screw, slower rotor speed, quiet, and long-lived when the oil is right. Vanes wear and are replaced as a set; the housing wears in a pattern. Same oil circuit and separator arrangement as a flooded screw.",
        "tips": [
          "Vane wear shows as falling output; vanes are replaced on hours.",
          "Oil quality and level are the vane's life.",
          "A vane that sticks in its slot on a cold start is a rotor that will not build pressure."
        ]
      },
      "scroll": {
        "icon": "ti-spiral",
        "name": "Scroll",
        "role": "One spiral orbits inside a fixed spiral, trapping and shrinking pockets of air. Oil-free, small, quiet.",
        "body": "Two interleaved spiral scrolls, one fixed and one orbiting; air pockets between them shrink toward the centre. No valves, few moving parts, oil-free at the compression, and very quiet. Small capacities (up to a few kW per element, ganged for more). Dental, laboratory, small oil-free plant air. Tip seals on the scrolls wear and are the replacement item.",
        "tips": [
          "Tip seals on hours.",
          "Cooling fan and fins, same as anything air cooled.",
          "Not for dirty inlet air: no oil to wash it and fine clearances."
        ]
      },
      "centrif": {
        "icon": "ti-wind",
        "name": "Centrifugal",
        "role": "A dynamic compressor: impellers and diffusers, multi-stage, intercooled. Large plants, oil-free air.",
        "body": "The pump module's dynamic pump, for air, at very high impeller speeds through a gearbox. Oil-free at the air (bearings and gears are oil lubricated on the other side of seals). Very high capacity, efficient at design point, and it has a surge line: throttled too far, the flow reverses through the machine violently. Surge control (a blow-off or bypass valve) is the essential protection. Large plants and process air.",
        "tips": [
          "Surge is the failure mode; the surge controller and blow-off valve are the protection.",
          "Inlet guide vanes control capacity down to the surge margin.",
          "Bearings, seals, and the gearbox are specialist work; the bull gear and pinions are precision.",
          "Same fan laws as a fan: density and speed set the pressure and power."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is the compressor doing?",
        "hint": "Read the controller fault log first. Lock out at the disconnect; vent the separator tank before opening it.",
        "options": [
          {
            "label": "High discharge temperature trip",
            "next": "temp1"
          },
          {
            "label": "Will not build pressure or cannot keep up",
            "next": "press1"
          },
          {
            "label": "Oil carryover into the air",
            "next": "oil1"
          },
          {
            "label": "Short-cycling, or unloaded most of the day",
            "next": "r_controls"
          },
          {
            "label": "Water in the plant air",
            "next": "r_water"
          },
          {
            "label": "Noise or vibration",
            "next": "noise1"
          },
          {
            "label": "Milky or dark oil",
            "next": "r_oilcond"
          }
        ]
      },
      "temp1": {
        "q": "Cooler and ambient first. Is the cooler clean, the fan turning, and the room ventilated?",
        "options": [
          {
            "label": "Dirty cooler, fan fault, or a hot room",
            "next": "r_cooler"
          },
          {
            "label": "Cooling is clean and the room is fine",
            "next": "temp2"
          }
        ]
      },
      "temp2": {
        "q": "Oil temperature after the cooler versus discharge temperature?",
        "options": [
          {
            "label": "Oil hot too: thermostatic valve or oil flow",
            "next": "r_thermo"
          },
          {
            "label": "Oil normal, discharge hot: level, inlet, or airend",
            "next": "temp3"
          }
        ]
      },
      "temp3": {
        "q": "Oil level, inlet filter differential, and airend noise?",
        "options": [
          {
            "label": "Oil low",
            "next": "r_oillow"
          },
          {
            "label": "Inlet filter blocked",
            "next": "r_inlet"
          },
          {
            "label": "Airend rumbling under load",
            "next": "r_airend"
          }
        ]
      },
      "r_cooler": {
        "type": "result",
        "cls": "fix",
        "label": "cooling",
        "text": "Nine out of ten temperature trips.",
        "sub": "Lock out, cool down, blow the cooler out from the clean side with the fan shielded. Check the fan motor, belt, and blades. Check the room: intake and exhaust clear, hot air not recirculating into the intake. Reset and watch the discharge temperature stabilise.",
        "prevent": "Cooler cleaning on the PM, interval by the room. Room temperature logged in summer."
      },
      "r_thermo": {
        "type": "result",
        "cls": "action",
        "label": "thermostatic valve or oil circuit",
        "text": "Oil coming off the cooler hot means the oil is not being cooled: the thermostatic valve is stuck in bypass, the oil cooler is fouled internally, or the oil flow is restricted.",
        "sub": "Thermostatic element replaced (a cartridge on most units). Oil filter differential. Oil cooler internal fouling on water cooled units. Oil stop valve and injection line clear.",
        "prevent": "Thermostatic element replaced on the manufacturer interval with the oil filter."
      },
      "r_oillow": {
        "type": "result",
        "cls": "fix",
        "label": "low oil level",
        "text": "Less oil means less heat carried away and less sealing.",
        "sub": "Top up with the same oil to the level mark with the compressor stopped and the separator tank vented. Find the loss: carryover (separator), a leak, or an oil change that was short.",
        "prevent": "Level on the PM, with the compressor stopped and depressurised."
      },
      "r_inlet": {
        "type": "result",
        "cls": "fix",
        "label": "inlet restriction",
        "text": "A blocked inlet filter raises the pressure ratio across the airend and heats the discharge.",
        "sub": "Replace the inlet filter element. Check the inlet ducting and the inlet valve travel. Inlet vacuum gauge or differential indicator on the PM.",
        "prevent": "Inlet filter on differential and on hours; shorter interval in a dusty room."
      },
      "r_airend": {
        "type": "result",
        "cls": "escalate",
        "label": "airend bearings",
        "text": "A rumble that rises with load and a temperature that creeps up with clean cooling is the airend.",
        "sub": "Oil analysis for iron and copper. Bearing noise with the screwdriver at the airend housing. Plan an airend exchange; a seized airend is rotor contact and a much bigger bill. Check what shortened its life: oil condition, temperature history, contamination.",
        "prevent": "Oil analysis on the interval. Discharge temperature trended. Airend hours against the manufacturer life."
      },
      "press1": {
        "q": "Is the compressor loading (inlet valve open, motor amps at load)?",
        "options": [
          {
            "label": "Not loading",
            "next": "r_noload"
          },
          {
            "label": "Loading, output low",
            "next": "press2"
          },
          {
            "label": "Loading and output normal; the plant is using it all",
            "next": "r_demand"
          }
        ]
      },
      "press2": {
        "q": "Type?",
        "options": [
          {
            "label": "Reciprocating",
            "next": "r_recip_valves"
          },
          {
            "label": "Screw or vane",
            "next": "r_screw_output"
          }
        ]
      },
      "r_noload": {
        "type": "result",
        "cls": "action",
        "label": "not loading: inlet valve, control signal, or controller",
        "text": "The airend is turning but the inlet is closed.",
        "sub": "Inlet valve: the solenoid or pilot that opens it, the valve itself sticking, the control air line. The controller: is it calling for load (pressure set points, a remote signal, a sequencer holding it off). Reciprocating: unloader stuck.",
        "prevent": "Inlet valve and unloader on the PM. Control settings recorded."
      },
      "r_recip_valves": {
        "type": "result",
        "cls": "action",
        "label": "reciprocating: valves or rings",
        "text": "Low output on a piston compressor is leaking valves or worn rings.",
        "sub": "Discharge valve leaking: the cylinder head is hot and output is low. Inlet valve leaking: puffing at the inlet filter. Rings: blow-by at the crankcase breather, oil carryover. Replace valve plates as sets; rings and cylinder inspection on hours.",
        "prevent": "Valves on the service interval. Output test (pump-up time on the receiver) on the PM."
      },
      "r_screw_output": {
        "type": "result",
        "cls": "action",
        "label": "screw or vane: filter, valve, or wear",
        "text": "Low output on a screw with the inlet open is a restriction, a minimum pressure valve fault, or rotor wear.",
        "sub": "Inlet filter differential. Separator differential (a loaded separator is a restriction on the outlet). Minimum pressure valve stuck partly closed. Oil-free screw: rotor coating wear. Vane: vane wear. Output test against the nameplate.",
        "prevent": "Differentials on the PM. Output tested annually."
      },
      "r_demand": {
        "type": "result",
        "cls": "fix",
        "label": "demand exceeds supply: leaks first",
        "text": "The compressor is doing its job; the plant is taking it all.",
        "sub": "Ultrasonic leak survey; 20 to 30 percent of output on an unmanaged system is leaks. Then the pressure set point (every bar costs 7 percent), then genuine demand growth. Pneumatics module.",
        "prevent": "Leak survey quarterly. Loaded hours trended."
      },
      "oil1": {
        "q": "How much, and where?",
        "options": [
          {
            "label": "Oil at the air outlet, level dropping fast",
            "next": "r_separator"
          },
          {
            "label": "Oil at low plant pressure or on startup",
            "next": "r_mpv"
          },
          {
            "label": "Reciprocating unit, oil at the outlet",
            "next": "r_recip_valves"
          }
        ]
      },
      "r_separator": {
        "type": "result",
        "cls": "action",
        "label": "separator element or scavenge line",
        "text": "Oil is getting past the separator.",
        "sub": "Separator element loaded, collapsed, or bypassed (a torn element, a missing gasket). The scavenge (oil return) line from the separator to the airend blocked, so the separated oil pools and is carried over. Oil level too high. Wrong oil foaming.",
        "prevent": "Separator on differential and on hours. Scavenge line orifice cleaned on the PM."
      },
      "r_mpv": {
        "type": "result",
        "cls": "fix",
        "label": "minimum pressure valve",
        "text": "The separator needs pressure to work; below the minimum, oil carries over.",
        "sub": "Minimum pressure valve set point and condition. A valve that has failed open lets the separator tank run at plant pressure, which is fine at 7 bar and not at 3 bar during a high demand event.",
        "prevent": "Minimum pressure valve checked on the PM."
      },
      "r_controls": {
        "type": "result",
        "cls": "fix",
        "label": "control settings",
        "text": "Short-cycling wears the compressor; running unloaded wastes power.",
        "sub": "Pressure band 0.7 to 1 bar. Receiver sized for the demand. Auto-dual timer set to stop after a sensible unloaded period. Sequencer set up so units do not fight. Loaded hours ratio: below 40 percent, the unit is oversized or a smaller trim unit is needed; a VFD unit as the trim is the efficient answer.",
        "prevent": "Loaded and total hours logged on the PM. Set points recorded and locked."
      },
      "r_water": {
        "type": "result",
        "cls": "action",
        "label": "water: aftercooler, drains, or dryer",
        "text": "Water in the plant is water that was not removed at the compressor.",
        "sub": "Aftercooler outlet temperature (should be within about 10°C of ambient); a hot aftercooler passes vapour. Drains on the moisture separator, receiver, and dryer: test each. Dryer dewpoint. Pneumatics module Air Quality.",
        "prevent": "Auto drains tested on the PM. Aftercooler cleaned with the oil cooler."
      },
      "noise1": {
        "q": "What kind?",
        "options": [
          {
            "label": "Rumble rising with load",
            "next": "r_airend"
          },
          {
            "label": "Belt squeal",
            "next": "r_belt"
          },
          {
            "label": "Knock on a reciprocating unit",
            "next": "r_knock"
          },
          {
            "label": "Rattle or vibration at the frame",
            "next": "r_mounts"
          }
        ]
      },
      "r_belt": {
        "type": "result",
        "cls": "fix",
        "label": "belt slip",
        "text": "Tension, sheave wear, or an overloaded compressor.",
        "sub": "Power Transmission module. On a reciprocating unit, a belt that squeals on every start is a unit starting loaded (unloader not working) or a belt at the low end of tension.",
        "prevent": "Tension by gauge; unloader function on the PM."
      },
      "r_knock": {
        "type": "result",
        "cls": "escalate",
        "label": "reciprocating knock",
        "text": "A knock is a valve plate broken, a piston contacting the head, or a bearing.",
        "sub": "Stop it. Valves first (a broken plate rattles); then piston clearance (a loose piston pin or a worn wrist pin bushing); then crank and rod bearings. Crankcase oil for metal.",
        "prevent": "Valves on interval; crankcase oil on hours and inspected for metal."
      },
      "r_mounts": {
        "type": "result",
        "cls": "fix",
        "label": "mounts and piping",
        "text": "Compressors sit on isolation mounts and the piping is connected with flexible connectors for a reason.",
        "sub": "Mounts perished or loose, a flex connector replaced with rigid pipe, a discharge line touching the structure. Reciprocating pulsation cracks rigid fittings.",
        "prevent": "Mounts and flex connectors on the PM."
      },
      "r_oilcond": {
        "type": "result",
        "cls": "action",
        "label": "oil condition",
        "text": "Milky oil is water (thermostatic valve stuck open, a water-cooled cooler leaking, or the compressor running too cold to boil the moisture off). Dark oil is oxidation (too hot, too old, or the wrong oil).",
        "sub": "Milky: thermostatic valve, cooler pressure test, and an oil change. Dark: temperature history, oil hours, and the oil grade against the manual. Oil analysis if it keeps happening.",
        "prevent": "Oil on hours and on analysis. Operating temperature in the design window."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "Compressed air costs roughly how much more than electricity per unit of energy at the tool?",
        [
          "The same",
          "2 times",
          "7 to 8 times",
          "20 times"
        ],
        2,
        "Most of the energy in goes out as heat."
      ],
      [
        "A compressor with 30% loaded hours is?",
        [
          "Correctly sized",
          "Oversized and wasting power running unloaded",
          "Undersized",
          "Efficient"
        ],
        1,
        "Unloaded still draws 25 to 40% of full power."
      ]
    ],
    "types": [
      [
        "Small reciprocating compressors are typically rated for?",
        [
          "100% duty",
          "50 to 60% duty cycle",
          "10% duty",
          "Continuous"
        ],
        1,
        "Run continuously they overheat and carbon the valves."
      ],
      [
        "Which type is the industrial standard for continuous duty?",
        [
          "Reciprocating",
          "Oil-flooded rotary screw",
          "Scroll",
          "Vane"
        ],
        1,
        "5 to 500 kW, 100% duty."
      ],
      [
        "The failure mode of a centrifugal compressor is?",
        [
          "Valves",
          "Surge",
          "Vanes",
          "Rings"
        ],
        1,
        "The surge controller and blow-off valve are the protection."
      ]
    ],
    "recip": [
      [
        "A hot cylinder head with low output on a piston compressor?",
        [
          "Inlet filter",
          "Leaking discharge valve",
          "Low oil",
          "Belt slip"
        ],
        1,
        "Compressed air leaks back into the cylinder."
      ],
      [
        "Discharge temperature limit on a lubricated reciprocating unit matters because?",
        [
          "Efficiency",
          "Above it the oil carbonises and a discharge fire becomes possible",
          "Noise",
          "It does not"
        ],
        1,
        "A fire limit, not just a wear limit."
      ]
    ],
    "screw": [
      [
        "Most common screw compressor fault?",
        [
          "Airend",
          "Dirty cooler and a temperature trip",
          "Rotor wear",
          "Wrong oil"
        ],
        1,
        "Blow it out from the clean side."
      ],
      [
        "The minimum pressure valve does what?",
        [
          "Limits maximum pressure",
          "Holds the separator tank at minimum pressure so the separator works, and checks flow back",
          "Unloads the compressor",
          "Drains condensate"
        ],
        1,
        "Failed open: oil carryover at low plant pressure."
      ],
      [
        "Thermostatic valve stuck open?",
        [
          "Oil runs hot",
          "Oil runs cold and emulsifies (milky oil)",
          "Nothing",
          "Trip"
        ],
        1,
        "It bypasses the cooler until the oil is warm."
      ],
      [
        "A separator element is replaced on?",
        [
          "Colour",
          "Differential pressure or hours, whichever first",
          "Never",
          "Oil level"
        ],
        1,
        "A collapsed separator sends oil down the line."
      ]
    ],
    "controls": [
      [
        "Every extra bar of discharge pressure costs about?",
        [
          "1% power",
          "7% power",
          "20% power",
          "Nothing"
        ],
        1,
        "And raises the leak rate."
      ],
      [
        "Typical load-unload pressure band?",
        [
          "0.1 bar",
          "0.7 to 1 bar",
          "3 bar",
          "5 bar"
        ],
        1,
        "Too narrow short-cycles."
      ]
    ],
    "cooling": [
      [
        "A 50 kW compressor puts how much heat into the room?",
        [
          "5 kW",
          "About 50 kW",
          "Nothing",
          "500 kW"
        ],
        1,
        "It is a 50 kW heater."
      ],
      [
        "Compressor condensate goes?",
        [
          "Down the drain",
          "Through an oil-water separator; it is a regulated waste",
          "On the floor",
          "Into the receiver"
        ],
        1,
        "Oily on lubricated units."
      ],
      [
        "The aftercooler outlet should be within about?",
        [
          "50°C of ambient",
          "10°C of ambient",
          "1°C of ambient",
          "It does not matter"
        ],
        1,
        "That is where the water drops out."
      ]
    ],
    "troubleshoot": [
      [
        "First thing to read on a compressor fault?",
        [
          "The oil",
          "The controller fault log",
          "The belts",
          "The receiver gauge"
        ],
        1,
        "The fault code is usually the diagnosis."
      ],
      [
        "Compressor loads, output is normal, plant pressure still low?",
        [
          "Airend",
          "Leaks and demand: downstream",
          "Oil",
          "Cooler"
        ],
        1,
        "Leak survey first."
      ]
    ],
    "safety": [
      [
        "The separator tank after shutdown?",
        [
          "Is at zero",
          "Holds pressure; vent it and check its own gauge before opening",
          "Is safe",
          "Drains itself"
        ],
        1,
        "The minimum pressure valve keeps it there."
      ],
      [
        "The controller stop button is an isolation. True or false?",
        [
          "True",
          "False: the disconnect is; the controller restarts on pressure",
          "True for screws",
          "True if locked"
        ],
        1,
        "A compressor starts by itself."
      ],
      [
        "The separator element grounding strap is?",
        [
          "Optional",
          "A safety component: static ignition of oil mist has burned compressors",
          "Decorative",
          "For noise"
        ],
        1,
        "Fit it every time."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box blue\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">The compressor is the most expensive utility in the plant, and the least looked at</div></div>\n      <div class=\"callout-box-body\">Compressed air costs roughly seven to eight times as much per unit of energy as electricity by the time it reaches the tool, because most of the energy in goes out as heat. The compressor room is where that bill is set. <strong>The Pneumatics module covers what happens downstream of the receiver. This module covers the machine that fills it: how each type works, what fails, how the controls decide when it runs, and why the condensate and the cooling are most of the maintenance.</strong></div>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-list-numbers\"></i> Where the energy and the failures go</div>\n      <ul class=\"info-block-tips\">\n        <li>Heat: compression heats the air (a 7 bar screw compressor discharges at 80 to 100°C before the aftercooler). Cooling that heat away is the aftercooler, the oil cooler, and the room ventilation. A dirty cooler is the first fault on most compressors.</li>\n        <li>Water: cooling the compressed air condenses the water vapour that came in with it. A 50 kW compressor in an Ontario summer produces tens of litres of condensate a day. Drains that do not drain send it down the pipe.</li>\n        <li>Oil: oil-flooded screws and lubricated reciprocating units put oil into the air; separators and filters take most of it out. Carryover, oil life, and the separator are the next faults.</li>\n        <li>Leaks and demand: the compressor runs to feed leaks. A leak survey is the highest-return job in the compressor room and it is done downstream.</li>\n        <li>Controls: a compressor that short-cycles, or that runs unloaded most of the day, is wearing out and wasting power because of a setting.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the hour meters tell the story</strong>Most compressors have a loaded hours meter and a total hours meter. The ratio is the plant's air demand as a fraction of the compressor's capacity. A compressor at 30 percent loaded hours is running unloaded most of the time (wasting 25 to 40 percent of full power doing nothing) and is oversized, or a second one is unnecessary. A compressor at 95 percent has no reserve and the next leak trips the low pressure alarm.</div></div>",
    "types": "<div class=\"bw-section-label\">Compressor types: tap a type</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectType('recip')\" id=\"tcard-recip\"><div class=\"type-card-icon\"><i class=\"ti ti-engine\"></i></div><div class=\"type-card-name\">Reciprocating (piston)</div><div class=\"type-card-sub\">Small shops, high pressure, intermittent</div></div>\n      <div class=\"type-card\" onclick=\"selectType('screwfl')\" id=\"tcard-screwfl\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-2\"></i></div><div class=\"type-card-name\">Oil-flooded rotary screw</div><div class=\"type-card-sub\">The industrial standard, continuous duty</div></div>\n      <div class=\"type-card\" onclick=\"selectType('screwdry')\" id=\"tcard-screwdry\"><div class=\"type-card-icon\"><i class=\"ti ti-droplet-off\"></i></div><div class=\"type-card-name\">Oil-free screw</div><div class=\"type-card-sub\">Food, pharma, electronics</div></div>\n      <div class=\"type-card\" onclick=\"selectType('vane')\" id=\"tcard-vane\"><div class=\"type-card-icon\"><i class=\"ti ti-aperture\"></i></div><div class=\"type-card-name\">Rotary vane</div><div class=\"type-card-sub\">Simple, quiet, smaller sizes</div></div>\n      <div class=\"type-card\" onclick=\"selectType('scroll')\" id=\"tcard-scroll\"><div class=\"type-card-icon\"><i class=\"ti ti-spiral\"></i></div><div class=\"type-card-name\">Scroll</div><div class=\"type-card-sub\">Oil-free, small, quiet</div></div>\n      <div class=\"type-card\" onclick=\"selectType('centrif')\" id=\"tcard-centrif\"><div class=\"type-card-icon\"><i class=\"ti ti-wind\"></i></div><div class=\"type-card-name\">Centrifugal</div><div class=\"type-add\"></div><div class=\"type-card-sub\">Large plants, oil-free, surge control</div></div>\n    </div>\n    <div id=\"type-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a type above</div></div>",
    "recip": "<div class=\"bw-section-label\">Reciprocating compressors: valves, rings, and heat</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">A piston in a cylinder with an inlet valve and a discharge valve, single stage to about 8 bar and two stage (with an intercooler between) above that. Single acting on small units, double acting (compressing on both strokes, with a crosshead and packing) on large industrial ones. Lubricated (oil in the crankcase, splash or pump fed, some reaching the cylinder) or oil-free (PTFE rings, no oil in the cylinder). Duty cycle matters: most small reciprocating units are rated for 50 to 60 percent duty and overheat if run continuously.</div>\n      <ul class=\"info-block-tips\">\n        <li>Valves: thin plates or reeds that open and close every stroke. The wear item. A leaking discharge valve lets compressed air back into the cylinder (hot cylinder head, low output, the compressor runs longer). A leaking inlet valve blows back through the filter (a puffing at the inlet). Valve plates are replaced as sets on an interval or on output.</li>\n        <li>Rings and cylinder: worn rings show as oil carryover (lubricated units), low output, and blow-by into the crankcase (pressure at the crankcase breather). Oil-free PTFE rings wear on a schedule and are replaced before they are gone.</li>\n        <li>Heat: fins on the cylinder and head, a flywheel fan, an intercooler between stages. A dirty cylinder or a blocked intercooler runs hot, and the discharge temperature limit (often around 200°C on lubricated units) is the point where the oil carbonises on the valves and the risk of a fire in the discharge line begins.</li>\n        <li>Crankcase oil: level, and the grade the manufacturer specifies (a compressor oil, not an engine oil, because of the carbon and the discharge temperature). Change on hours.</li>\n        <li>Unloaders and pressure switch: on a start-stop unit the pressure switch cycles the motor; on a continuous-run unit the unloader holds the inlet valves open so the compressor turns without compressing. A stuck unloader either never loads (no air) or never unloads (short-cycling and heat).</li>\n        <li>Belts and pulley: the flywheel is the driven sheave; Power Transmission rules. A slipping belt on a reciprocating compressor is the usual squeal.</li>\n        <li>Pulsation: reciprocating discharge is pulsed; the receiver and the discharge line must handle it, and fatigue cracks at fittings on the discharge line are a known failure.</li>\n      </ul>\n    </div>",
    "screw": "<div class=\"bw-section-label\">Oil-flooded rotary screw: the airend and the oil circuit</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">Two meshing helical rotors (male and female) in a housing compress the air continuously as it moves along the rotors. Oil injected into the compression chamber seals the clearances, lubricates the rotors, and carries away most of the heat, so the discharge is a hot mist of air and oil at about 80 to 100°C. The oil is separated (a separator tank and a coalescing separator element), cooled (oil cooler), filtered, and injected again. The airend is a precision assembly and is rebuilt or exchanged, not repaired in the field. Everything else is the oil circuit and the controls.</div>\n      <ul class=\"info-block-tips\">\n        <li>Inlet valve: opens to load the compressor and closes to unload it (the airend then runs against a near vacuum, drawing little power). A sticking inlet valve is a compressor that will not load or will not unload.</li>\n        <li>Separator element: the coalescing filter that takes the oil out of the air. Differential pressure across it rises as it loads; a high differential is a power penalty and a collapse risk. Replaced on differential or on hours, whichever first. A collapsed or bypassed separator sends oil down the air line.</li>\n        <li>Minimum pressure valve: holds the separator tank at a minimum pressure (about 4 bar) so the separator works and the oil circulates, and acts as a check valve to the plant. A failed minimum pressure valve gives oil carryover at low plant pressure and lets plant air back into the compressor on shutdown.</li>\n        <li>Thermostatic (oil temperature control) valve: bypasses the oil cooler until the oil is warm, so water vapour does not condense into the oil. Stuck open: oil runs cold and emulsifies (milky oil). Stuck closed: oil runs hot and the compressor trips on discharge temperature.</li>\n        <li>Oil cooler and aftercooler: usually one air-cooled core with two sections and one fan. The single most common screw compressor fault is a dirty cooler and a high temperature trip. Blow out (from the clean side) on the PM, and check the fan.</li>\n        <li>Oil: the manufacturer's compressor oil (mineral, or synthetic PAO or ester for longer life), changed on hours and on analysis. Oil life is cut in half for every 10°C above the design operating temperature. Never mix types.</li>\n        <li>Oil filter and inlet air filter: on the PM, on differential. A blocked inlet filter pulls the airend into vacuum, raises the pressure ratio, and heats everything.</li>\n        <li>Airend bearings: the airend's life is its bearings, typically 30,000 to 50,000 hours. Bearing noise (rumble that rises with load) and oil analysis (iron) are the warnings. A seized airend is a rotor contact and an exchange unit.</li>\n        <li>Discharge temperature trip (typically 105 to 110°C) is the protection for everything: oil, bearings, and separator. It trips for a reason: cooler, thermostatic valve, oil level, low oil flow, ambient too hot, or the inlet filter.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the temperature trip is a cooler until proven otherwise</strong>A screw compressor tripping on high discharge temperature on a hot afternoon has a dirty cooler nine times out of ten. Lock out, let it cool, blow the cooler out from the clean side with the fan removed or shielded, check the fan turns and the ventilation into the room is not blocked, and restart. The tenth time it is the thermostatic valve or the oil level.</div></div>",
    "controls": "<div class=\"bw-section-label\">Controls: how the compressor decides to run</div>\n    <table class=\"ref-table\">\n      <tr><th>Control</th><th>How it works</th><th>Efficiency</th><th>Watch for</th></tr>\n      <tr><td>Start-stop</td><td>Pressure switch starts the motor at the low set point and stops it at the high</td><td>Good if the cycles are long</td><td>Short-cycling wears the motor and starter; needs a big receiver. Small reciprocating units.</td></tr>\n      <tr><td>Load-unload</td><td>Motor runs continuously; the inlet valve opens (load) and closes (unload) on pressure</td><td>Unloaded still draws 25 to 40% of full power</td><td>A compressor that is unloaded most of the day is oversized. The standard on screws.</td></tr>\n      <tr><td>Modulation</td><td>Inlet valve throttles to match demand</td><td>Poor at part load</td><td>Runs the airend at high pressure ratio and heat at low flow.</td></tr>\n      <tr><td>Variable speed (VFD)</td><td>Motor speed follows demand</td><td>Best at part load</td><td>Efficient across the range; the VFD and motor are the electrician's; the mechanical side is the same airend.</td></tr>\n      <tr><td>Auto dual (timed unload then stop)</td><td>Unloads, then stops if demand stays low for a set time</td><td>Good</td><td>The timer setting is the difference between saving power and short-cycling.</td></tr>\n      <tr><td>Sequencer (multiple compressors)</td><td>A controller decides which units load, in what order, with a base load unit and a trim unit</td><td>Depends on the setup</td><td>A sequencer left in manual, or two units fighting on overlapping pressure bands, is the usual multi-compressor waste.</td></tr>\n    </table>\n    <ul class=\"info-block-tips\">\n      <li>Pressure band: the difference between load and unload (or start and stop) set points. Too narrow and the compressor cycles constantly. 0.7 to 1 bar is typical. The receiver size sets how long each cycle lasts.</li>\n      <li>Every bar of extra discharge pressure costs about 7 percent more power and raises the leak rate. The set point is the lowest that keeps the furthest tool at its required pressure, and that is measured at the tool.</li>\n      <li>Receiver: 5 to 10 litres per litre per second of compressor output is a starting point; more for start-stop and for large intermittent demands.</li>\n      <li>Hour meters: total, loaded, and the ratio. Log them on the PM.</li>\n    </ul>",
    "cooling": "<div class=\"bw-section-label\">Cooling and condensate: most of the maintenance</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li>Room ventilation: a compressor rejects nearly all of its motor power as heat into the room. A 50 kW compressor is a 50 kW heater. Intake air from outside or from a cool area, exhaust ducted away, and never a compressor in a closed room. High ambient is high discharge temperature is short oil life.</li>\n        <li>Air-cooled coolers: fins clean, fan turning, airflow not recirculating from the hot side back to the cold side. On the PM: blow out from the clean side, low pressure, with the fan shielded.</li>\n        <li>Water-cooled: water flow and temperature, tube fouling (delta T across the cooler), and the water side leaking into the oil (milky oil, rising level).</li>\n        <li>Aftercooler: cools the discharge air to within about 10°C of ambient so the water condenses here and drops out in the moisture separator, instead of in the plant. The single biggest determinant of how much water reaches the dryer.</li>\n        <li>Moisture separator and drain after the aftercooler, drain on the receiver, drain on the dryer: all with automatic drains (timed or level sensing, with a test button) that are tested on the PM. A drain that does not drain sends a slug of water down the line, and a drain stuck open is a compressed air leak that runs 24 hours a day.</li>\n        <li>Condensate is contaminated with oil on lubricated compressors and is a regulated waste. An oil-water separator on the condensate discharge, with its element on the PM, and the effluent tested. Down the drain is illegal in most jurisdictions.</li>\n        <li>Intercooler on two-stage units: the same as the aftercooler, between stages; a fouled intercooler raises the second stage inlet temperature and the discharge temperature.</li>\n      </ul>\n    </div>",
    "troubleshoot": "<div class=\"bw-section-label\">Compressor fault diagnosis</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology: read the controller, then the temperatures, then the differentials</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p><strong>The controller first.</strong> Modern compressors log the fault, the discharge temperature, the pressures, the hours, and the service counters. Read it before touching anything. The fault code is usually the diagnosis.</p>\n        <p><strong>Temperatures:</strong> discharge (airend outlet), oil after the cooler, aftercooler outlet, room ambient. A pattern: everything hot is the cooler or the room; oil hot and air normal is the thermostatic valve or oil flow; discharge hot with normal oil is low oil level or a restricted inlet.</p>\n        <p><strong>Differentials:</strong> inlet filter, oil filter, separator. Each has a limit and each is a power penalty before it is a fault.</p>\n        <p><strong>Then the load cycle:</strong> loaded hours ratio, cycle times, pressure band. Most compressor \"faults\" are control settings.</p>\n        <p><strong>Downstream:</strong> a compressor that cannot keep up may be fine; the plant may be leaking. Pneumatics module.</p>\n      </div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"cp-progress\" style=\"width:8%\"></div></div>\n    <div id=\"cp-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Compressor room safety</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Pressure vessels, hot oil, and a machine that starts by itself</div></div>\n      <div class=\"callout-box-body\">A compressor starts whenever the pressure drops, with no one touching it. The receiver, the separator tank, and the intercooler are pressure vessels under TSSA jurisdiction with statutory inspections. The oil is at 80 to 100°C and the discharge line is hotter. <strong>Lockout means the disconnect (not the controller's stop button), the receiver isolated and vented, and the separator tank at zero on its own gauge before a filter or the separator cover is opened.</strong></div>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <ul class=\"info-block-tips\">\n        <li>Auto restart: the controller will restart the compressor after a power interruption or on pressure. The disconnect is the isolation. Pneumatics module Safety tab for the downstream lockout.</li>\n        <li>Separator tank: it holds pressure after the compressor stops (the minimum pressure valve keeps it there). The tank has its own gauge and vent; zero on that gauge before the separator element cover or the oil filter comes off. The cover is under spring and gasket load; loosen evenly.</li>\n        <li>Relief valves: on the receiver, the separator tank, and each stage of a reciprocating unit. ASME or CSA stamped, sized for full compressor output, tested on the statutory interval, never gagged, never replaced with a smaller one.</li>\n        <li>Receiver inspection: TSSA certificate on the vessel, internal inspection on the interval, and a receiver that has been rusting from the inside because the drain never worked is a vessel that fails the inspection or fails in service.</li>\n        <li>Hot surfaces: discharge piping, the airend, the oil cooler. Infrared before touch.</li>\n        <li>Fire: carbon deposits on discharge valves and in the discharge line of a lubricated reciprocating unit can ignite at high discharge temperature. Discharge temperature limits, the right oil, and valve service intervals are fire prevention. Oil-flooded screw compressors have burned when the separator element grounding strap was missing (static ignition of oil mist): the strap is a safety component.</li>\n        <li>Noise: a compressor room is above 85 dBA. Hearing protection to enter.</li>\n        <li>Belts and flywheels: guarded, Regulation 851 sections 24 and 25. The flywheel on a reciprocating unit is stored energy at shutdown.</li>\n        <li>Condensate: oily, hot on discharge from the drains, and a regulated waste. Oil-water separator maintained.</li>\n      </ul>\n    </div>"
  },
  "title": "BuiltWright: Compressors: Module 18",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_pneumatics_v1.html#airquality\">Pneumatics: dryers, drains, and leaks</a><a href=\"builtwright_lubrication_v1.html#contam\">Lubrication: oil condition</a><a href=\"builtwright_bearing_module_v1.html#diagnose\">Airend and motor bearings</a><a href=\"builtwright_process_valves_v1.html#types\">Relief valves</a><a href=\"builtwright_fans_v1.html#types\">Blowers and the fan laws</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 18 of series &nbsp;·&nbsp; compressors</div>",
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
