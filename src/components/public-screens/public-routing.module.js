import React from 'react';
import {  Route } from "react-router-dom";
import { Redirect} from 'react-router-dom';
import MainMenu from '../menu';
import MainPage from './mainPage'


const PublicRoute = ({ match }) => {
    return (
      <div>
        <MainMenu />
        <Route exact path={match.url} component={MainPage}/>
      </div>
    )
};

export default PublicRoute