import React from "react";
import styled from "styled-components";
// import { CartContext } from "../context/CartContext";


const NavbarDiv=styled.div`
display:flex;
width:25%;
margin:auto;
color:black;
margin-top:50px;
justify-content:space-around;
border:1px solid black;

&:hover{
  cursor:pointer;
}
`

const Navbar = () => {

// const { cartCount } =React.useContext(CartContext)
async function homepage(){

  const res=  await fetch(`http://localhost:8080/products`)
 const data= await res.json()
 console.log(data)

 
}

  return (
    <>
  <NavbarDiv>
<div>Home</div>
{/* <div>Cart:{cartCount}</div> */}
<div>Login</div>
  </NavbarDiv>
<br/>
<br/>
<div id="form">
  <input type={"text"} placeholder="Enter email"></input><br/>
  <input type={"password"} placeholder="Enter password"></input><br/>
  <button onClick={homepage}>Login</button>
</div>

</>

  );
};

export default Navbar;
