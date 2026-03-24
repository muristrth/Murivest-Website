import { redirect } from 'next/navigation'
import { getUser } from './getUser'

/**
 * Require a user to be authenticated.
 * Redirects to login if not authenticated.
 */
export async function requireUser() {
  const user = await getUser()
  
  if (!user) {
    redirect('/investor-portal?mode=login')
  }
  
  return user
}

/**
 * Require a user to be authenticated and return user data.
 * Returns null instead of redirecting (for optional auth).
 */
export async function optionalUser() {
  return await getUser()
}

/**
 * Require minimum investor status.
 * @param statuses - Array of acceptable statuses
 */
export async function requireInvestorStatus(statuses: ('registered' | 'verified' | 'premium' | 'admin')[]) {
  const user = await getUser()
  
  if (!user) {
    redirect('/investor-portal?mode=login')
  }
  
  if (!user.profile || !statuses.includes(user.profile.investor_status)) {
    redirect('/investor-portal?upgrade=true')
  }
  
  return user
}