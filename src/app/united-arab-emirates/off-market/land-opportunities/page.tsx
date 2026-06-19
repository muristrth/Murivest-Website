import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/off-market/land-opportunities",
    title: "Off-Market Land Opportunities — Proprietary UAE Development Site Access",
    eyebrow: "Off-Market",
    description: "Off-market land and development site opportunities across UAE growth corridors.",
    summary: "Murivest provides access to off-market land and development site opportunities across UAE growth corridors, sourced through developer and government relationships.",
    schemaType: "WebPage",
    thesis: [
      "Strategic land holdings in growth corridors offer significant capital appreciation potential",
      "Off-market access provides early entry before competitive bidding"
    ],
    marketContext: "Land and development site transactions in the UAE are predominantly off-market, driven by developer networks and government allocation processes. Murivest's relationships provide access to proprietary land opportunities.",
    demandDrivers: [
      "Limited supply of prime development sites in growth corridors",
      "Developer demand for land banking and development pipeline"
    ],
    riskFactors: [
      "Limited price discovery in off-market land transactions",
      "Development timeline uncertainty can affect return timing",
      "Regulatory changes could affect development rights"
    ],
    competitiveAdvantages: [
      "Early access to land opportunities before public marketing",
      "Developer and government relationship access"
    ],
    globalComparison: [
      { market: "Off-Market Land", comparison: "Land transactions in the UAE are predominantly off-market. Government allocation processes provide additional proprietary access." }
    ],
    institutionalRelevance: [
      "Access to land for strategic long-term positioning",
      "Early-stage entry into development corridors",
      "Enables value-add through development and densification"
    ],
    familyOfficePerspective: [
      "Long-term capital appreciation through strategic land holdings",
      "Patient capital advantage in land banking strategies",
      "Potential for significant value creation through development"
    ],
    investorImplications: [
      "Register interest in specific growth corridors and land uses",
      "Prepare development capability or partner identification",
      "Underwrite longer hold periods for land strategies"
    ],
    faqs: [
      { question: "What types of land opportunities are available off-market?", answer: "Development sites in Dubai South, KIZAD and other growth corridors. Parcels range from small infill sites to large master-planned land banks." },
      { question: "How does off-market land acquisition differ from built asset acquisition?", answer: "Land acquisitions require deeper due diligence on zoning, development rights, infrastructure commitments and timelines. Development partnerships are common." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Off-Market", href: "/united-arab-emirates/off-market" },
      { label: "Land", href: "/united-arab-emirates/asset-classes/land" },
      { label: "Development Sites", href: "/united-arab-emirates/capital-markets/development-sites" }
    ],
    ctaTitle: "Access Off-Market Land",
    ctaDescription: "Speak with Murivest about off-market land and development site opportunities in the UAE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
