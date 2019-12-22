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
      <a className="project-image" style={{ backgroundImage: 'url(\'/projects/' + project.image + '\')'}} href={project.github || project.demo}>
        <div className="project-title">{project.title}</div>
        <div className="project-date">{project.date}</div>
      </a>
    </Fade>
    <div className="project-description">
    {project.description ? project.description.map((line, i) => {
      return (<Fade bottom delay={i*300}>{line}</Fade>);
    }): null}
    </div>
  </div>);
}