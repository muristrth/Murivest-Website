import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/developers/aldar",
    title: "Aldar — Abu Dhabi's Sovereign-Backed Master Developer",
    eyebrow: "Developer",
    description: "Aldar Properties is Abu Dhabi's premier listed developer, backed by sovereign ownership and responsible for master-planned communities including Yas Island and Saadiyat Island.",
    summary: "Aldar Properties (ADX: ALDAR) is Abu Dhabi's leading real estate developer and investment company, with the Abu Dhabi Investment Authority (ADIA) as a significant shareholder. Aldar is responsible for master-planning and developing Abu Dhabi's most significant communities including Yas Island, Saadiyat Island and Al Maryah Island.",
    schemaType: "WebPage",
    thesis: [
      "Sovereign backing through ADIA and government relationships provides financial strength",
      "Master developer role in Abu Dhabi's most significant new communities provides privileged pipeline access",
      "Listed structure provides financial transparency and corporate governance standards"
    ],
    marketContext: "Aldar is the leading developer in Abu Dhabi with a unique position as the master developer for the emirate's most significant new communities. The company's sovereign backing and government relationships provide privileged access to strategic development opportunities.\n\nFor institutional investors, Aldar is the primary counterparty for Abu Dhabi CRE investment, offering development JV opportunities, asset acquisition from its investment portfolio and forward purchase structures.",
    demandDrivers: [
      "Abu Dhabi's economic diversification driving demand for new commercial space",
      "Yas Island and Saadiyat Island development creating new investment opportunities",
      "Aldar's investment portfolio providing acquisition opportunities"
    ],
    riskFactors: [
      "Abu Dhabi market concentration risk",
      "Government-related entity dependency",
      "Large development pipeline requires significant capital"
    ],
    competitiveAdvantages: [
      "Sovereign-backed financial strength requiring no external debt for many projects",
      "Master developer status for Abu Dhabi's most significant new communities",
      "Vertically integrated model including investment portfolio (AED 40B+), asset management and development"
    ],
    globalComparison: [
      { market: "Aldar", comparison: "Comparable to sovereign-backed developers globally (CapitaLand, Meraas) with the advantage of Abu Dhabi's government relationship and capital access." }
    ],
    institutionalRelevance: [
      "Primary counterparty for Abu Dhabi CRE investment",
      "Access to institutional-quality commercial assets from investment portfolio",
      "Development JV opportunities in government-backed master-planned communities"
    ],
    familyOfficePerspective: [
      "Sovereign-backed counterparty minimising execution risk",
      "Access to Abu Dhabi's prime development pipeline",
      "Established track record of institutional partnerships"
    ],
    investorImplications: [
      "Consider Aldar as the primary development partner for Abu Dhabi CRE investment",
      "Evaluate investment portfolio assets for direct acquisition",
      "Use JV structures for access to development pipeline"
    ],
    faqs: [
      { question: "Who owns Aldar Properties?", answer: "Aldar is a publicly listed company on the Abu Dhabi Securities Exchange (ADX) with the Abu Dhabi Investment Authority (ADIA) as a significant shareholder, providing sovereign backing." },
      { question: "What are Aldar's major developments?", answer: "Yas Island (entertainment and leisure district), Saadiyat Island (cultural district), Al Maryah Island (ADGM financial district) and multiple residential communities." },
      { question: "Does Aldar have an investment portfolio?", answer: "Yes, Aldar has a significant investment property portfolio valued at over AED 40 billion, including office, retail and hospitality assets." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Developers", href: "/united-arab-emirates/developers" },
      { label: "Emaar", href: "/united-arab-emirates/developers/emaar" },
      { label: "Yas Island", href: "/united-arab-emirates/abu-dhabi/yas-island" },
      { label: "Saadiyat Island", href: "/united-arab-emirates/abu-dhabi/saadiyat-island" }
    ],
    ctaTitle: "Discuss Aldar Partnership",
    ctaDescription: "Speak with Murivest about investment and partnership opportunities with Aldar Properties."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
