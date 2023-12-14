import Card from "../components/Card";

function ProjectOverview({ projects }) {
  return (
    <div>
      <h1>these are the projects I did.</h1>
      {projects.map((project) => (
        <Card>
          <h2>{project.name}</h2>
          <h3>{project.type}</h3>
          <p>{project.description}</p>
        </Card>
      ))}
    </div>
  );
}

export default ProjectOverview;