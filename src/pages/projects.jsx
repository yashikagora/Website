import React from "react";
import ProjectCard from "./card";

const Projects = () => {
    return(
    <>
    <h1 className="project-heading">My Projects</h1>
    <hr color="rgb(32, 104, 213)"/>
    <div className="project">
    
    <ProjectCard className="projectcard"/>
    </div>
    <hr color="rgb(32, 104, 213)"/>
    </>
    );
}

export default Projects;