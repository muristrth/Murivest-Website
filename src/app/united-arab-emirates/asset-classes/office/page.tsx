import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/office",
    title: "Office — Core Income And Institutional Liquidity In UAE Commercial Real Estate",
    eyebrow: "Asset Class",
    description: "UAE office assets offer institutional investors core income stability, strong tenant covenants and the deepest liquidity among commercial sectors.",
    summary: "The UAE office market offers institutional investors the deepest liquidity and most transparent pricing of any commercial asset class in the region. Prime office assets in DIFC, Downtown Dubai and Abu Dhabi's ADGM district attract investment-grade tenants including global banks, professional services firms and multinational corporations.",
    schemaType: "WebPage",
    thesis: [
      "Prime UAE office assets offer core income stability with investment-grade tenant covenants and long-duration leases",
      "Dubai's emergence as a global business hub is driving structural demand for Grade A office space",
      "Supply constraints in prime districts support rent growth and capital preservation"
    ],
    marketContext: "The UAE office market has matured significantly over the past decade. Prime office assets in established districts benefit from low vacancy rates, strong rent growth and investment-grade tenant profiles. The flight to quality trend — accelerated by post-pandemic workplace preferences — has concentrated demand in modern, well-located, amenity-rich office buildings with high EIA ratings.\n\nDubai's office market is the most liquid in the region, with annual transaction volumes exceeding $3 billion. Abu Dhabi's office market is smaller but characterised by longer leases and stronger tenant covenants reflecting the dominance of government-related entities.",
    demandDrivers: [
      "Financial services sector growth in DIFC and ADGM",
      "Technology and fintech company expansion",
      "Professional services firms (legal, consulting, accounting) supporting corporate sector",
      "Multinational corporations establishing or expanding regional headquarters in Dubai"
    ],
    riskFactors: [
      "Potential oversupply in secondary office locations during development cycles",
      "Workplace trends (hybrid working, space optimisation) affecting demand density",
      "Building obsolescence risk requires capital expenditure for modernisation"
    ],
    competitiveAdvantages: [
      "Deepest liquidity and most transparent pricing among UAE commercial sectors",
      "Investment-grade tenant base with strong covenant quality",
      "Clear underwriting metrics (rent, occupancy, lease expiry, EIA rating)",
      "Multiple exit options through portfolio sale, single-asset disposition or capital markets execution"
    ],
    globalComparison: [
      { market: "London", comparison: "Deeper history and liquidity but yields of 3-4% are significantly compressed versus Dubai's 6-8%. Higher tax burden and operating costs." },
      { market: "Singapore", comparison: "Comparable regulatory quality and tenant base. Lower yields and higher costs. Dubai offers superior tax treatment." },
      { market: "Dubai", comparison: "Highest growth among comparable global office markets with strong inward migration and business formation tailwinds." }
    ],
    institutionalRelevance: [
      "Core portfolio allocation with predictable income streams",
      "Benchmark-comparable assets with transparent pricing",
      "Liquidity for portfolio rebalancing and exit execution"
    ],
    familyOfficePerspective: [
      "Income stability for multi-generational wealth preservation",
      "Capital preservation through prime location assets",
      "Diversification through exposure to different Dubai and Abu Dhabi office districts"
    ],
    investorImplications: [
      "Focus on prime-grade assets in established districts for core mandates",
      "Consider building quality, EIA rating, lease profile and tenant covenants in underwriting",
      "Use district-level analysis for submarket selection and positioning"
    ],
    faqs: [
      { question: "What defines a prime office asset in Dubai?", answer: "Prime office assets are located in established districts (DIFC, Downtown Dubai, Sheikh Zayed Road), have Grade A specifications, good EIA ratings, investment-grade tenants and professional management." },
      { question: "What are typical office yields in Dubai?", answer: "Prime office yields range from 6-8% depending on location, tenant quality and lease structure. This compares favourably to 3-4% in London and Singapore." },
      { question: "How is the Dubai office market performing?", answer: "Prime districts show strong performance with low vacancy (5-12%) and consistent rent growth driven by business formation and financial services expansion." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Business Bay", href: "/united-arab-emirates/dubai/business-bay" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Discuss Office Investment",
    ctaDescription: "Speak with Murivest about prime UAE office investment opportunities across Dubai and Abu Dhabi."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
