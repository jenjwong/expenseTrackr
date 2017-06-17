import axios from 'axios';
import {GET_EXPENSES, ADD_EXPENSE, SELECT_EXPENSE, EDIT_EXPENSE, DELETE_EXPENSE, GET_REPORT} from '../index';
import {formatDateForServer} from '../../utils/helpers';

export const handleExpenseSubmit = (data) => {
  console.log(data)
  // handles timezones one day off error
  return (dispatch) => {
    // data.date = formatDateForServer(data.date);
    data.id === '' ? dispatch(createExpense(data)) : dispatch(editExpense(data));
  }
}

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

export const editExpense = (data) => {
  return (dispatch) => {
    axios.put(`/api/v1/expenses/${data.id}/edit`,  data)
    .then((res) => {
      let expense = res.data;
      dispatch({ type: EDIT_EXPENSE, expense })
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};

export const deleteExpense = (data) => {
  return (dispatch) => {
    axios.delete(`/api/v1/expenses/${data._id}`,  data)
    .then((res) => {
      let expense = res.data;
      dispatch({ type: DELETE_EXPENSE, expense })
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};

export const getExpenses = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses/')
    .then((res) => {
      let data = res.data;
      dispatch({ type: GET_EXPENSES, data })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};

export const getExpensesAdmin = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses/admin')
    .then((res) => {
      let expenses = res.data;
      dispatch({ type: GET_EXPENSES, expenses })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};


export const getExpenseReport = (start, end) => {
  console.log('THIS IS ACTION CONTROLLER REPORT')
  return (dispatch) => {
    axios.get(`/api/v1/expenses/report/${start}/${end}`)
    .then((res) => {
      let report = res.data;
      console.log(report, 'this is report')
      dispatch({ type: GET_REPORT, report })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};
