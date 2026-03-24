// app/admin/dashboard/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import Link from 'next/link'
import { 
  Users, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Clock,
  ArrowRight,
  Shield,
  FileText,
  CreditCard
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminDashboardPage() {
  const supabase = createAdminClient()

  // Fetch comprehensive statistics
  const [
    { count: totalUsers },
    { count: verifiedUsers },
    { count: premiumUsers },
    { count: pendingVerifications },
    { count: publicationCount },
    { count: orderCount },
    { count: pendingOrders },
    { count: paymentCount },
    { count: pendingPayments },
    { count: offMarketCount },
    { count: activeBriefs }
  ] = await Promise.all([
    supabase.from('profiles').select('*', { count: 'exact', head: true }),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'verified'),
    supabase.from('profiles').select('*', { count: 'exact', head: true }).eq('investor_status', 'premium'),
    supabase.from('verification_requests').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
    supabase.from('publications').select('*', { count: 'exact', head: true }),
    supabase.from('brief_orders').select('*', { count: 'exact', head: true }),
    supabase.from('brief_orders').select('*', { count: 'exact', head: true }).in('status', ['pending', 'awaiting_payment']),
    supabase.from('payment_confirmations').select('*', { count: 'exact', head: true }),
    supabase.from('payment_confirmations').select('*', { count: 'exact', head: true }).eq('review_status', 'submitted'),
    supabase.from('off_market_deals').select('*', { count: 'exact', head: true }),
    supabase.from('asset_briefs').select('*', { count: 'exact', head: true }).eq('status', 'active')
  ])

  const statsCards = [
    { 
      label: 'Total Investors', 
      value: totalUsers || 0, 
      subtext: `${verifiedUsers || 0} verified • ${premiumUsers || 0} premium`,
      icon: Users,
      color: 'blue',
      href: '/admin/investors'
    },
    { 
      label: 'Pending Verifications', 
      value: pendingVerifications || 0, 
      subtext: 'Awaiting review',
      icon: Shield,
      color: 'amber',
      href: '/admin/verifications'
    },
    { 
      label: 'Active Orders', 
      value: orderCount || 0, 
      subtext: `${pendingOrders || 0} pending fulfillment`,
      icon: FileText,
      color: 'indigo',
      href: '/admin/orders'
    },
    { 
      label: 'Payment Confirmations', 
      value: paymentCount || 0, 
      subtext: `${pendingPayments || 0} awaiting verification`,
      icon: CreditCard,
      color: 'green',
      href: '/admin/payments'
    },
  ]

  const quickStats = [
    { label: 'Publications', value: publicationCount || 0 },
    { label: 'Off-Market Deals', value: offMarketCount || 0 },
    { label: 'Active Briefs', value: activeBriefs || 0 },
    { label: 'Conversion Rate', value: verifiedUsers && totalUsers ? `${((verifiedUsers / totalUsers) * 100).toFixed(1)}%` : '0%' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Admin Console</p>
        <h1 className="font-serif text-4xl text-[#1B4332]">Dashboard</h1>
        <p className="text-sm text-[#2C3E35]/70 mt-2">
          Overview of investor activity, verifications, and system health.
        </p>
      </div>

      {/* Primary Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statsCards.map((card) => {
          const Icon = card.icon
          const colorClasses = {
            blue: 'bg-blue-50 text-blue-600 border-blue-200',
            amber: 'bg-amber-50 text-amber-600 border-amber-200',
            indigo: 'bg-indigo-50 text-indigo-600 border-indigo-200',
            green: 'bg-green-50 text-green-600 border-green-200'
          }
          
          return (
            <Link 
              key={card.label} 
              href={card.href}
              className="group bg-white border border-[#1B4332]/10 p-6 hover:border-[#B8956B]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 flex items-center justify-center ${colorClasses[card.color as keyof typeof colorClasses]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <ArrowRight className="h-5 w-5 text-[#1B4332]/20 group-hover:text-[#B8956B] transition-colors" />
              </div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#1B4332]/50 mb-2">{card.label}</p>
              <div className="font-serif text-4xl text-[#1B4332] mb-1">{card.value}</div>
              <p className="text-xs text-[#2C3E35]/60">{card.subtext}</p>
            </Link>
          )
        })}
      </div>

      {/* Quick Stats Row */}
      <div className="bg-[#1B4332] text-[#FAF9F6] p-6 rounded-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-light text-[#B8956B] mb-1">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-[#FAF9F6]/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pending Verifications */}
        <div className="bg-white border border-[#1B4332]/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#B8956B]" />
              <h2 className="font-serif text-xl text-[#1B4332]">Pending Verifications</h2>
            </div>
            <Link 
              href="/admin/verifications"
              className="text-[11px] uppercase tracking-[0.15em] text-[#B8956B] hover:text-[#1B4332] transition-colors"
            >
              View All
            </Link>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200">
              <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm font-medium text-amber-800">3 verification requests awaiting review</div>
                <div className="text-xs text-amber-700/70">Oldest request: 2 days ago</div>
              </div>
              <Link 
                href="/admin/verifications"
                className="text-[10px] uppercase tracking-wider text-amber-700 hover:text-amber-900 font-medium"
              >
                Review
              </Link>
            </div>
            
            <div className="text-xs text-[#2C3E35]/60">
              Verification requests require KYC document review and AUM confirmation before approval.
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white border border-[#1B4332]/10 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#B8956B]" />
              <h2 className="font-serif text-xl text-[#1B4332]">System Health</h2>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b border-[#1B4332]/5">
              <span className="text-sm text-[#2C3E35]/70">Database Connection</span>
              <span className="flex items-center gap-2 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Operational
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#1B4332]/5">
              <span className="text-sm text-[#2C3E35]/70">Authentication Service</span>
              <span className="flex items-center gap-2 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#1B4332]/5">
              <span className="text-sm text-[#2C3E35]/70">Email Notifications</span>
              <span className="flex items-center gap-2 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Sending
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-sm text-[#2C3E35]/70">M-Pesa Integration</span>
              <span className="flex items-center gap-2 text-xs text-green-600">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Connected
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-[#FAF9F6] border border-[#B8956B]/20 p-6">
        <h2 className="font-serif text-xl text-[#1B4332] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link 
            href="/admin/investors/new"
            className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#2D5A47] transition-colors"
          >
            <Users className="h-4 w-4" />
            Add Investor
          </Link>
          <Link 
            href="/admin/verifications"
            className="inline-flex items-center gap-2 border border-[#1B4332] text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all"
          >
            <Shield className="h-4 w-4" />
            Review Verifications
          </Link>
          <Link 
            href="/admin/publications/new"
            className="inline-flex items-center gap-2 border border-[#1B4332] text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all"
          >
            <FileText className="h-4 w-4" />
            Add Publication
          </Link>
          <Link 
            href="/admin/off-market/new"
            className="inline-flex items-center gap-2 border border-[#1B4332] text-[#1B4332] px-4 py-2 text-[11px] uppercase tracking-[0.1em] hover:bg-[#1B4332] hover:text-white transition-all"
          >
            <TrendingUp className="h-4 w-4" />
            Add Deal
          </Link>
        </div>
      </div>
    </div>
  )
}