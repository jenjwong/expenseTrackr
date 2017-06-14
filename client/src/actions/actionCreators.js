import axios from 'axios';
import {CHANGE_DAY, REQUEST_SUBMIT, LOGIN_SUCCESS} from './index';
const ROOT_URL = '/api/v1/login';

export const changeDay = (day) => {
  return {
    type: CHANGE_DAY, day,

  }
};

export const submitAction = (data) => {
  return {
    type: REQUEST_SUBMIT, data
  }
}

export const login = (data) => {
  const url = `${ROOT_URL}`;
  let isSuccess;
  axios.post('/api/v1/register',  { name: 'notAdmin', password: 'u', email: 'xxxx@uvic.ca', admin: 'true' })
  .then((res) => {
    isSuccess = true;
  })
  .catch((error) => {
    isSuccess = false;
  })
  return isSuccess ? { type: LOGIN_SUCCESS, bool: true } : { type: LOGIN_SUCCESS, bool: false }
}
