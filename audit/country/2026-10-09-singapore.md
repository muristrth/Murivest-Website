# Singapore - navigation & route deliverable (2026-10-09)

Generated from scripts/check-nav-links.mjs output (audit/data/nav-before|after-2026-10-09.json) and src/app route scan. Header file: src/app/singapore/(components)/shared/SingaporeHeader.tsx.
All changes below are on branch audit/2026-10-09-safe, NOT deployed, and are PENDING Mark's approval (rollback: git revert the nav(singapore) commit).

## 1. All routes (13 static pages, 3 dynamic patterns, 0 API/route handlers)
**Static:** `/singapore/about`, `/singapore/contact`, `/singapore/insights`, `/singapore/investor-portal/dashboard`, `/singapore/investor-portal/deals`, `/singapore/investor-portal/documents`, `/singapore/investor-portal/login`, `/singapore/investor-portal`, `/singapore`, `/singapore/privacy`, `/singapore/properties`, `/singapore/services`, `/singapore/singapore-market`

**Dynamic:** `/singapore/insights/[slug]`, `/singapore/properties/[slug]`, `/singapore/singapore-market/[district]`

**Route handlers:** none

## 2. Header + mobile destinations (current)
Mobile menu renders the same SINGAPORE_NAV array as the desktop dropdowns (same file), plus CTA links. 20 unique internal links:

| Label | Destination | Status |
|---|---|---|
| Property Listings | `/singapore/properties` | OK |
| Off-Market Opportunities | `/singapore/investor-portal` | OK |
| Strata Office | `/singapore/properties?assetType=strata-office` | OK-QUERY-IGNORED - page does not read the query string |
| Shophouse | `/singapore/properties?assetType=shophouse` | OK-QUERY-IGNORED - page does not read the query string |
| Advisory Services | `/singapore/services` | OK |
| Office | `/singapore/properties?assetType=grade-a-office` | OK-QUERY-IGNORED - page does not read the query string |
| Retail | `/singapore/properties?assetType=retail` | OK-QUERY-IGNORED - page does not read the query string |
| Industrial | `/singapore/properties?assetType=industrial` | OK-QUERY-IGNORED - page does not read the query string |
| Mixed-Use | `/singapore/properties?assetType=mixed-use` | OK-QUERY-IGNORED - page does not read the query string |
| Hospitality | `/singapore/properties?assetType=hospitality` | OK-QUERY-IGNORED - page does not read the query string |
| Insights | `/singapore/insights` | OK |
| Cap Rate Analysis | `/singapore/singapore-market` | OK |
| Marina Bay | `/singapore/singapore-market/marina-bay` | DYNAMIC-OK |
| Raffles Place | `/singapore/singapore-market/raffles-place` | DYNAMIC-OK |
| Tanjong Pagar | `/singapore/singapore-market/tanjong-pagar` | DYNAMIC-OK |
| Jurong Lake | `/singapore/singapore-market/jurong-lake-district` | DYNAMIC-OK |
| About Murivest Singapore | `/singapore/about` | OK |
| Contact | `/singapore/contact` | OK |
| (CTA/other) | `/singapore` | OK |
| (CTA/other) | `/underwriting` | OK |

## 3. Reconciliation matrix (before -> after)
Categories: A existing route linked / B missing but commercially important (spec, no invented page) / C unsupported - hidden, route not created.

| Original href | Label | Status before | Category | Action / reason |
|---|---|---|---|---|
| `/singapore/properties?assetType=strata-office` | Strata Office | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/properties?assetType=shophouse` | Shophouse | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/services/acquisition-advisory` | Acquisition Advisory | BROKEN (no matching route) | A | COLLAPSED with 3 siblings into one "Advisory Services" -> /singapore/services (single existing page covering acquisition, disposition, asset management, portfolio advisory). |
| `/singapore/services/disposition-advisory` | Disposition Advisory | BROKEN (no matching route) | A | Collapsed (above). |
| `/singapore/services/asset-management` | Asset Management | BROKEN (no matching route) | A | Collapsed (above). |
| `/singapore/services/portfolio-advisory` | Portfolio Advisory | BROKEN (no matching route) | A | Collapsed (above). |
| `/singapore/properties?assetType=grade-a-office` | Office | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/properties?assetType=retail` | Retail | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/properties?assetType=industrial` | Industrial | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/properties?assetType=mixed-use` | Mixed-Use | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/properties?assetType=hospitality` | Hospitality | OK-QUERY-IGNORED (page does not read the query string) | - | Resolves, but the page ignores ?assetType= so the filter is non-functional. Left unchanged (no speculative change); decision: build filtering or link to plain list. |
| `/singapore/singapore-market/marina-bay` | Marina Bay | DYNAMIC-OK | OK | Dynamic route, slug verified in singapore-market-data.ts. |
| `/singapore/singapore-market/raffles-place` | Raffles Place | DYNAMIC-OK | OK | Verified slug. |
| `/singapore/singapore-market/tanjong-pagar` | Tanjong Pagar | DYNAMIC-OK | OK | Verified slug. |
| `/singapore/singapore-market/jurong-lake-district` | Jurong Lake | DYNAMIC-OK | OK | Verified slug. |
| `/cre-underwriting` |  | BROKEN (no matching route) | A | CTA remapped to /underwriting (same tool page the UK header uses). Caveat: tool generates a Kenya-law LOI - inappropriate for Singapore; needs decision. |

## 4. Existing static pages NOT in the header/mobile menu (4)
`/singapore/investor-portal/dashboard`, `/singapore/investor-portal/deals`, `/singapore/investor-portal/documents`, `/singapore/privacy`

(Case B candidates need Mark to choose which are commercially important; no automatic additions beyond those listed in section 3.)

## 5. Broken / unverified links remaining
- `/singapore/properties?assetType=strata-office` [Strata Office] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=shophouse` [Shophouse] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=grade-a-office` [Office] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=retail` [Retail] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=industrial` [Industrial] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=mixed-use` [Mixed-Use] OK-QUERY-IGNORED - page does not read the query string
- `/singapore/properties?assetType=hospitality` [Hospitality] OK-QUERY-IGNORED - page does not read the query string

## 6. Pages / decisions needing factual input from Mark
- Singapore properties/investor-portal pages use SAMPLE_PROPERTIES (named third-party buildings: Asia Square, One Raffles Place, ION Orchard...). Presented as Murivest listings? Needs Mark: real mandates or remove.
- /singapore/privacy names "Murivest Realty Pte Ltd", a Singapore address and a DPO: confirm entity exists and details.
- Singapore about copy and "now in Singapore / establishing coverage in 2026": confirm presence and any MAS/CEA licensing status (none to be implied).
- Header filters (?assetType=) are ignored by /singapore/properties (non-functional): build filtering or link to the plain list.
- Research menu: 5 items point to 3 pages (insights, singapore-market) - duplicate destinations.
- Investor portal login/dashboard are unauthenticated UI with sample data: decide real auth or remove.

## 7. Test results and limits
- node scripts/check-nav-links.mjs: header links resolve (see section 5 for exceptions/unverified). Static/regex check only: pages were NOT rendered in a browser; dynamic CMS routes (Sanity) cannot be verified offline.
- Clean-worktree tsc of HEAD: 0 errors. Working tree tsc: 10 errors, all in Mark's uncommitted src/app/usa/page.tsx (no green claim for the working tree).
