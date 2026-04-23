import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink, Globe } from "lucide-react";
import { CountUp } from "../components/CountUp";
import warehouseImg from "../assets/products-warehouse.jpg";

export const Route = createFileRoute("/group")({
  component: GroupPage,
  head: () => ({
    meta: [
      { title: "19 Group Companies — Jigisha Group" },
      { name: "description", content: "Explore all 19 subsidiary companies under Jigisha Group — spanning Railways, Defence, IT, Agro, Green Energy and more." },
      { property: "og:title", content: "The Group — Jigisha Group of Companies" },
      { property: "og:description", content: "19 subsidiaries powering India's industrial ecosystem." },
    ],
  }),
});

const subsidiaries = [
  { id: "01", name: "Jigisha Enterprises",             type: "Holding & Strategic",    sector: ["Industrial Supermarket", "ICBMRO", "Procurement"],                   website: "www.jigisha.in",              desc: "Apex holding company for all 19 entities. Drives design-to-delivery industrial ecosystem across 7,500+ vendors and 3M+ products." },
  { id: "02", name: "Jigisha Railtech Pvt Ltd",         type: "Railway Technology",      sector: ["Railway", "Metro Rail", "Rolling Stock", "KAWACH"],                  website: "www.jigisharailtech.com",     desc: "R&D, manufacturing, supply and SITC of signaling, OHE, KAWACH, and rolling stock components for Indian Railways and Metro." },
  { id: "03", name: "Jigisha International Pvt Ltd",   type: "Global Trade",            sector: ["Import", "Export", "Cross-Border", "Joint Ventures"],                website: "www.jigisha.global",         desc: "International business operations — import/export, overseas logistics, contract manufacturing, and global partnerships across 15+ countries." },
  { id: "04", name: "Jigisha Defense Technologies",    type: "Defence & Aerospace",     sector: ["Defence Supply", "Military Components", "Strategic Tech"],           website: "",                           desc: "Supply of defence-grade components for Indian Armed Forces. Partnerships with international defence OEMs, aligned with Make in India." },
  { id: "05", name: "Jigisha Pharma & Healthcare",     type: "Pharmaceutical",          sector: ["Pharma Raw Materials", "Medical Devices", "Nutraceuticals"],         website: "",                           desc: "Pharmaceutical raw materials, APIs, medical devices, hospital procurement, cold-chain logistics with CDSCO and WHO-GMP compliance." },
  { id: "06", name: "Jigisha Retails Pvt Ltd",         type: "B2C & B2B Retail",        sector: ["E-Commerce", "Industrial Retail", "International Shipping"],         website: "www.jigisharetail.com",      desc: "Online retail of industrial products via B2C e-commerce with private-label products and international shipping capability." },
  { id: "07", name: "Jigisha Industries Pvt Ltd",      type: "Manufacturing",           sector: ["CNC Machining", "Fabrication", "Precision Engineering"],             website: "",                           desc: "CNC machining, fabrication, precision manufacturing, and industrial product development for OEM clients across sectors." },
  { id: "08", name: "Jigisha Infotech Pvt Ltd",        type: "IT Solutions",            sector: ["Industrial IT", "AI", "ERP/CRM", "IoT", "Cyber"],                   website: "www.jigishainfotech.com",    desc: "Digital transformation, JiSHAbot AI assistant, cybersecurity, cloud migration, and management of 25+ website ecosystem." },
  { id: "09", name: "Jigisha Agro Industries",         type: "Agriculture",             sector: ["Agricultural Inputs", "Agro Machinery", "FPO Supply"],               website: "www.jigishaagro.com",        desc: "Seeds, fertilizers, crop-care products, agro machinery, FPO procurement and supply chain support across rural India." },
  { id: "10", name: "Jigisha Electricals & Electronics", type: "Electrical",            sector: ["Electrical Products", "LED", "VFD", "Smart Sensors"],               website: "www.jigishaelectricals.com", desc: "Domestic, commercial, and industrial electrical goods — LED, VFD, smart sensors, and energy monitoring systems." },
  { id: "11", name: "Jigisha Automobiles Pvt Ltd",     type: "Automotive",              sector: ["Automobile Parts", "Fleet Supply", "EV Infrastructure"],             website: "www.jigishaautomobiles.com", desc: "Automobile parts, accessories, fleet supply, EV charging infrastructure components, and automotive consumables." },
  { id: "12", name: "Jigisha Green Pvt Ltd",           type: "Renewable Energy",        sector: ["Solar", "Bio-CNG", "ESG", "Green Tech"],                             website: "www.jigisha.green",          desc: "Solar pumps, Bio-CNG projects, ESG advisory, green infrastructure, waste-to-energy, and energy efficiency solutions." },
  { id: "13", name: "Jigisha Technologies Pvt Ltd",    type: "Hi-Tech",                 sector: ["Semiconductors", "Robotics", "Advanced Materials"],                  website: "www.jigisha.technology",     desc: "OSAT semiconductor packaging, graphene-based materials, industrial automation, robotics, and smart manufacturing solutions." },
  { id: "14", name: "Jigisha Media Vision Pvt Ltd",    type: "Media & Marketing",       sector: ["Marketing", "Media", "Content", "Events", "PR"],                    website: "www.jigisha.media",          desc: "Integrated marketing, digital media production, In-News platform, corporate communications, and PR services." },
  { id: "15", name: "Jigisha Engineering Pvt Ltd",     type: "EPC & Infrastructure",    sector: ["EPC", "Civil", "Industrial Plants", "Marine"],                       website: "www.jigisha.engineering",    desc: "Engineering, Procurement, Construction for industrial plants, railway stations, bridges, and infrastructure projects." },
  { id: "16", name: "Jigisha Envirocare Pvt Ltd",      type: "Environment",             sector: ["Waste Management", "Water Treatment", "EHS", "ISO"],                 website: "www.jigishaenviro.com",      desc: "ETP/STP design, solid waste management, air pollution control, environmental audits, and ISO certification consulting." },
  { id: "17", name: "Jigisha Infin Pvt Ltd",           type: "Finance & Consulting",    sector: ["Trade Finance", "Project Finance", "Risk Advisory"],                 website: "",                           desc: "Strategy and project management consultancy, trade and project finance advisory, risk management, and financial compliance." },
  { id: "18", name: "Jigisha Logistics Pvt Ltd",       type: "Logistics",               sector: ["Freight", "Warehousing", "3PL/4PL", "Cold Chain"],                  website: "",                           desc: "Multimodal freight, project logistics, warehousing, cold chain, hazardous goods transport, and fleet management." },
  { id: "19", name: "Jigisha Industrial Services",     type: "Services",                sector: ["Installation", "Maintenance", "AMC", "Manpower"],                   website: "www.jigisha.services",       desc: "Multi-disciplinary industrial services — electrical, mechanical, fabrication, HSE compliance, and 1,000+ service centres." },
];

const heroStats = [
  { value: "19", label: "Subsidiaries" },
  { value: "28+", label: "Sectors" },
  { value: "7,500+", label: "Vendors" },
  { value: "PAN", label: "India" },
];

function GroupPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1220]">
        {/* Background Layers */}
        <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-75">
          <img src={warehouseImg} alt="Warehouse background" className="w-full h-full object-cover" />
        </div>
        
        {/* Technical Blueprint Grid (Neutral) */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
               backgroundSize: '100px 100px' 
             }} 
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-32">
          
          {/* LEFT SIDE: Content */}
          <div className="flex-1 text-left w-full">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 bg-gold/10 border border-gold/25 rounded-full px-4 py-2 mb-6 lg:mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-[10px] lg:text-[11px] font-black tracking-[0.3em] uppercase">Group Identity Portfolio</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.9] lg:leading-[0.85] tracking-tighter mb-8">
              19<br />
              <span className="text-gold">GROUP</span><br />
              <span className="text-white/30 text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase">Subsidiaries</span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 lg:w-20 bg-gold/70" />
              <div className="h-px flex-1 max-w-[150px] lg:max-w-sm bg-white/10" />
            </div>

            {/* Description */}
            <p className="text-white/50 text-base lg:text-xl max-w-xl leading-relaxed mb-10 lg:mb-12 font-medium">
              A unified conglomerate of nineteen specialized entities serving India's most critical sectors with <span className="text-white/80">unmatched precision and scale</span>.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 w-full md:w-fit">
              {heroStats.map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col p-4 lg:p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:border-gold/40 hover:bg-white/10 transition-all duration-500"
                >
                  <CountUp value={s.value} className="text-2xl lg:text-3xl font-black text-gold leading-none" />
                  <span className="text-white/30 text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.2em] mt-2 lg:mt-3">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Editorial Visual */}
          <div className="flex-1 flex justify-center lg:justify-end relative w-full mt-12 lg:mt-0">
            <div className="relative w-full max-w-[320px] md:max-w-[420px] aspect-[4/5] lg:h-[520px] shrink-0">
               {/* Main image card */}
               <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/5 group">
                 <img src={warehouseImg} className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700" alt="Industrial Hub" />
                 <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
               </div>
               
               {/* Floating accent badge */}
               <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-32 h-32 lg:w-48 lg:h-48 bg-gold rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-8 flex flex-col justify-end shadow-2xl border-4 border-[#0b1220]">
                  <div className="text-navy font-black text-2xl lg:text-4xl mb-1">19</div>
                  <div className="text-navy/70 text-[8px] lg:text-[9px] font-bold uppercase tracking-widest leading-tight">Business<br/>Verticals</div>
               </div>

               {/* Decorative frame */}
               <div className="absolute -top-4 -left-4 lg:-top-6 -left-6 w-20 h-20 lg:w-32 lg:h-32 border-t-4 border-l-4 border-gold/40 rounded-tl-[2rem] lg:rounded-tl-[3rem]" />
            </div>
          </div>

        </div>
      </section>

      {/* ── COMPANY GRID ─────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">All Subsidiaries</h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block text-right max-w-xs leading-relaxed">
              Each company operates as a dedicated vertical with its own team, operations and growth mandate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {subsidiaries.map((s) => (
              <CompanyCard key={s.id} company={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <img src={warehouseImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gold/75" />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-navy/60 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Collaborate With Us</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy leading-tight mb-5">
            Partner With Any Jigisha Entity
          </h2>
          <p className="text-navy/65 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Whether you're a vendor, client, investor, or potential partner — our group companies are ready to explore synergies.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/domains"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/30 border border-navy/20 text-navy font-semibold rounded-xl hover:bg-white/45 transition-colors text-sm"
            >
              All Domains <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── COMPANY CARD ────────────────────────────────────────────────────── */
function CompanyCard({ company }: { company: typeof subsidiaries[0] }) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/40 hover:shadow-2xl transition-all duration-400">
      {/* Top accent bar */}
      <div className="h-0.5 w-full bg-linear-to-r from-gold/60 via-gold to-gold/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="p-7">
        <div className="flex items-start gap-5">
          {/* Index badge */}
          <div className="shrink-0 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center border border-white/5 group-hover:border-gold/30 group-hover:bg-navy/80 transition-all duration-300">
              <span className="text-gold font-extrabold text-sm leading-none">{company.id}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start gap-2 mb-2">
              <h3 className="text-base font-extrabold text-card-foreground group-hover:text-gold transition-colors duration-300 leading-tight">
                {company.name}
              </h3>
            </div>

            <span className="inline-block text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gold/8 text-gold border border-gold/20 mb-3">
              {company.type}
            </span>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {company.desc}
            </p>

            {/* Sector tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {company.sector.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/15 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Website */}
            {company.website ? (
              <a
                href={`https://${company.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary/60 hover:text-gold transition-colors duration-200 group/link"
              >
                <Globe className="w-3 h-3" />
                {company.website}
                <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground/40">
                <Globe className="w-3 h-3" />
                Coming soon
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Right edge gold line on hover */}
      <div className="absolute right-0 top-0 bottom-0 w-0.75 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />
    </div>
  );
}
