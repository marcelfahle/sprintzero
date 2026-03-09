"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";

const stats = [
  { value: "1,600+", label: "files modernized" },
  { value: "4", label: "days" },
  { value: "100+", label: "vulns killed" },
  { value: "0", label: "downtime" },
];

const techDetails = [
  "Class → functional component migration with hooks",
  "Legacy state management → modern async patterns",
  "Deprecated UI framework → clean component system",
  "All critical + high-severity vulnerabilities eliminated",
  "TypeScript foundations for AI-dev compatibility",
  "Custom AI skills package, configured per-team",
  "CI/CD pipeline with automated quality gates",
];

export function CaseStudySection() {
  return (
    <SectionWrapper id="case-study">
      <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-start">
        <div>
          <Tag>What this looks like in practice</Tag>
          <Headline>
            1,600 files.
            <br />
            Four days.
            <br />
            <span className="gradient-text italic">Zero downtime.</span>
          </Headline>

          <div className="space-y-5 text-muted leading-[1.8] text-base max-w-2xl mt-8">
            <p>
              A SaaS company came to us with a codebase that hadn&apos;t been
              meaningfully updated since 2019. Offshore team of mid-level
              developers. Stuck. Couldn&apos;t hire seniors. Couldn&apos;t ship
              fast. Couldn&apos;t touch any of the AI tools their competitors
              were using.
            </p>
            <p>
              Their internal estimate?{" "}
              <span className="text-foreground font-medium">
                Three to six months.
              </span>{" "}
              And that assumed nothing else broke.
            </p>
          </div>
        </div>

        <div className="flex flex-row lg:flex-col gap-px bg-border-strong rounded-2xl overflow-hidden lg:w-48">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface-2 p-5 sm:p-6 flex-1 lg:flex-none text-center"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold stat-number mb-1">
                {stat.value}
              </div>
              <div className="mono-tag text-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12"
      >
        <h3 className="mono-tag text-accent-bright mb-8">
          For the engineers in the room
        </h3>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
          {techDetails.map((detail, i) => (
            <div key={i} className="flex items-start gap-3 py-1">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-base text-muted leading-relaxed">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
