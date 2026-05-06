import { Container } from "./container";

export function GuaranteeSection() {
  return (
    <section className="bg-bg-secondary py-20">
      <Container>
        <div className="mx-auto flex max-w-[820px] flex-col items-start gap-6 rounded-2xl border border-accent-500/40 bg-bg-primary p-10 sm:p-12">
          <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
            Our guarantee
          </p>
          <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
            Ship the agreed scope in 30 days, or we keep working — for free —
            until it does.
          </h2>
          <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-fg-secondary">
            <p>
              We&apos;re not measuring lines of code or PRs merged. We&apos;re
              measuring whether your team is shipping faster, your
              vulnerabilities are gone, and your codebase is one your
              engineers actually want to open.
            </p>
            <p>If we miss the bar, the work continues at our cost.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
