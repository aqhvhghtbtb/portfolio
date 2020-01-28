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
            this.toggleModalBg()
        });
    }

    toggleModalBg() {
        console.log('toggleModalBg');
        document.body.classList.toggle('overlay-is-active', this.state.isActive);
    }

    generateUniqueKey(pre) {
        return `${ pre }_${ new Date().getTime() }`;
    }

    render() {
        console.log('render footer')
        const socialList = this.props.data.socialList.items.map((item, key) =>
              <li key={this.generateUniqueKey(item.url)} className="footer__contact-item">
                  <a href={item.url} className={"footer__contact-link footer__contact-link--" + item.class} target="_blank" rel="noopener noreferrer">
                      <span className="screenreader">
                          {item.name}
                      </span>
                  </a>
              </li>
        );

        const skillsPriList = this.props.data.skills_pri.items.map((item, key) =>
             <li key={this.generateUniqueKey(item)} className="footer__listitem">
                 {item}
             </li>
        );

        const skillsSecList = this.props.data.skills_sec.items.map((item, key) =>
             <li key={this.generateUniqueKey(item)} className="footer__listitem">
                 {item}
             </li>
        );

        return (
            <div className={"footer js-footer " + (this.state.isActive ? "is-active" :"")}>
            <div className="footer__wrapper">
                <button className="footer__btn js-contact-toggle" onClick={this.handleClick}>
                    {this.props.data.headline}
                </button>
                <div className="footer__content">
                    <ul className="footer__contact">
                        {socialList}
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">
                        {this.props.data.skills_pri.title}
                    </h3>
                    <ul className="footer__list">
                        {skillsPriList}
                    </ul>
                </div>
                <div className="footer__content">
                    <h3 className="footer__title">
                        {this.props.data.skills_sec.title}
                    </h3>
                    <ul className="footer__list">
                        {skillsSecList}
                    </ul>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;
