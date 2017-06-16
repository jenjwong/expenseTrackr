import React from 'react';

const TableRow = ({expense}) => {
  console.log(expense)
  return (
      <tr>
        <td>{expense.name}</td>
        <td>{expense.description}</td>
        <td>{expense.type}</td>
        <td>{expense.amount}</td>
      </tr>
  )
}

export default TableRow;
