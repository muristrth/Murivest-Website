import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/uae-office-market-report",
    title: "UAE Office Market Report — Institutional Analysis Of The Region's Core CRE Sector",
    eyebrow: "Research",
    description: "Comprehensive analysis of the UAE office market across Dubai and Abu Dhabi, covering rents, vacancy, supply, demand and investment yields.",
    summary: "The UAE office market is the core of institutional commercial real estate investment in the region. This report provides comprehensive analysis of office market dynamics across Dubai and Abu Dhabi, including rental trends, vacancy rates, supply pipelines, occupier demand analysis and investment yields.",
    schemaType: "WebPage",
    thesis: [
      "Prime office assets in Dubai's DIFC and Abu Dhabi's ADGM offer core income stability with investment-grade tenants",
      "Flight to quality is concentrating demand in modern, amenity-rich office buildings with high EIA ratings",
      "Supply constraints in prime districts support continued rent growth and capital value appreciation"
    ],
    marketContext: "The UAE office market has demonstrated remarkable resilience and growth. Dubai's office market benefits from strong business formation, corporate expansion and the flight to quality. Abu Dhabi's office market offers longer-term leases, stronger tenant covenants and lower volatility.\n\nThis report provides institutional investors with the data, analysis and market context needed for informed office allocation decisions across both emirates.",
    demandDrivers: [
      "Business formation and corporate expansion in Dubai and Abu Dhabi",
      "Financial services sector growth in DIFC and ADGM",
      "Technology and fintech company expansion",
      "Professional services firms supporting corporate sector growth"
    ],
    riskFactors: [
      "Potential office oversupply in secondary locations",
      "Workplace trend uncertainty (hybrid working impact)",
      "Building obsolescence risk requires capital expenditure"
    ],
    competitiveAdvantages: [
      "Comprehensive coverage of both Dubai and Abu Dhabi office markets",
      "Data-driven analysis with proprietary market intelligence",
      "Actionable investment implications for institutional capital"
    ],
    globalComparison: [
      { market: "Dubai Office", comparison: "Dubai office yields of 6-8% compare favourably with 3-4% in London, Singapore and New York, with superior growth dynamics." }
    ],
    institutionalRelevance: [
      "Provides data foundation for office allocation decisions",
      "Supports district and building selection with market context",
      "Enables benchmarking of potential acquisitions against market data"
    ],
    familyOfficePerspective: [
      "Market intelligence for office portfolio allocation and monitoring",
      "Comparative analysis supporting district and asset selection",
      "Market data for investment committee reporting"
    ],
    investorImplications: [
      "Use for market context before office allocation decisions",
      "Compare district-level performance for submarket selection",
      "Combine with asset-class and district pages for comprehensive underwriting"
    ],
    faqs: [
      { question: "What data does this report cover?", answer: "Rental trends, vacancy rates, supply pipeline, occupier demand analysis, investment yields and transaction volumes across Dubai and Abu Dhabi office markets." },
      { question: "How frequently is the report updated?", answer: "The report is updated quarterly with the latest market data and forward-looking analysis." },
      { question: "How can I use this report for investment decisions?", answer: "Use the data and analysis to frame market context, benchmark potential acquisitions and support investment committee decision-making." }
    ],
    relatedResearch: [
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Business Bay", href: "/united-arab-emirates/dubai/business-bay" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Access Office Market Report",
    ctaDescription: "Speak with Murivest about accessing the full UAE Office Market Report and data."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
