const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('🌱 Seeding database...');

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
    console.log('✅ Admin user created');

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
    console.log('✅ Operations Manager created');

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
    console.log('✅ Accountant created');

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
    console.log('✅ Secretary created');

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
    console.log('✅ Landlord created');

    console.log('🎉 Database seeded successfully!');
    console.log('\n📧 Login Credentials:');
    console.log('Admin: admin@property-management.com / admin123');
    console.log('Operations: operations@property-management.com / ops123');
    console.log('Accountant: accountant@property-management.com / acct123');
    console.log('Secretary: secretary@property-management.com / sec123');
    console.log('Landlord: landlord@property-management.com / landlord123');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();