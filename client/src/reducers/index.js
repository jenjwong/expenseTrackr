import {combineReducers} from 'redux';
import day from './day';
import isLoggedIn from './login';
import { reducer as form } from 'redux-form';

export default combineReducers({form, day, isLoggedIn});
