import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// ─────────────────────────────────────────────────────────────
// CONFIGURATION
// ─────────────────────────────────────────────────────────────

const PUBLIC_PATHS = [
  '/admin/login',
  '/portal/login',
  '/portal/access-pending',
  '/api/auth',
  '/_next',
  '/favicon.ico',
  '/sitemap.xml',
  '/robots.txt',
] as const

const ADMIN_PATHS = ['/admin'] as const
const ADVISOR_PATHS = ['/advisor'] as const
const INVESTOR_PATHS = ['/portal'] as const

const REDIRECT_STATUS = 308

// ─────────────────────────────────────────────────────────────
// DOMAIN ROUTING
// ─────────────────────────────────────────────────────────────

function handleDomainRouting(request: NextRequest): NextResponse | null {
  const hostname = request.headers.get('host') || ''
  const { pathname, search } = request.nextUrl

  const isKeDomain = hostname === 'murivest.co.ke' || hostname === 'www.murivest.co.ke'

  if (isKeDomain) {
    const targetPath = pathname.startsWith('/kenya') ? pathname : `/kenya${pathname}`
    return NextResponse.redirect(
      new URL(`https://murivest.com${targetPath}${search}`),
      REDIRECT_STATUS
    )
  }

  return null
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

function isAdvisorPath(path: string): boolean {
  return ADVISOR_PATHS.some((p) => path.startsWith(p))
}

function isInvestorPath(path: string): boolean {
  return INVESTOR_PATHS.some((p) => path.startsWith(p))
}

// ─────────────────────────────────────────────────────────────
// AUTH GUARD
// ─────────────────────────────────────────────────────────────

async function guardRoute(
  supabase: ReturnType<typeof createServerClient>,
  request: NextRequest,
  loginPath: string
): Promise<NextResponse | null> {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession()

  if (error) {
    console.error('[Middleware] Auth error:', error.message)
  }

  if (!session) {
    return NextResponse.redirect(new URL(loginPath, request.url))
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

  // Authenticated trees should never be indexed by search engines.
  if (isAdminPath(path) || isAdvisorPath(path) || isInvestorPath(path)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  }

  // 4. Public paths bypass auth
  if (isPublicPath(path)) {
    return response
  }

  // 5. Supabase setup
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

  if (!url || !key) {
    console.warn('[Middleware] Supabase credentials missing — skipping auth checks')
    return response
  }

  const supabase = createServerClient(url, key, {
    cookies: createCookieHandlers(request, response),
  })

  // 6. Route guards
  if (isAdminPath(path)) {
    const redirect = await guardRoute(supabase, request, '/admin/login')
    if (redirect) return redirect
  }

  if (isAdvisorPath(path)) {
    // Advisors authenticate through the shared portal login; the /advisor
    // layout enforces the role check server-side via requireAdvisor().
    const redirect = await guardRoute(supabase, request, '/portal/login')
    if (redirect) return redirect
  }

  if (isInvestorPath(path)) {
    const redirect = await guardRoute(supabase, request, '/portal/login')
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
