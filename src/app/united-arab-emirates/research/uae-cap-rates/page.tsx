import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/uae-cap-rates",
    title: "UAE Cap Rates — Institutional Yield Benchmarks Across Commercial Real Estate Sectors",
    eyebrow: "Research",
    description: "Cap rate and yield benchmarks across UAE commercial real estate sectors, providing institutional investors with comparable transaction data.",
    summary: "Cap rates are the primary metric for institutional investment decision-making. This report provides current cap rate benchmarks across UAE commercial real estate sectors and submarkets, enabling investors to evaluate relative value and track yield trends.",
    schemaType: "WebPage",
    thesis: [
      "Cap rate analysis provides the foundation for institutional investment underwriting",
      "Sector and location-specific cap rates enable relative value comparison",
      "Tracking cap rate trends provides insight into market pricing dynamics"
    ],
    marketContext: "Cap rates in UAE commercial real estate vary significantly by sector, location, asset quality and lease structure. This report provides current benchmark ranges for informed investment decision-making.\n\nData is sourced from Murivest transaction advisory, market intelligence and publicly reported transactions, providing a comprehensive view of current market pricing.",
    demandDrivers: [
      "Institutional investor need for comparable transaction data",
      "Portfolio construction and asset allocation decisions",
      "Investment underwriting and valuation requirements",
      "Market monitoring and trend analysis"
    ],
    riskFactors: [
      "Cap rates are point-in-time estimates and can change rapidly",
      "Transaction comparability requires careful adjustment for asset-specific factors",
      "Limited transaction volumes in some sectors affect data reliability"
    ],
    competitiveAdvantages: [
      "Comprehensive coverage across all UAE CRE sectors",
      "Transaction-based data from proprietary market intelligence",
      "Regular updates reflecting current market conditions",
      "Clear methodology and data sourcing transparency"
    ],
    globalComparison: [
      { market: "UAE Cap Rates", comparison: "UAE cap rates offer significant yield premium over developed markets, reflecting growth potential and market maturation. Office 6-8% versus 3-4% in London/Singapore." }
    ],
    institutionalRelevance: [
      "Essential tool for investment underwriting and valuation",
      "Enables relative value comparison across sectors and markets",
      "Supports investment committee decision-making with market data"
    ],
    familyOfficePerspective: [
      "Benchmark data for portfolio valuation and performance monitoring",
      "Relative value analysis for asset allocation decisions",
      "Market context for acquisition and disposition timing"
    ],
    investorImplications: [
      "Use reported cap rates as benchmarks, not absolutes",
      "Adjust for asset-specific factors (tenant quality, lease structure, location)",
      "Track trends over time for market timing insights"
    ],
    faqs: [
      { question: "What are current cap rates for UAE office assets?", answer: "Prime office in DIFC/Downtown Dubai: 6-7%. Secondary office: 7-9%. Abu Dhabi prime: 6.5-8%." },
      { question: "What are current cap rates for UAE industrial assets?", answer: "Prime logistics in Jebel Ali: 7-8%. Grade A industrial: 8-10%. Secondary industrial: 10-12%." },
      { question: "How often are cap rate benchmarks updated?", answer: "Benchmarks are updated quarterly based on transaction data and market intelligence." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" }
    ],
    ctaTitle: "Access Cap Rate Data",
    ctaDescription: "Speak with Murivest about accessing current UAE cap rate benchmarks and transaction data."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
