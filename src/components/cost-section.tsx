"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

const stats = [
  { value: "$10K+", label: "per month", desc: "What your outsourced team bills \u2014 with uncertain output" },
  { value: "$18K+", label: "per month", desc: "Developer hours your internal team loses fighting the stack" },
  { value: "60%", label: "rejection rate", desc: "Senior candidates who ghost after seeing the repo" },
  { value: "$0", label: "AI ROI", desc: "AI tools generate garbage on legacy code" },
];

export function CostSection() {
  return (
    <SectionWrapper id="cost" className="relative overflow-hidden">
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 watermark-number font-serif select-none">
        $25K
      </div>

      <div className="relative">
        <Tag>The math on doing nothing</Tag>
        <Headline>
          You&apos;re not paying for the fix.{" "}
          <span className="italic text-muted">You&apos;re already paying for the problem.</span>
        </Headline>

        <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
          Every month you wait, the bill gets bigger. Here&apos;s what the
          status quo actually costs:
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border-strong rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-2 p-6 sm:p-8"
            >
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold stat-number gradient-text mb-1">
                {stat.value}
              </div>
              <div className="mono-tag text-accent-bright mb-3">{stat.label}</div>
              <p className="text-sm text-muted leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-foreground font-medium text-lg mt-12 text-center font-serif italic"
        >
          Either way, the fix pays for itself before the invoice is due.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
