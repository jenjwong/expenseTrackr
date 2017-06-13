import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Splash from './Splash';
import store from '../store';

const App = () => (
  <Router>
    <Provider store={store}>
      <div>
        <Route path="/" component={Splash} />
        <Route path="/dashboard" component={Splash} />
        <Route path="/admin" component={Splash} />
      </div>
    </Provider>
  </Router>
  );

export default App;
