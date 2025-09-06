# Automated Brokerage Operations System

A unified Next.js application that automates property brokerage operations, replacing manual roles of secretary, accountant, and operations manager.

## Project Structure

```
/my-brokerage-system
├── pages/
│   ├── api/                         # API backend
│   │   ├── auth/                    # Auth endpoints (NextAuth / Clerk)
│   │   ├── properties/              # Add / edit / delete properties
│   │   ├── deals/                   # Deal creation, updates
│   │   ├── financials/              # Commissions, expenses, payouts
│   │   ├── documents/               # Upload, list, delete files
│   │   ├── licenses/                # Track license status
│   │   └── notifications/           # Alert system (email/SMS)
│   ├── dashboard/                   # Admin dashboard
│   │   ├── index.tsx                # Summary page
│   │   ├── properties.tsx           # All listed properties
│   │   ├── deals.tsx                # All deals, statuses
│   │   ├── finances.tsx             # All transactions
│   │   ├── licenses.tsx             # License status
│   │   ├── documents.tsx            # Company documents
│   │   └── notifications.tsx        # Alerts & logs
│   ├── client/                      # Landlord dashboard
│   │   ├── index.tsx
│   │   ├── properties.tsx
│   │   ├── deals.tsx
│   │   └── documents.tsx
│   └── index.tsx                    # Public landing (optional)
├── components/                      # UI components
│   ├── dashboard/                   # Dashboard-specific components
│   ├── forms/                       # Forms for property/deal/finance
│   └── ui/                          # Buttons, modals, tables
├── lib/                             # Utilities (API, date, money)
├── prisma/
│   ├── schema.prisma                # Database schema
│   └── seed.ts                      # Optional seed data
├── uploads/                         # Optional: file storage (or use S3)
├── public/                          # Static assets
├── styles/                          # CSS/SCSS files
├── .env                             # Secrets (DB, SMTP, etc.)
├── package.json
├── next.config.js
└── tsconfig.json
```

## Tech Stack

- **Frontend**: Next.js (Pages Router), React, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js or Clerk
- **Email**: Nodemailer or Resend
- **File Storage**: Local or AWS S3

## How to Run Locally

1. **Clone the repository** (assuming integrated into existing project)

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`
   - Fill in required values (see Environment Variables section)

4. **Set up database**:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Access the application**:
   - Admin Dashboard: http://localhost:3000/dashboard
   - Client Portal: http://localhost:3000/client
   - Public Site: http://localhost:3000

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/brokerage_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Email (Nodemailer)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# File Storage (if using S3)
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_S3_BUCKET_NAME="your-bucket-name"

# Other
ADMIN_EMAIL="admin@example.com"
```

## Deployment Steps

### Option 1: Vercel (Recommended for Next.js)

1. **Connect to Vercel**:
   - Push code to GitHub
   - Connect repository to Vercel

2. **Environment Variables**:
   - Add all variables from `.env.local` to Vercel project settings

3. **Database**:
   - Use Vercel Postgres or external PostgreSQL
   - Run migrations: `npx prisma migrate deploy`

4. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Option 2: AWS/DigitalOcean

1. **Server Setup**:
   - Provision EC2 instance or Droplet
   - Install Node.js, PostgreSQL

2. **Database Migration**:
   ```bash
   npx prisma migrate deploy
   npx prisma generate
   ```

3. **Environment Configuration**:
   - Set environment variables in server
   - Configure reverse proxy (nginx)

4. **Process Management**:
   - Use PM2: `pm2 start npm --name "brokerage" -- start`

### Email and Cron Jobs Setup

1. **Email Service**:
   - Configure SMTP credentials
   - For production, use services like SendGrid or AWS SES

2. **Automated Reminders**:
   - Use Vercel Cron Jobs or external scheduler
   - Example: Schedule daily email checks

### Monitoring and Logging

- Use Vercel Analytics for basic monitoring
- Implement error logging with services like Sentry
- Set up database backups

## Testing

Run tests with:
```bash
npm test
```

See test files in `__tests__/` directory for examples.

## Security Notes

- All routes protected with role-based access
- Input validation on client and server
- HTTPS required in production
- Secure cookie settings for auth tokens

## Contributing

1. Follow the existing code structure
2. Add tests for new features
3. Update documentation as needed
4. Ensure security best practices

## License

Private - Company Internal Use Only