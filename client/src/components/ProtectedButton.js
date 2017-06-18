

import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import {isAuth} from '../utils/helpers';

const securePath = 'admin'


const DEFAULT_STATE = {isAuth: true}

export default class ProtectedButton extends PureComponent {
  state = DEFAULT_STATE;
  componentDidMount(){
    // check to see if user is logged-in
    isAuth(this.handleResponse)
  }

  handleResponse = (data) => {
    this.setState({isAuth: data})
  }

  render() {
    console.log("THIS IS STATE", this.state)
    return (
      <div>
        {this.state.isAuth && <button className="pt-button pt-minimal pt-icon-home"><Link to={`/${securePath}`}>Admin Link</Link></button>}

      </div>
    )
  }
}
