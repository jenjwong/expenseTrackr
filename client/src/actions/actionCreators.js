import axios from 'axios';
import {CHANGE_DAY, REQUEST_SUBMIT} from './index';

export const changeDay = (day) => ({
  type: CHANGE_DAY, day,
});

export const submitAction = (data) => ({
  type: REQUEST_SUBMIT, data
})


// api/v1/login
// const ROOT_URL = `http://localhost:3000/${API_KEY}`;
//
// export const FETCH_WEATHER = 'FETCH_WEATHER';
//
// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us`;
//   const request = axios.get(url);
//
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }
