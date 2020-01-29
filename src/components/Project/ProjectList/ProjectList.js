import React, {useEffect} from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

const ProjectList = (props) => {
    useEffect(() => {
        const renderProjectList = new Event('initAnimations');
        document.dispatchEvent(renderProjectList);
    });

    return (
        <div className="main">
            <ul className="list">
                {props.data.map(block => <ProjectListItem content={block} key={block._uid} />)}
            </ul>
        </div>
    );
};

export default ProjectList;
