# SprintZero Google Ads — Launch Doc

Copy-paste-ready campaign for $210/mo Google Search. Two ad groups, four
RSAs, sitelinks, callouts, structured snippets, negative keywords, bid
recommendations. **Conversion tracking via Plausible Pageview Goal on
`/thanks-xray`** — fires only after a real SavvyCal booking redirects to
the thank-you page. No false conversions from button clicks.

> **Trade-off note:** Plausible-only means **no automated bid
> optimization** (Google Ads can't read Plausible's conversion data
> directly). At $210/mo budget you don't have enough volume for
> automated bidding to learn anyway, so this is fine. Manual CPC + manual
> review of Plausible Goals weekly is the right move at this scale. If
> you scale past ~$2K/mo, revisit GA4 + Google Ads conversion import for
> bid optimization.

---

## Conversion flow

```
Ad click  →  /x-ray?utm_*&gclid=...
         ├─  Tracking captures UTMs to localStorage
         ├─  Tracking appends UTMs to all SavvyCal links
         ↓
User clicks "Book the Codebase X-Ray"
         ├─  Click sets sz_intent_at = Date.now() in localStorage
         ├─  Plausible fires "Click Book CTA" (funnel-step event,
         │    not the conversion goal)
         ↓
SavvyCal opens (new tab) — user picks a slot, confirms booking
         ↓
SavvyCal redirects to https://sprintzero.sh/thanks-xray
         ↓
/thanks-xray page loads
         ├─  Reads sz_intent_at; only fires if < 30 min old (kills
         │    direct/bookmarked-URL false conversions)
         ├─  Plausible records pageview (= the Goal)
         ├─  Plausible "Book X-Ray" custom event with stored UTMs as
         │    props (so you can filter conversions by ad group / keyword)
         ├─  Optional: gtag/fbq/lintrk fire if env vars set
         └─  localStorage cleared so refreshes don't double-count
```

The conversion only counts when SavvyCal actually completes. A user who
opens SavvyCal and bails out never sees `/thanks-xray` and is not
counted.

---

## Pre-launch checklist (do these in order)

1. **Configure SavvyCal post-booking redirect**:
   - In SavvyCal → your "SprintZero / Codebase X-Ray" link → Edit
   - Find **Confirmation page** or **Redirect after booking** setting
   - Set redirect URL to: `https://sprintzero.sh/thanks-xray?booking=confirmed`
   - Save. Test by booking a slot in the live link — you should land on
     the thanks page.

2. **Create the Plausible Goal** at plausible.io/sprintzero.sh/settings/goals:
   - Click **Add goal**
   - Select **Pageview**
   - Path: `/thanks-xray`
   - Save
   - **Why pageview, not custom event:** Plausible auto-tracks pageviews,
     so the goal fires every time `/thanks-xray` loads — no JS code
     required for the goal itself. The page also fires a `Book X-Ray`
     custom event with UTM props, which you can use as a *secondary*
     custom-event goal if you want richer breakdowns. One pageview goal
     is enough for the basic CPA math.

3. **(Optional)** Add a second Plausible Goal — Custom Event "Book X-Ray"
   — to capture the UTM props (utm_source, utm_campaign, utm_term, etc.)
   for richer attribution. The pageview goal counts; the custom event
   gives you the dimensions to slice by.

4. **Verify both fire**:
   - Open `https://sprintzero.sh/x-ray?utm_source=test&utm_campaign=test`
     in Chrome
   - Click the Book CTA → complete a real test booking in SavvyCal
   - You'll be redirected to `/thanks-xray`
   - In DevTools → Network, filter by `event` — you should see one
     `pageview` request and one `custom-event` request to plausible.io
   - In Plausible dashboard → Goals tab, both goals should show 1
     conversion within ~60 seconds

5. **Create the Google Ads account** at ads.google.com.

No env vars or Google Ads conversion setup required at this stage — see
"When to add GA4" at the end of this doc for when to wire that in later.

---

## Campaign settings

- **Campaign type**: Search
- **Bid strategy**: **Manual CPC** (keep this — automated bidding needs
  Google's own conversion signal, which Plausible doesn't provide)
- **Networks**: Google Search Network only — uncheck Display, Search
  Partners
- **Daily budget**: $7/day ($210/month)
- **Languages**: English
- **Conversion tracking**: **Plausible Pageview Goal `/thanks-xray`**
  (manual review, not Google Ads automated)
- **Ad rotation**: Optimize (default)
- **Audience targeting**: Observation, not Targeting (gather data without
  restricting reach)

### Geo targeting (metros, not states)

**Include:**
- United States
- United Kingdom
- Canada
- Australia
- Western Europe: Netherlands, Germany, Sweden, Denmark, Finland,
  Switzerland, Ireland, Austria

**Exclude these metros** (high CPC, saturated):
- San Francisco Bay Area, Los Angeles metro, San Diego (US)
- New York City metro (US)
- Boston metro (US)
- Seattle metro (US)
- London (5 km radius around Charing Cross) (UK)
- Berlin (DE)
- Toronto metro (CA)
- Sydney metro (AU)
- Dublin (IE)

Use Google Ads' radius targeting (e.g., 30 km around city center) for
each metro exclusion.

---

## Both ad groups land on `/x-ray`

The X-Ray page is the only page on the site engineered to *close* the
X-Ray sale — it has the deliverable list, refund guarantee, FAQ, price
comparison, and the booking CTA inline. Case study pages don't carry that
machinery. Routing both ad groups to `/x-ray` keeps every paid click on
the page that converts.

After 30 days of data, optionally A/B-test a Laravel- or CRA-specific
landing page variant for AG2. Don't split traffic on day 1 with no
baseline.

**All Final URLs in this doc**: `https://sprintzero.sh/x-ray` (with
campaign-specific UTMs).

---

## Ad Group 1: The Rewrite Trap

**Keywords (phrase match):**
```
"how to modernize legacy saas without rewrite"
"alternative to full saas rewrite"
"legacy saas codebase modernization"
```

**Daily budget**: $4
**Max CPC**: **$5.00** (research estimate ~$4; small premium for headroom,
not a 75% premium)
**Final URL base**: `https://sprintzero.sh/x-ray`

> Append these UTMs to each Final URL using Google Ads ValueTrack
> parameters: `?utm_source=google&utm_medium=cpc&utm_campaign=rewrite-trap&utm_content={creative}&utm_term={keyword}`

### RSA 1.A — "Skip the rewrite"

**Display path**: `sprintzero.sh / no-rewrite`

**Headlines (15):**
```
1.  Modernize without rewriting
2.  Skip the $300K rewrite
3.  Legacy SaaS in 30 days
4.  Codebase modernization
5.  Fixed-scope 30-day sprint
6.  993 files, one sprint
7.  Skip the 6-month rewrite
8.  194 → 0 vulnerabilities
9.  Legacy SaaS modernization
10. $35K. 30 days. Done.
11. AI-assisted, not vibe code
12. Founder-led modernization
13. $2,500 audit, sprint credit
14. Modernize. Don't rewrite.
15. 30-day codebase sprint
```

**Descriptions (4):**
```
1. Modernize your legacy SaaS codebase in 30 days. Fixed scope, $35K, 30-day guarantee.
2. Skip the $300K rewrite. AI-assisted engineering, 993 files in one sprint. Founder-led.
3. Codebase X-Ray for $2,500. Architecture risk map, vulnerability audit, modernization plan.
4. Two sprints, one client, full-stack proof. 194 → 0 vulnerabilities at handoff.
```

### RSA 1.B — "30-day fix"

**Display path**: `sprintzero.sh / 30-day-sprint`

**Headlines (15):**
```
1.  Avoid the rewrite trap
2.  30 days. Fixed price.
3.  We modernize, not rewrite
4.  Legacy code, 30-day fix
5.  $300K rewrite? Skip it.
6.  Legacy code, modernized
7.  993 files. 30 days.
8.  Rescue legacy SaaS code
9.  Fixed-scope modernization
10. 30-day commitment guarantee
11. 30-day codebase sprint
12. Modernize. Don't rewrite.
13. $35K all-in. No surprises.
14. Same client, twice. Proof.
15. Capacity 2 sprints/month
```

**Descriptions (4):**
```
1. Avoid the rewrite trap. Modernize your codebase in 30 days. AI-assisted engineering.
2. Same client booked twice. 993 files migrated. Zero feature regressions.
3. $2,500 Codebase X-Ray. Get the plan whether you hire us or not. Credits 100% to sprint.
4. 30-day commitment guarantee. We ship the agreed scope or keep working — for free.
```

---

## Ad Group 2: Specific Stack EOL

**Keywords (phrase match):**
```
"create react app end of life migration"
"migrate from create react app to vite service"
"laravel 8 to 13 upgrade service"
```

**Daily budget**: $3
**Max CPC**: **$5.00**
**Final URL base**: `https://sprintzero.sh/x-ray`

> UTMs: `?utm_source=google&utm_medium=cpc&utm_campaign=stack-eol&utm_content={creative}&utm_term={keyword}`

### RSA 2.A — CRA-focused

**Display path**: `sprintzero.sh / cra-migration`

**Headlines (15):**
```
1.  CRA → Vite migration
2.  CRA is end-of-life
3.  Migrate CRA to Vite in 30
4.  993-file CRA migration
5.  CRA modernization service
6.  Stop building on CRA
7.  CRA → Vite + RTK Query
8.  End-of-life React build
9.  30-day CRA → Vite sprint
10. 194 → 0 vulnerabilities
11. $300K rewrite? 30 days.
12. Founder-led CRA migration
13. $2,500 X-Ray, then sprint
14. Zero feature regressions
15. CRA migration, fixed price
```

**Descriptions (4):**
```
1. Create React App is end-of-life. Migrate to Vite in 30 days. 993 files, zero regressions.
2. Senior engineering led the 993-file migration. AI-assisted, not vibe coding.
3. $2,500 Codebase X-Ray maps the path. Credits 100% to the migration sprint.
4. Skip the $300K rewrite. Fixed-scope, 30-day sprint. Same client booked twice.
```

### RSA 2.B — Laravel/stack-EOL

**Display path**: `sprintzero.sh / laravel-upgrade`

**Headlines (15):**
```
1.  Laravel 8 → 13 upgrade
2.  PHP 7 → 8.5, Laravel 13
3.  Laravel 8 is unsupported
4.  Laravel modernization 30d
5.  71 advisories resolved
6.  Skip the rewrite. 30 days.
7.  Laravel upgrade service
8.  7 services modernized
9.  $35K, 30 days, fixed
10. HIPAA Laravel modernization
11. 30-day Laravel sprint
12. Founder-led, AI-assisted
13. Modern, supported stack
14. $2,500 X-Ray, credits 100%
15. Laravel 8 to 13 in 30 days
```

**Descriptions (4):**
```
1. Laravel 8 to 13 + PHP 7.3 to 8.5 in 30 days. 7 services. 71 advisories resolved.
2. End-of-life Laravel? Modernize the stack: Laravel, PHP, Node, MySQL. $35K.
3. Codebase X-Ray for $2,500. Audit + modernization plan + sprint scope. One week.
4. AI-assisted engineering. 25+ years experience. Founder-led, not farmed out.
```

---

## Sitelinks (campaign level — 4)

| Text                | Description line 1               | Description line 2                |
|---------------------|----------------------------------|-----------------------------------|
| Case Studies        | Two sprints, one client          | Full-stack modernization proof    |
| Codebase X-Ray      | $2,500 audit, one week           | Credits 100% to the sprint        |
| How It Works        | Four steps. One month.           | X-Ray, plan, sprint, handover     |
| Our Guarantee       | 30 days or we keep working       | Until the agreed scope ships      |

| Text                | URL                                 |
|---------------------|-------------------------------------|
| Case Studies        | `https://sprintzero.sh/case-studies` |
| Codebase X-Ray      | `https://sprintzero.sh/x-ray`        |
| How It Works        | `https://sprintzero.sh/#how`         |
| Our Guarantee       | `https://sprintzero.sh/#guarantee`   |

---

## Callout extensions (campaign level — 6)

```
30-day fixed scope
$2,500 audit credits 100%
AI-assisted engineering
Founder-led, not farmed out
194 → 0 vulnerabilities
Capacity 2 sprints/month
```

---

## Structured snippet (campaign level — 1)

**Header**: Services
**Values**:
```
Legacy React Migration
CRA to Vite Migration
Laravel Upgrade
Codebase X-Ray Audit
Rails Modernization
Phoenix Modernization
```

---

## Negative keywords (campaign level)

Format note: each line is a single broad-match negative unless wrapped
in quotes (phrase-match negative). Paste each block into the appropriate
Google Ads negative-keyword editor.

### Job seekers
```
jobs
hiring
salary
"salary range"
career
careers
recruitment
recruiter
indeed
glassdoor
"remote work"
"hire developer"
"find developer"
"freelance developer"
"contractor wanted"
```

### DIY / education
```
tutorial
course
"free course"
how-to
howto
learn
beginner
"step by step"
youtube
udemy
coursera
"github tutorial"
example
template
boilerplate
documentation
docs
"best practices"
principles
reddit
stackoverflow
quora
```

### Research vs buying intent
```
review
reviews
comparison
compare
vs
alternatives
"vs alternatives"
"top 10"
"best of"
```

### Wrong tech stack
```
.net
dotnet
"c sharp"
csharp
java
"spring boot"
springboot
golang
"google go"
rust
python
django
flask
fastapi
wordpress
wix
squarespace
shopify
ios
android
swift
kotlin
"native mobile"
```

### Wrong ICP / enterprise
```
"fortune 500"
"fortune 100"
enterprise
gov
government
"public sector"
defense
erp
sap
oracle
salesforce
"white label"
offshore
outsourcing
```

> **Removed from earlier draft**: `agency` (legitimate buyer query — "best
> agency for legacy SaaS modernization"), bare `contractor` and bare
> `freelancer` (too broad — replaced with phrase-match `"freelance
> developer"` and `"contractor wanted"`).

---

## Bid recommendations

| Ad group              | Max CPC | Daily | Reasoning                                                                                  |
|-----------------------|--------:|------:|--------------------------------------------------------------------------------------------|
| 1. The Rewrite Trap   |   $5.00 | $4.00 | Research estimate ~$4. Small headroom, not a worst-case bid. Raise after 4 days if no impressions. |
| 2. Specific Stack EOL |   $5.00 | $3.00 | Niche, low competition. Research estimate ~$3.50.                                           |

Total daily: $7. Total monthly: ~$210.

After 30 days of data:
- If a keyword has 0 clicks → pause it
- If a keyword has clicks but zero conversions → consider lowering bid 30%
- If a keyword has conversions → raise bid by 20% per week until volume
  caps or CPA gets uncomfortable
- **Stay on Manual CPC** while you're on Plausible-only tracking. Don't
  switch to Maximize Conversions — Google Ads can't see your Plausible
  conversions and will optimize for clicks instead.

---

## Pre-launch QA checklist

- [ ] SavvyCal post-booking redirect set to
      `https://sprintzero.sh/thanks-xray?booking=confirmed`
- [ ] Plausible Goal "Pageview /thanks-xray" created
- [ ] (Optional) Plausible Goal "Custom Event Book X-Ray" created
- [ ] End-to-end test booking lands on `/thanks-xray` and registers a
      goal in Plausible within 60 seconds
- [ ] Direct visit to `/thanks-xray` does **not** record a goal (the
      30-min intent flag prevents false conversions)
- [ ] UTM parameters survive the SavvyCal handoff (book with
      `?utm_source=test` — UTMs should appear as Plausible event props)
- [ ] All sitelink anchors resolve (`/#how`, `/#guarantee`,
      `/case-studies`, `/x-ray`)
- [ ] Negative keywords pasted in
- [ ] Geo exclusions applied via radius targeting on each metro
- [ ] Languages: English only
- [ ] Networks: Search Network only (no Display, no Search Partners)
- [ ] Ad rotation: Optimize
- [ ] Bid strategy: Manual CPC
- [ ] Test ad preview on desktop and mobile in Google Ads UI

---

## Reading conversions in Plausible

Open your Plausible dashboard → **Goals** tab. You'll see:

- **Pageview /thanks-xray** — total real bookings (the conversion count)
- **Click Book CTA** — funnel-step event; total clicks on Book buttons
  (use to compute CTA-click → booking conversion rate)
- **Book X-Ray** (custom event with props) — same booking count as the
  pageview goal, but sliceable by `utm_source`, `utm_campaign`,
  `utm_term`, `utm_content`

To attribute Google Ads spend to bookings:
1. Filter by **utm_source = google**
2. See Pageview /thanks-xray completions for that filter
3. Divide your weekly Google Ads spend by completions = your real CPA

To attribute by ad group:
1. Filter by **utm_campaign = rewrite-trap** or **utm_campaign = stack-eol**
2. Same calc as above per ad group

To attribute by keyword:
1. Filter by **utm_term = [keyword]**
2. See which keyword actually books X-Rays vs. just sucks budget

Funnel diagnostics:
- **Click Book CTA / Pageview /thanks-xray** = drop-off rate inside
  SavvyCal. If you have lots of CTA clicks but few completions, the
  drop is *inside* SavvyCal — friction in the booking form, calendar
  availability, etc. Not an ad problem.

---

## Week 1 monitoring

Daily for first 7 days, then 3x/week:

- **In Google Ads**: Impressions per keyword (drop keywords at 0
  impressions after 7 days)
- **In Google Ads**: CTR per ad (target 4%+; <2% = re-write the
  headlines)
- **In Google Ads**: Search Terms report — add new negatives weekly
- **In Plausible** (filter by utm_source=google): Bounce rate from ads on
  /x-ray (>80% = landing-page mismatch)
- **In Plausible**: Pageview /thanks-xray goal completions per ad group
  (utm_campaign filter)
- **In Plausible**: Click Book CTA / /thanks-xray ratio per ad group
  (high ratio = SavvyCal friction; low ratio = ad/landing mismatch)

After 30 days, kill the bottom-performing RSA in each ad group, replace
with a fresh variant testing one new angle (e.g., compliance pressure).

---

## When to add GA4 + Google Ads conversion (not now)

Skip this until **at least one of these is true**:

- Monthly ad spend exceeds ~$2,000
- You have 30+ X-Ray bookings/month from ads (enough volume for
  automated bidding to actually learn)
- You want to run additional campaign types (Performance Max, etc.)
  that require Google's own conversion signal

When you're ready, the order matters — Step 2 generates the values you
need for Step 3:

1. **Create the GA4 property** at analytics.google.com — note the
   Measurement ID (`G-XXXXXXXXXX`).
2. **In Google Ads → Tools → Conversions → New conversion action**:
   - Type: Website
   - Goal: Submit lead form (or "Book appointment")
   - Name: "Book X-Ray"
   - Value: $250 (one-time, conservative; raise once you have CPA data)
   - Count: One per click
   - Click-through window: 30 days
   - Tag setup: Use Google tag (already on site once env vars set)
   - **Save** — then in the conversion's detail view, find:
     - **Conversion ID** — labeled "AW-XXXXXXXXX" or shown in the gtag
       snippet as `'AW-XXXXXXXXX/abcDEFghi'`. **Copy the AW-XXXXXXXXX
       part.**
     - **Conversion Label** — the part after the `/`, e.g.
       `abcDEFghi`. **Copy this separately.**
3. **Wait — you need both values from Step 2 before continuing.**
4. **In Vercel project → Settings → Environment Variables**, set:
   - `NEXT_PUBLIC_GTAG_ID` = the `AW-XXXXXXXXX` from Step 2
   - `NEXT_PUBLIC_GADS_CONVERSION_LABEL` = the conversion label from Step 2
5. **Redeploy** so new env vars take effect.
6. **Verify** by completing a test booking with Chrome DevTools → Network
   open. Look for a request to `googleadservices.com/pagead/conversion`
   firing on `/thanks-xray` page load.

The existing `ThanksXrayConversion` component already has the gtag call
wired — env vars activate it automatically; no code changes needed.
