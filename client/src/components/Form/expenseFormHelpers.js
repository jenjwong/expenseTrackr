import { SubmissionError } from 'redux-form';
import { formatDateForServer, sanitize } from '../../utils/helpers';

const submit = (props, handleExpenseSubmit) => {
  const sanitizedProps = sanitize(props);
  let { name = '', date = '', type = '', description = '', amount = '', _id = '', created = undefined } = sanitizedProps;

  const error = {};
  let isError = false;
  const id = _id;

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
  if (date !== '') {
    date = formatDateForServer(date);
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    handleExpenseSubmit({ name, date, type, description, amount, id, created });
  }
};

export default submit;
