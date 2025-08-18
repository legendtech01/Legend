import Navbar from "./components/Nav/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import About from "./components/About/About.jsx"
import Portfolio from "./components/Portfolio/Portfolio.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"

function App () {

  return (

    <div>
      <Navbar />
      <Hero />
      <Portfolio />
      <About/>    
      <Contact />
      <Footer />
    </div>
  )
}

export default App