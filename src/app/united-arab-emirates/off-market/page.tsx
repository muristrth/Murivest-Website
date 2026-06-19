import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/off-market",
    title: "Off-Market CRE — Proprietary Investment Opportunities For Qualified Investors",
    eyebrow: "Off-Market",
    description: "Murivest's off-market commercial real estate opportunities, available exclusively to qualified institutional investors.",
    summary: "Off-market opportunities represent a significant portion of UAE commercial real estate transactions. Murivest's institutional relationships provide access to proprietary off-market listings across office, industrial, logistics and land assets.",
    schemaType: "WebPage",
    thesis: [
      "Off-market transactions often offer more favourable pricing than publicly marketed assets",
      "Institutional relationships are the primary source of off-market deal flow",
      "Confidentiality requirements mean opportunities are shared only with qualified investors"
    ],
    marketContext: "A significant portion of UAE commercial real estate transactions occur off-market, driven by owner preferences for confidentiality, speed and certainty of execution. Murivest's institutional relationships across developer, corporate and family office networks provide access to proprietary off-market opportunities.\n\nOff-market assets span all major commercial sectors, including office, industrial, logistics and land, across all UAE emirates.",
    demandDrivers: [
      "Owner preference for confidential sale processes",
      "Institutional investor demand for proprietary deal flow",
      "Speed and certainty advantages of off-market execution"
    ],
    riskFactors: [
      "Off-market assets have limited price discovery",
      "Due diligence windows can be compressed"
    ],
    competitiveAdvantages: [
      "Proprietary access through institutional relationships",
      "Early viewing before public marketing",
      "Direct principal-to-principal negotiations"
    ],
    globalComparison: [
      { market: "Off-Market", comparison: "Off-market transactions are common in all major CRE markets. UAE market has a particularly high proportion of off-market transactions due to privacy preferences." }
    ],
    institutionalRelevance: [
      "Access to proprietary investment opportunities",
      "Potentially more favourable pricing than marketed assets",
      "Confidential execution aligned with institutional preferences"
    ],
    familyOfficePerspective: [
      "Confidential access to proprietary opportunities",
      "Principal-to-principal negotiation aligned with family office preferences"
    ],
    investorImplications: [
      "Register interest in specific sectors and locations",
      "Prepare institutional profile, mandate parameters and proof of funds",
      "Maintain confidentiality requirements for off-market access"
    ],
    faqs: [
      { question: "How do I access off-market opportunities?", answer: "Contact Murivest with your investment mandate, target sectors and location preferences. We share qualifying opportunities with verified institutional investors." },
      { question: "Are off-market assets cheaper than marketed assets?", answer: "Off-market assets can offer pricing advantages due to reduced competition, but this varies by market conditions and owner motivation." },
      { question: "What is the typical process for off-market acquisitions?", answer: "Expression of interest, NDA execution, opportunity presentation, indicative offer, exclusive negotiation, due diligence and completion." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Office Assets", href: "/united-arab-emirates/off-market/office-assets" },
      { label: "Industrial Assets", href: "/united-arab-emirates/off-market/industrial-assets" },
      { label: "Logistics Assets", href: "/united-arab-emirates/off-market/logistics-assets" },
      { label: "Land Opportunities", href: "/united-arab-emirates/off-market/land-opportunities" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Access Off-Market Opportunities",
    ctaDescription: "Speak with Murivest about accessing proprietary off-market CRE opportunities in the UAE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
