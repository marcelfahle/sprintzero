"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

const offerings = [
  {
    title: "Full Codebase Modernization",
    desc: "We tear out the dead weight and rebuild the architecture with modern patterns. Class components become hooks. Outdated state management gets replaced. The spaghetti becomes something your team can actually reason about.",
    value: "$120K–$180K",
  },
  {
    title: "AI-Ready Architecture",
    desc: "TypeScript foundations. Clean interfaces. Testable structure. The difference between AI tools generating garbage and AI tools that actually work on your code.",
    value: "$40K–$60K",
  },
  {
    title: "Developer Workshop",
    desc: "Half-day, hands-on. Your team learns AI-assisted development on your actual codebase. They build a real feature with AI tools before the session ends.",
    value: "$8K–$12K",
  },
  {
    title: "Custom AI Skills Package",
    desc: "The exact workflows, skills files, and AI commands we've spent a year building. Configured for your specific stack. Your developers use them starting day one.",
    value: "$15K–$25K",
  },
  {
    title: "30-Day Support Window",
    desc: "Async access to our team. Code review on the first features shipped on the new architecture. Check-in calls at day 14 and 30.",
    value: "$10K–$15K",
  },
  {
    title: "Hiring Playbook",
    desc: "Interview questions, evaluation rubrics, and red flags calibrated to your new stack. One bad hire at $80K costs you north of $200K.",
    value: "$200K+ saved",
  },
];

export function OfferSection() {
  return (
    <SectionWrapper id="offer" wide>
      <Tag>Everything you get</Tag>
      <Headline>
        Nothing held back.
        <br />
        <span className="italic text-muted">Nothing extra to buy.</span>
      </Headline>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border-strong rounded-2xl overflow-hidden">
        {offerings.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group bg-surface-2 p-7 sm:p-8 hover:bg-surface-3 transition-colors duration-500 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-semibold group-hover:text-accent-bright transition-colors duration-500 leading-snug max-w-[80%]">
                {item.title}
              </h3>
              <span className="mono-tag text-muted-soft shrink-0 pt-1">
                {item.value}
              </span>
            </div>
            <p className="text-sm text-muted leading-[1.7] flex-1">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
