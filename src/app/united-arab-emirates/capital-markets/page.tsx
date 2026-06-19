import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/capital-markets",
    title: "Capital Markets — Institutional Transaction Execution In UAE Commercial Real Estate",
    eyebrow: "Capital Markets",
    description: "Murivest's Capital Markets practice provides institutional investors with transaction execution across portfolio sales, joint ventures, development sites, sale leasebacks and institutional acquisitions.",
    summary: "Institutional capital deployment in UAE commercial real estate requires more than market knowledge. Strategy selection determines control, yield, risk, hold period and exit route. Murivest advises across the full spectrum of capital markets transaction types, from portfolio disposals to joint venture partnerships.",
    schemaType: "WebPage",
    thesis: [
      "Transaction structure is as important as asset selection in determining investment returns",
      "Multiple deployment strategies allow capital to access UAE CRE across the risk-return spectrum",
      "Off-market access and institutional relationships improve execution quality and pricing"
    ],
    marketContext: "Institutional capital rarely enters a market through a single transaction type. The choice between direct acquisition, joint venture, development partnership or portfolio purchase determines control, yield, risk, hold period and exit route.\n\nMurivest's Capital Markets practice advises across the full spectrum, from single-asset acquisitions to portfolio transactions, development site assembly and structured sale leasebacks. Our institutional relationships provide access to off-market opportunities and proprietary deal flow.",
    demandDrivers: [
      "Owner liquidity events creating portfolio disposal opportunities",
      "Developer capital needs driving joint venture and partnership structures",
      "Corporate balance sheet optimisation through sale leaseback transactions",
      "Institutional mandate demand across core, value-add and opportunistic strategies"
    ],
    riskFactors: [
      "Execution complexity varies significantly by transaction structure",
      "Leverage sensitivity in rising rate environments",
      "Counterparty risk requires thorough due diligence"
    ],
    competitiveAdvantages: [
      "Flexible deployment across the full capital markets spectrum",
      "Multiple return pathways for different mandate requirements",
      "Institutional structuring capability with local market expertise",
      "Access to off-market and proprietary transaction flow"
    ],
    globalComparison: [
      { market: "Direct Acquisition", comparison: "Full control and simplicity but concentrated risk. Suitable for core mandates with established market knowledge." },
      { market: "Joint Venture", comparison: "Shared risk with local expertise. Suitable for investors entering new markets or sectors." },
      { market: "Portfolio Sale", comparison: "Scale acquisition with diversification. Suitable for large mandates seeking immediate exposure." },
      { market: "Sale Leaseback", comparison: "Corporate-backed income with long-term security. Suitable for income-focused mandates." }
    ],
    institutionalRelevance: [
      "Translates market analysis into executable transactions",
      "Supports mandate-specific capital deployment strategies",
      "Connects institutional research to transaction execution"
    ],
    familyOfficePerspective: [
      "Flexibility to match transaction structure to governance requirements",
      "Supports long-hold or structured exit planning as needs evolve",
      "Access to proprietary deal flow through institutional relationships"
    ],
    investorImplications: [
      "Choose transaction structure based on mandate requirements and risk appetite",
      "Underwrite counterparty quality and legal structure before commitment",
      "Pair transaction strategy with asset-class and market research"
    ],
    faqs: [
      { question: "What capital markets services does Murivest provide?", answer: "Portfolio sales, joint venture structuring, development site assembly and disposition, sale leaseback advisory and institutional acquisition representation." },
      { question: "How does Murivest access off-market opportunities?", answer: "Through long-standing relationships with developers, family offices, sovereign wealth funds and corporate real estate owners across the UAE." },
      { question: "What transaction sizes does Murivest advise on?", answer: "We advise on transactions from $10 million single-asset acquisitions to $500 million+ portfolio transactions and joint ventures." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Portfolio Sales", href: "/united-arab-emirates/capital-markets/portfolio-sales" },
      { label: "Joint Ventures", href: "/united-arab-emirates/capital-markets/joint-ventures" },
      { label: "Development Sites", href: "/united-arab-emirates/capital-markets/development-sites" },
      { label: "Sale Leaseback", href: "/united-arab-emirates/capital-markets/sale-leaseback" },
      { label: "Institutional Acquisitions", href: "/united-arab-emirates/capital-markets/institutional-acquisitions" }
    ],
    ctaTitle: "Discuss Capital Markets Strategy",
    ctaDescription: "Speak with Murivest about capital markets execution strategy for UAE commercial real estate investment."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
