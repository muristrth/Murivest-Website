// app/admin/layout.tsx
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  FileText, 
  Lock, 
  ShoppingCart, 
  CreditCard, 
  Settings,
  Shield,
  ChevronRight,
  LogOut,
  Briefcase,
  History
} from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/investors', label: 'Investor Management', icon: Users },
  { href: '/admin/mandates', label: 'Mandates', icon: Briefcase },
  { href: '/admin/verifications', label: 'Verifications', icon: Shield },
  { href: '/admin/publications', label: 'Publications', icon: BookOpen },
  { href: '/admin/briefs', label: 'Investment Briefs', icon: FileText },
  { href: '/admin/off-market', label: 'Off-Market Deals', icon: Lock },
  { href: '/admin/orders', label: 'Orders', icon: ShoppingCart },
  { href: '/admin/payments', label: 'Payments', icon: CreditCard },
  { href: '/admin/audit-log', label: 'Audit Log', icon: History },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-[#1B4332] text-[#FAF9F6] border-b border-[#B8956B]/20">
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-[#B8956B]" />
              <div>
                <h1 className="font-serif text-xl tracking-wide text-white">Murivest</h1>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">Admin Console</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#FAF9F6]/60">Super Administrator</span>
              <div className="h-4 w-px bg-[#B8956B]/30" />
              <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-white transition-colors">
                <LogOut className="h-4 w-4" />
                Exit
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <nav className="space-y-1 sticky top-24">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-[11px] uppercase tracking-[0.12em] text-[#1B4332]/70 hover:bg-[#1B4332]/5 hover:text-[#1B4332] transition-all duration-200 border-l-2 border-transparent hover:border-[#B8956B]"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Quick Stats */}
            <div className="mt-8 pt-8 border-t border-[#1B4332]/10">
              <div className="px-4 mb-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/40">System Status</div>
              <div className="space-y-3 px-4">
                <div className="flex items-center gap-2 text-xs text-[#2C3E35]/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Database Operational
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2C3E35]/70">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Auth Service Active
                </div>
                <div className="flex items-center gap-2 text-xs text-[#2C3E35]/70">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  3 Pending Verifications
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[#1B4332]/50 mb-6">
              <span className="text-[#B8956B] uppercase tracking-wider">Admin</span>
              <ChevronRight className="h-3 w-3" />
              <span className="uppercase tracking-wider">Console</span>
            </div>

            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
