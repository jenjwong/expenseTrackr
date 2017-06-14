import { SubmissionError } from 'redux-form';

const submit = ({ email='', password="" }, login) => {
  let error = {};
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
    return false;
  }
  login({email, password});
}

export default submit;
