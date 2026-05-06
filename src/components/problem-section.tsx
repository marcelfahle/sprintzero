import { Container } from "./container";

const pains = [
  {
    title: "Six files for one change.",
    desc: "Your team isn't slow — the architecture is. Each change requires touching six files, three workarounds, and a prayer. Shipping velocity is a function of codebase quality, not headcount.",
  },
  {
    title: "AI is only as good as the code it reads.",
    desc: "When your codebase is full of anti-patterns and dead abstractions, Copilot and Cursor generate more of the same. Garbage in, garbage out.",
  },
  {
    title: "Diligence is coming.",
    desc: "SOC 2, HIPAA audits, due diligence for your next raise — they're all going to look at your dependency tree, your vulnerability count, and your test coverage. You know what they'll find.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="bg-bg-secondary py-20">
      <Container>
        <div className="mb-14 max-w-[640px]">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
            The real problem
          </p>
          <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
            It&apos;s not your team. It&apos;s the code.
          </h2>
          <p className="text-[18px] leading-[1.6] text-fg-secondary">
            Three symptoms. Same root cause.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pains.map((p) => (
            <article
              key={p.title}
              className="flex flex-col gap-3 rounded-lg border border-border-default bg-bg-primary p-8"
            >
              <h3 className="font-display text-[20px] font-semibold tracking-tight text-fg-primary">
                {p.title}
              </h3>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">{p.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
