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
    const category = searchParams.get('category');
    const propertyId = searchParams.get('propertyId');
    const tenantId = searchParams.get('tenantId');

    let whereClause: any = {};

    // Filter by category if provided
    if (category) {
      whereClause.category = category;
    }

    // Filter by property if provided
    if (propertyId) {
      whereClause.propertyId = propertyId;
    }

    // Filter by tenant if provided
    if (tenantId) {
      whereClause.tenantId = tenantId;
    }

    // Role-based filtering
    if (session.user.role === 'LANDLORD') {
      whereClause.OR = [
        { userId: session.user.id },
        {
          property: {
            userId: session.user.id
          }
        },
        {
          tenant: {
            userId: session.user.id
          }
        }
      ];
    } else {
      whereClause.userId = session.user.id;
    }

    const documents = await prisma.document.findMany({
      where: whereClause,
      include: {
        property: {
          select: {
            id: true,
            name: true,
            address: true
          }
        },
        tenant: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        unit: {
          select: {
            id: true,
            name: true,
            property: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        lease: {
          select: {
            id: true,
            unit: {
              select: {
                id: true,
                name: true
              }
            }
          }
        },
        maintenanceRequest: {
          select: {
            id: true,
            description: true
          }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canUploadDocuments')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      name,
      fileUrl,
      fileType,
      size,
      category,
      propertyId,
      tenantId,
      unitId,
      leaseId,
      maintenanceRequestId
    } = body;

    // Verify access based on related entities
    if (session.user.role === 'LANDLORD') {
      if (propertyId) {
        const property = await prisma.property.findFirst({
          where: { id: propertyId, userId: session.user.id }
        });
        if (!property) {
          return NextResponse.json({ error: 'Property access denied' }, { status: 403 });
        }
      }

      if (tenantId) {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: tenantId,
            userId: session.user.id
          }
        });
        if (!tenant) {
          return NextResponse.json({ error: 'Tenant access denied' }, { status: 403 });
        }
      }
    }

    const document = await prisma.document.create({
      data: {
        name,
        fileUrl,
        fileType,
        size,
        category,
        userId: session.user.id,
        propertyId,
        tenantId,
        unitId,
        leaseId,
        maintenanceRequestId
      },
      include: {
        property: {
          select: {
            id: true,
            name: true,
            address: true
          }
        },
        tenant: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    return NextResponse.json(document, { status: 201 });
  } catch (error) {
    console.error('Error creating document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    // Verify ownership
    const document = await prisma.document.findFirst({
      where: {
        id,
        userId: session.user.id
      }
    });

    if (!document) {
      return NextResponse.json({ error: 'Document not found or access denied' }, { status: 403 });
    }

    await prisma.document.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}