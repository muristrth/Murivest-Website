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
    const accountId = searchParams.get('accountId');

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

    // Get journal entries
    const journalEntries = await prisma.journalEntry.findMany({
      where: {
        ...dateFilter,
        ...(accountId && { chartOfAccountId: accountId })
      },
      include: {
        lines: {
          include: {
            account: true
          }
        }
      },
      orderBy: { date: 'desc' },
      take: 100
    });

    // If no journal entries exist, return mock data for demonstration
    const mockEntries = journalEntries.length > 0 ? journalEntries : [
      {
        id: '1',
        date: '2025-09-05T00:00:00.000Z',
        description: 'Rent Income - Unit 101',
        reference: 'JE-2025-001',
        totalDebit: 150000,
        totalCredit: 150000,
        isBalanced: true,
        postedBy: 'System',
        lines: [
          {
            accountCode: '4000',
            accountName: 'Rental Income',
            debit: 150000,
            credit: 0,
            description: 'Rent received from tenant'
          },
          {
            accountCode: '1000',
            accountName: 'Cash - KCB Bank',
            debit: 0,
            credit: 150000,
            description: 'Cash receipt'
          }
        ]
      }
    ];

    const filteredEntries = mockEntries.filter(entry => {
      if (startDate && new Date(entry.date) < new Date(startDate)) return false;
      if (endDate && new Date(entry.date) > new Date(endDate)) return false;
      return true;
    });

    return NextResponse.json({
      journalEntries: filteredEntries,
      summary: {
        totalEntries: filteredEntries.length,
        totalDebits: filteredEntries.reduce((sum, entry) => sum + entry.totalDebit, 0),
        totalCredits: filteredEntries.reduce((sum, entry) => sum + entry.totalCredit, 0),
        balancedEntries: filteredEntries.filter(entry => entry.isBalanced).length
      }
    });

  } catch (error) {
    console.error('General ledger error:', error);
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
    const { description, lines, reference } = body;

    // Validate journal entry (debits must equal credits)
    const totalDebit = lines.reduce((sum: number, line: any) => sum + (line.debit || 0), 0);
    const totalCredit = lines.reduce((sum: number, line: any) => sum + (line.credit || 0), 0);

    if (totalDebit !== totalCredit) {
      return NextResponse.json({
        error: 'Journal entry is not balanced',
        details: { totalDebit, totalCredit }
      }, { status: 400 });
    }

    // Create journal entry
    const journalEntry = await prisma.journalEntry.create({
      data: {
        date: new Date(),
        description,
        reference: reference || `JE-${Date.now()}`,
        totalDebit,
        totalCredit,
        isBalanced: true,
        postedBy: session.user.id,
        chartOfAccountId: lines[0]?.accountId || 'default',
        lines: {
          create: lines.map((line: any) => ({
            accountId: line.accountId,
            debit: line.debit || 0,
            credit: line.credit || 0,
            description: line.description
          }))
        }
      },
      include: {
        lines: {
          include: {
            account: true
          }
        }
      }
    });

    return NextResponse.json({
      message: 'Journal entry created successfully',
      entry: journalEntry
    });

  } catch (error) {
    console.error('Journal entry creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}