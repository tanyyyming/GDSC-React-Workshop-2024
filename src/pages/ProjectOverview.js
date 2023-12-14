function ProjectOverview({ projects }) {
  return (
    <div>
      <h1>these are the projects I did.</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <h3>{project.type}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectOverview;