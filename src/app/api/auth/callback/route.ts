import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/investor-portal'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Successful auth, redirect to the portal
      return NextResponse.redirect(`${origin}${next}`)
    }
    
    // Log the error in production
    console.error('Auth Callback Error:', error.message)
  }

  // Return the user to an error page or login with an error state
  return NextResponse.redirect(`${origin}/investor-portal?error=auth-failed`)
}