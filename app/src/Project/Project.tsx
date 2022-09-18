import React from 'react';
import './Project.scss';
import Fade from 'react-reveal/Fade';

export interface Project {
  title: string,
  github?: string,
  image: string,
  date: string,
  demo?: string,
  description: string[]
}

export const Project: React.FC<{project: Project }> = ({ project }) => {
  return (
  <div className="project">
    <Fade bottom>
      <div className='project-image-container'>
        <a className="project-image" style={{ backgroundImage: 'url(\'/projects/' + project.image + '\')'}} href={project.demo || project.github}>
          <div className="project-title">{project.title}</div>
          <div className="project-date">{project.date}</div>
          <object><a className="project-github" href={project.demo || project.github}><i className="fa fa-github fa-fw"></i></a></object>
        </a>
      </div>
    </Fade>
    <div className="project-description">
      {project.description ? project.description.map((line, i) => {
        return (<Fade key={i} bottom delay={i*300}>{line}</Fade>);
      }): null}
    </div>
  </div>);
}