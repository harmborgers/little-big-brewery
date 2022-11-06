import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import SigninPage from "./pages/signin";
import Navbar from "./components/new_components/Navbar";
import SideMenu from "./components/new_components/SideMenu";
import Footer from "./components/new_components/Footer";

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
        <Route path="/signin" element={<SigninPage />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
