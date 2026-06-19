import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/research/dubai-office-rents",
    title: "Dubai Office Rents — District-Level Rental Analysis For Institutional Underwriting",
    eyebrow: "Research",
    description: "District-level office rent analysis across Dubai, providing institutional investors with granular data for acquisition underwriting.",
    summary: "Office rents in Dubai vary significantly by district, building quality and lease structure. This report provides detailed district-level rental analysis for institutional underwriting, covering prime, Grade A and Grade B office space across all major business districts.",
    schemaType: "WebPage",
    thesis: [
      "Dubai office rents vary by 300%+ between districts, making location the primary value determinant",
      "District-level rent analysis is essential for accurate acquisition underwriting",
      "Rent growth trends provide insight into district maturation and demand dynamics"
    ],
    marketContext: "Dubai's office market is characterised by significant rent dispersion across districts. DIFC commands the highest rents, followed by Downtown Dubai and Sheikh Zayed Road, while secondary districts offer more accessible pricing. This report provides the granular data needed for accurate underwriting.\n\nRent analysis covers headline rents, effective rents (after rent-free periods and fit-out contributions), service charges and rent escalation structures.",
    demandDrivers: [
      "District-level demand from financial services, technology and professional services",
      "Building quality and EIA rating affecting rent premiums",
      "Amenity provision (F&B, parking, gym, conference facilities) influencing tenant willingness to pay"
    ],
    riskFactors: [
      "Rent levels can change rapidly in response to supply additions",
      "Effective rents differ significantly from headline rents",
      "Service charge levels vary significantly between buildings"
    ],
    competitiveAdvantages: [
      "District-level granularity for precise underwriting",
      "Headline and effective rent analysis",
      "Historical trend data for rent growth analysis"
    ],
    globalComparison: [
      { market: "Dubai Office Rents", comparison: "Dubai prime office rents of AED 250-450/sq ft compare with London West End at AED 1,500+ and Singapore at AED 600+, offering significant cost advantage to occupiers and yield advantage to investors." }
    ],
    institutionalRelevance: [
      "Essential data for office acquisition underwriting",
      "Supports district selection and building comparison",
      "Enables accurate income projection and valuation"
    ],
    familyOfficePerspective: [
      "DETAILED market data for acquisition decision-making",
      "District comparison for location selection",
      "Rent growth analysis for capital appreciation projection"
    ],
    investorImplications: [
      "Use district-level rent data for acquisition underwriting",
      "Consider effective rents (net of incentives) in income projections",
      "Track rent growth trends for capital value appreciation analysis"
    ],
    faqs: [
      { question: "What are current office rents in DIFC?", answer: "Prime DIFC office rents range from AED 250-450/sq ft depending on building quality, floor plate and lease terms. Grade A ranges from AED 180-250/sq ft." },
      { question: "How do service charges affect net returns?", answer: "Service charges in Dubai offices range from AED 25-60/sq ft depending on building age and specification. These are typically passed through to tenants but affect overall occupancy cost." },
      { question: "What is the typical rent-free period for Dubai offices?", answer: "Rent-free periods range from 3-12 months depending on lease term, building quality and market conditions, typically structured as 1 month rent-free per year of lease." }
    ],
    relatedResearch: [
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Business Bay", href: "/united-arab-emirates/dubai/business-bay" },
      { label: "Office", href: "/united-arab-emirates/asset-classes/office" }
    ],
    ctaTitle: "Access Office Rent Data",
    ctaDescription: "Speak with Murivest about accessing detailed Dubai office rent data for acquisition underwriting."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
