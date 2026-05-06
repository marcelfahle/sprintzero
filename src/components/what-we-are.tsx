import { Container } from "./container";

const items = [
  "30-day modernization sprint, fixed scope",
  "Starts with a paid Codebase X-Ray diagnostic",
  "Built for legacy JS, PHP, and Rails SaaS teams",
  "Hands-on technical lead — not staff augmentation",
  "Ship real code changes, not a slide deck",
];

const nots = [
  "A full rewrite",
  "Staff augmentation",
  '"Strategy consulting"',
  "Greenfield builds",
  '"Help on a few PRs"',
];

export function WhatWeAre() {
  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
              What SprintZero is
            </p>
            <h2 className="mb-5 font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
              A focused modernization sprint. That&apos;s it.
            </h2>
            <p className="mb-3 text-[17px] leading-[1.65] text-fg-secondary">
              We take your legacy codebase and modernize it in one fixed-scope, 30-day sprint. No
              open-ended engagement. No discovery that leads nowhere.
            </p>
            <ul className="flex flex-col gap-4 pt-3">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 shrink-0 font-mono text-[14px] text-accent-500"
                  >
                    ✓
                  </span>
                  <span className="text-[16px] leading-[1.5] text-fg-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pt-12">
            <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-fg-tertiary">
              What it&apos;s not
            </p>
            <ul className="flex flex-col gap-3">
              {nots.map((n) => (
                <li key={n} className="flex items-center gap-2.5 text-[15px] text-fg-tertiary">
                  <span aria-hidden className="font-mono text-[14px]">
                    ✕
                  </span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
