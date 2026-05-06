import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { SiteFooter } from "@/components/site-footer";
import {
  CaseStudyCallout,
  CaseStudyCTA,
  CaseStudyLayout,
  CaseStudySection,
} from "@/components/case-study-layout";
import { MetricsTable } from "@/components/metrics-table";
import { BOOKING_URL, XRAY_PRICE } from "@/lib/constants";

const URL = "https://sprintzero.sh/case-studies/cra-to-vite-migration-healthcare-saas";

export const metadata: Metadata = {
  title: "CRA → Vite Migration Case Study: 993 Files, 30 Days, Zero Regressions | SprintZero",
  description:
    "How we migrated a HIPAA-compliant React app from Create React App to Vite in 30 days. 993 files, 85% vulnerability reduction, first automated test suite. The full case study.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title: "CRA → Vite Migration: 993 Files, 30 Days, Zero Regressions | SprintZero",
    description:
      "HIPAA-compliant React app modernized end-to-end in one sprint. The full case study.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRA → Vite Migration: 993 Files, 30 Days, Zero Regressions | SprintZero",
    description:
      "HIPAA-compliant React app modernized end-to-end in one sprint. The full case study.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CRA → Vite Migration Case Study: 993 Files, 30 Days, Zero Regressions",
  description:
    "How we migrated a HIPAA-compliant React app from Create React App to Vite in 30 days. 993 files, 85% vulnerability reduction, first automated test suite.",
  author: { "@type": "Person", name: "Marcel Fahle" },
  publisher: {
    "@type": "Organization",
    name: "SprintZero",
    url: "https://sprintzero.sh",
  },
  datePublished: "2026-05-06",
  url: URL,
  mainEntityOfPage: URL,
  articleSection: "Case Study",
};

const metricsRows = [
  { metric: "Production vulnerabilities", before: "194", after: "0" },
  { metric: "Build toolchain", before: "CRA (end-of-life)", after: "Vite" },
  {
    metric: "State management",
    before: "Redux Saga + redux-form",
    after: "Redux Toolkit + RTK Query",
  },
  { metric: "React Router", before: "v5", after: "v7" },
  { metric: "Global reducers", before: "25+", after: "4" },
  { metric: "Automated tests", before: "None", after: "Playwright E2E + Vitest" },
  { metric: "Files modernized", before: "—", after: "993" },
  { metric: "Net lines removed", before: "—", after: "2,400+" },
];

export default function FrontendCaseStudyPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyLayout
          overline="Case study · Frontend"
          title="HIPAA SaaS frontend modernization."
          subtitle="993 files migrated. Zero feature regressions. One sprint."
          intro="A mid-market healthcare SaaS came to us with a Create React App build, a Redux Saga state management layer that punished every new feature, and 194 production vulnerabilities. We modernized the entire frontend in 30 days. Then they hired us again for the backend."
          heroMetrics={[
            { value: "0", label: "Production vulnerabilities at handoff" },
            { value: "993", label: "Files migrated" },
            { value: "0", label: "Feature regressions" },
            { value: "30 days", label: "Fixed scope" },
          ]}
        >
          <CaseStudySection
            overline="The situation"
            title="The team wasn't slow. The architecture was."
          >
            <p>
              Mid-market HIPAA-compliant healthcare platform. The frontend was on Create React App —
              a build toolchain that&apos;s been end-of-life for over a year, with no security
              patches coming. State management was Redux + Saga + redux-form, with 25+ global
              reducers and the kind of action-types-creators-reducers-sagas pattern that turned
              every new feature into a four-file ceremony.
            </p>
            <p>What was at stake when we walked in:</p>
            <ul className="flex flex-col gap-2 pl-5 [&>li]:list-disc [&>li]:marker:text-accent-500">
              <li>
                A HIPAA audit window with no shippable test coverage (zero automated tests existed)
              </li>
              <li>194 production vulnerabilities and climbing</li>
              <li>An offshore team building features at three times the time they should have</li>
              <li>A roadmap stalled by the cost of every change</li>
            </ul>
          </CaseStudySection>

          <CaseStudySection overline="The work" title="What we shipped in 30 days.">
            <p>
              <strong className="font-semibold text-fg-primary">
                Build toolchain: CRA → Vite.
              </strong>{" "}
              Out with the unsupported. In with the actively maintained, instant-hot-reload modern
              build. 993 files migrated in a single PR.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                State management: Redux Saga + redux-form → Redux Toolkit + RTK Query.
              </strong>{" "}
              25+ global reducers consolidated to 4 intentional boundaries. Modal toggles, selected
              rows, report state, loading flags — all relocated from the global store down to the
              components that actually use them.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                Routing: React Router v5 → v7.
              </strong>{" "}
              Modern API, future-ready, no more deprecated patterns.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                Testing: zero → Playwright E2E + Vitest.
              </strong>{" "}
              The first automated test suite the codebase has ever had. Critical flows now verified
              against the live backend on every PR.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                Security: 194 production vulnerabilities → 0.
              </strong>{" "}
              85% reduction at handoff, then continued to zero under our 30-day commitment
              guarantee.
            </p>
          </CaseStudySection>

          <CaseStudySection overline="The numbers" title="Before and after.">
            <MetricsTable rows={metricsRows} />
          </CaseStudySection>

          <CaseStudySection
            overline="What changed for the team"
            title="State now lives next to the UI that uses it."
          >
            <p>
              Every new feature used to require touching action types, action creators, reducers,
              and sagas — four files in four different places for a single piece of UI state. Now
              state lives next to the UI that uses it. New engineers can read the codebase without a
              Redux history lesson. AI tools (Cursor, Claude Code, Copilot) finally produce useful
              suggestions, because the patterns they&apos;re reading are clean.
            </p>
            <p>
              Hot reloads went from &ldquo;go get a coffee&rdquo; to instant. The team can ship
              behind feature flags. QA has a real test foundation to build on top of. And the next
              compliance audit isn&apos;t a vulnerability count problem anymore — it&apos;s an
              answered question.
            </p>
          </CaseStudySection>

          <CaseStudySection
            overline="How we worked"
            title="Bounded scope, parallel delivery, parity-tested handoff."
          >
            <p>
              One PR. 993 files. Zero feature regressions. Daily async Slack updates. Marcel
              personally on the keyboard, not farmed out to subcontractors. Modernization work
              happened on a dedicated branch in parallel with the client&apos;s team continuing to
              ship features on the old codebase. When the modernization branch was ready, a
              dedicated QA stabilization branch caught the parity issues, and we batched fixes
              through that lane until the merge.
            </p>
            <p>That&apos;s the SprintZero pattern.</p>
          </CaseStudySection>

          <CaseStudyCallout>
            <p className="font-display text-[18px] font-semibold text-fg-primary">
              They came back.
            </p>
            <p className="mt-1 text-[15px] text-fg-secondary">
              After we shipped the frontend, the same client hired us for the backend audit and
              modernization plan. Same client. Second sprint. They came back for a reason.{" "}
              <Link
                href={"/case-studies/laravel-modernization-healthcare-saas" as const}
                className="font-medium text-accent-700 underline-offset-4 hover:underline"
              >
                See the backend case study →
              </Link>
            </p>
          </CaseStudyCallout>

          <CaseStudySection
            overline="What this could look like for your team"
            title="The patterns here apply directly."
          >
            <p>
              If you&apos;re running on Create React App, fighting Redux Saga complexity, or sitting
              on a vulnerability count that won&apos;t survive your next compliance audit — the
              patterns here apply directly. The Codebase X-Ray takes one week and tells you exactly
              what your version of this looks like, with a sprint scope, a timeline, and a price.
            </p>
          </CaseStudySection>

          <CaseStudyCTA
            href={BOOKING_URL}
            primary={`Book the Codebase X-Ray — ${XRAY_PRICE} →`}
            secondary={{ href: "/x-ray", label: "See an example X-Ray →" }}
            caption="100% credited toward the sprint if you proceed."
          />
        </CaseStudyLayout>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
