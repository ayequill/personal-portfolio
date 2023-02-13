import { useState, useEffect } from "react";
import * as HeaderStyles from "./styles/Header.styled";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("state"));

  useEffect(() => {
    localStorage.setItem("state", darkMode);
  }, [darkMode]);

  // const styleOffset0 = { stopOpacity: "1", stopColor: "rgb(3, 159, 179)" };
  // const styleOffset1 = { stopOpacity: "1", stopColor: "rgb(110, 87, 224)" };

  function setDarkTheme() {
    setDarkMode((prev) => !prev);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  function handleClick() {
    setShowNav((prevState) => !prevState);
  }

  return (
    // <header className="header" id="header">
    <HeaderStyles.HeaderStyle darkMode={darkMode} id="header">
      {/* <nav className="nav container"> */}
      <HeaderStyles.NavStyle className="container">
        {/* <a href="#home" className="nav__logo">
          siaw.dev
        </a> */}
        <HeaderStyles.NavLogo href="#home"> siaw.dev</HeaderStyles.NavLogo>

        {/* <div
          className={`nav__menu ${showNav ? "show-menu" : ""}`}
          id="nav-menu"
        > */}
        <HeaderStyles.NavMenu
          showNav={showNav}
          style={showNav ? {bottom: '0'} : {}}
         >
          <HeaderStyles.NavList>
            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink className="active-link">
                <HeaderStyles.NavIcon className="uil uil-estate" />
                Home
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>

            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink href="#about">
                <HeaderStyles.NavIcon className="uil uil-user" />
                About
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>

            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink href="#skills">
                <HeaderStyles.NavIcon className="uil uil-file-alt" />
                Skills
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>

            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink href="services">
                <HeaderStyles.NavIcon className="uil uil-briefcase-alt" />
                Services
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>

            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink href="portfolio">
                <HeaderStyles.NavIcon className="uil uil-scenery" />
                Portfolio
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>

            <HeaderStyles.NavItem>
              <HeaderStyles.NavLink href="contact">
                <HeaderStyles.NavIcon className="uil uil-estate" />
                ContactMe
              </HeaderStyles.NavLink>
            </HeaderStyles.NavItem>
          </HeaderStyles.NavList>
          <HeaderStyles.NavClose
            className="uil uil-times"
            id="nav-close"
            onClick={handleClick}
          />
        </HeaderStyles.NavMenu>

        <HeaderStyles.NavButtons>
          {/* Theme change btn */}
          <HeaderStyles.ColorMode
            onClick={setDarkTheme}
            className={`uil ${darkMode === true ? "uil-moon" : "uil-sun"}`}
            id="theme-button"
          ></HeaderStyles.ColorMode>
          <HeaderStyles.NavToggle id="nav-toggle" onClick={handleClick}>
            <i className="uil uil-apps"></i>
          </HeaderStyles.NavToggle>
        </HeaderStyles.NavButtons>
      </HeaderStyles.NavStyle>
    </HeaderStyles.HeaderStyle>
  );
}
