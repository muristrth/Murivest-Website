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
    const status = searchParams.get('status');
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    // Mock data for demonstration
    const bills = [
      {
        id: '1',
        billNumber: 'BILL-2025-001',
        date: '2025-09-01T00:00:00.000Z',
        dueDate: '2025-09-10T00:00:00.000Z',
        amount: 75000,
        taxAmount: 0,
        totalAmount: 75000,
        status: 'APPROVED',
        vendorName: 'ABC Suppliers Ltd',
        vendorEmail: 'accounts@abc-suppliers.co.ke',
        description: 'Office Supplies - September 2025',
        category: 'Office Supplies',
        daysOverdue: 0
      },
      {
        id: '2',
        billNumber: 'BILL-2025-002',
        date: '2025-08-15T00:00:00.000Z',
        dueDate: '2025-08-30T00:00:00.000Z',
        amount: 500000,
        taxAmount: 0,
        totalAmount: 500000,
        status: 'OVERDUE',
        vendorName: 'Kenya Revenue Authority',
        vendorEmail: 'payments@kra.go.ke',
        description: 'Property Tax Payment - Q2 2025',
        category: 'Taxes',
        daysOverdue: 22
      }
    ];

    const filteredBills = bills.filter(bill => {
      if (status && bill.status !== status) return false;
      if (startDate && new Date(bill.date) < new Date(startDate)) return false;
      if (endDate && new Date(bill.date) > new Date(endDate)) return false;
      return true;
    });

    const summary = {
      totalUnpaid: filteredBills
        .filter(bill => bill.status === 'APPROVED')
        .reduce((sum, bill) => sum + bill.totalAmount, 0),
      totalOverdue: filteredBills
        .filter(bill => bill.status === 'OVERDUE')
        .reduce((sum, bill) => sum + bill.totalAmount, 0),
      totalPaid: filteredBills
        .filter(bill => bill.status === 'PAID')
        .reduce((sum, bill) => sum + bill.totalAmount, 0),
      pendingApproval: filteredBills.filter(bill => bill.status === 'DRAFT').length,
      overdueCount: filteredBills.filter(bill => bill.status === 'OVERDUE').length
    };

    return NextResponse.json({
      bills: filteredBills,
      summary
    });

  } catch (error) {
    console.error('Payables error:', error);
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
    const { vendorName, vendorEmail, amount, dueDate, description, category } = body;

    // Mock bill creation
    const newBill = {
      id: Date.now().toString(),
      billNumber: `BILL-2025-${Date.now()}`,
      date: new Date().toISOString(),
      dueDate,
      amount,
      taxAmount: 0,
      totalAmount: amount,
      status: 'DRAFT',
      vendorName,
      vendorEmail,
      description,
      category,
      createdBy: session.user.id
    };

    console.log('Mock bill created:', newBill);

    return NextResponse.json({
      message: 'Bill created successfully',
      bill: newBill
    });

  } catch (error) {
    console.error('Bill creation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}