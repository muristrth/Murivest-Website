import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/contact",
    title: "Contact Murivest UAE — Institutional Commercial Real Estate Advisory",
    eyebrow: "Contact",
    description: "Contact Murivest's UAE team for institutional commercial real estate advisory, investment opportunities and research access.",
    summary: "Murivest works with sophisticated capital requiring confidentiality, mandate alignment and institutional advisory discipline. Contact our team to discuss UAE commercial real estate allocation.",
    schemaType: "WebPage",
    thesis: [
      "Advisory fit matters before transaction access",
      "Confidentiality supports institutional dialogue",
      "Mandate alignment improves execution quality"
    ],
    marketContext: "Murivest advises institutional investors, family offices and sovereign wealth funds on UAE commercial real estate investment. We provide research, market access, off-market opportunities and execution advisory.",
    demandDrivers: [
      "Investor qualification ensures mandate alignment",
      "Capital deployment timeline defines opportunity suitability",
      "Risk appetite determines strategy selection"
    ],
    riskFactors: [
      "Misaligned mandates reduce advisory effectiveness",
      "Incomplete documentation delays engagement"
    ],
    competitiveAdvantages: [
      "Discreet advisory process for institutional clients",
      "Research-led investment approach",
      "Access to off-market opportunities"
    ],
    globalComparison: [
      { market: "Broker inquiry", comparison: "Property focused. Murivest provides institutional advisory plus execution pathway." },
      { market: "Bank referral", comparison: "Product focused. Murivest provides independent, research-led advisory." }
    ],
    institutionalRelevance: [
      "Converts research readers into qualified conversations",
      "Connects investors to appropriate opportunities"
    ],
    familyOfficePerspective: [
      "Supports governance-led advisory conversations",
      "Allows private review of objectives before commitment"
    ],
    investorImplications: [
      "Prepare mandate parameters before contact",
      "Define target sectors, locations and investment size",
      "Discuss allocation timeline and risk parameters"
    ],
    faqs: [
      { question: "What information should I provide when contacting Murivest?", answer: "Your institutional profile, investment mandate (size, sectors, locations, risk appetite), target timeline and any specific requirements or preferences." },
      { question: "How does Murivest ensure confidentiality?", answer: "All enquiries are treated as confidential. NDAs can be executed before any opportunity details are shared." },
      { question: "What happens after I contact Murivest?", answer: "An initial consultation to understand your mandate, followed by relevant market intelligence, opportunity presentation and advisory engagement if appropriate." }
    ],
    relatedResearch: [
      { label: "How To Invest In UAE Real Estate", href: "/united-arab-emirates/investment-guides/how-to-invest-in-uae-real-estate" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "UAE Overview", href: "/united-arab-emirates" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Research", href: "/united-arab-emirates/research" },
      { label: "Off-Market", href: "/united-arab-emirates/off-market" }
    ],
    ctaTitle: "Speak With Murivest UAE",
    ctaDescription: "Contact our UAE advisory team to discuss commercial real estate investment opportunities."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
