import { useParams } from 'react-router-dom';
import '../style.css';

function Project({ projects }) {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  return (
    <div className="content">
      <h1>{project.name}</h1>
      <h2>{project.type}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default Project;