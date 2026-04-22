import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Users, Zap, Globe, Rocket } from "lucide-react";
import warehouseImg from "../assets/products-warehouse.jpg";

export const Route = createFileRoute("/domains")({
  component: DomainsPage,
  head: () => ({
    meta: [
      { title: "Our Group Companies — Jigisha Group" },
      { name: "description", content: "Explore all 21 specialized companies under Jigisha Group, from Railways and Defence to IT, Agro, Green Energy and more." },
      { property: "og:title", content: "Our Group Companies — Jigisha Group" },
      { property: "og:description", content: "21 specialized companies. Unified excellence." },
    ],
  }),
});

type Stat = { value: string; label: string };
type Company = {
  id: number;
  name: string;
  shortName: string;
  description: string;
  color: string;
  logo: string;
  services: string[];
  stats: Stat[];
};

const companies: Company[] = [
  {
    id: 0,
    name: "Jigisha Infin Corp Pvt. Ltd.",
    shortName: "Jigisha Infin Corp Pvt. Ltd.",
    description: "Financial services, investment advisory, and insurance consulting.",
    color: "#4CAF50",
    logo: "INFIN.png",
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
    shortName: "Jigisha International Pvt. Ltd.",
    description: "Global operations arm managing international expansion, trade, and cross-border partnerships.",
    color: "#0066cc",
    logo: "INTERNATIONAL.png",
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
    shortName: "Jigisha Retails Pvt. Ltd.",
    description: "Omni-channel retail and e-commerce platforms for consumer and industrial markets.",
    color: "#4CAF50",
    logo: "RETAIL.png",
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
    shortName: "Jigisha Railtech Pvt. Ltd.",
    description: "End-to-end railway, metro, and bullet train solutions including manufacturing and maintenance.",
    color: "#FF5722",
    logo: "RAILTECH.png",
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
    shortName: "Jigisha Infotech Pvt. Ltd.",
    description: "IT solutions, software development, IoT, and digital transformation services.",
    color: "#9C27B0",
    logo: "INFOTECH.png",
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
    shortName: "Jigisha Industrial Services Pvt. Ltd.",
    description: "Comprehensive industrial support, maintenance, and service management.",
    color: "#795548",
    logo: "JISPL.png",
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
    shortName: "Jigisha Industries Pvt. Ltd.",
    description: "Core manufacturing and diversified industrial production across multiple sectors.",
    color: "#607D8B",
    logo: "INDUSTRIES.png",
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
    shortName: "Jigisha Engineering Pvt. Ltd.",
    description: "Engineering, design, and turnkey project execution for industrial and infrastructure sectors.",
    color: "#E91E63",
    logo: "ENGINEERING.png",
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
    shortName: "Jigisha Agro Industries Pvt. Ltd.",
    description: "Modern agriculture, food processing, and agri-tech solutions.",
    color: "#8BC34A",
    logo: "AGRO.png",
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
    shortName: "Jigisha Electricals & Electronics Pvt. Ltd.",
    description: "Electrical systems, electronics design, and smart technology solutions.",
    color: "#FFC107",
    logo: "JE.png",
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
    shortName: "Jigisha Automobiles Pvt. Ltd.",
    description: "Vehicle manufacturing, automotive components, and sustainable mobility solutions.",
    color: "#2196F3",
    logo: "AUTOMOBILES.png",
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
    shortName: "Jigisha Enterprises",
    description: "Holding company providing strategic oversight, financial management, and governance across all group subsidiaries.",
    color: "#003366",
    logo: "JGC.png",
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
    shortName: "Jigisha Technologies Pvt. Ltd.",
    description: "High-tech innovations including semiconductors, graphene, and advanced materials.",
    color: "#9C27B0",
    logo: "TECHNOLOGIES.png",
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
    shortName: "Jigisha Logistics Pvt. Ltd.",
    description: "Integrated logistics, supply chain, and transportation services.",
    color: "#FF9800",
    logo: "LOGISTICS.png",
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
    shortName: "Jigisha Media Vision Pvt. Ltd.",
    description: "Media, advertising, creative communications, and event management.",
    color: "#E91E63",
    logo: "MEDIA.png",
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
    shortName: "Jigisha Pharma & Healthcare Pvt. Ltd.",
    description: "Pharmaceuticals, medical devices, and comprehensive healthcare solutions.",
    color: "#00BCD4",
    logo: "PHARMA.png",
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
    shortName: "Jigisha Envirocare Pvt. Ltd.",
    description: "Environmental solutions, sustainability services, and green technology.",
    color: "#4CAF50",
    logo: "ENVIROCARE.png",
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
    shortName: "Jigisha Defense Technologies Pvt. Ltd.",
    description: "Defense research, manufacturing, and systems integration for armed forces.",
    color: "#3F51B5",
    logo: "DEFENSE.png",
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
    shortName: "Jigisha Green Pvt. Ltd.",
    description: "Renewable energy, sustainability projects, and green infrastructure.",
    color: "#8BC34A",
    logo: "GREEN.png",
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
    shortName: "Jigisha Consultancy Pvt. Ltd.",
    description: "Strategic advisory, project management, and business consulting services.",
    color: "#795548",
    logo: "JGC.png",
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
    shortName: "Jigisha Infra Pvt. Ltd.",
    description: "Infrastructure development, engineering, and project execution.",
    color: "#FF5722",
    logo: "INFRA.png",
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

const advantages = [
  {
    icon: Users,
    title: "Integrated Expertise",
    desc: "Access specialized knowledge across 21 companies through single-point coordination.",
  },
  {
    icon: Zap,
    title: "Cross-Company Synergy",
    desc: "Seamless collaboration between companies for complex, multi-disciplinary projects.",
  },
  {
    icon: Globe,
    title: "Global-Local Execution",
    desc: "International strategy combined with 2,000+ local branches for ground-level execution.",
  },
  {
    icon: Rocket,
    title: "Innovation Pipeline",
    desc: "R&D from tech companies directly feeds into manufacturing and infrastructure subsidiaries.",
  },
];

function DomainsPage() {
  const [activeId, setActiveId] = useState(0);
  const active = companies[activeId];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative text-white text-center overflow-hidden py-20">
        <img src={warehouseImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(0,51,102,0.88) 0%, rgba(0,102,204,0.82) 100%)" }}
        />
        <div className="relative max-w-5xl mx-auto px-4 md:px-8">
          <span className="inline-block bg-white/15 px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-5">
            Jigisha Group Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
            21 Specialized Companies.<br />Unified Excellence.
          </h1>
          <p className="text-white/90 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Explore the complete ecosystem of Jigisha Group's diversified business verticals.
            Click on any company to discover its specialized services and capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-10 mt-2">
            {[
              { value: "21",      label: "Companies" },
              { value: "15,000+", label: "Professionals" },
              { value: "2,000+",  label: "Locations" },
              { value: "30+",     label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="text-white/80 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANIES TABS ───────────────────────────────────────── */}
      <section id="domains-tabs" className="py-10" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-white rounded-xl overflow-hidden" style={{ boxShadow: "0 5px 20px rgba(0,0,0,0.08)" }}>

            {/* 3-part header: logo | heading | logo */}
            <div
              className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 p-5 border-b"
              style={{
                background: "linear-gradient(135deg, rgba(0,51,102,0.05) 0%, rgba(0,102,204,0.03) 100%)",
                borderColor: "#e2e8f0",
                minHeight: 80,
              }}
            >
              <div className="flex-1 flex items-center justify-start">
                <img src="/all_company/JGC.png" alt="Jigisha Group" className="object-contain" style={{ maxHeight: 64 }} />
              </div>
              <div className="flex-1 flex items-center justify-center">
                <h2
                  className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-center"
                  style={{ color: "#0066cc" }}
                >
                  Our Group Companies
                </h2>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <img src="/all_company/GO GLOBAL.png" alt="Mission Go Global" className="object-contain" style={{ maxHeight: 64 }} />
              </div>
            </div>

            {/* Subtitle */}
            <div className="px-5 py-3 text-center border-b" style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}>
              <p className="text-sm font-medium" style={{ color: "#718096" }}>
                Select a company to view its specialized services
              </p>
            </div>

            {/* Pill tabs */}
            <div className="flex flex-wrap gap-2 p-4 border-b justify-center" style={{ borderColor: "#e2e8f0" }}>
              {companies.map((c) => {
                const isActive = c.id === activeId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveId(c.id)}
                    className="px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      border: `2px solid ${isActive ? c.color : "#e2e8f0"}`,
                      backgroundColor: isActive ? c.color : "transparent",
                      color: isActive ? "#fff" : "#4a5568",
                      boxShadow: isActive ? "0 4px 12px rgba(0,0,0,0.12)" : undefined,
                    }}
                  >
                    {c.shortName}
                  </button>
                );
              })}
            </div>

            {/* Active company content */}
            <div className="p-6 md:p-8">

              {/* Company header */}
              <div className="flex flex-col md:flex-row items-start gap-5 mb-6">
                <div className="w-16 h-16 flex items-center justify-center shrink-0 bg-white">
                  <img
                    src={`/all_company/${active.logo}`}
                    alt={active.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 leading-tight"
                    style={{ color: "rgba(174,151,19,0.9)" }}
                  >
                    {active.name.toUpperCase()}
                  </h3>
                  <p className="leading-relaxed" style={{ color: "#4a5568" }}>{active.description}</p>
                </div>
              </div>

              {/* Stats */}
              <div
                className="flex flex-wrap gap-5 p-5 rounded-xl mb-8"
                style={{ background: "#f8fafc" }}
              >
                {active.stats.map((s, i) => (
                  <div key={i} className="flex-1 text-center" style={{ minWidth: 100 }}>
                    <span className="block text-2xl font-bold text-black mb-1">{s.value}</span>
                    <span className="text-sm" style={{ color: "#718096" }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Services grid */}
              <h4 className="text-lg font-semibold mb-5" style={{ color: "#003366" }}>
                Core Services & Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {active.services.map((service, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border transition-all duration-300 hover:-translate-y-0.5"
                    style={{ borderColor: "#e2e8f0", boxShadow: "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <div
                      className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${active.color}20` }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: active.color }} />
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{service}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-6 border-t" style={{ borderColor: "#e2e8f0" }}>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 text-white font-semibold rounded-md text-sm hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: active.color, minWidth: 140 }}
                >
                  View Company Details <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white font-semibold rounded-md text-sm transition-colors hover:bg-gray-50"
                  style={{ color: "#0066cc", border: "2px solid #0066cc", minWidth: 140 }}
                >
                  Contact Now
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ───────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#003366" }}>
              The Jigisha Group Advantage
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "#718096" }}>
              Why our integrated multi-company structure delivers superior value
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                  style={{ background: "linear-gradient(135deg, #0066cc 0%, #003366 100%)" }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2" style={{ color: "#003366" }}>{title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#4a5568" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section
        className="py-16 text-white text-center"
        style={{ background: "linear-gradient(135deg, #003366 0%, #0066cc 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with the Complete Ecosystem
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto px-2">
            Whether you need a single service or a comprehensive multi-company solution,
            our integrated structure ensures seamless delivery across the value chain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white font-semibold rounded-md text-sm hover:bg-gray-50 transition-colors"
              style={{ color: "#0066cc", minWidth: 200 }}
            >
              Discuss Your Requirements
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-md text-sm border-2 border-white text-white transition-all hover:bg-white"
              style={{ minWidth: 200 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#0066cc"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "white"; }}
            >
              Learn About Our Group
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
