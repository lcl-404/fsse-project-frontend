import { useEffect, useState } from "react";
import CartDropDown from "./CartDropDown.tsx";
import Logo from "../Logo/Logo.tsx";
import {Link} from "@tanstack/react-router";
import NavUserDropdown from "./NavUserDropdown.tsx";


export default function NavList() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log("hihi");
  }, []);

  return (
    <div className="navbar bg-oyster h-20 px-6 dark:bg-darkcyan">
      <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 space-x-2 text-2xl font-bold text-newblue hover:cursor-pointer dark:text-lightyellow"
        >
          <div className="w-10 text-current">
            <Logo/>
          </div>
          <span>Gökotta</span>
        </a>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-2">
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn btn-ghost btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </label>
            <div
              tabIndex={0}
              className="dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-70"
            >
              <label className="input input-bordered flex items-center gap-2 h-10 rounded-md border-newblue no-focus-ring">
                <svg
                  className="h-4 w-4 opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
              </label>
            </div>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center">
          <label className="input input-bordered flex items-center gap-2 h-10 rounded-md border-newblue no-focus-ring w-xl">
            <svg
              className="h-4 w-4 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
        </div>

        <div className="w-40 flex items-center justify-between">
          {/* Login icon */}
          <NavUserDropdown/>
          <CartDropDown />

          {/* Side Panel Menu */}
          <button
            onClick={toggleSideMenu}
            className="btn btn-ghost btn-square text-newblue dark:text-lightyellow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="fixed top-0 right-0 h-screen w-80 bg-base-100 dark:bg-base-100 shadow-lg z-50 flex flex-col p-6 transition-transform duration-300 ease-in-out">
              <button
                onClick={toggleSideMenu}
                className="self-end btn btn-sm btn-ghost"
              >
                ✕
              </button>
              <nav className="mt-6 text-newblue dark:text-lightyellow text-xl">
                <ul className="space-y-2">
                  <li className="hover:bg-babyblue dark:hover:bg-newblue rounded-md pl-6 py-2 transition">
                    <Link to={"/"}>
                    <span className="block">
                      Home
                    </span>
                    </Link>
                  </li>
                  <li className="hover:bg-babyblue dark:hover:bg-newblue rounded-md pl-6 py-2 transition">
                    <Link to={"/products"}>
                    <span className="block">
                      Products
                    </span>
                    </Link>
                  </li>
                  <li className="hover:bg-babyblue dark:hover:bg-newblue rounded-md pl-6 py-2 transition">
                    <a href="#" className="block">
                      About Us
                    </a>
                  </li>
                  <li className="pl-6">
                    <Link to="/login">
                    <span
                      className="btn text-newblue hover:bg-babyblue dark:text-lightyellow dark:bg-darkcyan dark:hover:bg-newblue mt-5"
                    >
                      Login
                    </span>
                    </Link>
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