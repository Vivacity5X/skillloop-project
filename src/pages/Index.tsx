import { useState, useMemo } from "react";
import LinkedInNav from "@/components/LinkedInNav";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import CategoryFilterLinkedIn from "@/components/CategoryFilterLinkedIn";
import WorkshopCardLinkedIn from "@/components/WorkshopCardLinkedIn";
import WorkshopDetailLinkedIn from "@/components/WorkshopDetailLinkedIn";
import { workshops } from "@/lib/data";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorkshopId, setSelectedWorkshopId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return workshops.filter((w) => {
      const matchCat = activeCategory === "All" || w.category === activeCategory;
      const matchSearch =
        !searchQuery ||
        w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        w.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedWorkshop = workshops.find((w) => w.id === selectedWorkshopId);

  return (
    <div className="min-h-screen bg-background">
      <LinkedInNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {selectedWorkshop ? (
        <WorkshopDetailLinkedIn
          workshop={selectedWorkshop}
          onBack={() => setSelectedWorkshopId(null)}
        />
      ) : (
        <div className="max-w-linkedin mx-auto px-4 py-4">
          <div className="flex gap-6">
            <LeftSidebar />

            {/* Main feed */}
            <main className="flex-1 min-w-0 space-y-2">
              <CategoryFilterLinkedIn
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />

              {filtered.map((workshop) => (
                <WorkshopCardLinkedIn
                  key={workshop.id}
                  workshop={workshop}
                  onClick={setSelectedWorkshopId}
                />
              ))}

              {filtered.length === 0 && (
                <div className="bg-card rounded-lg border border-border p-8 text-center">
                  <p className="text-sm text-muted-foreground">No workshops found. Try a different search or category.</p>
                </div>
              )}
            </main>

            <RightSidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
