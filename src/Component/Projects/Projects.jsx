import React from "react"
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import arrow_icon from '../../assets/arrow_icon.svg'


const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt=""/>
      </div>
      <div className="projects-countainer">
        <div className="project">
            <h3>React Projects</h3>
            <p>Here are my project in which React and Redux are used</p>
            <div className="project-readmore">
            <a href="https://github.com/KianaRm/React-projects" target="
                _blank"><p>Source code</p></a>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
        <div className="project">
            <h3>Angular Projects</h3>
            <p>Here are my mobile application projects I did in university using Angular and Ionic</p>
            <div className="project-readmore">
                <a href="https://github.com/KianaRm/Angular-Ionic-projects" target="
                _blank" ><p>Source code</p></a>
                <img src={arrow_icon} alt="arrow-icon" />
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default Projects
