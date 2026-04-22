import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Building2, Zap, Shield,
} from "lucide-react";
import type { Industry } from "../data/industriesData";
import { padIndex } from "../lib/utils";
import { CountUp } from "./CountUp";

/* ── Subsidiary name lookup ──────────────────────────────────────────────── */

const SUBSIDIARY_NAMES: Record<string, string> = {
  "jigisha-railtech":                "Jigisha Railtech",
  "jigisha-electricals-electronics": "Jigisha Electricals & Electronics",
  "jigisha-engineering":             "Jigisha Engineering",
  "jigisha-industrial-services":     "Jigisha Industrial Services",
  "jigisha-green":                   "Jigisha Green",
  "jigisha-defense-technologies":    "Jigisha Defense Technologies",
  "jigisha-industries":              "Jigisha Industries",
  "jigisha-technologies":            "Jigisha Technologies",
  "jigisha-pharma-healthcare":       "Jigisha Pharma & Healthcare",
  "jigisha-logistics":               "Jigisha Logistics",
  "jigisha-agro-industries":         "Jigisha Agro Industries",
  "jigisha-envirocare":              "Jigisha Envirocare",
  "jigisha-enterprises":             "Jigisha Enterprises",
  "jigisha-infotech":                "Jigisha Infotech",
  "jigisha-media-vision":            "Jigisha Media & Vision",
  "jigisha-infin":                   "Jigisha Infin",
  "jigisha-retails":                 "Jigisha Retails",
  "jigisha-international":           "Jigisha International",
};

function subsidiaryName(slug: string): string {
  return SUBSIDIARY_NAMES[slug] ?? slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ── Root ────────────────────────────────────────────────────────────────── */

export function IndustryTemplate({ industry }: { industry: Industry }) {
  return (
    <>
      <IndustryHero      industry={industry} />
      <StatsStrip        industry={industry} />
      <KeyOfferingsSection industry={industry} />
      <UseCasesSection   industry={industry} />
      <CapabilitiesSection industry={industry} />
      <ProcessSection      industry={industry} />
      <CaseStudiesSection  industry={industry} />
      <SubsidiariesSection industry={industry} />
      <WhyJigishaSection     industry={industry} />
      <CertificationsSection industry={industry} />
      <CtaSection            industry={industry} />
    </>
  );
}

/* ── HERO ────────────────────────────────────────────────────────────────── */

function IndustryHero({ industry }: { industry: Industry }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [img0, img1, img2, img3] = industry.heroImages;

  const cells = [
    { src: img0, loading: "eager" as const, spanClass: "col-span-2 row-span-1", gradient: "bg-linear-to-br from-transparent to-black/40", showTitle: true },
    { src: img1, loading: "lazy"  as const, spanClass: "col-span-1 row-span-2", gradient: "bg-linear-to-t from-black/50 via-transparent to-transparent", gridStyle: { gridColumn: "3", gridRow: "1 / span 2" } },
    { src: img2, loading: "lazy"  as const, spanClass: "col-span-1 row-span-1", gradient: "bg-linear-to-t from-black/50 via-transparent to-transparent" },
    { src: img3, loading: "lazy"  as const, spanClass: "col-span-1 row-span-1", gradient: "bg-linear-to-t from-black/50 via-transparent to-transparent" },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-[oklch(0.08_0.04_250)] overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <img src={img0} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-[oklch(0.06_0.05_250)] via-[oklch(0.09_0.04_250)/92] to-[oklch(0.12_0.04_250)/50]" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/20 text-gold rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wide uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Industry Vertical
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[0.9] tracking-tight mb-6">
              {industry.title}
            </h1>

            <p className="text-white/55 text-base md:text-lg leading-[1.7] max-w-lg mb-10">
              {industry.description}
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-2.5 mb-12">
              {industry.stats.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 bg-white/7 border border-white/10 rounded-full px-4 py-2 backdrop-blur-sm"
                >
                  <CountUp value={s.value} className="text-gold font-extrabold text-sm leading-none" />
                  <span className="text-white/45 text-[11px]">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-gold/20"
              >
                {industry.ctaLabel ?? "Get Sector Brief"} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 font-semibold rounded-xl hover:bg-white/8 hover:text-white transition-all text-sm"
              >
                Explore Solutions
              </a>
            </div>
          </div>

          {/* RIGHT — masonry image grid */}
          <div className="order-1 lg:order-2">
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", height: "480px" }}
            >
              {cells.map((cell, i) => (
                <div
                  key={i}
                  className={`relative ${cell.spanClass} overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ${
                    hoveredIndex === i
                      ? "ring-2 ring-gold shadow-[0_0_40px_oklch(0.75_0.12_80/0.35)] scale-[1.02] z-10"
                      : hoveredIndex !== null
                      ? "opacity-55 scale-[0.98]"
                      : ""
                  }`}
                  style={"gridStyle" in cell ? cell.gridStyle : undefined}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={cell.src}
                    alt={`${industry.title} ${i + 1}`}
                    className={`w-full h-full object-cover transition-transform duration-700 ${hoveredIndex === i ? "scale-110" : "scale-100"}`}
                    loading={cell.loading}
                  />
                  <div className={`absolute inset-0 ${cell.gradient} transition-opacity duration-300 ${hoveredIndex === i ? "opacity-80" : "opacity-50"}`} />
                  {"showTitle" in cell && cell.showTitle && hoveredIndex === i && (
                    <div className="absolute bottom-3 left-3 bg-gold/90 text-gold-foreground text-[11px] font-bold px-2.5 py-1 rounded-full">
                      {industry.title}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-1.5 mt-3 justify-end">
              {cells.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${hoveredIndex === i ? "w-6 bg-gold" : "w-1.5 bg-white/25"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

/* ── STATS STRIP ─────────────────────────────────────────────────────────── */

function StatsStrip({ industry }: { industry: Industry }) {
  return (
    <div className="bg-navy border-y border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/8">
          {industry.stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "pl-8" : ""}`}>
              <CountUp value={s.value} className="text-3xl md:text-4xl font-extrabold text-gold leading-none mb-2 block" />
              <div className="text-xs text-white/45 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── KEY OFFERINGS ───────────────────────────────────────────────────────── */

function KeyOfferingsSection({ industry }: { industry: Industry }) {
  return (
    <section id="offerings" className="py-24 bg-[oklch(0.975_0.003_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">What We Deliver</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Key Offerings</h2>
          </div>
          <p className="text-muted-foreground text-sm hidden sm:block">
            {industry.keyOfferings.length} service areas · {industry.title}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industry.keyOfferings.map((offering, i) => (
            <div
              key={offering}
              className="group flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-gold/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-navy/6 border border-navy/10 flex items-center justify-center shrink-0 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                <span className="text-navy text-[10px] font-extrabold group-hover:text-gold transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-800 leading-snug pt-0.5 group-hover:text-foreground transition-colors duration-300">
                {offering}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── USE CASES ───────────────────────────────────────────────────────────── */

function UseCasesSection({ industry }: { industry: Industry }) {
  return (
    <section id="use-cases" className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Real-World Impact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] mb-5">
            Industry Use Cases
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            How Jigisha Group's expertise translates into measurable outcomes for {industry.title} stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industry.useCases.map((uc, i) => (
            <div
              key={uc.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-gold/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-6 text-[72px] font-extrabold text-foreground/4 leading-none select-none pointer-events-none">
                {padIndex(i)}
              </div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 mb-5 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-300">
                  <span className="text-gold font-extrabold text-sm">{padIndex(i)}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
                  {uc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-[1.8]">{uc.description}</p>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CAPABILITIES GRID ───────────────────────────────────────────────────── */

function CapabilitiesSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-24 bg-[oklch(0.97_0.004_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Our Edge</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Key Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industry.capabilities.map((cap) => (
            <div
              key={cap}
              className="group flex items-start gap-3.5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-gray-700 leading-snug font-medium">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SUBSIDIARIES ────────────────────────────────────────────────────────── */

function SubsidiariesSection({ industry }: { industry: Industry }) {
  if (!industry.subsidiaries.length) return null;

  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 8px)" }} />
      <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Group Companies</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Delivered By</h2>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 self-start">
            <Building2 className="w-3.5 h-3.5 text-gold" />
            <span className="text-white/55 text-xs font-semibold">{industry.subsidiaries.length} subsidiaries active</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {industry.subsidiaries.map((sub) => (
            <div
              key={sub}
              className="group flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 hover:bg-gold/10 hover:border-gold/30 transition-all duration-300 cursor-default"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
              <span className="text-white/70 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                {subsidiaryName(sub)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY JIGISHA ─────────────────────────────────────────────────────────── */

function WhyJigishaSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
              The Jigisha<br />
              <span className="relative inline-block">
                <span className="text-gold">Difference</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/30 rounded-full" />
              </span>
            </h2>
            <p className="text-muted-foreground text-base leading-[1.85] mb-8 max-w-lg">
              {industry.whyJigisha}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                {industry.ctaLabel ?? "Get Sector Brief"} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/group"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-semibold rounded-xl hover:border-gold/30 hover:text-gold transition-all text-sm"
              >
                Our Group Companies <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {industry.stats.map((s) => (
              <div
                key={s.label}
                className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/8 border border-gold/15 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/15 transition-colors duration-300">
                  <Zap className="w-4 h-4 text-gold" />
                </div>
                <CountUp value={s.value} className="text-2xl font-extrabold text-foreground block leading-none mb-1" />
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── PROCESS ─────────────────────────────────────────────────────────────── */

function ProcessSection({ industry }: { industry: Industry }) {
  if (!industry.process.length) return null;
  return (
    <section className="py-24 bg-[oklch(0.975_0.003_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">How We Deliver</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Our Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.process.map((step, i) => (
            <div
              key={step.step}
              className="group relative bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gold/35 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-[64px] font-extrabold text-navy/4 leading-none select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-9 h-9 rounded-xl bg-navy/6 border border-navy/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
                <span className="text-navy text-[11px] font-extrabold group-hover:text-gold transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-foreground transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CASE STUDIES ────────────────────────────────────────────────────────── */

function CaseStudiesSection({ industry }: { industry: Industry }) {
  if (!industry.caseStudies.length) return null;
  return (
    <section className="py-28 bg-[oklch(0.07_0.04_250)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 10px)" }} />
      <div className="absolute -left-60 bottom-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Proven Impact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {industry.caseStudies.map((cs, i) => (
            <div
              key={i}
              className="group flex flex-col bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-gold/30 hover:bg-white/7 transition-all duration-300"
            >
              {/* Case number */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-white/8">
                <span className="w-7 h-7 rounded-lg bg-gold/15 border border-gold/25 flex items-center justify-center text-gold text-[11px] font-extrabold shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-gold transition-colors duration-300">
                  {cs.title}
                </h3>
              </div>

              <div className="flex flex-col flex-1 p-6 gap-5">
                {/* Problem */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/35 mb-1.5">Problem</p>
                  <p className="text-sm text-white/60 leading-relaxed">{cs.problem}</p>
                </div>

                {/* Solution */}
                <div>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/35 mb-1.5">Solution</p>
                  <p className="text-sm text-white/60 leading-relaxed">{cs.solution}</p>
                </div>

                {/* Result — highlighted */}
                <div className="mt-auto bg-gold/10 border border-gold/20 rounded-xl p-4">
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gold mb-1.5">Result</p>
                  <p className="text-sm text-white/80 leading-relaxed font-medium">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CERTIFICATIONS ──────────────────────────────────────────────────────── */

function CertificationsSection({ industry }: { industry: Industry }) {
  if (!industry.certifications.length) return null;
  return (
    <section className="py-20 bg-[oklch(0.975_0.003_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Standards &amp; Compliance</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy">Certifications &amp; Approvals</h2>
          </div>
          <div className="flex items-center gap-2 bg-navy/6 border border-navy/10 rounded-full px-4 py-2 self-start">
            <Shield className="w-3.5 h-3.5 text-gold" />
            <span className="text-navy/60 text-xs font-semibold">{industry.certifications.length} standards met</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {industry.certifications.map((cert) => (
            <div
              key={cert}
              className="group flex items-center gap-2 bg-white border border-gray-100 rounded-full px-4 py-2 shadow-sm hover:border-gold/35 hover:shadow-md transition-all duration-300"
            >
              <Shield className="w-3 h-3 text-gold shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-semibold text-gray-700 group-hover:text-foreground transition-colors duration-300">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────────────────────────────────── */

function CtaSection({ industry }: { industry: Industry }) {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-[oklch(0.75_0.12_80)] via-[oklch(0.7_0.14_70)] to-[oklch(0.65_0.15_60)]" />
      <div className="absolute inset-0 opacity-8">
        <img src={industry.heroImages[2]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-r from-[oklch(0.75_0.12_80)/80] to-[oklch(0.65_0.15_60)/60]" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold-foreground/65 text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
          Partner With Us
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gold-foreground leading-tight mb-6">
          Transform Your<br />{industry.title} Operations
        </h2>
        <p className="text-gold-foreground/70 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          Connect with our {industry.title.toLowerCase()} specialists for a tailored solution brief. We respond within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-xl w-full sm:w-auto justify-center"
          >
            {industry.ctaLabel ?? "Get Sector Brief"} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-9 py-4 bg-white/20 border border-white/30 text-gold-foreground font-semibold rounded-xl hover:bg-white/30 transition-colors text-sm w-full sm:w-auto justify-center"
          >
            All Industries <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
