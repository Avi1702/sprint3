import "./App.css";
import Navbar from "./components/Navbar";
// import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
// import {BrowseRouter} from "react-router-dom"

function App() {
  return <div className="App">
    
    <AuthProvider>
      <CartProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/Home" element={<Home />}></Route>
      <Route path="*" element={<Login />}></Route>
    </Routes>
    </CartProvider>
    </AuthProvider>
  

  </div>;
}

export default App;
