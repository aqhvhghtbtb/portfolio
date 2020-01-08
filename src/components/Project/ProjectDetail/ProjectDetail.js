import React from "react";

const ProjectDetail = (props) => {
    return (
        <div>
            <h3>{props.params.headline}</h3>
            <p>
                {props.params.match.url}
            </p>
        </div>
    );
};

export default ProjectDetail;
