"use client";

import { ShoppingBag, Heart, Search, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import FashionAdviceChat from './components/FashionAdviceChat';
import WeatherFashion from '../components/WeatherFashion';
import OccasionCarousel from '../components/OccasionCarousel';
import FashionTrends from '../components/FashionTrends';
import TopDesigners from '../components/TopDesigners';
import FashionEvents from '../components/FashionEvents';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
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

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2072"
            alt="Hero fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-7xl sm:text-9xl font-serif mb-6 float-animation">
              Elevate Your<br />Style
            </h1>
            <p className="text-xl mb-8 max-w-xl tracking-wide">
              Premium streetwear crafted for those who dare to stand out.
            </p>
            <button className="bg-white text-black px-8 py-3 text-lg tracking-wider hover:bg-white/90 transition-colors">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
      <FashionAdviceChat />
      <WeatherFashion />
      <FashionTrends />
      <TopDesigners />
      <FashionEvents />
      <OccasionCarousel />
      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif mb-16 text-center">Premium Essentials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {[
              {
                name: "Essential Hoodie",
                price: "$129",
                frontImage: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1974",
                backImage: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=1974",
              },
              {
                name: "Premium Jumper",
                price: "$99",
                frontImage: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005",
                backImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1964",
              },
              {
                name: "Comfort Sweats",
                price: "$89",
                frontImage: "https://images.unsplash.com/photo-1606297199333-e93f7d726cab?q=80&w=1974",
                backImage: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1974",
              },
            ].map((product, index) => (
              <div 
                key={index} 
                className="group cursor-pointer perspective"
                onMouseEnter={() => setHoveredProduct(index)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-[600px] mb-6 overflow-hidden bg-neutral-100">
                  <div className="w-full h-full transition-transform duration-1000 preserve-3d" 
                       style={{
                         transform: hoveredProduct === index ? 'rotateY(180deg)' : 'rotateY(0)',
                       }}>
                    <img
                      src={product.frontImage}
                      alt={product.name}
                      className="absolute w-full h-full object-cover backface-hidden"
                    />
                    <img
                      src={product.backImage}
                      alt={`${product.name} back`}
                      className="absolute w-full h-full object-cover backface-hidden rotate-y-180"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button className="w-full bg-black text-white py-3 tracking-wider hover:bg-black/90 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                <p className="text-muted-foreground tracking-wider">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Platform Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif mb-6">Join Our Platform</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto tracking-wide text-gray-300">
            Be part of our exclusive community. Get early access to new releases, behind-the-scenes content, and fashion insights.
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-8 py-3 tracking-wider hover:bg-white/90 transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-serif mb-4">About Sema Collections</h3>
              <p className="text-muted-foreground tracking-wide">
                Premium streetwear brand specializing in custom-made, high-quality essentials.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Contact</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Shipping</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Returns</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Size Guide</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">New Arrivals</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Products</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Collections</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Instagram</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Facebook</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">Twitter</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground tracking-wide">TikTok</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-16 pt-8 text-center text-muted-foreground tracking-wide">
            <p>&copy; 2024 Sema Collections. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  );
}