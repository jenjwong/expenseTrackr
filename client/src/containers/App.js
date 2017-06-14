import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Splash from './Splash';
import Dashboard from './Dashboard';
import store from '../store';

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/" component={Splash} />
        <Route path="/admin" component={Splash} />
      </div>
    </Provider>
  </Router>
  );

export default App;

// store.dispatch({ type: 'LOGIN_SUCCESS', bool: true })
