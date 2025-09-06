import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const accountId = searchParams.get('accountId');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Mock data for demonstration since database is not set up yet
    const bankAccount = {
      id: accountId || '1',
      name: 'KCB Main Account',
      accountNumber: '1234567890',
      bankName: 'KCB Bank',
      balance: 15000000,
      currency: 'KES',
      isActive: true,
      lastReconciled: '2025-09-01T00:00:00.000Z'
    };

    // Mock transactions
    const transactions = [
      {
        id: '1',
        date: '2025-09-05T00:00:00.000Z',
        amount: 150000,
        description: 'Rent Payment - Unit 101',
        type: 'INCOME',
        status: 'PENDING',
        reference: 'REF001'
      },
      {
        id: '2',
        date: '2025-09-04T00:00:00.000Z',
        amount: -25000,
        description: 'Office Supplies',
        type: 'EXPENSE',
        status: 'CLEARED',
        reference: 'REF002'
      }
    ];

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
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { transactionIds, accountId } = body;

    // Mock reconciliation update
    console.log('Mock reconciliation:', {
      transactionIds,
      accountId,
      reconciledBy: session.user.id,
      reconciledAt: new Date()
    });

    return NextResponse.json({ message: 'Transactions reconciled successfully' });

  } catch (error) {
    console.error('Reconciliation update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}