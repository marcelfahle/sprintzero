"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";

const offerings = [
  {
    title: "Full Codebase Modernization",
    desc: "We tear out the dead weight and rebuild with modern patterns. Legacy abstractions get replaced with clean, maintainable code. The spaghetti becomes something your team can reason about \u2014 and that AI tools can actually work with.",
  },
  {
    title: "AI-Ready Architecture",
    desc: "TypeScript foundations. Clean interfaces. Testable structure. This is the difference between AI tools generating garbage and AI tools that make your developers 10x faster. Your code starts speaking a language that Claude, Cursor, and Copilot actually understand.",
  },
  {
    title: "Team Workshop + Handoff",
    desc: "Half-day, hands-on. Not a lecture \u2014 a working session. We outfit your team with AI workflows, custom skills, and tooling configured for your stack. They ship a real feature before the session ends. Your technical lead walks away owning everything we built.",
  },
  {
    title: "Custom AI Skills Package",
    desc: "The exact workflows, skills files, and AI commands we\u2019ve spent two years building and refining. Configured for your specific stack, your naming conventions, your patterns. Your developers use them starting day one.",
  },
  {
    title: "30-Day Support Window",
    desc: "Async access to our team for the first month after handoff. Code review on the first features shipped on the new architecture. Check-in calls at day 14 and 30. If something breaks, we\u2019re there.",
  },
  {
    title: "Hiring Playbook",
    desc: "Interview questions, evaluation rubrics, and red flags calibrated to your new stack. Your repo stops scaring away good candidates. One bad hire costs north of $200K in wasted salary, ramp time, and team disruption. This prevents that.",
  },
];

export function OfferSection() {
  return (
    <SectionWrapper id="offer" wide>
      <Tag>Everything you get</Tag>
      <Headline>
        Nothing held back.{" "}
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
            <div className="mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-semibold group-hover:text-accent-bright transition-colors duration-500 leading-snug">
                {item.title}
              </h3>
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
