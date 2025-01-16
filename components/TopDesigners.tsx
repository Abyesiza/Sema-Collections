"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Instagram, Twitter, ArrowRight, Star } from 'lucide-react';

interface Designer {
  id: number;
  name: string;
  role: string;
  image: string;
  collections: {
    name: string;
    pieces: number;
    image: string;
  }[];
  awards: number;
  followers: string;
  social: {
    instagram?: string;
    twitter?: string;
  };
}

const designers: Designer[] = [
  {
    id: 1,
    name: "Isabella Chen",
    role: "Creative Director",
    image: "/images/designers/designer1.jpg",
    collections: [
      {
        name: "Summer Breeze",
        pieces: 24,
        image: "/images/collections/summer-breeze.jpg"
      },
      {
        name: "Urban Nights",
        pieces: 18,
        image: "/images/collections/urban-nights.jpg"
      }
    ],
    awards: 5,
    followers: "245K",
    social: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Head Designer",
    image: "/images/designers/designer2.jpg",
    collections: [
      {
        name: "Modern Classic",
        pieces: 32,
        image: "/images/collections/modern-classic.jpg"
      },
      {
        name: "Winter Dreams",
        pieces: 28,
        image: "/images/collections/winter-dreams.jpg"
      }
    ],
    awards: 3,
    followers: "188K",
    social: {
      instagram: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Fashion Director",
    image: "/images/designers/designer3.jpg",
    collections: [
      {
        name: "Paris Nights",
        pieces: 22,
        image: "/images/collections/paris-nights.jpg"
      },
      {
        name: "Spring Bloom",
        pieces: 26,
        image: "/images/collections/spring-bloom.jpg"
      }
    ],
    awards: 4,
    followers: "210K",
    social: {
      instagram: "#",
      twitter: "#"
    }
  }
];

export default function TopDesigners() {
  const [activeDesigner, setActiveDesigner] = useState<number>(0);

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif mb-4">Our Top Designers</h2>
          <p className="text-muted-foreground text-lg">
            Meet the creative minds behind our exclusive collections
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Designer Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {designers.map((designer, index) => (
                <button
                  key={designer.id}
                  onClick={() => setActiveDesigner(index)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    activeDesigner === index
                      ? 'bg-primary/10 border-primary/20'
                      : 'bg-black/5 border-white/10 hover:bg-black/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image
                        src={designer.image}
                        alt={designer.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg mb-1">{designer.name}</h3>
                      <p className="text-sm text-muted-foreground">{designer.role}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Designer Details */}
          <div className="lg:col-span-2">
            <div className="bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <div className="relative h-[300px]">
                <Image
                  src={designers[activeDesigner].image}
                  alt={designers[activeDesigner].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-3xl font-serif mb-2">
                        {designers[activeDesigner].name}
                      </h3>
                      <p className="text-primary">{designers[activeDesigner].role}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {designers[activeDesigner].social.instagram && (
                        <a href={designers[activeDesigner].social.instagram} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                          <Instagram className="w-5 h-5" />
                        </a>
                      )}
                      {designers[activeDesigner].social.twitter && (
                        <a href={designers[activeDesigner].social.twitter} className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                          <Twitter className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Awards</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-lg font-semibold">{designers[activeDesigner].awards}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Followers</p>
                      <p className="text-lg font-semibold">{designers[activeDesigner].followers}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collections */}
              <div className="p-8">
                <h4 className="text-lg font-medium mb-6">Latest Collections</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {designers[activeDesigner].collections.map((collection, index) => (
                    <div
                      key={index}
                      className="group relative bg-black/20 rounded-xl overflow-hidden"
                    >
                      <div className="relative h-[200px]">
                        <Image
                          src={collection.image}
                          alt={collection.name}
                          fill
                          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h5 className="text-lg font-medium mb-1">{collection.name}</h5>
                        <p className="text-sm text-muted-foreground">{collection.pieces} Pieces</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 flex items-center justify-center gap-2 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors">
                  View All Collections
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 