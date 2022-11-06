import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ProductPage from "./pages/products";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <SideMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/products" element={<ProductPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
