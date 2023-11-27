import React from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__menu">
          <ul className="footer__list">
            <li className="footer__list-item">
              <NavLink to="/recipes" className="footer__list-link">
                RECIPES
              </NavLink>
            </li>
            <li className="footer__list-item">
              <NavLink to="/vegan" className="footer__list-link">
                VEGAN
              </NavLink>
            </li>
            <li className="footer__list-item">
              <NavLink to="/tips" className="footer__list-link">
                TIPS
              </NavLink>
            </li>
            <li className="footer__list-item">
              <NavLink to="/about" className="footer__list-link">
                ABOUT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
