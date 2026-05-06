import { Container } from "./container";

const forItems = [
  "SaaS companies, 20–200 people",
  "React / Redux / CRA / Laravel / Rails / Phoenix stacks",
  "Real revenue tied to the product",
  "Founder or technical lead who can actually buy",
];

const notItems = [
  "Greenfield builds",
  "Staff augmentation requests",
  "Enterprise procurement processes",
  '"Just help on a few PRs"',
];

export function ForNotFor() {
  return (
    <section className="bg-bg-secondary py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-[22px] font-semibold tracking-tight text-fg-primary sm:text-[24px]">
              SprintZero is for you if
            </h3>
            <ul className="flex flex-col gap-3">
              {forItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[16px] leading-[1.4] text-fg-primary"
                >
                  <span aria-hidden className="shrink-0 font-mono text-[14px] text-accent-500">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-display text-[22px] font-semibold tracking-tight text-fg-tertiary sm:text-[24px]">
              Not a fit if
            </h3>
            <ul className="flex flex-col gap-3">
              {notItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-[16px] leading-[1.4] text-fg-tertiary"
                >
                  <span aria-hidden className="shrink-0 font-mono text-[14px] text-fg-tertiary">
                    ✕
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
