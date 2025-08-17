import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import projectsData from '../../data/portfolioData';



function Projects() {
  const [filter, setFilter] = useState('All');

  const allTechnologies = ['All', ...new Set(
    projectsData.flatMap(project => project.title)
  )];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project =>
      project.title.includes(filter)
    );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my projects.
        </p>

        <div className="filter-controls">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;