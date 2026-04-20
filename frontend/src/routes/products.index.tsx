import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Package2, ShieldCheck, Truck, BarChart3, Award } from "lucide-react";
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
  { Icon: Award,       label: "RDSO Approved" },
  { Icon: ShieldCheck, label: "GeM Listed" },
  { Icon: BarChart3,   label: "IREPS Empanelled" },
  { Icon: Truck,       label: "PAN-India Delivery" },
  { Icon: Package2,    label: "ISO Certified" },
];

function ProductsIndexPage() {
  const featured = productsData.slice(0, 2);
  const rest = productsData.slice(2);

  return (
    <>
      {/* ── HERO — SPLIT LAYOUT ──────────────────────────────────────── */}
      <section className="relative bg-[oklch(0.08_0.04_250)] overflow-hidden min-h-[80vh] flex items-center">
        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: "repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 8.333%),repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 8%)" }} />
        {/* Ambient glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold rounded-full px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                India's Largest Industrial Supermarket
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
                3 Million<br />
                <span className="text-gold">Products.</span><br />
                <span className="text-white/40 text-3xl md:text-4xl font-bold">One Partner.</span>
              </h1>

              <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mb-10">
                From RDSO-approved railway components to solar infrastructure and agro inputs — Jigisha is your single-window procurement partner across every critical industry.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-gold/20"
                >
                  Request Catalogue <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 text-white/70 font-semibold rounded-xl hover:border-white/30 hover:text-white transition-all text-sm"
                >
                  Browse All Categories
                </a>
              </div>

              {/* Stat pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {heroStats.map((s) => (
                  <div key={s.label} className="flex flex-col items-center justify-center bg-white/4 border border-white/8 rounded-2xl py-4 px-3 gap-1">
                    <CountUp value={s.value} className="text-2xl font-extrabold text-gold leading-none" />
                    <span className="text-[10px] text-white/35 font-semibold tracking-widest uppercase">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — staggered product image mosaic */}
            <div className="hidden lg:grid grid-cols-2 gap-3 h-[520px]">
              {/* Tall left column */}
              <div className="flex flex-col gap-3">
                <div className="relative rounded-2xl overflow-hidden flex-1 group">
                  <img src={productsData[0]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/80] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase">{productsData[0]?.title}</span>
                    <div className="text-white font-extrabold text-sm">{productsData[0]?.skuCount} SKUs</div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img src={productsData[2]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/70] to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-bold text-white/70">{productsData[2]?.title}</div>
                </div>
              </div>
              {/* Right column — offset */}
              <div className="flex flex-col gap-3 pt-10">
                <div className="relative rounded-2xl overflow-hidden h-36 group">
                  <img src={productsData[1]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/70] to-transparent" />
                  <div className="absolute bottom-3 left-3 text-[10px] font-bold text-white/70">{productsData[1]?.title}</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden flex-1 group">
                  <img src={productsData[3]?.heroImages[0] ?? warehouseImg} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.04_250)/80] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[10px] font-bold text-gold tracking-widest uppercase">{productsData[3]?.title}</span>
                    <div className="text-white font-extrabold text-sm">{productsData[3]?.skuCount} SKUs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <div className="bg-navy border-y border-white/5 py-5">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustBadges.map(({ Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white/35 hover:text-gold transition-colors group cursor-default">
                <Icon className="w-4 h-4 group-hover:text-gold transition-colors shrink-0" />
                <span className="text-[11px] font-bold tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED SPOTLIGHT ───────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-10">
            <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Top Categories</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Featured Product Lines</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {featured.map((product) => (
              <FeaturedCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL CATALOG ─────────────────────────────────────────────── */}
      <section id="catalog" className="pt-4 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-2">Complete Catalog</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">All {productsData.length} Verticals</h2>
            </div>
            <span className="hidden md:block text-sm text-muted-foreground">3M+ total SKUs across all categories</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((product, i) => (
              <CatalogCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO PROCURE ───────────────────────────────────────────── */}
      <section className="py-20 bg-[oklch(0.97_0.004_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left — text */}
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

            {/* Right — platform cards */}
            <div className="flex flex-col gap-4">
              {[
                { badge: "01", name: "GeM Portal", desc: "Government e-Marketplace compliant procurement for all Govt. departments and PSUs." },
                { badge: "02", name: "IREPS",       desc: "Indian Railway E-Procurement System — RDSO-approved items for railway units across 17 zones." },
                { badge: "03", name: "Direct B2B",  desc: "Custom BoQ, bulk pricing, and OEM supply via jigisha.store — response within 24 hours." },
              ].map((p) => (
                <div key={p.badge} className="group flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-5 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center shrink-0 group-hover:bg-navy/90 transition-colors">
                    <span className="text-gold font-extrabold text-xs">{p.badge}</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground text-sm mb-1 group-hover:text-gold transition-colors">{p.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Start Procuring Today</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Can't Find What You Need?
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Jigisha sources across 28+ domains and 7,500+ vendors. If it's industrial — we can procure it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-bold rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Talk to a Specialist <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/group"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/8 transition-colors text-sm"
            >
              Explore Our Companies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── FEATURED CARD — horizontal, large ───────────────────────────────── */
function FeaturedCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}` as any}
      className="group relative flex flex-col sm:flex-row overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-2xl transition-all duration-400"
    >
      {/* Image — 2×2 mosaic */}
      <div className="relative w-full sm:w-64 shrink-0 h-56 sm:h-auto overflow-hidden">
        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-full h-full">
          {product.heroImages.slice(0, 4).map((img, i) => (
            <div key={i} className="overflow-hidden">
              <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ transitionDelay: `${i * 60}ms` }} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20" />
        {/* SKU badge */}
        <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-sm text-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full border border-gold/20">
          {product.skuCount} SKUs
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-7 justify-between">
        <div>
          <h3 className="text-xl font-extrabold text-card-foreground mb-2 group-hover:text-gold transition-colors duration-300 leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
            {product.tagline}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-3 mb-5">
            {product.stats.slice(0, 2).map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-base font-extrabold text-foreground leading-none">{s.value}</span>
                <span className="text-[10px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-1.5">
            {product.categories.slice(0, 4).map((cat) => (
              <span key={cat} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/20 transition-colors duration-300">
                {cat}
              </span>
            ))}
            {product.categories.length > 4 && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gold/8 text-gold border border-gold/20">
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

/* ── CATALOG CARD — compact grid card ────────────────────────────────── */
function CatalogCard({ product, index }: { product: Product; index: number }) {
  return (
    <Link
      to={`/products/${product.slug}` as any}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-xl transition-all duration-400"
    >
      {/* Image strip */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <img
          src={product.heroImages[0]}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading={index < 3 ? "eager" : "lazy"}
        />
        {/* Secondary image ghost on hover */}
        <img
          src={product.heroImages[1]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-35 transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

        {/* Index badge */}
        <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-navy/75 backdrop-blur-sm border border-white/10 flex items-center justify-center">
          <span className="text-gold font-extrabold text-[10px]">{String(index + 3).padStart(2, "0")}</span>
        </div>

        {/* SKU badge */}
        <div className="absolute top-3 right-3 bg-navy/80 backdrop-blur-sm text-gold text-[10px] font-extrabold px-2.5 py-1 rounded-full">
          {product.skuCount}
        </div>

        {/* Hover CTA */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-gold/90 backdrop-blur-sm text-gold-foreground text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5">
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

        <div className="flex flex-wrap gap-1.5 mb-3">
          {product.categories.slice(0, 3).map((cat) => (
            <span key={cat} className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border group-hover:border-gold/20 transition-colors duration-300">
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
          <span className="text-[11px] text-muted-foreground">{product.stats.length} key metrics</span>
          <span className="text-[11px] font-semibold text-primary group-hover:text-gold transition-colors flex items-center gap-1">
            Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
