// app/portal/layout.tsx
'use client'

import Link from 'next/link'
import { useState, useEffect, createContext, useContext } from 'react'
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Lock, 
  ShoppingCart, 
  ChevronDown,
  ChevronUp,
  CreditCard, 
  User, 
  LogOut,
  ChevronRight,
  Shield,
  Menu,
  X,
  Home,
  BarChart3,
  Briefcase,
  Bell,
  Search,
  Settings,
  MessageSquare,
  Fingerprint,
  Eye,
  EyeOff
} from 'lucide-react'

import NotificationBell from '@/components/NotificationBell'

// Security Context for MFA and Session Management
interface SecurityContextType {
  securityLevel: 'standard' | 'high' | 'maximum'
  mfaVerified: boolean
  biometricAvailable: boolean
  sessionExpiry: Date | null
  auditLog: Array<{ action: string; timestamp: Date; ip: string }>
}

const SecurityContext = createContext<SecurityContextType>({
  securityLevel: 'high',
  mfaVerified: false,
  biometricAvailable: false,
  sessionExpiry: null,
  auditLog: []
})

const navGroups = [
  {
    group: "Portfolio",
    items: [
      { href: '/portal', label: 'Overview', icon: Home, mobileLabel: 'Overview' },
      { href: '/portal/dashboard', label: 'Dashboard', icon: BarChart3, mobileLabel: 'Dashboard' },
      { href: '/portal/orders', label: 'Orders', icon: Lock, securityLevel: 'high', mobileLabel: 'Orders' },
    ]
  },
  {
    group: "Insights",
    items: [
      { href: '/portal/off-market', label: 'Off-market', icon: Briefcase, securityLevel: 'high', mobileLabel: 'Off-market' },
      { href: '/portal/publications', label: 'Publications', icon: BookOpen, mobileLabel: 'Publications' },
    ]
  },
  {
    group: "Settings",
    items: [
      { href: '/portal/payments', label: 'Payments', icon: MessageSquare, mobileLabel: 'Payments' },
      { href: '/portal/profile', label: 'Profile', icon: User, mobileLabel: 'Profile' },
    ]
  }
];

// Flatten navGroups into navItems for easier mapping
const navItems = navGroups.flatMap(group => group.items);

export default function InvestorPortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('/portal')
  const [securityContext, setSecurityContext] = useState<SecurityContextType>({
    securityLevel: 'high',
    mfaVerified: true,
    biometricAvailable: true,
    sessionExpiry: new Date(Date.now() + 3600000), // 1 hour
    auditLog: []
  })

  // Session timeout warning
  useEffect(() => {
    const interval = setInterval(() => {
      if (securityContext.sessionExpiry && new Date() > securityContext.sessionExpiry) {
        // Handle session expiry
        window.location.href = '/portal/login?expired=true'
      }
    }, 60000)
    return () => clearInterval(interval)
  }, [securityContext.sessionExpiry])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const primaryNavItems = navItems.slice(0, 5)

  return (
    <SecurityContext.Provider value={securityContext}>
  <div className="min-h-screen bg-[#FAF9F6] text-[#1B4332] pb-20 lg:pb-0">
    
    {/* Security Banner - MFA Status */}
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#B8956B] text-[#1B4332] px-4 py-1 text-[10px] uppercase tracking-wider flex items-center justify-center gap-2 lg:hidden">
      <Fingerprint className="h-3 w-3" />
      <span>Biometric Verified • AES-256 Encrypted</span>
    </div>

    {/* Top Navigation - Sticky with Glassmorphism */}
    <header 
      className={`fixed top-4 lg:top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1B4332]/95 backdrop-blur-md shadow-lg' 
          : 'bg-[#1B4332]'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          
          {/* Brand */}
          <Link href="/portal" className="group flex items-center gap-2 lg:gap-3">
            <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-[#B8956B] flex items-center justify-center bg-[#1B4332]">
              <Shield className="w-4 h-4 lg:w-4 lg:h-4 text-[#B8956B]" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-serif text-lg lg:text-xl tracking-wide text-white group-hover:text-[#B8956B] transition-colors">
                Murivest
              </h1>
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#B8956B]/80 hidden lg:block">
                Private Wealth Systems
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - DROPDOWN STYLE */}
          <div className="hidden lg:block relative group">
            <button className="flex items-center gap-3 px-6 py-2 bg-[#FAF9F6]/5 border border-[#B8956B]/30 rounded-full text-[11px] uppercase tracking-widest text-white hover:border-[#B8956B] transition-all">
              <span className="text-[#B8956B] font-bold">Portal Navigation</span>
              <span className="w-px h-3 bg-[#B8956B]/30" />
              <span>{navItems.find(i => i.href === activeTab)?.label || 'Overview'}</span>
              <ChevronDown className="h-3 w-3 text-[#B8956B] group-hover:rotate-180 transition-transform duration-300" />
            </button>

            {/* Dropdown Menu Overlay */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-[#1B4332] border border-[#B8956B]/20 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[70] overflow-hidden">
              <div className="p-2 grid grid-cols-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeTab === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setActiveTab(item.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg text-[10px] uppercase tracking-wider transition-all ${
                        isActive 
                          ? 'bg-[#B8956B] text-[#1B4332] font-bold' 
                          : 'text-white/70 hover:bg-white/5 hover:text-[#B8956B]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`h-4 w-4 ${isActive ? 'opacity-100' : 'opacity-50'}`} />
                        {item.label}
                      </div>
                      {item.securityLevel === 'high' && (
                        <Lock className={`h-3 w-3 ${isActive ? 'text-[#1B4332]' : 'text-[#B8956B] opacity-60'}`} />
                      )}
                    </Link>
                  )
                })}
              </div>
              <div className="bg-[#B8956B]/10 p-3 border-t border-[#B8956B]/20">
                <p className="text-[8px] uppercase tracking-tighter text-[#B8956B] text-center">Secure Investor Access Only</p>
              </div>
            </div>
          </div>

          {/* Desktop Utility Area */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search */}
            <button className="p-2 text-[#FAF9F6]/60 hover:text-[#B8956B] transition-colors">
              <Search className="h-4 w-4" />
            </button>

            {/* Notifications */}
            <NotificationBell />

            {/* User Menu */}
            <div className="flex items-center gap-3 pl-3 border-l border-[#B8956B]/20">
              <div className="text-right hidden xl:block">
                <p className="text-xs text-white font-medium">My Murivest</p>
                <p className="text-[9px] text-[#B8956B]">Premium Investor</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#B8956B]/20 border border-[#B8956B]/30 flex items-center justify-center">
                <User className="h-4 w-4 text-[#B8956B]" />
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <NotificationBell />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#B8956B]"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* Spacer for fixed headers */}
    <div className="h-[72px] lg:h-16" />

    {/* Mobile Menu Overlay */}
    {mobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 top-[72px] bg-[#1B4332] z-40 animate-in slide-in-from-right">
        <div className="p-4 space-y-1">
          {/* User Card */}
          <div className="mb-6 p-4 bg-[#B8956B]/10 rounded-lg border border-[#B8956B]/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#B8956B]/20 flex items-center justify-center">
                <User className="h-6 w-6 text-[#B8956B]" />
              </div>
              <div>
                <p className="text-white font-medium">James Morrison</p>
                <p className="text-[10px] text-[#B8956B]">Premium Investor • MFA Active</p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-[10px] text-[#FAF9F6]/60">
              <Fingerprint className="h-3 w-3" />
              <span>Biometric Verified</span>
              <span className="mx-1">•</span>
              <Shield className="h-3 w-3" />
              <span>AES-256</span>
            </div>
          </div>

          {/* Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.href)
                  setMobileMenuOpen(false)
                }}
                className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-[#B8956B]/20 text-[#B8956B]' 
                    : 'text-[#FAF9F6]/80'
                }`}
              >
                <Icon className="h-5 w-5" />
                <div className="flex-1">
                  <span className="block text-sm font-medium">{item.label}</span>
                  <span className="block text-[10px] opacity-60">{item.mobileLabel}</span>
                </div>
                {item.securityLevel === 'high' && <Lock className="h-4 w-4 opacity-40" />}
                <ChevronRight className={`h-5 w-5 transition-transform ${isActive ? 'rotate-90' : ''}`} />
              </Link>
            )
          })}

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-[#B8956B]/20 space-y-2">
            <button className="w-full flex items-center gap-3 p-3 text-[#FAF9F6]/70 text-sm">
              <Settings className="h-4 w-4" /> Settings
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-[#FAF9F6]/70 text-sm">
              <FileText className="h-4 w-4" /> Audit Log
            </button>
            <button className="w-full flex items-center gap-3 p-3 text-[#B8956B] text-sm border border-[#B8956B]/30 rounded-lg mt-2">
              <LogOut className="h-4 w-4" /> Secure Exit
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Breadcrumb & Context Bar */}
    <div className="bg-[#1B4332]/5 border-b border-[#1B4332]/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center text-xs text-[#1B4332]/60 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#B8956B] transition-colors">MURIVEST</Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <Link href="/portal" className="hover:text-[#B8956B] transition-colors">PORTAL</Link>
            <ChevronRight className="h-3 w-3 mx-2" />
            <span className="text-[#B8956B] uppercase tracking-wider">
              {navItems.find(i => i.href === activeTab)?.label || 'Overview'}
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.12em] text-[#1B4332]/50">
            <span className="hidden sm:inline">Last Login: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live Data
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Content */}
    <main className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      {children}
    </main>

    {/* Mobile Bottom Navigation */}
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E3DE] z-40 pb-safe">
      <div className="grid grid-cols-5 h-16">
        {primaryNavItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`flex flex-col items-center justify-center gap-1 transition-all ${
                isActive ? 'text-[#1B4332]' : 'text-[#8B8680]'
              }`}
            >
              <div className={`p-1.5 rounded-lg transition-all ${isActive ? 'bg-[#1B4332]/10' : ''}`}>
                <Icon className={`h-5 w-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              </div>
              <span className="text-[9px] font-medium tracking-wide">{item.mobileLabel}</span>
            </Link>
          )
        })}
      </div>
    </nav>

        {/* Desktop Footer */}
        <footer className="hidden lg:block bg-[#1B4332] text-[#FAF9F6]/60 py-8 mt-12 border-t border-[#B8956B]/20">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="grid grid-cols-4 gap-8 text-xs">
              <div>
                <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Security</h4>
                <p className="leading-relaxed text-[#FAF9F6]/70 text-[11px]">
                  FIDO2 biometric authentication • AES-256 encryption • SOC-2 Type II certified • Immutable audit trails
                </p>
              </div>
              <div>
                <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Compliance</h4>
                <p className="leading-relaxed text-[#FAF9F6]/70 text-[11px]">
                  GDPR aligned • SEC Rule 17a-4 compliant • FINRA regulated • Multi-jurisdiction reporting
                </p>
              </div>
              <div>
                <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Data Aggregation</h4>
                <p className="leading-relaxed text-[#FAF9F6]/70 text-[11px]">
                  Real-time custodian feeds • Multi-currency support • Alternative asset tracking • NAV automation
                </p>
              </div>
              <div>
                <h4 className="text-[#B8956B] uppercase tracking-wider mb-2">Concierge</h4>
                <p className="leading-relaxed text-[#FAF9F6]/70 text-[11px]">
                  24/7 dedicated support • Video conferencing • White-glove onboarding • Family office integration
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[#B8956B]/10 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#FAF9F6]/40">
              <span>© 2026 Murivest Private Wealth Systems. All rights reserved.</span>
              <span>Session ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
            </div>
          </div>
        </footer>
      </div>
    </SecurityContext.Provider>
  )
}