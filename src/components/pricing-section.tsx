"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Divider } from "./section-wrapper";
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
          <Tag>The investment</Tag>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
            What this costs.
            <br />
            <span className="italic text-muted">What it&apos;s actually worth.</span>
          </h2>

          <div className="animated-border rounded-3xl p-10 sm:p-14 text-center">
            <span className="mono-tag text-accent-bright block mb-6">
              Your investment
            </span>
            <div className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold gradient-text leading-none mb-6">
              $35K
            </div>
            <p className="text-muted text-sm mb-2 mono-tag">Starting at</p>
            <p className="text-muted text-base mb-8 max-w-sm mx-auto leading-relaxed">
              Scoped after the audit call. Based on codebase complexity.
              <br />
              No hourly billing. No change orders. No surprises.
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 rounded-2xl border border-border-strong bg-surface-2 p-8 sm:p-10"
        >
          <h3 className="mono-tag text-accent-bright mb-6">
            What it&apos;s worth &mdash; the math your CFO will run
          </h3>
          <div className="space-y-5 text-muted leading-[1.8] text-base">
            <p>
              If the modernization lets you close even two deals you&apos;d
              otherwise lose to a security questionnaire or a failed vendor
              assessment, that&apos;s{" "}
              <span className="text-foreground font-medium">$60K+ in revenue</span>{" "}
              &mdash; on a $35K investment. That&apos;s before you factor in the
              developers who stop ghosting, the features that ship in days instead
              of weeks, or the AI tools that finally work on your code.
            </p>
            <p>
              And if you&apos;re thinking about selling in the next 3&ndash;5
              years: the difference between a clean, documented, modern codebase
              and one that signals &ldquo;budget for a rewrite&rdquo; to a buyer
              is hundreds of thousands in acquisition price. Technical due
              diligence is where deals die. A{" "}
              <span className="text-foreground font-medium">
                $35K fix that adds $500K+ to your valuation
              </span>{" "}
              is probably the best ROI decision you&apos;ll make this year.
            </p>
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
