"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingTrigger } from "./booking-modal";

export function HeroBlunt() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Warm orbs */}
      <div className="absolute top-[20%] left-[15%] w-[500px] h-[500px] bg-red-500/[0.06] rounded-full blur-[140px] animate-drift" />
      <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-orange-500/[0.05] rounded-full blur-[120px] animate-drift" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-[25%] left-[40%] w-[500px] h-[500px] bg-amber-500/[0.04] rounded-full blur-[160px]" />

      {/* Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255,255,255,0.5) 40px,
            rgba(255,255,255,0.5) 41px
          )`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 pt-36 pb-28">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-10"
        >
          <span className="mono-tag text-accent-bright flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-bright pulse-soft" />
            For founders paying too much and shipping too little
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black leading-[0.95] tracking-tight max-w-5xl mb-10"
        >
          We unfuck
          <br />
          <span className="gradient-text-fire italic">tech stacks.</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mb-12"
        >
          Your codebase is holding everyone back. We modernize it in 30 days
          and hand your team the keys.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <BookingTrigger
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium text-base glow-fire cursor-pointer"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </BookingTrigger>
          <span className="text-sm text-muted max-w-xs leading-relaxed pt-1">
            30 minutes · No pitch · We tell you what&apos;s broken and what it costs you
          </span>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent origin-left"
        />
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/15 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-bright/70" />
        </motion.div>
      </motion.div>
    </section>
  );
}
