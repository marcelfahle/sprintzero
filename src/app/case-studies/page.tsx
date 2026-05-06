import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/container";
import { BOOKING_URL } from "@/lib/constants";

const URL = "https://sprintzero.sh/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | SprintZero — Legacy Codebase Modernization",
  description:
    "Real engagements, real numbers. Two sprints, one HIPAA SaaS client, full-stack modernization.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Case Studies | SprintZero",
    description:
      "Real engagements, real numbers. Two sprints, one HIPAA SaaS client, full-stack modernization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | SprintZero",
    description:
      "Real engagements, real numbers. Two sprints, one HIPAA SaaS client, full-stack modernization.",
  },
};

type Card = {
  href:
    | "/case-studies/cra-to-vite-migration-healthcare-saas"
    | "/case-studies/laravel-modernization-healthcare-saas";
  overline: string;
  title: string;
  meta: string;
  heroMetric: { value: string; label: string };
  shipped: string[];
  desc: string;
};

const cards: Card[] = [
  {
    href: "/case-studies/cra-to-vite-migration-healthcare-saas",
    overline: "Sprint 1 — Frontend",
    title: "CRA → Vite, Redux Saga → RTK",
    meta: "30 days · 993 files migrated",
    heroMetric: { value: "0", label: "Production vulnerabilities at handoff" },
    shipped: [
      "End-of-life build toolchain replaced — CRA → Vite",
      "Redux Saga complexity unwound — 25+ reducers down to 4 RTK slices",
      "First automated test suite the codebase has ever had",
    ],
    desc: "A 993-file React modernization for a HIPAA-compliant healthcare platform.",
  },
  {
    href: "/case-studies/laravel-modernization-healthcare-saas",
    overline: "Sprint 2 — Backend",
    title: "Laravel 8 → 13, PHP 7.3 → 8.5",
    meta: "Audited + modernized · 7 services",
    heroMetric: { value: "71", label: "Composer advisories resolved" },
    shipped: [
      "Stack moved to Laravel 13, PHP 8.5, Node 24 LTS, MySQL 8.4 LTS",
      "Security debt cleared — 13 critical + high findings closed",
      "CI, dependency audits, and test baseline shipped",
    ],
    desc: "A 7-service Laravel backend, audited and modernized end-to-end.",
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-border-default bg-bg-primary pt-32 pb-16">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              Case studies
            </p>
            <h1 className="mb-6 font-display text-[40px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[52px] lg:text-[60px]">
              A HIPAA SaaS, modernized end-to-end.
            </h1>
            <p className="max-w-[780px] text-[18px] leading-[1.65] text-fg-secondary sm:text-[19px]">
              Frontend in 30 days. Backend right after. Same client both
              times. Below: both sprints, in full — the work, the numbers,
              the patterns.
            </p>
          </Container>
        </header>

        <section className="border-b border-border-default bg-bg-primary py-14">
          <Container>
            <figure className="mx-auto flex max-w-[820px] flex-col gap-4 rounded-xl border border-accent-500/30 bg-accent-500/[0.05] p-8 sm:p-10">
              <blockquote className="font-display text-[24px] leading-[1.25] font-semibold tracking-subhead text-fg-primary sm:text-[28px]">
                &ldquo;Where can I deploy more money for this?&rdquo;
              </blockquote>
              <figcaption className="font-mono text-[13px] tracking-mono text-accent-700 uppercase">
                — Founder, HIPAA SaaS client
              </figcaption>
            </figure>
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col gap-6 rounded-2xl border border-border-default bg-bg-primary p-8 transition-shadow duration-200 hover:shadow-md sm:p-10"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[12px] font-medium tracking-mono text-accent-600 uppercase">
                      {card.overline}
                    </span>
                    <h2 className="font-display text-[26px] leading-[1.15] font-bold tracking-subhead text-fg-primary">
                      {card.title}
                    </h2>
                    <p className="font-mono text-[13px] tracking-mono text-fg-tertiary">
                      {card.meta}
                    </p>
                  </div>

                  <div className="flex items-baseline gap-4 border-y border-border-default py-5">
                    <span className="font-mono text-[44px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
                      {card.heroMetric.value}
                    </span>
                    <span className="text-[14px] leading-tight text-fg-secondary">
                      {card.heroMetric.label}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <p className="font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
                      What shipped
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {card.shipped.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] leading-[1.5] text-fg-primary"
                        >
                          <span
                            aria-hidden
                            className="mt-1 shrink-0 font-mono text-[12px] text-accent-500"
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-[15px] leading-[1.6] text-fg-secondary">
                    {card.desc}
                  </p>

                  <span className="mt-auto font-medium text-[15px] text-accent-700 underline-offset-4 group-hover:underline">
                    Read the full case study →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mx-auto flex max-w-[820px] flex-col items-start gap-5 rounded-2xl border border-border-default bg-bg-secondary p-10">
              <h2 className="font-display text-[24px] leading-[1.2] font-bold tracking-subhead text-fg-primary sm:text-[28px]">
                Want one of these for your codebase?
              </h2>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                The Codebase X-Ray is the first step. One week. $2,500.
                Credited 100% toward the sprint if you proceed. You walk
                away with a plan whether you hire us or not.
              </p>
              <div className="flex flex-wrap items-center gap-5">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-fg-primary px-7 py-3.5 text-[15px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
                >
                  Book the Codebase X-Ray →
                </a>
                <Link
                  href="/x-ray"
                  className="text-[15px] font-medium text-fg-primary underline-offset-4 hover:underline"
                >
                  See the X-Ray deliverable list →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
