"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Calendar, MapPin, Clock, Users, ExternalLink, PlayCircle, Radio } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  type: 'upcoming' | 'live';
  date: string;
  time: string;
  location: string;
  venue: string;
  image: string;
  attendees: string;
  description: string;
  streamUrl?: string;
  ticketPrice?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Paris Fashion Week 2024",
    type: 'upcoming',
    date: "March 15, 2024",
    time: "19:00 CET",
    location: "Paris, France",
    venue: "Le Grand Palais Éphémère",
    image: "/images/events/paris-fashion-week.jpg",
    attendees: "2.5K",
    description: "Experience the pinnacle of haute couture with exclusive collections from world-renowned designers.",
    ticketPrice: "From €350"
  },
  {
    id: 2,
    title: "Spring Collection Showcase",
    type: 'live',
    date: "Live Now",
    time: "Streaming",
    location: "Milan, Italy",
    venue: "Teatro alla Scala",
    image: "/images/events/milan-showcase.jpg",
    attendees: "15K watching",
    description: "Join us live for the unveiling of our spectacular Spring 2024 collection.",
    streamUrl: "https://stream.fashion/live"
  },
  {
    id: 3,
    title: "Sustainable Fashion Summit",
    type: 'upcoming',
    date: "April 5, 2024",
    time: "10:00 GMT",
    location: "London, UK",
    venue: "The Royal Albert Hall",
    image: "/images/events/london-summit.jpg",
    attendees: "1.8K",
    description: "A groundbreaking event focusing on sustainable and ethical fashion practices.",
    ticketPrice: "From £250"
  }
];

export default function FashionEvents() {
  const [activeTab, setActiveTab] = useState<'all' | 'live' | 'upcoming'>('all');

  const filteredEvents = events.filter(event => 
    activeTab === 'all' ? true : event.type === activeTab
  );

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Fashion Events</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join us at the most prestigious fashion events around the globe
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'live', 'upcoming'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as 'all' | 'live' | 'upcoming')}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeTab === tab
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-black/5 border-white/10 hover:bg-black/10'
              }`}
            >
              <div className="flex items-center gap-2">
                {tab === 'live' && <Radio className="w-4 h-4 animate-pulse text-red-500" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </div>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="group relative bg-black/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-[200px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Live Badge */}
                {event.type === 'live' && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/90 rounded-full flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm font-medium">LIVE</span>
                  </div>
                )}
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-serif mb-3">{event.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.venue}, {event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span>{event.attendees}</span>
                  </div>
                </div>

                {/* Action Button */}
                {event.type === 'live' ? (
                  <a
                    href={event.streamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Live Stream
                  </a>
                ) : (
                  <button className="w-full flex items-center justify-between px-6 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-colors">
                    <span>Book Now</span>
                    <div className="flex items-center gap-2">
                      <span>{event.ticketPrice}</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 