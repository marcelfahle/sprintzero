"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";
import { ArrowRight, Shield, Zap } from "lucide-react";

export function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 glow-line" />

      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Crossed out value */}
          <div className="mb-2">
            <span className="text-sm text-muted uppercase tracking-wider font-medium">Total value</span>
          </div>
          <div className="text-4xl sm:text-5xl font-bold text-muted/40 line-through decoration-danger/50 mb-2">
            $250,000+
          </div>
          <p className="text-sm text-muted mb-10">
            That&apos;s what this costs through a consultancy. Or burned internally over six months.
          </p>

          {/* Price card */}
          <div className="animated-border rounded-3xl p-8 sm:p-12">
            <div className="text-sm text-accent-bright font-medium uppercase tracking-wider mb-4">
              Your investment
            </div>
            <div className="text-6xl sm:text-7xl font-bold gradient-text mb-4">
              $35,000
            </div>
            <p className="text-muted mb-8">
              One payment. Everything included. No hourly billing. No change orders.
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-muted mb-8">
              <Zap className="w-4 h-4 text-accent-bright" />
              We take on <span className="text-foreground font-semibold">2 engagements per month</span>. That&apos;s it.
            </div>

            <a
              href="#cta"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent-bright transition-all text-white font-semibold text-lg glow-accent"
            >
              Book Your Free Audit Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 rounded-2xl border border-success/20 bg-success/5 p-6 sm:p-8 text-left"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-success" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">The Performance Guarantee</h3>
                <p className="text-muted leading-relaxed">
                  If your team isn&apos;t shipping features measurably faster within 30 days of completion, 
                  we keep working at no extra cost until they are. We don&apos;t get paid to rewrite code. 
                  We get paid to make your team faster. If that doesn&apos;t happen, we haven&apos;t earned the money.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
