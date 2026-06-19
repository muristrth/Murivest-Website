import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import { UaeCityCards } from '@/app/united-arab-emirates/_components/UaeCityCards';
import type { UaePageConfig } from './_components/uae-pages-types';
import { UaeVideoSection } from '@/app/united-arab-emirates/_components/UaeVideoSection';

const pageConfig: UaePageConfig = {
  slug: "united-arab-emirates",
  title: "UAE Commercial Real Estate — The Institutional Gateway To The Middle East",
  eyebrow: "Market Overview",
  description: "The United Arab Emirates has established itself as the pre-eminent commercial real estate market in the Middle East and a top-tier global allocation destination for institutional capital, family offices and sovereign wealth funds.",
  summary: "For sophisticated capital seeking jurisdiction diversification, currency stability, tax efficiency and world-class infrastructure, the UAE presents one of the most compelling commercial real estate investment environments globally. The convergence of sovereign wealth capital, pro-business regulation, physical infrastructure and geographic positioning creates a unique institutional value proposition.",
  schemaType: "WebPage",
  thesis: [
    "The UAE functions as a capital bridge between East and West, offering institutional investors access to high-growth markets with developed-market legal frameworks",
    "Sovereign wealth fund participation (ADIA, Mubadala, ICD) creates a floor under asset values and signals long-term government commitment to real estate as an asset class",
    "Tax-free income, full foreign ownership, no capital gains tax and a common-law legal system make the UAE structurally advantaged versus regional and global peers"
  ],
  marketContext: "The UAE commercial real estate market has undergone a structural transformation over the past decade. What was once perceived as a speculative, development-led market has matured into an institutional-quality investment destination underpinned by sovereign balance sheets, regulatory reform and sophisticated capital market infrastructure.\n\nThe Dubai International Financial Centre (DIFC) provides a common-law framework recognised by global investors. The UAE's stable currency peg to the US dollar eliminates FX risk for USD-based allocators. The introduction of long-term visas, full foreign ownership of commercial assets and transparent property registration have addressed historical concerns around investor protection and capital mobility.\n\nThe UAE sits at the intersection of three continents, serving a population of 4.5 billion within an eight-hour flight radius. Its position as a global trade, tourism, finance and logistics hub creates diversified demand across all commercial real estate sectors.",
  demandDrivers: [
    "Global capital migration to safe-haven jurisdictions with tax efficiency",
    "Population growth driven by inward migration of skilled professionals and wealth",
    "Government-led economic diversification away from hydrocarbons",
    "Expansion of financial services, technology, trade and logistics sectors"
  ],
  riskFactors: [
    "Cyclical oversupply risk in specific submarkets during development booms",
    "Geopolitical regional volatility that can impact capital flows",
    "Interest rate sensitivity given the USD peg and global rate environment"
  ],
  competitiveAdvantages: [
    "US dollar-pegged currency eliminates FX risk for international allocators",
    "Common-law legal framework through DIFC and ADGM courts",
    "Tax-free income on property ownership and capital gains",
    "World-class physical and digital infrastructure"
  ],
  globalComparison: [
    { market: "London", comparison: "Mature, deep liquidity but high stamp duty, 2-5% yield compression and post-Brexit regulatory uncertainty. UAE offers higher net yields with zero income tax." },
    { market: "Singapore", comparison: "Comparable regulatory quality but limited land supply, ABSD cooling measures and lower yields. UAE provides more scale and sector breadth." },
    { market: "New York", comparison: "Largest CRE market globally but property taxes, insurance and operating costs erode net returns. UAE has lower cost base and superior tax treatment." },
    { market: "Saudi Arabia", comparison: "Vision 2030 is driving massive demand but the market lacks the UAE's established legal infrastructure, capital market depth and international talent pool." }
  ],
  institutionalRelevance: [
    "Provides portfolio diversification across geography, currency and economic cycle",
    "Supports capital preservation through sovereign-backed market stability",
    "Enables allocation to high-growth sectors within a tax-efficient structure"
  ],
  familyOfficePerspective: [
    "Jurisdictional diversification with political and economic stability",
    "Multi-generational wealth preservation through freehold ownership and inheritance protections",
    "Currency diversification via USD-pegged asset base"
  ],
  investorImplications: [
    "Evaluate emirate-specific allocation based on mandate duration and risk appetite",
    "Consider sector exposure through the lens of structural demand drivers",
    "Pair market analysis with district-level underwriting for precision"
  ],
  faqs: [
    { question: "What makes the UAE unique for institutional commercial real estate investment?", answer: "The UAE combines developed-market legal infrastructure, USD-pegged currency stability, zero tax on income and capital gains, and sovereign wealth fund co-investment. No other market offers this combination of attributes at scale." },
    { question: "What are the primary risks for institutional investors in UAE CRE?", answer: "Key risks include cyclical oversupply in development-led submarkets, regional geopolitical volatility, and interest rate sensitivity given the USD peg. Murivest mitigates these through rigorous supply analysis, counterparty diligence and exit route planning." },
    { question: "How does UAE CRE compare with other global markets for family offices?", answer: "The UAE offers superior net yields after tax, lower operating costs, stronger population growth dynamics and government-backed infrastructure investment compared with mature markets like London, Singapore or New York." },
    { question: "When should an investor engage Murivest for UAE CRE allocation?", answer: "Engage Murivest once your mandate size, target sectors, preferred hold period and risk parameters are defined. We provide research, market access, off-market opportunities and execution advisory." }
  ],
  relatedResearch: [
    { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
    { label: "UAE Industrial Market Report", href: "/united-arab-emirates/research/uae-industrial-market-report" },
    { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
    { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
  ],
  relatedPages: [
    { label: "Dubai", href: "/united-arab-emirates/dubai" },
    { label: "Abu Dhabi", href: "/united-arab-emirates/abu-dhabi" },
    { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" },
    { label: "Capital Markets", href: "/united-arab-emirates/capital-markets" },
    { label: "Research", href: "/united-arab-emirates/research" },
    { label: "Investment Guides", href: "/united-arab-emirates/investment-guides" }
  ],
  ctaTitle: "Discuss UAE Allocation",
  ctaDescription: "Speak with Murivest about how UAE commercial real estate fits your institutional mandate, portfolio construction objectives and capital deployment timeline."
};

export default function Page() {
  return (
    <UaeContentPage
      config={pageConfig}
      heroBgImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85"
      extraSections={
        <>
          <UaeCityCards />
          <UaeVideoSection />
        </>
      }
    />
  );
}