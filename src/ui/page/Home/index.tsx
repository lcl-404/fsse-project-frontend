
import NavList from "../../components/common/NavList";
import LandingCarousel from "./component/LandingCarousel.tsx";
import AnnouncementStrip from "../../components/common/AnnouncementStrip";
import {ProductShowcase} from "./component/ProductShowcase.tsx";
import NewsLetter from "./component/NewsLetter.tsx";
import VisitUs from "./component/VisitUs.tsx";


export default function Home() {

  return (
    <div className="bg-oyster dark:bg-darkcyan">
      <NavList/>
      <LandingCarousel/>
      <AnnouncementStrip/>
      <ProductShowcase/>
      <NewsLetter/>
      <VisitUs/>
    </div>
  )
}