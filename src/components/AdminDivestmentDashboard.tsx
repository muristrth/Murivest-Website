"use client"

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, DollarSign, Users, TrendingUp, Clock, CheckCircle2,
  AlertTriangle, X, ExternalLink, FileText, Image, Mail, Phone,
  MapPin, Hash, Percent, Calendar, ChevronRight, Filter,
  Search, Download, Eye, Send, Star, BarChart3, Activity,
  Briefcase, User, Crown, Globe, Landmark, HardHat,
  ChevronDown, RefreshCw, MoreHorizontal, ArrowUpRight,
  Shield, Zap, Target, Layers, FileCheck
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type SubmissionStatus =
  | 'LEAD_RECEIVED' | 'UNDER_REVIEW' | 'QUALIFICATION_CALL' | 'NDA_PENDING'
  | 'ADVISORY_ENGAGEMENT' | 'UNDERWRITING' | 'INSTITUTIONALIZED' | 'ON_MARKET'
  | 'IOI_RECEIVED' | 'SHORTLISTED' | 'BAFO' | 'LOI_NEGOTIATION'
  | 'PSA_NEGOTIATION' | 'DUE_DILIGENCE' | 'FINANCING' | 'CLOSING'
  | 'CLOSED' | 'REJECTED' | 'WITHDRAWN';

type Priority = 'TROPHY' | 'PRIORITY' | 'STANDARD' | 'OPPORTUNISTIC';
type Role = 'OWNER' | 'BROKER' | 'DEVELOPER' | 'REIT' | 'FAMILY_OFFICE' | 'SOVEREIGN_FUND';

interface DivestmentSubmission {
  id: string;
  reference_number: string;
  created_at: string;
  updated_at: string;
  status: SubmissionStatus;
  priority: Priority;
  submitter_role: Role;
  property_name: string;
  asset_class: string;
  location_city: string;
  location_neighborhood: string;
  lr_number: string;
  asking_price: number | null;
  currency: string;
  cap_rate: number | null;
  noi: number | null;
  occupancy_rate: number | null;
  wale_years: number | null;
  anchor_tenant_name: string | null;
  building_grade: string | null;
  year_built: number | null;
  total_built_up_area_sqm: number | null;
  net_operating_income: number | null;
  owner_full_name: string | null;
  owner_entity_name: string | null;
  owner_email: string | null;
  owner_phone: string | null;
  broker_full_name: string | null;
  broker_entity_name: string | null;
  broker_email: string | null;
  broker_phone: string | null;
  broker_earb_number: string | null;
  broker_has_earb: boolean;
  broker_mandate_chain: string | null;
  marketing_rights_granted: boolean;
  ai_deal_score: number | null;
  ai_investor_readiness: number | null;
  qualification_notes: string | null;
  rejection_reason: string | null;
  admin_onedrive_folder_link: string | null;
  assigned_to: string | null;
  assigned_to_name: string | null;
  exclusivity_period_days: number | null;
  divestment_reason: string | null;
  source: string;
  file_count: number;
}

interface ActivityLogEntry {
  id: string;
  action: string;
  description: string;
  old_value: string | null;
  new_value: string | null;
  created_at: string;
  user_name: string | null;
}

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
  { name: 'Intake', statuses: ['LEAD_RECEIVED', 'UNDER_REVIEW', 'QUALIFICATION_CALL'] },
  { name: 'Engagement', statuses: ['NDA_PENDING', 'ADVISORY_ENGAGEMENT'] },
  { name: 'Preparation', statuses: ['UNDERWRITING', 'INSTITUTIONALIZED'] },
  { name: 'Marketing', statuses: ['ON_MARKET', 'IOI_RECEIVED'] },
  { name: 'Bidding', statuses: ['SHORTLISTED', 'BAFO'] },
  { name: 'Negotiation', statuses: ['LOI_NEGOTIATION', 'PSA_NEGOTIATION'] },
  { name: 'Closing', statuses: ['DUE_DILIGENCE', 'FINANCING', 'CLOSING'] },
  { name: 'Complete', statuses: ['CLOSED'] },
  { name: 'Terminal', statuses: ['REJECTED', 'WITHDRAWN'] },
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

const TEAM_MEMBERS = [
  { id: '1', name: 'Unassigned' },
  { id: '2', name: 'Sarah Kimani' },
  { id: '3', name: 'James Mwangi' },
  { id: '4', name: 'Amina Hassan' },
  { id: '5', name: 'David Ochieng' },
];

const ROLE_ICONS: Record<string, React.ReactNode> = {
  OWNER: <User className="w-4 h-4" />,
  BROKER: <Briefcase className="w-4 h-4" />,
  DEVELOPER: <HardHat className="w-4 h-4" />,
  REIT: <Landmark className="w-4 h-4" />,
  FAMILY_OFFICE: <Crown className="w-4 h-4" />,
  SOVEREIGN_FUND: <Globe className="w-4 h-4" />,
};

const PRIORITY_COLORS: Record<Priority, string> = {
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

const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

const formatRelativeTime = (dateStr: string) => {
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
  const [submissions, setSubmissions] = useState<DivestmentSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<DivestmentSubmission | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [activityLog, setActivityLog] = useState<ActivityLogEntry[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'pipeline'>('list');
  const [sortBy, setSortBy] = useState<string>('created_desc');

  // Fetch submissions
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/divestment/divestments');
      const data = await res.json();
      setSubmissions(data.submissions || []);
    } catch (err) {
      console.error('Failed to fetch:', err);
      // Load sample data for demo
      setSubmissions([
        { id: '1', reference_number: 'MRV-2026-00001', created_at: '2026-05-07T10:30:00Z', updated_at: '2026-05-07T10:30:00Z', status: 'LEAD_RECEIVED', priority: 'PRIORITY', submitter_role: 'OWNER', property_name: 'Westpark Towers', asset_class: 'OFFICE', location_city: 'Nairobi', location_neighborhood: 'Westlands', lr_number: '209/10842/1', asking_price: 850000000, currency: 'KES', cap_rate: 8.5, noi: 72250000, occupancy_rate: 92, wale_years: 4.2, anchor_tenant_name: 'Safaricom PLC', building_grade: 'A', year_built: 2010, total_built_up_area_sqm: 12000, net_operating_income: 72250000, owner_full_name: 'John Kamau Mwangi', owner_entity_name: 'Westpark Properties Ltd', owner_email: 'john@westpark.co.ke', owner_phone: '+254 722 123456', broker_full_name: null, broker_entity_name: null, broker_email: null, broker_phone: null, broker_earb_number: null, broker_has_earb: true, broker_mandate_chain: null, marketing_rights_granted: false, ai_deal_score: 8.2, ai_investor_readiness: 7.5, qualification_notes: null, rejection_reason: null, admin_onedrive_folder_link: null, assigned_to: '2', assigned_to_name: 'Sarah Kimani', exclusivity_period_days: 60, divestment_reason: 'PORTFOLIO_REBALANCING', source: 'WEB_FORM', file_count: 8 },
        { id: '2', reference_number: 'MRV-2026-00002', created_at: '2026-05-06T14:15:00Z', updated_at: '2026-05-07T09:00:00Z', status: 'UNDER_REVIEW', priority: 'TROPHY', submitter_role: 'BROKER', property_name: 'Gateway Business Park', asset_class: 'LOGISTICS', location_city: 'Nairobi', location_neighborhood: 'Mombasa Road', lr_number: '330/1234/5', asking_price: 2500000000, currency: 'KES', cap_rate: 9.2, noi: 230000000, occupancy_rate: 100, wale_years: 7.5, anchor_tenant_name: 'DHL Express', building_grade: 'A', year_built: 2018, total_built_up_area_sqm: 35000, net_operating_income: 230000000, owner_full_name: null, owner_entity_name: null, owner_email: null, owner_phone: null, broker_full_name: 'Jane Oduor', broker_entity_name: 'Metropolitan Real Estate', broker_email: 'jane@metro.co.ke', broker_phone: '+254 733 987654', broker_earb_number: 'EARB/2023/00456', broker_has_earb: true, broker_mandate_chain: 'DIRECT', marketing_rights_granted: false, ai_deal_score: 9.1, ai_investor_readiness: 8.8, qualification_notes: 'Strong logistics asset with long-term tenant', rejection_reason: null, admin_onedrive_folder_link: null, assigned_to: '3', assigned_to_name: 'James Mwangi', exclusivity_period_days: 90, divestment_reason: 'FUND_MATURITY', source: 'BROKER_NETWORK', file_count: 12 },
        { id: '3', reference_number: 'MRV-2026-00003', created_at: '2026-05-05T08:45:00Z', updated_at: '2026-05-06T16:20:00Z', status: 'QUALIFICATION_CALL', priority: 'STANDARD', submitter_role: 'DEVELOPER', property_name: 'Kilimani Heights Residences', asset_class: 'RESIDENTIAL_BLOCK', location_city: 'Nairobi', location_neighborhood: 'Kilimani', lr_number: '36/452/7', asking_price: 420000000, currency: 'KES', cap_rate: null, noi: null, occupancy_rate: null, wale_years: null, anchor_tenant_name: null, building_grade: 'B', year_built: 2015, total_built_up_area_sqm: 8500, net_operating_income: null, owner_full_name: null, owner_entity_name: 'Kilimani Heights Development Ltd', owner_email: 'sales@kilimaniheights.co.ke', owner_phone: null, broker_full_name: null, broker_entity_name: null, broker_email: null, broker_phone: null, broker_earb_number: null, broker_has_earb: true, broker_mandate_chain: null, marketing_rights_granted: false, ai_deal_score: 5.8, ai_investor_readiness: 4.2, qualification_notes: null, rejection_reason: null, admin_onedrive_folder_link: null, assigned_to: '4', assigned_to_name: 'Amina Hassan', exclusivity_period_days: 60, divestment_reason: 'CAPITAL_RECYCLING', source: 'WEB_FORM', file_count: 5 },
        { id: '4', reference_number: 'MRV-2026-00004', created_at: '2026-05-04T11:00:00Z', updated_at: '2026-05-05T14:30:00Z', status: 'INSTITUTIONALIZED', priority: 'PRIORITY', submitter_role: 'FAMILY_OFFICE', property_name: 'The Sovereign Centre', asset_class: 'MIXED_USE', location_city: 'Nairobi', location_neighborhood: 'Upper Hill', lr_number: '208/8976/3', asking_price: 1800000000, currency: 'KES', cap_rate: 7.8, noi: 140400000, occupancy_rate: 88, wale_years: 5.3, anchor_tenant_name: 'KCB Bank', building_grade: 'A', year_built: 2012, total_built_up_area_sqm: 28000, net_operating_income: 140400000, owner_full_name: null, owner_entity_name: 'The Sovereign Family Office', owner_email: 'investments@sovereign.fo', owner_phone: '+254 722 345678', broker_full_name: null, broker_entity_name: null, broker_email: null, broker_phone: null, broker_earb_number: null, broker_has_earb: true, broker_mandate_chain: null, marketing_rights_granted: true, ai_deal_score: 8.5, ai_investor_readiness: 8.0, qualification_notes: 'Premium mixed-use with institutional tenants', rejection_reason: null, admin_onedrive_folder_link: 'https://murivest-my.sharepoint.com/...', assigned_to: '2', assigned_to_name: 'Sarah Kimani', exclusivity_period_days: 90, divestment_reason: 'PORTFOLIO_REBALANCING', source: 'REFERRAL', file_count: 15 },
        { id: '5', reference_number: 'MRV-2026-00005', created_at: '2026-05-03T16:30:00Z', updated_at: '2026-05-04T10:00:00Z', status: 'REJECTED', priority: 'OPPORTUNISTIC', submitter_role: 'OWNER', property_name: 'Riverside Apartments', asset_class: 'RESIDENTIAL_BLOCK', location_city: 'Nairobi', location_neighborhood: 'Riverside', lr_number: '1/234/5', asking_price: 120000000, currency: 'KES', cap_rate: null, noi: null, occupancy_rate: null, wale_years: null, anchor_tenant_name: null, building_grade: 'C', year_built: 1995, total_built_up_area_sqm: 3000, net_operating_income: null, owner_full_name: 'Peter Njoroge', owner_entity_name: null, owner_email: 'peter@email.com', owner_phone: '+254 711 223344', broker_full_name: null, broker_entity_name: null, broker_email: null, broker_phone: null, broker_earb_number: null, broker_has_earb: true, broker_mandate_chain: null, marketing_rights_granted: false, ai_deal_score: 3.1, ai_investor_readiness: 2.5, qualification_notes: null, rejection_reason: 'Below minimum transaction size and asset quality below institutional threshold', admin_onedrive_folder_link: null, assigned_to: null, assigned_to_name: null, exclusivity_period_days: null, divestment_reason: 'DISTRESSED_SALE', source: 'WEB_FORM', file_count: 3 },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch activity log when submission selected
  useEffect(() => {
    if (selectedSubmission) {
      fetchActivityLog(selectedSubmission.id);
    }
  }, [selectedSubmission]);

  const fetchActivityLog = async (submissionId: string) => {
    try {
      const res = await fetch(`/api/divestment/activity-log?submissionId=${submissionId}`);
      const data = await res.json();
      setActivityLog(data.activities || []);
    } catch {
      setActivityLog([
        { id: '1', action: 'STATUS_CHANGE', description: 'Submission received via web form', old_value: null, new_value: 'LEAD_RECEIVED', created_at: selectedSubmission?.created_at || '', user_name: 'System' },
        { id: '2', action: 'ASSIGNED', description: 'Lead assigned to advisor', old_value: null, new_value: selectedSubmission?.assigned_to_name || null, created_at: selectedSubmission?.updated_at || '', user_name: 'System' },
      ]);
    }
  };

  // Filtered submissions
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(s => {
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
    }).sort((a, b) => {
      if (sortBy === 'created_desc') return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      if (sortBy === 'created_asc') return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      if (sortBy === 'price_desc') return (b.asking_price || 0) - (a.asking_price || 0);
      if (sortBy === 'score_desc') return (b.ai_deal_score || 0) - (a.ai_deal_score || 0);
      return 0;
    });
  }, [submissions, statusFilter, priorityFilter, searchQuery, sortBy]);

  // Pipeline counts
  const pipelineCounts = useMemo(() => {
    const counts: Record<string, { count: number; value: number }> = {};
    PIPELINE_STAGES.forEach(stage => {
      const stageSubs = submissions.filter(s => stage.statuses.includes(s.status));
      counts[stage.name] = {
        count: stageSubs.length,
        value: stageSubs.reduce((sum, s) => sum + (s.asking_price || 0), 0),
      };
    });
    return counts;
  }, [submissions]);

  // Metrics
  const totalPipelineValue = submissions
    .filter(s => s.status !== 'REJECTED' && s.status !== 'WITHDRAWN')
    .reduce((sum, s) => sum + (s.asking_price || 0), 0);

  const totalClosedValue = submissions
    .filter(s => s.status === 'CLOSED')
    .reduce((sum, s) => sum + (s.asking_price || 0), 0);

  const avgDealScore = submissions.length > 0
    ? submissions.reduce((sum, s) => sum + (s.ai_deal_score || 0), 0) / submissions.length
    : 0;

  const trophyDeals = submissions.filter(s => s.priority === 'TROPHY').length;

  // Status update
  const updateStatus = async (submissionId: string, newStatus: SubmissionStatus, notes?: string) => {
    try {
      await fetch('/api/divestment/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId, newStatus, notes }),
      });
      await fetchSubmissions();
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission(prev => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (err) {
      console.error('Status update failed:', err);
    }
  };

  // Assign
  const assignSubmission = async (submissionId: string, userId: string, userName: string) => {
    try {
      await fetch('/api/divestment/assign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId, userId, userName }),
      });
      await fetchSubmissions();
      if (selectedSubmission?.id === submissionId) {
        setSelectedSubmission(prev => prev ? { ...prev, assigned_to: userId, assigned_to_name: userName } : null);
      }
    } catch (err) {
      console.error('Assignment failed:', err);
    }
  };

  // Open slide-over
  const openSubmission = (sub: DivestmentSubmission) => {
    setSelectedSubmission(sub);
    setIsPanelOpen(true);
  };

  // Generate teaser
  const generateTeaser = async (submissionId: string) => {
    try {
      await fetch('/api/divestment/generate-teaser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId }),
      });
    } catch (err) {
      console.error('Teaser generation failed:', err);
    }
  };

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
              <button onClick={() => setViewMode('list')} className={`px-4 py-2 text-xs font-semibold transition-colors ${viewMode === 'list' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'}`}>List</button>
              <button onClick={() => setViewMode('pipeline')} className={`px-4 py-2 text-xs font-semibold transition-colors ${viewMode === 'pipeline' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'}`}>Pipeline</button>
            </div>
            <button onClick={fetchSubmissions} className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400 hover:text-white transition-colors">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Active Pipeline', value: formatPrice(totalPipelineValue), icon: <TrendingUp className="w-4 h-4" />, trend: '+12% vs last month', color: 'text-amber-400' },
            { label: 'Total Deals', value: submissions.length.toString(), icon: <Building2 className="w-4 h-4" />, trend: `${submissions.filter(s => s.status === 'LEAD_RECEIVED').length} new leads`, color: 'text-blue-400' },
            { label: 'Avg Deal Score', value: avgDealScore.toFixed(1), icon: <Star className="w-4 h-4" />, trend: '/ 10.0 AI score', color: 'text-purple-400' },
            { label: 'Trophy Assets', value: trophyDeals.toString(), icon: <Crown className="w-4 h-4" />, trend: formatPrice(totalClosedValue) + ' closed', color: 'text-emerald-400' },
          ].map(kpi => (
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
            {PIPELINE_STAGES.map(stage => {
              const count = pipelineCounts[stage.name]?.count || 0;
              const isActive = count > 0;
              return (
                <button key={stage.name} onClick={() => setStatusFilter(isActive ? stage.statuses[0] : 'ALL')}
                  className={`p-3 rounded-xl border text-center transition-all duration-200 ${isActive ? 'border-amber-500/30 bg-amber-500/5' : 'border-zinc-800 bg-zinc-900/20'}`}>
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
                <option key={key} value={key}>{config.label}</option>
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
              <p className="text-zinc-500 text-sm">No submissions match your filters</p>
            </div>
          ) : (
            filteredSubmissions.map(sub => {
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
                      <div className={`w-2 h-2 rounded-full ${sub.priority === 'TROPHY' ? 'bg-purple-400' : sub.priority === 'PRIORITY' ? 'bg-amber-400' : sub.priority === 'STANDARD' ? 'bg-blue-400' : 'bg-zinc-600'}`} />
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">{sub.property_name}</h3>
                          <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full border ${PRIORITY_COLORS[sub.priority]}`}>
                            {sub.priority}
                          </span>
                          <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${status.bg} ${status.color}`}>
                            {status.icon}{status.label}
                          </span>
                        </div>
                        <span className="text-[10px] text-zinc-600 font-mono">{sub.reference_number}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1 text-xs text-zinc-400">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3 h-3 text-zinc-600" />
                          <span className="truncate">{sub.location_city}{sub.location_neighborhood ? `, ${sub.location_neighborhood}` : ''}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Hash className="w-3 h-3 text-zinc-600" />
                          <span className="truncate font-mono">{sub.lr_number}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <DollarSign className="w-3 h-3 text-zinc-600" />
                          <span className="font-semibold text-white">{formatPrice(sub.asking_price, sub.currency)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-zinc-600" />
                          <span>{formatRelativeTime(sub.created_at)}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mt-3 flex-wrap">
                        {/* AI Score */}
                        {sub.ai_deal_score && (
                          <div className="flex items-center gap-1.5">
                            <Zap className="w-3 h-3 text-amber-400" />
                            <span className="text-[10px] text-zinc-400">AI Score</span>
                            <span className={`text-xs font-bold ${sub.ai_deal_score >= 8 ? 'text-emerald-400' : sub.ai_deal_score >= 6 ? 'text-amber-400' : 'text-zinc-500'}`}>{sub.ai_deal_score.toFixed(1)}</span>
                          </div>
                        )}
                        {/* Cap Rate */}
                        {sub.cap_rate && (
                          <div className="flex items-center gap-1.5">
                            <Percent className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">Cap Rate</span>
                            <span className="text-xs font-semibold text-white">{sub.cap_rate}%</span>
                          </div>
                        )}
                        {/* WALE */}
                        {sub.wale_years && (
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">WALE</span>
                            <span className="text-xs font-semibold text-white">{sub.wale_years} yrs</span>
                          </div>
                        )}
                        {/* Occupancy */}
                        {sub.occupancy_rate && (
                          <div className="flex items-center gap-1.5">
                            <Users className="w-3 h-3 text-zinc-600" />
                            <span className="text-[10px] text-zinc-400">Occupancy</span>
                            <span className="text-xs font-semibold text-white">{sub.occupancy_rate}%</span>
                          </div>
                        )}
                        {/* Files */}
                        <div className="flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-zinc-600" />
                          <span className="text-[10px] text-zinc-400">Files</span>
                          <span className="text-xs font-semibold text-white">{sub.file_count}</span>
                        </div>
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
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setIsPanelOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              />
              {/* Panel */}
              <motion.div
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="fixed right-0 top-0 h-full w-full md:w-[680px] bg-[#080808] border-l border-zinc-800 z-50 overflow-y-auto"
              >
                {/* Panel Header */}
                <div className="sticky top-0 bg-[#080808]/95 backdrop-blur border-b border-zinc-800 px-6 py-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">{selectedSubmission.reference_number}</span>
                      <span className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${STATUS_CONFIG[selectedSubmission.status].bg} ${STATUS_CONFIG[selectedSubmission.status].color}`}>
                        {STATUS_CONFIG[selectedSubmission.status].icon}{STATUS_CONFIG[selectedSubmission.status].label}
                      </span>
                    </div>
                    <button onClick={() => setIsPanelOpen(false)} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
                      <X className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>
                  <h2 className="text-xl font-black mt-3">{selectedSubmission.property_name}</h2>
                  <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{selectedSubmission.location_city}, {selectedSubmission.location_neighborhood}</span>
                    <span className="flex items-center gap-1"><Hash className="w-3 h-3" />{selectedSubmission.lr_number}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(selectedSubmission.created_at)}</span>
                  </div>
                </div>

                <div className="px-6 py-6 space-y-8">
                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <button onClick={() => generateTeaser(selectedSubmission.id)} className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors">
                      <FileText className="w-5 h-5 text-amber-400" />
                      <span className="text-[10px] text-zinc-400 uppercase tracking-wide">Generate Teaser</span>
                    </button>
                    {selectedSubmission.admin_onedrive_folder_link && (
                      <a href={selectedSubmission.admin_onedrive_folder_link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/30 transition-colors">
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
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">Status Management</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {STATUS_TRANSITIONS[selectedSubmission.status]?.map(nextStatus => (
                        <button key={nextStatus} onClick={() => updateStatus(selectedSubmission.id, nextStatus)}
                          className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-lg text-xs text-white hover:border-amber-500/50 hover:bg-zinc-700 transition-colors">
                          → {STATUS_CONFIG[nextStatus].label}
                        </button>
                      ))}
                    </div>
                    {/* Assignment */}
                    <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                      <span className="text-xs text-zinc-500">Assign to:</span>
                      <div className="flex flex-wrap gap-2">
                        {TEAM_MEMBERS.map(member => (
                          <button key={member.id} onClick={() => assignSubmission(selectedSubmission.id, member.id, member.name)}
                            className={`px-3 py-1 rounded-lg text-xs transition-colors ${selectedSubmission.assigned_to === member.id ? 'bg-amber-500 text-black font-semibold' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'}`}>
                            {member.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Scores */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">AI Analysis</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span className={`text-xl font-black ${(selectedSubmission.ai_deal_score || 0) >= 7 ? 'text-emerald-400' : (selectedSubmission.ai_deal_score || 0) >= 5 ? 'text-amber-400' : 'text-red-400'}`}>
                            {selectedSubmission.ai_deal_score?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Deal Score</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span className={`text-xl font-black ${(selectedSubmission.ai_investor_readiness || 0) >= 7 ? 'text-emerald-400' : (selectedSubmission.ai_investor_readiness || 0) >= 5 ? 'text-amber-400' : 'text-red-400'}`}>
                            {selectedSubmission.ai_investor_readiness?.toFixed(1) || 'N/A'}
                          </span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Investor Readiness</p>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-zinc-800 flex items-center justify-center">
                          <span className="text-xl font-black text-blue-400">{selectedSubmission.file_count}</span>
                        </div>
                        <p className="text-[10px] text-zinc-500 uppercase">Documents</p>
                      </div>
                    </div>
                  </div>

                  {/* Financial Summary */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">Financial Summary</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        { label: 'Asking Price', value: formatPrice(selectedSubmission.asking_price, selectedSubmission.currency) },
                        { label: 'NOI', value: formatPrice(selectedSubmission.noi, selectedSubmission.currency) },
                        { label: 'Cap Rate', value: selectedSubmission.cap_rate ? `${selectedSubmission.cap_rate}%` : 'N/A' },
                        { label: 'Occupancy', value: selectedSubmission.occupancy_rate ? `${selectedSubmission.occupancy_rate}%` : 'N/A' },
                        { label: 'WALE', value: selectedSubmission.wale_years ? `${selectedSubmission.wale_years} yrs` : 'N/A' },
                        { label: 'Built-Up Area', value: selectedSubmission.total_built_up_area_sqm ? `${selectedSubmission.total_built_up_area_sqm.toLocaleString()} SqM` : 'N/A' },
                      ].map(item => (
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
                      {selectedSubmission.submitter_role === 'OWNER' ? 'Owner Details' : selectedSubmission.submitter_role === 'BROKER' ? 'Broker Details' : 'Submitter Details'}
                    </p>
                    <div className="space-y-3">
                      {selectedSubmission.owner_full_name && (
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-zinc-600" />
                          <div>
                            <p className="text-sm text-white">{selectedSubmission.owner_full_name}</p>
                            {selectedSubmission.owner_entity_name && <p className="text-xs text-zinc-500">{selectedSubmission.owner_entity_name}</p>}
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
                            {selectedSubmission.broker_entity_name && <p className="text-xs text-zinc-500">{selectedSubmission.broker_entity_name}</p>}
                            {selectedSubmission.broker_earb_number && <p className="text-xs text-amber-400">EARB: {selectedSubmission.broker_earb_number}</p>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Activity Log */}
                  <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-400 mb-4">Activity Log</p>
                    <div className="space-y-3">
                      {activityLog.length === 0 ? (
                        <p className="text-xs text-zinc-600">No activity recorded yet</p>
                      ) : (
                        activityLog.map(log => (
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
