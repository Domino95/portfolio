import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import { animations } from "./animations/animations"
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
function App() {
  const [scroll, setscroll] = useState(undefined);

  useEffect(() => {
    animations()
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY > (window.innerHeight - (window.innerHeight / 2)))
        setscroll(true)
      if (scroll !== undefined && scrollY < (window.innerHeight - (window.innerHeight / 2)))
        setscroll(false)
    });
  })
  return (
    <>
      <Navigation scroll={scroll} />
      <Logo />
      <div className="projectsContainer">
        <Projects />
        <Technologies />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
export default App;
