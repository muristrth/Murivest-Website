import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/capital-markets/portfolio-sales",
    title: "Portfolio Sales — Scale Acquisition For Institutional Capital Deployment",
    eyebrow: "Strategy",
    description: "Portfolio sales enable institutional investors to deploy capital at scale across multiple assets, achieving diversification and operational efficiencies.",
    summary: "Portfolio sales offer institutional investors the most efficient route to large-scale UAE commercial real estate exposure. Multi-asset portfolios provide immediate diversification across sectors, districts and tenant bases while enabling operational efficiencies through scale.",
    schemaType: "WebPage",
    thesis: [
      "Portfolio acquisitions enable rapid capital deployment at institutional scale",
      "Diversification across assets, sectors and tenants reduces single-asset concentration risk",
      "Scale provides operational efficiencies in asset management and cost optimisation"
    ],
    marketContext: "Portfolio transactions represent the most significant capital deployment channel in UAE CRE. Institutional investors seeking swift exposure to the UAE market increasingly acquire multi-asset portfolios from developers, family offices and corporate owners. These transactions range from 3-5 asset packages to portfolios of 20+ properties.\n\nPortfolio sales suit mandates with significant capital to deploy and a preference for immediate diversification rather than single-asset-by-single-asset accumulation.",
    demandDrivers: [
      "Institutional mandates requiring large-scale, rapid capital deployment",
      "Developer portfolio rationalisation and capital recycling",
      "Family office and corporate owner liquidity events",
      "REIT formation and listed vehicle creation driving portfolio assembly"
    ],
    riskFactors: [
      "Portfolio due diligence is more complex and resource-intensive than single assets",
      "Cross-collateralisation can limit disposal flexibility",
      "Asset quality within portfolios can be variable requiring selective underwriting"
    ],
    competitiveAdvantages: [
      "Immediate diversification across multiple assets and sectors",
      "Operational efficiencies through scale",
      "Pricing advantages through portfolio premium or discount dynamics",
      "Accelerated deployment timeline versus single-asset acquisition strategy"
    ],
    globalComparison: [
      { market: "Portfolio Sale", comparison: "Comparable to portfolio transactions in all major CRE markets, but UAE offers the advantage of diversified assets within a single tax-efficient jurisdiction." }
    ],
    institutionalRelevance: [
      "Most efficient route to large-scale UAE CRE exposure",
      "Enables mandate deployment within target timeline",
      "Provides immediate diversification that single-asset accumulation cannot match"
    ],
    familyOfficePerspective: [
      "Efficient capital deployment for larger family office mandates",
      "Diversification reduces single-asset downside risk",
      "Potential for pricing advantages through portfolio negotiation"
    ],
    investorImplications: [
      "Focus on portfolio composition, asset quality and disposal flexibility in underwriting",
      "Consider portfolio rationalisation strategy post-acquisition",
      "Evaluate management and operational structure for portfolio oversight"
    ],
    faqs: [
      { question: "What types of portfolios are available in the UAE?", answer: "Multi-asset office portfolios in Dubai, industrial portfolios in Jebel Ali and KIZAD, mixed-use portfolios in master-planned communities, and hospitality portfolios across UAE tourism destinations." },
      { question: "What is the typical size of a portfolio transaction?", answer: "Portfolio transactions range from $50 million to $500 million+. The market regularly sees significant portfolio trades from developers and sovereign entities." },
      { question: "How does portfolio due diligence differ from single-asset?", answer: "Portfolio due diligence requires assessment of each asset's individual merits plus portfolio-level analysis of diversification, cross-collateralisation and operational synergies." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
      { label: "Joint Ventures", href: "/united-arab-emirates/capital-markets/joint-ventures" },
      { label: "Institutional Acquisitions", href: "/united-arab-emirates/capital-markets/institutional-acquisitions" }
    ],
    ctaTitle: "Discuss Portfolio Acquisition",
    ctaDescription: "Speak with Murivest about portfolio acquisition opportunities and large-scale capital deployment in UAE CRE."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
