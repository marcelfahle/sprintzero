# Case Study: Laravel Backend Modernization (HIPAA Healthcare SaaS)

URL: `/case-studies/laravel-modernization-healthcare-saas`

> **NOTE TO MARCEL:** Written conservatively as "audit + scoped modernization plan delivered" — what's verifiable in the work to date. If full backend modernization has actually shipped, send post-delivery numbers and this gets rewritten in past tense. Specific service names, namespaces, and exploit-revealing security findings have been removed (per your anonymization request).

---

## Hero

**HIPAA SaaS backend audit and modernization plan.**
**7 services. 184 controllers. The plan that took it forward.**

After we shipped the frontend, the same client came back. The next problem was bigger: a 7-service Laravel backend running on PHP 7.3, accumulated security debt, and almost no automated test coverage. We audited the entire backend and delivered the modernization roadmap that's now driving the next phase of the engagement.

### Hero metrics

- **7** Services audited
- **184** Controllers mapped
- **71** Composer advisories surfaced
- **13** Critical + high findings prioritized

---

## The situation

The same client that bought our frontend sprint came back with a backend they couldn't sit on much longer.

Seven Laravel services across two major versions. Repos still targeting PHP 7.3, 7.4, and 8.0.2. Local stack files pointing at MySQL 5.7. The Docker setup still carrying a Node 8 build path for legacy assets. It looked like microservices. It behaved like a distributed monolith — services calling each other directly over HTTP for day-to-day domain behavior, shared service-registry code baked into multiple repos, route versioning duplicated across the stack. They were paying the microservice tax without getting any of the upside.

And then there was the safety net.

There barely was one.

Across seven services we found **184 controllers and 27 meaningful tests**. No CI. No contract tests. No dependency audit pipeline. Plus the kind of security debt that doesn't survive a real HIPAA risk analysis: weak authentication boundaries, credential management gaps, missing access controls on internal routes, and rate limiting turned off across the APIs.

For a HIPAA platform, that's the kind of inventory you can't keep.

---

## What we delivered

A full backend audit with three components, written for the technical lead and the executive team simultaneously:

**1. Modernization Foundation.** Where every service is, what it costs to keep there, and what the end state should look like. Current → supportable → boring enough that a normal engineering team can move fast on it.

**2. Modernization Roadmap.** The phased delivery plan.

- **Phase 0: Contain the risk.** Lock down the exposed authentication surfaces. Rotate any credentials sitting where they shouldn't be. Restore CSRF where it belongs. Turn rate limiting back on. The work that should not stay open for one more quarter.
- **Phase 1: Build the safety net.** Make each repo boot from a clean checkout. Stand up CI to install, test, and run dependency audits on every push. Write smoke tests for the cross-service flows that actually matter. Add contract tests around the shared service-registry surfaces.
- **Phase 2: Move to current.** Staged Laravel and PHP upgrades, in the right order. Latest supported versions, supported runtimes, supported tooling.

**3. HIPAA and Security Risk.** Plain-English risk picture for leadership. OCR's 2024–2025 audit program is leaning harder into Security Rule controls. The proposed December 2024 Security Rule update raises the bar further. We mapped the current backend posture against it. The answer was uncomfortable, and now it's actionable.

**Plus an architecture simplification add-on:** a candid read on which services should stay split and which should merge into a modular core. Several were flagged as strong merge candidates — fewer repos, fewer deploy surfaces, fewer coordination costs.

---

## The numbers

| Metric | Audit finding |
|---|---|
| Services in scope | 7 backend repos + shared service registry |
| Critical findings | 3 |
| High-severity findings | 10 |
| PHP files | 2,243 |
| Controllers | 184 |
| Meaningful tests found | 27 |
| Locked Composer advisories | 71 |
| Backend stack today | Laravel 8/9, PHP 7.3–8.0.2, Node 8 build, MySQL 5.7 |
| Modernization target | Laravel 13, PHP 8.5.5, Node 24 LTS, MySQL 8.4 LTS |

---

## What this means for the client

The backend isn't unfixable. It's just not a "bump the dependencies" job. Pretending otherwise is what gets you a Friday-night incident.

Our audit gave the leadership team a clear, sequenced path: contain the risk first, build the safety net second, do the staged upgrades third, and consider architecture simplification only after the platform is stable. No giant rewrite. No "merge everything next month" plan. Real work, in real order.

It also gave them a defensible story for buyers, partners, and HIPAA risk analysis. Security posture shows up in diligence. It shows up in procurement. It shows up the moment one customer asks how access to PHI is controlled. Now there's an answer.

---

## How we audit

Read-only access to every repo. Senior engineering analysis, not automated scanner output. Findings prioritized by exploit risk and operational impact, not just CVE severity score. Phased recommendations with rough timing per phase, so leadership can plan around it. A risk picture written for both the technical lead and the executive team, in language each of them actually uses.

That's the SprintZero pattern: serious engineering, written like adults are reading it.

---

## Same client. Second sprint.

A first-time engagement is a sale. The same client coming back for a second engagement is a referendum. They saw what we delivered on the frontend, and they handed us the backend.

[See the frontend case study →](/case-studies/cra-to-vite-migration-healthcare-saas)

---

## What this could look like for your team

If you're running on aging Laravel, weighing whether to stay distributed or consolidate, or carrying compliance exposure you can't keep ignoring — the audit pattern here is what the Codebase X-Ray gives you. One week. Real findings. A real plan, in priority order. With a sprint scope and price attached.

[**Book the Codebase X-Ray — $2,500 →**](https://savvycal.com/marcel-fahle/sprintzero)

100% credited toward the sprint if you proceed.
