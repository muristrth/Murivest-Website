import { redirect } from 'next/navigation'
import { getUser, type UserWithProfile } from './getUser'

export type Role = 'investor' | 'advisor' | 'admin' | 'super_admin'

/**
 * Fetches the current authenticated user+profile and asserts the profile's
 * role is one of `allowed`. Redirects to the shared portal login when
 * unauthenticated, or to a role-appropriate landing page when authenticated
 * but not authorized for this section.
 */
export async function requireRole(allowed: Role[]): Promise<UserWithProfile> {
  const user = await getUser()

  if (!user) {
    redirect('/advisor/dashboard')
  }

  const role = (user.profile?.role ?? 'investor') as Role

  if (!allowed.includes(role)) {
    if (role === 'admin' || role === 'super_admin') {
      redirect('/admin/dashboard')
    }
    if (role === 'advisor') {
      redirect('/advisor/dashboard')
    }
    redirect('/advisor/dashboard')
  }

  return user
}

/** Advisors, admins, and super admins may access the advisor workspace. */
export async function requireAdvisor(): Promise<UserWithProfile> {
  return requireRole(['advisor', 'admin', 'super_admin'])
}

/** Admins and super admins only (role-based, distinct from legacy investor_status check). */
export async function requireAdminRole(): Promise<UserWithProfile> {
  return requireRole(['admin', 'super_admin'])
}

/** Returns true if the profile can see all records for a resource (admins). */
export function isPrivilegedRole(role: Role | undefined): boolean {
  return role === 'admin' || role === 'super_admin'
}

/** Non-redirecting check for conditional UI (e.g. showing an "Advisor" nav link). */
export async function getCurrentRole(): Promise<Role | null> {
  const user = await getUser()
  if (!user?.profile) return null
  return (user.profile.role ?? 'investor') as Role
}
