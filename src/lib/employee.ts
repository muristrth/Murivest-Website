// hooks/useEmployee.ts — Auth context for current logged-in employee
'use client';
import { createContext, useContext } from 'react';
import type { Employee } from '@/types/indexs';

export interface EmployeeContextValue {
  employee: Employee | null;
  isAdmin: boolean;
  loading: boolean;
  error: string | null;
}

export const EmployeeContext = createContext<EmployeeContextValue>({
  employee: null,
  isAdmin: false,
  loading: true,
  error: null,
});

export const useEmployee = () => useContext(EmployeeContext);