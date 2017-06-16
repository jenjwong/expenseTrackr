import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
// import * as actionCreators from '../actions/actionCreators/authActionCreators';
import * as ex from '../actions/actionCreators/expensesActionCreators';
import Navbar from '../components/Navbar';
import Dialogue from '../components/Dialogue';
import ExpenseForm from '../containers/ExpenseFormContainer';
import Table from '../components/Table';


import './Dashboard.css';

class Dashboard extends PureComponent {

  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    const {expenses} = this.props;
    let tableHeaders = ['Name', 'Description', 'Type', 'Cost'];
    return (
      <div className="dashboard--wrapper">
        {/* // <Navbar handleLogout={logout} /> */}
        {/* <Dialogue> */}
          <ExpenseForm />
        {/* </Dialogue> */}
        <Table expenses={expenses} headers={tableHeaders} />
      </div>
    )
  }
}

// const Dashboard = ({logout, getExpenses}) => {
//   console.log(getExpenses())
//   return (
//
//     <div className="dashboard--wrapper">
//       <Navbar handleLogout={logout} />
//       <Dialogue>
//         <ExpenseForm />
//       </Dialogue>
//
//       {/* <p className="pt-icon-banl-account"></p>
//       <p className="pt-icon-add-row-bottom thething"></p>
//       <span className="pt-icon-size pt-icon-name"></span>
//
// <span class="pt-icon-standard pt-icon-projects">  <div className="pt-icon-timeline-events"></div></span>
// <span class="pt-icon-large pt-icon-geosearch pt-intent-success"></span>
//  */}
//
//       Dash</div>
//   )
// }






const mapStateToProps = (state) => ({
  day: state.day,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(ex, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
