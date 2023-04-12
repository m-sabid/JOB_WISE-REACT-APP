import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    navName: "Home",
    path: "/",
  },
  {
    navName: "Statistics",
    path: "/statistics",
  },
  {
    navName: "Applied Jobs",
    path: "/applied-jobs",
  },
  {
    navName: "Blog",
    path: "/blog",
  },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className="mb-5 border-gray-200 py-5 flex justify-between items-center">
        <div className="logo">
          <Link to={"/"} className="text-2xl font-bold">
            JOB_WISE
          </Link>
        </div>
        <div className="menus hidden sm:block">
          <ul className="flex justify-around items-center">
            {navItems.map((navItem, index) => {
              return (
                <div key={index}>
                  <li className="mx-3 text-gray-700 font-semibold">
                    <Link to={navItem.path}>{navItem.navName}</Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        <div className="button hidden sm:block">
          <Link
            to={"/"}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full"
          >
            Start Applying
          </Link>
        </div>
        <div className="hamburger sm:hidden">
          <button
            onClick={toggleMenu}
            className="block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {showMenu ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 12H5v-2h14v2zm0-6H5V4h14v2zm0 12H5v-2h14v2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm16 4H4v-2h16v2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div className={`sm:hidden ${showMenu ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center">
          {navItems.map((navItem, index) => {
            return (
              <li key={index} className="mx-3 my-1 text-gray-700 font-semibold">
                <Link to={navItem.path} onClick={toggleMenu}>
                  {navItem.navName}
                </Link>
              </li>
            );
          })}
          <li className="my-2">
            <Link
              to={"/"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full"
            >
              <span>Start Applying</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
