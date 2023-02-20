import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ProjectInMind from "./components/ProjectInMind";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import { activeLink } from "./hooks/activeLink";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import "./styles/App.scss";
import { useEffect } from "react";

AOS.init();

function App() {
  useEffect(() => activeLink, []);
  useEffect(() => {
    function scrollHeader() {
      const nav = document.getElementById("header");
      // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
      if (this.scrollY >= 80) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);

    // show scroll up btn
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");
      // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
      if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
      else scrollUp.classList.remove("show-scroll");
    }
    window.addEventListener("scroll", scrollUp);
  });

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      {/* <Services /> */}
      <Portfolio />
      <ProjectInMind />
      <ContactMe />
      <Footer />
      <a href="#home" className="scrollup" id="scroll-up">
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </div>
  );
}

export default App;
