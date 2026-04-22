import React from "react";

const logos = [
  "AGRO.png", "AUTOMOBILES.png", "DEFENSE.png", "ENGINEERING.png", "ENVIROCARE.png",
  "GO GLOBAL.png", "GREEN.png", "INDUSTRIES.png", "INFIN.png", "INFOTECH.png",
  "INFRA.png", "INTERNATIONAL.png", "JE.png", "JEEPL.png", "JGC.png", "JISPL.png",
  "JIU.png", "LOGISTICS.png", "MEDIA.png", "PHARMA.png", "RAILTECH.png",
  "RETAIL.png", "TECHNOLOGIES.png"
];

export const CompanyMarquee = () => {
  return (
    <section className="py-16 bg-white overflow-hidden border-y border-border">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-12">
        <p className="text-gold text-[11px] font-bold tracking-[0.3em] uppercase mb-3">Our Group Enterprises</p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
          19 Group Companies
        </h2>
        <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto leading-relaxed">
          One conglomerate. Every sector. Powering India's industrial growth.
        </p>
      </div>

      {/* Ticker */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex whitespace-nowrap animate-ticker hover:paused py-2">
          {[logos, logos].map((set, si) => (
            <div key={si} className="flex items-center gap-12 md:gap-16 px-8">
              {set.map((logo, i) => (
                <div
                  key={`${si}-${i}`}
                  className="w-44 md:w-60 h-24 md:h-32 flex items-center justify-center shrink-0 transition-all duration-400 hover:scale-110"
                >
                  <img
                    src={`/all_company/${logo}`}
                    alt={logo.replace(".png", "")}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
