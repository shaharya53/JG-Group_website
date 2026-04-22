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

export interface ProductItem {
  name: string;
  spec: string;
  category: string;
  brand?: string;
  tags: string[];
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
  productItems?: ProductItem[];
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
    productItems: [
      { name: "LHB Wheel Set Assembly",          spec: "920mm dia, IS 6362, axle bore 130mm, for BG LHB coaches",              category: "Rolling Stock Parts",          brand: "RWF / BEML",     tags: ["RDSO Approved", "IRS compliant"] },
      { name: "FRP Coach Side Panel",            spec: "2000×1000×4mm, glass-fibre reinforced, IS 2046, fire class F1",        category: "Coach Interiors & Furnishing", brand: "Associated",     tags: ["RDSO Approved", "IS 2046"] },
      { name: "Roof-Mounted AC Unit",            spec: "4.5TR / 6TR, 3-phase 415V, RDSO spec No. ELRS/SPEC/AC-0010",          category: "HVAC & Electrical",            brand: "Subros / BAPL",  tags: ["RDSO Approved", "IRS SPEC"] },
      { name: "Electronic Point Machine",        spec: "24V DC, max throw 220mm, CDU compatible, IP55",                        category: "Signaling & S&T",              brand: "Alstom / Kyosan", tags: ["RDSO Approved", "EN 50129"] },
      { name: "OHE Contact Wire",                spec: "107 mm², cadmium copper, BS 215 Pt. 2, 1600m reel",                   category: "OHE Materials",                brand: "Kanpur/Agra",    tags: ["IRS ETI-OHE-16", "RDSO Approved"] },
      { name: "KAWACH On-Board Unit",            spec: "TCAS-compliant, 4G LTE + GSM-R, ALP display, SIL-4",                 category: "KAWACH Systems",               brand: "Medha / HBL",    tags: ["RDSO Spec STS", "SIL-4"] },
      { name: "Tamping Machine Hydraulic Pump",  spec: "280 bar, SAE-B flange, 45cc/rev, compatible with Duomatic 09-32",     category: "Track Machine Spares",         brand: "Bosch Rexroth",  tags: ["OEM Equivalent", "RDSO Listed"] },
      { name: "Wheel Lathe (CNC Underfloor)",    spec: "Wheel dia 840–1250mm, turning ±0.01mm, auto-profile, BG/MG",         category: "Depot & Workshop Equipment",   brand: "RAFAMET / HMT",  tags: ["CE Certified", "RDSO Spec"] },
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
    productItems: [
      { name: "Platform Screen Door (Full-Height)", spec: "2100mm H, 1400mm W opening, DC brushless motor, IP54, EN 50155",   category: "Automatic Doors & PSDs",       brand: "Nabtesco / Gilgen", tags: ["EN 45545", "IP54"] },
      { name: "Metro Saloon AC Package",             spec: "7.5kW cooling, 415V 3-ph, refrigerant R-32, EN 50155 rail grade",  category: "HVAC & Climate Control",       brand: "Faiveley / Sigma",  tags: ["EN 50155", "EN 45545-2"] },
      { name: "CBTC Transponder Balise",             spec: "Eurobalise SRS 3.6.0, 1000 kHz uplink, IP67, -40°C to +70°C",    category: "ATC & Train Control",          brand: "Alstom / Siemens",  tags: ["CENELEC SIL-4", "EN 50159"] },
      { name: "Passenger Information Display",       spec: "32\" TFT, 2000 nit, HDMI+Ethernet, GTFS-RT compatible, IP54",    category: "Passenger Information Systems", brand: "Luminator / Info-Sys", tags: ["IP54", "EN 50155"] },
      { name: "AFC Flap Gate",                       spec: "NCMC + QR + NFC, throughput 40 pax/min, SLA 99.9%, CE marked",   category: "Automatic Fare Collection",    brand: "Scheidt & Bachmann", tags: ["NCMC Certified", "CE Marked"] },
      { name: "Traction Lift (Station)",             spec: "MRL, 1000kg, 1.0m/s, 4-stop, EN 81-20, IP43 machine room",       category: "Escalators, Lifts & Travelators", brand: "KONE / Otis",    tags: ["EN 81-20", "BEE Rated"] },
      { name: "IP Dome Camera (Station)",            spec: "4MP, IR 30m, H.265, IP66, IK10, ONVIF, -20°C to +60°C",         category: "CCTV & Surveillance",          brand: "Axis / Hikvision",  tags: ["IP66", "ONVIF"] },
      { name: "Anti-Slip Saloon Flooring",           spec: "3mm PVC, R11 anti-slip, EN 45545-2 HL3, welded seams, BG gauge", category: "Interior Fit-out & Flooring",  brand: "Tarkett / Altro",   tags: ["EN 45545-2", "R11 Anti-Slip"] },
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
    productItems: [
      { name: "Titanium 6Al-4V Precision Part",     spec: "±0.005mm tolerance, 5-axis CNC, AMS 4928, AS9100 lot traceability", category: "Precision Machined Components",    brand: "In-house",       tags: ["AS9100D", "AMS 4928"] },
      { name: "Ballistic Steel Plate (AR500)",       spec: "6mm / 10mm, NIJ Level III, Brinell 500–550 HB, 1000×2000mm",       category: "Strategic & Specialty Materials", brand: "SAIL / ISRO",    tags: ["NIJ III", "BIS Certified"] },
      { name: "MIL-SPEC High-Tensile Bolt",          spec: "M8–M36, Grade 12.9, MIL-S-8879, cadmium plated, 100% magnetic test", category: "Military Fasteners & Hardware",  brand: "SPS Technologies", tags: ["MIL-STD", "NAS Spec"] },
      { name: "PCB Assembly (MIL-STD-454)",          spec: "Class 3 IPC-A-610, conformal coated, Ruggedized, -40°C to +85°C",  category: "Electronic Sub-Assemblies",       brand: "In-house",       tags: ["IPC Class 3", "MIL-STD-454"] },
      { name: "Soft Body Armour Vest",               spec: "NIJ 0101.06 Level IIIA, UHMWPE core, size S–2XL, 3.2 kg",         category: "Body Armour & Protection",        brand: "MKU",            tags: ["NIJ Level IIIA", "DGQA Approved"] },
      { name: "Ruggedized Tactical Radio",           spec: "30–512 MHz, 25W, AES-256, IP67, MIL-STD-810H, SINCGARS compat.",  category: "Communication & Surveillance",    brand: "BEL / Harris",   tags: ["MIL-STD-810H", "IP67"] },
      { name: "Airframe Sheet Metal Assembly",       spec: "Al 7075-T6 ribs + stringers, AS9100, FAI per AS9102, NDT cleared", category: "Aerospace Structural Components", brand: "HAL Tier-1",     tags: ["AS9100D", "AS9102 FAI"] },
      { name: "Thermal Imager (Handheld)",           spec: "384×288 resolution, <50mK NETD, 19mm lens, 600m detection, IP67",  category: "Communication & Surveillance",    brand: "FLIR / BEL",     tags: ["IP67", "MIL-STD-810H"] },
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
    productItems: [
      { name: "MCC Panel (Motor Control Centre)",   spec: "415V, 3-ph, 50Hz, up to 6300A, draw-out type, IEC 61439-2",        category: "Panels & Switchgear",           brand: "Schneider / ABB",  tags: ["IEC 61439-2", "BIS Certified"] },
      { name: "XLPE HT Cable 11kV",                 spec: "3C×240 sq mm, XLPE insulation, IS 7098, armoured, 11kV grade",     category: "Cables & Wires (LT/HT)",        brand: "KEI / Polycab",    tags: ["IS 7098", "BIS Marked"] },
      { name: "VFD Drive (AC Drive)",               spec: "5.5kW–560kW, 415V 3-ph, IP55, built-in EMC filter, MODBUS RTU",   category: "VFD Drives & Soft Starters",    brand: "ABB / Siemens",    tags: ["CE Marked", "IEC 61800-5"] },
      { name: "Industrial LED High-Bay 150W",       spec: "150W, 21000 lm, IP65, IK08, 5700K, BEE 5-star, DLC listed",       category: "LED Lighting Systems",          brand: "Philips / Havells", tags: ["BEE 5-Star", "IP65"] },
      { name: "Online UPS 60kVA",                   spec: "60kVA/54kW, DSP-based, IGBT, 0.9PF, N+1 parallel, IEC 62040-3",  category: "UPS & Power Backup",            brand: "APC / Vertiv",     tags: ["IEC 62040-3", "CE Marked"] },
      { name: "Smart Energy Meter (CT Operated)",   spec: "3-ph 4W, MID approved, RS-485 MODBUS, IS 16444, tamper-proof",    category: "Smart Energy Management",       brand: "Secure / L&T",     tags: ["MID Approved", "IS 16444"] },
      { name: "Pressure Transmitter 4–20mA",        spec: "0–100 bar, ±0.075% accuracy, SS 316L, IP67, HART protocol",       category: "Sensors & Instrumentation",     brand: "Endress+Hauser",   tags: ["ATEX Zone-2", "IP67"] },
      { name: "100kVA Distribution Transformer",    spec: "11kV/433V, CRGO core, ONAN, IS 1180, BEE star rated, outdoor type", category: "Transformers & Stabilizers",   brand: "EMCO / Voltamp",   tags: ["BEE Star", "IS 1180"] },
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
    productItems: [
      { name: "Bifacial Solar Module 550W",         spec: "182mm cell, TOPCon, 21.4% eff., IEC 61215, 30-yr linear warranty",  category: "Solar Panels & Modules",        brand: "Waaree / Adani",   tags: ["ALMM Listed", "IEC 61215"] },
      { name: "PM-KUSUM Solar Pump 7.5HP",          spec: "7.5HP DC surface, MPPT VFD, IS 16221, Ah-rated MNRE empanelled",   category: "Solar Pumps & Controllers",     brand: "CRI / Grundfos",   tags: ["MNRE Empanelled", "PM-KUSUM"] },
      { name: "Lithium-Ion BESS 100kWh",            spec: "100kWh, LFP cells, ≥4000 cycles, BMS with cloud monitoring, IP54",  category: "Battery Storage Systems",       brand: "Exicom / Amara Raja", tags: ["IEC 62619", "IP54"] },
      { name: "DC Fast EV Charger 60kW",            spec: "60kW, CCS2 + CHAdeMO, OCPP 2.0, 95% efficiency, IP55",             category: "EV Charging Infrastructure",    brand: "Exicom / Delta",   tags: ["BIS Certified", "OCPP 2.0"] },
      { name: "Bio-CNG Upgradation Skid",           spec: "500 Nm³/hr capacity, PSA + membrane, 97% CH4 purity, skid-mounted", category: "Bio-CNG Plant Equipment",       brand: "In-house EPC",     tags: ["MNRE Approved", "CPCB Norm"] },
      { name: "Smart Net Meter (Bidirectional)",     spec: "3-ph, AMR + GPRS, ToD tariff, IS 16444, anti-tamper, seal-proof",  category: "Smart Meters & Grid Solutions", brand: "Secure / HPL",     tags: ["IS 16444", "DISCOMS Approved"] },
      { name: "String Solar Inverter 25kW",         spec: "25kW, 3-ph, MPPT 98.6%, 1000V DC, IP66, IS 16221 compliant",      category: "Solar Inverters & Controllers", brand: "SMA / Sungrow",    tags: ["IEC 62109", "IS 16221"] },
      { name: "Aluminium Module Mounting Structure", spec: "Al 6005-T5, ground-mount, 0°–15° tilt, wind load 180 km/h, hot-dip GI fasteners", category: "Solar BoS & Mounting", brand: "Esdee / Structo",  tags: ["IS 2062", "Hot-Dip GI"] },
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
    productItems: [
      { name: "VMC Machining Centre 4-Axis",        spec: "Table 1000×500mm, spindle 10000 RPM, FANUC 0iMF, BT40, ±0.005mm",  category: "CNC Machines & Lathes",               brand: "BFW / JYOTI",      tags: ["CE Certified", "FANUC"] },
      { name: "MIG Welding Machine 500A",           spec: "500A, CO₂/MAG, synergic, 40% duty cycle, IP23, IS 10628",         category: "Fabrication & Welding Equipment",      brand: "Lincoln / ESAB",   tags: ["IS 10628", "CE Marked"] },
      { name: "EOT Crane 20T Double Girder",        spec: "20T SWL, 20m span, IS 3177, Class M5, FEM Group 3m, IP55 motors", category: "Material Handling Cranes & Hoists",    brand: "Hercules / Elecon", tags: ["IS 3177", "BIS Certified"] },
      { name: "Screw Air Compressor 75kW",          spec: "75kW, 10 bar, 424 CFM, IE3 motor, IP55, integrated dryer option", category: "Compressors & Pneumatic Tools",         brand: "Atlas Copco / Elgi", tags: ["CE Marked", "IE3 Motor"] },
      { name: "Heavy-Duty Belt Conveyor",           spec: "800mm belt width, 15m length, variable speed VFD, IS 1891",       category: "Conveyor Systems & Belts",             brand: "Fenner / Continental", tags: ["IS 1891", "CE Certified"] },
      { name: "6-Axis Industrial Robot 20kg",       spec: "20kg payload, ±0.02mm repeatability, IP67, KUKA KRC5 controller", category: "Automation & Robotics",                brand: "KUKA / Fanuc",     tags: ["CE Marked", "ISO 10218"] },
      { name: "Centrifugal Pump 100HP",             spec: "100HP, 3600 LPM, 80m head, SS 316 impeller, IS 9137, API 610",   category: "Pumps & Valves",                       brand: "KSB / Kirloskar",  tags: ["IS 9137", "API 610"] },
      { name: "Full-Body Harness (Fall Arrest)",    spec: "EN 361, 140kg rated, polyester webbing, 5-point, IS 3521",        category: "Industrial Safety Equipment",          brand: "Karam / 3M",       tags: ["EN 361", "IS 3521"] },
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
    productItems: [
      { name: "LHB Crankshaft (Heavy CV)",          spec: "Induction hardened, nodular CI, ARAI approved, BS VI compatible",  category: "Engine Spares & Accessories",  brand: "Mahindra OEM",     tags: ["OEM Genuine", "ARAI Certified"] },
      { name: "LFP Battery Pack 72V/100Ah",         spec: "72V 100Ah, BMS + CAN, ≥2000 cycles, IP67, UN38.3 transport cert",  category: "EV Components & Batteries",    brand: "Exide / Amara Raja", tags: ["AIS 038", "UN38.3"] },
      { name: "Synthetic Engine Oil 15W-40 (208L)", spec: "CI-4 Plus / SL, API certified, 208L drum, BS VI engine approved",  category: "Lubricants & Coolants",        brand: "Castrol / Shell",  tags: ["API CI-4 Plus", "BS VI Approved"] },
      { name: "Truck Tyre 295/80 R22.5",            spec: "295/80 R22.5, tubeless, load index 152, speed 'J', 6-star BEE",   category: "Tyres, Tubes & Brakes",        brand: "MRF / Bridgestone", tags: ["BIS Certified", "BEE 6-Star"] },
      { name: "Disc Brake Pad Set",                 spec: "Front axle, low-metallic, ECE R90 homologated, for BS VI CVs",    category: "Tyres, Tubes & Brakes",        brand: "Rane / Jurid",     tags: ["ECE R90", "OEM Equivalent"] },
      { name: "Oil Filter (Spin-On)",               spec: "β₁₀=200, SAE thread 3/4-16 UNF, compatible 1000+ CV models",     category: "Filters & Consumables",        brand: "Fleetguard / Mann", tags: ["OEM Equivalent", "IS 11029"] },
      { name: "LED Headlamp Assembly (Tata BS VI)", spec: "LED + DRL, 6000K, IP67, plug-and-play, L+R pair",                 category: "Electrical & Lighting",        brand: "Lumax / Valeo",    tags: ["IP67", "AIS 008"] },
      { name: "Starter Motor 24V 5.5kW",           spec: "24V 5.5kW, Bosch type, IP55, compatible Cummins / Kirloskar",     category: "Electrical & Lighting",        brand: "Bosch / Minda",    tags: ["BIS Certified", "OEM Equiv."] },
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
    productItems: [
      { name: "Hybrid Maize Seed (DKC 9144)",       spec: "80-day, 11T/ha yield potential, drought tolerant, 5kg pouch",       category: "Seeds & Planting Material",     brand: "Dekalb / Pioneer",  tags: ["FCO Registered", "CIB Approved"] },
      { name: "NPK Fertilizer 20-20-0",             spec: "50kg bag, FCO notified, water soluble, S18%, SSAI certified",       category: "Fertilizers & Crop Protection", brand: "Coromandel / IFFCO", tags: ["FCO Notified", "SSAI"] },
      { name: "Power Tiller 7HP (2-wheel)",         spec: "7HP diesel, reversible blades, 90cm working depth, 800kg",         category: "Agro Machinery & Implements",   brand: "VST / Krishi",      tags: ["BIS Certified", "GeM Listed"] },
      { name: "Drip Inline Emitter 4LPH",           spec: "16mm, 4 LPH, 0.5–3.5 bar, inline, anti-siphon, UV stabilized",    category: "Drip & Micro-Irrigation",       brand: "Netafim / Jain",    tags: ["IS 13487", "PMKSY Approved"] },
      { name: "Metformin HCl API (GMP)",            spec: "USP/IP grade, 99.5% purity, WHO-GMP CoA, ICH Q7 compliant",       category: "APIs & Excipients",             brand: "Sun Pharma / Ipca",  tags: ["WHO-GMP", "US-FDA DMF"] },
      { name: "Patient Monitor 5-Para",             spec: "SpO2, ECG, NIBP, Temp, RR; 12\" TFT; CDSCO Cl. B; HL7 output",   category: "Medical Devices & Diagnostics", brand: "BPL Medical / Contec", tags: ["CDSCO Licensed", "IEC 60601"] },
      { name: "HPLC System (Isocratic)",            spec: "Binary pump, UV/VIS DAD detector, 12,000 PSI, IS/USP compliant",   category: "Lab & Analytical Equipment",    brand: "Waters / Shimadzu",  tags: ["IQ/OQ Ready", "NABL Supported"] },
      { name: "Vaccine Ice-Lined Refrigerator",     spec: "+2°C to +8°C, 320L, IoT logger, WHO PQS E003/032 certified",      category: "Cold Chain Packaging",          brand: "Vestfrost / Haier",  tags: ["WHO PQS", "CPCB Compliant"] },
    ],
    ctaLabel: "Request Agro & Pharma Catalogue",
  },

  /* ─── ELECTRONICS & GADGETS ───────────────────────────────────── */
  {
    slug: "electronics-gadgets",
    title: "Electronics & Gadgets",
    tagline: "2,400+ consumer electronics, smart devices and accessories for retail, institutions and distributors",
    overview:
      "Jigisha Retails offers a curated catalogue of 2,400+ electronics and gadgets — from smartphones and laptops to smart home devices, audio gear, cameras and IT peripherals. Whether you're a retail buyer, institutional procurer or B2B distributor, we supply genuine, BIS-certified products backed by manufacturer warranties and PAN-India logistics.",
    heroImages: [officeImg, careersImg, warehouseImg, heroImg],
    skuCount: "2,400+",
    stats: [
      { value: "2,400+", label: "SKUs Catalogued" },
      { value: "BIS",    label: "Certified Products" },
      { value: "50+",    label: "Brands Partnered" },
      { value: "PAN",    label: "India Delivery" },
    ],
    categories: [
      "Smartphones & Accessories",
      "Audio & Wearables",
      "Smart Home Devices",
      "Laptops & Tablets",
      "Cameras & Optics",
      "Gaming & Entertainment",
      "Power & Charging",
      "Networking & IT Peripherals",
    ],
    highlights: [
      "BIS certified and ISI marked products across all categories",
      "Genuine manufacturer warranty on every product",
      "Authorized distributor tie-ups with 50+ leading brands",
      "Competitive B2B bulk pricing with institutional billing",
      "Same-day dispatch from PAN-India fulfillment centres",
      "Private label options for white-label retail programmes",
      "Corporate gifting and bulk institutional order support",
      "30-day return and exchange with warranty management",
    ],
    sections: [
      {
        sectionTitle: "Smartphones, Computers & Audio",
        sectionDescription:
          "From flagship smartphones and productivity laptops to wireless earbuds and professional cameras — a comprehensive range of everyday and premium consumer electronics sourced from authorized channels with full warranty support.",
        image: officeImg,
        steps: [
          { title: "Smartphones & Accessories", detail: "Android and iOS smartphones from leading brands; cases, screen guards, cables, pop sockets, car mounts, ring holders and full-device protection kits.", image: officeImg },
          { title: "Laptops, Tablets & Peripherals", detail: "Business and consumer laptops, drawing tablets, Chromebooks, mechanical keyboards, ergonomic mice, USB hubs, monitor arms and laptop stands.", image: careersImg },
          { title: "Audio & Wearables", detail: "True wireless earbuds, noise-cancelling headphones, portable speakers, smartwatches, fitness bands, sleep trackers and advanced health-monitoring wearables.", image: warehouseImg },
          { title: "Cameras & Optics", detail: "Mirrorless and DSLR cameras, action cams, drone cameras, security cameras, lenses, tripods, gimbals, memory cards and professional photography accessories.", image: heroImg },
        ],
      },
      {
        sectionTitle: "Smart Home, Gaming & Power",
        sectionDescription:
          "Transform living spaces and workplaces with smart home automation, premium gaming gear and reliable power solutions — all curated from certified brands with integration compatibility across leading ecosystems.",
        image: warehouseImg,
        steps: [
          { title: "Smart Home Devices", detail: "Smart speakers, voice assistants, smart bulbs, switches, plugs, Wi-Fi routers, video doorbells, indoor cameras and home automation hubs compatible with Alexa and Google Home.", image: warehouseImg },
          { title: "Gaming & Entertainment", detail: "Gaming consoles, controllers, gaming mice, mechanical keyboards, gaming headsets, monitors with high refresh rates, gaming chairs and VR headsets.", image: heroImg },
          { title: "Power & Charging Solutions", detail: "GaN chargers, fast-charging pads, solar power banks, UPS units, surge protectors, EV home chargers, portable battery stations and multi-port desktop chargers.", image: officeImg },
          { title: "Networking & IT Peripherals", detail: "Wi-Fi 6/6E routers, mesh systems, network switches, NAS devices, webcams, document scanners, label printers and complete home-office setup bundles.", image: careersImg },
        ],
      },
    ],
    productItems: [
      { name: "True Wireless Earbuds (ANC)",    spec: "40dB ANC, 36hr total battery, Bluetooth 5.3, IPX5, multipoint",         category: "Audio & Wearables",           brand: "boAt / Sony",       tags: ["BIS Certified", "IPX5"] },
      { name: "Gaming Laptop 15.6\"",           spec: "RTX 4060, i7-13700H, 16GB DDR5, 512GB NVMe, 144Hz, THX Audio",         category: "Laptops & Tablets",           brand: "ASUS / Lenovo",     tags: ["BIS Certified", "ISI Mark"] },
      { name: "Smart 4K LED TV 55\"",           spec: "4K UHD, 55\", Android TV 11, HDR10+, Dolby Vision, 60Hz",              category: "Smart Home Devices",          brand: "TCL / Hisense",     tags: ["BIS Certified", "Energy Star"] },
      { name: "GaN Charger 65W USB-C",          spec: "65W GaN, 3-port, PD 3.0, QC 4.0, foldable plug, BIS approved",        category: "Power & Charging",            brand: "Anker / Belkin",    tags: ["BIS Certified", "PD 3.0"] },
      { name: "Action Camera 4K60",             spec: "4K60fps, 20MP, EIS, 10m waterproof, 2\" touch LCD, Wi-Fi+Bluetooth",   category: "Cameras & Optics",            brand: "GoPro / Insta360",  tags: ["BIS Certified", "IPX8"] },
      { name: "Mesh Wi-Fi System (3-node)",     spec: "Wi-Fi 6, tri-band, 6600Mbps, 600 sqm, Gigabit LAN, parental control",  category: "Networking & IT Peripherals", brand: "TP-Link / Netgear", tags: ["BIS Certified", "Wi-Fi 6"] },
      { name: "Smartwatch Pro Series",          spec: "AMOLED 1.85\", GPS, SpO2, ECG, 14-day battery, IP68, BT Calling",      category: "Audio & Wearables",           brand: "Noise / Amazfit",   tags: ["BIS Certified", "IP68"] },
      { name: "Portable Power Station 300W",    spec: "288Wh, 300W output, AC+USB-C+DC, LFP cell, BIS approved, 2000 cycles", category: "Power & Charging",            brand: "EcoFlow / Jackery",  tags: ["BIS Certified", "IEC 62133"] },
    ],
    ctaLabel: "Request Electronics Catalogue",
  },

  /* ─── FASHION & LIFESTYLE ─────────────────────────────────────── */
  {
    slug: "fashion-lifestyle",
    title: "Fashion & Lifestyle",
    tagline: "5,100+ curated fashion, accessories and lifestyle products for retail, institutions and B2B buyers",
    overview:
      "Jigisha Retails curates 5,100+ fashion and lifestyle products spanning apparel, footwear, bags, sportswear, home textiles and beauty — serving multi-brand retailers, corporate buyers, institutional purchasers and franchise networks. We combine a broad multi-brand catalogue with private label manufacturing options and PAN-India fulfillment.",
    heroImages: [careersImg, officeImg, heroImg, warehouseImg],
    skuCount: "5,100+",
    stats: [
      { value: "5,100+", label: "SKUs Catalogued" },
      { value: "80+",    label: "Brands Curated" },
      { value: "PVT",    label: "Label Options" },
      { value: "PAN",    label: "India Delivery" },
    ],
    categories: [
      "Men's Apparel",
      "Women's Apparel",
      "Kids' Wear",
      "Footwear",
      "Bags & Accessories",
      "Sportswear & Athleisure",
      "Home Textiles",
      "Beauty & Grooming",
    ],
    highlights: [
      "80+ curated brands across fashion and lifestyle categories",
      "Private label manufacturing with MOQ from 100 units",
      "BIS-marked textile and footwear products",
      "Seasonal collections updated twice yearly",
      "Institutional bulk supply with custom branding options",
      "B2B portal with live inventory and dropshipping support",
      "Corporate gifting catalogue with gifting packaging options",
      "PAN-India franchise and channel partner distribution",
    ],
    sections: [
      {
        sectionTitle: "Apparel, Footwear & Accessories",
        sectionDescription:
          "A multi-brand collection of men's, women's and kids' apparel — paired with a wide footwear range, bags, belts and fashion accessories covering everyday essentials and occasion wear for all retail formats.",
        image: careersImg,
        steps: [
          { title: "Men's Apparel", detail: "Formal shirts and trousers, casual T-shirts, polo shirts, denim jeans, ethnic kurtas, jackets, hoodies, innerwear and complete workwear and uniform solutions.", image: careersImg },
          { title: "Women's Apparel", detail: "Kurtis, sarees, salwar suits, western tops, dresses, skirts, palazzo pants, co-ord sets, maternity wear and complete seasonal fashion collections.", image: officeImg },
          { title: "Kids' Wear & School Uniforms", detail: "Infants' and toddlers' clothing, school uniforms with custom embroidery, play wear, party wear, sports kits and seasonal kids' fashion collections.", image: heroImg },
          { title: "Footwear, Bags & Accessories", detail: "Casual, formal, sports and ethnic footwear for men, women and kids; handbags, backpacks, wallets, belts, sunglasses, scarves and fashion jewellery.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Sportswear, Home Textiles & Beauty",
        sectionDescription:
          "Performance-engineered sportswear and athleisure, premium home textile collections and a curated beauty and grooming range — serving gyms, hotels, hospitals, hospitality chains and retail beauty shelves.",
        image: heroImg,
        steps: [
          { title: "Sportswear & Athleisure", detail: "Compression tights, dry-fit jerseys, track pants, yoga pants, sports bras, gym gloves, running shoes and complete team-sports uniform kits with custom printing.", image: heroImg },
          { title: "Home Textiles", detail: "Bedsheets, pillow covers, duvets, towels, bathrobes, curtains, table linen and hotel-grade hospitality textile packs with institutional bulk supply options.", image: warehouseImg },
          { title: "Beauty & Grooming", detail: "Skincare, haircare, colour cosmetics, men's grooming kits, personal hygiene products, fragrance sets and complete corporate gifting and hamper options.", image: officeImg },
          { title: "Private Label & Uniforms", detail: "Custom private-label manufacturing for apparel, footwear and accessories; corporate uniforms, hotel staff wear, retail staff uniforms with logo embroidery.", image: careersImg },
        ],
      },
    ],
    productItems: [
      { name: "Men's Oxford Formal Shirt",       spec: "100% cotton twill, 60s count, slim-fit, Pantone-matched, S–XXL",      category: "Men's Apparel",               brand: "Arrow / Van Heusen",  tags: ["BIS IS 1964", "OEKO-TEX"] },
      { name: "Women's Rayon Kurti (Printed)",   spec: "Rayon 110 GSM, block print, XS–3XL, machine washable, colourfast",   category: "Women's Apparel",             brand: "Biba / W",            tags: ["Azo-Free Dyes", "OEKO-TEX"] },
      { name: "School Uniform Set (Boys)",       spec: "Poly-viscose, custom colour, shirt + trouser + tie, XS–XL",          category: "Kids' Wear",                  brand: "Private Label",       tags: ["BIS IS 7000", "Colourfast"] },
      { name: "Running Shoes (Men)",             spec: "EVA midsole, mesh upper, size 6–12, anti-skid outsole, BIS marked",   category: "Footwear",                    brand: "Sparx / Campus",      tags: ["BIS IS 5557", "Anti-Skid"] },
      { name: "Hotel Bedsheet Set (400 TC)",     spec: "100% cotton sateen, 400 TC, 60\"×84\", white, institutional grade",  category: "Home Textiles",               brand: "Bombay Dyeing / Trident", tags: ["OEKO-TEX", "IS 1963"] },
      { name: "Compression Running Tights",      spec: "85% polyester 15% spandex, UPF 50+, 4-way stretch, S–XL",           category: "Sportswear & Athleisure",     brand: "Nivia / HRX",         tags: ["OEKO-TEX", "UPF 50+"] },
      { name: "Backpack 30L (Laptop Sleeve)",    spec: "600D polyester, 30L, 15.6\" laptop sleeve, USB port, water-resistant", category: "Bags & Accessories",         brand: "Wildcraft / Skybags", tags: ["BIS Certified", "Water-Resistant"] },
      { name: "Men's Grooming Kit (9-piece)",    spec: "Trimmer + moisturiser + facewash + deodorant + serum + razor set",   category: "Beauty & Grooming",           brand: "Bombay Shaving / Beardo", tags: ["CDSCO Compliant", "Derma Tested"] },
    ],
    ctaLabel: "Request Fashion Catalogue",
  },

  /* ─── HEALTH & PERSONAL CARE ──────────────────────────────────── */
  {
    slug: "health-personal-care",
    title: "Health & Personal Care",
    tagline: "2,800+ health, wellness and personal care products for retail, pharmacies and institutions",
    overview:
      "Jigisha Retails stocks 2,800+ health and personal care products — spanning OTC medicines, nutraceuticals, medical devices, skincare, oral care, mother & baby essentials and wellness supplements. We serve retail pharmacies, hospital stores, corporate wellness programmes and institutional bulk buyers with CDSCO-compliant, genuine products from trusted brands.",
    heroImages: [warehouseImg, officeImg, greenImg, careersImg],
    skuCount: "2,800+",
    stats: [
      { value: "2,800+", label: "SKUs Catalogued" },
      { value: "CDSCO",  label: "Compliant Products" },
      { value: "60+",    label: "Brands Partnered" },
      { value: "PAN",    label: "India Delivery" },
    ],
    categories: [
      "OTC Medicines & Supplements",
      "Nutraceuticals & Vitamins",
      "Medical Devices (Home Use)",
      "Skincare & Derma",
      "Oral Care",
      "Mother & Baby Care",
      "Personal Hygiene",
      "Fitness & Wellness",
    ],
    highlights: [
      "CDSCO-licensed wholesale distribution for all Rx/OTC categories",
      "Cold-chain validated storage for temperature-sensitive products",
      "Genuine manufacturer-sealed products with batch traceability",
      "Institutional billing with CGHS/ESIC empanelment support",
      "Private label formulation options for wellness brands",
      "Monthly auto-replenishment for pharmacy and hospital stores",
      "Corporate wellness hamper and gifting catalogue available",
      "Licensed pharmacist support for product queries and compliance",
    ],
    sections: [
      {
        sectionTitle: "OTC, Nutraceuticals & Medical Devices",
        sectionDescription:
          "A comprehensive range of over-the-counter medicines, vitamins, protein supplements and home-use medical devices — all CDSCO-compliant and sourced from licensed manufacturers with full batch documentation.",
        image: warehouseImg,
        steps: [
          { title: "OTC Medicines", detail: "Analgesics, antipyretics, antacids, antihistamines, cough syrups, first-aid kits, eye drops, ear drops and common OTC therapeutic categories across all licensed brands.", image: warehouseImg },
          { title: "Nutraceuticals & Vitamins", detail: "Multivitamins, Vitamin C/D/B12, Omega-3, iron supplements, probiotics, protein powders, collagen, ashwagandha and complete nutritional supplement ranges.", image: greenImg },
          { title: "Home-Use Medical Devices", detail: "Digital thermometers, blood pressure monitors, glucometers, pulse oximeters, nebulizers, heating pads, TENS units and complete home-health monitoring kits.", image: officeImg },
          { title: "Fitness & Wellness", detail: "Protein supplements, BCAA, creatine, pre-workout, yoga mats, resistance bands, massage guns, foam rollers and complete fitness nutrition and recovery product ranges.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Skincare, Personal Hygiene & Baby Care",
        sectionDescription:
          "Dermatologist-tested skincare, oral hygiene, premium personal care and a complete mother-and-baby product range — curated from brands trusted across Indian hospitals, pharmacies and retail chains.",
        image: officeImg,
        steps: [
          { title: "Skincare & Derma", detail: "Moisturisers, sunscreens (SPF 30–100), face serums, toners, cleansers, anti-acne gels, depigmentation creams, derma-grade chemical peels and prescription-adjacent OTC skincare.", image: officeImg },
          { title: "Oral Care", detail: "Toothpastes (herbal, whitening, sensitive), toothbrushes, electric toothbrush heads, mouthwash, dental floss, teeth whitening strips and complete oral hygiene kits.", image: warehouseImg },
          { title: "Mother & Baby Care", detail: "Baby diapers, wet wipes, baby lotions, baby shampoo, breast pumps, sterilizers, baby food, maternity pads, nursing bras and complete newborn care bundles.", image: careersImg },
          { title: "Personal Hygiene & Sanitisation", detail: "Soaps, body wash, hand sanitisers, deodorants, feminine hygiene products, shaving kits and institutional-pack hygiene products for hospitals and workplaces.", image: greenImg },
        ],
      },
    ],
    productItems: [
      { name: "Digital BP Monitor (Upper Arm)",  spec: "Automatic, dual-user, 60-reading memory, WHO indicator, BIS marked",   category: "Medical Devices (Home Use)",    brand: "Omron / Dr. Morepen",  tags: ["CDSCO Licensed", "BIS Marked"] },
      { name: "Vitamin D3 + K2 Softgels",        spec: "D3 2000IU + K2 100mcg, 60 softgels, FSSAI approved, veg capsule",     category: "Nutraceuticals & Vitamins",    brand: "HealthVit / Himalayan", tags: ["FSSAI Approved", "GMP Certified"] },
      { name: "Whey Protein Isolate 1kg",        spec: "90% protein, 25g serving, <1g fat, Informed Sport certified, 40 serv", category: "Fitness & Wellness",           brand: "Optimum / MuscleBlaze",  tags: ["FSSAI Approved", "Informed Sport"] },
      { name: "Broad-Spectrum Sunscreen SPF 50", spec: "SPF 50 PA++++, 50ml, UVA+UVB, derma tested, non-comedogenic",         category: "Skincare & Derma",             brand: "La Shield / Minimalist", tags: ["CDSCO Compliant", "Derma Tested"] },
      { name: "Baby Diaper Pants (M, 100-pack)", spec: "Medium 7–12 kg, 100 pcs, 12hr protection, wetness indicator, aloe",   category: "Mother & Baby Care",           brand: "Pampers / MamyPoko",     tags: ["BIS IS 17591", "Derma Tested"] },
      { name: "Pulse Oximeter (Fingertip)",      spec: "SpO2 ±2%, PR ±2 bpm, OLED, auto-off, PI display, CE + CDSCO",        category: "Medical Devices (Home Use)",   brand: "BPL / Contec",           tags: ["CDSCO Licensed", "CE Marked"] },
      { name: "Probiotic Capsules 10B CFU",      spec: "10B CFU, 10 strains, delayed-release, 30 caps, FSSAI, refrigerator-free", category: "Nutraceuticals & Vitamins", brand: "Wellbeing / Yakult",    tags: ["FSSAI Approved", "GMP"] },
      { name: "Hand Sanitiser 500ml (Gel)",      spec: "70% IPA, WHO formula, CDSCO listed, institutional pack, pump dispenser", category: "Personal Hygiene",           brand: "Dettol / Himalaya",      tags: ["CDSCO Approved", "WHO Formula"] },
    ],
    ctaLabel: "Request Health Catalogue",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}
