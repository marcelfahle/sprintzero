"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "./section-wrapper";

const testimonials = [
  {
    quote:
      "We\u2019d been paying an offshore team for eight months and couldn\u2019t ship a single release. Marcel came in, and within three weeks we had a modern codebase, a real CI pipeline, and a team that could actually move again.",
    name: "Placeholder Name",
    title: "CEO, Placeholder Company",
  },
  {
    quote:
      "I was skeptical anyone could modernize our stack that fast. But the code is clean, the tests pass, and my developers are shipping features with AI tools that used to spit out garbage. It\u2019s a different company now.",
    name: "Placeholder Name",
    title: "CTO, Placeholder Company",
  },
  {
    quote:
      "The workshop alone was worth it. Our lead dev went from mass-deleting Copilot suggestions to using AI on every feature. The productivity difference is night and day.",
    name: "Placeholder Name",
    title: "VP Engineering, Placeholder Company",
  },
];

export function SocialProofSection() {
  return (
    <SectionWrapper id="proof">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border-strong bg-surface-2 p-7 sm:p-8 flex flex-col"
          >
            <p className="text-base text-muted leading-[1.8] italic flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-6 pt-5 border-t border-border">
              <div className="font-medium text-foreground text-sm">
                {t.name}
              </div>
              <div className="mono-tag text-muted-faint mt-0.5">
                {t.title}
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionWrapper>
  );
}
