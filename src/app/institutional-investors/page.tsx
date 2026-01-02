import type { Metadata } from 'next'
import InstitutionalInvestors from '../../components/InstitutionalInvestors'

export const metadata: Metadata = {
  title: 'Institutional Investors - Murivest Realty Group',
  description: 'Access confidential investment memorandum, performance metrics, and risk profiles for institutional investors. Password-protected section for qualified investors.',
  keywords: 'institutional investors, private equity real estate, investment memorandum, IRR performance, portfolio valuations, risk management',
  robots: 'noindex, nofollow', // Since it's password-protected
}

export default function InstitutionalInvestorsPage() {
  return <InstitutionalInvestors />
}