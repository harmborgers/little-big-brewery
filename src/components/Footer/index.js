import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="c-footer">
        <div className="c-footer__container">
          <div className="c-footer__content">
            <div className="c-footer__col-1">
              <div className="c-footer__header">Navigation</div>
              <ul className="c-footer__list">
                <Link className="c-footer__list-item" to="/">
                  Home
                </Link>
                <Link className="c-footer__list-item" to="/products">
                  Our Products
                </Link>
                <Link className="c-footer__list-item" to="/">
                  About Us
                </Link>
                <Link className="c-footer__list-item" to="/">
                  Contact Us
                </Link>
              </ul>
            </div>
            <div className="c-footer__col-2">
              <div className="c-footer__header">Contact</div>
              <div className="c-footer__contact">
                <p>art.m.grasso@gmail.com</p>
                <p>123 Fake Street</p>
                <p>Fake Suburb, Victoria</p>
                <p>3000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="c-footer__bottom">
        <div className="c-footer__bottom-container">
          <div className="c-footer__copyright">
            © 2022 Little Big Brewery (Michael Grasso)
          </div>
          <div className="c-footer__socials">
            <a href="https://www.linkedin.com/in/michael-grasso-6a5b31216/">
              <FaLinkedin className="c-footer__social-icon" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
