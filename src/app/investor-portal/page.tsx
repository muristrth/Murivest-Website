import { redirect } from 'next/navigation'

/**
 * Canonical investor portal entry point.
 * The established Kenya investor portal owns authentication and data access;
 * this route keeps the shorter public URL without duplicating that architecture.
 */
export default function InvestorPortalEntry() {
  redirect('/kenya/investor-portal')
}
