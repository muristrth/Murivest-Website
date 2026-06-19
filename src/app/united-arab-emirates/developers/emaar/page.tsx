import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/developers/emaar",
    title: "Emaar — The UAE's Largest Listed Developer With Premier Master-Planned Communities",
    eyebrow: "Developer",
    description: "Emaar Properties is the UAE's largest listed real estate developer, with iconic projects including Burj Khalifa, Dubai Mall and master-planned communities.",
    summary: "Emaar Properties (DFM: EMAAR) is the UAE's largest listed real estate developer with a market capitalisation exceeding AED 60 billion. The company is responsible for some of Dubai's most iconic developments including Burj Khalifa, Dubai Mall, Dubai Marina, Emirates Living and Dubai Creek Harbour.",
    schemaType: "WebPage",
    thesis: [
      "Emaar's track record as the developer of Burj Khalifa and Dubai Mall demonstrates world-class delivery capability",
      "Listed company structure provides financial transparency and governance standards",
      "Extensive land bank in prime Dubai locations provides long-term development pipeline"
    ],
    marketContext: "Emaar Properties is the largest publicly listed real estate developer in the UAE and one of the most recognised globally. The company has delivered over 87,000 residential units and has a significant commercial portfolio including Dubai Mall (one of the world's largest shopping centres) and multiple Grade A office buildings.\n\nFor institutional investors, Emaar is a key counterparty for development JVs, forward purchase agreements and off-plan acquisitions of commercial assets.",
    demandDrivers: [
      "Continued demand for Emaar-developed commercial space in master-planned communities",
      "Tourism spending at Dubai Mall and Emaar Hospitality assets",
      "Development pipeline in Dubai Creek Harbour and other master-planned communities"
    ],
    riskFactors: [
      "Development cycle exposure — earnings correlate with Dubai property market cycles",
      "Significant residential exposure increases cyclicality",
      "Large land bank requires significant ongoing capital commitment"
    ],
    competitiveAdvantages: [
      "Unmatched track record in large-scale master-planned community development",
      "Strong balance sheet with investment-grade credit profile",
      "Vertically integrated model including construction, hospitality and malls management"
    ],
    globalComparison: [
      { market: "Emaar", comparison: "Comparable to major global developers (Lendlease, China Vanke) in scale and capability, with strong emerging market growth dynamics." }
    ],
    institutionalRelevance: [
      "Key counterparty for development and JV partnerships",
      "Pipeline of institutional-grade commercial assets",
      "Financial transparency through listed company reporting"
    ],
    familyOfficePerspective: [
      "Established counterparty reducing execution risk",
      "Access to prime development pipeline through JV structures",
      "Transparent financial reporting for due diligence"
    ],
    investorImplications: [
      "Consider Emaar as a primary development partner for Dubai projects",
      "Evaluate specific project economics independently of developer brand",
      "Use forward purchase and JV structures for access to prime pipeline"
    ],
    faqs: [
      { question: "What commercial assets has Emaar developed?", answer: "Dubai Mall (world's largest shopping centre), Dubai Marina, Downtown Dubai offices, Emaar Business Park and multiple mixed-use communities with commercial components." },
      { question: "Is Emaar a listed company?", answer: "Yes, Emaar Properties is listed on the Dubai Financial Market (DFM) with institutional-grade corporate governance and financial reporting standards." },
      { question: "What is Emaar's track record on project delivery?", answer: "Emaar has delivered consistently on its development pipeline, with a strong track record of project completion and quality. The company has delivered over 87,000 residential units." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Developers", href: "/united-arab-emirates/developers" },
      { label: "Aldar", href: "/united-arab-emirates/developers/aldar" },
      { label: "Damac", href: "/united-arab-emirates/developers/damac" },
      { label: "Downtown Dubai", href: "/united-arab-emirates/dubai/downtown-dubai" }
    ],
    ctaTitle: "Discuss Emaar Partnership",
    ctaDescription: "Speak with Murivest about development and JV opportunities with Emaar Properties."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
