import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "./../../Context/Context";
import { IoAddOutline } from "react-icons/io5";
import { IoRemoveOutline } from "react-icons/io5";
import Total from "./../../Components/Total";
import EmptyCart from "../../Components/EmptyCart";

const Cart = () => {
  const { food_list, cartitem, addtocart, deleteitem } =
    useContext(StoreContext);
  const [total, settotal] = useState(1);
  useEffect(() => {
    let newTotal = 0;
    food_list.forEach((item) => {
      if (cartitem[item._id] > 0) {
        newTotal += item.price * cartitem[item._id];
      }
    });
    settotal(newTotal);
  }, [cartitem]);

  return (
    <div className=" font-myfont font-medium">
      {Object.keys(cartitem).length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className=" mt-10 overflow-x-auto flex justify-center items-center">
            <table className=" w-1/2  divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-center rtl:text-center">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-900">
                    Item Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2  font-bold text-gray-900">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-4 py-2  font-bold text-gray-900">
                    Quantity
                  </th>
                </tr>
              </thead>
              {food_list.map((item) => {
                if (cartitem[item._id] > 0)
                  return (
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className=" whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                          {item.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          $ {item.price * cartitem[item._id]}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {cartitem[item._id]}
                        </td>

                        <td className="whitespace-nowrap px-4 py-2">
                          <div className=" flex gap-4 ">
                            <button
                              onClick={() => addtocart(item._id)}
                              className=" bg-green-500 text-white rounded-full"
                            >
                              <IoAddOutline className=" size-8" />
                            </button>
                            <button
                              onClick={() => deleteitem(item._id)}
                              className=" bg-red-500 text-white rounded-full"
                            >
                              <IoRemoveOutline className=" size-8" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  );
              })}
            </table>
          </div>
          <div>
            <Total total={total} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
