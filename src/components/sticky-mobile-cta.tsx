"use client";

import { useEffect, useState } from "react";
import { BOOKING_URL, XRAY_PRICE } from "@/lib/constants";

const SHOW_AFTER_PX = 600;
const HIDE_NEAR_BOTTOM_PX = 800;

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const distanceToBottom =
        document.documentElement.scrollHeight - (scrollY + window.innerHeight);
      setVisible(scrollY > SHOW_AFTER_PX && distanceToBottom > HIDE_NEAR_BOTTOM_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-200 ease-out md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.5rem)" }}
    >
      <div className="mx-3 mb-3 rounded-full border border-border-default bg-fg-primary px-4 py-3 shadow-lg shadow-black/15">
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 text-[15px] font-semibold text-fg-inverse"
        >
          Book the Codebase X-Ray — {XRAY_PRICE}
          <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  );
}
