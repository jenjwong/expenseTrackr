import React from 'react';
import TableHeader from './TableHeader';
import TableRowEntry from './TableRowEntry';

import './Table.css';

const Table = ({expenses, headers}) => {
  return (
    <table className="expense-table pt-table pt-striped pt-bordered pt-interactive" >
      <TableHeader headers={headers} />
      <tbody>
        {expenses.map((expense) => <TableRowEntry key={expense._id} expense={expense} />)}
      </tbody>
    </table>
  )
}

export default Table;
