import moment from 'moment';
import axios from 'axios';

// helper to change all fields of redux-form (functionality doesn't exist in library)

export const formatDateForServer = (timestamp) => moment(timestamp).format('MMM DD YYYY')

export const formatDateForForms =(timestamp) => moment(timestamp).format('YYYY-MM-DD')

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
