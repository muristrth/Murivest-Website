import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const accountId = searchParams.get('accountId');

    // Mock general ledger data
    const journalEntries = [
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
      },
      {
        id: '2',
        date: '2025-09-04T00:00:00.000Z',
        description: 'Office Supplies Expense',
        reference: 'JE-2025-002',
        totalDebit: 25000,
        totalCredit: 25000,
        isBalanced: true,
        postedBy: 'System',
        lines: [
          {
            accountCode: '6000',
            accountName: 'Office Expenses',
            debit: 25000,
            credit: 0,
            description: 'Office supplies purchase'
          },
          {
            accountCode: '1000',
            accountName: 'Cash - KCB Bank',
            debit: 0,
            credit: 25000,
            description: 'Cash payment'
          }
        ]
      }
    ];

    const filteredEntries = journalEntries.filter(entry => {
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
    if (!session) {
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

    // Mock journal entry creation
    const newEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      description,
      reference: reference || `JE-2025-${Date.now()}`,
      totalDebit,
      totalCredit,
      isBalanced: true,
      postedBy: session.user.name || 'User',
      lines
    };

    console.log('Mock journal entry created:', newEntry);

    return NextResponse.json({
      message: 'Journal entry created successfully',
      entry: newEntry
    });

  } catch (error) {
    console.error('Journal entry creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}