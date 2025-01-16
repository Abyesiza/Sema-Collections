"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, Search, Menu } from 'lucide-react';

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="text-2xl tracking-wider">SEMA COLLECTIONS</Link>
          </div>
          
          <div className="hidden sm:flex items-center space-x-8">
            <Link href="#" className="text-foreground/80 hover:text-foreground">New Arrivals</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">Products</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">Collections</Link>
            <Link href="#" className="text-foreground/80 hover:text-foreground">About</Link>
            <Link href="/sign-in" className="text-foreground/80 hover:text-foreground">Sign In</Link>
            <Link 
              href="/sign-up" 
              className="px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2">
              <Heart className="h-5 w-5" />
            </button>
            <button className="p-2">
              <ShoppingBag className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-background border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block px-3 py-2 text-foreground/80 hover:text-foreground">New Arrivals</Link>
            <Link href="#" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Products</Link>
            <Link href="#" className="block px-3 py-2 text-foreground/80 hover:text-foreground">Collections</Link>
            <Link href="#" className="block px-3 py-2 text-foreground/80 hover:text-foreground">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
} 