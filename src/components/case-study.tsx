import Link from "next/link";
import { Container } from "./container";

type Metric = { value: string; label: string };
type Card = {
  label: string;
  title: string;
  metrics: [Metric, Metric, Metric];
  desc: string;
  href:
    | "/case-studies/cra-to-vite-migration-healthcare-saas"
    | "/case-studies/laravel-modernization-healthcare-saas";
};

const cards: Card[] = [
  {
    label: "Sprint 1 — Frontend",
    title: "CRA → Vite, Redux Saga → RTK",
    metrics: [
      { value: "993", label: "Files migrated" },
      { value: "194 → 29", label: "Vulnerabilities (falling)" },
      { value: "25+ → 4", label: "Reducers" },
    ],
    desc: "End-of-life build toolchain replaced. Redux Saga complexity unwound. First automated test suite ever shipped for the codebase.",
    href: "/case-studies/cra-to-vite-migration-healthcare-saas",
  },
  {
    label: "Sprint 2 — Backend",
    title: "Laravel 8 → 13, PHP 7.3 → 8.5",
    metrics: [
      { value: "7", label: "Services modernized" },
      { value: "71", label: "Advisories resolved" },
      { value: "2,400+", label: "Dead lines removed" },
    ],
    desc: "7-service Laravel backend modernized end-to-end. Security debt cleared. CI and test baseline shipped.",
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
              className="flex flex-col gap-6 rounded-xl border border-[#292927] bg-white/[0.03] p-8"
            >
              <span className="font-mono text-[12px] font-medium tracking-mono text-accent-400 uppercase">
                {c.label}
              </span>
              <h3 className="font-display text-[24px] leading-[1.2] font-semibold tracking-subhead text-[#fafaf9]">
                {c.title}
              </h3>
              <dl className="grid grid-cols-3 gap-4 border-y border-[#1e1e1c] py-5">
                {c.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1.5">
                    <dd className="font-mono text-[20px] leading-none font-semibold tracking-tight text-[#fafaf9] tabular-nums">
                      {m.value}
                    </dd>
                    <dt className="text-[12px] leading-tight text-[#737370]">
                      {m.label}
                    </dt>
                  </div>
                ))}
              </dl>
              <p className="text-[15px] leading-[1.6] text-[#a8a8a1]">{c.desc}</p>
              <Link
                href={c.href}
                className="mt-auto text-[14px] font-medium text-accent-400 underline-offset-4 hover:underline"
              >
                Read the full case study →
              </Link>
            </article>
          ))}
        </div>

        <figure className="mt-10 flex flex-col gap-4 rounded-xl border border-accent-400/20 bg-accent-400/[0.06] p-8">
          <blockquote className="font-display text-[22px] leading-[1.3] font-semibold tracking-subhead text-[#fafaf9] sm:text-[26px]">
            &ldquo;Where can I deploy more money for this?&rdquo;
          </blockquote>
          <figcaption className="font-mono text-[13px] tracking-mono text-accent-400 uppercase">
            — SaaS founder, after our first sprint together
          </figcaption>
          <p className="border-t border-[#292927] pt-4 text-[14px] leading-[1.5] text-[#a8a8a1]">
            They came back for Sprint 2. Same client. Twice. That&apos;s the proof.
          </p>
        </figure>
      </Container>
    </section>
  );
}
