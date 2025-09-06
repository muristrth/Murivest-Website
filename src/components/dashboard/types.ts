import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface Notification {
  id: string;
  message: string;
  read: boolean;
  type: string;
}

export interface StaffMember {
  id: string;
  displayName?: string;
  email?: string;
  department?: string;
  role?: string;
  performance?: {
    rating: string;
    salesTarget: number;
    salesAchieved: number;
  };
  commission?: {
    earned: number;
  };
}

export interface Campaign {
  id: string;
  name: string;
  type: 'email' | 'social_media';
  status: 'active' | 'paused';
  metrics: {
    impressions: number;
    clicks: number;
    conversions: number;
    roi: number;
  };
  budget: {
    spent: number;
    allocated: number;
  };
}

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  kycStatus: 'verified' | 'pending';
  totalInvestment: number;
}