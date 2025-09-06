import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { hasPermission } from '@/lib/permissions';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const leaseId = searchParams.get('leaseId');
    const overdue = searchParams.get('overdue');

    let whereClause: any = {};

    // Filter by status if provided
    if (status) {
      whereClause.status = status;
    }

    // Filter by lease if provided
    if (leaseId) {
      whereClause.leaseId = leaseId;
    }

    // Filter overdue payments
    if (overdue === 'true') {
      whereClause.status = { in: ['LATE', 'OVERDUE'] };
    }

    // Role-based filtering
    if (session.user.role === 'LANDLORD') {
      whereClause.lease = {
        unit: {
          property: {
            userId: session.user.id
          }
        }
      };
    }

    const payments = await prisma.payment.findMany({
      where: whereClause,
      include: {
        lease: {
          include: {
            unit: {
              include: {
                property: {
                  select: {
                    id: true,
                    name: true,
                    address: true,
                    userId: true
                  }
                }
              }
            },
            tenant: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true
              }
            }
          }
        }
      },
      orderBy: [
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json(payments);
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
    const { leaseId, amount, status = 'PENDING', dueDate } = body;

    // Verify access to the lease
    if (session.user.role === 'LANDLORD') {
      const lease = await prisma.lease.findFirst({
        where: {
          id: leaseId,
          unit: {
            property: {
              userId: session.user.id
            }
          }
        }
      });

      if (!lease) {
        return NextResponse.json({ error: 'Lease not found or access denied' }, { status: 403 });
      }
    }

    const payment = await prisma.payment.create({
      data: {
        leaseId,
        amount,
        status,
        dueDate: dueDate ? new Date(dueDate) : undefined
      },
      include: {
        lease: {
          include: {
            unit: {
              include: {
                property: {
                  select: {
                    id: true,
                    name: true,
                    address: true
                  }
                }
              }
            },
            tenant: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json(payment, { status: 201 });
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

    // Verify access to the payment
    if (session.user.role === 'LANDLORD') {
      const payment = await prisma.payment.findFirst({
        where: {
          id,
          lease: {
            unit: {
              property: {
                userId: session.user.id
              }
            }
          }
        }
      });

      if (!payment) {
        return NextResponse.json({ error: 'Payment not found or access denied' }, { status: 403 });
      }
    }

    const updatedPayment = await prisma.payment.update({
      where: { id },
      data: {
        status,
        date: date ? new Date(date) : undefined
      },
      include: {
        lease: {
          include: {
            unit: {
              include: {
                property: {
                  select: {
                    id: true,
                    name: true,
                    address: true
                  }
                }
              }
            },
            tenant: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true
              }
            }
          }
        }
      }
    });

    return NextResponse.json(updatedPayment);
  } catch (error) {
    console.error('Error updating payment:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}