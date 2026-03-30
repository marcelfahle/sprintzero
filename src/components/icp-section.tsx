"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";
import { Check, Minus } from "lucide-react";

const fits = [
  "Software company or SaaS doing $1M\u2013$50M",
  "Codebase is 3+ years old and showing its age",
  "You\u2019re paying an outsourced team $5K\u2013$15K/month and can\u2019t tell what you\u2019re getting",
  "Your solo developer or small team (2\u20138 devs) is stuck maintaining instead of building",
  "You\u2019ve tried AI coding tools and they generated garbage on your code",
  "A security audit, SOC 2, or compliance review is on the horizon",
  "You need this fixed before a conference, a funding round, or a product launch",
  "Decision-maker who can approve investment without a committee",
];

const notFits = [
  "Enterprise with procurement layers and six-month vendor cycles",
  "Greenfield project \u2014 start clean, you don\u2019t need us",
  ".NET, Java, Go, or Rust stack (we\u2019re JS ecosystem, Elixir, Rails, PHP, Python)",
  "Modern stack that\u2019s just poorly managed \u2014 you need a better process, not a migration",
  "Looking for full-time staff augmentation or a permanent team member",
];

export function ICPSection() {
  return (
    <SectionWrapper id="fit">
      <Tag>Is this you?</Tag>
      <Headline>
        This works for a <em className="italic">very specific</em>{" "}
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
