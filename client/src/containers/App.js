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

store.dispatch({ type: 'ADD_EXPENSE', expense: {'name': 'yay', 'amount': 5} })
