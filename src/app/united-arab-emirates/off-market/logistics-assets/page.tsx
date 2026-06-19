import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/off-market/logistics-assets",
    title: "Off-Market Logistics Assets — Proprietary UAE Logistics Investment Opportunities",
    eyebrow: "Off-Market",
    description: "Off-market logistics investment opportunities in the UAE's highest-growth CRE sector.",
    summary: "Murivest provides access to off-market logistics assets across UAE logistics corridors. These proprietary opportunities include Grade A warehouses, distribution centres and cold chain facilities.",
    schemaType: "WebPage",
    thesis: [
      "Logistics is the highest-growth CRE sector and off-market access is highly competitive",
      "Modern logistics facilities with strong operator relationships offer compelling investment characteristics"
    ],
    marketContext: "Logistics assets in Jebel Ali, Dubai South and KIZAD are in high demand from institutional investors, making off-market access particularly valuable. Proprietary relationships with logistics operators and developers provide exclusive deal flow.",
    demandDrivers: [
      "Strongest institutional demand growth of any UAE CRE sector",
      "Limited supply of modern logistics facilities"
    ],
    riskFactors: [
      "Limited price discovery in off-market processes",
      "Due diligence windows may be compressed",
      "Logistics assets require specialised management capability"
    ],
    competitiveAdvantages: [
      "Proprietary access to highest-growth sector",
      "Early viewing through operator and developer relationships"
    ],
    globalComparison: [
      { market: "Off-Market Logistics", comparison: "Logistics is the highest-demand sector, making off-market access particularly valuable. UAE offers superior growth dynamics versus developed markets." }
    ],
    institutionalRelevance: [
      "Access to highest-growth CRE sector through proprietary channels",
      "Early viewing and negotiation advantages",
      "Potentially favourable pricing versus competitive marketed processes"
    ],
    familyOfficePerspective: [
      "Confidential access to prized logistics investment opportunities",
      "Growth-oriented allocation within diversified portfolio",
      "Direct negotiation aligned with family office preferences"
    ],
    investorImplications: [
      "Register interest with target submarkets and facility specifications",
      "Prepare institutional profile and mandate parameters",
      "Maintain confidentiality for off-market access"
    ],
    faqs: [
      { question: "What logistics submarkets are active off-market?", answer: "Jebel Ali, Dubai South, KIZAD and emerging logistics corridors near Al Maktoum International Airport are the most active off-market logistics markets." },
      { question: "What types of logistics assets are available?", answer: "Grade A warehouses, cold chain facilities, last-mile distribution centres and large-scale logistics parks. Modern assets with strong operator relationships are most sought after." }
    ],
    relatedResearch: [
      { label: "UAE Logistics Market Report", href: "/united-arab-emirates/research/uae-logistics-market-report" },
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" }
    ],
    relatedPages: [
      { label: "Off-Market", href: "/united-arab-emirates/off-market" },
      { label: "Logistics", href: "/united-arab-emirates/asset-classes/logistics" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" }
    ],
    ctaTitle: "Access Off-Market Logistics",
    ctaDescription: "Speak with Murivest about off-market logistics investment opportunities in the UAE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
