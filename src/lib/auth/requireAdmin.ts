import { redirect } from 'next/navigation'
import { getUser } from './getUser'

/**
 * Require admin access.
 * Redirects to login if not authenticated.
 * Redirects to investor portal if not admin.
 */
export async function requireAdmin() {
  const user = await getUser()
  
  if (!user) {
    redirect('/portal?mode=login')
  }
  
  if (!user.profile || user.profile.investor_status !== 'admin') {
    redirect('/portal')
  }
  
  return user
}

/**
 * Check if current user is admin (non-redirecting).
 */
export async function isAdmin(): Promise<boolean> {
  const user = await getUser()
  return !!user?.profile && user.profile.investor_status === 'admin'
}

/**
 * Require admin access for API routes.
 * Returns error response if not admin.
 */
export async function verifyAdmin(): Promise<{ 
  authorized: boolean
  userId?: string
  error?: string 
}> {
  const user = await getUser()
  
  if (!user) {
    return { authorized: false, error: 'Not authenticated' }
  }
  
  if (!user.profile || user.profile.investor_status !== 'admin') {
    return { authorized: false, error: 'Admin access required' }
  }
  
  return { authorized: true, userId: user.user.id }
}