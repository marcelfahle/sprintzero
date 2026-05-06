import { Container } from "./container";

const items = [
  "Architecture risk map",
  "Prioritized modernization plan",
  "Shipped code changes (merged PR)",
  "Reduced security & dependency risk",
  "Test baseline with coverage metrics",
  "Documentation & handoff walkthrough",
];

export function Deliverables() {
  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="mb-12">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            What you get
          </p>
          <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
            Concrete deliverables, not promises.
          </h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 rounded-lg border border-border-default bg-bg-secondary px-6 py-5"
            >
              <span aria-hidden className="font-mono text-[14px] text-accent-500">
                ✓
              </span>
              <span className="text-[16px] font-medium text-fg-primary">{item}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
