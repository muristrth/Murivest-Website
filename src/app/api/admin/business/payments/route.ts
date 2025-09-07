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
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '20');

    // Get payments
    const payments = await prisma.payment.findMany({
      orderBy: { createdAt: 'desc' },
      take: limit
    });

    // Get related data separately for each payment
    const formattedPayments = await Promise.all(
      payments.map(async (payment) => {
        const lease = await prisma.lease.findUnique({
          where: { id: payment.leaseId },
          include: {
            tenant: {
              select: {
                name: true
              }
            },
            unit: {
              include: {
                property: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        });

        const invoice = payment.invoiceId ? await prisma.invoice.findUnique({
          where: { id: payment.invoiceId },
          select: {
            invoiceNumber: true
          }
        }) : null;

        return {
          id: payment.id,
          amount: payment.amount,
          status: payment.status,
          date: payment.date,
          dueDate: payment.dueDate,
          tenantName: lease?.tenant?.name || 'Unknown',
          propertyName: lease?.unit?.property?.name || 'Unknown',
          invoiceNumber: invoice?.invoiceNumber || null,
          createdAt: payment.createdAt
        };
      })
    );

    return NextResponse.json(formattedPayments);
  } catch (error) {
    console.error('Error fetching payments:', error);
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
    const { leaseId, amount, status = 'PENDING', dueDate, invoiceId } = body;

    // Create payment
    const payment = await prisma.payment.create({
      data: {
        leaseId,
        amount,
        status,
        dueDate: dueDate ? new Date(dueDate) : undefined,
        date: new Date(),
        ...(invoiceId && { invoiceId })
      },
      include: {
        lease: {
          include: {
            tenant: {
              select: {
                name: true
              }
            },
            unit: {
              include: {
                property: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    });

    return NextResponse.json({
      id: payment.id,
      amount: payment.amount,
      status: payment.status,
      date: payment.date,
      dueDate: payment.dueDate,
      tenantName: payment.lease?.tenant?.name || 'Unknown',
      propertyName: payment.lease?.unit?.property?.name || 'Unknown',
      createdAt: payment.createdAt
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating payment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canViewFinancials')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, status, date } = body;

    // Update payment
    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: {
        status,
        ...(date && { date: new Date(date) })
      },
      include: {
        lease: {
          include: {
            tenant: {
              select: {
                name: true
              }
            },
            unit: {
              include: {
                property: {
                  select: {
                    name: true
                  }
                }
              }
            }
          }
        }
      }
    });

    return NextResponse.json({
      id: updatedPayment.id,
      amount: updatedPayment.amount,
      status: updatedPayment.status,
      date: updatedPayment.date,
      dueDate: updatedPayment.dueDate,
      tenantName: updatedPayment.lease?.tenant?.name || 'Unknown',
      propertyName: updatedPayment.lease?.unit?.property?.name || 'Unknown'
    });
  } catch (error) {
    console.error('Error updating payment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}