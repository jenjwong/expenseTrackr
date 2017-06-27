import numeral from 'numeral';
import moment from 'moment';

// formats dates and dollars for display (more robust wtih moment(fVal).isValid() but throws warning)
export const formatVal = val => val.includes('-') && val.includes(':') ? moment(val).format('l') :
  parseInt(val, 10) !== parseInt(val, 10) || val.match(/[a-zA-Z]/) ? val : numeral(val).format('$0,0.00');
