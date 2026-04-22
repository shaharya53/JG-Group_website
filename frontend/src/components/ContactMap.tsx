import { useEffect, useState, lazy, Suspense } from "react";
import { Building2, Mail, MapPin, Clock, Phone, Headphones, Truck } from "lucide-react";
import { motion } from "framer-motion";

// Lazy load the map component to avoid SSR issues with Leaflet
const MapPart = lazy(() => import("./MapPart"));

interface ContactMapProps {
  mapIn: boolean;
}

export function ContactMap({ mapIn }: ContactMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    /* Fix leaflet z-index conflicting with navbar */
    const s = document.createElement("style");
    s.textContent = ".leaflet-container { z-index: 1 !important; transform: translateZ(0); }";
    document.head.appendChild(s);
    return () => { 
      if (document.head.contains(s)) document.head.removeChild(s); 
    };
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 28 }} animate={mapIn ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.1 }}
      style={{ display: "flex", gap: "2rem", minHeight: 600, flexWrap: "wrap" }}>

      {/* Office cards */}
      <div style={{ flex: "1 1 400px", minWidth: 300, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[
          { icon: <Building2 size={24} />, name: "India HQ",  role: "Corporate HQ",      city: "Bhopal, MP",        email: "info@jigisha.in",         hrs: "24/7 All Days" },
          { icon: <Headphones size={24} />,name: "Digital",   role: "Virtual Support",    city: "Across India",      email: "support@jigisha.in",      hrs: "24/7 Global Desk" },
          { icon: <Truck size={24} />,     name: "Logistics", role: "Fulfillment",        city: "Inter-state Hubs",  email: "logistics@jigisha.in",    hrs: "Mon–Sat Ops" },
        ].map((o, i) => (
          <div key={i}
            style={{ padding: "2rem", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "2rem", display: "flex", gap: "1.5rem", transition: "all 0.3s", cursor: "default" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#3b82f6"; (e.currentTarget as HTMLElement).style.transform = "translateX(8px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px -15px rgba(59,130,246,0.1)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "#e2e8f0"; (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}>
            <div style={{ color: "#3b82f6", flexShrink: 0, fontSize: "1.5rem" }}>{o.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a" }}>{o.name}</span>
                <span style={{ fontSize: "0.625rem", fontWeight: 900, textTransform: "uppercase" as const, letterSpacing: "0.1em", padding: "0.25rem 0.5rem", background: "#f1f5f9", borderRadius: "0.5rem", color: "#64748b" }}>{o.role}</span>
              </div>
              {[{ icon: <MapPin size={12} />, val: o.city }, { icon: <Mail size={12} />, val: o.email }, { icon: <Clock size={12} />, val: o.hrs }].map((r, j) => (
                <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.75rem", fontSize: "0.875rem", fontWeight: 600, color: "#64748b", marginBottom: "0.5rem" }}>
                  {r.icon}<span style={{ color: j === 1 ? "#3b82f6" : undefined, wordBreak: "break-all" }}>{r.val}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Map */}
      <div style={{ flex: "2 1 500px", minHeight: 400, borderRadius: "3rem", overflow: "hidden", border: "1px solid #e2e8f0", position: "relative", background: "#f1f5f9" }}>
        {mounted ? (
          <Suspense fallback={<div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", fontWeight: 600 }}>Loading Map...</div>}>
            <MapPart />
          </Suspense>
        ) : (
          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", fontWeight: 600 }}>Preparing Map...</div>
        )}
      </div>
    </motion.div>
  );
}
