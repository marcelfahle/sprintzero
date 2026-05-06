# Case Study: CRA → Vite Migration (HIPAA Healthcare SaaS)

URL: `/case-studies/cra-to-vite-migration-healthcare-saas`

---

## Hero

**HIPAA SaaS frontend modernization.**
**993 files migrated. Zero feature regressions. One sprint.**

A mid-market healthcare SaaS came to us with a Create React App build, a Redux Saga state management layer that punished every new feature, and 194 production vulnerabilities. We modernized the entire frontend in 30 days. Then they hired us again for the backend.

### Hero metrics

- **0** Production vulnerabilities at handoff
- **993** Files migrated
- **0** Feature regressions
- **30 days** Fixed scope

---

## The situation

Mid-market HIPAA-compliant healthcare platform. The frontend was on Create React App — a build toolchain that's been end-of-life for over a year, with no security patches coming. State management was Redux + Saga + redux-form, with 25+ global reducers and the kind of action-types-creators-reducers-sagas pattern that turned every new feature into a four-file ceremony.

The team wasn't slow. The architecture was.

What was at stake when we walked in:

- A HIPAA audit window with no shippable test coverage (zero automated tests existed)
- 194 production vulnerabilities and climbing
- An offshore team building features at three times the time they should have
- A roadmap stalled by the cost of every change

---

## The work

**Build toolchain: CRA → Vite.** Out with the unsupported. In with the actively maintained, instant-hot-reload modern build. 993 files migrated in a single PR.

**State management: Redux Saga + redux-form → Redux Toolkit + RTK Query.** 25+ global reducers consolidated to 4 intentional boundaries. Modal toggles, selected rows, report state, loading flags — all relocated from the global store down to the components that actually use them.

**Routing: React Router v5 → v7.** Modern API, future-ready, no more deprecated patterns.

**Testing: zero → Playwright E2E + Vitest.** The first automated test suite the codebase has ever had. Critical flows now verified against the live backend on every PR.

**Security: 194 production vulnerabilities → 0.** 85% reduction at handoff, then continued to zero under our 30-day commitment guarantee.

---

## The numbers

| Metric | Before | After |
|---|---|---|
| Production vulnerabilities | 194 | 0 |
| Build toolchain | CRA (end-of-life) | Vite |
| State management | Redux Saga + redux-form | Redux Toolkit + RTK Query |
| React Router | v5 | v7 |
| Global reducers | 25+ | 4 |
| Automated tests | None | Playwright E2E + Vitest |
| Files modernized | — | 993 |
| Net lines removed | — | 2,400+ |

---

## What changed for the team

Every new feature used to require touching action types, action creators, reducers, and sagas — four files in four different places for a single piece of UI state. Now state lives next to the UI that uses it. New engineers can read the codebase without a Redux history lesson. AI tools (Cursor, Claude Code, Copilot) finally produce useful suggestions, because the patterns they're reading are clean.

Hot reloads went from "go get a coffee" to instant. The team can ship behind feature flags. QA has a real test foundation to build on top of. And the next compliance audit isn't a vulnerability count problem anymore — it's an answered question.

---

## How we worked

One PR. 993 files. Zero feature regressions. Daily async Slack updates. Marcel personally on the keyboard, not farmed out to subcontractors. Modernization work happened on a dedicated branch in parallel with the client's team continuing to ship features on the old codebase. When the modernization branch was ready, a dedicated QA stabilization branch caught the parity issues, and we batched fixes through that lane until the merge.

That's the SprintZero pattern: bounded scope, parallel delivery, parity-tested handoff.

---

## They came back

After we shipped the frontend, the same client hired us for the backend audit and modernization plan. Same client. Second sprint. They came back for a reason.

[See the backend case study →](/case-studies/laravel-modernization-healthcare-saas)

---

## What this could look like for your team

If you're running on Create React App, fighting Redux Saga complexity, or sitting on a vulnerability count that won't survive your next compliance audit — the patterns here apply directly. The Codebase X-Ray takes one week and tells you exactly what your version of this looks like, with a sprint scope, a timeline, and a price.

[**Book the Codebase X-Ray — $2,500 →**](https://savvycal.com/marcel-fahle/sprintzero)

100% credited toward the sprint if you proceed.
