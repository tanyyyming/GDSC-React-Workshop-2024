import ProjectCard from '../components/ProjectCard'
import React, {useState} from 'react';

function ProjectOverview({ projects }) {
    const [clickedState, setClickedState] = useState(null);
    const clickedStateHandler = (projectId) => setClickedState(projectId);

  return ( 
    <div>
        {clickedState && <h1 className="content">{`You are currently viewing project ${clickedState}`}</h1>}
        <div className ="projects">
        {projects.map((p) => (
            <ProjectCard key={p.id} project={p} 
            clickedStateHandler={clickedStateHandler}/>
        ))}
        </div>
    </div>
  );
}

export default ProjectOverview;

