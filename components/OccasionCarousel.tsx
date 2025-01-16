"use client";

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Collection {
  id: number;
  occasion: string;
  title: string;
  description: string;
  image: string;
  items: number;
  price: string;
}

const collections: Collection[] = [
  {
    id: 1,
    occasion: "Evening Events",
    title: "Twilight Elegance",
    description: "Sophisticated ensembles for memorable evening occasions",
    image: "/images/evening-events.jpg",
    items: 24,
    price: "From $129"
  },
  {
    id: 2,
    occasion: "Business",
    title: "Corporate Finesse",
    description: "Professional attire that commands presence",
    image: "/images/business-attire.jpg",
    items: 18,
    price: "From $149"
  },
  {
    id: 3,
    occasion: "Casual Weekend",
    title: "Weekend Comfort",
    description: "Effortlessly stylish casual wear for your downtime",
    image: "/images/casual-weekend.jpg",
    items: 32,
    price: "From $89"
  },
  {
    id: 4,
    occasion: "Summer Party",
    title: "Summer Soirée",
    description: "Light and vibrant pieces for summer celebrations",
    image: "/images/summer-party.jpg",
    items: 28,
    price: "From $119"
  },
  {
    id: 5,
    occasion: "Winter Special",
    title: "Winter Luxe",
    description: "Cozy yet sophisticated winter statement pieces",
    image: "/images/winter-special.jpg",
    items: 22,
    price: "From $159"
  }
];

export default function OccasionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          scrollToIndex(activeIndex + 1);
        }
      }, 5000);
    };

    startAutoSlide();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex, isPaused]);

  const scrollToIndex = (index: number) => {
    if (index < 0) {
      index = collections.length - 1;
    } else if (index >= collections.length) {
      index = 0;
    }
    setActiveIndex(index);
    carouselRef.current?.scrollTo({
      left: index * (carouselRef.current.offsetWidth || 0),
      behavior: 'smooth'
    });
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-3">Curated Collections</h2>
            <p className="text-muted-foreground">
              Discover perfect ensembles for every occasion
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-3xl" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

          <div 
            className="relative bg-black/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={carouselRef}
              className="flex overflow-x-hidden snap-x snap-mandatory"
            >
              {collections.map((collection, index) => (
                <div
                  key={collection.id}
                  className="min-w-full flex-none snap-center"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-primary font-medium tracking-wider">
                            {collection.occasion}
                          </span>
                        </div>

                        <h3 className="text-3xl lg:text-4xl font-serif mb-3">
                          {collection.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-6">
                          {collection.description}
                        </p>

                        <div className="flex items-center justify-between mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
                          <div>
                            <p className="text-sm text-muted-foreground">Collection Size</p>
                            <p className="text-xl font-semibold">{collection.items} Pieces</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Starting Price</p>
                            <p className="text-xl font-semibold">{collection.price}</p>
                          </div>
                        </div>

                        <button className="group w-full bg-primary text-primary-foreground p-3 rounded-xl text-base font-medium hover:bg-primary/90 transition-colors">
                          <span className="flex items-center justify-center gap-2">
                            Explore Collection
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="order-1 md:order-2">
                      <div className="relative h-[250px] w-full rounded-2xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10" />
                        <div className={`relative w-full h-full ${isLoading ? 'blur-sm' : 'blur-0'} transition-all duration-300`}>
                          <Image
                            src={collection.image}
                            alt={collection.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700"
                            priority={index === activeIndex}
                            quality={85}
                            onLoadingComplete={() => setIsLoading(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mt-8">
              <button
                onClick={() => scrollToIndex(activeIndex - 1)}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                aria-label="Previous collection"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex justify-center gap-3">
                {collections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-10 sm:w-12 h-1 rounded-full transition-all ${
                      activeIndex === index 
                        ? 'bg-primary scale-100' 
                        : 'bg-white/10 scale-90 hover:scale-95'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => scrollToIndex(activeIndex + 1)}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
                aria-label="Next collection"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 