import React from 'react';
import {  Route } from "react-router-dom";
import Article from './article';
import Creator from './creator';
import { connect } from 'react-redux';
import { Redirect} from 'react-router-dom';
import SingleRecord from './singleRecord';
import MainMenu from '../menu';


const NestedView = ({ match, login }) => {
  if (login.data) {
    return (
      <div>
        <MainMenu />
        <Route exact path={match.url} component={Article}/>
        <Route path={`${match.url}/record/:recordId`} component={SingleRecord}/>
        <Route path={`${match.url}/create`} component={Creator}/>
      </div>
    )
  } else {
    return (<Redirect to="/login" />);
  }
  
};

const mapStateToProps = (state) => {
  return {
    login : state.authorization       
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
};
export const NestedViews = connect(mapStateToProps, mapDispatchToProps)(NestedView);
