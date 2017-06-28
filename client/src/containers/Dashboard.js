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

    // keep this in for dev
    this.props.getExpenseReportWeekly();
    this.props.reduxFormReset('addExpense');
  }

  render() {
    const { reduxFormChange, deleteExpense, expenseReport, expenseDictionary, allExpenses } = this.props;

    const tableHeaders = ['Name', 'Description', 'Type', 'Date', 'Amount'];
    return (
      <div className="dashboard-wrapper">
        <h1 className="dashboard--report-header">Report</h1>
        <div className="dashboard--report-wrapper">
          <DatePicker className="dashboard--report-datepicker" expenseReport={expenseReport} />
          <DisplayValue
            className="dashboard--report-display-value"
            val={expenseReport.total}
            format={formatVal}
            text="You Spent:"
          />
            </div>
          <div className="dashboard--report--table-wrapper">
            {this.props.expenseReport.map(week => {
              return (
                <div key={week._id.week}>
                  <h3 key={`${week._id.week}${week._id.year}`}>{`${week._id.week} ${week._id.year} Total Spent: ${week.total}`}</h3>
                  <Table
                    key={week._id.week}
                    items={week.entries.map(entry => expenseDictionary[entry])}
                    headers={tableHeaders}
                    reduxFormChange={reduxFormChange}
                    handleDelete={deleteExpense}
                    formName={'addExpense'}
                  />
                </div>
              )
            })}


        </div>
        <div>
          <h1>Add Expense</h1>
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
