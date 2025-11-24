'use client';

import Navbar from './components/Navbar';
import FlightSearch from './components/FlightSearch';
import BackgroundAnimation from './components/BackgroundAnimation';
import { ThemeProvider } from './contexts/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden pt-24">

        {/* Background Animation */}
        <BackgroundAnimation />

        <div className="z-10 w-full max-w-5xl flex flex-col items-center">
          {/* Hero Section */}
          <div className="text-center mb-12 lg:mb-16 relative">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-surface border border-border shadow-sm animate-fade-in">
              <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">Live Flight Tracking</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-6 tracking-tighter animate-slide-up leading-tight">
              SkyTracker
            </h1>

            <p className="text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed animate-slide-up px-4" style={{ animationDelay: '0.1s' }}>
              Experience the next generation of flight tracking with real-time data, beautiful visualization, and instant updates.
            </p>
          </div>

          <FlightSearch />
        </div>

        <footer className="absolute bottom-6 text-tertiary text-xs font-medium tracking-widest uppercase z-10">
          Designed for the Future of Travel
        </footer>
      </main>
    </ThemeProvider>
  );
}
