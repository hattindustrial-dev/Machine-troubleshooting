BW.register("mechanics", {
  "key": "mechanics",
  "num": "23",
  "name": "Forces, Motion and Energy",
  "source": "builtwright_forces_motion_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "statics",
      "label": "Balance",
      "active": false,
      "style": ""
    },
    {
      "id": "motion",
      "label": "Motion",
      "active": false,
      "style": ""
    },
    {
      "id": "torque",
      "label": "Torque and Power",
      "active": false,
      "style": ""
    },
    {
      "id": "energy",
      "label": "Energy",
      "active": false,
      "style": ""
    },
    {
      "id": "friction",
      "label": "Friction",
      "active": false,
      "style": ""
    },
    {
      "id": "inertia",
      "label": "Inertia",
      "active": false,
      "style": ""
    },
    {
      "id": "impact",
      "label": "Impact and Shock",
      "active": false,
      "style": ""
    },
    {
      "id": "oscillation",
      "label": "Oscillation",
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
    "title": "Forces, Motion and Energy",
    "badge": "Module 23",
    "tree": null,
    "treeTab": null,
    "groups": {
      "selectLaw": {
        "scope": "#panel-overview",
        "cardClass": ".type-card",
        "prefix": "lawcard-",
        "data": "law-displayData",
        "display": "law-display"
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
      "function calcRot(){var d=prn('ro_d')/1000,n=prn('ro_n');var w=2*Math.PI*n/60,v=w*d/2,a=w*w*d/2;prs('ro_out','Angular speed: '+prf(w,1)+' rad/s<br>Surface speed: '+prf(v,1)+' m/s ('+prf(v*196.85,0)+' ft/min)<br>Acceleration at the rim: '+prf(a,0)+' m/s² ('+prf(a/9.81,0)+' g)<br>Pull on each kilogram at the rim: '+prf(a,0)+' N<br>At twice the speed these figures: surface speed ×2, acceleration and force ×4');}",
      "function calcAff(){var s=prn('af_s')/100;prs('af_out','Flow: '+prf(100*s,0)+'% of full<br>Head or pressure: '+prf(100*s*s,0)+'%<br>Torque: '+prf(100*s*s,0)+'%<br>Power: '+prf(100*s*s*s,0)+'%<br>This holds for a centrifugal pump or fan on a system with no static head.');}",
      "function calcStart(){var I=prn('st_i'),n=prn('st_n'),T=prn('st_t');if(T<=0){prs('st_out','The motor has to make more torque than the load needs.');return;}var w=2*Math.PI*n/60;prs('st_out','Time to speed: '+prf(I*w/T,1)+' s<br>Energy stored at speed: '+prf(0.5*I*w*w/1000,1)+' kJ<br>A direct-on-line start of this inertia puts roughly the same energy again into the rotor as heat.');}",
      "function calcStop(){var v=prn('sp_v'),s=prn('sp_s'),u=prn('sp_u');if(s<=0){prs('sp_out','Enter a stopping distance.');return;}var a=v*v/(2*s),lim=u*9.81;prs('sp_out','Deceleration needed: '+prf(a,2)+' m/s² ('+prf(a/9.81,2)+' g)<br>Time to stop: '+prf(v/a,2)+' s<br>Most friction can hold: '+prf(lim,2)+' m/s²<br>'+(a>lim?'The load will slide forward. Lengthen the stop to at least '+prf(v*v/(2*lim),2)+' m.':'The load stays in place.'));}",
      "function calcTip(){var b=prn('ti_b'),h=prn('ti_h'),u=prn('ti_u');if(h<=0||b<=0){prs('ti_out','Enter both dimensions.');return;}var tipF=b/(2*h);prs('ti_out','Tilt angle at which it tips: '+prf(Math.atan(b/(2*h))*180/Math.PI,1)+'°<br>Push to tip it, as a fraction of its weight: '+prf(tipF,2)+'<br>Push to slide it: '+prf(u,2)+' of its weight<br>'+(u<tipF?'It slides before it tips.':'It tips before it slides. Fix it down, or keep pushes low and below the centre of gravity.'));}",
      "function calcDrop(){var W=prn('dr_w'),h=prn('dr_h')/1000,k=prn('dr_k')*1000;if(W<=0){prs('dr_out','Enter a load.');return;}var F=W*(1+Math.sqrt(1+2*h*k/W));prs('dr_out','Peak load: '+prf(F,1)+' kN<br>As a multiple of the weight: '+prf(F/W,1)+'<br>With no drop at all, a suddenly applied load gives '+prf(2*W,1)+' kN');}",
      "function calcNat(){var m=prn('na_m'),k=prn('na_k')*1000,n=prn('na_n');if(m<=0||k<=0){prs('na_out','Enter mass and stiffness.');return;}var f=Math.sqrt(k/m)/(2*Math.PI),r=(n/60)/f;prs('na_out','Static deflection: '+prf(m*9.81/k*1000,2)+' mm<br>Natural frequency: '+prf(f,1)+' Hz ('+prf(f*60,0)+' cpm)<br>Running speed over natural frequency: '+prf(r,2)+'<br>'+(Math.abs(r-1)<0.2?'Close to resonance. Expect strong amplification.':(r>1.41?'Above 1.41, so the mounts isolate.':'Between 0.8 and 1.41 away from resonance: little isolation and some amplification.')));}"
    ],
    "helpers": [],
    "init": "calcRot();calcAff();calcStart();calcStop();calcTip();calcDrop();calcNat();"
  },
  "cards": {
    "law-displayData": {
      "first": {
        "icon": "ti-player-pause",
        "name": "First law",
        "role": "A body keeps doing what it is doing unless an unbalanced force acts on it",
        "body": "A stationary load stays put until something pushes it. A moving load, a spinning fan or a flywheel keeps going until something slows it. The size of the resistance to change is the mass (for straight-line motion) or the moment of inertia (for rotation). This is why a loaded conveyor does not stop the instant the motor does, and why a big fan coasts for minutes.",
        "tips": [
          "If a thing is not accelerating, the forces on it are balanced. A machine bolted to its base still has forces on it, and they cancel out through the bolts and the foundation.",
          "Coast-down is stored energy in the spinning mass. Locking out a motor does not make a rotating machine safe until it has stopped."
        ]
      },
      "second": {
        "icon": "ti-arrow-big-right-lines",
        "name": "Second law",
        "role": "The unbalanced force on a body equals its mass times its acceleration",
        "body": "Push a 1000 kg load with 1000 N unopposed and it accelerates at 1 m/s². Double the mass and the acceleration halves. For rotation the same law reads torque = moment of inertia × angular acceleration. Almost every question about how long a machine takes to start or stop, or how hard a brake has to work, is this law.",
        "tips": [
          "The force is the unbalanced force: whatever is left after friction and the load have taken their share.",
          "F = m × a also gives the dynamic part of a load. A hoist accelerating a 1000 kg load upward at 1 m/s² carries 10.8 kN in the rope, not 9.8 kN."
        ]
      },
      "third": {
        "icon": "ti-arrows-exchange-2",
        "name": "Third law",
        "role": "Every force has an equal and opposite force on whatever applied it",
        "body": "A motor drives its load with a torque, and an equal and opposite torque acts on the motor frame and through its feet on the base. A pump pushes fluid in one direction and the casing is pushed the other way. A torque multiplier pushes a bolt round and its reaction arm has to push back on something solid.",
        "tips": [
          "If a machine is not secured against the reaction, the reaction moves the machine. Jack bolts, dowels and anchors exist to carry reaction.",
          "Piping that is forced into place carries a reaction load into the pump or compressor flange. See <a href=\"builtwright_installation_v1.html#piping\">Installation</a>."
        ]
      },
      "energy": {
        "icon": "ti-battery-charging",
        "name": "Conservation of energy",
        "role": "Energy is never lost, only converted",
        "body": "The electrical energy a motor takes comes out as shaft work and as heat. A load lifted stores potential energy; a spinning mass stores kinetic energy; a compressed spring or gas stores elastic energy. A machine that wastes energy turns it into heat, noise and vibration, which are things technicians can feel, hear and measure.",
        "tips": [
          "Heat on a bearing, a gearbox or a belt is a measurement of the energy it is wasting.",
          "Stored energy is the hazard behind most lockout rules. Gravity, springs, pressure and rotation all keep energy in a machine after the power is off."
        ]
      },
      "momentum": {
        "icon": "ti-bounce-right",
        "name": "Conservation of momentum",
        "role": "Without an outside force, total momentum stays constant",
        "body": "Momentum is mass times velocity. A change in momentum needs an impulse: force multiplied by the time it acts. Stopping the same load in a shorter time needs a bigger force. This is the principle behind shock loads, water hammer, press and hammer blows, and the benefit of a soft stop.",
        "tips": [
          "Doubling the stopping time halves the force. That is what shock absorbers, soft starters and valve closing times do."
        ]
      },
      "equil": {
        "icon": "ti-scale",
        "name": "Equilibrium",
        "role": "Forces balance and turning effects balance",
        "body": "A thing at rest, or moving at a constant speed in a straight line, has forces that add up to zero and moments that add up to zero. This is statics, and it tells you what a support, a bolt, a beam or a foundation has to carry before anything is moving.",
        "tips": [
          "Any support carries a share of the weight, and where the centre of gravity sits decides the shares."
        ]
      }
    }
  },
  "trees": {},
  "selfcheck": {
    "overview": [
      [
        "A hoist accelerates a 1000 kg load upward at 1 m/s². What is the tension in the rope?",
        [
          "About 10.8 kN, which is the static weight plus the force that gives the acceleration",
          "About 9.8 kN, which is the static weight of the load alone",
          "About 1.0 kN, which is the force that gives the acceleration alone",
          "About 8.8 kN, which is the static weight less the acceleration force"
        ],
        0,
        "The rope has to hold the weight (9.81 kN) and also supply the force that accelerates the mass (1000 × 1 = 1 kN), so T = m(g + a). Using the weight alone leaves out the dynamic part that every start adds."
      ],
      [
        "A motor delivers 80 N·m to its load. What acts on the motor frame?",
        [
          "No torque, because the motor frame is not part of the rotating load",
          "An equal and opposite torque of 80 N·m, carried through the feet to the base",
          "A torque of 40 N·m, because the load and the base share the reaction",
          "A torque of 80 N·m in the same direction, carried through the feet"
        ],
        1,
        "The third law says every action has an equal and opposite reaction. The frame is pushed the other way with the same torque, and the feet, bolts and base have to resist it. Jack bolts and dowels exist for this."
      ],
      [
        "Two 100 N pulls are applied to a ring, at right angles to each other. About what single pull is equivalent?",
        [
          "200 N, found by adding the sizes of the two pulls",
          "100 N, because the pulls at right angles cancel half each",
          "About 141 N, found by adding the two as vectors",
          "0 N, because pulls at different angles balance each other"
        ],
        2,
        "Forces add as vectors. At right angles the sum is the square root of 100² + 100², about 141 N. Adding sizes only works when the forces point in the same direction."
      ],
      [
        "A large fan keeps turning for several minutes after the motor is switched off. Which idea explains this?",
        [
          "The motor is still supplying a small torque through its windings",
          "The fan produces its own torque from the airflow through the duct",
          "The air inside the fan pushes it round until the pressure falls",
          "Its rotating mass keeps its motion until friction and air drag use up the energy"
        ],
        3,
        "The first law: a body keeps its motion until an unbalanced torque acts on it. Bearing friction and air drag are small, so a heavy rotor takes a long time to stop, and stays dangerous the whole time."
      ],
      [
        "A motor takes 10 kW and delivers 9 kW at the shaft. Where does the other 1 kW go?",
        [
          "It becomes heat in the windings, bearings and cooling fan",
          "It is stored in the shaft and delivered back when the motor stops",
          "It is lost as electrical energy that does not appear anywhere",
          "It is delivered to the load as a higher torque than the shaft shows"
        ],
        0,
        "Energy is conserved, so lost work shows up as heat, plus a little noise and vibration. The motor is 90 percent efficient and that 1 kW is why it has a cooling fan and gets warm."
      ]
    ],
    "statics": [
      [
        "A 5 m beam rests on two supports and carries 10 kN at 2 m from the left support. What does the right support carry?",
        [
          "6 kN, from moments about the left support: 10 × 3 ÷ 5",
          "4 kN, from moments about the left support: 10 × 2 ÷ 5",
          "5 kN, since two supports always share the load equally",
          "10 kN, since the right support carries what the left does not"
        ],
        1,
        "Moments about the left support: R₂ × 5 = 10 × 2, so R₂ = 4 kN and R₁ = 6 kN. The nearer support carries more. The shares are only equal when the load is in the middle."
      ],
      [
        "What does a free-body diagram show?",
        [
          "The body with only the applied loads and none of the support forces",
          "The body and everything attached to it, drawn at the same scale",
          "The body drawn on its own, with every force acting on it",
          "The path the body will follow once the forces are applied"
        ],
        2,
        "The method is to isolate the body and show every force on it, including weights and the reactions where it touches other things. Leaving out a reaction is the commonest error, and the equations then cannot balance."
      ],
      [
        "A load tilts and swings as soon as it leaves the floor on a single hook. What is the likely reason?",
        [
          "The sling is rated for more than the load actually weighs",
          "The load is too heavy for the hook to hold it level",
          "The sling legs are too long for the size of the load",
          "The hook is not directly above the load's centre of gravity"
        ],
        3,
        "A suspended load hangs so that its centre of gravity is directly beneath the hook. If the hook is off to one side, the load rotates until it is. Move the hook, or check the weight distribution."
      ],
      [
        "A tall cabinet sits on a polished floor with a low friction coefficient. Pushed at its centre of gravity, which happens first?",
        [
          "It slides, because the friction force limit is reached before the tipping force",
          "It tips, because tall narrow bodies always tip before they slide",
          "Nothing happens, because the weight on the floor resists both",
          "It tips, because the push acts above the line of the feet"
        ],
        0,
        "Tipping needs a push of W × b ÷ 2h, and sliding needs μ × W. With a low μ the sliding force is lower, so it slides. Bolt the cabinet down and the sliding is prevented, so tipping is then the risk."
      ],
      [
        "What is a soft foot on a machine?",
        [
          "A foot whose bolt has been tightened more than the other three",
          "A foot that does not carry its share of the load, and distorts the frame when bolted",
          "A foot with a rubber or cork pad under it to damp vibration",
          "A foot that is on a softer part of the foundation than the others"
        ],
        1,
        "A soft foot rocks or hangs short of the base. Tightening the bolt pulls the frame down onto it and twists the machine, which changes bearing and coupling alignment. It is found with a feeler gauge or indicator under each foot."
      ],
      [
        "A hydraulic cylinder is pinned at both ends and carries no side load. In what direction does it exert force?",
        [
          "At right angles to the line joining its two pins",
          "In the direction of the larger pin's load",
          "Along the line joining its two pins, which is its centreline",
          "In whichever direction the rod is pointing at the time"
        ],
        2,
        "A member loaded only at its two pins can only carry force along the line between them, because any other direction would have a moment that nothing resists. A side load turns it into a beam and bends the rod."
      ]
    ],
    "motion": [
      [
        "A belt running at 3 m/s has to stop in 1.5 m. What deceleration is needed?",
        [
          "6 m/s², from the speed divided by half the distance",
          "2 m/s², from the speed divided by the distance",
          "9 m/s², from the speed squared divided by the distance",
          "3 m/s², from the speed squared divided by twice the distance"
        ],
        3,
        "a = v² ÷ (2s) = 9 ÷ 3 = 3 m/s². The time to stop is 1 second. A bit of dimensional checking helps: speed squared over distance has the units of acceleration."
      ],
      [
        "Product on a belt has a friction coefficient of 0.25. What is the largest deceleration it can have without sliding?",
        [
          "About 2.45 m/s², which is the friction coefficient times g",
          "About 9.81 m/s², which is the full acceleration of gravity",
          "About 0.25 m/s², which is the friction coefficient alone",
          "About 39 m/s², which is g divided by the coefficient"
        ],
        0,
        "Friction can supply at most μ × m × g, and dividing by the mass gives μ × g = 0.25 × 9.81. Brake the belt harder than that and the product slides forward over it."
      ],
      [
        "A rotor's speed is doubled. What happens to the force that its unbalance puts on the bearings?",
        [
          "It doubles, in step with the speed",
          "It rises four times, because the force depends on speed squared",
          "It rises eight times, because it depends on speed cubed",
          "It stays the same, since the unbalance has not changed"
        ],
        1,
        "The force from an unbalance is m × r × ω², so doubling ω multiplies it by four. This is why overspeeding a machine and shaking it apart are so closely linked."
      ],
      [
        "A shaft turns at 1800 rpm. What is that in radians per second?",
        [
          "About 30 rad/s, from 1800 ÷ 60",
          "About 11 310 rad/s, from 2π × 1800",
          "About 188.5 rad/s, from 2π × 1800 ÷ 60",
          "About 94 rad/s, from π × 1800 ÷ 60"
        ],
        2,
        "One revolution is 2π radians and a minute is 60 seconds, so rpm × 0.1047 gives rad/s. 1800 × 0.1047 = 188.5. Using rpm in a formula that needs rad/s is a common slip."
      ],
      [
        "A 200 mm grinding wheel turns at 3600 rpm. What is its rim speed?",
        [
          "About 7.5 m/s, from 0.2 × 3600 ÷ 60 ÷ π",
          "About 188 m/s, from π × 0.2 × 3600 ÷ 12",
          "About 2.4 m/s, from 0.2 × 3600 ÷ 300",
          "About 37.7 m/s, from π × 0.2 × 3600 ÷ 60"
        ],
        3,
        "Rim speed is π × diameter × revolutions per second: π × 0.2 × 60 = 37.7 m/s. The wheel carries a maximum speed label, and the force on the wheel rises with the square of its speed."
      ],
      [
        "A hoist starts a load with an acceleration of 5 m/s². By about how much does the rope tension exceed the static weight?",
        [
          "About 50 percent, because 5 m/s² is about half of g",
          "About 5 percent, because a short start adds very little",
          "About 100 percent, because it doubles the load as a rule",
          "It does not exceed it, because the rope only carries the weight"
        ],
        0,
        "The tension is m(g + a), so the extra is a ÷ g = 5 ÷ 9.81 = 51 percent. A jerky start is a heavier lift than a smooth one, and the hook, rope and brake have to be rated for it."
      ]
    ],
    "torque": [
      [
        "A 30 kW motor runs at 1500 rpm. What is its shaft torque?",
        [
          "About 19 N·m, from 9549 × 30 ÷ 15 000",
          "About 191 N·m, from 9549 × 30 ÷ 1500",
          "About 1910 N·m, from 9549 × 30 ÷ 150",
          "About 4.7 N·m, from 30 × 1500 ÷ 9549"
        ],
        1,
        "Torque (N·m) = 9549 × power (kW) ÷ speed (rpm) = 9549 × 30 ÷ 1500 = 191 N·m. The last option has the formula upside down, which gives the power from a torque, not the torque."
      ],
      [
        "A gearbox of ratio 10:1 and 95 percent efficiency receives 100 N·m. What torque does it deliver?",
        [
          "1000 N·m, because the torque is multiplied by the ratio alone",
          "10 N·m, because the torque is divided by the ratio",
          "950 N·m, because the torque is multiplied by the ratio and the efficiency",
          "105 N·m, because the efficiency is added to the input"
        ],
        2,
        "A reducer trades speed for torque: 100 × 10 × 0.95 = 950 N·m, at a tenth of the speed. The output power is 95 percent of the input, and the other 5 percent is the heat in the gearbox."
      ],
      [
        "A centrifugal fan is slowed to 50 percent of its speed. What happens to its power?",
        [
          "It falls to 50 percent, in step with the speed",
          "It falls to 25 percent, because power follows the square of speed",
          "It falls to 75 percent, because the fan efficiency also drops",
          "It falls to about 12.5 percent, because power follows the cube of speed"
        ],
        3,
        "For fans and pumps flow follows speed, pressure follows speed squared and power follows speed cubed. 0.5³ = 0.125. This is the entire saving behind variable speed drives on these loads."
      ],
      [
        "Which of these loads is closest to constant torque?",
        [
          "A loaded belt conveyor, because the torque is set by the load and friction",
          "A centrifugal fan, because the airflow loads the shaft evenly",
          "A centrifugal pump, because the pressure is set by the speed",
          "A flywheel, because the energy it stores is fixed by its mass"
        ],
        0,
        "A conveyor's torque is set by the belt tension and the load on it, and does not change much with speed, so power rises in step. Fans and centrifugal pumps have torque that rises with the square of speed."
      ],
      [
        "A 500 N·m torque acts on a shaft through a sheave of 0.2 m radius. What is the net belt force?",
        [
          "100 N, from the torque multiplied by the radius",
          "2500 N, from the torque divided by the radius",
          "250 N, from the torque divided by the diameter in metres",
          "500 N, since the force equals the torque in newtons"
        ],
        1,
        "Torque is force times radius, so force is torque ÷ radius = 500 ÷ 0.2 = 2500 N. This is the difference between the tight and slack sides, and the tight side carries more than that."
      ],
      [
        "A shear pin in a drive keeps breaking, and someone replaces it with a bolt. What is the risk?",
        [
          "The bolt will bend and jam the drive before the pin would have",
          "The drive will run slower because the bolt adds friction",
          "The protection is gone, and the next overload breaks something more expensive",
          "There is no risk, because the pin was a weak part in any case"
        ],
        2,
        "A shear pin is meant to be the weakest part, so that it gives way before the gearbox, shaft or motor. A stronger replacement moves the failure to the next weakest part. Find out why the pin is breaking instead."
      ]
    ],
    "energy": [
      [
        "How much energy does it take to lift a 1000 kg load by 3 m?",
        [
          "About 3 kJ, from the mass times the height divided by g",
          "About 3000 kJ, from the mass times the height times 1000",
          "About 9.8 kJ, from the weight in kilonewtons only",
          "About 29.4 kJ, from the mass times g times the height"
        ],
        3,
        "The potential energy is m × g × h = 1000 × 9.81 × 3 = 29.4 kJ, however long it takes. Time changes the power needed, and does not change the energy."
      ],
      [
        "A moving cart doubles its speed. What happens to its kinetic energy?",
        [
          "It rises four times, because kinetic energy depends on speed squared",
          "It doubles, in step with the speed",
          "It rises eight times, because it depends on speed cubed",
          "It stays the same, since the mass is unchanged"
        ],
        0,
        "Kinetic energy is ½ × m × v², so doubling v gives four times the energy. A brake has to absorb all of it, which is why stopping from twice the speed needs four times the energy, or four times the distance."
      ],
      [
        "A pump moves 20 L/s against a head of 40 m. What is the hydraulic power?",
        [
          "About 0.8 kW, from 1000 × 9.81 × 0.002 × 40",
          "About 7.85 kW, from 1000 × 9.81 × 0.02 × 40",
          "About 78.5 kW, from 1000 × 9.81 × 0.2 × 40",
          "About 31 kW, from 1000 × 9.81 × 20 × 40 ÷ 250"
        ],
        1,
        "Hydraulic power is density × g × flow × head, with the flow in cubic metres a second: 20 L/s = 0.02 m³/s. The motor has to supply this divided by the efficiencies of the pump and motor."
      ],
      [
        "A machine is running warmer than usual at the same load and speed. What does that mean in energy terms?",
        [
          "The machine is delivering more useful work than before",
          "The machine has stored more energy in its moving parts",
          "More of the energy put in is being lost to friction somewhere inside it",
          "The machine is operating with a higher mechanical advantage"
        ],
        2,
        "Energy that does not leave as useful work leaves as heat. A rise in temperature at the same load is a sign of rising losses: wear, misalignment, poor lubrication, or a part that is dragging."
      ],
      [
        "A flywheel's speed falls to half its original speed. How much of its stored energy has been given up?",
        [
          "Half, because the speed has been halved",
          "One quarter, because the energy depends on the speed squared",
          "None, because the mass has not changed",
          "Three quarters, because the energy depends on the speed squared"
        ],
        3,
        "Rotating energy is ½ × I × ω². At half the speed it is a quarter of the original, so three quarters has been given up to the load. That is how a press or punch draws its working energy from its flywheel."
      ]
    ],
    "friction": [
      [
        "A block pressed against a surface with a force of 500 N has a coefficient of friction of 0.4. What is the friction force?",
        [
          "200 N, which is the coefficient times the normal force",
          "1250 N, which is the normal force divided by the coefficient",
          "500 N, since friction equals the force pressing",
          "0.8 N, which is the coefficient divided by the force"
        ],
        0,
        "F = μ × N = 0.4 × 500 = 200 N. The friction force depends on how hard the surfaces are pressed together and what they are made of, and not on the contact area to a first approximation."
      ],
      [
        "How does the force needed to start a slide compare with the force to keep it sliding?",
        [
          "It is usually smaller, because a stationary load grips less",
          "It is usually larger, because static friction is greater than moving friction",
          "It is always the same, because the surfaces are unchanged",
          "It is larger only on lubricated surfaces, with dry ones the same"
        ],
        1,
        "The static coefficient is normally higher than the kinetic one, which is why a load jerks into motion. The same difference causes stick-slip in slow sliding."
      ],
      [
        "Under which condition is a plain bearing most likely to operate in boundary lubrication?",
        [
          "At full speed with the oil at its normal temperature and viscosity",
          "At steady speed with a light load and a thick oil",
          "At start-up and stop, when the shaft is slow and no film has built up",
          "Only when the bearing has run dry, whatever the speed"
        ],
        2,
        "A film needs speed, viscosity and a modest load. At start and stop, speed is low and the surfaces touch, so most bearing wear happens then. That is why frequent starts shorten bearing life."
      ],
      [
        "A slow sliding table makes a juddering squeal. What is the usual cause?",
        [
          "The friction coefficient is too low for the surfaces to hold at all",
          "The table is moving faster than the lubricant film can follow",
          "The surfaces are too smooth for the contact to be steady",
          "Static friction exceeds moving friction, so it sticks and slips repeatedly"
        ],
        3,
        "The surface sticks until the drive builds enough force, slips, slows, and sticks again. Cures include a lubricant with a flatter friction curve and a stiffer drive. The pattern is called stick-slip."
      ],
      [
        "A clutch has been contaminated with oil. What is the effect on the torque it can transmit?",
        [
          "It falls, because the oil lowers the friction coefficient between the plates",
          "It rises, because the oil fills gaps between the plates",
          "It stays the same, since the clamping force has not changed",
          "It rises at first and then falls as the oil heats up"
        ],
        0,
        "Torque capacity is the friction coefficient times the clamp force times the radius. Oil can halve the coefficient and halve the capacity, so the clutch slips and heats. Cleaning the faces may be the repair."
      ],
      [
        "A block with a 100 N normal force slides at 0.5 m/s with a coefficient of 0.3. What power goes into heat?",
        [
          "150 W, which is the normal force times the speed times 3",
          "15 W, which is the friction force multiplied by the speed",
          "30 W, which is the normal force times the coefficient",
          "1.5 W, which is the friction force times the speed divided by 10"
        ],
        1,
        "Friction force = 0.3 × 100 = 30 N and the heat power is that force times the speed: 30 × 0.5 = 15 W. All of it is converted to heat in the sliding surfaces."
      ]
    ],
    "inertia": [
      [
        "Two discs have the same mass, and one has twice the radius of the other. How do their moments of inertia compare?",
        [
          "The larger one has twice the inertia, in step with the radius",
          "They are the same, because the mass is the same",
          "The larger one has four times the inertia, because radius is squared",
          "The larger one has half the inertia, because the mass is spread out"
        ],
        2,
        "For a disc, I = ½ × m × r². The distance from the axis counts squared, so doubling the radius at the same mass quadruples the inertia. Mass far from the axis is what makes a rotor hard to start."
      ],
      [
        "A load of 100 kg·m² turns on the output of a 10:1 gearbox. What inertia does the motor see from it?",
        [
          "10 kg·m², which is the load inertia divided by the ratio",
          "1000 kg·m², which is the load inertia times the ratio",
          "100 kg·m², since inertia is not changed by the gearbox",
          "1 kg·m², which is the load inertia divided by the ratio squared"
        ],
        3,
        "Reflected inertia is the load inertia divided by the ratio squared, so 100 ÷ 100 = 1 kg·m². The gearbox makes a heavy load easy for the motor to accelerate, and the motor's own rotor then often matters more."
      ],
      [
        "A machine has I = 10 kg·m² and runs at 100 rad/s. The motor has 50 N·m of spare torque. How long does it take to start?",
        [
          "20 s, from the inertia times the speed divided by the torque",
          "5 s, from the torque divided by the inertia",
          "0.5 s, from the torque divided by the inertia times the speed",
          "50 s, from the inertia times the torque divided by the speed"
        ],
        0,
        "Torque = I × α, so α = 5 rad/s², and reaching 100 rad/s takes 20 s. Equivalently, t = I × ω ÷ T. Always check the units come out in seconds."
      ],
      [
        "Why do motors have a limit on the number of starts per hour?",
        [
          "Each start wears the brushes and the commutator of the motor",
          "Each start heats the rotor by about as much as the energy given to the load",
          "Each start draws current that overloads the supply protection",
          "Each start loosens the motor mounts through the torque reaction"
        ],
        1,
        "During an across-the-line start much of the energy goes into the rotor as heat, and it is about equal to the kinetic energy delivered. Many starts in a short time can overheat the rotor, even if the running current is low."
      ],
      [
        "A fan's coast-down time has become much shorter than when it was new. What is the likely meaning?",
        [
          "Less friction in the system, so it is running more efficiently",
          "More inertia in the system, such as dirt built up on the blades",
          "More friction in the system, such as a failing bearing, a rub or a dragging brake",
          "A higher supply voltage, which is storing more energy in the motor"
        ],
        2,
        "The coast-down is set by the stored energy and the losses that use it up. Same energy and a shorter time means larger losses. It is a free diagnostic if a baseline was recorded."
      ]
    ],
    "impact": [
      [
        "A moving load is brought to rest. What happens to the average force if the stopping time is halved?",
        [
          "It halves, because a quicker stop uses less energy",
          "It stays the same, since the load and speed are unchanged",
          "It rises four times, because stopping depends on time squared",
          "It doubles, because force is the change in momentum divided by time"
        ],
        3,
        "F × Δt = m × Δv, so for the same momentum change, half the time means twice the force. A soft stop is a long stop, and every shock absorber, ramp and soft starter relies on this."
      ],
      [
        "A load is suddenly applied to a taut elastic sling with no drop. What is the peak load, in theory?",
        [
          "Up to twice the weight of the load",
          "Exactly the weight of the load, since the sling is elastic",
          "Half the weight of the load, since the sling shares it",
          "Up to four times the weight of the load"
        ],
        0,
        "A load released onto an elastic support overshoots its static position, and the peak is twice the static load. Any drop before the sling takes up adds more. Slings are rated for static loads."
      ],
      [
        "Water at 3 m/s in a pipe is stopped quickly by a valve. With a wave speed of 1000 m/s, what pressure rise results?",
        [
          "About 3 bar, from the density times the speed divided by 1000",
          "About 30 bar, from the density times the wave speed times the change in speed",
          "About 300 bar, from the density times the wave speed squared",
          "About 0.3 bar, from the speed divided by the wave speed"
        ],
        1,
        "ΔP = ρ × a × Δv = 1000 × 1000 × 3 = 3 MPa, which is 30 bar on top of the line pressure. It applies when the valve closes faster than the wave takes to travel the line and return."
      ],
      [
        "Which change reduces the pressure surge when a valve on a long water line closes?",
        [
          "Closing the valve more quickly, so the surge is over sooner",
          "Raising the line pressure so the surge is a smaller share",
          "Closing the valve more slowly, so the stop takes longer",
          "Using a smaller pipe so there is less water to stop"
        ],
        2,
        "The surge depends on how fast the momentum of the water is changed. A slower closing spreads the change over a longer time, and the peak falls. Surge vessels and slow-closing check valves work the same way."
      ],
      [
        "Why does a sling's rated capacity not protect it against a load that is dropped onto it?",
        [
          "The rating only covers loads that are lifted from one point",
          "The rating falls as the sling heats up from the shock",
          "The rating includes a factor that allows for a drop of 50 mm",
          "The rating applies to a static load, and shock can multiply the load several times"
        ],
        3,
        "A load caught after a drop produces a peak force that depends on the drop and the stiffness. It can be nine times the weight in a realistic case. The only defence is avoiding slack and shock."
      ]
    ],
    "oscillation": [
      [
        "A machine's mounts are replaced with stiffer ones. What happens to its natural frequency on them?",
        [
          "It rises, because frequency increases with stiffness for the same mass",
          "It falls, because stiff mounts lock the machine in place",
          "It stays the same, since the mass of the machine is unchanged",
          "It rises only if the running speed rises as well"
        ],
        0,
        "f = (1 ÷ 2π) × √(k ÷ m). More stiffness gives a higher frequency, and more mass a lower one. This is why stiffening a base or adding weight can move a resonance away from a running speed."
      ],
      [
        "A machine runs at exactly its natural frequency. What is the result?",
        [
          "Isolation, where the mounts pass on very little of the force",
          "Resonance, where each push adds to the last and the vibration builds up",
          "Damping, where the motion dies away faster than usual",
          "Balance, where the forces on the machine cancel out"
        ],
        1,
        "Pushing a mass on a spring at its own natural rate puts the energy in at the right moment every cycle. Only damping limits the size. The cure is to move the frequency or the speed."
      ],
      [
        "At what forcing frequency, compared with the natural frequency, does a soft mount start to isolate?",
        [
          "Below about half the natural frequency",
          "Exactly at the natural frequency",
          "Above about 1.41 times the natural frequency",
          "Above about 10 times the natural frequency, and not before"
        ],
        2,
        "Transmissibility falls below one only when the forcing frequency passes √2 times the natural frequency. Below that, a soft mount amplifies. Isolators are chosen so the running speed is well above this point."
      ],
      [
        "What does adding damping do to a resonance?",
        [
          "It moves the resonant frequency higher and leaves the peak alone",
          "It removes the resonance and the machine no longer has one",
          "It raises the peak, because damping adds energy to the motion",
          "It lowers the peak, and leaves the resonant frequency where it was"
        ],
        3,
        "Damping takes energy out of the motion as heat, so the peak is less tall, but the system is still the same mass on the same spring. To move the resonance you have to change mass or stiffness."
      ],
      [
        "A machine on mounts sags 1 mm under its own weight. About what is its natural frequency?",
        [
          "About 15.8 Hz, from the shortcut of 15.8 divided by the root of the deflection in mm",
          "About 1.0 Hz, which is the deflection in millimetres as hertz",
          "About 63 Hz, which is 63 divided by the deflection in millimetres",
          "About 158 Hz, which is 15.8 times the deflection in millimetres"
        ],
        0,
        "f ≈ 15.8 ÷ √δ with δ in millimetres. A softer mount, with more sag, has a lower frequency. A machine on 10 mm of deflection is down at about 5 Hz, or 300 cpm."
      ],
      [
        "A guard rattles loudly at one speed only and is quiet at all the others. What is the most likely cause?",
        [
          "A worn bearing in the machine, which only shows at that speed",
          "A resonance of the guard itself, excited at that speed",
          "A bent shaft, which only touches the guard at that speed",
          "A loose mount on the motor, which only shows at that speed"
        ],
        1,
        "A panel is a mass on a spring with its own natural frequency. When a running speed or one of its multiples matches that frequency, the guard rings. Stiffening it, adding mass or damping it moves or reduces the peak."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"bw-section-label\">Forces, motion and energy: the physics behind the plant</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Every machine in the plant is three laws of motion and one law of energy, wearing different clothes.</div></div><div class=\"callout-box-body\">A pump accelerates fluid. A brake removes the energy from a moving load. A foundation holds a machine in equilibrium. A vibration is a mass on a spring. If these ideas are clear, the specifics of each machine are variations on them, and a fault becomes a question like <strong>\"which force is out of balance?\"</strong> or <strong>\"where is the energy going?\"</strong></div></div>\n<div class=\"card-grid\"><div class=\"type-card\" onclick=\"selectLaw('first')\" id=\"lawcard-first\"><div class=\"type-card-icon\"><i class=\"ti ti-player-pause\"></i></div><div class=\"type-card-name\">First law</div><div class=\"type-card-sub\">Inertia</div></div><div class=\"type-card\" onclick=\"selectLaw('second')\" id=\"lawcard-second\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-big-right-lines\"></i></div><div class=\"type-card-name\">Second law</div><div class=\"type-card-sub\">F = m × a</div></div><div class=\"type-card\" onclick=\"selectLaw('third')\" id=\"lawcard-third\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-exchange-2\"></i></div><div class=\"type-card-name\">Third law</div><div class=\"type-card-sub\">Action and reaction</div></div><div class=\"type-card\" onclick=\"selectLaw('energy')\" id=\"lawcard-energy\"><div class=\"type-card-icon\"><i class=\"ti ti-battery-charging\"></i></div><div class=\"type-card-name\">Conservation of energy</div><div class=\"type-card-sub\">It changes form</div></div><div class=\"type-card\" onclick=\"selectLaw('momentum')\" id=\"lawcard-momentum\"><div class=\"type-card-icon\"><i class=\"ti ti-bounce-right\"></i></div><div class=\"type-card-name\">Conservation of momentum</div><div class=\"type-card-sub\">Mass × velocity</div></div><div class=\"type-card\" onclick=\"selectLaw('equil')\" id=\"lawcard-equil\"><div class=\"type-card-icon\"><i class=\"ti ti-scale\"></i></div><div class=\"type-card-name\">Equilibrium</div><div class=\"type-card-sub\">Nothing is accelerating</div></div></div><div id=\"law-display\"><div class=\"comp-placeholder\">tap a principle to read it</div></div>\n<div class=\"bw-section-label\">The quantities, with units</div>\n<table class=\"ref-table\"><tr><th>Quantity</th><th>SI unit</th><th>Common other units</th><th>Conversions to remember</th></tr><tr><td>Mass</td><td>kilogram (kg)</td><td>pound (lb), tonne</td><td>1 kg = 2.205 lb</td></tr><tr><td>Force, weight</td><td>newton (N)</td><td>pound-force (lbf), kgf</td><td>1 kgf = 9.81 N; 1 lbf = 4.448 N</td></tr><tr><td>Pressure</td><td>pascal (Pa), bar</td><td>psi, kPa, MPa</td><td>1 bar = 100 kPa = 14.5 psi</td></tr><tr><td>Torque</td><td>newton-metre (N·m)</td><td>lb·ft, lb·in</td><td>1 N·m = 0.7376 lb·ft</td></tr><tr><td>Work, energy</td><td>joule (J)</td><td>ft·lb, kWh, BTU</td><td>1 kWh = 3.6 MJ; 1 ft·lb = 1.356 J</td></tr><tr><td>Power</td><td>watt (W)</td><td>horsepower (hp)</td><td>1 hp = 746 W; 1 kW = 1.341 hp</td></tr><tr><td>Speed</td><td>metre per second</td><td>ft/min, km/h</td><td>1 m/s = 196.9 ft/min = 3.6 km/h</td></tr><tr><td>Angular speed</td><td>radian per second</td><td>rpm</td><td>1 rpm = 0.1047 rad/s</td></tr><tr><td>Frequency</td><td>hertz (Hz)</td><td>cycles per minute (cpm)</td><td>1 Hz = 60 cpm = 60 rpm</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-arrows-diagonal\"></i> Vectors: a force has a direction</div><div class=\"info-block-body\">A force has a size and a direction. Pushing at an angle, only the component along the line of motion does the pulling; the other component pushes the load into or off the surface.</div><ul class=\"info-block-tips\"><li>A force F at angle θ to the direction of travel has a component F cos θ along it and F sin θ across it.</li><li>Pulling a skid with a chain at 30 degrees above the floor puts 87 percent of the pull into motion (cos 30° = 0.87) and lifts the skid a little with the rest (sin 30° = 0.5), which reduces the friction.</li><li>Forces are added as vectors. Two 100 N pulls at right angles make 141 N, not 200 N; two opposite pulls make zero.</li><li>A belt that wraps a sheave, a spring on a linkage and a chain on a sprocket all have forces in several directions. Draw them before adding anything.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: write the units next to every number</strong>Most calculation errors are a unit mistake: a mass used as a force, millimetres mixed with metres, rpm used where radians per second belong. Carry the units through the working, and if the answer comes out in the wrong unit, the formula or the numbers are wrong. A force in kilograms is a warning sign.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-map-2\"></i> Where this shows up in the series</div><ul class=\"info-block-tips\"><li><a href=\"builtwright_vibration_v1.html#resonance\">Vibration</a>: a mass on a spring, resonance and unbalance. The Oscillation tab here is the theory.</li><li><a href=\"builtwright_motors_v1.html#nameplate\">Motors</a>: torque, power and speed on the nameplate, and starting duty.</li><li><a href=\"builtwright_conveyors_v1.html#tension\">Conveyors</a>: friction, tension and starting acceleration.</li><li><a href=\"builtwright_clutches_brakes_v1.html#friction\">Clutches and Brakes</a>: friction torque and energy absorbed.</li><li><a href=\"builtwright_installation_v1.html#foundation\">Installation</a>: equilibrium of a machine on its foundation.</li><li><a href=\"builtwright_fans_v1.html#laws\">Fans</a>: the cube law, from power and torque.</li></ul></div>",
    "statics": "<div class=\"bw-section-label\">Statics: when nothing is moving, everything balances</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A body at rest has forces that sum to zero and moments that sum to zero.</div></div><div class=\"callout-box-body\">That gives two sets of equations, and between them they find every support force on a machine, beam, linkage or lifting rig. Draw the body on its own, add every force acting on it (weights at the centre of gravity, applied loads, support reactions) and require that nothing turns and nothing moves. The sketch is called a free-body diagram, and drawing it is more than half of the work.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-list-numbers\"></i> The free-body method</div><ul class=\"info-block-tips\"><li><strong>Isolate</strong> the thing you are studying and sketch it alone.</li><li><strong>Draw every force</strong> on it: weights (at the centre of gravity), applied loads, and the reactions where it touches something else.</li><li><strong>Choose a pivot</strong>, usually where several unknown forces meet, so those forces drop out of the moment equation.</li><li><strong>Balance the moments</strong> about the pivot, then the vertical forces, then the horizontal forces.</li><li><strong>Check the answer is sensible:</strong> reactions share the load, and none is larger than the total unless something pulls up.</li></ul></div>\n<div class=\"pr-formula\">ΣF = 0   (vertical and horizontal)<br>ΣM = 0   (about any point)</div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 288\" role=\"img\" aria-label=\"A beam on two supports carrying one load, with the two support reactions\" xmlns=\"http://www.w3.org/2000/svg\"><rect class=\"bm\" x=\"60\" y=\"100\" width=\"380\" height=\"12\" rx=\"3\"/><polygon class=\"bx\" points=\"100,112 86,138 114,138\"/><polygon class=\"bx\" points=\"400,112 386,138 414,138\"/><line class=\"ln\" x1=\"70\" y1=\"138\" x2=\"130\" y2=\"138\"/><line class=\"ln\" x1=\"370\" y1=\"138\" x2=\"430\" y2=\"138\"/><line class=\"ard\" x1=\"190\" y1=\"40\" x2=\"190\" y2=\"94\"/><polygon class=\"ardf\" points=\"190.0,98.0 186.9,90.6 193.1,90.6\"/><text class=\"tr\" x=\"190\" y=\"32\" text-anchor=\"middle\">load W</text><line class=\"ar\" x1=\"100\" y1=\"200\" x2=\"100\" y2=\"146\"/><polygon class=\"arf\" points=\"100.0,142.0 103.1,149.4 96.9,149.4\"/><text class=\"tb\" x=\"100\" y=\"218\" text-anchor=\"middle\">R₁</text><line class=\"ar\" x1=\"400\" y1=\"200\" x2=\"400\" y2=\"146\"/><polygon class=\"arf\" points=\"400.0,142.0 403.1,149.4 396.9,149.4\"/><text class=\"tb\" x=\"400\" y=\"218\" text-anchor=\"middle\">R₂</text><line class=\"lt\" x1=\"100\" y1=\"160\" x2=\"190\" y2=\"160\"/><text class=\"ts\" x=\"145\" y=\"176\" text-anchor=\"middle\">a</text><line class=\"lt\" x1=\"100\" y1=\"238\" x2=\"400\" y2=\"238\"/><text class=\"ts\" x=\"250\" y=\"254\" text-anchor=\"middle\">span L</text><text class=\"ts\" x=\"250\" y=\"276\" text-anchor=\"middle\">R₂ = W × a ÷ L      R₁ = W − R₂</text></svg><figcaption>A beam on two supports with one load. The moment about the left support gives R₂, and the forces then give R₁.</figcaption></figure>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a beam with one load</div><div class=\"pr-ex-given\">A 4 m beam is simply supported at both ends and carries a 6 kN load 1 m from the left support. What does each support carry?</div><ol class=\"pr-ex-steps\"><li>Moments about the left support: R₂ × 4 = 6 × 1, so R₂ = 1.5 kN.</li><li>Vertical forces: R₁ + R₂ = 6, so R₁ = 4.5 kN.</li><li>Check: the nearer support carries more, and the two add up to the load.</li></ol><div class=\"pr-ex-answer\">Left support 4.5 kN, right support 1.5 kN. The support nearest the load carries the most.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a machine on four feet</div><div class=\"pr-ex-given\">A 2000 kg machine is 2 m long, with its centre of gravity 0.8 m from the left end, on two pairs of feet at the two ends. How much does each pair carry?</div><ol class=\"pr-ex-steps\"><li>Weight = 2000 × 9.81 = 19.6 kN.</li><li>Right pair: 19.6 × 0.8 ÷ 2 = 7.85 kN.</li><li>Left pair: 19.6 − 7.85 = 11.8 kN.</li></ol><div class=\"pr-ex-answer\">The left pair carries 60 percent and the right pair 40 percent. Uneven shares are normal when the centre of gravity is off-centre. A foot that carries nothing at all, or that rocks, is a soft foot, and it distorts the machine when bolted down. See <a href=\"builtwright_installation_v1.html#baseplate\">Installation</a> and <a href=\"builtwright_coupling_alignment_v1.html#procedure\">Alignment</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-focus-2\"></i> The centre of gravity</div><div class=\"info-block-body\">The centre of gravity is the point where the weight of a body can be treated as acting. A suspended load hangs so that its centre of gravity is directly below the hook.</div><ul class=\"info-block-tips\"><li>For a symmetrical, uniform body it is at the geometric centre. For an assembly, it is found from the weights and positions of its parts: the sum of weight × distance, divided by the total weight.</li><li>A motor and pump on a common base, a gearbox with a heavy motor on one end, or a skid with the drive on one side will all hang crooked on a single hook.</li><li>The hook goes above the centre of gravity. A lift with the hook off-centre tilts as soon as it comes off the ground, and the load swings toward the centre.</li></ul></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 192\" role=\"img\" aria-label=\"A machine pushed from the side, showing the weight, the push and the base width\" xmlns=\"http://www.w3.org/2000/svg\"><g transform=\"translate(0,-70)\"><line class=\"ln\" x1=\"20\" y1=\"220\" x2=\"480\" y2=\"220\"/><rect class=\"bm\" x=\"110\" y=\"100\" width=\"120\" height=\"120\" rx=\"3\"/><circle class=\"bs\" cx=\"170\" cy=\"160\" r=\"5\"/><text class=\"ts\" x=\"184\" y=\"158\" text-anchor=\"start\">centre of gravity</text><line class=\"ard\" x1=\"170\" y1=\"164\" x2=\"170\" y2=\"210\"/><polygon class=\"ardf\" points=\"170.0,214.0 166.9,206.6 173.1,206.6\"/><text class=\"tr\" x=\"180\" y=\"208\" text-anchor=\"start\">W</text><line class=\"lt\" x1=\"110\" y1=\"220\" x2=\"110\" y2=\"100\"/><text class=\"tb\" x=\"98\" y=\"164\" text-anchor=\"end\">h</text><line class=\"lt\" x1=\"110\" y1=\"236\" x2=\"230\" y2=\"236\"/><text class=\"ts\" x=\"170\" y=\"252\" text-anchor=\"middle\">base width b</text><line class=\"ar\" x1=\"60\" y1=\"100\" x2=\"104\" y2=\"100\"/><polygon class=\"arf\" points=\"108.0,100.0 100.6,103.1 100.6,96.9\"/><text class=\"tb\" x=\"56\" y=\"96\" text-anchor=\"end\">push F</text><text class=\"ts\" x=\"330\" y=\"120\" text-anchor=\"start\">tips when F × h > W × b ÷ 2</text><text class=\"ts\" x=\"330\" y=\"140\" text-anchor=\"start\">or the tilt passes tan θ = b ÷ (2h)</text><text class=\"ts\" x=\"330\" y=\"168\" text-anchor=\"start\">It slides first if F reaches μ × W</text><text class=\"ts\" x=\"330\" y=\"186\" text-anchor=\"start\">before the tipping force.</text></g></svg><figcaption>A tall narrow machine pushed from the side. It tips about its lower edge if the push, acting at the height of the centre of gravity, is large enough, and it slides if friction gives way first.</figcaption></figure>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: tip or slide</div><div class=\"pr-ex-given\">A cabinet of 800 kg is 1.2 m wide, with its centre of gravity 1.0 m above the floor. The floor friction coefficient is 0.3. What push at the height of the centre of gravity makes it tip, and what makes it slide?</div><ol class=\"pr-ex-steps\"><li>Weight W = 800 × 9.81 = 7848 N.</li><li>Tipping: F × 1.0 = W × 0.6, so F = 7848 × 0.6 ÷ 1.0 = 4709 N.</li><li>Sliding: F = μ × W = 0.3 × 7848 = 2354 N.</li></ol><div class=\"pr-ex-answer\">It slides at 2.35 kN, long before the 4.7 kN needed to tip it. Bolt the cabinet down and it can tip; leave it on a polished floor and it will slide. The tilt angle at which it tips is tan θ = 0.6 ÷ 1.0, so about 31 degrees.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-line\"></i> Two-force members</div><div class=\"info-block-body\">A link, strut, cable or cylinder that is pinned at both ends and carries no load in between can only carry force along the line joining its pins. This one fact makes linkages, truss members and hydraulic cylinders easy to analyse.</div><ul class=\"info-block-tips\"><li>A cable or chain can only pull. A strut can push or pull. A hydraulic cylinder with eyes at both ends is a two-force member, so its force acts along its centreline.</li><li>If a cylinder or link has a side load on it, it has stopped being a two-force member, and the bending that results is often what breaks the rod or the pin.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: level on the feet that carry the load</strong>Every support carries its share, and shims under a foot that carries nothing change nothing. To find the real load path, check the bolts one at a time with a feeler gauge or indicator under each foot, and check for rocking. A machine that rests on two feet and has two shimmed in the air will twist when it is bolted down.</div></div>",
    "motion": "<div class=\"bw-section-label\">Motion: speed, acceleration and the force behind it</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Force makes acceleration, and acceleration is how fast the speed changes.</div></div><div class=\"callout-box-body\">A steady speed needs no net force. Changing the speed, whether speeding up, slowing down or turning a corner, needs one. The stronger the force or the lighter the load, the quicker the change. In a machine, the unbalanced force is what is left over after friction and the load have been taken off the driving force.</div></div>\n<div class=\"pr-formula\">F = m × a   (net force, mass, acceleration)<br>v = u + a × t<br>s = (v² − u²) ÷ (2 × a)       s = u × t + ½ × a × t²<br>Tension in a hoist rope: T = m × (g + a)   (a positive upward)</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: stopping a conveyor</div><div class=\"pr-ex-given\">A belt runs at 2 m/s and has to stop in 1 m. What deceleration is needed, how long does it take, and will the product slide forward on a belt with a friction coefficient of 0.3?</div><ol class=\"pr-ex-steps\"><li>a = v² ÷ (2 × s) = 4 ÷ 2 = 2 m/s².</li><li>Time = v ÷ a = 1 s.</li><li>The product can only be decelerated by friction at up to μ × g = 0.3 × 9.81 = 2.94 m/s².</li></ol><div class=\"pr-ex-answer\">2 m/s² is within what friction can supply, so the product stays put on the belt. At a stopping distance of 0.5 m the deceleration is 4 m/s², which is more than friction can give, and the product slides forward. Stopping distance is a product decision as much as a belt one.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a hoist starting a lift</div><div class=\"pr-ex-given\">A hoist accelerates a 1000 kg load upward at 1 m/s². What is the tension in the rope? What is it while the same load is being slowed down at the end of a descent at 1 m/s²?</div><ol class=\"pr-ex-steps\"><li>Static tension = 1000 × 9.81 = 9.81 kN.</li><li>Accelerating upward: T = 1000 × (9.81 + 1) = 10.8 kN.</li><li>Slowing down on the way down (acceleration is upward): the same, 10.8 kN.</li></ol><div class=\"pr-ex-answer\">A gentle 1 m/s² adds about 10 percent. A jerky start at 5 m/s² adds about 50 percent. The rope, hook and brake have to be rated for the dynamic load, not for the weight on the label.</div></div>\n<div class=\"bw-section-label\">Rotation</div>\n<div class=\"pr-formula\">ω = 2π × n ÷ 60      (ω in rad/s, n in rpm)<br>Surface speed v = ω × r = π × d × n ÷ 60<br>Centripetal acceleration a = ω² × r      Force on a mass m: F = m × ω² × r<br>Torque = I × α    (I moment of inertia, α angular acceleration)</div>\n<table class=\"ref-table\"><tr><th>Speed (rpm)</th><th>ω (rad/s)</th><th>Surface speed, 300 mm wheel</th><th>Acceleration at the rim</th><th>Pull on a 1 kg mass at the rim</th></tr><tr><td>750</td><td>78.5</td><td>11.8 m/s</td><td>925 m/s² (94 g)</td><td>925 N</td></tr><tr><td>1500</td><td>157</td><td>23.6 m/s</td><td>3700 m/s² (377 g)</td><td>3700 N</td></tr><tr><td>3000</td><td>314</td><td>47.1 m/s</td><td>14 800 m/s² (1509 g)</td><td>14 800 N</td></tr></table>\n<p class=\"pr-p\">Doubling the speed quadruples the acceleration and the force, because speed is squared. This is why overspeed is dangerous out of proportion to the extra speed, and why a small unbalance that is harmless at one speed shakes a machine apart at twice that speed.</p>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: unbalance in a fan wheel</div><div class=\"pr-ex-given\">A fan impeller has 50 g of unbalance at a radius of 0.4 m, running at 1500 rpm. What rotating force does it put on the bearings? What happens at 1800 rpm?</div><ol class=\"pr-ex-steps\"><li>ω = 2π × 1500 ÷ 60 = 157.1 rad/s.</li><li>F = m × r × ω² = 0.050 × 0.4 × 157.1² = 494 N.</li><li>At 1800 rpm, ω = 188.5, so F = 0.020 × 188.5² = 711 N, which is 44 percent more for a 20 percent rise in speed.</li></ol><div class=\"pr-ex-answer\">About 490 N, equal to about 50 kgf, turning with the shaft at 1500 rpm. That is a force the bearings feel on every revolution, which shows up as a strong vibration at once per revolution. See <a href=\"builtwright_vibration_v1.html#spectrum\">Vibration</a>.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a grinding wheel at its limit</div><div class=\"pr-ex-given\">A grinding wheel 300 mm in diameter turns at 3000 rpm. What is the surface speed?</div><ol class=\"pr-ex-steps\"><li>v = π × d × n ÷ 60 = π × 0.3 × 3000 ÷ 60 = 47.1 m/s.</li></ol><div class=\"pr-ex-answer\">47 m/s, which is above the surface speed that many standard wheels are rated for. Every wheel carries a maximum speed on its label, and the rim force climbs with the square of the speed, so a wheel run past its rating is a fragment hazard.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-activity\"></i> What this means at the machine</div><ul class=\"info-block-tips\"><li>A fan, pump or shaft that has been re-sheaved to run faster carries more rotating force on its bearings, with the square of the speed. Check the maker allows it.</li><li>Belt and chain speeds have limits for the same reason: centrifugal force lifts belts away from sheaves and stretches the chain.</li><li>A hanging load swinging on a crane obeys the same laws as everything else: pull at the right time, and the swing can be damped.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: check speed with the right units</strong>Nameplates give rpm, calculations need rad/s or revolutions per second, and drawings may give metres per second or feet per minute. Convert before using a formula, and check the order of magnitude: a 1750 rpm motor is 183 rad/s, and a wheel at 47 m/s is moving at about 170 km/h at the rim.</div></div>",
    "torque": "<div class=\"bw-section-label\">Torque and power: the rotating machine's two numbers</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Torque is how hard the shaft twists. Power is how fast that twist is delivering work.</div></div><div class=\"callout-box-body\">Torque is force times the radius it acts at. Power is torque times angular speed. For a given power, a slow shaft has a high torque and a fast shaft has a low one, which is why gearboxes and belts can trade speed for torque, and why a slow-speed drive needs a heavier shaft than a high-speed drive of the same power.</div></div>\n<div class=\"pr-formula\">Torque T = F × r<br>Power P = T × ω<br>P (kW) = T (N·m) × n (rpm) ÷ 9549       T (N·m) = 9549 × P (kW) ÷ n (rpm)<br>In imperial: T (lb·ft) = hp × 5252 ÷ rpm</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a motor and gearbox</div><div class=\"pr-ex-given\">A 15 kW motor runs at 1750 rpm and drives a 20:1 gearbox that is 96 percent efficient. What torque is on the motor shaft, and what torque and speed come out of the gearbox?</div><ol class=\"pr-ex-steps\"><li>Motor torque = 9549 × 15 ÷ 1750 = 81.9 N·m.</li><li>Output speed = 1750 ÷ 20 = 87.5 rpm.</li><li>Output torque = 81.9 × 20 × 0.96 = 1572 N·m.</li></ol><div class=\"pr-ex-answer\">82 N·m going in, 1570 N·m at 87.5 rpm coming out. Power in is 15 kW and power out is 14.4 kW, because the gearbox kept 4 percent as heat. Check: 1572 × 87.5 ÷ 9549 = 14.4 kW.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: belt pull from torque</div><div class=\"pr-ex-given\">The 82 N·m motor shaft above drives a sheave with a 100 mm pitch radius. How much net force does the belt carry?</div><ol class=\"pr-ex-steps\"><li>F = T ÷ r = 82 ÷ 0.100 = 820 N.</li></ol><div class=\"pr-ex-answer\">820 N is the difference between the tight side and the slack side. The belt tension on the tight side is higher than this, which is why a belt drive loads the shaft and bearings more than the torque alone suggests. See <a href=\"builtwright_power_transmission_v1.html#tension\">Power Transmission</a>.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 228\" role=\"img\" aria-label=\"Motor torque and load torque against speed. The gap between them accelerates the machine until they meet at running speed.\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"20\" x2=\"60\" y2=\"200\"/><line class=\"ln\" x1=\"60\" y1=\"200\" x2=\"470\" y2=\"200\"/><path class=\"gt\" d=\"M 60 90 C 100 70, 150 45, 250 40 C 330 36, 400 60, 430 120 C 440 150, 445 185, 450 200\"/><path class=\"ab\" d=\"M 60 150 C 150 150, 250 140, 350 120 C 400 110, 430 105, 450 100\"/><text class=\"tb\" x=\"300\" y=\"30\" text-anchor=\"start\">motor torque</text><text class=\"tl\" x=\"70\" y=\"170\" text-anchor=\"start\">load torque</text><text class=\"ts\" x=\"260\" y=\"90\" text-anchor=\"middle\">gap = torque that accelerates the machine</text><line class=\"lt\" x1=\"430\" y1=\"120\" x2=\"430\" y2=\"200\"/><text class=\"ts\" x=\"430\" y=\"216\" text-anchor=\"middle\">running speed</text><text class=\"ts\" x=\"60\" y=\"216\" text-anchor=\"start\">standstill</text><text class=\"ts\" x=\"24\" y=\"110\" text-anchor=\"middle\">torque</text></svg><figcaption>A motor makes a torque that changes with speed. The load asks for its own torque. The motor accelerates the machine as long as it makes more than the load needs, and it settles at the speed where the two curves cross.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Load type</th><th>How torque and power vary with speed</th><th>Examples</th></tr><tr><td>Constant torque</td><td>Torque stays about the same, so power rises in step with speed</td><td>Conveyors, positive displacement pumps, screw compressors, extruders, hoists</td></tr><tr><td>Variable torque</td><td>Torque rises with the square of speed, power with the cube</td><td>Centrifugal pumps and fans</td></tr><tr><td>Constant power</td><td>Torque falls as speed rises, so power stays the same</td><td>Winders, machine tool spindles at higher speeds</td></tr></table>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: slowing a fan</div><div class=\"pr-ex-given\">A fan is slowed to 80 percent of its speed. What happens to its torque and its power?</div><ol class=\"pr-ex-steps\"><li>Torque varies with speed squared: 0.8² = 0.64.</li><li>Power varies with speed cubed: 0.8³ = 0.512.</li></ol><div class=\"pr-ex-answer\">Torque is 64 percent and power is 51 percent of full speed. A fifth less speed halves the power, which is the saving that variable speed drives deliver on fans and pumps. See <a href=\"builtwright_fans_v1.html#laws\">Fans</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-engine\"></i> Motor torque in plain terms</div><div class=\"info-block-body\">A standard induction motor makes different torque at different speeds.</div><ul class=\"info-block-tips\"><li>Full-load torque is what the nameplate power and speed give, and the rated torque the motor delivers continuously.</li><li>Starting (locked rotor) torque is typically around 1.5 to 2.5 times full-load torque, and breakdown torque is typically 2 to 3 times. The motor is to be sized so the load's torque stays below the motor's curve across the whole range of speed.</li><li>On a variable frequency drive, torque is available at about full-load value up to the base speed (constant torque region) and then falls off as speed rises (constant power region).</li><li>A motor that is too weak to accelerate its load takes a long time to start and runs hot. See <a href=\"builtwright_motors_v1.html#amps\">Motors</a>.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-shield-lock\"></i> Torque limiters</div><div class=\"info-block-body\">A shear pin, a slip clutch and a torque-limiting coupling protect the machine by letting go at a set torque. They are designed to be the weakest part, and the set value is chosen from the maximum torque the rest of the drive can carry.</div><ul class=\"info-block-tips\"><li>A shear pin replaced with a stronger one, or with a bolt, turns a protective device into a fault amplifier. The damage then happens in the gearbox or the shaft.</li><li>A slipping clutch generates heat equal to the slip torque times the slip speed, so it cannot be left slipping.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: torque tells you more than amps do</strong>A motor current is a rough picture of torque, and a load that is out of the ordinary shows in it. A drive that reports torque directly gives a better view of what the machine is asking for: a rising value at the same speed means more friction, more load, or a failing part. Record the normal value when the machine is healthy.</div></div>",
    "energy": "<div class=\"bw-section-label\">Work, energy and power: the bill for every job</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Work is force times distance. Energy is the ability to do it. Power is how fast it is done.</div></div><div class=\"callout-box-body\">Lifting 1000 kg through 3 m costs 29.4 kJ whether it takes a second or an hour. What changes is the power: 29.4 kW for a second, or 8 W for an hour. Whatever form the energy takes (a lifted weight, a moving mass, a spinning wheel, a compressed spring, heat) it adds up, and an input of energy that does not come out as useful work comes out as heat.</div></div>\n<div class=\"pr-formula\">Work W = F × d              Power P = W ÷ t = F × v = T × ω<br>Potential energy  = m × g × h<br>Kinetic energy    = ½ × m × v²<br>Rotating energy   = ½ × I × ω²<br>Efficiency η = useful work out ÷ energy in</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: stored energy in a flywheel</div><div class=\"pr-ex-given\">A flywheel with a moment of inertia of 5 kg·m² turns at 1750 rpm. How much energy does it hold, and what would that lift?</div><ol class=\"pr-ex-steps\"><li>ω = 2π × 1750 ÷ 60 = 183.3 rad/s.</li><li>E = ½ × 5 × 183.3² = 84 000 J = 84 kJ.</li><li>Height for 1000 kg: h = E ÷ (m × g) = 84 000 ÷ 9810 = 8.6 m.</li></ol><div class=\"pr-ex-answer\">84 kJ, which would lift a tonne about 8.6 m. It is dissipated through the bearings and the air as the machine coasts, or stops very suddenly if something jams it. This is why a spinning machine is not safe because the motor is off.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: what a pump costs to run</div><div class=\"pr-ex-given\">A pump moves 50 L/s against a head of 30 m. The pump is 70 percent efficient and the motor 93 percent. What is the electrical power, and the yearly energy at 8000 hours?</div><ol class=\"pr-ex-steps\"><li>Hydraulic power = ρ × g × Q × H = 1000 × 9.81 × 0.05 × 30 = 14.7 kW.</li><li>Electrical power = 14.7 ÷ (0.70 × 0.93) = 22.6 kW.</li><li>Energy = 22.6 × 8000 = 181 000 kWh a year.</li></ol><div class=\"pr-ex-answer\">About 22.6 kW and 181 MWh a year, which at 10 cents a kWh is about $18 000. Each percentage point of efficiency on that pump is worth over $250 a year. This is why a worn impeller or a throttled valve matters beyond reliability.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: lifting speed from power</div><div class=\"pr-ex-given\">A hoist motor delivers 1.2 kW at the drum to lift a 1000 kg load. How fast can it lift?</div><ol class=\"pr-ex-steps\"><li>P = F × v, so v = P ÷ F = 1200 ÷ 9810 = 0.122 m/s.</li></ol><div class=\"pr-ex-answer\">About 0.12 m/s, or 7.3 m a minute. A bigger load at the same power goes slower, so the same motor trades speed for load, as every other machine in this series does.</div></div>\n<table class=\"ref-table\"><tr><th>Form</th><th>Where it sits in a plant</th><th>What releases it</th></tr><tr><td>Gravitational</td><td>Raised loads, tank levels, hanging tooling, a boom or counterweight</td><td>A brake failing, a sling parting, a valve opening</td></tr><tr><td>Kinetic (straight line)</td><td>Moving carts, belts and the product on them, a swinging load</td><td>A stop or a collision</td></tr><tr><td>Kinetic (rotating)</td><td>Flywheels, fans, rotors, couplings, spinning shafts</td><td>Coasting down, or a jam</td></tr><tr><td>Elastic</td><td>Springs in brakes and actuators, clutch packs, a belt under tension</td><td>Release of the retaining part</td></tr><tr><td>Pressure</td><td>Accumulators, receivers, trapped hydraulic oil</td><td>Opening a line or a fitting</td></tr><tr><td>Thermal</td><td>Hot oil, steam, a bearing that has overheated</td><td>A leak, a fire or a burn</td></tr></table>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: heat is the unaccounted energy</strong>Whenever a machine is warmer than it was at the same load, extra energy is being lost somewhere inside it. A thermal camera or an infrared thermometer is an energy meter for friction. Measure the same spots at the same load each time, and note the ambient temperature.</div></div>",
    "friction": "<div class=\"bw-section-label\">Friction: the force that holds, wastes and wears</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Friction is a force along the surfaces, and it is proportional to how hard they are pressed together.</div></div><div class=\"callout-box-body\">The friction force is F = μ × N, where N is the force pressing the surfaces together and μ is the coefficient of friction, a number set by the two materials and their condition. Most of the plant relies on friction (belts, brakes, clutches, bolts, press fits) and fights it everywhere else (bearings, gears, slides). The same physics is in both cases.</div></div>\n<div class=\"pr-formula\">Friction force  F = μ × N   (N = normal force, μ = coefficient)<br>Static friction can reach  F ≤ μs × N;  moving friction is  F = μk × N  and usually μk is less than μs<br>Heat generated by sliding = F × sliding speed = μ × N × v</div>\n<table class=\"ref-table\"><tr><th>Pair of surfaces</th><th>Approximate μ</th><th>Notes</th></tr><tr><td>Steel on steel, dry</td><td>0.4 to 0.8</td><td>Wide range with finish and cleanliness; rough or clean surfaces grip and can gall</td></tr><tr><td>Steel on steel, oiled</td><td>0.05 to 0.15</td><td>Boundary lubrication, a thin film that is partly carrying the load</td></tr><tr><td>Brake lining on cast iron or steel</td><td>0.3 to 0.45</td><td>Falls when hot (fade) and when wet or oily</td></tr><tr><td>Rubber belt on dry steel pulley</td><td>0.3 to 0.4</td><td>Lagging raises it; water and oil lower it sharply</td></tr><tr><td>PTFE on steel</td><td>0.04 to 0.1</td><td>Low, but the material creeps under load</td></tr><tr><td>Rolling element bearing (equivalent)</td><td>0.001 to 0.003</td><td>Rolling in place of sliding</td></tr><tr><td>Full film (hydrodynamic) bearing</td><td>0.001 to 0.005</td><td>The surfaces do not touch while running</td></tr></table>\n<p class=\"pr-p\">These are guides. Real coefficients depend on surface finish, temperature, speed, contamination and how long the surfaces have been in contact. The drawing, the maker's data or a test governs.</p>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 228\" role=\"img\" aria-label=\"Friction coefficient against speed, viscosity and load, showing boundary, mixed and full film lubrication\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"30\" x2=\"60\" y2=\"190\"/><line class=\"ln\" x1=\"60\" y1=\"190\" x2=\"460\" y2=\"190\"/><path class=\"gt\" d=\"M 60 50 C 120 55, 170 175, 250 178 C 330 181, 400 150, 455 120\"/><line class=\"lt\" x1=\"150\" y1=\"30\" x2=\"150\" y2=\"190\"/><line class=\"lt\" x1=\"290\" y1=\"30\" x2=\"290\" y2=\"190\"/><text class=\"tb\" x=\"105\" y=\"46\" text-anchor=\"middle\">boundary</text><text class=\"tb\" x=\"220\" y=\"46\" text-anchor=\"middle\">mixed</text><text class=\"tb\" x=\"375\" y=\"46\" text-anchor=\"middle\">full film</text><text class=\"ts\" x=\"105\" y=\"62\" text-anchor=\"middle\">surfaces touch</text><text class=\"ts\" x=\"220\" y=\"62\" text-anchor=\"middle\">film partly carries</text><text class=\"ts\" x=\"375\" y=\"62\" text-anchor=\"middle\">surfaces apart</text><text class=\"ts\" x=\"262\" y=\"214\" text-anchor=\"middle\">speed × viscosity ÷ load</text><text class=\"ts\" x=\"24\" y=\"110\" text-anchor=\"middle\">friction</text><text class=\"ts\" x=\"262\" y=\"166\" text-anchor=\"middle\">lowest friction</text><line class=\"lt\" x1=\"250\" y1=\"170\" x2=\"250\" y2=\"177\"/></svg><figcaption>Friction in a lubricated contact changes with speed, oil viscosity and load. At low speed the surfaces touch and friction is high. As speed rises, a film lifts them apart, friction falls to a minimum, and then rises slowly again because the film is being sheared.</figcaption></figure>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-droplet\"></i> The three regimes of lubrication</div><div class=\"info-block-body\">The curve above is why a machine can wear out in a start and stop and run for years at steady speed.</div><ul class=\"info-block-tips\"><li><strong>Boundary:</strong> the surfaces touch through a molecular film. Friction is high, wear is real. This is the condition at start, at stop, under shock load, and in slow or oscillating motion.</li><li><strong>Mixed:</strong> the oil film carries part of the load and the high spots carry the rest.</li><li><strong>Full film:</strong> the surfaces are completely separated. Wear is close to nothing. Needs enough speed, enough viscosity and a load that is not too high.</li><li>The film is thinner when the oil is thin, hot or slow. A higher load, a lower speed or a hotter oil moves the machine to the left of the curve. See <a href=\"builtwright_lubrication_v1.html#types\">Lubrication</a>.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-bell\"></i> Stick-slip: why things squeal and chatter</div><div class=\"info-block-body\">When static friction is higher than moving friction, a slow sliding surface sticks, builds up force in the drive, then slips, and repeats this many times a second. The result is squeal, judder or chatter.</div><ul class=\"info-block-tips\"><li>Brake squeal, a squeaking belt, a juddering slide or hydraulic cylinder, and a noisy wiper are the same thing.</li><li>The cures are a lubricant with a flatter friction curve, stiffer or lighter parts, or a change in surface finish. A drive that is slack makes it worse.</li></ul></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: heat from a slipping clutch</div><div class=\"pr-ex-given\">A clutch slips with 400 N·m of torque at 100 rad/s of slip. What power goes into heat? How long before 50 kJ has built up in the plates?</div><ol class=\"pr-ex-steps\"><li>Heat power = torque × slip speed = 400 × 100 = 40 kW.</li><li>Time = 50 000 ÷ 40 000 = 1.25 s.</li></ol><div class=\"pr-ex-answer\">40 kW, and 50 kJ in about 1.25 seconds. Friction devices absorb a large amount of energy in a short time, and the limit is how fast the plates can shed the heat. A clutch left slipping, or a brake dragging, burns up quickly. See <a href=\"builtwright_clutches_brakes_v1.html#friction\">Clutches and Brakes</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-friends\"></i> Friction as the useful part</div><ul class=\"info-block-tips\"><li>A bolted joint carries shear by friction between the plates, and the clamp load is what gives it. A loose bolt is a joint that has lost its friction.</li><li>A press fit or taper fit transmits torque by friction on the fitted surfaces. Oil or dirt on those faces lowers μ and the torque it can carry.</li><li>A belt or a conveyor drive pulley can transmit tension up to e^(μθ). See <a href=\"builtwright_simple_machines_v1.html#wheel\">Simple Machines</a>.</li><li>A tyre, a caster or a conveyor belt moving a load uphill need grip. Wet and dirty surfaces lose it.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: clean surfaces grip</strong>When a friction joint, clutch or belt slips, check what is on the surfaces before changing anything else. A film of oil, grease, water or dirt can halve the friction coefficient, and a part that has been slipping becomes glazed and slips more. Degreasing a clutch plate or a pulley can be the repair.</div></div>",
    "inertia": "<div class=\"bw-section-label\">Inertia: why heavy things take time to start and stop</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Inertia is the resistance of a body to a change in its motion. For rotating machines it is the moment of inertia, I.</div></div><div class=\"callout-box-body\">The moment of inertia depends on the mass and on how far from the axis the mass sits, and that distance counts squared. A thin ring is far harder to spin up than a solid disc of the same weight. A motor that has to turn a big fan or flywheel spends its starting torque accelerating that inertia, and the energy it delivers there comes back out as the coast-down.</div></div>\n<div class=\"pr-formula\">Solid disc or cylinder:   I = ½ × m × r²<br>Hollow cylinder or ring:   I = ½ × m × (r₁² + r₂²)<br>A mass on a radius:   I = m × r²<br>Torque to accelerate:   T = I × α      Time to reach speed:   t = I × ω ÷ T(accelerating)<br>Inertia seen at the motor through a gearbox of ratio i:   I(motor side) = I(load) ÷ i²</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: starting a fan</div><div class=\"pr-ex-given\">A fan has a moment of inertia of 8 kg·m² and runs at 1450 rpm. The motor supplies an average of 60 N·m more than the fan needs, over the speed range. How long does it take to start? How much energy is stored in the fan?</div><ol class=\"pr-ex-steps\"><li>ω = 2π × 1450 ÷ 60 = 151.8 rad/s.</li><li>Time = I × ω ÷ T = 8 × 151.8 ÷ 60 = 20.2 s.</li><li>Energy = ½ × 8 × 151.8² = 92 kJ.</li></ol><div class=\"pr-ex-answer\">About 20 seconds to start, with 92 kJ stored in the fan. During a direct-on-line start of a no-load inertia, the rotor of an induction motor dissipates roughly as much heat as the energy that ends up in the spinning load. A motor that starts a big inertia too often cannot get rid of that heat, which is why motors have a limit on starts per hour. See <a href=\"builtwright_motors_v1.html#nameplate\">Motors</a>.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: inertia through a gearbox</div><div class=\"pr-ex-given\">A load has a moment of inertia of 40 kg·m² on the output of a 20:1 reducer. What does the motor see?</div><ol class=\"pr-ex-steps\"><li>I(motor side) = 40 ÷ 20² = 40 ÷ 400 = 0.1 kg·m².</li></ol><div class=\"pr-ex-answer\">0.1 kg·m², a four hundredth. The gearbox makes a heavy load look light to the motor, and a light motor look heavy to the load, which is why the ratio is squared. The gearbox's own gears and the motor's rotor add to this, and for a high ratio they can be the larger part.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-clock\"></i> Starting, stopping and the machine's time constant</div><ul class=\"info-block-tips\"><li>A machine with a large inertia starts slowly and stops slowly. The time scales with the inertia and falls with the excess torque.</li><li>Stopping time with a brake: t = I × ω ÷ T(brake). A brake sized for the static load alone can take far too long to stop a large inertia, and may overheat.</li><li>A soft starter or a drive makes the start slower and gentler, so it lowers the current and the mechanical shock in couplings and belts.</li><li>A fault that increases the load torque (a tight bearing, a dragging brake, a blocked pump) lengthens the starting time, and it shows in the amps before anything else does.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-recycle\"></i> Flywheels and smoothing</div><div class=\"info-block-body\">A flywheel is a store of kinetic energy that evens out a load that comes in pulses. Reciprocating compressors, presses and punches draw their energy from the flywheel during the working part of the cycle, and the motor refills it between strokes.</div><ul class=\"info-block-tips\"><li>The energy a flywheel gives up is ½ × I × (ω₁² − ω₂²), so it falls as the speed drops.</li><li>A press flywheel is a stored-energy hazard. Guards and lockout have to include the time to stop and a check that it has stopped.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: time the coast-down</strong>The coast-down of a rotating machine with the power off is a simple health check. Time how long a fan or flywheel takes to stop and write it down when the machine is healthy. A much shorter time means more friction (a bearing going, a rub, a dragging brake). A much longer time means the load has fallen away, perhaps a broken coupling or a missing impeller.</div></div>",
    "impact": "<div class=\"bw-section-label\">Impact and shock: force depends on how fast it stops</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A moving mass has momentum. Changing it takes an impulse: force multiplied by time.</div></div><div class=\"callout-box-body\">F × Δt = m × Δv. Bring the same load to a stop in half the time and the force doubles. A hammer blow, a load dropped on a sling, a valve slamming shut and a clutch engaging are all a change in momentum in a short time, and the force during that time can be many times the static force. The shorter the stop, the harder the shock.</div></div>\n<div class=\"pr-formula\">Impulse:  F × Δt = m × Δv<br>A load applied suddenly (no drop) puts up to 2 × W on an elastic support<br>A load that falls a height h before being caught by a support of stiffness k:<br>F(max) = W × (1 + √(1 + 2 × h × k ÷ W))<br>Water hammer pressure rise:  ΔP = ρ × a × Δv   (a is the speed of sound in the pipe)</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a load dropped on a sling</div><div class=\"pr-ex-given\">A 10 kN load is allowed to fall 50 mm in a slack sling before it is caught. The sling behaves as a spring with a stiffness of 6 MN/m. What is the peak load on the sling?</div><ol class=\"pr-ex-steps\"><li>2 × h × k ÷ W = 2 × 0.05 × 6000 ÷ 10 = 60 (k in kN/m).</li><li>F(max) = 10 × (1 + √61) = 10 × 8.81 = 88 kN.</li></ol><div class=\"pr-ex-answer\">About 88 kN, nearly nine times the weight. With no drop at all (a load suddenly released onto a taut sling) the peak is 2 × W = 20 kN. Rigging practice avoids slack, shock and snatch, because they multiply the load a sling sees without any warning. Sling ratings do not include them.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: water hammer</div><div class=\"pr-ex-given\">Water moving at 2 m/s in a steel pipe is stopped by a valve closing very quickly. The speed of sound in the water in this pipe is about 1200 m/s. What is the pressure rise?</div><ol class=\"pr-ex-steps\"><li>ΔP = ρ × a × Δv = 1000 × 1200 × 2 = 2 400 000 Pa.</li></ol><div class=\"pr-ex-answer\">About 24 bar, added to whatever the line pressure already is. If the valve closes slowly compared with the time a pressure wave takes to travel to the end of the line and back, the rise is much smaller. That is why valve closing time, slow-closing check valves and surge protection exist. See <a href=\"builtwright_process_valves_v1.html#actuators\">Valves and Actuators</a> and <a href=\"builtwright_pumps_combined_v1.html#diagnose\">Pumps</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-shield\"></i> Ways of cutting the force of a stop</div><div class=\"info-block-body\">Because the force falls as the stopping time grows, the cures for shock are all ways of lengthening the stop.</div><ul class=\"info-block-tips\"><li>Soft starts and ramped speed on drives, so that couplings and belts see a gentle torque.</li><li>Elastic couplings, buffers and shock absorbers that spread the stop over a longer distance.</li><li>Slow-closing valves and surge vessels on pipelines.</li><li>Cushioning on hydraulic and pneumatic cylinders that slows the piston before the end of the stroke. See <a href=\"builtwright_hydraulics_v1.html#actuators\">Hydraulics</a>.</li><li>Slack taken out of chain, rope and belt before a load is picked up.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-bolt\"></i> Shock and fatigue</div><div class=\"info-block-body\">Shock is a large load for a very short time. A single shock may not break anything, and a repeated shock adds a fatigue crack in a stress concentration. Parts that have been shocked can fail later, from a defect that began on the day.</div><ul class=\"info-block-tips\"><li>Hammering on a tight bearing, a coupling or a shaft end can damage races, hubs and threads in ways that are not visible.</li><li>A dented or crushed part is the evidence of the shock. Look for peening and witness marks on contact faces.</li><li>See <a href=\"builtwright_materials_stress_v1.html#fatigue\">Materials and Failure</a> for how repeated stresses fail parts.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: look for where the stop happens</strong>Every shock load is a stop that happened too quickly. Find where it is: a valve closing, a belt jerking, a coupling taking up backlash, a hoist brake grabbing. Lengthening the stop a little reduces the force a lot. The cheapest fix is often a timer or a ramp setting, not a heavier part.</div></div>",
    "oscillation": "<div class=\"bw-section-label\">Oscillation: every machine is a mass on a spring</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A mass on a spring swings back and forth at its own natural frequency. Push it at that rate and the swing grows.</div></div><div class=\"callout-box-body\">Every shaft, foundation, pipe and structure has mass and stiffness, so every one has a natural frequency. If something in the machine pushes at that frequency (unbalance, a gear mesh, a blade pass) the vibration is amplified, and that is resonance. The only things that limit it are damping and the size of the push.</div></div>\n<div class=\"pr-formula\">Natural frequency   f = (1 ÷ 2π) × √(k ÷ m)    (k stiffness in N/m, m mass in kg)<br>Shortcut using the static deflection δ (mm) under the weight:   f ≈ 15.8 ÷ √δ  Hz<br>Stiffer or lighter: higher frequency.   Softer or heavier: lower frequency<br>Isolation (less force passed on) only works when the forcing frequency is above 1.41 × the natural frequency</div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 500 228\" role=\"img\" aria-label=\"Vibration amplitude against forcing frequency, peaking at the natural frequency, with the region above 1.41 times natural frequency marked as the isolation region\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"20\" x2=\"60\" y2=\"200\"/><line class=\"ln\" x1=\"60\" y1=\"200\" x2=\"470\" y2=\"200\"/><path class=\"ar\" d=\"M 60 150 C 140 148, 190 120, 225 40 C 245 8, 262 8, 280 60 C 300 120, 340 160, 470 185\"/><path class=\"ab\" d=\"M 60 150 C 140 148 200 118 262 96 C 300 92 320 135 350 152 C 390 172 430 184 470 190\"/><line class=\"lt\" x1=\"263\" y1=\"20\" x2=\"263\" y2=\"200\"/><text class=\"ts\" x=\"263\" y=\"216\" text-anchor=\"middle\">natural frequency</text><line class=\"lt\" x1=\"340\" y1=\"20\" x2=\"340\" y2=\"200\"/><text class=\"ts\" x=\"405\" y=\"36\" text-anchor=\"middle\">isolation works above here</text><text class=\"ts\" x=\"340\" y=\"216\" text-anchor=\"middle\">1.41 ×</text><text class=\"tb\" x=\"300\" y=\"24\" text-anchor=\"start\">light damping</text><text class=\"tl\" x=\"120\" y=\"100\" text-anchor=\"start\">heavy damping</text><text class=\"ts\" x=\"24\" y=\"110\" text-anchor=\"middle\">amplitude</text><text class=\"ts\" x=\"60\" y=\"216\" text-anchor=\"start\">forcing frequency →</text></svg><figcaption>Vibration against the frequency of the push. The response peaks at the natural frequency, and the peak is tall when damping is light. Well above the natural frequency, the response falls away, which is how a soft mount isolates a machine.</figcaption></figure>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a machine on springs</div><div class=\"pr-ex-given\">A 500 kg machine sits on mounts with a combined stiffness of 2 MN/m. What is its natural frequency? Is there a problem if it runs at 600 rpm?</div><ol class=\"pr-ex-steps\"><li>Static deflection = m × g ÷ k = 500 × 9.81 ÷ 2 000 000 = 2.45 mm.</li><li>f = 15.8 ÷ √2.45 = 10.1 Hz = 605 cpm.</li><li>Running at 600 rpm is 10 Hz.</li></ol><div class=\"pr-ex-answer\">The natural frequency is 10.1 Hz and the machine turns at 10 Hz: resonance. Any unbalance at once per turn will be amplified, perhaps many times. The fix is to change the mass or the stiffness enough to separate the two frequencies, or change the running speed. See <a href=\"builtwright_vibration_v1.html#resonance\">Vibration</a>.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-chart-line\"></i> Resonance in practice</div><ul class=\"info-block-tips\"><li>A machine that vibrates badly at one speed and well at others is near a resonance. A run-up or coast-down test finds the speed, because the vibration peaks as it passes through.</li><li>Stiffening a base raises its natural frequency. Adding mass lowers it. Changing the speed moves the forcing frequency. Any one of these can break a resonance.</li><li>Pipes, guards, motor fans and the foundation itself are all vibrating systems. A loose guard that rattles at one speed is a resonance of the guard.</li><li>A shaft has its own natural frequencies too. The speed at which a rotating shaft runs into one is called a critical speed, and a machine is designed to run well away from any.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-shock-absorber\"></i> Damping</div><div class=\"info-block-body\">Damping takes energy out of the vibration and turns it into heat. It limits the peak at resonance but does not change where the resonance is.</div><ul class=\"info-block-tips\"><li>Rubber mounts, viscous dampers, oil film in bearings and friction at joints all damp.</li><li>A steel structure with welded joints damps very little, and a bolted one more. A cast iron base damps better than a steel fabrication.</li><li>Light damping means a tall narrow peak. A small change in speed means a big change in vibration.</li></ul></div>\n<table class=\"ref-table\"><tr><th>What is pushing</th><th>How often</th><th>Where to look</th></tr><tr><td>Unbalance</td><td>Once per revolution (1×)</td><td>Rotor, fan wheel, coupling</td></tr><tr><td>Misalignment</td><td>Mostly 1× and 2×</td><td>Couplings and bearings</td></tr><tr><td>Looseness</td><td>Many multiples of 1×, a forest of peaks</td><td>Bolts, base, bearing fits</td></tr><tr><td>Gear mesh</td><td>Teeth × shaft speed</td><td>Gearbox</td></tr><tr><td>Blade or vane pass</td><td>Blades × shaft speed</td><td>Fans, pumps</td></tr><tr><td>Bearing defect</td><td>Defect frequencies, not multiples of 1×</td><td>Bearings</td></tr></table>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: bump it and listen</strong>A simple way to find a natural frequency is to give the structure a sharp tap with the machine stopped, and record the response with an accelerometer. The tone it rings at is its natural frequency. If that matches a running speed or a harmonic of it, there is the cause.</div></div>",
    "calc": "<div class=\"bw-section-label\">Calculators: try the numbers</div>\n<p class=\"pr-p\">Change any value and the answer updates. They use the formulas in the tabs and are for learning and for sanity checks. The machine's drawing, rating plate and manual govern the real job.</p>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-rotate-clockwise-2\"></i> Rotation: speed, surface speed and rim force</div><div class=\"calc-row\"><div><label>Diameter (mm)</label><input type=\"number\" step=\"any\" id=\"ro_d\" value=\"300\" oninput=\"calcRot()\"></div><div><label>Speed (rpm)</label><input type=\"number\" step=\"any\" id=\"ro_n\" value=\"3000\" oninput=\"calcRot()\"></div></div><div class=\"calc-out\" id=\"ro_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-wind\"></i> Variable torque load at a different speed</div><div class=\"calc-row\"><div><label>New speed (% of full speed)</label><input type=\"number\" step=\"any\" id=\"af_s\" value=\"80\" oninput=\"calcAff()\"></div></div><div class=\"calc-out\" id=\"af_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-player-play\"></i> Starting time and energy</div><div class=\"calc-row\"><div><label>Moment of inertia at the motor shaft (kg·m²)</label><input type=\"number\" step=\"any\" id=\"st_i\" value=\"8\" oninput=\"calcStart()\"></div><div><label>Speed (rpm)</label><input type=\"number\" step=\"any\" id=\"st_n\" value=\"1450\" oninput=\"calcStart()\"></div></div><div class=\"calc-row\"><div><label>Average accelerating torque (N·m)</label><input type=\"number\" step=\"any\" id=\"st_t\" value=\"60\" oninput=\"calcStart()\"></div></div><div class=\"calc-out\" id=\"st_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-hand-stop\"></i> Stopping a moving load</div><div class=\"calc-row\"><div><label>Speed (m/s)</label><input type=\"number\" step=\"any\" id=\"sp_v\" value=\"2\" oninput=\"calcStop()\"></div><div><label>Stopping distance (m)</label><input type=\"number\" step=\"any\" id=\"sp_s\" value=\"1\" oninput=\"calcStop()\"></div></div><div class=\"calc-row\"><div><label>Friction coefficient holding the load</label><input type=\"number\" step=\"any\" id=\"sp_u\" value=\"0.3\" oninput=\"calcStop()\"></div></div><div class=\"calc-out\" id=\"sp_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-box\"></i> Tip or slide</div><div class=\"calc-row\"><div><label>Base width (mm)</label><input type=\"number\" step=\"any\" id=\"ti_b\" value=\"1200\" oninput=\"calcTip()\"></div><div><label>Height of the centre of gravity (mm)</label><input type=\"number\" step=\"any\" id=\"ti_h\" value=\"1000\" oninput=\"calcTip()\"></div></div><div class=\"calc-row\"><div><label>Floor friction coefficient</label><input type=\"number\" step=\"any\" id=\"ti_u\" value=\"0.3\" oninput=\"calcTip()\"></div></div><div class=\"calc-out\" id=\"ti_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-arrow-down\"></i> Load dropped on a sling or rope</div><div class=\"calc-row\"><div><label>Load (kN)</label><input type=\"number\" step=\"any\" id=\"dr_w\" value=\"10\" oninput=\"calcDrop()\"></div><div><label>Drop before it is caught (mm)</label><input type=\"number\" step=\"any\" id=\"dr_h\" value=\"50\" oninput=\"calcDrop()\"></div></div><div class=\"calc-row\"><div><label>Stiffness of the sling (MN/m)</label><input type=\"number\" step=\"any\" id=\"dr_k\" value=\"6\" oninput=\"calcDrop()\"></div></div><div class=\"calc-out\" id=\"dr_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-wave-sine\"></i> Natural frequency of a machine on mounts</div><div class=\"calc-row\"><div><label>Mass (kg)</label><input type=\"number\" step=\"any\" id=\"na_m\" value=\"500\" oninput=\"calcNat()\"></div><div><label>Total stiffness (N/mm)</label><input type=\"number\" step=\"any\" id=\"na_k\" value=\"2000\" oninput=\"calcNat()\"></div></div><div class=\"calc-row\"><div><label>Running speed (rpm)</label><input type=\"number\" step=\"any\" id=\"na_n\" value=\"600\" oninput=\"calcNat()\"></div></div><div class=\"calc-out\" id=\"na_out\"></div></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Safety: stored energy is the common thread</div>\n<div class=\"callout-box red\"><div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">Every hazard in this module is energy that is still there after the switch is off.</div></div><div class=\"callout-box-body\">Gravity holds raised loads, springs hold compression, pipes hold pressure, and a rotor holds its kinetic energy. A tipped, dropped, coasting or released machine delivers it all at once, and the force on a body in a short stop can be many times the weight. Zero energy means every form, not just electrical.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-rotate-clockwise-2\"></i> Rotating machines</div><ul class=\"info-block-tips\"><li>A rotor, fan or flywheel keeps turning after the power is off. Wait for it to stop, then verify, before removing a guard. Large fans can be driven by wind through their own ducts.</li><li>The energy rises with the square of the speed, and the rim force with the square again. Respect the rated maximum speed on wheels, fans, couplings and sheaves.</li><li>Rotating guards and rotating shafts do not forgive loose clothing, long hair or gloves.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-box\"></i> Tipping, sliding and falling</div><ul class=\"info-block-tips\"><li>A machine with a high centre of gravity and a narrow base tips. Tie it down or brace it before moving it, and never push at height.</li><li>Equipment on skates, rollers or a slope is a moving mass. Chock it, and keep clear of the path it would take.</li><li>A suspended load needs a hook above its centre of gravity and a clear space below it. Nobody works under a load that is only held by a hoist.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-bolt\"></i> Shock</div><ul class=\"info-block-tips\"><li>Slack in a sling, chain or rope turns a lift into a shock load. Take up slack slowly.</li><li>A valve that is closed fast can burst a pipe or a hose. Operate valves on liquid lines slowly.</li><li>Do not strike hardened parts with a hammer or steel tool. Hardened steel can shed fragments. Use a soft-faced hammer or a drift.</li></ul></div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-info-circle callout-box-icon\"></i><div class=\"callout-box-title\">These are the principles. A lift plan, lockout procedure or manufacturer's manual is what governs the job.</div></div><div class=\"callout-box-body\">The numbers are for understanding and for checking that an answer is the right size. Real loads, ratings and procedures come from the equipment, the drawing and the site.</div></div>"
  },
  "title": "BuiltWright: Forces, Motion and Energy: Module 23",
  "preamble": null,
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_simple_machines_v1.html#overview\">Simple Machines: levers, ramps, screws and pulleys</a><a href=\"builtwright_materials_stress_v1.html#stress\">Materials and Failure: what the forces do to a part</a><a href=\"builtwright_vibration_v1.html#resonance\">Vibration: resonance on the plant</a><a href=\"builtwright_motors_v1.html#nameplate\">Motors: torque, power and starting</a><a href=\"builtwright_clutches_brakes_v1.html#friction\">Clutches and Brakes: friction in use</a><a href=\"builtwright_conveyors_v1.html#tension\">Conveyors: friction, tension and starting</a><a href=\"builtwright_installation_v1.html#foundation\">Installation: a machine at equilibrium</a><a href=\"builtwright_reference_v1.html#calc\">Reference: calculators</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;&middot;&nbsp; module 23 of series &nbsp;&middot;&nbsp; forces, motion and energy</div>",
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
