import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import heroImg from "../assets/hero-industrial.jpg";
import officeImg from "../assets/about-office.jpg";
import warehouseImg from "../assets/products-warehouse.jpg";
import careersImg from "../assets/careers-team.jpg";

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

export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImages: string[];
  stats: { value: string; label: string }[];
  highlights: string[];
  useCases: IndustryUseCase[];
  sections: IndustrySection[];
  capabilities: string[];
  whyUs: { title: string; body: string }[];
  ctaLabel?: string;
}

export const industriesData: Industry[] = [
  /* ─────────────────────────── 01. INDIAN RAILWAYS ──────────────────── */
  {
    slug: "indian-railways",
    title: "Indian Railways",
    tagline: "Trusted partner across Production Units, Sheds, Divisions and all 17 Zones",
    description:
      "Indian Railways is the backbone of national mobility, and Jigisha Group is one of its trusted partners — supplying components, executing turnkey projects, running ICBMRO contracts and integrating next-generation technologies like KAWACH and PM Gati Shakti across the network.",
    heroImages: [railwayImg, metroImg, heroImg, defenceImg],
    stats: [
      { value: "17", label: "Zones Served" },
      { value: "RDSO", label: "Approved" },
      { value: "500K+", label: "Components" },
      { value: "24x7", label: "Support" },
    ],
    highlights: [
      "RDSO vendor approvals",
      "IRS specifications compliance",
      "PAN-India rapid deployment",
      "24x7 AMC support contracts",
      "In-house spares warehousing",
      "KAWACH & TCAS ready",
    ],
    useCases: [
      { title: "Vande Bharat Rollout", description: "Supply of interiors, HVAC, electrical sub-assemblies and passenger systems for new-generation Vande Bharat trainsets." },
      { title: "KAWACH Safety Network", description: "RFID tags, transponders and trackside hardware for India's indigenous automatic train protection system." },
      { title: "Station Redevelopment", description: "MEP packages, accessibility upgrades, smart lighting and passenger amenities for world-class station transformations." },
      { title: "ICBMRO & POH Contracts", description: "Integrated coach maintenance, periodic overhaul and mid-life rehabilitation across Zones and Production Units." },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Track Systems",
        sectionDescription:
          "Complete supply and maintenance solutions for rolling stock, track machines and locomotive systems — keeping the network moving reliably.",
        image: railwayImg,
        steps: [
          { title: "Rolling Stock Supply & Maintenance", detail: "Wheels, axles, bogies, brakes, couplers, HVAC, interiors and lighting for ICF, LHB, Vande Bharat and EMU/MEMU rakes.", image: railwayImg },
          { title: "OHE Erection & Commissioning", detail: "Design, supply and erection of 25kV OHE — masts, cantilevers, contact wire and complete electrification corridors.", image: metroImg },
          { title: "Track Machine AMC", detail: "Spares and maintenance for Tamping, BCM, DTS, BRM, Tower Wagons and complete track machine fleet upkeep.", image: heroImg },
          { title: "Depot Equipment", detail: "Wheel lathes, drop tables, presses, lifting jacks, bogie test rigs and complete depot machinery installation.", image: defenceImg },
        ],
      },
      {
        sectionTitle: "Station & Safety Technologies",
        sectionDescription:
          "Next-generation station systems, safety technologies and digital infrastructure to modernize India's railway network for the future.",
        image: heroImg,
        steps: [
          { title: "Signaling & Telecom (S&T)", detail: "Interlocking, point machines, axle counters, OFC backbone, GSM-R, Wi-Fi and complete S&T integration.", image: metroImg },
          { title: "KAWACH Implementation", detail: "On-board and trackside KAWACH (TCAS) component supply, RFID deployment and commissioning support.", image: railwayImg },
          { title: "Station Modernization", detail: "Station redevelopment, lighting, MEP, accessibility, signage, passenger amenities and energy-efficient retrofits.", image: heroImg },
          { title: "ICBMRO & POH Contracts", detail: "Integrated Coach Body Maintenance, Repair, Overhaul, Periodic Overhaul and Mid-Life Rehabilitation programmes.", image: defenceImg },
        ],
      },
    ],
    capabilities: ["RDSO vendor approvals", "IRS specifications", "ISO 9001/14001/45001", "GeM & IREPS empanelled", "PAN-India deployment", "Skilled S&T crews", "OHE specialists", "Heavy logistics", "Calibration labs", "Spares warehousing", "24x7 AMC support", "DPR & survey teams"],
    whyUs: [
      { title: "Deep Railway DNA", body: "Decades of working with IR — we understand zones, divisions, formats, timelines and culture." },
      { title: "Approved Supplier", body: "RDSO listings, IRS compliance and proven vendor performance across multiple zones." },
      { title: "Future-Ready", body: "Active in KAWACH, PM Gati Shakti, Vande Bharat, smart stations and IoT-driven railway transformation." },
    ],
    ctaLabel: "Get Railway Brief",
  },

  /* ─────────────────────────── 02. METRO RAIL ───────────────────────── */
  {
    slug: "metro-rail",
    title: "Metro Rail",
    tagline: "Powering urban mobility across India's expanding metro network",
    description:
      "India's metro network is one of the world's fastest-growing urban transit programmes. Jigisha Group is an active partner to metro corporations — supplying rolling stock systems, third rail, CBTC sub-assemblies, AFC, PSDs, escalators and station MEP across operating and upcoming corridors.",
    heroImages: [metroImg, railwayImg, heroImg, officeImg],
    stats: [
      { value: "12+", label: "Metro Cities" },
      { value: "CBTC", label: "Ready" },
      { value: "PSD", label: "Integrated" },
      { value: "O&M", label: "Contracts" },
    ],
    highlights: [
      "EN 45545 fire-safe materials",
      "IP65+ outdoor rated equipment",
      "CBTC sub-vendor certified",
      "NCMC card integration ready",
      "FAT/SAT testing support",
      "24x7 emergency response",
    ],
    useCases: [
      { title: "Phase 3 Corridor Expansion", description: "Rolling stock components, station systems and depot equipment supply for new metro corridor launches across cities." },
      { title: "AFC & Smart Ticketing", description: "Automated fare collection gates, TVMs and NCMC-compatible card systems for seamless passenger journeys." },
      { title: "Depot Modernization", description: "Heavy lifting equipment, wheel lathes, washing plants and complete depot O&M contracts for operational depots." },
      { title: "Green Metro Initiative", description: "Solar rooftop, regenerative braking systems and LED lighting retrofits reducing energy consumption by 30%." },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Station Infrastructure",
        sectionDescription:
          "Comprehensive supply of rolling stock components and station systems ensuring passenger safety, comfort and operational reliability.",
        image: metroImg,
        steps: [
          { title: "Rolling Stock Components", detail: "Doors, HVAC, interiors, seats, PIDS, CCTV, lighting and electrical sub-assemblies for metro trainsets.", image: metroImg },
          { title: "Station Electrical & MEP", detail: "LV/MV electricals, HVAC, plumbing, fire systems, BMS and complete station MEP packages.", image: railwayImg },
          { title: "Platform Screen Doors", detail: "Full-height and half-height PSDs, gap fillers, IP CCTV, NVR/VMS and integrated security systems.", image: heroImg },
          { title: "Depot Equipment & AMC", detail: "Bogie drop tables, wheel lathes, washing plants, lifting jacks and long-term depot O&M contracts.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Smart Technology & Passenger Experience",
        sectionDescription:
          "Cutting-edge passenger systems, smart ticketing and green energy solutions that define the modern metro experience.",
        image: heroImg,
        steps: [
          { title: "Ticketing & Access Control", detail: "AFC gates, TVMs, NCMC card systems, QR ticketing and back-office clearing house integration.", image: railwayImg },
          { title: "Smart Passenger Info Systems", detail: "Dynamic LED maps, LCD displays, public address, intercom and integrated PIDS platforms.", image: metroImg },
          { title: "Station Furniture & Accessibility", detail: "Benches, signage, tactile paving, ramps and inclusive design accessories for universal access.", image: officeImg },
          { title: "Green Energy Integration", detail: "Solar rooftop, regenerative braking, energy-efficient lighting and sustainability retrofits for stations.", image: heroImg },
        ],
      },
    ],
    capabilities: ["EN 45545 fire-safe", "IP65+ outdoor rated", "CBTC sub-vendor", "NCMC certified", "BIM coordination", "Tunnel logistics", "Cleanroom assembly", "Multi-city teams", "FAT/SAT support", "O&M training", "Spares stocking", "24x7 response"],
    whyUs: [
      { title: "Metro-Specialized", body: "Dedicated metro vertical with engineers experienced in CBTC, AFC, PSD and rolling stock." },
      { title: "Multi-Corridor Active", body: "Live execution and supply across Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi and more." },
      { title: "Lifecycle Partner", body: "DPR support to commissioning to long-term O&M — invested through the asset's full life." },
    ],
    ctaLabel: "Get Metro Brief",
  },

  /* ─────────────────────────── 03. AEROSPACE & DEFENCE ──────────────── */
  {
    slug: "aerospace-defence",
    title: "Aerospace & Defence",
    tagline: "Make-in-India partner to Armed Forces, DRDO, DPSUs and global OEMs",
    description:
      "Jigisha Group's aerospace & defence vertical supports India's strategic autonomy through indigenization, precision manufacturing, MRO services and supply of defence-grade components — aligned with Make in India, Atmanirbhar Bharat and SRIJAN portal initiatives.",
    heroImages: [defenceImg, heroImg, railwayImg, officeImg],
    stats: [
      { value: "AS9100", label: "Certified" },
      { value: "DGQA", label: "Approved" },
      { value: "MoD", label: "Empanelled" },
      { value: "SRIJAN", label: "Active" },
    ],
    highlights: [
      "DGAQA/CEMILAC approved",
      "5-axis CNC precision machining",
      "NABL-accredited testing",
      "AS9100 QMS implemented",
      "MIL-STD ruggedization",
      "Offset partnership ready",
    ],
    useCases: [
      { title: "Make in India Indigenization", description: "Converting imported defence sub-systems to indigenous supply via SRIJAN, iDEX and offset channels for Armed Forces." },
      { title: "Rotary Wing MRO", description: "Helicopter component supply, precision machined parts and MRO support for fixed and rotary-wing military platforms." },
      { title: "Naval Systems Supply", description: "Marine-grade hardware, electronic enclosures and sub-assemblies for naval vessels and maritime surveillance." },
      { title: "UAV Programme Support", description: "Drone airframe sub-assemblies, avionics housings and precision fasteners for indigenous UAV development programmes." },
    ],
    sections: [
      {
        sectionTitle: "Defence Components & Manufacturing",
        sectionDescription:
          "Precision manufacturing and supply of defence-grade components meeting the highest quality and traceability standards.",
        image: defenceImg,
        steps: [
          { title: "Defence-Grade Components", detail: "Precision parts, electronic sub-assemblies, fasteners and specialty materials for armoured vehicles, aircraft and naval platforms.", image: defenceImg },
          { title: "Aerospace Hardware Manufacturing", detail: "AS9100-compliant machined and sheet-metal aerospace parts for fixed-wing, rotary-wing and UAV platforms.", image: heroImg },
          { title: "Electronic Sub-Assemblies", detail: "PCB assemblies, harnesses, ruggedized enclosures for radar, EW, sonar and communication systems.", image: railwayImg },
          { title: "DRDO, HAL, BEL, BEML Partnerships", detail: "Vendor relationships across DPSUs for sustained supply, indigenization and engineering support.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Quality Compliance & Indigenization",
        sectionDescription:
          "End-to-end quality systems, compliance frameworks and indigenization pathways for India's defence self-reliance mission.",
        image: heroImg,
        steps: [
          { title: "AS9100 Quality Compliance", detail: "Full aerospace QMS, FAI per AS9102, traceability, conflict-minerals compliance and ITAR-aware processes.", image: heroImg },
          { title: "Make in India & Atmanirbhar", detail: "SRIJAN portal participation, import-substitution success stories and offset-partnership readiness.", image: defenceImg },
          { title: "Defence Indigenisation", detail: "Reverse engineering, sample qualification, vendor development and Type Approval for imported sub-systems.", image: officeImg },
          { title: "Ordnance Factory Supplies", detail: "Machined components, fuze parts, casings and quality-controlled supply for ordnance manufacturers.", image: railwayImg },
        ],
      },
    ],
    capabilities: ["DGAQA/CEMILAC links", "Cleanroom assembly", "5-axis CNC", "NABL testing", "NDT inspection", "MIL-STD ruggedization", "EMI/EMC support", "Security cleared staff", "Lifetime spares", "Offset-partner ready", "SRIJAN registered", "Strategic vetting"],
    whyUs: [
      { title: "Strategic Trust", body: "Long-standing DPSU and Armed Forces relationships built on confidentiality and quality." },
      { title: "Indigenization Proven", body: "Track record of converting imports to indigenous supply via SRIJAN, iDEX and offset routes." },
      { title: "End-to-End Capability", body: "Engineering, manufacturing, MRO and lifecycle support — single accountable partner." },
    ],
    ctaLabel: "Get Defence Brief",
  },

  /* ─────────────────────────── 04. ENERGY & POWER ───────────────────── */
  {
    slug: "energy-power",
    title: "Energy & Power",
    tagline: "Renewable energy, smart grid and sustainability solutions for India's net-zero journey",
    description:
      "From utility-scale solar farms and bio-CNG plants to smart grid roll-outs and energy efficiency for industries, Jigisha Group delivers complete renewable and conventional energy solutions — supporting India's commitment to 500 GW non-fossil capacity by 2030.",
    heroImages: [greenImg, heroImg, warehouseImg, officeImg],
    stats: [
      { value: "MNRE", label: "Approved" },
      { value: "ALMM", label: "Modules" },
      { value: "PM-KUSUM", label: "Specialist" },
      { value: "ISO 50001", label: "EnMS" },
    ],
    highlights: [
      "MNRE-approved equipment",
      "BEE-certified energy auditors",
      "IoT performance monitoring",
      "CAPEX & RESCO models",
      "PM-KUSUM specialist",
      "Net-metering experts",
    ],
    useCases: [
      { title: "PM Surya Ghar Implementation", description: "Turnkey rooftop solar installations for residential and MSME sectors under the national solar rooftop scheme." },
      { title: "Bio-CNG Plant Commissioning", description: "Complete anaerobic digestion and CBG dispensing plants under SATAT scheme, converting farm waste to fuel." },
      { title: "Smart Grid Modernization", description: "AMI roll-out, smart meters, DCUs and demand response systems for DISCOMs reducing AT&C losses." },
      { title: "Industrial Energy Audits", description: "BEE-certified audits for manufacturing facilities identifying savings of 15-30% in energy costs." },
    ],
    sections: [
      {
        sectionTitle: "Renewable Energy Solutions",
        sectionDescription:
          "End-to-end EPC and advisory for solar, bio-energy and waste-to-energy projects supporting India's renewable energy targets.",
        image: greenImg,
        steps: [
          { title: "Solar Power EPC & Installation", detail: "Rooftop, ground-mount and floating solar EPC — site survey to commissioning with PPA and net-metering.", image: greenImg },
          { title: "Bio-CNG Plant Setup", detail: "Anaerobic digestion, biogas upgradation and CBG dispensing under SATAT — turnkey plants from waste streams.", image: heroImg },
          { title: "Waste-to-Energy Solutions", detail: "MSW incineration, biomass gasification, RDF and WTE plants with emission control and grid integration.", image: warehouseImg },
          { title: "Renewable Energy Consulting", detail: "Feasibility, DPR, scheme advisory for PM-KUSUM, PM Surya Ghar and RTC tenders.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Grid Infrastructure & Efficiency",
        sectionDescription:
          "Smart grid modernization, energy efficiency programs and green building services for a sustainable energy future.",
        image: heroImg,
        steps: [
          { title: "Smart Grid & Metering", detail: "AMI roll-out, smart meters, DCUs, prepaid metering, demand response and grid analytics for DISCOMs.", image: greenImg },
          { title: "Power Distribution Equipment", detail: "Transformers, switchgear, RMUs, distribution automation and complete sub-station packages for utilities.", image: warehouseImg },
          { title: "Energy Efficiency Audits", detail: "BEE-accredited audits, ECBC compliance, ISO 50001 implementation and demand-side management.", image: heroImg },
          { title: "Green Building Certification", detail: "IGBC/LEED advisory, water management, daylighting, HVAC optimization and net-zero building projects.", image: officeImg },
        ],
      },
    ],
    capabilities: ["MNRE-approved equipment", "ALMM-listed modules", "CEIG/DISCOM liaison", "PPA/REC structuring", "BEE-certified auditors", "Performance monitoring", "CAPEX/RESCO models", "ESG reporting", "Carbon accounting", "Net-metering specialists", "Battery storage integration", "EV-charging linked solar"],
    whyUs: [
      { title: "Full Stack Renewable", body: "Solar, bio-energy, storage, smart meters, EV charging — every renewable lever under one partner." },
      { title: "Scheme Expertise", body: "Deep know-how of PM-KUSUM, PM Surya Ghar and central/state subsidy mechanics." },
      { title: "Performance Guaranteed", body: "Long-term O&M with generation guarantees, IoT monitoring and transparent reporting." },
    ],
    ctaLabel: "Get Energy Brief",
  },

  /* ─────────────────────────── 05. HEALTHCARE & PHARMA ──────────────── */
  {
    slug: "healthcare-pharma",
    title: "Healthcare & Pharma",
    tagline: "APIs, medical devices, hospital procurement and pharma plant solutions",
    description:
      "Jigisha Group serves hospitals, pharma manufacturers, diagnostic labs and government health programmes with APIs, medical devices, lab equipment, surgical consumables, cold-chain logistics and complete CDSCO/WHO-GMP compliant supply.",
    heroImages: [warehouseImg, officeImg, greenImg, careersImg],
    stats: [
      { value: "CDSCO", label: "Licensed" },
      { value: "WHO-GMP", label: "Sourced" },
      { value: "Cold-Chain", label: "Validated" },
      { value: "CGHS/ESIC", label: "Empanelled" },
    ],
    highlights: [
      "CDSCO licensed operations",
      "WHO-GMP sourced APIs",
      "Validated cold-chain logistics",
      "CGHS/ESIC tender expertise",
      "Medical equipment AMC",
      "Biomedical engineering support",
    ],
    useCases: [
      { title: "Hospital Infrastructure Setup", description: "Single-window equipment and consumable supply for tertiary care hospitals, ICUs and operation theatres." },
      { title: "Vaccine Cold Chain", description: "Validated 2-8°C and -20°C distribution for national immunization programmes with IoT temperature logging." },
      { title: "API Sourcing for Generics", description: "GMP-certified active pharmaceutical ingredient procurement for Indian generics manufacturers meeting US-FDA standards." },
      { title: "Diagnostic Lab Setup", description: "Turnkey analytical equipment packages — HPLC, GC, FTIR, dissolution apparatus — for QC and research labs." },
    ],
    sections: [
      {
        sectionTitle: "Pharmaceutical & Device Supply",
        sectionDescription:
          "Comprehensive supply of APIs, medical devices and diagnostics from CDSCO-licensed, GMP-certified sources for healthcare providers.",
        image: warehouseImg,
        steps: [
          { title: "Pharmaceutical Raw Materials & APIs", detail: "APIs, intermediates, excipients and packaging from WHO-GMP and US-FDA approved sources.", image: warehouseImg },
          { title: "Medical Devices & Diagnostics", detail: "Patient monitors, ventilators, ECG, ultrasound, dialysis, IVD reagents and POC devices.", image: officeImg },
          { title: "Surgical Instruments & Consumables", detail: "Surgical disposables, sutures, instruments, IV sets, gloves, gauze and complete OT/ICU supply.", image: greenImg },
          { title: "Lab & Analytical Equipment", detail: "HPLC, GC, UV-Vis, FTIR, dissolution apparatus, autoclaves, microscopes and full QC lab packages.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Hospital & Lab Infrastructure",
        sectionDescription:
          "End-to-end solutions for hospital procurement, cold chain logistics, compliance and digital health infrastructure.",
        image: officeImg,
        steps: [
          { title: "Hospital Procurement Solutions", detail: "Single-window supply for tertiary care hospitals — equipment, consumables, services and rate contracts.", image: officeImg },
          { title: "Cold-Chain Logistics", detail: "Validated 2-8°C and -20°C transport, ILRs, deep freezers and IoT-monitored vaccine distribution.", image: warehouseImg },
          { title: "CDSCO & WHO-GMP Compliance", detail: "Regulatory advisory, licensing support, technical dossiers and audit preparation for pharma plants.", image: careersImg },
          { title: "Telemedicine Infrastructure", detail: "Telemedicine carts, video conferencing, peripheral devices, PACS, HIS integration and remote-care platforms.", image: greenImg },
        ],
      },
    ],
    capabilities: ["CDSCO licenses", "WHO-GMP sourcing", "Cold-chain validated", "Hazmat handling", "CGHS/ESIC tenders", "DGFT export licenses", "Pharmacovigilance", "Lab installation", "Medical equipment AMC", "Bio-medical engineering", "Validation & calibration", "Govt programme support"],
    whyUs: [
      { title: "Healthcare Specialists", body: "Trained teams that understand hospitals, pharma plants and regulatory rigor — not generalist suppliers." },
      { title: "Compliance First", body: "Every supply backed by CDSCO licensing, GMP sourcing, cold-chain validation and full documentation." },
      { title: "Mission-Critical Reliability", body: "Patient lives depend on uptime — our supply, AMC and emergency response is built for that pressure." },
    ],
    ctaLabel: "Get Healthcare Brief",
  },

  /* ─────────────────────────── 06. AGRICULTURE ──────────────────────── */
  {
    slug: "agriculture",
    title: "Agriculture",
    tagline: "Inputs, machinery, irrigation and FPO procurement for Indian farms",
    description:
      "Jigisha Group serves farmers, FPOs, agri-businesses and state agriculture departments with seeds, fertilizers, agro machinery, precision farming, cold storage, organic inputs and irrigation systems — supporting India's agricultural productivity and farmer prosperity goals.",
    heroImages: [greenImg, warehouseImg, heroImg, careersImg],
    stats: [
      { value: "FCO/CIB", label: "Registered" },
      { value: "PMKSY", label: "Specialist" },
      { value: "FPO", label: "Procurement" },
      { value: "Organic", label: "Certified" },
    ],
    highlights: [
      "FCO/CIB registered inputs",
      "PMKSY-empanelled supplier",
      "FPO partner network",
      "Drone-spray operators",
      "Cold-chain validated storage",
      "Organic certification support",
    ],
    useCases: [
      { title: "PM-KUSUM Solar Pumps", description: "Off-grid solar pump deployment replacing diesel pumps for farmers, cutting irrigation costs by up to 70%." },
      { title: "FPO Bulk Procurement", description: "Aggregated input supply for farmer producer organizations — seeds, fertilizers, pesticides at competitive prices." },
      { title: "Precision Farming Deployment", description: "IoT soil sensors, GPS-guided tractors, drone spraying and data-driven crop advisory for yield optimization." },
      { title: "Post-Harvest Cold Chain", description: "Cold storage rooms, ripening chambers and reefer transport protecting horticulture produce from farm to market." },
    ],
    sections: [
      {
        sectionTitle: "Farm Inputs & Mechanization",
        sectionDescription:
          "Quality-certified seeds, fertilizers, crop protection products and mechanization equipment to enhance farm productivity.",
        image: greenImg,
        steps: [
          { title: "Seeds & Planting Material", detail: "Hybrid seeds, certified seeds, vegetable seeds and tissue-cultured plants from approved producers.", image: greenImg },
          { title: "Fertilizers & Crop Protection", detail: "Urea, DAP, NPK, micronutrients, biofertilizers, pesticides and bio-pesticides registered under FCO and CIB.", image: warehouseImg },
          { title: "Agro Machinery & Implements", detail: "Tractors, power tillers, rotavators, seed drills, sprayers, harvesters and farm mechanization equipment.", image: heroImg },
          { title: "FPO Procurement Assistance", detail: "Bulk procurement, working capital tie-ups, tender support and direct-from-source supply for FPOs.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Technology & Post-Harvest",
        sectionDescription:
          "Precision farming technology, irrigation infrastructure and cold chain solutions to protect yields and maximize farmer income.",
        image: heroImg,
        steps: [
          { title: "Precision Farming Support", detail: "Soil testing, drone spraying, GPS-guided tractors, IoT soil sensors and data-driven crop advisory.", image: heroImg },
          { title: "Cold Storage Solutions", detail: "Cold rooms, ripening chambers, blast freezers, reefer trucks and complete post-harvest cold chain.", image: greenImg },
          { title: "Organic Farming Products", detail: "Organic inputs, bio-stimulants, compost, vermicompost, neem-based pesticides and certification support.", image: warehouseImg },
          { title: "Irrigation Systems & Pumps", detail: "Drip irrigation, sprinklers, solar pumps under PM-KUSUM and PMKSY-aligned micro-irrigation packages.", image: careersImg },
        ],
      },
    ],
    capabilities: ["FCO/CIB registrations", "PMKSY-empanelled", "PM-KUSUM specialist", "FPO partner network", "Drone-spray operators", "Soil-test labs", "Cold-chain validated", "Custom Hiring Centers", "Subsidy documentation", "Farmer training", "Multi-state reach", "Organic certification"],
    whyUs: [
      { title: "Farm-to-Fork", body: "Inputs, mechanization, irrigation, post-harvest — full value chain coverage under one partner." },
      { title: "Scheme Specialist", body: "PM-KUSUM, PMKSY, PMFME and state subsidy navigation done end-to-end for farmers." },
      { title: "Quality Assured", body: "Only registered, certified and tested inputs reach farms — protecting yield and soil health." },
    ],
    ctaLabel: "Get Agri Brief",
  },

  /* ─────────────────────────── 07. MANUFACTURING ────────────────────── */
  {
    slug: "manufacturing",
    title: "Manufacturing",
    tagline: "CNC machining, fabrication, MRO and contract manufacturing for OEMs",
    description:
      "Jigisha Group serves Indian and global OEMs across automotive, capital goods, electronics and industrial equipment — offering precision machining, fabrication, surface treatment, contract manufacturing, quality control and MRO supply with full traceability.",
    heroImages: [heroImg, warehouseImg, defenceImg, officeImg],
    stats: [
      { value: "IATF/AS9100", label: "Ready" },
      { value: "5-Axis", label: "CNC" },
      { value: "NABL", label: "Testing" },
      { value: "OEM", label: "Approved" },
    ],
    highlights: [
      "IATF 16949 quality systems",
      "AS9100 aerospace compliance",
      "CMM & vision inspection",
      "5-axis CNC capability",
      "Cleanroom assembly capacity",
      "Lean & Six Sigma culture",
    ],
    useCases: [
      { title: "Automotive Tier-1/2 Supply", description: "IATF 16949-compliant machined and fabricated components for automotive OEMs with full PPAP documentation." },
      { title: "Aerospace Precision Parts", description: "AS9100-certified complex machined parts in titanium, inconel and aluminium alloys for aviation programmes." },
      { title: "Defence Hardware Supply", description: "Ruggedized, precision-machined components meeting DGQA and MIL-STD specifications for defence programs." },
      { title: "VMI for Factory MRO", description: "Vendor-managed inventory of bearings, fasteners, lubricants and tooling ensuring zero factory downtime." },
    ],
    sections: [
      {
        sectionTitle: "Precision Engineering & Fabrication",
        sectionDescription:
          "Advanced machining, fabrication and sub-assembly capabilities for OEMs demanding exacting tolerances and full traceability.",
        image: heroImg,
        steps: [
          { title: "CNC Machining & Precision Engineering", detail: "5-axis CNC, turn-mill, micro-machining of complex parts in steels, aluminium, titanium and special alloys.", image: heroImg },
          { title: "Fabrication & Welding Services", detail: "Sheet metal, structural and pressure-vessel fabrication with TIG, MIG, SAW capability and PWHT.", image: warehouseImg },
          { title: "Industrial Consumables & MRO", detail: "Bearings, fasteners, lubricants, tooling, abrasives, PPE and complete consumable supply with VMI.", image: defenceImg },
          { title: "Contract Manufacturing for OEMs", detail: "Build-to-print, build-to-spec sub-assembly and full product manufacturing under OEM quality systems.", image: officeImg },
        ],
      },
      {
        sectionTitle: "Quality, Surface & Assembly",
        sectionDescription:
          "World-class quality control, surface treatment and assembly services completing the full manufacturing value chain.",
        image: warehouseImg,
        steps: [
          { title: "Quality Control & Inspection", detail: "CMM, vision inspection, NDT, NABL-accredited metrology and PPAP/APQP-driven quality processes.", image: warehouseImg },
          { title: "Tool Room & Die Making", detail: "Press tools, injection moulds, gauges, fixtures and rapid tooling for automotive and consumer products.", image: heroImg },
          { title: "Surface Treatment & Finishing", detail: "Plating, anodizing, painting, powder coating, heat treatment, PVD/CVD and specialty coatings.", image: defenceImg },
          { title: "Assembly & Sub-Assembly", detail: "Mechanical, electro-mechanical and electronic assembly under cleanroom or controlled-environment conditions.", image: officeImg },
        ],
      },
    ],
    capabilities: ["IATF 16949 ready", "AS9100 systems", "NABL metrology", "CMM & vision inspection", "PPAP/APQP", "5-axis CNC capability", "Welder qualifications", "Heat-treat shops", "Plating lines", "Cleanroom assembly", "Reverse engineering", "Lean & Six Sigma"],
    whyUs: [
      { title: "OEM-Quality Mindset", body: "Built for tier-1/tier-2 supply with statistical quality control, traceability and PPAP discipline." },
      { title: "Engineering Capable", body: "DFM/DFA inputs, value engineering and design optimization — not just job-shop machining." },
      { title: "Single-Source Convenience", body: "Machining, fabrication, surface treatment, assembly under one roof — fewer vendors, faster delivery." },
    ],
    ctaLabel: "Get Manufacturing Brief",
  },

  /* ─────────────────────────── 08. CONSTRUCTION & EPC ───────────────── */
  {
    slug: "construction-epc",
    title: "Construction & EPC",
    tagline: "EPC for industrial plants, civil infrastructure, railways, power and buildings",
    description:
      "Jigisha Group delivers EPC and construction services across industrial plants, civil infrastructure, railway and metro stations, bridges, power infrastructure, commercial buildings and MEP — backed by in-house design, project management and skilled execution teams.",
    heroImages: [officeImg, heroImg, railwayImg, metroImg],
    stats: [
      { value: "EPC", label: "Turnkey" },
      { value: "ISO", label: "9001/14001/45001" },
      { value: "BIM", label: "Coordinated" },
      { value: "PMC", label: "Services" },
    ],
    highlights: [
      "In-house design & BIM teams",
      "BIM Level 2 coordination",
      "ISO 9001/14001/45001 certified",
      "Heavy lifting & cranes",
      "Safety-first ISO 45001 culture",
      "GeM & CPWD listed",
    ],
    useCases: [
      { title: "Industrial Plant Greenfield", description: "Turnkey EPC for new process plants — civil, structural, mechanical, piping and E&I on fixed-price contracts." },
      { title: "Station Redevelopment", description: "Railway and metro station buildings, platforms, passenger amenities and MEP packages for modern travel hubs." },
      { title: "Smart City Infrastructure", description: "Urban civil works, water supply, sewerage and public amenities under AMRUT and Smart Cities Mission programs." },
      { title: "Power Plant BoP", description: "Balance of Plant civil and electrical works for thermal, solar and renewable energy facilities." },
    ],
    sections: [
      {
        sectionTitle: "Civil & Industrial Construction",
        sectionDescription:
          "Design-led EPC delivery for industrial plants, infrastructure and buildings with an unwavering commitment to quality and safety.",
        image: officeImg,
        steps: [
          { title: "EPC for Industrial Plants", detail: "Greenfield and brownfield process plants — civil, structural, mechanical, piping, E&I — single-source EPC.", image: officeImg },
          { title: "Civil Infrastructure Projects", detail: "Roads, bridges, water supply, sewerage, urban infrastructure under PPP and EPC modes.", image: heroImg },
          { title: "Building Construction & Interiors", detail: "Commercial, institutional, hospitality and industrial buildings with complete fit-out and interiors.", image: railwayImg },
          { title: "MEP Services & Commissioning", detail: "Mechanical, electrical, plumbing, fire and BMS — design, install, test, commission and handover.", image: metroImg },
        ],
      },
      {
        sectionTitle: "Infrastructure Projects",
        sectionDescription:
          "Specialized EPC for railway stations, bridges, power infrastructure and project management consultancy services.",
        image: heroImg,
        steps: [
          { title: "Railway Station Construction", detail: "Station buildings, platforms, FOBs, washable aprons and passenger amenities under redevelopment programmes.", image: railwayImg },
          { title: "Bridge & Flyover Works", detail: "RCC, PSC, steel bridges, ROBs, RUBs, flyovers and grade separators with heavy lifting capability.", image: metroImg },
          { title: "Power Project Infrastructure", detail: "Sub-station civil works, transmission tower foundations, switchyards and BoP for energy plants.", image: officeImg },
          { title: "DPR Preparation & PMC", detail: "Detailed Project Reports, feasibility studies, Project Management Consultancy and owner-engineer services.", image: heroImg },
        ],
      },
    ],
    capabilities: ["In-house design teams", "BIM Level 2 coordination", "Heavy lifting & cranes", "Pre-cast yards", "RMC plants", "Skilled trade workforce", "Safety-first culture", "Quality labs", "ISO 9001/14001/45001", "GeM & CPWD listed", "Sub-contractor management", "EPC commercials"],
    whyUs: [
      { title: "Multi-Sector EPC", body: "Industrial, civil, railways, power, buildings — diverse expertise reduces silos and improves outcomes." },
      { title: "Design-Led Delivery", body: "Strong in-house design and BIM ensures buildable, optimized and constructable solutions." },
      { title: "Safety & Compliance", body: "ISO 45001 culture, behavior-based safety, PTW systems — zero-harm goal on every site." },
    ],
    ctaLabel: "Get EPC Brief",
  },

  /* ─────────────────────────── 09. LOGISTICS ────────────────────────── */
  {
    slug: "logistics",
    title: "Logistics & Supply Chain",
    tagline: "Multimodal freight, warehousing, 3PL/4PL and last-mile across India",
    description:
      "Jigisha Group provides end-to-end logistics and supply chain solutions — multimodal freight, warehousing, cold chain, hazmat transport, last-mile delivery and supply chain consulting — serving manufacturers, retailers, e-commerce, pharma and government clients.",
    heroImages: [warehouseImg, heroImg, metroImg, greenImg],
    stats: [
      { value: "PAN-India", label: "Network" },
      { value: "3PL/4PL", label: "Services" },
      { value: "Cold-Chain", label: "Validated" },
      { value: "WMS", label: "IT-Enabled" },
    ],
    highlights: [
      "WMS & TMS platform enabled",
      "IoT real-time cargo tracking",
      "Cold-chain qualified fleet",
      "DG-licensed hazmat transport",
      "EV last-mile delivery fleet",
      "PAN-India hub network",
    ],
    useCases: [
      { title: "E-Commerce Fulfillment", description: "Same-day and next-day last-mile delivery with EV fleet, smart routing and digital POD for online retailers." },
      { title: "Pharmaceutical Distribution", description: "Validated 2-8°C and -20°C logistics for pharma companies ensuring cold-chain integrity from factory to hospital." },
      { title: "Industrial B2B Freight", description: "Multimodal road-rail-sea freight orchestration for heavy manufacturing with door-to-door tracking." },
      { title: "Hazardous Goods Logistics", description: "DG-licensed, ADR-compliant transport for chemicals, batteries, fuels with GPS-monitored vehicles." },
    ],
    sections: [
      {
        sectionTitle: "Freight & Warehousing",
        sectionDescription:
          "Multimodal freight management and Grade-A warehousing solutions delivering reliability, visibility and cost efficiency.",
        image: warehouseImg,
        steps: [
          { title: "Multimodal Freight Management", detail: "Road, rail, air and sea freight orchestration with single-window visibility, customs clearance and tracking.", image: warehouseImg },
          { title: "Warehousing & Distribution", detail: "Grade-A warehouses, fulfillment centers, bonded warehouses, racking, MHE and WMS-driven operations.", image: heroImg },
          { title: "3PL/4PL Services", detail: "Outsourced logistics, control-tower 4PL, S&OP support, vendor onboarding and supply chain management.", image: metroImg },
          { title: "Fleet Management", detail: "GPS, telematics, fuel management, driver scoring, predictive maintenance and outsourced fleet operations.", image: greenImg },
        ],
      },
      {
        sectionTitle: "Specialty & Technology Logistics",
        sectionDescription:
          "Advanced cold chain, hazmat, last-mile and technology-driven supply chain solutions for complex cargo requirements.",
        image: heroImg,
        steps: [
          { title: "Cold Chain Logistics", detail: "Validated 2-8°C and -20°C transport for pharma, vaccines, dairy and frozen foods with IoT monitoring.", image: heroImg },
          { title: "Hazardous Goods Transport", detail: "DG-licensed vehicles, trained drivers and GPS-monitored fleet for chemicals, fuels, batteries.", image: warehouseImg },
          { title: "Last-Mile Delivery", detail: "Same-day, next-day and scheduled deliveries with EV fleet, smart routing and POD digitization.", image: greenImg },
          { title: "Supply Chain Consulting", detail: "Network design, warehouse layout, S&OP transformation, digital supply chain and ESG-aligned strategy.", image: metroImg },
        ],
      },
    ],
    capabilities: ["WMS/TMS platforms", "IoT cargo tracking", "Cold-chain qualified", "Hazmat licensed", "DG specialists", "EV last-mile fleet", "Customs broker", "FTWZ operations", "Reverse logistics", "Predictive ETA", "Green logistics", "SLA-managed contracts"],
    whyUs: [
      { title: "Tech-Forward", body: "WMS, TMS, IoT and analytics built into every shipment for real-time visibility and control." },
      { title: "Specialty Capable", body: "Cold-chain, hazmat and high-value cargo handled with proper certifications and trained crews." },
      { title: "PAN-India Coverage", body: "Owned hubs and partner network spanning metros, tier-2/3 cities and remote locations." },
    ],
    ctaLabel: "Get Logistics Brief",
  },

  /* ─────────────────────────── 10. INFOTECH & DIGITAL ───────────────── */
  {
    slug: "infotech",
    title: "Infotech & Digital",
    tagline: "ERP, IoT, AI, cybersecurity and Industry 4.0 for digital transformation",
    description:
      "Jigisha Group's infotech vertical delivers enterprise software, industrial IoT, AI solutions, cloud, cybersecurity, custom development and SCADA integration — bridging operational technology and information technology across factories, infrastructure and government.",
    heroImages: [officeImg, careersImg, heroImg, warehouseImg],
    stats: [
      { value: "ISO 27001", label: "Certified" },
      { value: "MeitY", label: "Empanelled" },
      { value: "AWS/Azure", label: "Cloud" },
      { value: "OT/IT", label: "Convergence" },
    ],
    highlights: [
      "ISO 27001 cybersecurity certified",
      "MeitY empanelled supplier",
      "AWS/Azure/GCP partners",
      "OT/IT convergence experts",
      "DPDP compliance advisory",
      "24x7 NOC & SOC operations",
    ],
    useCases: [
      { title: "Industry 4.0 Transformation", description: "IIoT sensor networks, OEE dashboards and predictive maintenance reducing factory downtime by 25-40%." },
      { title: "Smart City Platform", description: "Integrated command and control centers, surveillance, traffic management and citizen service platforms." },
      { title: "Defence Cybersecurity", description: "OT security assessments, VAPT and SIEM implementation for critical defence and infrastructure systems." },
      { title: "Healthcare Digital", description: "HMIS, telemedicine platforms, PACS integration and AI-assisted diagnostics for hospitals." },
    ],
    sections: [
      {
        sectionTitle: "Enterprise Software & Connectivity",
        sectionDescription:
          "ERP, IoT, industrial automation and cloud solutions bridging enterprise and factory floor for complete digital transformation.",
        image: officeImg,
        steps: [
          { title: "ERP & CRM Implementation", detail: "SAP, Oracle, Microsoft Dynamics, Odoo, Salesforce — implementation, customization and AMS support.", image: officeImg },
          { title: "IoT & Industrial IoT", detail: "Sensor networks, edge gateways, MQTT/OPC-UA connectivity and IIoT-driven OEE and predictive maintenance.", image: careersImg },
          { title: "Industrial Automation & SCADA", detail: "PLC, DCS, SCADA, HMI, MES integration and Industry 4.0 connectivity bridging OT and IT layers.", image: heroImg },
          { title: "Cloud Migration & DevOps", detail: "AWS/Azure/GCP migration, containerization, Kubernetes, CI/CD and cloud-native re-architecture.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Emerging Tech & Security",
        sectionDescription:
          "AI, cybersecurity, digital twins and custom software delivering competitive advantage in the digital age.",
        image: careersImg,
        steps: [
          { title: "AI & Machine Learning", detail: "Computer vision, predictive analytics, NLP, generative AI, LLM-based applications and ML-Ops pipelines.", image: careersImg },
          { title: "Cybersecurity Services", detail: "VAPT, SOC, SIEM, IT/OT security, ISO 27001 advisory, DPDP compliance and incident response.", image: officeImg },
          { title: "Digital Twins & Simulation", detail: "Asset and process digital twins for plants, infrastructure and rolling stock with real-time data binding.", image: heroImg },
          { title: "Custom Software Development", detail: "Web, mobile, microservices, APIs, low-code platforms and enterprise application engineering.", image: warehouseImg },
        ],
      },
    ],
    capabilities: ["ISO 27001 / 9001", "MeitY empanelment", "CMMI mature", "AWS/Azure/GCP partners", "DevOps & SRE teams", "Data engineering", "ML-Ops", "OT cybersecurity", "DPDP compliance", "Agile delivery", "24x7 NOC/SOC", "Multi-vertical experience"],
    whyUs: [
      { title: "OT + IT Native", body: "We speak both factory floor and enterprise stack — rare convergence expertise." },
      { title: "Outcome-Driven", body: "Engagements measured on business outcomes — OEE lift, downtime reduction, revenue growth." },
      { title: "Secure by Design", body: "Cybersecurity baked into every solution, not bolted on — DPDP and ISO 27001 aligned." },
    ],
    ctaLabel: "Get Digital Brief",
  },

  /* ─────────────────────────── 11. MEDIA & COMMUNICATIONS ───────────── */
  {
    slug: "media",
    title: "Media & Communications",
    tagline: "Integrated marketing, digital media, PR, events and industrial publishing",
    description:
      "Jigisha Group's media vertical delivers integrated marketing, digital production, PR, events, industrial publishing and brand strategy — including the In-News platform and an industry-focused magazine that connects manufacturers, infrastructure players and government stakeholders.",
    heroImages: [careersImg, officeImg, heroImg, greenImg],
    stats: [
      { value: "B2B", label: "Specialists" },
      { value: "PR", label: "PAN-India" },
      { value: "In-News", label: "Platform" },
      { value: "Industrial", label: "Magazine" },
    ],
    highlights: [
      "B2B industrial marketing experts",
      "In-house film & photo studio",
      "Drone & 4K production capability",
      "In-News owned media platform",
      "PAN-India PR networks",
      "Analytics & ROI reporting",
    ],
    useCases: [
      { title: "B2B Industrial Marketing", description: "Full-funnel ABM campaigns for industrial equipment and infrastructure brands reaching qualified B2B buyers." },
      { title: "Infrastructure Film Production", description: "Corporate documentaries, project progress films and drone footage for major infrastructure milestones." },
      { title: "Investor Communications", description: "Annual reports, ESG disclosures, investor presentations and IR content meeting SEBI and global standards." },
      { title: "Industrial Trade Shows", description: "Exhibition booth design, pre-event marketing, live production and post-event content for sector trade shows." },
    ],
    sections: [
      {
        sectionTitle: "Marketing & Production",
        sectionDescription:
          "Strategy-led integrated marketing and premium content production connecting industrial brands with decision-makers.",
        image: careersImg,
        steps: [
          { title: "Integrated Marketing Campaigns", detail: "Strategy, creative, paid media, ABM and full-funnel B2B marketing for industrial and infrastructure brands.", image: careersImg },
          { title: "Digital Media Production", detail: "Corporate films, factory documentaries, product videos, animations, drone shoots and explainer content.", image: officeImg },
          { title: "Corporate Events Management", detail: "Conferences, exhibitions, factory openings, customer events, road shows and hybrid event production.", image: heroImg },
          { title: "Brand Identity & Design", detail: "Corporate identity, brand books, packaging, signage, exhibition stalls and creative design services.", image: greenImg },
        ],
      },
      {
        sectionTitle: "Publishing & Digital Media",
        sectionDescription:
          "Owned media platforms, PR networks and digital channels giving industrial brands sustained reach to qualified audiences.",
        image: officeImg,
        steps: [
          { title: "In-News Platform & Publishing", detail: "Industry news platform connecting manufacturers, government, buyers and policy stakeholders.", image: officeImg },
          { title: "Corporate PR & Communications", detail: "Media relations, press releases, crisis communication, executive thought leadership and CXO branding.", image: careersImg },
          { title: "Industrial Magazine Publication", detail: "Sector-focused print and digital magazine covering railways, defence, manufacturing and infrastructure.", image: heroImg },
          { title: "Social Media Management", detail: "LinkedIn-led B2B social, content calendars, community management and analytics.", image: greenImg },
        ],
      },
    ],
    capabilities: ["B2B marketing experts", "Industrial sector knowledge", "In-house studio", "Drone & 4K production", "PR networks", "Digital ad platforms", "SEO & content", "CRM & marketing automation", "Event production", "Print & digital publishing", "Translation services", "Analytics & ROI reporting"],
    whyUs: [
      { title: "Industrial DNA", body: "We understand factories, projects, government — content that resonates with B2B buyers." },
      { title: "Owned Media", body: "In-News and industrial magazine give clients sustained reach to qualified industry audiences." },
      { title: "Full-Stack Agency", body: "Strategy to creative to media to PR to events — integrated under one accountable team." },
    ],
    ctaLabel: "Get Media Brief",
  },

  /* ─────────────────────────── 12. ENVIRONMENT & SUSTAINABILITY ──────── */
  {
    slug: "environment",
    title: "Environment & Sustainability",
    tagline: "ETP/STP, waste management, air pollution control, ESG and sustainability",
    description:
      "Jigisha Group delivers complete environment and sustainability solutions — water and wastewater treatment, solid waste management, air pollution control, environmental audits, ESG reporting and ISO compliance — helping industries and cities meet regulatory and net-zero goals.",
    heroImages: [greenImg, officeImg, warehouseImg, heroImg],
    stats: [
      { value: "CPCB", label: "Approved" },
      { value: "ISO", label: "14001/45001" },
      { value: "ESG", label: "BRSR Reporting" },
      { value: "Net-Zero", label: "Roadmaps" },
    ],
    highlights: [
      "CPCB/SPCB approved systems",
      "NABL-accredited testing labs",
      "CEMS integration expertise",
      "ZLD & MBR specialists",
      "ISO 14001/45001 advisors",
      "BRSR & GRI reporting",
    ],
    useCases: [
      { title: "Industrial Zero Liquid Discharge", description: "ZLD plants with MBR, MBBR and reverse osmosis for textile, pharma and chemical industries meeting CPCB norms." },
      { title: "Municipal Waste Management", description: "MSW processing, composting, MRF operations and bioremediation for urban local bodies under SBM." },
      { title: "Corporate ESG Programs", description: "End-to-end BRSR and GRI reporting, science-based targets and net-zero pathway development for listed companies." },
      { title: "Emission Control Upgrade", description: "Bag filters, electrostatic precipitators and FGD systems for thermal power and cement plants meeting norms." },
    ],
    sections: [
      {
        sectionTitle: "Water & Waste Treatment",
        sectionDescription:
          "Advanced ETP, STP and solid waste management solutions ensuring regulatory compliance and environmental protection.",
        image: greenImg,
        steps: [
          { title: "ETP/STP Design & Installation", detail: "Effluent and sewage treatment plants — design, EPC, O&M with MBR, MBBR, SBR and ZLD technologies.", image: greenImg },
          { title: "Solid Waste Management", detail: "MSW collection, segregation, processing, composting, MRF, landfill management and waste-to-energy.", image: officeImg },
          { title: "Air Pollution Control Systems", detail: "Bag filters, ESPs, scrubbers, FGD systems, low-NOx burners and CEMS for emission compliance.", image: warehouseImg },
          { title: "Water Quality Monitoring", detail: "Online sensors, lab analysis, NABL-accredited testing and IoT-based monitoring dashboards.", image: heroImg },
        ],
      },
      {
        sectionTitle: "Sustainability & Compliance",
        sectionDescription:
          "Strategic sustainability advisory, ESG reporting and compliance services building long-term environmental responsibility.",
        image: officeImg,
        steps: [
          { title: "Environmental Impact Audits", detail: "EIA, EMP preparation, environmental clearance support and statutory compliance audits for projects.", image: officeImg },
          { title: "ISO 14001/45001 Consulting", detail: "EMS and OHSMS implementation, certification advisory and surveillance audit support.", image: greenImg },
          { title: "Carbon Footprint Assessment", detail: "GHG inventory (Scope 1, 2, 3), carbon accounting, science-based targets and net-zero pathway design.", image: heroImg },
          { title: "Sustainability Reporting & ESG", detail: "BRSR, GRI, SASB, TCFD reporting, ESG strategy, materiality assessment and stakeholder engagement.", image: warehouseImg },
        ],
      },
    ],
    capabilities: ["CPCB/SPCB approvals", "NABL-accredited labs", "CEMS integration", "ZLD specialists", "ISO 14001/45001 advisors", "BRSR consultants", "GHG protocol experts", "Net-zero modellers", "Climate risk assessors", "TCFD-aligned", "SBTi-ready", "Third-party assurance"],
    whyUs: [
      { title: "Compliance to Strategy", body: "Beyond meeting CPCB norms — we build long-term sustainability strategies and net-zero roadmaps." },
      { title: "Tech + Advisory", body: "Engineering treatment plants and writing ESG reports — full-stack environment partner." },
      { title: "Investor-Grade Reporting", body: "BRSR and GRI reports trusted by lenders, investors and regulators — full assurance support." },
    ],
    ctaLabel: "Get Sustainability Brief",
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industriesData.find((i) => i.slug === slug);
}
