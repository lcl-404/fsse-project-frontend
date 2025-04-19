import {useEffect, useState} from "react";

export default function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log("hihi");
  }, []);

  return (
    <div className="navbar bg-oyster shadow-sm h-20 px-6 dark:bg-darkcyan">
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="flex items-center space-x-2 text-2xl font-bold text-newblue hover:cursor-pointer dark:text-lightyellow"
        >
          <img src="/assets/img/bird-logo.svg" alt="Gökotta Logo" className="w-8 h-8" />
          <span>Gökotta</span>
        </a>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-2">

          {/* Search Icon Dropdown */}
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"/>
              </svg>
            </label>
            <div tabIndex={0}
                 className="dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-70">
              <label
                className="input input-bordered flex items-center gap-2 h-10 rounded-md border-newblue no-focus-ring">
                <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search"/>
              </label>
            </div>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center">
          <label
            className="input input-bordered flex items-center gap-2 h-10 rounded-md border-newblue no-focus-ring w-xl">
            <svg className="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search"/>
          </label>
        </div>

        <div className="w-40 flex items-center justify-between">
          {/* Login icon */}
          <button className="btn btn-ghost btn-square text-newblue dark:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.42 0 4.675.71 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </button>

          {/* Cart icon */}
          <button className="btn btn-ghost btn-square text-newblue dark:text-white">
            <div className="indicator">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-4h-4"/>
              </svg>
              <span className="badge badge-sm indicator-item bg-amber-600 text-white">3</span>
            </div>
          </button>

          {/* Side Panel Menu */}
          <button onClick={toggleSideMenu} className="btn btn-ghost btn-square text-newblue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                 viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>

          {isMenuOpen && (
            <div className="fixed top-0 right-0 h-screen w-80 bg-base-100 dark:bg-darkcyan shadow-lg z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out">
              <button onClick={toggleSideMenu} className="self-end btn btn-sm btn-ghost">✕</button>
              <nav className="mt-6 text-newblue dark:text-lightyellow text-xl">
                <ul className="space-y-2">
                  <li className="hover:bg-babyblue dark:hover:bg-lightyellow rounded-md pl-6 py-2 transition">
                    <a href="#" className="block">Home</a>
                  </li>
                  <li className="hover:bg-babyblue dark:hover:bg-lightyellow rounded-md pl-6 py-2 transition">
                    <a href="#" className="block">Products</a>
                  </li>
                  <li className="hover:bg-babyblue dark:hover:bg-lightyellow rounded-md pl-6 py-2 transition">
                    <a href="#" className="block">About Us</a>
                  </li>
                </ul>
              </nav>
            </div>

          )}

        </div>


      </div>

    </div>
  );
}
