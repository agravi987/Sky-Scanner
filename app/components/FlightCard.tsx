import type { Flight } from '../types/flight';
import FlightStatus from './FlightStatus';
import FlightRoute from './FlightRoute';
import CalendarButton from './CalendarButton';
import { calculateDuration } from '../utils/flightUtils';

interface FlightCardProps {
    flight: Flight;
    index: number;
}

export default function FlightCard({ flight, index }: FlightCardProps) {
    return (
        <div
            className="professional-card glass-card p-6 sm:p-8 animate-slide-up relative overflow-hidden group hover:border-accent/50 transition-all duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10 flex-wrap gap-4">
                <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-xl border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-primary tracking-tight">{flight.flightNumber}</h3>
                        <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                            {flight.airline || 'International'}
                        </span>
                    </div>
                </div>
                <FlightStatus status={flight.status} timeZone={flight.timeZone} />
            </div>

            {/* Flight Path Visualization */}
            <FlightRoute
                startLocation={flight.startLocation}
                endLocation={flight.endLocation}
                startTime={flight.startTime}
                endTime={flight.endTime}
            />

            {/* Footer Info */}
            <div className="grid grid-cols-3 gap-4 border-t border-border pt-6 mb-6">
                <div className="text-center border-r border-border">
                    <div className="text-tertiary text-xs uppercase tracking-widest mb-1 font-semibold">Duration</div>
                    <div className="text-primary font-bold text-lg">
                        {calculateDuration(flight.startTime, flight.endTime)}
                    </div>
                </div>
                <div className="text-center border-r border-border">
                    <div className="text-tertiary text-xs uppercase tracking-widest mb-1 font-semibold">Aircraft</div>
                    <div className="text-primary font-bold text-lg">{flight.aircraft || 'N/A'}</div>
                </div>
                <div className="text-center">
                    <div className="text-tertiary text-xs uppercase tracking-widest mb-1 font-semibold">Airline</div>
                    <div className="text-primary font-bold text-sm">{flight.airline || 'Unknown'}</div>
                </div>
            </div>

            {/* Add to Calendar Button */}
            <CalendarButton flight={flight} />
        </div>
    );
}
