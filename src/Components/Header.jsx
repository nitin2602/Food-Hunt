import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section>
        <div className="  bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className=" mt-10 justify-around items-center mx-auto min-w-screen-xl px-4 py-20 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Favorite Meal.{" "}
              </strong>
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <NavLink
                to="/foods"
                className="block w-full rounded bg-rose-600 px-10 py-3 text-lg font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Order Now
              </NavLink>
            </div>
          </div>
          <div>
            <img src="/homeimg.png" className=" w-96" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
