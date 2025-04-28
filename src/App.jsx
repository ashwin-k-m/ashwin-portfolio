import About from "./component/About/About"
import Contact from "./component/Contact/Contact"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import Qualification from "./component/Qualification/Qualification"
import Skills from "./component/Skills/Skills"
import Footer from "./component/Footer/Footer"
import Scrollup from "./component/Scrollup/Scrollup"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Contact />
      </main>
      <Scrollup />
      <Footer />
    </>
  )
}

export default App
