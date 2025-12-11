import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft, Share2, MapPin, Calendar, Clock } from "lucide-react";
import StatusBar from "@/components/StatusBar";

export default function EventDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock event data
  const event = {
    id: id || "1",
    title: "E11EVEN HALLOWEEN WEEK",
    subtitle: "FT FAT JOE LIVE",
    venue: "E11EVEN New York",
    date: "Friday, October 31, 2024",
    time: "11:00 PM - 4:00 AM",
    address: "29 9th Ave, New York, NY 10014",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/8546344c97570ff263970993ac8687793ddcd52d?width=683",
    description:
      "Join us for an unforgettable Halloween experience featuring live performance by Fat Joe. Dress to impress in your best Halloween costume!",
    ticketTypes: [
      { name: "General Admission", price: "$50" },
      { name: "VIP Table for 4", price: "$500" },
      { name: "Premium Experience", price: "$150" },
    ],
  };

  return (
    <div className="bg-background text-foreground min-h-screen">
      <StatusBar />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-secondary transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50 hover:bg-secondary transition">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      {/* Event Image */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Event Details */}
      <div className="px-4 -mt-20 relative z-10">
        <div className="bg-secondary/30 backdrop-blur rounded-2xl p-6 border border-border/50">
          <h1 className="text-2xl font-bold mb-1">{event.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{event.subtitle}</p>

          {/* Venue */}
          <div className="flex items-start gap-3 mb-3">
            <MapPin size={20} className="text-primary mt-0.5" />
            <div>
              <p className="font-medium">{event.venue}</p>
              <p className="text-sm text-muted-foreground">{event.address}</p>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-3 mb-3">
            <Calendar size={20} className="text-primary" />
            <p>{event.date}</p>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-primary" />
            <p>{event.time}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-3">About This Event</h2>
          <p className="text-muted-foreground leading-relaxed">
            {event.description}
          </p>
        </div>

        {/* Ticket Options */}
        <div className="mt-6 mb-24">
          <h2 className="text-xl font-semibold mb-3">Ticket Options</h2>
          <div className="space-y-3">
            {event.ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg bg-secondary/30 border border-border/50"
              >
                <span className="font-medium">{ticket.name}</span>
                <span className="text-lg font-bold text-primary">
                  {ticket.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="fixed bottom-20 md:bottom-6 left-0 right-0 px-4 pb-4 bg-gradient-to-t from-background via-background to-transparent">
        <button className="w-full py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:opacity-90 transition">
          Get Tickets
        </button>
      </div>
    </div>
  );
}
