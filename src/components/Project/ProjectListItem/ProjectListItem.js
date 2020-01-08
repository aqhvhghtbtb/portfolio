import React from "react";
import {Link} from "react-router-dom";

export default props => (
    <li className="listitem">
        <h2>Hi I'm a ProjectListItem component with the headline:</h2>
        <h3>{props.content.headline}</h3>
        <Link to={`/project/${props.content.headline}`}>
            {props.content.headline}
        </Link>
    </li>
);
