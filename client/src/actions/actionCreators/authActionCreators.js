import axios from 'axios';
import { LOGIN_SUCCESS, LOGOUT } from '../index';
import {setLocalStorage, removeLocalStorage} from '../../utils/localStorage';

export const login = data => (dispatch) => {
  axios.post('/api/v1/login', data)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, bool: true });
      setLocalStorage();
    })
    .catch(error => dispatch({ type: LOGIN_SUCCESS, bool: false }));
};

export const logout = data => (dispatch) => {
  axios.get('/api/v1/logout', data)
    .then(() => {
      removeLocalStorage();
      dispatch({ type: LOGOUT, bool: true });
    })
    .catch(error => dispatch({ type: LOGIN_SUCCESS, bool: true }));
};

export const register = data => (dispatch) => {
  axios.post('/api/v1/register', data)
    .then(() => {
      dispatch({ type: LOGIN_SUCCESS, bool: true });
      setLocalStorage();
    })
    .catch(error => dispatch({ type: LOGIN_SUCCESS, bool: false }));
};
