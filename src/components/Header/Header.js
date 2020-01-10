import React from "react";
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="header__item">
                <NavLink exact to="/" activeClassName="active" className="header__link">
                    Portfolio
                </NavLink>
            </div>
            <div className="header__item">
                <Link to="/" className="header__link">
                    Contact me
                </Link>
            </div>
        </div>
    )
}

export default Header;
