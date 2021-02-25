import React from 'react'
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';

export default function ProjectDetail(props) {
    const projectId = props.match.params.projectId;
    // console.log(props.match.params);
    const project = myProjects.find(project => project.id === projectId)
    return (
        <div>
            <h2>{project.name}</h2>
            <h3>Technologies: {project.technologies}</h3>
            <p>{project.description}</p>
            <Link to="/projects">Back to the projects</Link>
        </div >
    )
}
