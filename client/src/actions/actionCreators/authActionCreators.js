import axios from 'axios';
import {LOGIN_SUCCESS, ADD_EXPENSE} from '../index';

export const login = (data) => {
  return (dispatch) => {
    axios.post('/api/v1/login',  data)
    .then((res) => {
      console.log(res, 'LOGIN RES')
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
