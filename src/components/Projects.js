import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from './ProjectsData';

const Projects = () => {
  return (
    <div className="project-container" id="projects-anchor">
      <h1>Projects</h1>
      <div className="project-box">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            desc={project.description}
            callToAction={project.callToAction}
            url={project.url}
            filesUrl={project.filesUrl}
            showButtons={project.showButtons}
            screenshots={project.screenshots}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
