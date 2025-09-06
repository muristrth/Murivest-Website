'use client';

// src/components/Login.tsx
import React, { useState } from 'react';
<<<<<<< HEAD
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'LANDLORD' as 'LANDLORD' | 'OPERATIONS_MANAGER' | 'ACCOUNTANT' | 'SECRETARY'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else if (result?.ok) {
        console.log('Login successful!');
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        }),
      });

      if (response.ok) {
        setError('');
        alert('Account created successfully! Please login.');
        setIsLogin(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: 'LANDLORD'
        });
      } else {
        const data = await response.json();
        setError(data.error || 'Failed to create account');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('An error occurred during registration');
    } finally {
      setLoading(false);
=======
import { useRouter } from 'next/navigation'; // Correct import for the Next.js router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // The hook returns a 'router' object

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Use dummy credentials for a basic login
    const DUMMY_EMAIL = 'admin@example.com';
    const DUMMY_PASSWORD = 'password123';

    if (email === DUMMY_EMAIL && password === DUMMY_PASSWORD) {
      // Simulate a successful login
      console.log('Login successful!');
      // You can store a flag in localStorage to maintain the login state
      localStorage.setItem('isAuthenticated', 'true');

      // Redirect to the admin dashboard using router.push()
      router.push('/admin');
    } else {
      alert('Invalid email or password.');
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
<<<<<<< HEAD
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                !isLogin ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          {isLogin ? 'Property Management Login' : 'Create Your Account'}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required={!isLogin}
                disabled={loading}
              />
            </div>
          )}

=======
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
<<<<<<< HEAD
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
              disabled={loading}
            />
          </div>

          <div className="mb-4">
=======
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
            <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
<<<<<<< HEAD
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
              disabled={loading}
            />
          </div>

          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required={!isLogin}
                  disabled={loading}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
                  Account Type
                </label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as typeof formData.role })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required={!isLogin}
                  disabled={loading}
                >
                  <option value="LANDLORD">Property Owner/Landlord</option>
                  <option value="OPERATIONS_MANAGER">Operations Manager</option>
                  <option value="ACCOUNTANT">Accountant</option>
                  <option value="SECRETARY">Secretary</option>
                </select>
              </div>
            </>
          )}

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (isLogin ? 'Logging in...' : 'Creating Account...') : (isLogin ? 'Log In' : 'Create Account')}
          </button>
        </form>

        {isLogin && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Don't have an account?</p>
            <button
              onClick={() => setIsLogin(false)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Create Account
            </button>
          </div>
        )}

        {!isLogin && (
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Already have an account?</p>
            <button
              onClick={() => setIsLogin(true)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Log In
            </button>
          </div>
        )}
=======
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Log In
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Use the following dummy credentials:
          </p>
          <p>Email: <strong>admin@example.com</strong></p>
          <p>Password: <strong>password123</strong></p>
        </div>
>>>>>>> f535e2ffd5593d42bbb99bda6f01022063b79202
      </div>
    </div>
  );
};

export default Login;