import { LOGIN_SUCCESS } from '../actions';

const login = (state = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.bool;
    default:
      return state;
  }
};

export default login;
