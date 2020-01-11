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

    render() {
        return (
            <div className={"footer js-footer " + (this.state.isActive ? "is-active" :"")}>
                <button className="footer__btn js-contact-toggle" onClick={this.handleClick}>
                    Contact me
                </button>
                <div className="footer__content">
                    <h3>Hi</h3>
                    <p>
                        Proin consectetur turpis ante, a molestie ligula sagittis id. Phasellus venenatis ex a nunc lobortis eleifend. Proin pharetra sapien nec orci accumsan egestas. Donec a sem nec magna porttitor porta sit amet ut ligula. Donec turpis nibh, interdum blandit lacinia ut, consectetur sit amet felis. Pellentesque vestibulum laoreet neque eu mattis. Cras vulputate tincidunt neque in condimentum. Sed tincidunt erat ac tortor tincidunt, id hendrerit lacus efficitur. Vestibulum sagittis ultricies sollicitudin. Cras auctor elit vel dolor mattis vestibulum. In hac habitasse platea dictumst. Vivamus ornare nisl ut odio euismod rhoncus. Aenean vel enim accumsan, porttitor nisl eu, efficitur est.
                    </p>
                </div>
            </div>
        );
    }
}

export default Footer;
