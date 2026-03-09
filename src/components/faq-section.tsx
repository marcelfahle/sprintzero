"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does one team do in a week what takes most teams months?",
    a: "AI-powered development workflows. We use coordinated AI agents that process thousands of files while maintaining consistency across the entire codebase. The bottleneck in traditional migrations is human reading speed and context-switching. Our system doesn't have those limits. We provide the architecture decisions and quality control. The AI handles the mechanical transformation at scale.",
  },
  {
    q: "Will this break our production environment?",
    a: "No. We work on a separate branch. Merges are incremental and tested. Your production environment stays untouched until everything is verified. If you don't have proper CI/CD, we set that up too.",
  },
  {
    q: "What if our stack isn't React?",
    a: "The approach works across React, Angular, Vue, and older frameworks. The specific tooling changes but the methodology is the same. Book the audit call — we'll be honest about whether we can help.",
  },
  {
    q: "Do you replace our development team?",
    a: "Opposite. We make them better. They get a modern codebase they can actually work in, hands-on training with AI tools, and custom workflows that multiply their output. Good developers on a bad codebase look mediocre. Your people are probably better than you think.",
  },
  {
    q: "What happens after the 30 days?",
    a: "Your team should be self-sufficient. That's the whole point. If you want ongoing advisory work, we can discuss a retainer. But the engagement is designed so you don't need one.",
  },
  {
    q: "$35K is a lot.",
    a: "It is. Now add up what you're spending every month in slow velocity, rejected candidates, security exposure, and developer frustration. Most companies we talk to are burning $15K to $30K per month on this problem and don't realize it. The sprint pays for itself inside 90 days. Everything after that is pure upside.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between py-8 text-left group"
      >
        <span className="font-serif text-lg sm:text-xl md:text-2xl font-medium group-hover:text-accent-bright transition-colors duration-500 pr-8 leading-snug">
          {faq.q}
        </span>
        <span className="shrink-0 w-8 h-8 rounded-full border border-border-strong flex items-center justify-center group-hover:border-accent/40 transition-colors mt-1">
          {open ? (
            <Minus className="w-3.5 h-3.5 text-accent-bright" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-muted" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted leading-[1.8] pb-8 max-w-2xl text-base">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <Divider />
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <Tag>Questions you probably have</Tag>
        <Headline>
          Let&apos;s get these
          <br />
          <span className="italic text-muted">out of the way.</span>
        </Headline>

        <div className="mt-12">
          <Divider />
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
