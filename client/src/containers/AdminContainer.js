import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
import Table from '../components/Table/Table';

import './Dashboard.css';

class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.getExpensesAdmin();
  }

  render() {
    const { reduxFormChange, deleteExpense, adminExpenses } = this.props;

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
    );
  }
}

const mapStateToProps = state => ({ adminExpenses: state.adminExpenses });

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
