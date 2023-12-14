import Card from "./Card";
import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className='project-card'>
      <Card>
        <div className='content'>
          <h3>{project.name}</h3>
          <h4>{project.type}</h4>
          <p>{project.description}</p>
        </div>
      </Card>
    </div>
  )
}

export default ProjectCard;