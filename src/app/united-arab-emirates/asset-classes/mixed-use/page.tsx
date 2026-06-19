import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/mixed-use",
    title: "Mixed Use — Integrated Development With Diversified Income Streams",
    eyebrow: "Asset Class",
    description: "UAE mixed-use developments offer institutional investors diversified income across office, retail, hospitality and residential components within integrated master-planned communities.",
    summary: "Mixed-use developments represent the highest quality segment of UAE commercial real estate. Integrated master-planned communities combining office, retail, hospitality and residential components offer income diversification, operational synergies and resilience across market cycles.",
    schemaType: "WebPage",
    thesis: [
      "Integrated mixed-use developments benefit from income diversification across multiple property sectors",
      "Master-planned communities with strong placemaking command premium rents and tenant demand",
      "Cross-sector synergies (office workers supporting retail, residents supporting hospitality) improve overall asset performance"
    ],
    marketContext: "Mixed-use developments represent the highest quality segment of UAE commercial real estate. Master-planned communities such as Downtown Dubai, Dubai Marina, Yas Island and Al Maryah Island combine multiple property sectors in integrated environments that create value through placemaking and cross-sector synergies.\n\nInstitutional investors seeking large-scale, diversified exposure to UAE commercial real estate often target mixed-use assets, which offer income resilience through diversification across sectors that respond differently to economic cycles.",
    demandDrivers: [
      "Government commitment to master-planned community development",
      "Consumer and occupier preference for integrated live-work-play environments",
      "Cross-sector synergies improving overall asset performance",
      "Institutional investor preference for diversified income streams"
    ],
    riskFactors: [
      "Large-scale developments require significant capital commitment",
      "Complex management requires multi-sector expertise",
      "Phasing risk in developments with multiple components"
    ],
    competitiveAdvantages: [
      "Income diversification across multiple property sectors",
      "Premium positioning through integrated placemaking",
      "Resilience during sector-specific downturns",
      "Strong occupier and consumer demand for live-work-play environments"
    ],
    globalComparison: [
      { market: "Mixed Use", comparison: "Comparable to major mixed-use developments in global gateway cities (Hudson Yards NYC, Marina Bay Singapore) but with tax-free status and newer infrastructure." },
      { market: "Single Sector", comparison: "Mixed-use offers diversification benefits that single-sector assets cannot match, with potential yield compression from income stability." }
    ],
    institutionalRelevance: [
      "Portfolio diversification within a single asset",
      "Income resilience through multi-sector exposure",
      "Large-scale capital deployment opportunity"
    ],
    familyOfficePerspective: [
      "Diversified income within a single investment",
      "Prestige asset ownership in premium development",
      "Long-term value creation through placemaking and community development"
    ],
    investorImplications: [
      "Consider mixed-use for large-scale, long-hold institutional mandates",
      "Evaluate master-plan quality, phasing, management structure and cross-sector dynamics",
      "Pair with single-sector assets for targeted sector exposure"
    ],
    faqs: [
      { question: "What are the best mixed-use developments in the UAE?", answer: "Downtown Dubai, Dubai Marina, Yas Island, Al Maryah Island and Saadiyat Island represent the highest quality mixed-use environments. Each has a distinct positioning and tenant mix." },
      { question: "How do mixed-use assets perform during downturns?", answer: "The diversified income base provides resilience. If one sector faces headwinds (e.g., retail from e-commerce), other sectors (e.g., residential, hospitality) can offset the impact." },
      { question: "What is the investment structure for mixed-use assets?", answer: "Assets can be acquired as whole developments, through joint ventures with developers, or as component parts within larger master-planned communities." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" },
      { label: "Retail", href: "/united-arab-emirates/asset-classes/retail" },
      { label: "Hospitality", href: "/united-arab-emirates/asset-classes/hospitality" }
    ],
    ctaTitle: "Discuss Mixed-Use Investment",
    ctaDescription: "Speak with Murivest about mixed-use investment opportunities in the UAE's premier master-planned communities."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
