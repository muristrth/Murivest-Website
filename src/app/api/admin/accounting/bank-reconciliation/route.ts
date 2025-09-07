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
    const accountId = searchParams.get('accountId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Get bank account info
    const bankAccount = await prisma.bankAccount.findUnique({
      where: { id: accountId || 'default' }
    }) || {
      id: accountId || '1',
      name: 'KCB Main Account',
      accountNumber: '1234567890',
      bankName: 'KCB Bank',
      balance: 15000000,
      currency: 'KES',
      isActive: true,
      lastReconciled: '2025-09-01T00:00:00.000Z'
    };

    // Get transactions for reconciliation
    const transactions = await prisma.transaction.findMany({
      where: {
        bankAccountId: accountId,
        ...(startDate || endDate ? {
          date: {
            ...(startDate && { gte: new Date(startDate) }),
            ...(endDate && { lte: new Date(endDate) })
          }
        } : {})
      },
      orderBy: { date: 'desc' },
      take: 50
    });

    // Get unreconciled transactions
    const unreconciledTransactions = transactions.filter(t => t.status !== 'RECONCILED');

    return NextResponse.json({
      bankAccount,
      transactions,
      unreconciledTransactions,
      summary: {
        totalTransactions: transactions.length,
        reconciledCount: transactions.filter(t => t.status === 'RECONCILED').length,
        unreconciledCount: unreconciledTransactions.length,
        totalAmount: transactions.reduce((sum, t) => sum + t.amount, 0),
      }
    });

  } catch (error) {
    console.error('Bank reconciliation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user || !hasPermission(session.user.role, 'canViewFinancials')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { transactionIds, accountId } = body;

    // Update transaction statuses to reconciled
    await prisma.transaction.updateMany({
      where: {
        id: { in: transactionIds },
        bankAccountId: accountId
      },
      data: {
        status: 'RECONCILED',
        reconciledAt: new Date(),
        reconciledBy: session.user.id
      }
    });

    return NextResponse.json({ message: 'Transactions reconciled successfully' });

  } catch (error) {
    console.error('Reconciliation update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}