import React from 'react';
import Table from './Table/Table';
import ReportTableTitle from './ReportTableTitle';

import './ReportTable.css';

const ReportTable = ({ expenseReport, format, headers, reduxFormChange, handleDelete, expenseDictionary }) => (
  <div>
    {expenseReport.map(week => (
      <div key={week._id.week}>
        <ReportTableTitle week={week} format={format} />
        <Table
          key={week._id.week}
          items={week.entries.map(entry => expenseDictionary[entry])}
          headers={headers}
          reduxFormChange={reduxFormChange}
          handleDelete={handleDelete}
          formName={'addExpense'}
        />
      </div>
      ))}
  </div>
  );

export default ReportTable;
