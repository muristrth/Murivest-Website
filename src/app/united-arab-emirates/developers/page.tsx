import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/developers",
    title: "UAE Developers — Institutional Due Diligence On Major Real Estate Platforms",
    eyebrow: "Developers",
    description: "Institutional due diligence profiles on major UAE developers, providing counterparty analysis for investment and partnership decisions.",
    summary: "Developer quality is a critical factor in UAE commercial real estate investment, affecting delivery risk, asset quality and long-term value. These profiles provide institutional investors with the counterparty analysis needed for informed investment and partnership decisions.",
    schemaType: "WebPage",
    thesis: [
      "Developer quality directly affects project delivery risk and asset quality",
      "Track record and balance sheet strength inform counterparty assessment",
      "Developer relationships can improve sourcing quality and deal access"
    ],
    marketContext: "Developer analysis provides institutional due diligence context for major UAE real estate platforms. This section profiles the major developers operating in the UAE commercial market, providing counterparty analysis for investment and partnership decisions.",
    demandDrivers: [
      "Counterparty due diligence for development and JV investments",
      "Developer track record assessment for pre-sale and forward purchase structures",
      "Sourcing optimisation through developer relationship access"
    ],
    riskFactors: [
      "Developer financial health can affect delivery timelines",
      "Market cycle exposure varies by developer business model"
    ],
    competitiveAdvantages: [
      "Objective due diligence framework for developer assessment",
      "Historical track record analysis for informed decision-making"
    ],
    globalComparison: [
      { market: "Developers", comparison: "UAE developers range from sovereign-backed entities (Aldar) to large public companies (Emaar) and private groups (Damac, Sobha), offering different risk profiles." }
    ],
    institutionalRelevance: [
      "Supports counterparty review for development investments",
      "Informs partner selection for JV structures",
      "Improves sourcing through developer relationships"
    ],
    familyOfficePerspective: [
      "Counterparty analysis for development and JV investments",
      "Reduces execution uncertainty through informed partner selection"
    ],
    investorImplications: [
      "Use developer profiles as due diligence reference",
      "Compare developer track records for partner selection",
      "Pair developer analysis with asset-class and market research"
    ],
    faqs: [
      { question: "Why are developer profiles important for institutional investors?", answer: "Developer track record, financial strength and delivery capability directly affect project outcomes. Understanding counterparty quality is essential for development and JV investments." },
      { question: "What criteria should I use to evaluate a developer?", answer: "Track record (projects delivered vs announced), financial strength (balance sheet, debt level), institutional relationships, delivery quality and after-sales service." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Emaar", href: "/united-arab-emirates/developers/emaar" },
      { label: "Aldar", href: "/united-arab-emirates/developers/aldar" },
      { label: "Damac", href: "/united-arab-emirates/developers/damac" },
      { label: "Nakheel", href: "/united-arab-emirates/developers/nakheel" },
      { label: "Sobha", href: "/united-arab-emirates/developers/sobha" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Discuss Developer Due Diligence",
    ctaDescription: "Speak with Murivest about developer due diligence and partnership structuring for UAE CRE investment."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
