import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import isLoggedIn from './login';
import expenses from './expenses';
import expenseReport from './expenseReport';
import adminExpenses from './adminExpenses';

const appReducer = combineReducers({ form, isLoggedIn, expenses, expenseReport, adminExpenses });

// Resets reducer to inital state on logout
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
