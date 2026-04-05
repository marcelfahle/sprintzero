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
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* Scrim gradient fades scrolling content behind Safari bottom glass */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-8 h-8 bg-gradient-to-t from-[#08080c]/90 to-transparent pointer-events-none"
      />
      {/* Background fills entire shell including safe area below */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[#08080c]/90 backdrop-blur-xl"
        style={{ bottom: "calc(-1 * env(safe-area-inset-bottom))" }}
      />
      <div className="relative px-4 py-2.5">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2 text-white font-semibold text-sm py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-[0_8px_30px_rgba(249,115,22,0.3)]"
        >
          Book Your Free Audit Call
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
