import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/data-centers",
    title: "Data Centres — The Frontier Institutional Asset Class In UAE Real Estate",
    eyebrow: "Asset Class",
    description: "UAE data centres represent the fastest-growing alternative asset class in regional real estate, driven by cloud adoption, AI and digital transformation.",
    summary: "Data centres are the most dynamic growth sector in UAE commercial real estate. The UAE's position as the Middle East's digital hub, combined with accelerating cloud adoption, artificial intelligence growth and government-led digital transformation, is creating unprecedented demand for data centre capacity.",
    schemaType: "WebPage",
    thesis: [
      "Cloud adoption in the Middle East is significantly below developed markets, suggesting a multi-year growth runway for data centre demand",
      "AI adoption and data localisation requirements are creating additional demand for UAE data centre capacity",
      "The UAE's position as the region's digital hub attracts global cloud providers (AWS, Microsoft, Google, Oracle)"
    ],
    marketContext: "Data centres represent the frontier of UAE commercial real estate investment. The market is driven by cloud adoption (AWS, Microsoft Azure, Google Cloud have all established UAE regions), AI computing requirements, data localisation regulations and digital transformation across government and corporate sectors.\n\nThe UAE government has identified data centres as a strategic sector, with initiatives supporting development and foreign investment. Dubai South and Abu Dhabi's KIZAD are emerging as primary data centre corridors, offering land, power availability and connectivity.",
    demandDrivers: [
      "Cloud adoption in MENA region growing at 25%+ CAGR, well below developed market penetration",
      "AI and machine learning computing requirements driving demand for high-density data centre capacity",
      "Data localisation regulations requiring in-country data storage",
      "Government digital transformation initiatives across UAE and GCC"
    ],
    riskFactors: [
      "Highly specialised asset class requiring operational expertise and tenant relationships",
      "Significant capital commitment required for development and equipment",
      "Technology obsolescence risk requires continuous capital expenditure",
      "Power availability and cost are critical location determinants"
    ],
    competitiveAdvantages: [
      "Highest growth potential of any UAE commercial real estate sector",
      "Strategic government support and national-level initiatives",
      "Global cloud provider presence creating anchor tenant demand",
      "Limited existing supply creating favourable supply-demand dynamics"
    ],
    globalComparison: [
      { market: "Data Centres", comparison: "UAE data centre yields of 8-12% compare favourably to 5-7% in developed markets, while the market is at an earlier stage of the growth cycle." },
      { market: "Traditional CRE", comparison: "Data centres offer significantly higher growth but require specialist expertise and willingness to underwrite technology risk." }
    ],
    institutionalRelevance: [
      "Highest growth alternative asset class in UAE real estate",
      "Structural demand drivers independent of traditional CRE cycles",
      "Growing institutional investor base improving liquidity over time"
    ],
    familyOfficePerspective: [
      "Frontier asset class with highest growth potential in real estate",
      "Exposure to digital economy and technology infrastructure growth",
      "Portfolio diversification through alternative real asset allocation"
    ],
    investorImplications: [
      "Consider data centres for forward-looking institutional mandates with specialist capability",
      "Evaluate power availability, connectivity, cloud provider relationships and operator track record",
      "Partner with specialist operators for development and asset management"
    ],
    faqs: [
      { question: "Why invest in UAE data centres?", answer: "The UAE data centre market is at an early stage of a multi-year growth cycle driven by cloud adoption, AI and digital transformation. Limited existing supply creates favourable investment conditions." },
      { question: "What are the main risks in data centre investment?", answer: "Technology obsolescence, power availability, operator execution risk and the need for significant capital commitment. Specialist operational expertise is essential." },
      { question: "Who are the main data centre operators in the UAE?", answer: "Global operators (Equinix, Digital Realty), regional players (Khazna, Moro Hub) and cloud providers (AWS, Microsoft Azure, Google Cloud) are active in development and operation." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Discuss Data Centre Investment",
    ctaDescription: "Speak with Murivest about UAE data centre investment opportunities in the region's highest-growth real estate sector."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
