import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "../components/CountUp";
import { ArrowRight, ShieldCheck, Zap, Globe, Layers } from "lucide-react";
import { industriesData, type Industry } from "../data/industriesData";

export const Route = createFileRoute("/industries/")({
  component: IndustriesIndexPage,
  head: () => ({
    meta: [
      { title: "Industries We Serve — Jigisha Group" },
      { name: "description", content: "Jigisha Group serves Railways, Metro Rail, Defence, Energy, Healthcare, Agriculture, Construction, Manufacturing, Logistics, Infotech and more." },
      { property: "og:title", content: "Industries — Jigisha Group" },
      { property: "og:description", content: "Industry-specific solutions for India's most critical sectors." },
    ],
  }),
});

function IndustriesIndexPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden bg-[oklch(0.08_0.04_250)]">
        {/* Background collage */}
        <div className="absolute inset-0 grid grid-cols-4 opacity-20">
          {industriesData.slice(0, 4).map((ind) => (
            <img
              key={ind.slug}
              src={ind.heroImages[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.06_0.05_250)] via-[oklch(0.08_0.05_250)/85] to-[oklch(0.1_0.04_250)/60]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Sector Coverage</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[0.9] tracking-tight mb-5">
            Industries<br />We Serve
          </h1>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed mb-10">
            From Railways and Defence to Agriculture and Green Energy — comprehensive solutions for every sector powering India's growth.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: "12+", label: "Industry Verticals" },
              { value: "500K+", label: "Components Supplied" },
              { value: "17", label: "Railway Zones" },
              { value: "PAN-India", label: "Presence" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <CountUp value={s.value} className="text-gold font-extrabold text-xl" />
                <span className="text-white/40 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY GRID ─────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">All Sectors</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                {industriesData.length} Industry Verticals
              </h2>
            </div>
            <p className="text-muted-foreground text-sm hidden md:block max-w-xs text-right leading-relaxed">
              Click any industry to explore solutions, use cases and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industriesData.map((industry, i) => (
              <IndustryCard key={industry.slug} industry={industry} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JIGISHA ───────────────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.975_0.003_250)] border-y border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* LEFT — headline + stats */}
            <div className="lg:sticky lg:top-28">
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Why Jigisha</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.05] tracking-tight mb-6">
                One Partner.<br />Every Sector.
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-12 max-w-md">
                Across all 12+ industry verticals, Jigisha Group brings the same four fundamentals — so you never compromise on quality, speed, compliance or scope.
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { value: "3M+",   label: "Products Available" },
                  { value: "28+",   label: "Industry Domains" },
                  { value: "500K+", label: "Components Supplied" },
                  { value: "15+",   label: "Export Markets" },
                ].map((s) => (
                  <div key={s.label}>
                    <CountUp value={s.value} className="text-3xl font-extrabold text-gold block leading-none mb-1.5" />
                    <p className="text-xs text-muted-foreground tracking-widest uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — feature rows with dividers, no cards */}
            <div className="divide-y divide-border">
              {[
                { icon: Globe,      title: "PAN-India Scale",         description: "19 specialised subsidiaries, 5 regional hubs and 200+ warehouses — deployed wherever your operations need us, nationwide." },
                { icon: ShieldCheck,title: "Certified Compliance",    description: "RDSO, BIS, ISO 9001/14001/45001, GeM, CDSCO, MNRE and sector-specific certifications govern every single engagement." },
                { icon: Zap,        title: "Speed & Reliability",     description: "Same-day dispatch, 24×7 emergency supply, dedicated project managers and SLA-backed service contracts across every vertical." },
                { icon: Layers,     title: "End-to-End Capability",   description: "From product supply and SITC to full EPC, O&M and long-term AMC — single-window accountability from first order to asset end-of-life." },
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

      {/* ── BOTTOM CTA ────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Cross-Sector Expertise</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Don't See Your Industry?
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Jigisha Group serves 28+ domains. Talk to our team about tailored solutions for your sector.
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

/* ── INDUSTRY CARD ────────────────────────────────────────────────── */
function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <Link
      to="/industries/$slug"
      params={{ slug: industry.slug }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-2xl transition-all duration-400 min-h-95"
    >
      {/* Image header */}
      <div className="relative h-52 overflow-hidden shrink-0">
        <img
          src={industry.heroImages[0]}
          alt={industry.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {/* Secondary image peek on hover */}
        <img
          src={industry.heroImages[1]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Index badge */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-lg bg-navy/70 backdrop-blur-sm border border-white/15 flex items-center justify-center">
          <span className="text-gold font-extrabold text-[11px]">{String(index + 1).padStart(2, "0")}</span>
        </div>

        {/* Hover CTA overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
            Explore Industry <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-gold transition-colors duration-300">
          {industry.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
          {industry.tagline}
        </p>

        {/* Key offerings as chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
          {industry.keyOfferings.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/20 group-hover:text-foreground transition-all duration-300"
            >
              {h}
            </span>
          ))}
          {industry.keyOfferings.length > 3 && (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gold/8 text-gold border border-gold/20">
              +{industry.keyOfferings.length - 3} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-xs text-muted-foreground">{industry.useCases.length} use cases</span>
          <span className="text-xs font-semibold text-primary group-hover:text-gold transition-colors duration-300 flex items-center gap-1">
            Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
