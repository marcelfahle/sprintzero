"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { FileCode2, Calendar, ShieldCheck, Wifi } from "lucide-react";

const stats = [
  { icon: FileCode2, value: "1,600+", label: "files modernized" },
  { icon: Calendar, value: "4", label: "days start to finish" },
  { icon: ShieldCheck, value: "100+", label: "vulnerabilities killed" },
  { icon: Wifi, value: "0", label: "downtime" },
];

const techDetails = [
  "Complete class component → functional component migration with hooks",
  "Legacy state management replaced with modern async patterns",
  "Deprecated UI framework rebuilt with clean component system",
  "All critical & high-severity dependency vulnerabilities eliminated",
  "TypeScript foundations for AI-assisted development compatibility",
  "Custom AI skills package configured for the team's patterns",
  "CI/CD pipeline with automated quality gates",
];

export function CaseStudySection() {
  return (
    <SectionWrapper id="case-study" className="relative">
      {/* Glow line separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 glow-line" />

      <Tag>What this looks like in practice</Tag>
      <SectionTitle>
        1,600 files. Four days.
        <br />
        <span className="gradient-text">Zero downtime.</span>
      </SectionTitle>

      <p className="text-muted text-lg leading-relaxed max-w-3xl mb-6">
        A SaaS company came to us with a codebase that hadn&apos;t been meaningfully updated since 2019. 
        Offshore team of mid-level developers. Stuck. Couldn&apos;t hire seniors. Couldn&apos;t ship fast. 
        Couldn&apos;t touch any of the AI tools their competitors were using.
      </p>
      <p className="text-muted mb-12">
        Their internal estimate for doing the modernization themselves?{" "}
        <span className="text-foreground font-medium">Three to six months.</span> And that assumed nothing else broke along the way.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stat-card rounded-2xl border border-border bg-surface-2/50 p-6 text-center"
          >
            <stat.icon className="w-6 h-6 text-accent-bright mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-border bg-surface-2/50 p-6 sm:p-8"
      >
        <h3 className="text-sm font-mono text-accent-bright uppercase tracking-wider mb-6">
          Technical details (for the engineers in the room)
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {techDetails.map((detail, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-bright shrink-0" />
              <span className="text-sm text-muted leading-relaxed">{detail}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
