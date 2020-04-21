import React, { useState, useEffect } from 'react'
import './styles/App.css';
import Navigation from "./components/navigation/Navigation"
import Logo from "./components/logo/Logo"
import Projects from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"
import Footer from "./components/footer/Footer"
import Contact from "./components/contact/Contact"
import {
  technologiesAnimation, projectsTitleAnimation,
  technologyTitleAnimation, contactTitleAnimation, setAll
} from "./animations/animations"
function App() {
  const [scroll, setscroll] = useState(undefined);
  useEffect(() => {
    setAll()
    window.addEventListener('scroll', function () {
      const scrollY = window.scrollY;
      if (scrollY > (window.innerHeight - (window.innerHeight / 2)))
        setscroll(true)
      if (scroll !== undefined && scrollY < (window.innerHeight - (window.innerHeight / 2)))
        setscroll(false)
      let projectsContaine = document.querySelector(".iconContainter");
      if (projectsContaine.getBoundingClientRect().top < this.window.innerHeight) {
        technologiesAnimation()
      }
      let projectsTitle = document.querySelector("#projectsTitle");
      if (projectsTitle.getBoundingClientRect().top < this.window.innerHeight) {
        projectsTitleAnimation()
      }
      let technologies = document.querySelector("#technologies");
      if (technologies.getBoundingClientRect().top < this.window.innerHeight) {
        technologyTitleAnimation()
      } let contact = document.querySelector("#contact");
      if (contact.getBoundingClientRect().top < this.window.innerHeight) {
        contactTitleAnimation()
      }
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
