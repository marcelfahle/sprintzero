"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { Code2, Cpu, Users, Wand2, Headphones, BookOpen } from "lucide-react";

const offerings = [
  {
    icon: Code2,
    title: "Full Codebase Modernization",
    desc: "We tear out the dead weight and rebuild the architecture with modern patterns. Class components become hooks. Outdated state management gets replaced. The spaghetti becomes something your team can actually reason about.",
    value: "$120,000 – $180,000",
  },
  {
    icon: Cpu,
    title: "AI-Ready Architecture",
    desc: "TypeScript foundations. Clean interfaces. Testable structure. This is the difference between AI tools generating garbage and AI tools that actually work on your code.",
    value: "$40,000 – $60,000",
  },
  {
    icon: Users,
    title: "Developer Workshop",
    desc: "Half-day, hands-on. We train your team on the new architecture and teach them AI-assisted development using your actual codebase. They build a real feature with AI tools before the session ends.",
    value: "$8,000 – $12,000",
  },
  {
    icon: Wand2,
    title: "Custom AI Skills Package",
    desc: "The exact workflows, skills files, and AI commands we've built and tested. Configured for your specific stack. Your developers use them starting the day we hand off.",
    value: "$15,000 – $25,000",
  },
  {
    icon: Headphones,
    title: "30-Day Support Window",
    desc: "Async access to our team. Code review on the first features shipped on the new architecture. Check-in calls at day 14 and 30 to make sure velocity is tracking.",
    value: "$10,000 – $15,000",
  },
  {
    icon: BookOpen,
    title: "Hiring Playbook",
    desc: "Interview questions, evaluation rubrics, and red flags calibrated to your new stack. One bad hire at $80K salary costs you north of $200K.",
    value: "One bad hire = $200K+",
  },
];

export function OfferSection() {
  return (
    <SectionWrapper id="offer">
      <Tag>Everything you get</Tag>
      <SectionTitle>
        Nothing held back.
        <br />
        <span className="text-muted">Nothing extra to buy.</span>
      </SectionTitle>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offerings.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-surface-2/50 p-6 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
              <item.icon className="w-5 h-5 text-accent-bright" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{item.desc}</p>
            <div className="text-xs font-mono text-accent-bright/70 border-t border-border pt-3">
              Value: {item.value}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
