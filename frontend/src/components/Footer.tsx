import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src="/JGC.png" alt="Jigisha Group of Companies" className="h-10 w-auto object-contain" />
            </div>
            <p className="text-sm opacity-70 leading-relaxed mb-4">
              India's Largest Industrial Supermarket — Serving Industries With Honesty, Pride & Honour. 3M+ Products. 7,500+ Vendors. 19 Group Companies.
            </p>
            <p className="text-xs text-gold font-semibold tracking-wide">THE INDUSTRIAL UNIVERSE</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "The Group", to: "/group" },
                { label: "Services", to: "/services" },
                { label: "Products", to: "/products" },
                { label: "Industries", to: "/industries" },
                { label: "Careers", to: "/careers" },
                { label: "Contact", to: "/contact" },
              ].map(l => (
                <Link key={l.to} to={l.to as any} className="text-sm opacity-70 hover:opacity-100 transition-opacity">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gold">Key Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>Railway Solutions</li>
              <li>Metro Rail Projects</li>
              <li>ICBMRO & BMRO</li>
              <li>Defence Supply</li>
              <li>Industrial Manufacturing</li>
              <li>Green Energy</li>
              <li>IT & Digital Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-gold">Contact Us</h4>
            <div className="space-y-3 text-sm opacity-70">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                F 904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, MP – 462023
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                (+91) 8989167888
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                info@jigisha.in
              </p>
              <p className="text-xs mt-4">24 Hours — 7 Days a Week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">© {new Date().getFullYear()} Jigisha Group of Companies. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs opacity-50">
            <span>www.jigisha.co.in</span>
            <span>www.jigisha.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
