import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/logistics",
    title: "Logistics — The Highest Growth Commercial Sector In UAE Real Estate",
    eyebrow: "Asset Class",
    description: "UAE logistics assets are experiencing the strongest structural demand growth of any commercial sector, driven by e-commerce, trade corridor expansion and supply chain transformation.",
    summary: "The UAE logistics sector is benefiting from multiple structural tailwinds: e-commerce growth of 20%+ annually, trade corridor expansion through Jebel Ali Port and Al Maktoum International Airport, and supply chain regionalisation driving demand for modern logistics facilities. This creates the most compelling growth story in UAE commercial real estate.",
    schemaType: "WebPage",
    thesis: [
      "E-commerce penetration in the UAE is still below developed market levels, suggesting significant further logistics demand growth",
      "Dubai's position as a global trade hub creates sustained demand for logistics and distribution facilities",
      "Supply chain regionalisation is accelerating demand for UAE logistics assets as companies diversify away from single-source dependencies"
    ],
    marketContext: "The UAE logistics market is at an inflection point. E-commerce penetration in the UAE is approximately 5-7% of retail sales, versus 15-20% in mature markets like the UK and US, implying significant growth runway. The UAE's position at the intersection of global trade routes, combined with world-class port and airport infrastructure, makes it a natural logistics hub.\n\nSupply chain regionalisation — the movement of manufacturing and distribution closer to end markets — is creating additional demand for UAE logistics facilities. Major global logistics operators (DP World, Aramex, DHL, FedEx) have established significant UAE operations.",
    demandDrivers: [
      "E-commerce growth creating demand for last-mile and mid-mile logistics facilities",
      "Trade corridor expansion through Jebel Ali Port and Al Maktoum International Airport",
      "Supply chain regionalisation driving demand for regional distribution centres",
      "Cold chain logistics demand from food and pharmaceutical sectors"
    ],
    riskFactors: [
      "Logistics assets require specialised management and operator relationships",
      "Shorter lease terms require active asset management",
      "Technology disruption (automation, drones) could change facility requirements"
    ],
    competitiveAdvantages: [
      "Strongest structural demand growth of any UAE commercial sector",
      "World-class port and airport infrastructure",
      "Government commitment to logistics sector development",
      "Growing institutional demand improving liquidity over time"
    ],
    globalComparison: [
      { market: "Logistics", comparison: "UAE logistics yields of 7-9% compare favourably to 4-5% in developed markets, while offering superior growth dynamics from e-commerce penetration catch-up." },
      { market: "Industrial", comparison: "Logistics offers stronger growth but higher tenant turnover than traditional industrial. Both benefit from trade and e-commerce tailwinds." }
    ],
    institutionalRelevance: [
      "Highest growth sector for forward-looking capital allocation",
      "Structural demand drivers reduce cyclical risk profile",
      "Growing institutional investor base improving exit liquidity over time"
    ],
    familyOfficePerspective: [
      "Growth-oriented allocation within diversified real estate portfolio",
      "Exposure to UAE's trade and e-commerce growth story",
      "Capital appreciation potential from market maturation"
    ],
    investorImplications: [
      "Consider logistics for growth-oriented institutional mandates",
      "Focus on modern, well-located facilities with strong transport connectivity and operator relationships",
      "Evaluate e-commerce penetration trends and trade corridor development in underwriting"
    ],
    faqs: [
      { question: "Why is logistics the highest-growth CRE sector in the UAE?", answer: "E-commerce penetration is still low (5-7% vs 15-20% in mature markets), trade corridor investment is accelerating, and supply chain regionalisation is driving demand for regional distribution hubs." },
      { question: "What types of logistics assets are in demand?", answer: "Grade A warehouses with modern specifications (clear height, dock levellers, temperature control), last-mile distribution facilities in urban locations, and cold chain logistics assets for food and pharmaceutical sectors." },
      { question: "What are typical logistics yields in the UAE?", answer: "Prime logistics yields range from 7-9% depending on location, specification and lease structure. Modern assets with strong tenant covenants command the lowest yields." }
    ],
    relatedResearch: [
      { label: "UAE Logistics Market Report", href: "/united-arab-emirates/research/uae-logistics-market-report" },
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Jebel Ali", href: "/united-arab-emirates/dubai/jebel-ali" },
      { label: "Off-Market Logistics", href: "/united-arab-emirates/off-market/logistics-assets" }
    ],
    ctaTitle: "Discuss Logistics Investment",
    ctaDescription: "Speak with Murivest about UAE logistics investment opportunities in the highest-growth commercial sector."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
