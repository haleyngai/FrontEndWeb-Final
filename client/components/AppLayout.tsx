import { ReactNode } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Compass, Search, Ticket, Images } from "lucide-react";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Compass, label: "Discover" },
    { path: "/search", icon: Search, label: "Search" },
    { path: "/tickets", icon: Ticket, label: "Tickets" },
    { path: "/photos", icon: Images, label: "Photos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <main className="flex-1 overflow-y-auto pb-24 md:pb-0">{children}</main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur">
        <div className="flex justify-around items-center h-20 px-2">
          {navItems.map(({ path, icon: Icon, label }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center w-20 h-20 rounded-lg transition-all",
                isActive(path) ? "bg-primary/10" : "hover:bg-secondary/50",
              )}
            >
              <Icon
                size={24}
                className={cn(
                  "mb-1",
                  isActive(path) ? "text-primary" : "text-muted-foreground",
                )}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  isActive(path) ? "text-primary" : "text-muted-foreground",
                )}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
