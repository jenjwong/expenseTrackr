import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './Main';
import store from '../store';


const App = () => (
  <Router>
    <Provider store={store}>
      <Route path="/" component={Main} />
    </Provider>
  </Router>
  );

export default App;



// store.dispatch({ type: 'ADD_EXPENSE', expense: {'name': 'yay', 'amount': 100} })
// store.dispatch({ type: 'GET_EXPENSES', expenses: {'name': 'thing', 'amount': 5} })
// store.dispatch({ type: 'SELECT_EXPENSE', expenseIndex: 2 })
