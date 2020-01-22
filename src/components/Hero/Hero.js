import React from "react";

const Hero = (props) => {
    if(!props.block.data.mobileImg || !props.block.data.desktopImg) {
        return null;
    }

    return (
        <div className="component hero js-viewport-anim has-anim">
            <picture className="hero__media">
                <source media="(min-width: 650px)" srcSet={props.block.data.desktopImg}></source>
                <img src={props.block.data.mobileImg} alt="Kek" />
            </picture>
            <div className="hero__content">
                <h3 className="hero__title">
                    {props.block.data.title}
                </h3>
            </div>
        </div>
    );
};

export default Hero;
