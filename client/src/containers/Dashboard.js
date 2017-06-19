import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
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
    this.props.reduxFormReset('addExpense');
  }

  render() {
    const { expenses, reduxFormChange, deleteExpense, expenseReport } = this.props;

    const tableHeaders = ['Name', 'Description', 'Type', 'Date', 'Amount'];
    return (
      <div className="dashboard-wrapper">
        <h1 className="dashboard--report-header">Report</h1>
        <div className="dashboard--report-wrapper">
          <DatePicker className="dashboard--report-datepicker" expenseReport={expenseReport} />
          <DisplayValue className="dashboard--report-display-value" val={expenseReport.total} format={formatVal} text="You Spent:" />
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
