import moment from 'moment';
import axios from 'axios';
import numeral from 'numeral';
import DOMPurify from 'dompurify';


export const formatDateForServer = timestamp => {
  const [year, month, day] = timestamp.split('-');
  const date = new Date(`${month}-${day}-${year}`);
  return moment(date).format('MMM DD YYYY');
}

export const formatDateForForms = timestamp => moment(timestamp).format('YYYY-MM-DD');

// updates all fields of redux-form to given values (functionality doesn't exist in library)
export const populateFormFields = (reduxChangeCB, data, formName) => {
  Object.keys(data).forEach((field) => {
    const val = field === 'date' ? formatDateForForms(data[field]) : data[field];
    reduxChangeCB(formName, field, val);
  });
};

export const isAuth = (handleData) => {
  axios.get('/api/v1/login/admin')
  .then((res) => {
    const data = res.data;
    handleData(data);
  })
  .catch(error => console.error(`Error in isAuth helper function: ${error}`));
};

// formats dates and dollars for display (more robust wtih moment(fVal).isValid() but throws warning)
export const formatVal = (input) => {
  const fVal = input.toString();
  return fVal.includes('-') && fVal.includes(':') ? moment(fVal).format('l') :
  parseInt(fVal, 10) !== parseInt(fVal, 10) || fVal.match(/[a-zA-Z]/) ? fVal : numeral(fVal).format('$0,0.00');
};

// sanitizes DOM input
export const sanitize = (dirty) => {
  const sanitized = dirty;
  Object.keys(dirty).forEach((key) => {
    sanitized.key = DOMPurify.sanitize(dirty[key]);
  });
  return sanitized;
};
