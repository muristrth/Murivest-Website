import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/retail",
    title: "Retail — Anchored By Tourism, Population Growth And Consumer Spending",
    eyebrow: "Asset Class",
    description: "UAE retail real estate offers institutional investors exposure to one of the world's highest retail spending markets, anchored by tourism and population growth.",
    summary: "The UAE has one of the highest retail spending per capita rates globally, driven by tourism, high disposable incomes and a consumer-oriented culture. Institutional-grade retail assets — particularly dominant shopping centres in prime locations — offer stable income with strong tenant covenants.",
    schemaType: "WebPage",
    thesis: [
      "UAE retail spending per capita is among the highest globally, supported by tourism and high-income population",
      "Dominant shopping centres in prime locations have pricing power and tenant demand that supports income stability",
      "Retail market segmentation has created a clear divide between prime assets performing strongly and secondary assets under pressure"
    ],
    marketContext: "The UAE retail market has undergone significant transformation. Prime shopping centres in established locations continue to perform strongly, supported by tourism spending, population growth and consumer demand for experience-led retail. Secondary and tertiary retail assets face pressure from e-commerce competition and changing consumer preferences.\n\nInstitutional investors should focus on dominant, well-managed retail assets in prime locations with strong tenant mixes and experience-led offerings. The UAE's position as a global shopping destination — anchored by the Dubai Shopping Festival and world-leading malls — provides structural support for prime retail assets.",
    demandDrivers: [
      "Tourism spending supporting Dubai and Abu Dhabi retail destinations",
      "Population growth driving consumer spending across all retail categories",
      "Consumer preference for experience-led retail in destination shopping centres",
      "Luxury goods demand from high-net-worth residents and visitors"
    ],
    riskFactors: [
      "E-commerce competition pressuring secondary retail assets",
      "Tourism dependency creates cyclical demand exposure",
      "Retailer bankruptcies and store closures can create vacancy in weaker assets"
    ],
    competitiveAdvantages: [
      "Highest retail spending per capita among comparable markets",
      "World-leading shopping centre infrastructure and placemaking",
      "Tourism provides demand diversification beyond local population",
      "Prime assets in dominant locations have strong tenant demand and pricing power"
    ],
    globalComparison: [
      { market: "Dubai", comparison: "Dubai ranks among the top global cities for retail spending per capita, comparable to New York and London, with superior tourism-driven demand." },
      { market: "Retail", comparison: "Prime UAE retail yields of 7-9% compare favourably to 4-5% in developed markets, reflecting growth potential and tourism demand." }
    ],
    institutionalRelevance: [
      "Provides exposure to UAE consumer spending growth",
      "Prime retail assets offer stable income with strong tenant covenants",
      "Tourism demand provides diversification from local economic cycles"
    ],
    familyOfficePerspective: [
      "Exposure to consumer spending and tourism growth",
      "Prestige retail asset ownership with global recognition",
      "Income diversification within multi-sector portfolio"
    ],
    investorImplications: [
      "Focus on dominant, prime-location retail assets with experience-led offerings",
      "Avoid secondary and tertiary retail assets facing e-commerce pressure",
      "Evaluate tenant mix, lease expiry profile and footfall trends in underwriting"
    ],
    faqs: [
      { question: "Is UAE retail real estate a good investment?", answer: "Prime retail assets in dominant locations continue to perform strongly. The key is selectivity — focus on market-leading shopping centres in prime locations with strong tenant demand." },
      { question: "How is e-commerce affecting UAE retail real estate?", answer: "E-commerce is pressuring secondary retail but prime, experience-led destinations are resilient. The UAE's tourism spending provides additional demand that pure online can't capture." },
      { question: "What are typical retail yields in the UAE?", answer: "Prime retail yields range from 7-9% depending on location, tenant quality and lease structure. Destination shopping centres command the lowest yields and strongest tenant demand." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Mixed Use", href: "/united-arab-emirates/asset-classes/mixed-use" },
      { label: "Downtown Dubai", href: "/united-arab-emirates/dubai/downtown-dubai" }
    ],
    ctaTitle: "Discuss Retail Investment",
    ctaDescription: "Speak with Murivest about prime UAE retail investment opportunities in destination shopping centres."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
