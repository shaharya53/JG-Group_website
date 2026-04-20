import { useEffect, useRef, useState } from "react";

/** Parse "7,500+" → { before:"", num:7500, after:"+", comma:true } */
function parse(val: string) {
  const m = val.match(/^([^\d]*)(\d[\d,]*)([^\d]*)$/);
  if (!m) return null;
  const raw = m[2].replace(/,/g, "");
  const num = parseInt(raw, 10);
  if (isNaN(num) || num === 0) return null;
  return { before: m[1], num, after: m[3], comma: m[2].includes(",") };
}

function fmt(n: number, comma: boolean) {
  if (!comma) return String(n);
  return n.toLocaleString("en-IN");
}

interface CountUpProps {
  value: string;
  className?: string;
  duration?: number; // ms
}

export function CountUp({ value, className, duration }: CountUpProps) {
  const ref   = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parsed = parse(value);
    if (!parsed) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();

        const { before, num, after, comma } = parsed;
        const ms = duration ?? Math.min(2200, Math.max(900, num * 1.5));
        const fps = 60;
        const total = Math.round((ms / 1000) * fps);
        let frame = 0;

        const tick = () => {
          frame++;
          // ease-out cubic
          const t = frame / total;
          const eased = 1 - Math.pow(1 - t, 3);
          const cur = frame >= total ? num : Math.round(eased * num);
          setDisplay(before + fmt(cur, comma) + after);
          if (frame < total) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}
