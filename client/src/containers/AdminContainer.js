import React, {PureComponent} from 'react';
// import PropTypes from 'prop-types';
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
import DatePicker from '../containers/DatePickerContainer';

import './Dashboard.css';

class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.getExpensesAdmin();
  }

  render() {

    const {expenses, logout, reduxFormChange, deleteExpense, adminExpenses} = this.props;

    const tableHeaders = ['Name', 'Author', 'Description', 'Type', 'Date', 'Amount'];
    return (
      <div className="dashboard--wrapper">
        <h3>Admin View</h3>
        <h1>All Expenses</h1>
        <Table
          items={adminExpenses}
          headers={tableHeaders}
          reduxFormChange={reduxFormChange}
          handleDelete={deleteExpense}
          formName={'addExpense'}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ adminExpenses: state.adminExpenses });

const mapDispatchToProps = (dispatch) => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
