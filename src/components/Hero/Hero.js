import React from "react";

const Hero = (props) => {
    return (
        <div className="hero">
            <h3>
                {props.block.data.title}
            </h3>
        </div>
    );
};

export default Hero;
