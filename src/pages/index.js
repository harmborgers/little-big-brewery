import React, { useState } from "react";
import Navbar from "../components/new_components/Navbar";
import SideMenu from "../components/new_components/SideMenu";

const Home = () => {
  /* TODO
   * Add navbar (in app?)
   * Add hero section
   * Add main page sections
   * Add footer (in app?)
   */
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return <></>;
};

export default Home;
