import React from "react";
import ReactDOM from "react-dom";
import Components from "./components.js";
import "./styles.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            error: null,
        }
    }

    getJson(){
        fetch(`./data/data.json`)
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                this.setState({
                      data: json.content.body,
                      isLoading: false
                  })
            })
            .catch(error => {
                this.setState({
                    error,
                    isLoading: false
                })
            });
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.getJson();
    }

    render() {
        const { data, isLoading, error } = this.state;

        if (isLoading || !data) {
            return <p>Loading ...</p>;
        }

        if(error) {
            return <p>{error}</p>
        }

        return (
            <div>
                <div class="header">
                    Header
                </div>
                <div class="main">
                    {data.map(block => Components(block))}
                </div>
                <div className="footer">
                    Footer
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
