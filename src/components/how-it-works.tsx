import { Container } from "./container";

const steps = [
  {
    n: "01",
    title: "Codebase X-Ray",
    desc: "We get repo access and produce an architecture risk map, dependency audit, and a prioritized modernization plan. Fixed price, takes one week.",
  },
  {
    n: "02",
    title: "Sprint plan",
    desc: "We scope the 30-day sprint: what gets modernized, what stays, what the handoff looks like. You approve before we start.",
  },
  {
    n: "03",
    title: "Modernization sprint",
    desc: "One month. We migrate frameworks, consolidate state management, eliminate dead code, reduce vulnerabilities, add tests. Ship as a single clean PR.",
  },
  {
    n: "04",
    title: "Handoff + retainer",
    desc: "Your team gets a documented, AI-ready codebase with a walkthrough. Optional guardrail retainer keeps things clean.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-bg-secondary py-20">
      <Container>
        <div className="mb-14">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            How it works
          </p>
          <h2 className="font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
            Four steps. One month.
          </h2>
        </div>
        <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="flex flex-col gap-3.5 rounded-lg border border-border-default bg-bg-primary p-7"
            >
              <span className="flex size-8 items-center justify-center rounded-full border-[1.5px] border-border-strong font-mono text-[13px] font-semibold text-accent-600">
                {step.n}
              </span>
              <h3 className="font-display text-[20px] font-semibold tracking-tight text-fg-primary">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-fg-secondary">{step.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
