import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/asset-classes/land",
    title: "Land — Strategic Land Banking For Forward-Looking Institutional Capital",
    eyebrow: "Asset Class",
    description: "UAE land assets offer institutional investors strategic land banking opportunities in the world's most dynamic urban development market.",
    summary: "Land banking in the UAE offers institutional investors exposure to long-term urbanisation growth with significant capital appreciation potential. Strategic land holdings in designated development zones benefit from government infrastructure investment, population growth and economic expansion.",
    schemaType: "WebPage",
    thesis: [
      "UAE population growth and urban expansion create sustained demand for development land",
      "Strategic land holdings in designated development zones benefit from government infrastructure investment",
      "Land banking offers capital appreciation potential with low holding costs in free zone structures"
    ],
    marketContext: "The UAE's rapid urbanisation and population growth create sustained demand for development land. Strategic land holdings in areas designated for future development offer significant capital appreciation potential. Government investment in infrastructure — new transport corridors, airport expansion, master-planned communities — creates value uplift for well-positioned land holdings.\n\nLand banking in the UAE differs from many markets because of the prevalence of free zone structures that provide long-term leasehold interests rather than freehold ownership. Understanding the specific tenure arrangements is critical.",
    demandDrivers: [
      "Population growth driving demand for new residential, commercial and industrial development",
      "Government infrastructure investment creating value uplift in surrounding areas",
      "Limited supply of designated development land in prime locations",
      "Master-planned community expansion creating demand for land parcels"
    ],
    riskFactors: [
      "Land has no income yield during holding period",
      "Development timeline uncertainty affects return timing",
      "Regulatory changes could affect development rights or land use",
      "Illiquid asset class requires patient capital and longer hold periods"
    ],
    competitiveAdvantages: [
      "Capital appreciation potential from urbanisation and infrastructure investment",
      "Low holding costs in free zone structures",
      "Strategic positioning in one of the world's fastest-growing urban markets",
      "Can serve as a store of value for patient institutional capital"
    ],
    globalComparison: [
      { market: "Land", comparison: "UAE land banking compares favourably to land in other high-growth urban markets. Government commitment to infrastructure investment reduces speculation risk." }
    ],
    institutionalRelevance: [
      "Strategic long-term allocation for patient institutional capital",
      "Capital appreciation potential from UAE urbanisation growth",
      "Can serve as a store of value and inflation hedge"
    ],
    familyOfficePerspective: [
      "Long-term capital appreciation for multi-generational wealth",
      "Strategic land holdings in growth corridors",
      "Inflation protection through real asset ownership"
    ],
    investorImplications: [
      "Consider land for long-duration mandates with capital appreciation focus",
      "Evaluate zoning, development rights and infrastructure plans in underwriting",
      "Plan exit through development sale, joint venture or land sale to developers"
    ],
    faqs: [
      { question: "Is land banking a suitable strategy for institutional investors?", answer: "Yes, for patient capital with a long-term view. Land offers capital appreciation potential but no income during the holding period. It suits mandates with 7-10+ year horizons." },
      { question: "What types of land are available for institutional investment?", answer: "Development land in designated growth corridors, free zone land parcels for commercial/industrial development, and strategic sites in master-planned communities." },
      { question: "What are the holding costs for land in the UAE?", answer: "Holding costs are relatively low in free zone structures, typically limited to annual land lease fees (if leasehold) and security costs. Freehold land may have minimal holding costs." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Off-Market Land", href: "/united-arab-emirates/off-market/land-opportunities" }
    ],
    ctaTitle: "Discuss Land Banking Strategy",
    ctaDescription: "Speak with Murivest about strategic land banking opportunities in UAE growth corridors."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
