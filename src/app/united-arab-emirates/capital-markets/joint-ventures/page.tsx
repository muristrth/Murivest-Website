import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/capital-markets/joint-ventures",
    title: "Joint Ventures — Partnering With Local Expertise For UAE CRE Investment",
    eyebrow: "Strategy",
    description: "Joint ventures enable institutional investors to combine capital with local developer expertise for UAE commercial real estate development and acquisition.",
    summary: "Joint ventures offer institutional investors a structured entry into UAE commercial real estate, combining international capital with local development and operational expertise. JV structures can be tailored for single-asset development, portfolio acquisition or ongoing operating platforms.",
    schemaType: "WebPage",
    thesis: [
      "JV structures enable capital to access opportunities requiring local market expertise",
      "Risk-sharing through JVs can improve risk-adjusted returns",
      "Partnership with established UAE developers provides pipeline access and execution capability"
    ],
    marketContext: "Joint ventures are a well-established capital deployment structure in UAE commercial real estate. International institutional investors typically partner with local developers or operators who provide land, development expertise, local market knowledge and operational capability.\n\nJV structures range from single-asset development partnerships to multi-asset platforms with ongoing development pipelines. The choice of structure depends on mandate requirements, risk appetite and desired level of operational involvement.",
    demandDrivers: [
      "International institutional capital seeking local partnership for market entry",
      "Developer capital requirements for large-scale projects",
      "Co-investment alongside sovereign wealth funds and pension funds",
      "Platform creation for ongoing development and acquisition pipeline"
    ],
    riskFactors: [
      "Partner selection is the critical success factor in JV structures",
      "Alignment of interests requires careful structuring of economics and governance",
      "Exit mechanisms must be clearly defined from inception"
    ],
    competitiveAdvantages: [
      "Access to proprietary development pipeline and off-market opportunities",
      "Local market expertise and operational capability",
      "Risk-sharing improves return profile for both capital and operating partners",
      "Flexible structuring across the risk-return spectrum"
    ],
    globalComparison: [
      { market: "Joint Venture", comparison: "JV structures are common in all major CRE markets. UAE offers the advantage of established JV frameworks, local developer sophistication and government support for foreign partnerships." }
    ],
    institutionalRelevance: [
      "Enables market entry for capital without local operating platform",
      "Access to proprietary development pipeline through partner relationships",
      "Structured risk-sharing aligned to mandate requirements"
    ],
    familyOfficePerspective: [
      "Flexible capital deployment with partner providing operational execution",
      "Governance structures can be tailored to family office requirements",
      "Access to development and value-add opportunities requiring local expertise"
    ],
    investorImplications: [
      "Conduct thorough partner due diligence including track record, balance sheet and alignment of interests",
      "Structure governance, economics and exit mechanisms upfront",
      "Consider single-asset JVs for entry before committing to platform structures"
    ],
    faqs: [
      { question: "What types of JV structures are common in UAE CRE?", answer: "Single-asset development JVs, multi-asset platform JVs, co-investment funds alongside developers, and operating partnership structures with profit-sharing arrangements." },
      { question: "How do I select a JV partner in the UAE?", answer: "Evaluate track record, delivery capability, balance sheet strength, alignment of interests and cultural fit. Murivest advises on partner selection and JV structuring." },
      { question: "What governance and exit provisions should JVs include?", answer: "Clear decision-making rights, tag-along/drag-along provisions, buy-sell mechanisms, IPO or sale exit paths, and dispute resolution procedures under DIFC or ADGM law." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Portfolio Sales", href: "/united-arab-emirates/capital-markets/portfolio-sales" },
      { label: "Development Sites", href: "/united-arab-emirates/capital-markets/development-sites" },
      { label: "Developers", href: "/united-arab-emirates/developers" }
    ],
    ctaTitle: "Discuss JV Structures",
    ctaDescription: "Speak with Murivest about joint venture structures for UAE commercial real estate investment."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
