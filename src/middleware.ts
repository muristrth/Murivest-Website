import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────

const PUBLIC_PATHS = [
  '/admin/login',
  '/investor-portal/login',
  '/investor-portal/access-pending',
  '/api/auth',
  '/_next',
  '/favicon.ico',
  '/sitemap.xml',
  '/robots.txt',
] as const

const ADMIN_PATHS = ['/admin'] as const
const INVESTOR_PATHS = ['/investor-portal'] as const

const REDIRECT_STATUS = 308

// ─────────────────────────────────────────────────────────────
// DOMAIN ROUTING
// ─────────────────────────────────────────────────────────────

function handleDomainRouting(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get('host') || ''
  const { pathname, search } = request.nextUrl

  const isComDomain = hostname === 'murivest.com' || hostname === 'www.murivest.com'
  const isKeDomain = hostname === 'murivest.co.ke' || hostname === 'www.murivest.co.ke'

  // ── murivest.co.ke → redirect to murivest.com/kenya ────────
  if (isKeDomain) {
    // Prevent loop: if already on /kenya, don't add another /kenya
    if (pathname.startsWith('/kenya')) {
      // Already has /kenya prefix — redirect to same path on .com
      const target = new URL(`https://murivest.com${pathname}${search}`)
      return NextResponse.redirect(target, REDIRECT_STATUS)
    }

    // Add /kenya prefix and redirect to .com
    const targetPath = pathname === '/' ? '/kenya' : `/kenya${pathname}`
    const target = new URL(`https://murivest.com${targetPath}${search}`)
    return NextResponse.redirect(target, REDIRECT_STATUS)
  }

  // ── murivest.com → serve global site, strip any /kenya ─────
  if (isComDomain) {
    if (pathname.startsWith('/kenya')) {
      // Someone hit murivest.com/kenya/* directly — strip /kenya
      const cleanPath = pathname.replace(/^\/kenya/, '') || '/'
      const target = new URL(`https://murivest.com${cleanPath}${search}`)
      return NextResponse.redirect(target, REDIRECT_STATUS)
    }

    // Normal global site — no redirect
    return null
  }

  // Unknown domain (localhost, previews, etc.) — let through
  return null
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
  // 1. Domain routing (highest priority)
  const domainRedirect = handleDomainRouting(request)
  if (domainRedirect) return domainRedirect

  // 2. Initialize response
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  // 3. Security headers
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
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}