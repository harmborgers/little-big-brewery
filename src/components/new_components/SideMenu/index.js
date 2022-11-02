import React from "react";
import "./style.scss";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideMenu = ({ isOpen, toggle }) => {
  const openClass = isOpen ? "is-open" : "";

  const SideMenuItem = ({ to, text }) => {
    return (
      <li className="c-side-menu__item">
        <Link to={to}>{text}</Link>
      </li>
    );
  };

  return (
    <div className={`c-side-menu__container ${openClass}`} onClick={toggle}>
      <div className="c-side-menu__close-icon" onClick={toggle}>
        <FaTimes />
      </div>
      <ul className="c-side-menu__content">
        <SideMenuItem text="Our Products" to="/products" />
        <SideMenuItem text="About Us" to="/about" />
        <SideMenuItem text="Contact Us" to="/contact" />
      </ul>
    </div>
  );
};

export default SideMenu;
