import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import {isAuth} from '../utils/helpers';

const DEFAULT_STATE = {isAuth: false}

export default class ProtectedLink extends PureComponent {
  state = DEFAULT_STATE;
  componentDidMount(){
    isAuth(this.handleResponse)
  }

  handleResponse = (data) => {
    this.setState({isAuth: data})
  }

  render() {
    return (
      <span>
        {this.state.isAuth && <Link to={`${this.props.protectedPath}`}>Admin</Link> }
      </span>
    )
  }
}
