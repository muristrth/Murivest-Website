'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'spinner' | 'dots' | 'pulse'
  className?: string
  fullScreen?: boolean
  text?: string
}

export function Loader({
  size = 'md',
  variant = 'spinner',
  className,
  fullScreen = false,
  text
}: LoaderProps) {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  }

  const renderSpinner = () => (
    <svg
      className={cn('animate-spin text-emerald-600', sizes[size])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  const renderDots = () => (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={cn(
            'rounded-full bg-emerald-600',
            size === 'sm' && 'h-1.5 w-1.5',
            size === 'md' && 'h-2 w-2',
            size === 'lg' && 'h-3 w-3',
            size === 'xl' && 'h-4 w-4',
            'animate-bounce',
            i === 0 && 'animation-delay-0',
            i === 1 && 'animation-delay-150',
            i === 2 && 'animation-delay-300'
          )}
          style={{
            animationDelay: `${i * 150}ms`
          }}
        />
      ))}
    </div>
  )

  const renderPulse = () => (
    <div className="relative">
      <div
        className={cn(
          'rounded-full bg-emerald-600/30',
          sizes[size]
        )}
      />
      <div
        className={cn(
          'absolute inset-0 rounded-full bg-emerald-600 animate-ping',
          sizes[size]
        )}
      />
    </div>
  )

  const renderLoader = () => {
    switch (variant) {
      case 'dots':
        return renderDots()
      case 'pulse':
        return renderPulse()
      default:
        return renderSpinner()
    }
  }

  const content = (
    <div className={cn('flex flex-col items-center justify-center gap-3', className)}>
      {renderLoader()}
      {text && (
        <p className="text-sm text-slate-500">{text}</p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        {content}
      </div>
    )
  }

  return content
}