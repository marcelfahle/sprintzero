"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BookingTrigger } from "./booking-modal";

const links = [
  { label: "Problem", href: "#pain" },
  { label: "Results", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Floating nav island (mobile + desktop) ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
        style={{ paddingTop: "calc(env(safe-area-inset-top) + 8px)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="pointer-events-auto rounded-2xl bg-[#08080c]/70 backdrop-blur-2xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)] px-5 sm:px-6 h-14 flex items-center justify-between">
            <a href="#" className="group flex items-center gap-3">
              <span className="font-serif text-lg font-bold tracking-tight">
                sprint
                <span className="text-accent-bright">zero</span>
              </span>
            </a>

            <div className="hidden md:flex items-center gap-10">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="mono-tag text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <BookingTrigger
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent-bright text-sm font-medium hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 cursor-pointer"
            >
              Book Audit Call
            </BookingTrigger>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-muted hover:text-foreground p-2 -mr-2"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[#08080c]/95 backdrop-blur-2xl"
            style={{ paddingTop: "calc(env(safe-area-inset-top) + 80px)" }}
          >
            <div className="px-8 py-6 flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-foreground transition-colors py-3 border-b border-white/[0.06] mono-tag"
                >
                  {link.label}
                </a>
              ))}
              <BookingTrigger
                className="mt-4 text-center py-3 rounded-full bg-accent/10 border border-accent/30 text-accent-bright text-sm font-medium cursor-pointer"
              >
                Book Audit Call
              </BookingTrigger>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
