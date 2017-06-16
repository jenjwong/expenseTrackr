import {SELECT_EXPENSE} from '../actions';

const selectExpense = (state=-1, action) => {
  return  action.expenseIndex;
}


const selectedExpense = (state=-1, action) => {
  switch (action.type) {
      case SELECT_EXPENSE:
          return selectExpense(state, action)
      default:
          return state;
  }
}



export default selectedExpense;
