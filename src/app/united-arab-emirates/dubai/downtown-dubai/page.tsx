import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/dubai/downtown-dubai",
    title: "Downtown Dubai — Iconic Mixed-Use District With Premium Commercial Assets",
    eyebrow: "District",
    description: "Downtown Dubai is the world's most recognised mixed-use district, offering institutional investors access to premium commercial assets anchored by the Burj Khalifa, Dubai Mall and Dubai Opera.",
    summary: "Downtown Dubai represents the global face of the city. As a master-planned mixed-use district centred on the Burj Khalifa, Dubai Mall and Dubai Opera, it offers institutional investors exposure to premium office, retail and hospitality assets with unmatched global brand recognition and tourism-driven demand.",
    schemaType: "WebPage",
    thesis: [
      "Downtown Dubai's global brand recognition creates durable occupier demand from premium corporate and retail tenants",
      "Integrated mixed-use design with residential, hotel, retail and office components reduces vacancy risk through diversified demand",
      "Emaar-managed district ensures high-quality maintenance, security and placemaking standards"
    ],
    marketContext: "Downtown Dubai is one of the world's most recognised urban districts. The master-planned development centres on the Burj Khalifa (the world's tallest building), the Dubai Mall (one of the world's largest shopping centres) and the Dubai Opera. The district combines premium office, retail, hospitality and residential components in an integrated environment.\n\nAs a tourism and lifestyle destination, Downtown Dubai benefits from diverse demand drivers beyond traditional commercial occupiers. The office component attracts premium corporate tenants seeking a prestigious address, while the retail component benefits from Dubai's position as a global shopping destination.",
    demandDrivers: [
      "Global tourism and business visitation driving retail and hospitality demand",
      "Premium corporate occupiers seeking prestigious Burj Khalifa-adjacent addresses",
      "Residential demand supporting local services and retail tenancies",
      "Event-driven demand from New Year celebrations, Dubai Shopping Festival and cultural events"
    ],
    riskFactors: [
      "Tourism dependency creates exposure to global travel disruption",
      "Premium pricing relative to other Dubai districts affects yield",
      "Emaar concentration in district management and ownership"
    ],
    competitiveAdvantages: [
      "Unmatched global brand recognition supports premium tenant demand",
      "Integrated mixed-use design reduces single-sector vacancy risk",
      "World-class infrastructure and placemaking standards",
      "Strongest tourism-driven retail and hospitality demand in Dubai"
    ],
    globalComparison: [
      { market: "Downtown Dubai", comparison: "Comparable to Marina Bay Singapore or La Defense Paris in brand recognition, but with stronger tourism integration and mixed-use design." },
      { market: "DIFC", comparison: "More financial sector focused. Downtown offers broader mixed-use demand diversification." }
    ],
    institutionalRelevance: [
      "Provides access to globally recognised landmark assets in a scarce supply environment",
      "Supports premium brand positioning within institutional portfolios",
      "Diversified demand across office, retail and hospitality reduces single-sector risk"
    ],
    familyOfficePerspective: [
      "Prestige asset ownership with global brand recognition",
      "Multi-sector diversification within a single district",
      "Tourism and lifestyle demand provides income resilience beyond traditional office cycles"
    ],
    investorImplications: [
      "Consider for premium office and retail mandates seeking trophy asset exposure",
      "Evaluate tourism dependency and sector mix in underwriting",
      "Pair with core office exposure in DIFC for balanced Dubai commercial allocation"
    ],
    faqs: [
      { question: "What makes Downtown Dubai unique for CRE investment?", answer: "The district combines the world's tallest building, one of the world's largest malls and premium office assets in an integrated master-planned environment with unmatched global brand recognition." },
      { question: "What types of commercial assets are available in Downtown Dubai?", answer: "Premium Grade A offices, luxury retail, high-end hospitality and select mixed-use developments. Asset availability is limited given the district's maturity." },
      { question: "How does office investment in Downtown compare with DIFC?", answer: "Both offer premium positioning but Downtown benefits from tourism and lifestyle demand diversification. Yields are typically comparable to DIFC with similar tenant quality." }
    ],
    relatedResearch: [
      { label: "Dubai Office Rents", href: "/united-arab-emirates/research/dubai-office-rents" },
      { label: "UAE Office Market Report", href: "/united-arab-emirates/research/uae-office-market-report" }
    ],
    relatedPages: [
      { label: "Dubai", href: "/united-arab-emirates/dubai" },
      { label: "DIFC", href: "/united-arab-emirates/dubai/difc" },
      { label: "Business Bay", href: "/united-arab-emirates/dubai/business-bay" },
      { label: "Mixed Use", href: "/united-arab-emirates/asset-classes/mixed-use" }
    ],
    ctaTitle: "Discuss Downtown Investment",
    ctaDescription: "Speak with Murivest about premium commercial investment opportunities in Downtown Dubai."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} heroBgImage="https://images.unsplash.com/photo-1582672060674-bc2bd8082daf?w=1920&q=85" />;
}
