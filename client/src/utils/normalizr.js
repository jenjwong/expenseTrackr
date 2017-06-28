import { Schema, arrayOf } from 'normalizr';

export const expense = new Schema('expenses', { idAttribute: '_id' });
export const arrayOfExpenses = arrayOf(expense);
