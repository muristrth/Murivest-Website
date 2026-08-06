import { Metadata } from 'next';
import TransactionsClient from './TransactionsClient';

export const metadata: Metadata = {
  title: 'Representative Transactions & Track Record | Murivest',
  description: 'Anonymized track record of commercial real estate mandates in East Africa. Institutional-grade execution in logistics, office, and sale-leaseback transactions.',
  keywords: 'real estate track record Kenya, commercial property transactions Nairobi, institutional real estate performance Africa, Murivest deal sheet',
};

export default function RepresentativeTransactionsPage() {
  return <TransactionsClient />;
}
