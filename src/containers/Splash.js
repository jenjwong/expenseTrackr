import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route} from 'react-router-dom';
import {changeDay} from '../actions/actionCreators';
import Login from './LoginContainer';

import './Splash.css';

class Splash extends PureComponent {

  render() {
    return (
      <div className="login--wrapper">
        <Login />
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
