BW.register("simple", {
  "key": "simple",
  "num": "22",
  "name": "Simple Machines and Leverage",
  "source": "builtwright_simple_machines_v1.html",
  "tabs": [
    {
      "id": "overview",
      "label": "Overview",
      "active": true,
      "style": ""
    },
    {
      "id": "incline",
      "label": "Ramp",
      "active": false,
      "style": ""
    },
    {
      "id": "wedge",
      "label": "Wedge",
      "active": false,
      "style": ""
    },
    {
      "id": "screw",
      "label": "Screw",
      "active": false,
      "style": ""
    },
    {
      "id": "lever",
      "label": "Lever",
      "active": false,
      "style": ""
    },
    {
      "id": "wheel",
      "label": "Wheel and Axle",
      "active": false,
      "style": ""
    },
    {
      "id": "pulley",
      "label": "Pulleys",
      "active": false,
      "style": ""
    },
    {
      "id": "compound",
      "label": "Compound Machines",
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
    "title": "Simple Machines and Leverage",
    "badge": "Module 22",
    "tree": null,
    "treeTab": null,
    "groups": {
      "selectTerm": {
        "scope": "#panel-overview",
        "cardClass": ".type-card",
        "prefix": "termcard-",
        "data": "term-displayData",
        "display": "term-display"
      },
      "selectWedge": {
        "scope": "#panel-wedge",
        "cardClass": ".type-card",
        "prefix": "wcard-",
        "data": "wedge-displayData",
        "display": "wedge-display"
      },
      "selectScrew": {
        "scope": "#panel-screw",
        "cardClass": ".type-card",
        "prefix": "scard-",
        "data": "screw-displayData",
        "display": "screw-display"
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
      "function calcLever(){var F=prn('lv_load'),a=prn('lv_la'),b=prn('lv_ea');if(a<=0||b<=0){prs('lv_out','Enter both arms.');return;}var E=F*a/b;prs('lv_out','Effort needed: '+prf(E,0)+' N ('+prf(E/9.81,1)+' kgf)<br>Ideal advantage: '+prf(b/a,2)+'<br>Effort moves '+prf(10*b/a,1)+' mm for each 10 mm the load moves<br>Moment about the pivot: '+prf(F*a/1000,1)+' N·m');}",
      "function calcRamp(){var m=prn('rp_m'),L=prn('rp_l'),h=prn('rp_h'),u=prn('rp_mu');if(L<=0||h<0||h>=L){prs('rp_out','The rise must be less than the length.');return;}var W=m*9.81,s=h/L,c=Math.sqrt(1-s*s),th=Math.asin(s)*180/Math.PI,ideal=W*s,real=W*(s+u*c);var hold=Math.tan(Math.asin(s))<=u;prs('rp_out','Slope: '+prf(th,1)+'° ('+prf(100*h/Math.sqrt(L*L-h*h),1)+'% grade)<br>Ideal push: '+prf(ideal,0)+' N<br>Push with friction: '+prf(real,0)+' N ('+prf(real/9.81,0)+' kgf)<br>Ideal advantage: '+prf(L/h,2)+'<br>Efficiency: '+prf(100*ideal/real,0)+'%<br>'+(hold?'The slope is shallower than the angle of friction, so the load stays put by itself if that coefficient is a static one.':'The slope is steeper than the angle of friction, so the load will run down unless it is held.'));}",
      "function calcScrew(){var r=prn('sj_r'),ld=prn('sj_lead'),f=prn('sj_f'),e=prn('sj_e')/100;if(ld<=0){prs('sj_out','Enter a lead.');return;}var ima=2*Math.PI*r/ld,ideal=f*ima,real=ideal*e;prs('sj_out','Ideal advantage: '+prf(ima,0)+'<br>Ideal load: '+prf(ideal/1000,1)+' kN<br>Real load: '+prf(real/1000,1)+' kN ('+prf(real/9810,2)+' tonnes-force)<br>Handle travel per mm of lift: '+prf(ima,0)+' mm (ideal)<br>'+(e<=0.5?'Efficiency is 50% or less, so the screw will hold the load by friction, though not reliably under vibration.':'Efficiency is above 50%, so this screw will run back under load unless held.'));}",
      "function calcTackle(){var m=prn('tk_m'),n=prn('tk_n'),s=prn('tk_s'),e=prn('tk_e')/100;if(n<1){prs('tk_out','Use at least one rope.');return;}var W=m*9.81,eta=Math.pow(e,s),ideal=W/n,real=ideal/eta;prs('tk_out','Ideal pull: '+prf(ideal,0)+' N<br>Efficiency of the tackle: '+prf(100*eta,0)+'%<br>Real pull: '+prf(real,0)+' N ('+prf(real/9.81,0)+' kgf)<br>Rope hauled per metre of lift: '+prf(n,0)+' m<br>Load on the overhead anchor: about '+prf(W+real,0)+' N plus the weight of the blocks');}",
      "function calcSling(){var m=prn('sl_m'),a=prn('sl_a');if(a<=0||a>90){prs('sl_out','Angle between 1 and 90 degrees.');return;}var W=m*9.81,T=W/(2*Math.sin(a*Math.PI/180));prs('sl_out','Tension in each leg: '+prf(T,0)+' N ('+prf(T/9.81,0)+' kgf)<br>As a multiple of the load: '+prf(T/W,2)+'<br>'+(a<30?'Below 30 degrees. Do not lift like this.':(a<45?'Below 45 degrees. Most rigging practice avoids this. Check the sling rating at this angle and the lift plan.':'Check the sling tag: the rating at this angle has to exceed this tension.')));}",
      "function calcWrench(){var t=prn('tw_t'),l=prn('tw_l'),e=prn('tw_e');if(l+e<=0||l<=0){prs('tw_out','Check the lengths.');return;}var set=t*l/(l+e);prs('tw_out','Set the wrench to: '+prf(set,1)+' N·m<br>If set to '+prf(t,0)+' N·m with this extension, the fastener would get '+prf(t*(l+e)/l,1)+' N·m');}"
    ],
    "helpers": [],
    "init": "calcLever();calcRamp();calcScrew();calcTackle();calcSling();calcWrench();"
  },
  "cards": {
    "term-displayData": {
      "force": {
        "icon": "ti-arrow-big-right",
        "name": "Force",
        "role": "Measured in newtons (N) or pounds-force (lbf)",
        "body": "A force is a push or a pull on something. It has a size and a direction, and a force that does not change the motion of an object is being balanced by another one somewhere. Weight is a force: the pull of gravity on a mass. A 1 kg mass weighs about 9.81 N, which is the number to carry in your head for every conversion between kilograms and newtons.",
        "tips": [
          "Mass is how much matter there is, in kilograms. Weight is the force gravity puts on it, in newtons. Scales read mass; hydraulic gauges and torque wrenches deal in force.",
          "A machine can multiply force. It cannot multiply energy, which is what the rest of this module is about.",
          "1 kgf is 9.81 N, and 1 lbf is 4.45 N. Many older drawings and nameplates still use kgf."
        ]
      },
      "work": {
        "icon": "ti-weight",
        "name": "Work",
        "role": "Work = force × distance, in joules (J) or foot-pounds (ft·lb)",
        "body": "Work is done when a force moves something in the direction of the force. Lifting a 100 N load 2 m takes 200 J of work no matter how it is lifted: by hand, by a ramp, by a pulley. Holding the load still does no work in this sense, although a person (and a motor) still gets tired and warm, because muscles and windings burn energy just to maintain a force.",
        "tips": [
          "Work is the bill. Every machine in this module changes how the bill is paid (a small force over a long distance, or a large force over a short one) and none of them changes the total.",
          "The same joule is also a watt-second, which is why electrical energy and mechanical work can be put on one scale."
        ]
      },
      "ma": {
        "icon": "ti-scale",
        "name": "Mechanical advantage",
        "role": "MA = load force ÷ effort force",
        "body": "Mechanical advantage is the ratio of the force a machine delivers to the force put in. A crowbar that lifts 5000 N with 500 N of hand force has an actual mechanical advantage of 10. The ideal mechanical advantage (IMA) comes from the geometry alone: the distance the effort moves divided by the distance the load moves. The actual figure is always lower, because friction takes a share.",
        "tips": [
          "MA above 1 means a gain in force and a loss in distance and speed. MA below 1 is a gain in speed and reach and a loss in force.",
          "Compare IMA to actual MA and you have the efficiency. A big gap points at friction, and friction points at lubrication, wear or misalignment."
        ]
      },
      "eff": {
        "icon": "ti-percentage",
        "name": "Efficiency",
        "role": "η = work out ÷ work in = actual MA ÷ ideal MA",
        "body": "Efficiency is the share of the work put in that comes out as useful work. The rest becomes heat, mostly from friction. A clean ball bearing is above 99 percent efficient; a sliding screw jack can be 25 percent or less. Efficiency is never above 100 percent, and a claim that a machine does better than that is a measurement mistake.",
        "tips": [
          "The missing energy never vanishes. It shows up as heat in the machine, which is why a machine that has become hot has become inefficient somewhere.",
          "Efficiencies multiply down a chain. Four parts at 90 percent each deliver 66 percent, not 90."
        ]
      },
      "power": {
        "icon": "ti-bolt",
        "name": "Power",
        "role": "Power = work ÷ time, in watts (W); 1 kW ≈ 1.34 hp",
        "body": "Power is how fast work is done. Lifting 200 J in 2 s takes 100 W. A machine that gives a big mechanical advantage still needs the same power at the input as the work needed at the output, so a hand cranking a winch slowly and a motor driving it quickly do the same work at different power.",
        "tips": [
          "For rotating machines, power = torque × angular speed. This is where gearboxes and belt drives get their meaning: they trade speed for torque at constant power (less the losses)."
        ]
      },
      "trade": {
        "icon": "ti-arrows-exchange",
        "name": "The trade",
        "role": "Effort × effort distance = load × load distance (ideal)",
        "body": "Every simple machine is a way to make that trade. The effort moves farther than the load, so the force it needs is smaller, by exactly the same factor. A gain in one is paid in the other. Anything that promises a force gain with no distance cost is either adding energy from somewhere (a motor, a hydraulic pump) or hiding the cost.",
        "tips": [
          "If a job feels too easy, expect it to take many strokes, many turns or a long rope. A bottle jack gives a huge force from a hand, and a long time to move."
        ]
      }
    },
    "wedge-displayData": {
      "split": {
        "icon": "ti-axe",
        "name": "Splitting",
        "role": "Drives two parts of a material apart",
        "body": "The sharp edge concentrates the force on a tiny area, which is what starts the crack. A chisel, a cold cutter, a splitting maul and a knife are the same device at different sizes. A small included angle cuts with less force but chips and rolls more easily; a larger angle is tougher and needs a harder push.",
        "tips": [
          "A mushroomed striking face is a real hazard: the edges of the steel have work hardened and can break away. Dress it or retire the tool.",
          "Cutting edges of tools are heat treated to a specific hardness. Grinding that heats the edge blue softens it and it will fold over."
        ]
      },
      "hold": {
        "icon": "ti-lock",
        "name": "Holding",
        "role": "Holds two parts together by friction",
        "body": "A taper key driven into a shaft and hub locks them with friction on the faces. A cotter locks a rod end. A door wedge or a wheel chock holds because the slope is shallower than the angle of friction, so the load cannot push it back out. Gib head keys have a taper of about 1 in 100 for exactly this reason.",
        "tips": [
          "A taper key is driven by hand pressure against its seat. It is not struck to destruction, which damages the shaft and the hub.",
          "A parallel key relies on its sides to transmit torque. A taper key relies on friction between its faces, and they are different parts that must not be swapped."
        ]
      },
      "lift": {
        "icon": "ti-arrows-vertical",
        "name": "Lifting and levelling",
        "role": "Raises or aligns a load by a very small distance",
        "body": "A shallow wedge converts a long, easy push into a tiny, precise lift. Paired machinery levelling wedges raise a base by a few thousandths while carrying a large load, and tapered gibs on a machine slide take up play. The shallower the taper, the finer the adjustment and the better it holds.",
        "tips": [
          "Wedges set a machine on its foundation but do not make a permanent support unless the drawing says so. Follow the installation drawing on whether they are left in or removed.",
          "A wedge takes load on a thin line unless the faces match. Burrs and rust on the faces make it carry on points."
        ]
      },
      "taper": {
        "icon": "ti-cone",
        "name": "Locking tapers",
        "role": "Locks a hub or bearing to a shaft with a radial wedge",
        "body": "A tapered adapter sleeve, a split taper bushing and a tapered shaft end all lock by pulling a cone into a matching cone. A small axial movement from a nut or bolts becomes a very large radial grip. Standard tapered bearing bores are 1 in 12, and 1 in 30 on some wide series, which is shallow enough to hold by friction.",
        "tips": [
          "Self-holding tapers (Morse) hold by friction alone. Steeper tapers (the 7 in 24 on milling machine spindles) release easily and need a drawbar to hold them.",
          "Tapered pipe threads (NPT) are a wedge and a screw at once: the taper is about 1 in 16 on the diameter, and the thread seals by being driven into a wedge fit."
        ]
      }
    },
    "screw-displayData": {
      "fast": {
        "icon": "ti-bolt",
        "name": "Fastener threads",
        "role": "Metric and unified 60° threads, built to hold",
        "body": "Fastener threads are shallow ramps made deliberately self-locking: the lead angle is only 2 to 4 degrees and the friction is far higher than that. The cost is poor efficiency, and the benefit is that the clamp holds after the wrench comes off. Fine threads give more clamp for the same torque and resist loosening better, but are more easily cross-threaded and damaged.",
        "tips": [
          "Self-locking is friction, and vibration can overcome friction by making the nut slip a little on every cycle. This is why bolts on vibrating machines loosen without ever being touched.",
          "A bolt that bottoms in a blind hole shows rising torque with no clamp load: the wrench is turning against the bottom, not stretching the bolt."
        ]
      },
      "power": {
        "icon": "ti-arrows-vertical",
        "name": "Power screws",
        "role": "Acme and trapezoidal threads built to move loads",
        "body": "Power screws use a larger lead angle and a flatter thread flank so they can be driven and run smoothly. Efficiency is typically 20 to 50 percent for a sliding thread, which also means they self-lock at the lower end of that range. Heat from friction is the limit: a screw running continuously at heavy load overheats long before a bearing would.",
        "tips": [
          "The nut wears, not the screw. Measure the backlash on a lead screw: a rising value means the nut is going.",
          "A screw that runs hot has too little lubricant, too much load or too high a duty cycle."
        ]
      },
      "ball": {
        "icon": "ti-circle-dots",
        "name": "Ball and roller screws",
        "role": "Rolling contact between screw and nut",
        "body": "Recirculating balls replace sliding with rolling, lifting efficiency to 90 percent or more. The price is that the screw no longer self-locks: a load on a vertical ball screw drives it backward unless a brake or a holding mechanism takes the load. Preloaded nuts remove backlash for positioning work.",
        "tips": [
          "Never trust a ball screw to hold a vertical load with the drive off. Machines with vertical ball screws carry a brake on the motor or a counterbalance.",
          "Contamination is the main killer: chips and dust in the raceway cause indentations that show up as noise and rough travel."
        ]
      },
      "conv": {
        "icon": "ti-arrow-big-right-lines",
        "name": "Screw conveyors and augers",
        "role": "The flight is a continuous ramp pushing material along a trough",
        "body": "The helical flight pushes material forward as it turns, while the trough stops it rotating with the shaft. The pitch and speed set how much moves per turn. Material that sticks to the flight, or a trough that is too full, makes the screw ride up the material instead of pushing it.",
        "tips": [
          "Fill level is what sets the load. A conveyor starved of material runs light; one overfilled draws far more power.",
          "Hanger bearings in the middle of a long screw are wear points, and the first to run dry."
        ]
      }
    }
  },
  "trees": {},
  "selfcheck": {
    "overview": [
      [
        "A hand crank lets one person lift a load four times as heavy as the push. What is true about how far things move?",
        [
          "The hand travels about four times as far as the load rises, which is how the same work gets done",
          "The load rises four times as far as the hand travels, because the machine gives extra movement",
          "The hand and the load travel the same distance, and the load simply moves more slowly",
          "The hand travels a quarter as far as the load rises, since the force is multiplied"
        ],
        0,
        "Work is force times distance, and a machine cannot create work. If the force on the load is four times the push, the push has to travel four times as far. The other options all describe gaining something for nothing."
      ],
      [
        "A machine has an ideal mechanical advantage of 10 and delivers 7 times the effort force. What is its efficiency?",
        [
          "30 percent, which is the share of the work that friction takes",
          "70 percent, which is the actual advantage divided by the ideal one",
          "143 percent, which is the ideal advantage divided by the actual one",
          "17 percent, which is the difference between the two ratios"
        ],
        1,
        "Efficiency is actual mechanical advantage divided by ideal mechanical advantage: 7 ÷ 10 = 0.70. The 30 percent figure is the loss, not the efficiency, and any answer above 100 percent would mean the machine gave out more work than it took in."
      ],
      [
        "About how much does a 50 kg mass weigh, in newtons?",
        [
          "About 50 N, because the kilogram and the newton are the same unit",
          "About 5 N, because weight is mass divided by 9.81",
          "About 490 N, because weight is mass multiplied by 9.81",
          "About 5000 N, because weight is mass multiplied by 100"
        ],
        2,
        "Weight is the force of gravity on a mass: 50 × 9.81 = 490 N. Mixing up kilograms and newtons is the most common error in lifting and jacking calculations, and it is easy to make by a factor of ten."
      ],
      [
        "A motor, a gearbox and a belt drive each run at 90 percent efficiency, in series. What is the overall efficiency?",
        [
          "90 percent, the efficiency of any one stage since they are all equal",
          "81 percent, found by multiplying only the first two stages",
          "27 percent, found by adding up the three 10 percent losses",
          "About 73 percent, found by multiplying the three efficiencies together"
        ],
        3,
        "Efficiencies multiply: 0.9 × 0.9 × 0.9 = 0.729. Adding the losses (30 percent) would give 70 percent, which is close but wrong, and gets worse as the losses grow. Long chains of good parts can still be a poor machine."
      ],
      [
        "Which statement about simple machines is correct?",
        [
          "A larger force at the output means the input must move farther than the output does",
          "A well made machine can deliver more work than it receives at the input",
          "A machine with an advantage above 1 also moves the load faster than the effort",
          "Friction in a machine adds to the force it delivers at the output"
        ],
        0,
        "The trade between force and distance is the whole principle. Delivering more work than put in would create energy, a faster load would mean an advantage below 1, and friction can only subtract from the output."
      ],
      [
        "A gearbox is hotter than usual at the same load and speed. What is the most useful reading of that?",
        [
          "Its mechanical advantage has increased, so more force is available at the output",
          "More of the input energy is turning into heat, so it has become less efficient somewhere",
          "It is now delivering more work than before, which makes the extra heat",
          "The lubricant is working as it should, and the heat shows it is doing its job"
        ],
        1,
        "Lost work becomes heat. Same output and more heat means a larger loss: wear, misalignment, too little or too much oil, or contamination. Heat is information, and the right response is to find where the losses are rising."
      ]
    ],
    "incline": [
      [
        "A 1000 N load is pushed up a frictionless ramp 2 m long and 0.5 m high. What push is needed?",
        [
          "500 N, which is the load multiplied by the length over the rise",
          "1000 N, since a ramp does not change the weight of the load",
          "250 N, which is the load multiplied by the rise over the length",
          "125 N, which is the load multiplied by the rise over twice the length"
        ],
        2,
        "Ideal push = W × h ÷ L = 1000 × 0.5 ÷ 2 = 250 N. The load still weighs 1000 N, but the ramp lets a quarter of that be supplied as a push in return for a four times longer path."
      ],
      [
        "The ramp is made twice as long, with the same height. What happens to the ideal push?",
        [
          "It is doubled, because the longer ramp has more surface to resist",
          "It stays the same, since the height the load is lifted has not changed",
          "It falls to a quarter, because the slope angle and length both changed",
          "It is halved, and the push has to continue for twice the distance"
        ],
        3,
        "Ideal push is W × h ÷ L, so doubling L halves it. The work (push times distance) is unchanged, and real friction adds a little to it. Friction does not fall with length, so the real push falls by slightly less than half."
      ],
      [
        "How does the work of lifting a load by a ramp compare with lifting it straight up?",
        [
          "The same for the lifting itself, plus extra for friction on the ramp",
          "Much less, because the push is smaller than the weight of the load",
          "Exactly the same, because friction on a ramp is always negligible",
          "Much more, because the push has to be applied for a longer time"
        ],
        0,
        "A small force over a long distance equals a large force over a short one. The ramp changes how the work is delivered, and friction then adds to it. The smaller force is what makes a ramp useful, and the work is unchanged."
      ],
      [
        "When will a load resting on a slope begin to slide?",
        [
          "When the load's weight exceeds the rated capacity of the ramp surface",
          "When the tangent of the slope angle exceeds the static friction coefficient",
          "When the slope reaches 45 degrees, whatever the surfaces involved",
          "When the slope angle in degrees exceeds the load's weight in newtons"
        ],
        1,
        "The component of weight down the slope is W sin θ and friction can hold up to μ × W cos θ. Sliding begins when sin θ ÷ cos θ, which is tan θ, passes μ. The angle where that happens depends entirely on the surfaces."
      ],
      [
        "Why is a wheeled load easier to hold or move on a slope than a sliding one?",
        [
          "Wheels reduce the weight of the load pressing on the slope by spreading it over more points",
          "Wheels increase the ideal mechanical advantage of the ramp by changing its effective angle",
          "Rolling resistance coefficients are many times smaller than sliding friction coefficients",
          "The wheel axle converts the downhill pull of gravity into extra forward movement"
        ],
        2,
        "The ramp geometry is unchanged. What changes is the friction term in F = W (sin θ + μ cos θ): μ for rolling is perhaps a tenth to a fortieth of sliding. It also means a wheeled load will run away on a small slope if it is not chocked."
      ],
      [
        "A drawing calls for a 10 percent grade. What does that mean?",
        [
          "A rise of 10 units for every 100 units of length along the slope",
          "A slope of 10 degrees from the horizontal",
          "A push equal to 10 percent of the weight of the load",
          "A rise of 10 units for every 100 units of horizontal distance"
        ],
        3,
        "Percent grade is rise over horizontal run, times 100. A 10 percent grade is about 5.7 degrees, not 10, and for steep slopes the difference between run and slope length matters, so check which one a drawing uses."
      ]
    ],
    "wedge": [
      [
        "Why does a gib head key have a taper of about 1 in 100?",
        [
          "The shallow slope is less than the angle of friction, so the key holds itself in place",
          "The taper makes the key easier to strike out when the hub must be removed",
          "A taper lets the key transmit torque through its sides rather than its faces",
          "It allows the key to be cut from stock without any machining on the faces"
        ],
        0,
        "A wedge holds when its slope is shallower than the friction angle, so friction on the faces locks it. It transmits torque by friction on the faces and the grip they give, and the head is there so it can be drawn out when needed."
      ],
      [
        "A wedge is 150 mm long and 25 mm thick. Ignoring friction, what force does each face push with when it is driven with 400 N?",
        [
          "About 67 N, which is the drive force multiplied by the thickness over the length",
          "About 2400 N, which is the drive force multiplied by the length over the thickness",
          "About 400 N, because a wedge only changes the direction of the force",
          "About 1200 N, which is half the multiplied force shared between two faces"
        ],
        1,
        "Ideal force on each face is F × l ÷ w = 400 × 150 ÷ 25 = 2400 N. Real friction takes a large share of that, so the actual push is often a third of the ideal figure or less."
      ],
      [
        "Why does a 7 in 24 machine tool taper need a drawbar to hold it?",
        [
          "The taper is too shallow to grip, so the drawbar supplies the gripping force",
          "The taper is made of a softer steel than the spindle, so it needs support",
          "The taper is steep enough to be self-releasing, so friction alone does not hold it",
          "The drawbar is only there to transmit the torque through the taper"
        ],
        2,
        "Shallow tapers such as the Morse taper are self-holding because their angle is inside the friction angle. A 7 in 24 taper is steeper, and it releases easily, which allows quick tool changes but needs a drawbar to keep the tool in."
      ],
      [
        "What is the main hazard when a tapered hub is released with oil injection?",
        [
          "The oil used is flammable at the pressures involved in the process",
          "The shaft shrinks as the oil cools it and traps the hub on the taper",
          "The hub fits more tightly as the oil flows between the faces",
          "The hub can come off the shaft suddenly and with force"
        ],
        3,
        "A taper fit holds a large radial load. Oil between the faces removes the friction, and the wedge action then pushes the hub off the taper with stored energy. Stay out of the line of travel and follow the specific procedure."
      ],
      [
        "A taper-fitted pulley keeps turning on its shaft. Which is the most likely cause?",
        [
          "Dirty or damaged faces, or a part that bottomed out before it gripped",
          "The taper angle is too shallow for the load it is carrying",
          "The key is too long and prevents the faces from touching",
          "The shaft is too hard for the bore of the pulley to grip"
        ],
        0,
        "A taper fit grips only if the faces mate cleanly and the part is drawn up on the taper. Dirt, burrs, or reaching the end of travel before the faces lock all stop that, and marking compound on the faces shows where the contact is."
      ]
    ],
    "screw": [
      [
        "A double-start thread has a pitch of 2 mm. What is its lead?",
        [
          "2 mm, because the lead and the pitch are always the same thing",
          "4 mm, because lead equals pitch multiplied by the number of starts",
          "1 mm, because each start carries half of the pitch",
          "8 mm, because lead equals pitch multiplied by the starts squared"
        ],
        1,
        "One turn advances the nut by one lead. With two starts wound in parallel, the nut moves two pitches in a turn. This is why multi-start screws run faster and hold less."
      ],
      [
        "A micrometer spindle has a lead of 0.5 mm and the thimble is divided into 50 parts. How far does one thimble division move the spindle?",
        [
          "0.1 mm, which is the lead divided by five",
          "0.025 mm, which is half the lead divided by ten",
          "0.01 mm, the lead divided by the divisions",
          "0.5 mm, which is the full lead for each division"
        ],
        2,
        "One full turn moves the spindle 0.5 mm, and it is split into 50 parts, so each is 0.5 ÷ 50 = 0.01 mm. The thread is acting as a magnifier, trading a large turn for a tiny and readable movement."
      ],
      [
        "A bolt is torqued to the dry value after its threads have been oiled. What is the likely result?",
        [
          "The clamp load comes out lower, because oil lets the nut slip",
          "The clamp load comes out the same, since torque fixes the clamp load",
          "The bolt stretches less, because the oil carries part of the load",
          "The clamp load comes out well above the intended value, close to the proof load"
        ],
        3,
        "Less friction means more of the torque goes into stretching the bolt. At K = 0.15 instead of 0.20, the same torque produces about a third more clamp load, enough to take an M16 8.8 bolt to its proof load."
      ],
      [
        "How much of the tightening torque on a typical bolt goes into stretching it?",
        [
          "About 10 percent; the rest is used up in friction",
          "About 50 percent, with the remainder used in friction under the head",
          "About 90 percent, with only a small share lost to thread friction",
          "About 30 percent, with the remainder used in friction in the threads"
        ],
        0,
        "Roughly half the torque goes into friction under the head or nut, about 40 percent into thread friction, and about 10 percent into the stretch that makes the clamp. This is why torque is only an indirect way of setting preload."
      ],
      [
        "A self-locking bolt on a vibrating machine loosens by itself. What explains this?",
        [
          "Vibration shortens the bolt, which removes the preload from the joint",
          "Vibration lets the nut slip a little on each cycle, which defeats the friction that holds it",
          "Self-locking only applies while the machine is running at a steady speed",
          "The vibration raises the friction between the threads and so releases the nut"
        ],
        1,
        "Self-locking depends on friction that is greater than the thread slope. Transverse vibration produces tiny slip movements, and each one lets the nut rotate slightly back. Thread locking compound, lock nuts and correct preload resist this."
      ],
      [
        "Why does a vertical ball screw usually need a brake on its drive?",
        [
          "It is too inefficient to lift a vertical load without a brake helping it",
          "Its thread is too fine to carry the load without extra support",
          "It is efficient enough to be driven backwards by the load, so it does not hold itself",
          "It overheats at rest unless a brake takes the load off the thread"
        ],
        2,
        "A ball screw is above 90 percent efficient, which is far over the 50 percent needed to self-lock, so a load can turn it back. Sliding screws hold by friction, and that same friction wastes energy and heat."
      ],
      [
        "A vise has a screw lead of 8 mm and the handle works at a radius of 120 mm. What is the ideal mechanical advantage?",
        [
          "15, which is the radius divided by the lead",
          "47, which is π × 120 ÷ 8",
          "754, which is 2π × 120 ÷ (8 ÷ 8)",
          "About 94, which is 2π × 120 ÷ 8"
        ],
        3,
        "One turn moves the handle through 2πr, which is 754 mm, while the jaw moves one lead, which is 8 mm. The ratio is 94. The 15 forgets the circle, and the 47 uses half the circumference."
      ]
    ],
    "lever": [
      [
        "A 100 N force is applied 0.6 m from a pivot at right angles to the bar. What is its moment about the pivot?",
        [
          "60 N·m, which is force multiplied by the perpendicular distance",
          "167 N·m, which is the distance divided by the force",
          "100 N·m, since the moment is the same as the force",
          "0.6 N·m, which is the distance multiplied by the force in kilonewtons"
        ],
        0,
        "Moment is force times perpendicular distance, so 100 × 0.6 = 60 N·m. The other numbers come from dividing the wrong way or forgetting the distance. Unit checking (newtons times metres) is the safest method."
      ],
      [
        "A wheelbarrow carries its load between the wheel and the handles. What class of lever is it?",
        [
          "First class, with the fulcrum between the load and the effort",
          "Second class, with the load between the fulcrum and the effort",
          "Third class, with the effort between the fulcrum and the load",
          "It has no class, since the wheel makes it a different machine"
        ],
        1,
        "The wheel axle is the fulcrum, the load is in the tray between the axle and the hands, and the effort is at the handles. In a second class lever the load is always closer to the fulcrum than the effort, so the advantage is above 1."
      ],
      [
        "What is true of the mechanical advantage of a third class lever, such as a pair of tweezers?",
        [
          "It is always above 1, because the effort is applied close to the load",
          "It is exactly 1, because the effort and the load move together",
          "It is always below 1, which gains speed and reach at the cost of force",
          "It can be above or below 1, depending on where the pivot sits"
        ],
        2,
        "The effort is nearer the fulcrum than the load, so the effort arm is shorter than the load arm. The load moves farther and faster than the effort and needs a larger force."
      ],
      [
        "A pry bar lifts a 3000 N load, with the tip 0.15 m from the pivot and the hands 0.9 m from it. What push is needed?",
        [
          "18 000 N, which is 3000 × 0.9 ÷ 0.15",
          "3000 N, since a lever does not change the force",
          "2850 N, which is 3000 minus the distance in centimetres",
          "500 N, which is 3000 × 0.15 ÷ 0.9"
        ],
        3,
        "The effort times its arm equals the load times its arm, so E = 3000 × 0.15 ÷ 0.9 = 500 N. Inverting the ratio gives the unfeasible 18 000 N and is the usual slip, so check that the answer is smaller than the load for a lever that gains force."
      ],
      [
        "A torque wrench has an in-line extension that lengthens it. The fastener needs 200 N·m. How should the wrench be set?",
        [
          "Lower than 200 N·m, because the longer lever multiplies the force",
          "Higher than 200 N·m, because the extension absorbs some of the torque",
          "At 200 N·m, since the dial always shows what the fastener receives",
          "At 200 N·m, but with a lighter pull to allow for the extension"
        ],
        0,
        "The wrench trips when the force at the grip times its own length reaches the set value. An extension adds length, so the fastener sees force times the longer length. Set value = target × L ÷ (L + extension)."
      ],
      [
        "The same 200 N push is applied to a wrench, first at 0.5 m and then with a bar that makes it 1.0 m. What happens to the torque on the fastener?",
        [
          "It stays at 100 N·m, since the force has not changed",
          "It doubles to 200 N·m, since torque follows lever length",
          "It halves, since a longer lever spreads the force out",
          "It rises slightly, since the longer bar adds a little weight"
        ],
        1,
        "Torque is force times length, so doubling the length at the same push doubles the torque. This is the point of a long wrench, and also why a cheater bar can exceed the rating of the fastener or socket."
      ],
      [
        "Why are cheater bars on fasteners and valves dangerous?",
        [
          "They lower the torque applied to the fastener and leave the joint under-tightened",
          "They make a torque wrench read higher than the true torque",
          "They can exceed what the fastener or tool was built for, and release suddenly",
          "They are only dangerous if made of material softer than the tool"
        ],
        2,
        "More length means more torque for the same push. The parts are rated for hand loads at the intended length. The break often shears a stem or socket, and the person on the bar goes with it."
      ]
    ],
    "wheel": [
      [
        "A winch has a crank of 0.4 m radius and a drum of 0.1 m radius. What is its ideal mechanical advantage?",
        [
          "0.25, which is the drum radius divided by the crank radius",
          "0.04, which is the product of the two radii",
          "40, which is the crank radius multiplied by the drum radius in centimetres",
          "4, which is the crank radius divided by the drum radius"
        ],
        3,
        "The effort acts on the larger radius, so the advantage is the ratio R ÷ r = 0.4 ÷ 0.1 = 4. The crank handle moves four times as far as the rope is drawn onto the drum."
      ],
      [
        "A 150 mm motor sheave turns at 1450 rpm and drives a 300 mm sheave. What are the driven speed and torque, ignoring losses?",
        [
          "725 rpm, and twice the torque, because the larger wheel turns slower and stronger",
          "2900 rpm, and half the torque, because the larger wheel turns faster",
          "725 rpm, and half the torque, because the speed and torque both drop",
          "1450 rpm, and the same torque, since a belt only transfers the motion"
        ],
        0,
        "The speed ratio is the diameter ratio, 150 ÷ 300, so the speed halves. Power is torque times speed and stays constant, less the losses, so the torque doubles. This is the same trade as every other machine."
      ],
      [
        "A shaft delivers 200 N·m at 1500 rpm. What power is that?",
        [
          "About 3.1 kW, which is torque × rpm ÷ 95 490",
          "About 31 kW, which is torque × rpm ÷ 9549",
          "About 300 kW, which is torque multiplied by rpm in thousands",
          "About 14 kW, which is torque × rpm ÷ 21 000"
        ],
        1,
        "Power in kW = torque (N·m) × speed (rpm) ÷ 9549, which is 2π divided by 60 and 1000 folded together. 200 × 1500 ÷ 9549 = 31.4 kW. Checking the order of magnitude catches a slip by a factor of ten."
      ],
      [
        "Why does a larger wheel roll over a step more easily than a small one?",
        [
          "A larger wheel weighs more, so it presses harder against the step",
          "A larger wheel has a smaller axle, so the friction is lower",
          "The force needed falls as the wheel radius grows against the step height",
          "The step is lower relative to the weight when the wheel is larger"
        ],
        2,
        "To climb a step of height h, a wheel of radius R needs a force of W × √(2Rh − h²) ÷ (R − h). For the same step, that falls steadily as R grows. A 100 mm radius wheel needs about two thirds of what a 50 mm one does over a 10 mm step."
      ],
      [
        "What makes the holding force on a rope round a capstan fall so fast as more turns are added?",
        [
          "Each turn adds a fixed amount of friction, so the ratio grows in a straight line",
          "The rope gets thinner under tension, so it grips more tightly with every turn",
          "The drum pulls harder as it turns faster, so a faster drum holds more",
          "Friction multiplies around each turn, so the tension ratio grows exponentially with the wrap angle"
        ],
        3,
        "The tension ratio is e^(μθ). Each increment of wrap multiplies the holding effect, so it compounds. Three turns with μ = 0.3 give a ratio of about 285, which is why a hand can hold a heavy rope on a bollard."
      ],
      [
        "A conveyor drive pulley holds well in the dry and slips in the rain. Why?",
        [
          "Water lowers friction, so the tension ratio the pulley can hold falls",
          "Rain makes the belt heavier, which pulls it away from the pulley",
          "Water raises the friction coefficient, which jams the belt on the pulley",
          "The pulley expands when wet, and the wrap angle reduces"
        ],
        0,
        "The belt drive transmits power by the capstan effect, and the limit on the tension ratio is e^(μθ). Anything that lowers μ lowers that limit. A lagged pulley, a longer wrap and a cleaner belt all push it back up."
      ]
    ],
    "pulley": [
      [
        "A single movable pulley is hung on a rope fixed above, and the free end is pulled upward. What is its ideal mechanical advantage?",
        [
          "1, because a single pulley only changes direction",
          "2, because two rope segments share the load",
          "4, because the pulley doubles the rope on each side",
          "0.5, because the load moves twice as far as the effort"
        ],
        1,
        "Count the rope segments holding up the moving pulley: there are two, so each carries half the load. The free end then has to move twice as far as the load rises. A fixed pulley on its own gives an advantage of 1."
      ],
      [
        "A four part tackle lifts 2000 N. What is the ideal pull on the free end?",
        [
          "8000 N, which is the load multiplied by the four ropes",
          "1000 N, which is the load divided by two sheaves",
          "500 N, which is the load divided by the four supporting ropes",
          "2000 N, since a tackle redirects the force without reducing it"
        ],
        2,
        "With n supporting ropes the load is shared n ways: 2000 ÷ 4 = 500 N. In practice friction in the sheaves raises it, but never below that figure."
      ],
      [
        "How much rope must be hauled to lift a load 1.5 m with a four part tackle?",
        [
          "1.5 m, since the rope moves with the load",
          "0.375 m, which is the lift divided by four",
          "3 m, which is twice the lift",
          "6 m, which is four times the lift"
        ],
        3,
        "Each of the four supporting segments has to shorten by 1.5 m, so 6 m of rope pass through the hands. This is the same trade as every other simple machine: a quarter of the force costs four times the distance."
      ],
      [
        "A two leg sling is spread to 30 degrees from the horizontal. What is the tension in each leg compared with the load weight?",
        [
          "Equal to the whole load weight, from T = W ÷ (2 sin 30°)",
          "Half the load weight, as in a straight lift",
          "Twice the load weight, from T = 2W ÷ sin 30°",
          "0.7 times the load weight, as it would be at 45 degrees"
        ],
        0,
        "sin 30° = 0.5, so T = W ÷ (2 × 0.5) = W. Each leg carries the full load, which is double what it carries in a straight lift. This is why flat sling angles are avoided."
      ],
      [
        "What happens to the tension in each sling leg as the legs are spread flatter?",
        [
          "It falls, because the load is carried over a wider area",
          "It rises quickly, because the legs must also resist the sideways pull",
          "It stays constant, since the load weight has not changed",
          "It falls at first and then rises beyond 45 degrees"
        ],
        1,
        "The vertical part of each leg tension must still be half the weight. A flatter leg has a smaller vertical share of its tension, so the tension itself must be larger. At 15 degrees it is nearly twice the load."
      ],
      [
        "A gravity take-up weighs 400 kg including its pulley, which hangs in the belt loop. About what tension does it put on each side of the belt?",
        [
          "About 3920 N, since each strand carries the full weight",
          "About 400 N, since the mass is the tension in kilograms",
          "About 1960 N, which is half the weight, since two belt strands share it",
          "About 7850 N, since the pulley doubles the weight on each strand"
        ],
        2,
        "The take-up is a movable pulley with two belt segments holding it up: 400 × 9.81 = 3924 N shared by two strands. Each takes about 1960 N. This is the pulley rule in plain clothes."
      ],
      [
        "A real four part tackle needs more pull than the ideal figure. What is the main reason?",
        [
          "The ropes stretch, which adds extra distance to each stroke",
          "Gravity pulls harder on the load as it rises off the ground",
          "The advantage of a tackle falls as the load gets lighter",
          "Friction in the sheaves and bending of the rope take a share of the work"
        ],
        3,
        "Ideal advantage assumes no friction. Each sheave typically loses 2 to 5 percent, and four of them compound. A tackle needing far more than a third above the ideal figure has a sheave that is not turning."
      ]
    ],
    "compound": [
      [
        "A lever with an advantage of 5 drives a screw with an ideal advantage of 40. What is the ideal advantage of the pair?",
        [
          "200, because advantages multiply when machines work in series",
          "45, because advantages add when machines work in series",
          "8, which is the screw advantage divided by the lever advantage",
          "35, which is the difference between the two advantages"
        ],
        0,
        "The output force of the lever is the input force of the screw, so the multiplications stack. The input distance has to be 200 times the output distance, which is why such machines are slow."
      ],
      [
        "Three stages have efficiencies of 95, 80 and 90 percent. What is the overall efficiency?",
        [
          "About 88 percent, which is the average of the three",
          "About 68 percent, which is the product of the three",
          "About 80 percent, which is the lowest of the three",
          "About 265 percent, which is the sum of the three"
        ],
        1,
        "Each stage passes on only its share of the energy, so they multiply: 0.95 × 0.80 × 0.90 = 0.684. The overall figure is always below the lowest stage, never at the average."
      ],
      [
        "At what level of efficiency does a screw or worm drive become self-locking?",
        [
          "When its efficiency is 90 percent or above",
          "When its efficiency is exactly 75 percent",
          "When its efficiency is 50 percent or below",
          "It is unrelated to efficiency and depends on the speed"
        ],
        2,
        "To hold a load against being driven back, friction has to absorb at least as much as the useful work, which is the same as an efficiency of 50 percent or less. High efficiency machines such as ball screws and gears do not hold themselves."
      ],
      [
        "Why is a self-locking worm drive on a hoist not a substitute for a brake?",
        [
          "A worm drive cannot hold any load unless the motor stays energised",
          "A worm drive holds only the load it was lowered with",
          "A brake is needed only for loads above the rated capacity",
          "Friction holding can be beaten by vibration and wear, so the drive creeps"
        ],
        3,
        "Self-locking relies on friction that changes with temperature, lubricant, wear and vibration. Hoisting equipment is required to have a brake that holds the load independent of the drive."
      ],
      [
        "A torque multiplier is used on a large fastener. What is the reaction arm for?",
        [
          "It bears on something solid so the case cannot turn",
          "It supports the weight of the tool so that the operator does not tire",
          "It limits the output torque to the value set on the wrench",
          "It transfers the output torque to the socket through a second gear"
        ],
        0,
        "The torque that the tool applies to the fastener acts back on its case with equal size and opposite direction. If the reaction arm is not braced against something solid, the case turns and the tool, or the operator's hand, goes with it."
      ],
      [
        "A screw jack with a 25 percent efficient thread runs warm after a long job. Why?",
        [
          "The jack is converting extra force into heat since the load is too light",
          "Three quarters of the work done is lost to friction, and becomes heat in the thread",
          "The handle has transferred body heat into the screw during the job",
          "The jack's advantage falls as it heats, which wastes some of the push"
        ],
        1,
        "Efficiency tells how much work gets through. At 25 percent, three quarters is dissipated as heat at the thread and the nut. Jacks are not built for continuous duty for this reason."
      ],
      [
        "A compound machine is overloaded and fails. Where is the failure most likely?",
        [
          "In the part nearest the hand, since that is where the effort is applied",
          "In the first stage, which always carries the largest share of the load",
          "In the weakest part, which is often one carrying the multiplied force far from the hand",
          "It cannot fail, since a machine only moves the force around"
        ],
        2,
        "Every stage after the multiplication carries the multiplied load. A design may put a strong handle on a thread that was sized for the intended load, and an overload breaks the thread or the base, not the handle."
      ]
    ]
  },
  "panels": {
    "overview": "<div class=\"bw-section-label\">Every machine in this series is built from six ideas</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A machine does not create work. It changes the trade between force and distance.</div></div><div class=\"callout-box-body\">Push on a lever with 100 N for 1 m and you put in 100 J. The lever can hand the load 1000 N over 0.1 m, which is the same 100 J, less whatever friction takes. That one sentence explains ramps, wedges, screws, gears, hydraulic jacks, block and tackle, and every gearbox in the plant. <strong>The numbers change; the trade does not.</strong></div></div>\n<p class=\"pr-p\">The six classical simple machines are the lever, the wheel and axle, the pulley, the inclined plane (the ramp), the wedge and the screw. The ramp is the simplest of them: it has no moving parts at all, and a load that is too heavy to lift can be rolled up it with a small force. Two ideas sit under all six. The <strong>lever family</strong> (lever, wheel and axle, pulley) turns about a pivot. The <strong>incline family</strong> (ramp, wedge, screw) trades distance along a slope for height.</p>\n<div class=\"card-grid\"><div class=\"type-card\" onclick=\"selectTerm('force')\" id=\"termcard-force\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-big-right\"></i></div><div class=\"type-card-name\">Force</div><div class=\"type-card-sub\">A push or a pull</div></div><div class=\"type-card\" onclick=\"selectTerm('work')\" id=\"termcard-work\"><div class=\"type-card-icon\"><i class=\"ti ti-weight\"></i></div><div class=\"type-card-name\">Work</div><div class=\"type-card-sub\">Force through a distance</div></div><div class=\"type-card\" onclick=\"selectTerm('ma')\" id=\"termcard-ma\"><div class=\"type-card-icon\"><i class=\"ti ti-scale\"></i></div><div class=\"type-card-name\">Mechanical advantage</div><div class=\"type-card-sub\">Load ÷ effort</div></div><div class=\"type-card\" onclick=\"selectTerm('eff')\" id=\"termcard-eff\"><div class=\"type-card-icon\"><i class=\"ti ti-percentage\"></i></div><div class=\"type-card-name\">Efficiency</div><div class=\"type-card-sub\">Work out ÷ work in</div></div><div class=\"type-card\" onclick=\"selectTerm('power')\" id=\"termcard-power\"><div class=\"type-card-icon\"><i class=\"ti ti-bolt\"></i></div><div class=\"type-card-name\">Power</div><div class=\"type-card-sub\">Work per second</div></div><div class=\"type-card\" onclick=\"selectTerm('trade')\" id=\"termcard-trade\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-exchange\"></i></div><div class=\"type-card-name\">The trade</div><div class=\"type-card-sub\">Force against distance</div></div></div><div id=\"term-display\"><div class=\"comp-placeholder\">tap a term to read it</div></div>\n<table class=\"ref-table\"><tr><th>Simple machine</th><th>What it trades</th><th>Where you will meet it on the plant</th></tr><tr><td>Inclined plane (ramp)</td><td>A long push for a small lift</td><td>Loading ramps, inclined conveyors, chutes, rails, jacking ramps, tapered shims</td></tr><tr><td>Wedge</td><td>A small drive distance for a large sideways force</td><td>Chisels, gib keys, cotters, taper fits, levelling wedges, adapter sleeves</td></tr><tr><td>Screw</td><td>Many turns for a large axial force or fine movement</td><td>Bolts, jack screws, lead screws, vices, micrometers, screw conveyors, worm gears</td></tr><tr><td>Lever</td><td>A long swing for a short, strong push</td><td>Wrenches, pry bars, valve handles, brake and clutch linkages, relief valve arms, indicators</td></tr><tr><td>Wheel and axle</td><td>A large turn at the rim for a strong turn at the shaft</td><td>Handwheels, cranks, winches, sheaves, sprockets, gears, steering</td></tr><tr><td>Pulley</td><td>A long pull on the rope for a strong lift</td><td>Chain blocks, crane blocks, hoists, gravity take-ups, belts and rope drives</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-help-circle\"></i> Four questions that unpack any machine</div><div class=\"info-block-body\">Whatever it looks like, ask the same four things of it:</div><ul class=\"info-block-tips\"><li>What is the input, and how far does it move?</li><li>What is the output, and how far does it move?</li><li>What is the ratio between the two distances? That is the ideal mechanical advantage.</li><li>Where does the lost energy go? Almost always into friction and heat. If the machine is hotter than it should be, the loss is larger than the designer allowed for.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-alert-circle\"></i> Five things people get wrong</div><ul class=\"info-block-tips\"><li><strong>\"A machine gives you free force.\"</strong> It gives force at the cost of distance, and it always costs a little extra, because friction is real.</li><li><strong>\"A longer ramp makes the load lighter.\"</strong> It makes the push smaller. The load weighs the same, and the work to lift it is the same or worse.</li><li><strong>\"A screw or worm drive that holds the load is a brake.\"</strong> Self-locking is friction that can be beaten by vibration. See the Compound tab.</li><li><strong>\"Weight and mass are the same.\"</strong> A kilogram is a mass. Its weight is 9.81 N. Mixing them up is the single most common calculation error in lifting and jacking.</li><li><strong>\"The machine can multiply as much as I like.\"</strong> The parts after the multiplication carry the multiplied force, so the weakest of them sets the limit.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: anything that makes the job easy makes it longer</strong>A bottle jack lifts a tonne with one hand, and takes forty pumps to do it. A torque multiplier turns a 200 N·m job into a 1000 N·m job, and takes five times as many turns of the input. When a method promises a big force from a small push and still moves fast, look for the motor, the hydraulic pump or the stored energy that is paying for it.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-map-2\"></i> Where this shows up in the series</div><div class=\"info-block-body\">Each of these modules applies one of the six ideas, and a quick read of the tab here makes the other one make more sense.</div><ul class=\"info-block-tips\"><li><a href=\"builtwright_power_transmission_v1.html#overview\">Power Transmission</a>: belts and chains are wheel and axle systems; the capstan effect is on the Wheel tab.</li><li><a href=\"builtwright_gearboxes_v1.html#gears\">Gearboxes</a>: every gear pair is a lever that rotates; torque goes up as speed goes down.</li><li><a href=\"builtwright_hydraulics_v1.html#overview\">Hydraulics</a>: the jack is a lever whose arms are pistons of different areas.</li><li><a href=\"builtwright_installation_v1.html#baseplate\">Installation</a>: levelling wedges, jack bolts and shims are the wedge and the screw.</li><li><a href=\"builtwright_precision_measurement_v1.html#micrometer\">Precision Measurement</a>: the micrometer is a screw used to magnify a tiny movement.</li><li><a href=\"builtwright_conveyors_v1.html#tension\">Conveyors</a>: the gravity take-up is a pulley system; the incline limit is a ramp problem.</li></ul></div>",
    "incline": "<div class=\"bw-section-label\">The inclined plane: the simplest machine</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Lifting a load straight up takes a force equal to its weight. Sliding it up a ramp takes only a part of that.</div></div><div class=\"callout-box-body\">A ramp of length L that rises a height h lets you raise a load with a push of about W × h ÷ L, where W is the weight. You push the load a distance L instead of lifting it a distance h. The long way costs more distance and less force, and the work against gravity is the same. <strong>The gentler the slope, the smaller the push and the longer the push has to go on.</strong></div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 440 262\" role=\"img\" aria-label=\"A block on a ramp with its weight, the push up the slope and the support force from the surface\" xmlns=\"http://www.w3.org/2000/svg\"><polygon class=\"bx\" points=\"40,215 360,215 360,100\"/><polygon class=\"bm\" points=\"155.7521901024491,173.40155668193236 206.5702247815731,155.13882546912217 195.07146809202595,123.14228511559965 144.25343341290196,141.40501632840986\"/><line class=\"ard\" x1=\"175.4118290972375\" y1=\"148.271920898766\" x2=\"175.4118290972375\" y2=\"222.271920898766\"/><polygon class=\"ardf\" points=\"175.4,226.3 172.3,218.9 178.5,218.9\"/><text class=\"tr\" x=\"189.4118290972375\" y=\"224.271920898766\" text-anchor=\"start\">W</text><line class=\"ab\" x1=\"175.4118290972375\" y1=\"148.271920898766\" x2=\"153.7671106227958\" y2=\"88.04313905684127\"/><polygon class=\"abf\" points=\"152.4,84.3 157.8,90.2 152.0,92.3\"/><text class=\"tl\" x=\"142.4143157181432\" y=\"80.27884019172097\" text-anchor=\"end\">N</text><line class=\"ar\" x1=\"175.4118290972375\" y1=\"148.271920898766\" x2=\"250.6978063996434\" y2=\"121.21602280571389\"/><polygon class=\"arf\" points=\"254.5,119.9 248.6,125.3 246.5,119.4\"/><text class=\"tb\" x=\"262.46210526476375\" y=\"113.86322790106128\" text-anchor=\"start\">F</text><line class=\"lt\" x1=\"175.4118290972375\" y1=\"148.271920898766\" x2=\"151.66609936750777\" y2=\"156.80554252038763\"/><line class=\"lt\" x1=\"151.66609936750777\" y1=\"156.80554252038763\" x2=\"175.4118290972375\" y2=\"226.271920898766\"/><line class=\"lt\" x1=\"175.4118290972375\" y1=\"148.271920898766\" x2=\"200.2369101783186\" y2=\"217.3504073852525\"/><line class=\"lt\" x1=\"200.2369101783186\" y1=\"217.3504073852525\" x2=\"175.4118290972375\" y2=\"226.271920898766\"/><text class=\"ts\" x=\"145.66609936750777\" y=\"172.80554252038763\" text-anchor=\"end\">W sin θ</text><text class=\"ts\" x=\"208.2369101783186\" y=\"231.3504073852525\" text-anchor=\"start\">W cos θ</text><text class=\"t\" x=\"280\" y=\"244\" text-anchor=\"middle\">length of ramp L (along the slope)</text><text class=\"t\" x=\"374\" y=\"164\" text-anchor=\"start\">height h</text><text class=\"tb\" x=\"86\" y=\"208\" text-anchor=\"middle\">θ</text><path class=\"ln\" d=\"M 78 215 A 38 38 0 0 0 75.8 202.7\"/><line class=\"lt\" x1=\"366\" y1=\"215\" x2=\"366\" y2=\"100\"/></svg><figcaption>A block on a ramp. The weight W splits into a part along the slope, W sin θ, which the push F has to match, and a part into the slope, W cos θ, which the surface carries as the support force N.</figcaption></figure>\n<div class=\"pr-formula\">Ideal effort    F = W × h ÷ L = W × sin θ<br>Ideal advantage   IMA = L ÷ h = 1 ÷ sin θ<br>With friction (constant speed, push parallel to the slope):<br>F = W × (sin θ + μ × cos θ)<br>Efficiency   η = tan θ ÷ (tan θ + μ)</div>\n<p class=\"pr-p\">Here μ (mu) is the coefficient of friction between the load and the ramp, and θ is the angle of the slope. For a load that rolls on wheels, use the rolling resistance coefficient in place of μ: it is much smaller, which is why wheels, rollers and rails were invented.</p>\n<table class=\"ref-table\"><tr><th>Slope angle</th><th>Ideal advantage (L ÷ h)</th><th>Push for a 1000 N load, no friction</th><th>Percent grade</th></tr><tr><td>5°</td><td>11.5</td><td>87 N</td><td>8.8%</td></tr><tr><td>10°</td><td>5.8</td><td>174 N</td><td>17.6%</td></tr><tr><td>15°</td><td>3.9</td><td>259 N</td><td>26.8%</td></tr><tr><td>20°</td><td>2.9</td><td>342 N</td><td>36.4%</td></tr><tr><td>30°</td><td>2.0</td><td>500 N</td><td>57.7%</td></tr><tr><td>45°</td><td>1.4</td><td>707 N</td><td>100%</td></tr></table>\n<p class=\"pr-p\">Percent grade is rise ÷ run × 100, where run is the horizontal distance, not the length of the ramp. For gentle slopes the two are almost the same. For steep ones they are not, so check which one a drawing or standard means.</p>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: rolling a machine base onto a dock</div><div class=\"pr-ex-given\">A base weighing 400 kg has to go up a ramp 2 m long onto a dock 0.5 m high, on rollers with a rolling resistance of about 0.03. How hard must it be pushed, and what does doubling the ramp length buy?</div><ol class=\"pr-ex-steps\"><li>Weight W = 400 × 9.81 = 3924 N.</li><li>sin θ = h ÷ L = 0.5 ÷ 2 = 0.25 and cos θ = 0.968.</li><li>F = 3924 × (0.25 + 0.03 × 0.968) = 3924 × 0.279 = 1095 N.</li><li>At 4 m long: sin θ = 0.125, cos θ = 0.992, so F = 3924 × (0.125 + 0.0298) = 607 N.</li></ol><div class=\"pr-ex-answer\">About 1.1 kN (110 kgf) on the 2 m ramp, which is more than a person should push. The 4 m ramp needs about 0.6 kN. Doubling the length did not quite halve the force, because the friction term stayed put.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-stairs\"></i> When a load stays put: the angle of friction</div><div class=\"info-block-body\">A load sitting on a slope is held by friction until the slope becomes steep enough. It begins to slide when tan θ exceeds the coefficient of static friction μ. The angle at which that happens is the <strong>angle of friction</strong> (or, for loose material, the angle of repose).</div><ul class=\"info-block-tips\"><li>Steel on dry steel, μ about 0.15 to 0.8 depending on finish and cleanliness. Oiled steel can be 0.05 to 0.15. The range is wide, which is why published values are starting points and not guarantees.</li><li>A chute needs a steeper angle than the angle of friction for the material to slide through it. Wet, sticky and fine materials need steeper chutes than dry, coarse ones.</li><li>A conveyor belt carrying loose material up a slope will let the material roll back past a certain angle. That limit comes from the material and the belt surface. Cleated and chevron belts push it higher.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-wheel\"></i> Why wheels and rollers beat sliding</div><div class=\"info-block-body\">Rolling resistance coefficients are far smaller than sliding friction coefficients, so on a slope a wheeled load needs a much smaller push to hold or move.</div><ul class=\"info-block-tips\"><li>Steel wheel on steel rail: about 0.002.</li><li>Hard wheel or caster on smooth concrete: roughly 0.01 to 0.03, and more on rough or dirty floors.</li><li>Sliding steel on concrete: 0.4 or more. That is a factor of ten to forty.</li><li>This is also why a loaded cart left on a slope runs away: with so little resistance, a tiny slope is already enough to start it.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: chock first, then think about the ramp</strong>A load on a ramp has stored energy equal to its weight times its height. Rolling stock, roller-mounted equipment and cart loads need a chock or a brake that holds on the slope itself, set before anyone lets go. A person standing downhill of a load is in its path whatever the plan says.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-map-pin\"></i> Where the ramp turns up</div><ul class=\"info-block-tips\"><li>Dock plates, truck ramps and machinery skidding rails: the slope sets the push, the surface sets the friction.</li><li>Inclined and screw conveyors: the incline limit and the pitch of the screw both come from the same triangle.</li><li>Gravity chutes and hoppers: the angle has to be steeper than the material's angle of friction.</li><li>Tapered shims, tapered gibs and every taper fit are ramps that have been bent into a part. The next tab picks that up.</li><li>Pipe slope for drains and condensate lines: a small slope is enough to move liquid, so a slope of around one percent is common practice.</li></ul></div>",
    "wedge": "<div class=\"bw-section-label\">The wedge: a ramp that moves</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A wedge is a ramp pushed under or into the load, instead of the load being pushed up the ramp.</div></div><div class=\"callout-box-body\">Drive it a long way along its length and the faces move apart by only its thickness. The sideways force each face can push with is larger than the driving force by about the ratio of length to thickness. A thin wedge gives a big multiplication and a long drive; a blunt wedge gives less. Friction takes a large share of the gain in a wedge, and also lets it hold itself in place.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 440 252\" role=\"img\" aria-label=\"A wedge driven between two parts, pushing each outward\" xmlns=\"http://www.w3.org/2000/svg\"><rect class=\"bx\" x=\"20\" y=\"30\" width=\"90\" height=\"60\" rx=\"3\"/><rect class=\"bx\" x=\"20\" y=\"150\" width=\"90\" height=\"60\" rx=\"3\"/><text class=\"ts\" x=\"65\" y=\"64\" text-anchor=\"middle\">part A</text><text class=\"ts\" x=\"65\" y=\"184\" text-anchor=\"middle\">part B</text><polygon class=\"bm\" points=\"110,90 110,150 330,120\"/><line class=\"ar\" x1=\"380\" y1=\"120\" x2=\"340\" y2=\"120\"/><polygon class=\"arf\" points=\"336.0,120.0 343.4,116.9 343.4,123.1\"/><text class=\"tb\" x=\"384\" y=\"124\" text-anchor=\"start\">F</text><text class=\"ts\" x=\"300\" y=\"150\" text-anchor=\"end\">drive</text><line class=\"ab\" x1=\"130\" y1=\"112\" x2=\"130\" y2=\"100\"/><polygon class=\"abf\" points=\"130.0,96.0 133.1,103.4 126.9,103.4\"/><line class=\"ab\" x1=\"130\" y1=\"128\" x2=\"130\" y2=\"140\"/><polygon class=\"abf\" points=\"130.0,144.0 126.9,136.6 133.1,136.6\"/><text class=\"ts\" x=\"130\" y=\"56\" text-anchor=\"start\">outward force on each face</text><line class=\"lt\" x1=\"104\" y1=\"90\" x2=\"104\" y2=\"150\"/><text class=\"tb\" x=\"98\" y=\"124\" text-anchor=\"end\">w</text><line class=\"lt\" x1=\"110\" y1=\"224\" x2=\"330\" y2=\"224\"/><text class=\"tb\" x=\"220\" y=\"242\" text-anchor=\"middle\">l</text><text class=\"ts\" x=\"430\" y=\"190\" text-anchor=\"end\">ideal advantage ≈ l ÷ w</text></svg><figcaption>A wedge of length l and thickness w driven by a force F. Each face pushes the part it touches outward with a force far larger than F, at the cost of driving the wedge a distance l to open the gap by w.</figcaption></figure>\n<div class=\"pr-formula\">Frictionless: force on each face ≈ F × l ÷ w<br>Self-holding when tan α ≤ μ   (α = half the wedge angle)<br>With friction μ, force on each face = F × (cos α − μ sin α) ÷ (2 × (sin α + μ cos α))</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a splitting wedge</div><div class=\"pr-ex-given\">A wedge 120 mm long and 20 mm thick at the head is driven with 500 N. What is the sideways push on each face? Does it hold when you let go?</div><ol class=\"pr-ex-steps\"><li>Ideal: 500 × 120 ÷ 20 = 3000 N on each face.</li><li>Half-angle: tan α = 10 ÷ 120 = 0.083, so α = 4.8°, sin α = 0.083, cos α = 0.997.</li><li>With μ = 0.2: force = 500 × (0.997 − 0.017) ÷ (2 × (0.083 + 0.199)) = 500 × 0.980 ÷ 0.564 = 869 N.</li><li>Self-holding test: tan α = 0.083 is less than μ = 0.2, so it stays in.</li></ol><div class=\"pr-ex-answer\">About 870 N on each face, not 3000 N: friction took roughly 70 percent of the ideal gain, and also made the wedge stay where it was driven.</div></div>\n<div class=\"bw-section-label\">Four jobs a wedge does</div><div class=\"card-grid\"><div class=\"type-card\" onclick=\"selectWedge('split')\" id=\"wcard-split\"><div class=\"type-card-icon\"><i class=\"ti ti-axe\"></i></div><div class=\"type-card-name\">Splitting</div><div class=\"type-card-sub\">Chisel, axe, knife</div></div><div class=\"type-card\" onclick=\"selectWedge('hold')\" id=\"wcard-hold\"><div class=\"type-card-icon\"><i class=\"ti ti-lock\"></i></div><div class=\"type-card-name\">Holding</div><div class=\"type-card-sub\">Keys, cotters, chocks</div></div><div class=\"type-card\" onclick=\"selectWedge('lift')\" id=\"wcard-lift\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-vertical\"></i></div><div class=\"type-card-name\">Lifting and levelling</div><div class=\"type-card-sub\">Levelling wedges, shims, gibs</div></div><div class=\"type-card\" onclick=\"selectWedge('taper')\" id=\"wcard-taper\"><div class=\"type-card-icon\"><i class=\"ti ti-cone\"></i></div><div class=\"type-card-name\">Locking tapers</div><div class=\"type-card-sub\">Adapter sleeves, tapered bushings</div></div></div><div id=\"wedge-display\"><div class=\"comp-placeholder\">tap a use to read about it</div></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a driven taper stores energy</strong>Anything held by a taper fit is under a very large radial load. When it is released (nut backed off, hydraulic oil injected between the faces) the part can move suddenly. Oil injection methods push the faces apart with oil at hundreds of bar or more, and a hub can leave the shaft with force. Follow the procedure for the specific part, stay out of the line of travel, and keep the nut on until the parts have relaxed.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-search\"></i> Reading a wedge fault</div><div class=\"info-block-body\">Wedge faults are almost always about friction and contact.</div><ul class=\"info-block-tips\"><li>A taper key or cotter that has worked loose has lost friction on its faces: oil, rust or burrs, or a worn seat.</li><li>A levelling wedge that has crept has been loaded off-centre, or the surfaces were polished and oiled.</li><li>A taper fit that spins on its shaft was bottomed out before it gripped, or the faces were dirty. Contact checking with marking compound shows it.</li><li>Fretting (a fine brown or red powder) at a taper means it has been moving at a microscopic level. The fit is no longer holding.</li></ul></div>",
    "screw": "<div class=\"bw-section-label\">The screw: a ramp wrapped round a shaft</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Unroll one turn of a thread and you have a ramp: its base is the circumference, its height is the lead.</div></div><div class=\"callout-box-body\">Turning the screw once moves the nut along the shaft by one lead. The effort travels round a circle (the handle, the wrench, the thread itself), the load travels along the shaft, and the ratio between those two distances is the advantage. A fine thread is a gentle ramp: more turns, more force, finer movement.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 460 240\" role=\"img\" aria-label=\"A screw thread unrolled into a ramp whose base is the circumference and whose height is the lead\" xmlns=\"http://www.w3.org/2000/svg\"><rect class=\"bx\" x=\"30\" y=\"30\" width=\"60\" height=\"170\" rx=\"3\"/><line class=\"gt\" x1=\"30\" y1=\"60\" x2=\"90\" y2=\"40\"/><line class=\"gt\" x1=\"30\" y1=\"84\" x2=\"90\" y2=\"64\"/><line class=\"gt\" x1=\"30\" y1=\"108\" x2=\"90\" y2=\"88\"/><line class=\"gt\" x1=\"30\" y1=\"132\" x2=\"90\" y2=\"112\"/><line class=\"gt\" x1=\"30\" y1=\"156\" x2=\"90\" y2=\"136\"/><line class=\"gt\" x1=\"30\" y1=\"180\" x2=\"90\" y2=\"160\"/><text class=\"ts\" x=\"60\" y=\"220\" text-anchor=\"middle\">thread on a shaft</text><polygon class=\"bm\" points=\"170,200 390,200 390,150\"/><line class=\"ln\" x1=\"170\" y1=\"200\" x2=\"390\" y2=\"200\"/><text class=\"t\" x=\"280\" y=\"222\" text-anchor=\"middle\">circumference π × d (one turn)</text><text class=\"tb\" x=\"402\" y=\"180\" text-anchor=\"start\">lead</text><text class=\"tb\" x=\"206\" y=\"192\" text-anchor=\"middle\">λ</text><text class=\"ts\" x=\"280\" y=\"125\" text-anchor=\"middle\">unrolled, one turn is a ramp</text><text class=\"ts\" x=\"280\" y=\"108\" text-anchor=\"middle\">tan λ = lead ÷ (π × d)</text></svg><figcaption>A thread unrolled. One turn is a ramp of height equal to the lead and length equal to the circumference at the thread's mean diameter. The steeper this ramp (the larger the lead angle λ), the less it multiplies and the more easily it runs back on its own.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Term</th><th>Meaning</th><th>Example</th></tr><tr><td>Pitch</td><td>Distance between neighbouring crests</td><td>M10 coarse: 1.5 mm. 3/8-16 UNC: 25.4 ÷ 16 = 1.59 mm</td></tr><tr><td>Lead</td><td>Distance the nut advances in one turn. Lead = pitch × number of starts</td><td>Single start: lead = pitch. A double-start Acme: lead is twice the pitch</td></tr><tr><td>Starts</td><td>Number of parallel threads wound on the shaft</td><td>More starts means a faster, steeper screw, and less holding power</td></tr><tr><td>Lead angle λ</td><td>tan λ = lead ÷ (π × mean diameter)</td><td>M10×1.5: mean diameter 9.03 mm, tan λ = 1.5 ÷ 28.4, λ = 3.0°</td></tr><tr><td>Handedness</td><td>Right hand: clockwise tightens</td><td>Left-hand threads are used where rotation would loosen a right-hand one</td></tr></table>\n<div class=\"pr-formula\">Ideal advantage   IMA = 2π × r ÷ lead    (r = effort radius)<br>Ideal torque to raise an axial load F:   T = F × lead ÷ (2π)<br>Self-locking when tan λ ≤ μ (thread friction), which also means efficiency ≤ 50%</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a bench vise</div><div class=\"pr-ex-given\">A vise screw has a lead of 6 mm and a handle that works at a radius of 150 mm. A hand pushes the handle with 100 N. What clamping force results?</div><ol class=\"pr-ex-steps\"><li>IMA = 2π × 150 ÷ 6 = 157.</li><li>Ideal clamp force = 100 × 157 = 15.7 kN.</li><li>A sliding screw of this kind is about 25 percent efficient, so the real force is 15.7 × 0.25 = 3.9 kN.</li></ol><div class=\"pr-ex-answer\">About 3.9 kN (400 kgf) of real clamping force. The screw gave a multiplication near 40, and friction took three quarters of the ideal one.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-bolt\"></i> Tightening a bolt is a screw problem</div><div class=\"info-block-body\">A bolt is a screw used to stretch itself. The stretch is the clamp force that holds the joint together, and the nut turn that makes it is mostly spent on friction.</div><ul class=\"info-block-tips\"><li>Where the torque goes, roughly: half under the nut or head, 40 percent in the threads, and about 10 percent into stretching the bolt. That last tenth is the only part that clamps.</li><li>The usual estimate is T = K × d × F, where K is the nut factor (about 0.2 for dry plain steel, 0.15 or less when lubricated), d is the nominal diameter and F is the clamp force.</li><li>Because friction decides the result, the same torque gives different clamp loads on dry, oiled and anti-seize threads. This is why lubricated fasteners need their own torque figure.</li></ul></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: the same torque on an oiled bolt</div><div class=\"pr-ex-given\">An M16 grade 8.8 bolt is torqued dry to 75 percent of its proof load (about 68 kN) with K = 0.20. A technician oils the threads and applies the same torque. What clamp load results?</div><ol class=\"pr-ex-steps\"><li>Dry torque: T = 0.20 × 0.016 × 68 000 = 218 N·m.</li><li>Oiled, K is about 0.15, so F = T ÷ (K × d) = 218 ÷ (0.15 × 0.016) = 91 kN.</li><li>Proof load for M16 8.8 is about 91 kN.</li></ol><div class=\"pr-ex-answer\">The oiled bolt reaches its proof load (a third more clamp force than intended) and has no margin left. Overloaded bolts yield, relax and loosen. See the Reference module for the lubricated values.</div></div>\n<div class=\"bw-section-label\">Four kinds of screw, four different jobs</div><div class=\"card-grid\"><div class=\"type-card\" onclick=\"selectScrew('fast')\" id=\"scard-fast\"><div class=\"type-card-icon\"><i class=\"ti ti-bolt\"></i></div><div class=\"type-card-name\">Fastener threads</div><div class=\"type-card-sub\">Bolts, studs, set screws</div></div><div class=\"type-card\" onclick=\"selectScrew('power')\" id=\"scard-power\"><div class=\"type-card-icon\"><i class=\"ti ti-arrows-vertical\"></i></div><div class=\"type-card-name\">Power screws</div><div class=\"type-card-sub\">Jacks, lead screws, vises</div></div><div class=\"type-card\" onclick=\"selectScrew('ball')\" id=\"scard-ball\"><div class=\"type-card-icon\"><i class=\"ti ti-circle-dots\"></i></div><div class=\"type-card-name\">Ball and roller screws</div><div class=\"type-card-sub\">Precision drives</div></div><div class=\"type-card\" onclick=\"selectScrew('conv')\" id=\"scard-conv\"><div class=\"type-card-icon\"><i class=\"ti ti-arrow-big-right-lines\"></i></div><div class=\"type-card-name\">Screw conveyors and augers</div><div class=\"type-card-sub\">A screw that moves material</div></div></div><div id=\"screw-display\"><div class=\"comp-placeholder\">tap a type of screw to read about it</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-ruler-measure\"></i> A micrometer is a screw used as a magnifier</div><div class=\"info-block-body\">A metric micrometer spindle has a thread of 0.5 mm lead. The thimble is divided into 50 parts round its circumference. One division of the thimble therefore moves the spindle 0.5 ÷ 50 = 0.01 mm. A full turn of the thimble, tens of millimetres of travel at its edge, moves the spindle only 0.5 mm. It is the same trade as every machine in this module, used to turn a tiny movement into one large enough to read. An inch micrometer works the same way: 40 threads per inch, 25 divisions, 0.001 in per division.</div><ul class=\"info-block-tips\"><li>The instrument is only as good as its thread. A worn or dirty spindle thread gives errors no amount of care in reading will remove.</li><li>See <a href=\"builtwright_precision_measurement_v1.html#micrometer\">Reading a Micrometer</a> for the readings themselves.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: count the threads before you swear at the nut</strong>Cross-threaded, wrong pitch and damaged threads feel similar at first. Spin a known good nut on the bolt: if it runs freely for a few turns and binds, the damage is in the bolt. If it will not start, check the pitch with a thread gauge. M10×1.5 coarse and M10×1.25 fine look the same to the eye and will not interchange.</div></div>",
    "lever": "<div class=\"bw-section-label\">The lever: a rigid bar and a pivot</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A lever balances when the turning effects either side of the pivot are equal: effort × its distance = load × its distance.</div></div><div class=\"callout-box-body\">The turning effect of a force about a point is its <strong>moment</strong>: force times the perpendicular distance from the pivot. A 100 N push at 1 m from the pivot has the same moment as a 1000 N load at 0.1 m. Make the effort arm longer than the load arm and the effort is smaller than the load, at the cost of a longer swing. The same idea is a torque wrench, a valve handle and a pry bar.</div></div>\n<div class=\"pr-formula\">Effort × effort arm = load × load arm<br>IMA = effort arm ÷ load arm<br>Moment (torque) = force × perpendicular distance</div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 560 410\" role=\"img\" aria-label=\"The three classes of lever, drawn with fulcrum, load and effort\" xmlns=\"http://www.w3.org/2000/svg\"><text class=\"tb\" x=\"14\" y=\"28\" text-anchor=\"start\">1st class</text><text class=\"ts\" x=\"14\" y=\"44\" text-anchor=\"start\">fulcrum in the middle</text><rect class=\"bm\" x=\"150\" y=\"70\" width=\"370\" height=\"10\" rx=\"3\"/><polygon class=\"bx\" points=\"300,80 286,102 314,102\"/><line class=\"ard\" x1=\"190\" y1=\"30\" x2=\"190\" y2=\"62\"/><polygon class=\"ardf\" points=\"190.0,66.0 186.9,58.6 193.1,58.6\"/><text class=\"tr\" x=\"190\" y=\"24\" text-anchor=\"middle\">load</text><line class=\"ar\" x1=\"450\" y1=\"30\" x2=\"450\" y2=\"62\"/><polygon class=\"arf\" points=\"450.0,66.0 446.9,58.6 453.1,58.6\"/><text class=\"tb\" x=\"450\" y=\"24\" text-anchor=\"middle\">effort</text><text class=\"t\" x=\"300\" y=\"118\" text-anchor=\"middle\">F</text><text class=\"tb\" x=\"14\" y=\"148\" text-anchor=\"start\">2nd class</text><text class=\"ts\" x=\"14\" y=\"164\" text-anchor=\"start\">load in the middle</text><rect class=\"bm\" x=\"150\" y=\"190\" width=\"370\" height=\"10\" rx=\"3\"/><polygon class=\"bx\" points=\"160,200 146,222 174,222\"/><text class=\"t\" x=\"160\" y=\"238\" text-anchor=\"middle\">F</text><line class=\"ard\" x1=\"300\" y1=\"148\" x2=\"300\" y2=\"182\"/><polygon class=\"ardf\" points=\"300.0,186.0 296.9,178.6 303.1,178.6\"/><text class=\"tr\" x=\"300\" y=\"142\" text-anchor=\"middle\">load</text><line class=\"ar\" x1=\"500\" y1=\"244\" x2=\"500\" y2=\"208\"/><polygon class=\"arf\" points=\"500.0,204.0 503.1,211.4 496.9,211.4\"/><text class=\"tb\" x=\"500\" y=\"258\" text-anchor=\"middle\">effort</text><text class=\"tb\" x=\"14\" y=\"288\" text-anchor=\"start\">3rd class</text><text class=\"ts\" x=\"14\" y=\"304\" text-anchor=\"start\">effort in the middle</text><rect class=\"bm\" x=\"150\" y=\"330\" width=\"370\" height=\"10\" rx=\"3\"/><polygon class=\"bx\" points=\"160,340 146,362 174,362\"/><text class=\"t\" x=\"160\" y=\"378\" text-anchor=\"middle\">F</text><line class=\"ar\" x1=\"320\" y1=\"384\" x2=\"320\" y2=\"348\"/><polygon class=\"arf\" points=\"320.0,344.0 323.1,351.4 316.9,351.4\"/><text class=\"tb\" x=\"320\" y=\"398\" text-anchor=\"middle\">effort</text><line class=\"ard\" x1=\"500\" y1=\"288\" x2=\"500\" y2=\"322\"/><polygon class=\"ardf\" points=\"500.0,326.0 496.9,318.6 503.1,318.6\"/><text class=\"tr\" x=\"500\" y=\"282\" text-anchor=\"middle\">load</text></svg><figcaption>The three classes. Remember them as F, L, E: the thing in the middle is the fulcrum in a first class lever, the load in a second class lever and the effort in a third class lever.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Class</th><th>Order along the bar</th><th>Advantage</th><th>Examples</th></tr><tr><td>First</td><td>Effort, fulcrum, load</td><td>More than 1, equal to 1 or less than 1, depending on where the pivot is</td><td>Pry bar over a pivot, pliers, scissors, crowbar on a block, handpump handle, balance scale</td></tr><tr><td>Second</td><td>Fulcrum, load, effort</td><td>Always more than 1</td><td>Wheelbarrow, nutcracker, bottle opener, a pry bar lifting a load with its tip on the floor</td></tr><tr><td>Third</td><td>Fulcrum, effort, load</td><td>Always less than 1</td><td>Tweezers, shovel, fishing rod, the human forearm. It trades force for speed and reach</td></tr></table>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a pry bar</div><div class=\"pr-ex-given\">A pry bar is used to lift one end of a machine that weighs 5000 N. The tip sits 0.1 m from the block it pivots on, and the hands are 1.0 m from it. What push is needed, and how far must the hands move to lift the load 10 mm?</div><ol class=\"pr-ex-steps\"><li>Effort × 1.0 = 5000 × 0.1, so effort = 500 N.</li><li>IMA = 1.0 ÷ 0.1 = 10.</li><li>Hand travel = 10 × 10 mm = 100 mm.</li></ol><div class=\"pr-ex-answer\">500 N (about 51 kgf) of push, and 100 mm of travel for each 10 mm of lift. The bar has to carry a bending moment of 5000 × 0.1 = 500 N·m, so it must be strong enough for that.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-tool\"></i> Wrenches are levers</div><div class=\"info-block-body\">Torque is force times lever length, so the same hand force gives twice the torque on a wrench twice as long. This is both the point of a long wrench and the reason it is dangerous.</div><ul class=\"info-block-tips\"><li>A 200 N push at 0.5 m is 100 N·m. At 1.0 m it is 200 N·m.</li><li>A cheater bar (a pipe slid over the handle) multiplies the torque on a fastener that was designed for the length of the wrench. It can break the socket, strip the fastener, or shear a bolt, and the release throws the person holding the bar.</li><li>A torque wrench gives torque only when force is applied at the grip point it was calibrated for. Pushing on the end of the handle, or at the middle, gives a different torque than the dial shows.</li></ul></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a crowfoot on a torque wrench</div><div class=\"pr-ex-given\">A torque wrench is 0.40 m long from the square drive to the grip. A straight crowfoot adds 0.05 m along the same line as the wrench. The fastener must be tightened to 200 N·m. What should the wrench be set to?</div><ol class=\"pr-ex-steps\"><li>The fastener sees force × (0.40 + 0.05). The wrench dial responds to force × 0.40.</li><li>Set value = 200 × 0.40 ÷ 0.45 = 178 N·m.</li></ol><div class=\"pr-ex-answer\">Set the wrench to 178 N·m. Set it to 200 and the fastener actually gets 225 N·m. If the extension points back towards the handle, the effective length is shorter, and the setting goes up instead.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-settings\"></i> Levers inside the machines</div><div class=\"info-block-body\">Many controls and instruments on a plant are levers whose job is to change the size or direction of a movement.</div><ul class=\"info-block-tips\"><li>Valve handles, brake pedals, clutch forks and linkages trade pedal travel for brake force.</li><li>Bellcranks change the direction of a push through 90 degrees and can change its size.</li><li>Flapper-nozzle and feedback levers in pneumatic positioners amplify a tiny movement into a control signal. See <a href=\"builtwright_process_valves_v1.html#actuators\">Valves and Actuators</a>.</li><li>A lever-type dial test indicator is a lever that magnifies a movement. Its stylus has to be close to square to the surface, or the reading carries a cosine error. The error is small below about 15 degrees and grows quickly after that.</li><li>Lever-type safety valves used a weight on an arm to set the lifting pressure: the moment of the weight balances the pressure force on the disc.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: make the bar the weak link, not the bolt</strong>Where a lever has to be used, use the right one: a breaker bar rated for the socket, a torque wrench for a specified torque, a pry bar sized for the load. A bar that bends is telling you its limit. A fastener that gives way is telling you the same thing, with the energy of the bar released at the person holding it.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-help-circle\"></i> What a lever does not do</div><ul class=\"info-block-tips\"><li>It does not reduce the work. The long swing of the effort is the cost of the small push.</li><li>It does not need to be straight. A bent bar, a pedal and a crank are levers, with the arms measured perpendicular to the force.</li><li>It does not make the load lighter. It only changes how large a push is needed to hold it.</li></ul></div>",
    "wheel": "<div class=\"bw-section-label\">The wheel and axle: a lever that goes round</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">A wheel and axle is a lever with its pivot at the centre, and an arm that never runs out of travel.</div></div><div class=\"callout-box-body\">The effort acts at the rim (radius R) and the load at the axle (radius r). The ideal advantage is R ÷ r, with the same trade as every other machine: the rim travels farther than the axle by that ratio. A crank on a winch, a handwheel on a valve and a fat screwdriver handle are the same device.</div></div>\n<div class=\"pr-formula\">IMA = R ÷ r   (radius where the effort acts ÷ radius where the load acts)<br>Torque = force × radius<br>Speed ratio between linked wheels = diameter ratio (inverse for the shafts)</div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-engine\"></i> Torque and speed: wheels linked by belts, chains and gears</div><div class=\"info-block-body\">Two wheels linked by a belt, a chain or a gear mesh behave as a wheel and axle: the larger wheel has more torque and less speed, and the product (power) stays the same, less the losses.</div><ul class=\"info-block-tips\"><li>Motor sheave 100 mm at 1750 rpm driving a 250 mm sheave: driven speed = 1750 × 100 ÷ 250 = 700 rpm, and torque is 2.5 times higher, less belt losses.</li><li>Belt speed = π × diameter × rpm. For the same example: π × 0.100 × 1750 ÷ 60 = 9.2 m/s.</li><li>Power (W) = torque (N·m) × angular speed (rad/s), and angular speed = rpm × 2π ÷ 60. A shortcut: power (kW) = torque (N·m) × rpm ÷ 9549.</li><li>See <a href=\"builtwright_power_transmission_v1.html#overview\">Power Transmission</a> and <a href=\"builtwright_gearboxes_v1.html#gears\">Gearboxes</a> for the real thing.</li></ul></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a hand winch</div><div class=\"pr-ex-given\">A winch has a crank handle with a 0.30 m radius and a drum with a 0.10 m radius. How large a load can a 150 N hand turn on the crank lift, ignoring friction? How far must the crank travel to raise the load 1 m?</div><ol class=\"pr-ex-steps\"><li>IMA = 0.30 ÷ 0.10 = 3.</li><li>Ideal load = 150 × 3 = 450 N (about 46 kg).</li><li>Handle travel for 1 m of lift = 3 × 1 m = 3 m, which is a bit under 1.6 turns of the crank.</li></ol><div class=\"pr-ex-answer\">About 450 N, or 46 kg. Winches with larger loads add a gear reduction between the crank and the drum, which is a second wheel and axle in series.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-wheel\"></i> Large wheels roll more easily</div><div class=\"info-block-body\">A wheel climbing a step needs a horizontal force at the axle of W × √(2Rh − h²) ÷ (R − h), where R is the wheel radius and h is the step height. The bigger the wheel, the smaller the force.</div><ul class=\"info-block-tips\"><li>A 1000 N cart on 50 mm radius wheels, over a 10 mm step: F = 1000 × √(2×50×10 − 100) ÷ 40 = 750 N.</li><li>The same cart on 100 mm radius wheels: F = 1000 × √(2×100×10 − 100) ÷ 90 = 484 N.</li><li>That is why shop carts, hoist trolleys and wheeled equipment that has to cross rough floors and rails use large wheels, and why small hard casters stall on a joint in the floor.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-rotate-clockwise-2\"></i> The capstan: friction as a machine</div><div class=\"info-block-body\">Wrap a rope round a fixed drum and the force needed to hold the free end falls exponentially with each turn. The ratio of tensions is e raised to the power μ × θ, where μ is the friction coefficient and θ is the wrap angle in radians (one full turn is 6.28).</div><ul class=\"info-block-tips\"><li>Three turns on a bollard with μ = 0.3: θ = 18.85, the ratio is e^5.65, about 285. A pull of 3.5 N on the free end holds a 1000 N load.</li><li>Conveyor drive pulleys and belt drives depend on the same equation. A lagged pulley has higher μ, and a wet or contaminated one has lower μ, so the same belt tension that worked in the dry slips in the wet. See <a href=\"builtwright_conveyors_v1.html#tension\">Conveyors</a>.</li><li>A rope that slides slowly round a bollard generates heat from friction. A rope held in place by the same friction wears at that point.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-puzzle\"></i> The wheel as a bearing surface</div><div class=\"info-block-body\">Replacing sliding with rolling is the oldest way to reduce friction. A wheel on an axle still has sliding between the axle and the wheel hub, so the sliding is moved into a smaller radius, where it does less damage. A rolling bearing moves the sliding away altogether.</div><ul class=\"info-block-tips\"><li>A plain bearing turns the sliding surface into a lubricated film. See <a href=\"builtwright_bearing_module_v1.html#types\">Bearings</a>.</li><li>A seized wheel on a conveyor idler drags the belt across it and wears a flat in minutes. The wheel has stopped being a wheel.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: long handle, short travel</strong>When a valve will not move by hand, a handwheel with a longer diameter or a gear operator is a wheel and axle problem. A cheater on a valve handwheel multiplies the torque on a stem built for hand loads, and bends stems, breaks yokes and strips gearing. If the valve needs more than hand force, find out why it is stiff: dry packing, a bent stem, or the wrong valve for the duty.</div></div>",
    "pulley": "<div class=\"bw-section-label\">Pulleys and block and tackle</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Count the rope segments that hold up the moving block. That number is the advantage.</div></div><div class=\"callout-box-body\">A single fixed pulley only changes the direction of the pull. Put the pulley on the load, with the rope fixed above, and two segments of rope share the weight, so the pull is half. Add more sheaves and the load is shared by more segments: with n supporting ropes the pull is W ÷ n, and the free end must be pulled n times as far as the load is lifted.</div></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 560 246\" role=\"img\" aria-label=\"Three pulley arrangements: a fixed sheave, one movable sheave, and a four part block and tackle\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"20\" y1=\"26\" x2=\"140\" y2=\"26\"/><line class=\"ln\" x1=\"30\" y1=\"26\" x2=\"20\" y2=\"18\"/><line class=\"ln\" x1=\"40\" y1=\"26\" x2=\"30\" y2=\"18\"/><line class=\"ln\" x1=\"50\" y1=\"26\" x2=\"40\" y2=\"18\"/><line class=\"ln\" x1=\"60\" y1=\"26\" x2=\"50\" y2=\"18\"/><line class=\"ln\" x1=\"70\" y1=\"26\" x2=\"60\" y2=\"18\"/><line class=\"ln\" x1=\"80\" y1=\"26\" x2=\"70\" y2=\"18\"/><line class=\"ln\" x1=\"90\" y1=\"26\" x2=\"80\" y2=\"18\"/><line class=\"ln\" x1=\"100\" y1=\"26\" x2=\"90\" y2=\"18\"/><line class=\"ln\" x1=\"110\" y1=\"26\" x2=\"100\" y2=\"18\"/><line class=\"ln\" x1=\"120\" y1=\"26\" x2=\"110\" y2=\"18\"/><line class=\"ln\" x1=\"130\" y1=\"26\" x2=\"120\" y2=\"18\"/><line class=\"ln\" x1=\"140\" y1=\"26\" x2=\"130\" y2=\"18\"/><line class=\"ln\" x1=\"80\" y1=\"26\" x2=\"80\" y2=\"40\"/><circle class=\"bs\" cx=\"80\" cy=\"54\" r=\"14\"/><circle class=\"dt\" cx=\"80\" cy=\"54\" r=\"2.5\"/><line class=\"gr\" x1=\"66\" y1=\"54\" x2=\"66\" y2=\"150\"/><rect class=\"bm\" x=\"46\" y=\"150\" width=\"40\" height=\"30\" rx=\"3\"/><text class=\"tb\" x=\"66\" y=\"170\" text-anchor=\"middle\">W</text><line class=\"gr\" x1=\"94\" y1=\"54\" x2=\"94\" y2=\"120\"/><line class=\"ar\" x1=\"94\" y1=\"120\" x2=\"94\" y2=\"166\"/><polygon class=\"arf\" points=\"94.0,170.0 90.9,162.6 97.1,162.6\"/><text class=\"tb\" x=\"112\" y=\"160\" text-anchor=\"start\">F</text><text class=\"ts\" x=\"80\" y=\"214\" text-anchor=\"middle\">fixed: n = 1</text><text class=\"ts\" x=\"80\" y=\"230\" text-anchor=\"middle\">changes direction</text><line class=\"ln\" x1=\"180\" y1=\"26\" x2=\"300\" y2=\"26\"/><line class=\"ln\" x1=\"190\" y1=\"26\" x2=\"180\" y2=\"18\"/><line class=\"ln\" x1=\"200\" y1=\"26\" x2=\"190\" y2=\"18\"/><line class=\"ln\" x1=\"210\" y1=\"26\" x2=\"200\" y2=\"18\"/><line class=\"ln\" x1=\"220\" y1=\"26\" x2=\"210\" y2=\"18\"/><line class=\"ln\" x1=\"230\" y1=\"26\" x2=\"220\" y2=\"18\"/><line class=\"ln\" x1=\"240\" y1=\"26\" x2=\"230\" y2=\"18\"/><line class=\"ln\" x1=\"250\" y1=\"26\" x2=\"240\" y2=\"18\"/><line class=\"ln\" x1=\"260\" y1=\"26\" x2=\"250\" y2=\"18\"/><line class=\"ln\" x1=\"270\" y1=\"26\" x2=\"260\" y2=\"18\"/><line class=\"ln\" x1=\"280\" y1=\"26\" x2=\"270\" y2=\"18\"/><line class=\"ln\" x1=\"290\" y1=\"26\" x2=\"280\" y2=\"18\"/><line class=\"ln\" x1=\"300\" y1=\"26\" x2=\"290\" y2=\"18\"/><line class=\"gr\" x1=\"208\" y1=\"26\" x2=\"208\" y2=\"112\"/><circle class=\"bs\" cx=\"222\" cy=\"112\" r=\"14\"/><circle class=\"dt\" cx=\"222\" cy=\"112\" r=\"2.5\"/><line class=\"gr\" x1=\"236\" y1=\"112\" x2=\"236\" y2=\"60\"/><line class=\"ar\" x1=\"236\" y1=\"60\" x2=\"236\" y2=\"38\"/><polygon class=\"arf\" points=\"236.0,34.0 239.1,41.4 232.9,41.4\"/><text class=\"tb\" x=\"254\" y=\"50\" text-anchor=\"start\">F</text><line class=\"ln\" x1=\"222\" y1=\"126\" x2=\"222\" y2=\"150\"/><rect class=\"bm\" x=\"202\" y=\"150\" width=\"40\" height=\"30\" rx=\"3\"/><text class=\"tb\" x=\"222\" y=\"170\" text-anchor=\"middle\">W</text><text class=\"ts\" x=\"240\" y=\"214\" text-anchor=\"middle\">one movable sheave: n = 2</text><text class=\"ts\" x=\"240\" y=\"230\" text-anchor=\"middle\">effort = W ÷ 2</text><line class=\"ln\" x1=\"330\" y1=\"26\" x2=\"520\" y2=\"26\"/><line class=\"ln\" x1=\"340\" y1=\"26\" x2=\"330\" y2=\"18\"/><line class=\"ln\" x1=\"350\" y1=\"26\" x2=\"340\" y2=\"18\"/><line class=\"ln\" x1=\"360\" y1=\"26\" x2=\"350\" y2=\"18\"/><line class=\"ln\" x1=\"370\" y1=\"26\" x2=\"360\" y2=\"18\"/><line class=\"ln\" x1=\"380\" y1=\"26\" x2=\"370\" y2=\"18\"/><line class=\"ln\" x1=\"390\" y1=\"26\" x2=\"380\" y2=\"18\"/><line class=\"ln\" x1=\"400\" y1=\"26\" x2=\"390\" y2=\"18\"/><line class=\"ln\" x1=\"410\" y1=\"26\" x2=\"400\" y2=\"18\"/><line class=\"ln\" x1=\"420\" y1=\"26\" x2=\"410\" y2=\"18\"/><line class=\"ln\" x1=\"430\" y1=\"26\" x2=\"420\" y2=\"18\"/><line class=\"ln\" x1=\"440\" y1=\"26\" x2=\"430\" y2=\"18\"/><line class=\"ln\" x1=\"450\" y1=\"26\" x2=\"440\" y2=\"18\"/><line class=\"ln\" x1=\"460\" y1=\"26\" x2=\"450\" y2=\"18\"/><line class=\"ln\" x1=\"470\" y1=\"26\" x2=\"460\" y2=\"18\"/><line class=\"ln\" x1=\"480\" y1=\"26\" x2=\"470\" y2=\"18\"/><line class=\"ln\" x1=\"490\" y1=\"26\" x2=\"480\" y2=\"18\"/><line class=\"ln\" x1=\"500\" y1=\"26\" x2=\"490\" y2=\"18\"/><line class=\"ln\" x1=\"510\" y1=\"26\" x2=\"500\" y2=\"18\"/><line class=\"ln\" x1=\"520\" y1=\"26\" x2=\"510\" y2=\"18\"/><rect class=\"bs\" x=\"340\" y=\"40\" width=\"160\" height=\"8\" rx=\"3\"/><circle class=\"bs\" cx=\"420\" cy=\"62\" r=\"14\"/><circle class=\"dt\" cx=\"420\" cy=\"62\" r=\"2.5\"/><circle class=\"bs\" cx=\"484\" cy=\"62\" r=\"14\"/><circle class=\"dt\" cx=\"484\" cy=\"62\" r=\"2.5\"/><rect class=\"bs\" x=\"340\" y=\"124\" width=\"120\" height=\"8\" rx=\"3\"/><circle class=\"bs\" cx=\"388\" cy=\"112\" r=\"14\"/><circle class=\"dt\" cx=\"388\" cy=\"112\" r=\"2.5\"/><circle class=\"bs\" cx=\"452\" cy=\"112\" r=\"14\"/><circle class=\"dt\" cx=\"452\" cy=\"112\" r=\"2.5\"/><line class=\"gr\" x1=\"372\" y1=\"48\" x2=\"372\" y2=\"112\"/><line class=\"gr\" x1=\"404\" y1=\"62\" x2=\"404\" y2=\"112\"/><line class=\"gr\" x1=\"436\" y1=\"62\" x2=\"436\" y2=\"112\"/><line class=\"gr\" x1=\"468\" y1=\"62\" x2=\"468\" y2=\"112\"/><line class=\"gr\" x1=\"500\" y1=\"62\" x2=\"500\" y2=\"96\"/><line class=\"ar\" x1=\"500\" y1=\"96\" x2=\"500\" y2=\"136\"/><polygon class=\"arf\" points=\"500.0,140.0 496.9,132.6 503.1,132.6\"/><text class=\"tb\" x=\"512\" y=\"136\" text-anchor=\"start\">F</text><line class=\"ln\" x1=\"400\" y1=\"132\" x2=\"400\" y2=\"152\"/><rect class=\"bm\" x=\"380\" y=\"152\" width=\"40\" height=\"30\" rx=\"3\"/><text class=\"tb\" x=\"400\" y=\"172\" text-anchor=\"middle\">W</text><text class=\"ts\" x=\"430\" y=\"214\" text-anchor=\"middle\">four supporting ropes: n = 4</text><text class=\"ts\" x=\"430\" y=\"230\" text-anchor=\"middle\">effort = W ÷ 4, rope pulled = 4 × lift</text></svg><figcaption>Three arrangements. The load is shared by the rope segments that hang from the moving block, drawn green. The pull F is the free end.</figcaption></figure>\n<div class=\"pr-formula\">Ideal pull   F = W ÷ n   (n = ropes supporting the moving block)<br>Rope pulled = n × distance lifted<br>Real pull   F = W ÷ (n × efficiency),  efficiency ≈ (per-sheave efficiency) ^ (number of sheaves)</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a four part tackle</div><div class=\"pr-ex-given\">A four part tackle with four sheaves lifts 2000 N. Allow 5 percent loss per sheave. What pull is needed, and how much rope must be hauled to raise the load 1.5 m?</div><ol class=\"pr-ex-steps\"><li>Ideal pull = 2000 ÷ 4 = 500 N.</li><li>Efficiency ≈ 0.95⁴ = 0.81.</li><li>Real pull = 500 ÷ 0.81 = 616 N.</li><li>Rope hauled = 4 × 1.5 = 6 m.</li></ol><div class=\"pr-ex-answer\">About 620 N of pull and 6 m of rope. The 5 percent loss at each sheave cost 120 N, about a fifth of the pull. Roller bearing sheaves lose nearer 2 percent each.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-anchor\"></i> What the support carries</div><div class=\"info-block-body\">A tackle moves force around but does not remove it. The beam or lug the top block hangs from carries the load plus the pull on the free end, and a fixed pulley with a rope on each side doubles the load on its support.</div><ul class=\"info-block-tips\"><li>A single fixed pulley lifting W by pulling straight down puts about 2 × W on its support.</li><li>A 4 part tackle lifting 2000 N with a 620 N pull puts about 2620 N on the overhead anchor, plus the weight of the blocks.</li><li>Check the anchor, not just the rope. Many overload failures are of the beam, the lug or the shackle, and not of the rope that was being worried over.</li></ul></div>\n<figure class=\"pr-fig\"><svg class=\"pr-svg\" viewBox=\"0 0 440 266\" role=\"img\" aria-label=\"A load hung from a two leg sling, with the angle measured from the horizontal\" xmlns=\"http://www.w3.org/2000/svg\"><line class=\"ln\" x1=\"60\" y1=\"30\" x2=\"380\" y2=\"30\"/><circle class=\"bs\" cx=\"220\" cy=\"40\" r=\"8\"/><line class=\"ln\" x1=\"220\" y1=\"48\" x2=\"220\" y2=\"62\"/><line class=\"gr\" x1=\"220\" y1=\"62\" x2=\"90\" y2=\"180\"/><line class=\"gr\" x1=\"220\" y1=\"62\" x2=\"350\" y2=\"180\"/><rect class=\"bm\" x=\"80\" y=\"180\" width=\"280\" height=\"44\" rx=\"3\"/><text class=\"tb\" x=\"220\" y=\"208\" text-anchor=\"middle\">load W</text><line class=\"lt\" x1=\"40\" y1=\"180\" x2=\"400\" y2=\"180\"/><path class=\"ln\" d=\"M 130 180 A 40 40 0 0 0 119.6 153.1\"/><text class=\"tb\" x=\"142\" y=\"168\" text-anchor=\"middle\">θ</text><text class=\"ts\" x=\"300\" y=\"130\" text-anchor=\"start\">tension T each leg</text><text class=\"ts\" x=\"220\" y=\"252\" text-anchor=\"middle\">T = W ÷ (2 × sin θ)   for two legs, θ from the horizontal</text></svg><figcaption>A two leg sling. The legs have to hold the load up and also hold the load together against the sideways pull, and the shallower the legs, the bigger that sideways pull.</figcaption></figure>\n<table class=\"ref-table\"><tr><th>Angle from the horizontal</th><th>Tension in each leg of a two leg sling</th><th>Compared with a straight vertical lift</th></tr><tr><td>90° (straight up)</td><td>0.50 × W</td><td>Each leg takes half</td></tr><tr><td>75°</td><td>0.52 × W</td><td>About the same</td></tr><tr><td>60°</td><td>0.58 × W</td><td>15% more than a straight lift</td></tr><tr><td>45°</td><td>0.71 × W</td><td>41% more</td></tr><tr><td>30°</td><td>1.00 × W</td><td>Each leg carries the whole load</td></tr><tr><td>15°</td><td>1.93 × W</td><td>Nearly double the weight, in each leg</td></tr></table>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-alert-triangle\"></i> Sling angles are a lever problem</div><div class=\"info-block-body\">The force along each leg is W ÷ (2 × sin θ). As the legs flatten, sin θ falls, so the tension climbs fast. The sling is rated for tension at a given angle, so a sling that is fine in a straight lift can be overloaded just by spreading its legs.</div><ul class=\"info-block-tips\"><li>Most rigging practice avoids angles below 45 degrees, and treats 30 degrees as a hard floor. The lift plan and the rigger decide, and the sling tag and chart give the rating at each angle.</li><li>For a sling with three or four legs, uneven length and stiffness often mean two legs carry most of the load. Unless the lift plan says otherwise, assume two.</li><li>The load has to hang below the hook. A centre of gravity off to one side tips the load as soon as it leaves the ground.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-building-warehouse\"></i> Where pulleys turn up</div><ul class=\"info-block-tips\"><li>Chain blocks and hoists: the load chain runs over a pocket wheel, geared down from the hand chain wheel (a wheel and axle) and sometimes also reeved through a moving block.</li><li>Crane hook blocks use a multi-part reeving so the drum and motor see a fraction of the hook load, at the cost of more rope drawn for each metre of lift.</li><li>Gravity take-up on a conveyor: the weight hangs from a movable pulley, so the belt on each side carries half the weight. A 400 kg take-up (including the pulley) puts about 1960 N on each side of the belt. See <a href=\"builtwright_conveyors_v1.html#tension\">Conveyors</a>.</li><li>Sheave diameter against rope diameter matters for rope life. The standard for the equipment sets the minimum ratio, commonly in the region of 18 to 20 times the rope diameter for wire rope hoists. Check the standard.</li></ul></div>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: a tackle gives you the ratio on paper and takes it back in the sheaves</strong>Seized or dry sheaves, rope that is too stiff for the sheave diameter, and a fall line that rubs the frame all raise the pull above the ideal figure. If a 4 part tackle needs more than about a third more pull than the arithmetic, the tackle is telling you something is wrong with it. Check the sheaves turn by hand.</div></div>",
    "compound": "<div class=\"bw-section-label\">Compound machines: simple machines in series</div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-bulb callout-box-icon\"></i><div class=\"callout-box-title\">Link machines end to end and the advantages multiply. So do the losses.</div></div><div class=\"callout-box-body\">A screw jack worked by a long handle is a lever driving a screw. A winch is a crank (wheel and axle) driving a gear train (more wheels and axles). A hydraulic jack is a lever driving a piston whose area is much smaller than the lifting piston. In each, the overall advantage is the product of the stages, the overall distance trade is the product of the stage ratios, and the overall efficiency is the product of the stage efficiencies.</div></div>\n<div class=\"pr-formula\">Overall MA = MA₁ × MA₂ × MA₃ ...<br>Overall efficiency = η₁ × η₂ × η₃ ...<br>Input distance = output distance × overall MA</div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: a screw jack worked by a lever</div><div class=\"pr-ex-given\">A jack has a 0.50 m handle, a screw lead of 6 mm and a 25 percent efficient thread. A 200 N push is applied at the end of the handle. What load can it lift?</div><ol class=\"pr-ex-steps\"><li>Ideal advantage = 2π × 500 ÷ 6 = 524.</li><li>Ideal load = 200 × 524 = 105 kN.</li><li>Actual load = 105 × 0.25 = 26 kN, about 2.7 tonnes-force.</li></ol><div class=\"pr-ex-answer\">About 26 kN. The handle has to travel 524 mm for each millimetre of lift (ideal), so lifting 100 mm takes about 52 m of hand travel. It lifts a lot and takes a long time.</div></div>\n<div class=\"pr-ex\"><div class=\"pr-ex-title\"><i class=\"ti ti-pencil\"></i> Worked example: wire to water</div><div class=\"pr-ex-given\">A pump system has a motor at 93 percent, a belt at 97 percent, a pump at 70 percent and a throttling and piping loss that leaves 80 percent of the pump's output as useful flow energy. What fraction of the electrical energy reaches the process?</div><ol class=\"pr-ex-steps\"><li>0.93 × 0.97 = 0.902.</li><li>0.902 × 0.70 = 0.632.</li><li>0.632 × 0.80 = 0.505.</li></ol><div class=\"pr-ex-answer\">About 50 percent. Each stage is respectable on its own. The chain is not. This is why losses at any stage matter to the whole machine, and why the belt that has slipped and the valve that is half closed are both on the energy bill.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-lock\"></i> Self-locking and efficiency</div><div class=\"info-block-body\">A machine that cannot be driven backwards (a load cannot turn the screw or the worm) is called self-locking. It happens only when friction is high enough that the efficiency is below 50 percent. In other words, half or more of the work done going up is thrown away as heat, and that friction is what holds the load.</div><ul class=\"info-block-tips\"><li>Worm drives and sliding screws with a small lead angle are self-locking. Spur and helical gears, ball screws and chains are not.</li><li>Self-locking is friction. Vibration, shock and wear can let a self-locking machine creep. A hoist that depends only on a worm to hold a load, with no brake, is not a safe design.</li><li>Efficiency changes with temperature, speed and wear, so a drive that held when new may not hold after a lot of running.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-alert-hexagon\"></i> The weakest part carries the multiplied force</div><div class=\"info-block-body\">Every stage after the multiplication carries the multiplied load. A strong handle on a weak thread simply breaks the thread. When a compound machine is overloaded, it fails at its weakest link, which is seldom the part nearest the hand.</div><ul class=\"info-block-tips\"><li>A torque multiplier turns a modest input into a very large output torque. The same torque acts as a reaction on its case, so the reaction arm has to bear on something solid. If it slips, the whole tool spins.</li><li>A pulley system overloaded at the beam, a jack overloaded at the base plate, and a winch overloaded at the drum anchor fail at a part that was never expected to carry the multiplied load.</li></ul></div>\n<table class=\"ref-table\"><tr><th>Machine</th><th>Stages in series</th><th>What the overall ratio is</th></tr><tr><td>Bottle jack</td><td>Lever, then hydraulic piston ratio</td><td>Handle ratio × (large piston area ÷ small piston area)</td></tr><tr><td>Hand winch</td><td>Crank to drum, plus a gear reduction</td><td>Crank radius ÷ drum radius × gear ratio</td></tr><tr><td>Bench vise</td><td>Handle, then screw</td><td>2π × handle radius ÷ lead</td></tr><tr><td>Wheelbarrow</td><td>Lever, then wheel</td><td>Handle length ÷ load distance (the wheel only cuts friction)</td></tr><tr><td>Torque multiplier</td><td>Planetary gear stages</td><td>Product of the stage ratios, less losses (commonly 4:1 to 70:1)</td></tr><tr><td>Log splitter</td><td>Hydraulic cylinder, then wedge</td><td>Ram force × wedge length ÷ thickness, less friction</td></tr></table>\n<div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: check the efficiency by feeling for heat</strong>A gearbox, screw or worm drive at the same load and speed that has gradually become hotter has become less efficient. Take a surface temperature reading when it is healthy and record it. A rise of 10 degrees at the same duty is a stage losing more energy, and a place for the lubricant or alignment check to start. See <a href=\"builtwright_gearboxes_v1.html#wear\">Gearboxes</a>.</div></div>",
    "calc": "<div class=\"bw-section-label\">Calculators: try the numbers</div>\n<p class=\"pr-p\">Change any value and the answer updates. These use the ideal formulas from the tabs, with the friction terms shown where they matter. They are for learning and for sanity checks, and a drawing, a rating plate or a lift plan governs the real job.</p>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-arrows-diff\"></i> Lever</div><div class=\"calc-row\"><div><label>Load (N)</label><input type=\"number\" step=\"any\" id=\"lv_load\" value=\"5000\" oninput=\"calcLever()\"></div><div><label>Load arm (mm)</label><input type=\"number\" step=\"any\" id=\"lv_la\" value=\"100\" oninput=\"calcLever()\"></div></div><div class=\"calc-row\"><div><label>Effort arm (mm)</label><input type=\"number\" step=\"any\" id=\"lv_ea\" value=\"1000\" oninput=\"calcLever()\"></div></div><div class=\"calc-out\" id=\"lv_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-triangle\"></i> Ramp</div><div class=\"calc-row\"><div><label>Load mass (kg)</label><input type=\"number\" step=\"any\" id=\"rp_m\" value=\"400\" oninput=\"calcRamp()\"></div><div><label>Ramp length (m)</label><input type=\"number\" step=\"any\" id=\"rp_l\" value=\"2\" oninput=\"calcRamp()\"></div></div><div class=\"calc-row\"><div><label>Rise (m)</label><input type=\"number\" step=\"any\" id=\"rp_h\" value=\"0.5\" oninput=\"calcRamp()\"></div><div><label>Friction or rolling coefficient</label><input type=\"number\" step=\"any\" id=\"rp_mu\" value=\"0.03\" oninput=\"calcRamp()\"></div></div><div class=\"calc-out\" id=\"rp_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-bolt\"></i> Screw jack or vise</div><div class=\"calc-row\"><div><label>Handle radius (mm)</label><input type=\"number\" step=\"any\" id=\"sj_r\" value=\"500\" oninput=\"calcScrew()\"></div><div><label>Screw lead (mm)</label><input type=\"number\" step=\"any\" id=\"sj_lead\" value=\"6\" oninput=\"calcScrew()\"></div></div><div class=\"calc-row\"><div><label>Effort (N)</label><input type=\"number\" step=\"any\" id=\"sj_f\" value=\"200\" oninput=\"calcScrew()\"></div><div><label>Screw efficiency (%)</label><input type=\"number\" step=\"any\" id=\"sj_e\" value=\"25\" oninput=\"calcScrew()\"></div></div><div class=\"calc-out\" id=\"sj_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-grip-vertical\"></i> Block and tackle</div><div class=\"calc-row\"><div><label>Load mass (kg)</label><input type=\"number\" step=\"any\" id=\"tk_m\" value=\"200\" oninput=\"calcTackle()\"></div><div><label>Ropes at the moving block</label><input type=\"number\" step=\"any\" id=\"tk_n\" value=\"4\" oninput=\"calcTackle()\"></div></div><div class=\"calc-row\"><div><label>Number of sheaves</label><input type=\"number\" step=\"any\" id=\"tk_s\" value=\"4\" oninput=\"calcTackle()\"></div><div><label>Efficiency per sheave (%)</label><input type=\"number\" step=\"any\" id=\"tk_e\" value=\"95\" oninput=\"calcTackle()\"></div></div><div class=\"calc-out\" id=\"tk_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-angle\"></i> Two leg sling</div><div class=\"calc-row\"><div><label>Load mass (kg)</label><input type=\"number\" step=\"any\" id=\"sl_m\" value=\"1000\" oninput=\"calcSling()\"></div><div><label>Leg angle from the horizontal (°)</label><input type=\"number\" step=\"any\" id=\"sl_a\" value=\"60\" oninput=\"calcSling()\"></div></div><div class=\"calc-out\" id=\"sl_out\"></div></div>\n<div class=\"calc\"><div class=\"calc-title\"><i class=\"ti ti-tool\"></i> Torque wrench with an extension</div><div class=\"calc-row\"><div><label>Torque wanted at the fastener (N·m)</label><input type=\"number\" step=\"any\" id=\"tw_t\" value=\"200\" oninput=\"calcWrench()\"></div><div><label>Wrench length, drive to grip (mm)</label><input type=\"number\" step=\"any\" id=\"tw_l\" value=\"400\" oninput=\"calcWrench()\"></div></div><div class=\"calc-row\"><div><label>Extension (mm); positive away from the handle, negative back toward it</label><input type=\"number\" step=\"any\" id=\"tw_e\" value=\"50\" oninput=\"calcWrench()\"></div></div><div class=\"calc-out\" id=\"tw_out\"></div></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Safety: the principles that hurt people</div>\n<div class=\"callout-box red\"><div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">A machine that multiplies force also multiplies what happens when it lets go.</div></div><div class=\"callout-box-body\">Everything on this page is about trading force for distance. The same trade works in reverse at the moment of failure: a bar, a tackle, a jack or a wedge that releases lets go of a large force through a short distance very fast. The principle tells you how big the force is. The procedure for the job, the rating on the equipment and the lift plan tell you whether it is safe.</div></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-lock\"></i> Stored energy in these machines</div><ul class=\"info-block-tips\"><li>A load on a jack, a tackle or a ramp has energy equal to its weight times the height it could fall. Cribbing, stands or blocks take the load before anyone works under it. A jack is for lifting, and does not hold.</li><li>A torque multiplier, a wrench, a pry bar and a cheater bar store energy in the bending of the tool and release it if something slips. Stand clear of the line of the bar, and keep a hand out of the pinch.</li><li>Tapers and wedges hold a large radial force. Oil injection and hydraulic removal release it in a moment.</li><li>Springs, compressed in a clutch pack, a brake or a spring-return actuator, are machines too. See <a href=\"builtwright_clutches_brakes_v1.html#holding\">Holding Brakes</a> and <a href=\"builtwright_process_valves_v1.html#actuators\">Actuators</a>.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-weight\"></i> Lifting and rigging</div><ul class=\"info-block-tips\"><li>Weights from a nameplate or a drawing, not from a guess. A load that is twice as heavy as thought is twice as dangerous and gives no warning.</li><li>Rated equipment only: slings, shackles, hooks, hoists and beams all have working load limits, and the lowest of them is the limit of the lift.</li><li>Sling angle and the position of the centre of gravity change the loads on every part of the rig. If the lift is not a simple one, a qualified rigger plans it.</li><li>Nobody stands under a suspended load.</li></ul></div>\n<div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-tool\"></i> Hand tools and levers</div><ul class=\"info-block-tips\"><li>Use the tool for the job: a breaker bar rated for the socket, a torque wrench for a torque value, a pry bar sized for the load.</li><li>A pry bar or wrench can slip and release the hand. Position the body so that a slip does not carry the hand into a pinch or an edge.</li><li>No cheater bars on fasteners, valves or handwheels unless the manufacturer allows it. Find out why the job is stiff.</li></ul></div>\n<div class=\"callout-box\"><div class=\"callout-box-header\"><i class=\"ti ti-info-circle callout-box-icon\"></i><div class=\"callout-box-title\">This module teaches the principles. It does not replace a lift plan, lockout, a manufacturer's manual or a qualified rigger.</div></div><div class=\"callout-box-body\">The numbers here are for understanding and for checking that an answer is the right size. Real loads, ratings and procedures come from the equipment, the drawing and the site.</div></div>"
  },
  "title": "BuiltWright: Simple Machines and Leverage: Module 22",
  "preamble": null,
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_installation_v1.html#baseplate\">Installation: levelling wedges, jack bolts and shims</a><a href=\"builtwright_power_transmission_v1.html#overview\">Power Transmission: wheels linked by belts and chains</a><a href=\"builtwright_gearboxes_v1.html#gears\">Gearboxes: levers that rotate</a><a href=\"builtwright_hydraulics_v1.html#overview\">Hydraulics: the piston as a lever</a><a href=\"builtwright_conveyors_v1.html#tension\">Conveyors: take-up and the capstan effect</a><a href=\"builtwright_precision_measurement_v1.html#micrometer\">Measurement: the screw as a magnifier</a><a href=\"builtwright_reference_v1.html#torque\">Reference: torque values</a><a href=\"builtwright_safeguarding_v1.html#hazards\">Safeguarding: stored energy and pinch points</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;&middot;&nbsp; module 22 of series &nbsp;&middot;&nbsp; simple machines and leverage</div>",
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
    ".pr-fig { margin: 0.75rem 0 1.25rem 0; background: #242420; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 0.75rem; }",
    ".pr-fig figcaption { font-size: 12px; color: #888780; line-height: 1.5; margin-top: 0.4rem; }",
    ".pr-svg { display: block; width: 100%; height: auto; max-height: 360px; }",
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
