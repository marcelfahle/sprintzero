"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroAIGap() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
      {/* Layered gradient orbs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-[#7c5cfc]/[0.07] rounded-full blur-[140px] animate-drift" />
      <div className="absolute bottom-[20%] right-[5%] w-[600px] h-[600px] bg-[#3b82f6]/[0.05] rounded-full blur-[160px] animate-drift" style={{ animationDelay: "4s" }} />
      <div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] bg-[#a78bfa]/[0.04] rounded-full blur-[100px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
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
          <span className="mono-tag text-accent-bright flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-accent-bright pulse-soft" />
            While you&apos;re reading this, your competitors are shipping with AI
          </span>
        </motion.div>

        {/* Headline — editorial serif */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl mb-8"
        >
          Your competitors ship
          <br className="hidden sm:block" />
          features with AI.
          <br />
          <span className="gradient-text italic">
            Your codebase won&apos;t
            <br className="hidden sm:block" />
            let you try.
          </span>
        </motion.h1>

        {/* Subhead — clean sans */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted leading-relaxed max-w-xl mb-12"
        >
          AI coding tools need clean architecture to work. Yours is from 2019.
          That gap gets wider every week.{" "}
          <span className="text-foreground font-medium">We close it in days.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-start gap-5"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-accent hover:bg-accent-dim transition-all duration-300 text-white font-medium text-base glow-accent"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <span className="text-sm text-muted max-w-xs leading-relaxed pt-1">
            15 minutes · No pitch · We tell you what&apos;s broken and what it costs you
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
          className="w-5 h-8 rounded-full border border-white/10 flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-bright/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
