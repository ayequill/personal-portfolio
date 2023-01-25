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
import activeLink from "./hooks/activeLink";
// import "./styles/App.scss";
import { useEffect } from "react";

function App() {
  useEffect(() => activeLink, []);
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
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
