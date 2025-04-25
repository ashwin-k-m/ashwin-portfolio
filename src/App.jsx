import About from "./component/About/About"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"
import Skills from "./component/Skills/Skills"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App
