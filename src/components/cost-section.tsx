"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

const stats = [
  { value: "$18K+", label: "per month", desc: "Developer hours lost to fighting the stack" },
  { value: "60%", label: "rejection rate", desc: "Senior candidates who ghost after seeing the repo" },
  { value: "3×", label: "slower", desc: "Feature velocity vs. teams on modern stacks" },
  { value: "$0", label: "AI ROI", desc: "Cursor and Copilot generate garbage on legacy code" },
];

export function CostSection() {
  return (
    <SectionWrapper id="cost" className="relative overflow-hidden">
      {/* Giant watermark */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 watermark-number font-serif select-none">
        $25K
      </div>

      <div className="relative">
        <Tag>The math on doing nothing</Tag>
        <Headline>
          You&apos;re not paying for the fix.
          <br />
          <span className="italic text-muted">You&apos;re already paying for the problem.</span>
        </Headline>

        <p className="text-muted text-lg leading-relaxed max-w-xl mb-16">
          Every month you wait, the bill gets bigger. Here&apos;s what the status
          quo costs a team of five:
        </p>

        {/* Stats — dramatic oversized numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden mb-16">
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
              <div className="mono-tag text-accent-bright/60 mb-3">{stat.label}</div>
              <p className="text-sm text-muted leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-red-500/15 bg-red-500/[0.03] p-8 sm:p-10"
        >
          <div className="absolute -top-3 left-8">
            <span className="mono-tag text-danger bg-[#060608] px-3 py-0.5">
              Do the math
            </span>
          </div>
          <p className="text-muted leading-[1.8] text-base mt-2">
            Five engineers at $150K loaded cost ={" "}
            <span className="text-foreground font-medium">$62,500/month</span>.
            If they&apos;re running at even 60% efficiency because of the stack,
            that&apos;s{" "}
            <span className="text-danger font-semibold">$25,000/month burning quietly</span>.
            In six months you&apos;ve torched{" "}
            <span className="text-foreground font-medium">$150K</span> and the
            codebase is actually{" "}
            <em className="font-serif">worse</em>, because new code keeps getting
            written in the old patterns.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
