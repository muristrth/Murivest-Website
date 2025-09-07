import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get comprehensive business statistics
    const [
      totalRevenue,
      totalExpenses,
      outstandingInvoices,
      unpaidBills,
      bankBalance,
      totalCustomers,
      activeProjects,
      pendingPayments,
      overduePayments,
      totalDocuments
    ] = await Promise.all([
      // Total revenue from all sources
      prisma.transaction.aggregate({
        where: {
          type: 'INCOME',
          status: 'CLEARED'
        },
        _sum: {
          amount: true
        }
      }),

      // Total expenses
      prisma.transaction.aggregate({
        where: {
          type: 'EXPENSE',
          status: 'CLEARED'
        },
        _sum: {
          amount: true
        }
      }),

      // Outstanding invoices
      prisma.invoice.aggregate({
        where: {
          status: {
            in: ['SENT', 'OVERDUE']
          }
        },
        _sum: {
          totalAmount: true
        }
      }),

      // Unpaid bills
      prisma.bill.aggregate({
        where: {
          status: {
            in: ['DRAFT', 'APPROVED']
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
      }),

      // Total customers (tenants)
      prisma.tenant.count(),

      // Active projects (properties with active status)
      prisma.property.count({
        where: {
          status: 'AVAILABLE'
        }
      }),

      // Pending payments
      prisma.payment.count({
        where: {
          status: 'PENDING'
        }
      }),

      // Overdue payments
      prisma.payment.count({
        where: {
          status: 'OVERDUE'
        }
      }),

      // Total documents
      prisma.document.count()
    ]);

    const netIncome = (totalRevenue._sum.amount || 0) - (totalExpenses._sum.amount || 0);
    const cashFlow = netIncome; // Simplified cash flow calculation

    const businessStats = {
      totalRevenue: totalRevenue._sum.amount || 0,
      totalExpenses: totalExpenses._sum.amount || 0,
      netIncome,
      outstandingInvoices: outstandingInvoices._sum.totalAmount || 0,
      unpaidBills: unpaidBills._sum.totalAmount || 0,
      bankBalance: bankBalance._sum.balance || 0,
      cashFlow,
      totalCustomers,
      activeProjects,
      pendingPayments,
      overduePayments,
      totalDocuments,
      monthlyGrowth: 5.2 // This would be calculated from historical data
    };

    return NextResponse.json(businessStats);
  } catch (error) {
    console.error('Error fetching business stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}