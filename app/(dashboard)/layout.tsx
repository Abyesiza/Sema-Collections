"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutGrid,
  ShoppingBag,
  Users,
  BarChart2,
  MessageSquare,
  Settings,
  Menu,
  X,
  LogOut
} from 'lucide-react';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutGrid
  },
  {
    name: 'Collections',
    href: '/dashboard/collections',
    icon: ShoppingBag
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: Users
  },
  {
    name: 'Analytics',
    href: '/dashboard/analytics',
    icon: BarChart2
  },
  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: MessageSquare
  },
  {
    name: 'Settings',
    href: '/dashboard/settings',
    icon: Settings
  }
];

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="flex flex-col h-full w-64 bg-black/5 backdrop-blur-xl border-r border-white/10">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-serif">
                SEMA
              </Link>
              <Link 
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View Site
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Profile */}
          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-primary/10" />
              <div>
                <p className="font-medium">Isabella Chen</p>
                <p className="text-sm text-muted-foreground">Designer</p>
              </div>
            </div>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-white/5 rounded-xl transition-colors mt-2">
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg md:hidden"
      >
        {isSidebarOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Main Content */}
      <main className={`transition-all ${isSidebarOpen ? 'md:ml-64' : ''}`}>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
} 