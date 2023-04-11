import React from "react";
import { Link } from "react-router-dom";

const navItems = [
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
  return (
    <>
      <nav className="mb-5 border-gray-200 py-5 flex justify-between items-center">
        <div className="logo">
          <Link to={"/"} className="text-2xl font-bold">
            JOB_WISE
          </Link>
        </div>
        <div className="menus">
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
        <div className="button">
          <Link to={'/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full">
            Start Applying
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Nav;
