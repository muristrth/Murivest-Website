# Security / crawl / auth review - 2026-10-09 (Decision 8)

Scope: /admin, /admin2, /portal, /studio, /api, /kenya/advisors, /singapore/investor-portal. Method: static reading of src/middleware.ts, next.config.js, public/robots.txt, next-sitemap.config.js, API route handlers and page files. NO production request was made and no secret was read or printed. Runtime behaviour NOT yet verified against a running server (see "Verification status").

## 1. What actually protects what

| Area | Middleware auth guard | noindex signal | Notes |
|---|---|---|---|
| /admin/* (and /admin2/*, because the check is startsWith('/admin')) | Yes: redirects to /admin/login if no Supabase session. /admin/login is public. | X-Robots-Tag: noindex,nofollow (middleware) | Admin PAGES have no page-level server check (only middleware). |
| /portal/* | Yes: redirect to /portal/login if no session. /portal/login and /portal/access-pending are public. | X-Robots-Tag noindex (middleware) | Several portal pages show auth signals; layout is a client component. |
| /advisor/* | Guard exists but NO such route exists (team tool lives at /kenya/advisors). | n/a | Dead config. |
| /studio | NONE (Sanity Studio handles its own login) | NONE before this audit. Added src/app/studio/layout.tsx with noindex metadata (commit 7318152). | Studio login is Sanity's; public URL is discoverable. |
| /api/* | NONE in middleware (path does not start with /admin or /portal). Each handler must authenticate itself. | none | See section 2. |
| /kenya/advisors/* (team portal: pages + ~10 JSON handlers: employees, deals, contacts, kpis, logs, metrics, targets) | NONE | noindex metadata added (layout.tsx) | No authentication signals found in any of these pages/handlers. Treated as HIGH: needs verification and auth. |
| /singapore/investor-portal/{dashboard,deals,documents,login} | NONE | noindex metadata added (4 layouts) | Pages show SAMPLE_PROPERTIES / static document list; login is a form with no auth wiring found. Public UI mock. |

IMPORTANT fail-open: middleware.ts returns the response unguarded ("Supabase credentials missing - skipping auth checks") when NEXT_PUBLIC_SUPABASE_URL / _PUBLISHABLE_KEY are unset. If that happens in any deployed environment, /admin and /portal become open. Also getSession() (cookie-based) is used instead of getUser() (server-validated) - Supabase recommends getUser() in server code. Propose, do not change.

robots.txt: `User-agent: * / Allow: /` with NO disallow and a Yandex-only Host directive. It does not and cannot protect anything. Do NOT treat robots as access control; do not rely on Disallow to hide private paths (Disallow can also stop crawlers from seeing noindex).

## 2. API routes - authentication review (static)
Handlers WITH explicit auth checks (verifyAdmin / token / role): most /api/admin/*, /api/leads, /api/leads/[id], /api/email/send (x-admin-token vs ADMIN_SECRET_TOKEN), /api/users, /api/publications, /api/briefs, /api/deals, /api/upload, /api/revalidate-property, /api/send-email-sequence.
Handlers with NO auth check in the handler and not covered by middleware (HIGH - verify RLS and intent):
- GET /api/admin/stats (user/order/revenue counts)  
- GET /api/orders, GET /api/orders/[id] (customer name/email joins)  
- GET /api/payments, GET /api/payments/[id] (customer joins)  
These use the cookie-based Supabase client, so they depend entirely on Supabase Row-Level Security; if RLS is permissive they leak data to anonymous callers. They are under /api/admin or look admin-only but sit outside the /admin middleware guard.
- GET /api/bookings (returns booked date/time slots from a local ledger - low risk, probably intentional for a booking widget).
- Public by design (forms, need rate limiting/spam control): /api/contact, /api/lead, /api/send-lead, /api/newsletter, /api/property-inquiries, /api/asset-brief-request, /api/walkscore, /api/mpesa-confirm.
- /api/mpesa-confirm validates a pasted SMS against a hard-coded personal recipient name string in source: review.

CACHING DEFECT (next.config.js): headers() applies `Cache-Control: public, max-age=300, s-maxage=600, stale-while-revalidate=86400` to EVERY /api/(.*) response. Authenticated/personal JSON (orders, payments, users, admin stats, notifications) would be eligible for shared/CDN caching. Proposed fix (needs approval - production behaviour): remove that rule or restrict it to explicitly public GET endpoints (e.g. /api/sitemap-properties.xml) and send `Cache-Control: private, no-store` from authenticated handlers.

## 3. What needs auth vs noindex
- Needs AUTH (real access control): /admin*, /portal* (exists, depends on env), /api/admin/*, /api/orders*, /api/payments*, /kenya/advisors/* and its handlers, /singapore/investor-portal/* (dashboard/deals/documents) - or remove the pages if they are mockups.
- Needs NOINDEX only (public by design but not search-worthy): login pages (/login, /kenya/login, /united-kingdom/login, /portal/login, /admin/login), /studio, /portal/access-pending, thank-you/confirmation pages (/kenya/confirmation).
- Fine to index: marketing/research pages.

## 4. Changes made (all reversible, additive, pure metadata/sitemap hygiene - no auth or robots policy change)
1. src/app/studio/layout.tsx (new): robots noindex,nofollow.
2. src/app/singapore/investor-portal/{dashboard,deals,documents,login}/layout.tsx (new): noindex.
3. src/app/kenya/advisors/layout.tsx: `robots: { index:false, follow:false }` added to metadata.
4. next-sitemap.config.js: private and duplicate URLs excluded from the sitemap (was listing /admin*, /portal*, /kenya/advisors*, SG investor portal pages and logins - 29 URLs). robots.txt policies left UNCHANGED.
Rollback: git revert 7318152.
Note: noindex metadata does not stop access. public/sitemap-0.xml (committed, generated 2026-09-19) is stale and still lists them until the next build regenerates it (postbuild: next-sitemap). Not regenerated here because the working tree does not build.

## 5. Proposals needing approval (NOT done)
P1 Add `/api/*`-wide guard or per-handler auth to /api/admin/stats, /api/orders*, /api/payments*; confirm Supabase RLS on profiles/orders/payments/deals/publications.
P2 Make middleware fail CLOSED (return 503/redirect) when Supabase env vars are missing in production; switch getSession()->getUser().
P3 Remove or narrow the `/api/(.*)` public Cache-Control rule.
P4 Put /kenya/advisors/* and handlers behind the same guard as /admin (or a role check) - determine whether live staff data is exposed (do not test against production without approval).
P5 robots.txt: add `Disallow` only for paths that are also protected (e.g. /api/, /admin, /portal) - cosmetic; keep noindex headers; remove the Yandex-only Host line. (Crawl-policy change: approval required.)
P6 Singapore investor portal: decide real auth vs removal.
P7 Add X-Robots-Tag noindex in middleware for /studio and /api/* (header-level; covers client pages that cannot export metadata).

## 6. Verification status
- Static analysis only. Runtime check of middleware redirects (anonymous GET /admin, /portal, /api/orders) is planned on a local `next start` of the clean worktree (see phase 6 report for whether the build completed). Anything not listed there as run was NOT run.
