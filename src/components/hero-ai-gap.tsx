"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BookingTrigger } from "./booking-modal";
import { FitText } from "./fit-text";

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
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium text-base glow-fire cursor-pointer"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </BookingTrigger>
          <span className="text-sm text-muted max-w-xs leading-relaxed pt-1">
            30 minutes · No pitch
            <br />
            <span className="text-accent-bright">Only 2 spots per month</span>
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
