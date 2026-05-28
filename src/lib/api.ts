// lib/api.ts — Client-side fetch helpers for Murivest Team pages
import type { DailyLog, Employee, WeeklyPerformance, TeamMetrics, Deal, Contact } from '@/types/indexs';

const BASE = '/api/advisors';

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }));
    throw new Error(err.error || `HTTP ${res.status}`);
  }
  return res.json();
}

// Employees
export const fetchEmployees = () => apiFetch<Employee[]>('/employees');
export const fetchEmployee = (id: string) => apiFetch<Employee>(`/employees/${id}`);
export const createEmployee = (data: Partial<Employee>) =>
  apiFetch<Employee>('/employees', { method: 'POST', body: JSON.stringify(data) });
export const updateEmployee = (id: string, data: Partial<Employee>) =>
  apiFetch<Employee>(`/employees/${id}`, { method: 'PATCH', body: JSON.stringify(data) });

// Daily Logs
export const fetchTodayLog = (employeeId: string) => {
  const today = new Date().toISOString().split('T')[0];
  return apiFetch<DailyLog | null>(`/logs?employee_id=${employeeId}&date=${today}`);
};
export const fetchLogHistory = (employeeId: string, days = 30) =>
  apiFetch<DailyLog[]>(`/logs/history?employee_id=${employeeId}&days=${days}`);
export const fetchAllTodayLogs = () => apiFetch<(DailyLog & { name: string })[]>('/logs');
export const saveDailyLog = (log: Partial<DailyLog>) =>
  apiFetch<DailyLog>('/logs', { method: 'POST', body: JSON.stringify(log) });

// KPIs & Leaderboard
export const fetchLeaderboard = () => apiFetch<WeeklyPerformance[]>('/leaderboard');
export const fetchTeamMetrics = () => apiFetch<TeamMetrics>('/metrics');
export const fetchWeeklyKPIs = (employeeId: string) =>
  apiFetch<WeeklyPerformance | null>(`/kpis?employee_id=${employeeId}`);

// Targets
export const fetchTargets = (employeeId: string, month: string) =>
  apiFetch<{ weekly: object; monthly: object }>(`/targets?employee_id=${employeeId}&month=${month}`);
export const saveTargets = (data: object) =>
  apiFetch('/targets', { method: 'POST', body: JSON.stringify(data) });

// Deals
export const fetchDeals = (employeeId?: string) =>
  apiFetch<Deal[]>(`/deals${employeeId ? `?employee_id=${employeeId}` : ''}`);
export const createDeal = (data: Partial<Deal>) =>
  apiFetch<Deal>('/deals', { method: 'POST', body: JSON.stringify(data) });

// Contacts
export const fetchContacts = (employeeId?: string) =>
  apiFetch<Contact[]>(`/contacts${employeeId ? `?employee_id=${employeeId}` : ''}`);
export const createContact = (data: Partial<Contact>) =>
  apiFetch<Contact>('/contacts', { method: 'POST', body: JSON.stringify(data) });