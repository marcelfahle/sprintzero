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
      style={{
        paddingBottom: "calc(env(safe-area-inset-bottom) + 12px)",
      }}
    >
      <div className="px-4">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2 text-white font-semibold text-sm py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_8px_40px_rgba(249,115,22,0.35),0_2px_8px_rgba(0,0,0,0.3)]"
        >
          Book Your Free Audit Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
