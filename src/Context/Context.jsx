import { createContext, useEffect, useState } from "react";
import { food_list } from "./../assets/assets";

export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});
  const addtocart = (id) => {
    if (!cartitem[id]) {
      setcartitem((prev) => ({ ...prev, [id]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
  };

  const deleteitem = (id) => {
    if (cartitem[id] > 0) {
      setcartitem((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const contextValue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    deleteitem,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
