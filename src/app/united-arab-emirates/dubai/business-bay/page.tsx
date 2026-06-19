import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/dubai/business-bay",
    title: "Business Bay — Dubai's Largest Commercial Office District With Diverse Occupier Appeal",
    eyebrow: "District",
    description: "Business Bay is Dubai's largest commercial office district, offering institutional investors scale, occupier diversity and competitive entry pricing relative to DIFC.",
    summary: "Business Bay is Dubai's largest office district by floor area, offering a diverse range of Grade A and Grade B office space at more accessible pricing than DIFC. The district benefits from its strategic location connecting Downtown Dubai to the Dubai Water Canal, strong transport links and a growing mix of corporate, technology and professional services occupiers.",
    schemaType: "WebPage",
    thesis: [
      "Business Bay offers the largest concentration of office space in Dubai, providing liquidity and occupier diversity",
      "Competitive pricing relative to DIFC enables higher yield entry points for value-conscious institutional capital",
      "Infrastructure investment (Dubai Water Canal, metro extension, road network) supports long-term district maturation"
    ],
    marketContext: "Business Bay has developed over the past two decades into Dubai's largest office district, with over 20 million square feet of commercial space. The district sits at the geographical centre of Dubai, connecting Downtown Dubai, DIFC and Sheikh Zayed Road, providing excellent transport connectivity.\n\nThe district offers a wider range of office quality and pricing than DIFC, making it accessible to a broader occupier base including technology companies, professional services firms, regional corporate HQs and government entities. This diversity provides income resilience during sector-specific downturns.",
    demandDrivers: [
      "Corporate sector expansion across technology, professional services and regional HQs",
      "Infrastructure improvements including Dubai Water Canal and metro connectivity",
      "Competitive rents attracting occupiers seeking DIFC-adjacent locations at lower cost",
      "Mixed-use development creating live-work-play environment attractive to talent"
    ],
    riskFactors: [
      "Larger development pipeline than DIFC, creating potential oversupply risk",
      "Greater variation in asset quality requires careful building selection",
      "Some buildings have fragmented ownership structures affecting management quality"
    ],
    competitiveAdvantages: [
      "Largest office district in Dubai with significant occupier depth",
      "Competitive pricing enabling higher yields than DIFC and Downtown",
      "Diverse tenant base reducing sector concentration risk",
      "Central location with excellent transport connectivity"
    ],
    globalComparison: [
      { market: "Business Bay", comparison: "Comparable to Canary Wharf in scale and secondary office districts in global financial centres, offering more occupier diversity and competitive pricing than the primary financial district." },
      { market: "DIFC", comparison: "DIFC offers superior tenant quality and legal infrastructure at a premium. Business Bay provides greater scale and yield potential." }
    ],
    institutionalRelevance: [
      "Offers the largest pool of office investment opportunities in Dubai",
      "Provides yield advantages over DIFC for income-focused mandates",
      "Enables portfolio-scale acquisitions through building aggregation"
    ],
    familyOfficePerspective: [
      "Competitive entry pricing for income-focused office investment",
      "Diverse tenant base supports income durability",
      "Central location within Dubai's growth corridor supports long-term value"
    ],
    investorImplications: [
      "Evaluate building quality, EIA rating, lease profile and management structure carefully",
      "Consider Business Bay for value-add office strategies targeting rental growth and capital appreciation",
      "Pair with DIFC exposure for balanced Dubai office allocation"
    ],
    faqs: [
      { question: "How does Business Bay compare with DIFC for office investment?", answer: "Business Bay offers larger scale, more competitive pricing and a more diverse occupier base, but with lower tenant quality on average and more variable asset quality than DIFC." },
      { question: "What types of tenants occupy Business Bay?", answer: "Technology companies, professional services firms, regional corporate HQs, government entities and SMEs. The tenant base is more diverse than DIFC's financial sector concentration." },
      { question: "What is the investment outlook for Business Bay offices?", answer: "Infrastructure improvements and Dubai's growing corporate sector support medium-term demand. Investors should focus on prime-grade buildings with strong management and efficient floor plates." }
    ],
    relatedResearch: [
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" }
    ],
    relatedPages: [
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Downtown Dubai", href: "/united-arab-emirates/dubai/downtown-dubai" },
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" }
    ],
    ctaTitle: "Discuss Business Bay Investment",
    ctaDescription: "Speak with Murivest about office investment opportunities in Business Bay, Dubai's largest commercial district."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} heroBgImage="https://images.unsplash.com/photo-1582672060674-bc2bd8082daf?w=1920&q=85" />;
}
