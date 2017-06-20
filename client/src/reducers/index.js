import { combineReducers } from 'redux';
import isLoggedIn from './login';
import expenses from './expenses';
import expenseReport from './expenseReport';
import adminExpenses from './adminExpenses';
import { reducer as form } from 'redux-form';

export default combineReducers({ form, isLoggedIn, expenses, expenseReport, adminExpenses });
