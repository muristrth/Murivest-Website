'use client'

import { Shield, Lock, AlertCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

interface ProtectedRouteNoticeProps {
  requiredAccess?: 'verified' | 'premium'
  title?: string
  message?: string
  showUpgradeButton?: boolean
}

export function ProtectedRouteNotice({
  requiredAccess = 'verified',
  title,
  message,
  showUpgradeButton = true,
}: ProtectedRouteNoticeProps) {
  const accessLabels = {
    verified: 'Verified Investor',
    premium: 'Premium Member',
  }

  const defaultTitle = 'Access Restricted'
  const defaultMessage = `This content requires ${accessLabels[requiredAccess]} access. Please complete your verification or upgrade your membership to view this content.`

  return (
    <div className="bg-[#FAF9F6] border border-[#B8956B]/20 p-8 lg:p-12 rounded-sm">
      <div className="max-w-lg mx-auto text-center">
        {/* Icon */}
        <div className="w-16 h-16 bg-[#B8956B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
          {requiredAccess === 'premium' ? (
            <Shield className="h-8 w-8 text-[#B8956B]" />
          ) : (
            <Lock className="h-8 w-8 text-[#B8956B]" />
          )}
        </div>

        {/* Title */}
        <h2 className="font-serif text-2xl lg:text-3xl text-[#1B4332] mb-4">
          {title || defaultTitle}
        </h2>

        {/* Message */}
        <p className="text-[#2C3E35]/70 leading-relaxed mb-8">
          {message || defaultMessage}
        </p>

        {/* Actions */}
        {showUpgradeButton && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portal/profile">
              <Button className="w-full sm:w-auto">
                View My Profile
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/portal?upgrade=true">
              <Button variant="outline" className="w-full sm:w-auto">
                Upgrade Access
              </Button>
            </Link>
          </div>
        )}

        {/* Info box */}
        <div className="mt-8 p-4 bg-[#1B4332]/5 rounded-lg border border-[#1B4332]/10">
          <div className="flex items-start gap-3 text-left">
            <AlertCircle className="h-5 w-5 text-[#B8956B] flex-shrink-0 mt-0.5" />
            <div className="text-sm text-[#2C3E35]/70">
              <p className="font-medium text-[#1B4332] mb-1">Need help?</p>
              <p>Contact our investor relations team for assistance with verification or upgrade options.</p>
              <p className="mt-2">
                <a href="mailto:investors@ murivest.com" className="text-[#B8956B] hover:text-[#1B4332] underline">
                  investors@ murivest.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface AccessDeniedProps {
  title?: string
  message?: string
}

export function AccessDenied({ title, message }: AccessDeniedProps) {
  return (
    <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Lock className="h-5 w-5 text-red-600" />
        </div>
        <div>
          <h3 className="font-medium text-red-800 mb-1">
            {title || 'Access Denied'}
          </h3>
          <p className="text-sm text-red-700/80">
            {message || 'You do not have permission to access this resource.'}
          </p>
        </div>
      </div>
    </div>
  )
}

interface AuthenticationRequiredProps {
  returnUrl?: string
}

export function AuthenticationRequired({ returnUrl }: AuthenticationRequiredProps) {
  return (
    <div className="bg-[#1B4332]/5 border border-[#1B4332]/10 p-8 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-[#1B4332]/10 rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="h-6 w-6 text-[#1B4332]" />
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#1B4332] mb-2">
            Authentication Required
          </h3>
          <p className="text-sm text-[#2C3E35]/70 mb-4">
            Please sign in to access this content. If you don't have an account, you can create one.
          </p>
          <div className="flex gap-3">
            <Link
              href={`/portal?mode=login${returnUrl ? `&redirect=${encodeURIComponent(returnUrl)}` : ''}`}
            >
              <button className="bg-[#1B4332] text-white px-4 py-2 text-xs uppercase tracking-wider hover:bg-[#2D5A47] transition-colors">
                Sign In
              </button>
            </Link>
            <Link
              href={`/portal?mode=register${returnUrl ? `&redirect=${encodeURIComponent(returnUrl)}` : ''}`}
            >
              <button className="border border-[#1B4332] text-[#1B4332] px-4 py-2 text-xs uppercase tracking-wider hover:bg-[#1B4332] hover:text-white transition-all">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}