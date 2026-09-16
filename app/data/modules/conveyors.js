BW.register("conveyors", {
  "key": "conveyors",
  "num": "15",
  "name": "Conveyors",
  "source": "builtwright_conveyors_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "anatomy",
      "label": "Belt Conveyor Anatomy",
      "active": false,
      "style": ""
    },
    {
      "id": "tracking",
      "label": "Tracking",
      "active": false,
      "style": ""
    },
    {
      "id": "tension",
      "label": "Tension and Take-up",
      "active": false,
      "style": ""
    },
    {
      "id": "splices",
      "label": "Splices",
      "active": false,
      "style": ""
    },
    {
      "id": "damage",
      "label": "Reading Belt Damage",
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
    "title": "Conveyors",
    "badge": "Module 15",
    "tree": {
      "progress": "cv-progress",
      "container": "cv-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectType": {
        "scope": "#panel-overview",
        "cardClass": ".type-card",
        "prefix": "tcard-",
        "data": "typeData",
        "display": "type-display"
      },
      "selectDmg": {
        "scope": "#panel-damage",
        "cardClass": ".type-card",
        "prefix": "dcard-",
        "data": "dmgData",
        "display": "dmg-display"
      },
      "selectPart": {
        "scope": null,
        "cardClass": ".chain-box",
        "prefix": "cnode-",
        "data": "partData",
        "display": "part-display"
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
      "belt": {
        "icon": "ti-arrows-horizontal",
        "name": "Belt Conveyor",
        "role": "A continuous belt over pulleys and idlers. Bulk material, packages, anything that will sit on a moving surface.",
        "body": "The workhorse. A drive (head) pulley pulls the belt, a tail pulley returns it, idlers support it, a take-up tensions it, and cleaners keep the return side clean. Troughed for bulk material, flat for packages. From a few metres in a bakery to kilometres at a mine. Nearly everything in this module is about belt conveyors because nearly every tracking, slip, and belt damage call is one.",
        "tips": [
          "Tracking, tension, splices, and idler condition are the four things that go wrong.",
          "Every pulley and idler is a nip point.",
          "The belt is the expensive part; the idlers are the maintenance part."
        ]
      },
      "roller": {
        "icon": "ti-menu-2",
        "name": "Roller Conveyor",
        "role": "Rows of rollers. Gravity on a slope, or powered by belt, chain, or line shaft.",
        "body": "Packages, cartons, pallets, drums. Gravity rollers run on a decline set by the product weight and friction. Powered rollers are driven by a belt under them, a chain between sprockets on the rollers, or motorised drive rollers. Faults are roller bearings (seized rollers stop or skew product), drive belt or chain wear, and accumulation zone controls.",
        "tips": [
          "A seized roller on a gravity line is a stopped package and a pile-up. Spin every roller on the PM.",
          "Chain-driven rollers: same chain rules as the Power Transmission module.",
          "Line shaft conveyors have a drive spool and o-ring per roller; the o-rings are the wear item."
        ]
      },
      "screw": {
        "icon": "ti-ruler-2",
        "name": "Screw Conveyor",
        "role": "A rotating helical flight in a trough moves powder, granules, and sludge.",
        "body": "The screw pushes material along the trough. Simple, enclosed, and it can meter as well as convey. Hanger bearings support long screws at intermediate points and are the usual failure: they run in the product and wear. The trough is the guard, and an open trough or an open inspection port on a running screw is a fatal nip and shear point.",
        "tips": [
          "Hanger bearings inspected and replaced on condition; material selected for the product.",
          "End bearings and seals keep product out of the drive bearing.",
          "Trough covers and inspection ports interlocked or fastened; never opened on a running screw.",
          "Flight wear reduces capacity; measure flight OD against the trough on the PM."
        ]
      },
      "chain": {
        "icon": "ti-link",
        "name": "Chain, Drag, and Slat Conveyors",
        "role": "Chain-driven flights, slats, or pans for heavy, hot, or abrasive product.",
        "body": "One or two strands of chain with flights (drag), slats, or pans attached, running in a trough or on tracks. Used where a belt would not survive: hot ash, castings, heavy pallets, abrasive aggregate. Chain elongation, sprocket wear, and flight or slat damage are the maintenance items, and the Power Transmission chain rules apply.",
        "tips": [
          "Elongation measured and trended; a stretched chain jumps the sprockets and piles the flights.",
          "Take-up on the tail keeps the chain from sagging into the return track.",
          "Lubrication reaches the pin, same as any chain, and often has to survive heat and dirt."
        ]
      },
      "bucket": {
        "icon": "ti-arrow-up",
        "name": "Bucket Elevator",
        "role": "Buckets on a belt or chain lift bulk material vertically.",
        "body": "Buckets dig into material at the boot (bottom), rise inside a casing, and discharge over the head pulley. Belt or chain driven. Boot flooding, bucket damage, belt or chain tracking inside the casing, and head pulley slip are the faults. The casing is a confined, dusty space and the head section is at height.",
        "tips": [
          "Belt slip at the head is the most common failure: lagging, tension, boot overload.",
          "A backstop on the head shaft stops the loaded side running back when the drive stops.",
          "Explosion venting on elevators handling combustible dust is a safety requirement, not an option.",
          "Boot take-up sets belt tension; the boot must be kept clear of buildup."
        ]
      },
      "modular": {
        "icon": "ti-grid-dots",
        "name": "Modular Plastic Belt",
        "role": "Interlocking plastic modules on rods, driven by sprockets. Food and packaging.",
        "body": "A belt built from hinged plastic modules, driven positively by sprockets on the drive shaft, running on wear strips. No tracking adjustment: the sprockets locate it. Washable, and it can turn corners on radius belts. Faults are worn wear strips, broken rods or modules, sprocket wear, and belt elongation from wear at the hinges.",
        "tips": [
          "One sprocket on each shaft is fixed (locked) and the rest float, so the belt can expand with temperature. Locking more than one sprocket breaks the belt.",
          "Catenary sag on the return side is the take-up; there is no tensioner. The sag has a specified range.",
          "Belt pull rating and shaft deflection limits are in the manufacturer data; an overloaded modular belt tears at the hinge rods."
        ]
      }
    },
    "partData": {
      "tail": {
        "icon": "ti-circle",
        "name": "Tail Pulley",
        "role": "Turns the belt back onto the carry side. Often the take-up pulley on short conveyors.",
        "body": "Usually a plain steel drum, sometimes crowned to help centre the empty belt, sometimes a wing pulley (spokes instead of a face) to shed material that would otherwise be trapped between belt and pulley. The tail is where spillage from the loading zone collects, and it runs in the dirtiest place on the conveyor.",
        "tips": [
          "Square to the belt centreline. A skewed tail runs the belt off at the loading zone.",
          "Wing pulleys throw material but vibrate the belt; a spiral-wrapped wing is quieter.",
          "Tail bearings run in the spillage. Sealed bearings, and cleaned on the PM.",
          "Guard on the nip, both sides."
        ]
      },
      "load": {
        "icon": "ti-arrow-down",
        "name": "Loading Zone",
        "role": "Where the product lands. Impact idlers, skirtboards, and the source of most spillage and mistracking.",
        "body": "Product from a chute, a hopper, or an upstream conveyor drops onto the belt here. Impact idlers (rubber discs) or an impact bed absorb the hit. Skirtboards with rubber seals contain the product until it settles. Off-centre loading, a chute aimed wrong, material landing at a different speed than the belt, or worn skirt seals all cause spillage here and mistracking downstream.",
        "tips": [
          "Load centred on the belt, in the direction of travel, at close to belt speed. A chute that drops product sideways steers the belt every time.",
          "Skirt seals just touching the belt, not pressed into it; a skirt clamped hard wears a groove in the top cover.",
          "Impact idlers or bed under the drop point; a plain idler under a heavy drop is a broken idler and a punctured belt.",
          "Transition idlers from the flat tail pulley to full trough over the transition distance; a belt troughed too fast at the tail buckles and creases."
        ]
      },
      "idlers": {
        "icon": "ti-menu-2",
        "name": "Carry Idlers",
        "role": "Troughing idler sets support the loaded belt every metre or so. The maintenance item.",
        "body": "Three rolls (sometimes five) in a frame: a flat centre roll and two wing rolls at 20, 35, or 45 degrees, forming the trough. Each roll has two sealed bearings. Idlers fail by bearing seizure, and a seized idler is a skid that heats and grooves the belt bottom cover, steers the belt, and eventually wears through its own shell and cuts the belt. Idler spacing sets belt sag and load capacity.",
        "tips": [
          "Walk and spin. A roll that is not turning is replaced, not oiled.",
          "Training idlers (pivoting frames) help with wander but wear fast if they are correcting a structural cause.",
          "Idler frames square to the centreline and level across; a frame knocked out of square by a loader bucket steers the belt.",
          "Buildup on rolls (product stuck to them) is a cone; clean or replace."
        ]
      },
      "head": {
        "icon": "ti-circle-filled",
        "name": "Head (Drive) Pulley",
        "role": "Pulls the belt. Lagged for grip. Where slip, heat, and belt fires happen.",
        "body": "The drive pulley, at the discharge end on most conveyors, driven by a gearmotor or a shaft-mount reducer. Lagged with rubber (plain, diamond, or herringbone pattern) or ceramic tile to grip the belt. Wrap angle (how much of the pulley the belt touches) and tension set the drive capacity; a snub pulley increases wrap. Lagging wears smooth, product and water reduce friction, and the belt slips: heat, noise, and a fire risk.",
        "tips": [
          "Lagging inspected on the PM: smooth, worn, or missing sections mean slip is coming.",
          "Head pulley bearings are the heaviest loaded on the conveyor; infrared on the PM.",
          "Square to the centreline; a crowned head pulley is not used on a troughed belt.",
          "A speed switch on the head shaft catches slip before the belt burns."
        ]
      },
      "snub": {
        "icon": "ti-circle-dotted",
        "name": "Snub and Bend Pulleys",
        "role": "Increase wrap on the drive pulley, and change belt direction to the take-up and back.",
        "body": "A snub pulley immediately after the head pulley pushes the belt further around the drive, increasing the wrap angle and the drive capacity. Bend pulleys route the belt down to and up from a gravity take-up. Both run on the dirty (product) side of the belt and both are nip points. Both must be square to the belt or they steer it.",
        "tips": [
          "Snub and bend pulleys contact the top cover and collect product; cleaners before them.",
          "Small diameter bend pulleys flex the belt hard and shorten splice life; the manufacturer minimum diameter for the belt applies.",
          "Square, guarded, and their bearings on the PM."
        ]
      },
      "takeup": {
        "icon": "ti-arrows-vertical",
        "name": "Take-up",
        "role": "Sets and maintains belt tension. Screw on short belts, gravity counterweight on long ones.",
        "body": "The Tension and Take-up tab has the detail. The take-up pulley moves to remove slack and hold tension as the belt stretches. A screw take-up is set by hand and drifts; a gravity take-up holds constant tension automatically and stores that energy in a counterweight.",
        "tips": [
          "Gravity take-up: the counterweight is stored energy. Block it before any belt work.",
          "Take-up position marked and dated on the PM; the trend is belt stretch.",
          "At the end of travel: the belt needs a section cut out and respliced, or the setting was wrong."
        ]
      },
      "return": {
        "icon": "ti-arrow-back-up",
        "name": "Return Idlers and Belt Cleaners",
        "role": "Support the empty belt on the way back, and keep the carryback off it.",
        "body": "Flat return rolls every 3 metres or so carry the belt back to the tail. Belt cleaners at the head pulley (primary, a blade on the pulley face; secondary, a blade on the belt after it leaves the pulley) scrape the carryback (product stuck to the top cover) off before it reaches the return idlers. Carryback on the return side builds up on the return rolls and the tail pulley and mistracks the belt.",
        "tips": [
          "Return idlers are neglected because they are hard to see. They seize like carry idlers and cut the belt like carry idlers.",
          "Cleaner blades wear and need adjusting or replacing; a cleaner pressed too hard gouges the cover.",
          "Rubber disc return rolls shed sticky carryback better than plain rolls.",
          "A plow before the tail pulley keeps material off the tail nip."
        ]
      }
    },
    "dmgData": {
      "edge": {
        "icon": "ti-border-left",
        "name": "Frayed or worn belt edge",
        "role": "The belt is running against the structure, a skirt, a pulley flange, or a chute.",
        "body": "One edge worn, frayed, or cut back is a belt that has been mistracking long enough to rub on steel. The wear is where the belt was, not where the cause is. If both edges are worn, the belt is wandering both ways, which is usually loading, structure, or a belt that is too wide for the trough. Edge damage exposes the carcass to moisture and the belt starts to delaminate from the edge in.",
        "tips": [
          "Find the rub point and the tracking cause upstream of it (Tracking tab).",
          "Edge repair: trim and seal the edge, or the carcass wicks water.",
          "Belt too wide for the idlers or skirts set too narrow are design problems."
        ]
      },
      "topwear": {
        "icon": "ti-arrow-down",
        "name": "Top cover worn thin or grooved",
        "role": "Product abrasion, or a cleaner or skirt pressed too hard.",
        "body": "Even wear across the loaded width is abrasion from the product, and the cover was too thin or the wrong compound for it. A groove along the belt is a skirt seal or a cleaner blade clamped into the cover. A groove under the loading point is impact from product dropping from too high. Wear through to the carcass is the end of the belt.",
        "tips": [
          "Measure cover thickness on the PM at a marked spot; the rate tells you the belt life.",
          "Skirts and cleaners adjusted to touch, not to press.",
          "Reduce drop height or add an impact bed at the loading zone.",
          "Thicker top cover or a harder compound on the next belt."
        ]
      },
      "bottomwear": {
        "icon": "ti-arrow-up",
        "name": "Bottom cover worn, grooved, or heat-glazed",
        "role": "Seized idlers, drive pulley slip, or debris trapped under the belt.",
        "body": "A seized idler is a fixed skid the belt rubs over every revolution; it wears a band into the bottom cover and eventually the idler shell wears sharp and cuts through. Slip at the drive pulley heats and glazes the bottom cover over the pulley width. A rock or a bolt trapped between the belt and a pulley gouges a track down the belt.",
        "tips": [
          "Walk and spin the idlers. Replace the seized ones.",
          "Slip: lagging, tension, wrap, and a speed switch.",
          "Debris: plows and cleaners on the return side, and a look at where the debris is entering."
        ]
      },
      "cut": {
        "icon": "ti-cut",
        "name": "Cuts, gouges, and longitudinal rips",
        "role": "Something sharp got between the belt and a pulley or idler, or a tramp object came down the chute.",
        "body": "A longitudinal rip is the most expensive belt failure: a sharp object caught at the loading point or trapped at a pulley slices the belt along its length as it runs. Transverse cuts are impact from large or sharp product. Star punctures are rocks dropped onto the belt. A rip that reaches a splice takes the splice with it.",
        "tips": [
          "Rip detection systems on high-value belts stop the conveyor when the belt is cut.",
          "Tramp iron: magnets and screens upstream of the loading point.",
          "Chute liners and impact beds absorb sharp product.",
          "Repair small cuts and punctures promptly with cold repair material; a small cut wicks water into the carcass."
        ]
      },
      "cup": {
        "icon": "ti-bowl",
        "name": "Cupping and camber",
        "role": "The belt curls across its width (cupping) or bows along its length (camber).",
        "body": "Cupping: the belt edges curl up or down so the belt does not sit flat on the idlers. Caused by uneven cover wear (top worn thinner than bottom), moisture or chemical swelling of one cover, or a belt stored on a small-diameter reel for too long. A cupped belt cannot be tracked. Camber: the belt is built with or has developed a curve along its length, so it runs off in the same direction at every revolution regardless of adjustment.",
        "tips": [
          "Check a new belt for camber on the floor before it goes on: lay it out and sight the edge.",
          "A cupped belt that is also worn through is finished; a cupped new belt is a storage or manufacturing fault.",
          "A belt that runs off the same way at the same place each revolution has a belt problem (camber, splice, or local damage), not a structure problem."
        ]
      },
      "heat": {
        "icon": "ti-flame",
        "name": "Hardened, cracked, blistered, or swollen cover",
        "role": "Heat, oil, or chemical attack on the cover compound.",
        "body": "Heat hardens rubber and cracks it across the belt (in the direction of flexing over pulleys). Oil swells and softens general purpose rubber, and the cover comes away from the carcass in blisters. Chemical attack looks like either, depending on the chemical. Hot product on a general purpose belt, oily product on a non-oil-resistant belt, or a wash-down chemical the belt was not specified for.",
        "tips": [
          "Match the cover compound to the product and the environment on the next belt.",
          "Cracked covers let water into the carcass; the belt is on a timer.",
          "Heat from drive slip shows on the bottom cover at the pulley width, not across the whole belt."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is the conveyor doing?",
        "hint": "Nothing here is done on a running belt except looking and listening. Lock out and block the take-up before touching anything.",
        "options": [
          {
            "label": "Belt mistracking (running off)",
            "next": "track1"
          },
          {
            "label": "Belt slipping at the drive",
            "next": "r_slip"
          },
          {
            "label": "Belt damaged",
            "next": "r_damage"
          },
          {
            "label": "Spillage",
            "next": "spill1"
          },
          {
            "label": "Noisy or hot idler or pulley",
            "next": "r_idler"
          },
          {
            "label": "Stalls, slow, or drive tripping",
            "next": "stall1"
          },
          {
            "label": "Splice failing",
            "next": "r_splice"
          }
        ]
      },
      "track1": {
        "q": "Does the belt run off at the same place on the conveyor every time, or at the same place on the belt every revolution?",
        "hint": "Mark a spot on the belt and time a revolution.",
        "options": [
          {
            "label": "Same place on the conveyor, any part of the belt",
            "next": "track2"
          },
          {
            "label": "Same place on the belt, moves along the conveyor",
            "next": "r_track_belt"
          },
          {
            "label": "Only when loaded",
            "next": "r_track_loading"
          },
          {
            "label": "Wanders both ways, unpredictable",
            "next": "r_track_wander"
          }
        ]
      },
      "track2": {
        "q": "Locked out: are the pulleys square, the idler frames square and level, and the idlers all turning and clean?",
        "options": [
          {
            "label": "A pulley is skewed",
            "next": "r_track_pulley"
          },
          {
            "label": "Idler frames out of square or level, or structure twisted",
            "next": "r_track_structure"
          },
          {
            "label": "Seized idlers or buildup found",
            "next": "r_track_idler"
          },
          {
            "label": "All clear",
            "next": "r_track_adjust"
          }
        ]
      },
      "r_track_pulley": {
        "type": "result",
        "cls": "fix",
        "label": "skewed pulley",
        "text": "A pulley out of square steers the belt at that point every revolution.",
        "sub": "Measure from a fixed reference on each side of the frame to the pulley shaft; the two must match. Adjust the bearing blocks (or the screw take-up equally on both sides) until it does. A screw take-up moved on one side only is the most common cause of a skewed tail pulley.",
        "prevent": "Pulley squareness checked with a tape on the PM. Screw take-up adjusted equally, and the reading recorded on both sides."
      },
      "r_track_structure": {
        "type": "result",
        "cls": "action",
        "label": "structure or idler frame misalignment",
        "text": "The belt is following the frame, and the frame is not straight.",
        "sub": "Sight the stringers. Level across each idler frame. Square each frame to a string line down the conveyor centreline. Look for the loader bucket dent, the settled support, the frame that was moved for access and put back wrong. Fix the frame, then track.",
        "prevent": "Centreline string check after any structural work or impact. Frames bolted, not wedged."
      },
      "r_track_idler": {
        "type": "result",
        "cls": "fix",
        "label": "seized idlers or buildup",
        "text": "A seized idler is a skid that steers the belt; buildup on an idler or pulley is a cone that does the same.",
        "sub": "Replace every seized idler. Clean buildup and find why it is there: cleaner blades worn, skirts leaking, wet product. Then track.",
        "prevent": "Walk and spin on every PM. Cleaners and skirts maintained."
      },
      "r_track_adjust": {
        "type": "result",
        "cls": "fix",
        "label": "track it: idlers, upstream first, small moves",
        "text": "Causes cleared; now steer it.",
        "sub": "Start at the tail on the carry side and work with the belt travel, then the return side from the head. One idler at a time, a few millimetres, advancing the end on the side the belt runs toward. Several revolutions before the next move. Record every move.",
        "prevent": "Tracking record kept with the conveyor. Training idlers on runs that wander with load."
      },
      "r_track_belt": {
        "type": "result",
        "cls": "action",
        "label": "belt fault: splice, camber, or local damage",
        "text": "A belt that runs off at the same spot on itself has the fault in the belt at that spot.",
        "sub": "Lock out, find the spot, and look: a splice cut off square, a damaged edge, a section that was repaired, cupping or camber in that section. A crooked splice is recut. Camber in a new belt is a warranty claim. Local damage is repaired or the section is replaced.",
        "prevent": "Splices cut with a square and checked on the diagonals. New belts checked for camber before installation."
      },
      "r_track_loading": {
        "type": "result",
        "cls": "fix",
        "label": "off-centre loading",
        "text": "Product landing on one side of the belt pushes it the other way.",
        "sub": "Watch the loading point. Fix the chute angle, the skirts, the feed rate, or the upstream conveyor discharge so product lands centred and in the direction of travel. Tracking idlers cannot fight a chute.",
        "prevent": "Loading point checked whenever the product or the upstream equipment changes."
      },
      "r_track_wander": {
        "type": "result",
        "cls": "action",
        "label": "wander: tension, cupped belt, or weather",
        "text": "A belt that wanders both ways is not being steered by one fault; it is not being held by anything.",
        "sub": "Tension: a slack belt wanders; check the take-up. Cupping: a belt that does not sit flat on the idlers cannot be tracked. Outdoors: wind and ice. Training idlers help once the cause is addressed.",
        "prevent": "Take-up position trended. Cover wear measured. Windbreaks on exposed runs."
      },
      "r_slip": {
        "type": "result",
        "cls": "action",
        "label": "drive pulley slip",
        "text": "The pulley turns and the belt does not keep up. Heat, squeal, glazed bottom cover, and a fire risk.",
        "sub": "Lagging condition (worn smooth, missing, or contaminated with product or water). Take-up tension. Wrap angle (a snub pulley adds wrap). Overload (too much product, or a belt that is stalling on a jam downstream). A speed switch on the head shaft should be stopping this before it becomes a fire.",
        "prevent": "Lagging on the PM. Speed switch on every drive pulley. Cleaners keeping the pulley face clean."
      },
      "r_damage": {
        "type": "result",
        "cls": "action",
        "label": "read the damage pattern",
        "text": "The Reading Belt Damage tab has six patterns, and each points at a cause.",
        "sub": "Edge wear is mistracking against the structure. Top cover wear is product or a skirt or cleaner pressed too hard. Bottom cover wear is seized idlers, slip, or debris. Cuts and rips are sharp objects. Cupping and camber are belt faults. Heat and chemical damage are the wrong compound for the service. Repair the belt, then fix what damaged it.",
        "prevent": "Cover thickness measured at a marked spot on the PM. Damage logged with its location."
      },
      "spill1": {
        "q": "Where does it spill?",
        "options": [
          {
            "label": "At the loading point",
            "next": "r_spill_load"
          },
          {
            "label": "Along the run",
            "next": "r_spill_run"
          },
          {
            "label": "On the return side (carryback)",
            "next": "r_spill_return"
          }
        ]
      },
      "r_spill_load": {
        "type": "result",
        "cls": "fix",
        "label": "loading zone: skirts, chute, or impact",
        "text": "Product is escaping before it settles on the belt.",
        "sub": "Skirt seals worn or set off the belt. Chute aimed wrong or too high. Belt sagging between idlers under the drop (add impact idlers or a bed). Belt not fully troughed at the loading point. Product landing faster or slower than the belt.",
        "prevent": "Skirt seals on the PM. Loading zone reviewed with any product change."
      },
      "r_spill_run": {
        "type": "result",
        "cls": "action",
        "label": "overloaded cross-section, sag, or mistracking",
        "text": "Product falling off along the run means the belt is carrying more than its trough holds, sagging between idlers, or has moved off centre under the load.",
        "sub": "Feed rate against belt capacity. Idler spacing and tension against the sag limit. Tracking. A missing or seized idler leaves a gap the belt sags into.",
        "prevent": "Feed rate controlled at the source. Idlers complete and turning."
      },
      "r_spill_return": {
        "type": "result",
        "cls": "fix",
        "label": "carryback: cleaners",
        "text": "Product stuck to the top cover is going around the head pulley and dropping off the return side onto everything below.",
        "sub": "Primary cleaner blade at the head pulley, secondary cleaner after it, both adjusted to touch and both with usable blade left. Wet or sticky product needs more cleaning, not more pressure. A plow before the tail pulley protects the tail nip.",
        "prevent": "Cleaner blades on the PM. Carryback under the return idlers is the indicator."
      },
      "r_idler": {
        "type": "result",
        "cls": "action",
        "label": "idler or pulley bearing",
        "text": "A noisy or hot idler is a bearing failing; a hot pulley bearing is a bearing failing or a pulley that is slipping.",
        "sub": "Idler: replace it. Idler bearings are sealed and not serviceable; a noisy one is weeks from seizing and grooving the belt. Pulley bearing: the Bearing Failure module; head pulley bearings are the heaviest loaded on the conveyor and see the drive load plus belt tension. Infrared on the PM catches both.",
        "prevent": "Infrared survey of pulley bearings on the PM. Idler walk and spin."
      },
      "stall1": {
        "q": "Does the belt stop while the drive keeps turning, or does the drive itself stop or trip?",
        "options": [
          {
            "label": "Belt stops, drive turns",
            "next": "r_slip"
          },
          {
            "label": "Drive trips on overload",
            "next": "r_stall_overload"
          },
          {
            "label": "Everything stops, no trip",
            "next": "r_stall_control"
          }
        ]
      },
      "r_stall_overload": {
        "type": "result",
        "cls": "action",
        "label": "drive overload: jam, overload, or drive train",
        "text": "The motor is pulling more than the overload allows.",
        "sub": "Jam: product packed at a transfer, a chute plugged, or an object caught. Overload: too much product or product heavier than design. Drive train: seized idlers (each one is drag), a failing pulley bearing, a gearbox problem. Motors and Gearboxes modules for the drive; an idler walk for the drag.",
        "prevent": "Chute and transfer point plugged-chute detection. Feed control. Idler walk on the PM."
      },
      "r_stall_control": {
        "type": "result",
        "cls": "fix",
        "label": "control stop: interlock, pull cord, or sequence",
        "text": "A conveyor that stops without a trip was told to stop.",
        "sub": "Pull cord switches (one was pulled, or one is out of adjustment and tripping on vibration). Downstream conveyor stopped and the sequence interlock stopped this one. A plugged chute switch, a belt misalignment switch, a speed switch. Read the control panel; the reason is displayed or the switch is latched.",
        "prevent": "Pull cords and switches tested and adjusted on the PM. Operators trained on what each interlock means."
      },
      "r_splice": {
        "type": "result",
        "cls": "escalate",
        "label": "splice failure",
        "text": "A splice that is lifting, cracking, or losing fasteners is going to let go, and the belt end goes through the head pulley.",
        "sub": "Lock out, block the take-up. Mechanical splice: replace fasteners, check the pin, check the fastener size against belt thickness, check the cut is square. Vulcanised: a lifting edge or a crack at the step is the start of failure; schedule a resplice. Look at why: tension too high, pulley too small for the belt, a splice that was not square, water in the carcass.",
        "prevent": "Splices located, counted, and inspected on every PM. Belt tension within the design. Pulley diameters at or above the belt minimum."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "What is done on a running conveyor?",
        [
          "Clearing jams",
          "Looking, listening, and idler frame adjustments from outside the guard",
          "Cleaning with a shovel",
          "Replacing idlers"
        ],
        1,
        "Hands never touch a moving belt."
      ],
      [
        "Where do tracking problems usually start?",
        [
          "Where the belt runs off",
          "Upstream of where it runs off",
          "At the drive",
          "At the splice only"
        ],
        1,
        "The belt carries the error to where you can see it."
      ]
    ],
    "anatomy": [
      [
        "Which conveyor bearing is the heaviest loaded?",
        [
          "Tail pulley",
          "Head (drive) pulley",
          "Return idler",
          "Snub pulley"
        ],
        1,
        "Drive load plus belt tension. Infrared on the PM."
      ],
      [
        "A seized idler does what to the belt?",
        [
          "Nothing",
          "Skids, heats, grooves the bottom cover, steers the belt, and eventually cuts it",
          "Improves tracking",
          "Reduces tension"
        ],
        1,
        "Walk and spin on every PM."
      ],
      [
        "What carries the load in a conveyor belt?",
        [
          "The top cover",
          "The carcass",
          "The bottom cover",
          "The splice"
        ],
        1,
        "Covers protect; the carcass is the tension member."
      ]
    ],
    "tracking": [
      [
        "To steer the belt away from one side, the idler end on that side is?",
        [
          "Moved backward",
          "Advanced in the direction of belt travel",
          "Raised",
          "Removed"
        ],
        1,
        "The belt moves away from the advanced end."
      ],
      [
        "Before adjusting idlers, what is checked?",
        [
          "Nothing",
          "Structure, pulley squareness, buildup, seized idlers, loading, and the belt itself",
          "Only tension",
          "Only the head pulley"
        ],
        1,
        "Idler adjustment is steering, not a cure."
      ],
      [
        "A screw take-up moved on one side only produces?",
        [
          "Correct tension",
          "A skewed tail pulley and mistracking at the tail",
          "Better grip",
          "Nothing"
        ],
        1,
        "Move both sides equally and record both readings."
      ],
      [
        "Idler adjustments start where?",
        [
          "At the head",
          "At the tail, working in the direction of belt travel",
          "In the middle",
          "On the return side first"
        ],
        1,
        "Fix upstream first."
      ]
    ],
    "tension": [
      [
        "Belt sag between carry idlers should be about?",
        [
          "Zero",
          "1.5 to 3% of idler spacing",
          "10%",
          "Whatever it is"
        ],
        1,
        "More spills and flexes; less is excess tension."
      ],
      [
        "A gravity take-up counterweight is?",
        [
          "Harmless with the motor off",
          "Stored energy that must be blocked before belt work",
          "Only a tensioner",
          "A guard"
        ],
        1,
        "A belt cut with the take-up live snaps back."
      ],
      [
        "A gravity take-up at the top of its travel means?",
        [
          "Perfect",
          "The belt has stretched past its design; cut a section out or the setting was wrong",
          "Too little belt",
          "Nothing"
        ],
        1,
        "Mark and date the position on the PM."
      ]
    ],
    "splices": [
      [
        "Strongest splice type?",
        [
          "Hinged mechanical",
          "Plate mechanical",
          "Hot vulcanised",
          "Cold vulcanised"
        ],
        2,
        "85 to 100 percent of belt rating."
      ],
      [
        "A splice cut one degree off square?",
        [
          "Is fine",
          "Mistracks the belt at every revolution and cannot be tracked out",
          "Runs smoother",
          "Lasts longer"
        ],
        1,
        "Use a square and check the diagonals."
      ]
    ],
    "damage": [
      [
        "A belt that runs off at the same spot on itself every revolution has?",
        [
          "A structure problem",
          "A belt fault at that spot: splice, camber, or damage",
          "A drive problem",
          "A loading problem"
        ],
        1,
        "Mark it and find the spot locked out."
      ],
      [
        "Glazed bottom cover over the drive pulley width?",
        [
          "Normal",
          "Slip at the drive",
          "Product abrasion",
          "Cupping"
        ],
        1,
        "Lagging, tension, wrap, and a speed switch."
      ],
      [
        "Cover swollen and blistered?",
        [
          "Heat",
          "Oil or chemical attack",
          "Impact",
          "Age"
        ],
        1,
        "Wrong compound for the product."
      ]
    ],
    "troubleshoot": [
      [
        "Belt stops while the drive pulley keeps turning?",
        [
          "Overload trip",
          "Drive slip",
          "Control stop",
          "Splice failure"
        ],
        1,
        "A speed switch should have caught it."
      ],
      [
        "Carryback on the return side is fixed with?",
        [
          "More tension",
          "Belt cleaners adjusted and with usable blade",
          "A new belt",
          "Faster speed"
        ],
        1,
        "Primary and secondary cleaners at the head."
      ]
    ],
    "safety": [
      [
        "Clearing a jam is?",
        [
          "A quick reach",
          "A lockout task",
          "Fine with gloves",
          "The operator's call"
        ],
        1,
        "The reason people reach in is a management problem with a fatality attached."
      ],
      [
        "Before working on a belt with a gravity take-up?",
        [
          "Nothing extra",
          "Block, pin, or chain the take-up carriage",
          "Add weight",
          "Remove the belt"
        ],
        1,
        "The counterweight stays loaded with the motor off."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Conveyors injure more industrial workers than any other machine class</div></div>\n      <div class=\"callout-box-body\">They are everywhere, they run continuously, they have nip points every few metres, and they jam, which invites a hand in. <strong>Nothing in this module is done on a running conveyor except looking and listening. Tracking adjustments are the one exception, and they are made from outside the guard with the idler adjustment bolts, never by touching the belt.</strong> Read the Safety tab first.</div>\n    </div>\n    <div class=\"bw-section-label\">Conveyor types: tap a type</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectType('belt')\" id=\"tcard-belt\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-horizontal\"></i></div><div class=\"type-card-name\">Belt conveyor</div><div class=\"type-card-sub\">Bulk and package; most of this module</div></div>\n      <div class=\"type-card\" onclick=\"selectType('roller')\" id=\"tcard-roller\"><div class=\"type-card-icon\"><i class=\"ti ti-menu-2\"></i></div><div class=\"type-card-name\">Roller conveyor</div><div class=\"type-card-sub\">Gravity or powered; packages and pallets</div></div>\n      <div class=\"type-card\" onclick=\"selectType('screw')\" id=\"tcard-screw\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-2\"></i></div><div class=\"type-card-name\">Screw conveyor</div><div class=\"type-card-sub\">Powders and granules in a trough</div></div>\n      <div class=\"type-card\" onclick=\"selectType('chain')\" id=\"tcard-chain\"><div class=\"type-card-icon\"><i class=\"ti ti-link\"></i></div><div class=\"type-card-name\">Chain, drag, and slat</div><div class=\"type-card-sub\">Heavy, hot, or abrasive product</div></div>\n      <div class=\"type-card\" onclick=\"selectType('bucket')\" id=\"tcard-bucket\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-up\"></i></div><div class=\"type-card-name\">Bucket elevator</div><div class=\"type-card-sub\">Vertical lift of bulk material</div></div>\n      <div class=\"type-card\" onclick=\"selectType('modular')\" id=\"tcard-modular\"><div class=\"type-card-icon\"><i class=\"ti ti-grid-dots\"></i></div><div class=\"type-card-name\">Modular plastic belt</div><div class=\"type-card-sub\">Food and packaging, sprocket driven</div></div>\n    </div>\n    <div id=\"type-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a conveyor type above</div></div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: walk it before you touch it</strong>Walk the length of a belt conveyor while it runs, both sides, before any adjustment. Where the belt sits on each idler, which idlers are turning, where material is building up, where the belt edge is frayed, where it is noisy. Tracking problems are almost never at the place where the belt runs off; they start somewhere upstream and the belt carries the error to where you can see it.</div></div>",
    "anatomy": "<div class=\"bw-section-label\">Belt conveyor components: tap a component</div>\n    <div class=\"chain-wrap\">\n      <div class=\"chain\">\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('tail')\" id=\"cnode-tail\"><i class=\"ti ti-circle chain-icon\"></i><div class=\"chain-label\">Tail pulley</div><div class=\"chain-sub\">return end</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('load')\" id=\"cnode-load\"><i class=\"ti ti-arrow-down chain-icon\"></i><div class=\"chain-label\">Loading zone</div><div class=\"chain-sub\">impact idlers, skirts</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('idlers')\" id=\"cnode-idlers\"><i class=\"ti ti-menu-2 chain-icon\"></i><div class=\"chain-label\">Carry idlers</div><div class=\"chain-sub\">troughing</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('head')\" id=\"cnode-head\"><i class=\"ti ti-circle-filled chain-icon\"></i><div class=\"chain-label\">Head pulley</div><div class=\"chain-sub\">drive, lagged</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('snub')\" id=\"cnode-snub\"><i class=\"ti ti-circle-dotted chain-icon\"></i><div class=\"chain-label\">Snub and bend</div><div class=\"chain-sub\">wrap and direction</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('takeup')\" id=\"cnode-takeup\"><i class=\"ti ti-arrows-vertical chain-icon\"></i><div class=\"chain-label\">Take-up</div><div class=\"chain-sub\">tension</div></div></div>\n        <div class=\"chain-arrow\">›</div>\n        <div class=\"chain-node\"><div class=\"chain-box\" onclick=\"selectPart('return')\" id=\"cnode-return\"><i class=\"ti ti-arrow-back-up chain-icon\"></i><div class=\"chain-label\">Return idlers</div><div class=\"chain-sub\">and cleaners</div></div></div>\n      </div>\n    </div>\n    <div id=\"part-display\"><div class=\"comp-placeholder\">select a component above</div></div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-layers-intersect\"></i> The belt itself</div>\n      <div class=\"info-block-body\">A conveyor belt is a carcass (the tension member: plies of polyester and nylon fabric, or steel cords on long high-tension belts) with a top cover that takes the product and a bottom cover that runs on the idlers and pulleys. The carcass carries the load and sets the belt's strength and stretch. The covers protect it. Belt is specified by width, carcass strength (kN/m or PIW), number of plies, cover thicknesses, and cover compound (general purpose, oil resistant, heat resistant, fire resistant, food grade).</div>\n      <ul class=\"info-block-tips\">\n        <li>Belt strength rating is what the splice must match. A splice is only as strong as the method and the belt it joins.</li>\n        <li>Cover compound must suit the product: oil swells general purpose rubber; heat hardens it; abrasive product wears thin covers through to the carcass.</li>\n        <li>Belt camber (a built-in curve along the length) and a bad factory splice both cause mistracking that no idler adjustment fixes. Check a new belt on the floor before installing it.</li>\n        <li>Belt width and idler trough angle set the load capacity. Overloading the belt cross-section spills at the edges and mistracks.</li>\n      </ul>\n    </div>",
    "tracking": "<div class=\"bw-section-label\">Tracking: why belts wander and how to steer them</div>\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-hexagon callout-box-icon\"></i><div class=\"callout-box-title\">The belt runs toward the side that is ahead, and away from the side that is tight</div></div>\n      <div class=\"callout-box-body\">Two rules explain nearly all belt tracking. First, a belt moves toward the end of an idler or pulley that it contacts first, which means it steers away from whichever end is advanced in the direction of travel. Second, a belt moves toward the side that is looser or lower and away from the side that is tighter or higher. <strong>Tracking adjustments exploit the first rule: to steer the belt away from one side, advance that side's idler end in the direction of belt travel.</strong> Everything else on this tab is finding what is violating those rules by accident.</div>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-list-numbers\"></i> Before adjusting anything: the causes that idler tweaks cannot fix</div>\n      <ul class=\"info-block-tips\">\n        <li>Structure not straight or level. Sight along the stringers; check idler frames square to the centreline and level across. A conveyor bolted to a twisted frame runs off no matter what.</li>\n        <li>Pulleys not square to the belt centreline. Head and tail pulleys, and every snub and bend pulley, checked with a tape from a fixed reference on each side. A pulley skewed 5 mm across a metre steers the whole belt.</li>\n        <li>Material buildup on pulleys or idlers. A lump of product on a pulley face is a crown in the wrong place; on an idler it is a cone. Cleaners and scrapers exist for this reason.</li>\n        <li>Seized or missing idlers. A frozen idler is a skid that heats the belt and steers it. Walk the length and spin every one that is not turning.</li>\n        <li>Off-centre loading. Product landing on one side of the belt pushes it the other way. Fix the chute, the skirts, or the feed, not the idlers.</li>\n        <li>Belt problems: camber, a crooked splice, a damaged edge, uneven cover wear. A belt that runs off in the same place on every revolution has a belt fault at that place. Mark it and watch.</li>\n        <li>Wind, rain, and ice on outdoor conveyors. Weather is a tracking cause.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-adjustments-horizontal\"></i> Adjusting idlers, in order</div>\n      <ul class=\"info-block-tips\">\n        <li>Start at the tail and work in the direction of belt travel on the carry side. Then the return side from the head back to the tail. Fix upstream first; the belt carries corrections downstream.</li>\n        <li>Adjust one idler at a time, a small amount, from outside the guard with the frame bolts, never by hand on a running belt. Run several belt revolutions before judging the result. A belt takes time to respond.</li>\n        <li>Advance (in the direction of belt travel) the end of the idler on the side the belt is running toward. The belt moves away from the advanced end. Tilt a few millimetres at most.</li>\n        <li>Correct with several idlers each moved a little rather than one moved a lot. One idler skewed hard wears the belt and the idler.</li>\n        <li>Training (self-aligning) idlers on the carry and return help with intermittent wander; they do not cure a structural cause and they wear out if they are working constantly.</li>\n        <li>Pulleys are squared, not skewed, to track a belt. A crowned pulley on the tail helps centre an unloaded belt; a lagged, square head pulley drives it.</li>\n        <li>Record what was moved and by how much. The next person will be adjusting the same idler back.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: chalk line on the return side</strong>Snap a line down the middle of the return run's frame and mark the belt's edge position at every return idler with chalk. Run it. Where the marks drift is where the belt starts to leave, and the idler or pulley just upstream of that point is the one to look at. On the carry side the loaded belt hides the problem; the return side tells the truth.</div></div>",
    "tension": "<div class=\"bw-section-label\">Tension and take-up: enough to drive, not enough to destroy</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-body\">Belt tension has two jobs: enough friction at the drive pulley so the belt does not slip, and enough tension between idlers so the belt does not sag into a trough that spills product. Beyond that, every extra newton of tension stretches the belt, loads the pulley bearings, and shortens the splice's life. The take-up is what sets and maintains tension as the belt stretches in service.</div>\n      <table class=\"ref-table\">\n        <tr><th>Take-up type</th><th>How it works</th><th>Where</th><th>Watch for</th></tr>\n        <tr><td>Screw take-up</td><td>Threaded rods move the tail pulley bearings along slots; set by hand</td><td>Short conveyors, under about 60 m</td><td>Both sides moved equally or the pulley skews. Tension drifts as the belt stretches; recheck on the PM</td></tr>\n        <tr><td>Gravity take-up (vertical)</td><td>A counterweighted pulley on the return side hangs and holds constant tension automatically</td><td>Longer conveyors, anything with variable load or temperature</td><td>The counterweight is stored energy. Its travel must have room at both ends; a take-up at the end of its travel means the belt has stretched past the design and needs a piece cut out</td></tr>\n        <tr><td>Horizontal gravity take-up</td><td>Counterweight over a sheave pulling the tail pulley carriage</td><td>Where vertical space is limited</td><td>Carriage must run free on its rails; a stuck carriage means no tension control</td></tr>\n        <tr><td>Hydraulic or winch take-up</td><td>Powered, sometimes automatic</td><td>Long overland and mining conveyors</td><td>Beyond this module; the engineer's setting governs</td></tr>\n      </table>\n      <ul class=\"info-block-tips\">\n        <li>Sag between carry idlers: 1.5 to 3 percent of idler spacing is the usual target. More than that and the belt flexes at every idler, spills, and mistracks. Less means excess tension.</li>\n        <li>Slip at the drive pulley: the belt stops or slows while the pulley turns, with heat, noise, and lagging wear. Causes: lagging worn smooth, water or product on the pulley, too little tension, too little wrap (a snub pulley increases wrap), or overload.</li>\n        <li>Screw take-ups must be moved equally on both sides. A tail pulley pulled 10 mm further on one side is a skewed pulley and the belt runs off at the tail.</li>\n        <li>Gravity take-up at the top of its travel: too much belt, and the belt is stretching past its design or the take-up was set wrong. At the bottom: the belt is too short (a splice cut too much out) or the weight is bottoming and there is no tension at all.</li>\n        <li>New belts stretch in the first weeks. Screw take-ups get retensioned; gravity take-ups absorb it until they run out of travel.</li>\n        <li>Belt sag on the return side between return idlers is normal and larger; the return side carries only the belt weight.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the take-up tells the belt's history</strong>A gravity take-up sitting near the top of its travel on a belt that is only a year old is a belt that has been overloaded, run hot, or spliced badly and is stretching. One that has been at the bottom since the last splice had too much cut out. Mark the take-up position on the frame with the date each PM; the trend is the belt's stretch rate.</div></div>",
    "splices": "<div class=\"bw-section-label\">Splices: the weakest point on every belt</div>\n    <table class=\"ref-table\">\n      <tr><th>Splice type</th><th>Strength (approximate, versus belt rating)</th><th>Time and skill</th><th>Where it belongs</th></tr>\n      <tr><td>Hot vulcanised</td><td>85 to 100 percent</td><td>Hours; press, heat, and a trained splicer</td><td>Long belts, high tension, steel cord, abrasive or wet service, anywhere a mechanical splice would catch on cleaners or skirts</td></tr>\n      <tr><td>Cold vulcanised (chemical bond)</td><td>70 percent or so</td><td>Hours; cure time; temperature sensitive</td><td>Fabric belts where a press cannot be brought in</td></tr>\n      <tr><td>Mechanical plate (bolted or riveted solid plate)</td><td>50 to 70 percent</td><td>An hour with a tool kit</td><td>Fabric belts, moderate tension, short conveyors, emergency repairs</td></tr>\n      <tr><td>Mechanical hinged (with a pin)</td><td>40 to 60 percent</td><td>Fastest; the belt can be separated by pulling the pin</td><td>Where the belt is removed often, package handling, light duty</td></tr>\n    </table>\n    <ul class=\"info-block-tips\">\n      <li>The splice must be square to the belt. A splice cut one degree off square tracks the belt off at every revolution and cannot be tracked out. Use a square, a template, and the belt edge as a reference, and check both corners.</li>\n      <li>Mechanical fastener size matches belt thickness and carcass. Too small a fastener pulls through; too large crushes the carcass. The fastener manufacturer's chart by belt thickness and rating.</li>\n      <li>Fasteners recessed by skiving (removing top cover) where cleaners and skirts would catch them.</li>\n      <li>Hinge pins are a wear item. A pin worn thin is a splice that will let go, and the belt end goes through the head pulley and around the drive.</li>\n      <li>Vulcanised splice failure starts as a lifting edge or a crack at the step. Watch it; when it starts, the whole splice is going.</li>\n      <li>Splices are inspected on every belt PM, with the conveyor locked out and the belt walked. Count the splices and know where each one is.</li>\n    </ul>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the belt cutter is a square</strong>Most crooked splices come from cutting the belt end freehand. Mark the cut line with a square off a straight belt edge, cut it with a proper belt cutter on that line, and check the corner-to-corner diagonals of the two ends before the fastener goes on. Five minutes with a square saves a belt that runs off forever.</div></div>",
    "damage": "<div class=\"bw-section-label\">Reading belt damage: tap a pattern</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectDmg('edge')\" id=\"dcard-edge\"><div class=\"type-card-icon\"><i class=\"ti ti-border-left\"></i></div><div class=\"type-card-name\">Frayed or worn edge</div><div class=\"type-card-sub\">The belt is rubbing the structure</div></div>\n      <div class=\"type-card\" onclick=\"selectDmg('topwear')\" id=\"dcard-topwear\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-down\"></i></div><div class=\"type-card-name\">Top cover worn</div><div class=\"type-card-sub\">Product abrasion or cleaner damage</div></div>\n      <div class=\"type-card\" onclick=\"selectDmg('bottomwear')\" id=\"dcard-bottomwear\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-up\"></i></div><div class=\"type-card-name\">Bottom cover worn or grooved</div><div class=\"type-card-sub\">Seized idlers, slip, or debris</div></div>\n      <div class=\"type-card\" onclick=\"selectDmg('cut')\" id=\"dcard-cut\"><div class=\"type-card-icon\"><i class=\"ti ti-cut\"></i></div><div class=\"type-card-name\">Cuts, gouges, rips</div><div class=\"type-card-sub\">Something sharp got in</div></div>\n      <div class=\"type-card\" onclick=\"selectDmg('cup')\" id=\"dcard-cup\"><div class=\"type-card-icon\"><i class=\"ti ti-bowl\"></i></div><div class=\"type-card-name\">Cupping and camber</div><div class=\"type-card-sub\">Belt curling or bowed</div></div>\n      <div class=\"type-card\" onclick=\"selectDmg('heat')\" id=\"dcard-heat\"><div class=\"type-card-icon\"><i class=\"ti ti-flame\"></i></div><div class=\"type-card-name\">Hardened, cracked, or blistered cover</div><div class=\"type-card-sub\">Heat, oil, or chemical attack</div></div>\n    </div>\n    <div id=\"dmg-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a damage pattern above</div></div>",
    "troubleshoot": "<div class=\"bw-section-label\">Conveyor fault diagnosis</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology: walk, mark, then lock out and look</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p><strong>Running, from outside the guards:</strong> walk both sides, carry and return. Belt position at every idler. Idlers turning or not. Buildup on pulleys and idlers. Noise. Heat at pulley bearings by infrared. Take-up position. Where material spills. Where the belt edge is damaged.</p>\n        <p><strong>Mark:</strong> chalk the belt edge position at each return idler; mark a spot on the belt and time one revolution; note where in the revolution the belt runs off (a belt fault) versus always at one place (a structure fault).</p>\n        <p><strong>Locked out, take-up secured:</strong> pulley squareness with a tape from fixed references. Idler frames square and level. Splice condition and squareness. Belt edges and covers. Lagging. Cleaners and skirts. Every idler spun by hand.</p>\n        <p><strong>Fix causes before tracking.</strong> Structure, pulleys, buildup, seized idlers, loading, and splices are causes. Idler adjustment is steering. Steering a belt against a cause wears the belt out.</p>\n      </div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"cv-progress\" style=\"width:8%\"></div></div>\n    <div id=\"cv-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Conveyor safety: nip points, stored energy, and jams</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">A conveyor has an in-running nip at every pulley and every idler, and it never lets go</div></div>\n      <div class=\"callout-box-body\">The belt on the head pulley, the tail pulley, the snubs, the bends, the take-up, and every carry and return idler is a nip point. A glove, a sleeve, a rag, or a hand caught at any of them is pulled in with the full drive torque, and the belt keeps moving until someone stops it. <strong>Hands never touch a moving belt. Jams are cleared locked out. Guards on every nip, and pull cords along the length that anyone can reach.</strong> Regulation 851 sections 24 and 25, and ASME B20.1 for conveyor safety practice.</div>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-lock\" style=\"color:#F09595;\"></i> Lockout for conveyors</div>\n      <ul class=\"info-block-tips\">\n        <li>Lock out the drive motor and verify with a start attempt from every start point, including the remote and the sequence control that starts this conveyor when the one downstream starts.</li>\n        <li>Gravity take-up: the counterweight is stored energy. It stays loaded with the motor off. Before working on the belt, the take-up carriage is blocked, pinned, or chained so it cannot move, and the belt is relieved. A belt cut with the take-up live snaps back with the counterweight behind it.</li>\n        <li>Inclined conveyors run backward under load when the drive is released. The backstop holds it only until the drive train is opened. Empty the belt or block it.</li>\n        <li>Product on the belt above a work position can slide. Clear it.</li>\n        <li>Multiple drives on one system: all of them.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-hand-off\" style=\"color:#F09595;\"></i> Jams, cleaning, and the things people do</div>\n      <ul class=\"info-block-tips\">\n        <li>Clearing a jam is a lockout task. The reason people reach into a running conveyor is that stopping it is slow or gets them yelled at. That is a management problem with a fatality attached, and the fix is a rule that is enforced upward.</li>\n        <li>Cleaning around a running belt with a shovel or a hose is a hand or a tool at a nip. Clean locked out, or design the cleaning so nobody is near the belt (cleaners, plows, wash systems).</li>\n        <li>Never ride a conveyor. Never step across a moving belt. Crossovers with handrails where people need to cross.</li>\n        <li>Never use the belt to move a tool or a part.</li>\n        <li>Pull cords: tensioned, tested, reachable along the full length, and latching. A pull cord that is used as a handrail or a coat hook is a pull cord that does not work.</li>\n        <li>Tracking adjustments on a running belt are made at the idler frame bolts, from outside the guard, with a wrench, and nothing else. Never by hand on the belt, never with a bar against the belt.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-shield-check\"></i> Guards and emergency stops</div>\n      <ul class=\"info-block-tips\">\n        <li>Nip guards at every pulley: head, tail, snub, bend, take-up. Return idlers within reach guarded or enclosed. Carry idlers where a person can be beside the belt guarded.</li>\n        <li>Guard openings and distances per the Safeguarding module.</li>\n        <li>Emergency stops at the head, the tail, every transfer point, and a pull cord along any length a person can walk beside.</li>\n        <li>A conveyor that starts automatically has a warning (horn, beacon) with a delay before start, and the signage says so.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-flame\"></i> Fire and material</div>\n      <ul class=\"info-block-tips\">\n        <li>A slipping belt on a lagged pulley heats to ignition. Belt fires in enclosed galleries have killed people. Slip detection (a speed switch) and a stop on slip.</li>\n        <li>Fire-resistant belt where the regulation or the product requires it, and never a general purpose belt as a substitute.</li>\n        <li>Combustible dust from the product accumulates on idlers and structure. Housekeeping is fire prevention.</li>\n        <li>Belt splicing with vulcanising presses is hot work.</li>\n      </ul>\n    </div>"
  },
  "title": "BuiltWright: Conveyors: Module 15",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_power_transmission_v1.html#chains\">Chains and sprockets</a><a href=\"builtwright_gearboxes_v1.html#overview\">Gearboxes: shaft mount reducers</a><a href=\"builtwright_clutches_brakes_v1.html#holding\">Backstops</a><a href=\"builtwright_bearing_module_v1.html#diagnose\">Pulley and idler bearings</a><a href=\"builtwright_safeguarding_v1.html#hazards\">Nip points</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 15 of series &nbsp;·&nbsp; conveyors</div>",
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
