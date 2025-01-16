"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState<'user' | 'designer'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join our fashion community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4 p-1 bg-white/5 rounded-lg mb-6">
            <button
              type="button"
              onClick={() => setAccountType('user')}
              className={`py-2 rounded-md transition-colors ${
                accountType === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-white/5'
              }`}
            >
              User
            </button>
            <button
              type="button"
              onClick={() => setAccountType('designer')}
              className={`py-2 rounded-md transition-colors ${
                accountType === 'designer' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-white/5'
              }`}
            >
              Designer
            </button>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
                placeholder="Create a password"
                required
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Must be at least 8 characters long
            </p>
          </div>

          {/* Designer-specific fields */}
          {accountType === 'designer' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm mb-2">Brand/Label Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
                  placeholder="Enter your brand name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Professional Experience</label>
                <textarea
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary min-h-[100px]"
                  placeholder="Brief description of your experience..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Portfolio URL (Optional)</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-primary"
                  placeholder="https://your-portfolio.com"
                />
              </div>
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-2"
              required
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              I agree to the{' '}
              <Link href="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>
              {' '}and{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* Social Sign-up Options */}
        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-muted-foreground">
              Or sign up with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
            Apple
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 