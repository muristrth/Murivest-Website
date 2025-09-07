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

    // Get basic stats
    const [
      totalUsers,
      totalProperties,
      totalTenants,
      activeMaintenanceRequests,
      totalRevenue,
      totalExpenses,
      totalDocuments
    ] = await Promise.all([
      // Total users
      prisma.user.count(),

      // Total properties
      prisma.property.count(),

      // Total tenants
      prisma.tenant.count(),

      // Active maintenance requests
      prisma.maintenanceRequest.count({
        where: {
          status: {
            in: ['OPEN', 'IN_PROGRESS']
          }
        }
      }),

      // Total revenue from transactions
      prisma.transaction.aggregate({
        where: {
          type: 'INCOME',
          status: 'CLEARED'
        },
        _sum: {
          amount: true
        }
      }),

      // Total expenses from transactions
      prisma.transaction.aggregate({
        where: {
          type: 'EXPENSE',
          status: 'CLEARED'
        },
        _sum: {
          amount: true
        }
      }),

      // Total documents
      prisma.document.count()
    ]);

    const netIncome = (totalRevenue._sum.amount || 0) - (totalExpenses._sum.amount || 0);

    // Get outstanding invoices
    const outstandingInvoicesResult = await prisma.invoice.aggregate({
      where: {
        status: {
          in: ['SENT', 'OVERDUE']
        }
      },
      _sum: {
        totalAmount: true
      }
    });

    const stats = {
      totalUsers,
      totalProperties,
      totalTenants,
      activeMaintenanceRequests,
      totalRevenue: totalRevenue._sum.amount || 0,
      totalExpenses: totalExpenses._sum.amount || 0,
      netIncome,
      outstandingInvoices: outstandingInvoicesResult._sum.totalAmount || 0,
      totalDocuments
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}