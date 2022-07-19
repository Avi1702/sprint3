import React from "react";
import styled from "styled-components";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";


const ProductDiv=styled.div`
border:1px solid black;
width:100%;
display:flex;
flex-direction:column;
gap:20px;
`
const ProductItem = ({data}) => {

  const  {cart,handleAddToCart,handleIncrement,handleDecrement,handleRemove}=useContext(CartContext)
  // console.log(cart.data)
 

  return <div>

      {
       
    data.map((items)=>{
      const noOfCount=cart.find((ele)=>ele.productId===items.id)?.count
     return <ProductDiv>
        {/* cart.find((ele)=>ele.ProductId===items.id */}
      <p>{items.name}</p>
      <p>{items.description}</p>
      <button disabled={!!noOfCount} onClick={()=>handleAddToCart(items.id)}  >Add to Cart</button><br/>
      <div>{cart.find((ele)=>ele.productId===items.id)?.count}</div>
      <div>
      <button disabled={!noOfCount} onClick={()=>{handleIncrement(items.id)}}>Increment</button>
      <button disabled={!noOfCount} onClick={()=>{handleDecrement(items.id)}}>Decrement</button>
      <button disabled={!noOfCount} onClick={()=>{handleRemove(items.id)}}>Remove</button>
      </div>
       
      </ProductDiv>
    })

   }
  </div>
};

export default ProductItem;
