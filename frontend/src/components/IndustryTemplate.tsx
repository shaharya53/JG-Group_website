import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import type { Industry, IndustrySection } from "../data/industriesData";
import { padIndex } from "../lib/utils";
import { CountUp } from "./CountUp";

interface IndustryTemplateProps {
  industry: Industry;
}

export function IndustryTemplate({ industry }: IndustryTemplateProps) {
  return (
    <>
      <IndustryHero industry={industry} />
      <StatsStrip industry={industry} />
      <UseCasesSection industry={industry} />
      {industry.sections.map((section, i) => (
        <ContentSection key={section.sectionTitle} section={section} flip={i % 2 !== 0} part={i + 1} />
      ))}
      <HighlightsSection industry={industry} />
      <WhyUsSection industry={industry} />
      <CtaSection industry={industry} />
    </>
  );
}

/* ── HERO — left text + right asymmetric masonry grid ─────────────── */
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
    <section className="relative min-h-[92vh] flex items-center bg-[oklch(0.08_0.04_250)] overflow-hidden">
      <div className="absolute inset-0 opacity-8">
        <img src={img0} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-[oklch(0.06_0.05_250)] via-[oklch(0.09_0.04_250)/92] to-[oklch(0.12_0.04_250)/50]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjY1IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          <div className="order-2 lg:order-1">
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 text-gold/55 hover:text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-8 transition-colors"
            >
              ← All Industries
            </Link>

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
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
              >
                {industry.ctaLabel ?? "Get Sector Brief"} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#use-cases"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/80 font-semibold rounded-xl hover:bg-white/8 hover:text-white transition-all text-sm"
              >
                Explore Solutions
              </a>
            </div>
          </div>

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

/* ── STATS STRIP ──────────────────────────────────────────────────── */
function StatsStrip({ industry }: { industry: Industry }) {
  return (
    <div className="bg-navy border-y border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/8">
          {industry.stats.map((s, i) => (
            <div key={s.label} className={`text-center ${i > 0 ? "pl-8" : ""}`}>
              <CountUp value={s.value} className="text-3xl md:text-4xl font-extrabold text-gold leading-none mb-2" />
              <div className="text-xs text-white/45 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── USE CASES — editorial card grid (unique to industries) ───────── */
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

                <div className="mt-5 flex items-center gap-1.5 text-gold/60 group-hover:text-gold text-xs font-semibold transition-colors duration-300">
                  Learn how we do it <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              <div className="absolute left-0 top-0 bottom-0 w-0.75 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-400 origin-top rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CONTENT SECTION — alternating with step-hover image swap ────── */
function ContentSection({ section, flip, part }: { section: IndustrySection; flip: boolean; part: number }) {
  const [activeImage, setActiveImage] = useState(section.image);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function onStepEnter(idx: number) {
    setActiveIndex(idx);
    setActiveImage(section.steps[idx].image);
  }
  function onStepLeave() {
    setActiveIndex(null);
    setActiveImage(section.image);
  }

  return (
    <section className={`py-28 ${flip ? "bg-[oklch(0.97_0.004_250)]" : "bg-background"} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="flex items-center gap-3 mb-14">
          <div className="w-8 h-0.5 bg-gold" />
          <span className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase">
            {flip ? "Workflow" : "Approach"} · Part {part}
          </span>
        </div>

        <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-16 lg:gap-24 items-start`}>

          <div className="w-full lg:w-[52%] shrink-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/3" }}>
              <img
                key={activeImage}
                src={activeImage}
                alt={section.sectionTitle}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
                style={{ animation: "imgFadeIn 0.45s ease-out" }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/35 to-transparent pointer-events-none" />

              {activeIndex !== null && (
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-3.5 py-2 rounded-full animate-fade-in">
                  <span className="w-1.5 h-1.5 bg-gold-foreground rounded-full" />
                  {section.steps[activeIndex].title}
                </div>
              )}

              <div className="absolute bottom-5 right-5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10 font-medium">
                {activeIndex !== null ? `${activeIndex + 1} / ${section.steps.length}` : `${section.steps.length} steps`}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[48%] pt-2">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-[1.15] mb-5">
              {section.sectionTitle}
            </h2>
            <p className="text-muted-foreground leading-[1.8] text-base mb-10">
              {section.sectionDescription}
            </p>

            <div className="space-y-3">
              {section.steps.map((step, idx) => (
                <div
                  key={step.title}
                  onMouseEnter={() => onStepEnter(idx)}
                  onMouseLeave={onStepLeave}
                  className={`group flex items-start gap-4 p-5 rounded-2xl border cursor-default select-none transition-all duration-300 ${
                    activeIndex === idx
                      ? "border-gold/50 bg-gold/6 shadow-lg -translate-x-2"
                      : "border-border bg-card hover:border-gold/20 hover:bg-accent/40"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-xs transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-gold text-gold-foreground scale-110 shadow-[0_0_12px_oklch(0.75_0.12_80/0.4)]"
                        : "bg-navy/8 text-navy group-hover:bg-navy/15"
                    }`}
                  >
                    {padIndex(idx)}
                  </div>
                  <div className="min-w-0">
                    <h4
                      className={`font-bold text-sm mb-1.5 transition-colors duration-300 ${
                        activeIndex === idx ? "text-gold" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-[1.7]">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HIGHLIGHTS — capabilities grid ──────────────────────────────── */
function HighlightsSection({ industry }: { industry: Industry }) {
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
              className="group flex items-start gap-3.5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300"
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

/* ── WHY US — dark editorial cards ────────────────────────────────── */
function WhyUsSection({ industry }: { industry: Industry }) {
  return (
    <section className="py-28 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={industry.heroImages[0]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-navy/0 via-navy/80 to-navy" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Why Jigisha</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">The Jigisha Difference</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.whyUs.map((w, i) => (
            <div
              key={w.title}
              className="group bg-white/4 border border-white/8 rounded-3xl p-10 hover:bg-white/7 hover:border-gold/25 transition-all duration-400"
            >
              <div className="text-[56px] font-extrabold text-gold/15 leading-none mb-6 group-hover:text-gold/25 transition-colors duration-300">
                {padIndex(i)}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{w.title}</h3>
              <p className="text-white/55 text-sm leading-[1.8]">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────── */
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
            className="inline-flex items-center gap-2 px-9 py-4 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-xl"
          >
            {industry.ctaLabel ?? "Get Sector Brief"} <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-9 py-4 bg-white/20 border border-white/30 text-gold-foreground font-semibold rounded-xl hover:bg-white/30 transition-colors text-sm"
          >
            All Industries <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
