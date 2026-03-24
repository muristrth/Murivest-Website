import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Skip middleware if Supabase credentials are not configured
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '',
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value,
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({
            name,
            value: '',
            ...options,
          })
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          })
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },
      },
    }
  )

  // Get current path (without query string for route matching)
  const path = request.nextUrl.pathname
  const searchParams = request.nextUrl.searchParams
  const modeParam = searchParams.get('mode')

  // Define protected routes - exclude login and access-pending pages
  const isAdminRoute = path.startsWith('/admin') && !path.startsWith('/admin/login')
  const isPortalRoute = path.startsWith('/investor-portal') && 
    !path.startsWith('/investor-portal/login') && 
    !path.startsWith('/investor-portal/access-pending')

  // Check authentication for admin routes
  if (isAdminRoute) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Check authentication for portal routes
  if (isPortalRoute) {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      // Redirect to investor-portal login page (without query params that trigger loop)
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