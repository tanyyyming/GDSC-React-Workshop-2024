import ProjectCard from '../components/ProjectCard'

function ProjectOverview({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
}

export default ProjectOverview;