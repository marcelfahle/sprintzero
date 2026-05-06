import { Container } from "./container";

const stats = [
  { value: "993", label: "Files migrated" },
  { value: "194 → 0", label: "Production vulnerabilities" },
  { value: "0", label: "Feature regressions" },
  { value: "1 sprint", label: "30 days, fixed scope" },
];

export function ProofStrip() {
  return (
    <section className="bg-bg-primary px-0 pt-12 pb-16">
      <Container>
        <div className="flex flex-wrap items-stretch gap-10 sm:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} className="flex items-center gap-10 sm:gap-12">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-[24px] font-semibold tracking-[-0.02em] text-fg-primary">
                  {s.value}
                </span>
                <span className="text-[14px] text-fg-tertiary">{s.label}</span>
              </div>
              {i < stats.length - 1 && (
                <span
                  aria-hidden
                  className="hidden h-12 w-px self-center bg-border-default sm:block"
                />
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
