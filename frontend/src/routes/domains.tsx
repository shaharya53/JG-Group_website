import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ExternalLink, Globe, TrendingUp, Users, Zap } from "lucide-react";
import { CountUp } from "../components/CountUp";
import railwayImg   from "../assets/railway-services.jpg";
import metroImg     from "../assets/metro-rail.jpg";
import defenceImg   from "../assets/defence-tech.jpg";
import greenImg     from "../assets/green-energy.jpg";
import warehouseImg from "../assets/products-warehouse.jpg";
import careersImg   from "../assets/careers-team.jpg";

export const Route = createFileRoute("/domains")({
  component: DomainsPage,
  head: () => ({
    meta: [
      { title: "Our Domains — Jigisha Group of Companies" },
      { name: "description", content: "Explore all 21 specialized companies under Jigisha Group, from Railways and Defence to IT, Agro, Green Energy and more." },
      { property: "og:title", content: "Our Domains — Jigisha Group" },
      { property: "og:description", content: "21 specialized companies. One unified industrial ecosystem." },
    ],
  }),
});

const companies = [
  {
    id: 0,
    name: "Jigisha Infin Corp Pvt. Ltd.",
    shortName: "Infin Corp",
    description: "Financial services, investment advisory, and insurance consulting for industrial and corporate clients.",
    color: "oklch(0.55 0.15 145)",
    services: [
      "Corporate Finance & Project Funding Consultancy",
      "Industrial & Trade Finance Solutions",
      "Investment Advisory & Wealth Management",
      "Insurance & Risk Management Consultancy",
      "International Finance & Cross-Border Advisory",
      "FinTech & Digital Financial Solutions",
      "Public Sector & Government Project Finance",
      "Advisory for Mergers, Acquisitions & JVs",
      "Training & Capacity Building",
    ],
    stats: [
      { value: "₹4,200+ Cr", label: "Finance Structured" },
      { value: "$3.5B+", label: "Coverage Placed" },
      { value: "92%", label: "Success Rate" },
    ],
  },
  {
    id: 1,
    name: "Jigisha International Pvt. Ltd.",
    shortName: "International",
    description: "Global operations arm managing international expansion, trade, and cross-border partnerships.",
    color: "oklch(0.50 0.20 260)",
    services: [
      "Global Market Expansion Strategy",
      "Overseas Operations Management",
      "International Trade & Commerce Facilitation",
      "Strategic Investments & Partnerships",
      "International EPC Project Execution",
      "Innovation & Technology Transfer",
      "Financial & Capital Management for Global Ops",
      "Brand Positioning in International Markets",
    ],
    stats: [
      { value: "30+", label: "Target Countries" },
      { value: "5", label: "Regional Headquarters" },
      { value: "200+", label: "Global Partnerships" },
    ],
  },
  {
    id: 2,
    name: "Jigisha Retails Pvt. Ltd.",
    shortName: "Retails",
    description: "Omni-channel retail and e-commerce platforms for consumer and industrial markets.",
    color: "oklch(0.55 0.15 145)",
    services: [
      "General E-commerce Operations (jigisha.online & .world)",
      "B2B/B2G Industrial E-commerce Portal",
      "Global Marketplace Integration",
      "Private Label & Exclusive Brands",
      "Omni-channel Retail Strategy",
      "International Retail Expansion",
      "Technology-Driven Retail Solutions",
      "Customer Engagement & Loyalty Programs",
      "Sustainable Retail Practices",
    ],
    stats: [
      { value: "2", label: "E-commerce Platforms" },
      { value: "50+", label: "Product Categories" },
      { value: "100K+", label: "Target SKUs" },
    ],
  },
  {
    id: 3,
    name: "Jigisha Railtech Pvt. Ltd.",
    shortName: "Railtech",
    description: "End-to-end railway, metro, and bullet train solutions including manufacturing and maintenance.",
    color: "oklch(0.55 0.20 30)",
    services: [
      "Research & Development of Railway Technologies",
      "Manufacturing & Contract Manufacturing of Rail Components",
      "Supply & Trading of Rail Components",
      "SITC (Supply, Installation, Testing & Commissioning)",
      "Maintenance & Overhaul (POH) Services",
      "Service & Maintenance Hubs",
      "Infrastructure Development for Rail Projects",
      "Training & Skill Development",
      "International Rail Project Expansion",
    ],
    stats: [
      { value: "1000+", label: "Rail Components" },
      { value: "50+", label: "Service Centers" },
      { value: "24/7", label: "Maintenance Support" },
    ],
  },
  {
    id: 4,
    name: "Jigisha Infotech Pvt. Ltd.",
    shortName: "Infotech",
    description: "IT solutions, software development, IoT, and digital transformation services.",
    color: "oklch(0.50 0.22 300)",
    services: [
      "Software Development & IT Solutions",
      "Hardware Manufacturing & Integration",
      "Automation & Industry 4.0 Solutions",
      "Networking & Cybersecurity",
      "Cloud & Data Services",
      "IT Infrastructure Projects",
      "E-Governance & Public Sector IT",
      "Research & Development in Emerging Tech",
      "Global IT Outsourcing Services",
    ],
    stats: [
      { value: "500+", label: "IT Projects" },
      { value: "50+", label: "Enterprise Clients" },
      { value: "99.9%", label: "System Uptime" },
    ],
  },
  {
    id: 5,
    name: "Jigisha Industrial Services Pvt. Ltd.",
    shortName: "Ind. Services",
    description: "Comprehensive industrial support, maintenance, and service management.",
    color: "oklch(0.45 0.08 60)",
    services: [
      "Core Industrial Support Services",
      "After-Sales, MRO & Technical Services",
      "Engineering & Installation Services",
      "IT & Digital Transformation Services",
      "Environmental & Sustainability Services",
      "Event, Marketing & Media Services",
      "Procurement & Product Development Support",
      "Testing, Certification & Compliance",
      "Security & Risk Management",
    ],
    stats: [
      { value: "2000+", label: "Service Centers" },
      { value: "100+", label: "Industrial Clients" },
      { value: "95%", label: "Client Retention" },
    ],
  },
  {
    id: 6,
    name: "Jigisha Industries Pvt. Ltd.",
    shortName: "Industries",
    description: "Core manufacturing and diversified industrial production across multiple sectors.",
    color: "oklch(0.45 0.05 220)",
    services: [
      "Diversified Industrial Manufacturing",
      "Engineering & Turnkey Industrial Solutions",
      "Specialized Component Production",
      "Industrial Raw Material Supply",
      "Research, Development & Product Innovation",
      "Sustainability & Green Manufacturing",
      "Global Trade & Export Operations",
      "After-Sales Support & Lifecycle Management",
      "Infrastructure & Industrial Project Partnerships",
    ],
    stats: [
      { value: "10+", label: "Manufacturing Units" },
      { value: "500+", label: "Product Lines" },
      { value: "30+", label: "Export Countries" },
    ],
  },
  {
    id: 7,
    name: "Jigisha Engineering Pvt. Ltd.",
    shortName: "Engineering",
    description: "Engineering, design, and turnkey project execution for industrial and infrastructure sectors.",
    color: "oklch(0.55 0.22 350)",
    services: [
      "Turnkey Engineering Projects (EPC)",
      "Mechanical, Electrical & Civil Engineering",
      "Specialized Industrial Solutions",
      "Power Generation Projects",
      "Cement & Heavy Industry Projects",
      "Specialized Factory Fabrication",
      "Marine & Shipping Industry Engineering",
      "Product Design & Prototyping",
      "Industrial Maintenance & MRO Services",
    ],
    stats: [
      { value: "100+", label: "EPC Projects" },
      { value: "₹5,000+ Cr", label: "Project Value" },
      { value: "98%", label: "On-time Delivery" },
    ],
  },
  {
    id: 8,
    name: "Jigisha Agro Industries Pvt. Ltd.",
    shortName: "Agro",
    description: "Modern agriculture, food processing, and agri-tech solutions.",
    color: "oklch(0.58 0.18 135)",
    services: [
      "Modern Farming & Contract Agriculture",
      "Agricultural Inputs Manufacturing & Supply",
      "Food & Agro-Product Processing",
      "Agri-Tech Solutions",
      "Sustainable Agriculture Initiatives",
      "Export & International Trade",
      "Agri-Logistics & Supply Chain Management",
      "Farmer Empowerment & Training",
      "R&D in Agriculture & Food Science",
    ],
    stats: [
      { value: "10,000+", label: "Acres Under Management" },
      { value: "50+", label: "Processing Units" },
      { value: "20+", label: "Export Markets" },
    ],
  },
  {
    id: 9,
    name: "Jigisha Electricals & Electronics Pvt. Ltd.",
    shortName: "Electricals",
    description: "Electrical systems, electronics design, and smart technology solutions.",
    color: "oklch(0.70 0.18 85)",
    services: [
      "Electrical Systems Manufacturing",
      "Electronics Design & Production",
      "Renewable Energy Solutions",
      "Railway & Metro Electrical Components",
      "Defence & Aerospace Electronics",
      "Testing, Installation & Maintenance",
      "Smart Technology Integration",
      "Product Development & R&D",
      "Global Expansion & Partnerships",
    ],
    stats: [
      { value: "1000+", label: "Electrical Products" },
      { value: "ISO 9001", label: "Quality Certified" },
      { value: "40+", label: "Technology Patents" },
    ],
  },
  {
    id: 10,
    name: "Jigisha Automobiles Pvt. Ltd.",
    shortName: "Automobiles",
    description: "Vehicle manufacturing, automotive components, and sustainable mobility solutions.",
    color: "oklch(0.55 0.20 260)",
    services: [
      "Vehicle Manufacturing & Assembly",
      "Electric & Sustainable Mobility Solutions",
      "Automotive Components & Spare Parts",
      "Special Purpose & Customized Vehicles",
      "Research & Development",
      "Trading & Global Export Operations",
      "Fleet Management & Leasing Services",
      "After-Sales Services & MRO",
      "Sustainability in Automotive Manufacturing",
    ],
    stats: [
      { value: "5+", label: "Vehicle Categories" },
      { value: "200+", label: "Component Types" },
      { value: "50+", label: "Service Centers" },
    ],
  },
  {
    id: 11,
    name: "Jigisha Enterprises",
    shortName: "Enterprises",
    description: "Apex holding company providing strategic oversight, financial management, and governance across all group subsidiaries.",
    color: "oklch(0.25 0.08 250)",
    services: [
      "Strategic Oversight & Governance",
      "Financial Management & Capital Allocation",
      "Synergy Creation Across Group Companies",
      "Global Expansion & International Business Control",
      "Innovation, Technology & R&D Leadership",
      "Human Capital & Talent Development",
      "Risk Management & Compliance",
      "Branding, Marketing & Corporate Relations",
      "Sustainability & CSR Leadership",
    ],
    stats: [
      { value: "21", label: "Subsidiary Companies" },
      { value: "15,000+", label: "Total Workforce" },
      { value: "₹50,000+ Cr", label: "Target Revenue by 2030" },
    ],
  },
  {
    id: 12,
    name: "Jigisha Technologies Pvt. Ltd.",
    shortName: "Technologies",
    description: "High-tech innovations including semiconductors, graphene, and advanced materials.",
    color: "oklch(0.50 0.22 300)",
    services: [
      "Semiconductor Technologies",
      "Graphene & Advanced Materials",
      "Thorium & Alternative Energy Technologies",
      "Hi-Tech Manufacturing & Automation",
      "Global Technology Collaboration & IP Development",
      "Sustainability & Green Innovation",
      "AI & Robotics Integration",
      "Advanced Manufacturing Solutions",
      "Research & Development Partnerships",
    ],
    stats: [
      { value: "65-180nm", label: "Chip Fabrication" },
      { value: "50+", label: "Research Projects" },
      { value: "20+", label: "Technology Patents" },
    ],
  },
  {
    id: 13,
    name: "Jigisha Logistics Pvt. Ltd.",
    shortName: "Logistics",
    description: "Integrated logistics, supply chain, and transportation services.",
    color: "oklch(0.65 0.18 60)",
    services: [
      "Freight & Cargo Transportation",
      "Warehousing & Distribution",
      "Port & Marine Logistics",
      "Industrial Project Logistics",
      "E-commerce & Retail Logistics",
      "Rail & Metro Cargo Solutions",
      "Technology-Driven Supply Chain Management",
      "Aviation Logistics",
      "Sustainability & Green Logistics",
    ],
    stats: [
      { value: "500+", label: "Fleet Vehicles" },
      { value: "50+", label: "Warehouse Locations" },
      { value: "99%", label: "On-time Delivery" },
    ],
  },
  {
    id: 14,
    name: "Jigisha Media Vision Pvt. Ltd.",
    shortName: "Media Vision",
    description: "Media, advertising, creative communications, and event management.",
    color: "oklch(0.55 0.22 350)",
    services: [
      "Advertising & Marketing Services",
      "Multimedia & Content Creation",
      "Digital Media & Online Platforms",
      "Event Management & Experiential Marketing",
      "News & Media Channels",
      "Creative & Design Services",
      "Production & Supply of Advertising Equipment",
      "Market Research & Strategy Development",
      "International Media Operations",
    ],
    stats: [
      { value: "1000+", label: "Campaigns Executed" },
      { value: "50+", label: "Media Partners" },
      { value: "10M+", label: "Audience Reach" },
    ],
  },
  {
    id: 15,
    name: "Jigisha Pharma & Healthcare Pvt. Ltd.",
    shortName: "Pharma",
    description: "Pharmaceuticals, medical devices, and comprehensive healthcare solutions.",
    color: "oklch(0.60 0.18 210)",
    services: [
      "Pharmaceutical Manufacturing & Supply",
      "Medical Devices & Diagnostics",
      "Research & Development (R&D)",
      "Biotechnology & Advanced Therapies",
      "Hospital & Clinical Infrastructure",
      "Public Health & Preventive Care",
      "Nutraceuticals & Wellness Products",
      "Global Healthcare Projects",
      "Regulatory Compliance & Quality Assurance",
    ],
    stats: [
      { value: "100+", label: "Pharma Products" },
      { value: "GMP Certified", label: "Manufacturing" },
      { value: "50+", label: "Hospital Partners" },
    ],
  },
  {
    id: 16,
    name: "Jigisha Envirocare Pvt. Ltd.",
    shortName: "Envirocare",
    description: "Environmental solutions, sustainability services, and green technology.",
    color: "oklch(0.55 0.18 145)",
    services: [
      "Waste Management & Recycling",
      "Water Management & Treatment",
      "Air Quality & Pollution Control",
      "Renewable Energy & Green Technology",
      "Climate Change Mitigation & Carbon Management",
      "Sustainable Agriculture & Land Restoration",
      "Environmental Consulting & Compliance",
      "Green Infrastructure Development",
      "Technology & Innovation in Enviro Solutions",
    ],
    stats: [
      { value: "1000+", label: "Waste Management Projects" },
      { value: "200+", label: "Water Treatment Plants" },
      { value: "50%", label: "Carbon Reduction Target" },
    ],
  },
  {
    id: 17,
    name: "Jigisha Defense Technologies Pvt. Ltd.",
    shortName: "Defense Tech",
    description: "Defense research, manufacturing, and systems integration for armed forces.",
    color: "oklch(0.40 0.15 270)",
    services: [
      "Land Systems Development",
      "Naval & Marine Defense Systems",
      "Aerospace & Air Defense Technologies",
      "Space & Satellite Defense Applications",
      "Weapons & Ammunition Manufacturing",
      "Defense Electronics & Cybersecurity",
      "Missile & Strategic Systems",
      "R&D & Indigenous Technology Development",
      "MRO (Maintenance, Repair & Overhaul)",
    ],
    stats: [
      { value: "100+", label: "Defense Components" },
      { value: "DRDO", label: "Certified Partner" },
      { value: "10+", label: "Strategic Projects" },
    ],
  },
  {
    id: 18,
    name: "Jigisha Green Pvt. Ltd.",
    shortName: "Green",
    description: "Renewable energy, sustainability projects, and green infrastructure.",
    color: "oklch(0.58 0.18 135)",
    services: [
      "Renewable Energy Development",
      "Energy Efficiency & Green Building Solutions",
      "Waste-to-Energy & Recycling Projects",
      "Water Conservation & Management",
      "Sustainable Agriculture Solutions",
      "Electric Mobility & Charging Infrastructure",
      "Environmental Consultancy & Carbon Management",
      "Industrial Decarbonization Projects",
      "Community-Based Sustainability Programs",
    ],
    stats: [
      { value: "500+", label: "Solar Projects" },
      { value: "100MW+", label: "Renewable Capacity" },
      { value: "50,000+", label: "Carbon Credits" },
    ],
  },
  {
    id: 19,
    name: "Jigisha Consultancy Pvt. Ltd.",
    shortName: "Consultancy",
    description: "Strategic advisory, project management, and business consulting services.",
    color: "oklch(0.45 0.08 60)",
    services: [
      "Business Strategy & Management Consulting",
      "Project Management & Execution Support",
      "Industrial & Infrastructure Consultancy",
      "Financial & Investment Advisory",
      "International Trade & Business Facilitation",
      "Technology & Digital Transformation Advisory",
      "Human Capital & Organizational Development",
      "Sector-Specific Expert Consulting",
      "Regulatory & Compliance Advisory",
    ],
    stats: [
      { value: "200+", label: "Consulting Projects" },
      { value: "50+", label: "Industry Sectors" },
      { value: "95%", label: "Client Satisfaction" },
    ],
  },
  {
    id: 20,
    name: "Jigisha Infra Pvt. Ltd.",
    shortName: "Infra",
    description: "Infrastructure development, engineering, and project execution.",
    color: "oklch(0.55 0.20 30)",
    services: [
      "Urban Infrastructure Development",
      "Transportation Infrastructure",
      "Industrial & Manufacturing Infrastructure",
      "Energy Infrastructure",
      "Marine & Shipping Infrastructure",
      "Water & Waste Management Infrastructure",
      "Defense & Aerospace Infrastructure",
      "Public Utility Projects",
      "Turnkey EPC Solutions",
    ],
    stats: [
      { value: "100+", label: "Infrastructure Projects" },
      { value: "₹10,000+ Cr", label: "Project Value" },
      { value: "LEED Certified", label: "Green Building" },
    ],
  },
];

function DomainsPage() {
  const [activeId, setActiveId] = useState(0);
  const active = companies[activeId];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[oklch(0.18_0.08_255)]">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }} />
        {/* Gold glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gold/8 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">

            {/* LEFT — text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 text-gold rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Jigisha Group Portfolio
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.92] tracking-tight mb-6">
                21 Companies.<br />
                <span className="text-gold">One Universe.</span>
              </h1>

              <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-lg">
                Explore the complete ecosystem of Jigisha Group's diversified business verticals — from Railways and Defence to IT, Green Energy and beyond.
              </p>

              <div className="grid grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {[
                  { value: "21",      label: "Companies" },
                  { value: "15,000+", label: "Workforce" },
                  { value: "28+",     label: "Sectors" },
                  { value: "PAN",     label: "India" },
                ].map((s) => (
                  <div key={s.label}>
                    <CountUp value={s.value} className="text-2xl md:text-3xl font-extrabold text-gold leading-none block mb-1" />
                    <div className="text-white/40 text-[10px] font-semibold tracking-widest uppercase">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/group"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/8 border border-white/15 text-white/80 font-semibold rounded-xl hover:bg-white/14 hover:text-white transition-colors text-sm"
                >
                  View The Group <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT — image mosaic */}
            <div className="hidden lg:grid grid-cols-2 gap-3">
              {[
                { img: railwayImg,   label: "Railways & Metro",    span: false },
                { img: defenceImg,   label: "Defence & Aerospace",  span: false },
                { img: greenImg,     label: "Green Energy",         span: false },
                { img: warehouseImg, label: "Industrial Supply",    span: false },
                { img: metroImg,     label: "Infrastructure & EPC", span: false },
                { img: careersImg,   label: "IT & Services",        span: false },
              ].map(({ img, label }) => (
                <div key={label} className="group relative h-44 rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.05_255)/85] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[11px] font-bold text-white tracking-wide">{label}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── TABBED COMPANIES ──────────────────────────────────────── */}
      <section id="domains-tabs" className="py-16 bg-[oklch(0.975_0.003_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="mb-10">
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Group Companies</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Explore Our Domains</h2>
            <p className="text-muted-foreground text-sm mt-2">Click any company to discover its specialized services and capabilities.</p>
          </div>

          {/* Tab pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {companies.map((co) => (
              <button
                key={co.id}
                onClick={() => setActiveId(co.id)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold border transition-all duration-200 whitespace-nowrap ${
                  activeId === co.id
                    ? "bg-gold text-gold-foreground border-gold shadow-sm"
                    : "bg-card border-border text-foreground/60 hover:border-gold/40 hover:text-foreground"
                }`}
              >
                {co.shortName}
              </button>
            ))}
          </div>

          {/* Active company panel */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            {/* Top color bar */}
            <div className="h-1 w-full" style={{ background: `linear-gradient(to right, ${active.color}, ${active.color}88)` }} />

            <div className="p-8 md:p-10">
              {/* Company header */}
              <div className="flex items-start gap-5 mb-8">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 text-white font-black text-lg"
                  style={{ background: active.color }}
                >
                  {String(active.id + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-foreground leading-tight mb-1">{active.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{active.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-xl bg-[oklch(0.975_0.003_250)] border border-border">
                {active.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl md:text-2xl font-extrabold text-foreground leading-none mb-1" style={{ color: active.color }}>{s.value}</div>
                    <div className="text-[11px] text-muted-foreground tracking-wider uppercase">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Services grid */}
              <div className="mb-8">
                <h4 className="text-sm font-extrabold text-foreground tracking-wider uppercase mb-4">Key Services & Capabilities</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {active.services.map((svc, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-background border border-border rounded-xl hover:border-gold/30 transition-colors group"
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: active.color }}
                      />
                      <span className="text-[13px] text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{svc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-border">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: active.color }}
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/get-quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold border border-border text-foreground/70 hover:border-gold/40 hover:text-foreground transition-colors bg-card"
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-muted-foreground ml-auto hidden md:block">
                  Company {String(active.id + 1).padStart(2, "0")} of {companies.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY JIGISHA GROUP ─────────────────────────────────────── */}
      <section className="py-24 bg-background border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:sticky lg:top-28">
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Why Jigisha</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
                One Group.<br />Every Domain.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-md">
                Across all 21 companies, the Jigisha Group brings the same fundamentals — unified governance, shared technology, and cross-sector synergy.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { value: "21", label: "Group Companies" },
                  { value: "28+", label: "Sectors Served" },
                  { value: "15,000+", label: "Workforce" },
                  { value: "15+", label: "Export Markets" },
                ].map((s) => (
                  <div key={s.label}>
                    <CountUp value={s.value} className="text-3xl font-extrabold text-gold block leading-none mb-1.5" />
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="divide-y divide-border">
              {[
                { icon: Globe,       title: "Unified Ecosystem",       description: "21 specialized subsidiaries share technology, talent, and infrastructure — creating synergies that no single-sector company can match." },
                { icon: TrendingUp,  title: "Cross-Sector Leverage",   description: "A project in Railways can draw on Engineering, Infotech, Logistics, and Finance simultaneously — from one group, under one SLA." },
                { icon: Users,       title: "Dedicated Leadership",     description: "Each domain has its own leadership team, P&L accountability, and growth mandate — backed by the full group's resources." },
                { icon: Zap,         title: "Speed at Scale",           description: "From concept to execution, Jigisha Group's integrated structure cuts lead times, approval chains, and friction across every vertical." },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="group flex items-start gap-5 py-8 first:pt-0 last:pb-0">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-gold/18 group-hover:border-gold/35 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-gold transition-colors duration-300">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Partner With Us</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Explore a Partnership?
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Whether you're a vendor, client, investor, or partner — one or more of our 21 companies is built for your sector.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/group"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-xl hover:bg-white/15 transition-colors text-sm border border-white/20"
            >
              View The Group <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
