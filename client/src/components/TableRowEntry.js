import React from 'react';

const TableRow = ({expense, selectExpense}) => {
  return (
      <tr onClick={selectExpense}>
        <td>{expense.name}</td>
        <td>{expense.description}</td>
        <td>{expense.type}</td>
        <td>{expense.amount}</td>
      </tr>
  )
}

export default TableRow;
