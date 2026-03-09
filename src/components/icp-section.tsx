"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { Check, X } from "lucide-react";

const fits = [
  "Software or SaaS company doing $2M–$50M",
  "Codebase is 3+ years old and showing its age",
  "Team of 3–8 developers, mostly mid-level",
  "Someone on leadership can approve $35K without a committee",
  "You've noticed AI tools don't work on your code",
  "Security audit coming and you already know it's bad",
];

const notFits = [
  "Enterprise with procurement layers",
  "Greenfield project (start clean, you don't need us)",
  "Modern stack that's just poorly managed",
  "Looking for full-time staff augmentation",
  "Budget under $25K",
];

export function ICPSection() {
  return (
    <SectionWrapper id="fit">
      <Tag>Is this you?</Tag>
      <SectionTitle>
        This works for a very
        <br />
        <span className="text-muted">specific kind of company.</span>
      </SectionTitle>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-success/20 bg-success/5 p-6 sm:p-8"
        >
          <h3 className="text-lg font-semibold mb-6 text-success">Built for you if:</h3>
          <div className="space-y-4">
            {fits.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-sm text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-border bg-surface-2/50 p-6 sm:p-8"
        >
          <h3 className="text-lg font-semibold mb-6 text-muted">Probably not a fit if:</h3>
          <div className="space-y-4">
            {notFits.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <X className="w-5 h-5 text-muted/50 shrink-0 mt-0.5" />
                <span className="text-sm text-muted/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
