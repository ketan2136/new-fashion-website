import React from 'react'
import Navbar from '../componets/Header/Navbar';
import { Route, Routes } from 'react-router-dom';
import Footer from '../componets/Footer/Footer';
// import  Home  from '../pages/Home';
import ShopDetails from "../pages/ShopDetails";
import {Home} from "../pages/Home";
import About from '../pages/About';
import Shop from "../pages/Shop";
import Login from '../componets/Auth/Login';
import Sidebar from '../componets/Sidebar/Sidebar';
import ShopCart from '../pages/ShopCart';
import Checkout from '../pages/Checkout';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';
import BlogdDtails from '../pages/BlogdDtails';
import Register from '../componets/Auth/Register';

function User() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/shopDetails/:id" element={<ShopDetails  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopCart" element={<ShopCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogDetails" element={<BlogdDtails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default User