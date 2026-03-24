'use client'

import { cn } from '@/lib/utils/cn'

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  centered?: boolean
  highlight?: string
}

export function SectionTitle({
  children,
  className,
  as: Tag = 'h2',
  centered = false,
  highlight,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-serif text-[#1B4332]",
        centered && "text-center",
        className
      )}
    >
      {highlight && (
        <span className="text-[#B8956B]">{highlight}</span>
      )}
      {children}
    </Tag>
  )
}

interface SectionSubtitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionSubtitle({ children, className }: SectionSubtitleProps) {
  return (
    <p
      className={cn(
        "text-[#2C3E35]/70 text-lg leading-relaxed mt-3",
        className
      )}
    >
      {children}
    </p>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  highlight?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({
  title,
  subtitle,
  highlight,
  centered = false,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        centered ? "text-center" : "text-left",
        "mb-10",
        className
      )}
    >
      <SectionTitle as="h2" centered={centered} highlight={highlight}>
        {title}
      </SectionTitle>
      {subtitle && (
        <SectionSubtitle className={centered ? "max-w-2xl mx-auto" : undefined}>
          {subtitle}
        </SectionSubtitle>
      )}
    </div>
  )
}

interface PageSectionProps {
  children: React.ReactNode
  className?: string
  background?: 'default' | 'light' | 'dark' | 'accent'
}

export function PageSection({
  children,
  className,
  background = 'default',
}: PageSectionProps) {
  const backgroundClasses = {
    default: '',
    light: 'bg-[#FAF9F6]',
    dark: 'bg-[#1B4332] text-[#FAF9F6]',
    accent: 'bg-[#B8956B]/10',
  }

  return (
    <section className={cn("py-16 lg:py-24", backgroundClasses[background], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}