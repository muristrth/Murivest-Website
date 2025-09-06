import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { canAccessDashboard } from './permissions';

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Public routes
  if (pathname.startsWith('/login') || pathname.startsWith('/api/auth')) {
    return NextResponse.next();
  }

  // Protected routes
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Role-based route protection
  if (pathname.startsWith('/admin')) {
    if (!canAccessDashboard(token.role, 'admin')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  if (pathname.startsWith('/operations')) {
    if (!canAccessDashboard(token.role, 'operations')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  if (pathname.startsWith('/accountant')) {
    if (!canAccessDashboard(token.role, 'accountant')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  if (pathname.startsWith('/secretary')) {
    if (!canAccessDashboard(token.role, 'secretary')) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/operations/:path*',
    '/accountant/:path*',
    '/secretary/:path*',
    '/dashboard/:path*',
    '/api/:path*',
  ],
};