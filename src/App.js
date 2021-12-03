import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import Offers from "./containers/Offers/Offers";
import Contact from "./containers/Contact/Contact";
import AboutUs from "./containers/AboutUs/AboutUs";
import SuccessStories from "./containers/SuccessStories/SuccessStories";
import Blog from "./containers/Blog/Blog";
import BlogArticle from "./containers/Blog/BlogArticle/BlogArticle";
import LegalDisclaimer from "./containers/LegalDisclaimer/LegalDisclaimer";
import GeneralConditions from "./containers/GeneralConditions/GeneralConditions";

class App extends Component{

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/general-conditions" component={GeneralConditions}/>
                    <Route path="/legal-disclaimer" component={LegalDisclaimer}/>
                    <Route path="/blog/article" component={BlogArticle}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/success-story" component={SuccessStories}/>
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
