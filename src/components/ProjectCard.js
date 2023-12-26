import { Link } from 'react-router-dom';
import Card from "./Card";
import './ProjectCard.css';
import '../style.css';
import React, {useState} from 'react';

function ProjectCard(props) {
    return (
        <div className={"project-card"}>
            <Card>
            <Link to={`/projects/${props.project.id}`}>
                <div className="content">

                <h1>{props.project.name}</h1>
                <h2>{props.project.type}</h2>
                <p>{props.project.description}</p>

                </div>
            </Link>
            <div className="btn-container">
                <button className="btn" onClick={() => props.clickedStateHandler(props.project.id)}>View</button>
            </div>
            </Card>

        </div>
    )
}

export default ProjectCard;
