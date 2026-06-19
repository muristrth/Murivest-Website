import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import { UaeDistrictCards } from '@/app/united-arab-emirates/_components/UaeDistrictCards';
import { UaeVideoSection } from '@/app/united-arab-emirates/_components/UaeVideoSection';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/abu-dhabi",
    title: "Abu Dhabi — Sovereign-Grade Capital For Long-Duration Real Estate Investment",
    eyebrow: "Emirate",
    description: "Abu Dhabi offers institutional investors sovereign-backed stability, long-duration income profiles and access to one of the world's largest pools of patient capital.",
    summary: "Abu Dhabi represents the institutional anchor of UAE commercial real estate. Home to ADIA, Mubadala and the Abu Dhabi Investment Council, the emirate offers a sovereign-guaranteed market environment suited to long-duration, income-focused investment mandates.",
    schemaType: "WebPage",
    thesis: [
      "Abu Dhabi's sovereign wealth ecosystem ensures government-backed infrastructure investment and a stable macroeconomic environment",
      "The ADGM common-law framework provides institutional legal infrastructure aligned to international standards",
      "Long-duration income assets with lower cyclicality than Dubai, suited to core and core-plus mandates"
    ],
    marketContext: "As the capital of the UAE and custodian of over 90% of the country's hydrocarbon reserves, Abu Dhabi provides a fundamentally different investment proposition to Dubai. The emirate's economy is underpinned by sovereign wealth management, energy and petrochemicals, with increasing diversification into financial services through Abu Dhabi Global Market (ADGM), tourism through Saadiyat Island and Yas Island, and technology through Hub71.\n\nAbu Dhabi's commercial real estate market is characterised by longer-term leases, lower vacancy volatility and stronger tenant covenants, reflecting the dominance of government-related entities (GREs) and large multinationals as occupiers. The market offers institutional investors a stable income profile well-suited to core and core-plus strategies.",
    demandDrivers: [
      "Sovereign wealth sector expansion driving demand for Grade A office space",
      "ADGM financial centre growth attracting global banks, asset managers and fintech firms",
      "Cultural tourism infrastructure (Louvre Abu Dhabi, Guggenheim, Zayed National Museum)",
      "Technology sector cluster development through Hub71 and KIZAD industrial zones"
    ],
    riskFactors: [
      "Concentration risk — GRE and energy sector dominance in tenant base",
      "Lower liquidity compared with Dubai for secondary assets",
      "Longer hold periods required for optimal exit timing"
    ],
    competitiveAdvantages: [
      "Sovereign-backed investment environment with patient capital ecosystem",
      "ADGM common-law framework with independent courts",
      "Lower supply volatility and more predictable income streams",
      "Access to substantial co-investment and joint venture opportunities with sovereign entities"
    ],
    globalComparison: [
      { market: "Dubai", comparison: "Dubai offers deeper liquidity and higher growth but greater cyclicality. Abu Dhabi provides superior income stability and sovereign backing." },
      { market: "Oslo", comparison: "Comparable sovereign wealth backing but Norway has higher tax rates and lower growth. Abu Dhabi offers tax-free income with emerging market growth dynamics." },
      { market: "Singapore", comparison: "Similar financial centre ambitions but Abu Dhabi has sovereign wealth backing and energy sector depth that Singapore lacks." },
      { market: "Riyadh", comparison: "Saudi capital offers scale but lacks Abu Dhabi's established international legal framework and foreign ownership structures." }
    ],
    institutionalRelevance: [
      "Provides sovereign-backed income stability for core portfolio allocations",
      "Enables co-investment alongside ADIA, Mubadala and other SWFs",
      "Supports long-duration mandate requirements with lower income volatility"
    ],
    familyOfficePerspective: [
      "Capital preservation through sovereign-guaranteed market environment",
      "Long-hold real asset ownership with predictable income streams",
      "Access to sovereign co-investment and prestigious landmark assets"
    ],
    investorImplications: [
      "Consider Abu Dhabi for core and core-plus allocations requiring income stability",
      "Evaluate districts based on exposure to sovereign, financial and cultural sectors",
      "Pair with Dubai allocation for a balanced UAE portfolio"
    ],
    faqs: [
      { question: "What makes Abu Dhabi different from Dubai for CRE investment?", answer: "Abu Dhabi offers sovereign-backed stability, longer-duration leases and lower cyclicality, making it suited to income-focused institutional mandates. Dubai offers deeper liquidity and higher capital growth potential. The optimal approach is often a combined allocation." },
      { question: "How mature is the ADGM legal framework for real estate?", answer: "ADGM provides a common-law framework directly modelled on English law with independent courts, recognised by international investors. It is comparable to the DIFC in quality and provides robust property rights protection." },
      { question: "What are the highest-quality commercial districts in Abu Dhabi?", answer: "Al Maryah Island (ADGM financial district), Saadiyat Island (cultural and tourism), Yas Island (entertainment and business) and the Corniche area (established commercial) represent the primary institutional-grade submarkets." },
      { question: "Can foreign investors own commercial property in Abu Dhabi?", answer: "Yes. Abu Dhabi has designated investment zones where foreign investors can own property on a freehold basis. The ADGM framework provides additional investor protection for international capital." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "UAE Overview", href: "/united-arab-emirates" },
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "Saadiyat Island", href: "/united-arab-emirates/abu-dhabi/saadiyat-island" },
      { label: "Yas Island", href: "/united-arab-emirates/abu-dhabi/yas-island" },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" }
    ],
    ctaTitle: "Discuss Abu Dhabi Allocation",
    ctaDescription: "Speak with Murivest about Abu Dhabi commercial real estate investment opportunities and how sovereign-backed stability fits your portfolio."
  };

export default function Page() {
  return (
    <UaeContentPage
      config={pageConfig}
      heroBgImage="https://images.unsplash.com/photo-1623998021446-45f9b6a2ad98?w=1920&q=85"
      extraSections={
        <>
          <UaeDistrictCards
            eyebrow="Commercial Districts"
            title="Abu Dhabi's Key Commercial Districts"
            description="Abu Dhabi\'s commercial districts serve different economic functions — from sovereign wealth management and financial services to cultural tourism and entertainment — offering diverse investment exposure within a single emirate."
            districts={[
              {
                name: 'Saadiyat Island',
                subtitle: 'Cultural Tourism District',
                href: '/united-arab-emirates/abu-dhabi/saadiyat-island',
                image: 'https://images.unsplash.com/photo-1599571234909-29ed5a96afe2?w=800&q=80',
                description: 'Abu Dhabi\'s premier cultural tourism destination, home to the Louvre Abu Dhabi, Guggenheim Abu Dhabi and Zayed National Museum.',
                metrics: ['Global Cultural Cluster', 'Luxury Hospitality', 'Government-Backed'],
              },
              {
                name: 'Yas Island',
                subtitle: 'Entertainment & Leisure',
                href: '/united-arab-emirates/abu-dhabi/yas-island',
                image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8f613?w=800&q=80',
                description: 'The UAE\'s premier entertainment destination with Ferrari World, Warner Bros World, Yas Marina Circuit and over 30 million annual visitors.',
                metrics: ['30M+ Annual Visitors', 'Formula 1 Circuit', 'Aldar-Developed'],
              },
            ]}
          />
          <UaeVideoSection
            eyebrow="Abu Dhabi Intelligence"
            title="The Abu Dhabi Advantage —"
            titleHighlight="Sovereign Capital Hub"
            description="Abu Dhabi offers a fundamentally different investment proposition to Dubai — sovereign-backed stability, longer-duration leases and patient capital from the world's largest sovereign wealth ecosystem. For core and core-plus mandates, Abu Dhabi is the UAE's institutional anchor."
            poster="https://images.unsplash.com/photo-1623998021446-45f9b6a2ad98?w=1920&q=60"
            metrics={[
              { label: 'GDP Growth (2024)', value: '3.2%' },
              { label: 'SWF Assets', value: '$1.5T+' },
              { label: 'CRE Transaction Volume', value: '$5B+' },
              { label: 'Prime Office Yield', value: '6.5–8%' },
              { label: 'ADGM Firms', value: '1,500+' },
              { label: 'Tourism Visitors', value: '3.8M+' },
            ]}
            primaryCta={{ label: 'Explore Abu Dhabi Research', href: '/united-arab-emirates/research/uae-cap-rates' }}
            secondaryCta={{ label: 'View Abu Dhabi Districts', href: '/united-arab-emirates/abu-dhabi' }}
          />
        </>
      }
    />
  );
}
