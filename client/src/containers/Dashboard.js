import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import ExpenseForm from '../containers/ExpenseFormContainer';
import Table from '../components/Table/Table';
import ReportTable from '../components/ReportTable';
import DatePicker from '../containers/DatePickerContainer';
import DisplayValue from '../components/DisplayValue';
import { formatVal } from '../utils/helpers';

import './Dashboard.css';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getExpenses();
    this.props.reduxFormReset('addExpense');
  }

  render() {
    const { reduxFormChange, deleteExpense, expenseReport, expenseDictionary, allExpenses } = this.props;
    const totalSum = expenseReport.reduce((sum, item) => item.total + sum, 0);
    const tableHeaders = ['Name', 'Description', 'Type', 'Date', 'Amount'];
    return (
      <div className="dashboard-wrapper">
        <h1 className="dashboard--report-header">Report</h1>
        <div className="dashboard--report-wrapper">
          <DatePicker className="dashboard--report-datepicker" expenseReport={expenseReport} />
          <DisplayValue
            className="dashboard--report-display-value"
            val={totalSum > 0 ? totalSum : ''}
            format={formatVal}
            text="You Spent:"
          />
        </div>
        <div className="dashboard--report--table-wrapper">
          <ReportTable
            expenseReport={expenseReport}
            expenseDictionary={expenseDictionary}
            headers={tableHeaders}
            reduxFormChange={reduxFormChange}
            handleDelete={deleteExpense}
            formName={'addExpense'}
            format={formatVal}
          />
        </div>
        <div>
          <h1>Add/Edit Expenses</h1>
          <ExpenseForm />
          <h1>Expenses</h1>
          <Table
            items={allExpenses}
            headers={tableHeaders}
            reduxFormChange={reduxFormChange}
            handleDelete={deleteExpense}
            formName={'addExpense'}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  expenses: state.expenses,
  expenseReport: state.expenseReport,
  expenseDictionary: state.expenseDictionary,
  allExpenses: state.expenseIds.map(expense => state.expenseDictionary[expense]),
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
