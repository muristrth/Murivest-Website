const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();


async function main() {
  try {
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
      where: { email: 'admin@property-management.com' },
      update: {},
      create: {
        email: 'admin@property-management.com',
        password: adminPassword,
        name: 'System Administrator',
        role: 'ADMIN',
      },
    });

    // Create operations manager
    const opsPassword = await bcrypt.hash('ops123', 12);
    const operationsManager = await prisma.user.upsert({
      where: { email: 'operations@property-management.com' },
      update: {},
      create: {
        email: 'operations@property-management.com',
        password: opsPassword,
        name: 'Operations Manager',
        role: 'OPERATIONS_MANAGER',
      },
    });

    // Create accountant
    const acctPassword = await bcrypt.hash('acct123', 12);
    const accountant = await prisma.user.upsert({
      where: { email: 'accountant@property-management.com' },
      update: {},
      create: {
        email: 'accountant@property-management.com',
        password: acctPassword,
        name: 'Finance Accountant',
        role: 'ACCOUNTANT',
      },
    });

    // Create secretary
    const secPassword = await bcrypt.hash('sec123', 12);
    const secretary = await prisma.user.upsert({
      where: { email: 'secretary@property-management.com' },
      update: {},
      create: {
        email: 'secretary@property-management.com',
        password: secPassword,
        name: 'Administrative Secretary',
        role: 'SECRETARY',
      },
    });

    // Create sample landlord
    const landlordPassword = await bcrypt.hash('landlord123', 12);
    const landlord = await prisma.user.upsert({
      where: { email: 'landlord@property-management.com' },
      update: {},
      create: {
        email: 'landlord@property-management.com',
        password: landlordPassword,
        name: 'Property Owner',
        role: 'LANDLORD',
      },
    });

    console.log('✅ Database seeded successfully with initial users!');
    console.log('📧 Admin login: admin@property-management.com / admin123');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();