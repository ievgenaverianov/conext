import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import Offers from "./containers/Offers/Offers";
import Contact from "./containers/Contact/Contact";
import AboutUs from "./containers/AboutUs/AboutUs";

class App extends Component{
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/a-propos" component={AboutUs}/>
                    <Route path="/notre-offre" component={Offers}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/" exact component={Homepage}/>
                    <Redirect to="/" />
                </Switch>
            </Layout>
        );
    }
}

export default withRouter(App);
