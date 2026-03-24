'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState, useCallback } from 'react'

interface InvestorProfile {
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

interface Allocation {
  direct_real_estate: number
  indirect_real_estate: number
  equities: number
  fixed_income: number
  alternatives: number
}

interface UseInvestorProfileReturn {
  profile: InvestorProfile | null
  allocations: Allocation | null
  loading: boolean
  error: Error | null
  updateProfile: (data: Partial<InvestorProfile>) => Promise<void>
  refresh: () => Promise<void>
}

export function useInvestorProfile(userId?: string): UseInvestorProfileReturn {
  const [profile, setProfile] = useState<InvestorProfile | null>(null)
  const [allocations, setAllocations] = useState<Allocation | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  const supabase = createClient()
  
  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      let userIdToUse = userId
      
      if (!userIdToUse) {
        const { data: { user } } = await supabase.auth.getUser()
        userIdToUse = user?.id
      }
      
      if (!userIdToUse) {
        setProfile(null)
        return
      }
      
      // Fetch profile
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userIdToUse)
        .single()
      
      if (profileError) throw profileError
      
      setProfile(profileData)
      
      // Fetch allocations if profile exists
      if (profileData) {
        const { data: allocationData } = await supabase
          .from('profile_allocations')
          .select('*')
          .eq('profile_id', userIdToUse)
          .single()
        
        if (allocationData) {
          setAllocations({
            direct_real_estate: allocationData.direct_real_estate || 0,
            indirect_real_estate: allocationData.indirect_real_estate || 0,
            equities: allocationData.equities || 0,
            fixed_income: allocationData.fixed_income || 0,
            alternatives: allocationData.alternatives || 0
          })
        }
      }
    } catch (err) {
      console.error('Error fetching investor profile:', err)
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [userId, supabase])
  
  const updateProfile = useCallback(async (data: Partial<InvestorProfile>) => {
    if (!profile?.id) return
    
    try {
      const { error: updateError } = await supabase
        .from('profiles')
        .update({
          ...data,
          updated_at: new Date().toISOString()
        })
        .eq('id', profile.id)
      
      if (updateError) throw updateError
      
      // Refresh profile after update
      await fetchProfile()
    } catch (err) {
      console.error('Error updating profile:', err)
      throw err
    }
  }, [profile?.id, supabase, fetchProfile])
  
  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])
  
  return {
    profile,
    allocations,
    loading,
    error,
    updateProfile,
    refresh: fetchProfile
  }
}