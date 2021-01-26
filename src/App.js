import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Switch, Route } from "react-router-dom";
import { MENU_ITEMS } from "./utils/dom-utils";
import { client } from "./utils/api/graphql/client";
import "./styles/index.scss";
import Layout from "./components/Layout";
function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Switch>
          {Object.values(MENU_ITEMS).map(({ link, component }) => (
            <Route key={link} exact path={link} component={component} />
          ))}
        </Switch>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
