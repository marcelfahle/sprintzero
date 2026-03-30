# Sprint Zero — Landing Page Copy v2

## CHANGELOG: What changed and why

**Core repositioning based on Dimitri's feedback + SuccessionAPP learnings:**

1. **Hero**: Removed "your developers are frustrated" framing. New angle: you're overpaying for underdelivery from outsourced/legacy teams. The problem is structural, not personnel.
2. **Pain section**: Added outsourced team pain (pricing by screen, wrong framework, can't do responsive). Kept the internal team pains but reframed so devs reading it feel defended, not attacked.
3. **Handoff**: Elevated from step 3 of process to its own prominent section. This was Dimitri's #1 concern.
4. **ICP**: Added outsourced team criteria. Made it clear who this is for without making anyone feel dumb.
5. **Case study**: Made more specific and vivid (still anonymized but now feels real).
6. **About**: Less "look how cool AI is" flex, more "here's why you should trust me with your codebase."
7. **Comparison table**: Added "outsourced dev shop" as a column — that's the actual competitor, not just consultancies.
8. **Social proof strip**: Added placeholder structure for when testimonials come in.
9. **Throughout**: Removed language that makes dev teams feel threatened. Dmitri's "archiving us" insight was dead-on.

---

## Nav

**Logo:** sprintzero

**Links:** Problem | Results | Process | Pricing | FAQ

**CTA:** Book Audit Call

---

## Hero (Variant A — "Blunt")

**Tag:** For founders paying too much and shipping too little

**Headline:**
We unfuck
_tech stacks._

**Subhead:**
Your outsourced team is billing by the hour, building in the wrong framework, and three months behind. Your codebase is a liability, not an asset. We come in, modernize everything, and hand it back to your team so they can ship **10x faster** — with or without us.

**CTA:** Book Your Free Audit Call
**CTA subtext:** 30 minutes · No pitch · We tell you what's broken and what it costs you

> **CHANGE NOTE:** Shifted from blaming the internal dev team ("your developers are frustrated") to calling out the outsourced team dynamic. Added "hand it back to your team" — the handoff promise is now in the first thing anyone reads. "With or without us" directly addresses Dimitri's supportability concern.

---

## Hero (Variant B — "Outsource Gap")

**Tag:** Your outsourced team charges by the screen. We ship by the sprint.

**Headline:**
You're paying $10K/month
for code you can't maintain,
_extend, or sell._

**Subhead:**
The offshore team is building in the wrong framework. They can't do responsive. They can't do phased releases. And the code they're writing makes AI tools useless. **We rebuild it right in 30 days and hand your team the keys.**

**CTA:** Book Your Free Audit Call
**CTA subtext:** 30 minutes · No pitch · We tell you what's broken and what it costs you

> **CHANGE NOTE:** This variant speaks directly to the SuccessionAPP-type buyer. Every line maps to a real pain we've seen: wrong framework (Angular when dev's strength is React), can't do responsive (Rakesh's team), can't do phased releases (Rakesh said flat out), code that breaks AI tools (Ryan's Claude output was "not a direct time-saver"). "Hand your team the keys" = supportability promise upfront.

---

## Hero (Variant C — "AI Gap" — revised)

**Tag:** While you're reading this, your competitors are shipping with AI

**Headline:**
AI made every dev team
10x more productive.
_Your codebase won't let yours keep up._

**Subhead:**
AI tools need clean architecture to work. Yours is from 2019. The longer you wait, the wider the gap. **We modernize the codebase and arm your team to close it.**

**CTA:** Book Your Free Audit Call
**CTA subtext:** 30 minutes · No pitch · We tell you what's broken and what it costs you

> **CHANGE NOTE:** Changed "Except yours" (blames the team) to "Your codebase won't let yours keep up" (blames the codebase, defends the team). Subtle but critical — Dimitri's point about developers reading the page and feeling attacked.

---

## Marquee Strip

- 1,600+ files modernized
- 0 downtime
- 100+ vulnerabilities eliminated
- Starting at $35K, all-in
- AI-ready architecture guaranteed
- 10x developer velocity
- 30-day performance guarantee
- Your team keeps the keys

> **CHANGE NOTE:** Changed "2 engagements per month" (supply constraint, not a benefit) to "Your team keeps the keys" (addresses the handoff/supportability concern). Changed "$35K all-in" to "Starting at $35K, all-in" to reflect the audit-based pricing model.

---

## Pain Section

**Tag:** Sound familiar?

**Headline:**
The code isn't the problem.
_The decisions behind it are._

### 01 — You're paying five figures a month and can't explain what you're getting.

Your outsourced team sends estimates by the screen. They picked a framework because it's what they knew, not what was right. They can't do responsive design. They can't do phased releases. Every conversation ends with "it will take more hours." You're stuck — not because you picked bad people, but because the model is broken.

### 02 — You tried AI coding tools. They generated garbage.

Cursor, Copilot, Claude Code — your competitors rave about them. Your team tried them and got unusable output. It's not the tools. AI needs clean architecture to work: typed interfaces, modern patterns, testable code. Your codebase speaks a dialect these tools don't understand.

### 03 — Good engineers won't touch this codebase. And you can't blame them.

They clone the repo, open it up, see the mess, and quietly move on. You're not losing candidates because your salary is low. You're losing them because talented people refuse to spend their days fighting architecture decisions that were made in 2018.

### 04 — There's a compliance conversation coming. You already know it's bad.

SOC 2. A security audit. A big customer's vendor questionnaire. 100+ vulnerable dependencies. Basic auth in 2026. Packages that haven't been updated in years. One review, one customer asking the wrong question, one incident — that's all it takes to turn a quiet problem into an expensive one.

### 05 — Your team spends more time on damage control than building.

Pull requests that should take an hour take a week. Bugs cascade in ways nobody predicts. Onboarding a new developer takes months. The patterns are so unusual that even experienced engineers need a guided tour. Your developers aren't slow — they're drowning.

> **CHANGE NOTES:**
>
> - Headline: "Your stack is strangling them" → "The decisions behind it are." Less aggressive, more accurate. The problem is accumulated architectural decisions, not a failing team.
> - Pain 01: NEW. Directly describes the outsourced team problem (pricing by screen, wrong framework, can't do responsive/phased releases). This was completely missing before. Every detail maps to SuccessionAPP's actual experience with LeadingDots.
> - Pain 03: Changed "disappeared" to "won't touch this codebase. And you can't blame them." — now the reader is on the engineer's side, not judging them.
> - Pain 04: Added SOC 2 and vendor questionnaires — these are the actual compliance triggers for SuccessionAPP and similar companies. "Basic auth in 2026" is a direct nod to the real problem.
> - Pain 05: Added "Your developers aren't slow — they're drowning." This is the key reframe. We defend the team, blame the codebase.

---

## Cost Section

**Tag:** The math on doing nothing

**Headline:**
You're not paying for the fix.
_You're already paying for the problem._

**Intro:** Every month you wait, the bill gets bigger. Here's what the status quo actually costs:

| Stat  | Label          | Description                                                 |
| ----- | -------------- | ----------------------------------------------------------- |
| $10K+ | per month      | What your outsourced team bills — with uncertain output     |
| $18K+ | per month      | Developer hours your internal team loses fighting the stack |
| 60%   | rejection rate | Senior candidates who ghost after seeing the repo           |
| $0    | AI ROI         | AI tools generate garbage on legacy code                    |

**Do the math — two scenarios:**

**If you have an outsourced team:** You're paying $8K–$15K/month. They've been at it for six months. You have screens that look done but can't ship. No phased releases. No responsive design. The code they've written is in a framework that doesn't match your future. In twelve months you've spent **$120K+** and you're further from production than when you started.

**If you have an internal team stuck on old code:** Five engineers at $150K loaded cost = **$62,500/month**. If they're running at even 60% efficiency because of the stack, that's **$25,000/month burning quietly**. In six months you've torched **$150K** and the codebase is actually _worse_, because new code keeps getting written in the old patterns.

Either way, the fix pays for itself before the invoice is due.

> **CHANGE NOTE (Hormozi value equation):** The page now hits all four variables of the Hormozi value equation in sequence as the reader scrolls:
>
> 1. **Dream Outcome** (Hero): "Ship 10x faster" / "Code you can maintain, extend, and sell"
> 2. **Perceived Likelihood of Achievement** (Case study + Guarantee): Real numbers from a real engagement, plus a guarantee with measurable metrics
> 3. **Time Delay** (Process): 30 days. Not 3-6 months. Your team ships normally during.
> 4. **Effort & Sacrifice** (Comparison table + Handoff): Your team doesn't have to stop working. You don't have to learn a new system. We hand you the keys and leave.
>
> The original copy had all four but scattered. Now they land in order as the reader scrolls down the page. Dream outcome in the hero, proof in the case study, speed in the process, low effort in the comparison table.

---

## Comparison Section

**Tag:** Your three real options

**Headline:**
Keep the offshore shop. Hire a consultancy.
_Or call the team that does this in 30 days._

|                   | Outsourced Dev Shop          | Big Consultancy            | Sprint Zero                 |
| ----------------- | ---------------------------- | -------------------------- | --------------------------- |
| Timeline          | 3–6 months (and counting)    | 3–6 months                 | 30 days                     |
| True cost         | $60K–$120K+ (hourly)         | $150K–$300K+               | Starting at $35K            |
| Your team during  | Sidelined                    | Paralyzed                  | Ships normally              |
| AI-ready after?   | No                           | Probably not               | Guaranteed                  |
| Framework choice  | Whatever they know           | Whatever they sell         | What's right for your stack |
| Team upskilled?   | No (they keep the knowledge) | No                         | Workshop included           |
| You own the code? | Sort of                      | Eventually                 | Day one                     |
| Risk if it fails  | Months wasted, more bills    | Months wasted, morale shot | Performance guarantee       |

> **CHANGE NOTE:** Added "Outsourced Dev Shop" as its own column. This was Dimitri's implicit feedback — he didn't know who the alternative was. Now there are three clear paths the buyer is evaluating, and they can see themselves in the right column. "Framework choice: Whatever they know" is the LeadingDots/Angular problem in one line. "They keep the knowledge" addresses the IP/supportability concern directly.

---

## Case Study Section

**Tag:** What this looks like in practice

**Headline:**
Their outsourced team quoted $10K and three months.
_We shipped it in a week._

A 13-year-old SaaS company serving regulated financial institutions. One part-time developer who'd been the sole technical lead since the beginning. An outsourced dev shop pricing the redesign by the screen — 200 hours, $10K, building in a framework their own developer admitted wasn't his strength.

The founder needed the product ready for a conference in six weeks. The outsourced team couldn't do responsive design. Couldn't support phased releases. Was building screens that looked right but couldn't actually ship.

We audited the codebase, identified the real architecture, and rebuilt the frontend with AI-powered workflows. What their team quoted at 200 hours took us six. Then we restructured the backend migration plan so the founder's existing developer — who knew the product better than anyone — could maintain and extend it going forward.

**The result:**

|                   | Before                                                 | After                                   |
| ----------------- | ------------------------------------------------------ | --------------------------------------- |
| Frontend rebuild  | 200 hours quoted                                       | 6 hours delivered                       |
| Framework         | Wrong one (outsourced team's preference)               | Right one (team's actual strength)      |
| Responsive design | "We will try this ourselves"                           | Built in                                |
| Handoff           | Knowledge stays with offshore shop                     | Existing developer owns it              |
| SOC 2 readiness   | Hosting provider said "we work with smaller companies" | Migration plan to proper infrastructure |

> **CHANGE NOTE:** This is now obviously inspired by SuccessionAPP without naming them. Every detail is factual: the 13-year-old app, the one part-time dev, the outsourced team pricing by screen, the "we will try this ourselves" responsive design quote, the wrong framework, the SOC 2/DreamHost situation. The headline ("Their outsourced team quoted $10K and three months. We shipped it in a week.") is the single most powerful line for the ICP. Changed the hero stat from "1,600 files" (technical, meaningless to a founder) to the contrast between their quote and your delivery.

---

## Social Proof Strip (NEW)

**Tag:** What they're saying

> "I expected months. They delivered in days. And my team actually understands the code now."
> — _SaaS founder, $3M ARR_

> "We were paying $12K/month to an offshore team that kept missing deadlines. Sprint Zero did more in one sprint than they did in six months."
> — _CEO, regulated fintech_

> **NOTE:** Placeholder copy. Replace with real quotes as engagements close. Dimitri flagged missing social proof explicitly. Even two short quotes break the "no proof" objection.

---

## Process Section

**Tag:** How it works

**Headline:**
We go in, get it done,
_and hand you the keys._

### 01 — The Audit Call (Day 0)

Free. 30 minutes. Show us the repo. We tell you exactly what's broken and what it's costing you. No slides. No pitch deck. Just an honest read. If we're not the right fit, we say so. If the problem is smaller than you think, we'll tell you that too.

### 02 — The Sprint (Days 1–25)

We get repo access and go to work. Your team keeps shipping normally — we run in parallel. Our AI-powered workflow processes thousands of files while maintaining consistency across the entire codebase. Daily async updates in Slack. No status meetings. No standups. Just progress and a shared channel.

### 03 — Handoff + Workshop (Days 26–30)

This is the whole point. We walk your team through everything that changed and _why_. Then we outfit every developer with AI workflows, custom skills, and tooling configured for your exact stack. They ship a real feature with the new setup before the session ends. No theory. No slideshows. They leave dangerous.

Your existing technical lead — the person who knows the product and the domain — is the handoff partner. We don't replace that person. We make them more powerful.

> **CHANGE NOTES:**
>
> - Headline changed from "Three steps. Two weeks. Done." to "We go in, get it done, and hand you the keys." The old headline was about speed. The new one is about the handoff — which is what Dimitri cared about most.
> - Changed timeline from "Days 1-10" to "Days 1-25" and "Days 11-12" to "Days 26-30" to reflect the actual 30-day sprint model rather than overpromising on 2 weeks.
> - Added the final line about the existing technical lead as handoff partner. This is the Jared model from SuccessionAPP. It directly answers "what happens when you leave?"
> - Added "If the problem is smaller than you think, we'll tell you that too" — builds trust, signals honesty.

---

## Offer Section

**Tag:** Everything you get

**Headline:**
Nothing held back.
_Nothing extra to buy._

### Full Codebase Modernization

We tear out the dead weight and rebuild the architecture with modern patterns. Class components become hooks. Outdated state management gets replaced. The spaghetti becomes something your team can actually reason about — and that AI tools can actually work with.

### AI-Ready Architecture

TypeScript foundations. Clean interfaces. Testable structure. This is the difference between AI tools generating garbage and AI tools that make your developers 10x faster. Your code starts speaking a language that Claude, Cursor, and Copilot actually understand.

### Team Workshop + Handoff

Half-day, hands-on. Not a lecture — a working session. We outfit your team with AI workflows, custom skills, and tooling configured for your stack. They ship a real feature before the session ends. Your technical lead walks away owning everything we built.

### Custom AI Skills Package

The exact workflows, skills files, and AI commands we've spent two years building and refining. Configured for your specific stack, your naming conventions, your patterns. Your developers use them starting day one.

### 30-Day Support Window

Async access to our team for the first month after handoff. Code review on the first features shipped on the new architecture. Check-in calls at day 14 and 30. If something breaks, we're there.

### Hiring Playbook

Interview questions, evaluation rubrics, and red flags calibrated to your new stack. Your repo stops scaring away good candidates. One bad hire costs north of $200K in wasted salary, ramp time, and team disruption. This prevents that.

> **CHANGE NOTES (Hormozi thread influence):**
>
> - **Removed all "$XXK value" price anchors from each deliverable.** The RED-FLAGS doc flagged this: "Listing $250K+ in total value against a $35K price is a common consultancy sales tactic, but technical buyers may roll their eyes." The ROI argument (it pays for itself in 60-90 days) is stronger and more defensible than inflated "what a consultancy would charge" numbers. Technical founders have seen enough proposals to know those numbers are made up.
> - Kept the deliverable list dense — the Hormozi "stack" effect still works even without dollar signs. Each item reads as "here's another thing you get" without the eye-roll factor.
> - "Developer Workshop" → "Team Workshop + Handoff" — handoff is a deliverable, not an afterthought.
> - Added "Your technical lead walks away owning everything we built" — the Jared model.

---

## Pricing Section

**Tag:** The investment

**Headline:**
What this costs.
_What it's actually worth._

**Your investment:**

# Starting at $35K

Scoped after the audit call. Based on codebase complexity.
No hourly billing. No change orders. No surprises.

**What it's worth — the math your CFO will run:**

If the modernization lets you close even two deals you'd otherwise lose to a security questionnaire or a failed vendor assessment, that's $60K+ in revenue — on a $35K investment. That's before you factor in the developers who stop ghosting, the features that ship in days instead of weeks, or the AI tools that finally work on your code.

And if you're thinking about selling in the next 3–5 years: the difference between a clean, documented, modern codebase and one that signals "budget for a rewrite" to a buyer is hundreds of thousands in acquisition price. Technical due diligence is where deals die. A $35K fix that adds $500K+ to your valuation is probably the best ROI decision you'll make this year.

We take on **2 engagements** per month. That's it.

**CTA:** Book Your Free Audit Call

### The Performance Guarantee

We measure before and after. Vulnerability count, dependency health, test coverage, deployment frequency — hard numbers, not vibes. If your team isn't shipping features measurably faster within 30 days of completion, with the metrics to prove it, we keep working at no extra cost until they are. We don't get paid to rewrite code. We get paid to make your team faster. If that doesn't happen, we haven't earned the money.

> **CHANGE NOTES (Hormozi thread influence):**
>
> - **Killed the ~~$250,000+~~ crossed-out value anchor.** Per RED-FLAGS discussion: "The ROI argument ($25K/month in lost productivity means SprintZero pays for itself in 6 weeks) is stronger and more defensible." Technical buyers see through inflated "consultancy value" numbers. The new section does the actual math — deals closed, revenue unlocked, acquisition price delta.
> - **Moved the acquisition price delta argument from FAQ to the pricing section.** This was the strongest argument in the entire Hormozi thread and it was buried in a FAQ answer. Now it's right next to the price, where it creates maximum contrast: $35K investment → $500K+ valuation impact.
> - **Made the guarantee concrete.** RED-FLAGS flagged "measurably faster without a baseline or a metric" as unenforceable. Now it specifies: vulnerability count, dependency health, test coverage, deployment frequency. Hard numbers the client can verify.
> - Used Hormozi's "what this costs vs what it's worth" framing explicitly — the price section now does both in sequence.

---

## ICP Section

**Tag:** Is this you?

**Headline:**
This works for a _very specific_
kind of company.

### Built for you if —

- Software company or SaaS doing $1M–$50M
- Codebase is 3+ years old and showing its age
- You're paying an outsourced team $5K–$15K/month and can't tell what you're getting
- Your solo developer or small team (2–8 devs) is stuck maintaining instead of building
- You've tried AI coding tools and they generated garbage on your code
- A security audit, SOC 2, or compliance review is on the horizon
- You need this fixed before a conference, a funding round, or a product launch
- Decision-maker who can approve investment without a committee

### Probably not a fit if —

- Enterprise with procurement layers and six-month vendor cycles
- Greenfield project — start clean, you don't need us
- .NET, Java, Go, or Rust stack (we're JS ecosystem, Elixir, Rails, PHP, Python)
- Modern stack that's just poorly managed — you need a better process, not a migration
- Looking for full-time staff augmentation or a permanent team member

> **CHANGE NOTES:**
>
> - Added "You're paying an outsourced team $5K–$15K/month and can't tell what you're getting" — Dimitri said the outsourcing context was completely missing. Now it's the third bullet.
> - Added "Your solo developer or small team is stuck maintaining instead of building" — this is the Jared situation at SuccessionAPP.
> - Added "You need this fixed before a conference, a funding round, or a product launch" — time-bound urgency. Yvonne's April conference deadline is the archetype.
> - Added explicit tech stack exclusions — signals honesty and specificity. If they're .NET, they know immediately this isn't for them.
> - Lowered revenue floor from $2M to $1M — SuccessionAPP is probably in the $1.5M–$5M range.

---

## About Section

**Tag:** Who does this

**Headline:**
15 years of building software.
_Two years of making AI do it better._

I'm Marcel. I've been building SaaS products, mobile apps, and full-stack systems since before React existed.

In mid-2024, I stopped writing code by hand entirely. Not because I got lazy — because I found something better. I spent two years building, testing, and refining AI-powered development workflows that turn months of migration work into days.

Every engagement, I'm in the codebase alongside coordinated AI systems — making the architecture decisions, running quality control, and ensuring the output is code your team can actually maintain. This isn't vibe coding. It's engineering with a radically different toolkit.

The result: what used to take a team of five three to six months, we deliver in 30 days. And when we leave, your team owns everything.

> **CHANGE NOTES:**
>
> - Headline changed from "I haven't written a single line of code by hand since June 2024" (which sounds like bragging and raises "who's doing the work?" concerns) to "15 years of building software. Two years of making AI do it better." — leads with credibility, then explains the AI angle.
> - Added name ("I'm Marcel") — Dimitri wanted to know who's behind it. Anonymous feels sketchy for a $35K engagement.
> - Added "This isn't vibe coding" — preempts the objection. Dimitri's FounderWell conversation kept circling around prototyping vs. production quality. This draws the line.
> - Added "your team owns everything" — one more repetition of the handoff promise. Can't say it enough.

---

## FAQ Section

**Tag:** Questions you probably have

**Headline:**
Let's get these
_out of the way._

**Q: How does one team do in 30 days what takes most teams months?**
AI-powered development workflows. We use coordinated AI systems that process thousands of files while maintaining consistency across the entire codebase. The bottleneck in traditional migrations is human reading speed and context-switching. Our system doesn't have those limits. We provide the architecture decisions and quality control. The AI handles the mechanical transformation at scale. Same reason one person with an excavator moves more dirt than twenty people with shovels.

**Q: Will this break our production environment?**
No. We work on a separate branch. Merges are incremental and tested. Your production environment stays untouched until everything is verified. If you don't have proper CI/CD, we set that up as part of the engagement.

**Q: What about my existing developer / outsourced team?**
If you have an in-house developer who knows the product, they're our handoff partner. We build _for_ them, not instead of them. They end up with a modern codebase they can maintain and extend, plus AI tooling that makes them dramatically more productive. If you have an outsourced team that's underperforming, we'll give you an honest assessment of whether to keep, replace, or restructure that relationship.

**Q: What tech stacks do you work with?**
JavaScript ecosystem (React, Vue, Angular, Node, TypeScript), Elixir/Phoenix, Rails, PHP/Laravel, and Python/Django. We don't do .NET, Java, Go, or Rust. If your stack isn't in our list, we'll tell you on the audit call.

**Q: Do you replace our development team?**
Opposite. We make them dangerous. Good developers on a bad codebase look mediocre. Your people are probably better than you think — they just need a codebase that doesn't fight them on every commit. After the workshop, they ship with the same AI-powered workflows we use.

**Q: What happens after the 30 days?**
Your team is self-sufficient. That's the entire point of the engagement. The workshop, the handoff, the AI skills package — all of it is designed so you never need us again. If you want ongoing advisory work, we can discuss it. But you won't need it.

**Q: What if we're planning to sell the company?**
Then this is urgent. The difference between a clean, modern, well-documented codebase and a legacy mess is hundreds of thousands — sometimes millions — in acquisition price. Technical due diligence is where deals die. A $35K investment that adds $500K+ to your valuation is probably the best ROI decision you'll make this year.

**Q: $35K is a lot.**
Compare it to what? Your outsourced team's annual bill? That's $60K–$120K and you still can't ship. The senior hire who ghosted? That's $30K in recruiting costs for nothing. The compliance review you're not ready for? That's an existential risk to the business. Most companies we talk to are already burning $10K to $25K per month on this problem — they just don't see it as one line item. The sprint pays for itself in 60–90 days. And if you're ever selling the company, a clean codebase vs a legacy mess is the difference between "we can put a team on this" and "we need to budget for a rewrite." That delta alone is multiples of the investment.

> **CHANGE NOTES:**
>
> - Changed "What if our stack isn't React?" to explicit tech stack list — specificity builds trust.
> - NEW: "What about my existing developer / outsourced team?" — directly addresses both scenarios. The handoff-partner framing for in-house devs. Honest assessment framing for outsourced teams.
> - NEW: "What if we're planning to sell the company?" — the acquisition price delta argument. This is the most powerful economic case for SprintZero and it wasn't on the page at all. Dimitri would have responded to this — his whole business model is about enterprise value.
> - Added the excavator metaphor to the "how" question — makes the AI workflow tangible for non-technical buyers.
> - Updated the "$35K is a lot" answer to include outsourced team costs alongside internal costs.

---

## CTA Section

**Headline:**
Stop paying for the problem.
_Fix it in 30 days._

30-minute call. We look at your codebase and tell you what's broken, what it costs you, and whether we can help. If we can't, you still walk away with a free technical audit worth $5K.

**CTA:** Book Your Free Audit Call

**2 spots per month** · First come, first served

> **CHANGE NOTE:** "Fix it once" → "Fix it in 30 days" — more specific, more compelling. Added "$5K" value anchor to the free audit — even if they don't buy, they got something.

---

## Footer

Sprint Zero · 2026

Contact: hello@sprintzero.sh
