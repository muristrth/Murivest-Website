import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/gcc-real-estate-outlook",
    title: "GCC Real Estate Outlook — Macro Trends Shaping Regional Commercial Real Estate",
    eyebrow: "Research",
    description: "Strategic outlook for GCC commercial real estate markets, covering economic trends, cross-border capital flows and sector dynamics.",
    summary: "The GCC real estate market is undergoing a period of unprecedented transformation driven by economic diversification, population growth, infrastructure investment and regulatory reform. This report provides the macro context necessary for informed investment decision-making across the region.",
    schemaType: "WebPage",
    thesis: [
      "GCC economic diversification is creating new demand drivers for commercial real estate",
      "Cross-border capital flows within the GCC are increasing as investors seek regional diversification",
      "Regulatory reform across the region is improving market accessibility for foreign capital"
    ],
    marketContext: "The GCC real estate market is the most dynamic in the world, driven by ambitious government transformation programmes (Saudi Vision 2030, UAE We the UAE 2031, Qatar National Vision 2030). These initiatives are creating significant opportunities for commercial real estate investment across the region.\n\nThis report analyses macro trends including economic diversification, population growth, infrastructure investment and regulatory reform, and their implications for commercial real estate investment.",
    demandDrivers: [
      "GCC economic diversification programmes creating new sectors and demand",
      "Population growth across the region driving real estate demand",
      "Infrastructure investment improving connectivity and creating new development nodes",
      "Regulatory reform improving foreign investment accessibility"
    ],
    riskFactors: [
      "Regional geopolitical dynamics can affect investor sentiment",
      "Oil price volatility affects government spending and economic growth",
      "Market maturity varies significantly across GCC countries"
    ],
    competitiveAdvantages: [
      "Regional perspective encompassing all major GCC markets",
      "Macro-to-micro analysis linking economic trends to real estate implications",
      "Forward-looking outlook with investment implications"
    ],
    globalComparison: [
      { market: "GCC", comparison: "GCC offers the strongest growth dynamics of any global real estate region, driven by economic transformation, population growth and infrastructure investment." }
    ],
    institutionalRelevance: [
      "Provides macro context for regional allocation decisions",
      "Supports country and city selection within GCC",
      "Identifies emerging trends and opportunities"
    ],
    familyOfficePerspective: [
      "Regional overview for GCC portfolio allocation",
      "Understanding of macro trends affecting real estate markets",
      "Identification of emerging investment themes"
    ],
    investorImplications: [
      "Use for strategic allocation decisions across GCC markets",
      "Consider UAE as the most accessible and liquid market for entry",
      "Monitor Saudi Arabia's market development for future allocation"
    ],
    faqs: [
      { question: "What are the key trends shaping GCC real estate?", answer: "Economic diversification, population growth, infrastructure investment, regulatory reform and increasing cross-border capital flows are the key structural trends." },
      { question: "Which GCC market offers the best investment opportunity?", answer: "The UAE remains the most accessible, liquid and transparent market. Saudi Arabia offers the largest opportunity but with higher complexity. Qatar and Oman offer more niche opportunities." },
      { question: "How does the UAE compare with other GCC markets?", answer: "The UAE has the most established legal framework, deepest liquidity and most sophisticated real estate market. Other GCC markets are at earlier stages of development with different risk-return profiles." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "UAE Overview", href: "/united-arab-emirates" },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Investment Guides", href: "/united-arab-emirates/investment-guides" }
    ],
    ctaTitle: "Access GCC Outlook",
    ctaDescription: "Speak with Murivest about accessing the full GCC Real Estate Outlook report."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
