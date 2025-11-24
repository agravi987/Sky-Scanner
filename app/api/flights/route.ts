import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const flightNumber = searchParams.get('flightNumber');

    if (!flightNumber) {
        return NextResponse.json({ error: 'Flight number is required' }, { status: 400 });
    }

    const apiKey = process.env.AVIATION_STACK_API_KEY;

    if (!apiKey) {
        return NextResponse.json({ error: 'API key not configured' }, { status: 500 });
    }

    try {
        // Aviation Stack API endpoint for flights
        const url = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber}`;

        const response = await fetch(url, {
            next: { revalidate: 60 } // Cache for 60 seconds
        });

        if (!response.ok) {
            throw new Error(`Aviation Stack API error: ${response.status}`);
        }

        const data = await response.json();

        // Transform Aviation Stack data to our format
        if (data.data && data.data.length > 0) {
            const flights = data.data.map((flight: any) => {
                const departure = flight.departure;
                const arrival = flight.arrival;

                return {
                    flightNumber: flight.flight?.iata || flightNumber,
                    startTime: departure?.scheduled || departure?.estimated || new Date().toISOString(),
                    endTime: arrival?.scheduled || arrival?.estimated || new Date().toISOString(),
                    timeZone: departure?.timezone || 'UTC',
                    startLocation: `${departure?.iata || 'N/A'} - ${departure?.airport || 'Unknown'}`,
                    endLocation: `${arrival?.iata || 'N/A'} - ${arrival?.airport || 'Unknown'}`,
                    status: flight.flight_status || 'unknown',
                    airline: flight.airline?.name || 'Unknown',
                    aircraft: flight.aircraft?.registration || 'N/A',
                };
            });

            return NextResponse.json(flights);
        } else {
            // No flights found
            return NextResponse.json([]);
        }
    } catch (error) {
        console.error('Error fetching flight data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch flight data' },
            { status: 500 }
        );
    }
}
