import React from 'react'
import Header from './header/Header'
import Nav from './nav/Nav'
import About from './about/About'
import Experience from './experience/Experience'
import Project from './project/Project'
import Blog from './blog/Blog'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Project />
        <Blog />
        <Contact />
        <Footer />
    </>
  )
}

export default App