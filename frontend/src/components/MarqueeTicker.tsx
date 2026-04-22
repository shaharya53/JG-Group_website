import React from "react";

const tickerItems = [
  "3 MILLION+ PRODUCTS",
  "MAKE IN INDIA",
  "RDSO COMPLIANT",
  "GEM REGISTERED SUPPLIER",
  "IREPS REGISTERED",
  "24×7 INDUSTRIAL SUPPORT",
  "19 GROUP COMPANIES",
];

export const MarqueeTicker = () => {
  return (
    <div className="bg-navy border-y border-white/10 py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-ticker w-max">
        {/* First set of items */}
        <div className="flex items-center">
          {tickerItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-white/80 text-xs md:text-sm font-bold tracking-[0.2em] px-8 md:px-12">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            </React.Fragment>
          ))}
        </div>
        {/* Second set of items (duplicated for seamless loop) */}
        <div className="flex items-center">
          {tickerItems.map((item, index) => (
            <React.Fragment key={`clone-${index}`}>
              <span className="text-white/80 text-xs md:text-sm font-bold tracking-[0.2em] px-8 md:px-12">
                {item}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
