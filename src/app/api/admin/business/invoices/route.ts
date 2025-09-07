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
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    // Get invoices
    const invoices = await prisma.invoice.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit
    });

    // Get related data separately
    const formattedInvoices = await Promise.all(
      invoices.map(async (invoice) => {
        const tenant = await prisma.tenant.findUnique({
          where: { id: invoice.tenantId },
          select: { name: true, email: true }
        });

        const property = await prisma.property.findUnique({
          where: { id: invoice.propertyId },
          select: { name: true }
        });

        return {
          id: invoice.id,
          number: invoice.invoiceNumber,
          customerName: tenant?.name || 'Unknown Customer',
          amount: invoice.totalAmount,
          status: invoice.status.toLowerCase(),
          dueDate: invoice.dueDate.toISOString(),
          createdAt: invoice.createdAt.toISOString()
        };
      })
    );

    return NextResponse.json(formattedInvoices);
  } catch (error) {
    console.error('Error fetching invoices:', error);
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
    const { tenantId, propertyId, amount, description, dueDate } = body;

    // Generate invoice number
    const invoiceCount = await prisma.invoice.count();
    const invoiceNumber = `INV-${new Date().getFullYear()}-${(invoiceCount + 1).toString().padStart(4, '0')}`;

    // Create invoice
    const invoice = await prisma.invoice.create({
      data: {
        invoiceNumber,
        date: new Date(),
        dueDate: new Date(dueDate),
        amount,
        taxAmount: 0, // Simplified
        totalAmount: amount,
        status: 'DRAFT',
        notes: description,
        tenantId,
        propertyId
      },
      include: {
        tenant: {
          select: {
            name: true,
            email: true
          }
        },
        property: {
          select: {
            name: true
          }
        }
      }
    });

    return NextResponse.json({
      id: invoice.id,
      number: invoice.invoiceNumber,
      customerName: invoice.tenant.name,
      amount: invoice.totalAmount,
      status: 'draft',
      dueDate: invoice.dueDate.toISOString(),
      createdAt: invoice.createdAt.toISOString()
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating invoice:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}