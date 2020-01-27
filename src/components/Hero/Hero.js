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
                    {props.block.data.title}
                </h3>
                <a href={props.block.data.link} target="_blank" rel="noopener noreferrer" className="hero__link">
                    <span className="screenreader">
                        Visit site
                    </span>
                </a>
            </div>
        </div>
    );
};

export default Hero;
