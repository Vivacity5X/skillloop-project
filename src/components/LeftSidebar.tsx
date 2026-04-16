import { MapPin, Bookmark } from "lucide-react";

const LeftSidebar = () => {
  return (
    <aside className="w-[225px] shrink-0 hidden lg:block">
      {/* Profile card */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        {/* Cover */}
        <div className="h-14 bg-gradient-to-r from-primary/30 to-primary/10" />
        {/* Avatar */}
        <div className="px-3 -mt-7">
          <div className="w-[56px] h-[56px] rounded-full border-2 border-card bg-muted flex items-center justify-center">
            <span className="text-xl font-bold text-muted-foreground">U</span>
          </div>
        </div>
        <div className="px-3 pt-2 pb-3">
          <p className="text-sm font-semibold text-foreground hover:underline cursor-pointer">Welcome, User</p>
          <p className="text-xs text-muted-foreground">Hobbyist & Learner</p>
        </div>
        <div className="border-t border-border px-3 py-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Profile viewers</span>
            <span className="text-primary font-semibold">42</span>
          </div>
          <div className="flex justify-between text-xs mt-1">
            <span className="text-muted-foreground">Workshop impressions</span>
            <span className="text-primary font-semibold">128</span>
          </div>
        </div>
        <div className="border-t border-border px-3 py-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground cursor-pointer">
            <Bookmark className="w-3.5 h-3.5" />
            <span className="font-semibold">Saved workshops</span>
          </div>
        </div>
      </div>

      {/* Discover shortcuts */}
      <div className="bg-card rounded-lg border border-border mt-2 p-3">
        <p className="text-xs font-semibold text-foreground mb-2">Discover by Location</p>
        <div className="space-y-1.5">
          {["San Francisco", "Oakland", "Berkeley", "Palo Alto"].map((city) => (
            <div key={city} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary cursor-pointer">
              <MapPin className="w-3 h-3" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
