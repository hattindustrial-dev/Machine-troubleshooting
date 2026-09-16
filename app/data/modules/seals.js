BW.register("seals", {
  "key": "seals",
  "num": "04",
  "name": "Seals and Gaskets",
  "source": "builtwright_seals_gaskets_v1.html",
  "tabs": [
    {
      "id": "sealtypes",
      "label": "Seal Types",
      "active": true,
      "style": ""
    },
    {
      "id": "gaskets",
      "label": "Gasket Types",
      "active": false,
      "style": ""
    },
    {
      "id": "materials",
      "label": "Material Selection",
      "active": false,
      "style": ""
    },
    {
      "id": "failure",
      "label": "Failure Analysis",
      "active": false,
      "style": ""
    },
    {
      "id": "install",
      "label": "Installation",
      "active": false,
      "style": ""
    },
    {
      "id": "compat",
      "label": "Chemical Compatibility",
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
    "title": "Seals and Gaskets",
    "badge": "Module 04",
    "tree": {
      "progress": "se-progress",
      "container": "se-tree"
    },
    "treeTab": "troubleshoot",
    "groups": {
      "selectSeal": {
        "scope": "#panel-sealtypes",
        "cardClass": ".type-card",
        "prefix": "scard-",
        "data": "sealData",
        "display": "seal-display"
      },
      "selectGasket": {
        "scope": "#panel-gaskets",
        "cardClass": ".type-card",
        "prefix": "gcard-",
        "data": "gasketData",
        "display": "gasket-display"
      },
      "selectMat": {
        "scope": "#panel-materials",
        "cardClass": ".type-card",
        "prefix": "mcard-",
        "data": "matData",
        "display": "mat-display"
      }
    },
    "reveals": {},
    "toggles": [
      {
        "name": "toggleFailure",
        "byId": false
      },
      {
        "name": "toggleAdv",
        "byId": true
      }
    ],
    "bespoke": []
  },
  "cards": {
    "sealData": {
      "mech_single": {
        "icon": "ti-circles-relation",
        "name": "Single Mechanical Seal",
        "role": "Most common dynamic seal for rotating shaft applications",
        "body": "A single mechanical seal uses two precision-lapped flat faces, one rotating with the shaft, one stationary in the seal housing, to create a barrier between the process fluid and the atmosphere. A spring or bellows maintains contact force between the faces. A very thin film of process fluid between the faces provides lubrication and carries away heat. When that film is maintained correctly, a mechanical seal can run for years with minimal wear.",
        "tips": [
          "The fluid film between the faces is measured in microns. Loss of that film, even briefly, generates heat that destroys the face lapping.",
          "Primary seal failure modes: dry running, misalignment (shaft runout), incorrect installation, and chemical incompatibility of the O-rings or face materials.",
          "A weeping mechanical seal (occasional drip, vapour) may be acceptable on some designs. A steady drip or spray is not normal and means the faces have lost contact.",
          "Seal flush arrangement (API Plan 11, 13, 21, etc.) determines how the fluid film is maintained. The correct flush plan depends on the fluid being pumped.",
          "Carbon/silicon carbide face pairs are the most common combination in general service. The rotating face is typically silicon carbide (harder) and the stationary face carbon (self-lubricating)."
        ]
      },
      "mech_double": {
        "icon": "ti-circles-relation",
        "name": "Double and Tandem Mechanical Seal",
        "role": "Two seals with a barrier fluid between them: hazardous, toxic, or high-value fluid service",
        "body": "A double seal uses two mechanical seals in the same stuffing box with a barrier fluid (typically a clean compatible liquid) circulating between them under pressure. The barrier fluid prevents any process fluid from reaching the atmosphere. If the inner seal leaks, the barrier fluid is what leaks inward to the process, not process fluid outward to atmosphere. Used wherever process fluid emission to atmosphere is unacceptable: toxic fluids, hazardous chemicals, regulated emissions, or very high-value product.",
        "tips": [
          "Double seal (back-to-back or face-to-face) has barrier fluid at higher pressure than the process. Any leak from either seal is barrier fluid, not process fluid.",
          "Tandem seal has barrier fluid at lower pressure than the process. The inner seal takes the full process pressure. The outer seal is a safety backup. Barrier fluid leakage from the outer seal indicates the inner seal has failed.",
          "Barrier fluid system requires a reservoir, circulation pump (or thermosiphon), pressure instrumentation, and a level alarm. The barrier system must be monitored and maintained as diligently as the pump itself.",
          "Barrier fluid must be compatible with both the process fluid (in case of inner seal leakage) and the seal faces and O-rings.",
          "API Plan 53 (pressurised barrier, external reservoir) and Plan 54 (pressurised barrier, external system) are the standard arrangements for double seals on hazardous service."
        ]
      },
      "cartridge": {
        "icon": "ti-package",
        "name": "Cartridge Mechanical Seal",
        "role": "Pre-assembled seal unit: reduces installation error significantly",
        "body": "A cartridge seal is a complete mechanical seal assembly pre-mounted in a sleeve that slides onto the shaft as a unit. The setting dimension is built into the cartridge and is maintained by setting clips during installation. Once installed and the set screws are engaged, the clips are removed and the seal is correctly positioned without any measurement or adjustment by the installer. Cartridge seals dramatically reduce installation errors and are the preferred choice for any application where seal reliability is critical.",
        "tips": [
          "Setting clips must remain in place until after the gland plate is bolted down and the shaft set screws are tightened. Removing clips early releases spring preload before the seal is secured.",
          "Cartridge seals simplify seal replacement in the field because the installer does not need to measure setting dimensions or handle individual seal faces.",
          "The sleeve is part of the cartridge and must be compatible with the shaft material. On corrosive service, verify the sleeve material against the process fluid.",
          "Most cartridge seals are designed around standard stuffing box dimensions (per ASME B73 or ISO 3069). Always confirm the cartridge dimensions match the specific pump before ordering.",
          "Cartridge seals cost more upfront but typically deliver a lower total cost of ownership through reduced installation errors and callbacks."
        ]
      },
      "dry_gas": {
        "icon": "ti-wind",
        "name": "Dry Gas Seal",
        "role": "Non-contacting face seal for compressors and high-speed rotating equipment",
        "body": "A dry gas seal uses spiral grooves machined into the rotating face that generate a pressurised gas film between the faces at operating speed. The faces never contact each other during normal operation: they run on a gas film of a few microns thickness. This eliminates liquid lubrication entirely and the associated contamination, seal oil system complexity, and emission concerns. Dry gas seals are standard on centrifugal and screw compressors in gas processing, petrochemical, and industrial gas service.",
        "tips": [
          "Dry gas seals require a clean, dry, filtered seal gas supply (typically process gas or nitrogen) at a pressure above the process gas pressure. Seal gas quality is critical.",
          "At low speeds (startup, shutdown), the gas film does not fully form and the faces may briefly contact. This contact at slow roll is normal but must be minimised. Extended slow-roll periods degrade the face grooves.",
          "Contamination of the seal gas with liquids or particulates is the primary cause of dry gas seal damage. The seal gas filtration system must be maintained to the specified contamination level (typically better than 3 micron particle size, less than 1 ppm liquid).",
          "Seal gas consumption (leakage to atmosphere past the outer labyrinth) is measurable and can be trended. An increasing leak rate indicates face wear or degradation.",
          "Dry gas seal systems include primary seal, separation seal (to prevent lube oil from reaching the dry gas seal), and vent/flare connections. The full system must be understood before any maintenance."
        ]
      },
      "lip": {
        "icon": "ti-circle",
        "name": "Lip Seal",
        "role": "Low pressure dynamic seal for bearings, gearboxes, and slow-to-moderate shaft speeds",
        "body": "A lip seal (radial shaft seal or oil seal) uses a flexible elastomeric lip held against the shaft by a garter spring. The lip maintains light contact with the shaft surface, retaining lubrication on one side and excluding contamination from the other. Lip seals are designed for low-pressure applications (typically less than 0.5 bar differential) at moderate shaft surface speeds. Common in bearing housings, gearboxes, wheel hubs, and agricultural equipment.",
        "tips": [
          "Shaft surface finish at the lip contact area is critical: too rough wears the lip quickly, too smooth prevents the lip from maintaining the oil film. Target 0.2 to 0.8 Ra (8 to 32 microinch Ra).",
          "Install with the lip facing toward the fluid being retained. A lip seal installed backwards allows fluid to pump outward.",
          "A thin film of oil at the lip contact point is normal and correct. A running bead of oil means the lip is worn or the shaft is out of tolerance.",
          "Shaft wear grooves at the lip contact area are common on long-service equipment. A repair sleeve (speedi-sleeve) can restore the shaft surface without shaft replacement.",
          "Lip seals are sensitive to shaft runout and misalignment. Excessive runout causes the lip to lift off the shaft on each revolution, allowing fluid leakage."
        ]
      },
      "labyrinth": {
        "icon": "ti-layout-navbar",
        "name": "Labyrinth Seal",
        "role": "Non-contacting seal for high speed, high temperature, or clean gas applications",
        "body": "A labyrinth seal uses a series of close-clearance ridges and grooves to create a tortuous path that resists fluid flow without any contact between the rotating and stationary elements. Because there is no contact, there is no wear and no heat generation from friction. Labyrinth seals are used on steam and gas turbines, high-speed compressors, and applications where contact seals would generate unacceptable heat or where extremely long service life is required. They do not provide a positive seal: they only restrict flow.",
        "tips": [
          "Labyrinth seals allow a controlled leakage. They are not zero-emission seals. The leakage rate depends on clearance, pressure differential, and the number of labyrinth stages.",
          "Clearances are typically 0.1 to 0.5mm depending on the application. Tighter clearances reduce leakage but increase the risk of contact during thermal transients or rotor excursions.",
          "Rub damage on labyrinth seal teeth indicates rotor contact. This can be caused by excessive vibration, a bearing failure, or an off-design transient. Inspect for root cause before replacing the seal.",
          "Brush seals are a modern alternative to labyrinth seals that provide better sealing efficiency with comparable non-contact characteristics. They use fine metal bristles that conform to the shaft surface with very low contact force.",
          "On steam turbines, labyrinth seal leakage is recovered to the condenser or to packing steam systems. A significant increase in leakage flow indicates seal wear or damage."
        ]
      },
      "oring": {
        "icon": "ti-circle-dashed",
        "name": "O-Ring",
        "role": "Most versatile static seal: face, groove, and port connections",
        "body": "An O-ring is a torus (donut shape) of elastomeric material that seats in a machined groove and is compressed between two mating surfaces to create a seal. When correctly designed (groove dimensions, compression ratio, material) and installed, an O-ring provides an excellent static seal at very low cost. The compression deforms the O-ring cross-section, causing it to exert a restoring force against the groove walls and mating surface.",
        "tips": [
          "Correct groove dimensions are not optional. An undersized groove over-compresses the O-ring, causing extrusion or cutting. An oversized groove under-compresses it, allowing leakage. Use the O-ring manufacturer groove design tables.",
          "Compression ratio (amount the O-ring is squeezed) is typically 15 to 25 percent for static seals and 10 to 15 percent for dynamic applications.",
          "Never stretch an O-ring over a thread or sharp edge without a proper installation cone or sleeve. A nick or cut from a thread root is invisible but causes immediate leakage.",
          "Apply a compatible lubricant to the O-ring before installation to ease seating and prevent rolling or twisting. Never use petroleum-based grease on EPDM O-rings: it causes swelling.",
          "Back-up rings (anti-extrusion rings) are used on O-rings in high-pressure applications to prevent the O-ring from extruding into the clearance gap."
        ]
      },
      "packing": {
        "icon": "ti-box",
        "name": "Compression Packing",
        "role": "Adjustable shaft seal for pumps, valves, and equipment where controlled leakage is acceptable",
        "body": "Compression packing consists of rings of braided or formed material (PTFE, graphite, aramid fibre, or combinations) stacked in a stuffing box and compressed by a gland follower. As the gland is tightened, the packing rings are compressed axially and expand radially to contact the shaft and stuffing box bore. Unlike a mechanical seal, compression packing is designed to leak slightly: that leakage provides cooling and lubrication.",
        "tips": [
          "The correct leakage rate is 40 to 60 drops per minute for most pump applications. This is not a defect: it is intentional and necessary.",
          "Zero leakage from packing means it is overtightened. The shaft sleeve will overheat and score. Back off the gland bolts gradually.",
          "Cut packing rings at 45 degrees to the correct length. Use a mandrel the same diameter as the shaft. Rings that are too long will buckle. Rings that are too short leave a gap.",
          "Stagger packing ring joints 90 degrees apart around the shaft. Joints in line create a direct leak path.",
          "Never add a single ring of new packing on top of old packing. Pull all old packing out and replace completely. Mixed old and new packing compresses unevenly and accelerates shaft sleeve wear."
        ]
      }
    },
    "gasketData": {
      "sheet": {
        "icon": "ti-square",
        "name": "Sheet and Soft Gaskets",
        "role": "General service static seals: PTFE, rubber, compressed fibre",
        "body": "Sheet gaskets are cut from flat sheets of soft or semi-soft material and are the simplest and most common gasket type. They conform to the flange faces under bolt load, filling minor surface imperfections. Material selection determines the service limits. PTFE sheet offers near-universal chemical resistance but cold flows under sustained load. Rubber sheet handles water and low-pressure gas service. Compressed fibre (CAF, compressed asbestos substitute) handles moderate temperatures and a range of fluids.",
        "tips": [
          "PTFE sheet cold flows (creeps) under sustained compressive load, losing seating stress over time. Retorque is required after the first thermal cycle and periodically thereafter.",
          "Never reuse a compressed sheet gasket. Once the material has been compressed in service, it cannot recover sufficient seating stress for reliable re-sealing.",
          "Full face gaskets (for flat face flanges) must not be used on raised face flanges. The bolt load is spread across too large an area and seating stress is insufficient.",
          "Cut custom gaskets using a gasket cutter or punch set, not scissors or a knife along a ruler. A ragged edge or uneven thickness causes uneven seating.",
          "Thickness selection: thinner gaskets require better flange finish and tighter tolerances but provide better blowout resistance at pressure."
        ]
      },
      "spiral": {
        "icon": "ti-spiral",
        "name": "Spiral Wound Gasket",
        "role": "Semi-metallic: high temperature, high pressure, demanding process service",
        "body": "A spiral wound gasket is constructed from alternating layers of thin metal strip (typically stainless steel) and soft filler material (PTFE or graphite) wound in a spiral pattern. An outer ring (retainer) centres the gasket on the raised face and limits compression. An inner ring (on some designs) prevents inward buckling under high bolt load. The combination of metal and filler provides excellent resilience, chemical resistance, and temperature capability.",
        "tips": [
          "Spiral wound gaskets require a specific flange surface finish (125 to 250 AARH serrated concentric) to seal correctly. A smooth finish does not provide sufficient mechanical keying for the winding layers.",
          "The outer centering ring must sit against the flange ID (inside the bolt circle) to correctly position the gasket. A gasket that is shifted off-centre will not seal evenly.",
          "Never reuse a spiral wound gasket. The compression of the winding layers is permanent.",
          "The inner ring (when present) is not optional on vacuum service or when the bore-to-gasket-ID ratio is large. Without it, the inner layers can buckle inward and contact the flow stream.",
          "Filler material selection: PTFE filler is more chemically resistant. Graphite filler handles higher temperatures and is better in steam service but is not suitable for strong oxidisers."
        ]
      },
      "kammprofile": {
        "icon": "ti-wave-sawtooth",
        "name": "Kammprofile Gasket",
        "role": "Serrated metal core with soft facing: excellent for heat exchangers and critical joints",
        "body": "A Kammprofile gasket has a solid metal core with concentric serrations machined into both faces. A soft facing material (graphite, PTFE, or compressed fibre) is bonded to each face. The serrations bite into the soft facing under bolt load, creating a series of individual sealing elements rather than one continuous surface. This geometry provides excellent blowout resistance and makes the gasket tolerant of surface finish variations.",
        "tips": [
          "Kammprofile gaskets are reusable in some cases: the metal core can be refaced by re-machining the serrations and applying new facing. Not practical in field conditions but relevant for planned maintenance programs.",
          "Well-suited to heat exchanger service where differential thermal expansion between the shell and tube bundle creates repeated opening and closing of the flange joint.",
          "The metal core material must be selected for compatibility with the process fluid and for strength at operating temperature.",
          "Facing material is selected for chemical compatibility, same as any soft gasket. Graphite facing handles the widest temperature range.",
          "Kammprofile gaskets require adequate bolt load to fully engage the serrations. Under-torqued installations do not seal reliably because the serrations have not embedded into the facing."
        ]
      },
      "envelope": {
        "icon": "ti-layers-difference",
        "name": "Envelope and Jacketed Gaskets",
        "role": "PTFE or soft metal jacket over a compressible core",
        "body": "An envelope gasket wraps a compressible filler (usually a soft fibre sheet or corrugated metal) in a jacket of PTFE or soft metal (aluminium, stainless). The jacket provides the chemical resistance and the smooth sealing surface, while the filler provides the compliance and spring-back. The result is a gasket that combines PTFE chemical resistance with better compressibility and creep resistance than solid PTFE sheet.",
        "tips": [
          "PTFE envelope gaskets are a direct improvement over solid PTFE sheet for most applications. The filler prevents the cold flow problem of solid PTFE.",
          "Soft metal jacketed gaskets (aluminium or stainless jacket over a fibre filler) are used where chemical resistance of the jacket material is sufficient and a smooth metal face is desirable.",
          "The jacket must be completely intact with no tears, punctures, or exposed filler. A damaged jacket allows process fluid to contact the filler and compromise the seal.",
          "Do not overtighten. The filler is compressible and if the jacket buckles, the sealing surface is disrupted.",
          "Suitable as a drop-in replacement for solid PTFE in most applications, with improved performance."
        ]
      },
      "ring_joint": {
        "icon": "ti-ring",
        "name": "Ring Type Joint (RTJ) Gasket",
        "role": "Solid metal ring in a machined groove: high pressure and high temperature API flanges",
        "body": "An RTJ gasket is a solid metal ring (oval or octagonal cross-section) that seats in a precisely machined groove in the flange face. When the bolts are tightened, the ring is plastically deformed into the groove, creating an extremely robust metal-to-metal seal. RTJ connections are used in high-pressure, high-temperature service (typically ASME Class 900 and above) where soft gasket materials would be inadequate.",
        "tips": [
          "RTJ rings must never be reused. The plastic deformation that creates the seal is permanent and the ring cannot seal the groove correctly on reinstallation.",
          "The ring material must be softer than the flange groove material to ensure the ring deforms into the groove rather than the groove deforming. Typical ring materials: soft iron, low-carbon steel, stainless steel, or Inconel depending on the service.",
          "Ring and groove dimensions are standardised. The ring size (R, RX, or BX prefix) must match the flange class and bore. Mixing incompatible ring and groove types is a serious safety hazard.",
          "Groove condition is critical. Scratches or pits in the groove seating area prevent the ring from sealing. Damaged grooves require machining or flange replacement: never attempt to fill or repair a groove with weld or filler.",
          "Lubricant (usually an anti-seize compound) is applied to the ring and groove before installation to prevent galling during bolt-up."
        ]
      },
      "solid_metal": {
        "icon": "ti-square-filled",
        "name": "Solid Metal Gaskets",
        "role": "Extreme temperature and pressure service: heat exchangers, high-integrity joints",
        "body": "Solid metal gaskets (flat rings, corrugated metal, or lens rings) are used in extreme service where no soft material can survive. They require high bolt loads and very good flange surface finish to achieve adequate seating stress. Common in heat exchanger tube sheet joints, high-temperature reactor flanges, and other services where temperature or fluid composition eliminates elastomeric and PTFE options.",
        "tips": [
          "Solid metal gaskets require very high bolt loads to achieve plastic deformation of the gasket surface and fill the flange surface irregularities. Bolt material and size must be selected to achieve the required bolt stress.",
          "Corrugated metal gaskets (without a soft facing) require an even higher quality flange finish than spiral wound or kammprofile gaskets.",
          "Material selection is primarily driven by temperature and chemical resistance. Common materials: soft iron, copper, aluminium, 304/316 stainless, Inconel, Monel.",
          "Lens ring gaskets are used in high-pressure instrument connections and small bore process piping. The lens profile contacts the matching cone-shaped flange seat at a line contact, concentrating bolt load effectively.",
          "Solid metal gaskets cannot accommodate flange misalignment or surface damage the way soft gaskets can. Flange preparation and alignment must be precise."
        ]
      }
    },
    "matData": {
      "nitrile": {
        "icon": "ti-droplet",
        "name": "Nitrile Rubber (NBR)",
        "role": "General purpose elastomer: petroleum oils, fuels, water, and moderate chemicals",
        "body": "Nitrile rubber (Buna-N, NBR) is the most widely used elastomer in industrial sealing. It has excellent resistance to petroleum-based oils and fuels, making it the default choice for hydraulic systems, fuel handling, and general lubrication equipment. It is cost-effective, widely available in all standard O-ring and seal sizes, and performs reliably from about minus 40 to plus 120 degrees Celsius.",
        "tips": [
          "Outstanding resistance to petroleum oils, hydraulic fluids, diesel, and greases.",
          "Not suitable for ketones (acetone, MEK), esters, chlorinated solvents, or strong acids. Swells rapidly in these fluids.",
          "Poor resistance to ozone and weathering. Do not use in outdoor static applications with long service exposure.",
          "High nitrile content (HNBR) grades offer improved temperature resistance to approximately 150 degrees Celsius and better resistance to sour gas (H2S).",
          "The default O-ring material for hydraulic systems. Check compatibility before using in any chemical or water treatment application."
        ]
      },
      "viton": {
        "icon": "ti-flame",
        "name": "Viton / FKM (Fluoroelastomer)",
        "role": "High temperature and chemical resistance: solvents, acids, and high temperature service",
        "body": "Viton (a DuPont trade name; the generic name is FKM or fluoroelastomer) provides substantially better chemical and temperature resistance than nitrile. It handles most solvents, fuels, acids, and high-temperature service up to approximately 200 degrees Celsius continuously and to 230 degrees Celsius in short-term exposure. It is the first choice when nitrile is inadequate and PTFE cannot be used as an elastomeric seal.",
        "tips": [
          "Excellent resistance to petroleum oils, fuels, aromatic hydrocarbons, chlorinated solvents, and dilute acids.",
          "Not suitable for ketones, acetone, MEK, amines, or anhydrous ammonia. These cause rapid degradation.",
          "Poor performance in steam service above about 150 degrees Celsius despite good dry heat resistance.",
          "Significantly more expensive than nitrile. Specify only where the service conditions justify the cost.",
          "FFKM (perfluoroelastomer, marketed as Kalrez, Chemraz) is the ultimate elastomer for chemical resistance: compatible with almost every chemical. Reserved for extreme service due to very high cost."
        ]
      },
      "epdm": {
        "icon": "ti-droplet-half-2",
        "name": "EPDM (Ethylene Propylene Diene Monomer)",
        "role": "Water, steam, and chemical service, not compatible with petroleum products",
        "body": "EPDM has excellent resistance to water, steam, dilute acids, alkalis, and many polar solvents. It is the standard material for water and wastewater systems, steam service to moderate pressures, and food and beverage applications. It is completely incompatible with petroleum-based oils and fuels, which cause rapid swelling and dissolution.",
        "tips": [
          "Excellent choice for: water, steam (to approximately 150 degrees Celsius), dilute acids, alkalis, ketones, and alcohols.",
          "Never use in contact with petroleum oils, fuels, or most lubricants. Swelling in petroleum products is rapid and severe.",
          "Good ozone and weathering resistance. Suitable for outdoor static applications.",
          "Standard material for HVAC seals, water system O-rings, and food processing equipment seals.",
          "Phosphate ester hydraulic fluids (fire-resistant hydraulic fluids) are compatible with EPDM, making it suitable for certain fire-resistant hydraulic systems where mineral oil systems cannot be used."
        ]
      },
      "neoprene": {
        "icon": "ti-wave-sine",
        "name": "Neoprene (Chloroprene Rubber, CR)",
        "role": "Refrigerants, weathering resistance, and moderate chemical service",
        "body": "Neoprene was one of the first synthetic rubbers and remains in use for specific applications where its combination of properties is valuable. It has good resistance to refrigerants (particularly older CFC and HCFC types), weathering, ozone, and moderate oil resistance. Its chemical resistance is intermediate between nitrile and EPDM, handling neither petroleum products as well as nitrile nor water and steam as well as EPDM.",
        "tips": [
          "Standard material for refrigeration service with older refrigerant types. Check compatibility with newer HFO refrigerants.",
          "Good weathering and ozone resistance makes it suitable for outdoor seals and weather stripping.",
          "Moderate oil resistance: acceptable for light oil mist or splash but not for immersion in petroleum products.",
          "Automotive and marine applications use neoprene extensively for hoses, bushings, and weather seals.",
          "Being replaced in many applications by EPDM (better water/chemical resistance) or FKM (better chemical and temperature resistance) but remains the standard for certain refrigerant applications."
        ]
      },
      "silicone": {
        "icon": "ti-temperature-plus",
        "name": "Silicone (VMQ)",
        "role": "Wide temperature range, food grade applications, and static seals",
        "body": "Silicone elastomers have an exceptional temperature range, from approximately minus 60 to plus 200 degrees Celsius, and are inherently food safe and non-toxic. They have good resistance to water, steam, dilute acids, and many chemicals. They are not suitable for petroleum-based fluids or dynamic sealing applications where their low tear resistance causes rapid wear.",
        "tips": [
          "Best used in static seal applications. Poor tear and abrasion resistance limits performance in dynamic sealing where the seal must withstand sliding contact.",
          "Food grade silicone is FDA compliant and widely used in food processing, pharmaceutical, and medical applications.",
          "Excellent choice for static O-rings and gaskets in high-temperature oven seals, lighting equipment, and automotive engine compartment applications.",
          "Not suitable for petroleum oils, fuels, or concentrated acids. Swells in many organic solvents.",
          "High and low temperature performance makes silicone the choice when the service temperature range is extreme in either direction."
        ]
      },
      "aflas": {
        "icon": "ti-atom-2",
        "name": "Aflas / FFKM (Perfluoroelastomers)",
        "role": "Extreme chemical and temperature resistance: the highest performance elastomers",
        "body": "Aflas (TFE/P copolymer) and FFKM perfluoroelastomers (Kalrez, Chemraz) represent the highest performance tier of elastomeric seal materials. They combine near-universal chemical resistance with temperature capability to 300 degrees Celsius or higher (for FFKM). They are used in semiconductor manufacturing, aggressive chemical processing, oil and gas exploration, and any application where standard elastomers are inadequate and a compliant seal face is required.",
        "tips": [
          "Aflas (FEPM) has excellent resistance to amines, sour gas, hot water, steam, and strong acids that attack FKM. Used in oil and gas downhole applications and chemical processing.",
          "FFKM (Kalrez, Chemraz) is compatible with essentially all process chemicals and handles temperatures to 300 degrees Celsius or higher depending on the grade. Used where cost is secondary to performance.",
          "The cost premium over FKM is very significant. Specify only after confirming that FKM is genuinely inadequate for the service conditions.",
          "Not all FFKM grades have identical resistance. The grade must be matched to the specific fluid and temperature. Consult the manufacturer chemical resistance data for the specific compound.",
          "In semiconductor fab applications, FFKM seals are used because they have extremely low extractable contaminant levels that could affect process chemistry."
        ]
      },
      "ptfe": {
        "icon": "ti-layers",
        "name": "PTFE (Polytetrafluoroethylene)",
        "role": "Near-universal chemical resistance: gaskets, seat seals, backup rings, and envelope gaskets",
        "body": "PTFE has the broadest chemical resistance of any common sealing material. It is essentially inert to almost all industrial chemicals at moderate temperatures. It is used in gaskets, valve seats, backup rings for O-rings in high-pressure service, envelope jacketing for gaskets, and as a packing material. Its limitations are mechanical rather than chemical: it creeps (cold flows) under sustained compressive load and has poor wear resistance in dynamic applications.",
        "tips": [
          "Near-universal chemical resistance. The primary exceptions are molten alkali metals and elemental fluorine.",
          "Cold flow (creep) under compressive load is the main limitation. Retorquing after the first thermal cycle is required on PTFE gaskets. Use filled or expanded PTFE grades for better creep resistance.",
          "Not suitable as a standalone dynamic seal material due to poor wear and tear resistance. Use in static applications or in conjunction with elastomeric backup.",
          "Expanded PTFE (ePTFE, Gortex-type) has a micro-porous structure that provides better compressibility and recovery than solid PTFE sheet, making it a better gasket material in most applications.",
          "PTFE tape on threaded connections is a sealant, not a structural connection. It seals the thread but does not increase joint strength. Use the correct number of wraps and apply in the correct direction (clockwise when viewed from the male thread end)."
        ]
      },
      "graphite": {
        "icon": "ti-pencil",
        "name": "Flexible Graphite",
        "role": "High temperature sealing: steam, hot gases, valve packing, and extreme service gaskets",
        "body": "Flexible graphite (exfoliated graphite, marketed as Grafoil and similar) is a pure carbon material with excellent thermal conductivity, very high temperature resistance (to approximately 450 degrees Celsius in oxidising service, over 3000 degrees Celsius in non-oxidising), and good chemical resistance. It is used as the filler material in spiral wound gaskets, as a standalone gasket sheet for high-temperature service, and as valve packing and pump shaft packing where its self-lubricating properties are valuable.",
        "tips": [
          "Excellent high-temperature performance. The first choice for steam service, hot gas applications, and any service where elastomers are unsuitable due to temperature.",
          "Not suitable for strong oxidising acids (nitric acid, fuming sulfuric acid) or halogens at elevated temperatures, which oxidise the carbon.",
          "Graphite packing is the standard for high-temperature valve stems and pump stuffing boxes in steam and hot water service. Self-lubricating and easy to adjust.",
          "As a gasket filler in spiral wound gaskets, graphite provides better temperature performance than PTFE filler and better resistance to steam blowout.",
          "Flexible graphite is electrically conductive. In applications where galvanic corrosion is a concern (graphite in contact with aluminium or certain stainless steels in the presence of an electrolyte), corrosion of the metal is possible."
        ]
      },
      "metal": {
        "icon": "ti-circle-filled",
        "name": "Metallic Sealing Materials",
        "role": "RTJ rings, extreme service gaskets, and heat exchanger joints",
        "body": "Solid metallic gaskets and RTJ rings are used where temperature, pressure, or fluid composition eliminates all non-metallic options. Common materials include soft iron (the most ductile and easily deformed, for lower-grade flanges), low-carbon steel, 304 and 316 stainless steel, Inconel (for high-temperature and corrosion resistance), Monel (for seawater and reducing acid service), and copper (for some heat exchanger applications).",
        "tips": [
          "The gasket metal must be softer than the flange groove or face material to ensure the gasket deforms rather than the flange. Hardness matching is a critical specification point.",
          "Stainless steel RTJ rings are not suitable for use in carbon steel grooves without considering galling. Use a softer ring material or ensure the groove is hard enough to resist damage.",
          "Inconel RTJ rings are used in high-temperature, high-pressure service (above approximately 540 degrees Celsius) where stainless steel loses too much strength.",
          "Monel RTJ rings are specified for seawater, hydrofluoric acid, and some reducing acid services where stainless steels are susceptible to corrosion.",
          "Copper gaskets are used in some heat exchanger and high-pressure tubing applications. Copper is soft, highly conformable, and provides excellent heat transfer across the joint."
        ]
      }
    }
  },
  "trees": {
    "diagNodes": {
      "start": {
        "q": "What failed, and how?",
        "hint": "Isolate, depressurise, drain, and verify at the joint before opening it. Keep the failed seal or gasket for reading.",
        "options": [
          {
            "label": "Mechanical seal leaking or failed early",
            "next": "ms1"
          },
          {
            "label": "Flange or gasket joint leaking",
            "next": "fl1"
          },
          {
            "label": "O-ring or static seal failed",
            "next": "r_oring"
          },
          {
            "label": "Packing leaking too much, or gland too hot",
            "next": "r_packing"
          },
          {
            "label": "Lip seal leaking",
            "next": "r_lip"
          }
        ]
      },
      "ms1": {
        "q": "Read the faces. What do they show?",
        "hint": "Failure Analysis tab has the patterns.",
        "options": [
          {
            "label": "Heat checking, blistering, or discolouration",
            "next": "r_ms_heat"
          },
          {
            "label": "Uneven wear track, wider on one side",
            "next": "r_ms_runout"
          },
          {
            "label": "Grooves, scoring, or embedded particles",
            "next": "r_ms_abrasive"
          },
          {
            "label": "Chipped or cracked face, or a flat spot on an o-ring",
            "next": "r_ms_install"
          },
          {
            "label": "Swollen, hardened, or degraded elastomers",
            "next": "r_ms_chem"
          },
          {
            "label": "Faces look fine; leaking at the secondary seals or the sleeve",
            "next": "r_ms_secondary"
          }
        ]
      },
      "r_ms_heat": {
        "type": "result",
        "cls": "action",
        "label": "thermal damage: dry running or lost flush",
        "text": "The faces ran without a liquid film.",
        "sub": "Flush or quench line flow (a blocked orifice or filter, a closed valve). The seal plan against the service (API 682). Dry running at startup (pump not vented or primed). Pump run at shutoff (heat in the seal chamber). Never run a mechanical seal dry, even briefly.",
        "prevent": "Flush flow verified on the PM; vent and prime on the startup procedure; minimum flow protection."
      },
      "r_ms_runout": {
        "type": "result",
        "cls": "action",
        "label": "shaft runout, misalignment, or pipe strain",
        "text": "The shaft is describing an arc through the seal.",
        "sub": "Shaft runout at the seal under 0.05 mm (0.002 in) TIR. Alignment to tolerance with soft foot corrected. Indicator on the casing while the flange bolts are loosened: movement is pipe strain (Installation module). Bearing play letting the shaft wander.",
        "prevent": "Runout, alignment, and pipe strain checked before every seal installation and recorded."
      },
      "r_ms_abrasive": {
        "type": "result",
        "cls": "action",
        "label": "abrasive or contaminated process fluid",
        "text": "Solids in the seal chamber are grinding the faces.",
        "sub": "A flush plan that keeps clean fluid at the faces (Plan 32 external flush, or a cyclone separator on Plan 31). Harder face materials (silicon carbide against silicon carbide). A seal chamber that lets solids settle away from the faces.",
        "prevent": "Seal plan selected for the fluid, and the flush maintained."
      },
      "r_ms_install": {
        "type": "result",
        "cls": "fix",
        "label": "installation damage",
        "text": "The seal was damaged going in.",
        "sub": "A chipped face was dropped. A flat spot on an o-ring was pinched. A spiral cut was twisted. Fingerprints or lubricant on the faces. Cartridge set screws not tightened before the clips came off. Setting dimension wrong on a component seal. Installation tab, step by step, and a clean bench.",
        "prevent": "Installation procedure followed with the seal in its packaging until the last moment."
      },
      "r_ms_chem": {
        "type": "result",
        "cls": "action",
        "label": "chemical or temperature incompatibility",
        "text": "The elastomers or the faces were wrong for the fluid or the temperature.",
        "sub": "Compatibility table against the actual fluid, including cleaning chemicals and temperature excursions. Swelling is chemical attack; hardening and cracking is heat. A seal specified for the design fluid and run on the cleaning cycle fails on the cleaning cycle.",
        "prevent": "Seal materials on the equipment record with every fluid the seal sees."
      },
      "r_ms_secondary": {
        "type": "result",
        "cls": "action",
        "label": "secondary seal or sleeve leakage",
        "text": "The faces are sealing; the o-rings, the sleeve, or the gland gasket are not.",
        "sub": "Sleeve o-ring cut on a keyway or a shoulder. Shaft or sleeve surface damaged under the o-ring. Gland gasket not seated. Cartridge sleeve not clamped (set screws). Wrong o-ring material.",
        "prevent": "Shaft and sleeve inspected under the o-ring positions; keyways covered on assembly."
      },
      "fl1": {
        "q": "What does the joint show?",
        "options": [
          {
            "label": "Gasket extruded outward or crushed inward",
            "next": "r_fl_torque"
          },
          {
            "label": "Gasket blown out or split",
            "next": "r_fl_wrong"
          },
          {
            "label": "Leaks after a thermal cycle or a startup",
            "next": "r_fl_thermal"
          },
          {
            "label": "Leaks at one spot only",
            "next": "r_fl_face"
          }
        ]
      },
      "r_fl_torque": {
        "type": "result",
        "cls": "fix",
        "label": "bolt torque",
        "text": "Extruded outward is under-torque; crushed and pushed inward is over-torque.",
        "sub": "Torque values for the gasket type and bolt size (the gasket manufacturer), lubricated threads, star pattern, three passes minimum, then a final round. Bolt condition: stretched, corroded, or wrong grade bolts do not hold torque.",
        "prevent": "Torque and pattern on the flange procedure; calibrated wrench."
      },
      "r_fl_wrong": {
        "type": "result",
        "cls": "action",
        "label": "wrong gasket for the service, or reused",
        "text": "A gasket that blew out was not rated for the pressure and temperature, or it had been used before.",
        "sub": "Gasket type against the flange rating and the service (Gasket Types tab). Never reuse a gasket; never reuse an RTJ ring. Spiral wound on raised face; full face on flat face.",
        "prevent": "Gasket specification on the piping line list; gaskets issued by spec, not by size alone."
      },
      "r_fl_thermal": {
        "type": "result",
        "cls": "action",
        "label": "thermal cycling and bolt relaxation",
        "text": "The joint moves as it heats and cools, and the bolts relax.",
        "sub": "A gasket type that recovers (spiral wound, kammprofile, graphite) rather than a plain sheet. Bolt material that grows with the flange. Live loading (Belleville washers) on joints that cycle. Hot bolting only under a specific procedure.",
        "prevent": "Re-torque after the first thermal cycle on joints that run hot, recorded."
      },
      "r_fl_face": {
        "type": "result",
        "cls": "fix",
        "label": "flange face condition",
        "text": "A leak at one spot is a defect at that spot: a scratch across the face, a low spot, corrosion, or old gasket residue.",
        "sub": "Face inspection with a straightedge and a light. Radial scratches across a raised face leak; circumferential ones seal. Surface finish for the gasket type (spiral wound wants 125 to 250 AARH). Remachine or replace the flange if the face is beyond a dressing.",
        "prevent": "Face inspection on every joint before the gasket goes in; faces protected when open."
      },
      "r_oring": {
        "type": "result",
        "cls": "action",
        "label": "o-ring failure: read the shape",
        "text": "The damage tells you what happened.",
        "sub": "Flat spot: pinched on assembly. Spiral cut: twisted going in. Chipped: dropped or dry assembled. Extruded into the gap: pressure too high for the gap or the hardness; a backup ring. Swollen: chemical. Hard and cracked: heat. Compression set (flattened all round): old, or too hot for too long. Installation tab and Compatibility table.",
        "prevent": "Chamfers on bores, lubricant on the o-ring (compatible with the fluid), material against the fluid, and a replacement interval on hot service."
      },
      "r_packing": {
        "type": "result",
        "cls": "fix",
        "label": "packing adjustment or condition",
        "text": "Packing is meant to leak 40 to 60 drops per minute. Too much is worn packing or a scored sleeve; a hot gland with no leakage is over-tightened.",
        "sub": "Gland nuts in small equal steps, watching the leakage, never to zero. If the leak cannot be controlled, repack with the sleeve inspected. A scored sleeve burns every new set. Lantern ring aligned with the flush port.",
        "prevent": "Leakage rate on the PM sheet; sleeve inspected at every repack."
      },
      "r_lip": {
        "type": "result",
        "cls": "action",
        "label": "lip seal",
        "text": "A lip seal leaks from a worn or grooved shaft, a nicked lip, a hardened lip, a blocked breather pressurising the housing, or overfill.",
        "sub": "Breather first. Level second. Then the shaft under the lip (a groove needs a wear sleeve). Then the seal: installed dry, cut on a keyway, or cooked by heat. Gearboxes module has the same sequence.",
        "prevent": "Breather and level on the PM; wear sleeve on any grooved shaft; lip lubricated and keyway covered on install."
      }
    }
  },
  "selfcheck": {
    "sealtypes": [
      [
        "What is the most common cartridge seal installation error?",
        [
          "Wrong material",
          "Removing the setting clips before tightening the set screws",
          "Too much lubricant",
          "Wrong flush plan"
        ],
        1,
        "Set the screws first, then remove the clips, or the springs unload the sleeve."
      ],
      [
        "A double (tandem) mechanical seal needs?",
        [
          "No flush",
          "A barrier or buffer fluid system",
          "Packing behind it",
          "Dry gas"
        ],
        1,
        "The space between the seals is supplied by an API plan such as 53 or 54."
      ],
      [
        "Compression packing is designed to?",
        [
          "Seal with zero leakage",
          "Leak a controlled amount, 40 to 60 drops per minute",
          "Run dry",
          "Replace a mechanical seal"
        ],
        1,
        "The leakage lubricates and cools the packing."
      ]
    ],
    "gaskets": [
      [
        "A spiral wound gasket needs a flange face finish of roughly?",
        [
          "32 AARH",
          "125 to 250 AARH",
          "500 AARH",
          "Polished"
        ],
        1,
        "Too smooth and it slips; too rough and it does not seal."
      ],
      [
        "Can an RTJ ring be reused?",
        [
          "Yes, if it looks fine",
          "No",
          "Yes, once",
          "Only on low pressure"
        ],
        1,
        "The ring deforms to seal and the ring must be softer than the groove. Never reuse."
      ],
      [
        "A full face gasket is used on?",
        [
          "Raised face flanges",
          "Flat face flanges",
          "RTJ flanges",
          "Threaded connections"
        ],
        1,
        "Full face gaskets cover the whole flat face including the bolt holes."
      ]
    ],
    "materials": [
      [
        "Which elastomer should not be used with mineral oils?",
        [
          "Nitrile",
          "Viton",
          "EPDM",
          "Neoprene"
        ],
        2,
        "EPDM swells in oils; it is for water, steam, and many chemicals."
      ],
      [
        "Which material cold flows and is used in filled grades for that reason?",
        [
          "Graphite",
          "PTFE",
          "Viton",
          "Nitrile"
        ],
        1,
        "PTFE creeps under load; filled grades reduce it."
      ],
      [
        "Which material is used for high temperature steam gaskets?",
        [
          "Nitrile",
          "Silicone",
          "Flexible graphite",
          "EPDM"
        ],
        2,
        "Graphite handles high temperature and steam service."
      ]
    ],
    "failure": [
      [
        "An o-ring with a flat spot on one side was?",
        [
          "Chemically attacked",
          "Pinched during assembly",
          "Overheated",
          "Dropped"
        ],
        1,
        "Flat spot is pinched; spiral cut is twisted; chipped face is dropped."
      ],
      [
        "A swollen, soft seal indicates?",
        [
          "Heat",
          "Chemical incompatibility",
          "Installation damage",
          "Fretting"
        ],
        1,
        "Swelling means the fluid is attacking the material."
      ],
      [
        "A gasket extruded outward was?",
        [
          "Over-torqued",
          "Under-torqued",
          "Reused",
          "The wrong size"
        ],
        1,
        "Under-torque lets pressure push it out; over-torque crushes it inward."
      ]
    ],
    "install": [
      [
        "What is the maximum shaft runout before installing a mechanical seal?",
        [
          "0.010 in TIR",
          "0.002 in TIR",
          "0.050 in TIR",
          "Any"
        ],
        1,
        "Runout above 0.002 in wobbles the faces."
      ],
      [
        "Which parts of a mechanical seal get lubricated at installation?",
        [
          "The faces",
          "The secondary seals (o-rings), never the faces",
          "Everything",
          "Nothing"
        ],
        1,
        "Lubricant on the faces is contamination. A fingerprint is contamination."
      ],
      [
        "Minimum number of torque passes on a flange?",
        [
          "One",
          "Two",
          "Three, in a star pattern",
          "Five"
        ],
        2,
        "Star pattern, at least three passes, to seat the gasket evenly."
      ]
    ],
    "compat": [
      [
        "Nitrile with a ketone solvent?",
        [
          "Good",
          "Warn",
          "Fail",
          "Depends on temperature"
        ],
        2,
        "Ketones attack nitrile and many elastomers; PTFE is the usual choice."
      ],
      [
        "What does a \"Warn\" rating in the compatibility table mean?",
        [
          "Never use",
          "Use with caution, verify against concentration and temperature",
          "Good in all cases",
          "Not tested"
        ],
        1,
        "Warn means conditional: confirm with the manufacturer for the actual service."
      ]
    ],
    "safety": [
      [
        "When breaking a flange, which bolts are loosened first?",
        [
          "Nearest you",
          "Far side, so trapped pressure sprays away from you",
          "Top",
          "Bottom"
        ],
        1,
        "Crack the far side with the near side snug."
      ],
      [
        "An old compressed sheet gasket in a 1980s plant should be treated as?",
        [
          "Safe",
          "Suspect for asbestos: wet removal, no grinding",
          "Graphite",
          "PTFE"
        ],
        1,
        "Pre-1990s gaskets and packing commonly contained asbestos."
      ]
    ]
  },
  "panels": {
    "sealtypes": "<div class=\"bw-section-label\">Seal types: tap a type to learn more</div>\n\n    <div class=\"family-label\">Dynamic seals: rotating or reciprocating shafts</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectSeal('mech_single')\" id=\"scard-mech_single\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-circles-relation\"></i></div>\n        <div class=\"type-card-name\">Single Mechanical Seal</div>\n        <div class=\"type-card-sub\">Most common pump shaft seal</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('mech_double')\" id=\"scard-mech_double\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-circles-relation\"></i></div>\n        <div class=\"type-card-name\">Double / Tandem Seal</div>\n        <div class=\"type-card-sub\">Barrier fluid, hazardous fluids</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('cartridge')\" id=\"scard-cartridge\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-package\"></i></div>\n        <div class=\"type-card-name\">Cartridge Seal</div>\n        <div class=\"type-card-sub\">Pre-assembled, reduced install error</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('dry_gas')\" id=\"scard-dry_gas\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-wind\"></i></div>\n        <div class=\"type-card-name\">Dry Gas Seal</div>\n        <div class=\"type-card-sub\">Compressors, no process fluid contact</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('lip')\" id=\"scard-lip\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-circle\"></i></div>\n        <div class=\"type-card-name\">Lip Seal</div>\n        <div class=\"type-card-sub\">Low pressure, gearboxes, bearings</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('labyrinth')\" id=\"scard-labyrinth\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-layout-navbar\"></i></div>\n        <div class=\"type-card-name\">Labyrinth Seal</div>\n        <div class=\"type-card-sub\">Non-contacting, turbines, high speed</div>\n      </div>\n    </div>\n\n    <div class=\"family-label\">Static seals: stationary joints</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectSeal('oring')\" id=\"scard-oring\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-circle-dashed\"></i></div>\n        <div class=\"type-card-name\">O-Ring</div>\n        <div class=\"type-card-sub\">Most versatile static seal</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectSeal('packing')\" id=\"scard-packing\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-box\"></i></div>\n        <div class=\"type-card-name\">Compression Packing</div>\n        <div class=\"type-card-sub\">Pumps, valves, stuffing boxes</div>\n      </div>\n    </div>\n\n    <div id=\"seal-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a seal type above</div></div>",
    "gaskets": "<div class=\"bw-section-label\">Gasket types: tap a type to learn more</div>\n\n    <div class=\"family-label\">Soft and semi-metallic gaskets</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectGasket('sheet')\" id=\"gcard-sheet\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-square\"></i></div>\n        <div class=\"type-card-name\">Sheet / Soft Gasket</div>\n        <div class=\"type-card-sub\">PTFE, rubber, compressed fibre</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectGasket('spiral')\" id=\"gcard-spiral\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-spiral\"></i></div>\n        <div class=\"type-card-name\">Spiral Wound</div>\n        <div class=\"type-card-sub\">High temperature, high pressure</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectGasket('kammprofile')\" id=\"gcard-kammprofile\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-wave-sawtooth\"></i></div>\n        <div class=\"type-card-name\">Kammprofile</div>\n        <div class=\"type-card-sub\">Serrated metal core, soft facing</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectGasket('envelope')\" id=\"gcard-envelope\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-layers-difference\"></i></div>\n        <div class=\"type-card-name\">Envelope / Jacketed</div>\n        <div class=\"type-card-sub\">PTFE jacket over soft filler</div>\n      </div>\n    </div>\n\n    <div class=\"family-label\">Metallic gaskets</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectGasket('ring_joint')\" id=\"gcard-ring_joint\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-ring\"></i></div>\n        <div class=\"type-card-name\">Ring Joint (RTJ)</div>\n        <div class=\"type-card-sub\">High pressure, API flanges</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectGasket('solid_metal')\" id=\"gcard-solid_metal\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-square-filled\"></i></div>\n        <div class=\"type-card-name\">Solid Metal</div>\n        <div class=\"type-card-sub\">Extreme service, heat exchangers</div>\n      </div>\n    </div>\n\n    <div id=\"gasket-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a gasket type above</div></div>\n\n    <div class=\"bw-section-label\" style=\"margin-top:1rem;\">Full face vs raised face flanges</div>\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-arrows-split-2\"></i> Gasket seating area matters</div>\n      <div class=\"info-block-body\">The flange face type determines which gasket is correct. Using the wrong gasket on the wrong flange face type is one of the most common installation errors in process piping and almost always results in a leak or flange damage.</div>\n      <ul class=\"info-block-tips\">\n        <li><strong style=\"color:#e8e6df;\">Raised face (RF):</strong> the most common flange type in industrial piping. The gasket sits only on the raised inner portion of the flange face. Use a ring gasket sized to fit the raised face. Never use a full face gasket on a raised face flange: the bolt load is spread across too large an area and the seating stress is insufficient to seal.</li>\n        <li><strong style=\"color:#e8e6df;\">Full face (FF):</strong> the gasket spans the full flange face including the bolt holes. Used with flat face (FF) flanges, typically on cast iron equipment and low-pressure systems. A full face gasket must be used on a flat face flange to prevent the flange from bending inward under bolt load and cracking, particularly on brittle cast iron.</li>\n        <li><strong style=\"color:#e8e6df;\">Ring type joint (RTJ):</strong> a machined groove in the flange face accepts a solid metal ring. Used in high-pressure, high-temperature service (API 6A, ASME Class 900 and above). The ring must match the groove dimensions exactly. Never reuse an RTJ ring gasket.</li>\n        <li>Surface finish on the flange face must match the gasket type. A spiral wound gasket requires a specific serrated finish (125 to 250 AARH). A soft sheet gasket requires a smoother finish. Check the gasket manufacturer specification before installation.</li>\n      </ul>\n    </div>\n      <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: never tighten a flange that is already leaking a little</strong>A joint that weeps after the torque is a gasket that is not seating, and more torque crushes it rather than sealing it. Depressurise, open it, read the gasket, and find out why: face, bolts, gasket type, or a pipe that was pulled in. Then a new gasket, torqued to the number.</div></div>",
    "materials": "<div class=\"bw-section-label\">Material selection: matching the seal to the service</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">Seal and gasket material selection is not a guess. Every elastomer, polymer, and metal has specific resistance to chemicals, temperature, and pressure. Installing the wrong material is not just a maintenance shortcut: it is a safety event waiting to happen. The material must be compatible with the process fluid, the cleaning agents, the operating temperature range, and the pressure. All four conditions apply simultaneously.</div>\n    </div>\n\n    <div class=\"family-label\">Elastomers</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectMat('nitrile')\" id=\"mcard-nitrile\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-droplet\"></i></div>\n        <div class=\"type-card-name\">Nitrile (NBR)</div>\n        <div class=\"type-card-sub\">Oils, fuels, general service</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('viton')\" id=\"mcard-viton\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-flame\"></i></div>\n        <div class=\"type-card-name\">Viton (FKM)</div>\n        <div class=\"type-card-sub\">High temp, chemicals, solvents</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('epdm')\" id=\"mcard-epdm\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-droplet-half-2\"></i></div>\n        <div class=\"type-card-name\">EPDM</div>\n        <div class=\"type-card-sub\">Steam, water, acids, not oils</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('neoprene')\" id=\"mcard-neoprene\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-wave-sine\"></i></div>\n        <div class=\"type-card-name\">Neoprene (CR)</div>\n        <div class=\"type-card-sub\">Refrigerants, weathering resistance</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('silicone')\" id=\"mcard-silicone\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-temperature-plus\"></i></div>\n        <div class=\"type-card-name\">Silicone (VMQ)</div>\n        <div class=\"type-card-sub\">Wide temp range, food grade</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('aflas')\" id=\"mcard-aflas\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-atom-2\"></i></div>\n        <div class=\"type-card-name\">Aflas (FFKM/FEPM)</div>\n        <div class=\"type-card-sub\">Extreme chemical resistance</div>\n      </div>\n    </div>\n\n    <div class=\"family-label\">Non-elastomeric materials</div>\n    <div class=\"card-grid\">\n      <div class=\"type-card\" onclick=\"selectMat('ptfe')\" id=\"mcard-ptfe\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-layers\"></i></div>\n        <div class=\"type-card-name\">PTFE</div>\n        <div class=\"type-card-sub\">Near-universal chemical resistance</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('graphite')\" id=\"mcard-graphite\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-pencil\"></i></div>\n        <div class=\"type-card-name\">Flexible Graphite</div>\n        <div class=\"type-card-sub\">High temp, steam, valve packing</div>\n      </div>\n      <div class=\"type-card\" onclick=\"selectMat('metal')\" id=\"mcard-metal\">\n        <div class=\"type-card-icon\"><i class=\"ti ti-circle-filled\"></i></div>\n        <div class=\"type-card-name\">Metallic (SS, Inconel)</div>\n        <div class=\"type-card-sub\">RTJ gaskets, extreme service</div>\n      </div>\n    </div>\n\n    <div id=\"mat-display\" style=\"margin-top:1rem;\"><div class=\"comp-placeholder\">select a material above</div></div>",
    "failure": "<div class=\"bw-section-label\">Failure analysis: reading a failed seal or gasket</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">A failed seal or gasket is evidence. Before discarding it, examine it carefully. The pattern of failure almost always points to the root cause, and installing a replacement without understanding the cause produces the same failure again. Each failure mode has a recognisable signature.</div>\n    </div>\n\n    <div id=\"failure-cards\">\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-flame\" style=\"color:#F09595;\"></i> Thermal damage</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-thermal\">Thermal</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Thermal damage appears as hardening, cracking, and loss of elasticity in elastomeric seals. The seal face becomes brittle and may shatter rather than flex. In gaskets, thermal damage causes embrittlement, carbonisation, or blowout of soft filler material.</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> the operating temperature exceeded the material rating, the seal flush system failed on a mechanical seal, the pump ran dry (rapid local heat at the seal faces), or the fluid being sealed is hotter than specified.</p>\n          <ul><li>Check: was the correct material specified for the actual operating temperature?</li><li>Check: is the mechanical seal flush line flowing? A blocked or failed flush line causes rapid heat buildup at the faces.</li><li>Check: did the pump run dry even briefly? Dry running destroys seal faces from frictional heat within seconds to minutes.</li><li>Hardened O-rings that crack when squeezed have exceeded their temperature limit. The original material selection may have been wrong, or operating conditions have changed.</li></ul>\n        </div>\n      </div>\n\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-atom-2\" style=\"color:#85B7EB;\"></i> Chemical attack</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-chem\">Chemical</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Chemical attack presents as swelling, softening, or complete dissolution of the seal material. A swollen elastomer has absorbed the process fluid and expanded, losing its dimensional stability and sealing force. A seal that has partially dissolved will have a sticky, gummy, or waxy texture.</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> the seal material is incompatible with the process fluid, the cleaning chemical, or a combination of both. Process changes, new cleaning agents, or contamination of the fluid are common triggers.</p>\n          <ul><li>Compare the failed seal material against the chemical compatibility chart for the actual process fluid, not just the nominal fluid.</li><li>Check whether cleaning agents (caustic, acid, solvent) have changed recently. CIP chemicals are a common source of unexpected seal degradation.</li><li>A seal that swells in service but appears intact during a cold inspection may only reveal the swelling after it has been running at temperature. Measure the seal cross-section diameter if swelling is suspected.</li><li>Gasket blowout on a previously reliable joint may indicate a fluid change or contamination that has reduced the gasket's compressive strength.</li></ul>\n        </div>\n      </div>\n\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-tool\" style=\"color:#EF9F27;\"></i> Installation damage</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-install\">Installation</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Installation damage is one of the most common and most preventable failure modes. It appears as a flat spot, cut, nick, or spiral groove on an O-ring or lip seal: damage that occurred during assembly. Mechanical seal faces may show chipping or cracking from being struck or dropped.</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> the seal was damaged before it ever saw service. A seal that leaks immediately or within the first few hours of operation almost always has an installation defect.</p>\n          <ul><li>A flat spot on an O-ring means it was pinched during installation. Use assembly lubricant (compatible with the process fluid) and a proper installation sleeve to protect the seal as it passes over threads or sharp edges.</li><li>A spiral cut on an O-ring means it twisted during installation. O-rings must not rotate as they are seated. Use a non-rotating installation technique.</li><li>Mechanical seal faces that are chipped or cracked were dropped or struck. Handle seal faces only by the outside diameter and store them face-down on a clean, soft surface.</li><li>A seal that leaks immediately after installation should be replaced, not adjusted. Do not attempt to stop the leak by tightening gland bolts: this applies uneven load to the seal faces and accelerates damage.</li></ul>\n        </div>\n      </div>\n\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-arrows-left-right\" style=\"color:#F09595;\"></i> Mechanical wear: face seal</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-mech\">Mechanical</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Normal mechanical seal wear appears as a narrow, polished wear track on both the rotating and stationary faces. This is expected and acceptable. Abnormal wear appears as grooving, pitting, scoring, or an uneven wear pattern across the face width.</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> grooving indicates abrasive contamination in the fluid film between the faces. Pitting indicates corrosive attack or cavitation. An uneven wear track (wider on one side) indicates the faces are not running parallel, which is a misalignment or shaft runout problem.</p>\n          <ul><li>Measure shaft runout at the seal location before installing a replacement. Maximum acceptable TIR is typically 0.002 inches (0.05mm). Runout beyond this prevents the faces from maintaining contact evenly.</li><li>Abrasive wear on mechanical seal faces: the fluid being sealed contains solids or the seal flush is introducing contamination. Consider a clean external flush or a different seal arrangement (double seal with barrier fluid).</li><li>Coke or scale deposits on the seal faces indicate the process fluid is polymerising or depositing at the seal faces. The seal flush arrangement or flush fluid may need to be changed.</li><li>Blistering of the seal face coating indicates thermal shock: the seal was exposed to a sudden temperature change that caused differential thermal expansion across the face.</li></ul>\n        </div>\n      </div>\n\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-arrows-move\" style=\"color:#EF9F27;\"></i> Extrusion and blowout: gaskets</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-mech\">Mechanical</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Gasket extrusion appears as material that has been squeezed out beyond the flange face boundary. Blowout is catastrophic extrusion where the gasket fails suddenly under pressure. Both indicate that the gasket seating stress was either insufficient (allowing the gasket to move) or excessive (destroying the gasket material).</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> under-torqued bolts allow the gasket to shift and extrude under pressure cycling. Over-torqued bolts crush the gasket material beyond its recoverable range. Incorrect gasket material (too soft for the service pressure) extrudes even at correct torque.</p>\n          <ul><li>Always follow the bolt torque specification for the flange class, gasket type, and bolt material. A torque wrench is not optional on process piping.</li><li>Torque bolts in a star (cross) pattern in at least three passes: snug, 50 percent of target, and full target torque. Never tighten bolts in a circle: this creates uneven loading and the gasket will not seal evenly.</li><li>Recheck torque after the first thermal cycle on new installations. Gasket relaxation after initial heat-up is normal and requires a retorque before the joint is considered stable.</li><li>A gasket that has been overcompressed (crushed) cannot be reused. Once the material yields beyond its elastic limit, it cannot recover seating stress when the bolts are retorqued.</li></ul>\n        </div>\n      </div>\n\n      <div class=\"failure-card\" onclick=\"toggleFailure(this)\">\n        <div class=\"failure-card-header\"><div class=\"failure-card-title\"><i class=\"ti ti-wave-sine\" style=\"color:#C589E8;\"></i> Fretting and relative motion</div><div style=\"display:flex;gap:6px;align-items:center;\"><span class=\"failure-card-badge badge-thermal\">Mechanical</span><i class=\"ti ti-chevron-down failure-card-chevron\"></i></div></div>\n        <div class=\"failure-card-body\">\n          <p>Fretting damage on static seals appears as black oxide powder (on metal contact surfaces) or surface pitting at the seal contact area. It occurs when a joint that should be stationary experiences small relative motion: from vibration, thermal cycling, or inadequate bolt load.</p>\n          <p><strong style=\"color:#e8e6df;\">What it tells you:</strong> the joint is moving. This can be caused by vibration transmitted from connected equipment, inadequate bolt torque allowing the joint to rock under pressure pulsation, or thermal cycling that moves the flange faces relative to each other.</p>\n          <ul><li>Address the source of motion before replacing the gasket. A new gasket in a fretted joint will fail on the same schedule as the original.</li><li>On O-ring face seal connections, fretting of the O-ring groove indicates the mating face is moving. Check the connection integrity and bolt torque on the fitting.</li><li>Vibration damping pads or flexible pipe connections can reduce transmitted vibration to joints that are experiencing fretting from connected equipment.</li></ul>\n        </div>\n      </div>\n    </div>",
    "install": "<div class=\"bw-section-label\">Installation: where most seal and gasket failures begin</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">The majority of premature seal and gasket failures are installation failures. A correctly specified seal in a correctly prepared joint, installed with the correct technique and torque, will perform to its rated service life. Skipping any part of that sequence produces a leak. The sequence matters as much as the components.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Mechanical seal installation</div>\n    <div style=\"margin-bottom:1.25rem;\">\n      <div class=\"inst-step\"><div class=\"inst-num\">01</div><div class=\"inst-body\"><strong>Measure shaft runout before installing anything</strong><div class=\"inst-sub\">Mount a dial indicator on a fixed reference and read the shaft at the seal housing location while rotating slowly by hand. Maximum acceptable TIR is 0.002 inches (0.05mm) for most mechanical seals. Runout beyond this means the faces cannot maintain even contact. Installing a seal on an out-of-tolerance shaft is a guaranteed comeback.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">02</div><div class=\"inst-body\"><strong>Check shaft and stuffing box dimensions</strong><div class=\"inst-sub\">Confirm shaft diameter and stuffing box bore against the seal specification. An undersized stuffing box bore prevents the seal from seating correctly. An oversized shaft prevents the seal from fitting. These are manufacturing or wear issues that must be corrected before installation, not worked around.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">03</div><div class=\"inst-body\"><strong>Clean all surfaces: no exceptions</strong><div class=\"inst-sub\">Clean the shaft, stuffing box bore, and gland plate contact surfaces. Any contamination on the shaft can score the dynamic O-ring as it is installed. Any contamination on the seal face contact surfaces prevents proper seating. Use a lint-free cloth and a compatible solvent. Do not use shop rags: fibres contaminate seal faces.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">04</div><div class=\"inst-body\"><strong>Handle seal faces with extreme care</strong><div class=\"inst-sub\">Mechanical seal faces are precision-lapped to a flatness of approximately 1 to 3 helium light bands (roughly 0.0003mm). A fingerprint introduces contamination. A dropped face may have an invisible micro-crack that causes immediate leakage. Hold faces only by the outside diameter. Store them face-down on a clean, dry, lint-free surface. Inspect each face under good light before installing.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">05</div><div class=\"inst-body\"><strong>Lubricate secondary seals only: never the faces</strong><div class=\"inst-sub\">Apply a thin film of compatible lubricant (usually the process fluid itself, or a compatible grease specified by the seal manufacturer) to the dynamic O-ring and shaft sleeve to ease installation. Never apply lubricant to the seal faces. The faces rely on a very thin fluid film generated by the process fluid for lubrication. Foreign lubricant on the faces prevents proper film formation and causes uneven wear.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">06</div><div class=\"inst-body\"><strong>Set seal setting dimensions</strong><div class=\"inst-sub\">Non-cartridge seals require the rotating face to be set at a specific axial position on the shaft (the seal setting dimension). This is measured from a reference point on the pump (typically the stuffing box face) and is specified in the seal data sheet. Incorrect setting dimension compresses the spring too much (causing excessive face load and heat) or too little (causing the faces to separate under pressure).</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">07</div><div class=\"inst-body\"><strong>Cartridge seals: set screws last</strong><div class=\"inst-sub\">Cartridge seals ship with setting clips or tabs that maintain the correct face loading during installation. Install the cartridge, connect the gland plate, then tighten the shaft set screws before removing the setting clips. Removing the setting clips before the set screws are engaged releases the spring preload and the face position is lost. This is the most common cartridge seal installation error.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">08</div><div class=\"inst-body\"><strong>Connect flush and quench lines before startup</strong><div class=\"inst-sub\">If the seal uses an external flush, quench, or barrier fluid arrangement, connect and verify flow before starting the pump. Running a mechanical seal dry for even a few seconds during startup can destroy the faces. Confirm the flush line is flowing and the barrier fluid system (on double seals) is at the correct pressure before energising the pump.</div></div></div>\n    </div>\n\n    <div class=\"callout-box\">\n      <div class=\"callout-box-header\">\n        <i class=\"ti ti-alert-hexagon callout-box-icon\"></i>\n        <div class=\"callout-box-title\">Never run a mechanical seal dry</div>\n      </div>\n      <div class=\"callout-box-body\">The fluid film between a mechanical seal's faces is measured in microns. It provides lubrication and carries away heat. Without it, the faces generate frictional heat at a rate that can destroy the seal faces in seconds to minutes. <strong>Always confirm the pump is primed and the seal flush is flowing before starting.</strong> A seal that was run dry will often appear intact but will have invisible micro-damage to the face lapping that causes it to leak progressively. If dry running is suspected, replace the seal before returning the pump to service.</div>\n    </div>\n\n    <div class=\"bw-section-label\">Gasket and flange installation</div>\n    <div style=\"margin-bottom:1.25rem;\">\n      <div class=\"inst-step\"><div class=\"inst-num\">01</div><div class=\"inst-body\"><strong>Inspect and prepare flange faces</strong><div class=\"inst-sub\">Check flange faces for radial scratches, pitting, corrosion, or raised burrs. A radial scratch (running from the bore outward across the gasket seating area) is a leak path regardless of bolt torque. A circumferential scratch within the gasket area is generally acceptable. Remove light corrosion with a fine abrasive. Deep pitting or scoring requires machining or flange replacement.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">02</div><div class=\"inst-body\"><strong>Verify flange face finish against gasket specification</strong><div class=\"inst-sub\">Soft gaskets (rubber, PTFE sheet) require a smooth finish, typically 125 AARH or smoother. Spiral wound gaskets require a serrated concentric finish, typically 125 to 250 AARH. RTJ flanges require a specific groove finish per the ring type. Installing a gasket on the wrong surface finish produces inconsistent seating stress across the gasket area.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">03</div><div class=\"inst-body\"><strong>Never reuse a compressed gasket</strong><div class=\"inst-sub\">A gasket that has been compressed in service has permanently deformed to conform to the flange faces. When removed and reinstalled, it cannot generate adequate seating stress because the material has already yielded. This applies to all gasket types, including spiral wound gaskets, soft gaskets, and RTJ rings. Always install a new gasket when breaking a flanged joint.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">04</div><div class=\"inst-body\"><strong>Centre the gasket: no contact with bolt holes</strong><div class=\"inst-sub\">On raised face flanges, the gasket must be centred on the raised face and must not overlap the bolt holes. A gasket that contacts the bolt holes is not providing sealing in that area and creates an uneven load distribution. On full face flanges, the gasket is pre-punched with bolt holes and must align correctly before bolts are installed.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">05</div><div class=\"inst-body\"><strong>Lubricate bolt threads and nut faces</strong><div class=\"inst-sub\">Apply a compatible thread lubricant (Never-Seez, molybdenum disulfide paste, or manufacturer-specified lubricant) to bolt threads and the nut bearing face. Dry threads produce inconsistent torque readings: up to 50 percent of the applied torque may be consumed by thread friction rather than clamping force. The torque specification on the gasket data sheet assumes lubricated threads unless stated otherwise.</div></div></div>\n      <div class=\"inst-step\"><div class=\"inst-num\">06</div><div class=\"inst-body\"><strong>Torque in a star pattern: minimum three passes</strong><div class=\"inst-sub\">Snug all bolts finger-tight first to seat the gasket evenly. Then torque to 30 percent of target in a star pattern. Then 70 percent in a star pattern. Then full target torque in a star pattern. Finally, go around the circle once at full torque to catch any relaxation. On critical joints, do a final pass after the first thermal cycle.</div></div></div>\n    </div>\n\n    <div class=\"adv-wrap\" id=\"adv-torquepattern\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-torquepattern')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-arrows-shuffle adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Advanced: star pattern torque sequence for common bolt counts</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\">\n        <p>The star (cross) pattern ensures load is applied evenly across the gasket as it compresses. The sequence varies with the number of bolts. Number the bolts 1 through N starting at the 12 o'clock position and working clockwise.</p>\n        <div class=\"adv-step\"><div class=\"adv-num\">4</div><div class=\"adv-step-body\"><strong>4-bolt flange:</strong> 1 → 3 → 2 → 4 (opposite pairs)</div></div>\n        <div class=\"adv-step\"><div class=\"adv-num\">8</div><div class=\"adv-step-body\"><strong>8-bolt flange:</strong> 1 → 5 → 3 → 7 → 2 → 6 → 4 → 8</div></div>\n        <div class=\"adv-step\"><div class=\"adv-num\">12</div><div class=\"adv-step-body\"><strong>12-bolt flange:</strong> 1 → 7 → 4 → 10 → 2 → 8 → 5 → 11 → 3 → 9 → 6 → 12</div></div>\n        <div class=\"adv-step\"><div class=\"adv-num\">16</div><div class=\"adv-step-body\"><strong>16-bolt flange:</strong> Work in opposite pairs across the full diameter. Start at 12 and 6, then 3 and 9, then fill in quarters, then eighths.</div></div>\n        <p>The principle is always the same: apply load to directly opposite bolts before moving to adjacent bolts. This prevents the gasket from being driven to one side during initial compression.</p>\n      </div>\n    </div>\n      <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: the setting clips come off last</strong>On a cartridge seal, the clips hold the sleeve and the gland in the factory relationship. Set screws tight to the shaft, gland bolts torqued, then and only then the clips off. Pull the clips first and the springs push the sleeve and the seal is set wrong before the pump ever turns. It is the most common cartridge seal installation error in the plant.</div></div>",
    "compat": "<div class=\"bw-section-label\">Chemical compatibility: quick reference</div>\n    <div class=\"comp-detail\">\n      <div class=\"comp-detail-body\">This table provides a general guide only. Compatibility is affected by temperature, concentration, pressure, and fluid mixtures. Always consult the seal or gasket manufacturer's full chemical resistance data for the specific service conditions. When in doubt, request a soak test or consult a materials engineer.</div>\n    </div>\n\n    <table class=\"compat-table\">\n      <thead>\n        <tr>\n          <th>Fluid</th>\n          <th>Nitrile (NBR)</th>\n          <th>Viton (FKM)</th>\n          <th>EPDM</th>\n          <th>PTFE</th>\n          <th>Graphite</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr><td>Water (ambient)</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Steam (low pressure)</td><td class=\"no\">NO</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Steam (high pressure)</td><td class=\"no\">NO</td><td class=\"no\">NO</td><td class=\"warn\">Warn</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Mineral oil / hydraulic fluid</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Diesel / fuel oil</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Gasoline / petrol</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Dilute acids (pH 4–6)</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"warn\">Warn</td></tr>\n        <tr><td>Concentrated acids</td><td class=\"no\">NO</td><td class=\"warn\">Warn</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"no\">NO</td></tr>\n        <tr><td>Caustic / NaOH</td><td class=\"ok\">OK</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Ketones (MEK, acetone)</td><td class=\"no\">NO</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Alcohols (methanol, ethanol)</td><td class=\"ok\">OK</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Chlorinated solvents</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"warn\">Warn</td></tr>\n        <tr><td>Ammonia / amines</td><td class=\"warn\">Warn</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Phosphate ester hydraulic fluid</td><td class=\"no\">NO</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Food grade oils and fats</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>CIP caustic (2% NaOH)</td><td class=\"warn\">Warn</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>CIP acid (nitric, phosphoric)</td><td class=\"no\">NO</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"warn\">Warn</td></tr>\n        <tr><td>Refrigerants (R134a, R404a)</td><td class=\"warn\">Warn</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n        <tr><td>Natural gas / methane</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td><td class=\"no\">NO</td><td class=\"ok\">OK</td><td class=\"ok\">OK</td></tr>\n      </tbody>\n    </table>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-alert-triangle\"></i> Warn ratings: what they mean</div>\n      <div class=\"info-block-body\">A \"Warn\" rating means the material may be acceptable under specific conditions but has limitations that must be verified. Typical conditions for a Warn rating include: limited to low concentrations only, limited to ambient or low temperature service, acceptable for short-term exposure but not continuous immersion, or acceptable only with certain grades of the material. Never use a Warn-rated material without checking the full conditions of the compatibility data against your actual service conditions.</div>\n    </div>\n\n    <div class=\"info-block\">\n      <div class=\"info-block-title\"><i class=\"ti ti-notes\"></i> PTFE: nearly universal but not without limits</div>\n      <div class=\"info-block-body\">PTFE shows OK ratings across almost every chemical in this table, which makes it a common default choice. However PTFE has important mechanical limitations that prevent it from being used everywhere. It creeps (cold flows) under sustained compressive load, which means a PTFE gasket will lose seating stress over time and require periodic retorquing. It is also not suitable for applications with significant thermal cycling, vibration, or pressure pulsation without specific PTFE formulations (filled PTFE, expanded PTFE) designed for those conditions.</div>\n      <ul class=\"info-block-tips\">\n        <li>Virgin PTFE sheet gaskets cold flow significantly. Use filled or expanded PTFE formulations for better creep resistance on critical joints.</li>\n        <li>PTFE is not compatible with molten alkali metals and elemental fluorine. These are edge cases in most industrial environments but worth knowing.</li>\n        <li>PTFE envelope gaskets combine PTFE's chemical resistance with a filler material (usually a compressed fibre sheet) that provides better compressibility and creep resistance than solid PTFE.</li>\n      </ul>\n    </div>",
    "troubleshoot": "<div class=\"bw-section-label\">Seal and gasket fault diagnosis</div>\n    <div class=\"adv-wrap\" id=\"adv-method\">\n      <button class=\"adv-toggle\" onclick=\"toggleAdv('adv-method')\">\n        <div class=\"adv-toggle-left\"><i class=\"ti ti-map-2 adv-toggle-icon\"></i><span class=\"adv-toggle-label\">Diagnostic methodology</span></div>\n        <i class=\"ti ti-chevron-down adv-chevron\"></i>\n      </button>\n      <div class=\"adv-body\"><p><strong>Keep the failed seal.</strong> A mechanical seal's faces, a gasket's shape, and an o-ring's damage pattern each tell you the cause, and the cause is what decides whether the new one lasts. Replacing without reading is how a pump gets its third seal in a year.</p><p><strong>Then the machine:</strong> shaft runout, alignment, pipe strain, flush flow, and the process (dry running, shutoff, temperature, chemistry). The seal is the part that shows the damage; the cause is almost always upstream of it.</p></div>\n    </div>\n    <div class=\"progress-bar\"><div class=\"progress-fill\" id=\"se-progress\" style=\"width:8%\"></div></div>\n    <div id=\"se-tree\"></div>",
    "selfcheck": "<div class=\"bw-section-label\">Self-check: one question at a time, tap an answer, read why</div>\n    <div class=\"comp-detail\"><div class=\"comp-detail-body\">Questions are grouped by the tab they test. Get one wrong and the correct answer lights up green with a one-line reason; use the link to reopen the tab and read it again. For a training program, a pass is every section answered and the reasons read, not a percentage.</div></div>\n    <div id=\"sc-body\"></div>",
    "safety": "<div class=\"bw-section-label\">Seal and gasket safety: pressure, fluid, and old gaskets</div>\n    <div class=\"callout-box red\"><div class=\"callout-box-header\"><i class=\"ti ti-alert-triangle callout-box-icon\"></i><div class=\"callout-box-title\">A seal or gasket is the thing between you and the process. Replacing it means opening that boundary.</div></div><div class=\"callout-box-body\">Breaking a flange or pulling a seal opens the system to whatever is inside: pressure, temperature, chemistry. <strong>The joint is isolated, depressurised, drained, and verified before the first bolt is loosened, and it is opened from the far side, away from your body.</strong></div></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-lock\" style=\"color:#F09595;\"></i> Opening a flanged joint</div><ul class=\"info-block-tips\"><li>Isolate both sides. Drain. Vent. Confirm zero pressure on a gauge at the joint, not at the pump three metres away.</li><li>Loosen the bolts on the far side first, leaving the near-side bolts snug. If there is trapped pressure, it sprays away from you. Then crack the near side.</li><li>Never loosen a flange under pressure, and never tighten one under pressure. Hot bolting (tightening a live flange) is specialist work with its own procedure and permit.</li><li>Ring joint (RTJ) flanges spring apart when the bolts are released. Stand clear of the gap.</li><li>Spring-loaded and pressurised seal support systems (barrier fluid, Plan 53) are separate pressure sources and are isolated separately.</li></ul></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-flask\" style=\"color:#F09595;\"></i> The fluid and the temperature</div><ul class=\"info-block-tips\"><li>SDS for the process fluid. PPE for the fluid, including face protection when cracking a joint.</li><li>Hot service: the flange and the fluid stay hot after shutdown. Cool it or dress for it.</li><li>Chemical compatibility applies to your gloves too. A glove that the fluid passes through is not PPE.</li><li>Steam: a steam joint holds condensate that flashes when the pressure drops. Vent from the low point first.</li></ul></div>\n    <div class=\"info-block\" style=\"border-color:#A32D2D;\"><div class=\"info-block-title\" style=\"color:#F09595;\"><i class=\"ti ti-alert-hexagon\" style=\"color:#F09595;\"></i> Old gasket material</div><ul class=\"info-block-tips\"><li>Gaskets in plants built or maintained before the 1990s may contain asbestos. Compressed sheet gaskets, spiral wound filler, and packing all used it. Treat any unidentified old gasket as suspect.</li><li>Do not grind, wire brush, or sand old gasket residue dry. Wet removal, hand scraping, and the plant's asbestos procedure. Dispose of it as the procedure says.</li><li>PTFE begins to degrade above about 260°C and releases toxic fumes at welding and burning temperatures. Do not heat, burn, or weld near PTFE gaskets and seals. Old PTFE residue is not removed with a torch.</li><li>Flexible graphite is not a health hazard but it is conductive; keep the dust away from electrical equipment.</li></ul></div>\n    <div class=\"info-block\"><div class=\"info-block-title\"><i class=\"ti ti-hand-off\"></i> Mechanical seal handling</div><ul class=\"info-block-tips\"><li>Seal faces are silicon carbide, tungsten carbide, or ceramic. They chip and the chips are sharp. Handle by the edges, with gloves for the metal parts and clean bare hands or lint-free gloves for the faces.</li><li>Cartridge seals have compressed springs. Remove the setting clips only after the seal is fully installed and the set screws are tight, or the springs unload the sleeve.</li><li>Solvents for cleaning gasket faces and seal parts: ventilation, gloves, no ignition sources.</li></ul></div>\n    <div class=\"field-tip\"><i class=\"ti ti-tool\"></i><div><strong>Field tip: gauge at the joint</strong>A pressure gauge on the pump discharge reading zero says the pump is depressurised. It says nothing about the section of pipe between two closed valves that you are about to open. If the joint does not have its own vent or gauge, fit a bleed at the joint before the bolts come out.</div></div>"
  },
  "title": "BuiltWright, Seals and Gaskets, Module 04",
  "related": "<div class=\"related\"><div class=\"related-label\">Related modules</div><a href=\"builtwright_pumps_combined_v1.html#leaks\">Pumps: seal versus packing</a><a href=\"builtwright_process_valves_v1.html#packing\">Valves: stem packing and seats</a><a href=\"builtwright_reference_v1.html#pipe\">Reference: flange bolting and sequence</a><a href=\"builtwright_hydraulics_v1.html#fluid\">Hydraulics: seal compatibility with the fluid</a><a href=\"builtwright_root_cause_v1.html#examples\">Root Cause: the third seal in a year</a></div>",
  "footer": "<div class=\"bw-footer\">builtwrightapp.com &nbsp;·&nbsp; module 04 of series &nbsp;·&nbsp; seals and gaskets</div>",
  "css": [
    ".bw-title { font-size: 24px; font-weight: 600; color: #f0ede4; }",
    ".bw-tab { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1px; padding: 6px 12px; border-radius: 4px; border: 0.5px solid #3a3a36; background: #242420; color: #888780; cursor: pointer; transition: all 0.15s; text-transform: uppercase; }",
    ".family-label { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 2px; color: #BA7517; text-transform: uppercase; margin: 1rem 0 0.5rem 0; }",
    ".card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 0.5rem; }",
    ".card-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin-bottom: 0.5rem; }",
    ".type-card { background: #2e2e2a; border: 1px solid #3a3a36; border-radius: 8px; padding: 0.9rem; cursor: pointer; transition: all 0.15s; }",
    ".type-card:hover, .type-card.selected { border-color: #BA7517; background: #2a1f08; box-shadow: 0 0 0 2px #BA7517; }",
    ".type-card-icon { font-size: 22px; color: #BA7517; margin-bottom: 5px; }",
    ".type-card-name { font-size: 13px; font-weight: 600; color: #f0ede4; margin-bottom: 2px; }",
    ".type-card-sub { font-size: 11px; color: #888780; }",
    ".comp-detail { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1.25rem; margin-bottom: 1.25rem; }",
    ".comp-detail-icon { font-size: 22px; color: #BA7517; }",
    ".comp-detail-name { font-size: 16px; font-weight: 600; color: #f0ede4; }",
    ".comp-detail-tips li::before { content: '→'; position: absolute; left: 0; color: #BA7517; }",
    ".callout-tips { list-style: none; margin-top: 0.6rem; }",
    ".callout-tips li { font-size: 13px; color: #888780; padding: 3px 0 3px 16px; position: relative; line-height: 1.5; }",
    ".callout-tips li::before { content: '→'; position: absolute; left: 0; color: #EF9F27; }",
    ".failure-card { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1rem 1.25rem; margin-bottom: 10px; cursor: pointer; transition: all 0.15s; }",
    ".failure-card:hover { border-color: #BA7517; }",
    ".failure-card-header { display: flex; align-items: center; justify-content: space-between; }",
    ".failure-card-title { font-size: 14px; font-weight: 600; color: #f0ede4; display: flex; align-items: center; gap: 8px; }",
    ".failure-card-badge { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1px; padding: 2px 7px; border-radius: 3px; text-transform: uppercase; }",
    ".badge-mech { background: #200d0d; color: #F09595; border: 0.5px solid #A32D2D; }",
    ".badge-chem { background: #0c1f33; color: #85B7EB; border: 0.5px solid #185FA5; }",
    ".badge-install { background: #2a1f08; color: #EF9F27; border: 0.5px solid #BA7517; }",
    ".badge-thermal { background: #1a0f1a; color: #C589E8; border: 0.5px solid #7B3FA0; }",
    ".failure-card-chevron { font-size: 13px; color: #5F5E5A; transition: transform 0.2s; }",
    ".failure-card.open .failure-card-chevron { transform: rotate(180deg); }",
    ".failure-card-body { display: none; margin-top: 0.75rem; padding-top: 0.75rem; border-top: 0.5px solid #3a3a36; }",
    ".failure-card.open .failure-card-body { display: block; }",
    ".failure-card-body p { font-size: 13px; color: #c8c6bf; line-height: 1.6; margin-bottom: 0.5rem; }",
    ".failure-card-body ul { list-style: none; }",
    ".failure-card-body ul li { font-size: 12px; color: #888780; padding: 2px 0 2px 16px; position: relative; line-height: 1.5; }",
    ".failure-card-body ul li::before { content: '→'; position: absolute; left: 0; color: #BA7517; font-size: 11px; }",
    ".compat-table { width: 100%; border-collapse: collapse; margin-bottom: 1.25rem; font-size: 12px; }",
    ".compat-table th { font-family: 'Share Tech Mono', monospace; font-size: 9px; letter-spacing: 1.5px; text-transform: uppercase; color: #BA7517; padding: 6px 8px; border-bottom: 1px solid #3a3a36; text-align: left; background: #242420; }",
    ".compat-table td { padding: 7px 8px; border-bottom: 0.5px solid #2a2a26; color: #c8c6bf; vertical-align: top; line-height: 1.4; }",
    ".compat-table tr:last-child td { border-bottom: none; }",
    ".compat-table tr:hover td { background: #242420; }",
    ".compat-table td:first-child { font-weight: 600; color: #e8e6df; white-space: nowrap; }",
    ".ok { color: #97C459; font-weight: 600; }",
    ".warn { color: #EF9F27; font-weight: 600; }",
    ".no { color: #F09595; font-weight: 600; }",
    ".inst-step { background: #2e2e2a; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 0.9rem 1.1rem; margin-bottom: 8px; display: flex; gap: 12px; align-items: flex-start; }",
    ".inst-num { font-family: 'Share Tech Mono', monospace; font-size: 11px; color: #BA7517; background: #2a1f08; border-radius: 4px; padding: 2px 7px; flex-shrink: 0; font-weight: 600; margin-top: 1px; }",
    ".inst-body { font-size: 13px; color: #c8c6bf; line-height: 1.55; }",
    ".inst-body strong { font-weight: 600; color: #e8e6df; }",
    ".inst-sub { font-size: 12px; color: #888780; margin-top: 3px; line-height: 1.5; }",
    ".adv-wrap { border-radius: 8px; overflow: hidden; border: 0.5px solid #3a3a36; margin-bottom: 1.25rem; }",
    ".adv-toggle { width: 100%; background: #242420; border: none; padding: 0.75rem 1.1rem; display: flex; align-items: center; justify-content: space-between; cursor: pointer; gap: 10px; }",
    ".adv-toggle-left { display: flex; align-items: center; gap: 8px; }",
    ".adv-toggle-icon { font-size: 15px; color: #BA7517; }",
    ".adv-toggle-label { font-family: 'Share Tech Mono', monospace; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; color: #BA7517; font-weight: 600; }",
    ".adv-chevron { font-size: 13px; color: #BA7517; transition: transform 0.2s; }",
    ".adv-wrap.open .adv-chevron { transform: rotate(180deg); }",
    ".adv-body { display: none; background: #1e1e1c; padding: 1rem 1.1rem; border-top: 0.5px solid #3a3a36; }",
    ".adv-wrap.open .adv-body { display: block; }",
    ".adv-body p { font-size: 13px; color: #c8c6bf; line-height: 1.6; margin-bottom: 0.75rem; }",
    ".adv-body strong { color: #e8e6df; font-weight: 600; }",
    ".adv-step { display: flex; gap: 10px; margin-bottom: 10px; align-items: flex-start; }",
    ".adv-num { font-family: 'Share Tech Mono', monospace; font-size: 10px; color: #BA7517; background: #2a1f08; border-radius: 3px; padding: 2px 6px; flex-shrink: 0; margin-top: 1px; }",
    ".adv-step-body { font-size: 13px; color: #c8c6bf; line-height: 1.55; }",
    ".svg-wrap { background: #111110; border: 0.5px solid #3a3a36; border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; text-align: center; overflow-x: auto; }",
    ".svg-caption { font-family: 'Share Tech Mono', monospace; font-size: 10px; color: #5F5E5A; letter-spacing: 1px; margin-top: 0.5rem; text-transform: uppercase; }",
    "@media print { body { background:#fff; color:#000; padding:0; } .bw-tabs, .ref-search, .tree-back, .sc-score, .adv-chevron, .bw-badge { display:none !important; } .bw-panel { display:none; } .bw-panel.active { display:block; } .bw-wrap { max-width:100%; } .bw-title, .comp-detail-name, .info-block-title, .type-card-name, .sym-card-label, .tree-q-text, .tree-result-text, .route-title, .sc-stem, .callout-box-title, .field-tip strong, .tree-prevent strong, .bw-section-label, .family-label, .ref-table th { color:#000 !important; } .comp-detail-body, .info-block-body, .callout-box-body, .tree-result-sub, .tree-prevent, .field-tip div, .sc-why, .ref-table td, .comp-detail-tips li, .info-block-tips li, .callout-tips li, .sym-detail-body, .adv-body p, .route-text, .type-card-sub, .sym-card-sub, .tree-q-hint, .ref-note, .chain-label, .chain-sub { color:#222 !important; } .comp-detail, .info-block, .callout-box, .type-card, .sym-card, .tree-q, .tree-result, .field-tip, .adv-wrap, .adv-body, .adv-toggle, .chain-wrap, .chain-box, .sc-q, .sym-detail, .calc, .route, .dir-row, .safety-strip { background:#fff !important; border-color:#999 !important; box-shadow:none !important; } .adv-body { display:block !important; } .tree-btn, .sc-opt, .pm-btn { border:0.5px solid #999; background:#fff; color:#000; } .progress-bar { display:none; } a { color:#000; text-decoration:none; } .bw-logo a::after { content:\" builtwrightapp.com\"; color:#666; } .bw-header { border-bottom:1px solid #000; } .comp-detail, .info-block, .callout-box, .tree-q, .sc-q { page-break-inside: avoid; } }",
    ".tree-q-hint { font-size: 12px; color: #888780; margin-bottom: 0.75rem; font-style: italic; line-height: 1.45; }",
    ".tree-btn { font-family: 'Rajdhani', sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.5px; padding: 7px 16px; border-radius: 5px; border: 0.5px solid #3a3a36; background: #242420; color: #e8e6df; cursor: pointer; transition: all 0.12s; text-align: left; }"
  ],
  "cssShared": 86
});
