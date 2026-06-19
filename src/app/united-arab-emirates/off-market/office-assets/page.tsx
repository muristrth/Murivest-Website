import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/off-market/office-assets",
    title: "Off-Market Office Assets — Proprietary UAE Office Investment Opportunities",
    eyebrow: "Off-Market",
    description: "Off-market office investment opportunities across Dubai and Abu Dhabi's prime commercial districts, available exclusively to qualified institutional investors.",
    summary: "Murivest provides access to off-market office assets across UAE prime commercial districts. These proprietary opportunities are sourced through institutional relationships and offered exclusively to qualified investors.",
    schemaType: "WebPage",
    thesis: [
      "Prime office assets in Dubai and Abu Dhabi are frequently transacted off-market",
      "Off-market access provides early viewing and potentially favourable pricing",
      "Office remains the core institutional CRE asset class in the UAE"
    ],
    marketContext: "Prime office assets in DIFC, Downtown Dubai, Business Bay and Abu Dhabi's ADGM district are frequently transacted off-market, reflecting owner preferences for confidentiality and controlled sale processes. Murivest's institutional relationships provide access to these proprietary opportunities.",
    demandDrivers: [
      "Institutional investor demand for core office assets",
      "Owner preference for confidential sale processes"
    ],
    riskFactors: [
      "Limited price discovery in off-market processes",
      "Due diligence windows may be compressed"
    ],
    competitiveAdvantages: [
      "Proprietary access through institutional relationships",
      "Early viewing before public marketing"
    ],
    globalComparison: [
      { market: "Off-Market Office", comparison: "Off-market office transactions are common in global gateway cities. UAE market offers the advantage of higher yields and tax-free income." }
    ],
    institutionalRelevance: [
      "Access to core office investment opportunities",
      "Potentially favourable pricing versus marketed assets"
    ],
    familyOfficePerspective: [
      "Confidential access to prime office investment opportunities",
      "Direct negotiation aligned with family office preferences"
    ],
    investorImplications: [
      "Register interest with target districts and specifications",
      "Prepare institutional profile and mandate parameters",
      "Maintain confidentiality for off-market access"
    ],
    faqs: [
      { question: "What office districts are available off-market?", answer: "DIFC, Downtown Dubai, Business Bay, Sheikh Zayed Road, Dubai South (office component) and ADGM (Abu Dhabi) are active off-market office markets." },
      { question: "What is the typical size of off-market office opportunities?", answer: "Assets range from AED 30-500 million. Larger portfolios and institutional-grade assets are most commonly transacted off-market." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Off-Market", href: "/united-arab-emirates/off-market" },
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Access Off-Market Office",
    ctaDescription: "Speak with Murivest about off-market office investment opportunities in the UAE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
