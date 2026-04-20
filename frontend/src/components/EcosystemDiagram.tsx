import { useState } from "react";

const CX = 350, CY = 350, R = 240, NODE_R = 60, CENTER_R = 82;

function getPos(angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

function getCurvePath(nx: number, ny: number) {
  const angle = Math.atan2(ny - CY, nx - CX);
  const x1 = CX + CENTER_R * Math.cos(angle);
  const y1 = CY + CENTER_R * Math.sin(angle);
  const x2 = nx - NODE_R * Math.cos(angle);
  const y2 = ny - NODE_R * Math.sin(angle);
  const perpX = -Math.sin(angle);
  const perpY = Math.cos(angle);
  const cp1x = x1 + Math.cos(angle) * 55 + perpX * 28;
  const cp1y = y1 + Math.sin(angle) * 55 + perpY * 28;
  const cp2x = x2 - Math.cos(angle) * 55 - perpX * 28;
  const cp2y = y2 - Math.sin(angle) * 55 - perpY * 28;
  return `M ${x1} ${y1} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`;
}

const ecosystemNodes = [
  { id: "infotech",      label: ["Infotech"],               angle: 0,   pos: getPos(0)   },
  { id: "agro",          label: ["Agro", "Industries"],     angle: 36,  pos: getPos(36)  },
  { id: "electricals",   label: ["Electricals &", "Electronics"], angle: 72,  pos: getPos(72)  },
  { id: "enterprises",   label: ["Enterprises"],            angle: 108, pos: getPos(108) },
  { id: "railtech",      label: ["Railtech"],               angle: 144, pos: getPos(144) },
  { id: "international", label: ["International"],          angle: 180, pos: getPos(180) },
  { id: "defence",       label: ["Defense", "Technologies"],angle: 216, pos: getPos(216) },
  { id: "pharma",        label: ["Pharma &", "Healthcare"], angle: 252, pos: getPos(252) },
  { id: "retails",       label: ["Retails"],                angle: 288, pos: getPos(288) },
  { id: "industries",    label: ["Industries"],             angle: 324, pos: getPos(324) },
];

export function EcosystemDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <svg
        viewBox="0 0 700 700"
        className="w-full max-w-[700px] mx-auto block"
        aria-label="Jigisha Ecosystem hub-and-spoke diagram"
      >
        <defs>
          <radialGradient id="cglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A227" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
          </radialGradient>
          <filter id="goldGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feFlood floodColor="#C9A227" floodOpacity="0.55" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="nodeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#00000015" />
          </filter>
          <filter id="centerShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="14" floodColor="#00000040" />
          </filter>
          <filter id="pathGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor="#C9A227" floodOpacity="0.6" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx={CX} cy={CY} r="155" fill="url(#cglow)" />

        {ecosystemNodes.map((node) => {
          const { x, y } = node.pos;
          const d = getCurvePath(x, y);
          const isH = hovered === node.id;
          return (
            <g key={`path-${node.id}`}>
              {isH && (
                <path d={d} fill="none" stroke="#C9A227" strokeWidth="6" strokeLinecap="round" filter="url(#pathGlow)" opacity="0.5" />
              )}
              <path
                d={d}
                fill="none"
                stroke={isH ? "#C9A227" : "#D1D5DB"}
                strokeWidth={isH ? 2 : 1.5}
                strokeLinecap="round"
                style={{ transition: "stroke 0.35s ease, stroke-width 0.35s ease" }}
              />
            </g>
          );
        })}

        <g filter="url(#centerShadow)">
          <circle cx={CX} cy={CY} r={CENTER_R} fill="#0f172a" />
          <circle cx={CX} cy={CY} r={CENTER_R - 6} fill="none" stroke="#C9A22730" strokeWidth="1" />
          <text x={CX} y={CY - 11} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="15" fontWeight="800" letterSpacing="3" fontFamily="Inter, system-ui, sans-serif">JIGISHA</text>
          <text x={CX} y={CY + 11} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="15" fontWeight="800" letterSpacing="3" fontFamily="Inter, system-ui, sans-serif">ECOSYSTEM</text>
        </g>

        {ecosystemNodes.map((node) => {
          const { x, y } = node.pos;
          const isH = hovered === node.id;
          const lineH = 16;
          const totalH = (node.label.length - 1) * lineH;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
              filter={isH ? "url(#goldGlow)" : "url(#nodeShadow)"}
            >
              {isH && (
                <circle cx={x} cy={y} r={NODE_R + 8} fill="none" stroke="#C9A227" strokeWidth="1.5" opacity="0.4" />
              )}
              <circle
                cx={x} cy={y} r={NODE_R}
                fill={isH ? "#fffbeb" : "white"}
                stroke={isH ? "#C9A227" : "#E5E7EB"}
                strokeWidth={isH ? 2.5 : 1.5}
                style={{ transition: "fill 0.3s ease, stroke 0.3s ease, stroke-width 0.3s ease" }}
              />
              {node.label.map((line, li) => (
                <text
                  key={li}
                  x={x}
                  y={y + li * lineH - totalH / 2}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isH ? "#92610a" : "#111827"}
                  fontSize="12"
                  fontWeight={isH ? "700" : "600"}
                  fontFamily="Inter, system-ui, sans-serif"
                  style={{ transition: "fill 0.3s ease" }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>

      <div className="flex flex-wrap gap-2 justify-center mt-6 md:hidden">
        {ecosystemNodes.map((n) => (
          <span key={n.id} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-card border border-border text-foreground">
            {n.label.join(" ")}
          </span>
        ))}
      </div>
    </>
  );
}
