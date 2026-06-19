import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────

const PUBLIC_PATHS = [
  '/admin/login',
  '/investor-portal/login',
  '/investor-portal/access-pending',
  '/api/auth',           // Supabase auth callback routes
  '/_next',
  '/favicon.ico',
  '/sitemap.xml',
  '/robots.txt',
] as const

const ADMIN_PATHS = ['/admin'] as const
const INVESTOR_PATHS = ['/investor-portal'] as const

const REDIRECT_STATUS = 308 // Permanent Redirect

// ─────────────────────────────────────────────────────────────
// DOMAIN REDIRECTS
// ─────────────────────────────────────────────────────────────

function handleDomainRedirect(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get('host') || ''

  const isLegacyDomain =
    hostname === 'murivest.com' ||
    hostname === 'www.murivest.com'

  if (!isLegacyDomain) return null

  const { pathname, search } = request.nextUrl
  const target = new URL(`https://murivest.com/kenya${pathname}${search}`)

  return NextResponse.redirect(target, REDIRECT_STATUS)
}

// ─────────────────────────────────────────────────────────────
// ENVIRONMENT VALIDATION
// ─────────────────────────────────────────────────────────────

function getSupabaseCredentials() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    console.warn('[Middleware] Supabase credentials missing — skipping auth checks')
  }

  return { url, key }
}

// ─────────────────────────────────────────────────────────────
// COOKIE HANDLERS
// ─────────────────────────────────────────────────────────────

function createCookieHandlers(request: NextRequest, response: NextResponse) {
  return {
    get(name: string) {
      return request.cookies.get(name)?.value
    },

    set(name: string, value: string, options: CookieOptions) {
      request.cookies.set({ name, value, ...options })
      response.cookies.set({ name, value, ...options })
    },

    remove(name: string, options: CookieOptions) {
      request.cookies.set({ name, value: '', ...options })
      response.cookies.set({ name, value: '', ...options })
    },
  }
}

// ─────────────────────────────────────────────────────────────
// PATH UTILITIES
// ─────────────────────────────────────────────────────────────

function isPublicPath(path: string): boolean {
  return PUBLIC_PATHS.some((p) => path.startsWith(p))
}

function isAdminPath(path: string): boolean {
  return ADMIN_PATHS.some((p) => path.startsWith(p))
}

function isInvestorPath(path: string): boolean {
  return INVESTOR_PATHS.some((p) => path.startsWith(p))
}

// ─────────────────────────────────────────────────────────────
// AUTH GUARDS
// ─────────────────────────────────────────────────────────────

async function guardAdmin(
  supabase: ReturnType<typeof createServerClient>,
  request: NextRequest
): Promise<NextResponse | null> {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    console.error('[Middleware] Admin auth error:', error.message)
  }

  if (!session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  return null
}

async function guardInvestor(
  supabase: ReturnType<typeof createServerClient>,
  request: NextRequest
): Promise<NextResponse | null> {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    console.error('[Middleware] Investor auth error:', error.message)
  }

  if (!session) {
    return NextResponse.redirect(new URL('/investor-portal/login', request.url))
  }

  return null
}

// ─────────────────────────────────────────────────────────────
// MAIN MIDDLEWARE
// ─────────────────────────────────────────────────────────────

export async function middleware(request: NextRequest) {
  // 1. Domain redirect (highest priority)
  const domainRedirect = handleDomainRedirect(request)
  if (domainRedirect) return domainRedirect

  // 2. Initialize response
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  // 3. Security headers (applied to all responses)
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  const path = request.nextUrl.pathname

  // 4. Public paths bypass auth
  if (isPublicPath(path)) {
    return response
  }

  // 5. Supabase setup
  const { url, key } = getSupabaseCredentials()

  if (!url || !key) {
    return response
  }

  const supabase = createServerClient(url, key, {
    cookies: createCookieHandlers(request, response),
  })

  // 6. Route guards
  if (isAdminPath(path)) {
    const redirect = await guardAdmin(supabase, request)
    if (redirect) return redirect
  }

  if (isInvestorPath(path)) {
    const redirect = await guardInvestor(supabase, request)
    if (redirect) return redirect
  }

  return response
}

// ─────────────────────────────────────────────────────────────
// MATCHER CONFIG
// ─────────────────────────────────────────────────────────────

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (browser icon)
     * - public folder files (handled by Next.js automatically)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}