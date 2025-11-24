'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function BackgroundAnimation() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [flightType, setFlightType] = useState<'climb' | 'land' | null>(null);

    useEffect(() => {
        setMounted(true);

        // Initial flight after a short delay
        const initialTimeout = setTimeout(() => {
            scheduleNextFlight();
        }, 1000);

        return () => clearTimeout(initialTimeout);
    }, []);

    const scheduleNextFlight = () => {
        // Random delay between 2 and 8 seconds
        const delay = Math.random() * 6000 + 2000;

        setTimeout(() => {
            // Randomly choose climb or land
            const type = Math.random() > 0.5 ? 'climb' : 'land';
            setFlightType(type);

            // Schedule next flight after this one completes (approx 20s animation + buffer)
            setTimeout(scheduleNextFlight, 22000);
        }, delay);
    };

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Sky Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-accent/5 to-transparent opacity-50"></div>

            {/* Clouds - Layer 1 (Slow, Background) */}
            <div className="absolute top-20 -left-40 animate-cloud-slow opacity-30">
                <svg width="200" height="100" viewBox="0 0 200 100" fill="currentColor" className="text-surface-elevated">
                    <path d="M25,60 a20,20 0 0,1 0,-40 a30,30 0 0,1 50,0 a20,20 0 0,1 0,40 z" />
                    <path d="M100,70 a25,25 0 0,1 0,-50 a35,35 0 0,1 60,0 a25,25 0 0,1 0,50 z" />
                </svg>
            </div>

            {/* Clouds - Layer 2 (Medium) */}
            <div className="absolute top-1/3 -left-20 animate-cloud-medium opacity-20" style={{ animationDelay: '-10s' }}>
                <svg width="300" height="150" viewBox="0 0 300 150" fill="currentColor" className="text-surface-elevated">
                    <path d="M40,80 a30,30 0 0,1 0,-60 a40,40 0 0,1 70,0 a30,30 0 0,1 0,60 z" />
                </svg>
            </div>

            {/* Custom Airplane */}
            {flightType && (
                <div
                    className={`absolute top-0 left-0 w-64 h-auto z-10 ${flightType === 'climb' ? 'animate-fly-climb' : 'animate-fly-land'
                        }`}
                    onAnimationEnd={() => setFlightType(null)}
                >
                    <img
                        src="/airplane.png"
                        alt="Flying Airplane"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                    {/* Engine Contrails */}
                    <div className="absolute top-[55%] right-[20%] w-48 h-1 bg-linear-to-l from-white/40 to-transparent blur-sm transform rotate-6"></div>
                    <div className="absolute top-[65%] right-[20%] w-48 h-1 bg-linear-to-l from-white/40 to-transparent blur-sm transform rotate-6"></div>
                </div>
            )}

            {/* Clouds - Layer 3 (Fast, Foreground) */}
            <div className="absolute bottom-20 -left-60 animate-cloud-fast opacity-10 blur-sm z-20">
                <svg width="400" height="200" viewBox="0 0 400 200" fill="currentColor" className="text-surface">
                    <path d="M50,100 a40,40 0 0,1 0,-80 a50,50 0 0,1 90,0 a40,40 0 0,1 0,80 z" />
                </svg>
            </div>
        </div>
    );
}
