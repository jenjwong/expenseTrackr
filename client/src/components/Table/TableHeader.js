import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(header => <th key={header} className={header.toLowerCase()}>{header}</th>)}
    </tr>
  </thead>
  );

export default TableHeader;
