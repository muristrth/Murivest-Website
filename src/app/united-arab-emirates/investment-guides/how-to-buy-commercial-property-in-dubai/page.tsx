import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/investment-guides/how-to-buy-commercial-property-in-dubai",
    title: "How To Buy Commercial Property In Dubai — A Step-By-Step Institutional Guide",
    eyebrow: "Investment Guide",
    description: "Practical step-by-step guide for institutional investors acquiring commercial property in Dubai, from search to completion.",
    summary: "This guide takes institutional investors through the process of acquiring commercial property in Dubai, from mandate definition and property search through due diligence, negotiation and completion.",
    schemaType: "WebPage",
    thesis: [
      "Dubai's property acquisition process is transparent but has market-specific practices",
      "Professional advisory improves execution quality and reduces risk",
      "Understanding local practices is essential for successful completion"
    ],
    marketContext: "The Dubai commercial property acquisition process is well-established but differs from other global markets. This guide provides practical knowledge of each stage, from property search through legal due diligence to registration and completion.",
    demandDrivers: [
      "Growing institutional acquisition activity in Dubai",
      "Need for practical transaction knowledge"
    ],
    riskFactors: [
      "This is an educational guide and should not substitute for professional advice"
    ],
    competitiveAdvantages: [
      "Step-by-step guidance based on transaction experience",
      "Practical knowledge of Dubai-specific requirements"
    ],
    globalComparison: [
      { market: "Dubai", comparison: "Dubai's acquisition process is more straightforward than many developed markets, with no income tax, capital gains tax or stamp duty, and a centralised property registration system." }
    ],
    institutionalRelevance: [
      "Reduces transaction execution risk",
      "Supports efficient acquisition process"
    ],
    familyOfficePerspective: [
      "Practical guidance for first-time Dubai property acquisition",
      "Understanding of local processes and requirements"
    ],
    investorImplications: [
      "Engage local advisory for transaction execution",
      "Plan for 3-6 month acquisition timeline",
      "Budget for 4% transfer fee plus legal and advisory costs (typically 1-2% of purchase price)"
    ],
    faqs: [
      { question: "What is the acquisition process for Dubai CRE?", answer: "Mandate definition, property search and identification, due diligence (legal, technical, financial), negotiation, sale agreement (MOU), transfer to Dubai Land Department, payment and registration." },
      { question: "What due diligence is required?", answer: "Legal due diligence (title deed, building completion certificate, NOCs from master developer and service provider), technical due diligence (building condition, EIA, MEP systems) and financial due diligence (tenant leases, service charge accounts, income verification)." },
      { question: "What costs are involved in acquiring Dubai CRE?", answer: "Purchase price, 4% Dubai Land Department transfer fee, 2% agent commission (typical), legal fees (0.5-1%), and VAT at 5% on fees." }
    ],
    relatedResearch: [
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Investment Guides", href: "/united-arab-emirates/investment-guides" },
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" }
    ],
    ctaTitle: "Discuss Dubai Acquisition",
    ctaDescription: "Speak with Murivest about commercial property acquisition in Dubai."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
