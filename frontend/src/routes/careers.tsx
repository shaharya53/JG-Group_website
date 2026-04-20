import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import careersImg from "../assets/careers-team.jpg";
import { Briefcase, MapPin, Clock, GraduationCap, ChevronRight, Star, Users, Rocket, Heart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
  head: () => ({
    meta: [
      { title: "Careers at Jigisha Group — Join The Industrial Universe" },
      { name: "description", content: "Build your career at Jigisha Group. 34+ active roles across engineering, railways, technology, defence, and more." },
      { property: "og:title", content: "Careers — Jigisha Group" },
      { property: "og:description", content: "Join India's largest industrial conglomerate. National-level projects, growth pathways, and attractive compensation." },
    ],
  }),
});

const whyJoin = [
  { icon: Rocket, title: "Project-Driven Learning", desc: "Work on national-level projects in Indian Railways, Metro Rail, PSU Sectors, and Industrial Clusters." },
  { icon: Users, title: "Universal Exposure", desc: "Part of a team across 50+ cities, 200+ workshops, industrial zones, and 1,000+ service centres." },
  { icon: Star, title: "Technology First", desc: "Exposure to cutting-edge industrial tools, enterprise automation, and digitised services." },
  { icon: Heart, title: "Family-Oriented Culture", desc: "Blend of professionalism with Indian cultural values, mutual respect, and family ethics." },
];

const openings = [
  { title: "Senior Manager — Railway Projects", company: "Jigisha Railtech", location: "Bhopal / Pan-India", exp: "10-15 yrs", dept: "Projects" },
  { title: "OHE Installation Engineer", company: "Jigisha Railtech", location: "Railway Zones PAN India", exp: "5-10 yrs", dept: "Engineering" },
  { title: "KAWACH System Technician", company: "Jigisha Railtech", location: "Pan-India", exp: "3-7 yrs", dept: "Railways" },
  { title: "Business Development Manager", company: "Jigisha Enterprises", location: "Delhi NCR / Mumbai", exp: "7-12 yrs", dept: "Sales" },
  { title: "Purchase Manager (Industrial)", company: "Jigisha Enterprises", location: "Bhopal / Ahmedabad", exp: "7-12 yrs", dept: "Procurement" },
  { title: "Defence Supply Specialist", company: "Jigisha Defence Tech", location: "Delhi NCR", exp: "5-10 yrs", dept: "Defence" },
  { title: "Web Developer (Full Stack)", company: "Jigisha Infotech", location: "Bhopal / Remote", exp: "3-6 yrs", dept: "Technology" },
  { title: "AI/ML Engineer (JiSHAbot)", company: "Jigisha Infotech", location: "Remote/Hybrid", exp: "3-7 yrs", dept: "Technology" },
  { title: "Solar Energy Engineer", company: "Jigisha Green", location: "Pan-India", exp: "3-8 yrs", dept: "Renewable Energy" },
  { title: "EPC Project Manager", company: "Jigisha Engineering", location: "Pan-India", exp: "10-15 yrs", dept: "Infrastructure" },
  { title: "E-Commerce Manager", company: "Jigisha Retails", location: "Ahmedabad", exp: "5-8 yrs", dept: "Retail" },
  { title: "Graduate Engineering Trainee", company: "All Subsidiaries", location: "Pan-India", exp: "Fresher", dept: "Engineering" },
  { title: "Management Trainee (MBA)", company: "All Subsidiaries", location: "Pan-India", exp: "Fresher", dept: "Management" },
  { title: "Internship — Engineering", company: "Multiple Subsidiaries", location: "Bhopal / Ahmedabad", exp: "Students", dept: "Technical" },
];

function CareersPage() {
  return (
    <>
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={careersImg} alt="Jigisha team" className="w-full h-full object-cover" width={1280} height={720} />
        <div className="absolute inset-0 bg-hero-gradient opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase">Build Your Career</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Careers at Jigisha</h1>
            <p className="mt-3 text-navy-foreground/70">Join the Industrial Universe</p>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Why Build Your Career Here?" subtitle="We're not just offering a job — we're giving you a mission." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyJoin.map(w => (
              <div key={w.title} className="flex gap-4 p-5 bg-card rounded-xl border border-border shadow-card">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                  <w.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{w.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading title="Current Openings" subtitle="Active and recurring vacancies across all group companies" />
          <div className="mt-12 space-y-4">
            {openings.map(o => (
              <div key={o.title} className="bg-card rounded-xl p-5 border border-border shadow-card hover:shadow-card-hover transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{o.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {o.company}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {o.location}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {o.exp}</span>
                      <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" /> {o.dept}</span>
                    </div>
                  </div>
                  <a href="mailto:hr@jigisha.in" className="inline-flex items-center gap-1 px-4 py-2 text-xs font-semibold bg-gold text-gold-foreground rounded-lg hover:opacity-90 transition-opacity shrink-0">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <SectionHeading title="How to Apply" />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="font-semibold text-card-foreground">Email</p>
              <p className="mt-1 text-muted-foreground">hr@jigisha.in</p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="font-semibold text-card-foreground">WhatsApp HR</p>
              <p className="mt-1 text-muted-foreground">+91-8989167888</p>
            </div>
            <div className="bg-card rounded-xl p-5 border border-border">
              <p className="font-semibold text-card-foreground">Campus Hiring</p>
              <p className="mt-1 text-muted-foreground">+91-9893506957</p>
            </div>
          </div>
          <blockquote className="mt-10 p-6 bg-surface rounded-xl border-l-4 border-gold text-left">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "At Jigisha, we are not just offering you a job — we are giving you a mission. Join us if you believe in building a new India powered by industrial innovation, national-scale service delivery, and people-first partnerships."
            </p>
            <p className="mt-3 text-xs font-semibold text-foreground">— Founder, Jigisha Enterprises</p>
          </blockquote>
        </div>
      </section>
    </>
  );
}
