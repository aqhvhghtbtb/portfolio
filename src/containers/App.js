import React from "react";
import {BrowserRouter as Router, Link, Route, Switch, useParams} from "react-router-dom";

import Aux from "../hoc/Aux";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProjectList from "../components/Project/ProjectList/ProjectList";
import ProjectDetail from "../components/Project/ProjectDetail/ProjectDetail";
import config from '../resources/data/data';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    findDataById(id, data) {
        const activeId = id;
        return data.filter(item => item.headline === activeId);
    }

    render() {
        const data = config.content;

        const ErrorWrapper = ({ location }) => (
            <div>
                <h3>No match for <code>{location.pathname}</code></h3>
            </div>
        );

        const ProjectDetailWrapper = ({ match, location }) => {
            let matchingData = this.findDataById(match.params.id, data.main);

            if(matchingData.length === 0) {
                return (
                    <ProjectListWrapper/>
                )
            }

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
                        <Route exact path="*/project/:id" component={ProjectDetailWrapper} />
                        <Route path="*" component={ProjectListWrapper} />
                        <Route component={ErrorWrapper} />
                    </Switch>
                    <Footer data={data.footer}/>
                </Router>
            </Aux>
        );
    }
}

export default App;
