import axios from 'axios';
import {GET_EXPENSES, ADD_EXPENSE, SELECT_EXPENSE, EDIT_EXPENSE} from '../index';


export const createExpense = (data) => {
  console.log('CREATE', data)
  return (dispatch) => {
    axios.post('/api/v1/expenses',  data)
    .then((res) => {
      let expense = res.data;
      dispatch({ type: ADD_EXPENSE, expense })
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};

export const editExpense = (data) => {
  return (dispatch) => {
    console.log('EDIT', data)
    axios.put(`/api/v1/expenses/${data.id}/edit`,  data)
    .then((res) => {
      let expense = res.data;
      dispatch({ type: EDIT_EXPENSE, expense })
      console.log('EPENS', expense)
    })
    .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
  };
};

export const getExpenses = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses')
    .then((res) => {
      let expenses = res.data;
      dispatch({ type: GET_EXPENSES, expenses })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};

export const getExpensesAdmin = (expenses) => {
  return (dispatch) => {
    axios.get('/api/v1/expenses/admin')
    .then((res) => {
      let expenses = res.data;
      console.log(res.user, res.data)
      dispatch({ type: GET_EXPENSES, expenses })
    })
    .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
  };
};


export const handleExpenseSubmit = (data) => {
    return (dispatch) => {
      data.created === '' ? dispatch(createExpense(data)) : dispatch(editExpense(data));
    }
}



// TODO: delete this
export const selectExpense = (expenseIndex) => {
  return { type: SELECT_EXPENSE, expenseIndex }
};














//
//
//
//
//
//
// import axios from 'axios';
// import {GET_EXPENSES, ADD_EXPENSE, SELECT_EXPENSE} from '../index';
// import { change } from 'redux-form';
//
//
// // TODO: should get response from server with id_number
// export const createExpense = (data) => {
//   return (dispatch) => {
//     axios.post('/api/v1/expenses',  data)
//     .then((res) => {
//       console.log('create expense', data)
//       let expense = res.data;
//       dispatch({ type: ADD_EXPENSE, expense })
//     })
//     .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
//   };
// };
//
// // export const handleExpenseSubmit = (data) => data.created ? editExpense(data) : createExpense(data);
// export const handleExpenseSubmit = (data) => {
//     return (dispatch) => {
//       axios.post('/api/v1/expenses',  data)
//       // data.created ? dispatch(editExpense(data)) : dispatch(createExpense(data));
//     }
// }
//
//
//
// export const editExpense = (data) => {
//   return (dispatch) => {
//     axios.post('/api/v1/expenses',  data)
//     .then((res) => {
//       let expense = res.data;
//       dispatch({ type: ADD_EXPENSE, expense })
//     })
//     .catch((error) => console.error(`Error in createExpense action creator: ${error}`));
//   };
// };
//
// export const getExpenses = (expenses) => {
//   return (dispatch) => {
//     axios.get('/api/v1/expenses')
//     .then((res) => {
//       let expenses = res.data;
//       dispatch({ type: GET_EXPENSES, expenses })
//     })
//     .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
//   };
// };
//
// export const getExpensesAdmin = (expenses) => {
//   return (dispatch) => {
//     axios.get('/api/v1/expenses/admin')
//     .then((res) => {
//       let expenses = res.data;
//       console.log(res.user, res.data)
//       dispatch({ type: GET_EXPENSES, expenses })
//     })
//     .catch((error) => console.error(`Error in getExpenses action creator: ${error}`));
//   };
// };
//
// export const selectExpense = (expenseIndex) => {
//   return { type: SELECT_EXPENSE, expenseIndex }
// };
