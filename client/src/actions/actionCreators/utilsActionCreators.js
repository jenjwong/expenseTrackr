import axios from 'axios';
import {CHANGE_DAY} from '../index';
import { change } from 'redux-form';

export const changeDay = (day) => ({ type: CHANGE_DAY, day })

export const reduxFormChange = change;
