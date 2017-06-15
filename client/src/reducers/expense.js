import {ADD_EXPENSE} from '../actions';

const expense = (state={}, action) => {
  console.log('ESPENSE REDUCER', action)
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                id: action.expense.id,
                name: action.expense.name,
                description: action.expense.description,
                type: action.expense.type,
                date: action.expense.date,
                amount: action.expense.amount,
            };
        default:
            return state;
    }
};

const expenses = (state=[], action) => {
  console.log(action, 'hit')
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,
                expense(undefined, action),
            ];
        default:
            return state;
    }
};

export default expenses;
