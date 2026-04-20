import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import officeImg from "../assets/about-office.jpg";
import careersImg from "../assets/careers-team.jpg";
import warehouseImg from "../assets/products-warehouse.jpg";
import heroImg from "../assets/hero-industrial.jpg";

export interface ServiceStep {
  title: string;
  detail: string;
  image: string;
}

export interface ServiceSection {
  sectionTitle: string;
  sectionDescription: string;
  image: string;
  steps: ServiceStep[];
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  heroImage: string;
  stats: { value: string; label: string }[];
  sections: ServiceSection[];
  capabilities: string[];
  whyUs: { title: string; body: string }[];
  ctaLabel?: string;
}

export const servicesData: Service[] = [
  {
    slug: "railway",
    title: "Railway Services",
    tagline: "End-to-end engineering, supply, and lifecycle services for India's largest rail network",
    overview:
      "Jigisha Group is a trusted partner to Indian Railways across Production Units, Maintenance Sheds, Divisions and Zones. From rolling stock components and signaling systems to KAWACH integration and OHE works, we deliver turnkey solutions backed by RDSO approvals, vendor codes, and deep railway domain expertise.",
    heroImage: railwayImg,
    stats: [
      { value: "17", label: "Railway Zones Served" },
      { value: "500K+", label: "Components Supplied" },
      { value: "RDSO", label: "Approved Vendor" },
      { value: "24×7", label: "AMC Support" },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock & Lifecycle Solutions",
        sectionDescription:
          "Complete supply, installation, retrofitting and overhaul of rolling stock components for LHB, ICF, Vande Bharat and EMU/MEMU rakes — from wheels and axles to coach interiors, HVAC and fire detection.",
        image: railwayImg,
        steps: [
          { title: "Component Supply", detail: "Wheels, axles, bearings, brake systems, couplers, LED lighting, pantry car equipment and all coach sub-systems sourced from RDSO-approved vendors.", image: railwayImg },
          { title: "Installation & Retrofitting", detail: "On-site installation, retrofit of legacy coaches, conversion kits and complete upgrade projects executed by certified railway technicians.", image: warehouseImg },
          { title: "ICBMRO Contracts", detail: "Integrated Coach Body Maintenance, Repair & Overhaul — POH, mid-life rehabilitation, painting, upholstery and IT-enabled depot management.", image: careersImg },
          { title: "AMC & Spares Warehousing", detail: "Long-term Annual Maintenance Contracts with dedicated spares buffer stocks, real-time inventory tracking and 24×7 breakdown response.", image: heroImg },
        ],
      },
      {
        sectionTitle: "Signaling, OHE & Smart Railway",
        sectionDescription:
          "From trackside interlocking to KAWACH (TCAS) deployment and 25kV OHE works — we cover the full railway electrical and signaling spectrum with specialist crews and RDSO-backed equipment.",
        image: defenceImg,
        steps: [
          { title: "S&T Signaling Systems", detail: "Interlocking, electronic point machines, axle counters, relays, signaling cables, GSM-R, station data networks and SCADA integration.", image: defenceImg },
          { title: "OHE Electrification", detail: "Design, supply, erection and commissioning of 25kV OHE — masts, cantilevers, catenary/contact wires, section insulators and traction sub-stations.", image: greenImg },
          { title: "KAWACH (TCAS) Deployment", detail: "End-to-end KAWACH component supply, on-board and trackside equipment integration, RFID tag deployment and field commissioning support.", image: metroImg },
          { title: "Track Machines & SPART", detail: "OEM and aftermarket parts, calibration and AMC for Tamping Machines, BCM, DTS, Ballast Regulators, Tower Wagons and OHE track machines.", image: railwayImg },
        ],
      },
    ],
    capabilities: [
      "RDSO-approved vendor base",
      "PAN-India deployment teams",
      "Site survey & DPR preparation",
      "ISO 9001 / 14001 / 45001 certified",
      "GeM & IREPS empanelled",
      "EOT crane & heavy logistics",
      "Welding & fabrication shops",
      "Calibration labs & test rigs",
      "Fire & life safety compliance",
      "Skilled signal technicians",
      "OHE specialist crews",
      "AMC & spares warehousing",
    ],
    whyUs: [
      { title: "Proven Track Record", body: "Decades of execution across Indian Railways zones with consistent on-time, on-budget delivery and zero-defect commissioning." },
      { title: "Compliance & Safety First", body: "RDSO approvals, IRS specifications, IRSEM standards and rigorous QA/QC processes integrated into every project phase." },
      { title: "End-to-End Ownership", body: "Single window for design, supply, erection, testing, commissioning and long-term AMC — no handoff gaps between vendors." },
    ],
    ctaLabel: "Request Railway Quote",
  },

  {
    slug: "metro-rail",
    title: "Metro Rail Services",
    tagline: "Modern urban transit — rolling stock, signaling, AFC and station infrastructure",
    overview:
      "We partner with metro corporations across India — Delhi, Mumbai, Bengaluru, Chennai, Hyderabad, Kochi, Lucknow, Ahmedabad and more — for turnkey delivery of rolling stock components, third rail systems, CBTC signaling, automatic fare collection, depot equipment, station finishes and integrated facility management.",
    heroImage: metroImg,
    stats: [
      { value: "12+", label: "Metro Cities" },
      { value: "CBTC", label: "Signaling Ready" },
      { value: "750V", label: "Third Rail DC" },
      { value: "FM", label: "O&M Services" },
    ],
    sections: [
      {
        sectionTitle: "Rolling Stock, Third Rail & Signaling",
        sectionDescription:
          "Complete metro rolling stock component supply, 750V DC third rail systems and Communication-Based Train Control (CBTC) integration support for driverless and manned metro operations.",
        image: metroImg,
        steps: [
          { title: "Rolling Stock Interiors", detail: "Stainless steel bodies, GFRP interiors, seats, grab handles, PIDS, CCTV, HVAC and LED systems for driverless and manned trainsets.", image: metroImg },
          { title: "Third Rail Systems", detail: "750V DC conductor bars, end-approach ramps, insulators, current collector shoes and traction sub-station equipment with SCADA integration.", image: defenceImg },
          { title: "CBTC Signaling & Telecom", detail: "ATS/ATO/ATP component supply, balises, axle counters, OFC backbone, TETRA radio and station telecom equipment for signaling systems.", image: railwayImg },
          { title: "Automatic Fare Collection", detail: "AFC gates, ticket vending machines, NCMC card stock, QR ticketing and back-office clearing house integration for seamless commuter experience.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Stations, Depots & O&M",
        sectionDescription:
          "From platform screen doors and station MEP to depot machinery and long-term operations & maintenance contracts — we deliver the full metro ecosystem.",
        image: officeImg,
        steps: [
          { title: "Station Architecture & MEP", detail: "Platform screen doors (PSD), façades, escalators, lifts, ECS, fire detection, BMS and complete electrical and plumbing works.", image: officeImg },
          { title: "Depot & Workshop Equipment", detail: "Bogie drop tables, wheel lathes, body lifting jacks, washing plants, automated wheel profile measurement and complete depot machinery.", image: careersImg },
          { title: "Tunnel Ventilation & Safety", detail: "TVS fans, jet fans, smoke extraction, emergency lighting, evacuation walkways and fire suppression designed to NFPA 130 compliance.", image: heroImg },
          { title: "O&M & Facility Management", detail: "Long-term O&M contracts, integrated FM, security, MEP upkeep, spare parts management and predictive maintenance using IoT sensors.", image: greenImg },
        ],
      },
    ],
    capabilities: [
      "Metro-grade material certifications",
      "EN / IEC standards compliant",
      "Fire-safe NFPA 130 designs",
      "PSD & gap-filler integration",
      "NCMC fare media expertise",
      "BIM-based design coordination",
      "Multi-disciplinary site teams",
      "Tunnel & viaduct logistics",
      "Cleanroom assembly facilities",
      "24×7 O&M response",
      "Spares & consumables stocking",
      "Type tests & FAT support",
    ],
    whyUs: [
      { title: "Urban Transit Specialists", body: "Dedicated metro vertical with engineers experienced in CBTC, AFC, PSD and rolling stock aligned to international metro standards." },
      { title: "Multi-City Footprint", body: "Active project execution and warehousing across India's major metro corridors enabling rapid mobilization and on-ground support." },
      { title: "Lifecycle Partnership", body: "From DPR support to commissioning to long-term O&M — we stay invested through the asset's full operational life." },
    ],
    ctaLabel: "Request Metro Quote",
  },

  {
    slug: "defence",
    title: "Defence & Aerospace",
    tagline: "Mission-critical engineering, indigenization and MRO for armed forces and OEMs",
    overview:
      "Aligned with Make in India and Atmanirbhar Bharat, Jigisha Group delivers defence and aerospace engineering services, indigenization of imported sub-systems, MRO support, and precision component supply to DRDO, HAL, BEL, BDL, Indian Army, Navy, Air Force, Coast Guard and tier-1 global OEMs.",
    heroImage: defenceImg,
    stats: [
      { value: "DGQA", label: "Approved" },
      { value: "AS9100", label: "Aerospace QMS" },
      { value: "ITAR", label: "Aware Processes" },
      { value: "MoD", label: "Empanelled" },
    ],
    sections: [
      {
        sectionTitle: "Indigenization & Precision Manufacturing",
        sectionDescription:
          "Reverse engineering, sample qualification and vendor development for import substitution across armoured vehicles, aircraft, naval platforms and missile programmes under the SRIJAN portal.",
        image: defenceImg,
        steps: [
          { title: "Indigenization (SRIJAN)", detail: "Reverse engineering, sample qualification, Type Approval and vendor development for imported sub-systems under SRIJAN and iDEX programmes.", image: defenceImg },
          { title: "Aerospace Component Manufacturing", detail: "Precision-machined parts, sheet metal assemblies, looms and harnesses, GSE for fixed-wing, rotary-wing and UAV platforms under AS9100.", image: heroImg },
          { title: "Electronic Warfare & C4ISR", detail: "Sub-assemblies, cable harnesses, ruggedized enclosures and integration support for radar, EW, communication and surveillance systems.", image: railwayImg },
          { title: "Test Rigs & GSE", detail: "Custom design and fabrication of hydraulic, pneumatic and electrical test benches, GSE trolleys, towing tractors and platform jigs for armed forces depots.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "MRO, Overhaul & Strategic Support",
        sectionDescription:
          "Overhaul of armoured vehicle sub-systems, aircraft LRUs, naval propulsion auxiliaries and strategic programme support with full traceability and security-cleared operations.",
        image: careersImg,
        steps: [
          { title: "Land, Air & Naval MRO", detail: "Overhaul of armoured vehicle systems, aircraft LRUs, naval propulsion auxiliaries, gearboxes, hydraulics and avionics with full traceability.", image: careersImg },
          { title: "Ammunition & Ordnance", detail: "Machined components, fuze parts, casings and propellant handling fixtures for Ordnance Factories and private ammunition manufacturers.", image: defenceImg },
          { title: "Naval & Marine Engineering", detail: "Auxiliary machinery refurbishment, valves, pumps, HVAC and damage-control equipment for Indian Navy, Coast Guard and OPV fleets.", image: metroImg },
          { title: "Strategic Programme Support", detail: "Confidential vendor support to space, missile and nuclear domains under appropriate security clearances and ITAR-aware processes.", image: greenImg },
        ],
      },
    ],
    capabilities: [
      "DGAQA / DGQA / CEMILAC links",
      "AS9100 aerospace QMS",
      "Cleanroom assembly",
      "5-axis CNC machining",
      "NABL-accredited testing",
      "NDT — UT, RT, MPI, DPI",
      "Ruggedization & MIL-STD",
      "EMI/EMC test support",
      "Security cleared workforce",
      "Lifetime spares programme",
      "Confidential vendor lists",
      "Offset partnership ready",
    ],
    whyUs: [
      { title: "Strategic Trust", body: "Long-standing relationships with DPSUs, OFB successors and strategic establishments built on confidentiality and consistent quality." },
      { title: "Make-in-India Aligned", body: "Active participant in indigenization programmes via SRIJAN, iDEX and offset routes with proven import-substitution case studies." },
      { title: "End-to-End Capability", body: "From engineering and manufacturing to MRO and lifecycle support — single accountable partner for complex defence programmes." },
    ],
    ctaLabel: "Discuss Your Requirement",
  },

  {
    slug: "commercial",
    title: "Commercial Services",
    tagline: "Fit-outs, MEP, automation and FM for offices, campuses and institutions",
    overview:
      "From corporate workplaces and IT parks to educational campuses, hospitals and government complexes, Jigisha Group delivers turnkey interior fit-outs, MEP services, smart-building automation, integrated facility management and institutional procurement — all under one accountable partner.",
    heroImage: officeImg,
    stats: [
      { value: "10M+", label: "Sq.Ft Delivered" },
      { value: "IGBC", label: "Green Certified" },
      { value: "BMS", label: "Smart Buildings" },
      { value: "FM", label: "PAN-India" },
    ],
    sections: [
      {
        sectionTitle: "Interior Fit-Out & MEP",
        sectionDescription:
          "Design-build interior fit-outs and complete MEP (Electrical, HVAC, Plumbing, Fire) execution for corporate offices, IT parks, retail, hospitality, hospitals and government buildings.",
        image: officeImg,
        steps: [
          { title: "Interior Design-Build", detail: "Civil, partitions, ceilings, flooring, joinery, loose furniture and complete branding — turnkey snag-free handover for any commercial space.", image: officeImg },
          { title: "MEP Execution", detail: "LV/MV electricals, VRF/chilled-water HVAC, plumbing, fire detection, suppression and integration with BMS for all building types.", image: heroImg },
          { title: "Smart Building & BMS", detail: "Lighting controls, access control, CCTV, IBMS dashboards, energy meters, occupancy sensors and IoT integrations for intelligent facilities.", image: careersImg },
          { title: "AV, IT & Security", detail: "Video conferencing, digital signage, structured cabling, Wi-Fi, server rooms, CCTV, intrusion alarm and integrated command centers.", image: warehouseImg },
        ],
      },
      {
        sectionTitle: "Facility Management & Sustainability",
        sectionDescription:
          "Long-term integrated facility management, institutional procurement and IGBC/LEED green building advisory for offices, campuses and government complexes across India.",
        image: greenImg,
        steps: [
          { title: "Integrated FM", detail: "Hard FM (HVAC, electrical, civil), soft FM (housekeeping, pantry, landscaping), security, helpdesk and CAFM-driven asset management.", image: greenImg },
          { title: "Institutional Procurement", detail: "Furniture, IT hardware, lab equipment, AV systems and consumables for educational institutions, hospitals and PSUs via GeM.", image: warehouseImg },
          { title: "Energy & Sustainability", detail: "IGBC/LEED advisory, energy audits, solar rooftop integration, water recycling, waste segregation and ESG reporting support.", image: railwayImg },
          { title: "Repair & Renovation", detail: "Refurbishment of offices, retail outlets, bank branches and institutional spaces with minimal business disruption and phased execution.", image: officeImg },
        ],
      },
    ],
    capabilities: [
      "Design-build delivery",
      "BIM coordination",
      "IGBC/LEED advisors",
      "MEP project managers",
      "Licensed electricians",
      "HVAC technicians",
      "Fire-system installers",
      "BMS/IBMS integrators",
      "AV/IT specialists",
      "FM software (CAFM)",
      "Trained housekeeping",
      "Security manpower",
    ],
    whyUs: [
      { title: "Single Accountability", body: "Architecture, MEP, automation, FM — under one contract, one PM, one SLA. No vendor co-ordination headaches for the client." },
      { title: "Green & Smart by Default", body: "Sustainability, energy efficiency and smart building tech baked into every project — not bolted on as expensive add-ons." },
      { title: "PAN-India Reach", body: "Self-performing teams across metros and tier-2 cities for consistent delivery quality and rapid FM response wherever you operate." },
    ],
    ctaLabel: "Get a Facilities Quote",
  },

  {
    slug: "industrial",
    title: "Industrial Services",
    tagline: "Plant maintenance, EPC, automation and utilities for manufacturing & process industries",
    overview:
      "Jigisha Group provides full-spectrum industrial maintenance, repair and operations (MRO) services to steel, cement, automotive, chemicals, power, oil & gas, FMCG and engineering plants across India. Our offering spans planned shutdowns, capital projects, automation upgrades, utility management and integrated plant facility services.",
    heroImage: warehouseImg,
    stats: [
      { value: "500+", label: "Plants Served" },
      { value: "25+", label: "Industry Verticals" },
      { value: "ISO", label: "9001/14001/45001" },
      { value: "24×7", label: "Emergency Response" },
    ],
    sections: [
      {
        sectionTitle: "Plant Maintenance, EPC & Automation",
        sectionDescription:
          "Annualized maintenance contracts, planned and emergency shutdowns, brownfield EPC projects, and Industry 4.0 automation upgrades across steel, cement, automotive, power and process industries.",
        image: warehouseImg,
        steps: [
          { title: "Plant Maintenance & Shutdowns", detail: "Annualized maintenance, planned and emergency shutdowns, turnaround management and overhaul of pumps, compressors, gearboxes and rotating equipment.", image: warehouseImg },
          { title: "EPC & Brownfield Expansion", detail: "Engineering, procurement, construction and commissioning for new lines, capacity expansions, retrofits — civil, structural, mechanical, piping, E&I.", image: heroImg },
          { title: "Industrial Automation & SCADA", detail: "PLC, DCS, SCADA, HMI deployment, Industry 4.0 connectivity, MES, OEE dashboards and IIoT-based predictive maintenance solutions.", image: defenceImg },
          { title: "Fabrication & Piping", detail: "Workshop and on-site fabrication of pressure vessels, tanks, ducting, structural steel and process piping with ASME/IBR welder qualifications.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Utilities, MRO Supply & Reliability",
        sectionDescription:
          "Complete utility operations and maintenance, single-window MRO consumables supply, predictive maintenance programmes and material handling systems for manufacturing plants.",
        image: greenImg,
        steps: [
          { title: "Utilities & Energy Management", detail: "Boilers, chillers, cooling towers, compressed air, DG sets, transformers, switchgear O&M with energy audits and conservation programs.", image: greenImg },
          { title: "Material Handling & Conveyors", detail: "Belt, screw, bucket and pneumatic conveying systems, EOT cranes, hoists, AGVs and conveyor refurbishment with predictive monitoring.", image: metroImg },
          { title: "Predictive Maintenance & Reliability", detail: "Vibration analysis, thermography, oil tribology, ultrasound, motor circuit analysis, RCM studies and reliability-centered maintenance programmes.", image: railwayImg },
          { title: "Industrial Consumables Supply", detail: "Single-window MRO — bearings, lubricants, fasteners, electricals, safety PPE, hand tools, hydraulics and pneumatics with VMI logistics.", image: warehouseImg },
        ],
      },
    ],
    capabilities: [
      "Skilled trade technicians",
      "ASME / IBR welders",
      "NDT Level II/III inspectors",
      "Vibration analysts",
      "Certified electricians",
      "Instrumentation engineers",
      "Crane & rigging crews",
      "Confined-space teams",
      "Hot-work permit systems",
      "Vendor-managed inventory",
      "Plant warehousing & MRO kitting",
      "Industry 4.0 integration",
    ],
    whyUs: [
      { title: "Cross-Industry Depth", body: "Engineering teams with experience across steel, cement, auto, power and oil & gas — delivering proven best practices to every plant." },
      { title: "Safety-First Culture", body: "Zero-harm goal driven by ISO 45001, behavior-based safety programmes and comprehensive Permit-to-Work systems on every site." },
      { title: "Single-Window MRO", body: "From spares supply to skilled manpower to engineering services — one partner replacing dozens of fragmented vendors." },
    ],
    ctaLabel: "Request Plant Services Quote",
  },

  {
    slug: "icbmro",
    title: "ICBMRO & BMRO",
    tagline: "Inspection, Condition-Based Monitoring, Repair & Overhaul — nationwide coverage",
    overview:
      "Jigisha Group operates one of India's largest distributed MRO networks — covering railway rolling stock, industrial machinery, defence assets, metro fleets and energy plants. With 1,000+ after-sales service centers, IoT-driven condition monitoring and OEM-grade overhaul shops, we keep mission-critical assets running at peak reliability.",
    heroImage: railwayImg,
    stats: [
      { value: "1,000+", label: "Service Centers" },
      { value: "ICBMRO", label: "Full Lifecycle" },
      { value: "IoT", label: "Predictive AI" },
      { value: "AMC", label: "Long-term Contracts" },
    ],
    sections: [
      {
        sectionTitle: "Inspection, Monitoring & Breakdown Response",
        sectionDescription:
          "Periodic inspection, online condition monitoring with IoT sensors and 24×7 breakdown repair teams — ensuring rapid return-to-service for mission-critical railway, industrial and defence assets.",
        image: railwayImg,
        steps: [
          { title: "Condition-Based Inspection", detail: "Periodic inspection, vibration analysis, thermography, oil analysis, motor circuit testing and online monitoring with cloud dashboards and alert systems.", image: railwayImg },
          { title: "24×7 Breakdown Repair (BMRO)", detail: "Emergency response teams, on-site root-cause analysis, expedited spares logistics, on-the-spot repairs and rapid asset return-to-service.", image: heroImg },
          { title: "Predictive Maintenance Platform", detail: "IoT sensors, edge gateways, AI/ML failure prediction, RCM studies and unified asset performance management across all plant assets.", image: defenceImg },
          { title: "Mobile Workshops", detail: "Fully-equipped mobile workshop vehicles deployed to remote railway zones, mine sites and industrial clusters for on-site repair without downtime.", image: careersImg },
        ],
      },
      {
        sectionTitle: "Overhaul, AMC & Lifecycle Management",
        sectionDescription:
          "Full strip-down overhaul in OEM-grade shops, comprehensive AMC contracts with defined SLAs, spares inventory management and end-of-life asset lifecycle optimization.",
        image: warehouseImg,
        steps: [
          { title: "Full Overhaul & Refurbishment", detail: "Complete strip-down overhaul of motors, gearboxes, hydraulics, pumps and rotating equipment in OEM-grade shops with load testing and warranty.", image: warehouseImg },
          { title: "Annual Maintenance Contracts", detail: "Comprehensive AMC/CMC with defined SLAs, embedded manpower, spares stocking, periodic preventive maintenance and uptime guarantees.", image: greenImg },
          { title: "Spares Inventory Management", detail: "Vendor-managed inventory, critical-spare stocking, OEM equivalents, kitting, just-in-time logistics and full spare parts lifecycle management.", image: metroImg },
          { title: "Lifecycle Asset Optimization", detail: "Reliability engineering, mid-life upgrades, obsolescence management, energy-efficiency retrofits and end-of-life disposal advisory.", image: officeImg },
        ],
      },
    ],
    capabilities: [
      "Multi-skilled technicians",
      "OEM-trained engineers",
      "NDT inspection capability",
      "IoT & data analytics",
      "AMC/CMC contract teams",
      "Spares warehousing",
      "Pan-India logistics",
      "Calibration & test rigs",
      "Cloud monitoring platforms",
      "SLA management",
      "24×7 helpdesk",
      "Mobile workshops",
    ],
    whyUs: [
      { title: "Largest MRO Network", body: "1,000+ service centers giving us the country's deepest after-sales footprint — no other MRO partner can match our geographic coverage." },
      { title: "Predictive by Design", body: "IoT and AI baked into every AMC contract — moving clients from reactive break-fix cycles to data-driven predictive uptime management." },
      { title: "OEM-Grade Quality", body: "Original-spec overhauls with calibrated tooling, certified technicians and proper test rigs — quality you can put in a warranty." },
    ],
    ctaLabel: "Request MRO Contract",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((s) => s.slug === slug);
}
