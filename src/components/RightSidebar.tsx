import { TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const trending = [
    { title: "Pottery Classes", readers: "1,234 learners" },
    { title: "Weekend Coding Bootcamps", readers: "987 learners" },
    { title: "Thai Cooking Workshop", readers: "654 learners" },
    { title: "Watercolor for Beginners", readers: "432 learners" },
    { title: "Photography Walks", readers: "321 learners" },
  ];

  return (
    <aside className="w-[300px] shrink-0 hidden md:block">
      {/* Trending */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="px-3 py-3 border-b border-border">
          <h3 className="text-base font-semibold text-foreground">Trending Workshops</h3>
        </div>
        <div className="py-1">
          {trending.map((item, i) => (
            <div key={i} className="px-3 py-2 hover:bg-accent cursor-pointer">
              <div className="flex items-start gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-foreground leading-tight">{item.title}</p>
                  <p className="text-[11px] text-muted-foreground">{item.readers}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ad-like card */}
      <div className="bg-card rounded-lg border border-border mt-2 p-3 text-center">
        <p className="text-xs text-muted-foreground mb-2">Want to teach a workshop?</p>
        <Link to="/become-instructor" className="text-xs font-semibold text-primary hover:underline cursor-pointer">
          Become an Instructor →
        </Link>
      </div>

      {/* Footer links */}
      <div className="mt-3 px-2">
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
          {["About", "Accessibility", "Help Center", "Privacy", "Terms"].map((l) => (
            <span key={l} className="hover:text-primary hover:underline cursor-pointer">{l}</span>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground mt-2">SkillLoop Corporation © 2026</p>
      </div>
    </aside>
  );
};

export default RightSidebar;
