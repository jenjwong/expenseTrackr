import React from 'react';
import TableHeader from './TableHeader';
import TableRowEntry from './TableRowEntry';
import { populateFormFields } from '../../utils/helpers';

import './Table.css';

const Table = ({ items = [], headers, reduxFormChange, handleDelete }) => (
  <table className="expense-table pt-table pt-striped pt-bordered pt-interactive" >
    <TableHeader headers={headers} />
    <tbody>
      {items.map((item, i) =>
        <TableRowEntry
          key={`${item._id}-${item.created}-${item.name}-${item.amount}`}
          item={item}
          handleClick={populateFormFields.bind(this, reduxFormChange, item, 'addExpense')}
          handleDelete={handleDelete.bind(this, item)}
          headers={headers}
        />,
        )}
    </tbody>
  </table>
  );

export default Table;
