import React, { useEffect } from 'react';
import Components from "../../../components";

function ProjectDetail(props) {
    useEffect(() => {
        const renderProjectDetailEvent = new Event('initAnimations');
        document.dispatchEvent(renderProjectDetailEvent);
        console.log('useEffect projectdetail')
    });

    console.log('render projectdetail')

    return (
        <div className="main">
            {props.params.content.components.map(block => Components(block))}
        </div>
    );
};

export default ProjectDetail;
