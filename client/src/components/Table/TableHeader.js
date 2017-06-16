import React from 'react';

const TableHeader = ({headers}) => {
  return (
    <thead>
        {headers.map(header => <th key={header}>{header}</th>)}
    </thead>
  )
}

export default TableHeader;
