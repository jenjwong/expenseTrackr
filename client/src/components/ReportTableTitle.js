import React from 'react';
import moment from 'moment';
import Table from './Table/Table';

// import './ReportTable.css';

const ReportTableTitle = ({ week, format }) => {
  const start = moment(`${week._id.year}`).add(`${week._id.week}`, 'weeks').startOf('week').format('ddd MMM Do');
  const end = moment(`${week._id.year}`).add(`${week._id.week}`, 'weeks').endOf('week').format('ddd MMM Do YYYY');
  const total = `Total: ${format(week.total)}`;

  return (
    <div
      className="report-table--title pt-callout pt-intent-primary"
      key={`${week._id.week}${week._id.year}`}
    >
      {start}-{end}

      <span className="report-table--title-total" >{total}</span>
    </div>
  );
};

export default ReportTableTitle;
