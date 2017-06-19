import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Splash from './Splash';
import DashboardWrapper from './DashboardWrapper';

const Main = (props) => {
  if (props.isLoggedIn) {
    return (
      <Switch>
        <Route path="/admin" component={DashboardWrapper} />
        <Route path="/dashboard" component={DashboardWrapper} />
        <Redirect to="/dashboard" />
        <Route component={DashboardWrapper} />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/login" component={Splash} />
      <Route path="/register" component={Splash} />
      <Redirect to="/login" />
      <Route component={Splash} />
    </Switch>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Main);
