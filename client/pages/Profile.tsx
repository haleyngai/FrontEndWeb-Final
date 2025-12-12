import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft, Instagram } from "lucide-react";
import StatusBar from "@/components/StatusBar";

export default function Profile() {
  const navigate = useNavigate();

  const recentEvents = [
    {
      id: "1",
      title: "E11EVEN HALLOWEEN WEEK FT FAT JOE LIVE",
      venue: "E11EVEN",
      date: "Tuesday, 6:00 PM",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/eb456ed4968c72d37f7763bcfa58c61c908cde87?width=108",
    },
  ];

  const featuredPhotos = Array(9).fill(null);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <StatusBar />

      {/* Header */}
      <div className="px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary"
        >
          <ChevronLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">Profile</h1>
      </div>

      {/* Profile Info */}
      <div className="px-4 py-6 border-b border-border">
        <div className="flex items-start gap-4 mb-6">
          {/* Avatar */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5204acccdbad0b4ad370b0b83292f0d26dd32cb2?width=218"
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover"
          />

          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-1">Tamas An</h2>
            <p className="text-muted-foreground mb-4">Manhattan, NYC</p>

            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-semibold">24</div>
                <div className="text-sm text-muted-foreground">
                  Venues Visited
                </div>
              </div>

              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary/50">
                <Instagram size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-border hover:bg-secondary/30 transition">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M7.998 2H3.333C2.979 2 2.64 2.14 2.39 2.39C2.14 2.64 2 2.979 2 3.333V12.664C2 13.018 2.14 13.357 2.39 13.607C2.64 13.857 2.979 13.997 3.333 13.997H12.664C13.017 13.997 13.356 13.857 13.606 13.607C13.856 13.357 13.997 13.018 13.997 12.664V7.999"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.247 1.75C12.512 1.485 12.872 1.336 13.247 1.336C13.622 1.336 13.981 1.485 14.247 1.75C14.512 2.015 14.661 2.375 14.661 2.75C14.661 3.125 14.512 3.484 14.247 3.75L8.239 9.757C8.081 9.916 7.886 10.031 7.671 10.094L5.756 10.654C5.699 10.671 5.638 10.672 5.58 10.657C5.522 10.642 5.469 10.612 5.427 10.57C5.385 10.527 5.355 10.475 5.34 10.417C5.325 10.359 5.326 10.298 5.343 10.241L5.903 8.326C5.966 8.111 6.082 7.916 6.24 7.758L12.247 1.75Z"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Edit Profile</span>
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-border hover:bg-secondary/30 transition">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M7.998 2H3.333C2.979 2 2.64 2.14 2.39 2.39C2.14 2.64 2 2.979 2 3.333V12.664C2 13.018 2.14 13.357 2.39 13.607C2.64 13.857 2.979 13.997 3.333 13.997H12.664C13.017 13.997 13.356 13.857 13.606 13.607C13.856 13.357 13.997 13.018 13.997 12.664V7.999"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.247 1.75C12.512 1.485 12.872 1.336 13.247 1.336C13.622 1.336 13.981 1.485 14.247 1.75C14.512 2.015 14.661 2.375 14.661 2.75C14.661 3.125 14.512 3.484 14.247 3.75L8.239 9.757C8.081 9.916 7.886 10.031 7.671 10.094L5.756 10.654C5.699 10.671 5.638 10.672 5.58 10.657C5.522 10.642 5.469 10.612 5.427 10.57C5.385 10.527 5.355 10.475 5.34 10.417C5.325 10.359 5.326 10.298 5.343 10.241L5.903 8.326C5.966 8.111 6.082 7.916 6.24 7.758L12.247 1.75Z"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Settings</span>
          </button>
        </div>
      </div>

      {/* Recent Events */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-bold mb-4">Recent Events</h3>
        {recentEvents.map((event) => (
          <Link
            key={event.id}
            to={`/event/${event.id}`}
            className="flex items-center gap-4 hover:bg-secondary/20 p-3 -mx-3 rounded-lg transition"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-14 h-12 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm line-clamp-2 mb-1">
                {event.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>{event.venue}</span>
                <span>•</span>
                <span>{event.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Photos */}
      <div className="px-4 pb-24">
        <h3 className="text-lg font-bold mb-4">Featured Photos</h3>
        <div className="grid grid-cols-3 gap-2">
          {featuredPhotos.map((_, index) => (
            <div
              key={index}
              className="aspect-square bg-secondary/30 rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
