import React from "react";
import "./style.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const NavbarItem = ({ to, text }) => {
    return (
      <li className="c-navbar__item">
        <Link to={to}>{text}</Link>
      </li>
    );
  };

  return (
    <div className="c-navbar">
      <div className="c-navbar__container">
        <div className="c-navbar__logo"></div>
        <div className="c-navbar__mobile-icon" onClick={toggle}>
          <FaBars />
        </div>
        <ul className="c-navbar__menu">
          <NavbarItem text="Our Products" to="/products" />
          <NavbarItem text="About Us" to="/about" />
          <NavbarItem text="Contact Us" to="/contact" />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
