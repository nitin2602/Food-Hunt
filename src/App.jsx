import React from "react";
import Navbar from "./Components/Navbar";
import { Await, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";

import Food from "./Pages/Food/Food";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/foods" element={<Food />} />
      </Routes>
    </div>
  );
};

export default App;
