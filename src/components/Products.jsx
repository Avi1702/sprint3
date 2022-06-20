import React from "react";
import styled from "styled-components";


const ProductDiv=styled.div`
border:1px solid black;
width:100%;
display:flex;
flex-direction:column;
gap:20px;
`

const MainDiv=styled.div`
width:100%;

`

const Products = () => {

  const [data,setData]=React.useState([])

  React.useEffect(()=>{

    fetch(`http://localhost:8080/products`)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    .catch((err)=>console.log(err))

  },[])

  return (
 <MainDiv>
   {
    data.map((items)=>{
     return <ProductDiv>
      <p>{items.name}</p>
      <p>{items.description}</p>
      <button>Add to Cart</button><br/>
      <div>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Remove</button>
      </div>
      </ProductDiv>
    })

   }
  </MainDiv>);
};

export default Products;
