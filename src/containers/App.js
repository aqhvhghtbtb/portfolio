import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

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

    // findDataById(id, data) {
    //     const activeId = id;
    //     const jsonData = data;
    //
    //     jsonData.map(item => {
    //         if(item.headline === activeId) {
    //             console.log(activeId)
    //         }
    //     })
    // }

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

        const ProjectDetailWrapper = ({ match, location }) => {
            // this.findDataById(match.params.id, data);

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
                    <Route exact path="/" component={ProjectListWrapper} />
                    <Route exact path="/project/:id" component={ProjectDetailWrapper} />
                </Router>
                <Footer/>
            </Aux>
        );
    }
}

export default withClass(App, 'page');
