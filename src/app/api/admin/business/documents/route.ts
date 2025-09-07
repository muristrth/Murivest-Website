import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { PrismaClient } from '@prisma/client';
import { hasPermission } from '@/lib/permissions';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canUploadDocuments')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '20');

    // Get documents
    const documents = await prisma.document.findMany({
      where: {
        ...(category && { category })
      },
      include: {
        property: {
          select: {
            id: true,
            name: true
          }
        },
        tenant: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: { createdAt: 'desc' },
      take: limit
    });

    // Transform documents for frontend
    const formattedDocuments = documents.map(doc => ({
      id: doc.id,
      name: doc.name,
      fileUrl: doc.fileUrl,
      fileType: doc.fileType,
      size: doc.size,
      category: doc.category,
      propertyName: doc.property?.name || null,
      tenantName: doc.tenant?.name || null,
      uploadedAt: doc.createdAt,
      userId: doc.userId
    }));

    return NextResponse.json(formattedDocuments);
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
    const { name, fileUrl, fileType, size, category, propertyId, tenantId } = body;

    // Create document
    const document = await prisma.document.create({
      data: {
        name,
        fileUrl,
        fileType,
        size,
        category,
        userId: session.user.id,
        ...(propertyId && { propertyId }),
        ...(tenantId && { tenantId })
      },
      include: {
        property: {
          select: {
            name: true
          }
        },
        tenant: {
          select: {
            name: true
          }
        }
      }
    });

    return NextResponse.json({
      id: document.id,
      name: document.name,
      fileUrl: document.fileUrl,
      fileType: document.fileType,
      size: document.size,
      category: document.category,
      propertyName: document.property?.name || null,
      tenantName: document.tenant?.name || null,
      uploadedAt: document.createdAt
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user || !hasPermission(session.user.role, 'canUploadDocuments')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Document ID required' }, { status: 400 });
    }

    // Delete document
    await prisma.document.delete({
      where: { id }
    });

    return NextResponse.json({ message: 'Document deleted successfully' });
  } catch (error) {
    console.error('Error deleting document:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}