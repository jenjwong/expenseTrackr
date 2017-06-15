import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './Form/FormField';
import submit from './Form/expenseFormHelpers';

const AddExpenseFunc = ({ handleSubmit, createExpense}) => (
  <form onSubmit={handleSubmit((fields) => submit(fields, createExpense))}>
    <Field name="date" label='Date' component={FormField} type="date"/>
    <Field name="name" label='Name' component={FormField} type="text"/>
    <Field name="descripton" label='Description' component={FormField} type="text"/>
    <Field name="type" label='Type' component={FormField} type="text"/>
    <Field name="amount" label='Amount' component={FormField} type="number"/>
    <button className="pt-button pt-intent-primary submit-button" type="submit">Submit</button>
  </form>
);

const ExpenseForm = reduxForm({
  form: 'addExpense'
})(AddExpenseFunc);

export default ExpenseForm;
