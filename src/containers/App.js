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
        }
    }

    getJson(){
        console.log('getJson')
        fetch(`/data/data.json`)
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

    componentDidMount() {
        console.log('componentDidMount')
        this.setState({ isLoading: true });
        console.log('setState isLoading true')
        this.getJson();
        console.log('got json');
    }

    render() {
        const { data, isLoading, error } = this.state;

        if (isLoading || !data) {
            return <p>Loading ...</p>;
        }

        if(error) {
            return <p>{error}</p>
        }

        console.log('render')

        const ErrorWrapper = ({ location }) => (
            <div>
                <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        );

        const ProjectDetailWrapper = ({ match, location }) => {
            let matchingData = this.findDataById(match.params.id, data);
            console.log('matchingData');
            console.log(matchingData);

            return (
                <ProjectDetail params={{ match, location, data }}/>
            );
        };

        const ProjectListWrapper = () => {
            return (
                <ProjectList data={data} />
            );
        };

        return (
            <Aux>
                <Header/>
                <Router>
                    <Link to="/">Home</Link>
                    <Switch>
                        <Route exact path="/" component={ProjectListWrapper} />
                        <Route exact path="/project/:id" component={ProjectDetailWrapper} />
                        <Route component={ErrorWrapper} />
                    </Switch>
                </Router>
                <Footer/>
            </Aux>
        );
    }
}

export default withClass(App, 'page');
