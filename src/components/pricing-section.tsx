"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Divider } from "./section-wrapper";
import { ArrowRight, Shield } from "lucide-react";
import { BookingTrigger } from "./booking-modal";
import { FitText } from "./fit-text";

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
          <Tag>The investment</Tag>
          <FitText
            lines={2}
            min={28}
            max={64}
            leading={1.08}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <h2>
              What this costs.{" "}
              <span className="italic text-muted">What it&apos;s actually worth.</span>
            </h2>
          </FitText>

          <div className="animated-border rounded-lg p-10 sm:p-14 text-center shadow-[0_0_40px_-10px_rgba(234,88,12,0.2)]">
            <span className="mono-tag text-foreground/70 block mb-8">
              Your investment
            </span>

            {/* Anchor price */}
            <div className="mb-1">
              <span className="mono-tag text-muted-soft/60 block mb-1.5">Standard rate</span>
              <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-muted-soft/40 line-through decoration-2">
                $50K
              </span>
            </div>

            {/* Current price */}
            <p className="mono-tag text-accent-bright/70 mt-4 mb-2">Founding client rate</p>
            <div className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold text-accent-bright leading-[1.1] pb-2 mb-4 price-glow">
              $35K
            </div>

            {/* Savings badge */}
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-success/10 border border-success/25 mb-8 savings-pulse">
              <span className="mono-tag text-success font-semibold">Save $15,000</span>
            </div>

            <p className="text-muted text-sm mb-8 max-w-xs mx-auto leading-relaxed">
              Scoped after the audit call. No hourly billing. No change orders.
            </p>
            <p className="mono-tag text-muted mb-10">
              <span className="text-accent-bright font-semibold">2 spots left — May 2026</span>
            </p>
            <BookingTrigger
              className="group inline-flex items-center gap-3 px-10 py-4 rounded bg-accent hover:bg-accent-dim transition-colors duration-200 text-white font-medium cursor-pointer"
            >
              Claim Your Spot
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </BookingTrigger>
            <p className="mt-4 text-sm text-muted">
              30 min · No pitch · No obligation
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-lg border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <h3 className="mono-tag text-foreground/70 mb-6">
            What it&apos;s worth &mdash; the math your CFO will run
          </h3>
          <p className="text-muted leading-[1.8] text-base max-w-xl">
            Close two deals you&apos;d otherwise lose to a security
            questionnaire &mdash; that&apos;s{" "}
            <span className="text-foreground font-medium">$60K+</span> back on a{" "}
            <span className="text-foreground font-medium">$35K</span> investment. Planning to sell in the next 3&ndash;5 years? The
            difference between a modern codebase and one that signals
            &ldquo;budget for a rewrite&rdquo; is hundreds of thousands in
            acquisition price. Technical due diligence is where deals die.
          </p>
        </motion.div>

        <Divider />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-12 flex gap-6 items-start"
        >
          <div className="shrink-0 w-12 h-12 rounded-lg bg-success/10 border border-success/25 flex items-center justify-center">
            <Shield className="w-5 h-5 text-success" />
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-3">
              The Performance Guarantee
            </h3>
            <p className="text-muted leading-[1.8] text-base max-w-xl">
              We measure before and after. Vulnerability count, dependency health,
              test coverage, deployment frequency &mdash; hard numbers, not vibes.
              If your team isn&apos;t shipping features measurably faster within 30
              days of completion, with the metrics to prove it, we keep working at
              no extra cost until they are. We don&apos;t get paid to rewrite code.
              We get paid to make your team faster. If that doesn&apos;t happen, we
              haven&apos;t earned the money.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
