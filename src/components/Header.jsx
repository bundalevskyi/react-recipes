import React from "react";
import "../css/style.css";
import { NavLink } from "react-router-dom";
import { Container, HeaderStyle } from "./StyledComponents/StyledComp";

const Header = () => {
  const activeLink = "menu__list-link menu__list-link--active";
  const normalLink = "menu__list-link";

  return (
    <HeaderStyle>
      <Container>
        <div className="header__inner">
          <NavLink to="/home" className="logo">
            LOGO
          </NavLink>
          <nav className="menu header__menu">
            <div className="menu__list">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/recipes">
                RECIPES
              </NavLink>
              <NavLink
                to="/vegan"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                VEGAN
              </NavLink>
              <NavLink
                to="/tips"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                TIPS
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }>
                ABOUT
              </NavLink>
            </div>
          </nav>
        </div>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
