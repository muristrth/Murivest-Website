import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/capital-markets/development-sites",
    title: "Development Sites — Building Value Through UAE Commercial Real Estate Development",
    eyebrow: "Strategy",
    description: "Development site acquisition offers institutional investors the opportunity to build value through commercial real estate development in the UAE's growth corridors.",
    summary: "Development site acquisition offers the highest value creation potential in UAE commercial real estate. Investors with development capability can access significant returns through building new commercial assets in growth corridors, benefiting from urbanisation, infrastructure investment and sector demand growth.",
    schemaType: "WebPage",
    thesis: [
      "Development offers the highest risk-adjusted return potential in UAE CRE for investors with execution capability",
      "Strategic site selection in growth corridors benefits from infrastructure-driven value creation",
      "Pre-leased and forward-funded structures can reduce development risk to institutional levels"
    ],
    marketContext: "Development site acquisition remains one of the highest-return strategies in UAE CRE. Institutional investors with development capability — either in-house or through JV partnerships — can access significant returns by developing commercial assets in growth corridors.\n\nPre-leased or forward-funded development structures can reduce risk to levels suitable for core-plus and value-add mandates. The UAE's planning and regulatory environment has matured significantly, providing clearer development pathways and timelines.",
    demandDrivers: [
      "Limited supply of prime development sites in established commercial districts",
      "Government-led master-planned community expansion creating new development nodes",
      "Occupier demand for modern, specification-built commercial space",
      "Infrastructure investment driving value creation in surrounding areas"
    ],
    riskFactors: [
      "Development execution risk requires specialist project management capability",
      "Planning and regulatory timelines can affect project returns",
      "Market timing risk — delivering space into a supply peak",
      "Construction cost inflation can erode development margins"
    ],
    competitiveAdvantages: [
      "Highest value creation potential across CRE investment strategies",
      "Ability to build to specification for target occupier demand",
      "Pre-leased structures can transfer leasing risk to tenants",
      "Infrastructure-driven value creation in growth corridors"
    ],
    globalComparison: [
      { market: "Development", comparison: "UAE development offers advantages including clear regulatory pathways, government support for construction, and strong occupier demand for modern space." }
    ],
    institutionalRelevance: [
      "Highest return potential within CRE investment strategies",
      "Can be structured to match core-plus or value-add mandate requirements",
      "Creates institutional-grade assets that can be held or exited post-stabilisation"
    ],
    familyOfficePerspective: [
      "Maximum value creation through active development",
      "Ability to create bespoke assets tailored to family office requirements",
      "Long-term asset creation for multi-generational wealth preservation"
    ],
    investorImplications: [
      "Consider pre-leased or forward-funded structures to mitigate development risk",
      "Partner with experienced local developers for execution capability",
      "Evaluate planning timeline, infrastructure commitments and market demand in underwriting"
    ],
    faqs: [
      { question: "What types of development sites are available in the UAE?", answer: "Office development sites in Dubai South and ADGM, industrial and logistics land in Jebel Ali and KIZAD, hospitality sites on Yas Island and Saadiyat Island, and mixed-used land in master-planned communities." },
      { question: "What is the typical development timeline for UAE CRE?", answer: "Office and mixed-use developments typically take 3-5 years from site acquisition to completion. Industrial and logistics projects are faster at 18-24 months." },
      { question: "How can development risk be mitigated?", answer: "Pre-leasing to secure tenant commitments, fixed-price construction contracts, phased development to match demand, and JV structures sharing risk with experienced local developers." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Joint Ventures", href: "/united-arab-emirates/capital-markets/joint-ventures" },
      { label: "Land", href: "/united-arab-emirates/asset-classes/land" },
      { label: "Developers", href: "/united-arab-emirates/developers" }
    ],
    ctaTitle: "Discuss Development Site Acquisition",
    ctaDescription: "Speak with Murivest about development site acquisition and value creation strategies in UAE growth corridors."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
