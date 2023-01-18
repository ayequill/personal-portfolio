import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Qualification from './components/Qualification'
import Skills from './components/Skills'
import Services from './components/Services'
import './styles/App.scss'




function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      
    </div>
  )
}

export default App
