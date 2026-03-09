"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Divider } from "./section-wrapper";
import { ArrowRight, Shield } from "lucide-react";
import { BookingTrigger } from "./booking-modal";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="mono-tag text-muted block mb-3">Total value</span>
          <div className="font-serif text-5xl sm:text-6xl font-bold text-muted-faint line-through decoration-danger/50 decoration-2 mb-3">
            $250,000+
          </div>
          <p className="text-sm text-muted mb-16 max-w-md mx-auto">
            That&apos;s what this costs through a consultancy. Or burned
            internally over six months.
          </p>

          <div className="animated-border rounded-3xl p-10 sm:p-14 text-center">
            <span className="mono-tag text-accent-bright block mb-6">
              Your investment
            </span>
            <div className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold gradient-text leading-none mb-6">
              $35K
            </div>
            <p className="text-muted text-base mb-8 max-w-sm mx-auto leading-relaxed">
              One payment. Everything included.
              <br />
              No hourly billing. No change orders.
            </p>
            <p className="mono-tag text-muted mb-10">
              We take on{" "}
              <span className="text-foreground font-semibold">2 engagements</span>{" "}
              per month. That&apos;s it.
            </p>
            <BookingTrigger
              className="group inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium glow-fire cursor-pointer"
            >
              Book Your Free Audit Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </BookingTrigger>
          </div>
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 flex gap-6 items-start"
        >
          <div className="shrink-0 w-12 h-12 rounded-2xl bg-success/10 border border-success/25 flex items-center justify-center">
            <Shield className="w-5 h-5 text-success" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">
              The Performance Guarantee
            </h3>
            <p className="text-muted leading-[1.8] text-base">
              If your team isn&apos;t shipping features measurably faster within
              30 days of completion, we keep working at no extra cost until they
              are. We don&apos;t get paid to rewrite code. We get paid to make
              your team faster. If that doesn&apos;t happen, we haven&apos;t
              earned the money.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
