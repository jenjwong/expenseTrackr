import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './Form/FormField';
import submit from './Form/loginHelpers';

const LoginFunc = ({ handleSubmit, login }) => (
  <form onSubmit={handleSubmit(fields => submit(fields, login))}>
    <Field name="email" label="Email" component={FormField} type="email" />
    <Field name="password" label="Password" component={FormField} type="password" />
    <button className="pt-button pt-intent-primary submit-button" type="submit">Submit</button>
  </form>
);

const Login = reduxForm({
  form: 'log',
})(LoginFunc);

export default Login;
