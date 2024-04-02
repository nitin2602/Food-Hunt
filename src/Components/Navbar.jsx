import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sidenav from './Sidenav';


const Navbar = () => {
  const nav__links = [
    {
      display: "Home",
      path: "/home",
    },
    {
      display: "Foods",
      path: "/foods",
    },
    {
      display: "Cart",
      path: "/cart",
    },
    {
      display: "Contact",
      path: "/contact",
    },
  ];
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  return (
    <div className=" font-myfont">
      <header className="bg-white mt-3 shadow-lg rounded-lg">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <NavLink to="/home">
                <img src="/icons8-vegan-food-50.png" alt="" />
              </NavLink>
            </div>
            <div className=" hidden  justify-between gap-5 sm:flex ">
              {nav__links.map((item, index) => (
                <nav key={index} aria-label="Global">
                  <NavLink
                    to={item.path}
                    className=" cursor-pointer text-red-500 font-myfont font-semibold list-none hover:underline underline-offset-4 transition"
                    key={index}
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                        color: isActive ? "red" : "black",
                        textDecoration: isActive ? "underline" : "none",
                      };
                    }}
                  >
                    {item.display}
                  </NavLink>
                </nav>
              ))}
            </div>

            <div className=" flex gap-5">
              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <NavLink
                    className="rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white shadow"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </div>
              </div>

              <div className="block sm:hidden">
                <button
                  onMouseEnter={handleSidebarOpen}
                  onMouseLeave={handleSidebarClose}
                  className="rounded bg-red-500 p-2 text-white transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <Sidenav isopen={sidebarOpen} handleSidebarClose={handleSidebarClose} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
