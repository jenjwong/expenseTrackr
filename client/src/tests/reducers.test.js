import reducers from '../reducers';

// test reducer state is minified; beautify json for debugging: https://jsonformatter.curiousconcept.com/
test('root reducer intializes with correct state', () => {
  let state;
  state = reducers({ form: { log: { registeredFields: { email: { name: 'email', type: 'Field', count: 1 }, password: { name: 'password', type: 'Field', count: 1 } }, fields: { email: { visited: true, touched: true }, password: { visited: true, active: true } }, values: { email: 'colinrombough@gmail.com', password: 'foobar' }, anyTouched: true, active: 'password' } }, isLoggedIn: false, expenseIds: [], expenseDictionary: [], expenseReport: [], adminExpenses: [] }, { type: '@@redux-form/BLUR', meta: { form: 'log', field: 'password', touch: true }, payload: 'foobar' });
  expect(state).toEqual({ form: { log: { registeredFields: { email: { name: 'email', type: 'Field', count: 1 }, password: { name: 'password', type: 'Field', count: 1 } }, fields: { email: { visited: true, touched: true }, password: { visited: true, touched: true } }, values: { email: 'colinrombough@gmail.com', password: 'foobar' }, anyTouched: true } }, isLoggedIn: false, expenseIds: [], expenseDictionary: [], expenseReport: [], adminExpenses: [] });
});


test('reducers handle GET_EXPENSE_LIST', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: [], expenseDictionary: {}, expenseReport: [], adminExpenses: [] }, { type: 'GET_EXPENSE_LIST', data: { entities: {}, result: [] } });
  expect(state).toEqual({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: [], expenseDictionary: {}, expenseReport: [], adminExpenses: [] });
});


test('reducers handle MODIFY_EXPENSE_DICTIONARY', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } }, values: { date: '2007-09-28', name: 'Damon Velazquez', description: 'Officia itaque deserunt quia fugit', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', amount: '52', key: '52' }, fields: { date: { touched: true }, name: { touched: true }, description: { touched: true }, type: { touched: true }, amount: { touched: true }, _id: { touched: true }, author: { touched: true }, created: { touched: true } }, anyTouched: true, submitSucceeded: true } }, isLoggedIn: true, expenseIds: ['59552a958c9b38159e276a32'], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] }, { type: '@@redux-form/RESET', meta: { form: 'addExpense' } });
  expect(state).toEqual({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552a958c9b38159e276a32'], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] });
});


test('reducers handle ADD_ONE_EXPENSE_LIST', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } }, values: { date: '2007-09-28', name: 'Damon Velazquez', description: 'Officia itaque deserunt quia fugit', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', amount: '52', key: '52' }, fields: { date: { touched: true }, name: { touched: true }, description: { touched: true }, type: { touched: true }, amount: { touched: true }, _id: { touched: true }, author: { touched: true }, created: { touched: true } }, anyTouched: true, submitSucceeded: true } }, isLoggedIn: true, expenseIds: ['59552a958c9b38159e276a32'], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] }, { type: '@@redux-form/RESET', meta: { form: 'addExpense' } });
  expect(state).toEqual({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552a958c9b38159e276a32'], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] });
});

test('reducers handle DELETE_ONE_EXPENSE_LIST', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552a958c9b38159e276a32'], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] }, { type: 'DELETE_ONE_EXPENSE_LIST', expense: { _id: '59552a958c9b38159e276a32', name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', __v: 0, date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } });
  expect(state).toEqual({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: [], expenseDictionary: { '59552a958c9b38159e276a32': { __v: 0, name: 'Damon Velazquez', type: 'Dolor voluptas quis veritatis voluptatem Nisi est non ipsa possimus unde ea', description: 'Officia itaque deserunt quia fugit', amount: 52, author: '59552a568c9b38159e276a31', _id: '59552a958c9b38159e276a32', date: '2007-09-28T07:00:00.000Z', created: '2017-06-29T16:28:05.957Z' } }, expenseReport: [], adminExpenses: [] });
});

test('reducers handle GET_REPORT_WEEKLY', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552b2d8c9b38159e276a33'], expenseDictionary: { '59552b2d8c9b38159e276a33': { _id: '59552b2d8c9b38159e276a33', name: 'Vanna Sweeney', type: 'Itaque consequuntur eos rem et', description: 'Est hic et voluptas ducimus repudiandae molestias quibusdam aliquid enim suscipit aperiam inventore similique occaecat nihil itaque dolores enim dolor', amount: 74, author: '59552a568c9b38159e276a31', __v: 0, date: '2017-06-03T07:00:00.000Z', created: '2017-06-29T16:30:37.699Z' } }, expenseReport: [], adminExpenses: [] }, { type: 'GET_REPORT_WEEKLY', report: [{ _id: { week: 22, year: 2017 }, total: 74, entries: ['59552b2d8c9b38159e276a33'] }] });
  expect(state).toEqual({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552b2d8c9b38159e276a33'], expenseDictionary: { '59552b2d8c9b38159e276a33': { _id: '59552b2d8c9b38159e276a33', name: 'Vanna Sweeney', type: 'Itaque consequuntur eos rem et', description: 'Est hic et voluptas ducimus repudiandae molestias quibusdam aliquid enim suscipit aperiam inventore similique occaecat nihil itaque dolores enim dolor', amount: 74, author: '59552a568c9b38159e276a31', __v: 0, date: '2017-06-03T07:00:00.000Z', created: '2017-06-29T16:30:37.699Z' } }, expenseReport: [{ _id: { week: 22, year: 2017 }, total: 74, entries: ['59552b2d8c9b38159e276a33'] }], adminExpenses: [] });
});

test('reducers handle LOGOUT', () => {
  let state;
  state = reducers({ form: { addExpense: { registeredFields: { date: { name: 'date', type: 'Field', count: 1 }, name: { name: 'name', type: 'Field', count: 1 }, description: { name: 'description', type: 'Field', count: 1 }, type: { name: 'type', type: 'Field', count: 1 }, amount: { name: 'amount', type: 'Field', count: 1 }, _id: { name: '_id', type: 'Field', count: 1 }, author: { name: 'author', type: 'Field', count: 1 }, created: { name: 'created', type: 'Field', count: 1 } } } }, isLoggedIn: true, expenseIds: ['59552b2d8c9b38159e276a33'], expenseDictionary: { '59552b2d8c9b38159e276a33': { _id: '59552b2d8c9b38159e276a33', name: 'Vanna Sweeney', type: 'Itaque consequuntur eos rem et', description: 'Est hic et voluptas ducimus repudiandae molestias quibusdam aliquid enim suscipit aperiam inventore similique occaecat nihil itaque dolores enim dolor', amount: 74, author: '59552a568c9b38159e276a31', __v: 0, date: '2017-06-03T07:00:00.000Z', created: '2017-06-29T16:30:37.699Z' } }, expenseReport: [], adminExpenses: [] }, { type: 'LOGOUT', bool: true });
  expect(state).toEqual({ form: {}, isLoggedIn: false, expenseIds: [], expenseDictionary: [], expenseReport: [], adminExpenses: [] });
});
