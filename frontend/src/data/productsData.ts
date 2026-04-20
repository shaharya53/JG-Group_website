import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import officeImg from "../assets/about-office.jpg";
import careersImg from "../assets/careers-team.jpg";
import warehouseImg from "../assets/products-warehouse.jpg";
import heroImg from "../assets/hero-industrial.jpg";

export interface ProductStep {
  title: string;
  detail: string;
  image: string;
}

export interface ProductSection {
  sectionTitle: string;
  sectionDescription: string;
  image: string;
  steps: ProductStep[];
}

export interface Product {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  heroImages: string[];       // 4 images for the hero grid
  skuCount: string;
  stats: { value: string; label: string }[];
  categories: string[];
  highlights: string[];
  sections: ProductSection[];
  ctaLabel?: string;
}

export const productsData: Product[] = [
  /* ─── RAILWAY COMPONENTS ──────────────────────────────────────── */
  {
    slug: "railway-components",
    title: "Railway Components",
    tagline: "500K+ products for Indian Railways — rolling stock, S&T, OHE, KAWACH and depot equipment",
    overview:
      "Jigisha Group is an RDSO-approved supplier offering one of India's widest catalogues of railway components — covering rolling stock parts, signaling equipment, OHE infrastructure, KAWACH systems, depot machinery, station materials and complete spares packages for Production Units and Workshops.",
    heroImages: [railwayImg, warehouseImg, careersImg, heroImg],
    skuCount: "500K+",
    stats: [
      { value: "500K+", label: "SKUs Catalogued" },
      { value: "RDSO", label: "Approved Items" },
      { value: "17", label: "Zones Served" },
      { value: "GeM/IREPS", label: "Empanelled" },
    ],
    categories: [
      "Rolling Stock Parts",
      "Coach Interiors & Furnishing",
      "HVAC & Electrical",
      "Signaling & S&T",
      "OHE Materials",
      "KAWACH Systems",
      "Track Machine Spares",
      "Depot & Workshop Equipment",
      "Station Infrastructure",
      "Fire Detection & Safety",
    ],
    highlights: [
      "RDSO-approved vendor base with full item approvals",
      "IRS specification-compliant materials and documentation",
      "PAN-India warehousing for rapid railway zone dispatch",
      "Single PO for diverse railway needs across all sub-systems",
      "Complete traceability with test reports and COC",
      "GeM and IREPS platform-listed products",
      "Custom kitting and packaging to depot specifications",
      "OEM tie-ups for genuine original parts",
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Coach Components",
        sectionDescription:
          "Complete supply of rolling stock sub-assemblies, coach interior kits, HVAC systems, fire detection equipment and electrical components for ICF, LHB, Vande Bharat and freight stock — all RDSO-listed and IRS-compliant.",
        image: railwayImg,
        steps: [
          { title: "Mechanical Sub-Assemblies", detail: "Wheels, axles, wheelsets, roller bearings, brake blocks, cylinders, distributors, couplers, draft gear, springs and complete bogie sub-assemblies.", image: railwayImg },
          { title: "Coach Interiors & Furnishing", detail: "FRP/GRP panels, vinyl flooring, seats, berths, modular toilets, bio-tanks, gangways, doors, windows and complete interior fit-out kits to RDSO specifications.", image: warehouseImg },
          { title: "HVAC & Electrical Systems", detail: "Roof-mounted AC units, LED coach lights, distribution boards, batteries, alternators, dynamos, fans, mobile-charging sockets and complete pantry equipment.", image: careersImg },
          { title: "Fire Detection & Safety", detail: "Smoke detectors, heat sensors, control panels, fire extinguishers, water-mist systems and coach-grade fire safety kits compliant with RDSO standards.", image: heroImg },
        ],
      },
      {
        sectionTitle: "Signaling, OHE & KAWACH Systems",
        sectionDescription:
          "Comprehensive supply of S&T signaling hardware, 25kV OHE structures and KAWACH (TCAS) components — sourced from RDSO-approved vendors with full testing documentation and traceability.",
        image: defenceImg,
        steps: [
          { title: "Signaling Equipment", detail: "Electronic interlocking sub-assemblies, point machines, relays, axle counters, signaling cables, power supply units and station signaling kits.", image: defenceImg },
          { title: "OHE Materials & Hardware", detail: "Masts, cantilevers, droppers, jumpers, insulators, contact wire, catenary wire, anti-creep and tensioning equipment for 25kV electrification works.", image: greenImg },
          { title: "KAWACH Components", detail: "On-board and trackside KAWACH sub-assemblies, RFID tags, station-side equipment, antennas, cables and full integration kits for TCAS roll-out.", image: metroImg },
          { title: "Track Machine Spares", detail: "Hydraulics, pneumatics, engines, transmissions and tooling consumables for Tamping Machines, BCM, DTS, Ballast Regulators and Tower Wagons.", image: railwayImg },
        ],
      },
      {
        sectionTitle: "Depot, Workshop & Station Supply",
        sectionDescription:
          "Complete supply of depot workshop machinery, inspection equipment, station infrastructure and passenger amenity items — covering all physical infrastructure needs for railway facilities.",
        image: warehouseImg,
        steps: [
          { title: "Depot & Workshop Machinery", detail: "Wheel lathes, axle journal lathes, bogie test rigs, drop tables, wheel presses, hydraulic presses, EOT cranes and inspection equipment.", image: warehouseImg },
          { title: "Station Infrastructure", detail: "Platform shelters, benches, signage, modular toilets, water booths, RO units, escalators, lifts, PA systems and passenger amenities.", image: officeImg },
          { title: "Procurement & Compliance", detail: "Complete GeM and IREPS-listed supply with RDSO vendor codes, IRS spec compliance, type test reports and COC documentation for every batch.", image: heroImg },
          { title: "Kitting & Logistics", detail: "Custom kitting for depot consumption, just-in-time dispatch, reverse logistics for warranty items and PAN-India warehouse distribution.", image: careersImg },
        ],
      },
    ],
    ctaLabel: "Request Railway Catalogue",
  },

  /* ─── METRO RAIL SYSTEMS ──────────────────────────────────────── */
  {
    slug: "metro-rail-systems",
    title: "Metro Rail Systems",
    tagline: "200K+ products for urban transit — rolling stock, station, signaling and AFC systems",
    overview:
      "A comprehensive product portfolio for metro corporations — covering rolling stock electrical and interior items, station MEP, signaling and telecom hardware, automatic fare collection, platform screen doors, escalators, lifts and complete passenger experience systems for both elevated and underground metros.",
    heroImages: [metroImg, defenceImg, officeImg, railwayImg],
    skuCount: "200K+",
    stats: [
      { value: "200K+", label: "SKUs" },
      { value: "EN 45545", label: "Fire-Safe Materials" },
      { value: "12+", label: "Metro Cities" },
      { value: "NCMC", label: "Fare Media" },
    ],
    categories: [
      "Automatic Doors & PSDs",
      "HVAC & Climate Control",
      "ATC & Train Control",
      "Escalators, Lifts & Travelators",
      "Automatic Fare Collection",
      "Passenger Information Systems",
      "CCTV & Surveillance",
      "Interior Fit-out & Flooring",
      "Station Furniture",
      "Telecom & Communication",
    ],
    highlights: [
      "EN 45545-2 fire-safe certified materials",
      "IP65+ outdoor-rated enclosures",
      "Type-tested per EN/IEC standards",
      "NCMC-certified fare media and AFC equipment",
      "Active supply to 12+ metro cities across India",
      "Multi-vendor integration expertise",
      "Available long-term AMC and spares support",
      "Cleanroom assembly facilities",
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Train Systems",
        sectionDescription:
          "Complete product range for metro trainsets — automatic doors, HVAC, ATC sub-assemblies and passenger interior systems meeting EN 45545, IP65+ and international metro standards.",
        image: metroImg,
        steps: [
          { title: "Automatic Doors & PSDs", detail: "Train sliding doors, plug doors, gangway doors, platform screen doors — full-height, half-height with controllers, sensors and obstacle detection.", image: metroImg },
          { title: "HVAC & Climate Control", detail: "Roof-top AC packages, saloon HVAC, driver-cab AC, split units and tunnel ventilation fans engineered for high passenger density metro operations.", image: greenImg },
          { title: "ATC & Train Control Hardware", detail: "Sub-assemblies for CBTC ATC/ATO/ATP systems — antennas, balises, axle counters, on-board computers and trackside controllers.", image: defenceImg },
          { title: "Interior Fit-out & Flooring", detail: "GFRP panels, anti-slip flooring, seats, grab handles, handrails, perch seats and luggage racks meeting EN 45545 fire-safety standards.", image: railwayImg },
        ],
      },
      {
        sectionTitle: "Station Systems & Passenger Experience",
        sectionDescription:
          "Platform screen doors, escalators, fare collection equipment, passenger information displays and accessibility systems — delivering a world-class station experience across India's metro networks.",
        image: officeImg,
        steps: [
          { title: "Escalators, Lifts & Travelators", detail: "Heavy-duty transit-grade escalators, hydraulic and traction lifts, travelators and complete vertical transportation packages with AMC support.", image: officeImg },
          { title: "Automatic Fare Collection", detail: "AFC gates (flap, swing, retractable), TVMs, CSTs, NCMC contactless cards, QR scanners and back-office clearing house software integration.", image: warehouseImg },
          { title: "Passenger Information Systems", detail: "Dynamic LED route maps, LCD displays, PA systems, emergency intercom and integrated passenger info management for complete commuter information.", image: careersImg },
          { title: "CCTV & Station Telecom", detail: "IP cameras, NVR/VMS, video analytics, TETRA radio, IP-PABX, public Wi-Fi and complete station-to-OCC communication hardware.", image: heroImg },
        ],
      },
    ],
    ctaLabel: "Request Metro Catalogue",
  },

  /* ─── DEFENCE & AEROSPACE ─────────────────────────────────────── */
  {
    slug: "defence-aerospace",
    title: "Defence & Aerospace",
    tagline: "150K+ defence-grade products — precision parts, electronic sub-assemblies, strategic materials",
    overview:
      "Jigisha Group supplies a wide range of defence-grade and aerospace-qualified products to Indian Armed Forces, DRDO labs, DPSUs (HAL, BEL, BEML, BDL, MIDHANI), Ordnance Factories and tier-1 OEMs. All items are produced under AS9100, DGAQA and DGQA frameworks with full traceability and compliance documentation.",
    heroImages: [defenceImg, heroImg, railwayImg, careersImg],
    skuCount: "150K+",
    stats: [
      { value: "150K+", label: "SKUs" },
      { value: "AS9100", label: "QMS Certified" },
      { value: "DGQA", label: "Approved" },
      { value: "MIL-STD", label: "Compliant" },
    ],
    categories: [
      "Precision Machined Components",
      "Electronic Sub-Assemblies",
      "Strategic & Specialty Materials",
      "Military Fasteners & Hardware",
      "Aerospace Structural Components",
      "Avionics Parts & Accessories",
      "Body Armour & Protection",
      "Communication & Surveillance",
    ],
    highlights: [
      "AS9100D aerospace quality management system",
      "DGAQA / DGQA / CEMILAC approval links",
      "ITAR-aware manufacturing processes",
      "NDT capabilities: UT, RT, MPI, DPI",
      "Full First Article Inspection per AS9102",
      "Conflict minerals compliance documentation",
      "Security-cleared workforce for strategic programmes",
      "Offset partnership and iDEX participation",
    ],
    sections: [
      {
        sectionTitle: "Precision Components & Materials",
        sectionDescription:
          "5-axis CNC machined precision parts, strategic specialty materials, aerospace structural sub-assemblies and military-grade fasteners — all produced or sourced under AS9100 with full material traceability.",
        image: defenceImg,
        steps: [
          { title: "Precision Machined Parts", detail: "5-axis CNC components in aluminium, titanium, Inconel and stainless steels. Turn-mill parts, micro-machined assemblies for aerospace and defence applications.", image: defenceImg },
          { title: "Strategic & Specialty Materials", detail: "Maraging steels, titanium alloys, Inconel, composites, ballistic fabrics and specialty consumables from approved mills with full mill test certificates.", image: heroImg },
          { title: "Military Fasteners & Hardware", detail: "MIL-STD bolts, screws, rivets, inserts, captive fasteners, lockbolts and aerospace-grade hardware per NAS, NSA and MIL specifications.", image: railwayImg },
          { title: "Aerospace Structural Components", detail: "Sheet metal assemblies, machined frames, ribs, brackets, fittings and structural fasteners for fixed-wing, rotary-wing and UAV airframes.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Electronics, Protection & Surveillance",
        sectionDescription:
          "Electronic sub-assemblies, avionics accessories, body armour and tactical surveillance equipment — meeting stringent MIL-STD, NIJ and BIS standards for armed forces and para-military users.",
        image: heroImg,
        steps: [
          { title: "Electronic Sub-Assemblies & Harnesses", detail: "PCB assemblies, ruggedized enclosures, cable harnesses and integrated LRUs for radar, EW, sonar and avionics applications in AS9100 environment.", image: heroImg },
          { title: "Avionics Parts & Accessories", detail: "Avionics housings, mounting trays, cooling assemblies, EMI/RFI shielding, vibration isolators and GSE accessories for cockpit and bay equipment.", image: defenceImg },
          { title: "Body Armour & Protection Systems", detail: "Bullet-resistant plates, ballistic helmets, soft body armour, vehicle armour panels, armoured glass and PPE meeting NIJ and BIS standards.", image: careersImg },
          { title: "Tactical Communication & Surveillance", detail: "Tactical radios, antennas, thermal imagers, night-vision devices, optical sights and ruggedized communication accessories for field operations.", image: railwayImg },
        ],
      },
    ],
    ctaLabel: "Submit Confidential Requirement",
  },

  /* ─── ELECTRICALS & ELECTRONICS ──────────────────────────────── */
  {
    slug: "electricals-electronics",
    title: "Electricals & Electronics",
    tagline: "400K+ products — panels, switchgear, cables, lighting, drives and automation",
    overview:
      "Jigisha Group offers an end-to-end electrical and electronics catalogue for industrial, commercial, infrastructure and railway applications — from LV/MV switchgear and cables to LED lighting, VFDs, sensors, smart energy management and complete control panel solutions.",
    heroImages: [warehouseImg, greenImg, officeImg, heroImg],
    skuCount: "400K+",
    stats: [
      { value: "400K+", label: "SKUs" },
      { value: "BIS/CE", label: "Certified" },
      { value: "OEM", label: "Authorized Distributor" },
      { value: "PAN-India", label: "Warehouses" },
    ],
    categories: [
      "Panels & Switchgear",
      "Cables & Wires (LT/HT)",
      "LED Lighting Systems",
      "VFD Drives & Soft Starters",
      "Sensors & Instrumentation",
      "Smart Energy Management",
      "UPS & Power Backup",
      "Transformers & Stabilizers",
      "Solar Inverters & Controllers",
      "Industrial Connectors & Terminals",
    ],
    highlights: [
      "BIS/CE/UL certified products",
      "IEC/IS compliant across all categories",
      "Authorized OEM distribution agreements",
      "Custom panel manufacturing capability",
      "Type-tested assemblies with FAT support",
      "NABL-accredited testing reports",
      "Site commissioning and AMC services",
      "GeM listed for government procurement",
    ],
    sections: [
      {
        sectionTitle: "Power Systems & Switchgear",
        sectionDescription:
          "Complete LV/MV power distribution — from switchgear and panels to transformers, UPS and backup systems. All products BIS/CE-certified with authorized OEM distribution and custom panel manufacturing capability.",
        image: warehouseImg,
        steps: [
          { title: "Panels & Switchgear", detail: "PCC, MCC, APFC, control panels, distribution boards, MV switchgear, ACBs, MCCBs, MCBs, RCCBs, contactors and relays built to IEC/IS standards.", image: warehouseImg },
          { title: "Cables & Wires (LT/HT)", detail: "XLPE/PVC LT cables, HT cables up to 33kV, control cables, instrumentation cables, fire-survival cables and special-purpose railway and solar cables.", image: heroImg },
          { title: "Transformers, UPS & Power Backup", detail: "Distribution transformers, isolation transformers, online UPS, industrial UPS, lithium-ion storage, inverters and complete data-center power solutions.", image: officeImg },
          { title: "Smart Energy Management", detail: "Smart meters, energy management systems, power quality analyzers, harmonic filters, capacitor banks and IoT-based energy dashboards.", image: greenImg },
        ],
      },
      {
        sectionTitle: "Drives, Lighting & Automation",
        sectionDescription:
          "VFD drives, BEE star-rated LED lighting, industrial sensors and automation components — energy-efficient products for manufacturing, infrastructure and commercial applications.",
        image: greenImg,
        steps: [
          { title: "VFD Drives & Soft Starters", detail: "Variable frequency drives, soft starters, servo drives and motion controllers for pumps, fans, compressors, conveyors and machine tools.", image: greenImg },
          { title: "LED Lighting Systems", detail: "Industrial high-bays, street lights, flood lights, smart lighting, solar street lights and architectural lighting with BEE star ratings.", image: officeImg },
          { title: "Sensors & Instrumentation", detail: "Temperature, pressure, flow, level, vibration and proximity sensors; transmitters, indicators, gas analyzers and process instrumentation.", image: defenceImg },
          { title: "Solar Inverters & Connectors", detail: "String inverters, MPPT charge controllers, hybrid inverters and heavy-duty industrial connectors, terminal blocks, cable glands and junction boxes.", image: warehouseImg },
        ],
      },
    ],
    ctaLabel: "Request Electrical Catalogue",
  },

  /* ─── GREEN ENERGY ────────────────────────────────────────────── */
  {
    slug: "green-energy",
    title: "Green Energy",
    tagline: "100K+ products — solar, bio-energy, storage, smart grid and energy efficiency",
    overview:
      "Aligned with India's net-zero and renewable energy mission, Jigisha Group supplies a complete catalogue of green energy products — solar PV systems, bio-CNG plant equipment, energy storage, smart metering, EV charging and waste-to-energy systems for industrial, commercial, agricultural and utility customers.",
    heroImages: [greenImg, warehouseImg, heroImg, officeImg],
    skuCount: "100K+",
    stats: [
      { value: "100K+", label: "SKUs" },
      { value: "MNRE", label: "Approved" },
      { value: "ALMM", label: "Listed Modules" },
      { value: "BEE", label: "Star Rated" },
    ],
    categories: [
      "Solar Panels & Modules",
      "Solar Pumps & Controllers",
      "Bio-CNG Plant Equipment",
      "Energy Monitoring Systems",
      "Waste-to-Energy Systems",
      "LED Energy-Efficient Lighting",
      "Battery Storage Systems",
      "Smart Meters & Grid Solutions",
      "EV Charging Infrastructure",
      "Solar BoS & Mounting",
    ],
    highlights: [
      "MNRE approved and ALMM-listed solar modules",
      "BIS/IEC certified across all product categories",
      "PM-KUSUM scheme specialist with CFA documentation",
      "CAPEX and RESCO financing model support",
      "DISCOM net-metering liaison and CEIG approvals",
      "Performance monitoring and O&M services",
      "ESG reporting and ISO 50001 EnMS alignment",
      "Complete end-to-end green energy lifecycle",
    ],
    sections: [
      {
        sectionTitle: "Solar Power & Renewable Systems",
        sectionDescription:
          "ALMM-listed solar modules, PM-KUSUM solar pumps, battery storage systems and EV charging infrastructure — India's most comprehensive renewable energy product portfolio.",
        image: greenImg,
        steps: [
          { title: "Solar Panels & Modules", detail: "Mono-PERC, bifacial, TOPCon and HJT modules from ALMM-listed manufacturers, 400W–700W for rooftop, ground-mount and utility-scale projects.", image: greenImg },
          { title: "Solar Pumps & PM-KUSUM", detail: "AC and DC solar water pumps under PM-KUSUM scheme — surface, submersible and centrifugal pumps with VFD controllers and complete BoS.", image: heroImg },
          { title: "Battery Storage Systems", detail: "Lithium-ion battery packs, BMS, container BESS, residential and commercial storage and grid-scale energy storage with integration services.", image: officeImg },
          { title: "EV Charging Infrastructure", detail: "AC slow chargers, DC fast chargers, ultra-fast chargers, OCPP back-end software, billing platforms and complete EV charging station packages.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Bio-Energy, Smart Grid & Waste-to-Energy",
        sectionDescription:
          "Bio-CNG plant equipment, smart energy monitoring systems, waste-to-energy packages and grid-smart metering solutions for a complete clean-energy ecosystem.",
        image: warehouseImg,
        steps: [
          { title: "Bio-CNG Plant Equipment", detail: "Anaerobic digesters, gas holders, biogas upgradation skids, compressors, scrubbers and complete bio-CNG package plants for organic waste-to-fuel.", image: warehouseImg },
          { title: "Energy Monitoring & Smart Meters", detail: "Smart energy meters, power quality analyzers, IoT energy dashboards, AMI head-end systems, DCUs and prepaid metering for utilities.", image: greenImg },
          { title: "Waste-to-Energy Systems", detail: "Municipal solid waste incinerators, biomass gasifiers, RDF systems, ORC turbines and complete waste-to-power packages with emission control.", image: heroImg },
          { title: "Solar BoS & Mounting Structures", detail: "Module mounting structures, trackers, junction boxes, DC cables, fuses, surge protectors, lightning arresters and complete balance-of-system kits.", image: defenceImg },
        ],
      },
    ],
    ctaLabel: "Request Green Energy Catalogue",
  },

  /* ─── INDUSTRIAL MACHINERY ────────────────────────────────────── */
  {
    slug: "industrial-machinery",
    title: "Industrial Machinery",
    tagline: "300K+ machines, tools and automation systems for manufacturing & process industries",
    overview:
      "Jigisha Group offers a comprehensive catalogue of industrial machinery for plants across steel, automotive, cement, chemicals, FMCG, pharma and engineering sectors. From CNC machines and fabrication tools to conveyor systems, pumps, compressors and complete automation packages — we deliver the equipment that runs Indian factories.",
    heroImages: [warehouseImg, heroImg, careersImg, defenceImg],
    skuCount: "300K+",
    stats: [
      { value: "300K+", label: "SKUs" },
      { value: "OEM", label: "Tie-ups" },
      { value: "CE/BIS", label: "Certified" },
      { value: "Turnkey", label: "Installation" },
    ],
    categories: [
      "CNC Machines & Lathes",
      "Fabrication & Welding Equipment",
      "Material Handling Cranes & Hoists",
      "Conveyor Systems & Belts",
      "Automation & Robotics",
      "Compressors & Pneumatic Tools",
      "Pumps & Valves",
      "Industrial Safety Equipment",
      "Process Equipment",
      "Tooling & Workshop Tools",
    ],
    highlights: [
      "OEM authorized distribution for top global brands",
      "CE/BIS/UL certified machinery",
      "Turnkey installation and commissioning",
      "Foundation, alignment and operator training",
      "AMC and spares lifecycle contracts",
      "Reverse engineering and used machinery refurbishment",
      "Plant layout consulting and energy-efficient retrofit",
      "Industry 4.0 enablement and IIoT integration",
    ],
    sections: [
      {
        sectionTitle: "Machine Tools, Fabrication & Automation",
        sectionDescription:
          "CNC machining centers, fabrication equipment, industrial robots and automation systems — engineered supply for manufacturing plants across India's major industrial sectors.",
        image: warehouseImg,
        steps: [
          { title: "CNC Machines & Machine Tools", detail: "VMC, HMC, CNC turning centers, conventional lathes, milling, grinding, EDM and wire-cut machines from leading domestic and global brands.", image: warehouseImg },
          { title: "Fabrication & Welding Equipment", detail: "MIG, TIG, SAW, plasma/laser cutting, press brakes, shearing, rolling, ironworkers and complete fabrication-shop equipment packages.", image: heroImg },
          { title: "Automation & Robotics", detail: "6-axis industrial robots, cobots, SCARA, delta robots, machine vision, automation cells, AGVs, AS/RS and Industry 4.0 integration.", image: defenceImg },
          { title: "Material Handling & Cranes", detail: "EOT cranes, gantry, jib cranes, electric hoists, monorails and complete material handling solutions with installation and commissioning.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Utilities, Conveyors, Pumps & Safety",
        sectionDescription:
          "Compressors, conveyor systems, pumps, valves and industrial safety equipment — the complete utilities and consumables portfolio for efficient plant operations.",
        image: heroImg,
        steps: [
          { title: "Conveyor Systems", detail: "Belt, roller, chain, screw, pneumatic conveyors, AGVs, slat conveyors and conveyor belts in fabric and steel for all material handling needs.", image: heroImg },
          { title: "Compressors, Pumps & Valves", detail: "Screw, reciprocating and oil-free compressors; centrifugal, gear, peristaltic pumps; ball, gate, globe and control valves for all process duties.", image: warehouseImg },
          { title: "Process Equipment", detail: "Reactors, mixers, dryers, evaporators, filters, centrifuges, heat exchangers and unit operations equipment for process and specialty chemical plants.", image: careersImg },
          { title: "Industrial Safety Equipment", detail: "PPE, fall protection, gas detectors, fire safety, lockout-tagout systems, safety signage and emergency response equipment to ISO 45001 standards.", image: greenImg },
        ],
      },
    ],
    ctaLabel: "Request Machinery Catalogue",
  },

  /* ─── AUTOMOBILE PARTS ────────────────────────────────────────── */
  {
    slug: "automobile-parts",
    title: "Automobile Parts",
    tagline: "250K+ products — IC engine spares, EV components, lubricants, tyres, fleet supplies",
    overview:
      "Jigisha Group is a trusted multi-brand auto parts and fleet-supply partner for OEMs, dealers, fleet operators, transport corporations and after-market workshops. Our portfolio spans IC engine spares, EV components, batteries, tyres, lubricants and complete fleet maintenance kits with rapid PAN-India distribution.",
    heroImages: [warehouseImg, careersImg, heroImg, greenImg],
    skuCount: "250K+",
    stats: [
      { value: "250K+", label: "SKUs" },
      { value: "Multi-brand", label: "Coverage" },
      { value: "OEM", label: "Authorized" },
      { value: "Same-day", label: "Dispatch" },
    ],
    categories: [
      "Engine Spares & Accessories",
      "EV Components & Batteries",
      "Lubricants & Coolants",
      "Tyres, Tubes & Brakes",
      "Fleet Maintenance Supplies",
      "Body Parts & Panels",
      "Electrical & Lighting",
      "Filters & Consumables",
    ],
    highlights: [
      "OEM authorized distribution with genuine parts guarantee",
      "ARAI/BIS compliant components",
      "Multi-brand catalogue covering all major Indian and global vehicles",
      "Dedicated VMI and fleet-supply contracts",
      "Cold-chain logistics for EV batteries",
      "Reverse logistics and warranty management",
      "Same-day dispatch from PAN-India warehouses",
      "Comprehensive EV component portfolio",
    ],
    sections: [
      {
        sectionTitle: "Engine Spares, EV Components & Lubricants",
        sectionDescription:
          "Genuine OEM and OE-equivalent engine spares, comprehensive EV powertrain components, premium lubricants and complete tyre-and-brake products for passenger, commercial and electric vehicles.",
        image: warehouseImg,
        steps: [
          { title: "Engine Spares & Accessories", detail: "Pistons, rings, liners, gaskets, bearings, crankshafts, valves, timing chains, water pumps and complete engine overhaul kits for cars, CVs and tractors.", image: warehouseImg },
          { title: "EV Components & Batteries", detail: "Lithium-ion battery packs, BMS, motor controllers, traction motors, on-board chargers, DC-DC converters and complete EV powertrain components.", image: greenImg },
          { title: "Lubricants & Coolants", detail: "Engine oils, gear oils, transmission fluids, hydraulic oils, brake fluids, coolants, greases and specialty lubricants with bulk fleet supply options.", image: heroImg },
          { title: "Tyres, Tubes & Brakes", detail: "Passenger, CV, off-highway and two-wheeler tyres; brake pads, shoes, discs, master cylinders, calipers and complete brake-system parts.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Fleet Supplies, Body Parts & Electrical",
        sectionDescription:
          "Complete fleet maintenance consumables, body panel supply, electrical components and workshop tooling — single-window procurement for fleet operators, workshops and OEM dealers.",
        image: careersImg,
        steps: [
          { title: "Fleet Maintenance Supplies", detail: "Filters, wipers, bulbs, batteries, belts, hoses, fuses and complete fleet upkeep consumables with VMI and stocking for large transport operators.", image: careersImg },
          { title: "Body Parts & Panels", detail: "Bumpers, fenders, doors, bonnets, windscreens, lamp assemblies, mirrors and exterior body trim for popular Indian car and CV models.", image: warehouseImg },
          { title: "Electrical, Lighting & Sensors", detail: "Starters, alternators, ignition coils, spark plugs, sensors, headlamps, tail lamps, indicators, wiring harnesses and ECUs for all vehicle types.", image: heroImg },
          { title: "Filters, Consumables & Distribution", detail: "Oil, air, fuel and cabin filters; fuel additives, cleaners and complete service-kit supplies with same-day dispatch from PAN-India warehouses.", image: greenImg },
        ],
      },
    ],
    ctaLabel: "Request Auto Parts Catalogue",
  },

  /* ─── AGRO & PHARMA ───────────────────────────────────────────── */
  {
    slug: "agro-pharma",
    title: "Agro & Pharma",
    tagline: "200K+ products for farms, FPOs, hospitals, pharma plants and labs",
    overview:
      "A combined catalogue serving India's agriculture and healthcare value chains — from seeds, fertilizers and farm machinery to APIs, medical devices, lab equipment and hospital consumables. Jigisha Group is a single procurement partner for FPOs, agri-businesses, hospitals, pharma manufacturers and research labs.",
    heroImages: [greenImg, officeImg, warehouseImg, careersImg],
    skuCount: "200K+",
    stats: [
      { value: "200K+", label: "SKUs" },
      { value: "CDSCO", label: "Compliant" },
      { value: "FCO/CIB", label: "Registered" },
      { value: "WHO-GMP", label: "Sourced" },
    ],
    categories: [
      "Seeds & Planting Material",
      "Fertilizers & Crop Protection",
      "Agro Machinery & Implements",
      "APIs & Excipients",
      "Medical Devices & Diagnostics",
      "Lab & Analytical Equipment",
      "Cold Chain Packaging",
      "Veterinary Products",
      "Hospital Consumables",
      "Drip & Micro-Irrigation",
    ],
    highlights: [
      "CDSCO licensed for medical devices and pharma",
      "FCO / CIB registered fertilizers and crop protection",
      "WHO-GMP sourced APIs and pharmaceutical materials",
      "Cold-chain validated logistics for vaccines and biologics",
      "Tender supply specialist for CGHS, ESIC and Govt hospitals",
      "FPO procurement support with bulk pricing",
      "PMKSY-compliant micro-irrigation installations",
      "End-to-end calibration and lab validation services",
    ],
    sections: [
      {
        sectionTitle: "Agriculture: Seeds, Inputs & Machinery",
        sectionDescription:
          "Complete agri-input catalogue — hybrid seeds, FCO/CIB-registered fertilizers and crop protection products, farm machinery and PMKSY-compliant micro-irrigation systems for FPOs, agri-businesses and individual farmers.",
        image: greenImg,
        steps: [
          { title: "Seeds & Planting Material", detail: "Hybrid seeds, certified seeds, vegetable seeds, fruit saplings, tissue-cultured plants, fodder seeds and complete planting kits from approved producers.", image: greenImg },
          { title: "Fertilizers & Crop Protection", detail: "Urea, DAP, NPK, micronutrients, biofertilizers, organic manures, pesticides, herbicides, fungicides and bio-pesticides registered under FCO and CIB.", image: heroImg },
          { title: "Agro Machinery & Implements", detail: "Tractors, power tillers, rotavators, seed drills, sprayers, harvesters and complete farm mechanization equipment for modernized agriculture.", image: warehouseImg },
          { title: "Drip & Micro-Irrigation", detail: "Drip lines, emitters, sprinklers, filters, fertigation units and controllers — complete PMKSY-compliant micro-irrigation packages with installation.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Pharma: APIs, Medical Devices & Lab Equipment",
        sectionDescription:
          "WHO-GMP sourced APIs, CDSCO-compliant medical devices, complete QC lab packages and validated cold-chain packaging — covering India's entire pharmaceutical and healthcare value chain.",
        image: officeImg,
        steps: [
          { title: "APIs, Excipients & Packaging", detail: "Active Pharmaceutical Ingredients, intermediates, excipients and pharma-grade chemicals from WHO-GMP and US-FDA approved manufacturers.", image: officeImg },
          { title: "Medical Devices & Diagnostics", detail: "Patient monitors, ventilators, ECG, ultrasound, surgical instruments, diagnostic kits, IVD reagents and POC testing devices.", image: warehouseImg },
          { title: "Lab & Analytical Equipment", detail: "HPLC, GC, UV-Vis, FTIR, dissolution apparatus, autoclaves, incubators, centrifuges, microscopes and complete QC lab packages.", image: careersImg },
          { title: "Cold Chain & Hospital Consumables", detail: "Vaccine carriers, ice-lined refrigerators, IoT-monitored cold-chain logistics; surgical disposables, IV sets, gloves, sutures and OT consumable packages.", image: greenImg },
        ],
      },
    ],
    ctaLabel: "Request Agro & Pharma Catalogue",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
