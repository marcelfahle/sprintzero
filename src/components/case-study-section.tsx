"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionWrapper, Tag, Headline, Divider } from "./section-wrapper";
import { BookingTrigger } from "./booking-modal";

const results = [
  { label: "Frontend rebuild", before: "200 hours quoted", after: "6 hours delivered" },
  { label: "Framework", before: "Wrong one (outsourced team\u2019s preference)", after: "Right one (team\u2019s actual strength)" },
  { label: "Responsive design", before: "\u201CWe will try this ourselves\u201D", after: "Built in" },
  { label: "Handoff", before: "Knowledge stays with offshore shop", after: "Existing developer owns it" },
  { label: "SOC 2 readiness", before: "Hosting provider said \u201Cwe work with smaller companies\u201D", after: "Migration plan to proper infrastructure" },
];

export function CaseStudySection() {
  return (
    <SectionWrapper id="case-study">
      <div>
        <Tag>What this looks like in practice</Tag>
        <Headline>
          Their outsourced team quoted $10K and three months.{" "}
          <span className="gradient-text italic">We shipped it in a week.</span>
        </Headline>

        <div className="space-y-5 text-muted leading-[1.8] text-base max-w-3xl mt-8">
          <p>
            A 13-year-old SaaS company serving regulated financial institutions.
            One part-time developer who&apos;d been the sole technical lead since
            the beginning. An outsourced dev shop pricing the redesign by the
            screen &mdash; 200 hours, $10K, building in a framework their own
            developer admitted wasn&apos;t his strength.
          </p>
          <p>
            The founder needed the product ready for a conference in six weeks.
            The outsourced team couldn&apos;t do responsive design. Couldn&apos;t
            support phased releases. Was building screens that looked right but
            couldn&apos;t actually ship.
          </p>
          <p>
            We audited the codebase, identified the real architecture, and rebuilt
            the frontend with AI-powered workflows. What their team quoted at 200
            hours took us six. Then we restructured the backend migration plan so
            the founder&apos;s existing developer &mdash; who knew the product
            better than anyone &mdash; could maintain and extend it going forward.
          </p>
        </div>
      </div>

      <Divider />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="pt-12"
      >
        <h3 className="mono-tag text-accent-bright mb-8">The result</h3>
        <div className="rounded-2xl border border-border-strong overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="bg-surface-2">
                  <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[30%]" />
                  <th className="p-5 sm:p-6 mono-tag text-muted font-normal w-[35%]">Before</th>
                  <th className="p-5 sm:p-6 mono-tag text-accent-bright font-normal w-[35%]">After</th>
                </tr>
              </thead>
              <tbody>
                {results.map((row, i) => (
                  <tr
                    key={i}
                    className="bg-surface hover:bg-surface-2 transition-colors duration-300"
                  >
                    <td className="p-5 sm:p-6 text-sm font-medium">{row.label}</td>
                    <td className="p-5 sm:p-6 text-sm text-muted">{row.before}</td>
                    <td className="p-5 sm:p-6 text-sm text-foreground font-medium">{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-muted text-base mb-6">
          Want to see what we&apos;d find in your codebase?
        </p>
        <BookingTrigger
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 transition-all duration-300 text-white font-medium text-base glow-fire"
        >
          Book Your Free Audit Call
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </BookingTrigger>
      </motion.div>
    </SectionWrapper>
  );
}
