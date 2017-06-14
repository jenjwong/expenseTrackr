import axios from 'axios';
import {LOGIN_SUCCESS} from './index';

export const login = (data) => {
  return (dispatch) => {
    axios.post('/register',  data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, bool: true })
      // history.pushState('/new')
    })
    .catch((error) => dispatch({ type: LOGIN_SUCCESS, bool: false }));
  };
};

export const register = (data) => {
  return (dispatch) => {
    axios.post('/register',  data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, bool: true })
      // history.pushState('/new')
    })
    .catch((error) => dispatch({ type: LOGIN_SUCCESS, bool: false }));
  };
};
