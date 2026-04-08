"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Headline } from "./section-wrapper";
import { ArrowRight } from "lucide-react";
import { BookingTrigger } from "./booking-modal";

export function CTASection() {
  return (
    <SectionWrapper id="cta" className="relative overflow-hidden">
      <div className="relative text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Headline className="text-center">
            Stop paying for the problem.{" "}
            <span className="gradient-text italic">Fix it in 30 days.</span>
          </Headline>

          <p className="text-muted text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            30-minute call. We look at your codebase and tell you what&apos;s
            broken, what it costs you, and whether we can help. If we
            can&apos;t, you still walk away with an honest read on your
            architecture.
          </p>

          <BookingTrigger
            className="group inline-flex items-center gap-3 px-12 py-5 rounded bg-accent hover:bg-accent-dim transition-colors duration-200 text-white font-medium text-lg cursor-pointer"
          >
            Book the Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </BookingTrigger>

          <p className="mt-4 text-sm text-muted">
            30 min · No pitch · No obligation
          </p>

          <p className="mt-6 mono-tag text-muted">
            <span className="text-accent-bright">2 spots left — May 2026</span>
          </p>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted">
              Not ready to talk yet?{" "}
              <a
                href="mailto:hello@sprintzero.sh?subject=Codebase%20modernization%20inquiry"
                className="text-foreground hover:text-accent-bright transition-colors duration-200 underline underline-offset-4"
              >
                Email us
              </a>
              {" "}— no form, just a conversation.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
