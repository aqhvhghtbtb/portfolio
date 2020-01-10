import React from "react";
import Components from "../../../components";

const ProjectDetail = (props) => {
    return (
        <div className="main">
            {props.params.content.components.map(block => Components(block))}
        </div>
    );
};

export default ProjectDetail;
