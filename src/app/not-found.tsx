'use client';

import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 flex items-center justify-center luxury-padding">
      <div className="text-center max-w-md">
        <div className="text-8xl luxury-heading luxury-gold-accent mb-8">404</div>
        <h1 className="luxury-heading text-3xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="luxury-body text-white/80 mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="luxury-button-primary inline-flex items-center">
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="luxury-button-secondary inline-flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}
