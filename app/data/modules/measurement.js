BW.register("measurement", {
  "key": "measurement",
  "num": "21",
  "name": "Precision Measurement",
  "source": "builtwright_precision_measurement_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "instruments",
      "label": "Instruments",
      "active": false,
      "style": ""
    },
    {
      "id": "micrometer",
      "label": "Reading a Micrometer",
      "active": false,
      "style": ""
    },
    {
      "id": "indicators",
      "label": "Indicators",
      "active": false,
      "style": ""
    },
    {
      "id": "technique",
      "label": "Technique",
      "active": false,
      "style": ""
    },
    {
      "id": "care",
      "label": "Care and Calibration",
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
    "title": "Precision Measurement",
    "badge": "Module 21",
    "tree": {
      "progress": "pm-progress",
      "container": "pm-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectType": {
        "scope": "#panel-instruments",
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
      "caliper": {
        "icon": "ti-ruler-2",
        "name": "Calipers: vernier, dial, digital",
        "role": "Outside, inside, depth, and step in one tool, to about a few hundredths of a millimetre.",
        "body": "The general purpose tool. Outside jaws for diameters and lengths, inside jaws for bores and slots, the depth rod, and the step face. A vernier reads to 0.02 mm or 0.001 in by aligning scales; a dial or digital reads directly. Accuracy in the hand is limited by jaw squareness, measuring force, and the length of the jaws (measure close to the beam, not at the tips). Good for anything with a tolerance of a tenth of a millimetre or more. Not for fits.",
        "tips": [
          "Zero check with the jaws closed; look for light between them.",
          "Measure near the beam; the jaw tips flex and are worn.",
          "Inside jaws are offset; some calipers need an added constant on inside readings.",
          "A caliper on a fit is a guess; confirm with a micrometer."
        ]
      },
      "micrometer": {
        "icon": "ti-ruler-measure",
        "name": "Outside micrometer",
        "role": "Diameters and thicknesses to 0.01 mm (0.001 in), 0.001 mm with a vernier. The tool for fits.",
        "body": "A screw thread of known pitch moves the spindle toward a fixed anvil; the thimble reads fractions of a turn. Sold in ranges (0 to 25 mm, 25 to 50, and so on; 0 to 1 in, 1 to 2), each with a standard for zeroing except the smallest. Carbide anvils, a ratchet or friction thimble for constant force, and a lock for holding a reading. The Reading a Micrometer tab covers the scales. The technique (zero, force, temperature, squareness, three readings) is the accuracy.",
        "tips": [
          "Zero on the anvils or the standard before the job.",
          "Ratchet every time, same clicks.",
          "Hold by the frame insulator, not the frame, on fine work.",
          "Rock across a diameter to find the maximum."
        ]
      },
      "inside": {
        "icon": "ti-circle-dotted",
        "name": "Inside measurement: telescoping gauges, inside micrometers, bore gauges",
        "role": "Bores to 0.01 mm, with more technique than an outside measurement.",
        "body": "Telescoping gauges expand to the bore, lock, and are then measured with an outside micrometer; the accuracy is the feel of setting them square and the transfer. Inside micrometers read directly in the bore with extension rods. Dial bore gauges have a plunger and centralising shoes and read variation directly; set to size with a ring gauge or an outside micrometer, then swept through the bore for size, taper, and out-of-round in one pass. For bearing housings and cylinder bores, a bore gauge is the right tool.",
        "tips": [
          "Telescoping gauge: rock it through the bore to the minimum in one plane and the maximum across; lock at the true diameter; transfer with the ratchet.",
          "Bore gauge set on a ring or a micrometer at the nominal; the dial reads the deviation.",
          "Measure at three depths and two angles; a bore is a shape, not a number.",
          "Clean the bore first; a chip in the bore is a small reading."
        ]
      },
      "depth": {
        "icon": "ti-arrow-bar-down",
        "name": "Depth micrometer and depth gauge",
        "role": "Depths and steps from a reference face, to 0.01 mm.",
        "body": "A micrometer head with a base that sits on the reference surface and a rod that extends into the feature. Interchangeable rods for range. Reads backward compared to an outside micrometer (the scale increases as the rod extends), which is the common reading error. A depth gauge on a caliper does the same job to caliper accuracy.",
        "tips": [
          "The base must sit flat on a clean face; hold it down firmly.",
          "The rod must be square to the bottom of the feature.",
          "Read the scale the right way: depth micrometer sleeves are numbered in reverse.",
          "Rod length is part of the calibration; check the rod on a gauge block."
        ]
      },
      "dial": {
        "icon": "ti-gauge",
        "name": "Dial indicator (plunger type)",
        "role": "Movement along the plunger axis, 0.01 mm or 0.001 in per division, over 10 to 25 mm of travel.",
        "body": "The tool for run-out, soft foot, endplay, backlash, and rim readings in alignment. A rack and pinion turns the plunger movement into a needle. Ranges from 1 mm to 50 mm; resolution down to 0.002 mm on fine ones. Mounted on a magnetic base with an articulated arm, or on a bracket clamped to a shaft. Reads true only when the plunger is square to the surface and the mounting is rigid.",
        "tips": [
          "Square to the surface; cosine error otherwise.",
          "Pre-load into the range before zeroing.",
          "Tap the base; the needle must return to zero.",
          "Sag correction on alignment brackets."
        ]
      },
      "dti": {
        "icon": "ti-angle",
        "name": "Dial test indicator (lever type)",
        "role": "Small movements at the tip of a lever, 0.002 mm or 0.0001 in, where a plunger will not fit.",
        "body": "A lever with a ball tip pivots and drives a needle through a short range (a fraction of a millimetre). Used for bore concentricity, face run-out in tight spaces, and fine work on a surface plate. Because the tip moves in an arc, the reading is true only when the lever is nearly parallel to the surface; at an angle, the reading is reduced by the cosine and a correction applies. Some have a reversing lever for direction.",
        "tips": [
          "Lever within about 15 degrees of parallel to the surface.",
          "Short range: it runs out of travel on anything but a small movement.",
          "Cosine correction table if the angle cannot be avoided.",
          "The tip is small and the pivot is delicate; it does not survive being used as a plunger indicator."
        ]
      },
      "feeler": {
        "icon": "ti-layers-subtract",
        "name": "Feeler gauges",
        "role": "A set of blades of known thickness for gaps: soft foot, air gaps, backlash, clearances.",
        "body": "Leaves from 0.03 to 1.00 mm (0.0015 to 0.040 in), used singly or stacked. The measurement is the largest leaf or stack that enters the gap with a light, even drag. The accuracy is the feel, which is why the same person with the same drag gets the same answer and two people do not. Leaves wear thin and bend; check them against a micrometer.",
        "tips": [
          "Light drag, consistent, both ways.",
          "Stack leaves for intermediate sizes; the sum is the reading.",
          "A bent or worn leaf is a wrong reading; measure it.",
          "Clean the gap first."
        ]
      },
      "level": {
        "icon": "ti-arrows-horizontal",
        "name": "Machinist's level, straightedge, and surface plate",
        "role": "Level to 0.02 mm/m and flat to a few microns: the references for baseplates, feet, and faces.",
        "body": "A machinist's level has a ground base and a sensitive vial graduated in mm per metre; each division is a tilt, and the level must be checked by reversing it 180 degrees on the same spot (the bubble should move equally each way). A precision straightedge is a ground steel or granite edge used with feeler gauges or a light to check flatness. A surface plate is a granite slab flat to a few microns, the datum for checking straightedges, shims, feet, and parts. The Installation module uses all three.",
        "tips": [
          "180 degree reversal test on the level, every time it is picked up.",
          "Straightedge and feelers: the gap under the edge is the error.",
          "Surface plate clean, covered when not in use, and checked for flatness on an interval.",
          "A carpenter's level is not a machinist's level."
        ]
      },
      "gaugeblocks": {
        "icon": "ti-box",
        "name": "Gauge blocks and reference standards",
        "role": "Known sizes, traceable to a national standard, that the working tools are checked against.",
        "body": "Gauge blocks are hardened steel or ceramic blocks lapped to a size accurate to a fraction of a micron, in sets that can be wrung (stacked) to any dimension. Micrometer standards, ring gauges, and setting masters serve the same purpose for specific tools. A working instrument is compared to a standard; the standard is calibrated against a better one; and so on up to the national laboratory. That chain is traceability, and it is what makes a number on a record mean something.",
        "tips": [
          "Handle by the edges, wring carefully, wipe and oil after use.",
          "Never on the concrete, never near the grinder.",
          "A certified block in the toolbox checks every tool in it.",
          "Calibration certificates kept with the set."
        ]
      },
      "torque": {
        "icon": "ti-settings",
        "name": "Torque wrench",
        "role": "A measuring instrument for bolt tension by proxy. Calibrated, stored at zero, and never used to loosen.",
        "body": "Click, beam, dial, and electronic types. A click wrench is set to a value and clicks when it is reached; it must be stored with the spring relaxed (set to minimum) and calibrated on an interval, and it must be used with a smooth pull to the click, not past it. A beam wrench shows torque directly and cannot go out of calibration except by bending. Torque is a proxy for clamp load and depends on thread condition (Reference module).",
        "tips": [
          "Set to minimum for storage.",
          "Smooth pull, stop at the click; a second click is a second torque.",
          "Calibrated yearly or after a drop.",
          "Never used as a breaker bar; loosening a stuck bolt with a torque wrench ends its calibration."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is the measurement doing?",
        "hint": "Doubt the reading before you doubt the part.",
        "options": [
          {
            "label": "Readings do not repeat",
            "next": "rep1"
          },
          {
            "label": "Two instruments disagree",
            "next": "r_disagree"
          },
          {
            "label": "Reading makes no sense (bigger than it can be, alignment gets worse)",
            "next": "sense1"
          },
          {
            "label": "Indicator behaves oddly",
            "next": "ind1"
          },
          {
            "label": "Micrometer will not zero or feels wrong",
            "next": "r_mic"
          }
        ]
      },
      "rep1": {
        "q": "Same instrument, same part, same spot: how much do three readings vary?",
        "options": [
          {
            "label": "By a few resolution units",
            "next": "r_technique"
          },
          {
            "label": "By a lot, or the part is different at different spots",
            "next": "r_partshape"
          }
        ]
      },
      "r_technique": {
        "type": "result",
        "cls": "fix",
        "label": "technique: force, squareness, cleanliness",
        "text": "Small scatter is the hand, not the tool.",
        "sub": "Ratchet on the micrometer, same clicks. Rock to the maximum on a diameter. Clean the anvils and the part. Same eye position. Same feeler drag. Take the three readings again and use the average, with the spread written down.",
        "prevent": "Three readings recorded as a habit; the spread is part of the record."
      },
      "r_partshape": {
        "type": "result",
        "cls": "action",
        "label": "the part is not round, not parallel, or not clean",
        "text": "Large scatter that follows position is the part telling you its shape.",
        "sub": "Measure at two positions and two angles and write them all down: the pattern is taper, out-of-round, or a lump of dirt. A bearing seat that is 0.03 mm out of round is a bearing that will not run true, and the measurement just found the fault.",
        "prevent": "Seats and bores measured as shapes (positions and angles), not as single numbers."
      },
      "r_disagree": {
        "type": "result",
        "cls": "action",
        "label": "two instruments disagree: check both against a standard",
        "text": "One of them is wrong, and it may be the one you trust.",
        "sub": "Both on a gauge block or the micrometer standard. Zero both. Temperature of both and of the part. If both check on the standard and still disagree on the part, the technique differs (a caliper on the jaw tips versus a micrometer on the diameter) and the micrometer wins for anything under a tenth.",
        "prevent": "A gauge block in the toolbox; instruments checked before critical jobs."
      },
      "sense1": {
        "q": "Check zero, temperature, and the scale reading. Any of them off?",
        "options": [
          {
            "label": "Zero was off, or the scale was misread (half-millimetre line, 0.025 line, reverse depth scale)",
            "next": "r_misread"
          },
          {
            "label": "The part or tool is hot or cold",
            "next": "r_temp"
          },
          {
            "label": "All fine: alignment or indicator setup",
            "next": "ind1"
          }
        ]
      },
      "r_misread": {
        "type": "result",
        "cls": "fix",
        "label": "reading error",
        "text": "The commonest wrong measurement is a right tool read wrong.",
        "sub": "Metric: the 0.5 mm line. Inch: the count of 0.025 lines. Depth micrometer: the reversed scale. Vernier: parallax. Zero the tool and read it again slowly. Digital tools remove this error and keep all the others.",
        "prevent": "Read twice, the second time out loud, on anything that goes on a record."
      },
      "r_temp": {
        "type": "result",
        "cls": "fix",
        "label": "temperature",
        "text": "Steel grows about 12 µm per metre per °C. A hot shaft measures big; a cold tool on a warm part measures small.",
        "sub": "Let the part and the tool equalise, or note the temperature and correct. A bearing fit measured on a shaft straight off a heater is not a fit measurement.",
        "prevent": "Temperature written with every fit measurement."
      },
      "ind1": {
        "q": "What is the indicator doing?",
        "options": [
          {
            "label": "Needle does not return to zero after a tap",
            "next": "r_rigid"
          },
          {
            "label": "Reads low or inconsistent at an angle",
            "next": "r_cosine"
          },
          {
            "label": "Runs out of travel or reads only one direction",
            "next": "r_preload"
          },
          {
            "label": "Alignment readings do not close (top and bottom do not sum to left and right)",
            "next": "r_sag"
          }
        ]
      },
      "r_rigid": {
        "type": "result",
        "cls": "fix",
        "label": "setup not rigid",
        "text": "The indicator is reading its own mounting.",
        "sub": "Magnetic base on clean flat steel, arm locked, shortest reach. A bracket on a shaft tightened. Nothing resting on a guard or a cover. Tap it; it must come back to zero.",
        "prevent": "Tap test after every setup."
      },
      "r_cosine": {
        "type": "result",
        "cls": "fix",
        "label": "cosine error",
        "text": "A plunger not square, or a lever at an angle, reads low.",
        "sub": "Plunger square to the surface. DTI lever within 15 degrees of parallel, or apply the correction. Remount rather than correct where possible.",
        "prevent": "Square and parallel on every indicator setup."
      },
      "r_preload": {
        "type": "result",
        "cls": "fix",
        "label": "no pre-load, or wrong range",
        "text": "An indicator zeroed at the end of its travel cannot read one direction; a DTI on a large movement runs out.",
        "sub": "Pre-load a quarter to half of the travel before zeroing. Use a plunger indicator for anything over a fraction of a millimetre.",
        "prevent": "Pre-load as a habit."
      },
      "r_sag": {
        "type": "result",
        "cls": "action",
        "label": "validity check failed: sag, looseness, or axial float",
        "text": "On rim readings, top plus bottom should equal left plus right. If they do not, the setup is wrong.",
        "sub": "Bracket sag not corrected. Bracket or indicator loose. Shaft floating axially between readings (hold it against one end). Coupling hub run-out (rotate both shafts together). Reference module has the sag method and the correction math.",
        "prevent": "Validity check on every set of readings before any shim is cut."
      },
      "r_mic": {
        "type": "result",
        "cls": "action",
        "label": "micrometer condition",
        "text": "A micrometer that will not zero, feels rough, or reads differently at different points on the standard is damaged or dirty.",
        "sub": "Clean the anvils and the thread. Check the spindle for a bend (roll it). Check the anvils for flatness and parallelism on an optical flat or by closing on a small ball at several points. Adjust the zero per the manual if the tool is otherwise sound. A dropped micrometer is calibrated before it is trusted.",
        "prevent": "Stored open, in the case, away from the grinder. Calibrated on the interval and after any drop."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "One reading versus three?",
        [
          "One is enough",
          "Three that agree are a measurement; three that disagree are information",
          "Three wastes time",
          "Only the average matters"
        ],
        1,
        "The spread is as useful as the average."
      ],
      [
        "A caliper is the right tool for a bearing fit. True or false?",
        [
          "True",
          "False: a caliper is good to a few hundredths; fits are micrometer work",
          "True if digital",
          "True on small shafts"
        ],
        1,
        "Anything with a fit is a micrometer job."
      ]
    ],
    "instruments": [
      [
        "The wear items in feeler gauge use?",
        [
          "The case",
          "The leaves: they thin and bend; check them with a micrometer",
          "Nothing",
          "The handle"
        ],
        1,
        "A worn leaf is a wrong reading."
      ],
      [
        "A torque wrench is stored?",
        [
          "At the last setting",
          "At its minimum setting",
          "Fully wound",
          "Anywhere"
        ],
        1,
        "Spring relaxed, and never used to loosen."
      ],
      [
        "A dial test indicator lever should be?",
        [
          "Perpendicular to the surface",
          "Within about 15 degrees of parallel to the surface",
          "At 45 degrees",
          "Any angle"
        ],
        1,
        "Cosine error grows fast beyond that."
      ]
    ],
    "micrometer": [
      [
        "Metric micrometer: 12 whole mm visible, the half line visible, thimble at 32. Reading?",
        [
          "12.32",
          "12.82",
          "13.32",
          "12.5"
        ],
        1,
        "The half-millimetre line is the one most people miss."
      ],
      [
        "Inch micrometer: sleeve 0.300 plus 2 lines, thimble 17. Reading?",
        [
          "0.317",
          "0.367",
          "0.350",
          "0.319"
        ],
        1,
        "0.300 + 0.050 + 0.017."
      ],
      [
        "A micrometer read one sleeve line off on an inch tool is wrong by?",
        [
          "0.001 in",
          "0.025 in",
          "0.1 in",
          "0.010 in"
        ],
        1,
        "The difference between a bearing that goes on and one that does not."
      ],
      [
        "The ratchet on a micrometer is for?",
        [
          "Locking",
          "Constant measuring force, the same every time",
          "Speed",
          "Decoration"
        ],
        1,
        "Cranking by hand reads small."
      ]
    ],
    "indicators": [
      [
        "TIR means?",
        [
          "Half the needle swing",
          "The full needle swing over a revolution",
          "The average",
          "The eccentricity"
        ],
        1,
        "An eccentricity of 0.05 mm gives a TIR of 0.10 mm."
      ],
      [
        "After zeroing an indicator, tap the base and the needle moves and stays. Meaning?",
        [
          "Normal",
          "The setup is not rigid; fix it before the first reading",
          "The part is out of round",
          "The indicator is broken"
        ],
        1,
        "Every alignment that would not come in has had one of these."
      ],
      [
        "A plunger indicator zeroed at the end of its travel?",
        [
          "Reads both ways",
          "Cannot read one direction; pre-load into the range first",
          "Is more accurate",
          "Is standard"
        ],
        1,
        "A quarter to half of the travel."
      ]
    ],
    "technique": [
      [
        "Steel grows about how much per metre per degree C?",
        [
          "1 µm",
          "12 µm",
          "120 µm",
          "1 mm"
        ],
        1,
        "A 100 mm shaft at 35°C reads about 0.018 mm big."
      ],
      [
        "Standard measurement temperature?",
        [
          "0°C",
          "20°C",
          "25°C",
          "Room temperature, whatever it is"
        ],
        1,
        "Let parts and tools equalise."
      ],
      [
        "A micrometer across a diameter is rocked to find?",
        [
          "The minimum",
          "The maximum",
          "Any reading",
          "The zero"
        ],
        1,
        "Off the diameter is a chord and reads small."
      ]
    ],
    "care": [
      [
        "A dropped micrometer?",
        [
          "Is fine if it looks fine",
          "Is checked or calibrated before it is trusted",
          "Is thrown out",
          "Is used for rough work"
        ],
        1,
        "A bent spindle reads wrong and looks fine."
      ],
      [
        "Micrometers are stored with the anvils?",
        [
          "Closed tight",
          "Slightly open",
          "Removed",
          "Taped"
        ],
        1,
        "Temperature change does not stress the frame."
      ],
      [
        "An instrument found out of calibration means?",
        [
          "Nothing",
          "Every measurement since the last check is suspect",
          "It was always fine before",
          "Only today is affected"
        ],
        1,
        "That is why the interval exists."
      ]
    ],
    "troubleshoot": [
      [
        "Two instruments disagree on a part. First step?",
        [
          "Trust the expensive one",
          "Check both against a gauge block",
          "Average them",
          "Measure a third time"
        ],
        1,
        "One of them is wrong, and it may be the one you trust."
      ],
      [
        "Rim alignment readings: top plus bottom does not equal left plus right. Meaning?",
        [
          "Misalignment",
          "Sag, looseness, or axial float: the setup is wrong",
          "The coupling is worn",
          "Normal"
        ],
        1,
        "Validity check before any shim is cut."
      ]
    ],
    "safety": [
      [
        "Measuring shaft run-out is done?",
        [
          "With the machine running slowly",
          "With the shaft turned by hand, locked out",
          "At full speed",
          "From a distance"
        ],
        1,
        "Nothing is measured while it moves."
      ],
      [
        "A magnetic base near a rotating part?",
        [
          "Is fine",
          "Snaps onto steel; fingers out and away from anything that rotates",
          "Is required",
          "Does not matter"
        ],
        1,
        "Strong, and it grabs."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box blue\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Every number in this series that ends in a thousandth came from one of these tools</div></div>\n      <div class=\"callout-box-body\">Bearing fits, shaft run-out, soft foot, alignment offsets, backlash, air gaps, chain elongation, flange face flatness: the modules give the limits, and the limits mean nothing unless the measurement is right. A micrometer read wrong by one thimble line is 0.025 mm on an inch tool, which is a bearing fit gone from interference to clearance. <strong>This module is how to take a reading that is true, how to know when it is not, and how to keep the tools that way.</strong></div>\n    </div>\n    <table class=\"ref-table\">\n      <tr><th>Instrument</th><th>Resolution</th><th>Typical accuracy in the hand</th><th>Use it for</th></tr>\n      <tr><td>Steel rule</td><td>0.5 mm, 1/64 in</td><td>±0.5 mm</td><td>Layout, rough checks</td></tr>\n      <tr><td>Tape measure</td><td>1 mm, 1/16 in</td><td>±1 mm per metre, worse with hook wear</td><td>Centre distances, pulley squareness by tape</td></tr>\n      <tr><td>Vernier, dial, or digital caliper</td><td>0.02 mm, 0.001 in</td><td>±0.03 to 0.05 mm</td><td>Diameters, depths, steps, where a tenth of a millimetre is enough</td></tr>\n      <tr><td>Outside micrometer</td><td>0.01 mm, 0.0001 in with vernier</td><td>±0.005 mm with good technique</td><td>Shaft diameters, bearing seats, shim thickness, anything with a fit</td></tr>\n      <tr><td>Inside micrometer, telescoping gauge, bore gauge</td><td>0.01 mm</td><td>±0.01 mm, technique dependent</td><td>Housing bores, cylinder bores, bearing bores</td></tr>\n      <tr><td>Depth micrometer</td><td>0.01 mm</td><td>±0.01 mm</td><td>Shoulder depths, bearing seat depths, cushion clearances</td></tr>\n      <tr><td>Dial indicator (plunger)</td><td>0.01 mm, 0.001 in; 0.002 mm and 0.0001 in versions</td><td>Resolution, if set up square</td><td>Run-out, soft foot, endplay, alignment rim readings, backlash</td></tr>\n      <tr><td>Dial test indicator (lever)</td><td>0.002 mm, 0.0001 in</td><td>Resolution, with cosine error corrected</td><td>Small run-out, bore concentricity, face readings in tight spaces</td></tr>\n      <tr><td>Feeler gauge</td><td>0.03 to 1.00 mm leaves</td><td>±0.01 mm, by feel</td><td>Soft foot, air gaps, backlash, clearances</td></tr>\n      <tr><td>Machinist's level</td><td>0.02 mm/m per division</td><td>Resolution, on a clean surface</td><td>Baseplate levelling, structure</td></tr>\n      <tr><td>Straightedge and surface plate</td><td>Reference surfaces</td><td>Flatness to 0.005 mm on a good plate</td><td>Flatness of feet, faces, and shims; the datum for everything else</td></tr>\n    </table>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: measure three times, at three places</strong>One reading is a number. Three readings that agree are a measurement. Three that disagree are telling you something: the part is out of round, tapered, or dirty, or your technique is not repeating. Take a shaft diameter at two positions along the seat and at two angles at each, and write all four down. The spread is as useful as the average.</div></div>",
    "instruments": "<div class=\"bw-section-label\">Instruments: tap one</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectType('caliper')\" id=\"tcard-caliper\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-2\"></i></div><div class=\"type-card-name\">Calipers</div><div class=\"type-card-sub\">Vernier, dial, digital</div></div>\n      <div class=\"type-card\" onclick=\"selectType('micrometer')\" id=\"tcard-micrometer\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-measure\"></i></div><div class=\"type-card-name\">Outside micrometer</div><div class=\"type-card-sub\">The fit tool</div></div>\n      <div class=\"type-card\" onclick=\"selectType('inside')\" id=\"tcard-inside\"><div class=\"type-card-icon\"><i class=\"ti ti-circle-dotted\"></i></div><div class=\"type-card-name\">Inside measurement</div><div class=\"type-card-sub\">Telescoping gauges, inside mics, bore gauges</div></div>\n      <div class=\"type-card\" onclick=\"selectType('depth')\" id=\"tcard-depth\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-bar-down\"></i></div><div class=\"type-card-name\">Depth micrometer and depth gauge</div><div class=\"type-card-sub\">Steps and shoulders</div></div>\n      <div class=\"type-card\" onclick=\"selectType('dial')\" id=\"tcard-dial\"><div class=\"type-card-icon\"><i class=\"ti ti-gauge\"></i></div><div class=\"type-card-name\">Dial indicator (plunger)</div><div class=\"type-card-sub\">Run-out, soft foot, alignment</div></div>\n      <div class=\"type-card\" onclick=\"selectType('dti')\" id=\"tcard-dti\"><div class=\"type-card-icon\"><i class=\"ti ti-angle\"></i></div><div class=\"type-card-name\">Dial test indicator (lever)</div><div class=\"type-card-sub\">Small movements, tight spaces, cosine error</div></div>\n      <div class=\"type-card\" onclick=\"selectType('feeler')\" id=\"tcard-feeler\"><div class=\"type-card-icon\"><i class=\"ti ti-layers-subtract\"></i></div><div class=\"type-card-name\">Feeler gauges</div><div class=\"type-card-sub\">The gap tool</div></div>\n      <div class=\"type-card\" onclick=\"selectType('level')\" id=\"tcard-level\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-horizontal\"></i></div><div class=\"type-card-name\">Machinist's level and straightedge</div><div class=\"type-card-sub\">Flat and level to a fraction of a millimetre</div></div>\n      <div class=\"type-card\" onclick=\"selectType('gaugeblocks')\" id=\"tcard-gaugeblocks\"><div class=\"type-card-icon\"><i class=\"ti ti-box\"></i></div><div class=\"type-card-name\">Gauge blocks and standards</div><div class=\"type-card-sub\">What the tools are checked against</div></div>\n      <div class=\"type-card\" onclick=\"selectType('torque')\" id=\"tcard-torque\"><div class=\"type-card-icon\"><i class=\"ti ti-settings\"></i></div><div class=\"type-card-name\">Torque wrench</div><div class=\"type-card-sub\">A measuring instrument, not a wrench</div></div>\n    </div>\n    <div id=\"type-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select an instrument above</div></div>",
    "micrometer": "<div class=\"bw-section-label\">Reading a micrometer</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> Inch micrometer</div>\n      <div class=\"info-block-body\">The sleeve has a line every 0.025 in (the thread pitch is 40 per inch, so one turn is 0.025), numbered every 0.100. The thimble has 25 divisions, each 0.001. A vernier scale on the sleeve reads 0.0001.</div>\n      <div style=\"background:#111110; border:0.5px solid #3a3a36; border-radius:6px; padding:0.75rem 1rem; margin:0.6rem 0; font-family:'Share Tech Mono',monospace; font-size:12px; color:#EF9F27; line-height:1.9;\">Read the largest numbered line visible on the sleeve: 0.300<br>Count the unnumbered lines past it: 2 × 0.025 = 0.050<br>Read the thimble line at the index: 17 × 0.001 = 0.017<br>Vernier: the sleeve vernier line that aligns with a thimble line: 3 × 0.0001 = 0.0003<br>Total: 0.300 + 0.050 + 0.017 + 0.0003 = 0.3673 in</div>\n      <div class=\"info-block-title\" style=\"margin-top:0.8rem;\"><i class=\"ti ti-ruler-measure\"></i> Metric micrometer</div>\n      <div class=\"info-block-body\">The sleeve has a line every 0.5 mm (whole millimetres above the index line, half millimetres below). The thimble has 50 divisions, each 0.01 mm. A vernier reads 0.001 mm.</div>\n      <div style=\"background:#111110; border:0.5px solid #3a3a36; border-radius:6px; padding:0.75rem 1rem; margin:0.6rem 0; font-family:'Share Tech Mono',monospace; font-size:12px; color:#EF9F27; line-height:1.9;\">Whole millimetres visible above the line: 12<br>Half millimetre line visible below: yes, +0.50<br>Thimble at the index: 32 × 0.01 = 0.32<br>Total: 12 + 0.50 + 0.32 = 12.82 mm</div>\n      <ul class=\"info-block-tips\">\n        <li>The half-millimetre line is the one most people miss. If the thimble edge is past a lower line, add 0.5.</li>\n        <li>On an inch micrometer, the most common error is miscounting the 0.025 lines: a reading off by one line is 0.025 in (0.64 mm), which is the difference between a bearing that goes on and one that does not.</li>\n        <li>Zero check before every session: close the anvils (or close on the standard for a larger micrometer) and confirm the zero. A micrometer that reads 0.002 at zero reads 0.002 high everywhere.</li>\n        <li>The ratchet or friction thimble sets the measuring force. Use it, every time, the same number of clicks. Cranking the thimble by hand reads small.</li>\n        <li>Digital micrometers remove the reading error and keep every other error: zero, force, temperature, squareness, and dirt.</li>\n      </ul>\n    </div>",
    "indicators": "<div class=\"bw-section-label\">Indicators: what the needle is really telling you</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li>TIR (total indicator reading) is the full swing of the needle over a revolution: highest reading minus lowest. Run-out is usually quoted as TIR. An eccentricity of 0.05 mm gives a TIR of 0.10 mm; know which the specification means.</li>\n        <li>Plunger dial indicators read along the plunger axis. The plunger must be square to the surface (perpendicular for a face, radial for a diameter). Tilted, the reading is reduced by the cosine of the angle: 10 degrees off reads 1.5 percent low, 30 degrees reads 13 percent low.</li>\n        <li>Lever (dial test) indicators read at the tip of a lever and are meant to be set with the lever nearly parallel to the surface. Beyond about 15 degrees the cosine error grows fast; at 30 degrees the reading is 13 percent low, at 45 degrees 30 percent low. Some DTIs have a cosine correction table on the box.</li>\n        <li>Pre-load: set the needle about a quarter to half of its travel into the range before zeroing, so it can read both directions. A plunger indicator zeroed at the end of its travel cannot read a negative.</li>\n        <li>Bracket sag: an indicator on a bracket across a coupling sags under its own weight. Measure the sag on a straight bar (zero on top, rotate to bottom, the reading is twice the sag) and correct the bottom reading. Reference module has the method.</li>\n        <li>Rigid mounting: a magnetic base on a clean flat surface, the arm locked, the shortest reach that works. A flexing arm reads its own flex.</li>\n        <li>Rotate the part, not the indicator, for run-out; rotate both shafts together for alignment readings so coupling face run-out does not appear as misalignment.</li>\n        <li>Read the same direction round the dial every time. Backlash in the indicator mechanism is small but real; approach each reading the same way.</li>\n        <li>Endplay and float: an indicator on the shaft end, the shaft levered fully each way. Write down both end readings; the difference is the float.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: tap the base</strong>After the magnetic base is set and the indicator is zeroed, tap the base with a knuckle. If the needle moves and does not return to zero, the setup is not rigid or the base is on something that moved. Fix it before the first reading. Every alignment that would not come in has had at least one of these.</div></div>",
    "technique": "<div class=\"bw-section-label\">Technique: the part of the measurement that is not the tool</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li>Temperature: standard measurement temperature is 20°C, and steel grows about 12 µm per metre per °C. A 100 mm shaft measured at 35°C reads about 0.018 mm larger than it is at 20°C, which is most of a bearing fit. Let parts and tools reach the same temperature; measure a hot shaft and note the temperature; do not hold a micrometer frame in a bare hand for long.</li>\n        <li>Clean: the part, the anvils, the plunger tip, the surface plate. A chip, a fibre, or a film of oil is a wrong reading. Wipe the anvils on a clean cloth, wipe the part, and look at both.</li>\n        <li>Squareness: a micrometer across a diameter must be on the diameter, not a chord; rock it gently to find the maximum reading. An inside measurement must be across the true bore, not skewed; rock to find the minimum (in one plane) and the maximum (in the other).</li>\n        <li>Feel and force: micrometers by the ratchet, calipers by a light consistent touch, feeler gauges to a light drag that is the same every time. Force is part of the calibration; a different force is a different tool.</li>\n        <li>Eye position: read a vernier or a dial straight on. Parallax on a dial from the side is a division or two.</li>\n        <li>Repeat: three readings at each position. Two positions along a seat and two angles at each. Record all of them. A shaft is not a single diameter.</li>\n        <li>Write it down at the tool, with the position and the temperature, before moving to the next measurement. A number remembered for five minutes is a number that has changed.</li>\n        <li>Know the tolerance before you measure. It tells you which instrument to pick and how hard to try. A shim thickness needs a micrometer; a sheave centre distance needs a tape.</li>\n        <li>Calipers are not micrometers. A caliper is right to a few hundredths on a good day; anything with a fit is a micrometer job.</li>\n      </ul>\n    </div>",
    "care": "<div class=\"bw-section-label\">Care and calibration</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li>Storage: in the case, anvils open slightly (not closed on each other, so temperature change does not stress the frame), dry, with a light film of oil on steel surfaces, away from the welder and the grinder. Indicators with the plunger free, not compressed.</li>\n        <li>Drops: a dropped micrometer or indicator is checked before it is used again. A bent spindle or a sprung frame reads wrong and looks fine.</li>\n        <li>Zero and standard checks: micrometers on their standard or gauge blocks before each critical job. Indicators against gauge blocks or a known step. Feelers against a micrometer (leaves wear). A tape against a rule (hooks wear and bend).</li>\n        <li>Calibration: precision instruments are calibrated against traceable standards on an interval (annual is common) by a lab or with a set of certified gauge blocks in a controlled room, and the result is recorded with the instrument's serial number. An instrument found out of calibration means every measurement since the last check is suspect.</li>\n        <li>Labelling: a calibration sticker with the date and the due date. An instrument past due is not used on a fit or an alignment.</li>\n        <li>Personal tools versus plant tools: a millwright's own micrometer is still an instrument. If it is used for plant work that goes on a record, it is in the calibration program.</li>\n        <li>Suspect tools out of service: a micrometer that will not zero, an indicator that sticks, a caliper with a chipped jaw, a level that fails the 180 degree test. Tag it and get it fixed or replaced. A suspect tool in the drawer will be used.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the gauge block in the toolbox</strong>One certified gauge block (25 mm or 1 inch) in the toolbox checks the micrometer, the caliper, the depth mic, and the indicator against a known size any time there is doubt. It costs less than one wrong bearing fit. Keep it in its case and off the concrete.</div></div>",
    "troubleshoot": "<div class=\"bw-section-label\">When the measurement is the problem</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology: doubt the reading before you doubt the part</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p>A reading that does not make sense (a shaft that measures bigger than the bearing it came out of, an alignment that gets worse with each correction, a soft foot that moves around) is a measurement problem more often than a part problem. <strong>Repeat it. Change one thing. Check the zero. Check the temperature. Check the setup rigidity. Measure with a second instrument.</strong> Then believe the part.</p>\n      </div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"pm-progress\" style=\"width:8%\"></div></div>\n    <div id=\"pm-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Measuring safely</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Nothing is measured while it moves</div></div>\n      <div class=\"callout-box-body\">A shaft run-out is taken with the shaft turned by hand, locked out. A bore is measured with the machine stopped and verified. A belt tension is checked with the drive locked out. <strong>An instrument on a running part is a lever that will be snatched, and the hand holding it goes with it.</strong></div>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <ul class=\"info-block-tips\">\n        <li>Lockout and stored energy before hands and tools go on a shaft, in a bore, or into a housing. Turning a shaft by hand for readings is done with hands clear of the coupling and the keyway, and with the driven side unable to turn it back.</li>\n        <li>Sharp edges: freshly machined parts, keyways, and broken parts cut. Deburr before measuring; gloves for handling, bare hands for the measurement itself if fine feel is needed, and then only on deburred edges.</li>\n        <li>Hot parts burn and read wrong. Infrared first; let it cool to something you can hold.</li>\n        <li>Heavy parts on a surface plate: lifted with the right equipment, set down without pinching fingers under them, and blocked so they cannot roll.</li>\n        <li>Magnetic bases: strong, and they snap onto steel. Fingers out from between the base and the surface; keep them away from anything that rotates.</li>\n        <li>Solvents for cleaning parts and anvils: ventilation, gloves, no ignition sources.</li>\n        <li>Working in a housing or a bore with an inside instrument: nobody else can start or turn the machine. Your lock, your verification.</li>\n      </ul>\n    </div>"
  },
  "title": "BuiltWright: Precision Measurement: Module 21",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_reference_v1.html#fits\">Reference: the fits these tools measure</a><a href=\"builtwright_coupling_alignment_v1.html#methods\">Alignment: dial indicator methods</a><a href=\"builtwright_bearing_module_v1.html#install\">Bearing seats and bores</a><a href=\"builtwright_gearboxes_v1.html#setup\">Gearboxes: backlash and contact pattern</a><a href=\"builtwright_installation_v1.html#baseplate\">Installation: the machinist level</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 21 of series &nbsp;·&nbsp; precision measurement</div>",
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
