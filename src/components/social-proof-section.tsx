"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag } from "./section-wrapper";

const testimonials = [
  {
    quote: "I expected months. They delivered in days. And my team actually understands the code now.",
    attribution: "SaaS founder, $3M ARR",
  },
  {
    quote: "We were paying $12K/month to an offshore team that kept missing deadlines. Sprint Zero did more in one sprint than they did in six months.",
    attribution: "CEO, regulated fintech",
  },
];

export function SocialProofSection() {
  return (
    <SectionWrapper id="proof">
      <Tag>What they&apos;re saying</Tag>
      <div className="mt-8 grid md:grid-cols-2 gap-px bg-border-strong rounded-2xl overflow-hidden">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-surface-2 p-8 sm:p-10 flex flex-col"
          >
            <p className="font-serif text-lg sm:text-xl leading-relaxed text-foreground flex-1 italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6 mono-tag text-muted">
              &mdash; {t.attribution}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
