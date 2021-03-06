import { GET_REPORT_WEEKLY } from '../actions';

// TODO: refactor to use flatted state
const getExpenseReportWeekly = (state = [], action) => ([...action.report]);

const expenseReport = (state = [], action) => {
  switch (action.type) {
    case GET_REPORT_WEEKLY:
      return getExpenseReportWeekly(state, action);
    default:
      return state;
  }
};

export default expenseReport;
