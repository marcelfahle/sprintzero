"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";
import { Check, X } from "lucide-react";

const rows = [
  { label: "Timeline", old: "3–6 months", sprint: "1–2 weeks" },
  { label: "True cost", old: "$150K–$300K+", sprint: "Starting at $35K" },
  { label: "Your team during", old: "Paralyzed", sprint: "Ships normally" },
  { label: "AI-ready after?", old: "Probably not", sprint: "Guaranteed", hasBool: true },
  { label: "Team upskilled?", old: "No", sprint: "Workshop included", hasBool: true },
  { label: "Risk if it fails", old: "Months wasted, morale shot", sprint: "Performance guarantee" },
];

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparison">
      <Tag>Your three options</Tag>
      <Headline>
        Do it yourself. Hire a consultancy.
        <br />
        <span className="italic text-muted">Or call us.</span>
      </Headline>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-2xl border border-border overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="comparison-table w-full text-left min-w-[500px]">
            <thead>
              <tr className="bg-surface-2">
                <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[30%]" />
                <th className="p-5 sm:p-6 mono-tag text-muted/60 font-normal w-[35%]">
                  Internal / Consultancy
                </th>
                <th className="p-5 sm:p-6 w-[35%]">
                  <span className="mono-tag text-accent-bright font-normal flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-bright" />
                    Sprint Zero
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="bg-surface hover:bg-surface-2/50 transition-colors duration-300"
                >
                  <td className="p-5 sm:p-6 text-sm font-medium">{row.label}</td>
                  <td className="p-5 sm:p-6 text-sm text-muted/60">
                    <span className="flex items-center gap-2">
                      {row.hasBool && <X className="w-3.5 h-3.5 text-red-400/60 shrink-0" />}
                      {row.old}
                    </span>
                  </td>
                  <td className="p-5 sm:p-6 text-sm text-foreground font-medium">
                    <span className="flex items-center gap-2">
                      {row.hasBool && <Check className="w-3.5 h-3.5 text-success shrink-0" />}
                      {row.sprint}
                    </span>
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
