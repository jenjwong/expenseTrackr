import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TableRow from '../components/Table/TableRowEntry';
import TableCell from '../components/Table/TableCell';

const items = [{ _id: '1223', name: 'Thing I bought', amount: '9', description: 'The Best', type: 'Fabulous' }, { _id: '1223', name: 'Thing I bought', amount: '9', description: 'The Best' }];

const headers = ['name', 'amount'];

const reduxFormChange = 'reduxFormChange';

test('Tablerow should render cell for expense in expenses', () => {
  const component = shallow(<TableRow headers={['name', 'amount']} item={{ name: 'test', _id: '123', amount: 5 }} handleDelete="handleDelete" handleClick="handleClick" />);

  expect(component.find(TableCell).length).toEqual(2);
});
