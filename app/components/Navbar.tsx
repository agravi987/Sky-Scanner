'use client';

import ThemeToggle from './ThemeToggle';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/70 border-b border-white/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-accent flex items-center justify-center shadow-lg group-hover:shadow-accent/50 transition-all duration-300 group-hover:scale-105">
                            <svg className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 group-hover:to-accent transition-all duration-300">
                            SkyTracker
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <a href="#" className="text-primary hover:text-accent px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors duration-200">HOME</a>
                            <a href="#" className="text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors duration-200">MAP</a>
                            <a href="#" className="text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors duration-200">FLIGHTS</a>
                            <a href="#" className="text-secondary hover:text-accent px-3 py-2 rounded-md text-sm font-bold tracking-wide transition-colors duration-200">ABOUT</a>
                        </div>
                    </div>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle className="relative top-0 right-0 p-2.5" />
                        {/* <button className="hidden sm:block bg-surface-elevated hover:bg-surface-elevated/80 text-primary px-5 py-2.5 rounded-full text-sm font-bold border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                            Sign In
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}
