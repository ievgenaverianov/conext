import React, {Component} from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import Homepage from "./containers/Homepage/Homepage";
import Offers from "./containers/Offers/Offers";

class App extends Component{
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/notre-offre" component={Offers}/>
          <Route path="/" exact component={Homepage}/>
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  }
}

export default withRouter(App);
