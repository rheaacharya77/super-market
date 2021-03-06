import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ForgotPassword from "./components/Login/ForgotPassword";
import ScrollButton from "./components/ScrollButton/ScrollButton";


import Faq from "./pages/Faq";
import Momo from "./pages/Momo";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Snacks from "./pages/Snacks";
import CartItems from "./pages/Cart";
import Aboutus from "./pages/AboutUs";
import Products from "./pages/Product";
import MyProfile from "./pages/Profile";
import Signature from "./pages/Signature";
import Dallemomos from "./pages/Dallemomos";
import Signatures from "./pages/Signatures";
import Frozenitems from "./pages/Frozenitems";
import Riceandnoodles from "./pages/Riceandnoodles";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profile" element={<MyProfile/>}/>
          <Route path="/contact" element={<Help />} />
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/signatures" element={<Signatures />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/dallemomos" element={<Dallemomos />} />
          <Route path="/frozenitems" element={<Frozenitems />} />
          <Route path="/riceandnoodles" element={<Riceandnoodles />} />
          <Route path="/momo" element={<Momo />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/cart" element={<CartItems/>}/>
        </Routes>
        <Footer />
      </Router>
      <ScrollButton />
    </div>
  );
}

export default App;