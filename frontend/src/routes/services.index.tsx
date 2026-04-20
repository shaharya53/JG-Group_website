import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wrench, ShieldCheck, Zap, Globe2, Clock } from "lucide-react";
import { servicesData } from "../data/servicesData";
import type { Service } from "../data/servicesData";
import { CountUp } from "../components/CountUp";
import railwayImg from "../assets/railway-services.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Jigisha Group of Companies" },
      { name: "description", content: "Comprehensive industrial services — Railway, Metro Rail, Defence, Manufacturing, ICBMRO, BMRO, AMC and more across India." },
      { property: "og:title", content: "Our Services — Jigisha Group" },
      { property: "og:description", content: "End-to-end industrial services across India's critical sectors." },
    ],
  }),
  component: ServicesIndexPage,
});

const heroStats = [
  { value: "6",    label: "Service Verticals" },
  { value: "17",   label: "Railway Zones" },
  { value: "12+",  label: "Metro Cities" },
  { value: "24×7", label: "AMC Support" },
];

const differentiators = [
  { Icon: ShieldCheck, title: "RDSO & ISO Certified",  desc: "Every service delivery backed by RDSO approvals, IRS specs and ISO 9001/14001/45001 certifications." },
  { Icon: Globe2,      title: "PAN-India Execution",   desc: "Dedicated field teams across all 17 railway zones, metro corridors and industrial hubs nationwide." },
  { Icon: Wrench,      title: "End-to-End Ownership",  desc: "Design → Supply → Install → Commission → AMC. One partner. No handoff gaps." },
  { Icon: Clock,       title: "24×7 Breakdown Support", desc: "Round-the-clock AMC response with dedicated spares buffer and real-time inventory tracking." },
  { Icon: Zap,         title: "Specialist Crews",      desc: "OHE specialists, signal technicians, KAWACH integrators, metro AFC engineers on staff." },
  { Icon: ArrowRight,  title: "GeM & IREPS Listed",    desc: "Fully empanelled on government procurement platforms for seamless tendering and compliance." },
];

function ServicesIndexPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden bg-[oklch(0.08_0.04_250)]">
        <img src={railwayImg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-25 scale-105" />
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.05_250)] via-[oklch(0.08_0.05_250)/85] to-[oklch(0.1_0.04_250)/50]" />
        <div className="absolute -top-32 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">What We Do</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.92] tracking-tight mb-5">
            Complete Industrial<br />
            <span className="text-gold">Service Portfolio</span>
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed mb-10">
            End-to-end solutions across Railways, Metro, Defence, Manufacturing, Commercial and MRO — backed by RDSO approvals, ISO certifications and nationwide execution teams.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <CountUp value={s.value} className="text-gold font-extrabold text-xl" />
                <span className="text-white/40 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">All Verticals</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {servicesData.length} Service Verticals
              </h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block max-w-xs text-right leading-relaxed">
              Click any service to explore our process, capabilities and case references.
            </p>
          </div>

          {/* First card — hero span */}
          <div className="mb-5">
            <ServiceCard service={servicesData[0]} hero />
          </div>

          {/* Remaining cards — 2 cols then 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            {servicesData.slice(1, 3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicesData.slice(3).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JIGISHA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Our Edge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Why Choose Jigisha</h2>
            <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed">
              Six reasons industrial leaders across India trust Jigisha as their primary service partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {differentiators.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="group relative bg-white/4 border border-white/8 rounded-2xl p-6 hover:bg-white/7 hover:border-gold/30 transition-all duration-300"
              >
                <div className="h-0.5 w-full bg-linear-to-r from-gold/50 via-gold to-gold/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left absolute top-0 left-0 rounded-t-2xl" />
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4 group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-extrabold text-white text-sm mb-2 group-hover:text-gold transition-colors duration-300">{title}</h4>
                <p className="text-xs text-white/45 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
            Not Sure Which Service?
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mx-auto mb-10">
            Describe your requirement and our team will identify the right vertical, assign a domain specialist, and respond within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            Talk to Our Specialists <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

/* ── SERVICE CARD ─────────────────────────────────────────────────────── */
function ServiceCard({ service, hero = false }: { service: Service; hero?: boolean }) {
  return (
    <Link
      id={`svc-${service.slug}`}
      to={`/services/${service.slug}` as any}
      className={`group relative flex overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-2xl transition-all duration-400 ${
        hero ? "flex-col md:flex-row min-h-72" : "flex-col"
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden shrink-0 ${hero ? "w-full md:w-96 h-56 md:h-auto" : "h-52"}`}>
        <img
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
            Explore Service <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-1 ${hero ? "p-8 justify-center" : "p-6"}`}>
        <h3 className={`font-extrabold text-card-foreground group-hover:text-gold transition-colors duration-300 leading-tight mb-2 ${hero ? "text-2xl md:text-3xl" : "text-lg"}`}>
          {service.title}
        </h3>
        <p className={`text-muted-foreground leading-relaxed mb-5 ${hero ? "text-base max-w-lg" : "text-sm line-clamp-2"}`}>
          {service.tagline}
        </p>

        {/* Key stats */}
        <div className="flex flex-wrap gap-3 mb-5">
          {service.stats.slice(0, hero ? 4 : 2).map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 bg-muted rounded-lg px-3 py-1.5 border border-border group-hover:border-gold/20 transition-colors duration-300">
              <span className="text-xs font-extrabold text-foreground">{s.value}</span>
              <span className="text-[10px] text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Section preview bullets */}
        <div className={`flex flex-col gap-1.5 mb-5 ${hero ? "" : "hidden sm:flex"}`}>
          {service.sections.map((sec) => (
            <div key={sec.sectionTitle} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold/50 shrink-0 group-hover:bg-gold transition-colors duration-300" />
              <span className="text-xs text-muted-foreground truncate">{sec.sectionTitle}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-1.5 text-sm font-bold text-primary group-hover:text-gold transition-colors duration-300 mt-auto">
          Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
