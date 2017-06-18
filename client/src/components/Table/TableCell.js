import React from 'react';
import {formatVal} from './TableHelpers'; 

const TableCell = ({item}) => <td>{formatVal(item)}</td>

export default TableCell;
