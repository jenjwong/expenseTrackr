import { ADD_ONE_EXPENSE_LIST, GET_EXPENSE_LIST, DELETE_ONE_EXPENSE_LIST } from '../actions';

const getAllExpenses = (state = [], action) => [...state, ...action.data.result];

const addExpense = (state = [], action) => [action.expense._id, ...state];

const deleteExpense = (state = [], action) => (
  state.reduce((itemIds, itemId) => {
    if (itemId === action.expense._id) {
      return itemIds;
    }
    itemIds.push(itemId);
    return itemIds;
  }, [])
);

const expenseList = (state = [], action) => {
  switch (action.type) {
    case ADD_ONE_EXPENSE_LIST:
      return addExpense(state, action);
    case GET_EXPENSE_LIST:
      return getAllExpenses(state, action);
    case DELETE_ONE_EXPENSE_LIST:
      return deleteExpense(state, action);
    default:
      return state;
  }
};

export default expenseList;
