import React, { useEffect, useState } from "react";
import "./style.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import cx from "classnames";
import _ from "lodash";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  //Throttle to prevent excessive scroll function calls
  useEffect(() => {
    window.addEventListener("scroll", _.throttle(changeNav, 100));
  }, []);

  const NavbarItem = ({ to, text }) => {
    return (
      <li className="c-navbar__item">
        <Link to={to}>{text}</Link>
      </li>
    );
  };

  return (
    <div
      className={cx("c-navbar", {
        "has-background": scrollNav,
      })}
    >
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
