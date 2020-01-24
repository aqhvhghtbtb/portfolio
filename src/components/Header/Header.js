import React from "react";

function Header(props) {
    console.log('header')
    return (
        <div className="header">
            <div className="header__content">
                <h2 className="header__byline">
                    <span className="header__text">
                        Doortje Spanjerberg
                    </span>
                </h2>
                <h3 className="header__title">
                    <span className="header__text">
                        Frontend Developer
                    </span>
                </h3>
            </div>
        </div>
    )
}

export default Header;
