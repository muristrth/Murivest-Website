import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import { UaeDistrictCards } from '@/app/united-arab-emirates/_components/UaeDistrictCards';
import { UaeVideoSection } from '@/app/united-arab-emirates/_components/UaeVideoSection';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/dubai",
    title: "Dubai — Global Gateway City For Institutional Capital",
    eyebrow: "Emirate",
    description: "Dubai is the pre-eminent commercial real estate market in the Middle East, offering institutional investors deep liquidity, world-class infrastructure and a regulatory environment designed for international capital.",
    summary: "Dubai has evolved from a regional trading post into one of the world's most dynamic commercial real estate markets. With a diversified economy anchored by trade, tourism, logistics, financial services and technology, Dubai offers institutional investors liquid, transparent and tax-efficient access to high-growth MENA markets.",
    schemaType: "WebPage",
    thesis: [
      "Dubai's economy is structurally diversified beyond oil, with trade, logistics, tourism, financial services and real estate contributing over 90% of GDP",
      "The DIFC common-law framework and Dubai Land Department provide institutional-grade legal and regulatory infrastructure",
      "Population growth of 2-3% annually and sustained inward migration create durable demand across all commercial asset classes"
    ],
    marketContext: "Dubai's commercial real estate market is defined by its role as the primary business and logistics hub for the Middle East, Africa and South Asia (MEASA). The emirate's GDP has grown at a compound rate of approximately 3-5% over the past decade, driven by trade, tourism, financial services and logistics rather than hydrocarbons, which now account for less than 5% of GDP.\n\nThe market benefits from significant government-led infrastructure investment, including the expansion of Al Maktoum International Airport, the Dubai Metro network and the Jebel Ali Port complex, the largest man-made port globally. These investments create a structural competitive advantage that supports long-term occupier demand and asset value growth.\n\nDubai's commercial districts are geographically distinct and serve different occupier bases, making submarket selection a critical determinant of investment performance.",
    demandDrivers: [
      "Expansion of multinational corporates establishing regional HQs in DIFC and Dubai South",
      "Growth of technology, fintech and digital economy sectors supported by government initiatives",
      "Trade corridor expansion through Jebel Ali Port and Dubai World Central logistics zone",
      "Tourism and hospitality demand driven by world-leading attractions and events infrastructure"
    ],
    riskFactors: [
      "Development cycle risk — periods of oversupply following construction booms",
      "Geopolitical sensitivity given regional dynamics",
      "Interest rate transmission through USD-pegged currency"
    ],
    competitiveAdvantages: [
      "Deepest commercial real estate liquidity in the Middle East",
      "Common-law legal framework within DIFC",
      "Zero tax on income, capital gains and property transfers",
      "World-class aviation, port and digital infrastructure"
    ],
    globalComparison: [
      { market: "Singapore", comparison: "Singapore has tighter land constraints, higher costs and ABSD cooling measures. Dubai offers superior scale, lower entry costs and higher net yields." },
      { market: "London", comparison: "London offers maturity but yields are compressed to 3-4% with significant stamp duty. Dubai offers 6-9% net yields with zero transaction taxes for most structures." },
      { market: "Miami", comparison: "Comparable gateway city dynamics but higher insurance, property tax and regulatory costs. Dubai has lower operating costs and superior tax treatment." },
      { market: "Istanbul", comparison: "Istanbul is a regional gateway but lacks currency stability, legal transparency and property rights protection that Dubai provides." }
    ],
    institutionalRelevance: [
      "Offers the deepest pool of institutional-grade commercial assets in the region",
      "Provides transparent pricing data and transaction comparables",
      "Enables large-scale capital deployment across multiple sectors and districts"
    ],
    familyOfficePerspective: [
      "USD-pegged jurisdiction with capital repatriation freedom and no currency controls",
      "Tax-free wealth accumulation and intergenerational transfer",
      "Diversified real asset exposure within a globally connected city-state"
    ],
    investorImplications: [
      "Select districts based on mandate requirements, hold period and risk appetite",
      "Evaluate sector exposure against structural demand drivers rather than short-term cycles",
      "Use district-level pages and research reports for detailed underwriting"
    ],
    faqs: [
      { question: "Is Dubai's commercial real estate market mature enough for institutional capital?", answer: "Yes. Dubai has evolved into a transparent, regulated market with substantial annual commercial transaction volumes. The DIFC common-law framework, RERA regulation and Dubai Land Department provide institutional-quality legal and regulatory infrastructure." },
      { question: "How does Dubai compare with Abu Dhabi for commercial real estate investment?", answer: "Dubai offers deeper liquidity, a more diverse tenant base and stronger capital growth dynamics. Abu Dhabi provides sovereign-backed stability, longer-duration leases and lower supply risk. The optimal allocation typically includes exposure to both." },
      { question: "What are the highest-growth commercial sectors in Dubai?", answer: "Grade A office in DIFC, logistics and industrial assets in Dubai South and Jebel Ali, and select hospitality assets benefit from the strongest structural demand drivers. E-commerce growth is accelerating logistics demand." },
      { question: "Can foreign investors own commercial property in Dubai?", answer: "Yes. Foreign investors can own commercial property outright in designated freehold areas. The UAE introduced reforms allowing full foreign ownership of onshore companies, removing the previous requirement for a local sponsor." }
    ],
    relatedResearch: [
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "How To Buy Commercial Property In Dubai", href: "/united-arab-emirates/investment-guides/how-to-buy-commercial-property-in-dubai" }
    ],
    relatedPages: [
      { label: "UAE Overview", href: "/united-arab-emirates" },
      { label: "Abu Dhabi", href: "/united-arab-emirates/abu-dhabi" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Business Bay", href: "/united-arab-emirates/dubai/business-bay" },
      { label: "Jebel Ali", href: "/united-arab-emirates/dubai/jebel-ali" },
      { label: "Asset Classes", href: "/united-arab-emirates/asset-classes" }
    ],
    ctaTitle: "Discuss Dubai Allocation",
    ctaDescription: "Speak with Murivest about Dubai commercial real estate investment opportunities, district selection and capital deployment strategy."
  };

export default function Page() {
  return (
    <UaeContentPage
      config={pageConfig}
      heroBgImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85"
      extraSections={
        <>
          <UaeDistrictCards
            eyebrow="Commercial Districts"
            title="Dubai's Key Commercial Districts"
            description="Each Dubai district serves a distinct occupier base and offers a different risk-return profile within the institutional office investment spectrum. District selection is a primary determinant of investment performance."
            districts={[
              {
                name: 'DIFC',
                subtitle: 'Financial Centre',
                href: '/united-arab-emirates/dubai/difc',
                image: 'https://images.unsplash.com/photo-1599571234909-29ed5a96afe2?w=800&q=80',
                description: 'The institutional office heart of Dubai, housing over 4,000 financial and professional services firms within a common-law jurisdiction.',
                metrics: ['Lowest Vacancy in Dubai', 'Investment-Grade Tenants', 'Supply-Constrained'],
              },
              {
                name: 'Business Bay',
                subtitle: 'Largest Office District',
                href: '/united-arab-emirates/dubai/business-bay',
                image: 'https://images.unsplash.com/photo-1582672060674-bc2bd8082daf?w=800&q=80',
                description: 'Dubai\'s largest commercial office district offering scale, occupier diversity and competitive entry pricing relative to DIFC.',
                metrics: ['20M+ Sq Ft Office Space', 'Diverse Tenant Base', 'Central Location'],
              },
              {
                name: 'Downtown Dubai',
                subtitle: 'Iconic Mixed-Use',
                href: '/united-arab-emirates/dubai/downtown-dubai',
                image: 'https://images.unsplash.com/photo-1599571234909-29ed5a96afe2?w=800&q=80',
                description: 'The world\'s most recognised mixed-use district, anchored by the Burj Khalifa, offering premium commercial assets with global brand recognition.',
                metrics: ['Unmatched Brand Recognition', 'Tourism-Driven Demand', 'Premium Assets'],
              },
              {
                name: 'Jebel Ali',
                subtitle: 'Industrial & Logistics',
                href: '/united-arab-emirates/dubai/jebel-ali',
                image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
                description: 'The industrial and logistics heart of Dubai, anchored by the world\'s largest man-made port and the Jebel Ali Free Zone (JAFZA).',
                metrics: ['Top 10 Global Port', '7,000+ JAFZA Companies', 'Multi-Decade Growth'],
              },
            ]}
          />
          <UaeVideoSection
            eyebrow="Dubai Intelligence"
            title="The Dubai Advantage —"
            titleHighlight="Global Gateway City"
            description="Dubai has evolved into one of the world's most dynamic commercial real estate markets. With a diversified economy, world-class infrastructure and a regulatory environment designed for international capital, Dubai offers institutional investors a compelling gateway to high-growth MENA markets."
            poster="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=60"
            metrics={[
              { label: 'GDP Growth (2024)', value: '3.8%' },
              { label: 'Population Growth', value: '3.0% YoY' },
              { label: 'CRE Transaction Volume', value: '$10B+' },
              { label: 'Prime Office Yield', value: '6–8%' },
              { label: 'DIFC Firms', value: '4,000+' },
              { label: 'Port Capacity', value: '15M+ TEUs' },
            ]}
            primaryCta={{ label: 'Explore Dubai Research', href: '/united-arab-emirates/research/dubai-office-rents' }}
            secondaryCta={{ label: 'View Dubai Districts', href: '/united-arab-emirates/dubai' }}
          />
        </>
      }
    />
  );
}
