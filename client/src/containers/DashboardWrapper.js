import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actionCreators';
import AdminContainer from './AdminContainer';

const DashboardWrapper = ({logout}) => {
  return (
    <div>
      <Navbar handleLogout={logout} isAdmin={false} handleAdmin={'handleAdmin'}/>
      <Switch>
      <Route path='/admin' component={AdminContainer}/>
      <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
  )
}

const mapStateToProps = (state) => ({
  day: state.day,
  expenses: state.expenses,
  selectedExpense: state.selectedExpense
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardWrapper);
