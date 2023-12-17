import ProjectCard from '../components/ProjectCard'
import React, {useState} from 'react';

function ProjectOverview({ projects }) {
    const [clickedState, setClickedState] = useState(null);
    const clickedStateHandler = (projectId) => setClickedState(projectId);
  return ( 
    <div className ="projects" >
        {clickedState && <h1>{`You are currently viewing project ${clickedState}`}</h1>}
        {projects.map((project) => (
            <ProjectCard project={project} 
            clickedStateHandler={clickedStateHandler}/>
        ))}
    </div>
  );
}

export default ProjectOverview;