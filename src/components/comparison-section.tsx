import { Container } from "./container";
import { ComparisonTable } from "./comparison-table";

const columns = [
  "SprintZero",
  "Outsourced shop",
  "Full rewrite",
  "Hiring senior eng",
];

const rows = [
  {
    label: "Time",
    values: ["30 days", "6+ months, ongoing", "9–12 months", "3–6 months to hire"],
  },
  {
    label: "Cost",
    values: ["$35K", "$8–15K/mo", "$300K–$500K", "$200K+/yr loaded"],
  },
  {
    label: "Risk",
    values: [
      "Fixed scope, guaranteed",
      "Open-ended",
      "High failure rate",
      "Long ramp",
    ],
  },
  {
    label: "Output",
    values: [
      "Modernized codebase",
      "Features on broken foundation",
      "Hopefully ships",
      "One person",
    ],
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="mb-12 max-w-[760px]">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            How this compares
          </p>
          <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
            How this compares to the alternatives.
          </h2>
          <p className="text-[18px] leading-[1.6] text-fg-secondary">
            Same outcome. Wildly different price tag, timeline, and risk
            profile.
          </p>
        </div>
        <ComparisonTable columns={columns} rows={rows} />
      </Container>
    </section>
  );
}
