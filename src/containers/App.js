import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/Project/ProjectList/ProjectList";
import ProjectDetail from "../components/Project/ProjectDetail/ProjectDetail";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false,
            error: null,
        };
    }

    getJson(){
        console.log('getJson')
        fetch(`/data/data.json`)
            .then( (response) => {
                return response.json()
            })
            .then( (json) => {
                this.setState({
                      data: json.content,
                      isLoading: false
                  })
            })
            .catch(error => {
                console.log(error);
                this.setState({
                      error,
                      isLoading: false
                  });
            });
    }

    findDataById(id, data) {
        console.log('findDataById')
        const activeId = id;
        return data.filter(item => item.headline === activeId);
    }

    componentWillMount() {
        console.log('componentWillMount')
        this.setState({ isLoading: true });
        this.getJson();
        console.log('got json');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let event = new Event('reactReady');
        document.dispatchEvent(event);
    }

    render() {
        const { data, isLoading, error } = this.state;

        if (isLoading || !data) {
            return (
                <div className="page-loader">
                        <span className="page-loader__text">
                            Loading
                        </span>
                </div>
            )
        }

        if(error) {
            return <p>{error}</p>
        }

        console.log('render1337')

        const ErrorWrapper = ({ location }) => (
            <div>
                <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        );

        const ProjectDetailWrapper = ({ match, location }) => {
            let matchingData = this.findDataById(match.params.id, data.main);
            console.log('matchingData');

            let content = matchingData[0];

            return (
                <ProjectDetail params={{ match, location, content }}/>
            );
        };

        const ProjectListWrapper = () => {
            return (
                <ProjectList data={data.main} />
            );
        };

        return (
            <Aux>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={ProjectListWrapper} />
                        <Route exact path="/project/:id" component={ProjectDetailWrapper} />
                        <Route component={ErrorWrapper} />
                    </Switch>
                    <Footer data={data.footer}/>
                </Router>
            </Aux>
        );
    }
}

export default App;
