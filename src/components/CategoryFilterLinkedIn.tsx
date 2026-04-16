import { categories } from "@/lib/data";

interface CategoryFilterLinkedInProps {
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const CategoryFilterLinkedIn = ({ activeCategory, onCategoryChange }: CategoryFilterLinkedInProps) => {
  return (
    <div className="bg-card rounded-lg border border-border p-3">
      <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategoryChange(cat.name)}
            className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              activeCategory === cat.name
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilterLinkedIn;
