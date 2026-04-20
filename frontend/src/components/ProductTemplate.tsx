import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight, Tag, CheckCircle2, Package2, FileText } from "lucide-react";
import type { Product } from "../data/productsData";
import { CountUp } from "./CountUp";

export function ProductTemplate({ product }: { product: Product }) {
  return (
    <>
      <ProductHero product={product} />
      <StatsStrip product={product} />
      <OverviewSection product={product} />
      <CatalogSections product={product} />
      <HighlightsSection product={product} />
      <CategoriesSection product={product} />
      <CtaSection product={product} />
    </>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────── */
function ProductHero({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const images = product.heroImages.slice(0, 4);

  return (
    <section className="relative min-h-[80vh] flex items-center bg-[oklch(0.08_0.04_250)] overflow-hidden">
      {/* Ambient bg */}
      <div className="absolute inset-0">
        <img src={images[active]} alt="" className="w-full h-full object-cover opacity-15 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.05_250)] via-[oklch(0.08_0.05_250)/95] to-[oklch(0.1_0.05_250)/70]" />
      </div>
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }} />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <Link to="/products"
              className="inline-flex items-center gap-1.5 text-gold/60 hover:text-gold text-xs font-bold tracking-widest uppercase mb-7 transition-colors">
              ← All Products
            </Link>

            <div className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 text-gold rounded-full px-3.5 py-1.5 text-[11px] font-bold mb-6">
              <Tag className="w-3 h-3" />
              {product.skuCount} SKUs in Catalogue
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.92] tracking-tight mb-5">
              {product.title}
            </h1>

            <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              {product.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-gold/20">
                {product.ctaLabel ?? "Request Catalogue"} <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="#catalog"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/70 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all text-sm">
                View Categories
              </a>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 gap-2.5">
              {product.stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                  <CountUp value={s.value} className="text-gold font-extrabold text-base leading-none" />
                  <span className="text-white/40 text-xs leading-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image selector */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src={images[active]}
                alt={product.title}
                key={active}
                className="w-full h-full object-cover"
                style={{ animation: "imgFadeIn 0.4s ease-out" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/60] to-transparent" />
              <div className="absolute bottom-4 left-4 bg-gold/90 backdrop-blur-sm text-gold-foreground text-[11px] font-bold px-3 py-1.5 rounded-full">
                {product.sections[active]?.sectionTitle ?? product.title}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`relative rounded-xl overflow-hidden aspect-square transition-all duration-300 ${
                    active === i ? "ring-2 ring-gold scale-[1.04]" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ── STATS STRIP ──────────────────────────────────────────────────────── */
function StatsStrip({ product }: { product: Product }) {
  return (
    <div className="bg-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {product.stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-8 gap-1.5">
              <CountUp value={s.value} className="text-3xl md:text-4xl font-extrabold text-gold leading-none" />
              <span className="text-[10px] text-white/35 font-semibold tracking-widest uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── OVERVIEW ─────────────────────────────────────────────────────────── */
function OverviewSection({ product }: { product: Product }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Product Overview</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
              What's in the <span className="text-gold">{product.title}</span> Catalogue?
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              {product.overview}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm">
                <FileText className="w-4 h-4" /> Get Full Spec Sheet
              </Link>
              <a href="#catalog"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-gold/30 hover:text-gold transition-all text-sm">
                <Package2 className="w-4 h-4" /> Browse Categories
              </a>
            </div>
          </div>

          {/* Key stats card */}
          <div className="bg-[oklch(0.97_0.004_250)] rounded-2xl border border-border p-8">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-6">At a Glance</p>
            <div className="grid grid-cols-2 gap-5">
              {product.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1 pb-5 border-b border-border last:border-0">
                  <span className="text-2xl font-extrabold text-foreground leading-none">{s.value}</span>
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-[11px] font-bold tracking-widest uppercase text-muted-foreground mb-3">Product Verticals</p>
              <div className="flex flex-wrap gap-1.5">
                {product.categories.slice(0, 5).map((cat) => (
                  <span key={cat} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-card border border-border text-muted-foreground">
                    {cat}
                  </span>
                ))}
                {product.categories.length > 5 && (
                  <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gold/8 border border-gold/20 text-gold">
                    +{product.categories.length - 5} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CATALOG SECTIONS ─────────────────────────────────────────────────── */
function CatalogSections({ product }: { product: Product }) {
  return (
    <section id="catalog" className="py-20 bg-[oklch(0.97_0.004_250)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Product Range</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            What We Supply
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            {product.sections.length} product groups covering the full spectrum of {product.title.toLowerCase()} needs.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {product.sections.map((section, i) => (
            <CatalogSectionCard key={section.sectionTitle} section={section} index={i} accentImage={product.heroImages[i % product.heroImages.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CatalogSectionCard({ section, index, accentImage }: {
  section: Product["sections"][number];
  index: number;
  accentImage: string;
}) {
  const [open, setOpen] = useState(index === 0);

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/30 transition-colors duration-300">
      {/* Header — always visible */}
      <button
        onClick={() => setOpen(p => !p)}
        className="w-full flex items-center gap-5 p-6 text-left group"
      >
        <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0">
          <span className="text-gold font-extrabold text-sm">{String(index + 1).padStart(2, "0")}</span>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-extrabold text-card-foreground group-hover:text-gold transition-colors duration-300 leading-tight">
            {section.sectionTitle}
          </h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{section.sectionDescription}</p>
        </div>
        <div className={`flex items-center gap-2 shrink-0 transition-all duration-300 ${open ? "text-gold" : "text-muted-foreground"}`}>
          <span className="text-[11px] font-bold hidden sm:block">{open ? "Collapse" : "Expand"}</span>
          <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`} />
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div className="border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Image */}
            <div className="relative h-52 lg:h-auto overflow-hidden">
              <img
                src={section.image ?? accentImage}
                alt={section.sectionTitle}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/70] to-transparent" />
              <div className="absolute bottom-4 left-4 bg-gold/90 text-gold-foreground text-[10px] font-bold px-2.5 py-1 rounded-full">
                {section.steps.length} product groups
              </div>
            </div>

            {/* Product items grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border border-l border-border">
              {section.steps.map((step, i) => (
                <div key={step.title} className={`p-5 hover:bg-gold/3 transition-colors ${i >= 2 ? "border-t border-border" : ""}`}>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-navy text-[9px] font-extrabold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-card-foreground mb-1.5">{step.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── HIGHLIGHTS ───────────────────────────────────────────────────────── */
function HighlightsSection({ product }: { product: Product }) {
  return (
    <section id="highlights" className="py-20 bg-navy">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left — heading */}
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Why Source From Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              The Jigisha Advantage
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Every product in our catalogue comes with full compliance documentation, traceability, and post-supply support.
            </p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — checklist grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.highlights.map((h, i) => (
              <div
                key={h}
                className="group flex items-start gap-3 bg-white/4 border border-white/8 rounded-xl p-4 hover:bg-white/7 hover:border-gold/25 transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-white/65 leading-snug group-hover:text-white/85 transition-colors">{h}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CATEGORIES ───────────────────────────────────────────────────────── */
function CategoriesSection({ product }: { product: Product }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Full Scope</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            All Product Categories
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            {product.skuCount} products across {product.categories.length} categories — all available for single PO procurement.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {product.categories.map((cat, i) => (
            <div
              key={cat}
              className="group flex items-center gap-2.5 bg-card border border-border rounded-xl p-3.5 hover:border-gold/40 hover:bg-gold/3 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="w-6 h-6 rounded-lg bg-navy/8 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                <span className="text-[9px] font-extrabold text-navy group-hover:text-gold transition-colors">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span className="text-xs font-semibold text-foreground/70 group-hover:text-foreground leading-tight transition-colors">{cat}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────────────────────────── */
function CtaSection({ product }: { product: Product }) {
  return (
    <section className="relative py-24 overflow-hidden bg-[oklch(0.08_0.04_250)]">
      <div className="absolute inset-0 opacity-10">
        <img src={product.heroImages[0]} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0.04_250)] via-[oklch(0.08_0.04_250)/90] to-[oklch(0.08_0.04_250)/70]" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/6 blur-[100px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Ready to Procure?</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Source {product.title}<br />
          <span className="text-gold">From Jigisha</span>
        </h2>
        <p className="text-white/45 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Get a custom catalogue, project-specific BoQ, or bulk pricing. Our team responds within 24 hours.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-gold/20">
            {product.ctaLabel ?? "Request Catalogue"} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/70 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all text-sm">
            All Products <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
