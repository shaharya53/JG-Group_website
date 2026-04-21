import { useState, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { MapPin, Phone, Mail, Clock, Globe, CheckCircle, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Jigisha Group of Companies" },
      { name: "description", content: "Get in touch with Jigisha Group. Headquarters in Bhopal, registered office in Ahmedabad. 24/7 availability." },
      { property: "og:title", content: "Contact — Jigisha Group" },
      { property: "og:description", content: "Reach out to India's largest industrial conglomerate. Available 24/7." },
    ],
  }),
});

const offices = [
  { type: "Group Headquarters", address: "F 904, 10th Floor, Rachna Tower, Rachna Nagar, Bhopal, Madhya Pradesh, India – 462023" },
  { type: "Registered Office", address: "923, 9th Floor, I Square Corporate Park, Cross Road, Science City Road, Sola, Ahmedabad, Gujarat – 380060" },
  { type: "Works / Plant", address: "Plot No. 2 & 3, Radhe Dham, Gram Khejda Baramad, Bhanpur, Bhopal, MP – 462023" },
];

const regions = [
  { name: "Western India", cities: "Ahmedabad (Reg. Office) | Mumbai | Pune | Vadodara | Surat" },
  { name: "Central India", cities: "Bhopal (HQ) | Indore | Nagpur | Raipur | Bhilai" },
  { name: "Northern India", cities: "Delhi NCR (LHO) | Lucknow | Jaipur | Kanpur | Ludhiana" },
  { name: "Southern India", cities: "Chennai (LHO) | Hyderabad (LHO) | Bengaluru | Coimbatore | Kochi" },
  { name: "Eastern India", cities: "Kolkata (LHO) | Bhubaneswar | Ranchi | Guwahati | Patna" },
];

const inputCls = "w-full px-4 py-3 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring hover:border-gold/40 transition-colors";

interface ContactValues {
  fullName: string; email: string; phone: string;
  company: string; enquiryType: string; message: string;
}

const CONTACT_EMPTY: ContactValues = { fullName: "", email: "", phone: "", company: "", enquiryType: "", message: "" };

function ContactForm() {
  const [values, setValues] = useState<ContactValues>(CONTACT_EMPTY);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!values.fullName || !values.email || !values.message) {
      setError("Please fill in your name, email and message."); return;
    }
    try {
      setSending(true);
      const apiBase = (import.meta as any).env?.VITE_API_URL ?? "";
      const res = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { setError(data?.error ?? "Could not send message. Please try again."); return; }
      setDone(true);
      setValues(CONTACT_EMPTY);
      setTimeout(() => setDone(false), 6000);
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setSending(false);
    }
  };

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <p className="font-extrabold text-foreground">Message Sent!</p>
        <p className="text-sm text-muted-foreground">Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="fullName" value={values.fullName} onChange={handleChange} type="text" placeholder="Full Name *" className={inputCls} />
        <input name="email" value={values.email} onChange={handleChange} type="email" placeholder="Email Address *" className={inputCls} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input name="phone" value={values.phone} onChange={handleChange} type="tel" placeholder="Phone Number" className={inputCls} />
        <input name="company" value={values.company} onChange={handleChange} type="text" placeholder="Company Name" className={inputCls} />
      </div>
      <select name="enquiryType" value={values.enquiryType} onChange={handleChange} className={`${inputCls} appearance-none cursor-pointer`}>
        <option value="">Select Enquiry Type</option>
        <option>Product Enquiry</option>
        <option>Service Request</option>
        <option>Partnership / JV</option>
        <option>Vendor Registration</option>
        <option>Career Enquiry</option>
        <option>General Enquiry</option>
      </select>
      <textarea name="message" value={values.message} onChange={handleChange} rows={4} placeholder="Your Message *" className={`${inputCls} resize-none`} />
      {error && <p className="text-xs text-red-500 font-semibold">{error}</p>}
      <button type="submit" disabled={sending} className="w-full py-3 bg-gold text-gold-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm flex items-center justify-center gap-2 disabled:opacity-60">
        {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : "Send Message"}
      </button>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase">24/7 Available</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy-foreground mt-2">Contact Us</h1>
          <p className="mt-4 text-navy-foreground/70 max-w-xl mx-auto">
            Reach out to our team for industrial procurement, partnerships, or any enquiry.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <SectionHeading title="Get In Touch" center={false} />
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Phone (Primary)</p>
                  <p className="text-sm text-muted-foreground">(+91) 8989167888</p>
                  <p className="text-sm text-muted-foreground">(+91) 755 299 4135 | (+91) 755 299 4094</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Services</p>
                  <p className="text-sm text-muted-foreground">(+91) 9540308335 | (+91) 7554947138</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">info@jigisha.in | info@jigisha.co.in</p>
                  <p className="text-sm text-muted-foreground">HR: hr@jigisha.in</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Working Hours</p>
                  <p className="text-sm text-muted-foreground">24 Hours — 7 Days a Week (Including Sundays & Public Holidays)</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Websites</p>
                  <p className="text-sm text-muted-foreground">www.jigisha.co.in | www.jigisha.in | www.jigisha.global</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8">
              <p className="font-semibold text-sm text-foreground mb-3">Follow Us</p>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <span>LinkedIn</span> · <span>Facebook</span> · <span>Instagram</span> · <span>Twitter/X</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="text-xl font-bold text-card-foreground mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Our Offices" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map(o => (
              <div key={o.type} className="bg-card rounded-xl p-5 border border-border shadow-card">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-gold" />
                  <h4 className="font-semibold text-sm text-card-foreground">{o.type}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Network */}
      <section className="py-16 bg-background">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading title="Regional Hub Network" subtitle="Pan-India presence with 5 regional hubs" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map(r => (
              <div key={r.name} className="bg-card rounded-xl p-4 border border-border text-center">
                <h4 className="font-semibold text-sm text-card-foreground">{r.name}</h4>
                <p className="mt-2 text-xs text-muted-foreground">{r.cities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
