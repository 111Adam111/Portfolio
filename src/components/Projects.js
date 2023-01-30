import React from 'react'
import ProjectCard from './ProjectCard';
import { ShootingGameSS, CurrnecyCalcSS, projects} from './ProjectsData'


const Projects = () => {
    
    return (
      <div className='project-container' id='projects-anchor'>
        <h1>Projects</h1>
        <div className='project-box'>
        <ProjectCard title={projects.portfolio.title}
                    desc={projects.portfolio.description}
                    callToAction={projects.portfolio.callToAction}
                    url={projects.portfolio.url}
                    filesUrl={projects.portfolio.filesUrl}/>

        <ProjectCard title={projects.shootingGame.title}
                    desc={projects.shootingGame.description}
                    screenshots={ShootingGameSS}
                    callToAction={projects.shootingGame.callToAction}
                    url={projects.shootingGame.url}
                    filesUrl={projects.shootingGame.filesUrl} />

        <ProjectCard title={projects.CurrencyCalc.title}
                    desc={projects.CurrencyCalc.description}
                    screenshots={CurrnecyCalcSS}
                    callToAction={projects.CurrencyCalc.callToAction}
                    url={projects.CurrencyCalc.url}
                    filesUrl={projects.CurrencyCalc.filesUrl} />
        </div>
      </div>
  )
}

export default Projects



