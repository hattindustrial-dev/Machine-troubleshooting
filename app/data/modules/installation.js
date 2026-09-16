BW.register("installation", {
  "key": "installation",
  "num": "13",
  "name": "Installation and Foundations",
  "source": "builtwright_installation_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "foundation",
      "label": "Foundations",
      "active": false,
      "style": ""
    },
    {
      "id": "anchors",
      "label": "Anchor Bolts",
      "active": false,
      "style": ""
    },
    {
      "id": "baseplate",
      "label": "Baseplates and Levelling",
      "active": false,
      "style": ""
    },
    {
      "id": "grout",
      "label": "Grouting",
      "active": false,
      "style": ""
    },
    {
      "id": "piping",
      "label": "Piping and Connections",
      "active": false,
      "style": ""
    },
    {
      "id": "checklist",
      "label": "Commissioning",
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
    "title": "Installation and Foundations",
    "badge": "Module 13",
    "tree": {
      "progress": "in-progress",
      "container": "in-tree"
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
      "selectAnchor": {
        "scope": "#panel-anchors",
        "cardClass": ".type-card",
        "prefix": "acard-",
        "data": "anchorData",
        "display": "anchor-display"
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
      "found": {
        "icon": "ti-building-bridge",
        "name": "Foundation",
        "role": "Mass to absorb the forces, stiffness to hold position, isolation to keep it out of the building",
        "body": "The block of concrete the machine sits on. Its mass damps the dynamic forces, its stiffness keeps its natural frequency away from running speed, and an isolation joint stops the vibration travelling into the floor slab. It is designed for the machine, cured before it is loaded, and prepared (rough, clean, correct elevation) before anything is set on it.",
        "tips": [
          "Three to five times machine weight for reciprocating machines; one and a half to three for rotating, as a starting point when nobody has designed it.",
          "Isolation joint around the block, full depth.",
          "Rough surface for grout bond. Oil-soaked or painted concrete does not bond.",
          "Cure before load: seven days minimum, 28 for full strength."
        ]
      },
      "anchor": {
        "icon": "ti-anchor",
        "name": "Anchor Bolts",
        "role": "Hold the plate down against the foundation after grouting. Not for levelling, not for pulling a plate flat.",
        "body": "Cast in the pour (best), sleeved so they can move and stretch (best for vibrating machines), or drilled and bonded afterward (the retrofit standard). Sized and embedded to the engineer's or manufacturer's specification. Hand tight until the grout has cured, then torqued in a pattern, then rechecked after the first week of operation.",
        "tips": [
          "Never level with them. Never tighten them on an ungrouted plate.",
          "Sleeved anchors give position adjustment and stretch length.",
          "Protect the threads through the pour and the grout.",
          "Expansion anchors are for brackets, not for machines that vibrate."
        ]
      },
      "base": {
        "icon": "ti-layout-bottombar",
        "name": "Baseplate",
        "role": "A flat, stiff, dead surface that machines bolt to. Levelled at its machined pads, then grouted so it never moves.",
        "body": "Set on levelling plates, levelled with jacking screws or shim packs to the manufacturer tolerance at the machined pads (not the flange, not the top), checked diagonally and in both directions, and held at that level while the grout is placed. After grout cure the jacking screws come out, the holes are filled, and the plate belongs to the foundation.",
        "tips": [
          "Machinist's level, 0.02 mm/m class. Not a spirit level.",
          "Level, snug anchors, re-level. Grout, cure, re-level. It moves at every step.",
          "Vent holes at every bay so air escapes ahead of the grout.",
          "Sound it after cure. Hollow means a void."
        ]
      },
      "groutc": {
        "icon": "ti-droplet-filled",
        "name": "Grout",
        "role": "Fills the gap completely and locks the plate to the block. Cementitious for most rotating machines; epoxy for reciprocating, critical, or oily service.",
        "body": "Mixed exactly to the product ratio, at the product temperature, poured from one side only so it drives the air out the vents on the far side, and cured before anything is loaded. A grouted plate is one that has grout under every pad with no voids, and that is proven by the vent sequence during the pour and by sounding the plate after cure.",
        "tips": [
          "One side only. Two sides traps air in the middle.",
          "Every vent shows grout, in order, or there is a void.",
          "Extra water in cement grout makes it weak and shrinky. Extra resin in epoxy does nothing good.",
          "Cure per the product before torque, before machines, before anything."
        ]
      },
      "machine": {
        "icon": "ti-engine",
        "name": "Machines",
        "role": "Set on the cured, grouted, torqued plate. Soft foot corrected, then aligned to the tolerance for the speed.",
        "body": "The pump, motor, gearbox, or whatever goes on last, after the grout has cured and the anchors are torqued. Each machine gets a soft foot check and correction at every foot before alignment begins, then rough alignment, then precision alignment, with thermal growth offsets if the machine runs hot. Shim stacks and readings are recorded.",
        "tips": [
          "Machines go on after grout cure. Never before.",
          "Soft foot at every foot, every machine, before alignment.",
          "Alignment tolerance by speed: Reference module.",
          "Record the shim stacks. Someone will need them."
        ]
      },
      "pipe": {
        "icon": "ti-pipe",
        "name": "Piping",
        "role": "Connected last, to the machine, with no force. Fit-up checked with the bolts loose; alignment checked before and after.",
        "body": "Piping is fitted to the machine flanges, not the other way round. The flange faces meet parallel and at the right gap with the pipe on its supports and the bolts sliding through by hand. Alignment readings taken before and after each connection prove no strain was introduced. If the pipe does not meet the flange, the pipe is corrected.",
        "tips": [
          "Fit-up with bolts loose and pipe on its hangers.",
          "Suction piping first, readings; discharge, readings. Any change over 0.05 mm is strain.",
          "Indicator on the casing while the flange bolts are tightened: movement is strain.",
          "Suction piping design (straight run, eccentric reducer flat side up) is where cavitation is prevented."
        ]
      }
    },
    "anchorData": {
      "castin": {
        "icon": "ti-anchor",
        "name": "Cast-in Anchor Bolts (J, L, headed)",
        "role": "Placed in the forms and cast into the foundation pour. The strongest and most reliable anchor.",
        "body": "A hooked, bent, or headed bolt held in position by a template and concreted in. Full embedment, full bond, and the concrete cures around it. The trade-off is that its position is fixed forever: the template must match the baseplate hole pattern exactly, and a bolt that ends up out of position after the pour means coring and an adhesive anchor next to it.",
        "tips": [
          "Template checked against the actual baseplate, not the drawing, before the pour.",
          "Projection and plumb checked after the pour, before the forms are stripped.",
          "Threads protected with caps or tape.",
          "Minimum 12 diameters embedment and 6 diameters from any edge."
        ]
      },
      "sleeved": {
        "icon": "ti-cylinder",
        "name": "Sleeved Cast-in Anchors",
        "role": "A cast-in bolt inside a sleeve or pipe, so the top can move to meet the hole and the bolt has a long free length to stretch.",
        "body": "The bolt is cast in with a sleeve (a length of pipe or a foam sleeve) around its upper portion. After the plate is set the bolt can be moved a few millimetres within the sleeve to meet the baseplate hole, and the sleeve is then filled with grout or left open depending on the design. The free length inside the sleeve is stretch length: when the bolt is torqued it elongates elastically over that length and holds tension through thermal cycling and vibration, which a short rigid anchor cannot.",
        "tips": [
          "The standard for reciprocating compressors, large pumps, and anything that vibrates.",
          "Stretch length of 10 diameters or more is the target.",
          "Sleeve kept clean during the pour; filled or sealed after setting per the design.",
          "The bolt is still not a levelling screw."
        ]
      },
      "epoxy": {
        "icon": "ti-droplet",
        "name": "Adhesive (Epoxy) Anchors",
        "role": "A hole drilled in cured concrete, cleaned, filled with adhesive, and a threaded rod set in it.",
        "body": "The retrofit anchor, and now common on new installations because it removes the template step. Capacity depends entirely on the hole being clean (blown and brushed, repeatedly, to the manufacturer procedure), the adhesive being correct for the concrete condition and temperature, and the cure time being respected. A properly installed adhesive anchor is as strong as a cast-in; an improperly cleaned hole gives a fraction of the rated load and pulls out.",
        "tips": [
          "Hole cleaning is the whole job: blow, brush, blow, brush, blow. Dust in the hole is a bond failure.",
          "Adhesive matched to the concrete: wet, dry, cracked, temperature range. Read the cartridge.",
          "Cure time before loading, per temperature. Cold concrete doubles or triples it.",
          "Embedment and edge distance per the manufacturer tables; adhesive anchors near edges need more room than cast-in."
        ]
      },
      "expansion": {
        "icon": "ti-arrows-horizontal",
        "name": "Expansion Anchors (wedge, sleeve, drop-in)",
        "role": "Mechanical anchors that grip the hole by expanding. Fast, and wrong for machines that vibrate.",
        "body": "A wedge or sleeve expands against the hole wall when the bolt is tightened. Quick to install, adequate for brackets, guards, conduit, and light static loads. Under vibration the expansion element works loose, the anchor loses preload, and it eventually pulls. On machine foundations they are a temporary fix at best.",
        "tips": [
          "Not for rotating or reciprocating machinery. Adhesive or cast-in instead.",
          "If found under a machine that will not stay tight: that is why.",
          "Fine for the guard, the light, the junction box."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is the recurring problem?",
        "hint": "These are faults that keep coming back on the same machine.",
        "options": [
          {
            "label": "Machine will not hold alignment",
            "next": "align1"
          },
          {
            "label": "Soft foot found and corrected, then found again",
            "next": "r_softfoot_recur"
          },
          {
            "label": "Vibration since installation, balancing and alignment do not fix it",
            "next": "vib1"
          },
          {
            "label": "Grout cracked, crumbling, or oil-soaked",
            "next": "r_grout_fail"
          },
          {
            "label": "Anchor bolts keep loosening",
            "next": "anchor1"
          },
          {
            "label": "Baseplate rocks or rings hollow",
            "next": "r_void"
          },
          {
            "label": "New installation, first alignment will not come in",
            "next": "new1"
          }
        ]
      },
      "align1": {
        "q": "Put an indicator on the casing. Loosen the discharge flange bolts. Does the casing move?",
        "hint": "Tighten them back before anyone starts anything.",
        "options": [
          {
            "label": "Yes, it moves",
            "next": "r_pipestrain",
            "cls": "no"
          },
          {
            "label": "No. Try the suction flange.",
            "next": "align2",
            "cls": "yes"
          }
        ]
      },
      "align2": {
        "q": "Loosen the suction flange bolts. Casing movement?",
        "options": [
          {
            "label": "Yes",
            "next": "r_pipestrain",
            "cls": "no"
          },
          {
            "label": "No",
            "next": "align3",
            "cls": "yes"
          }
        ]
      },
      "align3": {
        "q": "Sound the baseplate with a hammer over every pad, and loosen one anchor bolt at a time with the indicator on the plate.",
        "options": [
          {
            "label": "Hollow spots under the pads",
            "next": "r_void"
          },
          {
            "label": "Plate moves when an anchor is loosened",
            "next": "r_plate_strain"
          },
          {
            "label": "Solid plate, no movement",
            "next": "align4"
          }
        ]
      },
      "align4": {
        "q": "Does the machine run hot, and was thermal growth included in the alignment target?",
        "options": [
          {
            "label": "Hot service, no thermal offset used",
            "next": "r_thermal"
          },
          {
            "label": "Not hot, or offset was used",
            "next": "r_foundation_move"
          }
        ]
      },
      "r_pipestrain": {
        "type": "result",
        "cls": "action",
        "label": "pipe strain",
        "text": "The piping is applying a force to the casing through the flange. Every alignment is done against that force and the force wins.",
        "sub": "Support the pipe on its hangers, loosen the flange, and see how far it springs. That distance is the correction needed in the piping: a spool cut and rewelded, a hanger adjusted, an expansion joint reset. Then fit-up to tolerance with the bolts loose, then align, then the before-and-after pipe strain check. Piping and Connections tab.",
        "prevent": "Pipe strain check on every installation and every time piping is disturbed, with readings recorded."
      },
      "r_plate_strain": {
        "type": "result",
        "cls": "action",
        "label": "anchor bolts holding a distorted plate",
        "text": "The plate moves when an anchor is loosened: the anchors are pulling the plate down to the foundation against a void, a high spot, or a warp. The plate is spring-loaded, and it flexes under running load.",
        "sub": "The plate was tightened before or without grout, or the grout has failed. Loosen all anchors, level the plate on jacking screws or shims, and grout it properly. On an existing grouted plate: sound for voids, inject them, and check the anchor torque sequence.",
        "prevent": "Anchors hand tight until grout cure. Grout before torque, every time."
      },
      "r_thermal": {
        "type": "result",
        "cls": "fix",
        "label": "thermal growth not compensated",
        "text": "A machine aligned cold runs misaligned hot. Every shutdown and restart, it is misaligned twice.",
        "sub": "Get the thermal growth values from the manufacturer or calculate them from shaft height and temperature rise (Reference module). Align cold with the offset so the shafts are aligned at operating temperature. Confirm with a hot alignment check immediately after shutdown.",
        "prevent": "Thermal offsets recorded with the alignment for any machine over about 60°C casing temperature."
      },
      "r_foundation_move": {
        "type": "result",
        "cls": "escalate",
        "label": "foundation moving or settling",
        "text": "Piping, plate, and thermal growth cleared, and it still walks. The foundation itself is moving.",
        "sub": "Level survey of the foundation over weeks. Cracks in the block or the floor. Settlement at one corner. No isolation joint, so the slab is flexing under floor loads. Water or oil under the block. This is an engineer's problem, and the fix ranges from injecting the void under the block to a new foundation.",
        "prevent": "Foundation designed for the soil and the load. Isolation joint. Commissioning level record to compare against."
      },
      "r_softfoot_recur": {
        "type": "result",
        "cls": "action",
        "label": "soft foot that returns: the base, not the foot",
        "text": "Soft foot that was corrected and came back is a base that moves: a void under the pad, a cracked pad, grout crumbling under one corner, or the plate flexing on an anchor that has loosened.",
        "sub": "Sound the plate under that foot. Check the anchor nearest it. Look for a crack in the pad or the plate. Check the shim pack: a stack of thin shims springs and reads as soft foot again. Replace many thin shims with one thick one.",
        "prevent": "Grout without voids. Anchor torque rechecked after the first week. Shim stacks of four or fewer."
      },
      "vib1": {
        "q": "Is the vibration at one speed on a VFD, or present at all speeds?",
        "options": [
          {
            "label": "Sharp peak at one speed",
            "next": "r_resonance"
          },
          {
            "label": "All speeds, worst in vertical",
            "next": "r_base_loose"
          },
          {
            "label": "All speeds, whole floor shakes",
            "next": "r_no_isolation"
          }
        ]
      },
      "r_resonance": {
        "type": "result",
        "cls": "action",
        "label": "foundation or base resonance",
        "text": "A natural frequency of the plate, the block, or the structure is close to a forcing frequency.",
        "sub": "Bump test with the machine locked out (Vibration module). Stiffen the base (grout a hollow fabricated base, add gussets), or skip the speed on the drive. A thin fabricated steel baseplate that was never grouted is the usual culprit.",
        "prevent": "Grouted or epoxy-filled baseplates on anything variable speed. Bump test at commissioning."
      },
      "r_base_loose": {
        "type": "result",
        "cls": "action",
        "label": "looseness at the base",
        "text": "Vertical higher than horizontal with harmonics is the machine moving on its mounting.",
        "sub": "Anchor torque. Foot bolt torque. Grout condition. Voids. Cracked feet. Loosen-and-watch with an indicator at each anchor.",
        "prevent": "Torque recorded and rechecked. Grout sounded at commissioning."
      },
      "r_no_isolation": {
        "type": "result",
        "cls": "escalate",
        "label": "no isolation joint, or foundation undersized",
        "text": "The whole floor is the foundation and the whole floor vibrates.",
        "sub": "Look for an isolation joint around the block. If there is none, the block is part of the slab. A joint can be saw cut after the fact. If the block itself is too small for the machine (a reciprocating compressor on a pad meant for a pump), the mass is wrong and an engineer sizes a new one.",
        "prevent": "Foundation designed for the machine, with an isolation joint, before the pour."
      },
      "r_grout_fail": {
        "type": "result",
        "cls": "escalate",
        "label": "grout failure",
        "text": "Cracked, crumbling, or oil-soaked grout is no longer holding the plate to the block.",
        "sub": "Cementitious grout soaked in oil deteriorates and loses bond. Grout that was mixed wet shrinks and cracks. Grout that was placed without vents has voids that crack. The repair is removal to sound material and regrouting with epoxy, with the plate re-levelled first. Fix the oil leak that soaked it.",
        "prevent": "Epoxy grout in oily service. Drip trays. Mix ratio and vent sequence followed and recorded."
      },
      "anchor1": {
        "q": "What type of anchor, and what is under it?",
        "options": [
          {
            "label": "Expansion anchors",
            "next": "r_anchor_expansion"
          },
          {
            "label": "Cast-in or adhesive, but short and rigid",
            "next": "r_anchor_stretch"
          },
          {
            "label": "Cracked or spalled concrete around the anchor",
            "next": "r_anchor_concrete"
          }
        ]
      },
      "r_anchor_expansion": {
        "type": "result",
        "cls": "fix",
        "label": "wrong anchor type",
        "text": "Expansion anchors work loose under vibration. They were never right for this machine.",
        "sub": "Replace with adhesive anchors of the correct embedment, or core and set sleeved anchors. Do not keep retightening; the hole is being worn oversize each time.",
        "prevent": "Adhesive or cast-in anchors under machinery. Expansion anchors for brackets."
      },
      "r_anchor_stretch": {
        "type": "result",
        "cls": "action",
        "label": "no stretch length",
        "text": "A short, stiff anchor loses preload with every thermal cycle and every vibration because there is no elastic length to hold the tension.",
        "sub": "Options: replace with sleeved anchors to get free length; use a longer adhesive anchor with a sleeve over the upper portion; fit a hardened washer stack or a spring washer designed for the purpose. Torque to spec with lubricated threads and recheck on a schedule.",
        "prevent": "Sleeved anchors with 10 diameters of stretch on vibrating machinery."
      },
      "r_anchor_concrete": {
        "type": "result",
        "cls": "escalate",
        "label": "concrete failure at the anchor",
        "text": "The anchor is fine; the concrete around it is not. Edge too close, embedment too shallow, or the concrete has cracked from overload or corrosion.",
        "sub": "Chip out to sound concrete, repair with an epoxy patching mortar or a new pour, and set a new anchor with correct edge distance and embedment. If the whole block is cracking, an engineer looks at it.",
        "prevent": "Edge distance and embedment per specification at the design stage."
      },
      "r_void": {
        "type": "result",
        "cls": "action",
        "label": "voids under the baseplate",
        "text": "A hollow ring means grout did not reach that spot. The plate flexes there under load.",
        "sub": "Mark every hollow area. Drill two holes per void (one to inject, one to vent), inject epoxy grout under low pressure until it appears at the vent, cap, and cure. Re-level and retorque after. If more than about a quarter of the plate is void, remove the grout and start again.",
        "prevent": "Vent holes at every bay; pour from one side; watch every vent. Sound the plate at commissioning."
      },
      "new1": {
        "q": "Where is the run-out on a new install?",
        "options": [
          {
            "label": "Cannot get the horizontal move: motor binds on the anchors",
            "next": "r_anchor_clearance"
          },
          {
            "label": "Cannot get the vertical: not enough shim room, or too much",
            "next": "r_shim_room"
          },
          {
            "label": "Readings change every time the feet are torqued",
            "next": "r_softfoot_new"
          }
        ]
      },
      "r_anchor_clearance": {
        "type": "result",
        "cls": "fix",
        "label": "no lateral clearance at the anchor holes",
        "text": "The foot bolts are hard against the sides of the holes; the machine cannot move sideways to align.",
        "sub": "Foot holes need 2 to 3 mm of clearance around the bolt. Enlarge the holes in the machine feet (not the baseplate) or reposition the baseplate mounting studs. Do not bend a bolt to make it fit.",
        "prevent": "Hole pattern and clearance checked against the machine before the plate is grouted."
      },
      "r_shim_room": {
        "type": "result",
        "cls": "fix",
        "label": "wrong shaft height allowance",
        "text": "One machine sits too high or too low relative to the other for the shim range.",
        "sub": "Standard practice is 3 mm (1/8 in) of shim under the movable machine at the start, so there is room to go up or down. Too little: nothing to take out. Too much: a tall spring stack. If the difference is more than shims can fix, the pads are machined or a spacer plate is added.",
        "prevent": "Shaft height difference checked at the plate design and again before grout."
      },
      "r_softfoot_new": {
        "type": "result",
        "cls": "fix",
        "label": "soft foot on a new machine",
        "text": "Readings that change when the feet are torqued is the definition of soft foot.",
        "sub": "Loosen all four, indicate each foot while tightening and loosening one at a time, shim the soft one. Check the pad for a burr or paint under the foot. Check the foot for a bent flange. Then align. Couplings and Alignment module.",
        "prevent": "Soft foot before alignment, no exceptions."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "When are machines set on the baseplate?",
        [
          "Before grouting so the plate can be levelled under load",
          "After the grout has cured",
          "During the pour",
          "Any time"
        ],
        1,
        "Grout shrinks and the plate moves while curing; machines and alignment come after."
      ],
      [
        "Piping is connected?",
        [
          "First, so the pump can be aligned to it",
          "Last, to the machine, with no force",
          "Before grout",
          "With a come-along"
        ],
        1,
        "If the flange does not meet square by hand, the pipe is fixed."
      ]
    ],
    "foundation": [
      [
        "Rule-of-thumb foundation mass for a reciprocating machine?",
        [
          "Equal to machine weight",
          "3 to 5 times machine weight",
          "10 times",
          "Half"
        ],
        1,
        "Rotating machines: 1.5 to 3 times."
      ],
      [
        "What stops foundation vibration reaching the building?",
        [
          "Grout",
          "An isolation joint around the block",
          "Anchor bolts",
          "Paint"
        ],
        1,
        "Full depth, so the block does not touch the slab."
      ],
      [
        "A smooth trowelled foundation top surface is?",
        [
          "Ideal for grout",
          "A bond breaker; it should be roughened",
          "Required",
          "Faster to cure"
        ],
        1,
        "Grout bonds to rough, clean concrete."
      ]
    ],
    "anchors": [
      [
        "Anchor bolts are used to level the baseplate. True or false?",
        [
          "True",
          "False: jacking screws or shims level; anchors only hold down",
          "True on small plates",
          "True with washers"
        ],
        1,
        "Tightening anchors on an ungrouted plate distorts it."
      ],
      [
        "Which anchor type is wrong under vibrating machinery?",
        [
          "Cast-in",
          "Sleeved",
          "Adhesive",
          "Expansion (wedge)"
        ],
        3,
        "Expansion anchors work loose under vibration."
      ],
      [
        "Why sleeve an anchor bolt?",
        [
          "To keep it clean",
          "Position adjustment and stretch length to hold tension",
          "To make it shorter",
          "It is not necessary"
        ],
        1,
        "Ten diameters of free length is the target."
      ],
      [
        "The most important step in an adhesive anchor installation?",
        [
          "Torque",
          "Cleaning the hole: blow, brush, repeat",
          "Choosing the colour",
          "Speed"
        ],
        1,
        "Dust in the hole is a bond failure."
      ]
    ],
    "baseplate": [
      [
        "Where is the baseplate levelled?",
        [
          "At the flange",
          "At the machined mounting pads",
          "At the top of the plate",
          "At the anchor bolts"
        ],
        1,
        "The pads are the only surfaces that matter."
      ],
      [
        "Typical levelling tolerance for pump baseplates under API 686 practice?",
        [
          "2 mm per metre",
          "0.2 mm per metre",
          "5 mm per metre",
          "Level by eye"
        ],
        1,
        "That is a machinist's level, not a spirit level."
      ],
      [
        "Turning a precision level 180 degrees and comparing readings tells you?",
        [
          "Nothing",
          "Whether the level itself is accurate",
          "The temperature",
          "The plate flatness"
        ],
        1,
        "Average of the two readings is the true tilt if they differ."
      ]
    ],
    "grout": [
      [
        "Grout is poured from?",
        [
          "Both sides at once",
          "One side only, so air exits the vents on the far side",
          "The middle",
          "The vent holes"
        ],
        1,
        "Two sides traps air in the middle."
      ],
      [
        "Proof there is no void under a pad?",
        [
          "The bag said non-shrink",
          "Grout appears at every vent in sequence, and the plate sounds solid after cure",
          "The plate is level",
          "The grout is dry"
        ],
        1,
        "Sound it with a hammer; hollow means a void."
      ],
      [
        "Extra water in cementitious grout?",
        [
          "Improves flow safely",
          "Makes it weak and shrinky",
          "Speeds cure",
          "Is required"
        ],
        1,
        "Mix exactly to the ratio."
      ],
      [
        "Which grout for oily service or a reciprocating compressor?",
        [
          "Cementitious",
          "Epoxy",
          "Sand and cement",
          "Either"
        ],
        1,
        "Epoxy resists oil and handles vibration."
      ]
    ],
    "piping": [
      [
        "Maximum flange face parallel offset before bolting?",
        [
          "6 mm",
          "1.5 mm (1/16 in)",
          "10 mm",
          "Any, the bolts pull it in"
        ],
        1,
        "Bolts should pass through by hand."
      ],
      [
        "Alignment change when the piping is connected should be under?",
        [
          "0.5 mm",
          "0.05 mm (0.002 in)",
          "2 mm",
          "It does not matter"
        ],
        1,
        "Take readings before and after each connection."
      ],
      [
        "An eccentric reducer on a pump suction is installed?",
        [
          "Flat side down",
          "Flat side up so no air pocket forms",
          "Either way",
          "Not at all"
        ],
        1,
        "Air pockets at the suction cause cavitation."
      ]
    ],
    "checklist": [
      [
        "The commissioning baseline (vibration, temperature, alignment, amps) is taken?",
        [
          "When a problem appears",
          "On day one, and filed with the equipment record",
          "Never",
          "After a year"
        ],
        1,
        "It is only free on day one."
      ],
      [
        "Anchor torque is rechecked?",
        [
          "Never",
          "After the first week of operation",
          "Daily",
          "Only if loose"
        ],
        1,
        "Thermal cycling and seating relax it."
      ]
    ],
    "troubleshoot": [
      [
        "Indicator on the casing, loosen the discharge flange bolts, casing moves. Diagnosis?",
        [
          "Soft foot",
          "Pipe strain",
          "Unbalance",
          "Bad bearing"
        ],
        1,
        "No amount of shimming would have fixed it."
      ],
      [
        "Soft foot corrected and then found again months later is usually?",
        [
          "The same foot",
          "A base that moves: void, crumbling grout, or a loose anchor",
          "Normal",
          "A bent shaft"
        ],
        1,
        "Sound the plate under that foot."
      ]
    ],
    "safety": [
      [
        "A machine on jacking screws with the anchors loose is?",
        [
          "Set",
          "Not stable; snug the anchors before leaving it",
          "Safe to work under",
          "Ready to run"
        ],
        1,
        "Four points that can slip."
      ],
      [
        "Wet cement and cementitious grout on skin?",
        [
          "Harmless",
          "Caustic; burns appear hours later",
          "Only irritating if hot",
          "Fine with a rinse tomorrow"
        ],
        1,
        "Gloves, sleeves, eye protection, wash immediately."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box blue\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Three modules in this series are cleaning up after this one</div></div>\n      <div class=\"callout-box-body\">Soft foot, pipe strain, looseness, a baseplate that rocks, a machine that will not hold alignment: the alignment, bearing, and vibration modules diagnose them, and every one of them was decided on the day the machine was set on its foundation. <strong>An installation done right is invisible for twenty years. An installation done wrong is a work order every quarter for the same twenty years.</strong></div>\n    </div>\n\n    <div class=\"bw-section-label\">The sequence, and why the order is not negotiable</div>\n    <div class=\"chain-wrap\">\n      <div class=\"chain\">\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('found')\" id=\"cnode-found\"><i class=\"ti ti-building-bridge chain-icon\"></i><div class=\"chain-label\">Foundation</div><div class=\"chain-sub\">mass and stiffness</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('anchor')\" id=\"cnode-anchor\"><i class=\"ti ti-anchor chain-icon\"></i><div class=\"chain-label\">Anchors</div><div class=\"chain-sub\">hold-down</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('base')\" id=\"cnode-base\"><i class=\"ti ti-layout-bottombar chain-icon\"></i><div class=\"chain-label\">Baseplate</div><div class=\"chain-sub\">set and level</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('groutc')\" id=\"cnode-groutc\"><i class=\"ti ti-droplet-filled chain-icon\"></i><div class=\"chain-label\">Grout</div><div class=\"chain-sub\">lock it in</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('machine')\" id=\"cnode-machine\"><i class=\"ti ti-engine chain-icon\"></i><div class=\"chain-label\">Machines</div><div class=\"chain-sub\">mount and align</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectChain('pipe')\" id=\"cnode-pipe\"><i class=\"ti ti-pipe chain-icon\"></i><div class=\"chain-label\">Piping</div><div class=\"chain-sub\">last, strain free</div></div></div>\n      </div>\n    </div>\n    <div id=\"chain-display\"><div class=\"comp-placeholder\">select a step above</div></div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-list-numbers\"></i> The rules that survive every job</div>\n      <ul class=\"info-block-tips\">\n        <li>The foundation is designed, not guessed. Mass, stiffness, and separation from the building floor are engineering decisions, and for anything reciprocating or over a few hundred kilowatts they are made by an engineer.</li>\n        <li>Level and align the baseplate before grouting, at its machined surfaces, and never by jacking against the anchor bolts.</li>\n        <li>Grout fills the gap between baseplate and foundation completely. A baseplate sitting on shims with air under it is not installed.</li>\n        <li>Machines go on after the grout has cured, and are aligned then. Grout shrinks and the baseplate moves while it cures.</li>\n        <li>Piping connects last, to the machine, with no force. If the flange does not meet square by hand, the piping is fixed, not pulled in with the bolts.</li>\n        <li>Everything measured is written down: level readings, shim stacks, anchor torque, alignment, and the pipe strain check. That record is what the next millwright needs in five years.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the baseplate is not a machine part, it is a foundation part</strong>People treat a baseplate like it belongs to the pump. It does not. Once grouted it belongs to the concrete, and its only job is to be a flat, stiff, dead surface that machines can be bolted to and aligned on. Anything that lets it flex, rock, or ring (voids, a thin plate, no grout) turns every future alignment into a temporary one.</div></div>",
    "foundation": "<div class=\"bw-section-label\">Foundations: mass, stiffness, and isolation</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">A machine foundation does three things: carries the static weight, absorbs the dynamic forces without moving or resonating, and keeps those forces out of the building. Mass does most of the work. The old rules of thumb are still the starting point for anything an engineer has not designed: a foundation block of roughly three to five times the machine weight for reciprocating machinery, and one and a half to three times for rotating machinery. The block should be stiff enough that its natural frequency is well away from any running speed, and it should be separated from the building slab by an isolation joint so vibration does not travel into the structure.</div>\n      <ul class=\"info-block-tips\">\n        <li>Concrete strength and cure: standard foundations are 25 to 30 MPa concrete, cured a minimum of seven days before anchor bolts are loaded and 28 days before full load. Rushing the cure is how anchors pull out later.</li>\n        <li>Isolation joint: a compressible board or a saw cut around the foundation block, full depth, so the block does not touch the floor slab. Without it the whole floor becomes the foundation and the whole floor vibrates.</li>\n        <li>Top surface: left rough (chipped or scarified) if it is to be grouted, so the grout bonds. A smooth troweled surface is a bond breaker.</li>\n        <li>Elevation: the top of concrete is set below the underside of the baseplate by the grout thickness, typically 25 to 50 mm for cementitious grout and 25 to 100 mm for epoxy, and never less than the manufacturer's minimum.</li>\n        <li>Soil: a foundation on fill, on a slab that was not designed for it, or straddling two different soil conditions will settle unevenly and the machine will never hold alignment. That is an engineer's problem to solve before the concrete is poured.</li>\n        <li>Existing foundations: cracked, oil-soaked, or spalled concrete under an old baseplate is not a foundation. Oil-soaked concrete will not bond to grout and has lost strength. Chip it out to sound material, or replace it.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> What to check on a foundation you did not pour</div>\n      <ul class=\"info-block-tips\">\n        <li>Sound it with a hammer. A hollow ring is delamination or a void. Solid concrete thuds.</li>\n        <li>Look for cracks radiating from anchor bolts, oil staining, and the isolation joint (is there one).</li>\n        <li>Check the anchor bolt projection, spacing, and condition against the machine's foot pattern before the crane is booked.</li>\n        <li>Check the elevation against the required grout thickness. Too high means chipping; too low means a thicker grout pour than the product allows, which needs forms and a different product.</li>\n        <li>Check the top surface for laitance (weak, chalky surface layer) and for paint or curing compound. All three prevent grout bond.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the isolation joint is the thing nobody remembers</strong>A pump on a properly massive block that still shakes the whole floor almost always has no isolation joint. The block was poured as part of the slab, and the slab is now a two-tonne drumhead. Cutting the joint after the fact is possible, expensive, and dusty, and it works.</div></div>",
    "anchors": "<div class=\"bw-section-label\">Anchor bolts: hold-down, not levelling</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectAnchor('castin')\" id=\"acard-castin\"><div class=\"type-card-icon\"><i class=\"ti ti-anchor\"></i></div><div class=\"type-card-name\">Cast-in (J, L, headed)</div><div class=\"type-card-sub\">Set in the pour, the strongest</div></div>\n      <div class=\"type-card\" onclick=\"selectAnchor('sleeved')\" id=\"acard-sleeved\"><div class=\"type-card-icon\"><i class=\"ti ti-cylinder\"></i></div><div class=\"type-card-name\">Sleeved cast-in</div><div class=\"type-card-sub\">Movable in the sleeve, stretch length</div></div>\n      <div class=\"type-card\" onclick=\"selectAnchor('epoxy')\" id=\"acard-epoxy\"><div class=\"type-card-icon\"><i class=\"ti ti-droplet\"></i></div><div class=\"type-card-name\">Adhesive (epoxy) anchors</div><div class=\"type-card-sub\">Drilled and bonded, the retrofit standard</div></div>\n      <div class=\"type-card\" onclick=\"selectAnchor('expansion')\" id=\"acard-expansion\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-horizontal\"></i></div><div class=\"type-card-name\">Expansion (wedge, sleeve)</div><div class=\"type-card-sub\">Fast, and the wrong choice for vibrating machines</div></div>\n    </div>\n    <div id=\"anchor-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select an anchor type above</div></div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-ruler-2\"></i> The numbers</div>\n      <table class=\"ref-table\">\n        <tr><th>Item</th><th>Guidance</th></tr>\n        <tr><td>Embedment</td><td>Cast-in: minimum 12 bolt diameters. Adhesive: per the anchor manufacturer, commonly 8 to 12 diameters. Expansion: per manufacturer, and rarely enough for vibrating equipment</td></tr>\n        <tr><td>Edge distance</td><td>Minimum 6 diameters from a free edge of concrete, and more for adhesive anchors near a corner. An anchor too close to an edge breaks the corner out</td></tr>\n        <tr><td>Projection</td><td>Enough thread above the baseplate for the nut, a washer, and two or three threads showing. Too little and the nut bottoms; too much and it is in the way of everything</td></tr>\n        <tr><td>Stretch length</td><td>The free length of bolt that can stretch when torqued, from the top of the bonded or sleeved section to the nut. Longer is better: a sleeved anchor with 10 diameters of free stretch holds tension through thermal cycles; a short stiff anchor relaxes</td></tr>\n        <tr><td>Torque</td><td>Per the machine manufacturer or the engineer. In the absence of either, the Reference module torque table for the grade, lubricated. Torque after grout cure, in a pattern, and check again after the first week of operation</td></tr>\n        <tr><td>Hole clearance in the baseplate</td><td>Bolt diameter plus 2 to 3 mm for adjustment. Oversize holes need heavy washers or plates</td></tr>\n      </table>\n      <ul class=\"info-block-tips\">\n        <li>Anchor bolts are never used to pull the baseplate down onto shims or to bend it flat. They hold a level, grouted plate in place. Tightening anchors on an ungrouted plate distorts it.</li>\n        <li>Anchor bolts are never used as levelling screws. Levelling is done with jacking screws or shim packs on the baseplate, and the anchors are hand tight until the grout has cured.</li>\n        <li>Template: cast-in anchors are held in position by a plywood or steel template during the pour, matched to the baseplate hole pattern, and checked for projection and plumb before the concrete goes in. A bolt off by 5 mm after the pour is a day of coring.</li>\n        <li>Protect the threads during the pour and the grout with tape, caps, or grease. Concrete on threads is a nut that will not go on.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: sleeve the anchors on anything that vibrates</strong>A cast-in anchor in a sleeve, with the sleeve filled after the plate is set, gives you two things: the bolt can move a few millimetres to meet the hole, and the bolt has a long free length to stretch and stay tight. A bare J-bolt cast rigid in the block has neither, and it loosens on a reciprocating compressor every few months for the rest of its life.</div></div>",
    "baseplate": "<div class=\"bw-section-label\">Baseplates and levelling: the flat surface everything depends on</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">A baseplate is set on the foundation, levelled at its machined mounting pads, held at that level, and then grouted so it can never move again. The levelling is done with jacking screws through the baseplate flange or with shim packs under it, in either case bearing on steel plates set in the concrete, never on bare concrete and never on the anchor bolts. The target is the machined pads level and coplanar within the manufacturer's tolerance, which for pumps under API 686 practice is 0.2 mm per metre (0.002 in per foot) in both directions, and flat across all pads within about 0.1 mm. That is a machinist's level and a straightedge, not a carpenter's level.</div>\n      <ul class=\"info-block-tips\">\n        <li>Level at the machined pads, not at the top of the plate or the flange. The pads are the only surfaces that matter.</li>\n        <li>Check for a warped plate before setting it: straightedge across the pads diagonally and along each rail. A plate that arrived bent can sometimes be pulled flat during grouting and sometimes cannot; know which before the grout is mixed.</li>\n        <li>Jacking screws: at least four, near the anchors, bearing on steel levelling plates grouted or set in the concrete. Turned in small equal increments. Wax or grease the screw tips so the grout does not bond to them; they come out after cure.</li>\n        <li>Shim packs instead of screws: stainless, cut to size, thick to thin, no more than four or five per pack, on levelling plates, and left in place under the grout. Record the stack.</li>\n        <li>Level the plate to within tolerance, then check it again after the anchors are snugged (hand tight plus a quarter turn), then check it again after grout. It moves at every step.</li>\n        <li>Pre-grouted and epoxy-filled baseplates from the manufacturer arrive flat and stiff and still need to be levelled and grouted to the foundation.</li>\n        <li>Grout holes and vent holes: the plate needs a hole to pour through and holes at each corner or bay for air to escape. A plate without vents traps air and the grout has voids under the pads. Drill them if the manufacturer did not.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> Reading a machinist's level</div>\n      <ul class=\"info-block-tips\">\n        <li>A precision level is graduated in mm per metre or thou per foot (0.02 mm/m, or 0.0005 in/ft, is common). Each division is a tilt, not a distance.</li>\n        <li>Check the level's own accuracy: read it, turn it 180 degrees on the same spot, read it again. The bubble should move the same amount from centre each way. If it does not, the level is out of adjustment and the average of the two readings is the true tilt.</li>\n        <li>Clean the pad and the level base. A chip under one end reads as tilt.</li>\n        <li>Read in two directions at right angles on every pad, and diagonally across the plate. Record every reading with a sketch of where it was taken.</li>\n        <li>Temperature: a plate in the sun on one side is not level at noon and is level at midnight. Level in stable conditions or shade it.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a carpenter's level is not a tool for this</strong>A two-foot spirit level reads to maybe 1 mm per metre if you are lucky. The tolerance is five times tighter than that. A machinist's level costs a few hundred dollars and lasts a career. Borrow one before you buy one, and check it with the 180 degree test the first time you pick it up.</div></div>",
    "grout": "<div class=\"bw-section-label\">Grouting: the step that turns a baseplate into a foundation</div>\n    <table class=\"ref-table\">\n      <tr><th></th><th>Cementitious (non-shrink)</th><th>Epoxy</th></tr>\n      <tr><td>Strength</td><td>40 to 60 MPa</td><td>80 to 100+ MPa</td></tr>\n      <tr><td>Bond to steel and concrete</td><td>Moderate</td><td>Excellent; bonds the plate to the block</td></tr>\n      <tr><td>Chemical and oil resistance</td><td>Poor; oil-soaked cement grout deteriorates</td><td>Good</td></tr>\n      <tr><td>Vibration and impact</td><td>Adequate for most rotating equipment</td><td>Preferred for reciprocating, high speed, and critical machines</td></tr>\n      <tr><td>Pour thickness</td><td>25 to 100 mm typical</td><td>25 to 100 mm; deeper pours in lifts or with aggregate</td></tr>\n      <tr><td>Cure</td><td>Days; 7 to reach working strength, 28 for full</td><td>Hours to a day at room temperature; slower cold</td></tr>\n      <tr><td>Cost and handling</td><td>Cheap, forgiving, water mixed</td><td>Expensive, temperature sensitive, two or three part, exact ratio</td></tr>\n      <tr><td>Foundation prep</td><td>Roughened, clean, saturated surface dry (wet then surface dried)</td><td>Roughened, clean, bone dry</td></tr>\n    </table>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-list-check\"></i> The grout job, in order</div>\n      <ul class=\"info-block-tips\">\n        <li>Foundation surface chipped to sound, rough concrete. All dust, oil, laitance, and curing compound removed. Anchor sleeves cleaned out or filled as the design requires.</li>\n        <li>Baseplate underside clean, free of rust, paint, and oil. Epoxy grout bonds to it; anything on it is a bond breaker. Some plates are primed with an epoxy-compatible primer.</li>\n        <li>Forms built tight to the plate edge with a small chamfer, sealed at the bottom, and coated with release agent. A head box on the pour side gives the grout a head to flow under the plate.</li>\n        <li>Cementitious: foundation soaked for hours and then surface water removed just before the pour. Epoxy: foundation dry, and the plate, grout, and foundation all within the product's temperature window (often 15 to 30°C). Cold epoxy does not flow; hot epoxy sets in the bucket.</li>\n        <li>Mix exactly to the manufacturer's ratio and water or resin content. Extra water in cement grout is the most common cause of a weak, shrinking pour. Extra resin in epoxy does not make it stronger.</li>\n        <li>Pour from one side or one end only, continuously, so the grout pushes air ahead of it and out the vents on the far side. Never from two sides: that traps air in the middle. Use a strap or chain to work it under the plate if needed; never vibrate epoxy.</li>\n        <li>Watch every vent hole. Grout appearing at each one, in sequence, is the only proof there is no void. Top up as it settles.</li>\n        <li>Cure per the product. Keep cement grout damp. Keep epoxy at temperature. Do not load, torque, or bolt anything until cure.</li>\n        <li>After cure: back the jacking screws out and fill the holes. Sound the plate with a hammer over every pad; a hollow spot is a void, and it is drilled and pressure-injected with epoxy. Torque the anchors in a pattern. Re-level and record.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: sound the plate before you trust it</strong>A small hammer, tapped across every square of the baseplate after the grout has cured. A solid pad rings dead. A void rings hollow and you can hear the difference across a room. Mark the hollow spots with a paint pen, drill, and inject. Five minutes, and it is the difference between a plate that holds alignment and one that flexes a little more every year.</div></div>",
    "piping": "<div class=\"bw-section-label\">Piping and connections: last, and with no force</div>\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-hexagon callout-box-icon\"></i><div class=\"callout-box-title\">Pipe strain is a force applied to the machine through its flanges, all day, every day</div></div>\n      <div class=\"callout-box-body\">A pipe pulled into a flange with the bolts puts a permanent bending load on the pump casing, moves the shaft, loads the bearings and the seal, and changes the alignment the moment the bolts are tightened. It cannot be aligned out because it is not a misalignment; it is a distortion. <strong>The pipe meets the flange square, at the right gap, with the bolts sliding through by hand, or the pipe is wrong.</strong></div>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> Flange fit-up tolerances (general practice for rotating equipment)</div>\n      <table class=\"ref-table\">\n        <tr><th>Check</th><th>Limit</th><th>How</th></tr>\n        <tr><td>Parallel offset between flange faces</td><td>1.5 mm (1/16 in) maximum before bolting</td><td>Straightedge across both flange ODs</td></tr>\n        <tr><td>Face gap (angular)</td><td>Gasket thickness plus 1.5 mm, uniform around the circumference within 0.8 mm (1/32 in)</td><td>Feeler or taper gauge at four points</td></tr>\n        <tr><td>Bolt hole alignment</td><td>Bolts pass through by hand, no drift pin needed</td><td>Hand</td></tr>\n        <tr><td>Alignment change when connected</td><td>Under 0.05 mm (0.002 in) at the coupling</td><td>Dial indicator or laser: reading before piping, reading after</td></tr>\n      </table>\n      <ul class=\"info-block-tips\">\n        <li>Fit-up is checked with the pipe hanging on its supports and the flange bolts loose. If it only fits with a come-along on the pipe, the pipe is wrong.</li>\n        <li>Spring hangers and supports carry the pipe's weight, not the pump. The pump flange is not a pipe support. Adjust hangers so the pipe floats to the flange.</li>\n        <li>Thermal growth on hot lines: the piping designer includes loops and expansion joints. An expansion joint that has been installed compressed or extended, or with its tie rods wrong, applies force instead of absorbing it.</li>\n        <li>Check the machine flange faces for damage before fit-up. A pump flange dented in shipping will not seal and will be blamed on the gasket.</li>\n        <li>Suction piping on pumps: straight run into the suction (typically five to ten diameters), reducers eccentric with the flat on top so no air pocket forms, and no elbows immediately at the suction flange. Cavitation is built here.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-arrows-exchange\"></i> The pipe strain check</div>\n      <ul class=\"info-block-tips\">\n        <li>Align the machines with no piping connected. Record the readings.</li>\n        <li>Connect the suction piping. Take the readings again. Any change over 0.05 mm at the coupling is strain from the suction line. Fix it before going further.</li>\n        <li>Connect the discharge piping. Readings again. Same rule.</li>\n        <li>An indicator on the pump casing (magnetic base on the foundation, indicator on the casing) while the flange bolts are tightened shows casing movement directly. Any movement is strain.</li>\n        <li>Record all three sets of readings. They are the proof that the machine was installed strain-free, and the baseline for the day someone asks why it stopped holding alignment.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: loosen the flange bolts and watch</strong>On a pump that will not hold alignment, put an indicator on the casing and loosen the discharge flange bolts. If the casing moves, that is the answer, and no amount of shimming would ever have fixed it. Tighten them back up before anyone starts anything.</div></div>",
    "checklist": "<div class=\"bw-section-label\">Commissioning checklist: in order, with a signature at each line</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li>Foundation inspected: sound, clean, rough, correct elevation, isolation joint present, anchors correct.</li>\n        <li>Baseplate inspected for flatness; levelling plates set; jacking screws or shim packs in place.</li>\n        <li>Baseplate levelled at the pads to tolerance, both directions, diagonals; readings recorded with a sketch.</li>\n        <li>Anchors hand tight plus a quarter turn; level rechecked and recorded.</li>\n        <li>Grout: product, batch, mix ratio, temperature, pour direction, vent sequence witnessed; recorded.</li>\n        <li>Cure complete per product; jacking screws removed; holes filled; plate sounded for voids; voids injected.</li>\n        <li>Anchors torqued in a pattern to the specified value; recorded.</li>\n        <li>Level rechecked after grout and torque; recorded.</li>\n        <li>Machines set on the pads; soft foot checked and corrected on every machine; shim stacks recorded.</li>\n        <li>Rough alignment, then precision alignment to the tolerance for the speed, with thermal growth offsets if specified; readings recorded.</li>\n        <li>Piping fit-up checked at every flange with bolts loose; pipe strain check performed and recorded, suction then discharge.</li>\n        <li>Coupling installed per the Couplings and Alignment module: DBSE, element, torque. Guard fitted.</li>\n        <li>Lubrication: correct product, correct level, breathers clear, grease points charged to quantity.</li>\n        <li>Rotation checked uncoupled. Independent rotation check by hand.</li>\n        <li>First run uncoupled, then coupled unloaded, then loaded in steps. Vibration and temperature baseline taken at each bearing and recorded.</li>\n        <li>Alignment rechecked hot after the first run at temperature; recorded.</li>\n        <li>Anchor torque rechecked after the first week; recorded.</li>\n        <li>The whole record filed with the equipment history. This document is the machine's birth certificate.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the baseline is only free on day one</strong>Vibration, temperature, alignment, amps, and level, all recorded on the day the machine is commissioned, cost twenty minutes. The same readings taken a year later, when the machine has a problem, are worthless without the day-one numbers to compare against. The most valuable data a plant has is the data it did not bother to collect.</div></div>",
    "troubleshoot": "<div class=\"bw-section-label\">Installation faults that show up as something else</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology: the foundation is the last thing people check and the first thing to check</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p><strong>The pattern:</strong> a machine that needs realigning every few months, a soft foot that comes back, a seal or bearing that fails on the same machine repeatedly, vibration that no balancing fixes. All of these are installation faults wearing a component fault's clothes.</p>\n        <p><strong>Look down.</strong> Baseplate: sound it for voids, check for cracks at the anchors, look for rust bleeding from under the plate (water in a void). Grout: cracked, crumbling, oil-soaked, missing. Anchors: loose, corroded, pulled up, cracked concrete around them. Foundation: cracks, settlement, no isolation joint, standing oil.</p>\n        <p><strong>Loosen and watch.</strong> Indicator on the machine casing. Loosen one anchor bolt: does the plate move. Loosen a flange: does the casing move. Loosen a foot: is it soft. Each one isolates a strain that is being held in by bolt tension.</p>\n        <p><strong>Read the history.</strong> If the commissioning record exists, compare today's level, alignment, and vibration to day one. If it does not exist, today's readings become the record.</p>\n      </div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"in-progress\" style=\"width:8%\"></div></div>\n    <div id=\"in-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Installation safety: heavy things, wet concrete, and chemicals</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">The machine is at its most dangerous before it has ever run</div></div>\n      <div class=\"callout-box-body\">During installation the machine is suspended, balanced on jacking screws, sitting on an ungrouted plate, or being pulled into position with a come-along. None of those states is stable. <strong>A machine is not set down until it is on its pads with the anchors snug. Until then, nobody is under it, beside it in the direction it could fall, or reaching into a gap that could close.</strong></div>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-crane\" style=\"color:#F09595;\"></i> Rigging and setting</div>\n      <ul class=\"info-block-tips\">\n        <li>Weight from the drawing or the nameplate, never estimated. Centre of gravity from the drawing; test lift a few centimetres and adjust.</li>\n        <li>Lift by the designed lifting points. Baseplates and skids have lifting lugs sized for the assembly; individual machines have their own. Never by the shaft, the coupling, the terminal box, or the piping.</li>\n        <li>Tag lines to control rotation. Hands stay off the load while it is in the air.</li>\n        <li>A machine on jacking screws is on four points that can slip. Snug the anchors before leaving it.</li>\n        <li>Rigging in full is RigIt's territory: sling angles, hardware ratings, and the lift plan.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-flask\" style=\"color:#F09595;\"></i> Concrete, grout, and epoxy</div>\n      <ul class=\"info-block-tips\">\n        <li>Wet cement and cementitious grout are caustic. Skin contact causes burns that appear hours later. Gloves, long sleeves, eye protection, and wash immediately on contact.</li>\n        <li>Epoxy resins and hardeners are sensitisers. Repeated skin contact can cause a permanent allergy. Nitrile gloves, no bare hands, and the SDS read before the first mix.</li>\n        <li>Mixing epoxy is exothermic. A large mass in a bucket can get hot enough to smoke. Mix what will be placed in the pot life, and never leave a full bucket sitting.</li>\n        <li>Drilling and chipping concrete releases silica dust. Wet methods or dust extraction, and a respirator rated for silica. Silica exposure is regulated and the damage is permanent.</li>\n        <li>Solvents for cleaning epoxy tools and surfaces are flammable and toxic. Ventilation, no ignition sources.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-hand-off\"></i> Hands, gaps, and pits</div>\n      <ul class=\"info-block-tips\">\n        <li>The gap between a baseplate and a foundation, between a machine foot and a pad, and between a flange and its mate are all pinch points that close with the weight of the machine behind them. Hands out, use a bar to position shims.</li>\n        <li>Anchor bolt projection is a trip and impalement hazard on an open foundation. Cap them.</li>\n        <li>Foundation pits and sumps are confined spaces if they meet the definition, and are fall hazards if they do not. Guard the edge.</li>\n        <li>Temporary supports (cribbing, stands, jacks) stay in place until the permanent support (anchors, grout) is complete. Removing a jack to \"see if it holds\" is how it does not.</li>\n      </ul>\n    </div>"
  },
  "title": "BuiltWright: Installation and Foundations: Module 13",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_coupling_alignment_v1.html#procedure\">Alignment: after the grout has cured</a><a href=\"builtwright_vibration_v1.html#resonance\">Vibration: resonance and the bump test</a><a href=\"builtwright_pumps_combined_v1.html#chain\">Pumps: suction piping and NPSH</a><a href=\"builtwright_precision_measurement_v1.html#instruments\">Measurement: the machinist level</a><a href=\"builtwright_safeguarding_v1.html#psr\">Safeguarding: a new installation may need a PSR</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 13 of series &nbsp;·&nbsp; installation and foundations</div>",
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
