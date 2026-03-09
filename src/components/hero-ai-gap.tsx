"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export function HeroAIGap() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/8 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-accent-bright text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent-bright pulse-glow" />
          While you&apos;re reading this, your competitors are shipping with AI
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Your competitors just started
          <br />
          shipping features with AI.
          <br />
          <span className="gradient-text">Your codebase won&apos;t let you try.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          AI coding tools need clean architecture to work. Yours is from 2019.
          That gap gets wider every single week. We close it in days.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-accent-bright font-semibold text-lg mb-10"
        >
          <Clock className="w-5 h-5" />
          Days. Not months.
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-bright transition-all text-white font-semibold text-lg glow-accent"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-muted">
            15 minutes. No pitch. We tell you what&apos;s broken and what it costs you.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent-bright"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
