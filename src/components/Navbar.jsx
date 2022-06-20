import React from "react";
import styled from "styled-components";
// import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


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

const { auth } =React.useContext(AuthContext)


  return (
    <>
  <NavbarDiv>
    <Link to="/">Home</Link>
    <div>{auth?console.log("yes"):console.log("no")}</div>
    <Link to="/Login">Login</Link>
  </NavbarDiv>

</>

  );
};

export default Navbar;
