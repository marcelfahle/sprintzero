import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import { Container } from "@/components/container";
import { TECH_DUE_DILIGENCE_BOOKING_URL } from "@/lib/constants";

const URL = "https://sprintzero.sh/tech-due-diligence";
const BOOKING_URL_UTM = TECH_DUE_DILIGENCE_BOOKING_URL;
const MARCEL_EMAIL = "marcel@sprintzero.sh";

const TITLE = "Technical Due Diligence for SaaS Acquisitions | SprintZero";
const DESCRIPTION =
  "Pre-close technical due diligence for SaaS acquisitions. Written assessment by senior engineers covering codebase risk, dependency and security posture, architectural debt, hiring risk, and a modernization cost range. From $5,000. Typical $10,000. Delivered in 1 to 2 weeks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const LAST_UPDATED_ISO = "2026-05-08";
const LAST_UPDATED_DISPLAY = "May 2026";

const PRICE_START = "$5,000";
const PRICE_TYPICAL = "$10,000";
const REMEDIATION_PRICE = "$35,000";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Technical Due Diligence",
  serviceType: "Technical Due Diligence",
  description:
    "Pre-close technical due diligence for SaaS acquisitions. A written assessment by senior engineers covering codebase risk, dependency and security posture, architectural debt, hiring and handover risk, and a modernization cost estimate range. Delivered in 1 to 2 weeks.",
  provider: {
    "@type": "Organization",
    name: "SprintZero",
    url: "https://sprintzero.sh",
  },
  areaServed: "Worldwide",
  audience: {
    "@type": "BusinessAudience",
    audienceType:
      "M&A advisors, private equity buy-side teams, vertical SaaS aggregators, technical co-founders, exiting SaaS founders",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Technical Due Diligence (starting)",
      price: "5000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: BOOKING_URL_UTM,
    },
    {
      "@type": "Offer",
      name: "Technical Due Diligence (typical)",
      price: "10000",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: BOOKING_URL_UTM,
    },
  ],
};

const deliverableSections = [
  {
    title: "Codebase risk map",
    desc: "What is load-bearing, what is brittle, what is decaying. Findings are prioritized by impact on continuity, integration cost, and post-close engineering load.",
  },
  {
    title: "Dependency and security posture",
    desc: "Inventory of CVEs, advisories, end-of-life libraries, and committed secrets. Production vulnerability count with exploitability and remediation effort scored per item.",
  },
  {
    title: "Architectural debt summary",
    desc: "Distributed-monolith patterns, framework version drift, abandoned migrations, dead code, and the structural decisions an acquirer will inherit. Written so a non-technical buyer can defend it in committee.",
  },
  {
    title: "Hiring and handover risk",
    desc: "Bus factor, single-engineer dependencies, undocumented systems, and the availability of replacement engineers for the stack as it stands. Addresses the question every buyer asks: what happens if the lead engineer leaves on day one post-close.",
  },
  {
    title: "Modernization cost estimate range",
    desc: "A defensible cost band to bring the codebase to a maintainable, hireable, AI-tooling-ready state, with the reasoning behind it. Designed to function as a price-adjustment input or a post-close capex line item.",
  },
  {
    title: "Written report and 30-minute walkthrough",
    desc: "Shareable PDF, structured for buyer-side legal, technical, and financial review. One live walkthrough with the assessment lead. The commissioning party may forward the report internally without redaction.",
  },
];

const stackIn = [
  "React, Vue, Angular (current versions and legacy)",
  "Node.js, TypeScript",
  "Elixir / Phoenix",
  "Ruby on Rails",
  "PHP / Laravel",
  "Python / Django",
];

const stackOut = [
  ".NET / C#",
  "Java / JVM enterprise stacks",
  "Go, Rust",
  "Mainframe, COBOL, AS/400",
  "Microservices-on-Kubernetes platform assessments",
];

const steps = [
  {
    n: "01",
    title: "Intro call (30 minutes)",
    desc: "Stack confirmation, deal context, timeline, and conflict-of-interest check. Scope and final fee are set on this call. No contact-form pricing.",
  },
  {
    n: "02",
    title: "NDA and read-only access",
    desc: "Mutual NDA executed. Read-only repository access, time-bounded to the engagement window. Access is revoked and credentials deleted on delivery.",
  },
  {
    n: "03",
    title: "Assessment (5 to 10 business days)",
    desc: "Senior-engineer review of the codebase, dependencies, infrastructure posture, and team artifacts. Clarification questions are routed asynchronously to the seller's technical lead through the buyer or advisor.",
  },
  {
    n: "04",
    title: "Written report and walkthrough",
    desc: "Final report delivered as a structured PDF. 30-minute live walkthrough with buyer, advisor, and where appropriate the seller. Total elapsed time, kickoff to delivery: 1 to 2 weeks.",
  },
];

const proofFindings = [
  {
    code: "Finding A",
    descriptor: "HIPAA-regulated SaaS, ~$5M ARR, React/Laravel stack",
    items: [
      "194 known production vulnerabilities across direct and transitive dependencies",
      "27 modal components implemented with copy-pasted markup; no shared primitive",
      "Untested controller files in the 500–800 line range, no integration coverage",
      "Frontend on Create React App (end-of-life); Webpack 4; Redux + sagas split across hundreds of files",
    ],
  },
  {
    code: "Finding B",
    descriptor: "Vertical SaaS, single-product, PHP/Laravel + MySQL on shared hosting",
    items: [
      "13-year-old Laravel application. PHP 7.x; MySQL 5.7. All past end-of-life",
      "Authentication implemented in-app with weak hashing and no rate limiting",
      "No database migration system; schema changes applied by hand in production",
      "Single engineer with full operational knowledge; no runbooks, no documented deployment",
    ],
  },
];

const faqs = [
  {
    q: "How is this different from a SOC 2 or security audit?",
    a: "A SOC 2 audit assesses whether the organization has frameworks and controls in place. We assess the code itself: what it does, what it depends on, what it inherits, and what it costs to keep running. The two are complementary. SOC 2 covers governance. This covers the engineering substrate underneath. Buyers typically need both; they answer different questions.",
  },
  {
    q: "How do you handle confidentiality?",
    a: "Mutual NDA before any code or documentation moves. Repository access is read-only and time-bounded to the engagement window. Access is revoked and any local working copy is deleted on delivery. The written report is the property of the commissioning party. We retain no copy beyond the engagement and do not reuse client material in marketing without written consent.",
  },
  {
    q: "What is your conflict-of-interest policy?",
    a: "We will not run an assessment on a target where we have an ongoing engineering relationship with the seller, the buyer, or a competing bidder on the same deal. Conflicts are disclosed and resolved on the intro call before NDA. Where a conflict exists, we refer the engagement to a peer firm.",
  },
  {
    q: "Can you work for the buy-side, the sell-side, or both?",
    a: "Both, but never the same deal. Most engagements are buy-side: a strategic acquirer, PE platform, or vertical aggregator commissions the assessment ahead of close. Sell-side engagements are typically founders running pre-LOI diligence on themselves to surface and price issues before an acquirer finds them. The deliverable is structurally identical. The audience and the framing of the executive summary differ.",
  },
  {
    q: "What if the target stack is outside the list above?",
    a: "We refer to specialists rather than fake the expertise. Our scope is intentionally narrow: JavaScript ecosystem, Elixir/Phoenix, Rails, Laravel, Django. For .NET, Java, Go, Rust, mainframe, and Kubernetes platform diligence we maintain a referral list of firms with the right depth. Confirm the stack on the intro call. If it is outside our scope, we will say so on that call before any commitment.",
  },
  {
    q: "Who writes the assessment?",
    a: "Senior engineers with 15+ years on the in-scope stacks, working under Marcel Fahle's review. Not generalist consultants, not analysts working from a checklist, not offshore farmed-out review. The engineer who writes a finding is available on the walkthrough call to defend it.",
  },
  {
    q: "Can the report be shared with our investment committee, lenders, or QoE provider?",
    a: "Yes. The report is structured for buyer-side legal, technical, and financial review and may be forwarded internally without redaction. For onward sharing with parties outside the original engagement, such as lenders or additional advisors, the commissioning party owns the distribution decision.",
  },
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How a SprintZero technical due diligence engagement works",
  description:
    "Four-step process for SprintZero technical due diligence: intro call to written report and walkthrough in 1–2 weeks.",
  totalTime: "P14D",
  step: steps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.title,
    text: step.desc,
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function TechDueDiligencePage() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero */}
        <header className="border-b border-border-default bg-bg-primary pt-32 pb-20">
          <Container>
            <p className="mb-5 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
              Technical Due Diligence
            </p>
            <h1 className="mb-6 max-w-[920px] font-display text-[36px] leading-[1.05] font-bold tracking-display text-fg-primary sm:text-[56px] lg:text-[64px]">
              Technical due diligence for SaaS acquisitions.
              <br className="hidden sm:block" />
              {" "}
              <span className="text-fg-secondary">
                A written assessment by senior engineers, sized for the deal.
              </span>
            </h1>
            <p className="mb-8 max-w-[820px] text-[18px] leading-[1.65] text-fg-secondary">
              For M&amp;A advisors, private-equity buy-side teams, vertical SaaS aggregators, and
              technical co-founders preparing for an acquirer&apos;s diligence. The deliverable is a
              report a buyer&apos;s legal, technical, and finance teams can read together and price
              against.
            </p>
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stat label="Starting" value={PRICE_START} />
              <Stat label="Typical" value={PRICE_TYPICAL} />
              <Stat label="Delivery" value="1–2 weeks" />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={BOOKING_URL_UTM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center self-start rounded-full bg-fg-primary px-8 py-3.5 text-[16px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90 sm:self-auto"
              >
                Book a 30-minute intro call →
              </a>
              <a
                href={`mailto:${MARCEL_EMAIL}?subject=Technical%20due%20diligence%20inquiry`}
                className="text-[15px] font-medium text-fg-secondary underline-offset-4 hover:text-fg-primary hover:underline"
              >
                Or email Marcel directly
              </a>
            </div>
            <p className="mt-8 font-mono text-[12px] tracking-mono text-fg-tertiary uppercase">
              Last updated <time dateTime={LAST_UPDATED_ISO}>{LAST_UPDATED_DISPLAY}</time>
            </p>
          </Container>
        </header>

        {/* 2. What you get */}
        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mb-12 max-w-[820px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                The deliverable
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                A written assessment, structured for the buyer&apos;s table.
              </h2>
              <p className="text-[17px] leading-[1.65] text-fg-secondary">
                Six sections, each one defensible in committee. The same deliverable structure
                whether the commissioning party is buy-side, sell-side, or an advisor running
                pre-LOI diligence.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {deliverableSections.map((d, i) => (
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

            {/* Sample/anonymized report-style visual */}
            <div className="mt-12">
              <SampleReport />
            </div>
          </Container>
        </section>

        {/* 3. What we cover (IN / OUT) */}
        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mb-12 max-w-[820px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                Scope of expertise
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                Stacks we assess. Stacks we refer.
              </h2>
              <p className="text-[17px] leading-[1.65] text-fg-secondary">
                Depth over breadth. If the target stack is outside our scope, we refer to firms with
                the right depth on the intro call, before NDA.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-accent-500/40 bg-accent-500/[0.06] p-7">
                <p className="mb-4 font-mono text-[12px] font-semibold tracking-mono text-accent-700 uppercase">
                  In scope
                </p>
                <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-fg-primary">
                  {stackIn.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-[7px] inline-block size-[6px] rounded-full bg-accent-600"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border-default bg-bg-secondary p-7">
                <p className="mb-4 font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
                  Out of scope (referred)
                </p>
                <ul className="flex flex-col gap-3 text-[15px] leading-[1.55] text-fg-secondary">
                  {stackOut.map((s) => (
                    <li key={s} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-[7px] inline-block size-[6px] rounded-full border border-border-strong"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. How it works */}
        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mb-12 max-w-[820px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                Process
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                Intro call to written report. One to two weeks.
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

        {/* 5. Pricing */}
        <section className="bg-bg-primary py-20">
          <Container>
            <div className="mx-auto flex max-w-[860px] flex-col gap-8 rounded-2xl border border-border-default bg-bg-secondary p-10 sm:p-12">
              <div>
                <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
                  Pricing
                </p>
                <h2 className="font-display text-[32px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[40px]">
                  Quoted on the intro call. No contact-form pricing.
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2 rounded-xl border border-border-default bg-bg-primary p-6">
                  <p className="font-mono text-[12px] font-semibold tracking-mono text-fg-tertiary uppercase">
                    Starting
                  </p>
                  <p className="font-mono text-[44px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
                    {PRICE_START}
                  </p>
                  <p className="text-[15px] leading-[1.55] text-fg-secondary">
                    Single repository, in-scope stack, narrow scope. Typical for early-stage targets
                    and pre-LOI sell-side preparation.
                  </p>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-accent-500/40 bg-accent-500/[0.06] p-6">
                  <p className="font-mono text-[12px] font-semibold tracking-mono text-accent-700 uppercase">
                    Typical
                  </p>
                  <p className="font-mono text-[44px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
                    {PRICE_TYPICAL}
                  </p>
                  <p className="text-[15px] leading-[1.55] text-fg-secondary">
                    Multi-repository SaaS, in-scope stack, full deliverable: codebase, dependencies,
                    architecture, hiring risk, and modernization cost range.
                  </p>
                </div>
              </div>
              <p className="text-[15px] leading-[1.65] text-fg-tertiary">
                Final scope and fee are agreed on the 30-minute intro call, after stack
                confirmation, deal context, and conflict-of-interest check. Engagements above the
                typical band are quoted at that point. Drivers are usually repository count,
                infrastructure review depth, and reporting requirements specific to the buyer&apos;s
                investment committee.
              </p>
              <a
                href={BOOKING_URL_UTM}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start rounded-full bg-fg-primary px-8 py-3.5 text-[15px] font-semibold text-fg-inverse transition-opacity duration-200 hover:opacity-90"
              >
                Book a 30-minute intro call →
              </a>
            </div>
          </Container>
        </section>

        {/* 6. Proof: diligence-shaped findings */}
        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mb-12 max-w-[820px]">
              <p className="mb-4 font-mono text-[13px] font-medium tracking-mono text-accent-600">
                Anonymized findings
              </p>
              <h2 className="mb-4 font-display text-[36px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[44px]">
                What recent assessments surfaced.
              </h2>
              <p className="text-[17px] leading-[1.65] text-fg-secondary">
                Two recent engagements, anonymized to vertical and revenue band. Numbers are exact.
                Identifying detail is generalized.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {proofFindings.map((f) => (
                <article
                  key={f.code}
                  className="flex flex-col gap-4 rounded-xl border border-border-default bg-bg-primary p-7"
                >
                  <header className="flex flex-col gap-1">
                    <p className="font-mono text-[12px] font-semibold tracking-mono text-accent-600 uppercase">
                      {f.code}
                    </p>
                    <p className="font-display text-[16px] font-semibold tracking-tight text-fg-primary">
                      {f.descriptor}
                    </p>
                  </header>
                  <ul className="flex flex-col gap-3 border-t border-border-default pt-4">
                    {f.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[15px] leading-[1.55] text-fg-secondary"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] inline-block size-[6px] rounded-full bg-accent-600"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* 7. FAQ */}
        <section className="bg-bg-primary py-20">
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

        {/* 8. If remediation needed */}
        <section className="bg-bg-secondary py-20">
          <Container>
            <div className="mx-auto flex max-w-[860px] flex-col items-start gap-5 rounded-2xl border border-border-default bg-bg-primary p-10 sm:p-12">
              <p className="font-mono text-[13px] font-medium tracking-mono text-accent-600 uppercase">
                If the assessment surfaces remediation work
              </p>
              <h2 className="font-display text-[28px] leading-[1.1] font-bold tracking-heading text-fg-primary sm:text-[34px]">
                Roughly half of engagements end at the report. The other half ask us to remediate
                before close.
              </h2>
              <div className="flex flex-col gap-4 text-[16px] leading-[1.7] text-fg-secondary">
                <p>
                  Where the assessment identifies remediation work that needs to land before close,
                  whether vulnerability remediation, framework upgrades, architectural cleanup, or a
                  test-coverage baseline, SprintZero can execute a fixed-scope 30-day modernization
                  sprint starting at {REMEDIATION_PRICE}. The assessment fee is credited toward the
                  sprint when the same party commissions both.
                </p>
                <p>
                  This is optional and disclosed up front. The written assessment stands on its own
                  and is usable to brief any other vendor, an internal team, or a post-close
                  engineering function.
                </p>
              </div>
              <a
                href="/"
                className="text-[15px] font-medium text-fg-primary underline-offset-4 hover:underline"
              >
                More on the modernization sprint →
              </a>
            </div>
          </Container>
        </section>

        {/* 9. Final CTA */}
        <section className="bg-[#0a0a09] py-24">
          <Container>
            <div className="mx-auto flex max-w-[680px] flex-col items-center gap-6 text-center">
              <h2 className="font-display text-[36px] leading-[1.1] font-bold tracking-heading text-[#fafaf9] sm:text-[44px]">
                Book a 30-minute intro call.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#a8a8a1]">
                Stack confirmation, deal context, conflict check, and final scope. Engagements begin
                under NDA within 48 hours of the call.
              </p>
              <p className="text-[14px] text-[#7a7a73]">
                Confidential. NDA on request. No deck required.
              </p>
              <a
                href={BOOKING_URL_UTM}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#fafaf9] px-9 py-4 text-[16px] font-semibold text-[#0a0a09] transition-opacity duration-200 hover:opacity-90"
              >
                Book the intro call →
              </a>
              <p className="text-[14px] text-[#a8a8a1]">
                Async alternative:{" "}
                <a
                  href={`mailto:${MARCEL_EMAIL}?subject=Technical%20due%20diligence%20inquiry`}
                  className="underline underline-offset-4 hover:text-[#fafaf9]"
                >
                  email Marcel directly
                </a>
                .
              </p>
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
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-border-default bg-bg-secondary p-5">
      <p className="font-mono text-[11px] font-semibold tracking-mono text-fg-tertiary uppercase">
        {label}
      </p>
      <p className="font-mono text-[28px] leading-none font-bold tracking-heading text-fg-primary tabular-nums">
        {value}
      </p>
    </div>
  );
}

function SampleReport() {
  return (
    <figure
      aria-label="Anonymized sample of the written assessment deliverable"
      className="mx-auto w-full max-w-[860px] overflow-hidden rounded-xl border border-border-default bg-bg-primary shadow-sm"
    >
      <div className="flex items-center gap-2 border-b border-border-default bg-bg-secondary px-5 py-3">
        <span className="size-2.5 rounded-full bg-fg-tertiary/40" aria-hidden />
        <span className="size-2.5 rounded-full bg-fg-tertiary/40" aria-hidden />
        <span className="size-2.5 rounded-full bg-fg-tertiary/40" aria-hidden />
        <span className="ml-3 font-mono text-[11px] tracking-mono text-fg-tertiary uppercase">
          assessment-report.pdf (anonymized excerpt)
        </span>
      </div>
      <div className="flex flex-col gap-5 p-7 sm:p-9">
        <header className="flex flex-col gap-1 border-b border-border-default pb-5">
          <p className="font-mono text-[11px] font-semibold tracking-mono text-fg-tertiary uppercase">
            SprintZero · Technical Due Diligence
          </p>
          <p className="font-display text-[20px] font-bold tracking-tight text-fg-primary">
            Target: HIPAA-regulated SaaS · ~$5M ARR · React + Laravel
          </p>
          <p className="font-mono text-[11px] tracking-mono text-fg-tertiary">
            Prepared for [Acquirer] · Confidential. NDA in force
          </p>
        </header>

        <div className="flex flex-col gap-3">
          <p className="font-mono text-[11px] font-semibold tracking-mono text-accent-600 uppercase">
            §2 · Codebase risk map (excerpt)
          </p>
          <ul className="flex flex-col gap-2.5 text-[14px] leading-[1.55] text-fg-secondary">
            <li className="flex items-start gap-3">
              <span
                className="mt-[5px] inline-block size-[6px] rounded-full bg-red-500"
                aria-hidden
              />
              <span>
                <span className="font-semibold text-fg-primary">Critical · Frontend build:</span>{" "}
                Create React App, end-of-life since Feb 2023; no migration path remains.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-[5px] inline-block size-[6px] rounded-full bg-amber-500"
                aria-hidden
              />
              <span>
                <span className="font-semibold text-fg-primary">High · State management:</span>{" "}
                Redux + sagas, 25+ reducers split across 200+ files; component re-render cascades
                observed on routine writes.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-[5px] inline-block size-[6px] rounded-full bg-amber-500"
                aria-hidden
              />
              <span>
                <span className="font-semibold text-fg-primary">High · UI primitives:</span> 27
                modal components, copy-pasted; no shared base. Maintenance load proportional to
                surface area.
              </span>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-3 border-t border-border-default pt-5 sm:grid-cols-3">
          <Metric label="Production CVEs" value="194" tone="red" />
          <Metric label="EOL libraries" value="38" tone="amber" />
          <Metric label="Modernization cost range" value="$45K–$120K" tone="neutral" />
        </div>

        <p className="font-mono text-[11px] tracking-mono text-fg-tertiary">
          [Sample excerpt. Full reports run 18–32 pages depending on scope.]
        </p>
      </div>
    </figure>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "red" | "amber" | "neutral";
}) {
  const valueClass =
    tone === "red" ? "text-red-600" : tone === "amber" ? "text-amber-600" : "text-fg-primary";
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-border-default bg-bg-secondary p-4">
      <p className="font-mono text-[10px] font-semibold tracking-mono text-fg-tertiary uppercase">
        {label}
      </p>
      <p
        className={`font-mono text-[20px] leading-none font-bold tracking-heading tabular-nums ${valueClass}`}
      >
        {value}
      </p>
    </div>
  );
}
