import React from "react";
import styled from "styled-components";
// import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
// import { CartContext } from "../context/CartContext";
// import { useContext } from "react";
// import { useState } from "react";


const NavbarDiv=styled.div`
display:flex;
width:25%;
margin:auto;
color:black;
margin-top:50px;
justify-content:space-around;
border:1px solid black;
// text-decoration:underline;

&:hover{
  cursor:pointer;
}
`

const Navbar = () => {

const  { auth, changeAuth } =React.useContext(AuthContext)
const {cart}=React.useContext(CartContext)
// const [sum, setSum]=useState(0)
// console.log(auth)
// const {cart}=useContext(CartContext)


  return (
    
  


  <NavbarDiv>

   {auth?  <Link to="/Home">Home</Link>:<a>Home</a>}
   {/* {auth?<span>{cart.reduce((prev, curr)=>prev + curr.count, 0)}</span>:""} */}
   {auth? <div>cart count:{cart.reduce((prev,curr)=>prev+curr.count,0)}</div>:<span></span>}
   {auth?<button onClick={changeAuth}>Logout</button>:<Link to="/">Login</Link>}
  </NavbarDiv>


   
  )
};

export default Navbar;
