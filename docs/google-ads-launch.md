# SprintZero Google Ads — Launch Doc

Copy-paste-ready campaign for $210/mo Google Search. Two ad groups, four
RSAs, sitelinks, callouts, structured snippets, negative keywords, bid
recommendations. **Conversion tracking via Plausible** — no GA4 or Google
Tag setup required. Voice constraints applied: no marketing language, no
exclamation points, specific numbers, mirrors searcher pain.

> **Trade-off note:** Plausible-only means **no automated bid
> optimization** (Google Ads can't read Plausible's conversion data
> directly). At $210/mo budget you don't have enough volume for
> automated bidding to learn anyway, so this is fine. Manual CPC + manual
> review of Plausible Goals weekly is the right move at this scale. If
> you scale past ~$2K/mo, revisit GA4 + Google Ads conversion import for
> bid optimization (or use offline conversion upload via the Plausible
> Goals API).

---

## Pre-launch checklist (do these in order)

1. **Create Google Ads account** at ads.google.com.
2. **Set up the Plausible Goal** at plausible.io/sprintzero.sh/settings/goals
   (or wherever your Plausible dashboard is):
   - Click **Add goal**
   - Select **Custom event**
   - Event name: `Book X-Ray` (exact spelling — the tracking code already
     fires this)
   - Save
3. **Verify the goal fires**:
   - Open `https://sprintzero.sh` in a Chrome tab
   - Open DevTools → Network tab → filter by `event`
   - Click any "Book the Codebase X-Ray" CTA
   - You should see a request to `plausible.io/api/event` with
     `name=Book X-Ray` in the payload
   - Refresh your Plausible dashboard's Goals section — the event count
     should increment
4. **(Optional but recommended)** Set up custom property breakdown in
   Plausible:
   - In Plausible dashboard → Site settings → Custom properties → Add
   - Property: `location`
   - This will let you see whether the "hero" CTA, "final-cta" CTA, or
     "sticky-mobile" CTA converts best

No env vars needed for Plausible — it's already wired up in the layout.

---

## Campaign settings

- **Campaign type**: Search
- **Bid strategy**: **Manual CPC** (keep this — automated bidding needs
  Google's own conversion signal, which Plausible doesn't provide)
- **Networks**: Google Search Network only — uncheck Display, Search
  Partners
- **Daily budget**: $7/day ($210/month)
- **Languages**: English
- **Conversion tracking**: **Plausible Goal "Book X-Ray"** (manual
  review, not Google Ads automated)
- **Ad rotation**: Optimize (default)
- **Audience targeting**: Observation, not Targeting (for now — gather
  data without restricting reach)

### Geo targeting (refined from original spec)

Apply geo at the **metro/city** level instead of state. The original
spec excluded entire states (CA, NY, MA, WA), which cuts more qualified
leads than it excludes high-CPC zones. Refined exclusions:

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

## Ad Group 1: The Rewrite Trap

**Keywords (phrase match):**
```
"how to modernize legacy saas without rewrite"
"alternative to full saas rewrite"
"legacy saas codebase modernization"
```

**Daily budget**: $4
**Max CPC**: $7
**Final URL**: `https://sprintzero.sh/x-ray?utm_source=google&utm_medium=cpc&utm_campaign=rewrite-trap&utm_content={creative}&utm_term={keyword}`
**Display path**: `sprintzero.sh / modernization`

> **UTM note**: Use the `{creative}` and `{keyword}` Google Ads ValueTrack
> parameters in the Final URL so Plausible captures which ad and which
> keyword drove each click. The tracking code preserves these UTMs all
> the way through to SavvyCal.

### RSA 1.A — "Skip the rewrite"

**Headlines (15):**
```
1.  Modernize without rewriting
2.  Skip the $300K rewrite
3.  Legacy SaaS in 30 days
4.  Codebase modernization
5.  Fixed-scope 30-day sprint
6.  993 files, one sprint
7.  Save 6 months on a rewrite
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

**Headlines (15):**
```
1.  Avoid the rewrite trap
2.  30 days. Fixed price.
3.  We modernize, not rewrite
4.  Legacy code, fixed in 30
5.  $300K rewrite? Skip it.
6.  From legacy to AI-ready
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
**Max CPC**: $5
**Final URL**: `https://sprintzero.sh/case-studies/cra-to-vite-migration-healthcare-saas?utm_source=google&utm_medium=cpc&utm_campaign=stack-eol&utm_content={creative}&utm_term={keyword}`
**Display path**: `sprintzero.sh / migration`

> Note on landing page: the URL above is the CRA→Vite case study, which
> matches CRA-related queries directly. If most of your impressions come
> from the Laravel keyword, rotate the URL to
> `/case-studies/laravel-modernization-healthcare-saas` after week 2 based
> on impression share.

### RSA 2.A — CRA-focused

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
13. Stack moved to current
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

Paste the entire block. Format: one per line, exact match unless `+`
prefix. For phrase-match negatives, wrap in quotes.

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
contractor
freelancer
freelance
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
agency
"agency partnership"
offshore
outsourcing
```

---

## Bid recommendations

| Ad group              | Max CPC | Daily | Reasoning                                     |
|-----------------------|--------:|------:|-----------------------------------------------|
| 1. The Rewrite Trap   |   $7.00 | $4.00 | Broader pain, more competition. ~$5 expected. |
| 2. Specific Stack EOL |   $5.00 | $3.00 | Niche, low competition. ~$3.50 expected.      |

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

- [ ] Plausible Goal "Book X-Ray" created in dashboard
- [ ] Goal fires when clicking "Book the Codebase X-Ray" CTA (verify in
      Network tab + Plausible dashboard)
- [ ] UTM parameters survive the SavvyCal handoff (open SavvyCal preview
      with `?utm_source=test&utm_medium=cpc` — UTMs should appear in
      Plausible properties)
- [ ] Test ad preview on desktop and mobile in Google Ads UI
- [ ] Verify all sitelink anchors resolve (`/#how`, `/#guarantee`,
      `/case-studies`, `/x-ray`)
- [ ] Negative keywords pasted in, no false positives flagged
- [ ] Geo exclusions applied via radius targeting on each metro
- [ ] Languages: English only
- [ ] Networks: Search Network only (no Display, no Search Partners)
- [ ] Ad rotation: Optimize
- [ ] Bid strategy: Manual CPC

---

## Reading conversions in Plausible

Open your Plausible dashboard → **Goals** tab. You'll see:

- **Total conversions** — how many "Book X-Ray" events fired
- **Conversion rate** — % of unique visitors who converted
- **Source breakdown** — which UTM sources drove conversions
- **Custom property "location"** — which CTA on the page converts best
  (hero / final-cta / sticky-mobile / etc.)

To attribute Google Ads spend to conversions:
1. Filter by **utm_source = google**
2. See unique visitors and goal completions for that source
3. Divide your weekly Google Ads spend by goal completions = your real CPA

To attribute by ad group:
1. Filter by **utm_campaign = rewrite-trap** or **utm_campaign = stack-eol**
2. Same calc as above per ad group

To attribute by keyword:
1. Filter by **utm_term = [keyword]**
2. See which keyword actually books X-Rays vs. just sucks budget

---

## Week 1 monitoring

Daily for first 7 days, then 3x/week:

- **In Google Ads**: Impressions per keyword (drop keywords at 0
  impressions after 7 days)
- **In Google Ads**: CTR per ad (target 4%+; <2% = re-write the
  headlines)
- **In Google Ads**: Search Terms report — add new negatives weekly
- **In Plausible** (filter by utm_source=google): Bounce rate from ads on
  /x-ray and case-study landing pages (>80% = landing-page mismatch)
- **In Plausible**: Goal completions per ad group (utm_campaign filter)
- **In Plausible**: Conversion rate by location property (which CTA
  works)

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

When you do add it: see the env vars already wired up in
`src/components/marketing-scripts.tsx` — set `NEXT_PUBLIC_GTAG_ID` and
`NEXT_PUBLIC_GADS_CONVERSION_LABEL`, redeploy, and the existing tracking
code will automatically start firing both Plausible **and** Google Ads
conversions in parallel. No code changes.
