import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        /*
             invert the current state and then set state
             to trigger re-render and pass to parent
         */

        this.setState({
            isActive: !this.state.isActive,
        },
() => {
            this.props.getActiveState(this.state.isActive);
        });
    }

    generateUniqueKey(pre) {
        return `${ pre }_${ new Date().getTime() }`;
    }

    render() {
        const socialList = this.props.data.socialList.items.map((item, key) =>
              <li key={this.generateUniqueKey(item)}>
                  {item}
              </li>
        );

        const skillsPriList = this.props.data.skills_pri.items.map((item, key) =>
             <li key={this.generateUniqueKey(item)}>
                 {item}
             </li>
        );

        const skillsSecList = this.props.data.skills_sec.items.map((item, key) =>
             <li key={this.generateUniqueKey(item)}>
                 {item}
             </li>
        );

        return (
            <div className={"footer js-footer " + (this.state.isActive ? "is-active" :"")}>
                <button className="footer__btn js-contact-toggle" onClick={this.handleClick}>
                    {this.props.data.headline}
                </button>
                <div className="footer__content">
                    <h3>
                        {this.props.data.socialList.title}
                    </h3>
                    <ul className="footer__list">
                        {socialList}
                    </ul>
                </div>
                <div className="footer__content">
                    <h3>
                        {this.props.data.skills_pri.title}
                    </h3>
                    <ul className="footer__list">
                        {skillsPriList}
                    </ul>
                </div>
                <div className="footer__content">
                    <h3>
                        {this.props.data.skills_sec.title}
                    </h3>
                    <ul className="footer__list">
                        {skillsSecList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;
