import {combineReducers} from 'redux';
import day from './day';
import isLoggedIn from './login';
import expenses from './expense';
import { reducer as form } from 'redux-form';

export default combineReducers({form, day, isLoggedIn, expenses});
