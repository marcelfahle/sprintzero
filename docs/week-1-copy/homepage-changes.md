# Homepage Changes — Drop-in Edits

Page: `app/page.tsx` (and any extracted section components)

These are surgical changes, not a rewrite. Keep everything else that's working.

---

## 1. Hero (replace headline + sub-hero)

**Replace existing headline:**
> "Modernize the legacy codebase that's slowing your team down."

**With:**
> **Your codebase is the bottleneck. We fix it in 30 days.**

**Replace existing sub-hero:**
> "Without a 6-month rewrite. For SaaS companies on aging JS/PHP stacks with delivery drag, security debt, or compliance pressure."

**With:**
> 993 files migrated. 85% vulnerability reduction. Zero feature regressions. One sprint. For SaaS teams on aging React, Laravel, Rails, and Phoenix stacks.

**CTAs stay:** Book a Codebase X-Ray (primary) + See the case study (secondary). Update the secondary CTA link from the page anchor `#case-study` to `/case-studies`.

---

## 2. Sprint 1 metrics block — fix vulnerability count

**Find:** the block under "Sprint 1 — Frontend" with the heading "CRA → Vite, Redux Saga → RTK"

**Replace:**
> "194 → 29 Vulnerabilities"

**With:**
> "194 → 0 Vulnerabilities"
> *(small caption below)* "Backed by our ship-or-keep-working guarantee"

**Update the section CTA / sub-link** to point to `/case-studies/cra-to-vite-migration-healthcare-saas`.

---

## 3. Sprint 2 metrics block — fix the controller error

**Find:** the block under "Sprint 2 — Backend" with the heading "Laravel 8 → 13, PHP 7.3 → 8.3"

**Problem:** the existing copy says "184 → 27 Controllers." That conflates the controller count (184) with the count of meaningful tests found (27). They are not before/after of the same thing.

**Replace the metrics:**

- "184 → 27 Controllers" — DELETE
- "71 Advisories resolved" — replace with "71 Advisories surfaced" (until full Laravel modernization is delivered)
- "2,400+ Dead lines removed" — leave, this is from the audit document

**Add new metrics:**

- "7 Services audited"
- "184 Controllers mapped"
- "13 Critical + high findings"

**Update the section CTA / sub-link** to point to `/case-studies/laravel-modernization-healthcare-saas`.

---

## 4. Reorder sections

**Current order:**
1. Hero
2. Hero metrics
3. The real problem
4. One client, two sprints
5. What SprintZero is
6. How it works
7. What you get
8. The offer
9. SprintZero is for you / not a fit
10. Who's behind this (bios)
11. FAQ
12. Final CTA

**New order:**
1. Hero
2. Hero metrics
3. The real problem
4. One client, two sprints
5. What SprintZero is
6. How it works
7. **Comparison table** *(new — see section 5 below)*
8. **Who's behind this** *(moved up)*
9. What you get
10. **Guarantee section** *(new — see section 7 below)*
11. The offer
12. SprintZero is for you / not a fit
13. FAQ *(top 2 items open by default)*
14. Final CTA

---

## 5. Comparison table (new section)

Insert between "How it works" and "Who's behind this." Use the ComparisonTable component.

**Heading:**
> How this compares to the alternatives.

**Sub-heading (optional):**
> Same outcome. Wildly different price tag, timeline, and risk profile.

**Table:**

| | SprintZero | Outsourced shop | Full rewrite | Hiring senior eng |
|---|---|---|---|---|
| **Time** | 30 days | 6+ months, ongoing | 9–12 months | 3–6 months to hire |
| **Cost** | $35K | $8–15K/mo | $300K–$500K | $200K+/yr loaded |
| **Risk** | Fixed scope, guaranteed | Open-ended | High failure rate | Long ramp |
| **Output** | Modernized codebase | Features on broken foundation | Hopefully ships | One person |

The SprintZero column should be visually emphasized.

---

## 6. Marcel bio update

**Current:**
> "25+ years building and rescuing software. He leads every engagement personally — not farming your project out to subcontractors. When we say 'shipped in 30 days,' he's the one writing the code."

**Replace with:**
> 25+ years building and rescuing software. Operating exclusively with AI-powered workflows since mid-2024 — before most CTOs knew Cursor existed. He leads every engagement personally, not farming your project out to subcontractors. When we say shipped in 30 days, he's the one writing the code.

Vanessa's bio stays as-is.

---

## 7. Guarantee section (new)

Insert between "What you get" and "The offer." This is a standalone section, visually distinct (consider a card with border, or different background).

**Heading:**
> Our guarantee.

**Body:**
> Ship the agreed scope in 30 days, or we keep working — for free — until it does.
>
> We're not measuring lines of code or PRs merged. We're measuring whether your team is shipping faster, your vulnerabilities are gone, and your codebase is one your engineers actually want to open.
>
> If we miss the bar, the work continues at our cost.

No CTA on this section. Let it land as a statement.

---

## 8. FAQ — open top 2 by default

Find the FAQ component (likely shadcn/ui Accordion). Set the first two items as default-open:

- "Why a paid X-Ray instead of a free audit?"
- "Do we need a full rewrite?"

The rest stay collapsed.

---

## 9. CTA path additions

Throughout the page, primary CTAs to "Book a Codebase X-Ray" stay linking to SavvyCal. Add a secondary path next to each primary CTA: **"See an example X-Ray →"** linking to `/x-ray`.

In the final CTA block (currently "Book the Codebase X-Ray — $2,500 + Book a fit call"):

- Keep "Book the Codebase X-Ray — $2,500" as primary
- Replace "Book a fit call" with **"See an example X-Ray →"** linking to `/x-ray`

The X-Ray IS the qualifying call. There's no separate fit call to book.

---

## 10. Nav update

Add "Case Studies" link to the main nav, between the brand mark and the "Book a Codebase X-Ray" CTA. Link to `/case-studies`.

Mobile menu should also include this.

---

## What NOT to change

- Page typography, color palette, spacing — leave it
- Existing component structure — extend, don't refactor
- Hero photo / brand assets — out of scope this week
- Footer — out of scope this week
- "What SprintZero is" / "What it's not" boxes — already strong, leave them
