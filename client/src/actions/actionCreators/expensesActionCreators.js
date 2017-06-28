import axios from 'axios';
import * as ACTIONS from '../index';
import { formatDateForServer } from '../../utils/helpers';
import { reduxFormReset } from './utilsActionCreators';
import { normalize } from 'normalizr';
import * as schema from '../../utils/normalizr';

const {
  MODIFY_EXPENSE_DICTIONARY,
  DELETE_ONE_EXPENSE_LIST,
  ADD_ONE_EXPENSE_LIST,
  GET_EXPENSE_LIST,
  GET_EXPENSES_ADMIN } = ACTIONS;

export const handleExpenseSubmit = data => (dispatch) => {
    // handles timezones to mitigate one day off error
  data.date = formatDateForServer(data.date);
  data.id === '' ? dispatch(createExpense(data)) : dispatch(editExpense(data));
};

export const createExpense = data => (dispatch) => {
  axios.post('/api/v1/expenses', data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: MODIFY_EXPENSE_DICTIONARY, data: normalize(expense, schema.expense) });
      dispatch({ type: ADD_ONE_EXPENSE_LIST, expense });

      dispatch(reduxFormReset('addExpense'));
    })
    .catch(error => console.error(`Error in createExpense action creator: ${error}`));
};

export const editExpense = data => (dispatch) => {
  axios.put(`/api/v1/expenses/${data.id}/edit`, data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: MODIFY_EXPENSE_DICTIONARY, data: normalize(expense, schema.expense) });
      dispatch(reduxFormReset('addExpense'));
    })
    .catch(error => console.error(`Error in editExpense action creator: ${error}`));
};

export const deleteExpense = (data, e) => (dispatch) => {
  // prevents delete click from loading expense into edit expense interface
  e.stopPropagation();
  axios.delete(`/api/v1/expenses/${data._id}`, data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: DELETE_ONE_EXPENSE_LIST, expense });
    })
    .catch(error => console.error(`Error in deleteExpense action creator: ${error}`));
};

export const getExpenses = expenses => (dispatch) => {
  axios.get('/api/v1/expenses/')
    .then((res) => {
      const data = normalize(res.data.expenses, schema.arrayOfExpenses)
      dispatch({ type: MODIFY_EXPENSE_DICTIONARY, data });
      dispatch({ type: GET_EXPENSE_LIST, data });
    })
    .catch(error => console.error(`Error in getExpenses action creator: ${error}`));
};

export const getExpensesAdmin = expenses => (dispatch) => {
  axios.get('/api/v1/expenses/admin')
    .then((res) => {
      const expenses = res.data.expenses;

      dispatch({ type: GET_EXPENSES_ADMIN, expenses });
    })
    .catch(error => console.error(`Error in getExpensesAdmin action creator: ${error}`));
};
