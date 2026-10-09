# Murivest main site – audit report 2026-10-09 (checkpoint after Phase 2, partial Phase 3)

## 1. Executive summary
Programme started; this is a PARTIAL report (Phases 1–2 done for the main site; Phase 3 only spot-checked; Phases 4–7 and strategy/API Global deliverables NOT done).
Key finding: country sub-headers link to many pages that do not exist (404s): UK 27, Kenya 10, UAE 11 unresolved after fixes; global footer 3; mobile menu 2; USA 1.
Unsupported-claim risk: UK header said "FCA & RICS regulated" (no evidence in repo; footer says Murivest is NOT a licensed adviser). Neutralised to "Regulatory information" – needs professional review.

## 2. Projects / environments
- Requested path C:\xampp\htdocs\murivest-website DOES NOT EXIST. Main site found at C:\xampp\htdocs\Murivest Website\Murivest-Website (Next.js, package "murivest-realty-nextjs", origin github.com/muristrth/Murivest-Website). Identity assumed from that; please confirm.
- C:\xampp\htdocs\murivest_lettings (Vite): inspected read-only, clean, branch main @ 4d73c53. NOT modified. Lettings audit not yet done.

## 3. Baseline (main site)
- Branch main @ cbea5e1; uncommitted WIP by Mark in src/app/usa/page.tsx and src/app/usa/contact/page.tsx (preserved, not committed/touched).
- Safe branch: audit/2026-10-09-safe (WIP carried in working tree).
- `tsc --noEmit` baseline: FAILS – syntax errors in the uncommitted src/app/usa/page.tsx (lines ~85–196, TS1005). No other errors seen. Build/lint/tests not run (build would fail on the same file; no test framework present).

## 4. Architecture
Next.js App Router, src/app, 416 page.tsx routes. Separate country headers in src/components/layout (Header global, Kenyaheader, UAEheader, UKheader, USheader; Singapore header in src/app/singapore/(components)). Navs are hard-coded arrays per header file; no shared config. next.config.js redirects /investor-portal -> /portal, www -> apex. middleware.ts exists (not reviewed).

## 5. Per-country header reconciliation (automated href vs page.tsx; dynamic routes matched)
| Country | Header links | Unresolved before | Fixed (remapped) | Remaining | Notes |
|---|---|---|---|---|---|
| Kenya | 38 | 18 | 8 | 10 | cities (nairobi, mombasa, kisumu, nakuru), income-assets, development, capital-markets, acquisition, valuation, asset-management – no equivalent page |
| UAE | 35 | 17 | 6 | 11 | disposition, valuation, asset-management, research/dubai-market, research/abu-dhabi-market, insights, new-developments, master-plans, about, leadership, compliance |
| UK | 40 | 28 | 1 (+claim text) | 27 | UK has only about/contact/faq/listings/login/research; all other nav items (investments, advisory, property sectors, city markets, leadership, compliance) have no page |
| USA | 102 | 1 | 0 | 1 | /usa/more |
| Global header | 46 | 2 | 1 (/cre-underwriting->/underwriting; /investor-portal is a valid redirect) | 0 | |
| Footer | 3 | 3 | 0 | 3 | /privacy, /terms, /legal-compliance exist only under /kenya/ – legal decision needed |
| MobileMenu | 6 | 2 | 0 | 2 | /properties, /land – check if component is used |
Singapore (header not audited yet). Case B (page exists but not in header) NOT yet analysed – e.g. UK has /united-kingdom/faq, /listings, /research/[id]; UAE has many (asset-classes, developers/*, off-market/*, investment-guides) – must be compared still.
Remapped: Kenya compliance->governance-compliance, off-market->properties/off-market, insights->insights-cre, markets->market, sale-leaseback->kenya-sale-leaseback-transactions, investments->investment-pipeline, disposition->sell, cre-underwriting->/kenya/cre-underwriting; UAE research/yields->research/uae-cap-rates, developers/joint-ventures->capital-markets/joint-ventures, sale-leaseback->capital-markets/sale-leaseback, acquisition->capital-markets/institutional-acquisitions, research/reports->research.
Remaining items need MD decision: create pages with real facts, or remove menu entries. I did not invent pages. Mappings like disposition->/kenya/sell are judgement calls; review.

## 6. SEO (spot checks only)
- public/robots.txt allows everything incl. /admin, /portal, /studio, /api; next-sitemap config excludes only /institutional-portal (nonexistent). Recommend disallow/noindex for admin/portal/studio (needs approval: affects crawling).
- src/app/api/sitemap-properties.xml exists; sitemap not validated against routes. Duplicate-ish USA/Kenya content, canonicals, titles, structured data NOT yet audited.

## 7–10. UK positioning, API Global assessment, perf/a11y, credibility, strategy frameworks, content roadmap
NOT DONE in this run.

## 11. Changes implemented
| File | Change | Reason | Verification |
|---|---|---|---|
| Kenyaheader.tsx, UAEheader.tsx, UKheader.tsx, Header.tsx | hrefs remapped (above) | 404 nav links | scripts/check-nav-links.mjs: unresolved 55 -> 52 expected; tsc no new errors |
| UKheader.tsx | "FCA & RICS regulated" -> "Regulatory information" | unsupported regulatory claim | visual diff |
| scripts/check-nav-links.mjs (new) | regression check for nav->route existence | prevent broken nav | run `node scripts/check-nav-links.mjs` (currently fails by design on remaining items) |
Limitations: not rendered in browser; no build run.

## 12. Blockers / approvals
- Path discrepancy; WIP in usa/page.tsx breaks tsc/build; legal footer pages; robots/noindex policy; whether to create UK/UAE/Kenya pages (needs factual content from MD).

## 13. Rollback
`git checkout main` (WIP remains in working tree) or `git revert <commit>` on audit/2026-10-09-safe; nothing deployed.
