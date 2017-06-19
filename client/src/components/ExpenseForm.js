import React from 'react';
import { Field, reduxForm } from 'redux-form';
import FormField from './Form/FormField';
import MetaFormField from './Form/MetaFormField';
import submit from './Form/expenseFormHelpers';

import './ExpenseForm.css';

// meta fields allow for reuse of redux forms;

const AddExpenseFunc = ({ handleSubmit, handleExpenseSubmit }) => (
  <form onSubmit={handleSubmit(fields => submit(fields, handleExpenseSubmit))}>
    <div className="expense-form--content--wrapper ">
      <Field name="date" label="Date" component={FormField} type="date" />
      <Field name="name" label="Name" component={FormField} type="text" />
      <Field name="description" label="Description" component={FormField} type="text" />
      <Field name="type" label="Type" component={FormField} type="text" />
      <Field name="amount" label="Amount" component={FormField} type="number" />
      <Field className="display-none" name="_id" component={MetaFormField} type="text" />
      <Field className="display-none" name="author" component={MetaFormField} type="text" />
      <Field className="display-none" name="created" component={MetaFormField} type="text" />
      <button className="pt-button pt-intent-primary expense-form--button" type="submit">Submit</button>
    </div>
  </form>
  );

const ExpenseForm = reduxForm({
  form: 'addExpense',
})(AddExpenseFunc);

export default ExpenseForm;
