// ProductListing.tsx
import { useState } from "react";
import NavList from "../../components/common/NavList";
import CardContainer from "./component/CardContainer.tsx";
import FilterIcons from "./component/FilterIcons.tsx";

export default function ProductListing() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Handler function to update selectedCategory
  const handleCategoryChange = (category: string | null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-oyster dark:bg-darkcyan min-h-screen">
      <NavList />
      <FilterIcons selectedCategory={selectedCategory} handleCategoryChange={handleCategoryChange} />
      <CardContainer selectedCategory={selectedCategory} />
    </div>
  );
}