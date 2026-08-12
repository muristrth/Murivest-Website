// app/advisor/layout.tsx
import Link from 'next/link'
import {
  LayoutDashboard,
  Briefcase,
  Users,
  ListChecks,
  MessageSquare,
  Compass,
  Activity,
  Shield,
  ChevronRight,
  LogOut,
} from 'lucide-react'
import { requireAdvisor } from '@/lib/auth/requireRole'

const navItems = [
  { href: '/advisor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/advisor/mandates', label: 'Mandates', icon: Briefcase },
  { href: '/advisor/investors', label: 'Investors', icon: Users },
  { href: '/advisor/opportunities', label: 'Opportunities', icon: Compass },
  { href: '/advisor/tasks', label: 'Tasks', icon: ListChecks },
  { href: '/advisor/enquiries', label: 'Enquiries', icon: MessageSquare },
  { href: '/advisor/activity', label: 'Activity', icon: Activity },
]

export default async function AdvisorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await requireAdvisor()
  const name = user.profile?.full_name || user.user.email

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
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#B8956B]/80">Advisor Workspace</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-[#FAF9F6]/60">{name}</span>
              <div className="h-4 w-px bg-[#B8956B]/30" />
              <Link
                href="/portal/login"
                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-white transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Exit
              </Link>
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
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-[#1B4332]/50 mb-6">
              <span className="text-[#B8956B] uppercase tracking-wider">Advisor</span>
              <ChevronRight className="h-3 w-3" />
              <span className="uppercase tracking-wider">Workspace</span>
            </div>

            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
