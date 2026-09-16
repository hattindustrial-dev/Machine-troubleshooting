(window.BW_DATA=window.BW_DATA||{}).pocketcards = [
  {
    "cls": "red",
    "title": "Before any guard comes off",
    "steps": [
      "Identify every energy source: electrical, pneumatic, hydraulic, gravity, springs, thermal, chemical, and the machine upstream and downstream.",
      "Isolate each one at its isolation point. A stop button, a VFD keypad, or an HMI is not an isolation.",
      "Lock and tag each point with your own lock. Group lockout if others are working.",
      "Release stored energy: vent air, bleed hydraulics to zero on the gauge, lower or block raised loads, discharge accumulators, block gravity take-ups.",
      "Verify: attempt a start from every start point, check the gauge reads zero, try to move the actuator by hand.",
      "Only then, the guard.",
      "Your lock stays on until your hands are out and the guard is back."
    ],
    "file": "builtwright_safeguarding_v1.html",
    "tab": "safety",
    "linkText": "module tab"
  },
  {
    "cls": "red",
    "title": "High pressure injection injury",
    "steps": [
      "A pinhole leak at 7 bar (100 psi) or more can inject fluid through skin. Hydraulic systems run at 100 to 300 bar.",
      "Never feel for a leak with a hand. Cardboard or paper on a stick.",
      "If fluid has gone under the skin, even a tiny puncture with little pain: this is a surgical emergency.",
      "Go to hospital immediately and say the words \"high pressure injection injury\". Bring the fluid SDS.",
      "Do not wait for it to hurt. Damage spreads for hours; delay is how fingers and hands are lost.",
      "Tell the triage nurse it needs a hand surgeon, not a bandage."
    ],
    "file": "builtwright_hydraulics_v1.html",
    "tab": "safety",
    "linkText": "module tab"
  },
  {
    "cls": "amber",
    "title": "Pump is not pumping: the first ten minutes",
    "steps": [
      "Suction side first. Tank level, suction valve open, strainer clean, no air leak at the suction, line not blocked.",
      "Rotation: arrow on the casing, checked at the coupling with the drive uncoupled.",
      "Primed and vented. A centrifugal pump full of air moves nothing.",
      "Discharge valve open, and the check valve free.",
      "Gauges: suction and discharge. Pressure but no flow is a closed or blocked discharge. Neither is suction or rotation.",
      "If the pump has to be opened after all that, read the impeller: cavitation pitting, wear, clogging."
    ],
    "file": "builtwright_pumps_combined_v1.html",
    "tab": "diagnose",
    "linkText": "module tab"
  },
  {
    "cls": "amber",
    "title": "Motor tripping: the handoff to the electrician",
    "steps": [
      "Amps on all three phases, at load, and the nameplate FLA.",
      "Temperature at both bearing housings and the frame, by infrared, and the ambient.",
      "Uncoupled run: does it trip with no load. Amps uncoupled.",
      "Instant-off test: switch off and listen. Noise that stops instantly is electrical; noise that coasts down is mechanical.",
      "Soft foot and alignment last checked, and by whom.",
      "Shaft turned by hand: free, rough, or tight.",
      "Write it down. Hand it over. The electrician starts from your numbers, not from zero."
    ],
    "file": "builtwright_motors_v1.html",
    "tab": "handoff",
    "linkText": "module tab"
  },
  {
    "cls": "green",
    "title": "Grease a bearing by the number",
    "steps": [
      "Quantity in grams = 0.005 × bearing OD (mm) × width (mm).",
      "Know your gun: weigh ten strokes once, divide by ten, paint the grams per stroke on the gun.",
      "Relief plug out before the first stroke.",
      "Pump slowly, the calculated strokes, with the machine running if the procedure allows.",
      "Leave the relief plug out for a shift so excess purges, then replace it.",
      "Same grease as last time. If unknown, purge completely and start clean; never mix thickeners.",
      "Record: date, grease, strokes, temperature after."
    ],
    "file": "builtwright_lubrication_v1.html",
    "tab": "application",
    "linkText": "module tab"
  },
  {
    "cls": "green",
    "title": "Alignment: before the first shim is cut",
    "steps": [
      "Soft foot on both machines, every foot, under 0.05 mm (0.002 in), clean pads.",
      "Bracket sag measured on a straight bar and written down.",
      "Rim readings valid: top plus bottom equals left plus right within a few hundredths.",
      "Two sets of readings that agree.",
      "Readings taken with piping disconnected, then connected. Any change over 0.05 mm is pipe strain; fix the pipe.",
      "Thermal growth offset written on the sheet if the machine runs warm.",
      "Tolerance for the speed from the reference table. Then correct."
    ],
    "file": "builtwright_coupling_alignment_v1.html",
    "tab": "troubleshoot",
    "linkText": "module tab"
  },
  {
    "cls": "green",
    "title": "The commissioning baseline",
    "steps": [
      "Vibration at every bearing, three directions, velocity in mm/s, with the reading position marked on the machine.",
      "Temperature at every bearing and the motor frame, and the ambient.",
      "Motor amps, all three phases, at normal load.",
      "Alignment readings, hot and cold.",
      "Level readings on the baseplate.",
      "Lubricant, quantity, and date.",
      "Discharge and suction pressures, or the equivalent for the machine.",
      "Filed with the equipment record. This is the birth certificate of the machine."
    ],
    "file": "builtwright_installation_v1.html",
    "tab": "checklist",
    "linkText": "module tab"
  },
  {
    "cls": "amber",
    "title": "Reading a failed bearing in two minutes",
    "steps": [
      "Do not clean it. Look at it as it came out.",
      "Fatigue spalling on the load zone: normal end of life, or overload, or misalignment if off centre.",
      "Discoloured (straw, blue): ran hot. Lubrication or overload.",
      "Dents at ball spacing: hammered on. Installation.",
      "Fluting (washboard on the race): electrical current. VFD.",
      "Rust, water marks, pitting: contamination.",
      "Smearing, scuffing: lubrication failure or skidding.",
      "Fretting (red dust) on the OD or bore: loose fit.",
      "Bag it, label it, box it with the work order number. A month on the shelf."
    ],
    "file": "builtwright_bearing_module_v1.html",
    "tab": "diagnose",
    "linkText": "module tab"
  },
  {
    "cls": "red",
    "title": "Conveyor: before you touch the belt",
    "steps": [
      "Lock out the drive. Verify with a start attempt from every start point, including the sequence from the downstream conveyor.",
      "Gravity take-up blocked, pinned, or chained. It is stored energy with the motor off.",
      "Inclined belt: empty it or block it against runback. The backstop is not a lockout.",
      "Product above the work position cleared.",
      "Hands never on a moving belt. Tracking is done at the idler frame bolts from outside the guard, or not at all.",
      "Jams are cleared locked out. No exceptions."
    ],
    "file": "builtwright_conveyors_v1.html",
    "tab": "safety",
    "linkText": "module tab"
  },
  {
    "cls": "amber",
    "title": "Screw compressor high temperature trip",
    "steps": [
      "Let it cool. Lock out at the disconnect; the controller restarts on pressure.",
      "Cooler: blow out from the clean side with the fan shielded. Nine times out of ten this is it.",
      "Fan turning, room intake and exhaust clear, hot air not recirculating.",
      "Oil level, with the separator tank vented and at zero on its own gauge.",
      "Thermostatic valve if the oil is hot coming off the cooler.",
      "Inlet filter differential.",
      "If the airend rumbles under load after all that, oil analysis and plan an exchange."
    ],
    "file": "builtwright_compressors_v1.html",
    "tab": "troubleshoot",
    "linkText": "module tab"
  }
];
