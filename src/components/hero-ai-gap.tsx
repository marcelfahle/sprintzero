"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingTrigger } from "./booking-modal";
import { FitText } from "./fit-text";

export function HeroAIGap() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
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
          <span className="mono-tag text-foreground/70 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-foreground/50 pulse-soft" />
            For SaaS teams stuck on legacy code
          </span>
        </motion.div>

        {/* Headline — editorial serif */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mb-8"
        >
          <FitText
            lines={2}
            min={36}
            max={140}
            leading={1.05}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <h1>
              AI makes dev teams 10x faster.{" "}
              <span className="gradient-text italic">Except yours.</span>
            </h1>
          </FitText>
        </motion.div>

        {/* Subhead — clean sans */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mb-12"
        >
          AI tools need clean architecture. Yours is from 2019.{" "}
          <span className="text-foreground font-medium">We modernize your codebase in 30 days and train your team to build with AI.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <BookingTrigger
            className="group inline-flex items-center gap-3 px-8 py-4 rounded bg-accent hover:bg-accent-dim transition-colors duration-200 text-white font-medium text-base cursor-pointer"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </BookingTrigger>
          <span className="text-sm text-muted max-w-xs leading-relaxed pt-1">
            30 min · No pitch · Starting at $35K
            <br />
            <span className="text-accent-bright">2 spots left — May 2026</span>
          </span>
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent origin-left"
        />
      </div>

    </section>
  );
}
