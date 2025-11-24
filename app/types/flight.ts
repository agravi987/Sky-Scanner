export interface Flight {
    flightNumber: string;
    startTime: string;
    endTime: string;
    timeZone: string;
    startLocation: string;
    endLocation: string;
    status?: string;
    airline?: string;
    aircraft?: string;
}
