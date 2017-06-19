import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Dialogue from '../components/Dialogue';
import ExpenseForm from '../containers/ExpenseFormContainer';
import Table from '../components/Table/Table';
import DatePicker from '../containers/DatePickerContainer';
import DisplayValue from '../components/DisplayValue';
import { formatVal } from '../utils/helpers';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getExpenses();
    this.props.getExpenseReport();
  }

  render() {
    const { expenses, reduxFormChange, deleteExpense, expenseReport } = this.props;

    const tableHeaders = ['Name', 'Description', 'Type', 'Date', 'Amount'];
    return (
      <div className="dashboard--wrapper">
        <h1>Report</h1>
        <div>
          <DatePicker expenseReport={expenseReport} />
          <DisplayValue val={expenseReport.total} format={formatVal} />
        </div>
        <h1>Add Expense</h1>
        <ExpenseForm />
        <h1>Expenses</h1>
        <Table
          items={expenses}
          headers={tableHeaders}
          reduxFormChange={reduxFormChange}
          handleDelete={deleteExpense}
          formName={'addExpense'}
        />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expenses: state.expenses,
  expenseReport: state.expenseReport,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
