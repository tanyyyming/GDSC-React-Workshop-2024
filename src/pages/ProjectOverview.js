import ProjectCard from "../components/ProjectCard"

function ProjectOverview({ projects }) {
  return (
    <div>
      <h1>these are the projects I did.</h1>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default ProjectOverview;