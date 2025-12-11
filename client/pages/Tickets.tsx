import { useState } from "react";
import { cn } from "@/lib/utils";

interface Ticket {
  id: string;
  title: string;
  venue: string;
  date: string;
  image: string;
  status: "past" | "upcoming";
}

export default function Tickets() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Using Unsplash Source API for dynamic images
  const tickets: Ticket[] = [
    {
      id: "1",
      title: "DEATH BY DISCO - DAY I",
      venue: "City Winery",
      date: "Oct 31, 2024",
      image:
        "https://source.unsplash.com/random/800x600/?concert,lights",
      status: "upcoming",
    },
    {
      id: "2",
      title: "QUINTINO",
      venue: "Nebula New York",
      date: "Oct 31, 2024",
      image:
        "https://source.unsplash.com/random/800x600/?club,nightlife",
      status: "upcoming",
    },
    {
      id: "3",
      title: "EMKAY",
      venue: "E11EVEN",
      date: "Jun 20, 2024",
      image:
        "https://source.unsplash.com/random/800x600/?dj,party",
      status: "past",
    },
    {
      id: "4",
      title: "E11EVEN Halloween",
      venue: "E11EVEN",
      date: "Oct 31, 2023",
      image:
        "https://source.unsplash.com/random/800x600/?halloween,club",
      status: "past",
    },
  ];

  const displayTickets = tickets.filter((t) => t.status === activeTab);

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-semibold mb-6">My Tickets</h1>

          {/* Tabs */}
          <div className="flex gap-4 border-b border-border">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={cn(
                "pb-3 px-2 font-medium text-sm border-b-2 transition",
                activeTab === "upcoming"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={cn(
                "pb-3 px-2 font-medium text-sm border-b-2 transition",
                activeTab === "past"
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground",
              )}
            >
              Past
            </button>
          </div>
        </div>
      </div>

      {/* Tickets Grid */}
      <div className="px-4 py-6">
        {displayTickets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-lg overflow-hidden border border-border/50 hover:border-border transition cursor-pointer hover:bg-secondary/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={ticket.image}
                    alt={ticket.title}
                    className="w-full h-full object-cover"
                  />
                  {activeTab === "past" && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">
                        Attended
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm truncate">
                    {ticket.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ticket.venue}
                  </p>
                  <p className="text-xs text-muted-foreground">{ticket.date}</p>
                  <button className="mt-4 w-full px-3 py-2 rounded bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition">
                    {activeTab === "upcoming"
                      ? "View Details"
                      : "Review & Share"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-muted-foreground">
              {activeTab === "upcoming"
                ? "No upcoming tickets"
                : "No past tickets"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
