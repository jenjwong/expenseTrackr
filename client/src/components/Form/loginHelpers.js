import { SubmissionError } from 'redux-form';
import { sanitize } from '../../utils/helpers';

const submit = (props, login) => {
  const sanitizedProps = sanitize(props);
  const { email = '', password = '' } = sanitizedProps;
  const error = {};
  let isError = false;

  if (email.trim() === '') {
    error.email = 'Please enter email';
    isError = true;
  }

  if (password.trim() === '') {
    error.password = 'Please enter password';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  }
  login({ email, password });
};

export default submit;
