import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route, Link, Miss} from 'react-router-dom';
import {changeDay} from '../actions/actionCreators';
import Login from './LoginContainer';
import Register from './RegisterContainer';

import './Splash.css';

class Dashboard extends PureComponent {


  render() {
    let loginRegister = this.props.location.pathname.includes('register') ? 'login' : 'register';

    return (
      <div className="login--wrapper">
        This is dash
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
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


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
