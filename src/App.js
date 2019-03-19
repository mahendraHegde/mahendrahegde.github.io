import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './views/home'
import Details from './views/details'
class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/details' component={Details}/>
      </Switch>

    </div>
    );
  }
}

export default App;
