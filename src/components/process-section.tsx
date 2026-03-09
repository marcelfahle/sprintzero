"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { Phone, Rocket, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "The Audit Call",
    timing: "Day 0",
    body: "Free. 15 minutes. Show us the repo. We tell you exactly what's broken and what it's costing you. No slides. No pitch deck. Just an honest read on your codebase and a clear picture of what needs to happen. If we're not the right fit, we'll tell you.",
  },
  {
    icon: Rocket,
    num: "02",
    title: "The Sprint",
    timing: "Days 1–10",
    body: "We get repo access and go to work. Your team keeps shipping normally. We run in parallel, modernizing the stack with our AI-powered workflow. Daily async updates so you always know where things stand. No status meetings. No standups. Just progress.",
  },
  {
    icon: GraduationCap,
    num: "03",
    title: "Handoff + Workshop",
    timing: "Days 11–12",
    body: "We walk your team through everything that changed and why. Then we run a hands-on workshop where your developers learn AI-assisted development on your actual codebase. Not a slide deck. They build something real with the new tools.",
  },
];

export function ProcessSection() {
  return (
    <SectionWrapper id="process">
      <Tag>How it works</Tag>
      <SectionTitle>
        Three steps. Two weeks.
        <br />
        <span className="gradient-text">Done.</span>
      </SectionTitle>

      <div className="mt-16 relative">
        {/* Vertical connecting line */}
        <div className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent" />

        <div className="grid gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex gap-6 lg:gap-8"
            >
              {/* Step number circle */}
              <div className="shrink-0 relative z-10">
                <div className="w-20 h-20 rounded-2xl border border-accent/30 bg-surface-2 flex flex-col items-center justify-center">
                  <span className="text-xs text-accent-bright font-mono">{step.num}</span>
                  <step.icon className="w-6 h-6 text-accent-bright mt-1" />
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                  <span className="text-sm text-accent-bright font-mono">({step.timing})</span>
                </div>
                <p className="text-muted leading-relaxed max-w-2xl">{step.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
