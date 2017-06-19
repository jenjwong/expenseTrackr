import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import * as actionCreators from '../actions/actionCreators';
import AdminContainer from './AdminContainer';

const DashboardWrapper = ({ logout }) => (
  <div>
    <Navbar handleLogout={logout} isAdmin={false} handleAdmin={'handleAdmin'} />
    <Switch>
      <Route path="/admin" component={AdminContainer} />
      <Route path="/" component={Dashboard} />
    </Switch>
  </div>
  );

const mapDispatchToProps = dispatch => (
  bindActionCreators(actionCreators, dispatch)
);

export default connect(null, mapDispatchToProps)(DashboardWrapper);
