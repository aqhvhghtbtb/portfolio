import React from "react";

const Paragraph = (props) => {
    if(!props.block.data.body) {
        return null;
    }

    const title = props.block.data.title ? <h4>{props.block.data.title}</h4> : null;

    return (
        <div className="component cms-content js-viewport-anim has-anim">
            {title}
            <p>
                {props.block.data.body}
            </p>
        </div>
    );
};

export default Paragraph;
