import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package2, ShieldCheck, Truck, BarChart3, Award, Search, ChevronRight } from "lucide-react";
import { productsData } from "../data/productsData";
import type { Product } from "../data/productsData";
import { CountUp } from "../components/CountUp";
import warehouseImg from "../assets/products-warehouse.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — India's Largest Industrial Supermarket" },
      { name: "description", content: "Over 3 Million products across Railways, Metro, Defence, Electricals, Machinery, Green Energy and more." },
      { property: "og:title", content: "Products — Jigisha Industrial Supermarket" },
      { property: "og:description", content: "3M+ products across diverse industries." },
    ],
  }),
  component: ProductsIndexPage,
});

const heroStats = [
  { value: "3M+",    label: "Products" },
  { value: "7,500+", label: "Vendors" },
  { value: "500K+",  label: "Rail SKUs" },
  { value: "8",      label: "Verticals" },
];

const trustBadges = [
  { Icon: Award,       label: "RDSO Approved",      sub: "Railway certified" },
  { Icon: ShieldCheck, label: "GeM Listed",          sub: "Govt. procurement" },
  { Icon: BarChart3,   label: "IREPS Empanelled",    sub: "All 17 zones" },
  { Icon: Truck,       label: "PAN-India Delivery",  sub: "Nationwide reach" },
  { Icon: Package2,    label: "ISO 9001 Certified",  sub: "Quality assured" },
];

/* All unique categories flattened from every product */
const allCategories = Array.from(
  new Set(productsData.flatMap((p) => p.categories))
);

function ProductsIndexPage() {
  const featured = productsData.slice(0, 2);
  const rest = productsData.slice(2);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedSection products={featured} />
      <CatalogSection products={rest} />

      <ProcureSection />
      <BottomCta />
    </>
  );
}

/* ── HERO ─────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative bg-[oklch(0.07_0.04_250)] overflow-hidden min-h-[85vh] flex flex-col justify-between">
      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }}
      />
      {/* Glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full pt-28 pb-16 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2.5 bg-gold/10 border border-gold/25 text-gold rounded-full px-4 py-2 text-[11px] font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              India's Largest Industrial Supermarket
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[72px] font-black text-white leading-[0.9] sm:leading-[0.88] tracking-tight mb-7">
              3 Million<br />
              <span className="text-gold">Products.</span><br />
              <span className="text-white/35 text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mt-1 block">One Partner.</span>
            </h1>

            <p className="text-white/45 text-base md:text-[17px] leading-relaxed max-w-lg mb-10">
              From RDSO-approved railway components to solar infrastructure and agro inputs — Jigisha is your single-window procurement partner across every critical industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-xl shadow-gold/20 w-full sm:w-auto"
              >
                Request Catalogue <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/12 text-white/60 font-semibold rounded-xl hover:border-white/25 hover:text-white transition-all text-sm w-full sm:w-auto"
              >
                <Search className="w-3.5 h-3.5" /> Browse Categories
              </a>
            </div>

            {/* Stat pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {heroStats.map((s) => (
                <div key={s.label} className="group flex flex-col items-center justify-center bg-white/4 border border-white/7 rounded-2xl py-4 px-3 gap-1.5 hover:bg-white/7 hover:border-gold/20 transition-all duration-300">
                  <CountUp value={s.value} className="text-2xl font-extrabold text-gold leading-none" />
                  <span className="text-[10px] text-white/30 font-semibold tracking-widest uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — staggered mosaic */}
          <div className="hidden lg:grid grid-cols-2 gap-3 h-[530px]">
            <div className="flex flex-col gap-3">
              <div className="relative rounded-2xl overflow-hidden flex-1 group">
                <img src={productsData[0]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/85] to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] font-bold text-gold tracking-widest uppercase block mb-0.5">{productsData[0]?.title}</span>
                  <div className="text-white font-extrabold text-sm">{productsData[0]?.skuCount} SKUs</div>
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-36 group">
                <img src={productsData[2]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/75] to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] font-bold text-white/65">{productsData[2]?.title}</div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-10">
              <div className="relative rounded-2xl overflow-hidden h-36 group">
                <img src={productsData[1]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/75] to-transparent" />
                <div className="absolute bottom-3 left-3 text-[10px] font-bold text-white/65">{productsData[1]?.title}</div>
              </div>
              <div className="relative rounded-2xl overflow-hidden flex-1 group">
                <img src={productsData[3]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.07_0.04_250)/85] to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[9px] font-bold text-gold tracking-widest uppercase block mb-0.5">{productsData[3]?.title}</span>
                  <div className="text-white font-extrabold text-sm">{productsData[3]?.skuCount} SKUs</div>
                </div>
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling category ticker */}
      <div className="relative border-t border-white/6 bg-[oklch(0.06_0.04_250)/80] backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-[ticker_90s_linear_infinite] gap-8 whitespace-nowrap w-max">
          {[...allCategories, ...allCategories].map((cat, i) => (
            <span key={i} className="text-[11px] font-semibold text-white/25 tracking-widest uppercase flex items-center gap-3">
              <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TRUST BAR ────────────────────────────────────────────────────────── */
function TrustBar() {
  return (
    <div className="bg-navy border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {trustBadges.map(({ Icon, label, sub }, i) => (
            <div
              key={label}
              className={`flex items-center gap-3 py-5 px-4 group cursor-default hover:bg-white/3 transition-colors
                ${i > 0 ? "border-l border-white/5" : ""}`}
            >
              <div className="w-8 h-8 rounded-lg bg-gold/8 border border-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/15 transition-colors">
                <Icon className="w-3.5 h-3.5 text-gold" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold text-white/70 tracking-wide group-hover:text-white transition-colors">{label}</div>
                <div className="text-[10px] text-white/28 mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── FEATURED SPOTLIGHT ───────────────────────────────────────────────── */
function FeaturedSection({ products }: { products: Product[] }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Top Categories</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Featured Product Lines</h2>
          </div>
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-gold transition-colors"
          >
            Request full catalogue <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {products.map((product) => (
            <FeaturedCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FULL CATALOG ─────────────────────────────────────────────────────── */
function CatalogSection({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all"
    ? products
    : products.filter((p) => p.categories.includes(filter));

  /* Top-5 categories appearing most across this slice */
  const topFilters = Array.from(
    new Set(products.flatMap((p) => p.categories))
  ).slice(0, 6);

  return (
    <section id="catalog" className="pt-2 pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header + filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Complete Catalogue</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">All {productsData.length} Verticals</h2>
          </div>
          <span className="hidden md:block text-sm text-muted-foreground">3M+ total SKUs across all categories</span>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8 pb-6 border-b border-border">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            All Verticals
          </FilterChip>
          {topFilters.map((cat) => (
            <FilterChip key={cat} active={filter === cat} onClick={() => setFilter(cat)}>
              {cat}
            </FilterChip>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <CatalogCard key={product.slug} product={product} index={i} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 py-16 text-center text-muted-foreground text-sm">
              No verticals match this filter.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full text-[11px] font-bold border transition-all duration-200 ${
        active
          ? "bg-navy text-white border-navy shadow-sm"
          : "bg-card text-muted-foreground border-border hover:border-gold/30 hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}


/* ── HOW TO PROCURE ───────────────────────────────────────────────────── */
function ProcureSection() {
  const channels = [
    { badge: "01", name: "GeM Portal",   desc: "Government e-Marketplace compliant procurement for all Govt. departments and PSUs.", tag: "Govt. Bodies" },
    { badge: "02", name: "IREPS",         desc: "Indian Railway E-Procurement System — RDSO-approved items for railway units across all 17 zones.", tag: "Railways" },
    { badge: "03", name: "Direct B2B",    desc: "Custom BoQ, bulk pricing, and OEM supply via jigisha.store — response within 24 hours.", tag: "Enterprises & OEMs" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Procurement</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5 leading-tight">
              Three Ways to<br />Source From Jigisha
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Whether you're a government body, enterprise buyer, or OEM — we have a procurement channel built for you. Quotes delivered in 24 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {channels.map((p) => (
              <div
                key={p.badge}
                className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-5 hover:border-gold/30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <span className="text-gold font-extrabold text-xs">{p.badge}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-extrabold text-foreground text-sm group-hover:text-gold transition-colors">{p.name}</h4>
                    <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">{p.tag}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-gold group-hover:translate-x-0.5 transition-all shrink-0 mt-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── BOTTOM CTA ───────────────────────────────────────────────────────── */
function BottomCta() {
  return (
    <section className="relative py-24 bg-navy overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 10px)" }} />
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/4 blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-gold text-[11px] font-bold tracking-[0.22em] uppercase mb-4">Start Procuring Today</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
          Can't Find What You Need?
        </h2>
        <p className="text-white/45 text-base leading-relaxed max-w-xl mx-auto mb-10">
          Jigisha sources across 28+ domains and 7,500+ vendors. If it's industrial — we can procure it.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-xl shadow-gold/20"
          >
            Talk to a Specialist <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/group"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-white/65 font-semibold rounded-xl hover:border-white/28 hover:text-white transition-all text-sm"
          >
            Explore Our Companies
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FEATURED CARD ────────────────────────────────────────────────────── */
function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}` as any}
      className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Image mosaic */}
      <div className="relative w-full sm:w-64 shrink-0 h-56 sm:h-auto overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-full h-full">
          {product.heroImages.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ transitionDelay: `${i * 50}ms` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/25" />
        {/* Hover shine */}
        <div className="absolute inset-0 bg-linear-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/0 group-hover:via-gold/5 group-hover:to-gold/0 transition-all duration-700" />
        <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-sm text-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-gold/20">
          {product.skuCount} SKUs
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 justify-between">
        <div>
          {/* Title with animated underline */}
          <h3 className="text-xl font-extrabold text-card-foreground mb-2 group-hover:text-gold transition-colors duration-300 leading-tight relative inline-block">
            {product.title}
            <span className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-0.5 bg-gold/40 transition-all duration-400 rounded-full" />
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
            {product.tagline}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-4 mb-5">
            {product.stats.slice(0, 2).map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-base font-extrabold text-foreground leading-none">{s.value}</span>
                <span className="text-[10px] text-muted-foreground mt-0.5">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-1.5">
            {product.categories.slice(0, 4).map((cat) => (
              <span key={cat} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/20 group-hover:bg-gold/3 transition-all duration-300">
                {cat}
              </span>
            ))}
            {product.categories.length > 4 && (
              <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-gold/8 text-gold border border-gold/20">
                +{product.categories.length - 4}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-5 pt-4 border-t border-border text-sm font-bold text-primary group-hover:text-gold transition-colors duration-300">
          View Full Catalogue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}

/* ── CATALOG CARD ─────────────────────────────────────────────────────── */
function CatalogCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      to={`/products/${product.slug}` as any}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden shrink-0">
        <img
          src={product.heroImages[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {/* Ghost second image on hover */}
        <img
          src={product.heroImages[1]}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-navy/80 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <span className="text-gold font-extrabold text-[10px]">{String(index + 3).padStart(2, "0")}</span>
          </div>
        </div>
        <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-sm text-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-gold/15">
          {product.skuCount}
        </div>

        {/* Hover CTA pill */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5 shadow-lg">
            View Products <ArrowRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-[15px] font-bold text-card-foreground mb-1.5 group-hover:text-gold transition-colors duration-300 leading-tight">
          {product.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-1">
          {product.tagline}
        </p>

        {/* Category chips */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {product.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/15 group-hover:bg-gold/2 transition-all duration-300">
              {cat}
            </span>
          ))}
          {product.categories.length > 3 && (
            <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-gold/8 text-gold border border-gold/20">
              +{product.categories.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <span className="text-[11px] text-muted-foreground">{product.categories.length} categories</span>
          <span className="text-[11px] font-semibold text-primary group-hover:text-gold transition-colors flex items-center gap-1">
            Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
