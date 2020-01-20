import React from "react";
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="header__content">
                <h2 className="header__byline">
                    Doortje Spanjerberg
                </h2>
                <h3 className="header__title">
                    Frontend Developer
                </h3>
            </div>
        </div>
    )
}

export default Header;
