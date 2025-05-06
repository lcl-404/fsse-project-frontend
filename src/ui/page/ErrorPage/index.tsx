import NavList from "../../components/common/NavList";
import AnnouncementStrip from "../../components/common/AnnouncementStrip";
import {Link} from "@tanstack/react-router";
import Footer from "../../components/common/Footer";

export default function ErrorPage() {
  return (
    <div className="bg-oyster dark:bg-darkcyan flex flex-col min-h-screen">
      <NavList />
      <AnnouncementStrip />

      {/* Centered Content Area */}
      <div className="flex-grow flex flex-col justify-center items-center"> {/* ← Key changes here */}
        <div className="text-center max-w-md mx-auto px-4 py-8"> {/* Container for better text control */}
          <h1 className="font-extrabold text-7xl text-newblue dark:text-lightyellow mb-4">
            404
          </h1>
          <p className="text-xl font-semibold mb-6">
            Sorry, we couldn't find what you're looking for!
          </p>
          <Link to="/">
            <button className="btn px-8 bg-babyblue text-newblue dark:bg-cyanblue hover:scale-105 transition-transform">
              Back to home
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}