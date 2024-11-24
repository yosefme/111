import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { AuthForm } from '../components/AuthForm';

export function LoginPage() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log('Login:', data);
    // Here you would typically handle the login logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <Brain className="h-12 w-12 text-indigo-600 mx-auto" />
          </Link>
          <h1 className="text-3xl font-bold mt-6 mb-2">Welcome back</h1>
          <p className="text-gray-600">
            New to Academe?{' '}
            <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
              Create an account
            </Link>
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <AuthForm type="login" onSubmit={handleLogin} />
        </div>
      </div>
    </div>
  );
}