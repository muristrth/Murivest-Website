import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/capital-markets/institutional-acquisitions",
    title: "Institutional Acquisitions — Direct Asset Acquisition For Sophisticated Capital",
    eyebrow: "Strategy",
    description: "Murivest provides institutional acquisition advisory for direct asset purchase in UAE commercial real estate markets.",
    summary: "Institutional acquisition advisory is the core of Murivest's Capital Markets practice. We represent institutional capital in direct asset acquisition across all UAE commercial sectors, providing sourcing, due diligence, structuring and execution support.",
    schemaType: "WebPage",
    thesis: [
      "Direct acquisition provides full control over asset selection and management",
      "Institutional advisory improves execution quality through market access and due diligence",
      "Active asset management post-acquisition can enhance returns"
    ],
    marketContext: "Direct asset acquisition remains the primary route for institutional capital entering UAE commercial real estate. Murivest represents institutional investors in sourcing, underwriting, structuring and executing direct acquisitions across all commercial sectors.\n\nOur advisory covers the full acquisition lifecycle: mandate definition, market analysis, asset sourcing (including off-market), financial underwriting, legal and technical due diligence coordination, transaction structuring, negotiation and completion.",
    demandDrivers: [
      "Institutional capital seeking direct UAE CRE exposure",
      "Portfolio rebalancing and allocation increases to Middle East markets",
      "Family office direct investment into commercial real estate",
      "Sovereign wealth fund direct acquisition strategies"
    ],
    riskFactors: [
      "Execution risk in competitive acquisition processes",
      "Due diligence gaps can lead to post-completion issues",
      "Currency and regulatory considerations for cross-border capital"
    ],
    competitiveAdvantages: [
      "Full control over asset selection and investment timing",
      "Direct relationship with asset and tenant base",
      "Flexibility to hold, manage or dispose at optimal timing",
      "No fund-level fees or structural complexity"
    ],
    globalComparison: [
      { market: "Direct Acquisition", comparison: "Standard route for institutional capital entry into new markets. UAE offers transparent processes and no additional costs for foreign capital." }
    ],
    institutionalRelevance: [
      "Primary route for institutional capital deployment into UAE CRE",
      "Full control over investment decision and asset management",
      "Transparent cost structure with no intermediary fees"
    ],
    familyOfficePerspective: [
      "Direct ownership providing full control and flexibility",
      "Asset-level transparency for governance and reporting",
      "Ability to optimise holding period and exit timing"
    ],
    investorImplications: [
      "Define mandate parameters clearly before beginning acquisition process",
      "Engage local advisory for market access and due diligence",
      "Plan exit strategy alongside acquisition underwriting"
    ],
    faqs: [
      { question: "What does Murivest's acquisition advisory cover?", answer: "Mandate definition, market and asset sourcing, financial underwriting and modelling, due diligence coordination, transaction structuring, negotiation and completion support." },
      { question: "How does Murivest source off-market opportunities?", answer: "Through our institutional relationships with developers, family offices, corporate owners and sovereign wealth entities across the UAE." },
      { question: "What is the typical timeline for an institutional acquisition?", answer: "3-6 months from mandate to completion for a single-asset acquisition, depending on complexity and due diligence requirements." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" }
    ],
    relatedPages: [
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Portfolio Sales", href: "/united-arab-emirates/capital-markets/portfolio-sales" },
      { label: "Joint Ventures", href: "/united-arab-emirates/capital-markets/joint-ventures" },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" }
    ],
    ctaTitle: "Discuss Acquisition Advisory",
    ctaDescription: "Speak with Murivest about institutional acquisition advisory for UAE commercial real estate investment."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
