import {ADD_EXPENSE, GET_EXPENSES, EDIT_EXPENSE, DELETE_EXPENSE} from '../actions';

const addExpense = (state=[], action) => [...state, action.expense];

const getExpenses = (state=[], action) => [...state, ...action.data.expenses];

const editExpense = (state=[], action) => state.map(item => item._id === action.expense._id ? action.expense : item);

const deleteExpense = (state=[], action) => (
  state.reduce((acc, expense) => {
    expense._id === action.expense._id ? acc : acc.push(expense);
    return acc;
  }, [])
)

const expenses = (state=[], action) => {
  switch (action.type) {
    case GET_EXPENSES:
        return getExpenses(state, action)
    case ADD_EXPENSE:
        return addExpense(state, action)
    case EDIT_EXPENSE:
        return editExpense(state, action)
    case DELETE_EXPENSE:
        return deleteExpense(state, action)
    default:
      return state;
  }
}

export default expenses;
