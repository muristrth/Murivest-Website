"use client"

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createClient } from '@/lib/admin/client';
import type { Database } from '@/lib/database.types';
import {
  Building2, DollarSign, Users, TrendingUp, Clock, CheckCircle2,
  AlertTriangle, X, ExternalLink, FileText, Image, Mail, Phone,
  MapPin, Hash, Percent, Calendar, ChevronRight, Filter,
  Search, Download, Eye, Send, Star, BarChart3, Activity,
  Briefcase, User, Crown, Globe, Landmark, HardHat,
  ChevronDown, RefreshCw, MoreHorizontal, ArrowUpRight,
  Shield, Zap, Target, Layers, FileCheck, Loader2
} from 'lucide-react';

// ─── Supabase Types ───────────────────────────────────────────────────────────

type DivestmentSubmission = Database['public']['Tables']['divestment_submissions']['Row'];
type SubmissionActivityLog = Database['public']['Tables']['submission_activity_log']['Row'];
type User = Database['public']['Tables']['users']['Row'];

type SubmissionStatus = Database['public']['Enums']['submission_status'];
type DealPriority = Database['public']['Enums']['deal_priority'];
type SubmitterRole = Database['public']['Enums']['submitter_role'];

// ─── Constants ─────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<SubmissionStatus, { label: string; color: string; bg: string; icon: React.ReactNode; stage: string }> = {
  LEAD_RECEIVED: { label: 'Lead Received', color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: <CheckCircle2 className="w-3.5 h-3.5" />, stage: 'Intake' },
  UNDER_REVIEW: { label: 'Under Review', color: 'text-amber-400', bg: 'bg-amber-500/10', icon: <Eye className="w-3.5 h-3.5" />, stage: 'Intake' },
  QUALIFICATION_CALL: { label: 'Qualification Call', color: 'text-blue-400', bg: 'bg-blue-500/10', icon: <Phone className="w-3.5 h-3.5" />, stage: 'Intake' },
  NDA_PENDING: { label: 'NDA Pending', color: 'text-purple-400', bg: 'bg-purple-500/10', icon: <Shield className="w-3.5 h-3.5" />, stage: 'Engagement' },
  ADVISORY_ENGAGEMENT: { label: 'Advisory Engagement', color: 'text-cyan-400', bg: 'bg-cyan-500/10', icon: <FileCheck className="w-3.5 h-3.5" />, stage: 'Engagement' },
  UNDERWRITING: { label: 'Underwriting', color: 'text-orange-400', bg: 'bg-orange-500/10', icon: <BarChart3 className="w-3.5 h-3.5" />, stage: 'Preparation' },
  INSTITUTIONALIZED: { label: 'Institutionalized', color: 'text-pink-400', bg: 'bg-pink-500/10', icon: <Layers className="w-3.5 h-3.5" />, stage: 'Preparation' },
  ON_MARKET: { label: 'On Market', color: 'text-green-400', bg: 'bg-green-500/10', icon: <Target className="w-3.5 h-3.5" />, stage: 'Marketing' },
  IOI_RECEIVED: { label: 'IOI Received', color: 'text-teal-400', bg: 'bg-teal-500/10', icon: <Mail className="w-3.5 h-3.5" />, stage: 'Bidding' },
  SHORTLISTED: { label: 'Shortlisted', color: 'text-indigo-400', bg: 'bg-indigo-500/10', icon: <Star className="w-3.5 h-3.5" />, stage: 'Bidding' },
  BAFO: { label: 'BAFO', color: 'text-yellow-400', bg: 'bg-yellow-500/10', icon: <Zap className="w-3.5 h-3.5" />, stage: 'Bidding' },
  LOI_NEGOTIATION: { label: 'LOI Negotiation', color: 'text-sky-400', bg: 'bg-sky-500/10', icon: <FileText className="w-3.5 h-3.5" />, stage: 'Negotiation' },
  PSA_NEGOTIATION: { label: 'PSA Negotiation', color: 'text-violet-400', bg: 'bg-violet-500/10', icon: <FileCheck className="w-3.5 h-3.5" />, stage: 'Negotiation' },
  DUE_DILIGENCE: { label: 'Due Diligence', color: 'text-amber-400', bg: 'bg-amber-500/10', icon: <Search className="w-3.5 h-3.5" />, stage: 'Closing' },
  FINANCING: { label: 'Financing', color: 'text-emerald-400', bg: 'bg-emerald-500/10', icon: <DollarSign className="w-3.5 h-3.5" />, stage: 'Closing' },
  CLOSING: { label: 'Closing', color: 'text-rose-400', bg: 'bg-rose-500/10', icon: <CheckCircle2 className="w-3.5 h-3.5" />, stage: 'Closing' },
  CLOSED: { label: 'Closed', color: 'text-green-400', bg: 'bg-green-500/10', icon: <CheckCircle2 className="w-3.5 h-3.5" />, stage: 'Complete' },
  REJECTED: { label: 'Rejected', color: 'text-red-400', bg: 'bg-red-500/10', icon: <AlertTriangle className="w-3.5 h-3.5" />, stage: 'Terminal' },
  WITHDRAWN: { label: 'Withdrawn', color: 'text-zinc-400', bg: 'bg-zinc-500/10', icon: <X className="w-3.5 h-3.5" />, stage: 'Terminal' },
};

const PIPELINE_STAGES = [
  { name: 'Intake', statuses: ['LEAD_RECEIVED', 'UNDER_REVIEW', 'QUALIFICATION_CALL'] as SubmissionStatus[] },
  { name: 'Engagement', statuses: ['NDA_PENDING', 'ADVISORY_ENGAGEMENT'] as SubmissionStatus[] },
  { name: 'Preparation', statuses: ['UNDERWRITING', 'INSTITUTIONALIZED'] as SubmissionStatus[] },
  { name: 'Marketing', statuses: ['ON_MARKET', 'IOI_RECEIVED'] as SubmissionStatus[] },
  { name: 'Bidding', statuses: ['SHORTLISTED', 'BAFO'] as SubmissionStatus[] },
  { name: 'Negotiation', statuses: ['LOI_NEGOTIATION', 'PSA_NEGOTIATION'] as SubmissionStatus[] },
  { name: 'Closing', statuses: ['DUE_DILIGENCE', 'FINANCING', 'CLOSING'] as SubmissionStatus[] },
  { name: 'Complete', statuses: ['CLOSED'] as SubmissionStatus[] },
  { name: 'Terminal', statuses: ['REJECTED', 'WITHDRAWN'] as SubmissionStatus[] },
];

const STATUS_TRANSITIONS: Partial<Record<SubmissionStatus, SubmissionStatus[]>> = {
  LEAD_RECEIVED: ['UNDER_REVIEW', 'REJECTED'],
  UNDER_REVIEW: ['QUALIFICATION_CALL', 'REJECTED', 'LEAD_RECEIVED'],
  QUALIFICATION_CALL: ['NDA_PENDING', 'REJECTED', 'UNDER_REVIEW'],
  NDA_PENDING: ['ADVISORY_ENGAGEMENT', 'REJECTED', 'QUALIFICATION_CALL'],
  ADVISORY_ENGAGEMENT: ['UNDERWRITING', 'REJECTED', 'NDA_PENDING'],
  UNDERWRITING: ['INSTITUTIONALIZED', 'REJECTED', 'ADVISORY_ENGAGEMENT'],
  INSTITUTIONALIZED: ['ON_MARKET', 'UNDERWRITING'],
  ON_MARKET: ['IOI_RECEIVED', 'WITHDRAWN', 'INSTITUTIONALIZED'],
  IOI_RECEIVED: ['SHORTLISTED', 'ON_MARKET'],
  SHORTLISTED: ['BAFO', 'IOI_RECEIVED'],
  BAFO: ['LOI_NEGOTIATION', 'SHORTLISTED'],
  LOI_NEGOTIATION: ['PSA_NEGOTIATION', 'BAFO'],
  PSA_NEGOTIATION: ['DUE_DILIGENCE', 'LOI_NEGOTIATION'],
  DUE_DILIGENCE: ['FINANCING', 'PSA_NEGOTIATION'],
  FINANCING: ['CLOSING', 'DUE_DILIGENCE'],
  CLOSING: ['CLOSED', 'FINANCING'],
  CLOSED: [],
  REJECTED: ['LEAD_RECEIVED'],
  WITHDRAWN: ['LEAD_RECEIVED'],
};

const ROLE_ICONS: Record<string, React.ReactNode> = {
  OWNER: <User className="w-4 h-4" />,
  BROKER: <Briefcase className="w-4 h-4" />,
  DEVELOPER: <HardHat className="w-4 h-4" />,
  REIT: <Landmark className="w-4 h-4" />,
  FAMILY_OFFICE: <Crown className="w-4 h-4" />,
  SOVEREIGN_FUND: <Globe className="w-4 h-4" />,
};

const PRIORITY_COLORS: Record<DealPriority, string> = {
  TROPHY: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  PRIORITY: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  STANDARD: 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  OPPORTUNISTIC: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/30',
};

// ─── Utility ─────────────────────────────────────────────────────────────────

const formatPrice = (amount: number | null, currency: string = 'KES') => {
  if (!amount) return 'N/A';
  return `${currency === 'USD' ? '$' : 'KES'} ${amount.toLocaleString()}`;
};

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return 'N/A';
  return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const formatRelativeTime = (dateStr: string | null) => {
  if (!dateStr) return 'N/A';
  const now = new Date();
  const date = new Date(dateStr);
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return formatDate(dateStr);
};

// ─── Main Component ─────────────────────────────────────────────────────────

const AdminDivestmentDashboard: React.FC = () => {
  const supabase = createClient();

  const [submissions, setSubmissions] = useState<DivestmentSubmission[]>([]);
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSubmission, setSelectedSubmission] = useState<DivestmentSubmission | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activityLog, setActivityLog] = useState<SubmissionActivityLog[]>([]);
  const [activityLoading, setActivityLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'pipeline'>('list');
  const [sortBy, setSortBy] = useState<string>('created_desc');
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // ─── Fetch Submissions ─────────────────────────────────────────────────────

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: supaError } = await supabase
        .from('divestment_submissions')
        .select(`
          *,
          assigned_to:users!divestment_submissions_assigned_to_fkey(id, first_name, last_name, email)
        `)
        .order('created_at', { ascending: false });

      if (supaError) throw supaError;

      // Map assigned user name if joined
      const mapped = (data || []).map((sub: any) => ({
        ...sub,
        assigned_to_name: sub.assigned_to
          ? `${sub.assigned_to.first_name} ${sub.assigned_to.last_name}`
          : null,
      }));

      setSubmissions(mapped);
    } catch (err: any) {
      console.error('Failed to fetch submissions:', err);
      setError(err.message || 'Failed to load submissions');
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  }, [supabase]);

  // ─── Fetch Team Members ────────────────────────────────────────────────────

  const fetchTeamMembers = useCallback(async () => {
    try {
      const { data, error: supaError } = await supabase
        .from('users')
        .select('id, first_name, last_name, email, role, is_active')
        .eq('is_active', true)
        .order('first_name', { ascending: true });

      if (supaError) throw supaError;
      const mapped = (data || []).map((user: any) => ({
        id: String(user.id ?? ''),
        created_at: String(user.created_at ?? ''),
        email: String(user.email ?? ''),
        password_hash: user.password_hash ?? null,
        first_name: String(user.first_name ?? ''),
        last_name: String(user.last_name ?? ''),
        title: user.title !== undefined && user.title !== null ? String(user.title) : null,
        department: user.department !== undefined && user.department !== null ? String(user.department) : null,
        role: String(user.role ?? ''),
        is_active: Boolean(user.is_active ?? false),
        phone: String(user.phone ?? ''),
        avatar_url: String(user.avatar_url ?? ''),
        last_login: user.last_login !== undefined && user.last_login !== null ? String(user.last_login) : null,
        metadata: user.metadata ?? {},
        // Add missing required fields with default values
        profile_image_url: user.profile_image_url !== undefined && user.profile_image_url !== null ? String(user.profile_image_url) : '',
        last_login_at: user.last_login_at !== undefined && user.last_login_at !== null ? String(user.last_login_at) : '',
        login_count: typeof user.login_count === 'number' ? user.login_count : 0,
        commission_split_percentage: typeof user.commission_split_percentage === 'number' ? user.commission_split_percentage : 0,
      }));
      setTeamMembers(mapped);
    } catch (err: any) {
      console.error('Failed to fetch team:', err);
      setTeamMembers([]);
    }
  }, [supabase]);

  // ─── Fetch Activity Log ────────────────────────────────────────────────────

  const fetchActivityLog = useCallback(async (submissionId: string) => {
    setActivityLoading(true);
    try {
      const { data, error: supaError } = await supabase
        .from('submission_activity_log')
        .select(`
          *,
          user:users(first_name, last_name)
        `)
        .eq('submission_id', submissionId)
        .order('created_at', { ascending: false });

      if (supaError) throw supaError;

      const mapped = (data || []).map((log: any) => ({
        ...log,
        user_name: log.user ? `${log.user.first_name} ${log.user.last_name}` : log.user_name,
      }));

      setActivityLog(mapped);
    } catch (err: any) {
      console.error('Failed to fetch activity log:', err);
      setActivityLog([]);
    } finally {
      setActivityLoading(false);
    }
  }, [supabase]);

  // ─── Initial Load ──────────────────────────────────────────────────────────

  useEffect(() => {
    fetchSubmissions();
    fetchTeamMembers();
  }, [fetchSubmissions, fetchTeamMembers]);

  // ─── Load Activity When Panel Opens ────────────────────────────────────────

  useEffect(() => {
    if (selectedSubmission && isPanelOpen) {
      fetchActivityLog(selectedSubmission.id);
    }
  }, [selectedSubmission, isPanelOpen, fetchActivityLog]);

  // ─── Real-time Subscription ────────────────────────────────────────────────

  useEffect(() => {
    const channel = supabase
      .channel('divestment_changes')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'divestment_submissions' },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setSubmissions((prev) => [payload.new as DivestmentSubmission, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setSubmissions((prev) =>
              prev.map((s) => (s.id === payload.new.id ? { ...s, ...payload.new } : s))
            );
            if (selectedSubmission?.id === payload.new.id) {
              setSelectedSubmission((prev) => (prev ? { ...prev, ...payload.new } : null));
            }
          } else if (payload.eventType === 'DELETE') {
            setSubmissions((prev) => prev.filter((s) => s.id !== payload.old.id));
            if (selectedSubmission?.id === payload.old.id) {
              setIsPanelOpen(false);
              setSelectedSubmission(null);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase, selectedSubmission]);

  // ─── Update Status ─────────────────────────────────────────────────────────

  const updateStatus = async (submissionId: string, newStatus: SubmissionStatus, notes?: string) => {
    setActionLoading(`status-${submissionId}`);
    try {
      const { error: supaError } = await supabase
        .from('divestment_submissions')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', submissionId);

      if (supaError) throw supaError;

      // Insert activity log entry manually (trigger also handles this, but this ensures immediate UI feedback)
      await supabase.from('submission_activity_log').insert({
        submission_id: submissionId,
        action: 'STATUS_CHANGE',
        description: notes || `Status updated to ${STATUS_CONFIG[newStatus].label}`,
        new_value: newStatus,
      });

      await fetchSubmissions();
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission((prev) => (prev ? { ...prev, status: newStatus } : null));
        await fetchActivityLog(submissionId);
      }
    } catch (err: any) {
      console.error('Status update failed:', err);
      alert(`Failed to update status: ${err.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  // ─── Assign Submission ─────────────────────────────────────────────────────

  const assignSubmission = async (submissionId: string, userId: string | null) => {
    setActionLoading(`assign-${submissionId}`);
    try {
      const { error: supaError } = await supabase
        .from('divestment_submissions')
        .update({ assigned_to: userId, updated_at: new Date().toISOString() })
        .eq('id', submissionId);

      if (supaError) throw supaError;

      const userName = userId
        ? teamMembers.find((u) => u.id === userId)
          ? `${teamMembers.find((u) => u.id === userId)!.first_name} ${teamMembers.find((u) => u.id === userId)!.last_name}`
          : 'Unknown'
        : 'Unassigned';

      await supabase.from('submission_activity_log').insert({
        submission_id: submissionId,
        action: 'ASSIGNED',
        description: `Assigned to ${userName}`,
        new_value: userId,
      });

      await fetchSubmissions();
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission((prev) =>
          prev
            ? {
                ...prev,
                assigned_to: userId,
                assigned_to_name: userName,
              }
            : null
        );
        await fetchActivityLog(submissionId);
      }
    } catch (err: any) {
      console.error('Assignment failed:', err);
      alert(`Failed to assign: ${err.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  // ─── Generate Teaser ───────────────────────────────────────────────────────

  const generateTeaser = async (submissionId: string) => {
    setActionLoading(`teaser-${submissionId}`);
    try {
      const { error: supaError } = await supabase
        .from('ai_automation_runs')
        .insert({
          automation_type: 'COMMS_DRAFT',
          entity_type: 'SUBMISSION',
          entity_id: submissionId,
          status: 'PENDING',
        });

      if (supaError) throw supaError;

      await supabase.from('submission_activity_log').insert({
        submission_id: submissionId,
        action: 'PDF_GENERATED',
        description: 'Teaser generation initiated',
      });

      alert('Teaser generation queued successfully');
      if (selectedSubmission?.id === submissionId) {
        await fetchActivityLog(submissionId);
      }
    } catch (err: any) {
      console.error('Teaser generation failed:', err);
      alert(`Failed to generate teaser: ${err.message}`);
    } finally {
      setActionLoading(null);
    }
  };

  // ─── Open Slide-over ───────────────────────────────────────────────────────

  const openSubmission = (sub: DivestmentSubmission) => {
    setSelectedSubmission(sub);
    setIsPanelOpen(true);
  };

  // ─── Filtered Submissions ──────────────────────────────────────────────────

  const filteredSubmissions = useMemo(() => {
    return submissions
      .filter((s) => {
        if (statusFilter !== 'ALL' && s.status !== statusFilter) return false;
        if (priorityFilter !== 'ALL' && s.priority !== priorityFilter) return false;
        if (searchQuery) {
          const q = searchQuery.toLowerCase();
          return (
            s.property_name?.toLowerCase().includes(q) ||
            s.reference_number?.toLowerCase().includes(q) ||
            s.lr_number?.toLowerCase().includes(q) ||
            s.owner_full_name?.toLowerCase().includes(q) ||
            s.broker_full_name?.toLowerCase().includes(q) ||
            s.location_city?.toLowerCase().includes(q) ||
            s.location_neighborhood?.toLowerCase().includes(q)
          );
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'created_desc') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        if (sortBy === 'created_asc') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        if (sortBy === 'price_desc') return (b.asking_price || 0) - (a.asking_price || 0);
        if (sortBy === 'score_desc') return (b.ai_deal_score || 0) - (a.ai_deal_score || 0);
        return 0;
      });
  }, [submissions, statusFilter, priorityFilter, searchQuery, sortBy]);

  // ─── Pipeline Counts ───────────────────────────────────────────────────────

  const pipelineCounts = useMemo(() => {
    const counts: Record<string, { count: number; value: number }> = {};
    PIPELINE_STAGES.forEach((stage) => {
      const stageSubs = submissions.filter((s) => stage.statuses.includes(s.status));
      counts[stage.name] = {
        count: stageSubs.length,
        value: stageSubs.reduce((sum, s) => sum + (s.asking_price || 0), 0),
      };
    });
    return counts;
  }, [submissions]);

  // ─── Metrics ───────────────────────────────────────────────────────────────

  const totalPipelineValue = submissions
    .filter((s) => s.status !== 'REJECTED' && s.status !== 'WITHDRAWN')
    .reduce((sum, s) => sum + (s.asking_price || 0), 0);

  const totalClosedValue = submissions
    .filter((s) => s.status === 'CLOSED')
    .reduce((sum, s) => sum + (s.asking_price || 0), 0);

  const avgDealScore =
    submissions.length > 0
      ? submissions.reduce((sum, s) => sum + (s.ai_deal_score || 0), 0) / submissions.length
      : 0;

  const trophyDeals = submissions.filter((s) => s.priority === 'TROPHY').length;

  // ─── File Count Helper ─────────────────────────────────────────────────────

  const getFileCount = async (submissionId: string): Promise<number> => {
    try {
      const { count, error } = await supabase
        .from('submission_media')
        .select('*', { count: 'exact', head: true })
        .eq('submission_id', submissionId);

      if (error) throw error;
      return count || 0;
    } catch {
      return 0;
    }
  };
  console.log(process.env.NEXT_PUBLIC_SUPABASE_URL)
  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="bg-[#050505] text-white min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center border border-amber-500/20">
                <Layers className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h1 className="text-2xl font-black uppercase tracking-tighter">Institutional Divestments</h1>
                <p className="text-xs text-zinc-500">Capital Markets Advisory Pipeline &middot; Murivest Realty</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 text-xs font-semibold transition-colors ${viewMode === 'list' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('pipeline')}
                className={`px-4 py-2 text-xs font-semibold transition-colors ${viewMode === 'pipeline' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'}`}
              >
                Pipeline
              </button>
            </div>
            <button
              onClick={fetchSubmissions}
              disabled={loading}
              className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Error Banner */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3"
          >
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
            <p className="text-sm text-red-300">{error}</p>
            <button onClick={fetchSubmissions} className="ml-auto text-xs text-red-400 hover:text-red-300 underline">
              Retry
            </button>
          </motion.div>
        )}

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: 'Active Pipeline',
              value: formatPrice(totalPipelineValue),
              icon: <TrendingUp className="w-4 h-4" />,
              trend: `${submissions.filter((s) => s.status === 'LEAD_RECEIVED').length} new leads`,
              color: 'text-amber-400',
            },
            {
              label: 'Total Deals',
              value: submissions.length.toString(),
              icon: <Building2 className="w-4 h-4" />,
              trend: `${submissions.filter((s) => s.status === 'LEAD_RECEIVED').length} new leads`,
              color: 'text-blue-400',
            },
            {
              label: 'Avg Deal Score',
              value: avgDealScore.toFixed(1),
              icon: <Star className="w-4 h-4" />,
              trend: '/ 10.0 AI score',
              color: 'text-purple-400',
            },
            {
              label: 'Trophy Assets',
              value: trophyDeals.toString(),
              icon: <Crown className="w-4 h-4" />,
              trend: formatPrice(totalClosedValue) + ' closed',
              color: 'text-emerald-400',
            },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">{kpi.label}</p>
                <div className={`${kpi.color}`}>{kpi.icon}</div>
              </div>
              <p className="text-xl font-black">{kpi.value}</p>
              <p className="text-[10px] text-zinc-600 mt-1">{kpi.trend}</p>
            </div>
          ))}
        </div>

        {/* Pipeline Stages (Pipeline View) */}
        {viewMode === 'pipeline' && (
          <div className="mb-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {PIPELINE_STAGES.map((stage) => {
              const count = pipelineCounts[stage.name]?.count || 0;
              const isActive = count > 0;
              return (
                <button
                  key={stage.name}
                  onClick={() => setStatusFilter(isActive ? stage.statuses[0] : 'ALL')}
                  className={`p-3 rounded-xl border text-center transition-all duration-200 ${isActive ? 'border-amber-500/30 bg-amber-500/5' : 'border-zinc-800 bg-zinc-900/20'}`}
                >
                  <p className={`text-lg font-black ${isActive ? 'text-amber-400' : 'text-zinc-600'}`}>{count}</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1">{stage.name}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search property, LR number, owner, broker..."
              className="bg-transparent text-sm text-white outline-none placeholder:text-zinc-600 w-full"
            />
          </div>
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-zinc-900 border border-zinc-800 text-sm text-white rounded-lg px-4 py-2 pr-8 outline-none focus:border-amber-500/50 cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                <option key={key} value={key}>
                  {config.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-zinc-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="appearance-none bg-zinc-900 border border-zinc-800 text-sm text-white rounded-lg px-4 py-2 pr-8 outline-none focus:border-amber-500/50 cursor-pointer"
            >
              <option value="ALL">All Priorities</option>
              <option value="TROPHY">Trophy</option>
              <option value="PRIORITY">Priority</option>
              <option value="STANDARD">Standard</option>
              <option value="OPPORTUNISTIC">Opportunistic</option>
            </select>
            <ChevronDown className="w-3 h-3 text-zinc-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-zinc-900 border border-zinc-800 text-sm text-white rounded-lg px-4 py-2 pr-8 outline-none focus:border-amber-500/50 cursor-pointer"
            >
              <option value="created_desc">Newest First</option>
              <option value="created_asc">Oldest First</option>
              <option value="price_desc">Highest Price</option>
              <option value="score_desc">Highest Score</option>
            </select>
            <ChevronDown className="w-3 h-3 text-zinc-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Submissions List */}
        <div className="space-y-3">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-6 h-6 border-2 border-zinc-700 border-t-amber-500 rounded-full animate-spin" />
            </div>
          ) : filteredSubmissions.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
              <p className="text-zinc-500 text-sm">
                {error ? 'Failed to load data' : 'No submissions match your filters'}
              </p>
              {!error && (
                <button
                  onClick={() => { setStatusFilter('ALL'); setPriorityFilter('ALL'); setSearchQuery(''); }}
                  className="mt-2 text-xs text-amber-400 hover:text-amber-300 underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            filteredSubmissions.map((sub) => {
              const status = STATUS_CONFIG[sub.status];
              return (
                <motion.div
                  key={sub.id}
                  layout
                  onClick={() => openSubmission(sub)}
                  className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 md:p-5 cursor-pointer hover:border-amber-500/30 hover:bg-zinc-900/60 transition-all duration-200 group"
                >
                  <div className="flex items-start gap-4">
                    {/* Priority Indicator */}
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          sub.priority === 'TROPHY'
                            ? 'bg-purple-400'
                            : sub.priority === 'PRIORITY'
                            ? 'bg-amber-400'
                            : sub.priority === 'STANDARD'
                            ? 'bg-blue-400'
                            : 'bg-zinc-600'
                        }`}
                      />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                            {sub.property_name}
                          </h3>
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border ${PRIORITY_COLORS[sub.priority]}`}
                          >
                            {sub.priority}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}
                          >
                            {status.icon}
                            {status.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-zinc-600 font-mono">{sub.reference_number}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-zinc-600" />
                          <span className="truncate">
                            {sub.location_city}
                            {sub.location_neighborhood ? `, ${sub.location_neighborhood}` : ''}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Hash className="w-3 h-3 text-zinc-600" />
                          <span className="truncate font-mono">{sub.lr_number}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-3 h-3 text-zinc-600" />
                          <span className="font-semibold text-white">{formatPrice(sub.asking_price, sub.currency || 'KES')}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-zinc-600" />
                          <span>{formatRelativeTime(sub.created_at)}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 flex-wrap">
                        {/* AI Score */}
                        {sub.ai_deal_score !== null && sub.ai_deal_score !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span className="text-[10px] text-zinc-400">AI Score</span>
                            <span
                              className={`text-xs font-bold ${
                                sub.ai_deal_score >= 8
                                  ? 'text-emerald-400'
                                  : sub.ai_deal_score >= 6
                                  ? 'text-amber-400'
                                  : 'text-zinc-500'
                              }`}
                            >
                              {sub.ai_deal_score.toFixed(1)}
                            </span>
                          </div>
                        )}
                        {/* Cap Rate */}
                        {sub.cap_rate !== null && sub.cap_rate !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Percent className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">Cap Rate</span>
                            <span className="text-xs font-semibold text-white">{sub.cap_rate}%</span>
                          </div>
                        )}
                        {/* WALE */}
                        {sub.wale_years !== null && sub.wale_years !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">WALE</span>
                            <span className="text-xs font-semibold text-white">{sub.wale_years} yrs</span>
                          </div>
                        )}
                        {/* Occupancy */}
                        {sub.occupancy_rate !== null && sub.occupancy_rate !== undefined && (
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">Occupancy</span>
                            <span className="text-xs font-semibold text-white">{sub.occupancy_rate}%</span>
                          </div>
                        )}
                        {/* Role */}
                        <div className="flex items-center gap-1.5">
                          {ROLE_ICONS[sub.submitter_role] || <User className="w-3 h-3 text-zinc-600" />}
                          <span className="text-[10px] text-zinc-400">{sub.submitter_role.replace(/_/g, ' ')}</span>
                        </div>
                        {/* Assigned */}
                        {sub.assigned_to_name && (
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">{sub.assigned_to_name}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <ChevronRight className="w-4 h-4 text-zinc-700 group-hover:text-amber-500 transition-colors flex-shrink-0 mt-4" />
                  </div>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Slide-Over Panel */}
        <AnimatePresence>
          {isPanelOpen && selectedSubmission && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsPanelOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              {/* Panel */}
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 h-full w-full md:w-[680px] bg-[#080808] border-l border-zinc-800 z-50 overflow-y-auto"
              >
                {/* Panel Header */}
                <div className="sticky top-0 bg-[#080808]/95 backdrop-blur border-b border-zinc-800 px-6 py-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                        {selectedSubmission.reference_number}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${STATUS_CONFIG[selectedSubmission.status].bg} ${STATUS_CONFIG[selectedSubmission.status].color}`}
                      >
                        {STATUS_CONFIG[selectedSubmission.status].icon}
                        {STATUS_CONFIG[selectedSubmission.status].label}
                      </span>
                    </div>
                    <button
                      onClick={() => setIsPanelOpen(false)}
                      className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
                    >
                      <X className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>
                  <h2 className="text-xl font-black mt-3">{selectedSubmission.property_name}</h2>
                  <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {selectedSubmission.location_city}, {selectedSubmission.location_neighborhood}
                    </span>
                    <span className="flex items-center gap-1">
                      <Hash className="w-3 h-3" />
                      {selectedSubmission.lr_number}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(selectedSubmission.created_at)}
                    </span>
                  </div>
                </div>

                <div className="px-6 py-6 space-y-8">
                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button
                      onClick={() => generateTeaser(selectedSubmission.id)}
                      disabled={actionLoading === `teaser-${selectedSubmission.id}`}
                      className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors disabled:opacity-50"
                    >
                      {actionLoading === `teaser-${selectedSubmission.id}` ? (
                        <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                      ) : (
                        <FileText className="w-5 h-5 text-amber-400" />
                      )}
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Generate Teaser</span>
                    </button>
                    {selectedSubmission.admin_onedrive_folder_link && (
                      <a
                        href={selectedSubmission.admin_onedrive_folder_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-blue-400" />
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wide">OneDrive Folder</span>
                      </a>
                    )}
                    <button className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-400" />
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Email Submitter</span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors">
                      <Download className="w-5 h-5 text-purple-400" />
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Export PDF</span>
                    </button>
                  </div>

                  {/* Status Management */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">
                      Status Management
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {STATUS_TRANSITIONS[selectedSubmission.status]?.map((nextStatus) => (
                        <button
                          key={nextStatus}
                          onClick={() => updateStatus(selectedSubmission.id, nextStatus)}
                          disabled={actionLoading === `status-${selectedSubmission.id}`}
                          className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-xs text-white hover:border-amber-500/50 hover:bg-zinc-700 transition-colors disabled:opacity-50"
                        >
                          {actionLoading === `status-${selectedSubmission.id}` ? (
                            <Loader2 className="w-3 h-3 animate-spin inline mr-1" />
                          ) : (
                            '→ '
                          )}
                          {STATUS_CONFIG[nextStatus].label}
                        </button>
                      ))}
                    </div>
                    {/* Assignment */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <span className="text-xs text-zinc-500">Assign to:</span>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => assignSubmission(selectedSubmission.id, null)}
                          disabled={actionLoading === `assign-${selectedSubmission.id}`}
                          className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                            !selectedSubmission.assigned_to
                              ? 'bg-amber-500 text-black font-semibold'
                              : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                          }`}
                        >
                          Unassigned
                        </button>
                        {teamMembers.map((member) => (
                          <button
                            key={member.id}
                            onClick={() => assignSubmission(selectedSubmission.id, member.id)}
                            disabled={actionLoading === `assign-${selectedSubmission.id}`}
                            className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                              selectedSubmission.assigned_to === member.id
                                ? 'bg-amber-500 text-black font-semibold'
                                : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                            }`}
                          >
                            {member.first_name} {member.last_name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Scores */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">
                      AI Analysis
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span
                            className={`text-xl font-black ${
                              (selectedSubmission.ai_deal_score || 0) >= 7
                                ? 'text-emerald-400'
                                : (selectedSubmission.ai_deal_score || 0) >= 5
                                ? 'text-amber-400'
                                : 'text-red-400'
                            }`}
                          >
                            {selectedSubmission.ai_deal_score?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Deal Score</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span
                            className={`text-xl font-black ${
                              (selectedSubmission.ai_investor_readiness || 0) >= 7
                                ? 'text-emerald-400'
                                : (selectedSubmission.ai_investor_readiness || 0) >= 5
                                ? 'text-amber-400'
                                : 'text-red-400'
                            }`}
                          >
                            {selectedSubmission.ai_investor_readiness?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Investor Readiness</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span className="text-xl font-black text-blue-400">—</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Documents</p>
                      </div>
                    </div>
                  </div>

                  {/* Financial Summary */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">
                      Financial Summary
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        {
                          label: 'Asking Price',
                          value: formatPrice(selectedSubmission.asking_price, selectedSubmission.currency || 'KES'),
                        },
                        {
                          label: 'NOI',
                          value: formatPrice(selectedSubmission.net_operating_income, selectedSubmission.currency || 'KES'),
                        },
                        {
                          label: 'Cap Rate',
                          value: selectedSubmission.cap_rate !== null ? `${selectedSubmission.cap_rate}%` : 'N/A',
                        },
                        {
                          label: 'Occupancy',
                          value: selectedSubmission.occupancy_rate !== null ? `${selectedSubmission.occupancy_rate}%` : 'N/A',
                        },
                        {
                          label: 'WALE',
                          value: selectedSubmission.wale_years !== null ? `${selectedSubmission.wale_years} yrs` : 'N/A',
                        },
                        {
                          label: 'Built-Up Area',
                          value: selectedSubmission.total_built_up_area_sqm
                            ? `${selectedSubmission.total_built_up_area_sqm.toLocaleString()} SqM`
                            : 'N/A',
                        },
                      ].map((item) => (
                        <div key={item.label} className="bg-black/30 rounded-lg p-3">
                          <p className="text-[10px] text-zinc-600 uppercase">{item.label}</p>
                          <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submitter Details */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">
                      {selectedSubmission.submitter_role === 'OWNER'
                        ? 'Owner Details'
                        : selectedSubmission.submitter_role === 'BROKER'
                        ? 'Broker Details'
                        : 'Submitter Details'}
                    </p>
                    <div className="space-y-3">
                      {selectedSubmission.owner_full_name && (
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-zinc-600" />
                          <div>
                            <p className="text-sm text-white">{selectedSubmission.owner_full_name}</p>
                            {selectedSubmission.owner_entity_name && (
                              <p className="text-xs text-zinc-500">{selectedSubmission.owner_entity_name}</p>
                            )}
                          </div>
                        </div>
                      )}
                      {selectedSubmission.owner_email && (
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-zinc-600" />
                          <p className="text-sm text-zinc-400">{selectedSubmission.owner_email}</p>
                        </div>
                      )}
                      {selectedSubmission.owner_phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-zinc-600" />
                          <p className="text-sm text-zinc-400">{selectedSubmission.owner_phone}</p>
                        </div>
                      )}
                      {selectedSubmission.broker_full_name && (
                        <div className="flex items-center gap-3 pt-3 border-t border-zinc-800">
                          <Briefcase className="w-4 h-4 text-zinc-600" />
                          <div>
                            <p className="text-sm text-white">{selectedSubmission.broker_full_name}</p>
                            {selectedSubmission.broker_entity_name && (
                              <p className="text-xs text-zinc-500">{selectedSubmission.broker_entity_name}</p>
                            )}
                            {selectedSubmission.broker_earb_number && (
                              <p className="text-xs text-amber-400">EARB: {selectedSubmission.broker_earb_number}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">
                      Activity Log
                    </p>
                    <div className="space-y-3">
                      {activityLoading ? (
                        <div className="flex items-center justify-center py-4">
                          <Loader2 className="w-4 h-4 text-zinc-600 animate-spin" />
                        </div>
                      ) : activityLog.length === 0 ? (
                        <p className="text-xs text-zinc-600">No activity recorded yet</p>
                      ) : (
                        activityLog.map((log) => (
                          <div key={log.id} className="flex gap-3">
                            <div className="w-7 h-7 bg-zinc-800 rounded-full flex items-center justify-center flex-shrink-0">
                              <Activity className="w-3 h-3 text-zinc-500" />
                            </div>
                            <div className="flex-1">
                              <p className="text-xs text-white">{log.description}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                <span className="text-[10px] text-zinc-600">{log.user_name || 'System'}</span>
                                <span className="text-[10px] text-zinc-700">&middot;</span>
                                <span className="text-[10px] text-zinc-600">{formatRelativeTime(log.created_at)}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AdminDivestmentDashboard;