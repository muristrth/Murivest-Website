# Global footer legal links - evidence-based specification (Decision 7) - 2026-10-09

STATUS: no global legal pages exist. No legal text has been written or invented. This document is a spec and a list of statements needing legal review.

## 1. Evidence
Footer (src/components/layout/Footer.tsx, rendered site-wide by AppShell) links to: /privacy, /terms, /legal-compliance (two places each: link list and bottom bar). Route scan of src/app (486 route files):
| Global path | Exists? | Nearest existing | Suitable as global? |
|---|---|---|---|
| /privacy | NO | /kenya/privacy (Kenya Data Protection Act wording), /singapore/privacy (PDPA wording, entity "Murivest Realty Pte Ltd", Singapore address and DPO) | NO - each is jurisdiction/entity-specific; the Kenya one does not cover UK/EU/UAE/SG/US visitors or processors (Supabase, Sanity, email, analytics). |
| /terms | NO | /kenya/terms ("Terms of Engagement", governed by Kenyan law, Kenyan courts) | NO - these are engagement terms for advisory clients, not website terms of use; Kenya-governed. |
| /legal-compliance | NO | /kenya/legal-compliance (a Kenya property-law/tax explainer: title, WHT/CGT, NEMA licences) | NO - marketing/education content, not a compliance notice. |
| /compliance | YES (global) | - | Partly: states "not a licensed investment advisor", KYC/AML, no pooled capital. Good basis for a regulatory-status statement but it is not a privacy policy or terms. |
Other legal-ish text: footer "Important Notice" disclaimer (not a licensed investment advisor...), /esg-policy, /kenya/confidentiality, /kenya/governance-compliance, /due-diligence.
Also dead legal-style links found in body copy: /privacy-policy, /terms-of-service, /investment-disclaimer, /disclaimer (see audit/data/internal-links-all-2026-10-09.json).

Current state: the footer shows 3 links that 404 on every page. Documented TEMPORARY EXCEPTION in scripts/nav-exceptions.json (owner Mark). Not hidden, because removing legal links from a site that collects personal data (contact/lead/NDA/portal forms) is itself a legal decision.

## 2. Options for Mark / counsel (no choice made)
O1 Commission global Privacy Policy, Website Terms of Use, and Regulatory/Disclaimer page from counsel; then create /privacy, /terms, /legal-compliance (or point footer to /compliance).
O2 Interim: point the footer to the existing country pages ONLY after counsel confirms they can apply to all visitors (unlikely for privacy).
O3 Interim: country-aware footer links (Kenya visitors -> /kenya/*, Singapore -> /singapore/privacy) - needs counsel sign-off per country.

## 3. Content spec (structure only; wording must come from counsel)
Privacy policy must be accurate about what the code actually does. Evidence from the codebase to give counsel: forms post to /api/contact, /api/lead (captures name, email, phone, country, job title, company, deployable capital, investment timeline, investor type, referral source, message, consent flags), /api/newsletter, /api/property-inquiries, /api/careers/apply (CVs), /api/nda/* (NDA signature, OTP), portal accounts and KYC-type verification (/api/admin/verify-user), M-Pesa confirmation text (/api/mpesa-*), booking calls; processors visible in code/config: Supabase (db/auth/storage), Sanity (CMS), email provider (nodemailer / sequence emails), Google Maps/Walkscore, possibly analytics. Counsel must confirm: controller entity and address, lawful bases, retention, international transfers, DPO/ODPC registration (Kenya) and equivalents, cookie notice, user rights and contact route.
Terms of use: scope separate from client engagement terms; intellectual property; no-advice disclaimer consistent with /compliance; liability; governing law.
Regulatory/disclaimer: must match the truth about licences.

## 4. Statements flagged for legal review (found in existing text; none were changed)
1. Footer disclaimer and /compliance: "not a licensed investment advisor"; "do not offer regulated financial products" - correct only if true in every market (UK, UAE, SG, US, Kenya); counsel should confirm per jurisdiction whether advisory/introduction activities need licences (e.g. estate agency, financial promotion, broker registration).
2. /kenya/privacy: "operates in accordance with the Data Protection Act of Kenya" - requires ODPC registration/controller status evidence; "aligns with international governance standards" is vague.
3. /singapore/privacy: effective 1 Jan 2026; entity "Murivest Realty Pte Ltd"; address 1 Raffles Place #24-01; a Data Protection Officer - confirm entity exists/registered, address is Murivest's, DPO appointed.
4. /kenya/terms: governing law Kenya, Kenyan courts / arbitration; "No Investment Advice Representation"; limitation of liability - counsel review.
5. /kenya/legal-compliance: statutory rates "current as of 2026" (WHT, CGT, stamp duty), NEMA/county permissions - factual tax/legal claims that go stale; needs a dated source and counsel/tax review. Also /tools/*-calculator pages (Kenya CGT, transfer cost, UAE DLD, UK SDLT) embed rates - need dated sources.
6. Site-wide marketing claims that are regulatory-sensitive: see Phase 4 report (track record, AUM, "regulated", "FT recognised", "former investment bankers", "guaranteed returns").
7. UK/UAE pages: no FCA/RICS/RERA/DLD/ADREC/MAS/CEA status may be stated without evidence. The UK header wording was changed from "FCA & RICS regulated" to "Regulatory information" (kept per Mark) and now links to /compliance.

## 5. Acceptance criteria once counsel supplies text
- /privacy, /terms (and /legal-compliance or footer redirected to /compliance) return 200, have unique title/description, canonical, are in sitemap, linked from footer; remove the three entries from scripts/nav-exceptions.json; `node scripts/check-nav-links.mjs` stays PASS with 0 exceptions for them.
