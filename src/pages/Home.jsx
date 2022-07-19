import React from "react";
import Products from "../components/Products";
import styled from "styled-components";
// import Login from "./Login";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
// import { AuthProvider } from "../context/AuthContext";
// import {useNavigate} from "react-router-dom"

const HomeDiv=styled.div`
display:flex;
row-gap:20px;
width:40%;
margin:auto;
margin-top:50px;
// border:1px solid red;
`

const Home = () => {


const { auth }=React.useContext(AuthContext)

const {cart}=useContext(CartContext)
// const navigate = useNavigate()


 return(

    <HomeDiv>
    
    {auth?<Products />:<p style={{marginLeft:"50px"}}>Please Login First</p>}
    
    </HomeDiv>
  
  )
 
};

export default Home;
