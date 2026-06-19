import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/developers/damac",
    title: "Damac — Luxury Developer With Expanding Commercial Portfolio",
    eyebrow: "Developer",
    description: "Damac Properties is a leading UAE luxury developer with an expanding commercial portfolio and international brand partnerships.",
    summary: "Damac Properties (DFM: DAMAC) is one of the UAE's most recognised private developers, known for luxury residential and branded residences. The company has expanded into commercial real estate with office, hospitality and retail developments.",
    schemaType: "WebPage",
    thesis: [
      "Damac's brand partnerships (Versace, Roberto Cavalli, Paramount) provide differentiated market positioning",
      "Expansion into commercial segments offers new institutional investment opportunities",
      "Private development model provides flexibility in partnership structures"
    ],
    marketContext: "Damac Properties has established itself as a leading luxury developer in the UAE, known for brand-partnered residences and premium developments. The company has diversified into commercial real estate with office developments in Business Bay and its DAMAC Hills master-planned community.",
    demandDrivers: [
      "Luxury residential demand supporting brand-partnered developments",
      "Commercial portfolio expansion creating new investment opportunities",
      "International investor demand for luxury-branded real estate"
    ],
    riskFactors: [
      "Private company with less financial transparency than listed peers",
      "Higher leverage than some developer peers",
      "Luxury market cyclicality"
    ],
    competitiveAdvantages: [
      "Differentiated brand strategy with international luxury partnerships",
      "Flexible development approach enabling rapid project execution",
      "Strong international investor network, particularly from Asia"
    ],
    globalComparison: [
      { market: "Damac", comparison: "Comparable to luxury-branded developers globally, with strong international marketing capability and brand partnerships." }
    ],
    institutionalRelevance: [
      "Development partner for luxury-branded commercial and hospitality assets",
      "Expanding commercial portfolio creating acquisition opportunities",
      "International investor network providing potential JV partners"
    ],
    familyOfficePerspective: [
      "Luxury brand association for prestige real estate investment",
      "International marketing platform for global distribution"
    ],
    investorImplications: [
      "Evaluate specific project economics and leverage profile in due diligence",
      "Consider for luxury hospitality and branded residence investments",
      "Use JV structures for risk sharing in development projects"
    ],
    faqs: [
      { question: "What commercial projects has Damac developed?", answer: "Damac has developed office towers in Business Bay, the DAMAC Maison hotels, and commercial components within its DAMAC Hills master-planned community." },
      { question: "Is Damac a public or private company?", answer: "Damac Properties is listed on the Dubai Financial Market (DFM), providing financial reporting standards." },
      { question: "What is Damac's brand partnership strategy?", answer: "Damac has exclusive partnerships with luxury brands including Versace, Roberto Cavalli, Paramount and Bugatti for branded residences and hotel developments." }
    ],
    relatedResearch: [
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" },
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" }
    ],
    relatedPages: [
      { label: "Developers", href: "/united-arab-emirates/developers" },
      { label: "Emaar", href: "/united-arab-emirates/developers/emaar" },
      { label: "Nakheel", href: "/united-arab-emirates/developers/nakheel" }
    ],
    ctaTitle: "Discuss Damac Partnership",
    ctaDescription: "Speak with Murivest about development opportunities with Damac Properties."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
