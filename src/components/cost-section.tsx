"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";

const stats = [
  { value: "$18K+", label: "per month", desc: "Developer hours lost to fighting the stack instead of building product" },
  { value: "60%", label: "rejection rate", desc: "Senior candidates who ghost you after seeing an outdated codebase" },
  { value: "3x", label: "slower", desc: "Feature velocity vs. teams on modern stacks with AI tools" },
  { value: "$0", label: "ROI on AI tools", desc: "Cursor and Copilot generate garbage on legacy code. You get nothing." },
];

export function CostSection() {
  return (
    <SectionWrapper id="cost">
      <Tag>The math on doing nothing</Tag>
      <SectionTitle>
        You&apos;re not paying for the fix.
        <br />
        <span className="text-muted">You&apos;re already paying for the problem.</span>
      </SectionTitle>
      <p className="text-muted text-lg mb-12 max-w-2xl">
        Every month you wait, the bill gets bigger. Here&apos;s what the status quo actually costs a team of five:
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-card rounded-2xl border border-border bg-surface-2/50 p-6 text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-accent-bright mb-3">{stat.label}</div>
            <p className="text-sm text-muted leading-relaxed">{stat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative rounded-2xl border border-danger/20 bg-danger/5 p-6 sm:p-8"
      >
        <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-danger/20 text-danger text-xs font-semibold uppercase tracking-wider">
          Do the math
        </div>
        <p className="text-muted leading-relaxed mt-2">
          Five engineers at $150K loaded cost = <span className="text-foreground font-medium">$62,500/month</span>. 
          If they&apos;re running at even 60% efficiency because of the stack, that&apos;s{" "}
          <span className="text-danger font-semibold">$25,000/month burning quietly</span>. 
          In six months you&apos;ve torched $150K and the codebase is actually worse, 
          because new code keeps getting written in the old patterns.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
