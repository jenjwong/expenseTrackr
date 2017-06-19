import moment from 'moment';
import axios from 'axios';
import numeral from 'numeral';


export const formatDateForServer = (timestamp) => moment(timestamp).format('MMM DD YYYY')

export const formatDateForForms =(timestamp) => moment(timestamp).format('YYYY-MM-DD')

// helper to change all fields of redux-form (functionality doesn't exist in library)
export const populateFormFields = (reduxChangeCB, data, formName) => {
  Object.keys(data).forEach(field => {
    let val = field === 'date' ? formatDateForForms(data[field]) : data[field];
    reduxChangeCB(formName, field, val)
  })
}

export const isAuth = (handleData) => {
  axios.get('/api/v1/login/admin')
  .then((res) => {
    let data = res.data;
    handleData(data)
  })
  .catch((error) => console.error(`Error in isAuth helper function: ${error}`));
};

export const formatVal = (input) => {
  let fVal = input.toString();
  return moment(fVal).isValid() && fVal.includes('-') ? moment(fVal).format('l') :
  parseInt(fVal) !== parseInt(fVal) || fVal.match(/[a-zA-Z]/) ? fVal : numeral(fVal).format('$0,0.00');
}
