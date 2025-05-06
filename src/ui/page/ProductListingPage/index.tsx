import {useMatches, useNavigate} from "@tanstack/react-router";
import FilterIcons from "./component/FilterIcons.tsx";
import CardContainer from "./component/CardContainer.tsx";
import NavList from "../../components/common/NavList";
import Footer from "../../components/common/Footer";

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
    <div className="bg-oyster dark:bg-darkcyan min-h-screen flex flex-col">
      <NavList />
      <div className="flex-grow py-5"> {/* ← This pushes footer down */}
        <FilterIcons selectedCategory={category} handleCategoryChange={handleCategoryChange} />
        <CardContainer selectedCategory={category} />
      </div>
      <Footer />
    </div>
  );
}
