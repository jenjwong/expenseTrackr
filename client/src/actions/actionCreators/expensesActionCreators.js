import axios from 'axios';
import {GET_EXPENSES, ADD_EXPENSE, SELECT_EXPENSE} from '../index';

// TODO: should get response from server with id_number
export const createExpense = (data) => {
  return (dispatch) => {
    axios.post('/api/v1/expenses',  data)
    .then((res) => {
      let expense = res.data;
      dispatch({ type: ADD_EXPENSE, expense })
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};

export const getExpenses = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses')
    .then((res) => {
      let expenses = res.data;
      dispatch({ type: GET_EXPENSES, expenses })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};

export const getExpensesAdmin = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses/admin')
    .then((res) => {
      let expenses = res.data;
      console.log(res.user, res.data)
      dispatch({ type: GET_EXPENSES, expenses })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};

export const selectExpense = (expenseIndex) => {
  return { type: SELECT_EXPENSE, expenseIndex }
};
