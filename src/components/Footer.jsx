import React from "react";
import { NavLink } from "react-router-dom";
import FooterLogo from "../assets/footer-logo.svg";
import GreenInsta from "../assets/greenInsta.svg";
import GreenFacebook from "../assets/greenFacebook.svg";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrap">
          <nav>
            <NavLink to="/">ALL PRODUCTS</NavLink>
            <NavLink to="/">ABOUT SEEDRA</NavLink>
            <NavLink to="/">OUR BLOG</NavLink>
          </nav>

          <div className="footer-logo">
            <NavLink to="/">
              <img src={FooterLogo} alt="logo" />
            </NavLink>
          </div>

          <nav>
            <NavLink to="/">Terms&Conditions</NavLink>
            <NavLink to="/">Privacy Policy</NavLink>{" "}
            <NavLink to="/">FAQ</NavLink>
          </nav>
        </div>

        {/* <hr /> */}

        <div className="footer-bottom">
          <div className="footer-social">
            <NavLink to="/">
              <img src={GreenInsta} alt="instagram" />
            </NavLink>

            <NavLink to="/">
              <img src={GreenFacebook} alt="facebook" />
            </NavLink>
          </div>

          <div className="footer-copyright">
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
