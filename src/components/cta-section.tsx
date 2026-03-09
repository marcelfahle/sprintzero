"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionTitle } from "./section-wrapper";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <SectionWrapper id="cta" className="relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionTitle className="text-center">
            Stop paying for the problem.
            <br />
            <span className="gradient-text">Fix it once.</span>
          </SectionTitle>

          <p className="text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            15-minute call. We look at your codebase and tell you what&apos;s broken, 
            what it costs you, and whether we can help. If we can&apos;t, you still 
            walk away with a free audit.
          </p>

          <a
            href="https://cal.com/marcelfahle/stack-sprint-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-accent hover:bg-accent-bright transition-all text-white font-semibold text-xl glow-accent"
          >
            <Calendar className="w-6 h-6" />
            Book Your Free Audit Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-sm text-muted">
            <span className="text-accent-bright font-medium">2 spots per month.</span> First come, first served.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
