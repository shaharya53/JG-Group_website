import { Link } from "@tanstack/react-router";
import { ChevronRight, CheckCircle2, Sparkles, Award, Users, ShieldCheck, type LucideIcon } from "lucide-react";
import { CountUp } from "./CountUp";

export type Offering = { title: string; desc: string };
export type Stat = { value: string; label: string };

export interface DetailPageProps {
  category: "services" | "products" | "industries";
  title: string;
  tagline: string;
  overview: string;
  heroImage: string;
  Icon: LucideIcon;
  offerings: Offering[];
  capabilities: string[];
  whyUs: { title: string; desc: string }[];
  stats?: Stat[];
  ctaLabel?: string;
}

const labels = {
  services: { back: "← All Services", cta: "Request Service Quote" },
  products: { back: "← All Products", cta: "Request Catalogue" },
  industries: { back: "← All Industries", cta: "Discuss Your Project" },
};

export function DetailPage({
  category,
  title,
  tagline,
  overview,
  heroImage,
  Icon,
  offerings,
  capabilities,
  whyUs,
  stats,
  ctaLabel,
}: DetailPageProps) {
  const l = labels[category];
  return (
    <>
      {/* Hero */}
      <section className="relative h-80 md:h-96 overflow-hidden">
        <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <Link to={`/${category}`} className="text-gold/80 text-xs font-semibold tracking-widest uppercase hover:text-gold">
              {l.back}
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold text-navy-foreground mt-3">{title}</h1>
            <p className="mt-4 text-navy-foreground/80 text-lg max-w-2xl mx-auto">{tagline}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-5">About {title}</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
        </div>
      </section>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section className="py-12 bg-navy">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <CountUp value={s.value} className="block text-3xl md:text-4xl font-extrabold text-gold" />
                <div className="mt-1 text-navy-foreground/70 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Offerings */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Key Offerings</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map(o => (
              <div key={o.title} className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground text-lg">{o.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Our Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map(c => (
              <div key={c} className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border">
                <CheckCircle2 className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-gold text-xs font-semibold tracking-widest uppercase">Why Jigisha</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((w, i) => {
              const Ic = [Award, ShieldCheck, Users][i % 3];
              return (
                <div key={w.title} className="bg-card rounded-xl p-6 border border-border text-center">
                  <div className="w-12 h-12 mx-auto rounded-full bg-navy flex items-center justify-center mb-4">
                    <Ic className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-navy-foreground/80 mb-8">Talk to our specialists about {title.toLowerCase()} requirements.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
            {ctaLabel ?? l.cta} <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
