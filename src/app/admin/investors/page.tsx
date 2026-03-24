// app/admin/investors/page.tsx
import { createAdminClient } from '@/lib/supabase/admin'
import Link from 'next/link'
import { 
  Users, 
  Shield, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Search,
  Filter,
  ArrowUpRight,
  Mail,
  Phone
} from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function AdminInvestorsPage() {
  const supabase = createAdminClient()

  // Fetch investors with their verification status
  const { data: investors, error } = await supabase
    .from('profiles')
    .select(`
      id,
      full_name,
      email,
      organisation,
      title,
      investor_status,
      verified_at,
      verified_by,
      aum,
      investment_focus,
      created_at
    `)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching investors:', error)
  }

  const stats = {
    total: investors?.length || 0,
    registered: investors?.filter(i => i.investor_status === 'registered').length || 0,
    verified: investors?.filter(i => i.investor_status === 'verified').length || 0,
    premium: investors?.filter(i => i.investor_status === 'premium').length || 0,
    admin: investors?.filter(i => i.investor_status === 'admin').length || 0,
  }

  const statusColors = {
    registered: 'bg-gray-100 text-gray-600',
    verified: 'bg-blue-100 text-blue-600',
    premium: 'bg-amber-100 text-amber-600',
    admin: 'bg-purple-100 text-purple-600'
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <p className="text-[10px] tracking-[0.28em] uppercase text-[#B8956B] mb-2">Investor Management</p>
          <h1 className="font-serif text-4xl text-[#1B4332]">All Investors</h1>
        </div>
        <Link 
          href="/admin/investors/new"
          className="inline-flex items-center gap-2 bg-[#1B4332] text-white px-6 py-3 text-xs uppercase tracking-[0.15em] hover:bg-[#2D5A47] transition-colors"
        >
          <Users className="h-4 w-4" />
          Add New Investor
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-white border border-[#1B4332]/10 p-4 text-center">
          <div className="text-2xl font-light text-[#1B4332]">{stats.total}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Total</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4 text-center">
          <div className="text-2xl font-light text-gray-600">{stats.registered}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Registered</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4 text-center">
          <div className="text-2xl font-light text-blue-600">{stats.verified}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Verified</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4 text-center">
          <div className="text-2xl font-light text-amber-600">{stats.premium}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Premium</div>
        </div>
        <div className="bg-white border border-[#1B4332]/10 p-4 text-center">
          <div className="text-2xl font-light text-purple-600">{stats.admin}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#1B4332]/50">Admin</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B4332]/40" />
          <input 
            type="text" 
            placeholder="Search investors..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-[#1B4332]/20 text-sm focus:border-[#B8956B] focus:outline-none"
          />
        </div>
        <select className="bg-white border border-[#1B4332]/20 px-4 py-2 text-sm focus:border-[#B8956B] focus:outline-none">
          <option>All Statuses</option>
          <option>Registered</option>
          <option>Verified</option>
          <option>Premium</option>
          <option>Admin</option>
        </select>
        <select className="bg-white border border-[#1B4332]/20 px-4 py-2 text-sm focus:border-[#B8956B] focus:outline-none">
          <option>All AUM Ranges</option>
          <option>Under $1M</option>
          <option>$1M - $5M</option>
          <option>$5M - $25M</option>
          <option>$25M+</option>
        </select>
      </div>

      {/* Investors Table */}
      <div className="bg-white border border-[#1B4332]/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1B4332]/10 bg-[#FAF9F6]">
              <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Investor</th>
              <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Organisation</th>
              <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">AUM</th>
              <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Joined</th>
              <th className="text-right py-3 px-4 text-[10px] uppercase tracking-[0.15em] text-[#1B4332]/50 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {investors?.map((investor) => (
              <tr key={investor.id} className="border-b border-[#1B4332]/5 hover:bg-[#FAF9F6] transition-colors">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1B4332]/10 flex items-center justify-center">
                      <span className="text-sm font-medium text-[#1B4332]">
                        {investor.full_name?.charAt(0) || 'U'}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-[#1B4332]">{investor.full_name || 'Unnamed'}</div>
                      <div className="flex items-center gap-2 text-xs text-[#2C3E35]/60">
                        <Mail className="h-3 w-3" />
                        {investor.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-[#1B4332]">{investor.organisation || '—'}</div>
                  <div className="text-xs text-[#2C3E35]/60">{investor.title || '—'}</div>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 text-[10px] uppercase tracking-wider ${statusColors[investor.investor_status as keyof typeof statusColors]}`}>
                    {investor.investor_status === 'verified' && <CheckCircle2 className="h-3 w-3" />}
                    {investor.investor_status === 'premium' && <Shield className="h-3 w-3" />}
                    {investor.investor_status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-[#1B4332]">{investor.aum || 'Not specified'}</div>
                  <div className="text-xs text-[#2C3E35]/60">{investor.investment_focus || '—'}</div>
                </td>
                <td className="py-4 px-4">
                  <div className="text-sm text-[#1B4332]">
                    {new Date(investor.created_at).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </div>
                  {investor.verified_at && (
                    <div className="text-xs text-green-600">
                      Verified {new Date(investor.verified_at).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                  )}
                </td>
                <td className="py-4 px-4 text-right">
                  <Link 
                    href={`/admin/investors/${investor.id}`}
                    className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.1em] text-[#B8956B] hover:text-[#1B4332] transition-colors"
                  >
                    Manage
                    <ChevronRight className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}