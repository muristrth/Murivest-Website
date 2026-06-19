import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research",
    title: "UAE Commercial Real Estate Research — Market Intelligence For Institutional Decision-Making",
    eyebrow: "Research",
    description: "Murivest Research provides institutional-quality market intelligence, data and analysis across UAE commercial real estate markets, sectors and capital markets.",
    summary: "Institutional capital deployment requires data-driven market intelligence, not anecdotal market commentary. Murivest Research provides the analysis, data and market context that sophisticated investors need to make informed allocation decisions across UAE commercial real estate.",
    schemaType: "WebPage",
    thesis: [
      "Research-backed investment decisions consistently outperform opinion-led approaches",
      "Market transparency and data availability in the UAE have improved significantly, enabling robust analysis",
      "Independent research provides an objective foundation for capital allocation decisions"
    ],
    marketContext: "Murivest Research provides institutional-quality market intelligence across UAE commercial real estate. Our research covers market trends, sector analysis, capital markets data and forward-looking outlooks designed to support investment committee decision-making.\n\nOur research is produced by sector specialists and draws on proprietary data, market intelligence and relationships across the UAE CRE ecosystem. We focus on actionable analysis rather than descriptive reporting.",
    demandDrivers: [
      "Institutional investor need for independent, data-driven market intelligence",
      "Market entry decisions require comprehensive market context and comparison",
      "Portfolio construction and asset selection benefit from sector-specific research",
      "Investment committee reporting requires robust data and analysis"
    ],
    riskFactors: [
      "Market data quality and timeliness can vary",
      "Forward-looking analysis involves inherent uncertainty",
      "Rapid market changes can render analysis outdated"
    ],
    competitiveAdvantages: [
      "Independent institutional perspective free from transaction bias",
      "Sector-specialist analysts with deep UAE market knowledge",
      "Actionable analysis designed for investment committee decision-making",
      "Proprietary data and market intelligence from institutional relationships"
    ],
    globalComparison: [
      { market: "Research", comparison: "Comparable quality to global investment bank research but with specialist UAE CRE focus and independent perspective." }
    ],
    institutionalRelevance: [
      "Provides data-driven foundation for investment decisions",
      "Supports investment committee reporting and approval processes",
      "Enables informed market entry and asset allocation decisions"
    ],
    familyOfficePerspective: [
      "Independent research supporting family office investment committee decision-making",
      "Sector and market context for informed allocation decisions",
      "Market intelligence for monitoring existing portfolio holdings"
    ],
    investorImplications: [
      "Review relevant research reports before making allocation decisions",
      "Use research to frame market context, sector dynamics and risk factors",
      "Combine multiple research reports for comprehensive market understanding"
    ],
    faqs: [
      { question: "What research does Murivest produce?", answer: "Sector market reports (office, industrial, logistics), capital markets data (cap rates, yields), market outlooks and thematic research pieces." },
      { question: "How is Murivest research different from broker research?", answer: "We provide independent analysis free from transaction bias, designed for institutional investment committee decision-making rather than transaction generation." },
      { question: "Can I access Murivest research without engaging advisory services?", answer: "Our research is published on our website to demonstrate our market perspective. In-depth analysis and custom research are available to advisory clients." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "UAE Overview", href: "/united-arab-emirates" },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Investment Guides", href: "/united-arab-emirates/investment-guides" }
    ],
    ctaTitle: "Access Research",
    ctaDescription: "Speak with Murivest about accessing our UAE commercial real estate research and market intelligence."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
