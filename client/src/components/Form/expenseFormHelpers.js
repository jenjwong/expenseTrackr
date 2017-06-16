import { SubmissionError } from 'redux-form';
import {Intent} from '@blueprintjs/core';

const submit = ({ name='', date='', type='', description='', amount='', created='', _id='', author='' }, handleExpenseSubmit) => {
  let error = {};
  let isError = false;
  let id = _id;
  //
  // if (name.trim() === '') {
  //   error.name = 'Please enter name';
  //   isError = true;
  // }
  //
  // if (description.trim() === '') {
  //   error.description = 'Must be valid email';
  //   isError = true;
  // }
  //
  // if (date.trim() === '') {
  //   error.date = 'Please enter password';
  //   isError = true;
  // }
  //
  // if (type.trim() === '') {
  //   error.type = 'Please enter password';
  //   isError = true;
  // }
  //
  // if (amount.trim() === '') {
  //   error.amount = 'Please enter password';
  //   isError = true;
  // }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    handleExpenseSubmit({name, date, type, description, amount, id, created });
  }
}

export default submit;
