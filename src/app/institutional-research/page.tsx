import { Metadata } from 'next';
import ResearchClient from './ResearchClient';

export const metadata: Metadata = {
  title: 'Institutional Research & Market Intelligence | Murivest',
  description: 'Evidence-based real estate market analysis for capital allocators. Quarterly yield reports, macro insights, and sector performance studies for Kenya.',
  keywords: 'real estate market research Kenya, Nairobi property yield report, commercial real estate intelligence Africa, institutional property data',
};

export default function InstitutionalResearchPage() {
  return <ResearchClient />;
}
