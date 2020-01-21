import React from "react";

const Media = (props) => {
    if(!props.block.data.mobileImg || !props.block.data.desktopImg) {
        return null;
    }

    return (
        <div className="component media">
            <picture className="media__img">
                <source media="(min-width: 650px)" srcSet={props.block.data.desktopImg}></source>
                <img src={props.block.data.mobileImg} alt="Kek" />
            </picture>
        </div>
    );
};

export default Media;
