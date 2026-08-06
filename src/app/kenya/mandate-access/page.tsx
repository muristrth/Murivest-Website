// src/app/mandate-access/page.tsx

import { Suspense } from 'react';
import MandateAccessClient from '@/components/MandateAccessPage';

export const dynamic = 'force-dynamic';

export default function MandateAccessPage() {
  return (
    <Suspense fallback={<div />}>
      <MandateAccessClient />
    </Suspense>
  );
}