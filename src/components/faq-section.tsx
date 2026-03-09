"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does one team do in a week what takes most teams months?",
    a: "AI-powered development workflows. We use coordinated AI agents that process thousands of files while maintaining consistency across the entire codebase. We've spent a year building and testing this toolkit. The bottleneck in traditional migrations is human reading speed and context-switching. Our system doesn't have those limits. We provide the architecture decisions and quality control. The AI handles the mechanical transformation at scale.",
  },
  {
    q: "Will this break our production environment?",
    a: "No. We work on a separate branch. Merges are incremental and tested. Your production environment stays untouched until everything is verified. If you don't have proper CI/CD, we set that up too.",
  },
  {
    q: "What if our stack isn't React?",
    a: "The approach works across React, Angular, Vue, and older frameworks. The specific tooling changes but the methodology is the same. Book the audit call. We'll be honest about whether we can help.",
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-border"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base sm:text-lg font-medium group-hover:text-accent-bright transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted leading-relaxed pb-6">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <Tag>Questions you probably have</Tag>
        <SectionTitle>Let&apos;s get these out of the way.</SectionTitle>

        <div className="mt-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
