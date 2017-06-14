import {combineReducers} from 'redux';
import day from './day';
import login from './login';
import { reducer as form } from 'redux-form';

export default combineReducers({form, day, login});
