"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Headline } from "./section-wrapper";
import { ArrowRight } from "lucide-react";
import { BookingTrigger } from "./booking-modal";

export function CTASection() {
  return (
    <SectionWrapper id="cta" className="relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="relative text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Headline className="text-center">
            Stop paying for the problem.
            <br />
            <span className="gradient-text italic">Fix it once.</span>
          </Headline>

          <p className="text-muted text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            30-minute call. We look at your codebase and tell you what&apos;s
            broken, what it costs you, and whether we can help. If we
            can&apos;t, you still walk away with a free audit.
          </p>

          <BookingTrigger
            className="group inline-flex items-center gap-3 px-12 py-5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium text-lg glow-fire cursor-pointer"
          >
            Book Your Free Audit Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BookingTrigger>

          <p className="mt-8 mono-tag text-muted">
            <span className="text-accent-bright">2 spots per month</span>
            {" "}· First come, first served
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
