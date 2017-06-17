import React from 'react';
import TableCell from './TableCell';

// maps over headers to populate cells; insures correct orders

const TableRow = ({item, handleClick, headers, handleDelete}) => {
  return (
      <tr className="table--row" onClick={handleClick}>
        {headers.map(key=> <TableCell key={`${item._id}${key}`} item={`${item[key.toLowerCase()]}`} />)}
        <td className="table--row--delete pt-icon-trash" onClick={handleDelete}></td>
      </tr>
  )
}

export default TableRow;
