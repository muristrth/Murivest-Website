export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  price: string;
  yield: string;
  image: string;
  features: string[];
  status: string;
  description: string;
  roi: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content?: string;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
  totalInvestment: number;
  properties: string[];
  joinDate: string;
  portfolioValue: number;
  totalYield: number;
}

export interface Review {
  id: string;
  name: string;
  title: string;
  email: string;
  content: string;
  rating: number;
  investment?: string;
  approved: boolean;
  createdAt: any;
  submittedAt: string;
<<<<<<< HEAD
}

export type UserRole = 'ADMIN' | 'LANDLORD' | 'OPERATIONS_MANAGER' | 'ACCOUNTANT' | 'SECRETARY';

export interface RolePermissions {
  canViewAllProperties: boolean;
  canManageUsers: boolean;
  canViewFinancials: boolean;
  canManageMaintenance: boolean;
  canSendNotifications: boolean;
  canUploadDocuments: boolean;
  canViewReports: boolean;
  canManageLeases: boolean;
=======
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
}