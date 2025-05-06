import {Link, useNavigate} from "@tanstack/react-router";
import { useAuthStore } from "../../../../store/useAuthStore.ts";
import SignOutConfirmModal from "../SignoutConfirmModal/index.tsx";
import {useState} from "react";


export default function NavUserDropdown() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loginUser = useAuthStore((state) => state.loginUser);
  const signOut = useAuthStore((state) => state.signOut);
  const navigate = useNavigate(); // React Router's useNavigate hook


  const handleSignOut = () => {
    signOut();
    setIsModalOpen(false);
    navigate({to:"/"}); // Redirect to homepage
    // maybe redirect too
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-square text-newblue dark:text-lightyellow">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 15c2.42 0 4.675.71 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </label>

      <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
        {loginUser ? (
          <>
            <li className="px-4 py-2 text-lg font-bold text-newblue">Welcome, {loginUser.email}</li>
            <li>
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn btn-block text-newblue hover:bg-babyblue dark:text-lightyellow dark:bg-darkcyan dark:hover:bg-newblue mt-3"
              >
                Sign Out
              </button>
            </li>
            <SignOutConfirmModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              onConfirm={handleSignOut}
            />
          </>
        ) : (
          <li>
            <li className="px-4 py-2 text-newblue">Welcome, Guest</li>

            <Link
              to="/login"
              className="btn btn-sm bg-babyblue text-newblue w-full"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
