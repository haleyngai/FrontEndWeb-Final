import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import StatusBar from "@/components/StatusBar";

interface Event {
  id: string;
  title: string;
  venue: string;
  date: string;
  image: string;
}

interface Venue {
  id: string;
  name: string;
  type: string;
  image: string;
}

export default function Discover() {
  const [selectedCity, setSelectedCity] = useState("New York");
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [selectedExperience, setSelectedExperience] = useState(
    "Premium Experiences",
  );
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const cities = [
    "New York",
    "Miami",
    "Chicago",
    "Los Angeles",
    "Las Vegas",
    "San Francisco",
    "Austin",
    "Denver",
    "Boston",
    "Atlanta",
    "Nashville",
    "Seattle",
  ];
  const dates = ["All Dates", "Today", "This Weekend", "This Month"];
  const experiences = ["Premium Experiences", "Budget Friendly", "VIP Only"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        setCityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const tonightEvents: Event[] = [
    {
      id: "1",
      title: "DEATH BY DISCO - DAY I",
      venue: "City Winery",
      date: "Fri, Oct 31, 8:00 PM",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/fda214a63b06324aa4b5ca3a42d7d1da81dc5caf?width=507",
    },
    {
      id: "2",
      title: "QUINTINO",
      venue: "Nebula New York",
      date: "Fri, Oct 31, 11:00 PM - 4:00 AM",
      image:"https://api.builder.io/api/v1/image/assets/TEMP/fda214a63b06324aa4b5ca3a42d7d1da81dc5caf?width=507",
    },
  ];

  const venues: Venue[] = [
    {
      id: "1",
      name: "Marquee",
      type: "Tickets & Tables",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9136ee0a4bee7f5d0458d81825e37aca673151bd?width=88",
    },
    {
      id: "2",
      name: "Mr. Purple",
      type: "Cover",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/4521f72d730ca2d0eff095e2fdde94892185da08?width=90",
    },
    {
      id: "3",
      name: "E11EVEN",
      type: "Tickets & Tables",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/96b097b293f676dca2fc4d8102b2317b25088069?width=89",
    },
    {
      id: "4",
      name: "Nebula New York",
      type: "Tickets & Tables",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/609d2fadca271d33ced276b931645a96d400f3a9?width=89",
    },
    {
      id: "5",
      name: "Sincerely Ophelia",
      type: "Tickets & Tables",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/8e6d3c3290eb11257f91ec1186515fa6dac2b992?width=90",
    },
  ];

  const allEvents: Event[] = [
    {
      id: "1",
      title: "EMKAY",
      venue: "E11EVEN",
      date: "Fri, Jun 20",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9b4da1641504122fe5b5d5caa5eab5d60b5a3cae?width=312",
    },
    {
      id: "2",
      title: "E11EVEN Halloween",
      venue: "E11EVEN",
      date: "Fri, Jun 20",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9b4da1641504122fe5b5d5caa5eab5d60b5a3cae?width=312",
    },
    {
      id: "3",
      title: "EMKAY",
      venue: "E11EVEN",
      date: "Fri, Jun 20",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/9b4da1641504122fe5b5d5caa5eab5d60b5a3cae?width=312",
    },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Status Bar & Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <StatusBar />

        {/* Logo and Icons */}
        <div className="px-4 pb-4 flex items-center justify-between">
          <Link
            to="/profile"
            className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition"
          >
            <span className="text-sm font-bold text-primary">T</span>
          </Link>
          <Link
            to="/search"
            className="text-muted-foreground hover:text-foreground"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 19L14.65 14.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Filter Chips */}
        <div className="px-4 pb-4 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {/* City Dropdown */}
          <div ref={cityDropdownRef} className="relative">
            <button
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/50 text-sm whitespace-nowrap hover:bg-secondary/30 transition"
            >
              <MapPin size={14} />
              <span>{selectedCity}</span>
              <ChevronDown size={14} />
            </button>

            {/* Dropdown Menu */}
            {cityDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-secondary rounded-lg border border-border/50 shadow-lg z-50 min-w-max">
                <div className="max-h-64 overflow-y-auto">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setCityDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 text-sm hover:bg-secondary/70 transition",
                        selectedCity === city
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-foreground",
                      )}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className="px-3 py-1.5 rounded-full border border-border/50 text-sm whitespace-nowrap hover:bg-secondary/30 transition">
            {selectedDate}
          </button>
          <button className="px-3 py-1.5 rounded-full border border-border/50 text-sm whitespace-nowrap hover:bg-secondary/30 transition">
            {selectedExperience}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 space-y-8 pb-8">
        {/* Tonight Events */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Tonight</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tonightEvents.map((event) => (
              <Link
                key={event.id}
                to={`/event/${event.id}`}
                className="rounded-lg overflow-hidden hover:opacity-90 transition cursor-pointer block"
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-secondary/30">
                  <h3 className="font-medium text-sm truncate">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {event.venue}
                  </p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Venues in New York */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Venues in {selectedCity}</h2>
            <button className="text-xs text-muted-foreground hover:text-foreground font-semibold">
              See all
            </button>
          </div>
          <div className="space-y-2">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/30 transition cursor-pointer"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-12 h-12 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm">{venue.name}</h3>
                  <p className="text-xs text-muted-foreground">{venue.type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Premium Experiences */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Premium experiences for you
          </h2>
          <div className="bg-secondary/30 rounded-lg p-6 border border-border/50">
            <p className="text-sm font-medium">
              CTA to Purchase Table w/ Art and Speakeasy brand promo
            </p>
            <div className="mt-6 flex flex-col items-center gap-4">
              <div className="text-4xl font-bold">Venues</div>
              <button className="px-8 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* All Events */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">All events</h2>
            <button className="text-xs text-muted-foreground hover:text-foreground font-semibold">
              See all
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allEvents.map((event) => (
              <div
                key={event.id}
                className="rounded-lg overflow-hidden hover:opacity-90 transition cursor-pointer"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-2 bg-secondary/30">
                  <h3 className="font-medium text-xs truncate">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {event.date}
                  </p>
                  <p className="text-xs text-muted-foreground">{event.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
