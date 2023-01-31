import { useState, useEffect } from "react";
export default function Navbar() {
  
  const [showNav, setShowNav] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('state') ||false);
  
useEffect(()=>{
 localStorage.setItem('state', darkMode)
},[darkMode])


  // const styleOffset0 = { stopOpacity: "1", stopColor: "rgb(3, 159, 179)" };
  // const styleOffset1 = { stopOpacity: "1", stopColor: "rgb(110, 87, 224)" };

  function setDarkTheme() {
    setDarkMode((prev) => !prev);

  }


  useEffect(() => {
    if (darkMode){
       document.body.classList.add('dark-theme')

    }
    else { 
       document.body.classList.remove('dark-theme')
  }

  }, [darkMode]);

  console.log(darkMode)

  function handleClick() {
    setShowNav((prevState) => !prevState);
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          siaw.dev
        </a>

        <div
          className={`nav__menu ${showNav ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contactme
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={handleClick}
          ></i>
        </div>

        <div className="nav__btns">
          {/* Theme change btn */}
          <i
            onClick={setDarkTheme}
            className={`uil ${darkMode === true ? "uil-moon" : "uil-sun"} change-theme`}
            id="theme-button"
          ></i>
          <div className="nav__toggle" id="nav-toggle" onClick={handleClick}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}
