'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export interface UserProfile {
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
  verified_at?: string
  created_at: string
}

interface UseCurrentUserReturn {
  user: UserProfile | null
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
  isAdmin: boolean
  isVerified: boolean
  isPremium: boolean
}

export function useCurrentUser(): UseCurrentUserReturn {
  const [user, setUser] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  const supabase = createClient()
  
  const fetchUser = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()
      
      if (authError) throw authError
      
      if (!authUser) {
        setUser(null)
        return
      }
      
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', authUser.id)
        .single()
      
      if (profileError && profileError.code !== 'PGRST116') {
        throw profileError
      }
      
      setUser(profile || null)
    } catch (err) {
      console.error('Error fetching user:', err)
      setError(err as Error)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchUser()
    
    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchUser()
    })
    
    return () => {
      subscription.unsubscribe()
    }
  }, [])
  
  return {
    user,
    loading,
    error,
    refetch: fetchUser,
    isAdmin: user?.investor_status === 'admin',
    isVerified: ['verified', 'premium', 'admin'].includes(user?.investor_status || ''),
    isPremium: ['premium', 'admin'].includes(user?.investor_status || '')
  }
}