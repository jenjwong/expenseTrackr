import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators/expensesActionCreators';
import ExpenseForm from '../components/ExpenseForm';

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

const mapStateToProps = state => ({ expenses: state.expenses });

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
