import { redirect } from 'next/navigation';

export default function InvestorPortalLoginPage() {
  redirect('/investor-portal?mode=login');
}