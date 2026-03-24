'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Redirect to the main portal with login mode
    router.replace('/investor-portal?mode=login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1B4332]">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#B8956B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#FAF9F6]/60 text-sm">Redirecting to login...</p>
      </div>
    </div>
  )
}