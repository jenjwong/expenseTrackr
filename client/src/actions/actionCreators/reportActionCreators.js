import axios from 'axios';
import { GET_REPORT_WEEKLY } from '../index';

export const getExpenseReportWeekly = (start, end) => (dispatch) => {
  axios.get(`/api/v1/report/weekly/${start}/${end}`)
    .then((res) => {
      const report = res.data;
      dispatch({ type: GET_REPORT_WEEKLY, report });
    })
    .catch(error => console.error(`Error in getExpenses action creator: ${error}`));
};
