import numeral from 'numeral';
import moment from 'moment';
import {compose} from 'lodash';

// const pipe = functions => data => {
//   return functions.reduce(
//     (value, func) => func(value),
//     data
//   );
// };
//

// checks typeof input and formats accordingly
// export const formatVal = (val) => {
//   if (moment(val).isValid() && val.includes('-')) {
//     return moment(val).format('l')
//   } else if (parseInt(val) === parseInt(val)) {
//     return numeral(val).format('$0,0.00')
//   }
//   return val;
// }
export const formatVal = (val) => {
  return moment(val).isValid() && val.includes('-') ? moment(val).format('l') :
  parseInt(val) !== parseInt(val) ? val : numeral(val).format('$0,0.00');
}
