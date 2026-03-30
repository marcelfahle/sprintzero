"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How does one team do in 30 days what takes most teams months?",
    a: "AI-powered development workflows. We use coordinated AI systems that process thousands of files while maintaining consistency across the entire codebase. The bottleneck in traditional migrations is human reading speed and context-switching. Our system doesn\u2019t have those limits. We provide the architecture decisions and quality control. The AI handles the mechanical transformation at scale. Same reason one person with an excavator moves more dirt than twenty people with shovels.",
  },
  {
    q: "Will this break our production environment?",
    a: "No. We work on a separate branch. Merges are incremental and tested. Your production environment stays untouched until everything is verified. If you don\u2019t have proper CI/CD, we set that up as part of the engagement.",
  },
  {
    q: "What about my existing developer / outsourced team?",
    a: "If you have an in-house developer who knows the product, they\u2019re our handoff partner. We build for them, not instead of them. They end up with a modern codebase they can maintain and extend, plus AI tooling that makes them dramatically more productive. If you have an outsourced team that\u2019s underperforming, we\u2019ll give you an honest assessment of whether to keep, replace, or restructure that relationship.",
  },
  {
    q: "What tech stacks do you work with?",
    a: "JavaScript ecosystem (React, Vue, Angular, Node, TypeScript), Elixir/Phoenix, Rails, PHP/Laravel, and Python/Django. We don\u2019t do .NET, Java, Go, or Rust. If your stack isn\u2019t in our list, we\u2019ll tell you on the audit call.",
  },
  {
    q: "Do you replace our development team?",
    a: "Opposite. We make them dangerous. Good developers on a bad codebase look mediocre. Your people are probably better than you think \u2014 they just need a codebase that doesn\u2019t fight them on every commit. After the workshop, they ship with the same AI-powered workflows we use.",
  },
  {
    q: "What happens after the 30 days?",
    a: "Your team is self-sufficient. That\u2019s the entire point of the engagement. The workshop, the handoff, the AI skills package \u2014 all of it is designed so you never need us again. If you want ongoing advisory work, we can discuss it. But you won\u2019t need it.",
  },
  {
    q: "What if we\u2019re planning to sell the company?",
    a: "Then this is urgent. The difference between a clean, modern, well-documented codebase and a legacy mess is hundreds of thousands \u2014 sometimes millions \u2014 in acquisition price. Technical due diligence is where deals die. A $35K investment that adds $500K+ to your valuation is probably the best ROI decision you\u2019ll make this year.",
  },
  {
    q: "$35K is a lot.",
    a: "Compare it to what? Your outsourced team\u2019s annual bill? That\u2019s $60K\u2013$120K and you still can\u2019t ship. The senior hire who ghosted? That\u2019s $30K in recruiting costs for nothing. The compliance review you\u2019re not ready for? That\u2019s an existential risk to the business. Most companies we talk to are already burning $10K to $25K per month on this problem \u2014 they just don\u2019t see it as one line item. The sprint pays for itself in 60\u201390 days. And if you\u2019re ever selling the company, a clean codebase vs a legacy mess is the difference between \u201Cwe can put a team on this\u201D and \u201Cwe need to budget for a rewrite.\u201D That delta alone is multiples of the investment.",
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
