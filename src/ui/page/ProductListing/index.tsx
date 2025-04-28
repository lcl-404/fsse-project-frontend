import {useMatches, useNavigate} from "@tanstack/react-router";
import FilterIcons from "./component/FilterIcons.tsx";
import CardContainer from "./component/CardContainer.tsx";
import NavList from "../../components/common/NavList";

export default function ProductListing() {
  const matches = useMatches();
  const categoryMatch = matches.find(match => match.routeId === '/products/cat/$category');
  const category = categoryMatch?.params?.category ?? null;
  const navigate = useNavigate({from:"/"})


  const handleCategoryChange = (selectedCategory: string | null) => {
    const path = selectedCategory ? `/products/cat/${selectedCategory}` : "/products";
    navigate({ to: path });
  };

  return (
    <div className="min-h-screen bg-oyster dark:bg-darkcyan">
      <NavList/>
      <FilterIcons selectedCategory={category} handleCategoryChange={handleCategoryChange} />
      <CardContainer selectedCategory={category} />
    </div>
  );
}
