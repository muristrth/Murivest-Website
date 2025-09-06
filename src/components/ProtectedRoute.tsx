'use client';

import { useRouter } from 'next/navigation';
<<<<<<< HEAD
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'loading') return; // Still loading

    if (!session) {
      // If no user is logged in, redirect to the login page
      router.push('/login');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    // Show loading state while checking authentication
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    // Return null while redirecting
    return null;
  }

=======
import { useAuth } from './contexts/AuthContext'; // Assuming you have a client-side auth context

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { currentUser } = useAuth(); // or however you get the current user

  if (!currentUser) {
    // If no user is logged in, redirect to the login page
    router.push('/login');
    // It's good practice to return null or a loading state while redirecting
    return null; 
  }

>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
  // If a user is logged in, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;