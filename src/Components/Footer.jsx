import React from "react";

const Footer = () => {
  return (
    <div className="">
      {" "}
      <footer className=" w-full  p-10 footer font-myfont h-60 sm:p-5 bg-red-200 flex justify-center items-center gap-10">
        <div className="flex-col">
          <img
            src="public/icons8-vegan-food-50.png"
            className=" w-14 h-14"
            alt="logo"
          />
          <h5 className=" italic font-semibold text-xl">Foodhunt</h5>
          <p>Will full your Tummy with least money!</p>
        </div>
        <div>
          <h5 className="font-semibold text-xl">Delivery Time</h5>
          <div>
            <div className="delivery__time-item border-0 ps-0">
              <span className="font-semibold">Friday - Tuesday</span>
              <p>10:00am - 11:00pm</p>
            </div>
            <div className="delivery__time-item border-0 ps-0">
              <span className="font-semibold">Wednesday - Thursday</span>
              <p>Off day</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
