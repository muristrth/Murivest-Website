import { redirect } from 'next/navigation'
import { getUser } from './getUser'

export type RequiredStatus = 'registered' | 'verified' | 'premium' | 'admin'

/**
 * Require verified investor status.
 * Redirects to login if not authenticated.
 * Redirects to verification page if not verified.
 */
export async function requireVerifiedInvestor() {
  const user = await getUser()
  
  if (!user) {
    redirect('/investor-portal?mode=login')
  }
  
  if (!user.profile) {
    redirect('/investor-portal/profile')
  }
  
  const validStatuses: RequiredStatus[] = ['verified', 'premium', 'admin']
  
  if (!validStatuses.includes(user.profile.investor_status)) {
    redirect('/investor-portal?verify=true')
  }
  
  return user
}

/**
 * Require premium investor status.
 */
export async function requirePremiumInvestor() {
  const user = await getUser()
  
  if (!user) {
    redirect('/investor-portal?mode=login')
  }
  
  if (!user.profile) {
    redirect('/investor-portal/profile')
  }
  
  const validStatuses: RequiredStatus[] = ['premium', 'admin']
  
  if (!validStatuses.includes(user.profile.investor_status)) {
    redirect('/investor-portal?upgrade=premium')
  }
  
  return user
}

/**
 * Check if current user has required status.
 */
export async function hasInvestorStatus(status: RequiredStatus): Promise<boolean> {
  const user = await getUser()
  if (!user?.profile) return false
  
  const statusHierarchy: Record<RequiredStatus, number> = {
    registered: 1,
    verified: 2,
    premium: 3,
    admin: 4
  }
  
  return statusHierarchy[user.profile.investor_status] >= statusHierarchy[status]
}

/**
 * Check if user has verified or higher status.
 */
export async function isVerifiedInvestor(): Promise<boolean> {
  return hasInvestorStatus('verified')
}

/**
 * Check if user has premium or admin status.
 */
export async function isPremiumInvestor(): Promise<boolean> {
  return hasInvestorStatus('premium')
}