import React from "react";

const generateUniqueKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
};

const listItems = (props) => props.block.data.body.map((item) =>
    <li key={generateUniqueKey(item)}>
        {item}
    </li>
);

const List = (props) => {
    if(!props.block.data.body) {
        return null;
    }

    const title = props.block.data.title ? <h4>{props.block.data.title}</h4> : null;

    return (
        <div className="component cms-content">
            {title}
            <ul>
                {listItems(props)}
            </ul>
        </div>
    );
};

export default List;
