interface FlightRouteProps {
    startLocation: string;
    endLocation: string;
    startTime: string;
    endTime: string;
}

export default function FlightRoute({ startLocation, endLocation, startTime, endTime }: FlightRouteProps) {
    return (
        <div className="relative py-8 mb-8">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-border via-accent/50 to-border"></div>

            {/* Animated shimmer effect */}
            <div className="absolute top-1/2 left-0 right-0 h-12 -mt-6 overflow-hidden pointer-events-none opacity-30">
                <div className="w-full h-full animate-shimmer"></div>
            </div>

            <div className="flex justify-between items-center relative z-10 gap-4">
                {/* Origin */}
                <div className="text-left group-hover:transform group-hover:translate-x-2 transition-transform duration-500 flex-1">
                    <div className="text-4xl sm:text-5xl font-black text-accent mb-1">
                        {startLocation.split(' - ')[0]}
                    </div>
                    <div className="text-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        {startLocation.split(' - ')[1]}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-primary mt-2">
                        {new Date(startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-tertiary text-xs mt-1">
                        {new Date(startTime).toLocaleDateString()}
                    </div>
                </div>

                {/* Center Icon */}
                <div className="bg-surface-elevated p-3 rounded-full border border-border shadow-lg z-10 flex-shrink-0">
                    <svg className="w-6 h-6 text-accent transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                </div>

                {/* Destination */}
                <div className="text-right group-hover:transform group-hover:-translate-x-2 transition-transform duration-500 flex-1">
                    <div className="text-4xl sm:text-5xl font-black text-accent mb-1">
                        {endLocation.split(' - ')[0]}
                    </div>
                    <div className="text-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        {endLocation.split(' - ')[1]}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-primary mt-2">
                        {new Date(endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <div className="text-tertiary text-xs mt-1">
                        {new Date(endTime).toLocaleDateString()}
                    </div>
                </div>
            </div>
        </div>
    );
}
