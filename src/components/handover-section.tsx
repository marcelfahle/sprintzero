import { Container } from "./container";

const handovers = [
  {
    eyebrow: "4 hours · live + recorded",
    title: "The workshop",
    desc: "Hands-on walkthrough of the new codebase. We teach context-window thinking, AI-assisted workflows, and the patterns we shipped. Recorded and AI-searchable — your team can ask questions of the workshop later.",
  },
  {
    eyebrow: "Handed over",
    title: "Custom AI skills package",
    desc: "The actual Claude, Cursor, and Copilot workflows we used during the sprint — tuned to your stack. No prompt-engineering homework. Even juniors apply them and ship.",
  },
  {
    eyebrow: "30 days · async + catch-up",
    title: "The support window",
    desc: "We don't disappear when the sprint ships. For 30 days your team can ping us async with questions that surface in shipping. Plus a scheduled 2-hour catch-up at week 2 to check what stuck and fix what didn't.",
  },
];

export function HandoverSection() {
  return (
    <section className="bg-bg-primary py-20">
      <Container>
        <div className="mb-14 max-w-[720px]">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
            The handover
          </p>
          <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
            Your team leaves dangerous.
          </h2>
          <p className="text-[18px] leading-[1.6] text-fg-secondary">
            Designed so you never need us again. Three deliverables,
            engineered to make your team self-sufficient on the new codebase.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {handovers.map((h) => (
            <article
              key={h.title}
              className="flex flex-col gap-3 rounded-lg border border-accent-500/25 bg-accent-500/[0.04] p-7"
            >
              <span className="font-mono text-[12px] font-medium tracking-mono text-accent-700 uppercase">
                {h.eyebrow}
              </span>
              <h3 className="font-display text-[22px] leading-[1.2] font-semibold tracking-tight text-fg-primary">
                {h.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-fg-secondary">{h.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
