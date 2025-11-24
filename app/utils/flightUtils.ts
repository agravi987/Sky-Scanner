export function calculateDuration(start: string, end: string): string {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
}

export function getStatusColor(status?: string): string {
    if (!status) return 'bg-gray-500/20 border-gray-500/30 text-gray-400';

    const statusLower = status.toLowerCase();
    if (statusLower.includes('active') || statusLower.includes('scheduled')) {
        return 'bg-green-500/20 border-green-500/30 text-green-400';
    } else if (statusLower.includes('landed')) {
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
    } else if (statusLower.includes('cancelled') || statusLower.includes('diverted')) {
        return 'bg-red-500/20 border-red-500/30 text-red-400';
    } else if (statusLower.includes('delayed')) {
        return 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400';
    }
    return 'bg-gray-500/20 border-gray-500/30 text-gray-400';
}

export function generateGoogleCalendarUrl(flight: {
    flightNumber: string;
    startTime: string;
    endTime: string;
    startLocation: string;
    endLocation: string;
    airline?: string;
    aircraft?: string;
    status?: string;
}): string {
    const title = `Flight ${flight.flightNumber} - ${flight.airline || 'Flight'}`;
    const details = `Flight: ${flight.flightNumber}\\nAirline: ${flight.airline || 'N/A'}\\nAircraft: ${flight.aircraft || 'N/A'}\\nFrom: ${flight.startLocation}\\nTo: ${flight.endLocation}\\nStatus: ${flight.status || 'Unknown'}`;
    const location = `${flight.startLocation} → ${flight.endLocation}`;

    // Format dates for Google Calendar (YYYYMMDDTHHmmssZ)
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const startDate = formatDate(flight.startTime);
    const endDate = formatDate(flight.endTime);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
}
