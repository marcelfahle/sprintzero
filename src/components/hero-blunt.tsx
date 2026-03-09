"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export function HeroBlunt() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Aggressive gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-red-500/8 rounded-full blur-[120px] animate-float" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-1/2 w-[300px] h-[300px] bg-accent/6 rounded-full blur-[80px] animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 pulse-glow" />
          For engineering teams buried in technical debt
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
        >
          We unfuck
          <br />
          <span className="gradient-text-fire">tech stacks.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Your code is from 2019. Your dependencies are on fire. Your developers
          are frustrated and your competitors are lapping you. We come in,
          modernize everything in under two weeks, and train your team to ship 3x
          faster with AI tools.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-2 text-orange-400 font-semibold text-lg mb-10"
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
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all text-white font-semibold text-lg shadow-lg shadow-red-500/20"
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
              className="w-1.5 h-1.5 rounded-full bg-orange-400"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
