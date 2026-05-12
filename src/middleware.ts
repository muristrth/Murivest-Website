// middleware.ts
// FIX: Tightened the isPortalRoute check so that /investor-portal/login
// is explicitly excluded — preventing the redirect loop where:
//   /investor-portal/login → redirect('/investor-portal?mode=login')
//   → middleware blocks /investor-portal → redirect('/investor-portal/login') → ∞

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next({ request: { headers: request.headers } })
  }

  let response = NextResponse.next({ request: { headers: request.headers } })

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return request.cookies.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        request.cookies.set({ name, value, ...options })
        response = NextResponse.next({ request: { headers: request.headers } })
        response.cookies.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        request.cookies.set({ name, value: '', ...options })
        response = NextResponse.next({ request: { headers: request.headers } })
        response.cookies.set({ name, value: '', ...options })
      },
    },
  })

  const path = request.nextUrl.pathname

  // ── Unprotected routes (always allow through) ────────────────────────
  const publicPaths = [
    '/admin/login',
    '/investor-portal/login',      // FIX: this must be public or login → portal → login loops forever
    '/investor-portal/access-pending',
  ]
  if (publicPaths.some(p => path.startsWith(p))) {
    return response
  }

  // ── Admin routes ─────────────────────────────────────────────────────
  if (path.startsWith('/admin')) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // ── Investor portal routes ───────────────────────────────────────────
  if (path.startsWith('/investor-portal')) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      // Redirect to the LOGIN PAGE (not back to the portal) to avoid loops
      return NextResponse.redirect(new URL('/investor-portal/login', request.url))
    }
  }

  return response
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/investor-portal/:path*',
  ],
}