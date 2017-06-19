import numeral from 'numeral';
import moment from 'moment';

// checks typeof input and formats date and currency accordingly:
export const formatVal = val => moment(val).isValid() && val.includes('-') ? moment(val).format('l') :
  parseInt(val) !== parseInt(val) || val.match(/[a-zA-Z]/) ? val : numeral(val).format('$0,0.00');
