import React from "react";
import { BookOpenIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

//Link Active Logic
const isActive = ({ isActive }) =>
  [
    "text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2  hover:border-green-500  mx-1.5 sm:mx-6",
    isActive ? "border-green-500" : " ",
  ]
    .filter(Boolean)
    .join(" ");

const NavBar = ({ setIsLogin }) => {
  //logout
  const logoutSubmit = () => {
    localStorage.clear();
    setIsLogin(false);
  };

  return (
    <nav className="bg-white shadow dark:bg-gray-800 flex justify-center items-center">
      <BookOpenIcon className="w-10 text-green-500  transition-colors duration-200 transform  mx-1.5 sm:mx-6" />

      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <NavLink to="/notes" className={isActive}>
          HOME
        </NavLink>

        <NavLink to="create" className={isActive}>
          CREATE NOTE
        </NavLink>

        <button
          type="button"
          className={isActive.toString()}
          onClick={() => logoutSubmit()}
        >
          LOG OUT
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
