import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {MdOutlineCastForEducation} from 'react-icons/md'
import {MdOutlineEmojiFoodBeverage} from 'react-icons/md'
import {TbDental} from 'react-icons/tb'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MdOutlineCastForEducation className="about__icon" />
              <h5>Education</h5>
              <small>MBA</small>
            </article>

            <article className="about__card">
              <MdOutlineEmojiFoodBeverage className="about__icon" />
              <h5>Hospitality</h5>
              <small>5+ years</small>
            </article>

            <article className="about__card">
              <TbDental className="about__icon" />
              <h5>Dentistry</h5>
              <small>10+ years</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident suscipit harum magni. 
            Aliquam doloremque error velit delectus natus? Placeat nisi accusantium repellat consequatur
             tempore hic est vel et dolorum recusandae.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
      
    </section>
  )
}

export default About