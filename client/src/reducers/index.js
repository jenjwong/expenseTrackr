import {combineReducers} from 'redux';
import day from './day';
import { reducer as form } from 'redux-form';

export default combineReducers({form, day});
