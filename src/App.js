import React from "react";
import { Switch, Route } from "react-router-dom";
import { MENU_ITEMS } from "./utils/dom-utils";
import "./styles/index.scss";
import Layout from "./components/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        {Object.values(MENU_ITEMS).map(({ link, component }) => (
          <Route key={link} exact path={link} component={component} />
        ))}
      </Switch>
    </Layout>
  );
}

export default App;
