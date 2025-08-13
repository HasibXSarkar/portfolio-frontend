import { useEffect, useState } from "react";
import api from "../services/api";
import './Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("projects/")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            {project.demo_link && (
              <a href={project.demo_link} target="_blank" rel="noreferrer">Live Demo</a>
            )}
            {project.github_link && (
              <a href={project.github_link} target="_blank" rel="noreferrer">GitHub</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;