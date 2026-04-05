"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "./booking-modal";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 inset-x-0 z-40 md:hidden pointer-events-none transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      {/* Background layer fills entire fixed container (extends to physical bottom) */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500"
      />
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative pointer-events-auto flex items-center justify-center gap-2 text-white font-medium text-sm"
        style={{
          paddingTop: "0.875rem",
          paddingBottom: "max(0.875rem, calc(env(safe-area-inset-bottom) + 0.5rem))",
        }}
      >
        Book Your Free Audit Call
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
