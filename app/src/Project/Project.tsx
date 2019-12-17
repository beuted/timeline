import React from 'react';
import './Project.scss';

interface Project {
    title: string,
    github?: string,
    image: string,
    date: string,
    demo?: string,
}

export const Project: React.FC<{project: Project }> = ({ project }) => {
  return (
  <a className="project" style={{ backgroundImage: 'url(\'/projects/' + project.image + '\')'}} href={project.github || project.demo}>
    <div className="project-title">{project.title}</div>
    <div className="project-date">{project.date}</div>
  </a>);
}