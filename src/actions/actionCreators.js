import {CHANGE_DAY, REQUEST_SUBMIT} from './index';

export const changeDay = (day) => ({
  type: CHANGE_DAY, day,
});

export const submitAction = (data) => ({
  type: REQUEST_SUBMIT, data
})
