import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Total = ({ total }) => {
  return (
    <div>
      <footer className=" w-full bottom-0 absolute p-10 footer font-myfont h-20 sm:p-5 bg-red-200 flex justify-between  items-center gap-10">
        <div className="flex gap-1">
          <h3 className=" font-bold text-2xl">Total- </h3>
          <h3 className=" font-bold text-2xl"> ${total}.00 </h3>
        </div>
        <button className="font-semibold rounded-md bg-red-500 px-5 py-2.5 text-sm  text-white shadow">
          <div className="flex justify-center gap-2">
          Checkout<FaArrowRight className=" size-5" />
          </div>
        </button>
      </footer>
    </div>
  );
};

export default Total;
