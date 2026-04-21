import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight, ChevronRight, Tag, CheckCircle2,
  Package2, FileText, Layers, BarChart3, ShieldCheck, Sparkles,
} from "lucide-react";
import type { Product } from "../data/productsData";
import { CountUp } from "./CountUp";

export function ProductTemplate({ product }: { product: Product }) {
  return (
    <>
      <ProductHero product={product} />
      <StatsStrip product={product} />
      <OverviewSection product={product} />
      <CatalogSections key={product.slug} product={product} />
      {product.productItems && product.productItems.length > 0 && (
        <ProductShowcase product={product} />
      )}
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
    <section className="relative min-h-[90vh] flex items-center bg-[oklch(0.07_0.04_250)] overflow-hidden">
      {/* Full-bleed ambient background */}
      <div className="absolute inset-0">
        <img
          src={images[active]}
          alt=""
          key={active}
          className="w-full h-full object-cover opacity-20 scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.06_0.05_250)] via-[oklch(0.07_0.05_250)/92] to-[oklch(0.09_0.04_250)/60]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.07_0.04_250)]" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }}
      />

      {/* Glow blobs */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] rounded-full bg-gold/4 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-center">

          {/* LEFT ── 3 cols */}
          <div className="lg:col-span-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-white/30 hover:text-gold text-[11px] font-bold tracking-[0.18em] uppercase mb-8 transition-colors"
            >
              ← Products
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-gold/12 border border-gold/25 text-gold rounded-full px-3.5 py-1.5 text-[11px] font-bold">
                <Tag className="w-3 h-3" />
                {product.skuCount} SKUs
              </span>
              <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/50 rounded-full px-3.5 py-1.5 text-[11px] font-bold">
                <Layers className="w-3 h-3" />
                {product.categories.length} Categories
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
              {product.title}
            </h1>

            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              {product.tagline}
            </p>

            {/* Stat pills — compact horizontal row */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mb-12">
              {product.stats.map((s) => (
                <div key={s.label} className="flex items-center justify-center sm:justify-start gap-2 bg-white/5 border border-white/8 rounded-lg px-3.5 py-2.5 hover:border-gold/20 transition-colors">
                  <CountUp value={s.value} className="text-gold font-extrabold text-sm leading-none" />
                  <span className="text-white/35 text-[10px] leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-gold/20 w-full sm:w-auto"
              >
                {product.ctaLabel ?? "Request Catalogue"} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/12 text-white/60 font-semibold rounded-xl hover:border-white/25 hover:text-white transition-all text-sm w-full sm:w-auto"
              >
                <Package2 className="w-4 h-4" /> Browse Range
              </a>
            </div>
          </div>

          {/* RIGHT ── 2 cols — image showcase */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-3">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-white/5">
              <img
                src={images[active]}
                alt={product.title}
                key={active}
                className="w-full h-full object-cover"
                style={{ animation: "imgFadeIn 0.5s ease-out" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/65] to-transparent" />
              <div className="absolute bottom-4 left-4 bg-gold/90 backdrop-blur-sm text-gold-foreground text-[10px] font-bold px-3 py-1.5 rounded-full">
                {product.sections[active]?.sectionTitle ?? product.title}
              </div>
              {/* Navigation dots */}
              <div className="absolute top-3 right-3 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${active === i ? "bg-gold scale-125" : "bg-white/30"}`}
                  />
                ))}
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
                    active === i
                      ? "ring-2 ring-gold ring-offset-1 ring-offset-[oklch(0.07_0.04_250)] scale-[1.05]"
                      : "opacity-45 hover:opacity-70"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── STATS STRIP ──────────────────────────────────────────────────────── */
function StatsStrip({ product }: { product: Product }) {
  const icons = [BarChart3, Package2, Layers, Tag];
  return (
    <div className="bg-navy border-y border-white/5 shadow-[0_1px_20px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {product.stats.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={s.label}
                className="relative flex flex-col items-center justify-center py-8 gap-1.5 group
                  [&:not(:last-child)]:after:content-[''] [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0
                  [&:not(:last-child)]:after:top-1/4 [&:not(:last-child)]:after:h-1/2 [&:not(:last-child)]:after:w-px
                  [&:not(:last-child)]:after:bg-white/8"
              >
                <div className="w-8 h-8 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center mb-1 group-hover:bg-gold/15 transition-colors">
                  <Icon className="w-3.5 h-3.5 text-gold" />
                </div>
                <CountUp value={s.value} className="text-3xl md:text-4xl font-extrabold text-gold leading-none" />
                <span className="text-[10px] text-white/30 font-semibold tracking-widest uppercase text-center">{s.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── OVERVIEW ─────────────────────────────────────────────────────────── */
function OverviewSection({ product }: { product: Product }) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — text */}
          <div className="lg:sticky lg:top-24">
            <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase mb-4">Product Overview</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight mb-6">
              Inside the{" "}
              <span className="relative inline-block">
                <span className="text-gold">{product.title}</span>
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/30 rounded-full" />
              </span>{" "}
              Catalogue
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              {product.overview}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" /> Get Full Spec Sheet
              </Link>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-xl hover:border-gold/30 hover:text-gold transition-all text-sm w-full sm:w-auto"
              >
                <Package2 className="w-4 h-4" /> Browse Categories
              </a>
            </div>
          </div>

          {/* RIGHT — "At a Glance" card + top categories */}
          <div className="flex flex-col gap-4">
            {/* Stats card */}
            <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
              <div className="px-6 pt-5 pb-4 border-b border-border">
                <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground">At a Glance</p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y divide-border">
                {product.stats.map((s) => (
                  <div key={s.label} className="px-6 py-5">
                    <span className="text-2xl font-extrabold text-foreground block leading-none mb-1">{s.value}</span>
                    <span className="text-xs text-muted-foreground">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top categories pill cloud */}
            <div className="rounded-2xl border border-border bg-card shadow-sm p-6">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-4">Top Product Verticals</p>
              <div className="flex flex-wrap gap-2">
                {product.categories.slice(0, 8).map((cat, i) => (
                  <span
                    key={cat}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                      i < 3
                        ? "bg-navy/8 border-navy/15 text-navy"
                        : "bg-card border-border text-muted-foreground"
                    }`}
                  >
                    {cat}
                  </span>
                ))}
                {product.categories.length > 8 && (
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-gold/8 border border-gold/20 text-gold">
                    +{product.categories.length - 8} more
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

/* ── CATALOG SECTIONS — alternating full-width layout ──────────────────── */
function CatalogSections({ product }: { product: Product }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? -1 : i));

  return (
    <section id="catalog" className="bg-[oklch(0.975_0.003_250)]">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Product Range</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              What We Supply
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-right leading-relaxed hidden sm:block">
            {product.sections.length} product groups · full spectrum of {product.title.toLowerCase()} needs
          </p>
        </div>
      </div>

      {/* Alternating section cards */}
      <div className="flex flex-col">
        {product.sections.map((section, i) => (
          <CatalogSectionCard
            key={section.sectionTitle}
            section={section}
            index={i}
            accentImage={product.heroImages[i % product.heroImages.length]}
            reverse={i % 2 === 1}
            expanded={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>

      <div className="pb-20" />
    </section>
  );
}

function CatalogSectionCard({
  section, index, accentImage, reverse, expanded, onToggle,
}: {
  section: Product["sections"][number];
  index: number;
  accentImage: string;
  reverse: boolean;
  expanded: boolean;
  onToggle: () => void;
}) {

  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-8 w-full mb-5`}>
      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/25 hover:shadow-md transition-all duration-300 group">

        {/* Top strip — always visible */}
        <div className="flex items-start sm:items-center gap-3 sm:gap-5 p-4 sm:p-6 border-b border-border/50">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-navy flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
            <span className="text-gold font-extrabold text-xs sm:text-sm">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-extrabold text-card-foreground group-hover:text-gold transition-colors duration-300 leading-snug">
              {section.sectionTitle}
            </h3>
            <p className="hidden sm:block text-sm text-muted-foreground mt-0.5 line-clamp-2">{section.sectionDescription}</p>
          </div>
          <button
            onClick={onToggle}
            className={`flex items-center gap-1.5 shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg border text-xs font-bold transition-all duration-300 ${
              expanded
                ? "bg-gold/8 border-gold/25 text-gold"
                : "border-border text-muted-foreground hover:border-gold/20 hover:text-gold"
            }`}
          >
            {expanded ? "Collapse" : "Expand"}
            <ChevronRight className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-300 ${expanded ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* Expanded — alternating image / content layout */}
        {expanded && (
          <div className={`grid grid-cols-1 lg:grid-cols-5 ${reverse ? "lg:flex-row-reverse" : ""}`}
            style={{ direction: reverse ? "rtl" : "ltr" }}>

            {/* Image panel */}
            <div className="lg:col-span-2 relative overflow-hidden h-52 sm:h-64 lg:h-auto lg:min-h-[240px]" style={{ direction: "ltr" }}>
              <img
                src={section.image ?? accentImage}
                alt={section.sectionTitle}
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/80] via-[oklch(0.08_0.04_250)/20] to-transparent" />
              <div className="absolute bottom-5 left-5 right-5" style={{ direction: "ltr" }}>
                <div className="bg-gold/90 backdrop-blur-sm text-gold-foreground text-[10px] font-bold px-3 py-1.5 rounded-full inline-block mb-2">
                  {section.steps.length} product types
                </div>
                <p className="text-white/80 text-xs leading-relaxed line-clamp-2">{section.sectionDescription}</p>
              </div>
            </div>

            {/* Product items grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2" style={{ direction: "ltr" }}>
              {section.steps.map((step, j) => (
                <div
                  key={step.title}
                  className={`p-4 sm:p-5 hover:bg-gold/3 transition-colors
                    ${j % 2 === 0 ? "sm:border-r border-border" : ""}
                    ${j < section.steps.length - 1 ? "border-b border-border sm:border-b-0" : ""}
                    ${j >= 2 ? "sm:border-t sm:border-border" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-navy/8 border border-navy/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-navy text-[10px] font-extrabold">{String(j + 1).padStart(2, "0")}</span>
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
        )}
      </div>
    </div>
  );
}

/* ── PRODUCT SHOWCASE ─────────────────────────────────────────────────── */
function ProductShowcase({ product }: { product: Product }) {
  const items = product.productItems ?? [];

  return (
    <section className="py-24 bg-[oklch(0.07_0.04_250)] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold/4 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase">Featured SKUs</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Products in This Range
            </h2>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <ProductItemCard
              key={item.name}
              item={item}
              image={product.heroImages[i % product.heroImages.length]}
              productTitle={product.title}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-white/30 text-sm">
            Showing representative SKUs. Full catalogue available on request.
          </p>
          <a
            href={`/get-quote?product=${encodeURIComponent(product.title)}`}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shrink-0 w-full sm:w-auto"
          >
            Request Full SKU List <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShowcaseFilter({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 ${
        active
          ? "bg-gold text-gold-foreground border-gold shadow-lg shadow-gold/20"
          : "bg-white/4 text-white/40 border-white/8 hover:bg-white/8 hover:text-white/70 hover:border-white/15"
      }`}
    >
      {children}
    </button>
  );
}

function ProductItemCard({
  item,
  image,
  productTitle,
}: {
  item: NonNullable<Product["productItems"]>[number];
  image: string;
  productTitle: string;
}) {
  return (
    <div className="group relative flex flex-col bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-gold/35 hover:shadow-[0_0_30px_rgba(0,0,0,0.4)] transition-all duration-300">

      {/* Image */}
      <div className="relative h-40 overflow-hidden shrink-0">
        <img
          src={image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/90] via-[oklch(0.07_0.04_250)/30] to-transparent" />

        {/* Category tag floated over image */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-bold tracking-widest uppercase bg-navy/80 backdrop-blur-sm text-gold border border-gold/20 px-2.5 py-1 rounded-full">
            {item.category}
          </span>
        </div>

        {/* Brand floated bottom-right */}
        {item.brand && (
          <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white/60 text-[9px] font-semibold px-2 py-0.5 rounded-full border border-white/10">
            {item.brand}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4">

        {/* Product name */}
        <h4 className="text-sm font-extrabold text-white leading-snug mb-2 group-hover:text-gold transition-colors duration-300">
          {item.name}
        </h4>

        {/* Spec line */}
        <p className="text-[11px] text-white/35 leading-relaxed mb-4 flex-1 font-mono group-hover:text-white/50 transition-colors line-clamp-2">
          {item.spec}
        </p>

        {/* Compliance tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-gold/8 border border-gold/15 text-gold/70 group-hover:bg-gold/12 group-hover:border-gold/25 group-hover:text-gold transition-all duration-300"
            >
              <ShieldCheck className="w-2.5 h-2.5 shrink-0" />
              {tag}
            </span>
          ))}
        </div>

        {/* Enquire bar */}
        <div className="flex items-center justify-between pt-3.5 mt-3 border-t border-white/6">
          <span className="text-[10px] text-white/20 group-hover:text-white/35 transition-colors">In Stock / On Order</span>
          <a
            href={`/get-quote?product=${encodeURIComponent(productTitle)}&item=${encodeURIComponent(item.name)}`}
            className="text-[11px] font-bold text-white/30 group-hover:text-gold flex items-center gap-1 transition-all duration-300"
          >
            Enquire <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── HIGHLIGHTS ───────────────────────────────────────────────────────── */
function HighlightsSection({ product }: { product: Product }) {
  return (
    <section id="highlights" className="py-24 bg-navy relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 8px)" }}
      />
      <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 items-start">

          {/* Left — heading block */}
          <div className="lg:sticky lg:top-24">
            <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase mb-4">Why Source From Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
              The Jigisha<br />
              <span className="text-gold">Advantage</span>
            </h2>
            <p className="text-white/35 text-sm leading-relaxed mb-8">
              Every product in our catalogue comes with full compliance documentation, traceability, and post-supply support.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — numbered highlights */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.highlights.map((h, i) => (
              <div
                key={h}
                className="group relative flex items-start gap-4 bg-white/4 border border-white/7 rounded-2xl p-5 hover:bg-white/7 hover:border-gold/20 transition-all duration-300 overflow-hidden"
              >
                {/* Large ghost number */}
                <span className="absolute -right-2 -bottom-3 text-7xl font-black text-white/4 select-none pointer-events-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <p className="text-sm text-white/60 leading-snug group-hover:text-white/80 transition-colors relative z-10">{h}</p>
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
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section header — split */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Full Scope</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">All Product Categories</h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-right leading-relaxed hidden sm:block">
            {product.skuCount} SKUs across {product.categories.length} categories —<br />
            single-PO procurement available.
          </p>
        </div>

        {/* Grid — larger first few items for visual variation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
          {product.categories.map((cat, i) => (
            <div
              key={cat}
              className={`group flex items-center gap-2.5 bg-card border rounded-xl p-3.5
                hover:border-gold/35 hover:bg-gold/3 hover:shadow-sm transition-all duration-300 cursor-default
                ${i < 3 ? "border-gold/15 bg-gold/2" : "border-border"}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors
                  ${i < 3 ? "bg-gold/12 group-hover:bg-gold/20" : "bg-navy/6 group-hover:bg-gold/10"}`}
              >
                <span
                  className={`text-[9px] font-extrabold transition-colors
                    ${i < 3 ? "text-gold" : "text-navy group-hover:text-gold"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs font-semibold text-foreground/65 group-hover:text-foreground leading-tight transition-colors">
                {cat}
              </span>
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
    <section className="relative py-28 overflow-hidden bg-[oklch(0.07_0.04_250)]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={product.heroImages[0]} alt="" className="w-full h-full object-cover opacity-12" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.07_0.04_250)/50] via-[oklch(0.07_0.04_250)/75] to-[oklch(0.07_0.04_250)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.07_0.04_250)] via-transparent to-[oklch(0.07_0.04_250)]" />
      </div>

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/6 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["RDSO Approved", "GeM Listed", "ISO Certified", "PAN-India"].map((badge) => (
            <span key={badge} className="text-[10px] font-bold tracking-wide px-3 py-1 rounded-full bg-white/6 border border-white/10 text-white/50">
              {badge}
            </span>
          ))}
        </div>

        <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase mb-4">Ready to Procure?</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Source {product.title}<br />
          <span className="text-gold">From Jigisha</span>
        </h2>
        <p className="text-white/40 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
          Custom catalogue, project-specific BoQ, or bulk pricing — our team responds within 24 hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-xl shadow-gold/20 w-full sm:w-auto"
          >
            {product.ctaLabel ?? "Request Catalogue"} <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 border border-white/12 text-white/60 font-semibold rounded-xl hover:border-white/25 hover:text-white transition-all text-sm w-full sm:w-auto"
          >
            All Products <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
