'use client'

import { cn } from '@/lib/utils/cn'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: Breadcrumb[]
  children?: React.ReactNode
  className?: string
  image?: string
}

export function PageHero({
  title,
  subtitle,
  description,
  breadcrumbs,
  children,
  className,
  image,
}: PageHeroProps) {
  return (
    <div
      className={cn(
        "relative bg-[#1B4332] text-[#FAF9F6] py-16 lg:py-24",
        className
      )}
      style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {/* Overlay */}
      {image && <div className="absolute inset-0 bg-[#1B4332]/80" />}

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#FAF9F6]/60 hover:text-[#FAF9F6] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-[#FAF9F6]/30" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[#FAF9F6]/60 hover:text-[#FAF9F6] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FAF9F6]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#B8956B] mb-3">
            {subtitle}
          </p>
        )}

        {/* Title */}
        <h1 className="font-serif text-4xl lg:text-5xl mb-4">{title}</h1>

        {/* Description */}
        {description && (
          <p className="text-[#FAF9F6]/70 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        )}

        {/* Additional content */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  )
}

interface SectionHeroProps {
  children: React.ReactNode
  className?: string
}

export function SectionHero({ children, className }: SectionHeroProps) {
  return (
    <div className={cn("bg-[#FAF9F6] border-b border-[#1B4332]/10 py-12", className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  )
}