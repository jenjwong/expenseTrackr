import {ADD_EXPENSE, GET_EXPENSES} from '../actions';

const addExpense = (state=[], action) => {
    return [...state, action.expense];

}

const getExpenses = (state=[], action) => {
  return  [...state, ...action.expenses.stores];
}


const expenses = (state=[], action) => {
  switch (action.type) {
      case GET_EXPENSES:
          return getExpenses(state, action)
      case ADD_EXPENSE:
          return addExpense(state, action)
      default:
          return state;
  }
}



export default expenses;
