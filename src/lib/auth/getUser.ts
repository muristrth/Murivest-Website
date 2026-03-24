import { createClient } from '@/lib/supabase/server'
import { cookies } from 'next/headers'

export interface User {
  id: string
  email: string
  role?: string
  app_metadata?: {
    provider?: string
    [key: string]: unknown
  }
  user_metadata?: {
    [key: string]: unknown
  }
  aud?: string
  confirmed_at?: string
  created_at?: string
}

export interface Profile {
  id: string
  email: string
  full_name: string | null
  title: string | null
  organisation: string | null
  phone: string | null
  aum: string | null
  investment_focus: string | null
  investor_status: 'registered' | 'verified' | 'premium' | 'admin'
  portfolio_value?: number
  created_at: string
  updated_at: string
}

export interface UserWithProfile {
  user: User
  profile: Profile | null
}

/**
 * Get the current authenticated user with their profile
 */
export async function getUser(): Promise<UserWithProfile | null> {
  try {
    const supabase = await createClient()
    
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return null
    }
    
    // Fetch profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()
    
    if (profileError && profileError.code !== 'PGRST116') {
      console.error('Error fetching profile:', profileError)
    }
    
    return {
      user: user as User,
      profile: profile as Profile | null
    }
  } catch (error) {
    console.error('Error in getUser:', error)
    return null
  }
}

/**
 * Get user ID from cookies without full profile fetch
 */
export async function getUserId(): Promise<string | null> {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    return user?.id ?? null
  } catch {
    return null
  }
}

/**
 * Check if user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getUser()
  return !!user
}