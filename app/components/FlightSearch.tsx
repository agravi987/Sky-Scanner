'use client';

import { useState } from 'react';
import type { Flight } from '../types/flight';
import SearchBar from './SearchBar';
import FlightCard from './FlightCard';

export default function FlightSearch() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Flight[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setHasSearched(true);
        setError(null);

        try {
            const res = await fetch(`/api/flights?flightNumber=${encodeURIComponent(query)}`);

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to fetch flight data');
            }

            const data = await res.json();
            setResults(data);
        } catch (error) {
            console.error('Failed to fetch flights:', error);
            setError(error instanceof Error ? error.message : 'Failed to fetch flight data');
            setResults([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto relative z-10">
            {/* Search Bar */}
            <SearchBar
                query={query}
                loading={loading}
                onQueryChange={setQuery}
                onSearch={handleSearch}
            />

            {/* Results */}
            <div className="space-y-6">
                {/* Error State */}
                {error && (
                    <div className="text-center professional-card p-8 animate-fade-in border-red-500/30 bg-red-500/5">
                        <p className="text-xl text-red-500 font-semibold mb-2">Error</p>
                        <p className="text-secondary">{error}</p>
                    </div>
                )}

                {/* No Results State */}
                {hasSearched && results.length === 0 && !loading && !error && (
                    <div className="text-center professional-card p-8 animate-fade-in">
                        <p className="text-xl text-secondary font-normal">
                            No flights found for "<span className="text-primary font-semibold">{query}</span>"
                        </p>
                        <p className="text-sm text-tertiary mt-2">Please check the flight number and try again.</p>
                    </div>
                )}

                {/* Flight Results */}
                {results.map((flight, index) => (
                    <FlightCard key={`${flight.flightNumber}-${index}`} flight={flight} index={index} />
                ))}
            </div>
        </div>
    );
}
