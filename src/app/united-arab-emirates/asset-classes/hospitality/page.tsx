import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/hospitality",
    title: "Hospitality — Tourism-Driven Growth In The World's Most Visited City",
    eyebrow: "Asset Class",
    description: "UAE hospitality assets offer institutional investors exposure to the world's highest tourism spending market, with growing business and leisure visitation.",
    summary: "The UAE is one of the world's leading tourism destinations, with Dubai consistently ranking among the most visited cities globally. Hospitality assets benefit from government investment in tourism infrastructure, events and attractions, creating structural demand for hotel rooms and leisure facilities.",
    schemaType: "WebPage",
    thesis: [
      "Dubai's tourism sector has demonstrated remarkable resilience, recovering visitor volumes faster than global peers post-pandemic",
      "Government investment in tourism infrastructure, events and attractions supports sustained visitation growth",
      "UAE's position as a safe, accessible destination with world-class infrastructure attracts growing business and leisure travel"
    ],
    marketContext: "The UAE hospitality market is one of the most dynamic globally. Dubai welcomed over 17 million international overnight visitors in 2023, surpassing pre-pandemic levels and ranking among the top global destinations. Abu Dhabi is growing its tourism sector through cultural (Saadiyat Island) and entertainment (Yas Island) investments.\n\nThe hospitality market offers multiple investment structures: direct hotel ownership, leasehold structures, management agreements and branded residence components. Institutional investors can access the sector through single-asset acquisition, portfolio transactions or development partnerships.",
    demandDrivers: [
      "Business travel growth from Dubai and Abu Dhabi's expanding corporate sectors",
      "Leisure tourism driven by world-class attractions, shopping and events",
      "Events and exhibitions (Expo City Dubai, Arabian Travel Market, GITEX, Dubai Airshow)",
      "Growing medical tourism and wellness travel sectors"
    ],
    riskFactors: [
      "Revenue cyclicality during global economic downturns",
      "Operational intensity requires specialist management",
      "Supply additions can impact existing asset performance",
      "Exchange rate effects on international visitor spending"
    ],
    competitiveAdvantages: [
      "Highest tourism spending per visitor globally",
      "Government investment in tourism infrastructure and promotion",
      "World-leading aviation connectivity through Emirates and Dubai International",
      "Safe destination status supporting family and business travel"
    ],
    globalComparison: [
      { market: "Dubai", comparison: "Dubai ranks among the top 3 most visited cities globally alongside London and Bangkok, with higher per-visitor spending and stronger tourism infrastructure." },
      { market: "Hospitality", comparison: "UAE hospitality yields of 6-9% compare favourably to 4-6% in European gateway cities, reflecting growth potential and tax efficiency." }
    ],
    institutionalRelevance: [
      "Diversification within multi-sector real estate portfolio",
      "Exposure to one of the world's strongest tourism growth stories",
      "Multiple investment structures available for different mandates"
    ],
    familyOfficePerspective: [
      "Prestige hospitality asset ownership with lifestyle benefits",
      "Income diversification beyond traditional real estate sectors",
      "Capital appreciation potential from tourism sector growth"
    ],
    investorImplications: [
      "Consider hospitality for diversification within multi-sector portfolio",
      "Focus on prime-location assets with strong brands and operator relationships",
      "Evaluate market positioning, RevPAR trends and supply pipeline in underwriting"
    ],
    faqs: [
      { question: "Is UAE hospitality a good institutional investment?", answer: "Yes, for investors who can manage the operational intensity and cyclicality. The UAE's tourism growth trajectory, government investment and world-leading infrastructure support long-term hospitality value." },
      { question: "What are typical hotel investment structures in the UAE?", answer: "Direct freehold ownership, leasehold structures with hotel operators, management agreements, and branded residence components. Free zone structures provide tax efficiency." },
      { question: "How has UAE hospitality performed post-pandemic?", answer: "Dubai led the global recovery, surpassing pre-pandemic visitor volumes faster than any other major destination. Average daily rates and occupancy have reached record levels in prime segments." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Yas Island", href: "/united-arab-emirates/abu-dhabi/yas-island" },
      { label: "Saadiyat Island", href: "/united-arab-emirates/abu-dhabi/saadiyat-island" },
      { label: "Mixed Use", href: "/united-arab-emirates/asset-classes/mixed-use" }
    ],
    ctaTitle: "Discuss Hospitality Investment",
    ctaDescription: "Speak with Murivest about UAE hospitality investment opportunities in the world's leading tourism market."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
