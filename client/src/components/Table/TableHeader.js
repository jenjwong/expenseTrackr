import React from 'react';

const TableHeader = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(header => <th key={header}>{header}</th>)}
    </tr>
  </thead>
  );

export default TableHeader;
