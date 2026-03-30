"use client";

import { motion } from "framer-motion";
import { SectionWrapper, Tag, Headline } from "./section-wrapper";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { label: "Timeline", outsourced: "3\u20136 months (and counting)", consultancy: "3\u20136 months", sprint: "30 days" },
  { label: "True cost", outsourced: "$60K\u2013$120K+ (hourly)", consultancy: "$150K\u2013$300K+", sprint: "Starting at $35K" },
  { label: "Your team during", outsourced: "Sidelined", consultancy: "Paralyzed", sprint: "Ships normally" },
  { label: "AI-ready after?", outsourced: "No", consultancy: "Probably not", sprint: "Guaranteed", hasBool: true },
  { label: "Framework choice", outsourced: "Whatever they know", consultancy: "Whatever they sell", sprint: "What\u2019s right for your stack" },
  { label: "Team upskilled?", outsourced: "No (they keep the knowledge)", consultancy: "No", sprint: "Workshop included", hasBool: true },
  { label: "You own the code?", outsourced: "Sort of", consultancy: "Eventually", sprint: "Day one" },
  { label: "Risk if it fails", outsourced: "Months wasted, more bills", consultancy: "Months wasted, morale shot", sprint: "Performance guarantee" },
];

export function ComparisonSection() {
  return (
    <SectionWrapper id="comparison">
      <Tag>Your three real options</Tag>
      <Headline>
        Keep the offshore shop. Hire a consultancy.
        <br />
        <span className="italic text-muted">Or call the team that does this in 30 days.</span>
      </Headline>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 rounded-2xl border border-border-strong overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="comparison-table w-full text-left min-w-[640px]">
            <thead>
              <tr className="bg-surface-2">
                <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[22%]" />
                <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[26%]">
                  Outsourced Dev Shop
                </th>
                <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[26%]">
                  Big Consultancy
                </th>
                <th className="p-5 sm:p-6 w-[26%]">
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
                  className="bg-surface hover:bg-surface-2 transition-colors duration-300"
                >
                  <td className="p-5 sm:p-6 text-sm font-medium">{row.label}</td>
                  <td className="p-5 sm:p-6 text-sm text-muted">
                    <span className="flex items-center gap-2">
                      {row.hasBool && <X className="w-3.5 h-3.5 text-danger shrink-0" />}
                      {row.outsourced}
                    </span>
                  </td>
                  <td className="p-5 sm:p-6 text-sm text-muted">
                    <span className="flex items-center gap-2">
                      {row.hasBool && <Minus className="w-3.5 h-3.5 text-muted-soft shrink-0" />}
                      {row.consultancy}
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
