import React from 'react';
import TableHeader from './TableHeader';
import TableRowEntry from './TableRowEntry';
import {populateFormFields} from '../../utils/helpers';

import './Table.css';

const Table = ({items, headers, reduxFormChange, formName}) => {
  return (
    <table className="expense-table pt-table pt-striped pt-bordered pt-interactive" >
      <TableHeader headers={headers} />
      <tbody>
        {items.map((item) =>
          <TableRowEntry
            key={item._id}
            item={item}
            handleClick={populateFormFields.bind(this, reduxFormChange, item, 'addExpense')}
            headers={headers}
          />
        )}
      </tbody>
    </table>
  )
}

export default Table;
