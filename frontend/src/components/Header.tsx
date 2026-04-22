import { Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ArrowRight, Phone } from "lucide-react";

/* ── NAV DATA ───────────────────────────────────────────────────────── */
const megaMenus = {
  Services: {
    to: "/services",
    cols: [
      {
        heading: "Core Sectors",
        items: [
          { label: "Railway Services",    sub: "Supply, SITC & maintenance",      to: "/services/railway" },
          { label: "Metro Rail Services", sub: "End-to-end metro infrastructure", to: "/services/metro-rail" },
          { label: "Defence Supply",      sub: "Make-in-India grade components",  to: "/services/defence" },
        ],
      },
      {
        heading: "Industrial",
        items: [
          { label: "Industrial Services", sub: "Manufacturing & precision eng.",  to: "/services/industrial" },
          { label: "Commercial Services", sub: "EPC, procurement & projects",     to: "/services/commercial" },
          { label: "ICBMRO & BMRO",       sub: "Condition-based maintenance",     to: "/services/icbmro" },
        ],
      },
    ],
  },
  Products: {
    to: "/products",
    cols: [
      {
        heading: "Rail & Defence",
        items: [
          { label: "Railway Components",         sub: "RDSO-approved parts",           to: "/products/railway-components" },
          { label: "Metro Rail Systems",          sub: "Station, rolling & depot",      to: "/products/metro-rail-systems" },
          { label: "Defence & Aerospace",         sub: "Strategic-grade materials",     to: "/products/defence-aerospace" },
          { label: "Industrial Machinery",        sub: "CNC, fabrication & tooling",    to: "/products/industrial-machinery" },
        ],
      },
      {
        heading: "Industrial & Others",
        items: [
          { label: "Electricals & Electronics",   sub: "LED, VFD, sensors & panels",   to: "/products/electricals-electronics" },
          { label: "Automobile Parts",            sub: "Fleet & EV accessories",        to: "/products/automobile-parts" },
          { label: "Green Energy",                sub: "Solar, Bio-CNG & ESG tech",     to: "/products/green-energy" },
          { label: "Agro & Pharma",               sub: "Inputs, APIs & cold-chain",     to: "/products/agro-pharma" },
        ],
      },
      {
        heading: "Retail",
        items: [
          { label: "Electronics & Gadgets",       sub: "2,400+ devices & accessories",  to: "/products/electronics-gadgets" },
          { label: "Fashion & Lifestyle",         sub: "5,100+ apparel & accessories",  to: "/products/fashion-lifestyle" },
          { label: "Health & Personal Care",      sub: "2,800+ health & wellness",      to: "/products/health-personal-care" },
        ],
      },
    ],
  },
  Industries: {
    to: "/industries",
    cols: [
      {
        heading: "Infrastructure",
        items: [
          { label: "Indian Railways",              sub: "17 zones, 7,000+ stations",    to: "/industries/railways" },
          { label: "Metro Rail",                   sub: "Urban mobility solutions",     to: "/industries/metro-rail" },
          { label: "Construction & EPC",           sub: "Projects, plants & civil",     to: "/industries/construction" },
          { label: "Logistics & Supply Chain",     sub: "3PL/4PL & warehousing",        to: "/industries/logistics" },
          { label: "Manufacturing",                sub: "OEM, precision & process",     to: "/industries/manufacturing" },
        ],
      },
      {
        heading: "Technology & Others",
        items: [
          { label: "Aerospace & Defence",          sub: "Strategic & MIL-grade",        to: "/industries/aerospace-defence" },
          { label: "Energy & Power",               sub: "Solar, grid & green infra",    to: "/industries/energy" },
          { label: "Infotech & Digital",           sub: "AI, IoT & industrial IT",      to: "/industries/infotech" },
          { label: "Healthcare & Pharma",          sub: "Devices, APIs & cold-chain",   to: "/industries/healthcare" },
          { label: "Agriculture",                  sub: "Inputs, FPOs & agro-tech",     to: "/industries/agriculture" },
          { label: "Environment",                  sub: "ETP, STP & sustainability",    to: "/industries/others" },
        ],
      },
    ],
  },
} as const;

type MegaKey = keyof typeof megaMenus;

type NavItem =
  | { kind: "internal"; label: string; to: string }
  | { kind: "external"; label: string; to: string }
  | { kind: "mega";     key: MegaKey };

const navItems: NavItem[] = [
  { kind: "internal", label: "Home",       to: "/"                               },
  { kind: "external", label: "Who We Are", to: "https://jigisha.group/"          },
  { kind: "internal", label: "About",      to: "/about"                          },
  { kind: "mega",     key: "Services"                                             },
  { kind: "mega",     key: "Products"                                             },
  { kind: "mega",     key: "Industries"                                           },
  { kind: "internal", label: "The Group",  to: "/group"                          },
  { kind: "external", label: "Careers",    to: "https://careers.jigisha.group/"  },
];

/* ── HEADER ─────────────────────────────────────────────────────────── */
export function Header() {
  const location = useLocation();
  const [scrolled, setScrolled]       = useState(false);
  const [openMenu, setOpenMenu]       = useState<MegaKey | null>(null);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close on route change */
  useEffect(() => { setOpenMenu(null); setMobileOpen(false); }, [location.pathname]);

  /* escape key */
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") setOpenMenu(null); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  /* delayed close so cursor can travel to panel */
  function startClose() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }
  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  const isActive = (to: string) =>
    location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  return (
    <>
      {/* ── TOPBAR ──────────────────────────────────────────────────── */}
      <div className="hidden md:block bg-navy">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-8">
          <div className="flex items-center gap-1.5 text-[11px] text-navy-foreground/50 font-medium">
            <Phone className="w-2.5 h-2.5" />
            <a href="tel:+918989167888" className="hover:text-gold transition-colors">+91 8989167888</a>
            <span className="mx-2 opacity-30">|</span>
            <a href="mailto:info@jigisha.in" className="hover:text-gold transition-colors">info@jigisha.in</a>
          </div>
          <span className="text-[11px] font-bold tracking-[0.18em] text-gold uppercase">The Industrial Universe</span>
        </div>
      </div>

      {/* ── MAIN NAV ────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 bg-card transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_20px_-4px_oklch(0.2_0.06_250/0.12)] border-b border-border" : "border-b border-border/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-[62px]">

          {/* LOGO */}
          <Link to="/" className="flex items-center group shrink-0">
            <img
              src="/JGC.png"
              alt="Jigisha Group of Companies"
              className="h-7 md:h-10 w-auto object-contain group-hover:opacity-85 transition-opacity"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden xl:flex items-center gap-0.5"
            onMouseLeave={startClose}
            onMouseEnter={cancelClose}
          >
            {navItems.map((item) => {
              if (item.kind === "mega") {
                const active = isActive(megaMenus[item.key].to) || openMenu === item.key;
                return (
                  <button
                    key={item.key}
                    onMouseEnter={() => { cancelClose(); setOpenMenu(item.key); }}
                    onClick={() => setOpenMenu(p => p === item.key ? null : item.key)}
                    className={`relative flex items-center gap-1 px-2 py-2 text-[13px] font-semibold rounded-lg transition-colors ${
                      active ? "text-gold bg-gold/10" : "text-foreground/65 hover:text-gold hover:bg-gold/8"
                    }`}
                  >
                    {item.key}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openMenu === item.key ? "rotate-180" : ""}`} />
                    {isActive(megaMenus[item.key].to) && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-gold rounded-full" />}
                  </button>
                );
              }
              if (item.kind === "external") {
                return (
                  <a key={item.to} href={item.to} target="_blank" rel="noopener noreferrer"
                    className="px-2 py-2 text-[13px] font-semibold rounded-lg transition-colors text-foreground/65 hover:text-gold hover:bg-gold/8">
                    {item.label}
                  </a>
                );
              }
              const active = isActive(item.to);
              return (
                <Link key={item.to} to={item.to as any}
                  className={`relative px-2 py-2 text-[13px] font-semibold rounded-lg transition-colors ${
                    active ? "text-gold bg-gold/10" : "text-foreground/65 hover:text-gold hover:bg-gold/8"
                  }`}
                >
                  {item.label}
                  {active && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-gold rounded-full" />}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className={`px-3 py-2 text-[13px] font-semibold rounded-lg transition-colors ${
                isActive("/contact") ? "text-gold bg-gold/10" : "text-foreground/65 hover:text-gold hover:bg-gold/8"
              }`}
            >
              Contact
            </Link>
            <Link
              to="/get-quote"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-gold-foreground text-[13px] font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm"
            >
              Get Quote <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileOpen(p => !p)}
            className="xl:hidden w-9 h-9 flex items-center justify-center text-foreground/70 hover:text-foreground rounded-lg hover:bg-accent transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* ── MEGA PANEL ──────────────────────────────────────────────── */}
        {openMenu && (
          <div
            className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-[0_16px_40px_-8px_oklch(0.2_0.06_250/0.1)] animate-fade-in z-50"
            onMouseEnter={cancelClose}
            onMouseLeave={startClose}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-7">
              <div className="flex gap-12">
                {/* Item columns */}
                <div className={`flex-1 grid gap-8 ${megaMenus[openMenu].cols.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                  {megaMenus[openMenu].cols.map((col) => (
                    <div key={col.heading}>
                      <p className="text-[10px] font-extrabold tracking-[0.22em] uppercase text-gold mb-3 pb-2 border-b border-border">{col.heading}</p>
                      <div className="flex flex-col gap-0.5">
                        {col.items.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to as any}
                            onClick={() => setOpenMenu(null)}
                            className="group flex items-start gap-3 px-2.5 py-2 rounded-xl hover:bg-gold/8 transition-colors"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold shrink-0 mt-2 transition-colors" />
                            <div>
                              <div className="text-[13px] font-semibold text-foreground/80 group-hover:text-gold transition-colors leading-none mb-0.5">{item.label}</div>
                              <div className="text-[11px] text-muted-foreground">{item.sub}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: view all */}
                <div className="hidden xl:flex flex-col gap-3 w-52 shrink-0 pl-8 border-l border-border">
                  <p className="text-[10px] font-extrabold tracking-[0.22em] uppercase text-gold">Quick Access</p>
                  <Link
                    to={megaMenus[openMenu].to as any}
                    onClick={() => setOpenMenu(null)}
                    className="group flex items-center justify-between px-4 py-3.5 bg-gold/10 border border-gold/30 rounded-2xl hover:bg-gold/18 transition-colors shadow-sm"
                  >
                    <div>
                      <div className="text-sm font-bold text-gold leading-none mb-0.5">All {openMenu}</div>
                      <div className="text-[11px] text-foreground/50">Browse full catalogue</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-0.5 transition-transform shrink-0" />
                  </Link>
                  {openMenu === "Services" && (
                    <Link
                      to="/domains"
                      onClick={() => setOpenMenu(null)}
                      className="group flex items-center justify-between px-4 py-3.5 bg-navy/8 border border-border rounded-2xl hover:bg-navy/14 hover:border-navy/30 transition-colors"
                    >
                      <div>
                        <div className="text-sm font-bold text-foreground/80 group-hover:text-foreground leading-none mb-0.5">View All Domains</div>
                        <div className="text-[11px] text-foreground/45">21 group companies</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0" />
                    </Link>
                  )}
                  <p className="text-[11px] text-muted-foreground leading-relaxed mt-auto">
                    3M+ products · 7,500+ vendors · 21 companies
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop */}
      {openMenu && (
        <div
          className="fixed inset-0 z-40 bg-foreground/5"
          style={{ top: scrolled ? "62px" : "94px" }}
          onClick={() => setOpenMenu(null)}
        />
      )}

      {/* ── MOBILE MENU ─────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 z-40 bg-card border-b border-border shadow-xl overflow-y-auto max-h-[calc(100vh-62px)] animate-fade-in" style={{ top: "62px" }}>

          <nav className="flex flex-col p-3">
            {[...navItems, { kind: "internal" as const, label: "Contact", to: "/contact" }].map((item) => {
              if (item.kind === "mega") {
                const key = item.key;
                return (
                  <div key={key}>
                    <button
                      onClick={() => setMobileExpanded(p => p === key ? null : key)}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                        mobileExpanded === key ? "text-gold bg-gold/10" : "text-foreground/70 hover:text-gold hover:bg-gold/8"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        {isActive(megaMenus[key].to) && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                        {key}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? "rotate-180 text-gold" : "text-muted-foreground"}`} />
                    </button>
                    {mobileExpanded === key && (
                      <div className="mx-4 mb-2 overflow-hidden">
                        <div className="pl-4 border-l-2 border-gold/30 flex flex-col gap-0.5 py-1">
                          <Link
                            to={megaMenus[key].to as any}
                            onClick={() => setMobileOpen(false)}
                            className="py-2 text-[13px] font-bold text-gold"
                          >
                            View All {key} →
                          </Link>
                          {key === "Services" && (
                            <Link
                              to="/domains"
                              onClick={() => setMobileOpen(false)}
                              className="py-2 text-[13px] font-semibold text-foreground/70 hover:text-foreground"
                            >
                              View All Domains →
                            </Link>
                          )}
                          {(megaMenus[key].cols as unknown as { heading: string; items: { label: string; sub: string; to: string }[] }[])
                            .flatMap(c => c.items).map(subItem => (
                              <Link
                                key={subItem.to}
                                to={subItem.to as any}
                                onClick={() => setMobileOpen(false)}
                                className="py-1.5 text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.kind === "external") {
                return (
                  <a
                    key={item.to}
                    href={item.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors text-foreground/70 hover:text-gold hover:bg-gold/8"
                  >
                    {item.label}
                  </a>
                );
              }
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to as any}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors ${
                    active ? "text-gold bg-gold/10" : "text-foreground/70 hover:text-gold hover:bg-gold/8"
                  }`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-gold mr-2.5" />}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="p-4 border-t border-border bg-muted/30">
            <div className="flex flex-col gap-3 mb-6 px-2">
              <a href="tel:+918989167888" className="flex items-center gap-3 text-xs font-medium text-foreground/70 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-navy" />
                </div>
                +91 8989167888
              </a>
              <a href="mailto:info@jigisha.in" className="flex items-center gap-3 text-xs font-medium text-foreground/70 hover:text-gold transition-colors">
                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5 text-navy rotate-90" /> {/* Reusing Phone for simplicity or could use Mail */}
                </div>
                info@jigisha.in
              </a>
            </div>

            <Link
              to="/get-quote"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-gold-foreground text-sm font-bold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
            >
              Get Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
