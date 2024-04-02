import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div>
      <header>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Nothing added in cart !!
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Let's get you something to eat 😋
              </p>
            </div>

            <div className="mt-4 flex gap-4 justify-center items-center ">
              <NavLink
                to="/foods"
                className=" flex gap-3 rounded-md bg-red-500 px-5 py-2.5 text-lg font-bold text-white shadow"
                type="button"
              >
                <span className="text-lg font-bold"> Show me !! </span>
                <FaArrowRight className=" size-5 text-lg" />
              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default EmptyCart;
