import React, { createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

// const [cartCount,setcartCount]=React.useState(0)
const cartCount=0



  return <CartContext.Provider value={{cartCount}}>{children}</CartContext.Provider>;
};
