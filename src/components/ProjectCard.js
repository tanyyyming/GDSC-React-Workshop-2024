import Card from "./Card";

function ProjectCard({ project }) {
  return (
    <Card>
      <h2>{project.name}</h2>
      <h3>{project.type}</h3>
      <p>{project.description}</p>
    </Card>
  )
}

export default ProjectCard;