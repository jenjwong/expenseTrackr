import { SubmissionError } from 'redux-form';

const submit = ({ name='', date='', type='', description='', amount='' }, createExpense) => {
  // let error = {};
  // let isError = false;
  //
  // if (name.trim() === '') {
  //   error.name = 'Please enter name';
  //   isError = true;
  // }
  //
  // if (descripton.trim() === '') {
  //   error.descripton = 'Must be valid email';
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
  createExpense({name, date, description, amount, type});

  // if (isError) {
  //   throw new SubmissionError(error);
  // } else {
  //   addEvent({name, date, descripton, amount, type});
  // }
}

export default submit;
