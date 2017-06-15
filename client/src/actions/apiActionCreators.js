import axios from 'axios';
import {LOGIN_SUCCESS, ADD_EXPENSE} from './index';

export const login = (data) => {
  return (dispatch) => {
    axios.post('/api/v1/register',  data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, bool: true })
    })
    .catch((error) => dispatch({ type: LOGIN_SUCCESS, bool: false }));
  };
};

export const logout = (data) => {
  return (dispatch) => {
    axios.get('/api/v1/logout',  data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, bool: false })
    })
    .catch((error) => dispatch({ type: LOGIN_SUCCESS, bool: true }));
  };
};

export const register = (data) => {
  return (dispatch) => {
    axios.post('/api/v1/register',  data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, bool: true })
    })
    .catch((error) => dispatch({ type: LOGIN_SUCCESS, bool: false }));
  };
};

// TODO: should get response from server with id_number
export const createExpense = (expense) => {
  return (dispatch) => {
    axios.post('/api/v1/expenses',  expense)
    .then((res) => {
      dispatch({ type: ADD_EXPENSE, expense })
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};
