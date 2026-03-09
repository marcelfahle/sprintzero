"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";
import { Check, Minus } from "lucide-react";

const fits = [
  "Software or SaaS company doing $2M–$50M",
  "Codebase is 3+ years old and showing its age",
  "Team of 3–8 developers, mostly mid-level",
  "Decision-maker who can approve $35K without a committee",
  "You've noticed AI tools don't work on your code",
  "Security audit coming and you already know it's bad",
];

const notFits = [
  "Enterprise with procurement layers",
  "Greenfield project — start clean, you don't need us",
  "Modern stack that's just poorly managed",
  "Looking for full-time staff augmentation",
  "Budget under $25K",
];

export function ICPSection() {
  return (
    <SectionWrapper id="fit">
      <Tag>Is this you?</Tag>
      <Headline>
        This works for a <em className="italic">very specific</em>
        <br />
        kind of company.
      </Headline>

      <div className="mt-16 grid md:grid-cols-2 gap-px bg-border-strong rounded-2xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-2 p-8 sm:p-10"
        >
          <h3 className="font-serif text-xl font-semibold text-success mb-8">
            Built for you if —
          </h3>
          <div className="space-y-5">
            {fits.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-4 h-4 text-success shrink-0 mt-1" />
                <span className="text-base text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-surface p-8 sm:p-10"
        >
          <h3 className="font-serif text-xl font-semibold text-muted mb-8">
            Probably not a fit if —
          </h3>
          <div className="space-y-5">
            {notFits.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <Minus className="w-4 h-4 text-muted-soft shrink-0 mt-1" />
                <span className="text-base text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
