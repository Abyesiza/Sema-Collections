"use client";

import { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Snowflake, Wind, Thermometer } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
}

export default function WeatherFashion() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For demo purposes, using mock weather data
    const mockWeather = {
      temperature: 18,
      condition: "cloudy"
    };
    
    setWeather(mockWeather);
    setLoading(false);
  }, []);

  const getClothingSuggestions = (temp: number, condition: string) => {
    const suggestions = {
      base: ['A comfortable t-shirt', 'Underwear'],
      cold: ['A warm sweater', 'Thermal underlayer', 'Winter coat', 'Scarf', 'Gloves'],
      mild: ['Light jacket', 'Long-sleeve shirt'],
      warm: ['Breathable shirt', 'Light pants'],
      hot: ['Short-sleeve shirt', 'Shorts', 'Sun hat'],
      rainy: ['Rain jacket', 'Waterproof shoes'],
      snowy: ['Snow boots', 'Thermal socks', 'Winter hat']
    };

    let recommended = [...suggestions.base];

    if (temp < 10) {
      recommended = [...recommended, ...suggestions.cold];
    } else if (temp < 18) {
      recommended = [...recommended, ...suggestions.mild];
    } else if (temp < 25) {
      recommended = [...recommended, ...suggestions.warm];
    } else {
      recommended = [...recommended, ...suggestions.hot];
    }

    if (condition === 'rainy') {
      recommended = [...recommended, ...suggestions.rainy];
    } else if (condition === 'snowy') {
      recommended = [...recommended, ...suggestions.snowy];
    }

    return recommended;
  };

  const WeatherIcon = ({ condition }: { condition: string }) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-12 h-12 text-yellow-400" />;
      case 'rainy':
        return <CloudRain className="w-12 h-12 text-blue-400" />;
      case 'snowy':
        return <Snowflake className="w-12 h-12 text-blue-200" />;
      default:
        return <Cloud className="w-12 h-12 text-gray-400" />;
    }
  };

  if (loading) {
    return (
      <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse flex justify-center items-center h-96">
            <div className="text-xl text-muted-foreground">Loading weather data...</div>
          </div>
        </div>
      </section>
    );
  }

  if (!weather) return null;

  const suggestions = getClothingSuggestions(weather.temperature, weather.condition);

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif mb-16 text-center">Weather Style Guide</h2>
        
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/2 to-transparent rounded-3xl" />
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 bg-black/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            {/* Weather Card */}
            <div className="lg:col-span-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-serif mb-2">Current Weather</h3>
                    <p className="text-muted-foreground">Today's Forecast</p>
                  </div>
                  <WeatherIcon condition={weather.condition} />
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Thermometer className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Temperature</p>
                      <p className="text-3xl font-semibold">{weather.temperature}°C</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Wind className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Condition</p>
                      <p className="text-xl capitalize">{weather.condition}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Suggestions Card */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-white/10">
                <h3 className="text-2xl font-serif mb-6">Recommended Outfit</h3>
                <p className="text-muted-foreground mb-8">
                  Based on today's weather conditions, we recommend wearing:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    {suggestions.slice(0, Math.ceil(suggestions.length / 2)).map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {suggestions.slice(Math.ceil(suggestions.length / 2)).map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/5"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors">
                    Shop Weather Essentials
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 