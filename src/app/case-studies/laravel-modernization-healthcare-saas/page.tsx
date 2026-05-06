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

const URL = "https://sprintzero.sh/case-studies/laravel-modernization-healthcare-saas";

export const metadata: Metadata = {
  title:
    "Laravel 8 → 13 Modernization Case Study: HIPAA Backend Audit | SprintZero",
  description:
    "Inside our audit and modernization plan for a HIPAA-compliant Laravel 8 backend. 7 services, 184 controllers, 71 advisories — and the path to a current, supportable platform.",
  alternates: { canonical: URL },
  openGraph: {
    type: "article",
    url: URL,
    title:
      "Laravel 8 → 13 Modernization: HIPAA Backend Audit | SprintZero",
    description:
      "7 services. 184 controllers. 71 advisories. The audit that drove the modernization plan.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Laravel 8 → 13 Modernization: HIPAA Backend Audit | SprintZero",
    description:
      "7 services. 184 controllers. 71 advisories. The audit that drove the modernization plan.",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Laravel 8 → 13 Modernization Case Study: HIPAA Backend Audit",
  description:
    "Inside our audit and modernization plan for a HIPAA-compliant Laravel 8 backend. 7 services, 184 controllers, 71 advisories.",
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

const auditRows = [
  {
    metric: "Services in scope",
    before: "—",
    after: "7 backend repos + shared service registry",
  },
  { metric: "Critical findings", before: "—", after: "3" },
  { metric: "High-severity findings", before: "—", after: "10" },
  { metric: "PHP files", before: "—", after: "2,243" },
  { metric: "Controllers", before: "—", after: "184" },
  { metric: "Meaningful tests found", before: "—", after: "27" },
  { metric: "Locked Composer advisories", before: "—", after: "71" },
  {
    metric: "Backend stack today",
    before: "—",
    after: "Laravel 8/9, PHP 7.3–8.0.2, Node 8 build, MySQL 5.7",
  },
  {
    metric: "Modernization target",
    before: "—",
    after: "Laravel 13, PHP 8.5.5, Node 24 LTS, MySQL 8.4 LTS",
  },
];

export default function BackendCaseStudyPage() {
  return (
    <>
      <Nav />
      <main>
        <CaseStudyLayout
          overline="Case study · Backend"
          title="HIPAA SaaS backend audit and modernization plan."
          subtitle="7 services. 184 controllers. The plan that took it forward."
          intro="After we shipped the frontend, the same client came back. The next problem was bigger: a 7-service Laravel backend running on PHP 7.3, accumulated security debt, and almost no automated test coverage. We audited the entire backend and delivered the modernization roadmap that's now driving the next phase of the engagement."
          heroMetrics={[
            { value: "7", label: "Services audited" },
            { value: "184", label: "Controllers mapped" },
            { value: "71", label: "Composer advisories surfaced" },
            { value: "13", label: "Critical + high findings" },
          ]}
        >
          <CaseStudySection
            overline="The situation"
            title="Distributed in shape, monolithic in behavior."
          >
            <p>
              The same client that bought our frontend sprint came back with a
              backend they couldn&apos;t sit on much longer.
            </p>
            <p>
              Seven Laravel services across two major versions. Repos still
              targeting PHP 7.3, 7.4, and 8.0.2. Local stack files pointing at
              MySQL 5.7. The Docker setup still carrying a Node 8 build path
              for legacy assets. It looked like microservices. It behaved like
              a distributed monolith — services calling each other directly
              over HTTP for day-to-day domain behavior, shared
              service-registry code baked into multiple repos, route
              versioning duplicated across the stack. They were paying the
              microservice tax without getting any of the upside.
            </p>
            <p>And then there was the safety net.</p>
            <p>There barely was one.</p>
            <p>
              Across seven services we found{" "}
              <strong className="font-semibold text-fg-primary">
                184 controllers and 27 meaningful tests
              </strong>
              . No CI. No contract tests. No dependency audit pipeline. Plus
              the kind of security debt that doesn&apos;t survive a real
              HIPAA risk analysis: weak authentication boundaries, credential
              management gaps, missing access controls on internal routes,
              and rate limiting turned off across the APIs.
            </p>
            <p>For a HIPAA platform, that&apos;s the kind of inventory you can&apos;t keep.</p>
          </CaseStudySection>

          <CaseStudySection overline="What we delivered" title="A real audit, written for the technical lead and the executive team simultaneously.">
            <p>
              <strong className="font-semibold text-fg-primary">
                1. Modernization Foundation.
              </strong>{" "}
              Where every service is, what it costs to keep there, and what
              the end state should look like. Current → supportable → boring
              enough that a normal engineering team can move fast on it.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                2. Modernization Roadmap.
              </strong>{" "}
              The phased delivery plan.
            </p>
            <ul className="flex flex-col gap-3 pl-5 [&>li]:list-disc [&>li]:marker:text-accent-500">
              <li>
                <strong className="font-semibold text-fg-primary">
                  Phase 0: Contain the risk.
                </strong>{" "}
                Lock down the exposed authentication surfaces. Rotate any
                credentials sitting where they shouldn&apos;t be. Restore CSRF
                where it belongs. Turn rate limiting back on. The work that
                should not stay open for one more quarter.
              </li>
              <li>
                <strong className="font-semibold text-fg-primary">
                  Phase 1: Build the safety net.
                </strong>{" "}
                Make each repo boot from a clean checkout. Stand up CI to
                install, test, and run dependency audits on every push. Write
                smoke tests for the cross-service flows that actually matter.
                Add contract tests around the shared service-registry
                surfaces.
              </li>
              <li>
                <strong className="font-semibold text-fg-primary">
                  Phase 2: Move to current.
                </strong>{" "}
                Staged Laravel and PHP upgrades, in the right order. Latest
                supported versions, supported runtimes, supported tooling.
              </li>
            </ul>
            <p>
              <strong className="font-semibold text-fg-primary">
                3. HIPAA and Security Risk.
              </strong>{" "}
              Plain-English risk picture for leadership. OCR&apos;s 2024–2025
              audit program is leaning harder into Security Rule controls.
              The proposed December 2024 Security Rule update raises the bar
              further. We mapped the current backend posture against it. The
              answer was uncomfortable, and now it&apos;s actionable.
            </p>
            <p>
              <strong className="font-semibold text-fg-primary">
                Plus an architecture simplification add-on:
              </strong>{" "}
              a candid read on which services should stay split and which
              should merge into a modular core. Several were flagged as
              strong merge candidates — fewer repos, fewer deploy surfaces,
              fewer coordination costs.
            </p>
          </CaseStudySection>

          <CaseStudySection overline="The numbers" title="Audit findings.">
            <MetricsTable
              rows={auditRows}
              beforeLabel="—"
              afterLabel="Audit finding"
            />
          </CaseStudySection>

          <CaseStudySection
            overline="What this means for the client"
            title="Real work, in real order."
          >
            <p>
              The backend isn&apos;t unfixable. It&apos;s just not a
              &ldquo;bump the dependencies&rdquo; job. Pretending otherwise is
              what gets you a Friday-night incident.
            </p>
            <p>
              Our audit gave the leadership team a clear, sequenced path:
              contain the risk first, build the safety net second, do the
              staged upgrades third, and consider architecture simplification
              only after the platform is stable. No giant rewrite. No
              &ldquo;merge everything next month&rdquo; plan. Real work, in
              real order.
            </p>
            <p>
              It also gave them a defensible story for buyers, partners, and
              HIPAA risk analysis. Security posture shows up in diligence. It
              shows up in procurement. It shows up the moment one customer
              asks how access to PHI is controlled. Now there&apos;s an
              answer.
            </p>
          </CaseStudySection>

          <CaseStudySection
            overline="How we audit"
            title="Senior engineering analysis, not automated scanner output."
          >
            <p>
              Read-only access to every repo. Senior engineering analysis,
              not automated scanner output. Findings prioritized by exploit
              risk and operational impact, not just CVE severity score.
              Phased recommendations with rough timing per phase, so
              leadership can plan around it. A risk picture written for both
              the technical lead and the executive team, in language each of
              them actually uses.
            </p>
            <p>
              That&apos;s the SprintZero pattern: serious engineering,
              written like adults are reading it.
            </p>
          </CaseStudySection>

          <CaseStudyCallout>
            <p className="font-display text-[18px] font-semibold text-fg-primary">
              Same client. Second sprint.
            </p>
            <p className="mt-1 text-[15px] text-fg-secondary">
              A first-time engagement is a sale. The same client coming back
              for a second engagement is a referendum. They saw what we
              delivered on the frontend, and they handed us the backend.{" "}
              <Link
                href="/case-studies/cra-to-vite-migration-healthcare-saas"
                className="font-medium text-accent-700 underline-offset-4 hover:underline"
              >
                See the frontend case study →
              </Link>
            </p>
          </CaseStudyCallout>

          <CaseStudySection
            overline="What this could look like for your team"
            title="One week. Real findings. A real plan."
          >
            <p>
              If you&apos;re running on aging Laravel, weighing whether to
              stay distributed or consolidate, or carrying compliance
              exposure you can&apos;t keep ignoring — the audit pattern here
              is what the Codebase X-Ray gives you. One week. Real findings.
              A real plan, in priority order. With a sprint scope and price
              attached.
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
