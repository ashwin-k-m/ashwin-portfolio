import About from "./component/About/About"
import Header from "./component/Header/Header"
import Home from "./component/Home/Home"

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
