import React from 'react';
import TableCell from './TableCell';

// maps over headers to populate cells; insures correct orders

const TableRow = ({item, handleClick, headers}) => {
  return (
      <tr onClick={handleClick}>
        {headers.map(key=> <TableCell key={`${item._id}${key}`} item={`${item[key.toLowerCase()]}`} />)}
      </tr>
  )
}

export default TableRow;
