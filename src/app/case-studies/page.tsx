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
  href: "/case-studies/cra-to-vite-migration-healthcare-saas" | "/case-studies/laravel-modernization-healthcare-saas";
  overline: string;
  title: string;
  meta: string;
  desc: string;
  metrics: { value: string; label: string }[];
};

const cards: Card[] = [
  {
    href: "/case-studies/cra-to-vite-migration-healthcare-saas",
    overline: "Sprint 1 — Frontend",
    title: "CRA → Vite + Redux Saga → RTK",
    meta: "HIPAA Healthcare SaaS · 30 days",
    desc:
      "A 993-file React modernization for a HIPAA-compliant healthcare platform. End-of-life build toolchain replaced. Redux Saga complexity unwound. First automated test suite ever shipped for the codebase.",
    metrics: [
      { value: "0", label: "Production vulnerabilities at handoff" },
      { value: "993", label: "Files migrated" },
      { value: "4", label: "Reducers (down from 25+)" },
    ],
  },
  {
    href: "/case-studies/laravel-modernization-healthcare-saas",
    overline: "Sprint 2 — Backend",
    title: "Laravel 8 → 13 Modernization Plan",
    meta: "HIPAA Healthcare SaaS",
    desc:
      "A 7-service Laravel backend audit and phased modernization plan. Security exposure mapped. CI gaps identified. HIPAA risk picture written for leadership in plain English. The roadmap that's driving the next phase of the engagement.",
    metrics: [
      { value: "7", label: "Services audited" },
      { value: "184", label: "Controllers mapped" },
      { value: "71", label: "Advisories prioritized" },
    ],
  },
];

export default function CaseStudiesIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-border-default bg-bg-primary pt-32 pb-20">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              Case studies
            </p>
            <h1 className="mb-6 font-display text-[44px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[56px] lg:text-[68px]">
              Same client. Twice.
            </h1>
            <p className="max-w-[780px] text-[18px] leading-[1.65] text-fg-secondary sm:text-[19px]">
              Most agencies brag about logos. We&apos;d rather show the same
              client coming back. Our first SprintZero engagement was a
              frontend modernization for a HIPAA-compliant healthcare SaaS.
              After we shipped, they hired us again — this time for the
              backend. Two sprints, one client, full-stack proof.
            </p>
          </Container>
        </header>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {cards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group flex flex-col gap-5 rounded-2xl border border-border-default bg-bg-primary p-8 transition-shadow duration-200 hover:shadow-md"
                >
                  <span className="font-mono text-[12px] font-medium tracking-mono text-accent-600 uppercase">
                    {card.overline}
                  </span>
                  <h2 className="font-display text-[24px] leading-[1.2] font-bold tracking-subhead text-fg-primary">
                    {card.title}
                  </h2>
                  <p className="text-[14px] text-fg-tertiary">{card.meta}</p>
                  <p className="text-[16px] leading-[1.6] text-fg-secondary">
                    {card.desc}
                  </p>
                  <dl className="mt-auto grid grid-cols-3 gap-4 border-t border-border-default pt-5">
                    {card.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col gap-1">
                        <dd className="font-mono text-[18px] font-bold tracking-tight text-fg-primary">
                          {m.value}
                        </dd>
                        <dt className="text-[12px] leading-tight text-fg-tertiary">
                          {m.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                  <span className="font-medium text-[15px] text-accent-700 underline-offset-4 group-hover:underline">
                    Read the case study →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mx-auto max-w-[760px]">
              <h2 className="mb-5 font-display text-[28px] leading-[1.15] font-bold tracking-heading text-fg-primary sm:text-[34px]">
                Why this matters.
              </h2>
              <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-fg-secondary">
                <p>
                  We could put up a wall of logos. We&apos;d rather put up two
                  engagements deep. Both case studies cover the actual work —
                  the moves we made, the numbers that came out, the patterns
                  that drove decisions. No marketing slides. No edited
                  highlight reels. Just the work, described the way an
                  engineer would describe it.
                </p>
                <p>
                  If you want to see what the same depth of analysis looks
                  like for your codebase, that&apos;s what the X-Ray is for.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mx-auto flex max-w-[760px] flex-col items-start gap-5 rounded-2xl border border-border-default bg-bg-primary p-10">
              <h2 className="font-display text-[24px] leading-[1.2] font-bold tracking-subhead text-fg-primary sm:text-[28px]">
                Want one of these for your codebase?
              </h2>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                The Codebase X-Ray is the first step. One week. $2,500.
                Credited 100% toward the sprint if you proceed. You walk away
                with a plan whether you hire us or not.
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
