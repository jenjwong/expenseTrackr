import React from 'react';
import TableHeader from './TableHeader';
import TableRowEntry from './TableRowEntry';

import './Table.css';

const Table = ({expenses, headers, selectExpense}) => {
  return (
    <table className="expense-table pt-table pt-striped pt-bordered pt-interactive" >
      <TableHeader headers={headers} />
      <tbody>
        {expenses.map((expense, index) => <TableRowEntry key={expense._id} expense={expense} selectExpense={selectExpense.bind(this, index)} />)}
      </tbody>
    </table>
  )
}

export default Table;
