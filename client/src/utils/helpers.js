import moment from 'moment';

// helper to change all fields of redux-form (functionality doesn't exist in library)

export const formatDateForServer = (timestamp) => moment(timestamp).format('MMM DD YYYY')

export const formatDateForForms =(timestamp) => moment(timestamp).format('YYYY-MM-DD')

export const populateFormFields = (reduxChangeCB, data, formName) => {
  Object.keys(data).forEach(field => {
    let val = field === 'date' ? formatDateForForms(data[field]) : data[field];
    reduxChangeCB(formName, field, val)
  })
}

export const centsToDollars = (val) => Math.floor(val / 100);
