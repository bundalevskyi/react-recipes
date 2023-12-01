import React, { useState } from "react";
import style from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Container } from "../StyledComponents/StyledComp";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [nav, setNav] = useState(false);

  const activeLink = "menu__list-link menu__list-link--active";
  const normalLink = "menu__list-link";

  return (
    <div className={style.header}>
      <Container>
        <div className={style.header__inner}>
          <NavLink to="/home" className={style.logo}>
            LOGO
          </NavLink>
          <nav className="menu header__menu">
            <div className={nav ? [style.menu__list, style.active].join(' ') : style.menu__list}>
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
            <div onClick={() => setNav(!nav)} className={style.mobile__btn}>
              {nav ? (
                <CloseIcon style={{ fontSize: 30, color: "#55504f" }} />
              ) : (
                <MenuIcon style={{ fontSize: 30, color: "#55504f" }} />
              )}
            </div>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Header;
