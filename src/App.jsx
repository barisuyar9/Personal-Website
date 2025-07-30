import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Profile from "./components/Profile"
import Footer from "./components/Footer"
import { OptionsContextProvider } from "./contexts/OptionsContext";
import { ToastContainer } from "react-toastify"
import './App.css'
function App() {
  return (
    <OptionsContextProvider>
      <section className='header'>
        <Header />
      </section>
      <section className='hero'>
        <Hero/>
      </section>
      <section className='skills'>
        <Skills/>
      </section>
      <section className='profile'>
        <Profile/>
      </section>
      <section className='projects'>
        <Projects/>
      </section>
      <footer className='footer'>
        <Footer/>
      </footer>
      <ToastContainer />
    </OptionsContextProvider>
  )
}
export default App