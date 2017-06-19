import {GET_EXPENSES_ADMIN} from '../actions';

const getAllExpenses = (state=[], action) => [...state, ...action.expenses];

const adminExpenses = (state=[], action) => {
  switch (action.type) {
    case GET_EXPENSES_ADMIN:
      return getAllExpenses(state, action)
    default:
      return state;
  }
}

export default adminExpenses;
