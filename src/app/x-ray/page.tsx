import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/container";
import { ComparisonTable } from "@/components/comparison-table";
import { BOOKING_URL, XRAY_PRICE } from "@/lib/constants";

const URL = "https://sprintzero.sh/x-ray";

export const metadata: Metadata = {
  title: "Codebase X-Ray — $2,500 Diagnostic | SprintZero",
  description:
    "A real engineering audit of your legacy codebase. Architecture risk map, vulnerability baseline, modernization plan. Delivered in one week. Credited to the sprint.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "Codebase X-Ray — $2,500 Diagnostic | SprintZero",
    description:
      "A real engineering audit of your legacy codebase. Delivered in one week. Credited to the sprint.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Codebase X-Ray — $2,500 Diagnostic | SprintZero",
    description:
      "A real engineering audit of your legacy codebase. Delivered in one week. Credited to the sprint.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Codebase X-Ray",
  description:
    "A fixed-price engineering diagnostic of a legacy codebase. Architecture risk map, dependency audit, prioritized modernization plan, and a 60-minute walkthrough call. Delivered in one week.",
  provider: {
    "@type": "Organization",
    name: "SprintZero",
    url: "https://sprintzero.sh",
  },
  areaServed: "Worldwide",
  offers: {
    "@type": "Offer",
    price: "2500",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: BOOKING_URL,
  },
};

const deliverables = [
  {
    title: "Architecture risk map",
    desc: "A structural read on what's load-bearing, what's brittle, and what's silently rotting.",
  },
  {
    title: "Dependency audit",
    desc: "Every CVE, every advisory, every end-of-life library, prioritized by exploit risk.",
  },
  {
    title: "Production vulnerability baseline",
    desc: "A real count, not a guess.",
  },
  {
    title: "Prioritized modernization plan",
    desc: "The to-do list, in the order a senior engineer would actually execute it.",
  },
  {
    title: "Sprint scope and timeline",
    desc: "What we'd ship, in 30 days, for $35K.",
  },
  {
    title: "Stack health scorecard",
    desc: "Calibrated against current best practices for your framework.",
  },
  {
    title: "AI-readiness audit",
    desc: "Can your team actually use Cursor, Copilot, or Claude Code on this codebase right now? Where it works, where it breaks.",
  },
  {
    title: "Test coverage baseline",
    desc: "What exists, what's missing, what should exist.",
  },
  {
    title: '"If you do nothing" risk projection',
    desc: "A 6-month forward look at your security exposure, dependency drift, and shipping velocity.",
  },
  {
    title: "Cost-of-inaction calculator",
    desc: "Your numbers, against the cost of a full rewrite ($300K–$500K) and the cost of staying stuck.",
  },
  {
    title: "Hiring playbook",
    desc: "Interview questions and red flags calibrated to the modernization plan.",
  },
  {
    title: "Executive summary deck",
    desc: "Something you can present internally to leadership.",
  },
  {
    title: "60-minute walkthrough call",
    desc: "Marcel walks you and your team through every finding.",
  },
  {
    title: "30 days of post-X-Ray email Q&A",
    desc: "Included, regardless of whether you hire us.",
  },
];

const steps = [
  {
    n: "01",
    title: "Kickoff call (30 minutes)",
    desc: "We learn your stack, your team, your forcing function. You learn how we work.",
  },
  {
    n: "02",
    title: "Repo access",
    desc: "Read-only access to the codebase you want audited. We sign whatever NDA your legal team needs.",
  },
  {
    n: "03",
    title: "Analysis week",
    desc: "Five business days of senior engineering analysis — Marcel personally, not farmed out. You can ask questions in Slack the entire time.",
  },
  {
    n: "04",
    title: "Walkthrough",
    desc: "60-minute live session where we walk you through the deliverable. You ask questions. We answer them. Then you decide whether to book the sprint or run the plan yourself.",
  },
];

const comparisonColumns = ["Codebase X-Ray", 'Free "audit"', "$300K rewrite"];
const comparisonRows = [
  { label: "Cost", values: ["$2,500", "$0 (and worth it)", "$300K–$500K"] },
  { label: "Time", values: ["1 week", "30 minutes", "9–12 months"] },
  {
    label: "Output",
    values: ["Engineering deliverable", "Sales pitch", "Hopefully shippable"],
  },
  {
    label: "Plan you can execute",
    values: ["Yes", "No", "After 12 months"],
  },
  {
    label: "Money back if useless",
    values: ["Yes", "N/A", "No"],
  },
];

const faqs = [
  {
    q: "Why charge for an audit at all?",
    a: "Because a real diagnostic takes real engineering time. Free audits are sales calls. The X-Ray is an engineering deliverable that's useful whether you hire us or not. The price filters for serious buyers and signals that you're getting an artifact, not a pitch.",
  },
  {
    q: "Why $2,500 specifically?",
    a: "It's the rough cost of one senior engineer-week. That's what you're buying. If we charged less, we'd cut corners. If we charged more, we'd be selling discovery instead of delivering it.",
  },
  {
    q: "What if I don't want the sprint after the X-Ray?",
    a: "You keep the deliverable. Run the plan with your team. Use it to brief your next hire. Or sit on it. Either way it's yours.",
  },
  {
    q: "Can the X-Ray be used to brief a different vendor?",
    a: "Yes. We've designed it to be vendor-neutral. The plan describes what needs to happen, not who has to do it.",
  },
];

export default function XRayPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b border-border-default bg-bg-primary pt-32 pb-20">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              The Codebase X-Ray
            </p>
            <h1 className="mb-4 max-w-[860px] font-display text-[44px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[56px] lg:text-[68px]">
              The Codebase X-Ray.
            </h1>
            <p className="mb-8 max-w-[760px] font-display text-[20px] leading-[1.3] font-semibold tracking-subhead text-fg-primary sm:text-[24px]">
              The first week of work, before you commit to the sprint.
            </p>
            <p className="mb-10 max-w-[760px] text-[18px] leading-[1.65] text-fg-secondary">
              Two and a half thousand dollars. One week. A real engineering deliverable — not a
              sales call dressed up as an audit. You get a complete modernization plan whether you
              hire us or not. If you do, the entire fee credits toward the sprint.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-fg-primary px-8 py-3.5 text-[16px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
            >
              Book the Codebase X-Ray — {XRAY_PRICE} →
            </a>
          </Container>
        </header>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mb-12 max-w-[760px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                What you get
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                Not a one-page PDF and a follow-up call.
              </h2>
              <p className="text-[17px] leading-[1.65] text-fg-secondary">
                It&apos;s the same kind of artifact our clients get at the end of a sprint — just
                front-loaded into the diagnostic phase.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {deliverables.map((d, i) => (
                <li
                  key={d.title}
                  className="flex flex-col gap-2 rounded-lg border border-border-default bg-bg-primary p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[12px] font-semibold tracking-mono text-accent-600">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-[18px] font-semibold tracking-tight text-fg-primary">
                      {d.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.55] text-fg-secondary">{d.desc}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mx-auto flex max-w-[820px] flex-col items-start gap-6 rounded-2xl border border-border-default bg-bg-secondary p-10 sm:p-12">
              <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
                The offer
              </p>
              <p className="font-mono text-[64px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
                {XRAY_PRICE}
              </p>
              <div className="flex flex-col gap-2 text-[17px] text-fg-primary">
                <p className="font-semibold">One-time. Delivered in one week.</p>
                <p className="text-fg-secondary">
                  100% credited toward the modernization sprint if you proceed.
                </p>
              </div>
              <p className="text-[16px] leading-[1.65] text-fg-secondary">
                The X-Ray costs less than one week of your current team spinning on the wrong
                problems. A full rewrite costs $300K–$500K and takes 9–12 months with no guarantee
                it ships. The X-Ray takes a week and gives you a plan either way.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-fg-primary px-8 py-3.5 text-[15px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
              >
                Book the Codebase X-Ray — {XRAY_PRICE} →
              </a>
            </div>
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mx-auto max-w-[760px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                What if we just run the X-Ray ourselves?
              </p>
              <h2 className="mb-6 font-display text-[28px] leading-[1.15] font-bold tracking-heading text-fg-primary sm:text-[34px]">
                You can.
              </h2>
              <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-fg-secondary">
                <p>
                  The X-Ray is a real to-do list — not a sales document. If your team has the senior
                  bandwidth and the AI-tooling fluency to execute it, you&apos;ve got everything you
                  need to do this yourselves.
                </p>
                <p>
                  Most clients hire us because executing the plan is 30 days of focused senior
                  engineering work, and pulling someone off the roadmap for a month is more
                  expensive than the sprint. But we&apos;d rather you have the plan and walk away
                  than book a sprint you didn&apos;t need.
                </p>
                <p className="font-medium text-fg-primary">
                  That&apos;s why the X-Ray is the deliverable, not the sales call.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mx-auto flex max-w-[820px] flex-col items-start gap-5 rounded-2xl border border-accent-500/40 bg-bg-primary p-10 sm:p-12">
              <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
                Our guarantee
              </p>
              <h2 className="font-display text-[28px] leading-[1.15] font-bold tracking-heading text-fg-primary sm:text-[34px]">
                Money back if useless.
              </h2>
              <div className="flex flex-col gap-4 text-[17px] leading-[1.7] text-fg-secondary">
                <p>
                  If you don&apos;t think the X-Ray was worth $2,500 of senior engineering time, we
                  refund it. No questions, no negotiations, no &ldquo;let me explain why you&apos;re
                  wrong.&rdquo; We&apos;d rather have your trust than your money.
                </p>
                <p>
                  This has never been used. We don&apos;t expect it ever will be. But it&apos;s
                  there.
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mb-12">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                How it works
              </p>
              <h2 className="font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                Four steps. One week.
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
                  <h3 className="font-display text-[18px] font-semibold tracking-tight text-fg-primary">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-fg-secondary">{step.desc}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mb-12 max-w-[760px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                How this compares
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                X-Ray vs $300K rewrite vs free audit.
              </h2>
            </div>
            <ComparisonTable columns={comparisonColumns} rows={comparisonRows} />
          </Container>
        </section>

        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mx-auto max-w-[820px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                FAQ
              </p>
              <h2 className="mb-12 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                Common questions.
              </h2>
              <dl className="flex flex-col">
                {faqs.map((item) => (
                  <div
                    key={item.q}
                    className="flex flex-col gap-3 border-t border-border-default py-6 last:border-b"
                  >
                    <dt className="font-display text-[18px] font-semibold tracking-tight text-fg-primary">
                      {item.q}
                    </dt>
                    <dd className="text-[16px] leading-[1.65] text-fg-secondary">{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        <section className="bg-[#0a0a09] py-24">
          <Container>
            <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
              <h2 className="font-display text-[36px] leading-[1.1] font-bold tracking-heading text-[#fafaf9] sm:text-[44px]">
                Book the X-Ray.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#a8a8a1]">
                One week. Engineering deliverable. Money back if useless. 100% credited to the
                sprint if you proceed.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#fafaf9] px-9 py-4 text-[16px] font-semibold text-[#0a0a09] transition-opacity duration-200 hover:opacity-90"
              >
                Book the Codebase X-Ray — {XRAY_PRICE} →
              </a>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
