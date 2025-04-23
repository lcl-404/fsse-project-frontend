
import NavList from "../../components/common/NavList";
import LandingCarousel from "./component/LandingCarousel.tsx";
import AnnouncementStrip from "../../components/common/AnnouncementStrip";
import {ProductCarousel} from "./component/ProductCarousel.tsx";
import NewsLetter from "./component/NewsLetter.tsx";
import VisitUs from "./component/visitUs.tsx";


export default function Home() {

  return (
    <div className="bg-oyster dark:bg-darkcyan">
      <NavList/>
      <LandingCarousel/>
      <AnnouncementStrip/>
      <ProductCarousel/>
      <NewsLetter/>
      <VisitUs/>
    </div>
  )
}