# SprintZero Google Ads — Launch Doc

Copy-paste-ready campaign for $210/mo Google Search. Two ad groups, four
RSAs, sitelinks, callouts, structured snippets, negative keywords, bid
recommendations. Voice constraints applied: no marketing language, no
exclamation points, specific numbers, mirrors searcher pain.

---

## Pre-launch checklist (do these in order)

1. **Create Google Ads account** at ads.google.com.
2. **Create GA4 property** at analytics.google.com — get the Measurement ID
   (`G-XXXXXXXXXX`).
3. **In Google Ads → Tools → Conversions → New conversion action**:
   - Type: Website
   - Goal: Submit lead form (or use "Book appointment" goal)
   - Name: "Book X-Ray"
   - Value: One-time $250 (10% of \$2,500 X-Ray ARPU; conservative for bid
     optimization)
   - Count: One per click
   - Click-through window: 30 days
   - View-through window: 1 day
   - Tag setup: Use Google tag (already on site once env vars set)
   - Save → copy the **Conversion ID** and **Conversion Label**.
4. **In Vercel project → Settings → Environment Variables**, set:
   - `NEXT_PUBLIC_GTAG_ID` = `G-XXXXXXXXXX` (GA4) **or** `AW-XXXXXXXXX` (Google Ads
     conversion ID, if not using GA4 import)
   - `NEXT_PUBLIC_GADS_CONVERSION_LABEL` = the conversion label from step 3
5. **Redeploy** so new env vars take effect.
6. **Verify the tag is firing**: open sprintzero.sh in Chrome, click Book
   the Codebase X-Ray, watch GA4 DebugView or Google Tag Assistant for the
   conversion event.

---

## Campaign settings

- **Campaign type**: Search
- **Bid strategy**: Manual CPC (switch to Maximize Conversions only after
  30+ recorded conversions)
- **Networks**: Google Search Network only — uncheck Display, Search
  Partners
- **Daily budget**: $7/day ($210/month)
- **Languages**: English
- **Conversion tracking**: Book X-Ray (created above)
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
**Final URL**: `https://sprintzero.sh/x-ray`
**Display path**: `sprintzero.sh / modernization`

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
**Final URL**: `https://sprintzero.sh/case-studies/cra-to-vite-migration-healthcare-saas`
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
- Once you have 30+ conversions across the campaign, switch bid strategy
  to **Maximize Conversions** with target CPA = your manual-CPC CPA

---

## Pre-launch QA checklist

- [ ] Conversion tag fires on Book the Codebase X-Ray click (verify via
      Tag Assistant)
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

## Week 1 monitoring

Daily for first 7 days, then 3x/week:

- Impressions per keyword (drop keywords at 0 impressions after 7 days)
- CTR per ad (target 4%+; <2% = re-write the headlines)
- Search Terms report — add new negatives weekly
- Bounce rate from Google Ads traffic on /x-ray and case-study landing
  pages (>80% = landing-page mismatch)
- Conversion events firing in Google Ads UI

After 30 days, kill the bottom-performing RSA in each ad group, replace
with a fresh variant testing one new angle (e.g., compliance pressure).
