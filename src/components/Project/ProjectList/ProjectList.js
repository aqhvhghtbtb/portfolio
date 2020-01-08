import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

const ProjectList = (props) => {
    return (
        <div className="main">
            {props.data.map(block => <ProjectListItem content={block} />)}
        </div>
    );
};

export default ProjectList;
