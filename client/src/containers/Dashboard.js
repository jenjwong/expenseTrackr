import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import * as actionCreators from '../actions/actionCreators';
import Navbar from '../components/Navbar';
import Dialogue from '../components/Dialogue';
import ExpenseForm from '../containers/ExpenseFormContainer';
import Table from '../components/Table/Table';
import ExpenseFormComponent from '../components/ExpenseForm';
import moment from 'moment';

import './Dashboard.css';

class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {

    const {expenses, selectedExpense, selectExpense, logout, reduxFormChange, deleteExpense} = this.props;
  

    let tableHeaders = ['Name', 'Description', 'Type', 'Amount'];
    return (
      <div className="dashboard--wrapper">
        <Navbar handleLogout={logout} isAdmin={false}/>
        <ExpenseForm />
        <h1>Expense Report</h1>
        <Table
          items={expenses}
          headers={tableHeaders}
          reduxFormChange={reduxFormChange}
          handleDelete={deleteExpense}
          formName={'addExpense'}
        />
        <h1>All Expenses</h1>
        <Table
          items={expenses}
          headers={tableHeaders}
          reduxFormChange={reduxFormChange}
          handleDelete={deleteExpense}
          formName={'addExpense'}
        />
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  day: state.day,
  expenses: state.expenses,
  selectedExpense: state.selectedExpense
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
