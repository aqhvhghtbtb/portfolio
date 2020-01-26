import React from "react";

const generateUniqueKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

const listItems = (props) => props.block.data.body.map((item) =>
   <li key={generateUniqueKey(item)} className="media-list__item">
       <img src={item} alt=""/>
   </li>
);

const MediaList = (props) => {
    if(!props.block.data.body) {
        return null;
    }

    return (
        <div className="component js-viewport-anim has-anim">
            <ul className="media-list">
                {listItems(props)}
            </ul>
        </div>
    );
};

export default MediaList;
