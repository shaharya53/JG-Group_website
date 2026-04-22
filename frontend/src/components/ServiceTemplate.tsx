import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import type { Service, ServiceSection } from "../data/servicesData";
import { CountUp } from "./CountUp";

interface ServiceTemplateProps {
  service: Service;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <>
      <Hero service={service} />
      <StatsRibbon stats={service.stats} />
      {service.sections.map((section, i) => (
        <ContentSection key={section.sectionTitle} section={section} flip={i % 2 !== 0} />
      ))}
      <CapabilitiesSection capabilities={service.capabilities} />
      <WhyUsSection whyUs={service.whyUs} />
      <CtaSection service={service} />
    </>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────── */
function Hero({ service }: { service: Service }) {
  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-center overflow-hidden">
      <img
        src={service.heroImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{ transformOrigin: "center" }}
      />
      {/* Multi-layer gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.1_0.05_250)/95] via-[oklch(0.12_0.05_250)/80] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.05_250)/60] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tight mb-5">
            {service.title}
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
            {service.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              {service.ctaLabel ?? "Get a Quote"} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ── STATS RIBBON ─────────────────────────────────────────────────── */
function StatsRibbon({ stats }: { stats: Service["stats"] }) {
  return (
    <div id="overview" className="bg-navy py-8 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <CountUp value={s.value} className="block text-3xl md:text-4xl font-extrabold text-gold leading-none mb-1" />
              <div className="text-xs text-white/50 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── CONTENT SECTION (alternating) ───────────────────────────────── */
function ContentSection({ section, flip }: { section: ServiceSection; flip: boolean }) {
  const [activeImage, setActiveImage] = useState(section.image);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  function handleStepEnter(idx: number) {
    setActiveIndex(idx);
    setActiveImage(section.steps[idx].image);
  }
  function handleStepLeave() {
    setActiveIndex(null);
    setActiveImage(section.image);
  }

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}>

          {/* Image panel */}
          <div className="w-full lg:w-1/2 shrink-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl group">
              <img
                key={activeImage}
                src={activeImage}
                alt={section.sectionTitle}
                className="w-full h-full object-cover transition-all duration-700 ease-out"
                style={{ animation: "imgFadeIn 0.5s ease-out" }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />

              {/* Step indicator badge */}
              {activeIndex !== null && (
                <div className="absolute bottom-4 left-4 bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-3 py-1.5 rounded-full animate-fade-in">
                  Step {activeIndex + 1} of {section.steps.length}
                </div>
              )}
            </div>
          </div>

          {/* Text panel */}
          <div className="w-full lg:w-1/2">
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">
              {flip ? "Process" : "Approach"}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-4">
              {section.sectionTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
              {section.sectionDescription}
            </p>

            {/* Steps — hover changes image */}
            <div className="space-y-3">
              {section.steps.map((step, idx) => (
                <div
                  key={step.title}
                  onMouseEnter={() => handleStepEnter(idx)}
                  onMouseLeave={handleStepLeave}
                  className={`group flex items-start gap-4 p-4 rounded-xl border cursor-default transition-all duration-300 ${
                    activeIndex === idx
                      ? "border-gold/40 bg-gold/5 shadow-md -translate-x-1"
                      : "border-border bg-card hover:border-gold/20 hover:bg-accent/50"
                  }`}
                >
                  {/* Step number */}
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold text-sm transition-colors duration-300 ${
                      activeIndex === idx
                        ? "bg-gold text-gold-foreground"
                        : "bg-navy/10 text-navy group-hover:bg-navy/20"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h4
                      className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
                        activeIndex === idx ? "text-gold" : "text-foreground"
                      }`}
                    >
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
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

/* ── CAPABILITIES ─────────────────────────────────────────────────── */
function CapabilitiesSection({ capabilities }: { capabilities: string[] }) {
  return (
    <section className="py-20 bg-[oklch(0.97_0.004_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">What We Bring</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Our Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {capabilities.map((cap) => (
            <div
              key={cap}
              className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all"
            >
              <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
              <span className="text-sm font-medium text-foreground">{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── WHY US ───────────────────────────────────────────────────────── */
function WhyUsSection({ whyUs }: { whyUs: Service["whyUs"] }) {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">Our Edge</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Jigisha</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyUs.map((w, i) => (
            <div
              key={w.title}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-gold/30 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                <span className="text-gold font-extrabold text-base">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{w.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────── */
function CtaSection({ service }: { service: Service }) {
  return (
    <section className="relative py-24 bg-[oklch(0.12_0.05_250)] overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img src={service.heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.05_250)] to-[oklch(0.12_0.05_250)/80]" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Get Started</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Ready to Partner<br />With Jigisha?
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Talk to our specialists about your {service.title.toLowerCase()} requirements. We respond within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            {service.ctaLabel ?? "Request a Quote"} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
          >
            All Services <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
