import axios from 'axios';
import { GET_EXPENSES, ADD_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE, GET_REPORT, GET_EXPENSES_ADMIN } from '../index';
import { formatDateForServer } from '../../utils/helpers';
import { reduxFormReset } from './utilsActionCreators';

export const handleExpenseSubmit = data => (dispatch) => {
    // handles timezones to mitigate one day off error
  data.date = formatDateForServer(data.date);
  data.id === '' ? dispatch(createExpense(data)) : dispatch(editExpense(data));
};

export const createExpense = data => (dispatch) => {
  axios.post('/api/v1/expenses', data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: ADD_EXPENSE, expense });
      dispatch(reduxFormReset('addExpense'));
    })
    .catch(error => console.error(`Error in createExpense action creator: ${error}`));
};

export const editExpense = data => (dispatch) => {
  axios.put(`/api/v1/expenses/${data.id}/edit`, data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: EDIT_EXPENSE, expense });
      dispatch(reduxFormReset('addExpense'));
    })
    .catch(error => console.error(`Error in editExpense action creator: ${error}`));
};

export const deleteExpense = data => (dispatch) => {
  axios.delete(`/api/v1/expenses/${data._id}`, data)
    .then((res) => {
      const expense = res.data;
      dispatch({ type: DELETE_EXPENSE, expense });
    })
    .catch(error => console.error(`Error in deleteExpense action creator: ${error}`));
};

export const getExpenses = expenses => (dispatch) => {
  axios.get('/api/v1/expenses/')
    .then((res) => {
      const data = res.data;
      dispatch({ type: GET_EXPENSES, data });
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

export const getExpenseReport = (start, end) => (dispatch) => {
  axios.get(`/api/v1/report/${start}/${end}`)
  // axios.get(`/api/v1/expenses/report/${start}/${end}`)
    .then((res) => {
      const report = res.data;
      dispatch({ type: GET_REPORT, report });
    })
    .catch(error => console.error(`Error in getExpenses action creator: ${error}`));
};
