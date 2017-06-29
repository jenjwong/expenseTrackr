import { MODIFY_EXPENSE_DICTIONARY } from '../actions';

const modifyExpenseDictionary = (state = [], action) => ({ ...state, ...action.data.entities.expenses });

const expenseDictionary = (state = [], action) => {
  switch (action.type) {
    case MODIFY_EXPENSE_DICTIONARY:
      return modifyExpenseDictionary(state, action);
    default:
      return state;
  }
};

export default expenseDictionary;
