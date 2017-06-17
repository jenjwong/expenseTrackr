import { SubmissionError } from 'redux-form';

const submit = (props, handleExpenseSubmit) => {
  let { name='', date='', type='', description='', amount='', _id='', author='', created=undefined } = props;
  let error = {};
  let isError = false;
  let id = _id;

  if (name.trim() === '') {
    error.name = 'Please enter name';
    isError = true;
  }

  if (description.trim() === '') {
    error.description = 'Must be valid email';
    isError = true;
  }

  if (date.trim() === '') {
    error.date = 'Please enter date';
    isError = true;
  }

  if (type.trim() === '') {
    error.type = 'Please enter a type';
    isError = true;
  }

  if (amount.toString().trim() === '') {
    error.amount = 'Please enter an amount';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    handleExpenseSubmit({ name, date, type, description, amount, id, created });
  }
}

export default submit;
