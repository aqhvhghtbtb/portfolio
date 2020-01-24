import React from "react";

const Hero = (props) => {
    if(!props.block.data.mobileImg || !props.block.data.desktopImg) {
        return null;
    }

    const bgImage = props.block.data.desktopImg;

    return (
        <div className="component hero js-viewport-anim has-anim">
            <div className="hero__media" style={
                {
                    backgroundImage: `url(${bgImage})`
                }}>
            </div>
            <div className="hero__content">
                <h3 className="hero__title">
                    <span className="hero__text">
                        {props.block.data.title}
                    </span>
                </h3>
            </div>
        </div>
    );
};

export default Hero;
