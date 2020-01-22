import React from 'react';
import {Link} from "react-router-dom";

const routeClickToChildLink = (e) => {
    const parent = e.currentTarget;
    const childLink = parent.querySelector('a');
    childLink.click();
};

const generateUniqueKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

const listItemMetaItems = (props) => props.content.metaList.map((item) =>
    <li key={generateUniqueKey(item)} className="listitem__meta-item">
        {item}
    </li>
);

function projectListItem(props) {
    if(!props.content.headline) {
        return null;
    }

    const thumbnail = props.content.thumbnail ? props.content.thumbnail : null;
    const description = props.content.description ? <p className="listitem__text">{props.content.description}</p> : null;

    return (
        <li className="listitem js-viewport-anim has-anim" onClick={routeClickToChildLink}>
            <div className="listitem__media" style={
                {
                    backgroundImage: `url(${thumbnail})`
                }
            }>
            </div>
            <div className="listitem__content">
                <Link to={`/project/${props.content.headline}`} className="listitem__title">
                    {props.content.headline}
                </Link>
                {description}
                <ul className="listitem__meta">
                    {listItemMetaItems(props)}
                </ul>
            </div>
        </li>
    );
};

export default projectListItem;
