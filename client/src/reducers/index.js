import {combineReducers} from 'redux';
import day from './day';
import isLoggedIn from './login';
import expenses from './apiExpense';
import expenseReport from './expenseReport';
import { reducer as form } from 'redux-form';

export default combineReducers({form, day, isLoggedIn, expenses, expenseReport});
