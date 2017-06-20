import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import TableHeader from '../components/Table/TableHeader';
import Table from '../components/Table/Table';

const items = [{ _id: '1223', name: 'Thing I bought', amount: '9', created: '1010', description: 'The Best', type: 'Fabulous' }];

const headers = ['name', 'amount'];

const reduxFormChange = () => 'reduxFormChange';

const handleDelete = () => 'handleDelete';

test('Table should render an row for expense in expenses', () => {
  const component = shallow(<Table headers={['name', 'amount']} item={items} handleDelete={() => <div />} reduxFormChange={() => <div />} />);

  expect(component.find(TableHeader).length).toEqual(1);
});
