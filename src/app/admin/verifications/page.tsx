'use client'

import { useEffect, useState, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
  Shield,
  Search,
  ChevronDown,
  Check,
  X,
  AlertCircle,
  RefreshCw,
  User,
  Building2,
  Mail,
  Phone,
  Calendar,
  Filter,
  SlidersHorizontal,
  Crown,
  UserCheck,
  UserX,
  Clock,
  Eye,
  Activity,
} from 'lucide-react'

// ─── Types ────────────────────────────────────────────────────────────────────

type InvestorStatus = 'registered' | 'verified' | 'premium' | 'admin'

interface Profile {
  id: string
  full_name: string | null
  email: string | null
  title: string | null
  organisation: string | null
  phone: string | null
  aum: string | null
  investment_focus: string | null
  investor_status: InvestorStatus
  avatar_url: string | null
  verified_at: string | null
  verified_by: string | null
  verification_notes: string | null
  created_at: string
  updated_at: string
}

type StatusFilter = 'all' | InvestorStatus

// ─── Status Config ─────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<
  InvestorStatus,
  { label: string; color: string; bg: string; border: string; icon: React.ElementType }
> = {
  registered: {
    label: 'Registered',
    color: 'text-[#1B4332]/60',
    bg: 'bg-[#1B4332]/5',
    border: 'border-[#1B4332]/20',
    icon: Clock,
  },
  verified: {
    label: 'Verified',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: UserCheck,
  },
  premium: {
    label: 'Premium',
    color: 'text-[#B8956B]',
    bg: 'bg-[#B8956B]/10',
    border: 'border-[#B8956B]/30',
    icon: Crown,
  },
  admin: {
    label: 'Admin',
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    icon: Shield,
  },
}

const UPGRADE_PATHS: Record<InvestorStatus, InvestorStatus[]> = {
  registered: ['verified', 'premium', 'admin'],
  verified: ['registered', 'premium', 'admin'],
  premium: ['registered', 'verified', 'admin'],
  admin: ['registered', 'verified', 'premium'],
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: InvestorStatus }) {
  const cfg = STATUS_CONFIG[status]
  const Icon = cfg.icon
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-medium border rounded-sm ${cfg.color} ${cfg.bg} ${cfg.border}`}
    >
      <Icon className="h-3 w-3" />
      {cfg.label}
    </span>
  )
}

function Avatar({ profile }: { profile: Profile }) {
  const initials = (profile.full_name ?? profile.email ?? '?')
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  if (profile.avatar_url) {
    return (
      <img
        src={profile.avatar_url}
        alt={profile.full_name ?? ''}
        className="h-10 w-10 rounded-full object-cover border border-[#B8956B]/20"
      />
    )
  }

  const statusColor: Record<InvestorStatus, string> = {
    registered: 'bg-[#1B4332]/10 text-[#1B4332]/60',
    verified: 'bg-emerald-100 text-emerald-700',
    premium: 'bg-[#B8956B]/15 text-[#B8956B]',
    admin: 'bg-violet-100 text-violet-700',
  }

  return (
    <div
      className={`h-10 w-10 rounded-full flex items-center justify-center text-[11px] font-semibold tracking-wide flex-shrink-0 ${statusColor[profile.investor_status]}`}
    >
      {initials}
    </div>
  )
}

function StatusDropdown({
  profile,
  onUpdate,
  updating,
}: {
  profile: Profile
  onUpdate: (id: string, status: InvestorStatus, notes: string) => Promise<void>
  updating: string | null
}) {
  const [open, setOpen] = useState(false)
  const [notes, setNotes] = useState('')
  const [selectedStatus, setSelectedStatus] = useState<InvestorStatus | null>(null)
  const [confirming, setConfirming] = useState(false)

  const isUpdating = updating === profile.id

  const handleSelect = (status: InvestorStatus) => {
    setSelectedStatus(status)
    setConfirming(true)
    setOpen(false)
  }

  const handleConfirm = async () => {
    if (!selectedStatus) return
    await onUpdate(profile.id, selectedStatus, notes)
    setConfirming(false)
    setNotes('')
    setSelectedStatus(null)
  }

  const handleCancel = () => {
    setConfirming(false)
    setNotes('')
    setSelectedStatus(null)
  }

  if (confirming && selectedStatus) {
    return (
      <div className="flex flex-col gap-2 min-w-[240px]">
        <div className="flex items-center gap-2 text-xs text-[#1B4332]/70">
          <span>Change to</span>
          <StatusBadge status={selectedStatus} />
        </div>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Notes (optional) — visible in audit log"
          rows={2}
          className="w-full text-xs border border-[#1B4332]/20 bg-white px-3 py-2 text-[#1B4332] placeholder:text-[#1B4332]/30 resize-none focus:outline-none focus:border-[#B8956B] transition-colors"
        />
        <div className="flex gap-2">
          <button
            onClick={handleConfirm}
            disabled={isUpdating}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1B4332] text-[#FAF9F6] text-[10px] uppercase tracking-[0.12em] hover:bg-[#B8956B] transition-colors disabled:opacity-50"
          >
            {isUpdating ? (
              <RefreshCw className="h-3 w-3 animate-spin" />
            ) : (
              <Check className="h-3 w-3" />
            )}
            Confirm
          </button>
          <button
            onClick={handleCancel}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#1B4332]/20 text-[#1B4332]/60 text-[10px] uppercase tracking-[0.12em] hover:border-[#1B4332]/40 hover:text-[#1B4332] transition-colors"
          >
            <X className="h-3 w-3" />
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        disabled={isUpdating}
        className="flex items-center gap-2 px-3 py-1.5 border border-[#1B4332]/20 text-[10px] uppercase tracking-[0.12em] text-[#1B4332]/70 hover:border-[#B8956B] hover:text-[#1B4332] transition-all duration-200 bg-white disabled:opacity-40"
      >
        {isUpdating ? (
          <RefreshCw className="h-3 w-3 animate-spin" />
        ) : (
          <SlidersHorizontal className="h-3 w-3" />
        )}
        Change Tier
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-[#1B4332]/15 shadow-lg min-w-[180px] py-1">
            <div className="px-3 py-2 text-[9px] uppercase tracking-[0.15em] text-[#1B4332]/40 border-b border-[#1B4332]/10">
              Select new tier
            </div>
            {UPGRADE_PATHS[profile.investor_status].map((status) => {
              const cfg = STATUS_CONFIG[status]
              const Icon = cfg.icon
              return (
                <button
                  key={status}
                  onClick={() => handleSelect(status)}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-left text-xs hover:bg-[#1B4332]/5 transition-colors"
                >
                  <Icon className={`h-3.5 w-3.5 ${cfg.color}`} />
                  <span className={`uppercase tracking-[0.1em] text-[10px] font-medium ${cfg.color}`}>
                    {cfg.label}
                  </span>
                </button>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function AdminVerificationsPage() {
  const supabase = createClient()

  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all')
  const [updating, setUpdating] = useState<string | null>(null)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  // ── Fetch ──────────────────────────────────────────────────────────────────

  const fetchProfiles = useCallback(async () => {
    setLoading(true)
    setError(null)

    const { data, error } = await supabase
      .from('profiles')
      .select(`
        id,
        full_name,
        email,
        title,
        organisation,
        phone,
        aum,
        investment_focus,
        investor_status,
        avatar_url,
        verified_at,
        verified_by,
        verification_notes,
        created_at,
        updated_at
      `)
      .order('created_at', { ascending: false })

    if (error) {
      // Surface a clean message — the raw Supabase error can be verbose
      if (error.message.includes('infinite recursion')) {
        setError(
          'RLS policy error: infinite recursion detected. Please run the fix_admin_rls.sql migration in your Supabase SQL editor.'
        )
      } else {
        setError(error.message)
      }
      setLoading(false)
      return
    }

    setProfiles((data as Profile[]) ?? [])
    setLoading(false)
  }, [supabase])

  useEffect(() => {
    fetchProfiles()
  }, [fetchProfiles])

  // ── Update Status ──────────────────────────────────────────────────────────

  const handleStatusUpdate = async (
    userId: string,
    newStatus: InvestorStatus,
    notes: string
  ) => {
    setUpdating(userId)
    try {
      const updatePayload: Record<string, unknown> = {
        investor_status: newStatus,
        updated_at: new Date().toISOString(),
      }

      if (newStatus === 'verified' || newStatus === 'premium') {
        updatePayload.verified_at = new Date().toISOString()
      }

      if (notes.trim()) {
        updatePayload.verification_notes = notes.trim()
      }

      const { error: updateError } = await supabase
        .from('profiles')
        .update(updatePayload)
        .eq('id', userId)

      if (updateError) throw updateError

      // Write to activity log — non-blocking, ignore failure
      try {
        await supabase.rpc('log_investor_activity', {
          p_user_id: userId,
          p_activity_type: 'status_updated_by_admin',
          p_description: `Investor status changed to ${newStatus} by admin`,
          p_metadata: { new_status: newStatus, notes: notes.trim() || null },
        })
      } catch {
        // ignore failure
      }

      // Optimistic update
      setProfiles((prev) =>
        prev.map((p) =>
          p.id === userId
            ? {
                ...p,
                investor_status: newStatus,
                verified_at:
                  newStatus === 'verified' || newStatus === 'premium'
                    ? new Date().toISOString()
                    : p.verified_at,
                verification_notes: notes.trim() || p.verification_notes,
                updated_at: new Date().toISOString(),
              }
            : p
        )
      )

      showToast('success', `${getDisplayName(userId)} updated to ${STATUS_CONFIG[newStatus].label}`)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Update failed'
      showToast('error', msg)
    } finally {
      setUpdating(null)
    }
  }

  const getDisplayName = (userId: string) => {
    const p = profiles.find((p) => p.id === userId)
    return p?.full_name ?? p?.email ?? 'User'
  }

  // ── Toast ──────────────────────────────────────────────────────────────────

  const showToast = (type: 'success' | 'error', msg: string) => {
    setToast({ type, msg })
    setTimeout(() => setToast(null), 4000)
  }

  // ── Filters ────────────────────────────────────────────────────────────────

  const filtered = profiles.filter((p) => {
    const matchesStatus = statusFilter === 'all' || p.investor_status === statusFilter
    const q = search.toLowerCase()
    const matchesSearch =
      !q ||
      p.full_name?.toLowerCase().includes(q) ||
      p.email?.toLowerCase().includes(q) ||
      p.organisation?.toLowerCase().includes(q)
    return matchesStatus && matchesSearch
  })

  const counts = {
    all: profiles.length,
    registered: profiles.filter((p) => p.investor_status === 'registered').length,
    verified:   profiles.filter((p) => p.investor_status === 'verified').length,
    premium:    profiles.filter((p) => p.investor_status === 'premium').length,
    admin:      profiles.filter((p) => p.investor_status === 'admin').length,
  }

  // ─────────────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-8">

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-6 border-b border-[#1B4332]/10">
        <div>
          <h2 className="font-serif text-3xl text-[#1B4332] tracking-wide">
            Investor Management
          </h2>
          <p className="mt-1 text-sm text-[#1B4332]/50 tracking-wide">
            Manage investor tiers directly — upgrades handled via office contact
          </p>
        </div>
        <button
          onClick={fetchProfiles}
          disabled={loading}
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#1B4332]/50 hover:text-[#B8956B] transition-colors disabled:opacity-40"
        >
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      {/* ── Stat Tabs ── */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {(['all', 'registered', 'verified', 'premium', 'admin'] as const).map((s) => {
          const isAll = s === 'all'
          const cfg = isAll ? null : STATUS_CONFIG[s]
          const Icon = isAll ? User : cfg!.icon
          const active = statusFilter === s
          return (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`relative flex flex-col items-start px-4 py-3 border transition-all duration-200 text-left
                ${active
                  ? 'border-[#B8956B] bg-[#B8956B]/5'
                  : 'border-[#1B4332]/10 bg-white hover:border-[#1B4332]/30'
                }`}
            >
              <div className="flex items-center justify-between w-full mb-1">
                <Icon className={`h-4 w-4 ${active ? 'text-[#B8956B]' : 'text-[#1B4332]/30'}`} />
                <span className={`text-xl font-light tabular-nums ${active ? 'text-[#1B4332]' : 'text-[#1B4332]/60'}`}>
                  {counts[s]}
                </span>
              </div>
              <span className={`text-[9px] uppercase tracking-[0.15em] ${active ? 'text-[#B8956B]' : 'text-[#1B4332]/40'}`}>
                {s === 'all' ? 'All Users' : cfg!.label}
              </span>
              {active && <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B8956B]" />}
            </button>
          )
        })}
      </div>

      {/* ── Search Bar ── */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#1B4332]/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, or organisation…"
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#1B4332]/15 text-sm text-[#1B4332] placeholder:text-[#1B4332]/30 focus:outline-none focus:border-[#B8956B] transition-colors"
          />
        </div>
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#1B4332]/40 bg-white border border-[#1B4332]/15 px-4 py-2.5 select-none">
          <Filter className="h-3.5 w-3.5" />
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* ── Error State ── */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium mb-1">Database Error</p>
            <p className="text-red-600/80">{error}</p>
            {error.includes('infinite recursion') && (
              <p className="mt-2 text-xs text-red-500">
                Run <code className="bg-red-100 px-1 py-0.5 rounded font-mono">fix_admin_rls.sql</code> in your Supabase SQL editor to resolve this.
              </p>
            )}
          </div>
        </div>
      )}

      {/* ── Loading State ── */}
      {loading && (
        <div className="flex items-center justify-center py-20 text-[#1B4332]/30">
          <RefreshCw className="h-5 w-5 animate-spin mr-3" />
          <span className="text-sm uppercase tracking-widest">Loading investors…</span>
        </div>
      )}

      {/* ── Empty State ── */}
      {!loading && !error && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <UserX className="h-10 w-10 text-[#1B4332]/20 mb-4" />
          <p className="text-sm text-[#1B4332]/40 uppercase tracking-widest">No investors found</p>
          {search && (
            <button onClick={() => setSearch('')} className="mt-3 text-xs text-[#B8956B] hover:underline">
              Clear search
            </button>
          )}
        </div>
      )}

      {/* ── Table ── */}
      {!loading && !error && filtered.length > 0 && (
        <div className="bg-white border border-[#1B4332]/10 overflow-hidden">

          {/* Table Header */}
          <div className="hidden lg:grid grid-cols-[1fr_1.2fr_1fr_1fr_auto] gap-4 px-6 py-3 bg-[#1B4332]/[0.03] border-b border-[#1B4332]/10">
            {['Investor', 'Contact', 'Organisation', 'Current Tier', 'Actions'].map((h) => (
              <span key={h} className="text-[9px] uppercase tracking-[0.18em] text-[#1B4332]/40 font-medium">
                {h}
              </span>
            ))}
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#1B4332]/[0.06]">
            {filtered.map((profile) => (
              <div key={profile.id}>

                {/* Main Row */}
                <div className="grid lg:grid-cols-[1fr_1.2fr_1fr_1fr_auto] gap-4 px-6 py-4 items-center hover:bg-[#FAF9F6]/60 transition-colors">

                  {/* Investor */}
                  <div className="flex items-center gap-3 min-w-0">
                    <Avatar profile={profile} />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#1B4332] truncate">
                        {profile.full_name || <span className="text-[#1B4332]/30 italic">No name</span>}
                      </p>
                      <p className="text-[10px] text-[#1B4332]/40 uppercase tracking-wider truncate">
                        {profile.title || 'No title'}
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="hidden lg:block min-w-0">
                    <div className="flex items-center gap-1.5 text-xs text-[#1B4332]/60 truncate">
                      <Mail className="h-3 w-3 flex-shrink-0 text-[#1B4332]/30" />
                      {profile.email || <span className="italic text-[#1B4332]/30">No email</span>}
                    </div>
                    {profile.phone && (
                      <div className="flex items-center gap-1.5 text-xs text-[#1B4332]/50 mt-0.5">
                        <Phone className="h-3 w-3 flex-shrink-0 text-[#1B4332]/30" />
                        {profile.phone}
                      </div>
                    )}
                  </div>

                  {/* Organisation */}
                  <div className="hidden lg:block min-w-0">
                    {profile.organisation ? (
                      <div className="flex items-center gap-1.5 text-xs text-[#1B4332]/60 truncate">
                        <Building2 className="h-3 w-3 flex-shrink-0 text-[#1B4332]/30" />
                        {profile.organisation}
                      </div>
                    ) : (
                      <span className="text-xs text-[#1B4332]/25 italic">—</span>
                    )}
                    {profile.aum && (
                      <p className="text-[10px] text-[#B8956B]/70 mt-0.5 uppercase tracking-wider">
                        AUM: {profile.aum}
                      </p>
                    )}
                  </div>

                  {/* Current Tier */}
                  <div className="flex flex-col gap-1.5">
                    <StatusBadge status={profile.investor_status} />
                    {profile.verified_at && (
                      <div className="flex items-center gap-1 text-[9px] text-[#1B4332]/30">
                        <Calendar className="h-2.5 w-2.5" />
                        {new Date(profile.verified_at).toLocaleDateString('en-GB', {
                          day: '2-digit', month: 'short', year: 'numeric',
                        })}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <StatusDropdown profile={profile} onUpdate={handleStatusUpdate} updating={updating} />
                    <button
                      onClick={() => setExpandedId(expandedId === profile.id ? null : profile.id)}
                      className={`p-1.5 transition-colors ${
                        expandedId === profile.id
                          ? 'text-[#B8956B]'
                          : 'text-[#1B4332]/30 hover:text-[#1B4332]/70'
                      }`}
                      title="View details"
                    >
                      <Eye className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Expanded Detail Panel */}
                {expandedId === profile.id && (
                  <div className="px-6 pb-5 bg-[#FAF9F6]/70 border-t border-[#1B4332]/8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-5">

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#1B4332]/35 mb-2">Contact Details</p>
                        <div className="space-y-1.5">
                          <p className="text-xs text-[#1B4332]/70 flex items-center gap-1.5">
                            <Mail className="h-3 w-3 text-[#1B4332]/30" />
                            {profile.email || '—'}
                          </p>
                          <p className="text-xs text-[#1B4332]/70 flex items-center gap-1.5">
                            <Phone className="h-3 w-3 text-[#1B4332]/30" />
                            {profile.phone || '—'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#1B4332]/35 mb-2">Investment Profile</p>
                        <div className="space-y-1">
                          <p className="text-xs text-[#1B4332]/70">
                            <span className="text-[#1B4332]/40">AUM: </span>{profile.aum || '—'}
                          </p>
                          <p className="text-xs text-[#1B4332]/70">
                            <span className="text-[#1B4332]/40">Focus: </span>{profile.investment_focus || '—'}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#1B4332]/35 mb-2">Account Timeline</p>
                        <div className="space-y-1">
                          <p className="text-xs text-[#1B4332]/70">
                            <span className="text-[#1B4332]/40">Joined: </span>
                            {new Date(profile.created_at).toLocaleDateString('en-GB', {
                              day: '2-digit', month: 'short', year: 'numeric',
                            })}
                          </p>
                          {profile.verified_at && (
                            <p className="text-xs text-[#1B4332]/70">
                              <span className="text-[#1B4332]/40">Tier granted: </span>
                              {new Date(profile.verified_at).toLocaleDateString('en-GB', {
                                day: '2-digit', month: 'short', year: 'numeric',
                              })}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.18em] text-[#1B4332]/35 mb-2">Admin Notes</p>
                        <p className="text-xs text-[#1B4332]/60 leading-relaxed">
                          {profile.verification_notes || (
                            <span className="italic text-[#1B4332]/30">No notes recorded</span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#1B4332]/8 flex items-center gap-2">
                      <Activity className="h-3 w-3 text-[#1B4332]/25" />
                      <span className="text-[9px] text-[#1B4332]/30 uppercase tracking-widest font-mono">
                        UID: {profile.id}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 text-sm shadow-lg border
            ${toast.type === 'success'
              ? 'bg-[#1B4332] text-[#FAF9F6] border-[#B8956B]/30'
              : 'bg-red-600 text-white border-red-500'
            }`}
        >
          {toast.type === 'success' ? (
            <Check className="h-4 w-4 text-[#B8956B]" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          {toast.msg}
        </div>
      )}
    </div>
  )
}