import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/uae-industrial-market-report",
    title: "UAE Industrial Market Report — Manufacturing And Trade-Driven Sector Analysis",
    eyebrow: "Research",
    description: "Analysis of the UAE industrial market covering manufacturing, warehousing and distribution assets across all major industrial corridors.",
    summary: "The UAE industrial market is benefiting from structural tailwinds including supply chain regionalisation, manufacturing sector growth and government industrial strategy. This report provides institutional investors with comprehensive analysis of industrial real estate across Jebel Ali, KIZAD, Hamriyah and other industrial corridors.",
    schemaType: "WebPage",
    thesis: [
      "Government industrial strategy (Operation 300bn) is driving manufacturing sector growth",
      "Supply chain regionalisation is accelerating demand for UAE industrial facilities",
      "Free zone structures provide attractive investment frameworks with tax efficiency"
    ],
    marketContext: "The UAE industrial market is undergoing structural expansion driven by government diversification initiatives, supply chain regionalisation and the growth of e-commerce logistics. The UAE Industrial Strategy (Operation 300bn) targets AED 300 billion manufacturing contribution to GDP by 2031.\n\nThis report covers industrial real estate across all major UAE industrial corridors, including Jebel Ali (Dubai), KIZAD (Abu Dhabi), Hamriyah (Sharjah) and RAK (Ras Al Khaimah).",
    demandDrivers: [
      "Supply chain regionalisation driving demand for UAE manufacturing facilities",
      "Operation 300bn manufacturing sector growth target",
      "E-commerce logistics demand for warehouse and distribution space",
      "Population growth supporting food and beverage manufacturing"
    ],
    riskFactors: [
      "Industrial sector cyclicality",
      "Asset obsolescence requires ongoing capital expenditure",
      "Shorter lease terms require active asset management"
    ],
    competitiveAdvantages: [
      "Comprehensive coverage across all UAE industrial corridors",
      "Data-driven analysis of occupier demand and supply dynamics",
      "Free zone structure analysis for investment framework comparison"
    ],
    globalComparison: [
      { market: "UAE Industrial", comparison: "UAE industrial yields of 7-10% compare favourably with developed market industrial yields of 4-6%, with superior growth dynamics." }
    ],
    institutionalRelevance: [
      "Data-driven foundation for industrial allocation decisions",
      "Corridor comparison for location selection",
      "Free zone analysis for optimal investment structuring"
    ],
    familyOfficePerspective: [
      "Market intelligence for industrial portfolio allocation",
      "Corridor comparative analysis for asset selection",
      "Growth sector exposure with structural demand drivers"
    ],
    investorImplications: [
      "Use for market context before industrial allocation decisions",
      "Compare corridor dynamics for location selection",
      "Combine with asset-class pages for comprehensive underwriting"
    ],
    faqs: [
      { question: "What data does this report cover?", answer: "Rental trends, vacancy rates, supply pipeline, occupier demand analysis, investment yields and free zone comparison across all UAE industrial corridors." },
      { question: "How frequently is the report updated?", answer: "The report is updated semi-annually with the latest market data." },
      { question: "Which industrial corridors are covered?", answer: "Jebel Ali (Dubai), KIZAD (Abu Dhabi), Hamriyah (Sharjah), RAK (Ras Al Khaimah) and other emerging industrial zones." }
    ],
    relatedResearch: [
      { label: "UAE Logistics Market Report", href: "/united-arab-emirates/research/uae-logistics-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Logistics", href: "/united-arab-emirates/asset-classes/logistics" },
      { label: "Jebel Ali", href: "/united-arab-emirates/dubai/jebel-ali" },
      { label: "Off-Market Industrial", href: "/united-arab-emirates/off-market/industrial-assets" }
    ],
    ctaTitle: "Access Industrial Market Report",
    ctaDescription: "Speak with Murivest about accessing the full UAE Industrial Market Report."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
