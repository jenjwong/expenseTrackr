import { MILLISECONDS_DAY } from '../utils/constants';
import { CHANGE_DAY } from '../actions';

const day = (state = Date.now(), action) => {
  switch (action.type) {
    case CHANGE_DAY:
      return state + (MILLISECONDS_DAY * action.day);
    default:
      return state;
  }
};

export default day;
