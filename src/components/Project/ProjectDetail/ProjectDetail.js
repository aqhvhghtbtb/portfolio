import React, { useEffect } from 'react';
import Components from "../../../components";

function ProjectDetail(props) {
    useEffect(() => {
        const renderProjectDetailEvent = new Event('initAnimations');
        document.dispatchEvent(renderProjectDetailEvent);
        window.scrollTo(0, 0); //fixes bug on mobile where projects below the fold caused page position to not be at the top
    });

    return (
        <div className="main">
            {props.params.content.components.map(block => Components(block))}
        </div>
    );
};

export default ProjectDetail;
