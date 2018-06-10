import React, { Component } from 'react';
import Authorization from './components/authorization';
import './App.css';
import {NestedViews} from './components/user-screens/user-routing.module';
import PublicRoute from './components/public-screens/public-routing.module'
import { Route, Switch } from 'react-router-dom';
import Registration from './components/registration';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PublicRoute} />
        <Route path="/login" component={Authorization} />
        <Route path="/registration" component={Registration} />
        <Route path="/user" component={NestedViews}/>
      </Switch>
    );
  }
}
export default App;
