import { LayoutDashboard, Users, BarChart3, Settings, Mail, Target, DollarSign, Briefcase } from 'lucide-react';
import { MenuItem, Notification, StaffMember, Campaign, Customer } from './types';

export const menuItems: MenuItem[] = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'properties', label: 'Properties', icon: Briefcase },
  { id: 'marketing', label: 'Marketing', icon: Mail },
  { id: 'accounting', label: 'Accounting', icon: DollarSign },
  { id: 'crm', label: 'CRM', icon: Target },
  { id: 'staff', label: 'Staff Management', icon: Users },
  { id: 'reports', label: 'Reports', icon: BarChart3 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const dashboardData = {
  notifications: [
    { id: '1', message: 'New customer registration from Alex Stone', read: false, type: 'new_customer' },
    { id: '2', message: 'Sales target for Q3 is at 85%', read: true, type: 'sales_target' },
  ] as Notification[],
  staff: [
    {
      id: 'staff-1',
      displayName: 'Jane Doe',
      email: 'jane.doe@example.com',
      department: 'Sales',
      role: 'sales',
      performance: { rating: 'excellent', salesTarget: 100000, salesAchieved: 95000 },
      commission: { earned: 5500 },
    },
    {
      id: 'staff-2',
      displayName: 'John Smith',
      email: 'john.smith@example.com',
      department: 'Marketing',
      role: 'marketing',
      performance: { rating: 'good', salesTarget: 80000, salesAchieved: 78000 },
      commission: { earned: 3800 },
    },
  ] as StaffMember[],
  campaigns: [
    {
      id: 'camp-1',
      name: 'Q1 2024 Newsletter',
      type: 'email',
      status: 'active',
      metrics: { impressions: 15000, clicks: 3500, conversions: 250, roi: 5.2 },
      budget: { spent: 500, allocated: 1000 },
    },
    {
      id: 'camp-2',
      name: 'Summer Promo Social Media',
      type: 'social_media',
      status: 'active',
      metrics: { impressions: 55000, clicks: 12000, conversions: 800, roi: 4.8 },
      budget: { spent: 1500, allocated: 2000 },
    },
  ] as Campaign[],
  customers: [
    {
      id: 'cust-1',
      fullName: 'Alice Johnson',
      email: 'alice.j@example.com',
      kycStatus: 'verified',
      totalInvestment: 250000,
    },
    {
      id: 'cust-2',
      fullName: 'Bob Williams',
      email: 'bob.w@example.com',
      kycStatus: 'pending',
      totalInvestment: 150000,
    },
  ] as Customer[],
};