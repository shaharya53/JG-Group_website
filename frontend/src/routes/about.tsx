import { createFileRoute, Link } from "@tanstack/react-router";
import { CountUp } from "../components/CountUp";
import aboutImg from "../assets/about-office.jpg";
import { Target, Eye, Heart, Users, Award, Shield, Check, ArrowRight, Quote, Globe, Briefcase, MapPin, Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Jigisha Group of Companies" },
      { name: "description", content: "Learn about Jigisha Group — India's largest industrial supermarket with 19 subsidiaries, 3M+ products and 7500+ vendors." },
      { property: "og:title", content: "About Us — Jigisha Group" },
      { property: "og:description", content: "The Industrial Universe — Serving Industries With Honesty, Pride & Honour." },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-white">
      {/* ── TOP ANNOUNCEMENT ──────────────────────────────────────── */}
      <div className="bg-gold text-gold-foreground text-center text-[10px] md:text-xs font-bold py-2 tracking-[0.1em] uppercase">
        India's Largest Industrial Supermarket — Serving Industries With Honesty, Pride & Honour
      </div>

      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative bg-[oklch(0.12_0.04_255)] min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)] opacity-20" />
          <div className="grid grid-cols-12 h-full w-full">
             {Array.from({length: 12}).map((_, i) => (
               <div key={i} className="border-r border-white/5 h-full" />
             ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center gap-2 text-gold text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-8 h-px bg-gold/50" />
            The Industrial Universe
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-8">
            ABOUT <br />
            <span className="text-gold">JIGISHA GROUP</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Leading India's industrial transformation through precision manufacturing, global sourcing, and unyielding commitment to quality across 28+ domains.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE (SPLIT) ────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs font-bold tracking-widest uppercase mb-4">Our Genesis</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy leading-tight mb-8">
              Who We Are: <br />
              <span className="text-gold">The Real Story</span>
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Jigisha Group of Companies is a rapidly growing, technology-enabled industrial conglomerate headquartered in Bhopal, Madhya Pradesh, India. Born from a deep understanding of Indian industrial needs — particularly in the Railway, Metro, PSU, and large-scale manufacturing sectors — we are widely recognised as <strong>THE INDUSTRIAL UNIVERSE</strong>.
              </p>
              <p>
                The founders realized that too many organisations were looking for a partner with an "Indian accent"—a real feel of family culture combined with industrial accuracy, high quality consciousness, and a deep commitment to delivery.
              </p>
              <p>
                Today, with 19 specialized subsidiaries and a network of 7,500+ vendors, we serve as the single-source industrial procurement partner for India's most critical sectors.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
               <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <CountUp value="19" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">Group<br/>Companies</span>
               </div>
               <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <CountUp value="3M" className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-gold font-bold" />
                  <span className="text-xs font-bold text-navy uppercase tracking-wider">Industrial<br/>Products</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl skew-y-1">
              <img src={aboutImg} alt="Industrial Facility" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-navy text-white p-8 rounded-2xl shadow-2xl max-w-xs hidden md:block">
              <Quote className="w-8 h-8 text-gold mb-4 opacity-50" />
              <p className="text-sm italic leading-relaxed">
                "We don't just supply. We Buy, We Sell, We Maintain, We Build, We Design, We Deliver."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── GROUP IDENTITY DASHBOARD ─────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.98_0.005_250)]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-navy">Group Identity At A Glance</h2>
            <div className="w-20 h-1 bg-gold mx-auto mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: "Group Name", value: "JIGISHA GROUP OF COMPANIES", icon: Globe },
              { label: "Group Identity", value: "The Industrial Universe", icon: Target },
              { label: "Tagline", value: "Serving Industries With Honesty, Pride & Honour", icon: Award },
              { label: "Founder Chairman", value: "Thakur Umesh Singh", icon: Users },
              { label: "Headquarters", value: "F 904, 10th Floor, Rachna Tower, Bhopal, MP", icon: MapPin },
              { label: "Operating Model", value: "HQ → Regional Hubs → State HQs → Nodes", icon: Shield },
              { label: "Products Portfolio", value: "Over 3 Million Products Across Industries", icon: Briefcase },
              { label: "Vendor Network", value: "7,500+ Approved Vendors Pan-India", icon: Users },
              { label: "Contact Intelligence", value: "info@jigisha.in | 24 Hours Availability", icon: Mail },
            ].map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-gold" />
                </div>
                <div className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                <div className="text-sm font-extrabold text-navy leading-snug">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION CARDS ──────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="text-gold text-xs font-bold tracking-widest uppercase mb-4">Our Purpose</p>
              <h2 className="text-4xl font-extrabold text-navy leading-tight">Driven By Future,<br/>Anchored By Values.</h2>
              <p className="mt-6 text-gray-500 leading-relaxed">
                Our vision and mission aren't just words on a wall; they are the operational pulse of our 19 enterprises.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { 
                  icon: Eye, 
                  title: "Our Vision", 
                  text: "To join our journey to make global markets reachable to everyone, and industrial operations more convenient and profitable for every stakeholder — big or small — across India and the world.",
                  color: "bg-navy"
                },
                { 
                  icon: Target, 
                  title: "Our Mission", 
                  text: "To be a leading industrial supplier, manufacturer, and service provider for Indian Railways, Metro Rail, and various industries — making Jigisha a unique and renowned name for quality services.",
                  color: "bg-gold"
                },
              ].map((item, i) => (
                <div key={i} className={`${item.color} p-10 rounded-3xl text-white shadow-xl`}>
                  <item.icon className={`w-12 h-12 ${item.color === 'bg-gold' ? 'text-navy' : 'text-gold'} mb-6`} />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed italic">"{item.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES (CIRCLES) ────────────────────────────────── */}
      <section className="py-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Our Core Values</h2>
            <p className="text-gold font-bold tracking-widest uppercase text-xs">The Pillars of Jigisha</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-20">
            {[
              { icon: Heart, label: "HONESTY", desc: "Integrity in every transaction" },
              { icon: Shield, label: "PRIDE", desc: "Craftsmanship in every delivery" },
              { icon: Award, label: "HONOUR", desc: "Commitment to national mission" },
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:border-gold transition-all duration-500 shadow-[0_0_40px_rgba(234,179,8,0.2)]">
                  <v.icon className="w-12 h-12 md:w-20 md:h-20 text-gold group-hover:text-navy transition-colors duration-500" />
                </div>
                <h4 className="text-xl md:text-2xl font-black tracking-tighter mb-2">{v.label}</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-md">
              <p className="text-gold text-xs font-bold tracking-widest uppercase mb-3">Target Segments</p>
              <h2 className="text-3xl font-extrabold text-navy">Who We Serve</h2>
              <p className="mt-4 text-gray-500 text-sm">Empowering diverse industrial sectors with single-window procurement intelligence.</p>
            </div>
            <div className="hidden md:block">
              <div className="text-5xl font-black text-gray-100 uppercase tracking-tighter -mb-4">Clients</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Indian Railways & Metro Rail",
              "Defence & Aeropsace Units",
              "Public Sector Undertakings (PSUs)",
              "Engineering & EPC Majors",
              "Healthcare & Pharma Groups",
              "Energy & Power Utilities",
              "International Trade Partners",
              "MSME Manufacturing Hubs",
            ].map((srv, i) => (
              <div key={i} className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-gold transition-colors group">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gold transition-colors">
                  <Check className="w-4 h-4 text-gold group-hover:text-white" />
                </div>
                <span className="text-sm font-bold text-navy truncate">{srv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHAIRMAN'S MESSAGE ───────────────────────────────────── */}
      <section className="py-24 bg-[oklch(0.1_0.03_255)] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-3">
             <Quote className="w-16 h-16 text-gold mb-8 opacity-40" />
             <h2 className="text-3xl md:text-4xl font-extrabold mb-8 italic">"Building the foundation of modern India through industrial excellence."</h2>
             <div className="space-y-6 text-white/70 leading-relaxed text-sm lg:text-base">
                <p>
                  At Jigisha Group, we don't view ourselves merely as suppliers. We are partners in India's rapid industrialization. Whether it is a safety-critical component for the Indian Railways or a strategic asset for Defence, our approach remains the same: accuracy, quality, and commitment.
                </p>
                <p>
                  Our expansion into 19 subsidiaries reflects our ambition to cover every conceivable industrial vertical, ensuring that our clients have one trusted name to rely on, 24 hours a day, 7 days a week.
                </p>
             </div>
             <div className="mt-10">
                <div className="text-gold font-black text-xl lg:text-2xl tracking-tight">Thakur Umesh Singh</div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mt-1">Founder Chairman, Jigisha Group</div>
             </div>
          </div>
          <div className="lg:col-span-2 flex justify-center">
             <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 border-2 border-gold/30 rounded-3xl" />
                <div className="relative aspect-[4/5] bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                   {/* Placeholder for Chairman image */}
                   <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-bold text-center p-10">
                      [Chairman Image]
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-gold">
         <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
               <h2 className="text-3xl md:text-4xl font-black text-navy leading-tight">Scale Your Industrial<br/>Horizon With Us.</h2>
               <p className="mt-4 text-navy/70 font-semibold">Join 7,500+ vendors and thousands of industrial partners.</p>
            </div>
            <div className="flex flex-wrap gap-4">
               <Link to="/contact" className="px-8 py-4 bg-navy text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center gap-2">
                  Get In Touch <ArrowRight className="w-5 h-5" />
               </Link>
              
            </div>
         </div>
      </section>
    </div>
  );
}
