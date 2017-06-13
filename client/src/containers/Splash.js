import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link} from 'react-router-dom';
import {changeDay} from '../actions/actionCreators';
import Login from './LoginContainer';
import axios from 'axios';

import './Splash.css';

class Splash extends PureComponent {

  componentDidMount() {
    axios.get('/fml').then((e) => console.log(e.data))

  }

  render() {
    let loginRegister = this.props.location.pathname.includes('register') ? 'login' : 'register';

    return (
      <div className="login--wrapper">
        <Login />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Login} />
        <Link to={`/${loginRegister}`}>{loginRegister}</Link> */}
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
