import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './FormField';

const submit = ({ firstName='', lastName='', email='' }, submitAction) => {
  let error = {};
  let isError = false;

  if (firstName.trim() === '') {
    error.firstName = 'Required';
    isError = true;
  }

  if (lastName.trim() === '') {
    error.lastName = 'Required';
    isError = true;
  }

  if (email.trim() === '') {
    error.email = 'Required';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(error);
  } else {
    submitAction({firstName, lastName, email});
  }
}

const LoginFunc = ({ handleSubmit, submitAction }) => (
  <form onSubmit={handleSubmit((fields) => submit(fields, submitAction))}>
    <Field name="firstName" label='First Name' component={FormField} type="text"/>
    <Field name="lastName" label='Last Name' component={FormField} type="text"/>
    <Field name="email" label='Email' component={FormField} type="email"/>
    <button type="submit">Submit</button>
  </form>
);

const Login = reduxForm({
  form: 'contact' // a unique name for this form
})(LoginFunc);

export default Login;
