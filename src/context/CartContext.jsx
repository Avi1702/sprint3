import axios from "axios";
import React, { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart,setCart]=useState([])

  const fetchCart=()=>{
    axios.get("http://localhost:8080/cartItems")
    .then((res)=>setCart(res.data))
    .catch((err)=>console.log(err))
  }

React.useEffect(()=>{
fetchCart()
},[])

const handleAddToCart=(id)=>{
// console.log("ADC"+id) 
const find=cart.find((item)=>item.productId===id)
// console.log(find)

if(find===undefined ){
  axios({
    method:"post",
    url:"http://localhost:8080/cartItems",
    data:{
      productId: id,
      count: 1,
      id: id
    }
  })
  .then((res)=>{console.log(res.data);
  fetchCart();})
}
}
const handleIncrement=(id)=>{
  // console.log("inc"+id)
  const find=cart.find((item)=>item.productId===id)
  // console.log(find.count)

  axios({
    method:"patch",
    url:`http://localhost:8080/cartItems/${id}`,
    data:{
      count: find.count + 1
    }

  })
  .then((res)=>{console.log(res);
  fetchCart()})
  

}
const handleDecrement=(id)=>{
  // console.log("dec"+id)
  const find=cart.find((item)=>item.productId===id)
  
if(find.count>1){
  axios({
    method:"patch",
    url:`http://localhost:8080/cartItems/${id}`,
    data:{
      count: find.count - 1
    }

  })
  .then((res)=>{console.log(res);
  fetchCart()})
}
}
const handleRemove=(id)=>{
  // console.log("remove"+id)
  // const find=cart.find((item)=>item.productId===id)
  axios({
    method:"delete",
    url:`http://localhost:8080/cartItems/${id}`,
  })
  .then((res)=>{console.log(res);
  fetchCart()})
}

const value={
  cart,
  handleAddToCart,
  handleIncrement,
  handleDecrement,
  handleRemove
}




  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
