BW.register("rootcause", {
  "key": "rootcause",
  "num": "16",
  "name": "Root Cause",
  "source": "builtwright_root_cause_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "method",
      "label": "The Method",
      "active": false,
      "style": ""
    },
    {
      "id": "evidence",
      "label": "Evidence",
      "active": false,
      "style": ""
    },
    {
      "id": "reading",
      "label": "Reading Failed Parts",
      "active": false,
      "style": ""
    },
    {
      "id": "whys",
      "label": "Five Whys and Fishbone",
      "active": false,
      "style": ""
    },
    {
      "id": "traps",
      "label": "Traps",
      "active": false,
      "style": ""
    },
    {
      "id": "examples",
      "label": "Worked Examples",
      "active": false,
      "style": ""
    },
    {
      "id": "report",
      "label": "Write One",
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
    "title": "Root Cause",
    "badge": "Module 16",
    "tree": {
      "progress": "rc-progress",
      "container": "rc-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectMech": {
        "scope": "#panel-reading",
        "cardClass": ".type-card",
        "prefix": "mcard-",
        "data": "mechData",
        "display": "mech-display"
      },
      "selectEx": {
        "scope": "#panel-examples",
        "cardClass": ".type-card",
        "prefix": "ecard-",
        "data": "exData",
        "display": "ex-display"
      }
    },
    "reveals": {},
    "toggles": [
      {
        "name": "toggleAdv",
        "byId": true
      }
    ],
    "bespoke": [
      "function rcaLoad(){try{const d=JSON.parse(localStorage.getItem('bw_rca')||'{}');FIELDS.forEach(f=>{const e=document.getElementById(f);if(e&&d[f]!==undefined)e.value=d[f];});}catch(e){}}",
      "function rcaSave(){const d={};FIELDS.forEach(f=>d[f]=document.getElementById(f).value);try{localStorage.setItem('bw_rca',JSON.stringify(d));document.getElementById('rca-status').textContent='Saved in this browser.';}catch(e){document.getElementById('rca-status').textContent='Could not save (storage unavailable).';}}",
      "function rcaCopy(){const L=[['Machine','r_machine'],['When','r_when'],['Problem','r_problem'],['Timeline','r_timeline'],['Evidence','r_evidence'],['Physical cause','r_physical'],['Why chain','r_whys'],['Root cause','r_root'],['Corrective action (physical)','r_ca1'],['Corrective action (latent), owner, date','r_ca2'],['Verification','r_verify'],['Analysed by','r_by']];const t='ROOT CAUSE REPORT\\n'+L.map(([k,f])=>k+': '+document.getElementById(f).value).join('\\n');(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(()=>document.getElementById('rca-status').textContent='Copied.').catch(()=>{const ta=document.createElement('textarea');ta.value=t;document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();document.getElementById('rca-status').textContent='Copied.';});}",
      "function rcaReset(){FIELDS.forEach(f=>document.getElementById(f).value='');try{localStorage.removeItem('bw_rca');}catch(e){}document.getElementById('rca-status').textContent='Cleared.';}"
    ]
  },
  "cards": {
    "mechData": {
      "fatigue": {
        "icon": "ti-wave-sine",
        "name": "Fatigue Fracture",
        "role": "A crack that grew a little every cycle until the remaining metal could not carry the load",
        "body": "The most common fracture in rotating equipment. The surface shows beach marks (curved growth lines) radiating from an origin, a smooth region where the crack grew, and a rough final zone where it let go. The origin is at a stress raiser: a sharp shoulder, a keyway corner, a thread, a corrosion pit, a tool mark, a weld toe. The cause is the stress raiser plus the cyclic load, and the fix is at the origin.",
        "tips": [
          "Follow the beach marks back to the tightest curve: the origin.",
          "A small final zone means low load and a long slow crack; a large one means high load.",
          "Many ratchet marks around the edge: high stress or many origins, like a sharp shoulder all the way round.",
          "Shaft failures: rotating bending starts at the surface; torsion gives a 45 degree or a star fracture from a keyway."
        ]
      },
      "overload": {
        "icon": "ti-bolt",
        "name": "Overload Fracture",
        "role": "One event exceeded the strength of the part",
        "body": "A rough, crystalline, or fibrous fracture face with no beach marks: the part broke in one go. Ductile overload shows necking and a dull fibrous surface; brittle overload shows a flat, bright, crystalline surface, often with chevron marks pointing to the origin. The cause is the event: a jam, a dropped load, a hard start, a wrong part with less strength than the original, or a part already weakened by another mechanism.",
        "tips": [
          "No beach marks: overload. Beach marks plus a big final zone: fatigue that ended in overload.",
          "Find the event in the timeline: the jam, the start, the impact.",
          "A part that overloaded at normal load was the wrong part, the wrong material, or had a defect. Check the spare against the drawing."
        ]
      },
      "wear": {
        "icon": "ti-line-dashed",
        "name": "Wear",
        "role": "Material removed from a surface by contact: abrasive, adhesive, or erosive",
        "body": "Abrasive wear: hard particles cutting grooves in the direction of sliding, a dull scratched surface. Adhesive wear: surfaces welding and tearing under load with poor lubrication (galling, scuffing). Erosive wear: fluid or particles impinging on a surface (impeller vanes, valve seats, pipe elbows). Wear is expected; the rate is the question, and a rate faster than the design life is contamination, lubrication, load, or the wrong material pair.",
        "tips": [
          "Grooves along the sliding direction: abrasive, and the abrasive came from somewhere.",
          "Smeared, torn, welded surfaces: adhesive, and the lubricant film failed.",
          "Polished and pitted in a flow path: erosion, and the fluid is carrying something or moving too fast.",
          "Measure the wear rate against life; the failure is the rate, not the wear."
        ]
      },
      "surfacefatigue": {
        "icon": "ti-grain",
        "name": "Surface Fatigue: Pitting and Spalling",
        "role": "Repeated contact stress cracking the surface and lifting out pieces",
        "body": "Bearings and gear teeth. Contact stress cycles crack the surface just below it; the cracks join and flakes lift out as pits, then spalls. Cause: load beyond what the surface can carry indefinitely, which comes from overload, misalignment concentrating the load, an oil film too thin (viscosity, temperature, water), or a surface damaged first by something else (a dent, a corrosion pit, a scratch) that started the crack.",
        "tips": [
          "Where on the part: one end of a gear face or one side of a race means misalignment; centred means load or lubrication.",
          "Gearboxes module (wear patterns) and Bearing Failure module read these in detail.",
          "A dent or pit that started the spall points at installation or corrosion as the true cause."
        ]
      },
      "corrosion": {
        "icon": "ti-droplet",
        "name": "Corrosion and Fretting",
        "role": "Chemical attack, or the rust that forms when two surfaces rub microscopically",
        "body": "Corrosion: rust, staining, pitting, and etching from water, chemicals, or the wrong lubricant additive. Fretting: a fine red or black powder (oxidised wear debris) between two surfaces that were supposed to be fixed but moved a little under vibration or load cycles: a bearing outer ring in its housing, a hub on a shaft, a bolted joint. Fretting means a fit that was loose, a joint that was not tight, or a load that exceeded the friction holding it.",
        "tips": [
          "Red dust at a fit: fretting; the fit was loose or the joint moved.",
          "Corrosion pits are stress raisers; a fatigue crack often starts in one.",
          "Water in the oil, a blocked breather, wash-down through a seal: the environment chain."
        ]
      },
      "thermal": {
        "icon": "ti-flame",
        "name": "Thermal Damage",
        "role": "Heat that changed the material: colour, hardness, dimensions",
        "body": "Temper colours on steel (straw at about 200°C, blue at about 300°C, grey and scaled above) say how hot it got. Softened races, hardened and cracked seals, melted cages, discoloured grease, and blued shafts are all thermal signatures. The heat came from friction (a seized bearing, a slipping belt, a dry seal), from the process, or from electrical heating. The thermal damage is usually the last stage; the first stage was whatever generated the heat.",
        "tips": [
          "Colour is a thermometer: read it before it is cleaned or repainted.",
          "A bearing that ran hot enough to blue the race had a cause hours or days before it seized.",
          "Seals hardened by heat are a heat problem, not a seal problem."
        ]
      },
      "lube": {
        "icon": "ti-droplet-off",
        "name": "Lubrication Failure",
        "role": "The film that was supposed to keep the surfaces apart did not",
        "body": "Scuffing and scoring (tears in the sliding direction from micro-welding), smearing (metal dragged across a surface on a lightly loaded skidding roller), glazing (a mirror polish from running on too thin a film), and heat discolouration together. Cause: wrong viscosity, wrong lubricant, too little (starvation), too much (churning), contamination (water or particles in the film), or temperature that took the viscosity out of range.",
        "tips": [
          "Lubrication and Bearing Failure modules for the patterns.",
          "What was in the bearing when it came out: no grease, wrong grease, water, grit, churned grease. The answer is the cause.",
          "The PM sheet and the lube room are the latent cause most of the time."
        ]
      },
      "install": {
        "icon": "ti-hammer",
        "name": "Installation Damage",
        "role": "The part was damaged going in and failed from that",
        "body": "Brinell dents at ball spacing from a hammer or a press through the rolling elements. A nick on a seal lip from a keyway. A scored shaft from a hub driven on dry. A bent shaft from a sling. A crushed o-ring from a missing chamfer. Fretting from a fit that was never right. A shim stack that sprang. These parts were failing from day one, and the failure looks like something else until the origin is found.",
        "tips": [
          "A part that failed early with a clean environment and correct lubrication was probably installed into failure.",
          "Read the installation surfaces: dents, nicks, scores, and the marks of the tools that made them.",
          "The latent cause is a procedure: no induction heater, no puller, no chamfer, no torque wrench, no time."
        ]
      }
    },
    "exData": {
      "seal": {
        "icon": "ti-droplet",
        "name": "Mechanical seal, third failure in a year",
        "role": "Pump P-207, single cartridge seal, replaced three times in eleven months",
        "body": "Evidence: the third failed seal was kept. Faces showed an uneven wear track, thicker on one side, and heat checking. Shaft runout measured 0.06 mm TIR. Alignment readings on file from the last seal change were within tolerance. Pipe strain check had never been done. Indicator on the casing while the discharge flange was loosened: 0.15 mm movement.",
        "tips": [
          "Physical cause: the pipe was pulling the casing, the shaft ran eccentric through the seal, the faces wore unevenly and overheated.",
          "Why was the pipe pulling? A pipe support hanger had been removed during a platform modification two years ago and never refitted. The pump flange became the support.",
          "Why was it not caught? The seal change procedure includes alignment but not a pipe strain check, and no commissioning record existed for the modification.",
          "Root: the platform modification went through no change review, and the seal replacement procedure has no pipe strain step.",
          "Actions: refit the hanger (physical). Add pipe strain check to the seal and pump procedures; route platform and piping modifications through change control (latent). Verify: seal life over 12 months."
        ]
      },
      "belt": {
        "icon": "ti-circle-dashed",
        "name": "Fan belts every two months",
        "role": "Exhaust fan EF-3, matched set of three B belts, replaced six times in a year",
        "body": "Evidence: the last failed set kept. All three glazed, one cracked. Sheave groove gauge showed the motor sheave worn beyond the gauge. Tension was set by hand each time. Motor amps not recorded. The fan wheel, when locked out and inspected, was caked with product on one side.",
        "tips": [
          "Physical cause: slip and heat from a worn sheave, and a fan that had become heavier and unbalanced from buildup, all under hand-set tension.",
          "Why was the sheave never replaced? Belt changes were done as a quick job; nobody gauged the sheave because nobody had a gauge.",
          "Why was the wheel caked? No cleaning task on the PM; the fan was out of sight on the roof.",
          "Root: the fan PM consists of \"replace belts\" and nothing else, and the belt change has no tension or sheave step.",
          "Actions: new sheaves, cleaned and balanced wheel, tension by deflection gauge (physical). PM rewritten: wheel cleaning, sheave gauge, tension by gauge, amps recorded (latent). Verify: belt life and amps trend at 6 months."
        ]
      },
      "gearbox": {
        "icon": "ti-settings",
        "name": "Gearbox output seal leaks after rebuild",
        "role": "Shaft mount reducer on conveyor C-8, resealed twice in a month after a bearing rebuild",
        "body": "Evidence: the second seal kept; lip nicked. Shaft under the lip inspected: a groove from the old seal, and a keyway with a sharp edge. Output shaft play by hand: none. Breather clear. Oil level correct for the mounting position. Interview: the seal was pressed over the keyway without a sleeve.",
        "tips": [
          "Physical cause: the seal lip was cut on the keyway during installation and was also running in the groove worn by the old seal.",
          "Why? No wear sleeve in the rebuild kit and no keyway cover in the procedure.",
          "Why? The rebuild procedure is the manufacturer manual, which assumes a new shaft.",
          "Root: the plant's rebuild kit and procedure do not include the shaft inspection and wear sleeve that a used shaft needs.",
          "Actions: wear sleeve fitted, seal installed with keyway tape (physical). Rebuild procedure amended: shaft inspection under the lip, wear sleeve stocked, keyway cover step (latent). Verify: no leak at 3 months."
        ]
      },
      "guard": {
        "icon": "ti-shield-off",
        "name": "Guard found off, near miss",
        "role": "Belt drive guard on mixer M-2 found leaning against the wall with the drive running; a sleeve caught and torn on the sheave",
        "body": "Evidence: the guard, the torn sleeve, photographs, and interviews with the shift. The guard takes 14 bolts to remove. The belt tension check on the PM requires the guard off. The PM is due weekly. The guard had been left off for three weeks because the next check was \"soon\".",
        "tips": [
          "Physical cause: an unguarded nip point and a loose sleeve.",
          "Why was the guard off? Because the weekly tension check needs it off and it takes twenty minutes to refit.",
          "Why does the check need it off? The guard has no inspection port; it was fabricated as a box.",
          "Root: the guard was designed without regard to the PM task that would be done through it, and the PM interval made the task frequent.",
          "Actions: guard refitted, sleeve policy reminded (physical). Guard modified with a tension check port and captive fasteners; tension interval reviewed against belt history; guard inspection on shift start (latent). Verify: guard audit weekly for 3 months."
        ]
      }
    },
    "FIELDS": [
      "r_machine",
      "r_when",
      "r_problem",
      "r_timeline",
      "r_evidence",
      "r_physical",
      "r_whys",
      "r_root",
      "r_ca1",
      "r_ca2",
      "r_verify",
      "r_by"
    ]
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What is in front of you?",
        "hint": "This tree sorts the kind of cause so the corrective action lands at the right level.",
        "options": [
          {
            "label": "A part that failed for the second time or more on the same machine",
            "next": "rep1"
          },
          {
            "label": "A part that failed early, first time",
            "next": "early1"
          },
          {
            "label": "A failure that was expensive or hurt someone",
            "next": "r_full"
          },
          {
            "label": "An analysis that was done but the failure came back",
            "next": "came1"
          }
        ]
      },
      "rep1": {
        "q": "Was the last failure read (the part examined and the mechanism named), or was the part just replaced?",
        "options": [
          {
            "label": "Just replaced",
            "next": "r_read_now"
          },
          {
            "label": "Read, same mechanism both times",
            "next": "rep2"
          },
          {
            "label": "Read, different mechanism this time",
            "next": "r_two_causes"
          }
        ]
      },
      "r_read_now": {
        "type": "result",
        "cls": "action",
        "label": "read this one before the new part goes in",
        "text": "A second failure without a mechanism is a coin flip on the third.",
        "sub": "Preserve the part. Read it (Reading Failed Parts). Name the mechanism. Then the why chain, with the timeline of both failures. The corrective action from a named mechanism is usually obvious; without it there is nothing to correct.",
        "prevent": "Every failed part on a repeat machine is read and the mechanism logged in the work order."
      },
      "rep2": {
        "q": "Same mechanism twice. Where does the why chain end?",
        "options": [
          {
            "label": "At a procedure, PM task, or setting",
            "next": "r_latent_method"
          },
          {
            "label": "At a part, material, or design",
            "next": "r_latent_material"
          },
          {
            "label": "At a person",
            "next": "r_not_done"
          }
        ]
      },
      "r_latent_method": {
        "type": "result",
        "cls": "fix",
        "label": "latent cause in method: change the document",
        "text": "The failure is being produced by a written or unwritten procedure that everyone follows.",
        "sub": "Change the PM sheet, the procedure, the setting record, or the checklist so the correct action is the easy one. Give it an owner. Then verify: the next PM done the new way, and the failure interval measured.",
        "prevent": "Corrective action logged against the document, not the machine."
      },
      "r_latent_material": {
        "type": "result",
        "cls": "action",
        "label": "latent cause in material or design: change the spec",
        "text": "The wrong part, the wrong fluid, the wrong material pair, or a design that cannot carry the duty.",
        "sub": "Confirm with the drawing and the spare's paperwork. Change the specification in the CMMS and the stores catalogue so the right part is the one that gets issued. A design limit (undersized drive, closed centre on a fixed pump, no isolation joint) needs an engineered change and a budget.",
        "prevent": "Spare part specifications reviewed against the failure; stores catalogue corrected."
      },
      "r_not_done": {
        "type": "result",
        "cls": "escalate",
        "label": "the chain stopped too early",
        "text": "A why chain that ends at a person has not found the root cause.",
        "sub": "Ask what made that action normal for that person: the information they had, the tools they had, the time they had, the training, the sheet. The answer is a system, and it is the corrective action. Repeat the chain with the person in the room and no blame.",
        "prevent": "Root cause reports are reviewed for chains ending at a person, and sent back."
      },
      "r_two_causes": {
        "type": "result",
        "cls": "action",
        "label": "two failures, two causes, or one cause with two faces",
        "text": "A different mechanism the second time means either the first fix worked and something else is wrong, or one underlying condition is producing different symptoms.",
        "sub": "Timeline both failures. Look for a common upstream condition: misalignment that first wore a seal and then a bearing; contamination that first scored a spool and then a pump. Fishbone if the candidates are many. If the two are unrelated, treat them as two analyses.",
        "prevent": "Failure history by machine reviewed for patterns, not just counts."
      },
      "early1": {
        "q": "Read the part. What does it show?",
        "options": [
          {
            "label": "Installation damage (dents, nicks, scores, misfit)",
            "next": "r_install"
          },
          {
            "label": "Lubrication or contamination signature",
            "next": "r_lubecause"
          },
          {
            "label": "Overload or a wrong part",
            "next": "r_overload"
          },
          {
            "label": "Nothing obvious, part looks worn out early",
            "next": "r_duty"
          }
        ]
      },
      "r_install": {
        "type": "result",
        "cls": "fix",
        "label": "installed into failure",
        "text": "The part was damaged going in.",
        "sub": "The tool, the procedure, or the time. No induction heater, no puller, no keyway cover, no chamfer, no torque wrench, or a job done in a hurry. Fix the procedure and the tool kit. The Bearing, Seals, and Gearboxes modules have the installation steps.",
        "prevent": "Installation procedure with the tools listed; tools in the kit."
      },
      "r_lubecause": {
        "type": "result",
        "cls": "fix",
        "label": "lubrication or contamination",
        "text": "What was in the part when it came out is the cause.",
        "sub": "Wrong product, wrong quantity, wrong interval, water, dirt. The Lubrication module for the mechanism; the PM sheet and the lube room for the latent cause. Oil analysis if the machine has a sump.",
        "prevent": "Product, quantity, and interval on the PM sheet; lube room controls."
      },
      "r_overload": {
        "type": "result",
        "cls": "action",
        "label": "overload event or wrong part",
        "text": "An overload fracture or a part that failed at normal load.",
        "sub": "Find the event in the timeline (a jam, a start, an impact) or check the spare against the drawing (grade, material, size). A wrong part in stores is a latent cause that will repeat on every machine that uses it.",
        "prevent": "Event logging on the machine; stores catalogue verified against drawings."
      },
      "r_duty": {
        "type": "result",
        "cls": "action",
        "label": "duty exceeds design",
        "text": "A part that wears out early with everything else correct is carrying more than it was sized for.",
        "sub": "Load, speed, temperature, hours, starts, product: which has grown since the machine was designed. Re-rate the component with a service factor, or reduce the duty.",
        "prevent": "Duty reviewed after every process change."
      },
      "r_full": {
        "type": "result",
        "cls": "escalate",
        "label": "full method, with a team",
        "text": "Expensive failures and injuries get the eight steps, a team, and a report that goes up the chain.",
        "sub": "Preserve everything now. Define the problem. Timeline. Data. Physical cause. Why chain to the system. Actions with owners and dates. Verification date. For an injury, the plant's incident investigation procedure and the joint health and safety committee are involved, and the Safeguarding module's hazard walk is part of the evidence.",
        "prevent": "Repeat, expensive, and safety failures trigger the full method by rule, not by mood."
      },
      "came1": {
        "q": "What did the previous analysis conclude, and what was done?",
        "options": [
          {
            "label": "Concluded a cause, action was taken, failure returned",
            "next": "r_wrong_cause"
          },
          {
            "label": "Concluded a cause, action was never completed",
            "next": "r_no_action"
          },
          {
            "label": "Concluded \"operator error\" or \"bad part\"",
            "next": "r_not_done"
          }
        ]
      },
      "r_wrong_cause": {
        "type": "result",
        "cls": "action",
        "label": "the cause was wrong or incomplete",
        "text": "The action was taken and the failure came back: the analysis fixed a contributing factor, not the root, or there were two causes.",
        "sub": "Reopen with the evidence from the new failure. Was the previous cause verified with evidence or accepted as plausible? Were alternative theories tested? Fishbone the candidates and disprove each with the new part in hand.",
        "prevent": "Verification step enforced: the analysis is not closed until the failure interval proves it."
      },
      "r_no_action": {
        "type": "result",
        "cls": "fix",
        "label": "action without an owner",
        "text": "The analysis was right and nothing changed because nobody was assigned to change it.",
        "sub": "Assign the action, with a date. Do it. Then verify. The report goes back to open until it is done.",
        "prevent": "Every corrective action has a named owner and a due date in the CMMS."
      }
    }
  },
  "selfcheck": {
    "overview": [
      [
        "Which level of cause, when fixed, stops the failure from returning?",
        [
          "Physical",
          "Human",
          "Latent (system)",
          "None"
        ],
        2,
        "Fix the physical cause and it fails again in six months."
      ],
      [
        "Which failures get a full root cause analysis?",
        [
          "All of them",
          "Repeat, expensive, and safety failures",
          "None",
          "Only bearings"
        ],
        1,
        "The rest get read and logged."
      ]
    ],
    "method": [
      [
        "The first step of the method?",
        [
          "Define the problem",
          "Preserve the evidence",
          "Ask why",
          "Replace the part"
        ],
        1,
        "Before anyone cleans or throws anything away."
      ],
      [
        "A corrective action without an owner and a date is?",
        [
          "Complete",
          "A wish",
          "Verified",
          "A root cause"
        ],
        1,
        "Every action gets a name and a date."
      ],
      [
        "The analysis is closed when?",
        [
          "The report is written",
          "The evidence shows the failure stopped",
          "The part is replaced",
          "The meeting ends"
        ],
        1,
        "Set a date, check, then close."
      ]
    ],
    "evidence": [
      [
        "A fracture face should be?",
        [
          "Wire brushed clean",
          "Left uncleaned, and the halves never fitted back together",
          "Degreased",
          "Filed smooth"
        ],
        1,
        "Rubbing the halves destroys the origin marks."
      ],
      [
        "What happens to a failed part that came off a machine?",
        [
          "Scrap bin",
          "Boxed with the work order number and date, kept a month",
          "Cleaned and returned to stores",
          "Thrown out immediately"
        ],
        1,
        "The shoebox is the cheapest reliability program in the plant."
      ]
    ],
    "reading": [
      [
        "Beach marks on a fracture face indicate?",
        [
          "Overload",
          "Fatigue",
          "Corrosion",
          "Installation damage"
        ],
        1,
        "Follow them back to the origin."
      ],
      [
        "A fine red powder at a bearing housing fit is?",
        [
          "Grease",
          "Fretting: the fit was loose or the joint moved",
          "Paint",
          "Rust from water"
        ],
        1,
        "The ring or hub was moving microscopically."
      ],
      [
        "Steel that has turned blue got to about?",
        [
          "100°C",
          "300°C",
          "600°C",
          "It does not indicate temperature"
        ],
        1,
        "Straw at about 200; blue at about 300."
      ],
      [
        "Dents in a bearing race at ball spacing were caused by?",
        [
          "Fatigue",
          "A hammer or a press through the rolling elements",
          "Corrosion",
          "Overload in service"
        ],
        1,
        "Installed into failure."
      ]
    ],
    "whys": [
      [
        "A why chain that ends at a person?",
        [
          "Is complete",
          "Has not found the root cause",
          "Names the operator",
          "Is the standard"
        ],
        1,
        "Ask what made that action normal."
      ],
      [
        "Each answer in a Five Whys must be?",
        [
          "An opinion",
          "A fact you can check",
          "A guess",
          "Blame"
        ],
        1,
        "\"Because the sheet gave no quantity\" is on a piece of paper."
      ],
      [
        "The fishbone category for \"no commissioning baseline existed\"?",
        [
          "Machine",
          "Measurement",
          "Material",
          "Environment"
        ],
        1,
        "Instruments, readings, baselines, alarms."
      ]
    ],
    "traps": [
      [
        "\"Bad bearing\" as a root cause is?",
        [
          "Correct",
          "A trap: bearings are installed, lubricated, and loaded into failing",
          "Common and fine",
          "A material cause"
        ],
        1,
        "Read it."
      ],
      [
        "Vibration is a?",
        [
          "Cause",
          "Symptom",
          "Contributing factor",
          "Root"
        ],
        1,
        "Misalignment is a cause; a worn coupling absorbing it is a contributing factor."
      ]
    ],
    "examples": [
      [
        "In the seal example, the root cause was?",
        [
          "A bad seal",
          "A pipe hanger removed during a modification with no change review, and no pipe strain step in the procedure",
          "Misalignment",
          "Operator error"
        ],
        1,
        "The pump flange had become the pipe support."
      ],
      [
        "In the guard example, why was the guard off?",
        [
          "Laziness",
          "The weekly tension check needed it off and it took twenty minutes to refit",
          "It was broken",
          "Nobody knows"
        ],
        1,
        "Designed without regard to the PM task."
      ]
    ],
    "report": [
      [
        "The root cause on the report is written as?",
        [
          "A phrase like \"lubrication issue\"",
          "A sentence a stranger could check",
          "A part number",
          "A name"
        ],
        1,
        "If it cannot be written that way, it has not been found."
      ]
    ],
    "troubleshoot": [
      [
        "Second failure, the first part was just replaced without reading it. First action?",
        [
          "Replace again",
          "Preserve and read this one before the new part goes in",
          "Order two spares",
          "Blame the supplier"
        ],
        1,
        "A second failure without a mechanism is a coin flip on the third."
      ],
      [
        "Action taken, failure returned. Most likely?",
        [
          "Bad luck",
          "The cause was a contributing factor, not the root, or there were two causes",
          "The part is defective",
          "The action was too slow"
        ],
        1,
        "Reopen with the new evidence and test the alternatives."
      ]
    ],
    "safety": [
      [
        "A failed machine is?",
        [
          "Safe because it stopped",
          "In an unknown state: isolate before evidence collection",
          "Ready to restart for a test",
          "Harmless"
        ],
        1,
        "Never restart to see what happens."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"callout-box blue\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Every prevent-recurrence line in this series points here</div></div>\n      <div class=\"callout-box-body\">Two hundred and sixty diagnostic results across fifteen modules end with what to change so the failure does not come back. That change is only right if the cause is right, and finding the cause is a skill separate from fixing the fault. <strong>A parts-swapper replaces the bearing. A troubleshooter finds out why it failed. A root cause analyst finds out why the plant let it fail, and changes that.</strong> This module is the third skill.</div>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-stairs\"></i> Three levels of cause</div>\n      <table class=\"ref-table\">\n        <tr><th>Level</th><th>What it answers</th><th>Bearing example</th><th>Fix at this level</th></tr>\n        <tr><td>Physical cause</td><td>What broke, and by what mechanism</td><td>The bearing overheated; grease churned; the cage cracked</td><td>Replace the bearing. Fails again in six months.</td></tr>\n        <tr><td>Human cause</td><td>What someone did or did not do that produced the physical cause</td><td>The bearing was filled with grease, relief plug in, every PM</td><td>Tell the technician. Fails again when they are on vacation.</td></tr>\n        <tr><td>Latent (system) cause</td><td>What in the plant's systems made the human action normal</td><td>The PM sheet says \"grease\" with no quantity and no procedure; nobody owns the lubrication program</td><td>Write the quantity on the sheet. Assign the program. Fails no more.</td></tr>\n      </table>\n      <ul class=\"info-block-tips\">\n        <li>Stop at the physical cause and you have a repair. Stop at the human cause and you have a blame. Reach the latent cause and you have a fix.</li>\n        <li>Most latent causes are boring: a missing number on a sheet, a spare that was never stocked, a drawing that was never updated, a task nobody owns. That is why they persist.</li>\n        <li>Not every failure deserves a full analysis. A repeat failure, an expensive one, a near miss, or one that hurt someone does. A first-time failure of a cheap part gets read (Reading Failed Parts tab) and logged, and becomes a full analysis if it happens again.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the second time is the first time you can know</strong>One failure is a data point. Two is a pattern. When a part fails on the same machine for the second time, the work order should say \"repeat\" and the analysis should start before the new part goes in. A plant that tracks repeat failures by machine finds that a small number of machines produce most of the work, and that is where the analysis pays.</div></div>",
    "method": "<div class=\"bw-section-label\">The method: eight steps in order</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li><strong>1. Preserve the evidence.</strong> Before anyone cleans, disassembles, or throws anything away. Photographs in place. Oil sample. The failed part bagged and labelled. The control system alarm log saved. Evidence tab.</li>\n        <li><strong>2. Define the problem in one sentence.</strong> What failed, on which machine, when, and what it cost (downtime, injury, scrap). \"The head pulley bearing on conveyor C-12 seized on 4 September, stopping the line for six hours.\" Not \"bearing problems on C-12.\"</li>\n        <li><strong>3. Build the timeline.</strong> Every event leading up to the failure, with times: the last PM, the last repair, the last product change, the last alarm, what the operator noticed, what maintenance did. Work orders, logs, and interviews. Most causes are visible in the timeline before any analysis.</li>\n        <li><strong>4. Collect the data.</strong> Readings (vibration, temperature, amps, oil analysis) before and at failure. The failed part read (Reading Failed Parts tab). The drawings, the PM sheet, the procedure, the spare's specification.</li>\n        <li><strong>5. Find the physical cause.</strong> The mechanism: fatigue, overload, wear, corrosion, lubrication failure, contamination, misalignment. The part tells you this if it was preserved and read.</li>\n        <li><strong>6. Ask why until the answer is a system.</strong> Five Whys, or a fishbone if the causes are many. Keep going past the person to the process that shaped what they did.</li>\n        <li><strong>7. Decide the corrective actions.</strong> One for the physical cause (the repair), one or more for the latent cause (the change). Each with an owner and a date. A corrective action without an owner is a wish.</li>\n        <li><strong>8. Verify.</strong> After the change, did the failure stop. Set a date to check, check it, and close the analysis only when the evidence says it worked.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-users\"></i> Who is in the room</div>\n      <ul class=\"info-block-tips\">\n        <li>The person who found it, the person who fixed it, the operator who runs it, and whoever owns the PM program. Four people, an hour, at the machine if possible.</li>\n        <li>Not a blame meeting. The moment it becomes one, people stop telling you what happened, and the analysis is worthless. The question is always \"what about the system made that the normal thing to do.\"</li>\n        <li>The engineer or vendor when the physical cause is beyond the plant's ability to read: a metallurgical failure, a design question, a repeated failure of a new part.</li>\n      </ul>\n    </div>",
    "evidence": "<div class=\"bw-section-label\">Evidence: the part is only readable once</div>\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-hexagon callout-box-icon\"></i><div class=\"callout-box-title\">The first person to touch a failed part decides whether anyone will ever know why it failed</div></div>\n      <div class=\"callout-box-body\">A bearing that is wiped clean, hammered off the shaft, and dropped in the scrap bin has been erased. A seal face that has been handled with greasy fingers cannot be read. A fracture face that has been rubbed together, or has rusted for a week in a puddle, has lost the marks that point to the origin. <strong>Preserve first. Analyse later. The cost of keeping a part for a week is nothing; the cost of losing the evidence is doing the whole failure again.</strong></div>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-camera\"></i> In place, before disassembly</div>\n      <ul class=\"info-block-tips\">\n        <li>Photographs from several angles, with something for scale, before anything is touched. The position of parts, the debris pattern, the oil trail, the heat discolouration, the wear track on the shaft, the shim stack, the belt position on the pulley.</li>\n        <li>Readings: temperature by infrared while it is still warm, the vibration reading if there is one, the amps on the panel, the take-up position, the sight glass level.</li>\n        <li>The control system: alarm history, trend data, the last hour of the drive log. Save it before it rolls off.</li>\n        <li>Witnesses: what the operator saw, heard, and smelled, and when, in their words, written down that day.</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-package\"></i> During and after disassembly</div>\n      <ul class=\"info-block-tips\">\n        <li>Disassemble gently. A puller, not a hammer. Mark orientation (which way was up, which end was drive) with a paint pen before parts come apart.</li>\n        <li>Do not clean the part. Do not wire brush a fracture face, degrease a bearing, or wipe a seal face. Loose debris is bagged separately. The dirt is evidence.</li>\n        <li>Do not fit the two halves of a fracture back together. Rubbing them destroys the surface that shows where the crack started.</li>\n        <li>Bag, label (machine, position, date, who), and store dry. Fracture faces coated in light oil or sealed in a bag with a desiccant if they will not be read for a while.</li>\n        <li>Oil and grease samples from the failed component, in a clean labelled bottle, before anything is flushed.</li>\n        <li>Keep the spare's paperwork: the part number fitted, its source, its date. A wrong part is a common cause and the only evidence is the box.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a shoebox and a marker</strong>Every failed part that comes off a machine goes in a box with the work order number and the date on it, and the box sits on a shelf for a month. Most get thrown out. The one that turns out to be the second failure on that machine is sitting there, unclean, unhammered, readable. That shelf is the cheapest reliability program in the plant.</div></div>",
    "reading": "<div class=\"bw-section-label\">Reading failed parts: the mechanism is written on the surface</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectMech('fatigue')\" id=\"mcard-fatigue\"><div class=\"type-card-icon\"><i class=\"ti ti-wave-sine\"></i></div><div class=\"type-card-name\">Fatigue fracture</div><div class=\"type-card-sub\">Beach marks, a small final zone</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('overload')\" id=\"mcard-overload\"><div class=\"type-card-icon\"><i class=\"ti ti-bolt\"></i></div><div class=\"type-card-name\">Overload fracture</div><div class=\"type-card-sub\">Rough, crystalline, one event</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('wear')\" id=\"mcard-wear\"><div class=\"type-card-icon\"><i class=\"ti ti-line-dashed\"></i></div><div class=\"type-card-name\">Wear</div><div class=\"type-card-sub\">Abrasive, adhesive, erosive</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('surfacefatigue')\" id=\"mcard-surfacefatigue\"><div class=\"type-card-icon\"><i class=\"ti ti-grain\"></i></div><div class=\"type-card-name\">Surface fatigue</div><div class=\"type-card-sub\">Pitting and spalling</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('corrosion')\" id=\"mcard-corrosion\"><div class=\"type-card-icon\"><i class=\"ti ti-droplet\"></i></div><div class=\"type-card-name\">Corrosion and fretting</div><div class=\"type-card-sub\">Rust, staining, red dust</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('thermal')\" id=\"mcard-thermal\"><div class=\"type-card-icon\"><i class=\"ti ti-flame\"></i></div><div class=\"type-card-name\">Thermal damage</div><div class=\"type-card-sub\">Colour, softening, cracking</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('lube')\" id=\"mcard-lube\"><div class=\"type-card-icon\"><i class=\"ti ti-droplet-off\"></i></div><div class=\"type-card-name\">Lubrication failure</div><div class=\"type-card-sub\">Scuffing, smearing, glazing</div></div>\n      <div class=\"type-card\" onclick=\"selectMech('install')\" id=\"mcard-install\"><div class=\"type-card-icon\"><i class=\"ti ti-hammer\"></i></div><div class=\"type-card-name\">Installation damage</div><div class=\"type-card-sub\">Dents, nicks, misfit marks</div></div>\n    </div>\n    <div id=\"mech-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a mechanism above</div></div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-focus\"></i> Reading a fracture face: finding the origin</div>\n      <ul class=\"info-block-tips\">\n        <li>Beach marks (curved lines like a shoreline) are the growth of a fatigue crack; they curve around the origin. Follow the curves back to where they are tightest: that is where the crack started. The origin is where the cause is (a stress raiser, a nick, a corrosion pit, a keyway corner).</li>\n        <li>Chevron marks (V shapes) on a brittle fracture point back toward the origin like arrows.</li>\n        <li>Ratchet marks (small steps around the edge of a fracture) are multiple crack origins that joined; many ratchet marks mean high stress or many stress raisers all round, like a shaft with a sharp shoulder.</li>\n        <li>The final fracture zone (rough, crystalline, the part that let go at the end) tells you the load: a small final zone means the crack grew slowly under a low load; a large one means the part was heavily loaded and failed early in the crack's life.</li>\n        <li>Beach marks that are smooth and rubbed: the crack faces were pressed together during growth (bending, rotating bending). Rotating bending fatigue on a shaft starts at the surface and the final zone is off centre in the direction of the load.</li>\n        <li>Torsional fatigue on a shaft: a 45 degree helical fracture, or a star pattern from a keyway.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the origin is where the fix is</strong>Find the origin of the crack and you have found the stress raiser: the keyway with a sharp corner, the shoulder with no radius, the corrosion pit, the tool mark, the weld toe. The part did not fail because it was weak. It failed because something concentrated the stress at that spot, and the new part has the same spot.</div></div>",
    "whys": "<div class=\"bw-section-label\">Five Whys and the fishbone</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-help-circle\"></i> Five Whys</div>\n      <div class=\"info-block-body\">Start from the physical cause and ask why it happened. Then ask why that happened. Keep asking until the answer is a system, a process, or a decision, and not a person or a part. Five is a guide; some chains need three and some need seven. Each answer must be a fact you can check, not a guess.</div>\n      <div style=\"background:#111110; border:0.5px solid #3a3a36; border-radius:6px; padding:0.75rem 1rem; margin:0.6rem 0; font-family:'Share Tech Mono',monospace; font-size:12px; color:#EF9F27; line-height:1.9;\">Problem: motor DE bearing seized, line down 6 hours<br>Why? The bearing overheated and the cage collapsed. (Read the bearing: grease churned, cage cracked, no contamination.)<br>Why? It was overfilled with grease. (Grease found in the windings and past the inner cap.)<br>Why? The technician pumped until grease appeared at the relief, with the plug in. (Interview.)<br>Why? The PM sheet says \"grease motor bearings\" with no quantity and no procedure. (The sheet.)<br>Why? The PM program was written from the old CMMS import and nobody has owned lubrication since the last reliability tech left. (The org chart.)<br><br>Corrective actions:<br>Physical: replace bearing, clean windings.<br>Latent: quantity on every grease PM by formula; relief plug step in the procedure; lubrication program assigned to a named owner. Verify: no repeat in 12 months, grease consumption tracked.</div>\n      <ul class=\"info-block-tips\">\n        <li>Each why is answered with evidence, not opinion. \"Because the technician was careless\" is an opinion and it stops the chain. \"Because the sheet gave no quantity\" is a fact on a piece of paper.</li>\n        <li>A chain that ends at a person has not ended. Ask what made that the normal thing for that person to do.</li>\n        <li>Two chains are often needed: why did it fail, and why was it not caught before it failed (the detection chain: the PM did not include a temperature check, the vibration route did not cover this motor).</li>\n      </ul>\n    </div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-fish\"></i> Fishbone (cause and effect, six categories)</div>\n      <div class=\"info-block-body\">When there are many possible causes and one chain is not enough, list every candidate under six headings and then test each one against the evidence. The ones the evidence supports get a Five Whys chain. The ones it rules out get crossed off and stay on the diagram so the next person knows they were considered.</div>\n      <table class=\"ref-table\">\n        <tr><th>Category</th><th>Ask about</th><th>Examples in this series</th></tr>\n        <tr><td>Machine</td><td>Design, condition, age, modification, capacity</td><td>Undersized drive, worn sheave, closed centre valve on a fixed pump, no isolation joint</td></tr>\n        <tr><td>Method</td><td>Procedure, PM task, setting, sequence</td><td>Grease with no quantity, alignment without soft foot, torque by feel, grout from two sides</td></tr>\n        <tr><td>Material</td><td>Parts, consumables, product, fluid</td><td>Wrong belt section, GL-5 in a bronze worm box, dirty new oil, non-inverter-duty motor on a VFD</td></tr>\n        <tr><td>People</td><td>Training, information, staffing, communication</td><td>No handoff to the electrician, nobody owns lubrication, the operator was never told what the interlock means</td></tr>\n        <tr><td>Measurement</td><td>Instruments, readings, baselines, alarms</td><td>No commissioning baseline, no case drain test, no stop-time measurement, the sight glass read running</td></tr>\n        <tr><td>Environment</td><td>Temperature, moisture, dust, vibration from neighbours, access</td><td>Cold start viscosity, wash-down through the breather, a guard that blocks the PM task</td></tr>\n      </table>\n    </div>",
    "traps": "<div class=\"bw-section-label\">Traps: how analyses go wrong</div>\n    <div class=\"info-block\">\n      <ul class=\"info-block-tips\">\n        <li><strong>Blaming the part.</strong> \"Bad bearing.\" Bearings from a reputable supplier are almost never defective. A part that fails was installed, lubricated, loaded, or aligned into failing. Read it.</li>\n        <li><strong>Stopping at the first cause.</strong> The bearing was overgreased. Why? That is the analysis. Stopping here fixes one bearing.</li>\n        <li><strong>\"Operator error\" or \"technician error\" as a root cause.</strong> It is a description of the human cause and it is never the root. The system that made the error easy or normal is the root.</li>\n        <li><strong>Confusing symptom, cause, and contributing factor.</strong> Vibration is a symptom. Misalignment is a cause. A worn coupling that absorbed the misalignment for two years is a contributing factor. They get different actions.</li>\n        <li><strong>Confirmation bias.</strong> The first theory becomes the conclusion and the evidence is read to fit it. Write down two alternative theories before looking at the part, and try to disprove the favourite.</li>\n        <li><strong>Evidence gone.</strong> The part was cleaned, the oil was flushed, the log rolled off. The analysis is now guesswork. Preserve first.</li>\n        <li><strong>Analysis without action.</strong> A report that names the root cause and changes nothing. Every analysis ends with an owner and a date, or it was a conversation.</li>\n        <li><strong>Action without verification.</strong> The PM sheet was changed; did the failure stop? Set a date and check.</li>\n        <li><strong>Analysing everything.</strong> Full analysis on every failure exhausts everyone and nothing gets done. Repeat failures, expensive failures, and safety events get the full method. The rest get read and logged.</li>\n        <li><strong>Fixing it with a spare.</strong> Adding a spare motor to the shelf treats the symptom (downtime) and leaves the cause. Sometimes the spare is the right call, but it is not a root cause fix and should not be recorded as one.</li>\n      </ul>\n    </div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: write the cause as a sentence a stranger could check</strong>\"Lubrication issue\" is not a cause. \"The DE bearing on M-114 was filled to the relief with the plug in at every quarterly PM because the PM task reads 'grease' with no quantity\" is a cause, and anyone can walk over to the PM sheet and confirm it. If the cause cannot be written that way, it has not been found.</div></div>",
    "examples": "<div class=\"bw-section-label\">Worked examples from the series</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectEx('seal')\" id=\"ecard-seal\"><div class=\"type-card-icon\"><i class=\"ti ti-droplet\"></i></div><div class=\"type-card-name\">Mechanical seal, third failure in a year</div><div class=\"type-card-sub\">Pumps, seals, alignment, installation</div></div>\n      <div class=\"type-card\" onclick=\"selectEx('belt')\" id=\"ecard-belt\"><div class=\"type-card-icon\"><i class=\"ti ti-circle-dashed\"></i></div><div class=\"type-card-name\">Fan belts every two months</div><div class=\"type-card-sub\">Power transmission, motors</div></div>\n      <div class=\"type-card\" onclick=\"selectEx('gearbox')\" id=\"ecard-gearbox\"><div class=\"type-card-icon\"><i class=\"ti ti-settings\"></i></div><div class=\"type-card-name\">Gearbox output seal leaks after rebuild</div><div class=\"type-card-sub\">Gearboxes, lubrication</div></div>\n      <div class=\"type-card\" onclick=\"selectEx('guard')\" id=\"ecard-guard\"><div class=\"type-card-icon\"><i class=\"ti ti-shield-off\"></i></div><div class=\"type-card-name\">Guard found off, near miss</div><div class=\"type-card-sub\">Safeguarding, method</div></div>\n    </div>\n    <div id=\"ex-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select an example above</div></div>",
    "report": "<div class=\"bw-section-label\">Write one: a one-page root cause report</div>\n    <div class=\"ref-note\">Fill it in on the phone at the machine. It saves in this browser, prints as a page, and copies as text for the work order or the CMMS. Nothing leaves the device. The Reset button clears it.</div>\n    <div class=\"rca-form\" id=\"rca-form\">\n      <label>Machine and location</label><input id=\"r_machine\" placeholder=\"C-12 head pulley, packaging line 2\">\n      <label>Date and time of failure</label><input id=\"r_when\" placeholder=\"2026-09-04 14:20\">\n      <label>Problem statement (one sentence: what, where, when, cost)</label><textarea id=\"r_problem\" placeholder=\"The head pulley DE bearing on C-12 seized at 14:20 on 4 Sept, stopping line 2 for 6 hours.\"></textarea>\n      <label>Timeline (last PM, last repair, last change, what was noticed and when)</label><textarea id=\"r_timeline\"></textarea>\n      <label>Evidence preserved (photos, part, oil sample, readings, logs)</label><textarea id=\"r_evidence\"></textarea>\n      <label>Physical cause (mechanism, from reading the part)</label><textarea id=\"r_physical\"></textarea>\n      <label>Why chain (why, why, why... to the system)</label><textarea id=\"r_whys\"></textarea>\n      <label>Root (latent) cause, as a sentence a stranger could check</label><textarea id=\"r_root\"></textarea>\n      <label>Corrective action: physical (the repair)</label><input id=\"r_ca1\">\n      <label>Corrective action: latent (the change), owner, and date</label><textarea id=\"r_ca2\"></textarea>\n      <label>Verification: what will be checked, by when, by whom</label><input id=\"r_verify\">\n      <label>Analysed by</label><input id=\"r_by\">\n      <div class=\"rca-btns\">\n        <button class=\"pm-btn\" onclick=\"rcaSave()\"><i class=\"ti ti-device-floppy\"></i> Save</button>\n        <button class=\"pm-btn\" onclick=\"rcaCopy()\"><i class=\"ti ti-copy\"></i> Copy as text</button>\n        <button class=\"pm-btn\" onclick=\"window.print()\"><i class=\"ti ti-printer\"></i> Print</button>\n        <button class=\"pm-btn\" onclick=\"if(confirm('Clear the form?')){rcaReset();}\">Reset</button>\n      </div>\n      <div class=\"ref-note\" id=\"rca-status\"></div>\n    </div>",
    "troubleshoot": "<div class=\"bw-section-label\">Which way to go with a repeat failure</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">This tree does not diagnose the machine. It diagnoses the analysis.</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\"><p>The other fifteen modules find the fault. This tree takes a failure that has already been diagnosed and asks what kind of cause is behind it, so the corrective action lands at the right level. Start with the failed part in front of you and the last analysis (if any) in hand.</p></div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"rc-progress\" style=\"width:8%\"></div></div>\n    <div id=\"rc-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Safety during failure investigation</div>\n    <div class=\"callout-box red\">\n      <div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">A failed machine is a machine in an unknown state</div></div>\n      <div class=\"callout-box-body\">Something broke, and until you know what, you do not know what else is loose, cracked, pressurised, or about to let go. Evidence collection happens after isolation, not instead of it. <strong>Never restart a failed machine to see what happens. Never reach in to retrieve a part while anything can move. Never handle a fracture face with bare hands; fresh fracture edges cut.</strong></div>\n    </div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\">\n      <ul class=\"info-block-tips\">\n        <li>Lockout and stored energy release before the guard comes off, same as any maintenance. A machine that stopped because a coupling sheared still has a motor that will run and a load that may be hanging on a broken part.</li>\n        <li>Broken parts are sharp. Gloves for handling; bare hands only for surfaces that need reading, and then by the edges.</li>\n        <li>Hot: a seized bearing, a slipped belt, a burnt motor. Infrared before touch.</li>\n        <li>Chemical: the oil, the process fluid, the grease, and anything the failure released. SDS and PPE.</li>\n        <li>Fragments: a burst wheel, a thrown coupling, a shattered seal face. Look for what is missing and where it went before assuming the area is clear.</li>\n        <li>Interviews are not interrogations. Someone who is afraid of blame will not tell you what happened, and what happened is the evidence.</li>\n      </ul>\n    </div>"
  },
  "title": "BuiltWright: Root Cause: Module 16",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_bearing_module_v1.html#diagnose\">Bearings: reading the failed bearing</a><a href=\"builtwright_gearboxes_v1.html#wear\">Gearboxes: reading the teeth</a><a href=\"builtwright_seals_gaskets_v1.html#failure\">Seals: reading the failure</a><a href=\"builtwright_power_transmission_v1.html#failure\">Belts and chains: reading the failure</a><a href=\"builtwright_vibration_v1.html#trend\">Vibration: the trend is the evidence</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 16 of series &nbsp;·&nbsp; root cause</div>",
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
    ".rca-form label { display:block; font-family: 'Share Tech Mono', monospace; font-size:9px; letter-spacing:1px; text-transform:uppercase; color:#888780; margin:10px 0 3px 0; }",
    ".rca-form input, .rca-form textarea { width:100%; font-family: 'Rajdhani', sans-serif; font-size:14px; background:#1a1a18; border:0.5px solid #3a3a36; border-radius:5px; padding:8px 10px; color:#f0ede4; outline:none; }",
    ".rca-form textarea { min-height:70px; resize:vertical; }",
    ".rca-form input:focus, .rca-form textarea:focus { border-color:#BA7517; }",
    ".rca-btns { display:flex; gap:8px; margin-top:12px; flex-wrap:wrap; }",
    ".pm-btn { font-family: 'Share Tech Mono', monospace; font-size:10px; letter-spacing:1px; text-transform:uppercase; background:#242420; color:#BA7517; border:0.5px solid #BA7517; border-radius:4px; padding:8px 12px; cursor:pointer; }",
    "@media print { .rca-btns{display:none} .rca-form input,.rca-form textarea{border:0.5px solid #999;background:#fff;color:#000} }"
  ],
  "cssShared": 86
});
