import { useState } from "react";
import { Search as SearchIcon, X } from "lucide-react";

interface SearchResult {
  id: string;
  type: "event" | "venue" | "organizer";
  title: string;
  subtitle: string;
  image: string;
}

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);

  const sampleResults: SearchResult[] = [
    {
      id: "1",
      type: "event",
      title: "DEATH BY DISCO - DAY I",
      subtitle: "City Winery • Fri, Oct 31, 8:00 PM",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fda214a63b06324aa4b5ca3a42d7d1da81dc5caf?width=507",
    },
    {
      id: "2",
      type: "event",
      title: "QUINTINO",
      subtitle: "Nebula New York • Fri, Oct 31, 11:00 PM",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5a71e8cdd30bbf54b91f4629027ee5b64ed28d56?width=503",
    },
    {
      id: "3",
      type: "venue",
      title: "Marquee",
      subtitle: "Tickets & Tables • Manhattan",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9136ee0a4bee7f5d0458d81825e37aca673151bd?width=88",
    },
    {
      id: "4",
      type: "venue",
      title: "E11EVEN",
      subtitle: "Tickets & Tables • Miami",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96b097b293f676dca2fc4d8102b2317b25088069?width=89",
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      setResults(
        sampleResults.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    } else {
      setResults([]);
    }
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Search Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border px-4 py-4">
        <div className="flex items-center gap-3 bg-secondary/30 rounded-lg px-3 py-2 border border-border/50">
          <SearchIcon size={20} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events, venues, organizers..."
            value={query}
            onChange={handleSearch}
            className="flex-1 bg-transparent outline-none text-sm placeholder-muted-foreground"
          />
          {query && (
            <button
              onClick={handleClear}
              className="text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-6">
        {results.length > 0 ? (
          <div className="space-y-2">
            {results.map((result) => (
              <div
                key={result.id}
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/30 transition cursor-pointer"
              >
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{result.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {result.subtitle}
                  </p>
                  <span className="inline-block text-xs text-primary mt-2 font-medium">
                    {result.type.charAt(0).toUpperCase() + result.type.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <SearchIcon size={48} className="text-muted-foreground/50 mb-4" />
            <p className="text-muted-foreground">
              {query
                ? "No results found"
                : "Search for events, venues, or organizers"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
