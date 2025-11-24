'use client';

interface SearchBarProps {
    query: string;
    loading: boolean;
    onQueryChange: (query: string) => void;
    onSearch: (e: React.FormEvent) => void;
}

export default function SearchBar({ query, loading, onQueryChange, onSearch }: SearchBarProps) {
    return (
        <form onSubmit={onSearch} className="relative group mb-12 w-full max-w-3xl mx-auto">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-accent to-purple-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative flex items-center gap-x-3 bg-surface/90 backdrop-blur-xl rounded-full p-2 border border-white/10 shadow-2xl transition-all duration-300 focus-within:shadow-accent/20 focus-within:border-accent/50">
                <div className="pl-6 pr-4 text-tertiary group-focus-within:text-accent transition-colors duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => onQueryChange(e.target.value)}
                    placeholder="Search Flight (e.g., AA123)"
                    className="w-full px-4 bg-transparent rounded-lg text-primary placeholder-tertiary/70 py-4 outline-none text-lg font-medium tracking-wide"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-linear-to-r from-blue-600 to-accent hover:from-blue-500 hover:to-accent-hover text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-accent/30 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0 disabled:transform-none min-w-[140px] flex justify-center"
                >
                    {loading ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Searching</span>
                        </div>
                    ) : (
                        'TRACK'
                    )}
                </button>
            </div>
        </form>
    );
}
