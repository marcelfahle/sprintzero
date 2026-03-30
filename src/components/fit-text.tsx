"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { prepare, layout } from "@chenglou/pretext";

interface FitTextProps {
  children: ReactNode;
  /** Max lines before shrinking font */
  lines?: number;
  /** Font size floor (px) */
  min?: number;
  /** Font size ceiling (px) */
  max?: number;
  /** Unitless line-height ratio */
  leading?: number;
  className?: string;
}

export function FitText({
  children,
  lines = 3,
  min = 24,
  max = 200,
  leading = 1.08,
  className = "",
}: FitTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    function calculate() {
      const el = ref.current;
      if (!el) return;

      const text = (el.innerText || "").replace(/\n/g, " ").trim();
      const width = el.clientWidth;
      if (!text || width === 0) return;

      const computed = getComputedStyle(el);
      const fontWeight = computed.fontWeight;
      const fontFamily = computed.fontFamily;

      let lo = min;
      let hi = max;

      while (hi - lo > 0.5) {
        const mid = (lo + hi) / 2;
        const fontStr = `${fontWeight} ${mid}px ${fontFamily}`;
        const prepared = prepare(text, fontStr);
        const result = layout(prepared, width, mid * leading);

        if (result.lineCount <= lines) lo = mid;
        else hi = mid;
      }

      setFontSize(lo);
    }

    document.fonts.ready.then(calculate);

    const observer = new ResizeObserver(calculate);
    observer.observe(el);
    return () => observer.disconnect();
  }, [lines, min, max, leading]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        fontSize
          ? { fontSize: `${fontSize}px`, lineHeight: leading }
          : undefined
      }
    >
      {children}
    </div>
  );
}
