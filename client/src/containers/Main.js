import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Splash from './Splash';
import Dashboard from './Dashboard';


const Main = (props) => {

  // dev hack
  if (true) {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
        <Route component={Dashboard} />
      </Switch>
    )
  }

  // real routing starts here
  if (props.isLoggedIn) {
    return (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
        <Route component={Dashboard} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Route path="/login" component={Splash} />
      <Route path="/register" component={Splash} />
      <Redirect to="/login" />
      <Route component={Splash} />
    </Switch>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(mapStateToProps)(Main);
