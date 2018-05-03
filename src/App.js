import React, { Component } from 'react';
import Authorization from './components/authorization';
import logo from './logo.svg';
import './App.css';
import {NestedViews} from './components/user-screens/user-routing.module';
import { BrowserRouter as Router, Route, Switch, Redirect, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Authorization} /> 
        <Route path="/art" component={NestedViews}/>
      </Switch>
    );
  }
}
export default App;
