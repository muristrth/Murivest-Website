import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/uae-logistics-market-report",
    title: "UAE Logistics Market Report — E-Commerce, Trade And Supply Chain Real Estate",
    eyebrow: "Research",
    description: "Analysis of the UAE logistics real estate market, covering e-commerce growth, trade corridor dynamics and supply chain regionalisation.",
    summary: "The UAE logistics market offers the strongest structural growth story in UAE commercial real estate. This report analyses the key demand drivers — e-commerce penetration, trade corridor expansion and supply chain regionalisation — and their implications for logistics real estate investment.",
    schemaType: "WebPage",
    thesis: [
      "E-commerce penetration in the UAE (5-7% of retail) has significant growth runway to developed market levels (15-20%)",
      "Trade corridor investment through Jebel Ali Port and Al Maktoum International Airport supports sustained logistics demand",
      "Supply chain regionalisation is creating structural demand for UAE distribution facilities"
    ],
    marketContext: "This report provides institutional investors with comprehensive analysis of the UAE logistics market, including e-commerce growth trends, trade corridor dynamics, supply chain regionalisation, occupier demand analysis and investment metrics.",
    demandDrivers: [
      "E-commerce growth and penetration catch-up to developed markets",
      "Trade corridor expansion through port and airport investment",
      "Supply chain regionalisation and nearshoring trends",
      "Cold chain logistics demand from food and pharmaceutical sectors"
    ],
    riskFactors: [
      "Logistics assets require specialist management and operator relationships",
      "Technology disruption could change facility requirements",
      "Economic downturn impacts goods movement and logistics demand"
    ],
    competitiveAdvantages: [
      "Specialist logistics market analysis",
      "E-commerce penetration and growth projection data",
      "Trade corridor and infrastructure analysis"
    ],
    globalComparison: [
      { market: "UAE Logistics", comparison: "UAE logistics yields of 7-9% compare favourably with developed market logistics yields of 4-5%, with superior growth from e-commerce penetration catch-up." }
    ],
    institutionalRelevance: [
      "Data foundation for logistics sector allocation",
      "Understanding of structural demand drivers supporting long-term investment",
      "Market context for asset selection and underwriting"
    ],
    familyOfficePerspective: [
      "Growth sector analysis for forward-looking portfolio allocation",
      "Understanding of e-commerce and trade trends driving logistics demand",
      "Market intelligence for logistics asset acquisition"
    ],
    investorImplications: [
      "Consider logistics as the highest-growth CRE sector in UAE",
      "Focus on modern, well-located assets with strong transport connectivity",
      "Evaluate e-commerce penetration trajectory in long-term underwriting"
    ],
    faqs: [
      { question: "What is the growth outlook for UAE logistics?", answer: "Strong growth driven by e-commerce penetration catch-up, trade corridor expansion and supply chain regionalisation. The sector has the most favourable demand/supply dynamics in UAE CRE." },
      { question: "What types of logistics assets are in highest demand?", answer: "Grade A warehouses with modern specifications, last-mile distribution facilities in urban locations, and cold chain logistics assets." },
      { question: "How does e-commerce growth affect logistics real estate?", answer: "E-commerce requires 3x more logistics space than traditional retail per dollar of sales, creating significant additional demand for warehouse and distribution facilities." }
    ],
    relatedResearch: [
      { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Logistics", href: "/united-arab-emirates/asset-classes/logistics" },
      { label: "Industrial", href: "/united-arab-emirates/asset-classes/industrial" },
      { label: "Jebel Ali", href: "/united-arab-emirates/dubai/jebel-ali" },
      { label: "Off-Market Logistics", href: "/united-arab-emirates/off-market/logistics-assets" }
    ],
    ctaTitle: "Access Logistics Market Report",
    ctaDescription: "Speak with Murivest about accessing the full UAE Logistics Market Report."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
