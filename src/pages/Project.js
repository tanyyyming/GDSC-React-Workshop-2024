import { useParams } from 'react-router-dom';

function Project({ projects }) {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  return (
    <div>
      <h1>{project.name}</h1>
      <h2>{project.type}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default Project;