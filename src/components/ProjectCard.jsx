import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />

      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <a href={project.link} target="_blank" rel="noreferrer">
          Visit Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
