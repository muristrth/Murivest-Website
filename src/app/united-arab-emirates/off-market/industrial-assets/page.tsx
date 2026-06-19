import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/off-market/industrial-assets",
    title: "Off-Market Industrial Assets — Proprietary UAE Industrial Investment Opportunities",
    eyebrow: "Off-Market",
    description: "Off-market industrial investment opportunities across UAE free zones and industrial corridors.",
    summary: "Murivest provides access to off-market industrial assets across UAE industrial corridors. These proprietary opportunities span warehouse, light industrial and manufacturing facilities in established free zones.",
    schemaType: "WebPage",
    thesis: [
      "Industrial assets in UAE free zones are frequently transacted off-market",
      "Free zone legal structures provide tax-efficient investment frameworks"
    ],
    marketContext: "Industrial assets in Jebel Ali (JAFZA), Hamriyah Free Zone and KIZAD are well-suited to off-market execution, reflecting the established investor networks and confidentiality preferences of these markets.",
    demandDrivers: [
      "Growing institutional demand for industrial exposure",
      "Free zone structures providing tax-efficient investment"
    ],
    riskFactors: [
      "Limited price discovery in off-market processes",
      "Due diligence windows may be compressed"
    ],
    competitiveAdvantages: [
      "Access to proprietary industrial deal flow",
      "Free zone structuring expertise"
    ],
    globalComparison: [
      { market: "Off-Market Industrial", comparison: "Industrial assets in UAE free zones offer higher yields and tax efficiency compared with publicly marketed assets." }
    ],
    institutionalRelevance: [
      "Access to proprietary industrial investment opportunities",
      "Potentially favourable pricing versus marketed assets"
    ],
    familyOfficePerspective: [
      "Confidential access to industrial investment opportunities",
      "Direct negotiation aligned with family office preferences"
    ],
    investorImplications: [
      "Register interest in industrial corridors and asset specifications",
      "Prepare institutional profile and mandate parameters",
      "Maintain confidentiality for off-market access"
    ],
    faqs: [
      { question: "What industrial corridors are available off-market?", answer: "Jebel Ali (JAFZA), Hamriyah Free Zone, KIZAD and other industrial zones across the UAE have active off-market transaction activity." },
      { question: "What is the typical size of off-market industrial opportunities?", answer: "Assets range from AED 10-200 million, with larger portfolios and institutional-grade assets most commonly transacted off-market." }
    ],
    relatedResearch: [
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "UAE Logistics Market Report", href: "/united-arab-emirates/research/uae-logistics-market-report" }
    ],
    relatedPages: [
      { label: "Off-Market", href: "/united-arab-emirates/off-market" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Jebel Ali", href: "/united-arab-emirates/dubai/jebel-ali" }
    ],
    ctaTitle: "Access Off-Market Industrial",
    ctaDescription: "Speak with Murivest about off-market industrial investment opportunities in the UAE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
