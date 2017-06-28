import { GET_REPORT_WEEKLY } from '../actions';


const getExpenseReportWeekly = (state = [], action) => ([ ...state,  ...action.report ]);


const expenseReport = (state = {}, action) => {
  switch (action.type) {
    case GET_REPORT_WEEKLY:
      return getExpenseReportWeekly(state, action);
    default:
      return state;
  }
};

export default expenseReport;
