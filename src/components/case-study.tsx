import Link from "next/link";
import { Container } from "./container";

type Card = {
  label: string;
  title: string;
  tags: string[];
  metrics: { value: string; label: string; caption?: string }[];
  desc: string;
  href:
    | "/case-studies/cra-to-vite-migration-healthcare-saas"
    | "/case-studies/laravel-modernization-healthcare-saas";
};

const cards: Card[] = [
  {
    label: "Sprint 1 — Frontend",
    title: "CRA → Vite, Redux Saga → RTK",
    tags: ["React", "CRA", "Redux Saga", "Vite", "RTK Query"],
    metrics: [
      { value: "993", label: "Files migrated" },
      {
        value: "194 → 0",
        label: "Vulnerabilities",
        caption: "Backed by our ship-or-keep-working guarantee",
      },
      { value: "25+ → 4", label: "Reducers" },
    ],
    desc: "993 files migrated from Create React App to Vite. 25+ Redux Saga reducers consolidated to 4 RTK slices. First real test suite added. Zero feature regressions.",
    href: "/case-studies/cra-to-vite-migration-healthcare-saas",
  },
  {
    label: "Sprint 2 — Backend",
    title: "Laravel 8 → 13, PHP 7.3 → 8.3",
    tags: ["Laravel", "PHP", "MySQL", "HIPAA"],
    metrics: [
      { value: "7", label: "Services audited" },
      { value: "184", label: "Controllers mapped" },
      { value: "13", label: "Critical + high findings" },
      { value: "71", label: "Advisories surfaced" },
      { value: "2,400+", label: "Dead lines removed" },
    ],
    desc: "Audit + scoped modernization plan for a 7-service Laravel backend. Risk picture mapped against HIPAA. Phased delivery plan that's now driving the next sprint.",
    href: "/case-studies/laravel-modernization-healthcare-saas",
  },
];

export function CaseStudy() {
  return (
    <section id="case-study" className="border-y border-[#1e1e1c] bg-[#0a0a09] py-24">
      <Container>
        <div className="mb-14">
          <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-400">
            HIPAA-regulated SaaS — real numbers
          </p>
          <h2 className="mb-3 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-[#fafaf9] sm:text-[44px]">
            One client. Two sprints. Full-stack modernization.
          </h2>
          <p className="max-w-[600px] text-[18px] leading-[1.6] text-[#a8a8a1]">
            A mid-market healthcare platform stuck on CRA + Redux Saga + Laravel 8. They came back
            for the backend after we shipped the frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.label}
              className="flex flex-col gap-5 rounded-lg border border-[#292927] bg-white/[0.03] p-8"
            >
              <span className="font-mono text-[12px] font-medium tracking-mono text-accent-400 uppercase">
                {c.label}
              </span>
              <h3 className="font-display text-[22px] leading-[1.25] font-semibold tracking-subhead text-[#fafaf9]">
                {c.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/[0.06] px-3 py-1 font-mono text-[12px] font-medium text-[#a8a8a1]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <span className="font-mono text-[20px] font-semibold text-[#fafaf9]">
                      {m.value}
                    </span>
                    <span className="text-[13px] text-[#737370]">{m.label}</span>
                    {m.caption ? (
                      <span className="text-[11px] leading-tight text-accent-400/80">
                        {m.caption}
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
              <p className="text-[16px] leading-[1.6] text-[#a8a8a1]">{c.desc}</p>
              <Link
                href={c.href}
                className="mt-auto text-[15px] font-medium text-accent-400 underline-offset-4 hover:underline"
              >
                Read the full case study →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 rounded-lg border border-accent-400/15 bg-accent-400/[0.06] px-6 py-5">
          <div>
            <p className="text-[15px] font-medium text-[#fafaf9]">This client bought twice.</p>
            <p className="text-[14px] text-[#a8a8a1]">
              They hired us for the frontend, then came back for the backend. That&apos;s the proof.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
