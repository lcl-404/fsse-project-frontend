import NavList from "../../components/common/NavList";
import AnnouncementStrip from "../../components/common/AnnouncementStrip";
import {Link} from "@tanstack/react-router";

export default function ErrorPage() {
  return (
    <div className="bg-oyster dark:bg-darkcyan">
      <NavList/>
      <AnnouncementStrip/>
      <div className="h-[80vh] flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-extrabold text-7xl text-newblue dark:text-lightyellow">
          404
        </h1>
        <span className="text-xl font-semibold">
    Sorry, we couldn't find what you're looking for!
  </span>
        <div className="flex justify-center w-full"> {/* New wrapper div */}
          <Link to="/">
          <button className="btn px-8 bg-babyblue text-newblue dark:bg-cyanblue">Back to home</button>
          </Link>
        </div>
      </div>
    </div>

  )
}