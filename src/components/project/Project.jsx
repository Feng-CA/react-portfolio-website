import React from 'react'
import './project.css'
import PROJECT1 from '../../assets/project1.png'
import PROJECT2 from '../../assets/project2.png'
import PROJECT3 from '../../assets/project3.png'

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container projects__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={PROJECT1} alt="project-img" />
          </div>
          <h3>Bike For Us</h3>
          <div className="project__item-cta">
            <a href="https://github.com/Feng-CA/bike-for-us" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://bike-for-us.herokuapp.com" className="btn btn-primary">Website</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PROJECT2} alt="project-img" />
          </div>
          <h3>My Portfolio</h3>
          <div className="project__item-cta">
            <a href="https://github.com/Feng-CA/react-portfolio-website" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://feng-mao.netlify.app/" className="btn btn-primary">Website</a>
          </div>
        </article>
        <article className="project__item">
          <div className="project__item-image">
            <img src={PROJECT3} alt="project-img" />
          </div>
          <h3>Recipes Heaven</h3>
          <div className="project__item-cta">
            <a href="https://github.com/Feng-CA/recipes-heaven" className="btn" target='_blank' rel="noreferrer">Github</a>
            <a href="https://recipes-heaven.netlify.app" className="btn btn-primary">Website</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project