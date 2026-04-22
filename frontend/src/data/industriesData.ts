import railwayImg  from "../assets/railway-services.jpg";
import metroImg    from "../assets/metro-rail.jpg";
import defenceImg  from "../assets/defence-tech.jpg";
import greenImg    from "../assets/green-energy.jpg";
import heroImg     from "../assets/hero-industrial.jpg";
import officeImg   from "../assets/about-office.jpg";
import warehouseImg from "../assets/products-warehouse.jpg";
import careersImg  from "../assets/careers-team.jpg";

/* ── Sub-types ───────────────────────────────────────────────────────────── */

export interface IndustryUseCase {
  title: string;
  description: string;
}

export interface IndustryStep {
  title: string;
  detail: string;
  image: string;
}

export interface IndustrySection {
  sectionTitle: string;
  sectionDescription: string;
  image: string;
  steps: IndustryStep[];
}

/* ── Primary interface ───────────────────────────────────────────────────── */

export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImages: string[];
  stats: { value: string; label: string }[];
  /** Bullet-point list of what we supply / do in this industry */
  keyOfferings: string[];
  useCases: IndustryUseCase[];
  sections: IndustrySection[];
  /** Operational differentiators shown in the capabilities grid */
  capabilities: string[];
  /** Jigisha Group subsidiary slugs that serve this industry */
  subsidiaries: string[];
  /** Single-paragraph "why Jigisha?" narrative */
  whyJigisha: string;
  ctaLabel?: string;
}

/* ── Data ────────────────────────────────────────────────────────────────── */

export const industriesData: Industry[] = [

  /* 01 ── INDIAN RAILWAYS ─────────────────────────────────────────────── */
  {
    slug: "railways",
    title: "Indian Railways",
    tagline: "Trusted partner across Production Units, Sheds, Divisions and all 17 Zones",
    description:
      "Jigisha Group is a key partner to Indian Railways, supplying RDSO-approved critical components, signaling systems, OHE infrastructure, and rolling stock maintenance services across the national network.",
    heroImages: [railwayImg, metroImg, heroImg, defenceImg],
    stats: [
      { value: "All",   label: "Railway Zones Covered" },
      { value: "RDSO",  label: "Compliant Supply" },
      { value: "GeM",   label: "& IREPS Registered" },
      { value: "24×7",  label: "Operations Support" },
    ],
    keyOfferings: [
      "OHE (Overhead Equipment) Components & SITC",
      "KAWACH Anti-Collision System Components",
      "Loco, Coach & Wagon ICBMRO Services",
      "Track Fasteners & Specialized Sleepers",
      "Signaling & Telecom (S&T) Equipment",
      "Station Electrification & Smart Energy",
      "PMU Support & RDSO-Approved Supply",
    ],
    useCases: [
      { title: "Vande Bharat Rollout",     description: "Supply of interiors, HVAC, electrical sub-assemblies and passenger systems for new-generation Vande Bharat trainsets." },
      { title: "KAWACH Safety Network",    description: "RFID tags, transponders and trackside hardware for India's indigenous automatic train protection system." },
      { title: "Station Redevelopment",    description: "MEP packages, accessibility upgrades, smart lighting and passenger amenities for world-class station transformations." },
      { title: "ICBMRO & POH Contracts",   description: "Integrated coach maintenance, periodic overhaul and mid-life rehabilitation across Zones and Production Units." },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Track Systems",
        sectionDescription: "Complete supply and maintenance solutions for rolling stock, track machines and locomotive systems — keeping the network moving reliably.",
        image: railwayImg,
        steps: [
          { title: "Rolling Stock Supply & Maintenance", detail: "Wheels, axles, bogies, brakes, couplers, HVAC, interiors and lighting for ICF, LHB, Vande Bharat and EMU/MEMU rakes.", image: railwayImg },
          { title: "OHE Erection & Commissioning",       detail: "Design, supply and erection of 25kV OHE — masts, cantilevers, contact wire and complete electrification corridors.", image: metroImg },
          { title: "Track Machine AMC",                  detail: "Spares and maintenance for Tamping, BCM, DTS, BRM, Tower Wagons and complete track machine fleet upkeep.", image: heroImg },
          { title: "Depot Equipment",                    detail: "Wheel lathes, drop tables, presses, lifting jacks, bogie test rigs and complete depot machinery installation.", image: defenceImg },
        ],
      },
      {
        sectionTitle: "Station & Safety Technologies",
        sectionDescription: "Next-generation station systems, safety technologies and digital infrastructure to modernize India's railway network for the future.",
        image: heroImg,
        steps: [
          { title: "Signaling & Telecom (S&T)", detail: "Interlocking, point machines, axle counters, OFC backbone, GSM-R, Wi-Fi and complete S&T integration.", image: metroImg },
          { title: "KAWACH Implementation",     detail: "On-board and trackside KAWACH (TCAS) component supply, RFID deployment and commissioning support.", image: railwayImg },
          { title: "Station Modernization",     detail: "Station redevelopment, lighting, MEP, accessibility, signage, passenger amenities and energy-efficient retrofits.", image: heroImg },
          { title: "ICBMRO & POH Contracts",    detail: "Integrated Coach Body Maintenance, Repair, Overhaul, Periodic Overhaul and Mid-Life Rehabilitation programmes.", image: defenceImg },
        ],
      },
    ],
    capabilities: [
      "RDSO vendor approvals", "IRS specifications", "ISO 9001/14001/45001",
      "GeM & IREPS empanelled", "PAN-India deployment", "Skilled S&T crews",
      "OHE specialists", "Heavy logistics", "Calibration labs",
      "Spares warehousing", "24×7 AMC support", "DPR & survey teams",
    ],
    subsidiaries: [
      "jigisha-railtech",
      "jigisha-electricals-electronics",
      "jigisha-engineering",
      "jigisha-industrial-services",
    ],
    whyJigisha:
      "Jigisha Railtech is a dedicated railway technology subsidiary with RDSO-approved processes, GeM and IREPS registration, and a track record of delivering OHE, KAWACH, and ICBMRO projects across Indian Railways zones.",
    ctaLabel: "Get Railway Brief",
  },

  /* 02 ── METRO RAIL ───────────────────────────────────────────────────── */
  {
    slug: "metro-rail",
    title: "Metro Rail",
    tagline: "Powering urban mobility across India's expanding metro network",
    description:
      "End-to-end EPC and procurement solutions for India's rapidly expanding urban mass rapid transit systems — stations, depots, rolling stock, and automated systems.",
    heroImages: [metroImg, railwayImg, heroImg, officeImg],
    stats: [
      { value: "12+", label: "Metro Cities Served" },
      { value: "EPC", label: "Turnkey Capability" },
      { value: "AMC", label: "Long-Term Contracts" },
      { value: "24×7", label: "Support" },
    ],
    keyOfferings: [
      "Station E&M Electrification",
      "Rolling Stock ICBMRO",
      "Automated Fare Collection (AFC) Systems",
      "Traction Power Supply Components",
      "CBTC & Smart Station Systems",
      "Green Metro Solutions",
    ],
    useCases: [
      { title: "Phase 3 Corridor Expansion", description: "Rolling stock components, station systems and depot equipment supply for new metro corridor launches across cities." },
      { title: "AFC & Smart Ticketing",       description: "Automated fare collection gates, TVMs and NCMC-compatible card systems for seamless passenger journeys." },
      { title: "Depot Modernization",         description: "Heavy lifting equipment, wheel lathes, washing plants and complete depot O&M contracts for operational depots." },
      { title: "Green Metro Initiative",      description: "Solar rooftop, regenerative braking systems and LED lighting retrofits reducing energy consumption by 30%." },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Station Infrastructure",
        sectionDescription: "Comprehensive supply of rolling stock components and station systems ensuring passenger safety, comfort and operational reliability.",
        image: metroImg,
        steps: [
          { title: "Rolling Stock Components",      detail: "Doors, HVAC, interiors, seats, PIDS, CCTV, lighting and electrical sub-assemblies for metro trainsets.", image: metroImg },
          { title: "Station Electrical & MEP",      detail: "LV/MV electricals, HVAC, plumbing, fire systems, BMS and complete station MEP packages.", image: railwayImg },
          { title: "Platform Screen Doors",         detail: "Full-height and half-height PSDs, gap fillers, IP CCTV, NVR/VMS and integrated security systems.", image: heroImg },
          { title: "Depot Equipment & AMC",         detail: "Bogie drop tables, wheel lathes, washing plants, lifting jacks and long-term depot O&M contracts.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Smart Technology & Passenger Experience",
        sectionDescription: "Cutting-edge passenger systems, smart ticketing and green energy solutions that define the modern metro experience.",
        image: heroImg,
        steps: [
          { title: "Ticketing & Access Control",        detail: "AFC gates, TVMs, NCMC card systems, QR ticketing and back-office clearing house integration.", image: railwayImg },
          { title: "Smart Passenger Info Systems",      detail: "Dynamic LED maps, LCD displays, public address, intercom and integrated PIDS platforms.", image: metroImg },
          { title: "Station Furniture & Accessibility", detail: "Benches, signage, tactile paving, ramps and inclusive design accessories for universal access.", image: officeImg },
          { title: "Green Energy Integration",          detail: "Solar rooftop, regenerative braking, energy-efficient lighting and sustainability retrofits for stations.", image: heroImg },
        ],
      },
    ],
    capabilities: [
      "EN 45545 fire-safe materials", "IP65+ outdoor rated", "CBTC sub-vendor certified",
      "NCMC card integration", "BIM coordination", "Tunnel logistics",
      "Cleanroom assembly", "Multi-city teams", "FAT/SAT support",
      "O&M training", "Spares stocking", "24×7 emergency response",
    ],
    subsidiaries: [
      "jigisha-railtech",
      "jigisha-electricals-electronics",
      "jigisha-green",
      "jigisha-industrial-services",
    ],
    whyJigisha:
      "Our metro rail expertise spans rolling stock ICBMRO, station electrification, AFC systems, and green metro solutions — delivered by Jigisha Railtech and Jigisha Electricals with full EPC capability.",
    ctaLabel: "Get Metro Brief",
  },

  /* 03 ── AEROSPACE & DEFENCE ─────────────────────────────────────────── */
  {
    slug: "aerospace-defence",
    title: "Aerospace & Defence",
    tagline: "Make-in-India partner to Armed Forces, DRDO, DPSUs and global OEMs",
    description:
      "Supporting national security through precision components, mil-spec electronic sub-assemblies, and strategic materials for Defence PSUs, DPSUs, and the armed forces.",
    heroImages: [defenceImg, heroImg, railwayImg, officeImg],
    stats: [
      { value: "MIL",   label: "Spec Compliance" },
      { value: "CNC",   label: "Precision Manufacturing" },
      { value: "MSME",  label: "Defence Registered" },
      { value: "MII",   label: "Make in India" },
    ],
    keyOfferings: [
      "High-Tolerance CNC Machined Components",
      "Mil-Spec Electronic Sub-Assemblies",
      "Aerospace Alloys & Strategic Materials",
      "Specialized Fasteners & Hardware",
      "Make in India Defence Manufacturing",
    ],
    useCases: [
      { title: "Make in India Indigenization", description: "Converting imported defence sub-systems to indigenous supply via SRIJAN, iDEX and offset channels for Armed Forces." },
      { title: "Rotary Wing MRO",              description: "Helicopter component supply, precision machined parts and MRO support for fixed and rotary-wing military platforms." },
      { title: "Naval Systems Supply",         description: "Marine-grade hardware, electronic enclosures and sub-assemblies for naval vessels and maritime surveillance." },
      { title: "UAV Programme Support",        description: "Drone airframe sub-assemblies, avionics housings and precision fasteners for indigenous UAV development programmes." },
    ],
    sections: [
      {
        sectionTitle: "Defence Components & Manufacturing",
        sectionDescription: "Precision manufacturing and supply of defence-grade components meeting the highest quality and traceability standards.",
        image: defenceImg,
        steps: [
          { title: "Defence-Grade Components",           detail: "Precision parts, electronic sub-assemblies, fasteners and specialty materials for armoured vehicles, aircraft and naval platforms.", image: defenceImg },
          { title: "Aerospace Hardware Manufacturing",   detail: "AS9100-compliant machined and sheet-metal aerospace parts for fixed-wing, rotary-wing and UAV platforms.", image: heroImg },
          { title: "Electronic Sub-Assemblies",          detail: "PCB assemblies, harnesses, ruggedized enclosures for radar, EW, sonar and communication systems.", image: railwayImg },
          { title: "DRDO, HAL, BEL, BEML Partnerships",  detail: "Vendor relationships across DPSUs for sustained supply, indigenization and engineering support.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Quality Compliance & Indigenization",
        sectionDescription: "End-to-end quality systems, compliance frameworks and indigenization pathways for India's defence self-reliance mission.",
        image: heroImg,
        steps: [
          { title: "AS9100 Quality Compliance",   detail: "Full aerospace QMS, FAI per AS9102, traceability, conflict-minerals compliance and ITAR-aware processes.", image: heroImg },
          { title: "Make in India & Atmanirbhar", detail: "SRIJAN portal participation, import-substitution success stories and offset-partnership readiness.", image: defenceImg },
          { title: "Defence Indigenisation",      detail: "Reverse engineering, sample qualification, vendor development and Type Approval for imported sub-systems.", image: officeImg },
          { title: "Ordnance Factory Supplies",   detail: "Machined components, fuze parts, casings and quality-controlled supply for ordnance manufacturers.", image: railwayImg },
        ],
      },
    ],
    capabilities: [
      "DGAQA/CEMILAC links", "Cleanroom assembly", "5-axis CNC machining",
      "NABL testing", "NDT inspection", "MIL-STD ruggedization",
      "EMI/EMC support", "Security-cleared staff", "Lifetime spares",
      "Offset-partner ready", "SRIJAN registered", "AS9100 QMS",
    ],
    subsidiaries: [
      "jigisha-defense-technologies",
      "jigisha-industries",
      "jigisha-technologies",
    ],
    whyJigisha:
      "Jigisha Defense Technologies specialises in precision machined components, electronic sub-assemblies, and strategic materials for India's defence ecosystem — fully aligned with Make in India and Atmanirbhar Bharat.",
    ctaLabel: "Get Defence Brief",
  },

  /* 04 ── ENERGY & POWER ───────────────────────────────────────────────── */
  {
    slug: "energy",
    title: "Energy & Power",
    tagline: "Enabling continuous power generation and distribution across India",
    description:
      "Enabling continuous power generation and distribution with robust supply chains for thermal, solar, hydro, and renewable energy plants across India.",
    heroImages: [greenImg, heroImg, warehouseImg, officeImg],
    stats: [
      { value: "HT/LT",  label: "Cable Supply" },
      { value: "Solar",  label: "SITC Capability" },
      { value: "MRO",    label: "Turbine Support" },
      { value: "24×7",   label: "Emergency Supply" },
    ],
    keyOfferings: [
      "High-Tension Transmission Cables",
      "Switchgear, Panels & Transformers",
      "Turbine & Generator MRO",
      "Solar Mounting Structures & Components",
      "Industrial Lubricants & Coolants",
    ],
    useCases: [
      { title: "Utility-Scale Solar EPC",      description: "Turnkey EPC for ground-mount and rooftop solar farms — site survey to commissioning with PPA and net-metering." },
      { title: "Smart Grid Modernization",     description: "AMI roll-out, smart meters, DCUs and demand response systems for DISCOMs reducing AT&C losses." },
      { title: "Thermal Plant MRO",            description: "Turbine spares, generator components and complete maintenance kits ensuring zero-downtime at power plants." },
      { title: "Industrial Energy Audits",     description: "BEE-certified audits for manufacturing facilities identifying energy savings of 15–30%." },
    ],
    sections: [
      {
        sectionTitle: "Power Infrastructure Supply",
        sectionDescription: "Complete supply of HT/LT cables, switchgear, transformers and power distribution equipment for utilities and industrial plants.",
        image: greenImg,
        steps: [
          { title: "HT/LT Cables & Wires",         detail: "XLPE/PVC cables up to 33kV, control cables, fire-survival and instrumentation cables for all power applications.", image: greenImg },
          { title: "Switchgear, Panels & Boards",   detail: "MCC, PCC, APFC, distribution boards, MV switchgear, ACBs, MCCBs, MCBs and complete panel solutions.", image: heroImg },
          { title: "Transformers & UPS",            detail: "Distribution transformers, isolation transformers, online UPS, inverters and complete power backup systems.", image: warehouseImg },
          { title: "Turbine & Generator MRO",       detail: "Spares, maintenance kits, lubricants and overhaul support for steam, gas and hydro turbine-generators.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Renewable Energy & Efficiency",
        sectionDescription: "Solar EPC, energy efficiency programs and smart grid solutions for a cleaner, lower-cost energy future.",
        image: heroImg,
        steps: [
          { title: "Solar SITC & Components",      detail: "Modules, inverters, mounting structures, BoS, DC cables and complete solar installation packages.", image: greenImg },
          { title: "Smart Grid & Metering",        detail: "AMI, smart meters, DCUs, prepaid metering, demand response and grid analytics for DISCOMs.", image: warehouseImg },
          { title: "Energy Efficiency Audits",     detail: "BEE-accredited audits, ECBC compliance, ISO 50001 implementation and demand-side management.", image: heroImg },
          { title: "Industrial Lubricants & Coolants", detail: "Engine oils, hydraulic oils, turbine oils, coolants and specialty lubricants for power plant operations.", image: officeImg },
        ],
      },
    ],
    capabilities: [
      "HT/LT cable expertise", "BIS/CE certified products", "Transformer design & supply",
      "Solar SITC capability", "BEE-certified auditors", "CEIG/DISCOM liaison",
      "Switchgear type-testing", "AMI roll-out", "CAPEX/RESCO models",
      "Performance monitoring", "24×7 emergency supply", "Turnkey EPC",
    ],
    subsidiaries: [
      "jigisha-electricals-electronics",
      "jigisha-green",
      "jigisha-engineering",
      "jigisha-enterprises",
    ],
    whyJigisha:
      "From HT cables and switchgear to solar SITC and turbine MRO — Jigisha Electricals and Jigisha Green provide comprehensive supply and service solutions for India's energy sector.",
    ctaLabel: "Get Energy Brief",
  },

  /* 05 ── HEALTHCARE & PHARMA ──────────────────────────────────────────── */
  {
    slug: "healthcare",
    title: "Healthcare & Pharma",
    tagline: "APIs, medical devices, hospital procurement and pharma plant solutions",
    description:
      "Supplying APIs, excipients, medical devices, and hospital consumables to pharmaceutical manufacturers, hospitals, and healthcare institutions across India.",
    heroImages: [warehouseImg, officeImg, greenImg, careersImg],
    stats: [
      { value: "WHO",   label: "GMP Compliant Chain" },
      { value: "Cold",  label: "Chain Logistics" },
      { value: "API",   label: "& Excipient Supply" },
      { value: "Pan",   label: "India Delivery" },
    ],
    keyOfferings: [
      "Active Pharmaceutical Ingredients (APIs)",
      "Excipients & Pharma Chemicals",
      "Medical Devices & Disposables",
      "Nutraceutical Raw Materials",
      "Hospital Consumables & Surgical Supplies",
      "Cold Chain Logistics",
    ],
    useCases: [
      { title: "Hospital Infrastructure Setup", description: "Single-window equipment and consumable supply for tertiary care hospitals, ICUs and operation theatres." },
      { title: "Vaccine Cold Chain",            description: "Validated 2–8°C and −20°C distribution for national immunization programmes with IoT temperature logging." },
      { title: "API Sourcing for Generics",     description: "GMP-certified active pharmaceutical ingredient procurement for Indian generics manufacturers meeting US-FDA standards." },
      { title: "Diagnostic Lab Setup",          description: "Turnkey analytical equipment packages — HPLC, GC, FTIR, dissolution apparatus — for QC and research labs." },
    ],
    sections: [
      {
        sectionTitle: "Pharmaceutical & Device Supply",
        sectionDescription: "Comprehensive supply of APIs, medical devices and diagnostics from CDSCO-licensed, GMP-certified sources.",
        image: warehouseImg,
        steps: [
          { title: "APIs, Excipients & Packaging",     detail: "APIs, intermediates, excipients and packaging from WHO-GMP and US-FDA approved manufacturers.", image: warehouseImg },
          { title: "Medical Devices & Diagnostics",    detail: "Patient monitors, ventilators, ECG, ultrasound, dialysis, IVD reagents and POC devices.", image: officeImg },
          { title: "Surgical Instruments & Consumables", detail: "Disposables, sutures, instruments, IV sets, gloves, gauze and complete OT/ICU supply packs.", image: greenImg },
          { title: "Lab & Analytical Equipment",       detail: "HPLC, GC, UV-Vis, FTIR, dissolution apparatus, autoclaves, microscopes and full QC lab packages.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Hospital & Cold-Chain Infrastructure",
        sectionDescription: "End-to-end hospital procurement, cold chain logistics and regulatory compliance for healthcare providers.",
        image: officeImg,
        steps: [
          { title: "Hospital Procurement Solutions", detail: "Single-window supply for tertiary care hospitals — equipment, consumables, services and rate contracts.", image: officeImg },
          { title: "Cold-Chain Logistics",           detail: "Validated 2–8°C and −20°C transport, ILRs, deep freezers and IoT-monitored vaccine distribution.", image: warehouseImg },
          { title: "CDSCO & WHO-GMP Compliance",     detail: "Regulatory advisory, licensing support, technical dossiers and audit preparation for pharma plants.", image: careersImg },
          { title: "Telemedicine Infrastructure",    detail: "Telemedicine carts, video conferencing, peripheral devices, PACS, HIS integration and remote-care platforms.", image: greenImg },
        ],
      },
    ],
    capabilities: [
      "CDSCO licensed operations", "WHO-GMP sourcing", "Cold-chain validated",
      "Hazmat handling", "CGHS/ESIC tender expertise", "Pharmacovigilance",
      "Lab installation & calibration", "Medical equipment AMC", "Bio-medical engineering",
      "Govt programme support", "DGFT export licenses", "Sterile supply chain",
    ],
    subsidiaries: [
      "jigisha-pharma-healthcare",
      "jigisha-logistics",
    ],
    whyJigisha:
      "Jigisha Pharma & Healthcare provides WHO-GMP compliant supply chains for APIs, medical devices, and hospital consumables — backed by Jigisha Logistics' cold chain infrastructure.",
    ctaLabel: "Get Healthcare Brief",
  },

  /* 06 ── AGRICULTURE ──────────────────────────────────────────────────── */
  {
    slug: "agriculture",
    title: "Agriculture",
    tagline: "Inputs, machinery, irrigation and FPO procurement for Indian farms",
    description:
      "Serving FPOs, farmer cooperatives, and agro-industrial buyers with inputs, machinery, irrigation solutions, and AMC services for the agricultural sector.",
    heroImages: [greenImg, warehouseImg, heroImg, careersImg],
    stats: [
      { value: "FPO",   label: "Channel Partner" },
      { value: "MNRE",  label: "Approved Solar Pumps" },
      { value: "AMC",   label: "Agro Machinery" },
      { value: "MP",    label: "& Pan-India Reach" },
    ],
    keyOfferings: [
      "Seeds, Fertilisers & Crop Protection",
      "Drip & Sprinkler Irrigation Systems",
      "Agro Machinery Supply & AMC",
      "FPO & Cooperative Procurement Support",
      "Cold Chain for Agricultural Produce",
      "Solar Pumps (MNRE Approved)",
    ],
    useCases: [
      { title: "PM-KUSUM Solar Pumps",         description: "Off-grid solar pump deployment replacing diesel pumps for farmers, cutting irrigation costs by up to 70%." },
      { title: "FPO Bulk Procurement",         description: "Aggregated input supply for farmer producer organizations — seeds, fertilizers, pesticides at competitive prices." },
      { title: "Precision Farming Deployment", description: "IoT soil sensors, GPS-guided tractors, drone spraying and data-driven crop advisory for yield optimization." },
      { title: "Post-Harvest Cold Chain",      description: "Cold storage rooms, ripening chambers and reefer transport protecting horticulture produce from farm to market." },
    ],
    sections: [
      {
        sectionTitle: "Farm Inputs & Mechanization",
        sectionDescription: "Quality-certified seeds, fertilizers, crop protection products and mechanization equipment to enhance farm productivity.",
        image: greenImg,
        steps: [
          { title: "Seeds & Planting Material",     detail: "Hybrid seeds, certified seeds, vegetable seeds and tissue-cultured plants from approved producers.", image: greenImg },
          { title: "Fertilizers & Crop Protection", detail: "Urea, DAP, NPK, micronutrients, biofertilizers, pesticides and bio-pesticides registered under FCO and CIB.", image: warehouseImg },
          { title: "Agro Machinery & Implements",   detail: "Tractors, power tillers, rotavators, seed drills, sprayers, harvesters and farm mechanization equipment.", image: heroImg },
          { title: "FPO Procurement Assistance",    detail: "Bulk procurement, working capital tie-ups, tender support and direct-from-source supply for FPOs.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Technology, Irrigation & Post-Harvest",
        sectionDescription: "Precision farming technology, irrigation infrastructure and cold chain solutions to protect yields and maximize farmer income.",
        image: heroImg,
        steps: [
          { title: "Drip & Sprinkler Irrigation", detail: "Drip lines, emitters, sprinklers, filters, fertigation units and PMKSY-aligned micro-irrigation packages.", image: heroImg },
          { title: "Solar Pumps (PM-KUSUM)",       detail: "AC/DC solar water pumps under PM-KUSUM — surface, submersible and centrifugal with VFD controllers.", image: greenImg },
          { title: "Cold Storage Solutions",       detail: "Cold rooms, ripening chambers, blast freezers, reefer trucks and complete post-harvest cold chain.", image: warehouseImg },
          { title: "Precision Farming Support",    detail: "Soil testing, drone spraying, GPS-guided tractors, IoT soil sensors and data-driven crop advisory.", image: careersImg },
        ],
      },
    ],
    capabilities: [
      "FCO/CIB registered inputs", "PMKSY-empanelled", "PM-KUSUM specialist",
      "FPO partner network", "Drone-spray operators", "Soil-test labs",
      "Cold-chain validated", "Custom Hiring Centers", "Subsidy documentation",
      "Farmer training programs", "Multi-state reach", "Organic certification",
    ],
    subsidiaries: [
      "jigisha-agro-industries",
      "jigisha-green",
      "jigisha-logistics",
    ],
    whyJigisha:
      "Jigisha Agro Industries serves FPOs and cooperatives with agro inputs, irrigation systems, and machinery AMC — supported by MNRE-approved solar pumps from Jigisha Green.",
    ctaLabel: "Get Agri Brief",
  },

  /* 07 ── CONSTRUCTION & EPC ───────────────────────────────────────────── */
  {
    slug: "construction",
    title: "Construction & EPC",
    tagline: "EPC for industrial plants, railway stations, metro depots and civil infrastructure",
    description:
      "Supporting the construction of railway stations, metro depots, industrial plants, bridges, and commercial real estate with materials, EPC services, and project management.",
    heroImages: [officeImg, heroImg, railwayImg, metroImg],
    stats: [
      { value: "EPC",  label: "Turnkey Projects" },
      { value: "ISO",  label: "9001:2015 Certified" },
      { value: "EHS",  label: "Compliance" },
      { value: "Pan",  label: "India Execution" },
    ],
    keyOfferings: [
      "EPC Project Management",
      "Construction Chemicals & Materials",
      "Pipes, Valves & Fittings (PVF)",
      "Scaffolding & Formwork",
      "Green Building Solutions",
      "Environmental Compliance (EHS)",
    ],
    useCases: [
      { title: "Industrial Plant Greenfield",  description: "Turnkey EPC for new process plants — civil, structural, mechanical, piping and E&I on fixed-price contracts." },
      { title: "Station Redevelopment",        description: "Railway and metro station buildings, platforms, passenger amenities and MEP packages for modern travel hubs." },
      { title: "Smart City Infrastructure",    description: "Urban civil works, water supply, sewerage and public amenities under AMRUT and Smart Cities Mission programs." },
      { title: "Power Plant BoP",              description: "Balance of Plant civil and electrical works for thermal, solar and renewable energy facilities." },
    ],
    sections: [
      {
        sectionTitle: "Civil & Industrial Construction",
        sectionDescription: "Design-led EPC delivery for industrial plants, infrastructure and buildings with an unwavering commitment to quality and safety.",
        image: officeImg,
        steps: [
          { title: "EPC for Industrial Plants",         detail: "Greenfield and brownfield process plants — civil, structural, mechanical, piping, E&I — single-source EPC.", image: officeImg },
          { title: "Civil Infrastructure Projects",     detail: "Roads, bridges, water supply, sewerage, urban infrastructure under PPP and EPC modes.", image: heroImg },
          { title: "Building Construction & Interiors", detail: "Commercial, institutional, hospitality and industrial buildings with complete fit-out and interiors.", image: railwayImg },
          { title: "MEP Services & Commissioning",      detail: "Mechanical, electrical, plumbing, fire and BMS — design, install, test, commission and handover.", image: metroImg },
        ],
      },
      {
        sectionTitle: "Railway, Metro & Power Infrastructure",
        sectionDescription: "Specialized EPC for railway stations, bridges, power infrastructure and project management consultancy services.",
        image: heroImg,
        steps: [
          { title: "Railway Station Construction", detail: "Station buildings, platforms, FOBs, washable aprons and passenger amenities under redevelopment programmes.", image: railwayImg },
          { title: "Bridge & Flyover Works",       detail: "RCC, PSC, steel bridges, ROBs, RUBs, flyovers and grade separators with heavy lifting capability.", image: metroImg },
          { title: "Power Project Infrastructure", detail: "Sub-station civil works, transmission tower foundations, switchyards and BoP for energy plants.", image: officeImg },
          { title: "DPR Preparation & PMC",        detail: "Detailed Project Reports, feasibility studies, Project Management Consultancy and owner-engineer services.", image: heroImg },
        ],
      },
    ],
    capabilities: [
      "In-house design & BIM teams", "BIM Level 2 coordination", "Heavy lifting & cranes",
      "Pre-cast yards", "RMC plants", "Skilled trade workforce",
      "ISO 45001 safety culture", "Quality labs", "GeM & CPWD listed",
      "Sub-contractor management", "EPC fixed-price contracts", "EHS compliance",
    ],
    subsidiaries: [
      "jigisha-engineering",
      "jigisha-industrial-services",
      "jigisha-envirocare",
      "jigisha-electricals-electronics",
    ],
    whyJigisha:
      "Jigisha Engineering executes full EPC contracts for railway stations, metro depots, and industrial plants — with Jigisha Envirocare ensuring environmental compliance and Jigisha Industrial Services managing facility operations post-handover.",
    ctaLabel: "Get EPC Brief",
  },

  /* 08 ── MANUFACTURING ────────────────────────────────────────────────── */
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "CNC machining, fabrication, MRO and contract manufacturing for OEMs",
    description:
      "The backbone of India's industrial capability. We supply raw materials, precision components, tooling, and MRO services for OEMs, MSMEs, and large-scale manufacturers.",
    heroImages: [heroImg, warehouseImg, defenceImg, officeImg],
    stats: [
      { value: "3M+",  label: "Products Available" },
      { value: "CNC",  label: "Precision Parts" },
      { value: "MRO",  label: "Full Coverage" },
      { value: "JIT",  label: "Delivery Capability" },
    ],
    keyOfferings: [
      "CNC Machined & Fabricated Components",
      "Industrial Bearings, Drives & Seals",
      "Material Handling Equipment",
      "Welding Consumables & Tooling",
      "Industrial Safety Equipment (PPE)",
      "Automation & IoT Solutions",
    ],
    useCases: [
      { title: "Automotive Tier-1/2 Supply", description: "IATF 16949-compliant machined and fabricated components for automotive OEMs with full PPAP documentation." },
      { title: "Aerospace Precision Parts",  description: "AS9100-certified complex machined parts in titanium, Inconel and aluminium alloys for aviation programmes." },
      { title: "Defence Hardware Supply",    description: "Ruggedized, precision-machined components meeting DGQA and MIL-STD specifications for defence programs." },
      { title: "VMI for Factory MRO",        description: "Vendor-managed inventory of bearings, fasteners, lubricants and tooling ensuring zero factory downtime." },
    ],
    sections: [
      {
        sectionTitle: "Precision Engineering & Fabrication",
        sectionDescription: "Advanced machining, fabrication and sub-assembly capabilities for OEMs demanding exacting tolerances and full traceability.",
        image: heroImg,
        steps: [
          { title: "CNC Machining & Precision Engineering", detail: "5-axis CNC, turn-mill, micro-machining of complex parts in steels, aluminium, titanium and special alloys.", image: heroImg },
          { title: "Fabrication & Welding Services",        detail: "Sheet metal, structural and pressure-vessel fabrication with TIG, MIG, SAW capability and PWHT.", image: warehouseImg },
          { title: "Industrial Consumables & MRO",          detail: "Bearings, fasteners, lubricants, tooling, abrasives, PPE and complete consumable supply with VMI.", image: defenceImg },
          { title: "Contract Manufacturing for OEMs",       detail: "Build-to-print, build-to-spec sub-assembly and full product manufacturing under OEM quality systems.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Quality, Surface Treatment & Assembly",
        sectionDescription: "World-class quality control, surface treatment and assembly services completing the full manufacturing value chain.",
        image: warehouseImg,
        steps: [
          { title: "Quality Control & Inspection",   detail: "CMM, vision inspection, NDT, NABL-accredited metrology and PPAP/APQP-driven quality processes.", image: warehouseImg },
          { title: "Tool Room & Die Making",         detail: "Press tools, injection moulds, gauges, fixtures and rapid tooling for automotive and consumer products.", image: heroImg },
          { title: "Surface Treatment & Finishing",  detail: "Plating, anodizing, painting, powder coating, heat treatment, PVD/CVD and specialty coatings.", image: defenceImg },
          { title: "Assembly & Sub-Assembly",        detail: "Mechanical, electro-mechanical and electronic assembly under cleanroom or controlled-environment conditions.", image: officeImg },
        ],
      },
    ],
    capabilities: [
      "IATF 16949 ready", "AS9100 QMS", "NABL metrology",
      "CMM & vision inspection", "PPAP/APQP", "5-axis CNC capability",
      "Welder qualifications", "Heat-treat shops", "Plating lines",
      "Cleanroom assembly", "Reverse engineering", "Lean & Six Sigma",
    ],
    subsidiaries: [
      "jigisha-industries",
      "jigisha-enterprises",
      "jigisha-electricals-electronics",
      "jigisha-technologies",
    ],
    whyJigisha:
      "Jigisha Industries provides CNC machining and fabrication capability, while Jigisha Enterprises' 3M+ product catalogue covers every MRO and consumable need for manufacturing operations.",
    ctaLabel: "Get Manufacturing Brief",
  },

  /* 09 ── LOGISTICS ────────────────────────────────────────────────────── */
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    tagline: "Multimodal freight, warehousing, 3PL/4PL and last-mile across India",
    description:
      "Multimodal freight, industrial warehousing, cold chain, and last-mile delivery solutions for industrial, pharmaceutical, and agricultural supply chains.",
    heroImages: [warehouseImg, heroImg, metroImg, greenImg],
    stats: [
      { value: "200+", label: "Warehouses" },
      { value: "5",    label: "Regional Hubs" },
      { value: "Cold", label: "Chain Certified" },
      { value: "EXIM", label: "Documentation" },
    ],
    keyOfferings: [
      "Multimodal Freight Management",
      "Industrial Warehousing (200+ facilities)",
      "Cold Chain Logistics",
      "EXIM Documentation & Customs",
      "Last-Mile Industrial Delivery",
      "Supply Chain Optimisation",
    ],
    useCases: [
      { title: "E-Commerce Fulfillment",       description: "Same-day and next-day last-mile delivery with EV fleet, smart routing and digital POD for online retailers." },
      { title: "Pharmaceutical Distribution",  description: "Validated 2–8°C and −20°C logistics for pharma companies ensuring cold-chain integrity from factory to hospital." },
      { title: "Industrial B2B Freight",       description: "Multimodal road-rail-sea freight orchestration for heavy manufacturing with door-to-door tracking." },
      { title: "Hazardous Goods Logistics",    description: "DG-licensed, ADR-compliant transport for chemicals, batteries, fuels with GPS-monitored vehicles." },
    ],
    sections: [
      {
        sectionTitle: "Freight & Warehousing",
        sectionDescription: "Multimodal freight management and Grade-A warehousing solutions delivering reliability, visibility and cost efficiency.",
        image: warehouseImg,
        steps: [
          { title: "Multimodal Freight Management", detail: "Road, rail, air and sea freight orchestration with single-window visibility, customs clearance and tracking.", image: warehouseImg },
          { title: "Warehousing & Distribution",    detail: "Grade-A warehouses, fulfillment centers, bonded warehouses, racking, MHE and WMS-driven operations.", image: heroImg },
          { title: "3PL/4PL Services",              detail: "Outsourced logistics, control-tower 4PL, S&OP support, vendor onboarding and supply chain management.", image: metroImg },
          { title: "Fleet Management",              detail: "GPS, telematics, fuel management, driver scoring, predictive maintenance and outsourced fleet operations.", image: greenImg },
        ],
      },
      {
        sectionTitle: "Specialty & Technology Logistics",
        sectionDescription: "Advanced cold chain, hazmat, last-mile and technology-driven supply chain solutions for complex cargo requirements.",
        image: heroImg,
        steps: [
          { title: "Cold Chain Logistics",        detail: "Validated 2–8°C and −20°C transport for pharma, vaccines, dairy and frozen foods with IoT monitoring.", image: heroImg },
          { title: "Hazardous Goods Transport",   detail: "DG-licensed vehicles, trained drivers and GPS-monitored fleet for chemicals, fuels, batteries.", image: warehouseImg },
          { title: "Last-Mile Delivery",          detail: "Same-day, next-day and scheduled deliveries with EV fleet, smart routing and POD digitization.", image: greenImg },
          { title: "EXIM & Customs Clearance",    detail: "Import/export documentation, freight forwarding, customs brokerage and trade compliance services.", image: metroImg },
        ],
      },
    ],
    capabilities: [
      "WMS/TMS platforms", "IoT real-time tracking", "Cold-chain validated",
      "DG/hazmat licensed", "EV last-mile fleet", "Customs broker",
      "FTWZ operations", "Reverse logistics", "Predictive ETA",
      "200+ warehouses", "Pan-India hub network", "SLA-managed contracts",
    ],
    subsidiaries: [
      "jigisha-logistics",
      "jigisha-enterprises",
      "jigisha-international",
    ],
    whyJigisha:
      "Jigisha Logistics operates 200+ specialised warehouses across 5 regional hubs, providing multimodal freight, cold chain, and last-mile delivery for industrial, pharma, and agro supply chains.",
    ctaLabel: "Get Logistics Brief",
  },

  /* 10 ── INFOTECH & AUTOMATION ────────────────────────────────────────── */
  {
    slug: "infotech",
    title: "Infotech & Automation",
    tagline: "Industry 4.0, IoT, AI and digital transformation for industrial enterprises",
    description:
      "Driving Industry 4.0 adoption with IoT solutions, industrial automation, AI-powered platforms, and digital infrastructure for industrial enterprises.",
    heroImages: [officeImg, careersImg, heroImg, warehouseImg],
    stats: [
      { value: "28+",  label: "Digital Properties" },
      { value: "AI",   label: "JiSHAbot Platform" },
      { value: "IoT",  label: "Industrial Solutions" },
      { value: "30",   label: "Language Support" },
    ],
    keyOfferings: [
      "Industrial IoT & SCADA Systems",
      "PLC & Automation Components",
      "JiSHAbot AI Platform",
      "Enterprise Software & ERP",
      "Cybersecurity & Compliance",
      "Digital Marketing & SEO",
    ],
    useCases: [
      { title: "Industry 4.0 Transformation", description: "IIoT sensor networks, OEE dashboards and predictive maintenance reducing factory downtime by 25–40%." },
      { title: "Smart City Platform",         description: "Integrated command and control centres, surveillance, traffic management and citizen service platforms." },
      { title: "Defence Cybersecurity",       description: "OT security assessments, VAPT and SIEM implementation for critical defence and infrastructure systems." },
      { title: "Healthcare Digital",          description: "HMIS, telemedicine platforms, PACS integration and AI-assisted diagnostics for hospitals." },
    ],
    sections: [
      {
        sectionTitle: "Enterprise Software & Industrial Connectivity",
        sectionDescription: "ERP, IoT, industrial automation and cloud solutions bridging enterprise and factory floor for complete digital transformation.",
        image: officeImg,
        steps: [
          { title: "ERP & CRM Implementation",      detail: "SAP, Oracle, Microsoft Dynamics, Odoo, Salesforce — implementation, customization and AMS support.", image: officeImg },
          { title: "IoT & Industrial IoT",           detail: "Sensor networks, edge gateways, MQTT/OPC-UA connectivity and IIoT-driven OEE and predictive maintenance.", image: careersImg },
          { title: "Industrial Automation & SCADA",  detail: "PLC, DCS, SCADA, HMI, MES integration and Industry 4.0 connectivity bridging OT and IT layers.", image: heroImg },
          { title: "Cloud Migration & DevOps",       detail: "AWS/Azure/GCP migration, containerization, Kubernetes, CI/CD and cloud-native re-architecture.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "AI, Cybersecurity & Digital Platforms",
        sectionDescription: "AI-powered platforms, cybersecurity services and custom software delivering competitive advantage in the digital age.",
        image: careersImg,
        steps: [
          { title: "JiSHAbot AI Platform",       detail: "Proprietary AI assistant supporting 30+ languages — deployed across industrial portals, helpdesks and field operations.", image: careersImg },
          { title: "Cybersecurity Services",     detail: "VAPT, SOC, SIEM, IT/OT security, ISO 27001 advisory, DPDP compliance and incident response.", image: officeImg },
          { title: "Digital Twins & Simulation", detail: "Asset and process digital twins for plants, infrastructure and rolling stock with real-time data binding.", image: heroImg },
          { title: "Custom Software & SEO",      detail: "Web, mobile, microservices, APIs, low-code platforms and digital marketing for industrial enterprises.", image: warehouseImg },
        ],
      },
    ],
    capabilities: [
      "ISO 27001 cybersecurity", "MeitY empanelled", "AWS/Azure/GCP partners",
      "DevOps & SRE teams", "OT/IT convergence", "ML-Ops & data engineering",
      "DPDP compliance", "28+ digital properties", "SCADA/PLC integration",
      "JiSHAbot AI platform", "Agile delivery", "24×7 NOC/SOC",
    ],
    subsidiaries: [
      "jigisha-infotech",
      "jigisha-technologies",
      "jigisha-media-vision",
    ],
    whyJigisha:
      "Jigisha Infotech is the digital engine of the Industrial Universe — building JiSHAbot, managing 28+ digital properties, and delivering IoT, automation, and enterprise software solutions.",
    ctaLabel: "Get Digital Brief",
  },

  /* 11 ── GREEN ENERGY ─────────────────────────────────────────────────── */
  {
    slug: "green-energy",
    title: "Green Energy",
    tagline: "Accelerating India's clean energy transition with solar, Bio-CNG and ESG solutions",
    description:
      "Accelerating India's clean energy transition with solar solutions, Bio-CNG systems, energy monitoring, and ESG consulting for industrial and institutional clients.",
    heroImages: [greenImg, warehouseImg, heroImg, officeImg],
    stats: [
      { value: "MNRE",  label: "Registered" },
      { value: "Solar", label: "SITC Capability" },
      { value: "Bio",   label: "CNG Solutions" },
      { value: "ESG",   label: "Consulting" },
    ],
    keyOfferings: [
      "Solar Panel Supply & SITC",
      "Bio-CNG Plant Equipment",
      "Energy Monitoring & Management",
      "Solar-Powered Railway Stations",
      "ESG Consulting & Carbon Reporting",
      "MNRE-Approved Solar Pumps",
    ],
    useCases: [
      { title: "PM Surya Ghar Solar Rooftop",   description: "Turnkey rooftop solar installations for residential and MSME sectors under the national solar rooftop scheme." },
      { title: "Bio-CNG Plant Commissioning",   description: "Complete anaerobic digestion and CBG dispensing plants under SATAT scheme, converting farm waste to fuel." },
      { title: "Solar-Powered Railway Stations", description: "Complete solar SITC for railway stations, reducing grid dependence and cutting utility bills by up to 60%." },
      { title: "Corporate ESG Programs",        description: "BRSR and GRI reporting, science-based targets and net-zero pathway development for listed companies." },
    ],
    sections: [
      {
        sectionTitle: "Solar & Bio-Energy Solutions",
        sectionDescription: "End-to-end EPC and equipment supply for solar, bio-CNG and waste-to-energy projects supporting India's renewable energy targets.",
        image: greenImg,
        steps: [
          { title: "Solar Panel Supply & SITC",    detail: "ALMM-listed mono-PERC, bifacial and TOPCon modules — rooftop, ground-mount and railway station installations.", image: greenImg },
          { title: "Bio-CNG Plant Equipment",      detail: "Anaerobic digesters, gas holders, biogas upgradation skids, compressors and complete bio-CNG package plants.", image: heroImg },
          { title: "MNRE Solar Pumps (PM-KUSUM)",  detail: "AC/DC solar water pumps for agriculture under PM-KUSUM — MNRE-empanelled supply with subsidy documentation.", image: warehouseImg },
          { title: "Waste-to-Energy Systems",      detail: "MSW incinerators, biomass gasifiers, RDF systems and ORC turbines with emission control.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Energy Management & ESG",
        sectionDescription: "Smart energy monitoring, ESG advisory and sustainability reporting services building long-term environmental responsibility.",
        image: officeImg,
        steps: [
          { title: "Energy Monitoring & Management", detail: "Smart meters, power quality analyzers, IoT energy dashboards, AMI systems and prepaid metering.", image: officeImg },
          { title: "ESG Consulting",                 detail: "BRSR, GRI, SASB, TCFD reporting, ESG strategy, materiality assessment and stakeholder engagement.", image: greenImg },
          { title: "Carbon Footprint Assessment",    detail: "GHG inventory (Scope 1, 2, 3), carbon accounting, science-based targets and net-zero pathway design.", image: heroImg },
          { title: "ISO 14001/50001 Implementation", detail: "Environmental and energy management system implementation, certification and audit support.", image: warehouseImg },
        ],
      },
    ],
    capabilities: [
      "MNRE-approved equipment", "ALMM-listed modules", "Solar SITC EPC",
      "Bio-CNG plant commissioning", "CEIG/DISCOM liaison", "PM-KUSUM specialist",
      "BEE-certified auditors", "CAPEX/RESCO models", "IoT performance monitoring",
      "ESG reporting (BRSR/GRI)", "Carbon accounting", "Net-zero roadmaps",
    ],
    subsidiaries: [
      "jigisha-green",
      "jigisha-envirocare",
      "jigisha-electricals-electronics",
    ],
    whyJigisha:
      "Jigisha Green is MNRE-registered and provides end-to-end solar SITC, Bio-CNG plant commissioning, and ESG consulting — supported by Jigisha Envirocare for environmental compliance.",
    ctaLabel: "Get Green Energy Brief",
  },

  /* 12 ── OTHER SECTORS ────────────────────────────────────────────────── */
  {
    slug: "others",
    title: "Other Sectors",
    tagline: "Finance, media, retail and international trade — 360° industrial coverage",
    description:
      "Jigisha Group's reach extends to emerging and unlisted verticals including finance, media, retail, and international trade — supporting diverse industrial and institutional needs.",
    heroImages: [careersImg, officeImg, heroImg, warehouseImg],
    stats: [
      { value: "19",    label: "Group Companies" },
      { value: "15+",   label: "Target Countries" },
      { value: "B2B",   label: "& B2C Platforms" },
      { value: "360°",  label: "Industrial Coverage" },
    ],
    keyOfferings: [
      "Trade Finance & Working Capital",
      "Industrial Media & Publications",
      "B2C & B2B E-Commerce",
      "International Trade (Import/Export)",
      "Vendor Development & Empanelment",
      "Risk Advisory Services",
    ],
    useCases: [
      { title: "B2B Industrial Marketing",     description: "Full-funnel ABM campaigns for industrial equipment and infrastructure brands reaching qualified B2B buyers." },
      { title: "Export & Import Trade",        description: "End-to-end EXIM facilitation — sourcing, freight forwarding, customs clearance and trade finance." },
      { title: "Vendor Finance & Working Capital", description: "Supply chain finance, bill discounting and working capital solutions for industrial MSMEs." },
      { title: "Industrial E-Commerce",        description: "B2B and B2C e-commerce platforms connecting manufacturers, distributors and end-buyers across sectors." },
    ],
    sections: [
      {
        sectionTitle: "Finance, Trade & E-Commerce",
        sectionDescription: "Diversified financial services, international trade facilitation and digital commerce platforms serving the industrial ecosystem.",
        image: careersImg,
        steps: [
          { title: "Trade Finance & Working Capital",    detail: "Supply chain finance, bill discounting, channel finance and working capital products for industrial MSMEs.", image: careersImg },
          { title: "International Trade (EXIM)",        detail: "Import/export advisory, freight forwarding, customs clearance, documentation and trade compliance.", image: officeImg },
          { title: "B2B & B2C E-Commerce",              detail: "Online marketplaces connecting industrial buyers with suppliers — bulk procurement, cataloguing and order management.", image: heroImg },
          { title: "Vendor Development & Empanelment",  detail: "Structured vendor on-boarding, qualification, rating and development programmes for large buyers.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Media, Publishing & Advisory",
        sectionDescription: "Owned media platforms, industrial publications and strategic advisory services for the broader Jigisha Group ecosystem.",
        image: officeImg,
        steps: [
          { title: "Industrial Media & Publications",  detail: "In-News platform, sector-focused industrial magazine and B2B content reaching decision-makers.", image: officeImg },
          { title: "Corporate PR & Communications",    detail: "Media relations, press releases, crisis communication and executive thought leadership.", image: careersImg },
          { title: "Risk Advisory Services",           detail: "Business risk assessments, credit analysis, regulatory compliance advisory and strategic risk mitigation.", image: heroImg },
          { title: "Brand & Marketing Services",       detail: "Corporate identity, digital marketing, events, exhibitions and full-service B2B agency capabilities.", image: warehouseImg },
        ],
      },
    ],
    capabilities: [
      "Trade finance products", "EXIM expertise", "Customs broker licensed",
      "B2B/B2C platforms", "Industrial media assets", "19 group companies",
      "Pan-India reach", "15+ export markets", "Risk advisory",
      "Vendor empanelment", "Supply chain finance", "360° sector coverage",
    ],
    subsidiaries: [
      "jigisha-infin",
      "jigisha-media-vision",
      "jigisha-retails",
      "jigisha-international",
    ],
    whyJigisha:
      "Jigisha Group's diversified portfolio covers finance, media, retail, and international trade — ensuring that no industrial need goes unmet across any sector.",
    ctaLabel: "Explore All Sectors",
  },
];

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industriesData.find((i) => i.slug === slug);
}

export function getAllIndustries(): Industry[] {
  return industriesData;
}
