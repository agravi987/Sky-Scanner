import { getStatusColor } from '../utils/flightUtils';

interface FlightStatusProps {
    status?: string;
    timeZone: string;
}

export default function FlightStatus({ status, timeZone }: FlightStatusProps) {
    const statusColorClass = getStatusColor(status);

    return (
        <div className="flex flex-col items-end gap-2">
            <div className={`${statusColorClass} border px-4 py-1.5 rounded-full shadow-sm`}>
                <span className="text-xs font-bold tracking-widest uppercase">{status || 'Unknown'}</span>
            </div>
            <span className="text-tertiary text-xs font-mono">{timeZone}</span>
        </div>
    );
}
