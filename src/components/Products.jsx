import React from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";




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
  <ProductItem data={data} />
  </MainDiv>);
};

export default Products;
