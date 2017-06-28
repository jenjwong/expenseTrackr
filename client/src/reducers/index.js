import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import isLoggedIn from './login';
import expenseDictionary from './expenseDictionary';
import expenseIds from './expenses';
import expenseReport from './expenseReport';
import adminExpenses from './adminExpenses';

const appReducer = combineReducers({
  form,
  isLoggedIn,
  expenseIds,
  expenseDictionary,
  expenseReport,
  adminExpenses });

// Resets reducer to inital state on logout
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
