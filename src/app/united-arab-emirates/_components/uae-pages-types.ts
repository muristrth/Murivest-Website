export type UaeLink = { label: string; href: string };

export type UaePageConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  summary: string;
  schemaType: 'WebPage';
  thesis: string[];
  marketContext: string;
  demandDrivers: string[];
  riskFactors: string[];
  competitiveAdvantages: string[];
  globalComparison: { market: string; comparison: string }[];
  institutionalRelevance: string[];
  familyOfficePerspective: string[];
  investorImplications: string[];
  faqs: { question: string; answer: string }[];
  relatedResearch: UaeLink[];
  relatedPages: UaeLink[];
  ctaTitle: string;
  ctaDescription: string;
};
