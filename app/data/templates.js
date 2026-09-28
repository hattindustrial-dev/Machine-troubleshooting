(window.BW_DATA=window.BW_DATA||{}).templates = [
  {
    "key": "pump_train",
    "name": "Centrifugal pump train",
    "note": "Motor through coupling to an overhung pump on its own bearings, with a mechanical seal.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "alignment",
        "label": "Coupling"
      },
      {
        "type": "bearing",
        "label": "Pump drive end bearing"
      },
      {
        "type": "bearing",
        "label": "Pump non drive end bearing"
      },
      {
        "type": "pump",
        "label": "Pump"
      },
      {
        "type": "seal",
        "label": "Mechanical seal"
      },
      {
        "type": "lube",
        "label": "Bearing lubrication"
      }
    ]
  },
  {
    "key": "close_coupled_pump",
    "name": "Close coupled pump",
    "note": "No coupling and no separate bearing housing: the pump hangs on the motor shaft.",
    "parts": [
      {
        "type": "motor",
        "label": "Motor"
      },
      {
        "type": "pump",
        "label": "Pump"
      },
      {
        "type": "seal",
        "label": "Mechanical seal"
      },
      {
        "type": "bearing",
        "label": "Motor bearings"
      }
    ]
  },
  {
    "key": "pd_pump",
    "name": "Positive displacement pump",
    "note": "Gear, lobe or piston pump with a relief valve that is part of the machine, not an accessory.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "alignment",
        "label": "Coupling"
      },
      {
        "type": "gearbox",
        "label": "Reducer"
      },
      {
        "type": "pump",
        "label": "PD pump"
      },
      {
        "type": "seal",
        "label": "Shaft seal"
      },
      {
        "type": "valve",
        "label": "Relief valve"
      },
      {
        "type": "lube",
        "label": "Gear oil"
      }
    ]
  },
  {
    "key": "geared_drive",
    "name": "Geared drive",
    "note": "Motor into a reducer, output to the driven machine.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "alignment",
        "label": "Input coupling"
      },
      {
        "type": "gearbox",
        "label": "Reducer"
      },
      {
        "type": "lube",
        "label": "Gearbox oil"
      },
      {
        "type": "alignment",
        "label": "Output coupling"
      },
      {
        "type": "bearing",
        "label": "Output bearing"
      }
    ]
  },
  {
    "key": "belt_conveyor",
    "name": "Belt conveyor",
    "note": "Drive end through to the belt, take-up and the guarding that comes off for tracking work.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "gearbox",
        "label": "Reducer"
      },
      {
        "type": "powertrans",
        "label": "Drive chain"
      },
      {
        "type": "conveyor",
        "label": "Belt and pulleys"
      },
      {
        "type": "bearing",
        "label": "Pulley bearings"
      },
      {
        "type": "brake",
        "label": "Backstop"
      },
      {
        "type": "guard",
        "label": "Nip guards"
      }
    ]
  },
  {
    "key": "centrifugal_fan",
    "name": "Centrifugal fan",
    "note": "Belt driven fan on a pedestal, the arrangement most plant fans use.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "powertrans",
        "label": "V-belt drive"
      },
      {
        "type": "bearing",
        "label": "Fan drive end bearing"
      },
      {
        "type": "bearing",
        "label": "Fan non drive end bearing"
      },
      {
        "type": "fan",
        "label": "Fan wheel"
      },
      {
        "type": "guard",
        "label": "Belt guard"
      }
    ]
  },
  {
    "key": "screw_compressor",
    "name": "Rotary screw compressor",
    "note": "Airend, its oil system, and the air treatment downstream of it.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "alignment",
        "label": "Coupling"
      },
      {
        "type": "compressor",
        "label": "Airend"
      },
      {
        "type": "lube",
        "label": "Compressor oil"
      },
      {
        "type": "seal",
        "label": "Shaft seal"
      },
      {
        "type": "pneu",
        "label": "Discharge, dryer and drains"
      }
    ]
  },
  {
    "key": "recip_compressor",
    "name": "Reciprocating compressor",
    "note": "Belt driven recip with valves and an unloader.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "powertrans",
        "label": "V-belt drive"
      },
      {
        "type": "compressor",
        "label": "Compressor"
      },
      {
        "type": "valve",
        "label": "Suction and discharge valves"
      },
      {
        "type": "lube",
        "label": "Crankcase oil"
      },
      {
        "type": "pneu",
        "label": "Receiver and drains"
      },
      {
        "type": "guard",
        "label": "Flywheel guard"
      }
    ]
  },
  {
    "key": "hydraulic_unit",
    "name": "Hydraulic power unit",
    "note": "Power unit, control valves and the actuator they drive.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "alignment",
        "label": "Coupling"
      },
      {
        "type": "hydraulics",
        "label": "Power unit"
      },
      {
        "type": "valve",
        "label": "Directional valve"
      },
      {
        "type": "seal",
        "label": "Cylinder seals"
      },
      {
        "type": "lube",
        "label": "Hydraulic fluid"
      }
    ]
  },
  {
    "key": "pneumatic_station",
    "name": "Pneumatic actuator station",
    "note": "Air preparation, the valve that switches it, and what it moves.",
    "parts": [
      {
        "type": "pneu",
        "label": "Air preparation and valve"
      },
      {
        "type": "valve",
        "label": "Process valve"
      },
      {
        "type": "seal",
        "label": "Actuator seals"
      }
    ]
  },
  {
    "key": "control_valve",
    "name": "Control valve assembly",
    "note": "Valve, actuator and positioner as one maintained item.",
    "parts": [
      {
        "type": "valve",
        "label": "Control valve"
      },
      {
        "type": "pneu",
        "label": "Actuator and positioner"
      },
      {
        "type": "seal",
        "label": "Packing and seat"
      }
    ]
  },
  {
    "key": "braked_drive",
    "name": "Braked drive",
    "note": "Where a brake or clutch is part of the machine rather than an add-on.",
    "parts": [
      {
        "type": "motor",
        "label": "Drive motor"
      },
      {
        "type": "brake",
        "label": "Brake"
      },
      {
        "type": "alignment",
        "label": "Coupling"
      },
      {
        "type": "gearbox",
        "label": "Reducer"
      },
      {
        "type": "guard",
        "label": "Drive guard"
      }
    ]
  }
];
