// layout.tsx - Investor Portal Layout
import Link from 'next/link'
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Lock, 
  ShoppingCart, 
  CreditCard, 
  User, 
  LogOut,
  ChevronRight,
  Shield
} from 'lucide-react'

const navItems = [
  { href: '/investor-portal', label: 'Overview', icon: LayoutDashboard },
  { href: '/investor-portal/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/investor-portal/publications', label: 'Publications', icon: BookOpen },
  { href: '/investor-portal/briefs', label: 'Investment Briefs', icon: FileText },
  { href: '/investor-portal/off-market', label: 'Off-Market', icon: Lock },
  { href: '/investor-portal/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/investor-portal/payments', label: 'Payments', icon: CreditCard },
  { href: '/investor-portal/profile', label: 'Profile', icon: User },
]

export default function InvestorPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332]">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 border-b border-[#B8956B]/20 bg-[#1B4332] text-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center justify-between">
              <Link href="/investor-portal" className="group">
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-[#B8956B]" />
                  <div>
                    <h1 className="font-serif text-2xl tracking-wide text-white group-hover:text-[#B8956B] transition-colors">
                      Murivest
                    </h1>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">
                      Private Investor Portal
                    </p>
                  </div>
                </div>
              </Link>
              
              {/* Mobile Menu Button - Would need state management in real implementation */}
              <button className="lg:hidden text-[#B8956B]">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Utility Navigation */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 text-xs text-[#FAF9F6]/60 mr-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Secure Connection
              </div>
              
              <Link
                href="/"
                className="border border-[#B8956B]/30 px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] transition-all duration-300 hover:bg-[#B8956B] hover:text-[#1B4332]"
              >
                Public Site
              </Link>

              <Link
                href="/contact"
                className="border border-[#FAF9F6]/20 px-4 py-2 text-[11px] uppercase tracking-[0.15em] text-[#FAF9F6]/80 transition-all duration-300 hover:bg-[#FAF9F6]/10 hover:text-white"
              >
                Concierge
              </Link>

              <button
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Exit</span>
              </button>
            </div>
          </div>

          {/* Primary Navigation */}
          <nav className="mt-6 overflow-x-auto border-t border-[#B8956B]/10 pt-4">
            <div className="flex min-w-max gap-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-2 whitespace-nowrap px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-[#FAF9F6]/70 transition-all duration-300 hover:bg-[#B8956B]/10 hover:text-[#B8956B] border-b-2 border-transparent hover:border-[#B8956B]"
                  >
                    <Icon className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </header>

      {/* Breadcrumb & Status Bar */}
      <div className="bg-[#1B4332]/5 border-b border-[#1B4332]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center text-xs text-[#1B4332]/60">
            <Link href="/" className="hover:text-[#B8956B] transition-colors">MURIVEST</Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <Link href="/investor-portal" className="hover:text-[#B8956B] transition-colors">PORTAL</Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-[#B8956B] uppercase tracking-wider">Overview</span>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50">
            <span>Last Login: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Session: 45:00</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#1B4332] text-[#FAF9F6]/60 py-8 mt-20 border-t border-[#B8956B]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 text-xs">
            <div>
              <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Security</h4>
              <p className="leading-relaxed">
                This portal uses 256-bit encryption and multi-factor authentication. 
                All activity is logged and monitored for unauthorized access.
              </p>
            </div>
            <div>
              <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Compliance</h4>
              <p className="leading-relaxed">
                Information contained herein is confidential and intended solely for 
                verified investors. Redistribution is strictly prohibited.
              </p>
            </div>
            <div>
              <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Support</h4>
              <p className="leading-relaxed">
                Technical support available 24/7. Investment inquiries: 
                investments@murivest.co.ke
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#B8956B]/10 text-center text-[10px] uppercase tracking-wider">
            © 2025 Murivest Realty Group. All rights reserved. E&OE.
          </div>
        </div>
      </footer>
    </div>
  )
}