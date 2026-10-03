BW.register("materials", {
  "key": "materials",
  "num": "24",
  "name": "Materials, Stress and Failure",
  "source": "builtwright_materials_stress_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "stress",
      "label": "Stress and Strain",
      "active": false,
      "style": ""
    },
    {
      "id": "curve",
      "label": "The Curve",
      "active": false,
      "style": ""
    },
    {
      "id": "loads",
      "label": "Loads",
      "active": false,
      "style": ""
    },
    {
      "id": "fatigue",
      "label": "Fatigue",
      "active": false,
      "style": ""
    },
    {
      "id": "fasteners",
      "label": "Bolted Joints",
      "active": false,
      "style": ""
    },
    {
      "id": "materials",
      "label": "Materials",
      "active": false,
      "style": ""
    },
    {
      "id": "thermal",
      "label": "Heat",
      "active": false,
      "style": ""
    },
    {
      "id": "wear",
      "label": "Wear",
      "active": false,
      "style": ""
    },
    {
      "id": "calc",
      "label": "Calculators",
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
    "title": "Materials, Stress and Failure",
    "badge": "Module 24",
    "tree": null,
    "treeTab": null,
    "groups": {
      "selectProp": {
        "scope": "#panel-overview",
        "cardClass": ".type-card",
        "prefix": "propcard-",
        "data": "prop-displayData",
        "display": "prop-display"
      }
    },
    "reveals": {},
    "toggles": [
      {
        "name": "toggleAdv",
        "byId": true
      }
    ],
    "afterSwitch": null,
    "bespoke": [
      "function prn(id){return parseFloat(document.getElementById(id).value)||0;}",
      "function prf(x,d){return isFinite(x)?x.toFixed(d===undefined?1:d):'n/a';}",
      "function prs(id,h){document.getElementById(id).innerHTML=h;}",
      "function calcTens(){var F=prn('te_f')*1000,d=prn('te_d'),L=prn('te_l')*1000,Y=prn('te_y');if(d<=0){prs('te_out','Enter a diameter.');return;}var A=Math.PI*d*d/4,s=F/A;prs('te_out','Area: '+prf(A,0)+' mm²<br>Stress: '+prf(s,1)+' MPa<br>Stretch: '+prf(s/207000*L,2)+' mm (E = 207 GPa)<br>Factor of safety on yield: '+prf(Y/s,2)+(Y/s<1.5?'<br>Low margin. Check the loading and the strength.':''));}",
      "function calcShaft(){var T=prn('sh_t'),M=prn('sh_m'),d=prn('sh_d')/1000;if(d<=0){prs('sh_out','Enter a diameter.');return;}var tau=16*T/(Math.PI*d*d*d)/1e6,sig=32*M/(Math.PI*d*d*d)/1e6,eq=Math.sqrt(sig*sig+3*tau*tau);prs('sh_out','Shear stress from torque: '+prf(tau,1)+' MPa<br>Bending stress: '+prf(sig,1)+' MPa (it reverses every turn on a rotating shaft)<br>Combined equivalent stress: '+prf(eq,1)+' MPa<br>Compare with the fatigue strength of the shaft at its worst notch, which can be a quarter of the ultimate strength or less.');}",
      "function calcCant(){var F=prn('ca_f'),L=prn('ca_l')/1000,d=prn('ca_d')/1000;if(d<=0){prs('ca_out','Enter a diameter.');return;}var I=Math.PI*Math.pow(d,4)/64,del=F*L*L*L/(3*207e9*I),sig=32*F*L/(Math.PI*d*d*d)/1e6;prs('ca_out','Bending moment: '+prf(F*L,0)+' N·m<br>Bending stress: '+prf(sig,1)+' MPa<br>Deflection at the load: '+prf(del*1000,3)+' mm<br>Twice the distance would give '+prf(sig*2,1)+' MPa and '+prf(del*8000,3)+' mm');}",
      "function calcBolt(){var d=prn('bo_d'),A=prn('bo_a'),g=prn('bo_g'),F=prn('bo_f')*1000,K=prn('bo_k');if(A<=0){prs('bo_out','Enter a stress area.');return;}prs('bo_out','Stress in the bolt: '+prf(F/A,0)+' MPa<br>Stretch: '+prf(F*g/(A*207000),3)+' mm<br>Torque to reach it: '+prf(K*d/1000*F,0)+' N·m (from T = K × d × F, which is only as good as K)<br>Only about a tenth of that torque goes into the stretch.');}",
      "function calcTherm(){var L=prn('th_l')*1000,dT=prn('th_t'),a=prn('th_a')*1e-6;prs('th_out','Free growth: '+prf(a*L*dT,1)+' mm<br>Stress if held at both ends: '+prf(207000*a*dT,0)+' MPa (using E = 207 GPa, steel)<br>A stress above the yield strength means the part will buckle or push its supports.');}",
      "function calcHoop(){var P=prn('ho_p')/10,d=prn('ho_d'),t=prn('ho_t');if(t<=0){prs('ho_out','Enter a wall thickness.');return;}prs('ho_out','Hoop stress: '+prf(P*d/(2*t),1)+' MPa<br>Axial stress: '+prf(P*d/(4*t),1)+' MPa<br>'+(t>d/20?'The wall is thick for this formula, which is only a guide here.':'Thin wall formula applies.')+'<br>Halve the wall and the stress doubles.');}",
      "function calcLife(){var C=prn('li_c'),P=prn('li_p'),n=prn('li_n'),e=prn('li_e')||3;if(P<=0||n<=0){prs('li_out','Enter a load and a speed.');return;}var L=Math.pow(C/P,e);prs('li_out','Basic rating life: '+prf(L,1)+' million revolutions<br>At this speed: '+prf(L*1e6/(60*n),0)+' hours<br>With a 20% higher load: '+prf(L*1e6/(60*n)*Math.pow(1/1.2,e),0)+' hours');}"
    ],
    "helpers": [],
    "init": "calcTens();calcShaft();calcCant();calcBolt();calcTherm();calcHoop();calcLife();"
  },
  "cards": {
    "prop-displayData": {
      "strength": {
        "icon": "ti-barbell",
        "name": "Strength",
        "role": "Yield and ultimate strength, in MPa (N/mm²) or psi",
        "body": "Yield strength is the stress at which a metal stops springing back and begins to stretch for good. Ultimate strength is the highest stress it reaches before breaking. For design, yield is the limit that matters, because a part that has yielded has changed shape. Mild structural steel yields at around 250 MPa. Quenched and tempered alloy steel can be 650 to 1000 MPa or more.",
        "tips": [
          "A bolt marked 8.8 has a minimum ultimate strength of 800 MPa and a yield of 640 MPa. The two numbers in the grade tell you both.",
          "Strength is measured on a new, clean specimen. Corrosion, damage, heat and fatigue take it down."
        ]
      },
      "stiffness": {
        "icon": "ti-ruler-2",
        "name": "Stiffness",
        "role": "Elastic modulus E, in GPa. Steel is about 200 to 210 GPa",
        "body": "Stiffness is how much a part deflects under a load, and it comes from the material's elastic modulus and the shape of the part. All the steels, mild or alloy, have almost the same modulus. A stronger steel is therefore not a stiffer one: a shaft that deflects too much will deflect just as much in a harder grade. Only a larger section, a shorter span or a stiffer material changes it.",
        "tips": [
          "Aluminium has about a third of the stiffness of steel, and cast iron about half. A change of material changes deflection by the same ratio.",
          "Deflection that causes misalignment, a rub or a poor gear mesh is a stiffness problem, and heat treatment will not cure it."
        ]
      },
      "ductility": {
        "icon": "ti-arrows-horizontal",
        "name": "Ductility",
        "role": "Elongation at fracture, in percent",
        "body": "A ductile metal stretches, bends and necks down before it breaks, which gives a warning and allows loads to even out. Mild steel, copper and aluminium are ductile. Cast iron, hardened tool steel and glass are brittle: they break at about the point where they stop springing back, with no stretching to warn anyone.",
        "tips": [
          "A part that fails brittle, with a flat, bright fracture and no deformation, has either a brittle material or a condition (cold, high strain rate, a sharp notch) that has made it behave like one.",
          "Hardening a steel makes it stronger and more brittle. The trade is controlled by tempering."
        ]
      },
      "toughness": {
        "icon": "ti-hammer",
        "name": "Toughness",
        "role": "Measured by an impact test (Charpy), in joules",
        "body": "Toughness is how much energy a material can absorb, including from a shock, before it fractures. It is the area under the stress-strain curve, and it depends on temperature. Many steels are tough at room temperature and brittle at low temperature, with a fairly sharp transition. A crack in a tough steel grows slowly. A crack in a brittle one runs.",
        "tips": [
          "Equipment that works outdoors in winter, or with cold liquids and gases, needs materials chosen for low-temperature toughness.",
          "A notch, a weld defect or a sharp corner makes a tough material fail like a brittle one."
        ]
      },
      "hardness": {
        "icon": "ti-diamond",
        "name": "Hardness",
        "role": "Rockwell C (HRC), Brinell (HB) or Vickers (HV)",
        "body": "Hardness is how well a surface resists indentation, scratching and wear. It is quick to measure and closely related to strength: for steels, ultimate strength in MPa is roughly 3.45 times the Brinell number. Bearing races, gear teeth and cutting edges are hard because they have to resist wear and contact stress.",
        "tips": [
          "Hard parts are strong and wear-resistant but less tough. A hardened gear tooth resists pitting and can crack under shock.",
          "A file or a hardness tester can identify a part that has been softened by heat, or a bolt that is not the grade it is marked."
        ]
      },
      "fatigue": {
        "icon": "ti-repeat",
        "name": "Fatigue strength",
        "role": "The stress a part can take for millions of cycles",
        "body": "A part loaded and unloaded over and over can crack at a stress far below its yield strength. This is fatigue, and it is the cause of most failures in rotating and reciprocating equipment. The stress it can take for ever is the endurance limit, and for steel it is roughly half the ultimate strength on a polished specimen and much less on a real part.",
        "tips": [
          "A smooth part is fatigue strong. A keyway, a sharp shoulder, a corroded surface or a weld toe can cut the fatigue strength by half or more.",
          "Fatigue cracks grow quietly and then the part fails suddenly. A crack found early is a gift."
        ]
      }
    }
  },
  "trees": {},
  "selfcheck": {
    "overview": [
      [
        "A shaft deflects more than the drive allows. Which change will reduce the deflection?",
        [
          "A larger diameter or a shorter overhang, which change the shape",
          "A stronger steel grade, because higher strength steels bend less",
          "A harder surface, because surface hardness reduces bending",
          "A heat treatment, because tempering raises the stiffness"
        ],
        0,
        "Stiffness comes from the modulus, which is about the same for all steels, and from the geometry. Diameter counts to the fourth power and overhang to the cube. Strength and hardness do not change deflection."
      ],
      [
        "What does a factor of safety of 1.0 mean?",
        [
          "The part has no margin against wear but not against load",
          "The part is expected to fail at the design load",
          "The part is twice as strong as the load it carries",
          "The part is rated for static loads and cannot see shock"
        ],
        1,
        "The factor is the ratio of strength to working stress. At 1.0 the two are equal, so any overload, defect or loss of section takes the part past its limit. Real designs allow a margin for what is not known."
      ],
      [
        "A steel stud was healthy when new and has lost half its cross-section to corrosion. What has happened to its factor of safety?",
        [
          "It is unchanged, because the steel itself has not changed",
          "It has fallen by a quarter, because the surface only carries part of the load",
          "It has halved, because the stress for the same load has doubled",
          "It has doubled, because the remaining steel is more compact"
        ],
        2,
        "Stress is force over area. Half the area carries the same force at twice the stress, so a design margin of 2 is now 1. The factor describes the part as it was, and is not a permanent property."
      ],
      [
        "What is the toughness of a material?",
        [
          "The stress at which it first starts to deform permanently under load",
          "The resistance of its surface to being scratched or dented by a harder object",
          "The number of load cycles it can take before it cracks under repeated stress",
          "The energy it absorbs before it fractures, which changes with temperature"
        ],
        3,
        "Toughness is measured by impact and describes how a material copes with shock and cracks. Yield is strength, scratch resistance is hardness and cycles to failure is fatigue. Each of these can differ widely in the same steel."
      ]
    ],
    "stress": [
      [
        "A 30 kN pull acts on a rod of 314 mm² cross-section. What is the tensile stress?",
        [
          "About 95.5 MPa, which is the force divided by the area",
          "About 9.4 MPa, which is the force divided by the area in cm²",
          "About 0.01 MPa, which is the area divided by the force",
          "About 9420 MPa, which is the force multiplied by the area"
        ],
        0,
        "Stress = F ÷ A = 30 000 N ÷ 314 mm² = 95.5 N/mm², which is 95.5 MPa. Keeping the units consistent (newtons and square millimetres) gives megapascals directly."
      ],
      [
        "A 16 mm pin carries 50 kN in double shear. Which area is used to find the shear stress?",
        [
          "The area of one plane only, since the load acts once",
          "Twice the pin's cross-sectional area, since it is cut across two planes",
          "The pin's length multiplied by its diameter",
          "Half the pin's cross-sectional area, since the load is shared"
        ],
        1,
        "In double shear the load passes through two sections, and each carries half. The area is 2 × 201 = 402 mm², and the stress is 50 000 ÷ 402 = 124 MPa. Using one plane doubles the answer."
      ],
      [
        "The wall of a pressure vessel is thinned by corrosion to half its thickness. What happens to the hoop stress?",
        [
          "It stays the same, because the pressure has not changed",
          "It rises by half, because the vessel has lost half its metal",
          "It doubles, because the stress is inversely proportional to wall thickness",
          "It rises four times, because the stress depends on thickness squared"
        ],
        2,
        "The hoop stress is P × d ÷ (2t), so halving t doubles it. A vessel that was safe when new can be at its limit after wall loss, which is why thickness is measured at inspection."
      ],
      [
        "A steel bar is stretched by a force and then the force is removed. It returns to its original length. What does that show?",
        [
          "The bar was loaded above its ultimate strength without breaking",
          "The bar has a very high modulus of elasticity, so it did not stretch",
          "The bar has been work hardened, which resets its length",
          "The stress stayed below the yield point, so the stretch was elastic"
        ],
        3,
        "Below the yield point, a metal springs back when the load goes. Past it, the stretch is permanent. This is the property a clamped bolt relies on: its stretch is elastic, and the stretch is the clamp."
      ],
      [
        "Why is a crushing or bearing check needed for a pin in a lug, as well as a shear check?",
        [
          "The load sits on a small projected area of the hole, which can deform",
          "The pin is weaker in crushing than in shear for every material",
          "The hole cannot carry any load until the pin is in shear",
          "The bearing stress is always lower, so it is safe to leave out"
        ],
        0,
        "The pin presses on the hole over its diameter times the thickness of the lug. That is a small area, and a high pressure on it elongates the bore even if the pin is not near shearing. Both checks are needed."
      ],
      [
        "A steel rod stressed to 250 MPa has what strain, with E = 207 GPa?",
        [
          "About 0.012, so a one metre length stretches about 12 mm",
          "About 0.0012, so a one metre length stretches about 1.2 mm",
          "About 0.00012, so a one metre length stretches about 0.12 mm",
          "About 1.2, so a one metre length stretches about 1.2 m"
        ],
        1,
        "Strain = stress ÷ modulus = 250 ÷ 207 000 = 0.0012. Metals strain by tiny amounts, which is why a bolt stretch of an eighth of a millimetre can be enough for a full clamp."
      ]
    ],
    "curve": [
      [
        "Where on the stress-strain curve does permanent deformation begin?",
        [
          "At the ultimate strength, where the stress reaches its maximum",
          "At the origin, where the stress and the strain are both zero",
          "At the yield point, where the stretch stops springing back",
          "At fracture, where the specimen finally separates"
        ],
        2,
        "Up to yield the metal returns to its original length when released. Past it, some stretch is permanent. Designs are limited by yield because a part that has yielded has changed shape."
      ],
      [
        "A metric bolt is marked 8.8. What are its minimum ultimate strength and yield strength?",
        [
          "880 MPa ultimate and 800 MPa yield",
          "88 MPa ultimate and 8.8 MPa yield",
          "800 MPa ultimate and 800 MPa yield",
          "800 MPa ultimate and 640 MPa yield"
        ],
        3,
        "The first number times 100 gives the ultimate strength in MPa, and the second number is the ratio of yield to ultimate: 0.8 × 800 = 640 MPa. A 10.9 bolt is 1000 and 900 MPa."
      ],
      [
        "How does a brittle fracture usually look compared with a ductile one?",
        [
          "Flat, bright and granular, with no stretching or necking",
          "Cup and cone, grey and fibrous, with a clear shear lip",
          "Smooth and shell-marked, with a small rough final region",
          "Branched with fine cracks over the surface of the part"
        ],
        0,
        "A ductile part stretches and necks before it breaks and shows a cup and cone. A brittle part fails at almost no strain with a flat surface. Smooth shell marks point to fatigue."
      ],
      [
        "Which treatment makes a steel stronger and harder but also more brittle?",
        [
          "Annealing, which refines the structure of the steel at low speed",
          "Quench hardening, which is controlled afterwards by tempering",
          "Normalising, which evens out the grain of the steel by air cooling",
          "Stress relieving, which removes the locked-in stress after welding"
        ],
        1,
        "Quenching from a high temperature produces a hard, brittle structure. Tempering then reheats to a lower temperature to bring back toughness at the cost of some hardness. Annealing and normalising soften or refine."
      ],
      [
        "A part that bent in the shop at room temperature shatters in a freezing yard. What is the likely explanation?",
        [
          "The steel became stronger in the cold, so it could not stretch",
          "The steel became softer in the cold, so it broke under its own weight",
          "The steel lost toughness at low temperature, and behaved in a brittle way",
          "The steel shrank in the cold, which pulled its structure apart"
        ],
        2,
        "Many steels have a transition temperature below which they lose their toughness. Equipment for cold climates needs a grade chosen for low temperature impact toughness, and a notch makes it worse."
      ]
    ],
    "loads": [
      [
        "A 50 mm shaft carries a torque of 1000 N·m and has a shear stress of 41 MPa. The diameter is raised to 63 mm. What is the stress?",
        [
          "About 33 MPa, because the stress falls in step with the diameter",
          "About 26 MPa, because the stress falls with the square of the diameter",
          "About 41 MPa, because the torque and the material are unchanged",
          "About 20 MPa, because the stress falls with the cube of the diameter"
        ],
        3,
        "For a round shaft in torsion τ = 16T ÷ (πd³). A diameter 26 percent larger is 2.0 times the d³, so the stress halves. Small changes of diameter at a weak point have a large effect."
      ],
      [
        "A shaft overhang is doubled while the load stays the same. What happens to the deflection at the end?",
        [
          "It rises eight times, because the deflection depends on the cube of the length",
          "It doubles, because the deflection depends on the length",
          "It rises four times, because the deflection depends on the length squared",
          "It stays the same, because the load has not changed"
        ],
        0,
        "For a cantilever, δ = F × L³ ÷ (3EI). Doubling L multiplies δ by 8, and the bending stress doubles. Keeping overhangs short is the cheapest way to make a shaft stiff."
      ],
      [
        "A rectangular channel is stood on edge instead of lying flat, so its depth in the bending direction is twice as big. What happens to its stiffness?",
        [
          "It rises two times, in step with the depth",
          "It rises about eight times, since stiffness follows the depth cubed",
          "It rises four times, because it depends on the depth squared",
          "It stays the same, because the amount of steel is unchanged"
        ],
        1,
        "The second moment of area for a rectangle is b × h³ ÷ 12, so doubling the depth gives eight times the stiffness. Position matters as much as the amount of material."
      ],
      [
        "A rotating shaft carries a steady sideways belt pull. What kind of bending stress does a point on its surface see?",
        [
          "A steady tension, because the load does not change",
          "A steady compression, because the belt pulls on the shaft",
          "Reversed stress, tension then compression on every turn",
          "No bending stress, because the shaft turns with the load"
        ],
        2,
        "The load direction stays fixed in space while the shaft turns, so a point on the surface goes from the tension side to the compression side and back every revolution. That is fully reversed bending and the hardest fatigue case."
      ],
      [
        "Which part of a key carries the torque from a shaft to a hub?",
        [
          "Its top face, in tension, as the hub pulls on it",
          "Its ends, in compression, as the hub pushes on it",
          "Its whole body, in bending, as the hub turns on the shaft",
          "Its side faces, in crushing, and its section along the shaft, in shear"
        ],
        3,
        "A parallel key is pushed on one side by the shaft keyway and on the other by the hub keyway. That crushes the side faces and tries to shear the key along its length. A longer key carries more torque."
      ],
      [
        "Why can a hollow shaft or tube be nearly as stiff as a solid bar of the same outside diameter?",
        [
          "The metal near the surface carries most of the stress and stiffness",
          "The air inside a tube carries part of the load, so less metal is needed",
          "The wall of a tube is always made of a stronger steel than a solid bar",
          "A tube is hotter in service and so expands to fill the space inside it"
        ],
        0,
        "In bending and torsion the stress is highest at the surface and falls to zero at the centre, so the metal at the middle does little. A tube keeps the useful material and sheds the weight."
      ]
    ],
    "fatigue": [
      [
        "What best describes fatigue failure?",
        [
          "Breaking from a single load above the ultimate strength",
          "Cracking from repeated loads far below the yield strength",
          "Stretching slowly under a steady load at high temperature",
          "Wearing away of a surface by hard particles sliding on it"
        ],
        1,
        "Each load cycle does a small amount of damage at a stress raiser. A crack forms, grows with every cycle, and the part breaks when the remaining section cannot carry the load. A single overload is a different failure."
      ],
      [
        "What does a small area of final fracture on a fatigue break indicate?",
        [
          "A very high stress, because the part broke after only a few cycles",
          "A brittle material, because the crack ran fast through the section",
          "A low nominal stress, because the section held until little was left",
          "A weld defect, because the crack began inside the metal itself"
        ],
        2,
        "A part under a high stress fails when the crack is still small and leaves a large final area. One that fails with only a sliver left was under a low stress and ran a long time. The ratio is a rough guide to the load."
      ],
      [
        "Which of these is the most likely place for a fatigue crack to start on a motor shaft?",
        [
          "In the middle of a plain section, away from any change",
          "Within the bulk, where the steel is most heavily stressed",
          "At the centre of the shaft, where the torque is highest",
          "At a keyway end or a sharp shoulder, where stress is concentrated"
        ],
        3,
        "Notches raise the local stress by a factor of 2 to 3, and fatigue starts at the surface where the stress is highest. A smooth section needs a much higher load to crack."
      ],
      [
        "A shaft running in water cracks at a stress that would be safe in air. What is the reason?",
        [
          "Corrosion removes the endurance limit, so it can fail at any stress",
          "Water cools the steel, which makes it brittle and likely to crack",
          "Water adds weight to the shaft, which raises the stress on it",
          "Water lubricates the surface, which concentrates the stress at the keyway"
        ],
        0,
        "In a corrosive environment the corrosion pits start cracks and the usual fatigue limit vanishes. Coating, a different material or lower stress is needed, and the in-air figure is not a guide."
      ],
      [
        "A hard-stamped part number is found at the origin of a fatigue crack in a shaft. What does that show?",
        [
          "The stamped steel was too soft, so it cracked from its own mass",
          "The stamp was a stress raiser, so stamping critical areas is avoided",
          "The numbering was cut too shallow, which made it unreadable",
          "The stamp heated the steel, which reduced its toughness evenly"
        ],
        1,
        "Any dent, scratch or mark is a small notch, and a notch in a highly stressed area can be an origin. Mark parts away from critical zones, or by methods that do not deform the surface."
      ],
      [
        "A fatigue crack is found early in a shaft shoulder. What is the right response?",
        [
          "Weld over the crack and grind it smooth to carry on running",
          "Drill a hole at each end of the crack and carry on running",
          "Stop, assess the part, and replace or have an engineer approve a repair",
          "Leave it alone, because a crack that is short will not grow further"
        ],
        2,
        "A crack grows with every cycle, and weld repairs to a stressed shaft often make a bigger stress raiser. Any repair needs engineering approval and a check of the cause, such as misalignment or resonance."
      ]
    ],
    "fasteners": [
      [
        "An M16 bolt with a grip length of 60 mm is tightened to a preload of 68 kN. About how much does it stretch?",
        [
          "About 1.3 mm, which is a visible stretch on the bolt",
          "About 0.013 mm, which is too small to give any clamp",
          "About 13 mm, which is a fifth of the grip length",
          "About 0.13 mm, which is the whole of the clamping stretch"
        ],
        3,
        "ΔL = F × L ÷ (A × E) = 68 000 × 60 ÷ (157 × 207 000) = 0.126 mm. Such a small stretch means that embedment of a few hundredths of a millimetre can lose a large fraction of the preload."
      ],
      [
        "A preloaded joint carries a cyclic outside load. Why does the bolt see only part of that load?",
        [
          "The clamped parts are much stiffer than the bolt and give up their squeeze first",
          "The bolt is stiffer than the joint, so it shares the load with the plates",
          "The preload cancels the outside load, so the bolt sees none of it",
          "The bolt rotates in its hole, which shifts the load to the nut"
        ],
        0,
        "With the parts clamped, an outside load mostly reduces the squeeze on the stiff joint and adds only a small share to the bolt. That is why preloaded bolts last, and why a joint that has lost preload fails by fatigue."
      ],
      [
        "What is the most common reason that a bolt in a vibrating joint comes loose?",
        [
          "The nut unwinds under the weight of the part it supports",
          "Transverse slip of the joint, which lets the nut back off",
          "The bolt becomes shorter as it vibrates, which loosens the nut",
          "The threads wear flat from the vibration, which frees the nut"
        ],
        1,
        "Sideways movement of the clamped parts makes the threads slip a little each time, and the nut unwinds by degrees. A proper preload prevents the slip. Lock devices only help once the preload is right."
      ],
      [
        "Why should flange bolts be tightened in stages and in a star pattern?",
        [
          "To let the bolts heat up evenly and avoid thermal stress",
          "To make sure the wrench is calibrated before the final pass",
          "To draw the flange down evenly and keep the gasket loaded uniformly",
          "To let the gasket dry and set before the full load is applied"
        ],
        2,
        "One bolt tightened fully pulls the flange crooked and unloads the bolts on the other side. Several passes in a cross pattern bring the faces together evenly. Procedure for a given joint governs."
      ],
      [
        "A bolt is oiled and tightened to the dry torque value. What is the likely result?",
        [
          "Less preload than intended, because the oil lets the nut slip",
          "The same preload, because torque fixes the preload",
          "No change to the preload, but the nut will loosen later",
          "More preload than intended, perhaps near the bolt's proof load"
        ],
        3,
        "Friction absorbs about 90 percent of the torque. With less friction, more of it goes into stretch, and the clamp load rises by a third or more. The torque value always goes with a stated lubricant condition."
      ],
      [
        "What does a split spring washer do on a hard, flat bolted joint?",
        [
          "Very little. It does not hold the preload or stop the nut slipping",
          "It keeps the full preload on the joint even as it settles",
          "It locks the nut so that it cannot turn at all",
          "It spreads the load evenly over all the threads"
        ],
        0,
        "A split washer flattens at a small load, well below the bolt preload, so it adds no spring action to a properly tightened joint. Preload, hardened washers, wedge-locking washers and compounds are better."
      ]
    ],
    "materials": [
      [
        "Which property of cast iron is the reason pump bodies and machine bases are often made of it?",
        [
          "It is very ductile, so it can absorb shock without breaking",
          "It damps vibration, is easy to cast and is strong in compression",
          "It is stronger in tension than any steel of the same weight",
          "It has no tendency to crack under impact or sudden heating"
        ],
        1,
        "Grey cast iron is brittle, and it is weak in tension compared with its compression strength. It is chosen for damping, castability and cost. It can crack under shock or thermal shock."
      ],
      [
        "A plain bearing is made of bronze running on a hardened steel shaft. Why that pair?",
        [
          "The two are the same hardness, so they wear evenly together",
          "The bronze is harder than the steel and protects the shaft",
          "They are dissimilar and low friction, and the softer one wears first",
          "Both are magnetic, so they hold the oil film between them"
        ],
        2,
        "Unlike metals are less likely to weld to each other, and a soft bearing material takes dirt and small misalignment. The bearing is the cheaper part and designed to wear instead of the shaft."
      ],
      [
        "An aluminium part sits against a steel part in a wet place and corrodes quickly. What is happening?",
        [
          "Fretting corrosion, where the steel wears the aluminium surface away",
          "Cavitation, where bubbles in the water strip the metal from the surface",
          "Creep, where the aluminium slowly flows under the steel's load",
          "Galvanic corrosion, where the aluminium is the less noble metal and is eaten away"
        ],
        3,
        "Two different metals in contact with moisture form a cell, and the less noble metal (aluminium here) corrodes. Isolation, coatings and keeping the joint dry help."
      ],
      [
        "What is the main risk of carburising or case hardening a gear and then grinding off too much?",
        [
          "The hard case is removed, leaving the softer core exposed",
          "The gear becomes too hard and breaks as soon as it is run",
          "The gear grows slightly and no longer meshes with its mate",
          "The gear's teeth become magnetic and attract wear debris"
        ],
        0,
        "Case hardening gives a thin hard layer over a tough core, and the layer is only a fraction of a millimetre or a couple of millimetres thick. Grinding past it removes the benefit."
      ],
      [
        "Why is a bearing not heated above about 120 degrees C to fit it?",
        [
          "The grease inside would boil and burst the seal at that temperature",
          "Higher temperatures can soften the steel and change its dimensions",
          "The shaft would grow faster than the bearing and bind in it",
          "The bearing would become magnetic and attract swarf on the shaft"
        ],
        1,
        "Standard bearing steels are tempered at around that temperature, and heating past it can reduce hardness and change size. Induction heaters are set for a limit below it."
      ]
    ],
    "thermal": [
      [
        "A 30 m steel pipe warms by 160 K. About how much longer does it get?",
        [
          "About 5.8 mm, from 12 × 10⁻⁶ × 3000 mm × 160",
          "About 580 mm, from 12 × 10⁻⁵ × 30 000 mm × 160",
          "About 58 mm, from 12 × 10⁻⁶ × 30 000 mm × 160",
          "About 0.58 mm, from 12 × 10⁻⁶ × 300 mm × 160"
        ],
        2,
        "ΔL = α × L × ΔT = 12 × 10⁻⁶ × 30 000 × 160 = 57.6 mm. Pipes carrying hot fluid are given loops, bellows or sliding supports for this growth."
      ],
      [
        "A steel bar is heated by 50 K while held rigidly at both ends. What stress develops?",
        [
          "About 12 MPa, from the coefficient times the temperature rise times 1000",
          "About 620 MPa, from the yield strength divided by the temperature rise",
          "None, because the bar is able to grow into the space around it",
          "About 124 MPa, from the modulus times the coefficient times the temperature rise"
        ],
        3,
        "σ = E × α × ΔT = 207 000 × 12 × 10⁻⁶ × 50 = 124 MPa. The bar does not need to be long: the stress depends only on the temperature change and the material, so a held bar can buckle or push its supports."
      ],
      [
        "A motor will run 40 K hotter than when it was aligned, with a centreline 400 mm above its feet. Why does the alignment target include a cold offset?",
        [
          "The shaft centreline rises by about 0.2 mm as the frame warms",
          "The shaft grows longer, which pushes the coupling hub off its seat",
          "The feet shrink in the heat, which pulls the motor toward the pump",
          "The frame becomes stiffer when hot, which twists the coupling"
        ],
        0,
        "ΔH = α × H × ΔT = 12 × 10⁻⁶ × 400 × 40 = 0.19 mm. Align the cold machine to zero and the running machine is out by that much. The offset is set so the two are in line when hot."
      ],
      [
        "A hot cast iron pump casing is hit by cold water and cracks. Which phenomenon is this?",
        [
          "Creep, where the casing slowly stretches under its own weight",
          "Thermal shock, where the surface contracts faster than the inside",
          "Galvanic corrosion, where the water and the casing form a cell",
          "Fatigue, where repeated load cycles crack the casing in time"
        ],
        1,
        "Rapid cooling of the surface sets up stresses against the hot bulk, and brittle materials such as cast iron crack. Heat and cool gradually, and avoid cold fluid into a hot machine."
      ],
      [
        "A bearing for a hot machine is chosen with extra internal clearance (C3). Why?",
        [
          "The extra clearance holds more grease, which cools the bearing",
          "The extra clearance reduces the load on each rolling element",
          "Heat and a hot inner ring reduce the clearance, and a normal one could seize",
          "The extra clearance allows the housing to grow without limit"
        ],
        2,
        "The inner ring and shaft run hotter than the housing, and the inner ring grows into the clearance. A larger starting clearance leaves enough running clearance. Too little clearance runs hot and seizes."
      ]
    ],
    "wear": [
      [
        "Fine scratches run in the direction of sliding on a worn cylinder, and the oil is dirty. Which wear mode is this?",
        [
          "Adhesive wear from metal welding between the surfaces",
          "Fatigue wear from repeated stress under the surface",
          "Cavitation from vapour bubbles collapsing on the surface",
          "Abrasive wear from hard particles between the surfaces"
        ],
        3,
        "Grooves in the direction of motion are typical of hard particles ploughing the surface. The cure is cleanliness: filtration, seals, clean assembly. A better film does not help much if the particles are in the oil."
      ],
      [
        "Red-brown powder is found at the shoulder where a bearing sits on its shaft. What does it suggest?",
        [
          "Fretting, a tiny repeated movement between the shaft and the bearing",
          "Cavitation, from vapour bubbles collapsing at the shoulder",
          "Erosion, from hard particles in the oil stream",
          "Brinelling, from a static overload on the bearing"
        ],
        0,
        "Fretting wears the surfaces at a microscopic scale and the debris oxidises to a red-brown powder. It means a fit is loose or the joint is moving. A better fit or a barrier coating addresses it."
      ],
      [
        "A ball bearing's load rises by 20 percent from a misalignment. About what happens to its basic rating life?",
        [
          "It falls by about 20 percent, in step with the load",
          "It falls by about 42 percent, because life depends on the load to the power of three",
          "It falls by about 6 percent, because a ball bearing is tolerant",
          "It falls by about 73 percent, because life depends on the load to the power of ten"
        ],
        1,
        "L10 = (C ÷ P)³, so a 20 percent rise in P gives (1 ÷ 1.2)³ = 0.58 of the life. Bearing life is very sensitive to load, so alignment, balance and belt tension pay back."
      ],
      [
        "A pump impeller shows pitting and a sponge-like surface near the eye, and the pump is noisy like gravel. What is the likely cause?",
        [
          "Abrasion, from hard particles in the liquid grinding the metal",
          "Fretting, from the impeller moving on the shaft",
          "Cavitation, from vapour bubbles collapsing against the metal",
          "Fatigue pitting, from repeated rolling contact on the vanes"
        ],
        2,
        "Low suction pressure lets the liquid vaporise, and the bubbles collapse in high pressure regions with enough force to erode the metal. The cure is at the system: suction head, flow, operating point."
      ],
      [
        "Why does the damage from rolling contact fatigue usually start slightly below the surface?",
        [
          "The surface is protected by a harder layer that blocks any crack",
          "The oil film is thinnest beneath the surface of the race",
          "The metal below the surface is always softer than the surface",
          "The highest shear stress under a rolling contact lies just below the surface"
        ],
        3,
        "In the contact between a ball and a race, the shear stress peaks at a small depth. Cracks start there, grow and break out as pits. Cleaner steel and a lower load delay it."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"bw-section-label\">Why a part holds, bends or breaks</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Almost every failure in the plant is a part asked to carry more than it can, or the same load too many times.</div></div><div class=\"callout-box-body\">This module is about the question behind every failure analysis: what was the load, how big was the stress it caused, and what could the part carry? Once those three are known, the cause of a broken shaft, a stretched bolt, a worn gear tooth or a cracked weld is a matter of reading the evidence. The tools are a handful of formulas, a stress-strain curve, and an eye for what a fracture surface is saying.</div></div>\n<div class=\"card-grid\"><div class=\"type-card\" onclick=\"selectProp('strength')\" id=\"propcard-strength\"><div class=\"type-card-icon\"><i class=\"ti ti-barbell\"></i></div><div class=\"type-card-name\">Strength</div><div class=\"type-card-sub\">How much stress it takes</div></div><div class=\"type-card\" onclick=\"selectProp('stiffness')\" id=\"propcard-stiffness\"><div class=\"type-card-icon\"><i class=\"ti ti-ruler-2\"></i></div><div class=\"type-card-name\">Stiffness</div><div class=\"type-card-sub\">How little it bends</div></div><div class=\"type-card\" onclick=\"selectProp('ductility')\" id=\"propcard-ductility\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-horizontal\"></i></div><div class=\"type-card-name\">Ductility</div><div class=\"type-card-sub\">How far it stretches before it breaks</div></div><div class=\"type-card\" onclick=\"selectProp('toughness')\" id=\"propcard-toughness\"><div class=\"type-card-icon\"><i class=\"ti ti-hammer\"></i></div><div class=\"type-card-name\">Toughness</div><div class=\"type-card-sub\">Energy absorbed before breaking</div></div><div class=\"type-card\" onclick=\"selectProp('hardness')\" id=\"propcard-hardness\"><div class=\"type-card-icon\"><i class=\"ti ti-diamond\"></i></div><div class=\"type-card-name\">Hardness</div><div class=\"type-card-sub\">Resistance to being dented or worn</div></div><div class=\"type-card\" onclick=\"selectProp('fatigue')\" id=\"propcard-fatigue\"><div class=\"type-card-icon\"><i class=\"ti ti-repeat\"></i></div><div class=\"type-card-name\">Fatigue strength</div><div class=\"type-card-sub\">How many cycles it can take</div></div></div><div id=\"prop-display\"><div class=\"comp-placeholder\">tap a property to read about it</div></div>\n<table class=\"ref-table\"><tr><th>Question</th><th>Property or idea</th><th>Where it gets answered</th></tr><tr><td>Will it carry the load without deforming?</td><td>Yield strength and stress</td><td>Stress tab</td></tr><tr><td>Will it bend too much?</td><td>Stiffness (E) and section shape</td><td>Loads tab</td></tr><tr><td>Will it break suddenly or give a warning?</td><td>Ductility and toughness</td><td>Curve tab</td></tr><tr><td>Will it last, with the load coming and going?</td><td>Fatigue strength and stress concentration</td><td>Fatigue tab</td></tr><tr><td>Will the bolts keep the joint tight?</td><td>Preload, joint stiffness, relaxation</td><td>Fasteners tab</td></tr><tr><td>Is it the right material for the job?</td><td>Strength, hardness, corrosion, temperature</td><td>Materials tab</td></tr><tr><td>Will it grow, shrink or crack with temperature?</td><td>Thermal expansion and stress</td><td>Thermal tab</td></tr><tr><td>What is wearing it away?</td><td>Wear and surface failure modes</td><td>Wear tab</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-help-circle\"></i> The factor of safety</div><div class=\"info-block-body\">A factor of safety is the ratio of what the part can carry to the stress it is expected to see. It allows for the loads that were not predicted, the material that is not quite as good as the specification, and the damage done since. A factor of 1 means the part is expected to fail at the design load.</div><ul class=\"info-block-tips\"><li>Static loads on ductile steel are commonly designed with a factor of 1.5 to 2 or more on yield. Shock, fatigue and uncertainty call for more.</li><li>Lifting equipment uses factors set by standards, usually quoted on the breaking load: commonly 5 to 1 for wire rope slings and shackles and 4 to 1 for alloy chain. Check the standard that applies, and the working load limit on the tag is the number to follow.</li><li>A part that has lost half its cross-section to corrosion or wear has lost half its factor of safety. The factor is a statement about the part as it was.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a stronger steel does not make a stiffer shaft</strong>If a shaft bends too much, or a base deflects and the alignment moves, changing to a higher strength grade changes nothing, because stiffness is set by the modulus, and every steel has about the same one. A bigger diameter helps a great deal: bending stiffness rises with the fourth power of diameter. The span matters even more, since deflection rises with the cube of length.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-map-2\"></i> Where this shows up in the series</div><ul class=\"info-block-tips\"><li><a href=\"builtwright_bearing_module_v1.html#diagnose\">Bearings</a>: rolling contact fatigue, brinelling, fretting, fluting.</li><li><a href=\"builtwright_gearboxes_v1.html#wear\">Gearboxes</a>: pitting, scuffing, tooth breakage.</li><li><a href=\"builtwright_installation_v1.html#anchors\">Installation</a>: bolt preload, anchors and grout in compression.</li><li><a href=\"builtwright_seals_gaskets_v1.html#materials\">Seals and Gaskets</a>: elastomers, temperature, compatibility and creep.</li><li><a href=\"builtwright_root_cause_v1.html#reading\">Root Cause</a>: reading a fracture surface as evidence.</li><li><a href=\"builtwright_coupling_alignment_v1.html#why\">Alignment</a>: thermal growth and the cold alignment offsets that follow from it.</li></ul></div>",
    "stress": "<div class=\"bw-section-label\">Stress and strain: load made independent of size</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Stress is force per unit area. Strain is stretch per unit length. A material's strength is a stress, and so it applies to every size of part.</div></div><div class=\"callout-box-body\">A 10 kN pull on a thin rod and a thick rod is the same load, but not the same stress. The thin rod carries it on a smaller area and sees more stress, so it fails first. Stress lets a test result from a small specimen predict a large part, and lets two parts of different sizes be compared. The unit is the MPa, which is the same as one N/mm².</div></div>\n<div class=\"pr-formula\">Tension or compression stress   σ = F ÷ A<br>Shear stress   τ = F ÷ A(shear)<br>Strain   ε = ΔL ÷ L<br>Hooke's law   σ = E × ε   (below yield)<br>Stretch of a bar   ΔL = F × L ÷ (A × E)<br>Factor of safety   n = strength ÷ working stress</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a tension rod</div><div class=\"pr-ex-given\">A steel rod 20 mm in diameter and 2 m long carries a 30 kN pull. The steel has a yield strength of 250 MPa and E = 207 GPa. Find the stress, the stretch and the factor of safety.</div><ol class=\"pr-ex-steps\"><li>Area = π × 20² ÷ 4 = 314 mm².</li><li>Stress = 30 000 ÷ 314 = 95.5 MPa.</li><li>Strain = 95.5 ÷ 207 000 = 0.00046, so stretch = 2000 × 0.00046 = 0.92 mm.</li><li>Factor of safety on yield = 250 ÷ 95.5 = 2.6.</li></ol><div class=\"pr-ex-answer\">Stress 95 MPa, stretch 0.9 mm, factor of safety 2.6. The rod is comfortable for a static load and springs back when released.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a pin in double shear</div><div class=\"pr-ex-given\">A clevis pin of 16 mm diameter carries 50 kN in double shear (it is cut across two places). The pin steel yields in shear at about 145 MPa. Is it safe?</div><ol class=\"pr-ex-steps\"><li>Shear area = 2 × π × 16² ÷ 4 = 402 mm².</li><li>Shear stress = 50 000 ÷ 402 = 124 MPa.</li><li>Factor of safety = 145 ÷ 124 = 1.17.</li></ol><div class=\"pr-ex-answer\">The pin is working at 85 percent of its yield in shear, so there is almost no margin. Any shock, wear of the pin or oversize load takes it past yield, and a bent pin soon follows. A factor of 1.17 is not a design.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a pressure vessel wall</div><div class=\"pr-ex-given\">An air receiver of 1000 mm diameter has an 8 mm wall and works at 11 bar (1.1 MPa). What is the hoop stress? What happens if corrosion thins the wall to 4 mm?</div><ol class=\"pr-ex-steps\"><li>Hoop stress σ = P × d ÷ (2 × t) = 1.1 × 1000 ÷ 16 = 69 MPa.</li><li>With t = 4 mm: 1.1 × 1000 ÷ 8 = 138 MPa.</li></ol><div class=\"pr-ex-answer\">The stress doubles when the wall is half as thick, and the factor of safety halves with it. A vessel that is within its rating when new may not be, once the wall has been measured. See the Safety tab, and note that pressure equipment is governed by its code and inspection regime, not by this arithmetic.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> Reading the numbers</div><ul class=\"info-block-tips\"><li>1 MPa = 1 N/mm² = 145 psi. Steel yield of 250 MPa is about 36 000 psi.</li><li>The modulus E for steel is about 207 GPa, or 29 million psi. Aluminium is about 70 GPa, cast iron 100 to 170 GPa, bronze 100 to 120 GPa.</li><li>Strain is a pure ratio, and it is usually tiny. Steel stressed to 250 MPa has strained by 0.12 percent, so a metre of it has stretched 1.2 mm.</li><li>Crushing, or bearing, stress is the load divided by the projected area of a pin in its hole, or a bolt on a plate. A pin can be safe in shear and still crush its bore.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: ask what area is carrying the load</strong>Stress calculations go wrong when the wrong area is used. A bolt carries its tension on the thread root area, not the shank. A key carries torque in shear across its length and in crushing on one side face. A weld carries load across its throat, which is smaller than the plate it joins. Find the smallest section the load passes through, since that is where the stress is highest.</div></div>",
    "curve": "<div class=\"bw-section-label\">The stress-strain curve: a material's character on one page</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Pull a specimen steadily and plot the stress against the strain. The shape of the curve says how the material will fail.</div></div><div class=\"callout-box-body\">At first the line is straight and the metal springs back when released (elastic). At the yield point it starts to stretch permanently (plastic). The curve then rises to the ultimate strength, the specimen necks down, and it fractures. A brittle material goes from elastic to fracture almost without a plastic region.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 236\" role=\"img\" aria-label=\"Stress against strain for a ductile and a brittle metal, with the yield point, ultimate strength and fracture marked\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"20\" x2=\"60\" y2=\"200\"/><line class=\"ln\" x1=\"60\" y1=\"200\" x2=\"480\" y2=\"200\"/><path class=\"gt\" d=\"M 60 200 L 130 95 C 140 90, 150 88, 190 86 C 260 78, 330 52, 370 48 C 395 48, 410 70, 430 120\"/><line class=\"gt\" x1=\"60\" y1=\"200\" x2=\"130\" y2=\"95\"/><path class=\"ab\" d=\"M 60 200 L 200 100 L 205 98\"/><circle class=\"dt\" cx=\"130\" cy=\"95\" r=\"4\"/><text class=\"tb\" x=\"122\" y=\"84\" text-anchor=\"end\">yield</text><circle class=\"dt\" cx=\"370\" cy=\"48\" r=\"4\"/><text class=\"tb\" x=\"370\" y=\"38\" text-anchor=\"middle\">ultimate strength</text><text class=\"tb\" x=\"436\" y=\"134\" text-anchor=\"start\">fracture</text><path class=\"ard\" d=\"M 426 126 l 10 8 m -10 0 l 10 -8\"/><text class=\"tl\" x=\"215\" y=\"130\" text-anchor=\"start\">brittle (cast iron, hardened steel)</text><text class=\"ts\" x=\"215\" y=\"146\" text-anchor=\"start\">breaks with almost no warning</text><text class=\"tb\" x=\"150\" y=\"34\" text-anchor=\"start\">ductile (mild steel)</text><text class=\"ts\" x=\"150\" y=\"50\" text-anchor=\"start\">stretches, necks, then breaks</text><text class=\"ts\" x=\"140\" y=\"176\" text-anchor=\"start\">slope = E (stiffness)</text><text class=\"ts\" x=\"64\" y=\"14\" text-anchor=\"start\">stress</text><text class=\"ts\" x=\"270\" y=\"220\" text-anchor=\"middle\">strain (stretch ÷ original length)</text><line class=\"lt\" x1=\"130\" y1=\"95\" x2=\"130\" y2=\"200\"/><text class=\"ts\" x=\"60\" y=\"216\" text-anchor=\"middle\">0</text></svg><figcaption>A ductile metal such as mild steel (orange) yields, stretches a long way and necks before it breaks. A brittle one such as cast iron (blue) breaks at a low strain with no warning. The slope of the straight part is the modulus E.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Region or point</th><th>What is happening</th><th>Why it matters on the plant</th></tr><tr><td>Elastic region</td><td>Straight line, stress proportional to strain. Unloading returns to zero</td><td>Springs, bolts and shafts work here. A bolt's clamp load is its elastic stretch</td></tr><tr><td>Yield point</td><td>Stress where permanent stretch begins</td><td>The design limit. A part past yield has changed shape</td></tr><tr><td>Plastic region</td><td>Metal flows. Unloading leaves a permanent set</td><td>A bent shaft, a stretched bolt or a dented race has been here</td></tr><tr><td>Ultimate strength</td><td>Highest stress reached</td><td>The most the material can carry once. Seldom a design number</td></tr><tr><td>Necking</td><td>The specimen thins locally and the load falls</td><td>Visible warning in a ductile part before it breaks</td></tr><tr><td>Fracture</td><td>The specimen separates</td><td>A cup-and-cone, grey, fibrous face is ductile. A flat, bright, granular face is brittle</td></tr></table>\n<table class=\"ref-table\"><tr><th>Fastener grade</th><th>Minimum ultimate (MPa)</th><th>Minimum yield or proof (MPa)</th><th>Typical use</th></tr><tr><td>Metric 4.6</td><td>400</td><td>240</td><td>Light duty, low load</td></tr><tr><td>Metric 8.8</td><td>800</td><td>640</td><td>General machinery, the common structural and mechanical bolt</td></tr><tr><td>Metric 10.9</td><td>1000</td><td>900</td><td>Higher load joints, flanges, equipment mounts</td></tr><tr><td>Metric 12.9</td><td>1200</td><td>1080</td><td>Highest load socket screws. More sensitive to hydrogen and notches</td></tr><tr><td>SAE grade 5</td><td>827 (120 ksi)</td><td>585 (85 ksi proof)</td><td>General inch fasteners</td></tr><tr><td>SAE grade 8</td><td>1034 (150 ksi)</td><td>827 (120 ksi proof)</td><td>High load inch fasteners</td></tr></table>\n<p class=\"pr-p\">The grade is marked on the head. In the metric system, 8.8 means 8 × 100 = 800 MPa ultimate and 0.8 × 800 = 640 MPa yield. In the SAE system, the number of lines on the head is the grade less two: three lines for grade 5, six for grade 8. A bolt without a marking is an unknown, and the safe choice is to treat it as weak.</p>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-flame\"></i> What changes the curve</div><ul class=\"info-block-tips\"><li><strong>Cold work</strong> (bending, rolling, drawing) raises yield and lowers ductility.</li><li><strong>Heat</strong> softens steel. A part that has been run hot, welded or flame cut has regions of changed strength.</li><li><strong>Low temperature</strong> makes many steels brittle. A part that bends at room temperature may shatter in a freeze.</li><li><strong>Strain rate</strong>: a fast load, such as an impact, makes a material behave in a more brittle way than a slow pull.</li><li><strong>A notch</strong> concentrates stress and can make a ductile material break without stretching.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: look at the fracture first</strong>A cup-and-cone with a grey, fibrous face and visible stretching means an overload of a ductile material. A flat, bright, crystalline face with no stretching means a brittle fracture. A smooth, shell-pattern surface with a small rough area means fatigue. Photograph the faces before cleaning, and do not fit the broken pieces back together, since the faces are the evidence. See <a href=\"builtwright_root_cause_v1.html#reading\">Root Cause</a>.</div></div>",
    "loads": "<div class=\"bw-section-label\">Five ways to load a part, and what each does</div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 610 176\" role=\"img\" aria-label=\"Five ways a part can be loaded: tension, compression, shear, bending and torsion\" xmlns=\"http://www.w3.org/2000/svg\"><rect class=\"bm\" x=\"40\" y=\"50\" width=\"60\" height=\"26\" rx=\"3\"/><line class=\"ar\" x1=\"38\" y1=\"63\" x2=\"19\" y2=\"63\"/><polygon class=\"arf\" points=\"15.0,63.0 22.4,59.9 22.4,66.1\"/><line class=\"ar\" x1=\"102\" y1=\"63\" x2=\"121\" y2=\"63\"/><polygon class=\"arf\" points=\"125.0,63.0 117.6,66.1 117.6,59.9\"/><text class=\"tb\" x=\"70\" y=\"100\" text-anchor=\"middle\">tension</text><text class=\"ts\" x=\"70\" y=\"116\" text-anchor=\"middle\">pulled apart</text><rect class=\"bm\" x=\"165\" y=\"50\" width=\"40\" height=\"26\" rx=\"3\"/><line class=\"ar\" x1=\"133\" y1=\"63\" x2=\"157\" y2=\"63\"/><polygon class=\"arf\" points=\"161.0,63.0 153.6,66.1 153.6,59.9\"/><line class=\"ar\" x1=\"237\" y1=\"63\" x2=\"213\" y2=\"63\"/><polygon class=\"arf\" points=\"209.0,63.0 216.4,59.9 216.4,66.1\"/><text class=\"tb\" x=\"185\" y=\"100\" text-anchor=\"middle\">compression</text><text class=\"ts\" x=\"185\" y=\"116\" text-anchor=\"middle\">squashed</text><rect class=\"bm\" x=\"281\" y=\"40\" width=\"24\" height=\"26\" rx=\"3\"/><rect class=\"bm\" x=\"305\" y=\"64\" width=\"24\" height=\"26\" rx=\"3\"/><line class=\"ar\" x1=\"297\" y1=\"30\" x2=\"311\" y2=\"30\"/><polygon class=\"arf\" points=\"315.0,30.0 307.6,33.1 307.6,26.9\"/><line class=\"ar\" x1=\"313\" y1=\"100\" x2=\"299\" y2=\"100\"/><polygon class=\"arf\" points=\"295.0,100.0 302.4,96.9 302.4,103.1\"/><text class=\"tb\" x=\"305\" y=\"128\" text-anchor=\"middle\">shear</text><text class=\"ts\" x=\"305\" y=\"144\" text-anchor=\"middle\">sliced across</text><path class=\"gt\" d=\"M 375 72 Q 425 96 475 72\"/><line class=\"ar\" x1=\"425\" y1=\"34\" x2=\"425\" y2=\"66\"/><polygon class=\"arf\" points=\"425.0,70.0 421.9,62.6 428.1,62.6\"/><polygon class=\"bx\" points=\"375,76 367,90 383,90\"/><polygon class=\"bx\" points=\"475,76 467,90 483,90\"/><text class=\"tb\" x=\"425\" y=\"128\" text-anchor=\"middle\">bending</text><text class=\"ts\" x=\"425\" y=\"144\" text-anchor=\"middle\">tension one side,</text><text class=\"ts\" x=\"425\" y=\"158\" text-anchor=\"middle\">compression the other</text><rect class=\"bm\" x=\"513\" y=\"52\" width=\"64\" height=\"22\" rx=\"3\"/><path class=\"ar\" d=\"M 585 46 a 14 14 0 1 1 0 34\"/><polygon class=\"arf\" points=\"583,82 593,84 587,74\"/><text class=\"tb\" x=\"545\" y=\"100\" text-anchor=\"middle\">torsion</text><text class=\"ts\" x=\"545\" y=\"116\" text-anchor=\"middle\">twisted</text></svg><figcaption>The five basic loads. Real parts see combinations: a shaft in a belt drive carries torsion from the power and bending from the belt pull, and both at the same time.</figcaption></figure>\n<div class=\"pr-formula\">Round shaft in torsion   τ = 16 × T ÷ (π × d³)<br>Round shaft in bending   σ = 32 × M ÷ (π × d³)<br>Cantilever deflection under an end load   δ = F × L³ ÷ (3 × E × I)<br>Second moment of area, round section   I = π × d⁴ ÷ 64<br>Rectangular section   I = b × h³ ÷ 12   (h is the depth in the direction of bending)</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: torsion in a shaft</div><div class=\"pr-ex-given\">A 50 mm shaft transmits 1000 N·m. What is the shear stress at its surface? What if the shaft were 40 mm or 63 mm?</div><ol class=\"pr-ex-steps\"><li>d = 0.05 m: τ = 16 × 1000 ÷ (π × 0.05³) = 40.7 MPa.</li><li>d = 0.040 m: τ = 16 000 ÷ (π × 0.00006400) = 79.6 MPa.</li><li>d = 0.063 m: τ = 16 000 ÷ (π × 0.000250) = 20.4 MPa.</li></ol><div class=\"pr-ex-answer\">41, 80 and 20 MPa. Stress falls with the cube of the diameter: a shaft 26 percent larger carries the same torque at half the stress. A small reduction in diameter at a bearing seat or a groove has a big effect.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: an overhung load on a shaft</div><div class=\"pr-ex-given\">A motor shaft of 50 mm diameter has a pulley load of 2000 N acting 300 mm from the bearing, treated as a cantilever. What bending stress and tip deflection result? Use E = 207 GPa.</div><ol class=\"pr-ex-steps\"><li>M = 2000 × 0.3 = 600 N·m.</li><li>σ = 32 × 600 ÷ (π × 0.05³) = 48.9 MPa.</li><li>I = π × 0.05⁴ ÷ 64 = 3.07 × 10⁻⁷ m⁴.</li><li>δ = 2000 × 0.3³ ÷ (3 × 207 × 10⁹ × 3.07 × 10⁻⁷) = 0.28 mm.</li></ol><div class=\"pr-ex-answer\">49 MPa and 0.28 mm. The stress is low, but it reverses with every turn of the shaft, so what matters is its fatigue strength. Move the pulley twice as far out and the moment doubles, and the deflection rises eight times. See <a href=\"builtwright_motors_v1.html#mounting\">Motors</a> and <a href=\"builtwright_power_transmission_v1.html#tension\">Power Transmission</a> on overhung load limits.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-stack-2\"></i> Bending: the depth matters most</div><div class=\"info-block-body\">In bending, the material at the surface carries the most stress, and the material near the middle does little. A deeper section carries a given moment at lower stress, and deflects far less.</div><ul class=\"info-block-tips\"><li>The stiffness of a rectangular beam rises with the cube of its depth. A channel or a plate standing on edge is eight times as stiff as the same one lying flat if it is twice as deep.</li><li>A round bar has the same stiffness in every direction. Its stiffness rises with the fourth power of the diameter, so 20 percent more diameter gives about twice the stiffness.</li><li>A hollow section carries nearly as much as a solid one of the same outside size, at a fraction of the weight, which is why shafts and frames use tubes.</li><li>Deflection rises with the cube of the length for a cantilever. A shaft with a long overhang pays for every extra centimetre.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-arrows-shuffle\"></i> Combined loads and rotating bending</div><div class=\"info-block-body\">A rotating shaft carrying a steady sideways load, such as a belt pull or a gear tooth force, sees bending stress that goes from tension to compression and back with every turn. That is fully reversed bending, the most demanding fatigue duty.</div><ul class=\"info-block-tips\"><li>The torsion from the power is steady, and the bending is reversing. They combine, and the shaft is sized for the combination.</li><li>A shaft that is bent, because of a heavy load or misalignment, runs with more stress than designed.</li><li>A key carries torque in shear and in crushing at its sides. A key that rocks and fails is usually a keyway that has been worked loose.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-key\"></i> Keys, splines and set screws</div><div class=\"info-block-body\">Torque passes from a shaft to a hub through some mix of shear and crushing.</div><ul class=\"info-block-tips\"><li>A key of width w and length L carries torque T at a shaft radius r with a shear force of T ÷ r on an area of w × L. Torque capacity grows with the length of the key.</li><li>A set screw alone carries torque by friction and the dimple it makes. It is a weak connection for the torque, and is used with a key.</li><li>Splines share the torque over many teeth. Taper locks and keyless bushings use friction on the taper. See the Wedge tab in <a href=\"builtwright_simple_machines_v1.html#wedge\">Simple Machines</a>.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: look for the smallest section and the longest lever</strong>The two biggest levers on a shaft or a bracket are the diameter at the weak point and the distance the load acts at. A diameter relief for a retaining ring, a worn seat and a sharp shoulder cut the strength at one place. Moving a load outward raises the moment in direct proportion. Check both before blaming the material.</div></div>",
    "fatigue": "<div class=\"bw-section-label\">Fatigue: the quiet way parts break</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A load that is far below the yield strength can still break a part, if it is applied and removed often enough.</div></div><div class=\"callout-box-body\">Each cycle does a tiny amount of damage at the point of highest stress, and a crack starts there. The crack grows a little with every cycle, the section that is left gets smaller, and one day the remaining metal can no longer carry the load and the part breaks in an instant. Fatigue causes most of the breakages of shafts, keys, springs, bolts, welds and gear teeth, and it gives little warning.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 250\" role=\"img\" aria-label=\"Fatigue curve: allowable stress amplitude against cycles to failure for a smooth part and for a notched one\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"20\" x2=\"60\" y2=\"200\"/><line class=\"ln\" x1=\"60\" y1=\"200\" x2=\"480\" y2=\"200\"/><path class=\"gt\" d=\"M 70 50 C 150 62, 220 100, 280 118 C 310 126, 330 128, 470 128\"/><path class=\"ab\" d=\"M 70 80 C 150 90, 210 122, 260 146 C 290 156, 310 158, 470 158\"/><text class=\"tb\" x=\"470\" y=\"120\" text-anchor=\"end\">smooth part</text><text class=\"tl\" x=\"470\" y=\"178\" text-anchor=\"end\">with a notch, keyway or sharp corner</text><text class=\"ts\" x=\"300\" y=\"100\" text-anchor=\"start\">below this line it can run for ever</text><text class=\"ts\" x=\"64\" y=\"14\" text-anchor=\"start\">stress amplitude</text><text class=\"ts\" x=\"270\" y=\"240\" text-anchor=\"middle\">cycles to failure (log scale)</text><text class=\"ts\" x=\"90\" y=\"216\" text-anchor=\"middle\">10³</text><text class=\"ts\" x=\"185\" y=\"216\" text-anchor=\"middle\">10⁴</text><text class=\"ts\" x=\"280\" y=\"216\" text-anchor=\"middle\">10⁵</text><text class=\"ts\" x=\"375\" y=\"216\" text-anchor=\"middle\">10⁶</text><text class=\"ts\" x=\"470\" y=\"216\" text-anchor=\"middle\">10⁷</text></svg><figcaption>The more cycles, the lower the stress a part can take. For steel the curve flattens out, and below the endurance limit the part can run indefinitely. A notch lowers the whole curve, so a keyway, a sharp corner or a weld toe cuts the allowable stress sharply.</figcaption></figure>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-chart-dots\"></i> Rules of thumb</div><ul class=\"info-block-tips\"><li>For steel, the endurance limit of a polished test bar is roughly half the ultimate strength. A real part with a machined surface, a larger size and a notch can have a quarter or less of the polished figure.</li><li>Aluminium and most non-ferrous metals have no true endurance limit. Their fatigue strength keeps falling slowly with the number of cycles.</li><li>A corrosive environment removes the endurance limit even from steel. A part running in water, brine or wet process will crack at a much lower stress than in air.</li><li>A part with a stress concentration factor of 2.5 sees 2.5 times the nominal stress at the notch. The common ones: a keyway (about 2 to 3), a sharp shoulder fillet (2 to 3), a hole in a plate (3), a thread root (3 or more), a sharp weld toe.</li><li>A rotating shaft under steady sideways load sees fully reversed bending, which is the hardest fatigue cycle. Every shaft with a belt, gear or overhung load is in this case.</li></ul></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 520 190\" role=\"img\" aria-label=\"The face of a fatigue fracture in a round shaft, showing the origin, the beach marks and the final fast fracture\" xmlns=\"http://www.w3.org/2000/svg\"><circle class=\"bx\" cx=\"130\" cy=\"100\" r=\"70\"/><path class=\"fl\" d=\"M 130 100 m -62 20 a 70 70 0 0 1 124 -44 Q 150 90 130 100 Z\" opacity=\"0.5\"/><path class=\"gt\" d=\"M 74 136 Q 120 114.4 184.4 67.3\" opacity=\"0.9\"/><path class=\"gt\" d=\"M 74 136 Q 120 97.6 181.6 65.2\" opacity=\"0.9\"/><path class=\"gt\" d=\"M 74 136 Q 120 80.80000000000001 178.8 63.1\" opacity=\"0.9\"/><path class=\"gt\" d=\"M 74 136 Q 120 64 176 61\" opacity=\"0.9\"/><polygon class=\"bs\" points=\"72,140 86,150 78,160\"/><text class=\"ts\" x=\"240\" y=\"60\" text-anchor=\"start\">origin: a notch, keyway corner, fillet</text><line class=\"lt\" x1=\"238\" y1=\"62\" x2=\"93.45850092799496\" y2=\"145.99033054184076\"/><polygon class=\"ltf\" points=\"90.0,148.0 94.8,141.6 97.9,147.0\"/><text class=\"ts\" x=\"240\" y=\"100\" text-anchor=\"start\">beach marks: each band is a stage of crack growth</text><text class=\"ts\" x=\"240\" y=\"140\" text-anchor=\"start\">final fast fracture: the part that was left</text><text class=\"ts\" x=\"240\" y=\"156\" text-anchor=\"start\">when it could no longer carry the load</text></svg><figcaption>A fatigue fracture in a shaft. The crack starts at a stress raiser, spreads in bands called beach marks, and the part finishes in a fast final fracture across what is left of the section.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Type of fracture</th><th>What the face looks like</th><th>What it says</th></tr><tr><td>Ductile overload</td><td>Cup and cone, grey, fibrous, with visible stretching and a shear lip</td><td>The load was above the strength of the section, once. A clear overload</td></tr><tr><td>Brittle fracture</td><td>Flat, bright and granular, often with chevron marks pointing to the origin</td><td>A brittle material, or cold, or a very sharp notch under impact. No warning</td></tr><tr><td>Fatigue</td><td>Smooth and shell-marked where the crack grew, with a rougher area of final fracture</td><td>Repeated loading. The size of the final area shows how high the stress was: small means low stress</td></tr><tr><td>Torsional overload</td><td>Ductile: flat, twisted surface square to the axis. Brittle: a 45 degree helical break</td><td>Torque beyond capacity. The direction of the 45 degree break shows the direction of the torque</td></tr><tr><td>Torsional fatigue</td><td>Cracks at 45 degrees to the axis, spreading from a notch</td><td>Repeated torque reversals or shocks, often from a motor start or a pulsating load</td></tr><tr><td>Stress corrosion cracking</td><td>Branched cracks with little deformation, often in a stainless or brass part under tension</td><td>Tension plus a corrosive agent plus a susceptible material, such as chloride on austenitic stainless</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-clipboard-check\"></i> Where fatigue cracks start, and how to stop them</div><div class=\"info-block-body\">The origin is nearly always a place where stress is raised or the surface is damaged.</div><ul class=\"info-block-tips\"><li>Keyway ends, sharp corners at shoulders, and retaining ring grooves. Remedy: generous radii, a smooth transition, a sled-runner keyway end.</li><li>Hammered-in stamp marks, tool marks, scratches, arc strikes and weld spatter on a shaft. A hard stamp on a highly stressed shaft has started many cracks.</li><li>Press fits and bearing seats. Fretting under the hub or the inner ring starts cracks at the edge of the fit. Remedy: relief grooves, correct interference, a better fit.</li><li>Weld toes and sharp changes of section in fabrications. Remedy: grind the toe smooth, add a radius, avoid welds in the highest stress area.</li><li>Corrosion pits. A pit is a notch. Protect the surface, or reduce the stress.</li><li>A resonance, which multiplies the stress at every cycle. See <a href=\"builtwright_forces_motion_v1.html#oscillation\">Forces, Motion and Energy</a>.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a crack found early is cheap</strong>A fatigue crack takes millions of cycles to grow, and a short crack can be found with dye penetrant or magnetic particle testing at a shutdown. Inspect the usual places (keyways, shoulders, weld toes, the root of threads on long studs) when a machine is open. A crack in a shaft is not repaired by welding without engineering advice, since the repair is itself a stress raiser.</div></div>",
    "fasteners": "<div class=\"bw-section-label\">Bolted joints: a spring that holds the machine together</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A tight bolt is a stretched spring. The stretch is the clamp force, and the clamp is what holds the joint.</div></div><div class=\"callout-box-body\">Tightening the nut stretches the bolt a small amount and compresses the parts it clamps. The bolt pulls and the parts push back. As long as the parts stay squeezed, an outside load is mostly carried by the squeeze going down, with only a small part of it added to the bolt. This is why a bolt in a correctly tightened joint resists fatigue, and why a joint that has lost its preload fails so quickly.</div></div>\n<div class=\"pr-formula\">Bolt stretch   ΔL = F × L ÷ (A × E)    (A the stress area, L the grip length)<br>Share of an outside load carried by the bolt   C = bolt stiffness ÷ (bolt stiffness + joint stiffness), typically 0.1 to 0.3<br>Bolt load = preload + C × outside load;   clamp left = preload − (1 − C) × outside load<br>Joint separates when the outside load exceeds  preload ÷ (1 − C)</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: how little a bolt stretches</div><div class=\"pr-ex-given\">An M16 grade 8.8 bolt has a stress area of 157 mm² and a grip length of 60 mm, and is tightened to a preload of 68 kN. How much has it stretched?</div><ol class=\"pr-ex-steps\"><li>ΔL = 68 000 × 60 ÷ (157 × 207 000) = 4 080 000 ÷ 32 500 000 = 0.126 mm.</li></ol><div class=\"pr-ex-answer\">Only 0.13 mm. That is the whole of the clamping: a stretch of an eighth of a millimetre. Embedment of the surfaces under the nut and between the plates can use up a quarter of it, which is why joints lose preload soon after tightening and why short grips lose more.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: an outside load on a preloaded joint</div><div class=\"pr-ex-given\">The joint above has a preload of 60 kN and C = 0.2. A cyclic outside tension of 10 kN is applied. What do the bolt and the joint see, and at what load does the joint separate?</div><ol class=\"pr-ex-steps\"><li>Bolt load = 60 + 0.2 × 10 = 62 kN, so the bolt sees a swing of only 2 kN.</li><li>Clamp left = 60 − 0.8 × 10 = 52 kN.</li><li>Separation: 60 ÷ 0.8 = 75 kN.</li></ol><div class=\"pr-ex-answer\">The bolt sees 2 kN of the 10 kN swing, so its fatigue life is long. If the preload is lost (say it falls to 10 kN) the joint separates at 12.5 kN and the bolt then carries the full swing every cycle. Preload is what protects the bolt.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-tool\"></i> Getting the preload in</div><div class=\"info-block-body\">The wrench measures torque, and torque is converted to preload by friction. The result is a scatter of plus or minus 25 percent or more.</div><ul class=\"info-block-tips\"><li>Use the manufacturer's torque and lubrication condition. A different lubricant changes the clamp load for the same torque. See the Screw tab in <a href=\"builtwright_simple_machines_v1.html#screw\">Simple Machines</a>.</li><li>Tighten in stages (for example 30, 60 and 100 percent) in a star or cross pattern, so the parts are drawn together evenly. A flange tightened one bolt at a time is pulled crooked. See <a href=\"builtwright_seals_gaskets_v1.html#install\">Seals and Gaskets</a>.</li><li>Clean the threads and the seat. Dirt and rust in the threads take torque and give no clamp.</li><li>Large studs can be tensioned directly by a hydraulic stud tensioner, and then the nut run down by hand against the held load. The preload is then set by a pressure, not by friction.</li><li>Check the stretch directly with a micrometer or ultrasonic gauge where the joint is critical. See <a href=\"builtwright_precision_measurement_v1.html#technique\">Precision Measurement</a>.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-alert-hexagon\"></i> Why bolts come loose</div><div class=\"info-block-body\">Few bolts loosen because the nut is turning back by itself. They lose preload through:</div><ul class=\"info-block-tips\"><li><strong>Embedment and relaxation:</strong> the surfaces flatten, paint squashes, and the clamp is lost. Fewer interfaces, harder washers and longer grips lose less.</li><li><strong>Transverse slip:</strong> a joint that moves sideways under vibration lets the nut back off a little at each movement. This is the most common reason for a nut that has unwound.</li><li><strong>Gasket creep:</strong> soft materials flow out from under the bolts. Re-torque only where the procedure says so.</li><li><strong>Thermal cycling:</strong> parts of different material, or at different temperatures, expand by different amounts and stretch or relax the bolt.</li><li><strong>Overload:</strong> a bolt taken past yield is longer and weaker, and has lost the stretch that clamped.</li></ul></div>\n<table class=\"ref-table\"><tr><th>Method</th><th>What it does</th><th>Limits</th></tr><tr><td>Correct preload</td><td>Keeps the joint from slipping and the bolt from cycling</td><td>The best defence, and the one the others depend on</td></tr><tr><td>Hardened flat washers</td><td>Reduce embedment and protect the surface</td><td>Do not stop loosening on their own</td></tr><tr><td>Wedge-locking washers (a pair with cam faces)</td><td>Resist the unwinding of the nut under vibration</td><td>Right for a hard flat joint, and the pair must be fitted correctly</td></tr><tr><td>Nylon-insert or all-metal lock nuts</td><td>Add prevailing torque</td><td>Nylon is temperature limited. Reuse may lose the locking torque</td></tr><tr><td>Thread-locking compound</td><td>Fills the thread and resists turning</td><td>Surface prep and cure time matter. Heat releases some grades</td></tr><tr><td>Lockwire or tab washers</td><td>Stop a loose nut from falling off</td><td>They keep the nut, not the clamp. Preload has still gone</td></tr><tr><td>Split spring washers</td><td>Little effect on a hard joint</td><td>Seldom the right answer</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> Thread engagement and reuse</div><ul class=\"info-block-tips\"><li>Steel bolt into a steel tapped hole: about one diameter of engagement. Cast iron: about 1.5. Aluminium: 2 or more. A short engagement strips the female thread before the bolt yields.</li><li>Torque-to-yield and angle-tightened bolts are single use. Reusing a bolt that has stretched past yield is reusing a part that has already failed once.</li><li>High strength bolts (grade 10.9 and above) can be embrittled by hydrogen from plating if the process is not controlled. Use the specified finish and a new bolt where in doubt.</li><li>A marked bolt is a known strength. An unmarked, odd or substitute bolt in a critical joint is a fault waiting to happen.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a bolt that stretches tells the truth</strong>Measure and write down the length of the critical studs when new. A stud that has permanently stretched is longer when measured out, and has been overloaded. Necked threads, a bright thin patch at a thread root and a nut that spins on easily over the last few turns are all signs the bolt has yielded. Replace the set, not the one.</div></div>",
    "materials": "<div class=\"bw-section-label\">Materials: the ones that turn up on the plant</div>\n<table class=\"ref-table\"><tr><th>Material</th><th>Density (kg/m³)</th><th>E (GPa)</th><th>Typical ultimate (MPa)</th><th>Where and why</th></tr><tr><td>Mild steel (A36, S235, 1018)</td><td>7850</td><td>205</td><td>400 to 550</td><td>Frames, plate, general fabrications. Weldable, tough, cheap. Yield about 250 MPa</td></tr><tr><td>Medium carbon and alloy steel, quenched and tempered (1045, 4140, 4340)</td><td>7850</td><td>205</td><td>800 to 1100 or more</td><td>Shafts, gears, pins, high strength fasteners. Hardenable</td></tr><tr><td>Stainless steel 304 and 316 (austenitic)</td><td>8000</td><td>193</td><td>515 to 620</td><td>Corrosion resistance. Weak in chloride tension. Work hardens. Low magnetism when annealed</td></tr><tr><td>Grey cast iron</td><td>7200</td><td>100 to 130</td><td>150 to 350 in tension</td><td>Casings, bases, pump bodies. Strong in compression, brittle in tension, damps vibration</td></tr><tr><td>Ductile (nodular) iron</td><td>7100</td><td>165</td><td>400 to 700</td><td>Pump casings, gear blanks, crankshafts. Cast iron with ductility</td></tr><tr><td>Aluminium 6061-T6</td><td>2700</td><td>69</td><td>310</td><td>Light structures, guards, housings. A third of the stiffness of steel. No endurance limit</td></tr><tr><td>Bronze and brass</td><td>8500 to 8800</td><td>100 to 120</td><td>250 to 600</td><td>Bushings, worm wheels, impellers, valve trim. Low friction against steel</td></tr><tr><td>Babbitt (tin or lead based)</td><td>7300 to 10 000</td><td>about 50</td><td>under 100</td><td>Soft bearing surface that tolerates dirt and misalignment. Low temperature limit</td></tr><tr><td>Nylon, PTFE, UHMW polyethylene</td><td>900 to 2200</td><td>0.5 to 3</td><td>20 to 80</td><td>Wear strips, gears, liners, seals. Creep, swell with moisture and expand with heat</td></tr></table>\n<p class=\"pr-p\">These are typical figures, not specifications. Values vary by grade, temperature, form and heat treatment, and the drawing or the supplier's certificate governs.</p>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-flame\"></i> Heat treatment in a paragraph each</div><div class=\"info-block-body\">What a steel is called is only half of what it is. The treatment gives the properties.</div><ul class=\"info-block-tips\"><li><strong>Annealing</strong> softens the steel by heating and cooling slowly. <strong>Normalising</strong> refines the grain with air cooling.</li><li><strong>Hardening</strong> heats the steel above its critical temperature and quenches it, which makes it very hard and brittle. <strong>Tempering</strong> then reheats it to a lower temperature, which trades some hardness for toughness. The tempering temperature is chosen for the strength needed.</li><li><strong>Case hardening</strong> (carburising, nitriding, induction hardening) makes a hard, wear-resistant surface over a tough core. Gear teeth, bearing journals and cam faces are made this way. Grinding or machining past the case removes the benefit.</li><li><strong>Damage by heat:</strong> overheating a bearing or a gear draws the temper and softens it, and welding a hardened part can crack it. A blue or straw colour on a steel surface is a record of how hot it has been.</li></ul></div>\n<table class=\"ref-table\"><tr><th>Rockwell C</th><th>Vickers</th><th>Approximate ultimate strength of steel</th><th>Typical part</th></tr><tr><td>20</td><td>238</td><td>760 MPa</td><td>Tough shaft steels, tempered parts</td></tr><tr><td>30</td><td>286</td><td>950 MPa</td><td>Quenched and tempered shafts and bolts</td></tr><tr><td>40</td><td>392</td><td>1250 MPa</td><td>High strength bolts, springs</td></tr><tr><td>50</td><td>513</td><td>1650 MPa</td><td>Hard gears, tools</td></tr><tr><td>60</td><td>697</td><td>2000 MPa and over, but brittle</td><td>Bearing races and rolling elements, files</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-droplet-half\"></i> Corrosion in the forms that matter</div><ul class=\"info-block-tips\"><li><strong>Galvanic:</strong> two different metals in contact with moisture form a cell, and the less noble one corrodes. It is worst when the corroding metal has a small area against a large area of the other. A steel bolt in a stainless plate, or an aluminium part against steel in a wet place, is the common case.</li><li><strong>Crevice:</strong> the stagnant space under a gasket, washer or deposit becomes starved of oxygen and corrodes. Stainless is especially prone to it in chlorides.</li><li><strong>Pitting:</strong> small deep holes, which are also notches for fatigue. Common in stainless steel in chloride water.</li><li><strong>Stress corrosion cracking:</strong> tension plus a specific chemical plus a susceptible material. Chlorides on 300 series stainless above about 60 degrees C, and ammonia on brass, are the classic pairs.</li><li><strong>Erosion corrosion:</strong> flow strips the protective film, often at elbows, impellers and valve seats, and the metal is lost quickly.</li></ul></div>\n<table class=\"ref-table\"><tr><th>Need</th><th>Look at</th></tr><tr><td>Wear resistance under heavy contact</td><td>Hardened steel, case hardened steel, hard coatings</td></tr><tr><td>Resistance to corrosion in water</td><td>Stainless, bronze, coatings. Check chlorides and temperature</td></tr><tr><td>Low friction against steel</td><td>Bronze, babbitt, PTFE-filled polymers, with a hardened mating surface</td></tr><tr><td>Vibration damping and machinability</td><td>Grey cast iron</td></tr><tr><td>Light weight</td><td>Aluminium or polymer, if the stiffness and temperature are enough</td></tr><tr><td>Toughness in the cold</td><td>Steels specified for low-temperature impact toughness, or austenitic stainless</td></tr><tr><td>Resistance to a specific chemical</td><td>The chemical compatibility chart, and the seal and elastomer data</td></tr></table>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a spark test and a file will tell you more than a guess</strong>When the material of an unmarked part matters, ask for a certificate or check it. A file that skates over a surface shows a hard part, a magnet shows whether a stainless is the austenitic kind or not, and a spark test gives the carbon content of a steel roughly. For critical parts, replace like with like, from a supplier who gives a certificate.</div></div>",
    "thermal": "<div class=\"bw-section-label\">Heat: how parts grow, shrink and break with temperature</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Almost everything gets longer when it gets hotter. If it cannot, it pushes with enormous force.</div></div><div class=\"callout-box-body\">A bar expands by its length times its temperature rise times a coefficient set by the material. Left free, it just grows. Held between two rigid points, it generates a stress that does not depend on how long it is, and the force can be huge. This is what bends pipes, pushes machines out of alignment, cracks cold castings and tightens bearings.</div></div>\n<div class=\"pr-formula\">Free growth   ΔL = α × L × ΔT<br>Stress when fully held   σ = E × α × ΔT</div>\n<table class=\"ref-table\"><tr><th>Material</th><th>α (per kelvin × 10⁻⁶)</th><th>Growth of 1 m for a 100 K rise</th></tr><tr><td>Steel</td><td>12</td><td>1.2 mm</td></tr><tr><td>Cast iron</td><td>10.5</td><td>1.05 mm</td></tr><tr><td>Stainless 304</td><td>17</td><td>1.7 mm</td></tr><tr><td>Copper, bronze</td><td>17 to 18</td><td>1.7 to 1.8 mm</td></tr><tr><td>Brass</td><td>19</td><td>1.9 mm</td></tr><tr><td>Aluminium</td><td>23</td><td>2.3 mm</td></tr><tr><td>Nylon</td><td>80 to 100</td><td>8 to 10 mm</td></tr><tr><td>PVC</td><td>50 to 80</td><td>5 to 8 mm</td></tr></table>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a steam pipe</div><div class=\"pr-ex-given\">A steel pipe 30 m long runs from cold (20 degrees C) to 180 degrees C. How much longer does it get? What force results if both ends are rigidly fixed, for a pipe of 1500 mm² steel area?</div><ol class=\"pr-ex-steps\"><li>ΔL = 12 × 10⁻⁶ × 30 000 × 160 = 57.6 mm.</li><li>σ = 207 000 × 12 × 10⁻⁶ × 160 = 397 MPa, which is above the yield of the steel.</li><li>Force = 397 × 1500 = 596 kN.</li></ol><div class=\"pr-ex-answer\">58 mm of growth, and 600 kN if it is held, more than the pipe can take without buckling or pushing the anchors over. This is why steam lines have loops, bellows, sliding supports and guides, and why a pump on a hot line has to be isolated from the pipe's load. See <a href=\"builtwright_installation_v1.html#piping\">Installation</a>.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: motor growth and the cold alignment offset</div><div class=\"pr-ex-given\">A motor has a shaft centreline 400 mm above its feet. Between the cold alignment and normal running its frame warms by 40 K. How far does the shaft centreline rise?</div><ol class=\"pr-ex-steps\"><li>ΔH = α × H × ΔT = 12 × 10⁻⁶ × 400 × 40 = 0.19 mm.</li></ol><div class=\"pr-ex-answer\">About 0.2 mm. A machine aligned cold to zero will be out by that much when hot, so the maker or the standard sets a cold offset. Without it, a coupling is aligned for the cold machine, and out of line for the hot one. See <a href=\"builtwright_coupling_alignment_v1.html#procedure\">Alignment</a>.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: heating a bearing to fit it</div><div class=\"pr-ex-given\">A bearing with a 100 mm bore is to be fitted on a shaft with an interference of 0.04 mm. How much hotter than the shaft must it be to give 0.03 mm of clearance?</div><ol class=\"pr-ex-steps\"><li>Needed growth = 0.04 + 0.03 = 0.07 mm.</li><li>ΔT = 0.07 ÷ (12 × 10⁻⁶ × 100) = 58 K.</li></ol><div class=\"pr-ex-answer\">About 60 K, so heating to about 80 degrees C from a 20 degree shop. That is well below the 120 degree C limit for standard bearings, above which the steel may soften and the dimensions change. Use an induction heater or a controlled oil bath, never a torch.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-thermometer\"></i> Other thermal effects</div><ul class=\"info-block-tips\"><li><strong>Differential expansion in a bearing:</strong> if the inner ring and shaft get hotter than the housing, the bearing's internal clearance shrinks, and it can seize. This is why bearings with a clearance larger than normal (C3) are used on hot machines.</li><li><strong>Thermal shock:</strong> a sudden change of temperature makes the outside change before the inside, and the difference cracks brittle parts. Cold water on a hot cast iron casing, or a hot fluid into a cold pump, can crack it.</li><li><strong>Creep:</strong> at high temperature (for steel, roughly above 400 degrees C) metals stretch slowly under a steady load. Hot bolting relaxes, and hot piping and tubes sag and swell over years.</li><li><strong>Low temperature:</strong> many steels lose toughness in cold. Equipment in an unheated yard in winter, or handling cold liquids, needs the right grade.</li><li><strong>Cooling for a fit:</strong> a shaft can be cooled in dry ice or liquid nitrogen to shrink it for a fit. Both are an injury risk: cold burns and, for nitrogen, displaced oxygen.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: write the temperature down next to the alignment</strong>A machine that was aligned in a cold shop and runs at 80 degrees C is not aligned as it runs. Record the shaft offset readings with the operating temperatures of the machines, and compare them over time. If a thermal growth number is not known, check it with a hot alignment check, which is a measurement taken within minutes of shutdown.</div></div>",
    "wear": "<div class=\"bw-section-label\">Wear and surface failure: what is taking the metal away</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Wear is the loss of material from a surface, and it comes in a few distinct forms. Each has its own look and its own cure.</div></div><div class=\"callout-box-body\">Naming the mode is the first half of fixing it. Abrasion needs cleaner oil and filters. Adhesion needs a better film or a different pair of materials. Fatigue pitting needs less load, better alignment or a harder surface. A guess at the wrong mode spends money on the wrong cure.</div></div>\n<table class=\"ref-table\"><tr><th>Mode</th><th>What it looks like</th><th>Cause</th><th>Where you find it</th><th>Usual cure</th></tr><tr><td>Abrasive</td><td>Fine scratches in the direction of motion, polished or grooved surfaces</td><td>Hard particles between or embedded in the surfaces: dust, sand, swarf, wear debris</td><td>Cylinders, plain bearings, gear flanks, pumps with solids</td><td>Filtration, sealing, cleaner assembly, harder surfaces</td></tr><tr><td>Adhesive (galling, scuffing, scoring)</td><td>Torn, smeared, rough surfaces and welded-on lumps of metal</td><td>Metal contact through a broken film at high load or low speed, between similar metals</td><td>Gear teeth, threads, sliding ways, cylinder liners at start</td><td>Better lubricant and additives, dissimilar materials, surface treatment, run-in</td></tr><tr><td>Surface fatigue (pitting, spalling)</td><td>Small pits and flakes on rolling or meshing faces</td><td>Repeated contact stress, often with the origin below the surface</td><td>Rolling bearings, gear teeth, cams, wheel treads</td><td>Lower load, better alignment, cleaner and thicker oil, harder and cleaner steel</td></tr><tr><td>Fretting</td><td>Red-brown powder on steel parts and fine marks at fits and joints</td><td>Tiny repeated movement between surfaces held together</td><td>Press fits, bolted joints, bearing seats, coupling hubs, splines</td><td>Tighter fit, more preload, a coating or a lubricated barrier</td></tr><tr><td>Erosion</td><td>Smooth scoured channels and thinning following the flow</td><td>Particles or droplets in fast flow</td><td>Impellers, elbows, valve seats, nozzles, fan blades</td><td>Lower speed, harder material, changed shape or a liner</td></tr><tr><td>Cavitation</td><td>Pitted, sponge-like surfaces near low-pressure zones</td><td>Vapour bubbles collapsing against the metal</td><td>Pump impellers and casings, valves, control surfaces</td><td>Raise suction pressure, reduce the pressure drop, change operating point</td></tr><tr><td>Corrosive wear</td><td>Pitting and scale together with rubbing</td><td>Chemical attack removing the protective film so that rubbing removes more</td><td>Wet, acidic or chemically exposed parts</td><td>Materials and seals for the chemistry, a barrier or inhibitor</td></tr><tr><td>Impact and brinelling</td><td>Dents in the surface, evenly spaced as the rolling elements</td><td>Shock or static overload on a stationary part</td><td>Bearing races of equipment that is shipped, hammered or vibrated while stopped</td><td>Handling, blocking shafts in transit, soft hammers</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-circle-dot\"></i> Rolling contact: very high stress in a very small place</div><div class=\"info-block-body\">Where two curved surfaces meet, such as a ball in a race or two gear teeth, the contact area is tiny, and the stress under it is in the range of 1 to 3 GPa. That is far above the yield of the bulk steel and is carried only because the steel is very hard and clean.</div><ul class=\"info-block-tips\"><li>The worst stress is slightly below the surface, so the fatigue crack starts underneath and surfaces as a pit or a flake.</li><li>Bearing life follows L10 = (C ÷ P)^p million revolutions, where C is the bearing's rated load, P is the equivalent load on it, and p is 3 for ball bearings and 10/3 for roller bearings.</li><li>Because of the power, small changes in load matter. A 20 percent increase in load (from misalignment, imbalance or an extra belt pull) cuts the life of a ball bearing by about 42 percent.</li><li>Contamination dents the race, and each dent is a stress raiser for a pit. Cleanliness is as important as load.</li></ul></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: bearing life from load</div><div class=\"pr-ex-given\">A ball bearing has a rated load C of 50 kN and carries an equivalent load of 10 kN at 1500 rpm. What is its basic rating life? What if the load rises to 20 kN?</div><ol class=\"pr-ex-steps\"><li>L10 = (50 ÷ 10)³ = 125 million revolutions.</li><li>Hours = 125 × 10⁶ ÷ (60 × 1500) = 1390 h.</li><li>At 20 kN: L10 = (2.5)³ = 15.6 million revolutions, so 174 h.</li></ol><div class=\"pr-ex-answer\">About 1400 hours at 10 kN, and 174 hours at 20 kN. Doubling the load cuts the life to an eighth. The rating life is the life that 90 percent of a large group of bearings should reach. See <a href=\"builtwright_bearing_module_v1.html#diagnose\">Bearings</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-math-function\"></i> Sliding wear in one line</div><div class=\"info-block-body\">For two surfaces sliding, the volume worn away is roughly proportional to the load and the sliding distance, and inversely proportional to the hardness of the softer surface (Archard's law).</div><ul class=\"info-block-tips\"><li>Halve the load or double the hardness and you halve the wear.</li><li>A film of oil takes the load off the asperities and reduces the wear coefficient by orders of magnitude.</li><li>Run-in is the wearing off of the high spots in the first hours. It produces debris that has to be flushed out.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: keep the debris, it is the diary</strong>Wear debris tells you what is wearing. Fine bright flakes, metallic glitter, red powder and a dark paste are different stories. Take an oil sample, a filter cutting or a magnet plug, and look before cleaning. Oil analysis is a measure of wear, and it can catch a problem long before vibration does. See <a href=\"builtwright_lubrication_v1.html#analysis\">Lubrication</a>.</div></div>",
    "calc": "<div class=\"bw-section-label\">Calculators: try the numbers</div>\n<p class=\"pr-p\">Change any value and the answer updates. These use the formulas in the tabs, for learning and for sanity checks. Pressure equipment, lifting gear and structural work are governed by their codes and by qualified people, and not by this arithmetic.</p>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-arrows-horizontal\"></i> Tension rod: stress, stretch and margin</div><div class=\"calc-row\"><div><label>Pull (kN)</label><input type=\"number\" step=\"any\" id=\"te_f\" value=\"30\" oninput=\"calcTens()\"></div><div><label>Diameter (mm)</label><input type=\"number\" step=\"any\" id=\"te_d\" value=\"20\" oninput=\"calcTens()\"></div></div><div class=\"calc-row\"><div><label>Length (m)</label><input type=\"number\" step=\"any\" id=\"te_l\" value=\"2\" oninput=\"calcTens()\"></div><div><label>Yield strength (MPa)</label><input type=\"number\" step=\"any\" id=\"te_y\" value=\"250\" oninput=\"calcTens()\"></div></div><div class=\"calc-out\" id=\"te_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-rotate-2\"></i> Shaft: torsion, bending and combined stress</div><div class=\"calc-row\"><div><label>Torque (N·m)</label><input type=\"number\" step=\"any\" id=\"sh_t\" value=\"1000\" oninput=\"calcShaft()\"></div><div><label>Bending moment (N·m)</label><input type=\"number\" step=\"any\" id=\"sh_m\" value=\"600\" oninput=\"calcShaft()\"></div></div><div class=\"calc-row\"><div><label>Diameter (mm)</label><input type=\"number\" step=\"any\" id=\"sh_d\" value=\"50\" oninput=\"calcShaft()\"></div></div><div class=\"calc-out\" id=\"sh_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-corner-down-right\"></i> Overhung load: bending stress and deflection</div><div class=\"calc-row\"><div><label>Load at the end (N)</label><input type=\"number\" step=\"any\" id=\"ca_f\" value=\"2000\" oninput=\"calcCant()\"></div><div><label>Distance from the bearing (mm)</label><input type=\"number\" step=\"any\" id=\"ca_l\" value=\"300\" oninput=\"calcCant()\"></div></div><div class=\"calc-row\"><div><label>Shaft diameter (mm)</label><input type=\"number\" step=\"any\" id=\"ca_d\" value=\"50\" oninput=\"calcCant()\"></div></div><div class=\"calc-out\" id=\"ca_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-bolt\"></i> Bolt: stretch and torque</div><div class=\"calc-row\"><div><label>Nominal diameter (mm)</label><input type=\"number\" step=\"any\" id=\"bo_d\" value=\"16\" oninput=\"calcBolt()\"></div><div><label>Stress area (mm²)</label><input type=\"number\" step=\"any\" id=\"bo_a\" value=\"157\" oninput=\"calcBolt()\"></div></div><div class=\"calc-row\"><div><label>Grip length (mm)</label><input type=\"number\" step=\"any\" id=\"bo_g\" value=\"60\" oninput=\"calcBolt()\"></div><div><label>Preload (kN)</label><input type=\"number\" step=\"any\" id=\"bo_f\" value=\"68\" oninput=\"calcBolt()\"></div></div><div class=\"calc-row\"><div><label>Nut factor K (0.2 dry, 0.15 oiled)</label><input type=\"number\" step=\"any\" id=\"bo_k\" value=\"0.2\" oninput=\"calcBolt()\"></div></div><div class=\"calc-out\" id=\"bo_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-temperature-plus\"></i> Thermal growth and held stress</div><div class=\"calc-row\"><div><label>Length (m)</label><input type=\"number\" step=\"any\" id=\"th_l\" value=\"30\" oninput=\"calcTherm()\"></div><div><label>Temperature rise (K)</label><input type=\"number\" step=\"any\" id=\"th_t\" value=\"160\" oninput=\"calcTherm()\"></div></div><div class=\"calc-row\"><div><label>α (×10⁻⁶ per K; steel 12, aluminium 23)</label><input type=\"number\" step=\"any\" id=\"th_a\" value=\"12\" oninput=\"calcTherm()\"></div></div><div class=\"calc-out\" id=\"th_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-circle\"></i> Pressure vessel or pipe wall</div><div class=\"calc-row\"><div><label>Pressure (bar)</label><input type=\"number\" step=\"any\" id=\"ho_p\" value=\"11\" oninput=\"calcHoop()\"></div><div><label>Inside diameter (mm)</label><input type=\"number\" step=\"any\" id=\"ho_d\" value=\"1000\" oninput=\"calcHoop()\"></div></div><div class=\"calc-row\"><div><label>Wall thickness (mm)</label><input type=\"number\" step=\"any\" id=\"ho_t\" value=\"8\" oninput=\"calcHoop()\"></div></div><div class=\"calc-out\" id=\"ho_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-circle-dotted\"></i> Rolling bearing basic life</div><div class=\"calc-row\"><div><label>Rated load C (kN)</label><input type=\"number\" step=\"any\" id=\"li_c\" value=\"50\" oninput=\"calcLife()\"></div><div><label>Equivalent load P (kN)</label><input type=\"number\" step=\"any\" id=\"li_p\" value=\"10\" oninput=\"calcLife()\"></div></div><div class=\"calc-row\"><div><label>Speed (rpm)</label><input type=\"number\" step=\"any\" id=\"li_n\" value=\"1500\" oninput=\"calcLife()\"></div><div><label>Exponent (3 ball, 3.33 roller)</label><input type=\"number\" step=\"any\" id=\"li_e\" value=\"3\" oninput=\"calcLife()\"></div></div><div class=\"calc-out\" id=\"li_out\"></div></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Safety: when a part lets go</div>\n<div class=\"callout-box red\"><div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Parts under stress hold energy, and failure releases it. A broken bolt, stud, spring or vessel does not simply fall apart.</div></div><div class=\"callout-box-body\">A stretched stud stores elastic energy and can fly when it fails. A pressurised vessel or pipe holds a great deal more, and a crack in it is a failure that has started. A cracked shaft, a cracked casting and a part that has been heated, welded or shocked beyond its limit are not repaired by hope. Stop, isolate, and get the part assessed.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-gauge\"></i> Pressure and vessels</div><ul class=\"info-block-tips\"><li>Never work on a system under pressure. Isolate it, vent it and prove it dead. Trapped pressure holds energy for a long time, and a fitting released under it becomes a projectile.</li><li>Pressure equipment (receivers, boilers, hydraulic accumulators, pipe) has a rated pressure, an inspection regime and a code. A wall thickness measurement that shows thinning is a reason to derate or replace, not to carry on.</li><li>Test only by the method the code allows. Pneumatic tests store far more energy than hydrostatic tests and are done under strict conditions.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-bolt\"></i> Fasteners and stored energy</div><ul class=\"info-block-tips\"><li>A tensioned bolt or stud stores energy, and a snapped one can fly. Stand out of line when releasing heavily loaded bolts, and loosen flange bolts in a staged sequence.</li><li>Do not reuse high strength bolts that have been stretched. Do not substitute an unmarked or lower grade bolt in a critical joint.</li><li>Do not heat a bolt, or any part under load, to free it, without a plan. Heat changes strength and releases stored energy in an unplanned way.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-flame\"></i> Heat, cold and fits</div><ul class=\"info-block-tips\"><li>Heating a bearing or a hub for a fit: use a controlled heater, wear heat-resistant gloves, and support the part. An oil bath near its flash point is a fire risk.</li><li>Cooling with dry ice or liquid nitrogen causes cold burns and displaces oxygen. Use in a ventilated area with the right protection.</li><li>Hot work on a hardened or high-carbon part can crack it, sometimes later. Get the welding procedure, not a guess.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-alert-circle\"></i> Cracks and suspect parts</div><ul class=\"info-block-tips\"><li>A crack in a shaft, a lifting point, a pressure part or a structural member means stop use and call for an assessment. Do not weld over it or drill a hole at its end as a quick fix unless an engineer has approved it.</li><li>Parts that have been shock loaded, overheated or run overloaded may be damaged without showing it. Inspect, and replace where there is any doubt.</li><li>Keep failed parts for the failure analysis. The fracture face is evidence.</li></ul></div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-info-circle callout-box-icon\"></i><div class=\"callout-box-title\">This module explains how parts behave. It does not replace an engineer's design, a pressure code, or the manufacturer's data.</div></div><div class=\"callout-box-body\">The formulas are for understanding and for checking that an answer is the right size. Allowable stresses, safety factors and inspection intervals for real equipment come from the code and the engineer responsible.</div></div>"
  },
  "title": "BuiltWright: Materials, Stress and Failure: Module 24",
  "preamble": null,
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_forces_motion_v1.html#statics\">Forces, Motion and Energy: the loads that cause the stress</a><a href=\"builtwright_simple_machines_v1.html#screw\">Simple Machines: the screw, and why torque is not preload</a><a href=\"builtwright_bearing_module_v1.html#diagnose\">Bearings: rolling contact fatigue</a><a href=\"builtwright_gearboxes_v1.html#wear\">Gearboxes: pitting, scuffing and breakage</a><a href=\"builtwright_installation_v1.html#anchors\">Installation: anchors and bolting</a><a href=\"builtwright_seals_gaskets_v1.html#materials\">Seals and Gaskets: elastomers and temperature</a><a href=\"builtwright_root_cause_v1.html#reading\">Root Cause: reading a fracture</a><a href=\"builtwright_reference_v1.html#torque\">Reference: torque values</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;&middot;&nbsp; module 24 of series &nbsp;&middot;&nbsp; materials, stress and failure</div>",
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
    ".ref-note { font-size: 12px; color: #888780; line-height: 1.5; margin: 0.4rem 0 0.9rem 0; }",
    ".calc { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1rem 1.1rem; margin-bottom: 10px; }",
    ".calc-title { font-size: 15px; font-weight: 600; color: #f0ede4; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 8px; }",
    ".calc-title i { color: #BA7517; }",
    ".calc-row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; }",
    ".calc label { display: block; font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1px; text-transform: uppercase; color: #888780; margin-bottom: 3px; }",
    ".calc input, .calc select { width: 100%; font-family: 'Rajdhani', sans-serif; font-size: 14px; background: #1a1a18; border: 0.5px solid #3a3a36; border-radius: 5px; padding: 7px 9px; color: #f0ede4; outline: none; }",
    ".calc input:focus, .calc select:focus { border-color: #BA7517; }",
    ".calc-out { background: #111110; border: 0.5px solid #3a3a36; border-radius: 6px; padding: 0.6rem 0.9rem; font-family: 'Share Tech Mono', monospace; font-size: 12px; color: #EF9F27; line-height: 1.8; min-height: 2.4em; }",
    ".related { margin-top:1.25rem; border-top:0.5px solid #3a3a36; padding-top:0.9rem; }",
    ".related-label { font-family:'Share Tech Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; color:#5F5E5A; margin-bottom:6px; }",
    ".related a { display:inline-block; font-size:12px; color:#e8e6df; background:#242420; border:0.5px solid #3a3a36; border-radius:4px; padding:5px 9px; margin:0 6px 6px 0; text-decoration:none; }",
    ".related a:hover { border-color:#BA7517; color:#EF9F27; }",
    ".pr-p { font-size: 14px; color: #c8c6bf; line-height: 1.65; margin-bottom: 0.75rem; }",
    ".pr-p strong { color: #f0ede4; font-weight: 600; }",
    ".pr-formula { font-family: 'Share Tech Mono', monospace; font-size: 13px; color: #EF9F27; background: #1e1e1c; border: 0.5px solid #3a3a36; border-radius: 6px; padding: 0.6rem 0.9rem; margin: 0.6rem 0 0.9rem 0; line-height: 1.8; overflow-x: auto; }",
    ".pr-ex { background: #1e1e1c; border: 0.5px solid #3a3a36; border-left: 3px solid #378ADD; border-radius: 0 8px 8px 0; padding: 0.9rem 1.1rem; margin: 0.9rem 0 1.25rem 0; }",
    ".pr-ex-title { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #85B7EB; margin-bottom: 0.5rem; }",
    ".pr-ex-given { font-size: 13px; color: #e8e6df; margin-bottom: 0.4rem; line-height: 1.55; }",
    ".pr-ex-steps { margin: 0.3rem 0 0.5rem 1.2rem; }",
    ".pr-ex-steps li { font-size: 13px; color: #c8c6bf; line-height: 1.6; padding: 1px 0; }",
    ".pr-ex-answer { font-size: 13px; color: #f0ede4; font-weight: 600; border-top: 0.5px solid #3a3a36; padding-top: 0.45rem; line-height: 1.5; }",
    ".pr-fig { margin: 0.75rem 0 1.25rem 0; background: #242420; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 0.75rem; overflow-x: auto; }",
    ".pr-fig figcaption { font-size: 12px; color: #888780; line-height: 1.5; margin-top: 0.4rem; }",
    ".pr-svg { display: block; width: 100%; min-width: 460px; height: auto; max-height: 360px; }",
    ".pr-svg .t { font-family: 'Rajdhani', sans-serif; font-size: 13px; fill: #e8e6df; }",
    ".pr-svg .ts { font-family: 'Rajdhani', sans-serif; font-size: 11px; fill: #a8a69e; }",
    ".pr-svg .tb { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; fill: #EF9F27; }",
    ".pr-svg .tr { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; fill: #F09595; }",
    ".pr-svg .tl { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 700; fill: #85B7EB; }",
    ".pr-svg .ln { stroke: #a8a69e; stroke-width: 1.5; fill: none; }",
    ".pr-svg .lt { stroke: #6a6862; stroke-width: 1; fill: none; stroke-dasharray: 4 3; }",
    ".pr-svg .bx { stroke: #a8a69e; stroke-width: 1.5; fill: #2e2e2a; }",
    ".pr-svg .bm { stroke: #BA7517; stroke-width: 2; fill: #3a2a0c; }",
    ".pr-svg .bs { stroke: #378ADD; stroke-width: 1.5; fill: #14263a; }",
    ".pr-svg .fl { stroke: none; fill: #3a3a36; }",
    ".pr-svg .ar { stroke: #EF9F27; stroke-width: 2.2; fill: none; }",
    ".pr-svg .arf { fill: #EF9F27; stroke: none; }",
    ".pr-svg .ab { stroke: #85B7EB; stroke-width: 2.2; fill: none; }",
    ".pr-svg .abf { fill: #85B7EB; stroke: none; }",
    ".pr-svg .ard { stroke: #F09595; stroke-width: 2.2; fill: none; }",
    ".pr-svg .ardf { fill: #F09595; stroke: none; }",
    ".pr-svg .gr { stroke: #5db37a; stroke-width: 2; fill: none; }",
    ".pr-svg .gt { stroke: #BA7517; stroke-width: 2; fill: none; }",
    ".pr-svg .dt { fill: #EF9F27; stroke: none; }",
    "@media print { body { background:#fff; color:#000; padding:0; } .bw-tabs, .ref-search, .tree-back, .sc-score, .adv-chevron, .bw-badge { display:none !important; } .bw-panel { display:none; } .bw-panel.active { display:block; } .bw-wrap { max-width:100%; } .bw-title, .comp-detail-name, .info-block-title, .type-card-name, .sym-card-label, .tree-q-text, .tree-result-text, .route-title, .sc-stem, .callout-box-title, .field-tip strong, .tree-prevent strong, .bw-section-label, .family-label, .ref-table th { color:#000 !important; } .comp-detail-body, .info-block-body, .callout-box-body, .tree-result-sub, .tree-prevent, .field-tip div, .sc-why, .ref-table td, .comp-detail-tips li, .info-block-tips li, .callout-tips li, .sym-detail-body, .adv-body p, .route-text, .type-card-sub, .sym-card-sub, .tree-q-hint, .ref-note, .chain-label, .chain-sub { color:#222 !important; } .comp-detail, .info-block, .callout-box, .type-card, .sym-card, .tree-q, .tree-result, .field-tip, .adv-wrap, .adv-body, .adv-toggle, .chain-wrap, .chain-box, .sc-q, .sym-detail, .calc, .route, .dir-row, .safety-strip { background:#fff !important; border-color:#999 !important; box-shadow:none !important; } .adv-body { display:block !important; } .tree-btn, .sc-opt, .pm-btn { border:0.5px solid #999; background:#fff; color:#000; } .progress-bar { display:none; } a { color:#000; text-decoration:none; } .bw-logo a::after { content:\" builtwrightapp.com\"; color:#666; } .bw-header { border-bottom:1px solid #000; } .comp-detail, .info-block, .callout-box, .tree-q, .sc-q { page-break-inside: avoid; } }",
    "@media print { .pr-svg .t, .pr-svg .ts, .pr-svg .tb, .pr-svg .tr, .pr-svg .tl { fill: #000 !important; } .pr-svg .ln, .pr-svg .bx, .pr-svg .bm, .pr-svg .bs, .pr-svg .lt, .pr-svg .ar, .pr-svg .ab, .pr-svg .ard, .pr-svg .gr, .pr-svg .gt { stroke: #000 !important; } .pr-svg .bx, .pr-svg .bm, .pr-svg .bs { fill: #eee !important; } .pr-svg .fl { fill: #ccc !important; } .pr-svg .arf, .pr-svg .abf, .pr-svg .ardf, .pr-svg .dt { fill: #000 !important; } .pr-formula, .pr-ex, .pr-fig { background: #fff !important; border-color: #999 !important; } .pr-formula, .pr-ex-given, .pr-ex-steps li, .pr-ex-answer, .pr-ex-title, .pr-p, .pr-p strong, .pr-fig figcaption { color: #000 !important; } }"
  ],
  "cssShared": 0,
  "components": [],
  "balancedChoices": true
});
