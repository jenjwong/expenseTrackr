import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './Form/FormField';
import submit from './Form/registerHelpers';

const RegisterFunc = ({ handleSubmit, register }) => (
  <form onSubmit={handleSubmit((fields) => submit(fields, register))}>
    <Field name="name" label='Name' component={FormField} type="text"/>
    <Field name="email" label='Email' component={FormField} type="email"/>
    <Field name="password" label='Password' component={FormField} type="password"/>
    <button className="pt-button pt-intent-primary submit-button" type="submit">Submit</button>
  </form>
);

const Register = reduxForm({
  form: 'register'
})(RegisterFunc);

export default Register;
