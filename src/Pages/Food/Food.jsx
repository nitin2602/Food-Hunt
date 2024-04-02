import React, { useContext, useEffect, useState } from "react";

import { StoreContext } from "./../../Context/Context";
import ReactPaginate from "react-paginate";
import Footer from "./../../Components/Footer";
import { menu_list } from "../../assets/assets";

const Food = () => {
  const { food_list, cartitem, setcartitem, addtocart } =
    useContext(StoreContext);

  const [pageNumber, setPageNumber] = useState(0);

  const searchedProduct = food_list;

  const productPerPage = 32;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const menu = menu_list;
  const [category, setcategory] = useState("All");
  useEffect(() => {
    console.log(category);
    console.log(food_list)
  }, [category]);

  return (
    <div className=" flex-col justify-center">
      <div className=" m-5 mt-3 grid grid-cols-3 grid-rows-3 lg:flex lg:m-3 justify-center items-center gap-5">
        {menu.map((item) => (
          <button
            onClick={() => {
              setcategory(item.menu_name);
            }}
            className=" bg-red-500 text-white p-1 px-1 rounded-md cursor-pointer font-medium text-xl"
          >
            {item.menu_name}
          </button>
        ))}
      </div>
      <div className=" flex p-10 justify-center items-center">
        <div className="  grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {displayPage.map((item) => {
            if (category==="All" || category === item.category) {
              return (
                <div className="  rounded-2xl w-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="
               object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className=" border border-gray-100 bg-white p-5">
                    <span className="whitespace-nowrap text-white bg-red-400 px-3 py-1.5 text-xs font-medium">
                      {item.category}
                    </span>

                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-lg">$ {item.price}</p>

                    <button
                      onClick={() => addtocart(item._id)}
                      className=" mt-2 block rounded text-white bg-red-500 p-1 px-2 text-lg font-medium transition hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className=" mb-5 flex justify-center items-center w-full gap-1 text-xl font-medium">
        <ReactPaginate
          pageCount={pageCount}
          onPageChange={changePage}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          className=" text-red-500 flex justify-center items-center gap-5"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Food;
