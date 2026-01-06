import type { Metadata } from 'next'
import InstitutionalPortal from '../../components/InstitutionalPortal'

export const metadata: Metadata = {
  title: 'Institutional Investor Portal | Secure Access | Murivest',
  description: 'Confidential reporting and performance analytics for qualified institutional partners of Murivest Realty Group.',
  robots: 'noindex, nofollow',
}

export default function InstitutionalPortalPage() {
  return <InstitutionalPortal />
}
