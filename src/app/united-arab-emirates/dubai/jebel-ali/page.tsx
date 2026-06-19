import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/dubai/jebel-ali",
    title: "Jebel Ali — Dubai's Industrial And Logistics Engine",
    eyebrow: "District",
    description: "Jebel Ali is the industrial and logistics heart of Dubai, anchored by the largest man-made port in the world and a globally significant free zone.",
    summary: "Jebel Ali is the engine room of Dubai's economy. The district combines the Jebel Ali Port — the largest man-made harbour globally — the Jebel Ali Free Zone (JAFZA), Dubai South and Al Maktoum International Airport to create an integrated logistics and industrial ecosystem of global significance. For institutional investors, Jebel Ali offers exposure to structurally-driven logistics and industrial demand.",
    schemaType: "WebPage",
    thesis: [
      "Jebel Ali Port and JAFZA form one of the world's most significant logistics and industrial clusters, creating structural demand for warehouse and industrial space",
      "Dubai South and Al Maktoum International Airport expansion will drive multi-decade demand for logistics and industrial assets",
      "E-commerce growth and trade corridor expansion create sustained tailwinds for logistics space absorption"
    ],
    marketContext: "Jebel Ali is Dubai's primary industrial and logistics district. The Jebel Ali Port handles over 15 million TEUs annually, making it one of the top 10 container ports globally. The adjacent JAFZA is the world's largest free zone by land area, housing over 7,000 companies. Dubai South, the city's future logistics and aviation hub centred on Al Maktoum International Airport, is undergoing significant development.\n\nThis creates a concentrated logistics and industrial ecosystem that generates deep occupier demand across warehouse, light industrial and logistics assets.",
    demandDrivers: [
      "Jebel Ali Port expansion and increasing trade volumes through Dubai",
      "Al Maktoum International Airport development as the world's largest airport",
      "E-commerce growth driving demand for last-mile and mid-mile logistics facilities",
      "Dubai South master-plan development creating new industrial and logistics nodes"
    ],
    riskFactors: [
      "Industrial sector requires specialised management and tenant relationships",
      "Development pipeline can create short-term oversupply in specific asset types",
      "Lease structures typically shorter than office with more frequent rent reviews"
    ],
    competitiveAdvantages: [
      "World-leading port and logistics infrastructure",
      "Largest free zone globally with established institutional investment framework",
      "Multi-decade government investment in logistics and aviation corridor",
      "Structural demand from trade growth, e-commerce and supply chain regionalisation"
    ],
    globalComparison: [
      { market: "Jebel Ali", comparison: "Comparable to Singapore's Jurong or Rotterdam port areas, but with tax-free status and stronger growth dynamics from emerging market trade." },
      { market: "Dubai South", comparison: "Emerging logistics node that will complement Jebel Ali as Al Maktoum International expands." }
    ],
    institutionalRelevance: [
      "Provides exposure to structurally-driven logistics demand independent of office market cycles",
      "Supports portfolio diversification through industrial asset allocation",
      "Enables large-scale capital deployment through portfolio transactions in JAFZA"
    ],
    familyOfficePerspective: [
      "Industrial and logistics exposure within diversified real estate portfolio",
      "Structural demand growth from trade and e-commerce supports long-term value",
      "Lower entry costs relative to office, with potential for capital appreciation"
    ],
    investorImplications: [
      "Consider Jebel Ali for industrial and logistics mandates targeting structural demand growth",
      "Evaluate specific sub-locations based on access to port, airport and major transport corridors",
      "Pair with office exposure for balanced UAE commercial portfolio"
    ],
    faqs: [
      { question: "Why invest in Jebel Ali industrial and logistics assets?", answer: "Jebel Ali benefits from structural demand growth driven by trade expansion, e-commerce and supply chain regionalisation. The port and free zone ecosystem creates sustained occupier demand." },
      { question: "What types of assets are available in Jebel Ali?", answer: "Warehouse facilities, light industrial units, logistics centres, cold storage, showroom and office-warehouse hybrid assets. Assets range from Grade A institutional-quality to older stock." },
      { question: "How does JAFZA ownership work for institutional investors?", answer: "JAFZA offers long-term leasehold structures (typically 25-50 years) with renewal rights. Assets can be held through special purpose vehicles with 100% foreign ownership." }
    ],
    relatedResearch: [
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "UAE Logistics Market Report", href: "/united-arab-emirates/research/uae-logistics-market-report" }
    ],
    relatedPages: [
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Logistics", href: "/united-arab-emirates/asset-classes/logistics" },
      { label: "Jebel Ali Port", href: "/united-arab-emirates/dubai/jebel-ali" }
    ],
    ctaTitle: "Discuss Jebel Ali Investment",
    ctaDescription: "Speak with Murivest about industrial and logistics investment opportunities in Jebel Ali and Dubai South."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} heroBgImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=85" />;
}
