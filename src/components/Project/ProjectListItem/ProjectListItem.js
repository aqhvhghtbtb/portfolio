import React from "react";
import {Link} from "react-router-dom";

export default props => (
    <div className="foo">
        <Link to={`/project/${props.content.headline}`}>
            {props.content.headline}
        </Link>
        Hi I'm a ProjectListItem component with the headline:
        <h2>{props.content.headline}</h2>
    </div>
);
