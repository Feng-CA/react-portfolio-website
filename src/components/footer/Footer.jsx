import React from 'react'
import './footer.css'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__title">Thanks For Visiting!</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        {/* <li><a href="#blog">Blogs</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Feng-CA" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://linkedin.com/in/feng-mao" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Feng Mao. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer