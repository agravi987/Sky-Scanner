'use client';

import { generateGoogleCalendarUrl } from '../utils/flightUtils';
import type { Flight } from '../types/flight';

interface CalendarButtonProps {
    flight: Flight;
}

export default function CalendarButton({ flight }: CalendarButtonProps) {
    const handleClick = () => {
        const calendarUrl = generateGoogleCalendarUrl(flight);
        window.open(calendarUrl, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white py-3.5 px-6 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" />
            </svg>
            Add to Google Calendar
        </button>
    );
}
