(window.BW_DATA=window.BW_DATA||{}).components = {
  "_comment": "The facility layer vocabulary. Component keys match the component tags on hub routes, which is what lets the hub filter routes to a machine. Fields are the plant-specific numbers the brief keeps out of the universal modules: bearing numbers, seal plan, lubricant, tolerances, set pressures. Edit the field lists to match your plant; the keys are yours to choose, only the component keys are fixed by the hub.",
  "equipment": [
    {
      "key": "tag",
      "label": "Equipment number",
      "type": "text",
      "placeholder": "P-101A",
      "required": true
    },
    {
      "key": "name",
      "label": "Description",
      "type": "text",
      "placeholder": "Boiler feedwater pump A"
    },
    {
      "key": "area",
      "label": "Area or line",
      "type": "text",
      "placeholder": "Utilities"
    },
    {
      "key": "criticality",
      "label": "Criticality",
      "type": "select",
      "options": [
        "A: no spare",
        "B: spared",
        "C: run to failure"
      ]
    }
  ],
  "components": {
    "pump": {
      "label": "Pump",
      "icon": "ti-droplet",
      "fields": [
        {
          "key": "model",
          "label": "Make and model",
          "type": "text"
        },
        {
          "key": "impeller",
          "label": "Impeller diameter",
          "type": "text",
          "unit": "mm"
        },
        {
          "key": "duty",
          "label": "Design flow and head",
          "type": "text",
          "placeholder": "45 m3/h at 62 m"
        },
        {
          "key": "npshr",
          "label": "NPSH required at duty",
          "type": "text",
          "unit": "m"
        }
      ]
    },
    "bearing": {
      "label": "Bearings",
      "icon": "ti-circle-dot",
      "fields": [
        {
          "key": "de",
          "label": "Drive end bearing",
          "type": "text",
          "placeholder": "6309 C3"
        },
        {
          "key": "nde",
          "label": "Non drive end bearing",
          "type": "text",
          "placeholder": "6207 C3"
        },
        {
          "key": "fit",
          "label": "Shaft and housing fit",
          "type": "text",
          "placeholder": "k5 shaft, H7 housing"
        },
        {
          "key": "grease",
          "label": "Grease and quantity",
          "type": "text",
          "placeholder": "Mobilith SHC 220, 14 g"
        },
        {
          "key": "regrease",
          "label": "Regrease interval",
          "type": "text",
          "placeholder": "2000 h"
        }
      ]
    },
    "seal": {
      "label": "Seals",
      "icon": "ti-circle-square",
      "fields": [
        {
          "key": "type",
          "label": "Seal type",
          "type": "text",
          "placeholder": "Cartridge, single"
        },
        {
          "key": "plan",
          "label": "Flush plan",
          "type": "text",
          "placeholder": "API Plan 11"
        },
        {
          "key": "elastomer",
          "label": "Elastomer",
          "type": "text",
          "placeholder": "Viton"
        },
        {
          "key": "part",
          "label": "Part number",
          "type": "text"
        }
      ]
    },
    "alignment": {
      "label": "Coupling and alignment",
      "icon": "ti-arrows-join",
      "fields": [
        {
          "key": "coupling",
          "label": "Coupling make and size",
          "type": "text"
        },
        {
          "key": "tolerance",
          "label": "Alignment tolerance",
          "type": "text",
          "placeholder": "0.05 mm offset, 0.05 mm/100 angular"
        },
        {
          "key": "growth",
          "label": "Thermal growth offset",
          "type": "text",
          "placeholder": "0.08 mm up at the pump"
        }
      ]
    },
    "lube": {
      "label": "Lubrication",
      "icon": "ti-oil",
      "fields": [
        {
          "key": "lubricant",
          "label": "Lubricant",
          "type": "text",
          "placeholder": "ISO VG 68 turbine oil"
        },
        {
          "key": "capacity",
          "label": "Sump capacity",
          "type": "text",
          "unit": "L"
        },
        {
          "key": "interval",
          "label": "Change interval",
          "type": "text",
          "placeholder": "8000 h or on analysis"
        },
        {
          "key": "filter",
          "label": "Filter part",
          "type": "text"
        }
      ]
    },
    "motor": {
      "label": "Motor",
      "icon": "ti-engine",
      "fields": [
        {
          "key": "frame",
          "label": "Frame",
          "type": "text",
          "placeholder": "254T"
        },
        {
          "key": "rating",
          "label": "Rating and speed",
          "type": "text",
          "placeholder": "30 kW, 1780 rpm"
        },
        {
          "key": "fla",
          "label": "Full load amps",
          "type": "text",
          "unit": "A"
        },
        {
          "key": "bearings",
          "label": "Motor bearings",
          "type": "text"
        }
      ]
    },
    "gearbox": {
      "label": "Gearbox",
      "icon": "ti-settings",
      "fields": [
        {
          "key": "model",
          "label": "Make and model",
          "type": "text"
        },
        {
          "key": "ratio",
          "label": "Ratio",
          "type": "text"
        },
        {
          "key": "oil",
          "label": "Oil and capacity",
          "type": "text",
          "placeholder": "ISO VG 320, 12 L"
        },
        {
          "key": "backlash",
          "label": "Backlash specification",
          "type": "text"
        }
      ]
    },
    "powertrans": {
      "label": "Belts and chains",
      "icon": "ti-timeline",
      "fields": [
        {
          "key": "drive",
          "label": "Belt or chain size and count",
          "type": "text",
          "placeholder": "3 x SPB 2360"
        },
        {
          "key": "sheaves",
          "label": "Sheave or sprocket sizes",
          "type": "text"
        },
        {
          "key": "tension",
          "label": "Tension specification",
          "type": "text",
          "placeholder": "deflection 8 mm at 25 N"
        }
      ]
    },
    "pneu": {
      "label": "Pneumatics",
      "icon": "ti-wind",
      "fields": [
        {
          "key": "supply",
          "label": "Supply pressure",
          "type": "text",
          "unit": "bar"
        },
        {
          "key": "setpoint",
          "label": "Regulator setpoint",
          "type": "text",
          "unit": "bar"
        },
        {
          "key": "cylinder",
          "label": "Cylinder bore and stroke",
          "type": "text"
        },
        {
          "key": "valve",
          "label": "Valve model",
          "type": "text"
        }
      ]
    },
    "hydraulics": {
      "label": "Hydraulics",
      "icon": "ti-gauge",
      "fields": [
        {
          "key": "pressure",
          "label": "System pressure",
          "type": "text",
          "unit": "bar"
        },
        {
          "key": "relief",
          "label": "Relief valve setting",
          "type": "text",
          "unit": "bar"
        },
        {
          "key": "fluid",
          "label": "Fluid and capacity",
          "type": "text"
        },
        {
          "key": "filter",
          "label": "Filter part",
          "type": "text"
        }
      ]
    },
    "valve": {
      "label": "Process valve",
      "icon": "ti-adjustments",
      "fields": [
        {
          "key": "tag",
          "label": "Valve tag",
          "type": "text",
          "placeholder": "PV-1042"
        },
        {
          "key": "size",
          "label": "Size and class",
          "type": "text",
          "placeholder": "4 in, 150#"
        },
        {
          "key": "actuator",
          "label": "Actuator and positioner",
          "type": "text"
        },
        {
          "key": "setpressure",
          "label": "Set pressure",
          "type": "text",
          "unit": "bar"
        },
        {
          "key": "packing",
          "label": "Packing",
          "type": "text"
        }
      ]
    },
    "fan": {
      "label": "Fan or blower",
      "icon": "ti-propeller",
      "fields": [
        {
          "key": "model",
          "label": "Make and model",
          "type": "text"
        },
        {
          "key": "wheel",
          "label": "Wheel type and diameter",
          "type": "text"
        },
        {
          "key": "duty",
          "label": "Design flow and pressure",
          "type": "text"
        },
        {
          "key": "balance",
          "label": "Balance grade",
          "type": "text",
          "placeholder": "G6.3"
        }
      ]
    },
    "compressor": {
      "label": "Compressor",
      "icon": "ti-air-conditioning",
      "fields": [
        {
          "key": "model",
          "label": "Make and model",
          "type": "text"
        },
        {
          "key": "rating",
          "label": "Rated pressure and capacity",
          "type": "text"
        },
        {
          "key": "oil",
          "label": "Oil and capacity",
          "type": "text"
        },
        {
          "key": "separator",
          "label": "Separator part",
          "type": "text"
        }
      ]
    },
    "conveyor": {
      "label": "Conveyor",
      "icon": "ti-rectangle",
      "fields": [
        {
          "key": "belt",
          "label": "Belt width and specification",
          "type": "text"
        },
        {
          "key": "length",
          "label": "Centre to centre length",
          "type": "text",
          "unit": "m"
        },
        {
          "key": "takeup",
          "label": "Take-up type and travel",
          "type": "text"
        },
        {
          "key": "splice",
          "label": "Splice type",
          "type": "text"
        }
      ]
    },
    "brake": {
      "label": "Clutch or brake",
      "icon": "ti-hand-stop",
      "fields": [
        {
          "key": "model",
          "label": "Make and model",
          "type": "text"
        },
        {
          "key": "gap",
          "label": "Air gap specification",
          "type": "text",
          "unit": "mm"
        },
        {
          "key": "lining",
          "label": "Lining part",
          "type": "text"
        },
        {
          "key": "torque",
          "label": "Torque setting",
          "type": "text"
        }
      ]
    },
    "guard": {
      "label": "Safeguarding",
      "icon": "ti-shield",
      "fields": [
        {
          "key": "type",
          "label": "Guard or device type",
          "type": "text"
        },
        {
          "key": "interlock",
          "label": "Interlock model",
          "type": "text"
        },
        {
          "key": "rating",
          "label": "Safety rating",
          "type": "text",
          "placeholder": "PLd, Cat 3"
        },
        {
          "key": "psr",
          "label": "PSR reference",
          "type": "text"
        }
      ]
    }
  }
};
