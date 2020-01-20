import React, { useRef, useEffect } from 'react';
import {Link} from "react-router-dom";
import Footer from "../../Footer/Footer";

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

function useTraceUpdate(props) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prev.current[k] !== v) {
                ps[k] = [prev.current[k], v];
            }
            return ps;
        }, {});
        if (Object.keys(changedProps).length > 0) {
            console.log('Changed props:', changedProps);
        }
        prev.current = props;
    });
}

function projectListItem(props) {
    // useTraceUpdate(props);
    return (
        <li className="listitem" onClick={routeClickToChildLink}>
            <div className="listitem__media" style={
                {
                    backgroundImage: `url(${props.content.thumbnail})`
                }
            }>
            </div>
            <div className="listitem__content">
                <Link to={`/project/${props.content.headline}`} className="listitem__title">
                    {props.content.headline}
                </Link>
                <p className="listitem__text">
                    Lorem ipsum dolor sit amet
                </p>
                <ul className="listitem__meta">
                    {listItemMetaItems(props)}
                </ul>
            </div>
        </li>
    );
};

export default projectListItem;
