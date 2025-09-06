import { UserRole, RolePermissions } from '@/types';

export const rolePermissions: Record<UserRole, RolePermissions> = {
  ADMIN: {
    canViewAllProperties: true,
    canManageUsers: true,
    canViewFinancials: true,
    canManageMaintenance: true,
    canSendNotifications: true,
    canUploadDocuments: true,
    canViewReports: true,
    canManageLeases: true,
  },
  LANDLORD: {
    canViewAllProperties: false,
    canManageUsers: false,
    canViewFinancials: true,
    canManageMaintenance: false,
    canSendNotifications: false,
    canUploadDocuments: true,
    canViewReports: true,
    canManageLeases: true,
  },
  OPERATIONS_MANAGER: {
    canViewAllProperties: true,
    canManageUsers: false,
    canViewFinancials: false,
    canManageMaintenance: true,
    canSendNotifications: true,
    canUploadDocuments: true,
    canViewReports: true,
    canManageLeases: false,
  },
  ACCOUNTANT: {
    canViewAllProperties: false,
    canManageUsers: false,
    canViewFinancials: true,
    canManageMaintenance: false,
    canSendNotifications: true,
    canUploadDocuments: true,
    canViewReports: true,
    canManageLeases: false,
  },
  SECRETARY: {
    canViewAllProperties: false,
    canManageUsers: false,
    canViewFinancials: false,
    canManageMaintenance: false,
    canSendNotifications: true,
    canUploadDocuments: true,
    canViewReports: false,
    canManageLeases: false,
  },
};

export function hasPermission(userRole: UserRole, permission: keyof RolePermissions): boolean {
  return rolePermissions[userRole][permission];
}

export function canAccessDashboard(userRole: UserRole, dashboardType: string): boolean {
  const dashboardPermissions = {
    admin: ['ADMIN'],
    operations: ['ADMIN', 'OPERATIONS_MANAGER'],
    accountant: ['ADMIN', 'ACCOUNTANT'],
    secretary: ['ADMIN', 'SECRETARY'],
    landlord: ['ADMIN', 'LANDLORD', 'OPERATIONS_MANAGER', 'ACCOUNTANT', 'SECRETARY'],
  };

  return dashboardPermissions[dashboardType as keyof typeof dashboardPermissions]?.includes(userRole) || false;
}