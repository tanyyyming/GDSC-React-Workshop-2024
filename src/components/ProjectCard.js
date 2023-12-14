import { Link } from 'react-router-dom';
import Card from "./Card";
import './ProjectCard.css';
import '../style.css';

function ProjectCard({ project }) {
  return (
      <div className="project-card">
        <Card>
          <div className="content">
            <Link to={`/projects/${project.id}`}>
              <h1>{project.name}</h1>
            </Link>
            <h2>{project.type}</h2>
            <p>{project.description}</p>
          </div>
        </Card>
      </div>
  )
}

export default ProjectCard;