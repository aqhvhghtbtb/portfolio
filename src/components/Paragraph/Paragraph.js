import React from "react";

const Paragraph = (props) => {
    return (
        <div className="paragraph">
            <h3>{props.block.data.title}</h3>
            <p>
                {props.block.data.body}
            </p>
        </div>
    );
};

export default Paragraph;
