import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { hasPermission } from '@/lib/permissions';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canViewFinancials')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Build date filter
    let dateFilter = {};
    if (startDate || endDate) {
      dateFilter = {
        date: {
          ...(startDate && { gte: new Date(startDate) }),
          ...(endDate && { lte: new Date(endDate) })
        }
      };
    }

    // Get financial summary
    const [
      totalRevenue,
      totalExpenses,
      pendingPayments,
      overduePayments,
      bankBalance
    ] = await Promise.all([
      // Total revenue
      prisma.transaction.aggregate({
        where: {
          type: 'INCOME',
          status: 'CLEARED',
          ...dateFilter
        },
        _sum: {
          amount: true
        }
      }),

      // Total expenses
      prisma.transaction.aggregate({
        where: {
          type: 'EXPENSE',
          status: 'CLEARED',
          ...dateFilter
        },
        _sum: {
          amount: true
        }
      }),

      // Pending payments (invoices sent but not paid)
      prisma.invoice.aggregate({
        where: {
          status: 'SENT',
          ...dateFilter
        },
        _sum: {
          totalAmount: true
        }
      }),

      // Overdue payments
      prisma.invoice.aggregate({
        where: {
          status: 'OVERDUE',
          dueDate: {
            lt: new Date()
          }
        },
        _sum: {
          totalAmount: true
        }
      }),

      // Bank balance
      prisma.bankAccount.aggregate({
        _sum: {
          balance: true
        }
      })
    ]);

    const netIncome = (totalRevenue._sum.amount || 0) - (totalExpenses._sum.amount || 0);

    const financialSummary = {
      totalRevenue: totalRevenue._sum.amount || 0,
      totalExpenses: totalExpenses._sum.amount || 0,
      netIncome,
      pendingPayments: pendingPayments._sum.totalAmount || 0,
      overduePayments: overduePayments._sum.totalAmount || 0,
      bankBalance: bankBalance._sum.balance || 0
    };

    return NextResponse.json(financialSummary);
  } catch (error) {
    console.error('Error fetching financial summary:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}