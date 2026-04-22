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

export interface IndustryProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface IndustryCaseStudy {
  title: string;
  problem: string;
  solution: string;
  result: string;
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
  /** Operational differentiators shown in the capabilities grid */
  capabilities: string[];
  /** Jigisha Group subsidiary slugs that serve this industry */
  subsidiaries: string[];
  /** Single-paragraph "why Jigisha?" narrative */
  whyJigisha: string;
  /** Step-by-step engagement or delivery process */
  process: IndustryProcessStep[];
  /** Real client outcomes with measurable impact */
  caseStudies: IndustryCaseStudy[];
  /** Relevant certifications, approvals and registrations */
  certifications: string[];
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
    process: [
      { step: 1, title: "Tender Analysis & Scope Breakdown", description: "Review zonal specifications, RDSO clauses, SOR items and site conditions; identify long-lead approval items and critical path activities." },
      { step: 2, title: "Vendor Qualification & BOQ Finalisation", description: "Confirm RDSO approvals for every supply item; prepare itemised BOQ aligned to IRS specifications and zonal amendment notices." },
      { step: 3, title: "Material Procurement & Pre-Positioning", description: "Place orders with RDSO-approved manufacturers; arrange PAN-India heavy logistics and waypoint storage close to site." },
      { step: 4, title: "Block Management & Site Execution", description: "Deploy trained block-working crews; execute each block with documented method statements and daily progress reporting to divisional officers." },
      { step: 5, title: "Testing, Commissioning & Documentation", description: "Conduct all mandatory TRD/S&T/Civil tests; obtain departmental sign-offs from authorised officers; prepare as-built records and handover files." },
      { step: 6, title: "Post-Handover AMC & Spares Support", description: "Activate 24×7 AMC programme; maintain dedicated spares stock at divisional store; submit quarterly asset health-check reports." },
    ],
    caseStudies: [
      { title: "OHE Electrification — 42 km Section, Central Railway", problem: "A 42 km unelectrified corridor on Central Railway needed 25kV OHE erected within a tight monsoon-exclusion window with simultaneous traffic on adjacent lines.", solution: "Deployed 3 concurrent erection gangs with pre-fabricated mast base assemblies; foundation casting completed before monsoon onset; erection completed in the post-monsoon window.", result: "Section energised 18 days ahead of contractual date; zero safety incidents across 140,000 man-hours; Railway avoided ₹2.4 Cr in penalty provisions." },
      { title: "KAWACH RFID Balise Rollout — North Western Railway", problem: "1,200 RFID balise tags required across a busy mixed-traffic corridor — installation had to be completed within granted block periods without a single traffic disruption.", solution: "Night-block installation protocol with pre-assembled fixtures; each balise installed, cabled and tested within a 4-hour block window using a 6-person specialised crew.", result: "All 1,200 tags installed in 38 nights; 100% uptime on first ATP test run; zero track possession extensions requested; project handed over on scheduled date." },
      { title: "ICBMRO Contract — Vande Bharat Production Unit, Lalganj", problem: "A Production Unit needed an integrated coach body maintenance and periodic overhaul partner to support a 36-month schedule for 120 coaches with zero shed downtime.", solution: "Mobilised 84 RDSO-qualified technicians; established on-site spares warehouse with 1,200 critical items; maintenance schedule aligned to PU block planning calendar.", result: "118 of 120 coaches completed in 34 months; fleet availability improved from 78% to 94%; zero missed block targets across entire contract; ₹3.2 Cr saved vs fragmented sub-contracting cost." },
    ],
    certifications: [
      "RDSO Vendor Approval (14+ product categories)",
      "GeM Registered Seller",
      "IREPS Empanelled Vendor",
      "ISO 9001:2015",
      "ISO 14001:2015",
      "ISO 45001:2018",
      "IRS Specifications Compliance",
    ],
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
    process: [
      { step: 1, title: "Operator Standards & Interface Review", description: "Study DMRC/NMRC/CMRL system specifications, fire-safety requirements and interface control documents; agree interface boundaries with general contractor." },
      { step: 2, title: "Material & Equipment Pre-Qualification", description: "Submit samples, data sheets, EN 45545 certificates and third-party test reports for metro engineer approval before placing bulk orders." },
      { step: 3, title: "Factory Acceptance Testing (FAT)", description: "Witness FAT at manufacturer's works; verify functional, fire-safety, IP rating and environmental parameters; issue conditional acceptance." },
      { step: 4, title: "Phased Site Installation & System Integration", description: "Install to match civil handover sequence; integrate with SCADA, BMS, traction and AFC systems; issue daily installation progress to site manager." },
      { step: 5, title: "Site Acceptance Testing (SAT) & Integration Verification", description: "Conduct SAT with metro engineer on each station; verify end-to-end system integration including SCADA data points before revenue service clearance." },
      { step: 6, title: "AMC Handover & Staff Training", description: "Transfer O&M documentation; train operator maintenance staff; activate AMC with 4-hour emergency response SLA and quarterly preventive maintenance visits." },
    ],
    caseStudies: [
      { title: "AFC Gate Supply — Kochi Metro Phase 2, 25 Stations", problem: "25 new stations required 200 AFC flap gates with NCMC and UPI QR compatibility; customs clearance and phased delivery needed to match staggered civil handover.", solution: "Sourced NCMC-certified AFC hardware; managed customs clearance to avoid demurrage; delivered station-by-station aligned to civil engineer's handover programme.", result: "All 200 gates delivered on schedule across 25 stations; 99.3% gate uptime in first 6 months of revenue service; zero NCMC interoperability complaints at launch." },
      { title: "Solar Rooftop Retrofit — Operational Metro Depot, Pune", problem: "600 kW rooftop solar required on an operational depot with structural loading constraints and no shutdown possible during installation.", solution: "Structural audit confirmed loading capacity; lightweight aluminium mounting system with waterproof membrane designed; installation executed in night maintenance blocks.", result: "600 kW commissioned in 11 weeks without disrupting depot operations; electricity bill reduced by 38%; project payback period 4.2 years against 25-year asset life." },
      { title: "Platform Screen Door Supply — Agra Metro Phase 1", problem: "14 elevated stations needed full-height PSDs with integrated IP CCTV and gap-sensor systems within 11 months of contract award.", solution: "Sourced EN 81-20 compliant PSDs from qualified manufacturer; coordinated FAT with Agra Metro engineer; installation sequenced during civil handover blocks.", result: "All 14 stations commissioned on time; 99.7% door operational availability in first 3 months of service; zero platform gap incidents recorded in first revenue year." },
    ],
    certifications: [
      "EN 45545 Fire Safety Compliance",
      "NCMC Interoperability Certified (AFC)",
      "IP65 / IP67 Rated Equipment Supply",
      "ISO 9001:2015",
      "ISO 14001:2015",
      "MNRE Empanelled (Solar)",
      "BIM Level 2 Coordination",
    ],
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
    process: [
      { step: 1, title: "RFQ Analysis & Technical Risk Assessment", description: "Study drawing package, GSQR/SQR and interface control documents; identify make-vs-buy decisions and qualification risk items." },
      { step: 2, title: "DGQA / CEMILAC Qualification Planning", description: "Prepare technical proposal, material certifications and qualification plan; schedule factory audit with DGQA/CEMILAC representative." },
      { step: 3, title: "Prototype Manufacture & First Article Inspection", description: "Machine prototype batch; conduct FAI per AS9102 with customer QA witness; submit balloon drawing inspection report for approval." },
      { step: 4, title: "Serial Production & Resident QAR Inspection", description: "Manufacture against approved control plan; QAR inspector resident at each mandatory inspection stage before dispatch clearance." },
      { step: 5, title: "Preservation, Packing & Despatch", description: "Pack per MIL-STD-2073 preservation standards; label with serialised lot traceability; coordinate with DGQA for dispatch note and release." },
      { step: 6, title: "In-Service Support & Lifetime Spares Management", description: "Maintain approved drawings, tooling and rolling stock to support 20-year platform in-service period; technical query response within 48 hours." },
    ],
    caseStudies: [
      { title: "Helicopter Gearbox Housing Indigenisation — HAL Rotary Wing", problem: "A rotary-wing platform imported aluminium gearbox housings at ₹18 Lakh per unit with a 14-month lead time from an overseas OEM.", solution: "Jigisha Defense Technologies reverse-engineered the part, developed 5-axis CNC programme, obtained CEMILAC Type Approval and established serial domestic supply.", result: "Unit cost reduced by 62% to ₹6.8 Lakh; lead time cut from 14 months to 8 weeks; 48 units delivered with zero DGQA rejections; estimated annual saving ₹5.4 Cr." },
      { title: "Radar PCB Sub-Assembly — BEL Indigenisation", problem: "BEL needed a domestic source for ruggedised PCB assemblies previously imported under ITAR constraints with 18-week lead time from Europe.", solution: "Qualified per MIL-PRF-31032; built IPC Class 3 assembly line with conformal coating and Environmental Stress Screening chamber; DGQA witnessed production qualification.", result: "Import substitution of 240 assemblies per year; 100% acceptance on MIL-STD-810 testing across all qualification samples; BEL reduced BOM cost by ₹2.1 Cr annually." },
      { title: "Armoured Vehicle High-Tensile Fastener Indigenisation — BEML", problem: "BEML imported M20 class 12.9 fasteners for a tracked vehicle hull at ₹3,800 per unit from Europe with a 26-week lead time and no domestic alternate.", solution: "Qualified domestic cold-forging manufacturer under DGQA; conducted salt-spray and hydrogen embrittlement tests per IS 1367; obtained DGQA approval for serial supply.", result: "Unit cost reduced from ₹3,800 to ₹1,100 (71% saving); lead time cut from 26 weeks to 4 weeks; annual procurement saving of ₹1.4 Cr on 6,000-unit annual volume." },
    ],
    certifications: [
      "DGQA Approved Vendor",
      "CEMILAC Recognised (Aerospace)",
      "MSME Defence Registration",
      "AS9100 Rev D QMS (in progress)",
      "ISO 9001:2015",
      "SRIJAN Portal Registered",
      "NABL Accredited Metrology Lab",
      "MIL-STD-810 Testing Capability",
    ],
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
    process: [
      { step: 1, title: "Site Survey & Feasibility Study", description: "Conduct irradiation survey, load flow analysis, cable route survey or turbine condition assessment; prepare preliminary cost estimate and programme." },
      { step: 2, title: "Design & Equipment Selection", description: "Prepare SLD, array layout or cable schedule; select equipment from BIS/CE/IEC-certified manufacturers; submit design to CEIG/DISCOM for review." },
      { step: 3, title: "Statutory Approvals & DISCOM Coordination", description: "File connectivity application, net-metering request, CEIG notification and factory inspectorate clearances in parallel to avoid serial delay." },
      { step: 4, title: "Material Procurement & Third-Party Inspection", description: "Order from approved vendors; conduct incoming inspection and third-party factory testing; verify ALMM compliance before dispatch clearance." },
      { step: 5, title: "Installation, Testing & Commissioning", description: "Execute per approved GFC drawings; conduct all mandatory hold-point inspections; proceed to energisation only after DISCOM inspector sign-off." },
      { step: 6, title: "Performance Monitoring & O&M", description: "Activate IoT monitoring dashboard; issue monthly generation and specific yield reports; establish AMC schedule with guaranteed response time SLAs." },
    ],
    caseStudies: [
      { title: "5 MW Captive Solar EPC — C&I Consumer, Rajasthan", problem: "A large C&I consumer needed a captive 5 MW solar plant to offset ₹9.8 Cr in annual grid power cost but required RESCO financing to avoid upfront capital commitment.", solution: "Structured as a RESCO with 25-year PPA; designed single-axis tracker ground mount with bifacial modules on 22 acres; secured DISCOM connectivity in 14 weeks.", result: "Plant commissioned in 7 months; CUF achieved 23.4% vs 21% design estimate; consumer's grid electricity cost reduced by 71%; RESCO investor IRR of 14.2%." },
      { title: "33kV HT Cable Network — Industrial Estate, Surat", problem: "An industrial estate needed 18 km of 33kV XLPE cable laid across road crossings and a tidal river with strict NHAI and municipal traffic restrictions.", solution: "HDD boring for 340 m river crossing; micro-trenching with reinstatement for road crossings; night-shift work permits co-ordinated with NHAI and municipality.", result: "18 km completed in 11 weeks with zero traffic incident; DISCOM first-attempt energisation; estate power availability improved from 91% to 99.6%." },
      { title: "Thermal Plant Turbine MRO — 2×210 MW Units, NTPC Vendor Network", problem: "A NTPC vendor partner needed 1,840 turbine spares pre-positioned for a 30-day planned overhaul of two 210 MW units with zero tolerance for schedule extension.", solution: "Pre-kitted all 1,840 items across both units; 3 long-lead categories placed 6 months ahead; on-site bonded store activated 45 days before outage commencement.", result: "Both units back in service in 28 days; zero missed spares events during overhaul; ₹1.1 Cr saved vs emergency spot procurement; no LD penalty incurred by vendor." },
    ],
    certifications: [
      "BIS Certified Cable Supply",
      "CEIG Approved Electrical Contractor",
      "MNRE Empanelled (Solar EPC)",
      "ALMM-Compliant Module Sourcing",
      "BEE Certified Energy Auditors",
      "ISO 9001:2015",
      "ISO 50001:2018 (Energy Management)",
      "CPRI-Certified HT Jointing Crews",
    ],
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
    process: [
      { step: 1, title: "Requirement Mapping & Regulatory Assessment", description: "Map product range to CDSCO licensing categories, storage conditions, tender eligibility and applicable government scheme provisions." },
      { step: 2, title: "Supplier Qualification & QC Audit", description: "Audit API and device manufacturers against WHO-GMP and ISO 13485 checklists; review CoAs, stability data and NABL test reports before onboarding." },
      { step: 3, title: "Cold Chain Infrastructure Commissioning", description: "Deploy validated cold storage at central warehouse and last-mile distribution points; conduct temperature mapping and IQ/OQ/PQ qualification runs." },
      { step: 4, title: "Order Fulfilment & Batch Traceability", description: "Pick, pack and dispatch with full batch traceability documentation; cold-chain shipments include calibrated electronic data loggers." },
      { step: 5, title: "Pharmacovigilance & Device Complaint Management", description: "Capture adverse event reports and device complaints in compliance management system; escalate reportable events to CDSCO within regulatory timelines." },
      { step: 6, title: "Post-Delivery Audit & Regulatory Reporting", description: "Submit pharmacovigilance summaries, device complaint logs and lot-traceability data to procurement authority per CDSCO Annual Performance Review schedule." },
    ],
    caseStudies: [
      { title: "Hospital Consumable VMI — 14 District Hospitals, MP", problem: "14 district hospitals had 23 fragmented consumable vendors, frequent stockouts of critical items and no visibility into consumption trends.", solution: "Established vendor-managed inventory at each hospital with 45-day safety stock, auto-replenishment triggers linked to patient census and monthly audit visits.", result: "Stockout incidents reduced by 89%; consolidated volumes reduced average purchase price by 17%; on-time delivery rate 99.1% over 18 months of contract." },
      { title: "Vaccine Cold Chain — Routine Immunisation, 380 PHCs", problem: "A state immunisation programme needed validated 2–8°C cold chain across 380 PHCs facing grid power unreliability for 6–8 hours daily.", solution: "Deployed solar-powered ILRs at all 380 PHCs with IoT temperature monitoring; trained 760 cold chain handlers; break-down response SLA of 4 hours established.", result: "Cold chain failure rate reduced from 6.2% to 0.4%; vaccine wastage reduced by 58%; full immunisation coverage improved from 71% to 94% across beneficiary population." },
      { title: "Bio-Medical Equipment AMC — Private Hospital Chain, 8 Facilities", problem: "A 2,400-bed chain with 8 facilities managed 22 separate AMC contracts across 14 vendors with critical equipment uptime averaging 60%.", solution: "Consolidated all 22 AMCs under single Jigisha contract; placed 6 resident bio-medical engineers across facilities; established 4-hour response SLA for ICU and OT equipment.", result: "Critical equipment uptime improved from 60% to 97%; consolidated AMC spend reduced by 28%; zero observations raised in NABH re-accreditation audit." },
    ],
    certifications: [
      "CDSCO Licensed Wholesale Drug Distributor",
      "WHO-GMP Compliant Supply Chain",
      "ISO 13485:2016 (Medical Devices)",
      "Cold Chain Validated (2–8°C and −20°C)",
      "CGHS & ESIC Empanelled Vendor",
      "ISO 9001:2015",
      "NABH Supporting Organisation",
    ],
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
    process: [
      { step: 1, title: "Farm & FPO Needs Assessment", description: "Map crop calendar, water availability, current input spend, machinery access and post-harvest infrastructure to prioritise highest-impact interventions." },
      { step: 2, title: "Scheme & Subsidy Alignment", description: "Identify PMKSY, PM-KUSUM, RKVY, ATMA and state scheme benefits applicable; prepare and submit subsidy applications on behalf of FPO members." },
      { step: 3, title: "Quality-Controlled Procurement", description: "Bulk-procure inputs and equipment from FCO/CIB/MNRE-registered sources; agronomist conducts incoming quality check before dispatch to FPO." },
      { step: 4, title: "Installation, Commissioning & Training", description: "Install irrigation or solar systems with on-farm demonstration run; conduct group training on correct operation and maintenance schedule." },
      { step: 5, title: "AMC, Soil Testing & Crop Advisory", description: "Provide scheduled machinery AMC; issue seasonal soil test recommendations and agronomy advisory through growing cycle via field agronomist." },
      { step: 6, title: "Post-Harvest Support & Market Linkage", description: "Connect FPO with mandi aggregators, cold chain partners and e-NAM platform for price realisation; logistics co-ordinated through Jigisha Logistics." },
    ],
    caseStudies: [
      { title: "PM-KUSUM Solar Pump Deployment — 500 Farmers, MP", problem: "500 smallholder farmers were spending ₹18,000–24,000 per season on diesel irrigation — erratic diesel availability caused 20% crop loss in drought years.", solution: "Facilitated PM-KUSUM Component B applications for all 500 farmers; procured MNRE-approved 5 HP DC solar pumps; completed installation across 3 talukas in 12 weeks.", result: "Seasonal irrigation cost eliminated from ₹21,000 to ₹0; crop yield improved 22% due to reliable water access; aggregate diesel savings of ₹1.05 Cr per season." },
      { title: "Drip Irrigation — 1,200-Acre Onion FPO, Nashik", problem: "240 onion farmers had 40% water wastage from flood irrigation and declining water table — groundwater extraction banned by district administration.", solution: "Designed PMKSY-funded drip network for 1,200 acres; installed inline drip with fertigation unit; 3-day group training on irrigation scheduling conducted.", result: "Water consumption reduced by 45%; fertiliser cost down 28% through precision fertigation; onion yield increased from 18 to 26 tonnes per acre." },
      { title: "Precision Farming Rollout — Soya FPO, Vidarbha", problem: "320-member soya FPO in drought-prone Vidarbha had 28% average crop loss from undiagnosed soil moisture stress and late-stage fertiliser application.", solution: "Deployed IoT soil moisture sensors across 480 acres; issued SMS-based crop advisory in Marathi; drone-sprayed bio-pesticides across 6 spray cycles in season.", result: "Crop loss reduced from 28% to 7%; fertiliser cost down 22% through precision application; average FPO member income increased by ₹18,000 per acre." },
    ],
    certifications: [
      "FCO Registered Input Supplier",
      "CIB Registered (Pesticides)",
      "MNRE Empanelled (PM-KUSUM)",
      "PMKSY Empanelled Contractor",
      "ISO 9001:2015",
      "PGS-India Organic Certification Facilitation",
      "NABARD Linkage Programme Partner",
    ],
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
    process: [
      { step: 1, title: "Feasibility Study & DPR", description: "Conduct soil investigation, utility survey, regulatory pre-check and heritage/environmental sensitivity assessment; prepare Detailed Project Report with conceptual cost and programme." },
      { step: 2, title: "Detailed Engineering & Statutory Approvals", description: "Produce GFC drawings, structural calculations and MEP schematics; obtain all statutory approvals and no-objection certificates before any mobilisation." },
      { step: 3, title: "Procurement & Sub-Contract Award", description: "Float enquiries, evaluate bids on technical and commercial criteria; award supply and subcontracts with back-to-back milestones and LD provisions." },
      { step: 4, title: "Construction Execution & Quality Surveillance", description: "Execute per approved inspection and test plan; third-party quality audit at each mandatory hold point; daily photo and material consumption records maintained." },
      { step: 5, title: "MEP, Testing & Integrated Systems Commissioning", description: "Complete mechanical, electrical, plumbing, fire and BMS works; conduct individual and integrated system testing per approved test protocols." },
      { step: 6, title: "Punch-List, Statutory Certificates & Handover", description: "Systematic punch-list closure; obtain occupation certificate; hand over as-built records, O&M manuals and defect-liability bond for specified retention period." },
    ],
    caseStudies: [
      { title: "Railway Station Redevelopment — Category C Station, Central Zone", problem: "A high-footfall station needed accessibility upgrades, structural roof replacement, LED lighting and a new sanitation block within 9 months without platform closure.", solution: "Staged construction sequenced to avoid peak-hour platform disruption; pre-fabricated steel roof panels installed in 3 weekend mega-blocks co-ordinated with Railway block calendar.", result: "Project delivered in 8.5 months (2 weeks ahead); station pedestrian capacity increased by 35%; PWD accessibility compliance score improved from 41% to 98%." },
      { title: "Greenfield Chemical Plant EPC — Gujarat, ₹240 Crore", problem: "A greenfield chemical facility needed complete civil, structural, mechanical, piping and E&I works on a fixed-price 26-month EPC schedule.", solution: "Deployed parallel civil and structural fronts with pre-engineered steel building; critical path managed through weekly Primavera look-ahead with 3-tier escalation.", result: "Mechanical completion achieved on month 24 (2 months ahead of schedule); zero LTI across 1.8 million man-hours; project commissioned within approved budget with no LD claims." },
      { title: "Smart City Road & Water Infrastructure — AMRUT, UP", problem: "14.8 km of road widening, underground water supply network and street lighting required across a heritage town with severe traffic and heritage body restrictions.", solution: "Divided project into 12 micro-zones with night-shift heavy civil work; coordinated heritage zone restrictions with municipal body and ASI; obtained NHAI night-work permits.", result: "Project delivered 2 months ahead; non-revenue water reduced from 41% to 14%; AMRUT programme audit score 94/100; zero heritage violation notices." },
    ],
    certifications: [
      "ISO 9001:2015 (Construction)",
      "ISO 14001:2015 (Environmental)",
      "ISO 45001:2018 (Safety)",
      "GeM Registered Contractor",
      "CPWD Approved Contractor",
      "BIM Level 2 Certified Teams",
      "MoEF Empanelled Environmental Consultant",
      "Primavera P6 Certified Planners",
    ],
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
    process: [
      { step: 1, title: "Drawing & Specification Review", description: "Review GD&T drawings, material specs, surface finish requirements and key characteristics; flag DFM concerns and obtain customer resolution before tooling commitment." },
      { step: 2, title: "Process Planning & PFMEA", description: "Develop process flow, PFMEA, control plan and work instructions; identify critical-to-quality operations requiring SPC monitoring and error-proofing." },
      { step: 3, title: "Tooling, Fixture & Gauge Design", description: "Design and fabricate jigs, fixtures, check fixtures and gauges; first-off trials validate process; production readiness review before PPAP run." },
      { step: 4, title: "PPAP Production Run & Capability Study", description: "Produce initial sample lot; conduct full Cpk study on all critical dimensions; prepare Level 3 PPAP submission package for customer approval." },
      { step: 5, title: "Serial Production & In-Process Inspection", description: "Execute production against approved control plan; operator self-check at each stage; CMM and vision system at final inspection gate before lot release." },
      { step: 6, title: "JIT Dispatch & Continuous Improvement", description: "Ship to customer schedule with full lot traceability; review customer PPM monthly; drive yield and cycle-time improvements through structured Kaizen events." },
    ],
    caseStudies: [
      { title: "Aluminium Gearbox Housing Supply — Automotive Tier-1, Pune", problem: "A Tier-1 supplier needed 2,400 gearbox housings per month with Cpk ≥ 1.67 on 6 critical bores — their existing supplier had 840 PPM rejection rate.", solution: "Established dedicated 4-axis CNC cell with SPC monitoring on all CDs; validated process across a 3-month PPAP production run before serial release.", result: "Serial supply at 2,400 units/month for 18 months; zero PPM rejections at customer incoming inspection; tooling optimisation in month 7 reduced unit cost by 11%." },
      { title: "VMI MRO Programme — Chemical Process Plant, Vadodara", problem: "A chemical plant was losing ₹8.5 Lakh/month in production time chasing MRO spares from 14 different suppliers with no on-site stock.", solution: "Consolidated 680 MRO SKUs under single VMI contract; established on-site store with automated reorder triggers; min/max levels set using 24-month consumption data.", result: "Procurement transactions reduced by 76%; MRO-related downtime cut from 34 to 4 hours/month; annual MRO spend reduced by ₹19 Lakh." },
      { title: "Sheet Metal Sub-Assembly Supply — HVAC OEM, Pune", problem: "An HVAC OEM had 14% rework rate on powder-coated sheet-metal sub-assemblies from their existing supplier, causing weekly assembly line stoppages.", solution: "Established dedicated press-brake and laser-cutting cell with CNC programme library per assembly drawing; in-house 5-stage pre-treatment powder coat line installed.", result: "Rework rate reduced from 14% to 0.3% in 4 months; delivery compliance reached 99.4%; OEM reallocated 2 incoming inspection FTEs to other quality activities." },
    ],
    certifications: [
      "ISO 9001:2015",
      "IATF 16949:2016 (in progress)",
      "AS9100 Rev D (in progress)",
      "NABL Accredited Metrology Lab",
      "ISO 45001:2018",
      "PPAP Level 3 Capability",
      "Lean Six Sigma Black Belt (process leads)",
    ],
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
    process: [
      { step: 1, title: "Supply Chain Diagnostic", description: "Map freight lanes, storage footprint, inventory turns, SLA history and hidden cost drivers; benchmark against sector best-in-class performance metrics." },
      { step: 2, title: "Network Design & Mode Optimisation", description: "Model road/rail/air modal mix, warehouse hub positioning and last-mile options; present cost-service trade-off scenarios for client decision." },
      { step: 3, title: "System Integration & Onboarding", description: "Integrate client ERP/WMS with Jigisha TMS via REST API; configure auto-dispatch triggers, POD workflows, exception management and reporting dashboards." },
      { step: 4, title: "Parallel Run & Go-Live", description: "Run parallel operations for 2 weeks; tune carrier allocation, route assignment and exception handling; sign off on KPI baseline before full transition." },
      { step: 5, title: "Ongoing SLA Management", description: "Monthly OTIF scorecards against agreed KPIs; immediate corrective action plans within 24 hours of any SLA breach; root cause shared with client." },
      { step: 6, title: "Quarterly Business Review & Network Optimisation", description: "Review network performance, cost trends and new volume lanes quarterly; update hub footprint and carrier contracts to reflect business growth." },
    ],
    caseStudies: [
      { title: "3PL Outsourcing — Industrial Equipment OEM, NCR", problem: "An OEM managing 7 warehouses with 3 regional carriers had 16% on-time delivery rate and was incurring ₹2.3 Cr annual demurrage at customer sites.", solution: "Consolidated operations to 2 strategically located hubs; integrated WMS with OEM SAP S/4HANA; established carrier SLAs with penalty provisions and daily scorecards.", result: "On-time delivery improved from 16% to 94% within 6 months; demurrage eliminated saving ₹2.3 Cr/year; warehousing and transport cost reduced by 23%." },
      { title: "Pharmaceutical Cold-Chain — Pan-India Distribution, 480 Points", problem: "A pharma company had 3.1% cold-chain excursion rate across 480 delivery points causing ₹1.8 Cr annual product write-offs and regulatory non-conformances.", solution: "Deployed IoT data loggers on all cold-chain vehicles; trained 380 last-mile field agents; established 4-hour corrective action SLA for any excursion event.", result: "Excursion rate reduced from 3.1% to 0.2% within 90 days; product write-offs reduced by ₹1.6 Cr annually; regulatory audit score improved to 98/100." },
      { title: "EXIM Freight Management — Engineering Goods Exporter, Rajkot", problem: "A Rajkot engineering goods exporter was paying 23% above market freight rates using a single forwarder and experiencing 18% customs delay rate on US-bound shipments.", solution: "Restructured to multi-forwarder model with Jigisha International as 4PL; pre-classified all 240 export HS codes; initiated AEO T1 application with customs authorities.", result: "Freight cost reduced by 19% in year one; customs delay rate dropped from 18% to 3%; AEO status obtained in month 9, further cutting dwell time by 40%." },
    ],
    certifications: [
      "ADR / DG Transport Licensed",
      "Cold Chain Validated (2–8°C and −20°C)",
      "FSSAI Licensed (Food Logistics)",
      "Customs Broker Licensed (CBEC)",
      "ISO 9001:2015",
      "ISO 14001:2015",
      "FTWZ Operator Empanelled",
      "AEO T1 Status (Authorised Economic Operator)",
    ],
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
    process: [
      { step: 1, title: "Digital Maturity Assessment", description: "Assess OT/IT landscape, connectivity, data availability and current system performance; score against Industry 4.0 capability model to identify gaps." },
      { step: 2, title: "Use Case Prioritisation & ROI Modelling", description: "Identify 3–5 highest-ROI digital use cases; model financial case for each; select priority use case for 6-week proof of concept." },
      { step: 3, title: "Architecture Design & Proof of Concept", description: "Design target-state architecture with security model; build PoC on priority use case; measure KPI baseline vs digital outcome to confirm business case." },
      { step: 4, title: "Platform Build & System Integration", description: "Deploy IoT edge, cloud platform, analytics and ERP integration layers; connect via REST/MQTT/OPC-UA APIs with full data lineage and audit trail." },
      { step: 5, title: "User Training & JiSHAbot Deployment", description: "Run role-based training programme; deploy JiSHAbot as always-on adoption assistant supporting 30+ regional languages across factory, field and office." },
      { step: 6, title: "Managed Operations & Incremental Delivery", description: "Transition to managed ops; monthly KPI review against agreed targets; feature sprint releases on 6-week cadence with continuous improvement backlog." },
    ],
    caseStudies: [
      { title: "IIoT OEE Platform — 120-Loom Textile Mill, Surat", problem: "A textile mill had 61% OEE with no visibility into downtime root causes across 3 shifts — maintenance was reactive and shift handover notes were manual.", solution: "Deployed vibration and current sensors on all looms; built real-time OEE dashboard with Pareto downtime analysis; JiSHAbot SMS alerts sent to maintenance team on anomaly detection.", result: "OEE improved from 61% to 79% in 5 months; unplanned downtime reduced by 44%; maintenance cost reduced by ₹38 Lakh annually." },
      { title: "Odoo ERP Rollout — Industrial Distributor, 12 Branches", problem: "A ₹180 Cr distributor was running procurement, sales and inventory on spreadsheets across 12 branches with 3-day order fulfilment cycles and 33% inventory inaccuracy.", solution: "Deployed Odoo ERP with custom warehouse management, procurement and GST modules; branch-level Tally integration; full rollout in 8 weeks with parallel run.", result: "Order fulfilment cycle reduced from 3 days to 4 hours; inventory accuracy improved from 67% to 98%; GST filing time cut from 3 days to 2 hours." },
      { title: "OT Cybersecurity — Critical Infrastructure Operator, Delhi NCR", problem: "A utilities operator managing 3 water treatment plants had unpatched SCADA with internet-exposed HMI interfaces flagged in a CERT-In advisory, risking operational shutdown.", solution: "Deployed IEC 62443 OT security assessment; segmented networks with industrial-grade firewalls; implemented 24×7 SOC with OT-specific threat detection rules; patched 340 vulnerabilities.", result: "All CERT-In advisory items remediated within 90 days; zero security incidents in 18 months post-deployment; NCIIPC compliance audit score improved from 42% to 91%." },
    ],
    certifications: [
      "ISO 27001:2022 (Cybersecurity)",
      "MeitY Empanelled IT Vendor",
      "AWS Partner (Solutions Provider)",
      "Microsoft Azure Partner",
      "IEC 62443 OT Security Framework",
      "DPDP Compliance Framework",
      "ISO 9001:2015",
      "NASSCOM Member",
    ],
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
    process: [
      { step: 1, title: "Site Feasibility & Resource Assessment", description: "Conduct solar irradiation survey, structural load check, feedstock mapping, grid capacity study or ESG baseline inventory as applicable to project type." },
      { step: 2, title: "DPR & Bankable Financial Model", description: "Prepare DPR with P50/P90 yield estimates, CAPEX/RESCO financial model, IRR sensitivity analysis and lender-format project information memorandum." },
      { step: 3, title: "Regulatory Approvals & Green Finance", description: "File DISCOM connectivity, MNRE scheme registration and SATAT application; co-ordinate with green lenders, IREDA and SBI for project finance documentation." },
      { step: 4, title: "Procurement & Factory Quality Assurance", description: "Procure ALMM-listed modules and BIS/IEC-certified BoS; conduct third-party EL, flash test and IV curve testing at manufacturer's factory before dispatch." },
      { step: 5, title: "Installation, Commissioning & Net-Metering", description: "Install per approved SLD; witnessed SAT with DISCOM inspector; commission IoT monitoring; obtain net-metering approval and synchronise with grid." },
      { step: 6, title: "Performance Monitoring, REC & ESG Reporting", description: "Monthly generation and specific yield reports; annual BRSR/GRI disclosure package; REC registration and trading; carbon credit issuance for voluntary market projects." },
    ],
    caseStudies: [
      { title: "600 kg/day Bio-CNG Plant — Paddy Straw, MP", problem: "A rice mill generating 180 tonnes/day of paddy straw faced ₹42 Lakh/year in disposal cost plus grid power bills with no viable biogas technology partner.", solution: "Designed 600 kg/day CBG plant under SATAT scheme; secured OMC off-take LoI before financial close; multi-source feedstock agreement with 4 nearby farmers.", result: "Plant operational in 11 months; annual CBG revenue ₹1.8 Cr; disposal cost eliminated; straw farmers earn ₹14 Lakh/year collectively; project IRR 18.4% over 20-year life." },
      { title: "Corporate BRSR ESG Programme — NSE-Listed Manufacturer", problem: "A NSE-listed manufacturer needed BRSR Core disclosure for FY2024 with Scope 1, 2 and 3 GHG inventory but had no internal ESG infrastructure.", solution: "Deployed ESG data collection templates across 6 plants; built GHG inventory per GHG Protocol; submitted BRSR Core with third-party limited assurance statement.", result: "BRSR Core filed on time; Scope 2 emissions reduced by 31% through solar procurement initiated during programme; ESG rating improved from C to BB within 12 months." },
      { title: "Solar-Powered Railway Stations — 12 Stations, Central Railway", problem: "12 Category-C stations needed solar rooftop to reduce grid dependency; each had different roof material, loading capacity and electrical configuration.", solution: "Individual structural audit per station; station-specific lightweight mounting system designed; permissions co-ordinated with Divisional Electrical Engineer; installed station-by-station.", result: "780 kW commissioned across 12 stations in 6 months; average grid bill per station reduced by 56%; aggregate annual saving ₹68 Lakh; portfolio payback period 3.9 years." },
    ],
    certifications: [
      "MNRE Empanelled (Solar EPC)",
      "ALMM-Compliant Module Supply",
      "SATAT Scheme Registered (Bio-CNG)",
      "BEE Certified Energy Auditors",
      "ISO 14001:2015",
      "ISO 50001:2018",
      "GHG Protocol Certified Practitioners",
      "VCS / Gold Standard Project Developer",
    ],
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
    process: [
      { step: 1, title: "Business Needs Diagnosis", description: "Identify whether primary need is working capital, EXIM facilitation, media reach, vendor empanelment or retail distribution infrastructure." },
      { step: 2, title: "Product & Channel Matching", description: "Match requirement to relevant Jigisha subsidiary — Infin for finance, International for EXIM, Media Vision for marketing, Retails for B2C distribution." },
      { step: 3, title: "Documentation & Compliance Onboarding", description: "Prepare KYC, CIBIL assessment, EXIM code registration, GeM catalogue setup or vendor qualification dossier as applicable to chosen channel." },
      { step: 4, title: "Programme Activation", description: "Disburse finance facility, execute EXIM freight consignment, launch media campaign or open retail distribution channel; set up milestone tracking." },
      { step: 5, title: "Performance Monitoring", description: "Weekly KPI reports against agreed targets — disbursement utilisation, freight cost savings, lead quality scores, retail sell-through; flag deviations immediately." },
      { step: 6, title: "Quarterly Review & Scale-Up", description: "Expand credit limits, add export markets, increase media placements or open new retail geographies based on demonstrated performance metrics." },
    ],
    caseStudies: [
      { title: "Reverse Factoring — Auto Component MSME Cluster, Faridabad", problem: "18 auto component MSMEs faced 90-day payment cycles from a Tier-1 anchor buyer — the cash gap prevented accepting new purchase orders from OEM expansion.", solution: "Structured reverse factoring facility with the Tier-1 as anchor; MSMEs receive payment within 3 days of invoice approval; Jigisha Infin holds receivable to 90-day term.", result: "Working capital cycle reduced from 90 days to 3 days for all 18 MSMEs; aggregate order acceptance capacity increased by 34%; zero defaults across 24-month programme." },
      { title: "B2B Lead Generation — Industrial Equipment Manufacturer", problem: "A ₹90 Cr industrial equipment company had no digital marketing presence and generated all enquiries from trade shows at ₹1.8 Lakh cost per qualified lead.", solution: "Built SEO-optimised product pages indexed against 320 sector keywords; LinkedIn ABM campaigns targeted procurement and engineering decision-makers; content placed across Jigisha Media properties.", result: "Qualified inbound enquiries increased 280% in 6 months; cost per qualified lead reduced by 67% vs trade show benchmark; 4 new OEM supply agreements signed." },
      { title: "Retail Distribution Expansion — Agri-Input Brand, 6 States", problem: "An agri-input manufacturer wanted to expand from 2 to 6 states with 800 new retail touchpoints in 18 months but had no existing distribution infrastructure outside home state.", solution: "Jigisha Retails onboarded 68 master distributors and 800 retailers using digital field-force platform; Jigisha Logistics handled last-mile fulfilment to all 800 points.", result: "800 retail points live in 16 months (2 months ahead of target); brand revenue in new states reached ₹12.4 Cr in first full year; distributor churn of 4% vs industry average of 22%." },
    ],
    certifications: [
      "RBI Registered NBFC (Jigisha Infin)",
      "Customs Broker Licensed (CBEC)",
      "DGFT Registered Exporter/Importer",
      "IEC (Import Export Code) Holder",
      "ISO 9001:2015",
      "NASSCOM Member",
      "GeM Registered Seller",
    ],
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
