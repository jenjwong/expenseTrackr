import React from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './LoginContainer';
import Register from './RegisterContainer';
import Background from '../components/Background';

import './Splash.css';

const Splash = (props) => {
  const loginRegister = props.location.pathname.includes('register') ? 'login' : 'register';
  return (
    <Background img={'https://images.unsplash.com/photo-1459257831348-f0cdd359235f'} >
      <div className="pt-card splash--card pt-elevation-2">
        <div className="splash--card-content">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
        <div className="splash--card--nav">
          <Link to={`/${loginRegister}`}>{loginRegister}</Link>
        </div>
      </div>
    </Background>
  );
};

export default Splash;
