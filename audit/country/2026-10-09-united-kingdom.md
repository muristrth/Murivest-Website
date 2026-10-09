# United Kingdom - navigation & route deliverable (2026-10-09)

Generated from scripts/check-nav-links.mjs output (audit/data/nav-before|after-2026-10-09.json) and src/app route scan. Header file: src/components/layout/UKheader.tsx.
All changes below are on branch audit/2026-10-09-safe, NOT deployed, and are PENDING Mark's approval (rollback: git revert the nav(united-kingdom) commit).

## 1. All routes (8 static pages, 4 dynamic patterns, 0 API/route handlers)
**Static:** `/uk-properties`, `/united-kingdom/about`, `/united-kingdom/contact`, `/united-kingdom/faq`, `/united-kingdom/listings`, `/united-kingdom/login`, `/united-kingdom`, `/united-kingdom/research`

**Dynamic:** `/uk-properties/[slug]`, `/united-kingdom/faq/[id]`, `/united-kingdom/listings/[slug]`, `/united-kingdom/research/[id]`

**Route handlers:** none

## 2. Header + mobile destinations (current)
Mobile menu renders the same UNITED KINGDOM_NAV array as the desktop dropdowns (same file), plus CTA links. 10 unique internal links:

| Label | Destination | Status |
|---|---|---|
| Investment Opportunities | `/united-kingdom/listings` | OK |
| UK Research | `/united-kingdom/research` | OK |
| London Market Report Q2 2026 | `/united-kingdom/research/london-commercial-real-estate-market-report-q2-2026` | DYNAMIC-OK |
| UK Industrial Growth Corridors | `/united-kingdom/research/industrial-property-investment-uk-growth-corridors-2026` | DYNAMIC-OK |
| About Murivest UK | `/united-kingdom/about` | OK |
| Leadership | `/leadership` | OK |
| Contact | `/united-kingdom/contact` | OK |
| Compliance | `/compliance` | OK |
| (CTA/other) | `/united-kingdom` | OK |
| (CTA/other) | `/underwriting` | OK |

## 3. Reconciliation matrix (before -> after)
Categories: A existing route linked / B missing but commercially important (spec, no invented page) / C unsupported - hidden, route not created.

| Original href | Label | Status before | Category | Action / reason |
|---|---|---|---|---|
| `/united-kingdom/investments` | Investment Opportunities | BROKEN (no matching route) | A | REMAPPED to /united-kingdom/listings (only UK investment-type page). Listings page copy ("institutional-grade returns") needs evidence. |
| `/united-kingdom/off-market` | Off-Market Opportunities | BROKEN (no matching route) | C | HIDDEN. Global /off-market exists but is generic (not UK stock); candidate if Mark approves. |
| `/united-kingdom/income-assets` | Income-Producing Assets | BROKEN (no matching route) | C | HIDDEN. |
| `/united-kingdom/development` | Development Opportunities | BROKEN (no matching route) | C | HIDDEN. |
| `/united-kingdom/land-portfolio` | Land Banking | BROKEN (no matching route) | C | HIDDEN. (Global /land-portfolio is generic.) |
| `/united-kingdom/sale-leaseback` | Sale & Leaseback | BROKEN (no matching route) | C | HIDDEN. |
| `/united-kingdom/capital-markets` | Capital Markets | BROKEN (no matching route) | C | Advisory section REMOVED (no UK advisory pages). Global /services/* are generic stubs that claim e.g. valuation/lending valuations; not linked to avoid implying UK regulated services. |
| `/united-kingdom/acquisition` | Acquisition Advisory | BROKEN (no matching route) | C | Section removed (see above). |
| `/united-kingdom/disposition` | Disposition Advisory | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/valuation` | Valuation & Underwriting | BROKEN (no matching route) | C | Section removed. Valuation implies RICS-type regulated activity: do not publish without evidence. |
| `/united-kingdom/asset-management` | Asset Management | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/property-management` | Property Management | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/properties/office` | Office | BROKEN (no matching route) | C | Property-sector section REMOVED (no UK sector pages). |
| `/united-kingdom/properties/industrial` | Industrial | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/properties/retail` | Retail | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/properties/hospitality` | Hospitality | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/properties/residential` | Residential | BROKEN (no matching route) | C | Section removed. |
| `/united-kingdom/research/london-office` | London Office Market | BROKEN (/united-kingdom/research/[id]: no researchData key "london-o) | A | REMAPPED to existing article /united-kingdom/research/london-commercial-real-estate-market-report-q2-2026 (verified key in researchData). |
| `/united-kingdom/research/regional` | Regional Markets | BROKEN (/united-kingdom/research/[id]: no researchData key "regional) | A | REMAPPED to /united-kingdom/research/industrial-property-investment-uk-growth-corridors-2026 (verified key). Label changed to match. |
| `/united-kingdom/research/yields` | Investment Yields | BROKEN (/united-kingdom/research/[id]: no researchData key "yields" ) | C | HIDDEN (no article). |
| `/united-kingdom/research/reports` | Market Reports | BROKEN (/united-kingdom/research/[id]: no researchData key "reports") | C | HIDDEN (no article). |
| `/united-kingdom/insights` | Insights | BROKEN (no matching route) | C | HIDDEN. Global /insights-cre exists (generic) - candidate. |
| `/united-kingdom/markets` |  | BROKEN (no matching route) | C | Markets section REMOVED. |
| `/united-kingdom/london` | London | BROKEN (no matching route) | C | No city pages (not manufactured). |
| `/united-kingdom/manchester` | Manchester | BROKEN (no matching route) | C | No city pages. |
| `/united-kingdom/birmingham` | Birmingham | BROKEN (no matching route) | C | No city pages. |
| `/united-kingdom/edinburgh` | Edinburgh | BROKEN (no matching route) | C | No city pages. |
| `/united-kingdom/glasgow` | Glasgow | BROKEN (no matching route) | C | No city pages. |
| `/united-kingdom/bristol` | Bristol | BROKEN (no matching route) | C | No city pages. |
| `/united-kingdom/about` | About Murivest UK | OK | A | Kept. BUT page copy says "Founded in 2015" and Kenya-centric; site elsewhere says founded 2025: factual conflict, needs Mark. |
| `/united-kingdom/leadership` | Leadership | BROKEN (no matching route) | A | REMAPPED to global /leadership (group executive leadership; genuine company info). |
| `/united-kingdom/compliance` | Compliance | BROKEN (no matching route) | A | REMAPPED to global /compliance. Label kept "Compliance", sub kept "Regulatory information". The target page states Murivest is NOT a licensed investment advisor - consistent, no FCA/RICS claim. |

## 4. Existing static pages NOT in the header/mobile menu (2)
`/uk-properties`, `/united-kingdom/faq`

(Case B candidates need Mark to choose which are commercially important; no automatic additions beyond those listed in section 3.)

## 5. Broken / unverified links remaining
None in this header.

## 6. Pages / decisions needing factual input from Mark
- Does Murivest have any UK regulated status, or UK operations/offices? Until evidenced, no FCA/RICS/authorised wording anywhere. (UK header "FCA & RICS regulated" removed earlier.)
- UK about page: founding year (2015 vs 2025), UK presence, team.
- UK listings (/united-kingdom/listings, /uk-properties): are these real current mandates? Copy promises "institutional-grade returns".
- UK research index duplicates the Kenya/global research page (Kenya keywords). Needs UK-specific content.
- Which advisory services (if any) are delivered in the UK, by which entity.

## 7. Test results and limits
- node scripts/check-nav-links.mjs: header links resolve (see section 5 for exceptions/unverified). Static/regex check only: pages were NOT rendered in a browser; dynamic CMS routes (Sanity) cannot be verified offline.
- Clean-worktree tsc of HEAD: 0 errors. Working tree tsc: 10 errors, all in Mark's uncommitted src/app/usa/page.tsx (no green claim for the working tree).
