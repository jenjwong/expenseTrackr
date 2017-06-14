import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {changeDay} from '../actions/actionCreators';
import Login from './LoginContainer';
import Register from './RegisterContainer';
import axios from 'axios';

import './Splash.css';

class Splash extends PureComponent {

  componentDidMount() {
    axios.get('/x').then((e) => console.log(e.data))
    axios.post('/register', { email: 'qqxcxcxzczcxczcxzqq@me.com', name: 'xxxxxxxqqqjenjwong', password: 'jkjj'})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }

  render() {
    let loginRegister = this.props.location.pathname.includes('register') ? 'login' : 'register';

    return (
      <div className="login--wrapper">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Link to={`/${loginRegister}`}>{loginRegister}</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  day: state.day,
});

const mapDispatchToProps = (dispatch) => ({
  changeDay: bindActionCreators(changeDay, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
