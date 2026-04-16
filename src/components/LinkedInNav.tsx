import { Search, Home, Users, BriefcaseBusiness, MessageCircle, Bell, Grid3X3 } from "lucide-react";

interface LinkedInNavProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Users, label: "My Network", active: false },
  { icon: BriefcaseBusiness, label: "Workshops", active: false },
  { icon: MessageCircle, label: "Messaging", active: false },
  { icon: Bell, label: "Notifications", active: false },
];

const LinkedInNav = ({ searchQuery, setSearchQuery }: LinkedInNavProps) => {
  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="max-w-linkedin mx-auto px-4 flex items-center h-[52px] gap-2">
        {/* Logo */}
        <div className="shrink-0">
          <div className="w-[34px] h-[34px] bg-primary rounded-[4px] flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg leading-none">in</span>
          </div>
        </div>

        {/* Search */}
        <div className="relative w-[280px] shrink-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-[6px] rounded-[4px] bg-secondary text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground/20 border-none"
          />
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Nav items */}
        <nav className="hidden sm:flex items-center gap-0">
          {navItems.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={`flex flex-col items-center justify-center px-3 h-[52px] text-xs border-b-2 transition-colors min-w-[60px] ${
                active
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-5 h-5 mb-[2px]" strokeWidth={active ? 2.5 : 1.5} />
              <span className="leading-none">{label}</span>
            </button>
          ))}

          {/* Profile */}
          <button className="flex flex-col items-center justify-center px-3 h-[52px] text-xs border-b-2 border-transparent text-muted-foreground hover:text-foreground min-w-[60px]">
            <div className="w-5 h-5 mb-[2px] rounded-full bg-muted-foreground/30 flex items-center justify-center">
              <span className="text-[8px] font-bold text-muted-foreground">Me</span>
            </div>
            <span className="leading-none flex items-center gap-0.5">
              Me <span className="text-[10px]">▾</span>
            </span>
          </button>

          {/* Divider */}
          <div className="w-px h-8 bg-border mx-1" />

          {/* Grid / For Business */}
          <button className="flex flex-col items-center justify-center px-3 h-[52px] text-xs text-muted-foreground hover:text-foreground min-w-[60px]">
            <Grid3X3 className="w-5 h-5 mb-[2px]" strokeWidth={1.5} />
            <span className="leading-none flex items-center gap-0.5">
              Work <span className="text-[10px]">▾</span>
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default LinkedInNav;
