import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import FormField from './Form/FormField';
import MetaFormField from './Form/MetaFormField';
import submit from './Form/expenseFormHelpers';

// meta fields allow for reuse of redux forms; labels are removed for screen readers

const AddExpenseFunc = ({ handleSubmit, createExpense}) => {
  console.log(createExpense)
  return (
    <form onSubmit={handleSubmit((fields) => submit(fields, createExpense))}>
      <Field name="date" label='Date' component={FormField} type="date"/>
      <Field name="name" label='Name' component={FormField} type="text"/>
      <Field name="description" label='Description' component={FormField} type="text"/>
      <Field name="type" label='Type' component={FormField} type="text"/>
      <Field name="amount" label='Amount' component={FormField} type="number"/>
      <Field className="display-none" name="_id"  component={MetaFormField} type="text"/>
      <Field className="display-none" name="author"  component={MetaFormField} type="text"/>
      <Field className="display-none" name="created"  component={MetaFormField} type="text"/>
      <button className="pt-button pt-intent-primary submit-button" type="submit">Submit</button>
    </form>
  )
};

const ExpenseForm = reduxForm({
  form: 'addExpense'
})(AddExpenseFunc);

export default ExpenseForm;
