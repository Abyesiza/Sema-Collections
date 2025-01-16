"use client";

import { useState } from 'react';
import Image from 'next/image';
import { TrendingUp, Users, ArrowRight } from 'lucide-react';

interface Trend {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  popularity: string;
  featured: boolean;
}

const trends: Trend[] = [
  {
    id: 1,
    title: "Sustainable Minimalism",
    description: "Eco-conscious fashion meets clean, minimalist design. Focusing on quality basics and sustainable materials.",
    image: "/images/trends/sustainable-minimal.jpg",
    category: "Sustainable Fashion",
    popularity: "78K followers",
    featured: true
  },
  {
    id: 2,
    title: "Modern Vintage Fusion",
    description: "Blending classic vintage pieces with contemporary styles, creating unique and personalized looks.",
    image: "/images/trends/vintage-fusion.jpg",
    category: "Street Style",
    popularity: "65K followers",
    featured: true
  },
  {
    id: 3,
    title: "Digital Age Aesthetics",
    description: "Futuristic designs with metallic accents and tech-inspired elements, perfect for the modern urbanite.",
    image: "/images/trends/digital-aesthetic.jpg",
    category: "Contemporary",
    popularity: "92K followers",
    featured: true
  }
];

export default function FashionTrends() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">What's Hot Now</span>
            </div>
            <h2 className="text-4xl font-serif mb-4">Fashion Trends</h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Discover the latest trends shaping the fashion landscape and inspiring designers worldwide.
            </p>
          </div>
          <button className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
            View All Trends
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Trends Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(trend.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Card */}
              <div className="relative bg-black/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                {/* Image */}
                <div className="relative h-[300px] w-full">
                  <Image
                    src={trend.image}
                    alt={trend.title}
                    fill
                    className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm border border-white/10">
                      {trend.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif">{trend.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {trend.description}
                  </p>

                  {/* Stats and Action */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{trend.popularity}</span>
                    </div>
                    <button className="group/btn flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 