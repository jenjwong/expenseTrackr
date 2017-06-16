import {ADD_EXPENSE, GET_EXPENSES, EDIT_EXPENSE} from '../actions';

const addExpense = (state=[], action) => [...state, action.expense];

const getExpenses = (state=[], action) => [...state, ...action.expenses.stores];

// const addExpense = (state=[], action) => {
//     return [...state, action.expense];
//
// }
//
// const getExpenses = (state=[], action) => {
//   return  [...state, ...action.expenses.stores];
// }

const editExpense = (state=[], action) => state.map(item => item._id === action.expense._id ? action.expense : item);


const expenses = (state=[], action) => {
  switch (action.type) {
      case GET_EXPENSES:
          return getExpenses(state, action)
      case ADD_EXPENSE:
          return addExpense(state, action)
      case EDIT_EXPENSE:
          return editExpense(state, action)
      default:
          return state;
  }
}



export default expenses;
