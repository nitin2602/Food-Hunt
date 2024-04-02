import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = ({isopen,handleSidebarClose}) => {
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
  return <div className=" fixed top-20 right-10 text-left w-[100px]">
    {isopen? <div>
      {nav__links.map((item)=>(
        <div className="  p-2 text-red-500 bg-white font-semibold">
          <NavLink onClick={()=>handleSidebarClose()} to={item.path}>{item.display}</NavLink>
        </div>
      ))}
    </div>
    :
    ""}
  </div>;
};

export default Sidenav;
