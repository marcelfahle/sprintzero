import { Container } from "./container";

const pains = [
  {
    title: "Every feature takes too long",
    desc: "Your team isn't slow — the architecture is. Each change requires touching six files, three workarounds, and a prayer. Shipping velocity is a function of codebase quality, not headcount.",
  },
  {
    title: "AI tools produce garbage",
    desc: "Copilot and Cursor are only as good as the code they read. When your codebase is full of anti-patterns and dead abstractions, AI generates more of the same. Garbage in, garbage out.",
  },
  {
    title: "Compliance is coming",
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
            Your codebase is the bottleneck.
          </h2>
          <p className="text-[18px] leading-[1.6] text-fg-secondary">
            Not your team. Not your process. The code underneath everything.
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
