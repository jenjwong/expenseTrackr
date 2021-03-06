import { SubmissionError } from 'redux-form';
import { sanitize } from '../../utils/helpers';

const submit = (props, register) => {
  const sanitizedProps = sanitize(props);
  const { name = '', email = '', password = '' } = sanitizedProps;
  const error = {};
  let isError = false;

  if (name.trim() === '') {
    error.name = 'Please enter name';
    isError = true;
  }

  if (email.trim() === '') {
    error.email = 'Must be valid email';
    isError = true;
  }

  if (password.trim() === '') {
    error.password = 'Please enter password';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    register({ name, email, password });
  }
};

export default submit;
