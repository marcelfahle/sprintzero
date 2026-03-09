"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, SectionTitle } from "./section-wrapper";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { label: "Timeline", old: "3–6 months", sprint: "1–2 weeks" },
  { label: "True cost", old: "$150K – $300K+", sprint: "Starting at $35K" },
  { label: "Your team during", old: "Paralyzed", sprint: "Ships normally" },
  { label: "AI-ready after?", old: "Probably not", sprint: "Guaranteed", oldBad: true, sprintGood: true },
  { label: "Team upskilled?", old: "No", sprint: "Workshop included", oldBad: true, sprintGood: true },
  { label: "Risk if it fails", old: "Months wasted, morale shot", sprint: "Performance guarantee" },
];

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparison">
      <Tag>Your three options</Tag>
      <SectionTitle>
        Do it yourself. Hire a consultancy.
        <br />
        <span className="text-muted">Or call us.</span>
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 rounded-2xl border border-border bg-surface-2/50 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="comparison-table w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 sm:p-6 text-sm text-muted font-medium" />
                <th className="p-4 sm:p-6 text-sm text-muted font-medium">Internal / Consultancy</th>
                <th className="p-4 sm:p-6 text-sm font-semibold text-accent-bright">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-bright" />
                    Stack Sprint
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 sm:p-6 text-sm font-medium text-foreground">{row.label}</td>
                  <td className="p-4 sm:p-6 text-sm text-muted">
                    <div className="flex items-center gap-2">
                      {row.oldBad && <X className="w-4 h-4 text-danger shrink-0" />}
                      {!row.oldBad && !row.sprintGood && <Minus className="w-4 h-4 text-muted/50 shrink-0" />}
                      {row.old}
                    </div>
                  </td>
                  <td className="p-4 sm:p-6 text-sm">
                    <div className="flex items-center gap-2 text-foreground font-medium">
                      {row.sprintGood && <Check className="w-4 h-4 text-success shrink-0" />}
                      {row.sprint}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
