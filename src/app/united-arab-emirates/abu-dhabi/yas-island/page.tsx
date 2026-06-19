import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/abu-dhabi/yas-island",
    title: "Yas Island — Abu Dhabi's Entertainment And Leisure Powerhouse",
    eyebrow: "District",
    description: "Yas Island is the UAE's premier entertainment and leisure destination, anchored by the Formula 1 Yas Marina Circuit, Ferrari World, Warner Bros World and SeaWorld.",
    summary: "Yas Island has established itself as the UAE's leading entertainment and leisure district. Home to the Yas Marina Circuit (Abu Dhabi Grand Prix), Ferrari World, Warner Bros World, Yas Waterworld and SeaWorld Abu Dhabi, the island attracts over 30 million visitors annually and offers institutional investors exposure to entertainment-driven hospitality, retail and leisure real estate.",
    schemaType: "WebPage",
    thesis: [
      "Concentration of world-class entertainment assets creates structural demand for hospitality and retail real estate",
      "Annual visitor volumes exceeding 30 million demonstrate sustained consumer demand across economic cycles",
      "Government-backed development with Aldar as master developer ensures institutional-quality infrastructure and management"
    ],
    marketContext: "Yas Island is Abu Dhabi's entertainment and leisure hub, developed as a master-planned destination by Aldar Properties. The island spans 25 square kilometres and contains the Yas Marina Circuit, Ferrari World Abu Dhabi, Warner Bros World Abu Dhabi, Yas Waterworld, SeaWorld Abu Dhabi, Yas Mall (one of the largest shopping centres in the UAE) and multiple luxury hotels.\n\nThe district attracts over 30 million visitors annually, making it one of the most visited entertainment destinations in the Middle East. The Formula 1 Abu Dhabi Grand Prix provides annual global exposure and drives peak-season demand.",
    demandDrivers: [
      "Entertainment tourism growth driven by world-class attractions and events",
      "Formula 1 Abu Dhabi Grand Prix annual event driving global visitation",
      "Aldar-led development pipeline ensuring continuous district enhancement",
      "Business tourism from Abu Dhabi's financial sector accessing leisure amenities"
    ],
    riskFactors: [
      "Entertainment and tourism cyclicality during global economic downturns",
      "Competition from new entertainment destinations in Saudi Arabia and other GCC markets",
      "Seasonal demand patterns requiring active asset management"
    ],
    competitiveAdvantages: [
      "Highest density of world-class entertainment attractions in the Middle East",
      "Government and Aldar-backed development with institutional governance",
      "Diverse attraction base reducing single-asset dependency",
      "Strong annual visitation providing baseline demand for hospitality and retail"
    ],
    globalComparison: [
      { market: "Yas Island", comparison: "Comparable to Disneyland Paris or Universal Orlando as an integrated entertainment destination, but with tax-free status and newer infrastructure." },
      { market: "Saadiyat Island", comparison: "Cultural tourism focus. Yas Island is entertainment and leisure focused, with higher visitor volumes and broader demographic appeal." }
    ],
    institutionalRelevance: [
      "Provides exposure to UAE's entertainment and leisure tourism growth",
      "Supports hospitality and retail mandates with high-visitor-volume locations",
      "Government and Aldar backing reduces development and execution risk"
    ],
    familyOfficePerspective: [
      "Prestige asset ownership within globally recognised entertainment destination",
      "Diversification beyond traditional commercial real estate sectors",
      "Annual events (Formula 1) provide consistent marketing and demand generation"
    ],
    investorImplications: [
      "Consider for hospitality and entertainment-anchored retail investment",
      "Evaluate seasonal demand patterns and annual event impact in underwriting",
      "Pair with Abu Dhabi office and cultural district exposure for balanced allocation"
    ],
    faqs: [
      { question: "What CRE opportunities exist on Yas Island?", answer: "Hospitality assets (luxury and mid-scale hotels), Yas Mall retail, entertainment-adjacent food and beverage, and mixed-use developments. Asset quality is institutional-grade under Aldar management." },
      { question: "How does Yas Island perform during economic downturns?", answer: "Visitor volumes show resilience due to the diverse attraction base and regional tourism demand. However, luxury hospitality segments face greater cyclicality." },
      { question: "What is Aldar's role in Yas Island development?", answer: "Aldar is the master developer overseeing district planning, infrastructure investment and asset management, ensuring institutional-quality governance and long-term value creation." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Abu Dhabi", href: "/united-arab-emirates/abu-dhabi" },
      { label: "Saadiyat Island", href: "/united-arab-emirates/abu-dhabi/saadiyat-island" },
      { label: "Hospitality", href: "/united-arab-emirates/asset-classes/hospitality" },
      { label: "Retail", href: "/united-arab-emirates/asset-classes/retail" }
    ],
    ctaTitle: "Discuss Yas Island Investment",
    ctaDescription: "Speak with Murivest about hospitality and entertainment-anchored investment opportunities on Yas Island."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} heroBgImage="https://images.unsplash.com/photo-1569949381669-ecf31ae8f613?w=1920&q=85" />;
}
