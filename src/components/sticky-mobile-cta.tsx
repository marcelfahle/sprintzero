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
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#08080c]/95 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 safe-bottom">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium text-sm glow-fire"
        >
          Book Your Free Audit Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
