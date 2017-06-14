import React, { PureComponent } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './FormField';
import PasswordField from './PasswordField';


const submit = ({ email='', password="" }, login) => {
  let error = {};
  let isError = false;

  if (email.trim() === '') {
    error.email = 'Required';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
    return false;
  }
  login({email, password});
}

class LoginFunc extends PureComponent {


  render() {
    let { handleSubmit, login, changeDay } = this.props;
    return (
      <form onSubmit={handleSubmit((fields) => submit(fields, login))}>
        <Field name="email" label='Email' component={FormField} type="email"/>
        <Field name="password" label='Password' component={PasswordField} type="text"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}


const Login = reduxForm({
  form: 'log'
})(LoginFunc);

export default Login;
