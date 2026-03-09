"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

const steps = [
  {
    num: "01",
    title: "The Audit Call",
    timing: "Day 0",
    body: "Free. 30 minutes. Show us the repo. We tell you exactly what's broken and what it's costing you. No slides. No pitch deck. Just an honest read on your codebase. If we're not the right fit, we'll tell you.",
  },
  {
    num: "02",
    title: "The Sprint",
    timing: "Days 1–10",
    body: "We get repo access and go to work. Your team keeps shipping normally. We run in parallel, modernizing the stack with our AI-powered workflow. Daily async updates. No status meetings. No standups. Just progress.",
  },
  {
    num: "03",
    title: "Handoff + Workshop",
    timing: "Days 11–12",
    body: "We walk your team through everything that changed and why. Then we outfit every developer with AI workflows, custom skills, and tooling configured for your stack. They ship a real feature with the new setup before the session ends. No theory. They leave dangerous.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <Tag>How it works</Tag>
      <Headline>
        Three steps. Two weeks.
        <br />
        <span className="gradient-text italic">Done.</span>
      </Headline>

      <div className="mt-20 grid gap-0">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="relative group"
          >
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute left-[2.25rem] top-[5.5rem] bottom-0 w-px bg-gradient-to-b from-accent/30 to-transparent" />
            )}

            <div className="grid lg:grid-cols-[4.5rem_12rem_1fr] gap-4 lg:gap-8 py-10 sm:py-14 border-b border-border last:border-b-0">
              <div className="font-serif text-6xl sm:text-7xl font-bold text-muted-faint group-hover:text-accent/20 transition-colors duration-700 leading-none">
                {step.num}
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold group-hover:text-accent-bright transition-colors duration-500">
                  {step.title}
                </h3>
                <span className="mono-tag text-accent mt-2 inline-block">
                  {step.timing}
                </span>
              </div>
              <p className="text-muted leading-[1.8] text-base lg:pt-1">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
