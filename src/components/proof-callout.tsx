import { Container } from "./container";

export function ProofCallout() {
  return (
    <section className="border-y border-border-default bg-bg-secondary py-10">
      <Container>
        <p className="text-center font-display text-[18px] leading-[1.4] font-medium tracking-tight text-fg-primary sm:text-[22px] md:text-left">
          Their outsourced team quoted{" "}
          <span className="font-mono font-bold text-accent-700 tabular-nums">200 hours</span>. We
          shipped it in <span className="font-mono font-bold text-accent-700 tabular-nums">6</span>.
        </p>
      </Container>
    </section>
  );
}
