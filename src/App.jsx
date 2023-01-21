import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Qualification from './components/Qualification'
import Skills from './components/Skills'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import ProjectInMind from './components/ProjectInMind'
import './styles/App.scss'
import 'swiper/css';




function App() {

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
      
    </div>
  )
}

export default App
