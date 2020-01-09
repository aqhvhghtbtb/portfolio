import React from "react";
import Hero from "./components/Hero/Hero";
import Paragraph from "./components/Paragraph/Paragraph";

const Components = {
    hero: Hero,
    paragraph: Paragraph
};

export default block => {
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
            key: block._uid,
            block: block
        });
    }
    return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
    );
};
