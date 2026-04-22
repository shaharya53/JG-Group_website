import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "../components/CountUp";
import { ArrowRight, ChevronRight, Train, Building2, Shield, Factory, Zap, Globe, Bot, Briefcase, Phone, Mail, MapPin, Package, Users, Building, Wrench } from "lucide-react";
import { EcosystemDiagram } from "../components/EcosystemDiagram";
import heroImg from "../assets/hero-industrial.jpg";
import railwayImg from "../assets/railway-services.jpg";
import metroImg from "../assets/metro-rail.jpg";
import defenceImg from "../assets/defence-tech.jpg";
import greenImg from "../assets/green-energy.jpg";
import aboutImg from "../assets/about-office.jpg";
import careersImg from "../assets/careers-team.jpg";
import productsImg from "../assets/products-warehouse.jpg";

import { MarqueeTicker } from "../components/MarqueeTicker";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const heroSideNav = [
  { label: "About Us", to: "/about" },
  { label: "The Group", to: "/group" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

const heroStats = [
  { value: "19", label: "Group Companies" },
  { value: "7,500+", label: "Vendors" },
  { value: "28+", label: "Domains" },
  { value: "24×7", label: "Support" },
];

const partnerStats = [
  { icon: Package, value: "3M+", label: "Products" },
  { icon: Users, value: "7,500+", label: "Vendors" },
  { icon: Building2, value: "19", label: "Companies" },
  { icon: Globe, value: "28+", label: "Domains" },
];

const numberStats = [
  { value: "19+", label: "Group Companies" },
  { value: "3M+", label: "Million+ Products" },
  { value: "50+", label: "Approved Frameworks" },
  { value: "12+", label: "Digital Platforms" },
  { value: "7,500+", label: "Approved Vendors" },
  { value: "28+", label: "Industry Domains" },
];

const services = [
  { 
    tag: "FLAGSHIP SERVICE", 
    img: railwayImg, 
    icon: Train, 
    title: "Services for Indian Railways", 
    desc: "Complete railway infrastructure solutions including ICBMRO for coaches, wagons & locos, OHE SITC, KAWACH, S&T, Gati Shakti smart systems, and PMU support.", 
    to: "/services/railway" 
  },
  { 
    tag: "METRO RAIL", 
    img: metroImg, 
    icon: Building2, 
    title: "Metro Rail Services", 
    desc: "End-to-end metro rail service suite — rolling stock ICBMRO, E&M systems, fare collection, AFC, CBTC, and station electrification.", 
    to: "/services/metro-rail" 
  },
  { 
    tag: "INDUSTRIAL", 
    img: productsImg, 
    icon: Factory, 
    title: "Industrial Services", 
    desc: "CNC machining, precision fabrication, MRO, industrial automation, and manufacturing solutions for global majors.", 
    to: "/services/industrial" 
  },
  { 
    tag: "SPECIALIST SERVICE", 
    img: greenImg, 
    icon: Wrench, 
    title: "ICBMRO Operations", 
    desc: "Inspection, Condition-Based Monitoring, Repair & Overhaul — reducing unplanned downtime for critical assets.", 
    to: "/services/icbmro" 
  },
  { 
    tag: "PROJECTS", 
    img: aboutImg, 
    icon: Building, 
    title: "EPC Projects", 
    desc: "Full Engineering, Procurement & Construction for railway stations, metro depots, industrial plants, and commercial projects.", 
    to: "/services/commercial" 
  },
  { 
    tag: "LONG-TERM CONTRACTS", 
    img: railwayImg, 
    icon: Shield, 
    title: "AMC Contracts", 
    desc: "Annual Maintenance Contracts for continuous, uninterrupted performance of railway, metro, and industrial plant operations.", 
    to: "/services/amc" 
  }
];

const domains = [
  { label: "Railway", img: railwayImg, to: "/industries/indian-railways" },
  { label: "Metro Rail", img: metroImg, to: "/industries/metro-rail" },
  { label: "Aerospace & Defence", img: defenceImg, to: "/industries/aerospace-defence" },
  { label: "Energy", img: greenImg, to: "/industries/energy-power" },
  { label: "Healthcare", img: aboutImg, to: "/industries/healthcare-pharma" },
  { label: "Agriculture", img: productsImg, to: "/industries/agriculture" },
  { label: "Construction", img: careersImg, to: "/industries/construction-epc" },
  { label: "Manufacturing", img: railwayImg, to: "/industries/manufacturing" },
  { label: "Logistics", img: metroImg, to: "/industries/logistics" },
  { label: "Infotech", img: defenceImg, to: "/industries/infotech" },
  { label: "Other Energy", img: greenImg, to: "/industries/energy-power" },
  { label: "Others", img: productsImg, to: "/industries" },
];

const companies = [
  { name: "Jigisha Railtech Pvt Ltd", label: "Railtech" },
  { name: "Jigisha International Pvt Ltd", label: "International" },
  { name: "Jigisha Defense Technologies", label: "Defense" },
  { name: "Jigisha Pharma & Healthcare", label: "Pharma" },
  { name: "Jigisha Retails Pvt Ltd", label: "Retails" },
  { name: "Jigisha Industries Pvt Ltd", label: "Industries" },
  { name: "Jigisha Infotech Pvt Ltd", label: "Infotech" },
  { name: "Jigisha Agro Industries", label: "Agro" },
  { name: "Jigisha Electricals & Electronics", label: "Electricals" },
];

const newsArticles = [
  {
    img: railwayImg,
    date: "Mar 2024",
    title: "Jigisha Railtech Commissions KAWACH System Statewide to Bhopal Railways",
    tag: "Railway",
  },
  {
    img: metroImg,
    date: "Feb 2024",
    title: "Jigisha Group Expands to 3 New States, Strengthening Regional Hub Network",
    tag: "Expansion",
  },
  {
    img: defenceImg,
    date: "Jan 2024",
    title: "On Focus: Industrial Procurement Digitalisation — The Jigisha Model Story",
    tag: "Digital",
  },
];

function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden bg-[oklch(0.1_0.05_250)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Industrial infrastructure"
            className="w-full h-full object-cover opacity-25"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.1_0.05_250)] via-[oklch(0.12_0.05_250)/90] to-[oklch(0.15_0.05_250)/60]" />
        </div>

        {/* Top announcement bar */}
        <div className="relative z-10 bg-gold text-gold-foreground text-center text-xs font-semibold py-1.5 tracking-wide">
          India's Largest Industrial Supermarket — 3M+ Products · 7,500+ Vendors · 19 Group Companies &nbsp;|&nbsp; Serving Industries With Honesty, Pride &amp; Honour
        </div>

        {/* Main hero content */}
        <div className="relative z-10 flex flex-1 max-w-7xl mx-auto w-full px-4 md:px-8">
          {/* Left content */}
          <div className="flex-1 flex flex-col justify-center py-20 pr-0 lg:pr-16">
            <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">The Industrial Universe</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[0.9] mb-6">
              The Industrial<br />
              <span className="text-gold-gradient">Universe</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              India's Most Comprehensive Industrial Partner — supplying, servicing and building across Railways, Metro, Defence, Manufacturing, Energy and 28+ more domains.
            </p>

            {/* Hero stat pills removed as they are now on the right */}

            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Right side: Stats Grid */}
          <div className="hidden lg:flex flex-1 items-center justify-end py-20">
            <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
              {/* Top card: Full Width */}
              <div className="col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CountUp value="3M+" className="relative z-10 block text-7xl font-black text-gold mb-4 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10 text-white/60 text-sm font-bold tracking-[0.2em] uppercase">Industrial Products</span>
              </div>
              
              {/* Row 2: Two Cards */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CountUp value="19" className="relative z-10 block text-4xl font-black text-gold mb-2 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">Group Companies</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CountUp value="7,500+" className="relative z-10 block text-4xl font-black text-gold mb-2 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">Approved Vendors</span>
              </div>

              {/* Row 3: Two Cards */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CountUp value="28+" className="relative z-10 block text-4xl font-black text-gold mb-2 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">Digital Portals</span>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-500 group shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CountUp value="24×7" className="relative z-10 block text-4xl font-black text-gold mb-2 group-hover:scale-105 transition-transform duration-500" />
                <span className="relative z-10 text-white/60 text-xs font-bold tracking-[0.15em] uppercase">Operations Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="relative z-10 flex justify-center pb-6">
          <div className="w-px h-12 bg-linear-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      <MarqueeTicker />

      {/* ── INDIA'S MOST COMPREHENSIVE PARTNER ───────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left text */}
          <div>
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-6">
              India's Most Comprehensive<br />
              <span className="text-gold">Industrial Partner</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Jigisha Group of Companies is a rapidly growing, technology-enabled industrial conglomerate headquartered in Bhopal, Madhya Pradesh. With a supply network spanning 3 million products and 7,500+ vendors, we serve as the single-source industrial procurement partner for India's most critical sectors.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From Railways and Metro Rail to Aerospace, Defence, Healthcare, Energy, and Agriculture — we don't just supply. <strong>We Buy, We Sell, We Maintain, We Build, We Design, We Deliver.</strong>
            </p>

            {/* Mini stat icons */}
            

            <div className="flex gap-4">
              <Link to="/about" className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                Know More <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/group" className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy text-navy font-semibold rounded-lg hover:bg-navy/5 transition-colors text-sm">
                Our Companies
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
              <img src={aboutImg} alt="Jigisha Group office" className="w-full h-full object-cover" width={800} height={600} loading="lazy" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-navy text-white rounded-xl px-5 py-3 shadow-xl">
              <CountUp value="28+" className="text-2xl font-extrabold text-gold leading-none" />
              <div className="text-xs opacity-70 mt-0.5">Industry Domains</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-gold text-gold-foreground rounded-xl px-5 py-3 shadow-xl">
              <div className="text-2xl font-extrabold leading-none">24×7</div>
              <div className="text-xs opacity-80 mt-0.5">Always Open</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE NUMBERS ──────────────────────────────────────────── */}
      <section className="bg-navy-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gold text-xs font-bold tracking-widest uppercase mb-2">By The Numbers</p>
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-12">The Numbers Behind The Industrial Universe</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {numberStats.map(s => (
              <div key={s.label} className="text-center">
                <CountUp value={s.value} className="text-3xl md:text-4xl font-extrabold text-gold mb-1" />
                <div className="text-xs text-white/60 leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE INDUSTRIAL SERVICE PORTFOLIO ────────────────── */}
      <section className="py-20 bg-[oklch(0.97_0.004_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gold text-xs font-bold tracking-widest uppercase mb-2">What We Do</p>
          <h2 className="text-center text-navy text-2xl md:text-3xl font-bold mb-3">Complete Industrial Service Portfolio</h2>
          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto mb-12">
            End-to-end industrial solutions across India's most critical sectors — from procurement to execution.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[repeat(3,minmax(280px,auto))] gap-4">
            {/* 1. Services for Indian Railways (Tall) */}
            <Link
              to={services[0].to as any}
              className="lg:row-span-2 group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block"
            >
              <img src={services[0].img} alt={services[0].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {(() => {
                    const Icon = services[0].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{services[0].tag}</div>
                  <h3 className="text-white text-2xl font-black mb-3">{services[0].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">{services[0].desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* 2. Metro Rail Services (Wide) */}
            <Link
              to={services[1].to as any}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block"
            >
              <img src={services[1].img} alt={services[1].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="relative p-8 h-full flex flex-col justify-between">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {(() => {
                    const Icon = services[1].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{services[1].tag}</div>
                  <h3 className="text-white text-xl font-black mb-2">{services[1].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-lg mb-4">{services[1].desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Middle Row Squares: 3. Industrial and 4. ICBMRO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {/* Industrial */}
               <Link
                to={services[2].to as any}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block min-h-[300px]"
              >
                <img src={services[2].img} alt={services[2].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    {(() => {
                      const Icon = services[2].icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-gold text-[9px] font-bold tracking-[0.2em] uppercase mb-2">{services[2].tag}</div>
                    <h3 className="text-white text-lg font-black mb-2">{services[2].title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3">{services[2].desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
              {/* ICBMRO */}
              <Link
                to={services[3].to as any}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block min-h-[300px]"
              >
                <img src={services[3].img} alt={services[3].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="relative p-6 h-full flex flex-col justify-between">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    {(() => {
                      const Icon = services[3].icon;
                      return <Icon className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <div>
                    <div className="text-gold text-[9px] font-bold tracking-[0.2em] uppercase mb-2">{services[3].tag}</div>
                    <h3 className="text-white text-lg font-black mb-2">{services[3].title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3">{services[3].desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Bottom Row: 5. EPC Projects and 6. AMC Contracts */}
            <Link
              to={services[4].to as any}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block h-full"
            >
              <img src={services[4].img} alt={services[4].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="relative p-8 flex flex-col justify-between h-full min-h-[200px]">
                <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                  {(() => {
                    const Icon = services[4].icon;
                    return <Icon className="w-5 h-5 text-navy" />;
                  })()}
                </div>
                <div>
                  <div className="text-white/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{services[4].tag}</div>
                  <h3 className="text-white text-xl font-black mb-2">{services[4].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{services[4].desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>

            <Link
              to={services[5].to as any}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-2xl transition-all duration-500 block h-full"
            >
              <img src={services[5].img} alt={services[5].title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="relative p-8 flex flex-col justify-between h-full min-h-[200px]">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {(() => {
                    const Icon = services[5].icon;
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <div>
                  <div className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{services[5].tag}</div>
                  <h3 className="text-white text-xl font-black mb-2">{services[5].title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{services[5].desc}</p>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-gold transition-colors">
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 28+ DOMAINS. ONE INDUSTRIAL UNIVERSE ─────────────────── */}
      <section className="py-20 bg-[oklch(0.12_0.05_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <p className="text-center text-gold text-xs font-bold tracking-widest uppercase mb-2">Industries We Serve</p>
          <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-12">
            28+ Domains. One Industrial Universe.
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {domains.map(d => (
              <Link
                key={d.label}
                to={d.to as any}
                className="relative group rounded-xl overflow-hidden aspect-4/3 cursor-pointer"
              >
                <img src={d.img} alt={d.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter grayscale group-hover:grayscale-0" loading="lazy" />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="text-white text-xs font-semibold">{d.label}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/industries" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── THE JIGISHA ECOSYSTEM ─────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Our Universe</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy">The Jigisha Ecosystem</h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              10 interconnected verticals forming India's most comprehensive industrial group — hover to explore
            </p>
          </div>
          <EcosystemDiagram />
          <div className="mt-10 text-center">
            <Link to="/group" className="inline-flex items-center gap-2 px-8 py-4 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg">
              Explore All 19 Enterprises <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MEET JISHAbot ─────────────────────────────────────────── */}
      <section className="bg-[oklch(0.14_0.05_250)] py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-gold/20 text-gold border border-gold/30 rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <Bot className="w-3.5 h-3.5" /> AI-Powered Assistant
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              Meet JISHAbot —<br />Your Industrial AI Assistant
            </h2>
            <p className="text-white/60 leading-relaxed mb-4">
              JISHAbot is our intelligent industrial assistant powered by AI. Ask it anything — product availability, procurement queries, vendor sourcing, or service requests.
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Instant product &amp; vendor lookup across 3M+ items",
                "Railway &amp; Metro spare part identification",
                "Procurement enquiry automation",
                "Service request routing &amp; tracking",
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
              Try JISHAbot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: chat preview */}
          <div className="bg-[oklch(0.1_0.04_250)] rounded-2xl border border-white/10 p-5 shadow-2xl">
            <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <Bot className="w-4 h-4 text-gold-foreground" />
              </div>
              <div>
                <div className="text-white text-sm font-semibold">JISHAbot</div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  <span className="text-xs text-white/40">Online</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 min-h-50">
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-gold" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/80 max-w-xs">
                  Hello! I'm JISHAbot. How can I assist you with your industrial procurement today?
                </div>
              </div>
              <div className="flex gap-3 justify-end">
                <div className="bg-gold/20 border border-gold/30 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-white/80 max-w-xs">
                  I need Railway buffer stock components for DEMU coaches.
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-gold" />
                </div>
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-white/80 max-w-xs">
                  Found 47 RDSO-approved buffer components for DEMU. Shall I connect you with our Railway procurement team?
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5">
                <span className="text-white/30 text-sm flex-1">Type your query…</span>
                <button className="w-7 h-7 rounded-lg bg-gold flex items-center justify-center shrink-0">
                  <ArrowRight className="w-3.5 h-3.5 text-gold-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUILD INDIA'S INDUSTRIAL FUTURE ──────────────────────── */}
      <section className="bg-gold-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-gold-foreground/70 text-xs font-bold tracking-widest uppercase mb-2">Join Our Team</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gold-foreground leading-tight">
              Build India's Industrial<br />Future With Us
            </h2>
            <p className="text-gold-foreground/70 mt-2 text-sm max-w-md">
              Be part of a growing industrial conglomerate shaping the future of Railways, Defence, Manufacturing and more.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link to="/careers" className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
              View Openings <Briefcase className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/30 text-gold-foreground font-semibold rounded-lg hover:bg-white/30 transition-colors text-sm">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── FROM THE INDUSTRIAL UNIVERSE (News) ──────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Latest Updates</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">From The Industrial Universe</h2>
            </div>
            <Link to="/about" className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold transition-colors">
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsArticles.map(article => (
              <div key={article.title} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1 cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-navy/80 text-gold text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">{article.tag}</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400 mb-2">{article.date}</p>
                  <h3 className="text-sm font-semibold text-navy leading-snug group-hover:text-gold transition-colors">{article.title}</h3>
                  <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-navy/60 group-hover:text-gold transition-colors">
                    Read More <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GET IN TOUCH ─────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.97_0.004_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left contact info */}
          <div>
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Reach Us</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Get In Touch</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              We're available 24 hours, 7 days a week. Reach out for procurement enquiries, vendor registration, service requests or general information.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy mb-0.5">Head Office</div>
                  <div className="text-sm text-gray-500">F 904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, MP – 462023</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy mb-0.5">Phone</div>
                  <div className="text-sm text-gray-500">(+91) 8989167888</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy mb-0.5">Email</div>
                  <div className="text-sm text-gray-500">info@jigisha.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right quick enquiry form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-8">
            <h3 className="text-lg font-bold text-navy mb-6">Quick Enquiry</h3>
            <form
              onSubmit={e => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                <input type="email" placeholder="your@email.com" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Subject</label>
                <input type="text" placeholder="How can we help you?" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message</label>
                <textarea rows={4} placeholder="Describe your requirement…" className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full py-3 bg-navy text-white font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
