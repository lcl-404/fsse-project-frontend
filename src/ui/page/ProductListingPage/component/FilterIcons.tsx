// component/FilterIcons.tsx
type FilterIconsProps = {
  selectedCategory: string | null;
  handleCategoryChange: (category: string | null) => void;
};

const CATEGORY_MAP: Record<string, string> = {
  kitchenware: "Kitchenware",
  bakeware: "Bakeware",
  cookware: "Cookware",
  tableware: "Tableware",
  picnic: "Outdoor",
};

export default function FilterIcons({ selectedCategory, handleCategoryChange }: FilterIconsProps) {
  return (
    <div className="top-0 z-10 bg-babyblue dark:bg-base-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex overflow-x-auto space-x-2 hide-scrollbar justify-center flex-wrap gap-1">
          {/* All Products Button */}
          <button
            onClick={() => handleCategoryChange(null)}
            className={`
              btn rounded-xl capitalize
              ${selectedCategory === null ? "bg-cyanblue text-oyster" : "bg-oyster text-newblue"}
              hover:bg-cyanblue hover:text-oyster
              focus:bg-cyanblue focus:text-oyster focus:outline-none
            `}
          >
            All Products
          </button>

          {/* Category Buttons */}
          {Object.entries(CATEGORY_MAP).map(([cat, label]) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`
                btn rounded-xl capitalize
                ${selectedCategory === cat ? "bg-cyanblue text-oyster" : "bg-oyster text-newblue"}
                hover:bg-cyanblue hover:text-oyster
                focus:bg-cyanblue focus:text-oyster focus:outline-none
              `}
            >
              {label ?? cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}