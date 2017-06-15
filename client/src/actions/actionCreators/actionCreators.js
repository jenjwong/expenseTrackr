import axios from 'axios';
import {CHANGE_DAY, REQUEST_SUBMIT, LOGIN_SUCCESS} from '../index';
const ROOT_URL = '/api/v1/login';

export const changeDay = (day) => {
  return {
    type: CHANGE_DAY, day,

  }
};

// export const submitAction = (data) => {
//   return {
//     type: REQUEST_SUBMIT, data
//   }
// }
