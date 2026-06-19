import { UaeContentPage } from '@/app/united-arab-emirates/_components/UaeContentPage';
import type { UaePageConfig } from '@/app/united-arab-emirates/_components/uae-pages-types';

const pageConfig: UaePageConfig = {
    slug: "united-arab-emirates/developers/nakheel",
    title: "Nakheel — Iconic Dubai Waterfront Developer With Commercial Portfolio",
    eyebrow: "Developer",
    description: "Nakheel is the master developer behind Dubai's iconic waterfront communities including Palm Jumeirah, The World and Deira Islands.",
    summary: "Nakheel is one of Dubai's most iconic developers, responsible for world-famous waterfront communities including Palm Jumeirah, The World Islands and Deira Islands. The company has a significant commercial portfolio across retail, hospitality and mixed-use assets.",
    schemaType: "WebPage",
    thesis: [
      "Nakheel's Dubai government ownership provides sovereign backing and strategic positioning",
      "Extensive land bank in prime Dubai waterfront locations provides long-term development pipeline",
      "Commercial portfolio anchored by iconic retail and hospitality assets"
    ],
    marketContext: "Nakheel is a Dubai government-owned developer responsible for some of the world's most iconic waterfront developments. The company has a significant commercial portfolio including Nakheel Mall, Ibn Battuta Mall, Dragon Mart and multiple hospitality assets.\n\nFor institutional investors, Nakheel offers opportunities in retail and hospitality investment, development JVs in prime waterfront locations and acquisition of commercial assets from its portfolio.",
    demandDrivers: [
      "Continued development of Palm Jebel Ali and other mega-projects",
      "Retail and hospitality demand in established Nakheel communities",
      "Government backing provides stability for long-term development plans"
    ],
    riskFactors: [
      "Government ownership can affect commercial decision-making",
      "Previous financial restructuring history",
      "Mega-project execution risk for new developments"
    ],
    competitiveAdvantages: [
      "Government-backed financial strength and strategic positioning",
      "Prime waterfront land bank with irreplaceable locations",
      "Iconic brand recognition supporting premium positioning"
    ],
    globalComparison: [
      { market: "Nakheel", comparison: "Comparable to government-backed master developers globally, with uniquely iconic waterfront projects that have no direct global parallels." }
    ],
    institutionalRelevance: [
      "Access to prime waterfront development opportunities",
      "Retail and hospitality asset acquisition from commercial portfolio",
      "Government-backed counterparty for long-term partnerships"
    ],
    familyOfficePerspective: [
      "Government-backed counterparty with iconic asset portfolio",
      "Access to irreplaceable waterfront development locations",
      "Long-term investment horizon aligned with mega-project timelines"
    ],
    investorImplications: [
      "Consider for retail and hospitality investment in established communities",
      "Evaluate specific project economics and timelines in underwriting",
      "Use JV structures for development participation"
    ],
    faqs: [
      { question: "Who owns Nakheel?", answer: "Nakheel is wholly owned by the Dubai government through the Dubai Holding conglomerate, providing sovereign backing." },
      { question: "What commercial assets does Nakheel own?", answer: "Nakheel Mall, Ibn Battuta Mall, Dragon Mart, The Pointe, Club Vista Mare and multiple hospitality assets across Palm Jumeirah and other communities." },
      { question: "What are Nakheel's major developments?", answer: "Palm Jumeirah, The World Islands, Deira Islands, Palm Jebel Ali (under development) and Dubai Islands." }
    ],
    relatedResearch: [
      { label: "GCC Real Estate Outlook", href: "/united-arab-emirates/research/gcc-real-estate-outlook" },
      { label: "UAE Cap Rates", href: "/united-arab-emirates/research/uae-cap-rates" }
    ],
    relatedPages: [
      { label: "Developers", href: "/united-arab-emirates/developers" },
      { label: "Emaar", href: "/united-arab-emirates/developers/emaar" },
      { label: "Damac", href: "/united-arab-emirates/developers/damac" }
    ],
    ctaTitle: "Discuss Nakheel Partnership",
    ctaDescription: "Speak with Murivest about investment opportunities with Nakheel."
  };

export default function Page() {
  return <UaeContentPage config={pageConfig} />;
}
