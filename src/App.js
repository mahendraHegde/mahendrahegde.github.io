import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import AppBar from "./components/AppBar";
import About from "./views/about";
import "./styles/index.scss";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    return (
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Layout>
    );
  }
}

export default App;
