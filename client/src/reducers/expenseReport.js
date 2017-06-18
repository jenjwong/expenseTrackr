import {SELECT_EXPENSE, GET_REPORT} from '../actions';

const getExpenseReport = (state=[], action) => [...state, ...action.report];

const expenseReport = (state=[], action) => {
  switch (action.type) {
      case GET_REPORT:
          return getExpenseReport(state, action)
      default:
          return state;
  }
}

export default expenseReport;
